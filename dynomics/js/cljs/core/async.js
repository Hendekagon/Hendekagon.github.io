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
var args286017 = [];
var len__36461__auto___286046 = arguments.length;
var i__36462__auto___286047 = (0);
while(true){
if((i__36462__auto___286047 < len__36461__auto___286046)){
args286017.push((arguments[i__36462__auto___286047]));

var G__286048 = (i__36462__auto___286047 + (1));
i__36462__auto___286047 = G__286048;
continue;
} else {
}
break;
}

var G__286020 = args286017.length;
switch (G__286020) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286017.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async286021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async286021 = (function (f,blockable,meta286022){
this.f = f;
this.blockable = blockable;
this.meta286022 = meta286022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async286021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_286023,meta286022__$1){
var self__ = this;
var _286023__$1 = this;
return (new cljs.core.async.t_cljs$core$async286021(self__.f,self__.blockable,meta286022__$1));
});

cljs.core.async.t_cljs$core$async286021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_286023){
var self__ = this;
var _286023__$1 = this;
return self__.meta286022;
});

cljs.core.async.t_cljs$core$async286021.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async286021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async286021.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async286021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async286021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta286022","meta286022",-1388764494,null)], null);
});

cljs.core.async.t_cljs$core$async286021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async286021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async286021";

cljs.core.async.t_cljs$core$async286021.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async286021");
});

cljs.core.async.__GT_t_cljs$core$async286021 = (function cljs$core$async$__GT_t_cljs$core$async286021(f__$1,blockable__$1,meta286022){
return (new cljs.core.async.t_cljs$core$async286021(f__$1,blockable__$1,meta286022));
});

}

return (new cljs.core.async.t_cljs$core$async286021(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args286083 = [];
var len__36461__auto___286108 = arguments.length;
var i__36462__auto___286109 = (0);
while(true){
if((i__36462__auto___286109 < len__36461__auto___286108)){
args286083.push((arguments[i__36462__auto___286109]));

var G__286110 = (i__36462__auto___286109 + (1));
i__36462__auto___286109 = G__286110;
continue;
} else {
}
break;
}

var G__286093 = args286083.length;
switch (G__286093) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286083.length)].join('')));

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
var args286112 = [];
var len__36461__auto___286120 = arguments.length;
var i__36462__auto___286121 = (0);
while(true){
if((i__36462__auto___286121 < len__36461__auto___286120)){
args286112.push((arguments[i__36462__auto___286121]));

var G__286122 = (i__36462__auto___286121 + (1));
i__36462__auto___286121 = G__286122;
continue;
} else {
}
break;
}

var G__286116 = args286112.length;
switch (G__286116) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286112.length)].join('')));

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
var args286124 = [];
var len__36461__auto___286130 = arguments.length;
var i__36462__auto___286131 = (0);
while(true){
if((i__36462__auto___286131 < len__36461__auto___286130)){
args286124.push((arguments[i__36462__auto___286131]));

var G__286132 = (i__36462__auto___286131 + (1));
i__36462__auto___286131 = G__286132;
continue;
} else {
}
break;
}

var G__286129 = args286124.length;
switch (G__286129) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286124.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_286137 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_286137);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_286137,ret){
return (function (){
return fn1.call(null,val_286137);
});})(val_286137,ret))
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
var args286141 = [];
var len__36461__auto___286153 = arguments.length;
var i__36462__auto___286154 = (0);
while(true){
if((i__36462__auto___286154 < len__36461__auto___286153)){
args286141.push((arguments[i__36462__auto___286154]));

var G__286158 = (i__36462__auto___286154 + (1));
i__36462__auto___286154 = G__286158;
continue;
} else {
}
break;
}

var G__286146 = args286141.length;
switch (G__286146) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286141.length)].join('')));

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
var n__36306__auto___286171 = n;
var x_286172 = (0);
while(true){
if((x_286172 < n__36306__auto___286171)){
(a[x_286172] = (0));

var G__286173 = (x_286172 + (1));
x_286172 = G__286173;
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

var G__286176 = (i + (1));
i = G__286176;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async286186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async286186 = (function (alt_flag,flag,meta286187){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta286187 = meta286187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async286186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_286188,meta286187__$1){
var self__ = this;
var _286188__$1 = this;
return (new cljs.core.async.t_cljs$core$async286186(self__.alt_flag,self__.flag,meta286187__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async286186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_286188){
var self__ = this;
var _286188__$1 = this;
return self__.meta286187;
});})(flag))
;

cljs.core.async.t_cljs$core$async286186.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async286186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async286186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async286186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async286186.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta286187","meta286187",-740528864,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async286186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async286186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async286186";

cljs.core.async.t_cljs$core$async286186.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async286186");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async286186 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async286186(alt_flag__$1,flag__$1,meta286187){
return (new cljs.core.async.t_cljs$core$async286186(alt_flag__$1,flag__$1,meta286187));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async286186(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async286221 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async286221 = (function (alt_handler,flag,cb,meta286222){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta286222 = meta286222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async286221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_286223,meta286222__$1){
var self__ = this;
var _286223__$1 = this;
return (new cljs.core.async.t_cljs$core$async286221(self__.alt_handler,self__.flag,self__.cb,meta286222__$1));
});

cljs.core.async.t_cljs$core$async286221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_286223){
var self__ = this;
var _286223__$1 = this;
return self__.meta286222;
});

cljs.core.async.t_cljs$core$async286221.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async286221.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async286221.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async286221.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async286221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta286222","meta286222",-1639734711,null)], null);
});

cljs.core.async.t_cljs$core$async286221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async286221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async286221";

cljs.core.async.t_cljs$core$async286221.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async286221");
});

cljs.core.async.__GT_t_cljs$core$async286221 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async286221(alt_handler__$1,flag__$1,cb__$1,meta286222){
return (new cljs.core.async.t_cljs$core$async286221(alt_handler__$1,flag__$1,cb__$1,meta286222));
});

}

return (new cljs.core.async.t_cljs$core$async286221(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__286245_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__286245_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__286246_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__286246_SHARP_,port], null));
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
var G__286266 = (i + (1));
i = G__286266;
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
var len__36461__auto___286280 = arguments.length;
var i__36462__auto___286281 = (0);
while(true){
if((i__36462__auto___286281 < len__36461__auto___286280)){
args__36468__auto__.push((arguments[i__36462__auto___286281]));

var G__286284 = (i__36462__auto___286281 + (1));
i__36462__auto___286281 = G__286284;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((1) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36469__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__286274){
var map__286275 = p__286274;
var map__286275__$1 = ((((!((map__286275 == null)))?((((map__286275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__286275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__286275):map__286275);
var opts = map__286275__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq286267){
var G__286268 = cljs.core.first.call(null,seq286267);
var seq286267__$1 = cljs.core.next.call(null,seq286267);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__286268,seq286267__$1);
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
var args286307 = [];
var len__36461__auto___286386 = arguments.length;
var i__36462__auto___286388 = (0);
while(true){
if((i__36462__auto___286388 < len__36461__auto___286386)){
args286307.push((arguments[i__36462__auto___286388]));

var G__286391 = (i__36462__auto___286388 + (1));
i__36462__auto___286388 = G__286391;
continue;
} else {
}
break;
}

var G__286314 = args286307.length;
switch (G__286314) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286307.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40985__auto___286402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___286402){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___286402){
return (function (state_286345){
var state_val_286346 = (state_286345[(1)]);
if((state_val_286346 === (7))){
var inst_286341 = (state_286345[(2)]);
var state_286345__$1 = state_286345;
var statearr_286349_286405 = state_286345__$1;
(statearr_286349_286405[(2)] = inst_286341);

(statearr_286349_286405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286346 === (1))){
var state_286345__$1 = state_286345;
var statearr_286351_286410 = state_286345__$1;
(statearr_286351_286410[(2)] = null);

(statearr_286351_286410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286346 === (4))){
var inst_286320 = (state_286345[(7)]);
var inst_286320__$1 = (state_286345[(2)]);
var inst_286321 = (inst_286320__$1 == null);
var state_286345__$1 = (function (){var statearr_286352 = state_286345;
(statearr_286352[(7)] = inst_286320__$1);

return statearr_286352;
})();
if(cljs.core.truth_(inst_286321)){
var statearr_286353_286415 = state_286345__$1;
(statearr_286353_286415[(1)] = (5));

} else {
var statearr_286354_286418 = state_286345__$1;
(statearr_286354_286418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286346 === (13))){
var state_286345__$1 = state_286345;
var statearr_286360_286420 = state_286345__$1;
(statearr_286360_286420[(2)] = null);

(statearr_286360_286420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286346 === (6))){
var inst_286320 = (state_286345[(7)]);
var state_286345__$1 = state_286345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286345__$1,(11),to,inst_286320);
} else {
if((state_val_286346 === (3))){
var inst_286343 = (state_286345[(2)]);
var state_286345__$1 = state_286345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286345__$1,inst_286343);
} else {
if((state_val_286346 === (12))){
var state_286345__$1 = state_286345;
var statearr_286361_286423 = state_286345__$1;
(statearr_286361_286423[(2)] = null);

(statearr_286361_286423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286346 === (2))){
var state_286345__$1 = state_286345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286345__$1,(4),from);
} else {
if((state_val_286346 === (11))){
var inst_286334 = (state_286345[(2)]);
var state_286345__$1 = state_286345;
if(cljs.core.truth_(inst_286334)){
var statearr_286362_286426 = state_286345__$1;
(statearr_286362_286426[(1)] = (12));

} else {
var statearr_286363_286427 = state_286345__$1;
(statearr_286363_286427[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286346 === (9))){
var state_286345__$1 = state_286345;
var statearr_286364_286428 = state_286345__$1;
(statearr_286364_286428[(2)] = null);

(statearr_286364_286428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286346 === (5))){
var state_286345__$1 = state_286345;
if(cljs.core.truth_(close_QMARK_)){
var statearr_286369_286434 = state_286345__$1;
(statearr_286369_286434[(1)] = (8));

} else {
var statearr_286370_286436 = state_286345__$1;
(statearr_286370_286436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286346 === (14))){
var inst_286339 = (state_286345[(2)]);
var state_286345__$1 = state_286345;
var statearr_286371_286439 = state_286345__$1;
(statearr_286371_286439[(2)] = inst_286339);

(statearr_286371_286439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286346 === (10))){
var inst_286331 = (state_286345[(2)]);
var state_286345__$1 = state_286345;
var statearr_286375_286440 = state_286345__$1;
(statearr_286375_286440[(2)] = inst_286331);

(statearr_286375_286440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286346 === (8))){
var inst_286324 = cljs.core.async.close_BANG_.call(null,to);
var state_286345__$1 = state_286345;
var statearr_286376_286446 = state_286345__$1;
(statearr_286376_286446[(2)] = inst_286324);

(statearr_286376_286446[(1)] = (10));


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
});})(c__40985__auto___286402))
;
return ((function (switch__40398__auto__,c__40985__auto___286402){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_286381 = [null,null,null,null,null,null,null,null];
(statearr_286381[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_286381[(1)] = (1));

return statearr_286381;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_286345){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_286345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e286382){if((e286382 instanceof Object)){
var ex__40402__auto__ = e286382;
var statearr_286383_286452 = state_286345;
(statearr_286383_286452[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286453 = state_286345;
state_286345 = G__286453;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_286345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_286345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___286402))
})();
var state__40987__auto__ = (function (){var statearr_286384 = f__40986__auto__.call(null);
(statearr_286384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___286402);

return statearr_286384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___286402))
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
return (function (p__286747){
var vec__286748 = p__286747;
var v = cljs.core.nth.call(null,vec__286748,(0),null);
var p = cljs.core.nth.call(null,vec__286748,(1),null);
var job = vec__286748;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40985__auto___287042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___287042,res,vec__286748,v,p,job,jobs,results){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___287042,res,vec__286748,v,p,job,jobs,results){
return (function (state_286754){
var state_val_286755 = (state_286754[(1)]);
if((state_val_286755 === (1))){
var state_286754__$1 = state_286754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286754__$1,(2),res,v);
} else {
if((state_val_286755 === (2))){
var inst_286750 = (state_286754[(2)]);
var inst_286751 = cljs.core.async.close_BANG_.call(null,res);
var state_286754__$1 = (function (){var statearr_286760 = state_286754;
(statearr_286760[(7)] = inst_286750);

return statearr_286760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286754__$1,inst_286751);
} else {
return null;
}
}
});})(c__40985__auto___287042,res,vec__286748,v,p,job,jobs,results))
;
return ((function (switch__40398__auto__,c__40985__auto___287042,res,vec__286748,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0 = (function (){
var statearr_286766 = [null,null,null,null,null,null,null,null];
(statearr_286766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__);

(statearr_286766[(1)] = (1));

return statearr_286766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1 = (function (state_286754){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_286754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e286767){if((e286767 instanceof Object)){
var ex__40402__auto__ = e286767;
var statearr_286768_287060 = state_286754;
(statearr_286768_287060[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287063 = state_286754;
state_286754 = G__287063;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = function(state_286754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1.call(this,state_286754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___287042,res,vec__286748,v,p,job,jobs,results))
})();
var state__40987__auto__ = (function (){var statearr_286774 = f__40986__auto__.call(null);
(statearr_286774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___287042);

return statearr_286774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___287042,res,vec__286748,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__286777){
var vec__286778 = p__286777;
var v = cljs.core.nth.call(null,vec__286778,(0),null);
var p = cljs.core.nth.call(null,vec__286778,(1),null);
var job = vec__286778;
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
var n__36306__auto___287078 = n;
var __287079 = (0);
while(true){
if((__287079 < n__36306__auto___287078)){
var G__286779_287080 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__286779_287080) {
case "compute":
var c__40985__auto___287082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__287079,c__40985__auto___287082,G__286779_287080,n__36306__auto___287078,jobs,results,process,async){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (__287079,c__40985__auto___287082,G__286779_287080,n__36306__auto___287078,jobs,results,process,async){
return (function (state_286803){
var state_val_286804 = (state_286803[(1)]);
if((state_val_286804 === (1))){
var state_286803__$1 = state_286803;
var statearr_286810_287090 = state_286803__$1;
(statearr_286810_287090[(2)] = null);

(statearr_286810_287090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286804 === (2))){
var state_286803__$1 = state_286803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286803__$1,(4),jobs);
} else {
if((state_val_286804 === (3))){
var inst_286801 = (state_286803[(2)]);
var state_286803__$1 = state_286803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286803__$1,inst_286801);
} else {
if((state_val_286804 === (4))){
var inst_286793 = (state_286803[(2)]);
var inst_286794 = process.call(null,inst_286793);
var state_286803__$1 = state_286803;
if(cljs.core.truth_(inst_286794)){
var statearr_286813_287097 = state_286803__$1;
(statearr_286813_287097[(1)] = (5));

} else {
var statearr_286814_287098 = state_286803__$1;
(statearr_286814_287098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286804 === (5))){
var state_286803__$1 = state_286803;
var statearr_286815_287101 = state_286803__$1;
(statearr_286815_287101[(2)] = null);

(statearr_286815_287101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286804 === (6))){
var state_286803__$1 = state_286803;
var statearr_286816_287102 = state_286803__$1;
(statearr_286816_287102[(2)] = null);

(statearr_286816_287102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286804 === (7))){
var inst_286799 = (state_286803[(2)]);
var state_286803__$1 = state_286803;
var statearr_286817_287106 = state_286803__$1;
(statearr_286817_287106[(2)] = inst_286799);

(statearr_286817_287106[(1)] = (3));


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
});})(__287079,c__40985__auto___287082,G__286779_287080,n__36306__auto___287078,jobs,results,process,async))
;
return ((function (__287079,switch__40398__auto__,c__40985__auto___287082,G__286779_287080,n__36306__auto___287078,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0 = (function (){
var statearr_286824 = [null,null,null,null,null,null,null];
(statearr_286824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__);

(statearr_286824[(1)] = (1));

return statearr_286824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1 = (function (state_286803){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_286803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e286828){if((e286828 instanceof Object)){
var ex__40402__auto__ = e286828;
var statearr_286829_287112 = state_286803;
(statearr_286829_287112[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287115 = state_286803;
state_286803 = G__287115;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = function(state_286803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1.call(this,state_286803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__;
})()
;})(__287079,switch__40398__auto__,c__40985__auto___287082,G__286779_287080,n__36306__auto___287078,jobs,results,process,async))
})();
var state__40987__auto__ = (function (){var statearr_286832 = f__40986__auto__.call(null);
(statearr_286832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___287082);

return statearr_286832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(__287079,c__40985__auto___287082,G__286779_287080,n__36306__auto___287078,jobs,results,process,async))
);


break;
case "async":
var c__40985__auto___287116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__287079,c__40985__auto___287116,G__286779_287080,n__36306__auto___287078,jobs,results,process,async){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (__287079,c__40985__auto___287116,G__286779_287080,n__36306__auto___287078,jobs,results,process,async){
return (function (state_286845){
var state_val_286846 = (state_286845[(1)]);
if((state_val_286846 === (1))){
var state_286845__$1 = state_286845;
var statearr_286847_287124 = state_286845__$1;
(statearr_286847_287124[(2)] = null);

(statearr_286847_287124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286846 === (2))){
var state_286845__$1 = state_286845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286845__$1,(4),jobs);
} else {
if((state_val_286846 === (3))){
var inst_286843 = (state_286845[(2)]);
var state_286845__$1 = state_286845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286845__$1,inst_286843);
} else {
if((state_val_286846 === (4))){
var inst_286835 = (state_286845[(2)]);
var inst_286836 = async.call(null,inst_286835);
var state_286845__$1 = state_286845;
if(cljs.core.truth_(inst_286836)){
var statearr_286850_287128 = state_286845__$1;
(statearr_286850_287128[(1)] = (5));

} else {
var statearr_286851_287134 = state_286845__$1;
(statearr_286851_287134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286846 === (5))){
var state_286845__$1 = state_286845;
var statearr_286852_287136 = state_286845__$1;
(statearr_286852_287136[(2)] = null);

(statearr_286852_287136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286846 === (6))){
var state_286845__$1 = state_286845;
var statearr_286854_287139 = state_286845__$1;
(statearr_286854_287139[(2)] = null);

(statearr_286854_287139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286846 === (7))){
var inst_286841 = (state_286845[(2)]);
var state_286845__$1 = state_286845;
var statearr_286859_287142 = state_286845__$1;
(statearr_286859_287142[(2)] = inst_286841);

(statearr_286859_287142[(1)] = (3));


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
});})(__287079,c__40985__auto___287116,G__286779_287080,n__36306__auto___287078,jobs,results,process,async))
;
return ((function (__287079,switch__40398__auto__,c__40985__auto___287116,G__286779_287080,n__36306__auto___287078,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0 = (function (){
var statearr_286865 = [null,null,null,null,null,null,null];
(statearr_286865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__);

(statearr_286865[(1)] = (1));

return statearr_286865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1 = (function (state_286845){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_286845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e286868){if((e286868 instanceof Object)){
var ex__40402__auto__ = e286868;
var statearr_286869_287148 = state_286845;
(statearr_286869_287148[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287153 = state_286845;
state_286845 = G__287153;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = function(state_286845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1.call(this,state_286845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__;
})()
;})(__287079,switch__40398__auto__,c__40985__auto___287116,G__286779_287080,n__36306__auto___287078,jobs,results,process,async))
})();
var state__40987__auto__ = (function (){var statearr_286870 = f__40986__auto__.call(null);
(statearr_286870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___287116);

return statearr_286870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(__287079,c__40985__auto___287116,G__286779_287080,n__36306__auto___287078,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__287160 = (__287079 + (1));
__287079 = G__287160;
continue;
} else {
}
break;
}

var c__40985__auto___287161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___287161,jobs,results,process,async){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___287161,jobs,results,process,async){
return (function (state_286899){
var state_val_286900 = (state_286899[(1)]);
if((state_val_286900 === (1))){
var state_286899__$1 = state_286899;
var statearr_286903_287166 = state_286899__$1;
(statearr_286903_287166[(2)] = null);

(statearr_286903_287166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286900 === (2))){
var state_286899__$1 = state_286899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286899__$1,(4),from);
} else {
if((state_val_286900 === (3))){
var inst_286895 = (state_286899[(2)]);
var state_286899__$1 = state_286899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286899__$1,inst_286895);
} else {
if((state_val_286900 === (4))){
var inst_286873 = (state_286899[(7)]);
var inst_286873__$1 = (state_286899[(2)]);
var inst_286874 = (inst_286873__$1 == null);
var state_286899__$1 = (function (){var statearr_286905 = state_286899;
(statearr_286905[(7)] = inst_286873__$1);

return statearr_286905;
})();
if(cljs.core.truth_(inst_286874)){
var statearr_286906_287170 = state_286899__$1;
(statearr_286906_287170[(1)] = (5));

} else {
var statearr_286907_287171 = state_286899__$1;
(statearr_286907_287171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286900 === (5))){
var inst_286879 = cljs.core.async.close_BANG_.call(null,jobs);
var state_286899__$1 = state_286899;
var statearr_286912_287172 = state_286899__$1;
(statearr_286912_287172[(2)] = inst_286879);

(statearr_286912_287172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286900 === (6))){
var inst_286873 = (state_286899[(7)]);
var inst_286881 = (state_286899[(8)]);
var inst_286881__$1 = cljs.core.async.chan.call(null,(1));
var inst_286883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_286884 = [inst_286873,inst_286881__$1];
var inst_286885 = (new cljs.core.PersistentVector(null,2,(5),inst_286883,inst_286884,null));
var state_286899__$1 = (function (){var statearr_286913 = state_286899;
(statearr_286913[(8)] = inst_286881__$1);

return statearr_286913;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286899__$1,(8),jobs,inst_286885);
} else {
if((state_val_286900 === (7))){
var inst_286893 = (state_286899[(2)]);
var state_286899__$1 = state_286899;
var statearr_286917_287181 = state_286899__$1;
(statearr_286917_287181[(2)] = inst_286893);

(statearr_286917_287181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286900 === (8))){
var inst_286881 = (state_286899[(8)]);
var inst_286887 = (state_286899[(2)]);
var state_286899__$1 = (function (){var statearr_286922 = state_286899;
(statearr_286922[(9)] = inst_286887);

return statearr_286922;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286899__$1,(9),results,inst_286881);
} else {
if((state_val_286900 === (9))){
var inst_286890 = (state_286899[(2)]);
var state_286899__$1 = (function (){var statearr_286923 = state_286899;
(statearr_286923[(10)] = inst_286890);

return statearr_286923;
})();
var statearr_286924_287191 = state_286899__$1;
(statearr_286924_287191[(2)] = null);

(statearr_286924_287191[(1)] = (2));


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
});})(c__40985__auto___287161,jobs,results,process,async))
;
return ((function (switch__40398__auto__,c__40985__auto___287161,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0 = (function (){
var statearr_286930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_286930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__);

(statearr_286930[(1)] = (1));

return statearr_286930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1 = (function (state_286899){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_286899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e286933){if((e286933 instanceof Object)){
var ex__40402__auto__ = e286933;
var statearr_286935_287208 = state_286899;
(statearr_286935_287208[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287210 = state_286899;
state_286899 = G__287210;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = function(state_286899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1.call(this,state_286899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___287161,jobs,results,process,async))
})();
var state__40987__auto__ = (function (){var statearr_286938 = f__40986__auto__.call(null);
(statearr_286938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___287161);

return statearr_286938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___287161,jobs,results,process,async))
);


var c__40985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto__,jobs,results,process,async){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto__,jobs,results,process,async){
return (function (state_286977){
var state_val_286979 = (state_286977[(1)]);
if((state_val_286979 === (7))){
var inst_286972 = (state_286977[(2)]);
var state_286977__$1 = state_286977;
var statearr_286984_287218 = state_286977__$1;
(statearr_286984_287218[(2)] = inst_286972);

(statearr_286984_287218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (20))){
var state_286977__$1 = state_286977;
var statearr_286986_287221 = state_286977__$1;
(statearr_286986_287221[(2)] = null);

(statearr_286986_287221[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (1))){
var state_286977__$1 = state_286977;
var statearr_286987_287223 = state_286977__$1;
(statearr_286987_287223[(2)] = null);

(statearr_286987_287223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (4))){
var inst_286941 = (state_286977[(7)]);
var inst_286941__$1 = (state_286977[(2)]);
var inst_286942 = (inst_286941__$1 == null);
var state_286977__$1 = (function (){var statearr_286988 = state_286977;
(statearr_286988[(7)] = inst_286941__$1);

return statearr_286988;
})();
if(cljs.core.truth_(inst_286942)){
var statearr_286989_287232 = state_286977__$1;
(statearr_286989_287232[(1)] = (5));

} else {
var statearr_286990_287233 = state_286977__$1;
(statearr_286990_287233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (15))){
var inst_286954 = (state_286977[(8)]);
var state_286977__$1 = state_286977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286977__$1,(18),to,inst_286954);
} else {
if((state_val_286979 === (21))){
var inst_286967 = (state_286977[(2)]);
var state_286977__$1 = state_286977;
var statearr_286991_287235 = state_286977__$1;
(statearr_286991_287235[(2)] = inst_286967);

(statearr_286991_287235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (13))){
var inst_286969 = (state_286977[(2)]);
var state_286977__$1 = (function (){var statearr_286995 = state_286977;
(statearr_286995[(9)] = inst_286969);

return statearr_286995;
})();
var statearr_286997_287236 = state_286977__$1;
(statearr_286997_287236[(2)] = null);

(statearr_286997_287236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (6))){
var inst_286941 = (state_286977[(7)]);
var state_286977__$1 = state_286977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286977__$1,(11),inst_286941);
} else {
if((state_val_286979 === (17))){
var inst_286962 = (state_286977[(2)]);
var state_286977__$1 = state_286977;
if(cljs.core.truth_(inst_286962)){
var statearr_287001_287241 = state_286977__$1;
(statearr_287001_287241[(1)] = (19));

} else {
var statearr_287002_287242 = state_286977__$1;
(statearr_287002_287242[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (3))){
var inst_286974 = (state_286977[(2)]);
var state_286977__$1 = state_286977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286977__$1,inst_286974);
} else {
if((state_val_286979 === (12))){
var inst_286951 = (state_286977[(10)]);
var state_286977__$1 = state_286977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286977__$1,(14),inst_286951);
} else {
if((state_val_286979 === (2))){
var state_286977__$1 = state_286977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286977__$1,(4),results);
} else {
if((state_val_286979 === (19))){
var state_286977__$1 = state_286977;
var statearr_287003_287249 = state_286977__$1;
(statearr_287003_287249[(2)] = null);

(statearr_287003_287249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (11))){
var inst_286951 = (state_286977[(2)]);
var state_286977__$1 = (function (){var statearr_287004 = state_286977;
(statearr_287004[(10)] = inst_286951);

return statearr_287004;
})();
var statearr_287005_287252 = state_286977__$1;
(statearr_287005_287252[(2)] = null);

(statearr_287005_287252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (9))){
var state_286977__$1 = state_286977;
var statearr_287006_287255 = state_286977__$1;
(statearr_287006_287255[(2)] = null);

(statearr_287006_287255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (5))){
var state_286977__$1 = state_286977;
if(cljs.core.truth_(close_QMARK_)){
var statearr_287007_287259 = state_286977__$1;
(statearr_287007_287259[(1)] = (8));

} else {
var statearr_287010_287262 = state_286977__$1;
(statearr_287010_287262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (14))){
var inst_286956 = (state_286977[(11)]);
var inst_286954 = (state_286977[(8)]);
var inst_286954__$1 = (state_286977[(2)]);
var inst_286955 = (inst_286954__$1 == null);
var inst_286956__$1 = cljs.core.not.call(null,inst_286955);
var state_286977__$1 = (function (){var statearr_287014 = state_286977;
(statearr_287014[(11)] = inst_286956__$1);

(statearr_287014[(8)] = inst_286954__$1);

return statearr_287014;
})();
if(inst_286956__$1){
var statearr_287016_287272 = state_286977__$1;
(statearr_287016_287272[(1)] = (15));

} else {
var statearr_287018_287274 = state_286977__$1;
(statearr_287018_287274[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (16))){
var inst_286956 = (state_286977[(11)]);
var state_286977__$1 = state_286977;
var statearr_287019_287277 = state_286977__$1;
(statearr_287019_287277[(2)] = inst_286956);

(statearr_287019_287277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (10))){
var inst_286948 = (state_286977[(2)]);
var state_286977__$1 = state_286977;
var statearr_287021_287278 = state_286977__$1;
(statearr_287021_287278[(2)] = inst_286948);

(statearr_287021_287278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (18))){
var inst_286959 = (state_286977[(2)]);
var state_286977__$1 = state_286977;
var statearr_287022_287282 = state_286977__$1;
(statearr_287022_287282[(2)] = inst_286959);

(statearr_287022_287282[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286979 === (8))){
var inst_286945 = cljs.core.async.close_BANG_.call(null,to);
var state_286977__$1 = state_286977;
var statearr_287023_287283 = state_286977__$1;
(statearr_287023_287283[(2)] = inst_286945);

(statearr_287023_287283[(1)] = (10));


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
var statearr_287030 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_287030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__);

(statearr_287030[(1)] = (1));

return statearr_287030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1 = (function (state_286977){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_286977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e287032){if((e287032 instanceof Object)){
var ex__40402__auto__ = e287032;
var statearr_287033_287287 = state_286977;
(statearr_287033_287287[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287289 = state_286977;
state_286977 = G__287289;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__ = function(state_286977){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1.call(this,state_286977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40399__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto__,jobs,results,process,async))
})();
var state__40987__auto__ = (function (){var statearr_287036 = f__40986__auto__.call(null);
(statearr_287036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto__);

return statearr_287036;
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
var args287293 = [];
var len__36461__auto___287300 = arguments.length;
var i__36462__auto___287301 = (0);
while(true){
if((i__36462__auto___287301 < len__36461__auto___287300)){
args287293.push((arguments[i__36462__auto___287301]));

var G__287302 = (i__36462__auto___287301 + (1));
i__36462__auto___287301 = G__287302;
continue;
} else {
}
break;
}

var G__287296 = args287293.length;
switch (G__287296) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287293.length)].join('')));

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
var args287308 = [];
var len__36461__auto___287318 = arguments.length;
var i__36462__auto___287319 = (0);
while(true){
if((i__36462__auto___287319 < len__36461__auto___287318)){
args287308.push((arguments[i__36462__auto___287319]));

var G__287320 = (i__36462__auto___287319 + (1));
i__36462__auto___287319 = G__287320;
continue;
} else {
}
break;
}

var G__287313 = args287308.length;
switch (G__287313) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287308.length)].join('')));

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
var args287325 = [];
var len__36461__auto___287392 = arguments.length;
var i__36462__auto___287393 = (0);
while(true){
if((i__36462__auto___287393 < len__36461__auto___287392)){
args287325.push((arguments[i__36462__auto___287393]));

var G__287395 = (i__36462__auto___287393 + (1));
i__36462__auto___287393 = G__287395;
continue;
} else {
}
break;
}

var G__287330 = args287325.length;
switch (G__287330) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287325.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40985__auto___287399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___287399,tc,fc){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___287399,tc,fc){
return (function (state_287356){
var state_val_287357 = (state_287356[(1)]);
if((state_val_287357 === (7))){
var inst_287352 = (state_287356[(2)]);
var state_287356__$1 = state_287356;
var statearr_287360_287401 = state_287356__$1;
(statearr_287360_287401[(2)] = inst_287352);

(statearr_287360_287401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287357 === (1))){
var state_287356__$1 = state_287356;
var statearr_287361_287403 = state_287356__$1;
(statearr_287361_287403[(2)] = null);

(statearr_287361_287403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287357 === (4))){
var inst_287333 = (state_287356[(7)]);
var inst_287333__$1 = (state_287356[(2)]);
var inst_287334 = (inst_287333__$1 == null);
var state_287356__$1 = (function (){var statearr_287363 = state_287356;
(statearr_287363[(7)] = inst_287333__$1);

return statearr_287363;
})();
if(cljs.core.truth_(inst_287334)){
var statearr_287364_287406 = state_287356__$1;
(statearr_287364_287406[(1)] = (5));

} else {
var statearr_287365_287407 = state_287356__$1;
(statearr_287365_287407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287357 === (13))){
var state_287356__$1 = state_287356;
var statearr_287366_287408 = state_287356__$1;
(statearr_287366_287408[(2)] = null);

(statearr_287366_287408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287357 === (6))){
var inst_287333 = (state_287356[(7)]);
var inst_287339 = p.call(null,inst_287333);
var state_287356__$1 = state_287356;
if(cljs.core.truth_(inst_287339)){
var statearr_287367_287412 = state_287356__$1;
(statearr_287367_287412[(1)] = (9));

} else {
var statearr_287368_287413 = state_287356__$1;
(statearr_287368_287413[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287357 === (3))){
var inst_287354 = (state_287356[(2)]);
var state_287356__$1 = state_287356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287356__$1,inst_287354);
} else {
if((state_val_287357 === (12))){
var state_287356__$1 = state_287356;
var statearr_287369_287416 = state_287356__$1;
(statearr_287369_287416[(2)] = null);

(statearr_287369_287416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287357 === (2))){
var state_287356__$1 = state_287356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287356__$1,(4),ch);
} else {
if((state_val_287357 === (11))){
var inst_287333 = (state_287356[(7)]);
var inst_287343 = (state_287356[(2)]);
var state_287356__$1 = state_287356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287356__$1,(8),inst_287343,inst_287333);
} else {
if((state_val_287357 === (9))){
var state_287356__$1 = state_287356;
var statearr_287373_287421 = state_287356__$1;
(statearr_287373_287421[(2)] = tc);

(statearr_287373_287421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287357 === (5))){
var inst_287336 = cljs.core.async.close_BANG_.call(null,tc);
var inst_287337 = cljs.core.async.close_BANG_.call(null,fc);
var state_287356__$1 = (function (){var statearr_287374 = state_287356;
(statearr_287374[(8)] = inst_287336);

return statearr_287374;
})();
var statearr_287375_287431 = state_287356__$1;
(statearr_287375_287431[(2)] = inst_287337);

(statearr_287375_287431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287357 === (14))){
var inst_287350 = (state_287356[(2)]);
var state_287356__$1 = state_287356;
var statearr_287376_287432 = state_287356__$1;
(statearr_287376_287432[(2)] = inst_287350);

(statearr_287376_287432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287357 === (10))){
var state_287356__$1 = state_287356;
var statearr_287377_287433 = state_287356__$1;
(statearr_287377_287433[(2)] = fc);

(statearr_287377_287433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287357 === (8))){
var inst_287345 = (state_287356[(2)]);
var state_287356__$1 = state_287356;
if(cljs.core.truth_(inst_287345)){
var statearr_287378_287437 = state_287356__$1;
(statearr_287378_287437[(1)] = (12));

} else {
var statearr_287379_287438 = state_287356__$1;
(statearr_287379_287438[(1)] = (13));

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
});})(c__40985__auto___287399,tc,fc))
;
return ((function (switch__40398__auto__,c__40985__auto___287399,tc,fc){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_287386 = [null,null,null,null,null,null,null,null,null];
(statearr_287386[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_287386[(1)] = (1));

return statearr_287386;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_287356){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_287356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e287387){if((e287387 instanceof Object)){
var ex__40402__auto__ = e287387;
var statearr_287388_287439 = state_287356;
(statearr_287388_287439[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287441 = state_287356;
state_287356 = G__287441;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_287356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_287356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___287399,tc,fc))
})();
var state__40987__auto__ = (function (){var statearr_287389 = f__40986__auto__.call(null);
(statearr_287389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___287399);

return statearr_287389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___287399,tc,fc))
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
return (function (state_287527){
var state_val_287528 = (state_287527[(1)]);
if((state_val_287528 === (7))){
var inst_287523 = (state_287527[(2)]);
var state_287527__$1 = state_287527;
var statearr_287531_287570 = state_287527__$1;
(statearr_287531_287570[(2)] = inst_287523);

(statearr_287531_287570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287528 === (1))){
var inst_287507 = init;
var state_287527__$1 = (function (){var statearr_287532 = state_287527;
(statearr_287532[(7)] = inst_287507);

return statearr_287532;
})();
var statearr_287533_287572 = state_287527__$1;
(statearr_287533_287572[(2)] = null);

(statearr_287533_287572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287528 === (4))){
var inst_287510 = (state_287527[(8)]);
var inst_287510__$1 = (state_287527[(2)]);
var inst_287511 = (inst_287510__$1 == null);
var state_287527__$1 = (function (){var statearr_287538 = state_287527;
(statearr_287538[(8)] = inst_287510__$1);

return statearr_287538;
})();
if(cljs.core.truth_(inst_287511)){
var statearr_287540_287575 = state_287527__$1;
(statearr_287540_287575[(1)] = (5));

} else {
var statearr_287541_287576 = state_287527__$1;
(statearr_287541_287576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287528 === (6))){
var inst_287510 = (state_287527[(8)]);
var inst_287507 = (state_287527[(7)]);
var inst_287514 = (state_287527[(9)]);
var inst_287514__$1 = f.call(null,inst_287507,inst_287510);
var inst_287515 = cljs.core.reduced_QMARK_.call(null,inst_287514__$1);
var state_287527__$1 = (function (){var statearr_287543 = state_287527;
(statearr_287543[(9)] = inst_287514__$1);

return statearr_287543;
})();
if(inst_287515){
var statearr_287544_287580 = state_287527__$1;
(statearr_287544_287580[(1)] = (8));

} else {
var statearr_287545_287581 = state_287527__$1;
(statearr_287545_287581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287528 === (3))){
var inst_287525 = (state_287527[(2)]);
var state_287527__$1 = state_287527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287527__$1,inst_287525);
} else {
if((state_val_287528 === (2))){
var state_287527__$1 = state_287527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287527__$1,(4),ch);
} else {
if((state_val_287528 === (9))){
var inst_287514 = (state_287527[(9)]);
var inst_287507 = inst_287514;
var state_287527__$1 = (function (){var statearr_287546 = state_287527;
(statearr_287546[(7)] = inst_287507);

return statearr_287546;
})();
var statearr_287547_287586 = state_287527__$1;
(statearr_287547_287586[(2)] = null);

(statearr_287547_287586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287528 === (5))){
var inst_287507 = (state_287527[(7)]);
var state_287527__$1 = state_287527;
var statearr_287552_287587 = state_287527__$1;
(statearr_287552_287587[(2)] = inst_287507);

(statearr_287552_287587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287528 === (10))){
var inst_287521 = (state_287527[(2)]);
var state_287527__$1 = state_287527;
var statearr_287553_287588 = state_287527__$1;
(statearr_287553_287588[(2)] = inst_287521);

(statearr_287553_287588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287528 === (8))){
var inst_287514 = (state_287527[(9)]);
var inst_287517 = cljs.core.deref.call(null,inst_287514);
var state_287527__$1 = state_287527;
var statearr_287554_287593 = state_287527__$1;
(statearr_287554_287593[(2)] = inst_287517);

(statearr_287554_287593[(1)] = (10));


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
var statearr_287561 = [null,null,null,null,null,null,null,null,null,null];
(statearr_287561[(0)] = cljs$core$async$reduce_$_state_machine__40399__auto__);

(statearr_287561[(1)] = (1));

return statearr_287561;
});
var cljs$core$async$reduce_$_state_machine__40399__auto____1 = (function (state_287527){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_287527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e287564){if((e287564 instanceof Object)){
var ex__40402__auto__ = e287564;
var statearr_287565_287594 = state_287527;
(statearr_287565_287594[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287597 = state_287527;
state_287527 = G__287597;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40399__auto__ = function(state_287527){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40399__auto____1.call(this,state_287527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40399__auto____0;
cljs$core$async$reduce_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40399__auto____1;
return cljs$core$async$reduce_$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto__))
})();
var state__40987__auto__ = (function (){var statearr_287566 = f__40986__auto__.call(null);
(statearr_287566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto__);

return statearr_287566;
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
var args287599 = [];
var len__36461__auto___287662 = arguments.length;
var i__36462__auto___287663 = (0);
while(true){
if((i__36462__auto___287663 < len__36461__auto___287662)){
args287599.push((arguments[i__36462__auto___287663]));

var G__287664 = (i__36462__auto___287663 + (1));
i__36462__auto___287663 = G__287664;
continue;
} else {
}
break;
}

var G__287605 = args287599.length;
switch (G__287605) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287599.length)].join('')));

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
return (function (state_287633){
var state_val_287635 = (state_287633[(1)]);
if((state_val_287635 === (7))){
var inst_287612 = (state_287633[(2)]);
var state_287633__$1 = state_287633;
var statearr_287636_287666 = state_287633__$1;
(statearr_287636_287666[(2)] = inst_287612);

(statearr_287636_287666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287635 === (1))){
var inst_287606 = cljs.core.seq.call(null,coll);
var inst_287607 = inst_287606;
var state_287633__$1 = (function (){var statearr_287637 = state_287633;
(statearr_287637[(7)] = inst_287607);

return statearr_287637;
})();
var statearr_287638_287667 = state_287633__$1;
(statearr_287638_287667[(2)] = null);

(statearr_287638_287667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287635 === (4))){
var inst_287607 = (state_287633[(7)]);
var inst_287610 = cljs.core.first.call(null,inst_287607);
var state_287633__$1 = state_287633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287633__$1,(7),ch,inst_287610);
} else {
if((state_val_287635 === (13))){
var inst_287626 = (state_287633[(2)]);
var state_287633__$1 = state_287633;
var statearr_287639_287668 = state_287633__$1;
(statearr_287639_287668[(2)] = inst_287626);

(statearr_287639_287668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287635 === (6))){
var inst_287615 = (state_287633[(2)]);
var state_287633__$1 = state_287633;
if(cljs.core.truth_(inst_287615)){
var statearr_287640_287669 = state_287633__$1;
(statearr_287640_287669[(1)] = (8));

} else {
var statearr_287643_287670 = state_287633__$1;
(statearr_287643_287670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287635 === (3))){
var inst_287631 = (state_287633[(2)]);
var state_287633__$1 = state_287633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287633__$1,inst_287631);
} else {
if((state_val_287635 === (12))){
var state_287633__$1 = state_287633;
var statearr_287645_287671 = state_287633__$1;
(statearr_287645_287671[(2)] = null);

(statearr_287645_287671[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287635 === (2))){
var inst_287607 = (state_287633[(7)]);
var state_287633__$1 = state_287633;
if(cljs.core.truth_(inst_287607)){
var statearr_287646_287672 = state_287633__$1;
(statearr_287646_287672[(1)] = (4));

} else {
var statearr_287647_287673 = state_287633__$1;
(statearr_287647_287673[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287635 === (11))){
var inst_287622 = cljs.core.async.close_BANG_.call(null,ch);
var state_287633__$1 = state_287633;
var statearr_287648_287674 = state_287633__$1;
(statearr_287648_287674[(2)] = inst_287622);

(statearr_287648_287674[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287635 === (9))){
var state_287633__$1 = state_287633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_287649_287675 = state_287633__$1;
(statearr_287649_287675[(1)] = (11));

} else {
var statearr_287650_287676 = state_287633__$1;
(statearr_287650_287676[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287635 === (5))){
var inst_287607 = (state_287633[(7)]);
var state_287633__$1 = state_287633;
var statearr_287651_287677 = state_287633__$1;
(statearr_287651_287677[(2)] = inst_287607);

(statearr_287651_287677[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287635 === (10))){
var inst_287629 = (state_287633[(2)]);
var state_287633__$1 = state_287633;
var statearr_287652_287678 = state_287633__$1;
(statearr_287652_287678[(2)] = inst_287629);

(statearr_287652_287678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287635 === (8))){
var inst_287607 = (state_287633[(7)]);
var inst_287617 = cljs.core.next.call(null,inst_287607);
var inst_287607__$1 = inst_287617;
var state_287633__$1 = (function (){var statearr_287653 = state_287633;
(statearr_287653[(7)] = inst_287607__$1);

return statearr_287653;
})();
var statearr_287654_287679 = state_287633__$1;
(statearr_287654_287679[(2)] = null);

(statearr_287654_287679[(1)] = (2));


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
var statearr_287658 = [null,null,null,null,null,null,null,null];
(statearr_287658[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_287658[(1)] = (1));

return statearr_287658;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_287633){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_287633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e287659){if((e287659 instanceof Object)){
var ex__40402__auto__ = e287659;
var statearr_287660_287680 = state_287633;
(statearr_287660_287680[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287681 = state_287633;
state_287633 = G__287681;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_287633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_287633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto__))
})();
var state__40987__auto__ = (function (){var statearr_287661 = f__40986__auto__.call(null);
(statearr_287661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto__);

return statearr_287661;
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
if(typeof cljs.core.async.t_cljs$core$async287926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async287926 = (function (mult,ch,cs,meta287927){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta287927 = meta287927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async287926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_287928,meta287927__$1){
var self__ = this;
var _287928__$1 = this;
return (new cljs.core.async.t_cljs$core$async287926(self__.mult,self__.ch,self__.cs,meta287927__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async287926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_287928){
var self__ = this;
var _287928__$1 = this;
return self__.meta287927;
});})(cs))
;

cljs.core.async.t_cljs$core$async287926.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async287926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async287926.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async287926.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async287926.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async287926.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async287926.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta287927","meta287927",-2109482682,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async287926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async287926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async287926";

cljs.core.async.t_cljs$core$async287926.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async287926");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async287926 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async287926(mult__$1,ch__$1,cs__$1,meta287927){
return (new cljs.core.async.t_cljs$core$async287926(mult__$1,ch__$1,cs__$1,meta287927));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async287926(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40985__auto___288160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___288160,cs,m,dchan,dctr,done){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___288160,cs,m,dchan,dctr,done){
return (function (state_288061){
var state_val_288062 = (state_288061[(1)]);
if((state_val_288062 === (7))){
var inst_288057 = (state_288061[(2)]);
var state_288061__$1 = state_288061;
var statearr_288063_288165 = state_288061__$1;
(statearr_288063_288165[(2)] = inst_288057);

(statearr_288063_288165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (20))){
var inst_287962 = (state_288061[(7)]);
var inst_287972 = cljs.core.first.call(null,inst_287962);
var inst_287973 = cljs.core.nth.call(null,inst_287972,(0),null);
var inst_287974 = cljs.core.nth.call(null,inst_287972,(1),null);
var state_288061__$1 = (function (){var statearr_288064 = state_288061;
(statearr_288064[(8)] = inst_287973);

return statearr_288064;
})();
if(cljs.core.truth_(inst_287974)){
var statearr_288065_288166 = state_288061__$1;
(statearr_288065_288166[(1)] = (22));

} else {
var statearr_288067_288167 = state_288061__$1;
(statearr_288067_288167[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (27))){
var inst_288004 = (state_288061[(9)]);
var inst_288002 = (state_288061[(10)]);
var inst_287933 = (state_288061[(11)]);
var inst_288009 = (state_288061[(12)]);
var inst_288009__$1 = cljs.core._nth.call(null,inst_288002,inst_288004);
var inst_288010 = cljs.core.async.put_BANG_.call(null,inst_288009__$1,inst_287933,done);
var state_288061__$1 = (function (){var statearr_288068 = state_288061;
(statearr_288068[(12)] = inst_288009__$1);

return statearr_288068;
})();
if(cljs.core.truth_(inst_288010)){
var statearr_288069_288169 = state_288061__$1;
(statearr_288069_288169[(1)] = (30));

} else {
var statearr_288070_288170 = state_288061__$1;
(statearr_288070_288170[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (1))){
var state_288061__$1 = state_288061;
var statearr_288071_288171 = state_288061__$1;
(statearr_288071_288171[(2)] = null);

(statearr_288071_288171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (24))){
var inst_287962 = (state_288061[(7)]);
var inst_287979 = (state_288061[(2)]);
var inst_287980 = cljs.core.next.call(null,inst_287962);
var inst_287942 = inst_287980;
var inst_287943 = null;
var inst_287944 = (0);
var inst_287945 = (0);
var state_288061__$1 = (function (){var statearr_288072 = state_288061;
(statearr_288072[(13)] = inst_287944);

(statearr_288072[(14)] = inst_287943);

(statearr_288072[(15)] = inst_287979);

(statearr_288072[(16)] = inst_287945);

(statearr_288072[(17)] = inst_287942);

return statearr_288072;
})();
var statearr_288073_288175 = state_288061__$1;
(statearr_288073_288175[(2)] = null);

(statearr_288073_288175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (39))){
var state_288061__$1 = state_288061;
var statearr_288077_288176 = state_288061__$1;
(statearr_288077_288176[(2)] = null);

(statearr_288077_288176[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (4))){
var inst_287933 = (state_288061[(11)]);
var inst_287933__$1 = (state_288061[(2)]);
var inst_287934 = (inst_287933__$1 == null);
var state_288061__$1 = (function (){var statearr_288078 = state_288061;
(statearr_288078[(11)] = inst_287933__$1);

return statearr_288078;
})();
if(cljs.core.truth_(inst_287934)){
var statearr_288079_288177 = state_288061__$1;
(statearr_288079_288177[(1)] = (5));

} else {
var statearr_288080_288178 = state_288061__$1;
(statearr_288080_288178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (15))){
var inst_287944 = (state_288061[(13)]);
var inst_287943 = (state_288061[(14)]);
var inst_287945 = (state_288061[(16)]);
var inst_287942 = (state_288061[(17)]);
var inst_287958 = (state_288061[(2)]);
var inst_287959 = (inst_287945 + (1));
var tmp288074 = inst_287944;
var tmp288075 = inst_287943;
var tmp288076 = inst_287942;
var inst_287942__$1 = tmp288076;
var inst_287943__$1 = tmp288075;
var inst_287944__$1 = tmp288074;
var inst_287945__$1 = inst_287959;
var state_288061__$1 = (function (){var statearr_288081 = state_288061;
(statearr_288081[(18)] = inst_287958);

(statearr_288081[(13)] = inst_287944__$1);

(statearr_288081[(14)] = inst_287943__$1);

(statearr_288081[(16)] = inst_287945__$1);

(statearr_288081[(17)] = inst_287942__$1);

return statearr_288081;
})();
var statearr_288082_288179 = state_288061__$1;
(statearr_288082_288179[(2)] = null);

(statearr_288082_288179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (21))){
var inst_287983 = (state_288061[(2)]);
var state_288061__$1 = state_288061;
var statearr_288087_288180 = state_288061__$1;
(statearr_288087_288180[(2)] = inst_287983);

(statearr_288087_288180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (31))){
var inst_288009 = (state_288061[(12)]);
var inst_288013 = done.call(null,null);
var inst_288014 = cljs.core.async.untap_STAR_.call(null,m,inst_288009);
var state_288061__$1 = (function (){var statearr_288088 = state_288061;
(statearr_288088[(19)] = inst_288013);

return statearr_288088;
})();
var statearr_288089_288181 = state_288061__$1;
(statearr_288089_288181[(2)] = inst_288014);

(statearr_288089_288181[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (32))){
var inst_288004 = (state_288061[(9)]);
var inst_288001 = (state_288061[(20)]);
var inst_288002 = (state_288061[(10)]);
var inst_288003 = (state_288061[(21)]);
var inst_288016 = (state_288061[(2)]);
var inst_288017 = (inst_288004 + (1));
var tmp288084 = inst_288001;
var tmp288085 = inst_288002;
var tmp288086 = inst_288003;
var inst_288001__$1 = tmp288084;
var inst_288002__$1 = tmp288085;
var inst_288003__$1 = tmp288086;
var inst_288004__$1 = inst_288017;
var state_288061__$1 = (function (){var statearr_288090 = state_288061;
(statearr_288090[(9)] = inst_288004__$1);

(statearr_288090[(20)] = inst_288001__$1);

(statearr_288090[(10)] = inst_288002__$1);

(statearr_288090[(21)] = inst_288003__$1);

(statearr_288090[(22)] = inst_288016);

return statearr_288090;
})();
var statearr_288091_288182 = state_288061__$1;
(statearr_288091_288182[(2)] = null);

(statearr_288091_288182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (40))){
var inst_288029 = (state_288061[(23)]);
var inst_288033 = done.call(null,null);
var inst_288034 = cljs.core.async.untap_STAR_.call(null,m,inst_288029);
var state_288061__$1 = (function (){var statearr_288092 = state_288061;
(statearr_288092[(24)] = inst_288033);

return statearr_288092;
})();
var statearr_288093_288184 = state_288061__$1;
(statearr_288093_288184[(2)] = inst_288034);

(statearr_288093_288184[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (33))){
var inst_288020 = (state_288061[(25)]);
var inst_288022 = cljs.core.chunked_seq_QMARK_.call(null,inst_288020);
var state_288061__$1 = state_288061;
if(inst_288022){
var statearr_288094_288185 = state_288061__$1;
(statearr_288094_288185[(1)] = (36));

} else {
var statearr_288095_288186 = state_288061__$1;
(statearr_288095_288186[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (13))){
var inst_287952 = (state_288061[(26)]);
var inst_287955 = cljs.core.async.close_BANG_.call(null,inst_287952);
var state_288061__$1 = state_288061;
var statearr_288096_288188 = state_288061__$1;
(statearr_288096_288188[(2)] = inst_287955);

(statearr_288096_288188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (22))){
var inst_287973 = (state_288061[(8)]);
var inst_287976 = cljs.core.async.close_BANG_.call(null,inst_287973);
var state_288061__$1 = state_288061;
var statearr_288097_288189 = state_288061__$1;
(statearr_288097_288189[(2)] = inst_287976);

(statearr_288097_288189[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (36))){
var inst_288020 = (state_288061[(25)]);
var inst_288024 = cljs.core.chunk_first.call(null,inst_288020);
var inst_288025 = cljs.core.chunk_rest.call(null,inst_288020);
var inst_288026 = cljs.core.count.call(null,inst_288024);
var inst_288001 = inst_288025;
var inst_288002 = inst_288024;
var inst_288003 = inst_288026;
var inst_288004 = (0);
var state_288061__$1 = (function (){var statearr_288098 = state_288061;
(statearr_288098[(9)] = inst_288004);

(statearr_288098[(20)] = inst_288001);

(statearr_288098[(10)] = inst_288002);

(statearr_288098[(21)] = inst_288003);

return statearr_288098;
})();
var statearr_288099_288190 = state_288061__$1;
(statearr_288099_288190[(2)] = null);

(statearr_288099_288190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (41))){
var inst_288020 = (state_288061[(25)]);
var inst_288036 = (state_288061[(2)]);
var inst_288037 = cljs.core.next.call(null,inst_288020);
var inst_288001 = inst_288037;
var inst_288002 = null;
var inst_288003 = (0);
var inst_288004 = (0);
var state_288061__$1 = (function (){var statearr_288100 = state_288061;
(statearr_288100[(9)] = inst_288004);

(statearr_288100[(20)] = inst_288001);

(statearr_288100[(10)] = inst_288002);

(statearr_288100[(21)] = inst_288003);

(statearr_288100[(27)] = inst_288036);

return statearr_288100;
})();
var statearr_288101_288192 = state_288061__$1;
(statearr_288101_288192[(2)] = null);

(statearr_288101_288192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (43))){
var state_288061__$1 = state_288061;
var statearr_288102_288193 = state_288061__$1;
(statearr_288102_288193[(2)] = null);

(statearr_288102_288193[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (29))){
var inst_288045 = (state_288061[(2)]);
var state_288061__$1 = state_288061;
var statearr_288103_288194 = state_288061__$1;
(statearr_288103_288194[(2)] = inst_288045);

(statearr_288103_288194[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (44))){
var inst_288054 = (state_288061[(2)]);
var state_288061__$1 = (function (){var statearr_288104 = state_288061;
(statearr_288104[(28)] = inst_288054);

return statearr_288104;
})();
var statearr_288105_288196 = state_288061__$1;
(statearr_288105_288196[(2)] = null);

(statearr_288105_288196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (6))){
var inst_287993 = (state_288061[(29)]);
var inst_287992 = cljs.core.deref.call(null,cs);
var inst_287993__$1 = cljs.core.keys.call(null,inst_287992);
var inst_287994 = cljs.core.count.call(null,inst_287993__$1);
var inst_287995 = cljs.core.reset_BANG_.call(null,dctr,inst_287994);
var inst_288000 = cljs.core.seq.call(null,inst_287993__$1);
var inst_288001 = inst_288000;
var inst_288002 = null;
var inst_288003 = (0);
var inst_288004 = (0);
var state_288061__$1 = (function (){var statearr_288106 = state_288061;
(statearr_288106[(9)] = inst_288004);

(statearr_288106[(20)] = inst_288001);

(statearr_288106[(10)] = inst_288002);

(statearr_288106[(21)] = inst_288003);

(statearr_288106[(30)] = inst_287995);

(statearr_288106[(29)] = inst_287993__$1);

return statearr_288106;
})();
var statearr_288107_288197 = state_288061__$1;
(statearr_288107_288197[(2)] = null);

(statearr_288107_288197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (28))){
var inst_288001 = (state_288061[(20)]);
var inst_288020 = (state_288061[(25)]);
var inst_288020__$1 = cljs.core.seq.call(null,inst_288001);
var state_288061__$1 = (function (){var statearr_288108 = state_288061;
(statearr_288108[(25)] = inst_288020__$1);

return statearr_288108;
})();
if(inst_288020__$1){
var statearr_288109_288198 = state_288061__$1;
(statearr_288109_288198[(1)] = (33));

} else {
var statearr_288110_288199 = state_288061__$1;
(statearr_288110_288199[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (25))){
var inst_288004 = (state_288061[(9)]);
var inst_288003 = (state_288061[(21)]);
var inst_288006 = (inst_288004 < inst_288003);
var inst_288007 = inst_288006;
var state_288061__$1 = state_288061;
if(cljs.core.truth_(inst_288007)){
var statearr_288111_288200 = state_288061__$1;
(statearr_288111_288200[(1)] = (27));

} else {
var statearr_288112_288201 = state_288061__$1;
(statearr_288112_288201[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (34))){
var state_288061__$1 = state_288061;
var statearr_288113_288202 = state_288061__$1;
(statearr_288113_288202[(2)] = null);

(statearr_288113_288202[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (17))){
var state_288061__$1 = state_288061;
var statearr_288114_288203 = state_288061__$1;
(statearr_288114_288203[(2)] = null);

(statearr_288114_288203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (3))){
var inst_288059 = (state_288061[(2)]);
var state_288061__$1 = state_288061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288061__$1,inst_288059);
} else {
if((state_val_288062 === (12))){
var inst_287988 = (state_288061[(2)]);
var state_288061__$1 = state_288061;
var statearr_288115_288204 = state_288061__$1;
(statearr_288115_288204[(2)] = inst_287988);

(statearr_288115_288204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (2))){
var state_288061__$1 = state_288061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288061__$1,(4),ch);
} else {
if((state_val_288062 === (23))){
var state_288061__$1 = state_288061;
var statearr_288116_288205 = state_288061__$1;
(statearr_288116_288205[(2)] = null);

(statearr_288116_288205[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (35))){
var inst_288043 = (state_288061[(2)]);
var state_288061__$1 = state_288061;
var statearr_288117_288206 = state_288061__$1;
(statearr_288117_288206[(2)] = inst_288043);

(statearr_288117_288206[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (19))){
var inst_287962 = (state_288061[(7)]);
var inst_287966 = cljs.core.chunk_first.call(null,inst_287962);
var inst_287967 = cljs.core.chunk_rest.call(null,inst_287962);
var inst_287968 = cljs.core.count.call(null,inst_287966);
var inst_287942 = inst_287967;
var inst_287943 = inst_287966;
var inst_287944 = inst_287968;
var inst_287945 = (0);
var state_288061__$1 = (function (){var statearr_288118 = state_288061;
(statearr_288118[(13)] = inst_287944);

(statearr_288118[(14)] = inst_287943);

(statearr_288118[(16)] = inst_287945);

(statearr_288118[(17)] = inst_287942);

return statearr_288118;
})();
var statearr_288119_288207 = state_288061__$1;
(statearr_288119_288207[(2)] = null);

(statearr_288119_288207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (11))){
var inst_287962 = (state_288061[(7)]);
var inst_287942 = (state_288061[(17)]);
var inst_287962__$1 = cljs.core.seq.call(null,inst_287942);
var state_288061__$1 = (function (){var statearr_288120 = state_288061;
(statearr_288120[(7)] = inst_287962__$1);

return statearr_288120;
})();
if(inst_287962__$1){
var statearr_288121_288208 = state_288061__$1;
(statearr_288121_288208[(1)] = (16));

} else {
var statearr_288122_288209 = state_288061__$1;
(statearr_288122_288209[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (9))){
var inst_287990 = (state_288061[(2)]);
var state_288061__$1 = state_288061;
var statearr_288123_288210 = state_288061__$1;
(statearr_288123_288210[(2)] = inst_287990);

(statearr_288123_288210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (5))){
var inst_287940 = cljs.core.deref.call(null,cs);
var inst_287941 = cljs.core.seq.call(null,inst_287940);
var inst_287942 = inst_287941;
var inst_287943 = null;
var inst_287944 = (0);
var inst_287945 = (0);
var state_288061__$1 = (function (){var statearr_288124 = state_288061;
(statearr_288124[(13)] = inst_287944);

(statearr_288124[(14)] = inst_287943);

(statearr_288124[(16)] = inst_287945);

(statearr_288124[(17)] = inst_287942);

return statearr_288124;
})();
var statearr_288125_288211 = state_288061__$1;
(statearr_288125_288211[(2)] = null);

(statearr_288125_288211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (14))){
var state_288061__$1 = state_288061;
var statearr_288126_288212 = state_288061__$1;
(statearr_288126_288212[(2)] = null);

(statearr_288126_288212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (45))){
var inst_288051 = (state_288061[(2)]);
var state_288061__$1 = state_288061;
var statearr_288127_288213 = state_288061__$1;
(statearr_288127_288213[(2)] = inst_288051);

(statearr_288127_288213[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (26))){
var inst_287993 = (state_288061[(29)]);
var inst_288047 = (state_288061[(2)]);
var inst_288048 = cljs.core.seq.call(null,inst_287993);
var state_288061__$1 = (function (){var statearr_288128 = state_288061;
(statearr_288128[(31)] = inst_288047);

return statearr_288128;
})();
if(inst_288048){
var statearr_288129_288214 = state_288061__$1;
(statearr_288129_288214[(1)] = (42));

} else {
var statearr_288130_288215 = state_288061__$1;
(statearr_288130_288215[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (16))){
var inst_287962 = (state_288061[(7)]);
var inst_287964 = cljs.core.chunked_seq_QMARK_.call(null,inst_287962);
var state_288061__$1 = state_288061;
if(inst_287964){
var statearr_288131_288216 = state_288061__$1;
(statearr_288131_288216[(1)] = (19));

} else {
var statearr_288132_288217 = state_288061__$1;
(statearr_288132_288217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (38))){
var inst_288040 = (state_288061[(2)]);
var state_288061__$1 = state_288061;
var statearr_288133_288220 = state_288061__$1;
(statearr_288133_288220[(2)] = inst_288040);

(statearr_288133_288220[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (30))){
var state_288061__$1 = state_288061;
var statearr_288134_288222 = state_288061__$1;
(statearr_288134_288222[(2)] = null);

(statearr_288134_288222[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (10))){
var inst_287943 = (state_288061[(14)]);
var inst_287945 = (state_288061[(16)]);
var inst_287951 = cljs.core._nth.call(null,inst_287943,inst_287945);
var inst_287952 = cljs.core.nth.call(null,inst_287951,(0),null);
var inst_287953 = cljs.core.nth.call(null,inst_287951,(1),null);
var state_288061__$1 = (function (){var statearr_288135 = state_288061;
(statearr_288135[(26)] = inst_287952);

return statearr_288135;
})();
if(cljs.core.truth_(inst_287953)){
var statearr_288136_288229 = state_288061__$1;
(statearr_288136_288229[(1)] = (13));

} else {
var statearr_288137_288230 = state_288061__$1;
(statearr_288137_288230[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (18))){
var inst_287986 = (state_288061[(2)]);
var state_288061__$1 = state_288061;
var statearr_288138_288231 = state_288061__$1;
(statearr_288138_288231[(2)] = inst_287986);

(statearr_288138_288231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (42))){
var state_288061__$1 = state_288061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288061__$1,(45),dchan);
} else {
if((state_val_288062 === (37))){
var inst_288020 = (state_288061[(25)]);
var inst_287933 = (state_288061[(11)]);
var inst_288029 = (state_288061[(23)]);
var inst_288029__$1 = cljs.core.first.call(null,inst_288020);
var inst_288030 = cljs.core.async.put_BANG_.call(null,inst_288029__$1,inst_287933,done);
var state_288061__$1 = (function (){var statearr_288139 = state_288061;
(statearr_288139[(23)] = inst_288029__$1);

return statearr_288139;
})();
if(cljs.core.truth_(inst_288030)){
var statearr_288140_288232 = state_288061__$1;
(statearr_288140_288232[(1)] = (39));

} else {
var statearr_288141_288233 = state_288061__$1;
(statearr_288141_288233[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288062 === (8))){
var inst_287944 = (state_288061[(13)]);
var inst_287945 = (state_288061[(16)]);
var inst_287947 = (inst_287945 < inst_287944);
var inst_287948 = inst_287947;
var state_288061__$1 = state_288061;
if(cljs.core.truth_(inst_287948)){
var statearr_288142_288234 = state_288061__$1;
(statearr_288142_288234[(1)] = (10));

} else {
var statearr_288143_288235 = state_288061__$1;
(statearr_288143_288235[(1)] = (11));

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
});})(c__40985__auto___288160,cs,m,dchan,dctr,done))
;
return ((function (switch__40398__auto__,c__40985__auto___288160,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40399__auto__ = null;
var cljs$core$async$mult_$_state_machine__40399__auto____0 = (function (){
var statearr_288147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_288147[(0)] = cljs$core$async$mult_$_state_machine__40399__auto__);

(statearr_288147[(1)] = (1));

return statearr_288147;
});
var cljs$core$async$mult_$_state_machine__40399__auto____1 = (function (state_288061){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_288061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e288148){if((e288148 instanceof Object)){
var ex__40402__auto__ = e288148;
var statearr_288149_288240 = state_288061;
(statearr_288149_288240[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288241 = state_288061;
state_288061 = G__288241;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40399__auto__ = function(state_288061){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40399__auto____1.call(this,state_288061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40399__auto____0;
cljs$core$async$mult_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40399__auto____1;
return cljs$core$async$mult_$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___288160,cs,m,dchan,dctr,done))
})();
var state__40987__auto__ = (function (){var statearr_288150 = f__40986__auto__.call(null);
(statearr_288150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___288160);

return statearr_288150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___288160,cs,m,dchan,dctr,done))
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
var args288242 = [];
var len__36461__auto___288246 = arguments.length;
var i__36462__auto___288247 = (0);
while(true){
if((i__36462__auto___288247 < len__36461__auto___288246)){
args288242.push((arguments[i__36462__auto___288247]));

var G__288248 = (i__36462__auto___288247 + (1));
i__36462__auto___288247 = G__288248;
continue;
} else {
}
break;
}

var G__288245 = args288242.length;
switch (G__288245) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288242.length)].join('')));

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
var len__36461__auto___288267 = arguments.length;
var i__36462__auto___288268 = (0);
while(true){
if((i__36462__auto___288268 < len__36461__auto___288267)){
args__36468__auto__.push((arguments[i__36462__auto___288268]));

var G__288269 = (i__36462__auto___288268 + (1));
i__36462__auto___288268 = G__288269;
continue;
} else {
}
break;
}

var argseq__36469__auto__ = ((((3) < args__36468__auto__.length))?(new cljs.core.IndexedSeq(args__36468__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36469__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__288261){
var map__288262 = p__288261;
var map__288262__$1 = ((((!((map__288262 == null)))?((((map__288262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__288262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288262):map__288262);
var opts = map__288262__$1;
var statearr_288264_288270 = state;
(statearr_288264_288270[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__288262,map__288262__$1,opts){
return (function (val){
var statearr_288265_288271 = state;
(statearr_288265_288271[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__288262,map__288262__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_288266_288272 = state;
(statearr_288266_288272[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq288256){
var G__288257 = cljs.core.first.call(null,seq288256);
var seq288256__$1 = cljs.core.next.call(null,seq288256);
var G__288258 = cljs.core.first.call(null,seq288256__$1);
var seq288256__$2 = cljs.core.next.call(null,seq288256__$1);
var G__288259 = cljs.core.first.call(null,seq288256__$2);
var seq288256__$3 = cljs.core.next.call(null,seq288256__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__288257,G__288258,G__288259,seq288256__$3);
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
if(typeof cljs.core.async.t_cljs$core$async288450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async288450 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta288451){
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
this.meta288451 = meta288451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async288450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_288452,meta288451__$1){
var self__ = this;
var _288452__$1 = this;
return (new cljs.core.async.t_cljs$core$async288450(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta288451__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async288450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_288452){
var self__ = this;
var _288452__$1 = this;
return self__.meta288451;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async288450.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async288450.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async288450.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async288450.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async288450.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async288450.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async288450.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async288450.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async288450.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta288451","meta288451",1698484695,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async288450.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async288450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async288450";

cljs.core.async.t_cljs$core$async288450.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async288450");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async288450 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async288450(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta288451){
return (new cljs.core.async.t_cljs$core$async288450(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta288451));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async288450(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40985__auto___288620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___288620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___288620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_288553){
var state_val_288554 = (state_288553[(1)]);
if((state_val_288554 === (7))){
var inst_288471 = (state_288553[(2)]);
var state_288553__$1 = state_288553;
var statearr_288555_288621 = state_288553__$1;
(statearr_288555_288621[(2)] = inst_288471);

(statearr_288555_288621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (20))){
var inst_288483 = (state_288553[(7)]);
var state_288553__$1 = state_288553;
var statearr_288556_288622 = state_288553__$1;
(statearr_288556_288622[(2)] = inst_288483);

(statearr_288556_288622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (27))){
var state_288553__$1 = state_288553;
var statearr_288557_288623 = state_288553__$1;
(statearr_288557_288623[(2)] = null);

(statearr_288557_288623[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (1))){
var inst_288459 = (state_288553[(8)]);
var inst_288459__$1 = calc_state.call(null);
var inst_288461 = (inst_288459__$1 == null);
var inst_288462 = cljs.core.not.call(null,inst_288461);
var state_288553__$1 = (function (){var statearr_288558 = state_288553;
(statearr_288558[(8)] = inst_288459__$1);

return statearr_288558;
})();
if(inst_288462){
var statearr_288559_288624 = state_288553__$1;
(statearr_288559_288624[(1)] = (2));

} else {
var statearr_288560_288625 = state_288553__$1;
(statearr_288560_288625[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (24))){
var inst_288513 = (state_288553[(9)]);
var inst_288506 = (state_288553[(10)]);
var inst_288527 = (state_288553[(11)]);
var inst_288527__$1 = inst_288506.call(null,inst_288513);
var state_288553__$1 = (function (){var statearr_288561 = state_288553;
(statearr_288561[(11)] = inst_288527__$1);

return statearr_288561;
})();
if(cljs.core.truth_(inst_288527__$1)){
var statearr_288562_288628 = state_288553__$1;
(statearr_288562_288628[(1)] = (29));

} else {
var statearr_288563_288629 = state_288553__$1;
(statearr_288563_288629[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (4))){
var inst_288474 = (state_288553[(2)]);
var state_288553__$1 = state_288553;
if(cljs.core.truth_(inst_288474)){
var statearr_288564_288630 = state_288553__$1;
(statearr_288564_288630[(1)] = (8));

} else {
var statearr_288565_288631 = state_288553__$1;
(statearr_288565_288631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (15))){
var inst_288500 = (state_288553[(2)]);
var state_288553__$1 = state_288553;
if(cljs.core.truth_(inst_288500)){
var statearr_288566_288633 = state_288553__$1;
(statearr_288566_288633[(1)] = (19));

} else {
var statearr_288567_288635 = state_288553__$1;
(statearr_288567_288635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (21))){
var inst_288505 = (state_288553[(12)]);
var inst_288505__$1 = (state_288553[(2)]);
var inst_288506 = cljs.core.get.call(null,inst_288505__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_288507 = cljs.core.get.call(null,inst_288505__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_288508 = cljs.core.get.call(null,inst_288505__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_288553__$1 = (function (){var statearr_288568 = state_288553;
(statearr_288568[(13)] = inst_288507);

(statearr_288568[(10)] = inst_288506);

(statearr_288568[(12)] = inst_288505__$1);

return statearr_288568;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_288553__$1,(22),inst_288508);
} else {
if((state_val_288554 === (31))){
var inst_288535 = (state_288553[(2)]);
var state_288553__$1 = state_288553;
if(cljs.core.truth_(inst_288535)){
var statearr_288569_288639 = state_288553__$1;
(statearr_288569_288639[(1)] = (32));

} else {
var statearr_288570_288640 = state_288553__$1;
(statearr_288570_288640[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (32))){
var inst_288512 = (state_288553[(14)]);
var state_288553__$1 = state_288553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288553__$1,(35),out,inst_288512);
} else {
if((state_val_288554 === (33))){
var inst_288505 = (state_288553[(12)]);
var inst_288483 = inst_288505;
var state_288553__$1 = (function (){var statearr_288571 = state_288553;
(statearr_288571[(7)] = inst_288483);

return statearr_288571;
})();
var statearr_288572_288641 = state_288553__$1;
(statearr_288572_288641[(2)] = null);

(statearr_288572_288641[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (13))){
var inst_288483 = (state_288553[(7)]);
var inst_288490 = inst_288483.cljs$lang$protocol_mask$partition0$;
var inst_288491 = (inst_288490 & (64));
var inst_288492 = inst_288483.cljs$core$ISeq$;
var inst_288493 = (inst_288491) || (inst_288492);
var state_288553__$1 = state_288553;
if(cljs.core.truth_(inst_288493)){
var statearr_288574_288645 = state_288553__$1;
(statearr_288574_288645[(1)] = (16));

} else {
var statearr_288575_288646 = state_288553__$1;
(statearr_288575_288646[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (22))){
var inst_288513 = (state_288553[(9)]);
var inst_288512 = (state_288553[(14)]);
var inst_288511 = (state_288553[(2)]);
var inst_288512__$1 = cljs.core.nth.call(null,inst_288511,(0),null);
var inst_288513__$1 = cljs.core.nth.call(null,inst_288511,(1),null);
var inst_288514 = (inst_288512__$1 == null);
var inst_288515 = cljs.core._EQ_.call(null,inst_288513__$1,change);
var inst_288516 = (inst_288514) || (inst_288515);
var state_288553__$1 = (function (){var statearr_288576 = state_288553;
(statearr_288576[(9)] = inst_288513__$1);

(statearr_288576[(14)] = inst_288512__$1);

return statearr_288576;
})();
if(cljs.core.truth_(inst_288516)){
var statearr_288577_288649 = state_288553__$1;
(statearr_288577_288649[(1)] = (23));

} else {
var statearr_288578_288650 = state_288553__$1;
(statearr_288578_288650[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (36))){
var inst_288505 = (state_288553[(12)]);
var inst_288483 = inst_288505;
var state_288553__$1 = (function (){var statearr_288579 = state_288553;
(statearr_288579[(7)] = inst_288483);

return statearr_288579;
})();
var statearr_288580_288651 = state_288553__$1;
(statearr_288580_288651[(2)] = null);

(statearr_288580_288651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (29))){
var inst_288527 = (state_288553[(11)]);
var state_288553__$1 = state_288553;
var statearr_288581_288654 = state_288553__$1;
(statearr_288581_288654[(2)] = inst_288527);

(statearr_288581_288654[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (6))){
var state_288553__$1 = state_288553;
var statearr_288582_288655 = state_288553__$1;
(statearr_288582_288655[(2)] = false);

(statearr_288582_288655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (28))){
var inst_288523 = (state_288553[(2)]);
var inst_288524 = calc_state.call(null);
var inst_288483 = inst_288524;
var state_288553__$1 = (function (){var statearr_288584 = state_288553;
(statearr_288584[(7)] = inst_288483);

(statearr_288584[(15)] = inst_288523);

return statearr_288584;
})();
var statearr_288585_288658 = state_288553__$1;
(statearr_288585_288658[(2)] = null);

(statearr_288585_288658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (25))){
var inst_288549 = (state_288553[(2)]);
var state_288553__$1 = state_288553;
var statearr_288586_288659 = state_288553__$1;
(statearr_288586_288659[(2)] = inst_288549);

(statearr_288586_288659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (34))){
var inst_288547 = (state_288553[(2)]);
var state_288553__$1 = state_288553;
var statearr_288587_288661 = state_288553__$1;
(statearr_288587_288661[(2)] = inst_288547);

(statearr_288587_288661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (17))){
var state_288553__$1 = state_288553;
var statearr_288588_288663 = state_288553__$1;
(statearr_288588_288663[(2)] = false);

(statearr_288588_288663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (3))){
var state_288553__$1 = state_288553;
var statearr_288589_288664 = state_288553__$1;
(statearr_288589_288664[(2)] = false);

(statearr_288589_288664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (12))){
var inst_288551 = (state_288553[(2)]);
var state_288553__$1 = state_288553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288553__$1,inst_288551);
} else {
if((state_val_288554 === (2))){
var inst_288459 = (state_288553[(8)]);
var inst_288464 = inst_288459.cljs$lang$protocol_mask$partition0$;
var inst_288465 = (inst_288464 & (64));
var inst_288466 = inst_288459.cljs$core$ISeq$;
var inst_288467 = (inst_288465) || (inst_288466);
var state_288553__$1 = state_288553;
if(cljs.core.truth_(inst_288467)){
var statearr_288590_288667 = state_288553__$1;
(statearr_288590_288667[(1)] = (5));

} else {
var statearr_288591_288668 = state_288553__$1;
(statearr_288591_288668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (23))){
var inst_288512 = (state_288553[(14)]);
var inst_288518 = (inst_288512 == null);
var state_288553__$1 = state_288553;
if(cljs.core.truth_(inst_288518)){
var statearr_288592_288669 = state_288553__$1;
(statearr_288592_288669[(1)] = (26));

} else {
var statearr_288593_288674 = state_288553__$1;
(statearr_288593_288674[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (35))){
var inst_288538 = (state_288553[(2)]);
var state_288553__$1 = state_288553;
if(cljs.core.truth_(inst_288538)){
var statearr_288594_288676 = state_288553__$1;
(statearr_288594_288676[(1)] = (36));

} else {
var statearr_288595_288678 = state_288553__$1;
(statearr_288595_288678[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (19))){
var inst_288483 = (state_288553[(7)]);
var inst_288502 = cljs.core.apply.call(null,cljs.core.hash_map,inst_288483);
var state_288553__$1 = state_288553;
var statearr_288596_288680 = state_288553__$1;
(statearr_288596_288680[(2)] = inst_288502);

(statearr_288596_288680[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (11))){
var inst_288483 = (state_288553[(7)]);
var inst_288487 = (inst_288483 == null);
var inst_288488 = cljs.core.not.call(null,inst_288487);
var state_288553__$1 = state_288553;
if(inst_288488){
var statearr_288597_288682 = state_288553__$1;
(statearr_288597_288682[(1)] = (13));

} else {
var statearr_288598_288689 = state_288553__$1;
(statearr_288598_288689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (9))){
var inst_288459 = (state_288553[(8)]);
var state_288553__$1 = state_288553;
var statearr_288599_288691 = state_288553__$1;
(statearr_288599_288691[(2)] = inst_288459);

(statearr_288599_288691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (5))){
var state_288553__$1 = state_288553;
var statearr_288600_288693 = state_288553__$1;
(statearr_288600_288693[(2)] = true);

(statearr_288600_288693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (14))){
var state_288553__$1 = state_288553;
var statearr_288601_288695 = state_288553__$1;
(statearr_288601_288695[(2)] = false);

(statearr_288601_288695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (26))){
var inst_288513 = (state_288553[(9)]);
var inst_288520 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_288513);
var state_288553__$1 = state_288553;
var statearr_288603_288698 = state_288553__$1;
(statearr_288603_288698[(2)] = inst_288520);

(statearr_288603_288698[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (16))){
var state_288553__$1 = state_288553;
var statearr_288604_288699 = state_288553__$1;
(statearr_288604_288699[(2)] = true);

(statearr_288604_288699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (38))){
var inst_288543 = (state_288553[(2)]);
var state_288553__$1 = state_288553;
var statearr_288605_288701 = state_288553__$1;
(statearr_288605_288701[(2)] = inst_288543);

(statearr_288605_288701[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (30))){
var inst_288513 = (state_288553[(9)]);
var inst_288507 = (state_288553[(13)]);
var inst_288506 = (state_288553[(10)]);
var inst_288530 = cljs.core.empty_QMARK_.call(null,inst_288506);
var inst_288531 = inst_288507.call(null,inst_288513);
var inst_288532 = cljs.core.not.call(null,inst_288531);
var inst_288533 = (inst_288530) && (inst_288532);
var state_288553__$1 = state_288553;
var statearr_288606_288705 = state_288553__$1;
(statearr_288606_288705[(2)] = inst_288533);

(statearr_288606_288705[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (10))){
var inst_288459 = (state_288553[(8)]);
var inst_288479 = (state_288553[(2)]);
var inst_288480 = cljs.core.get.call(null,inst_288479,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_288481 = cljs.core.get.call(null,inst_288479,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_288482 = cljs.core.get.call(null,inst_288479,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_288483 = inst_288459;
var state_288553__$1 = (function (){var statearr_288607 = state_288553;
(statearr_288607[(16)] = inst_288481);

(statearr_288607[(7)] = inst_288483);

(statearr_288607[(17)] = inst_288480);

(statearr_288607[(18)] = inst_288482);

return statearr_288607;
})();
var statearr_288608_288714 = state_288553__$1;
(statearr_288608_288714[(2)] = null);

(statearr_288608_288714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (18))){
var inst_288497 = (state_288553[(2)]);
var state_288553__$1 = state_288553;
var statearr_288609_288715 = state_288553__$1;
(statearr_288609_288715[(2)] = inst_288497);

(statearr_288609_288715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (37))){
var state_288553__$1 = state_288553;
var statearr_288610_288716 = state_288553__$1;
(statearr_288610_288716[(2)] = null);

(statearr_288610_288716[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288554 === (8))){
var inst_288459 = (state_288553[(8)]);
var inst_288476 = cljs.core.apply.call(null,cljs.core.hash_map,inst_288459);
var state_288553__$1 = state_288553;
var statearr_288611_288718 = state_288553__$1;
(statearr_288611_288718[(2)] = inst_288476);

(statearr_288611_288718[(1)] = (10));


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
});})(c__40985__auto___288620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40398__auto__,c__40985__auto___288620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40399__auto__ = null;
var cljs$core$async$mix_$_state_machine__40399__auto____0 = (function (){
var statearr_288616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_288616[(0)] = cljs$core$async$mix_$_state_machine__40399__auto__);

(statearr_288616[(1)] = (1));

return statearr_288616;
});
var cljs$core$async$mix_$_state_machine__40399__auto____1 = (function (state_288553){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_288553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e288617){if((e288617 instanceof Object)){
var ex__40402__auto__ = e288617;
var statearr_288618_288719 = state_288553;
(statearr_288618_288719[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288725 = state_288553;
state_288553 = G__288725;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40399__auto__ = function(state_288553){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40399__auto____1.call(this,state_288553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40399__auto____0;
cljs$core$async$mix_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40399__auto____1;
return cljs$core$async$mix_$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___288620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40987__auto__ = (function (){var statearr_288619 = f__40986__auto__.call(null);
(statearr_288619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___288620);

return statearr_288619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___288620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args288745 = [];
var len__36461__auto___288760 = arguments.length;
var i__36462__auto___288761 = (0);
while(true){
if((i__36462__auto___288761 < len__36461__auto___288760)){
args288745.push((arguments[i__36462__auto___288761]));

var G__288763 = (i__36462__auto___288761 + (1));
i__36462__auto___288761 = G__288763;
continue;
} else {
}
break;
}

var G__288754 = args288745.length;
switch (G__288754) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288745.length)].join('')));

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
var args288779 = [];
var len__36461__auto___288949 = arguments.length;
var i__36462__auto___288950 = (0);
while(true){
if((i__36462__auto___288950 < len__36461__auto___288949)){
args288779.push((arguments[i__36462__auto___288950]));

var G__288951 = (i__36462__auto___288950 + (1));
i__36462__auto___288950 = G__288951;
continue;
} else {
}
break;
}

var G__288783 = args288779.length;
switch (G__288783) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288779.length)].join('')));

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
return (function (p1__288777_SHARP_){
if(cljs.core.truth_(p1__288777_SHARP_.call(null,topic))){
return p1__288777_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__288777_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35392__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async288786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async288786 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta288787){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta288787 = meta288787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async288786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_288788,meta288787__$1){
var self__ = this;
var _288788__$1 = this;
return (new cljs.core.async.t_cljs$core$async288786(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta288787__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async288786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_288788){
var self__ = this;
var _288788__$1 = this;
return self__.meta288787;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async288786.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async288786.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async288786.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async288786.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async288786.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async288786.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async288786.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async288786.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta288787","meta288787",1052251007,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async288786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async288786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async288786";

cljs.core.async.t_cljs$core$async288786.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async288786");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async288786 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async288786(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta288787){
return (new cljs.core.async.t_cljs$core$async288786(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta288787));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async288786(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40985__auto___288958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___288958,mults,ensure_mult,p){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___288958,mults,ensure_mult,p){
return (function (state_288870){
var state_val_288871 = (state_288870[(1)]);
if((state_val_288871 === (7))){
var inst_288866 = (state_288870[(2)]);
var state_288870__$1 = state_288870;
var statearr_288872_288959 = state_288870__$1;
(statearr_288872_288959[(2)] = inst_288866);

(statearr_288872_288959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (20))){
var state_288870__$1 = state_288870;
var statearr_288873_288960 = state_288870__$1;
(statearr_288873_288960[(2)] = null);

(statearr_288873_288960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (1))){
var state_288870__$1 = state_288870;
var statearr_288874_288961 = state_288870__$1;
(statearr_288874_288961[(2)] = null);

(statearr_288874_288961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (24))){
var inst_288849 = (state_288870[(7)]);
var inst_288858 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_288849);
var state_288870__$1 = state_288870;
var statearr_288875_288962 = state_288870__$1;
(statearr_288875_288962[(2)] = inst_288858);

(statearr_288875_288962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (4))){
var inst_288800 = (state_288870[(8)]);
var inst_288800__$1 = (state_288870[(2)]);
var inst_288801 = (inst_288800__$1 == null);
var state_288870__$1 = (function (){var statearr_288876 = state_288870;
(statearr_288876[(8)] = inst_288800__$1);

return statearr_288876;
})();
if(cljs.core.truth_(inst_288801)){
var statearr_288877_288963 = state_288870__$1;
(statearr_288877_288963[(1)] = (5));

} else {
var statearr_288882_288964 = state_288870__$1;
(statearr_288882_288964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (15))){
var inst_288843 = (state_288870[(2)]);
var state_288870__$1 = state_288870;
var statearr_288883_288966 = state_288870__$1;
(statearr_288883_288966[(2)] = inst_288843);

(statearr_288883_288966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (21))){
var inst_288863 = (state_288870[(2)]);
var state_288870__$1 = (function (){var statearr_288884 = state_288870;
(statearr_288884[(9)] = inst_288863);

return statearr_288884;
})();
var statearr_288886_288967 = state_288870__$1;
(statearr_288886_288967[(2)] = null);

(statearr_288886_288967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (13))){
var inst_288824 = (state_288870[(10)]);
var inst_288826 = cljs.core.chunked_seq_QMARK_.call(null,inst_288824);
var state_288870__$1 = state_288870;
if(inst_288826){
var statearr_288888_288968 = state_288870__$1;
(statearr_288888_288968[(1)] = (16));

} else {
var statearr_288889_288970 = state_288870__$1;
(statearr_288889_288970[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (22))){
var inst_288855 = (state_288870[(2)]);
var state_288870__$1 = state_288870;
if(cljs.core.truth_(inst_288855)){
var statearr_288890_288971 = state_288870__$1;
(statearr_288890_288971[(1)] = (23));

} else {
var statearr_288891_288972 = state_288870__$1;
(statearr_288891_288972[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (6))){
var inst_288851 = (state_288870[(11)]);
var inst_288849 = (state_288870[(7)]);
var inst_288800 = (state_288870[(8)]);
var inst_288849__$1 = topic_fn.call(null,inst_288800);
var inst_288850 = cljs.core.deref.call(null,mults);
var inst_288851__$1 = cljs.core.get.call(null,inst_288850,inst_288849__$1);
var state_288870__$1 = (function (){var statearr_288893 = state_288870;
(statearr_288893[(11)] = inst_288851__$1);

(statearr_288893[(7)] = inst_288849__$1);

return statearr_288893;
})();
if(cljs.core.truth_(inst_288851__$1)){
var statearr_288894_288973 = state_288870__$1;
(statearr_288894_288973[(1)] = (19));

} else {
var statearr_288896_288974 = state_288870__$1;
(statearr_288896_288974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (25))){
var inst_288860 = (state_288870[(2)]);
var state_288870__$1 = state_288870;
var statearr_288897_288975 = state_288870__$1;
(statearr_288897_288975[(2)] = inst_288860);

(statearr_288897_288975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (17))){
var inst_288824 = (state_288870[(10)]);
var inst_288834 = cljs.core.first.call(null,inst_288824);
var inst_288835 = cljs.core.async.muxch_STAR_.call(null,inst_288834);
var inst_288836 = cljs.core.async.close_BANG_.call(null,inst_288835);
var inst_288837 = cljs.core.next.call(null,inst_288824);
var inst_288810 = inst_288837;
var inst_288811 = null;
var inst_288812 = (0);
var inst_288813 = (0);
var state_288870__$1 = (function (){var statearr_288904 = state_288870;
(statearr_288904[(12)] = inst_288813);

(statearr_288904[(13)] = inst_288811);

(statearr_288904[(14)] = inst_288836);

(statearr_288904[(15)] = inst_288810);

(statearr_288904[(16)] = inst_288812);

return statearr_288904;
})();
var statearr_288905_288978 = state_288870__$1;
(statearr_288905_288978[(2)] = null);

(statearr_288905_288978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (3))){
var inst_288868 = (state_288870[(2)]);
var state_288870__$1 = state_288870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288870__$1,inst_288868);
} else {
if((state_val_288871 === (12))){
var inst_288845 = (state_288870[(2)]);
var state_288870__$1 = state_288870;
var statearr_288907_288979 = state_288870__$1;
(statearr_288907_288979[(2)] = inst_288845);

(statearr_288907_288979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (2))){
var state_288870__$1 = state_288870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288870__$1,(4),ch);
} else {
if((state_val_288871 === (23))){
var state_288870__$1 = state_288870;
var statearr_288909_288980 = state_288870__$1;
(statearr_288909_288980[(2)] = null);

(statearr_288909_288980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (19))){
var inst_288851 = (state_288870[(11)]);
var inst_288800 = (state_288870[(8)]);
var inst_288853 = cljs.core.async.muxch_STAR_.call(null,inst_288851);
var state_288870__$1 = state_288870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288870__$1,(22),inst_288853,inst_288800);
} else {
if((state_val_288871 === (11))){
var inst_288824 = (state_288870[(10)]);
var inst_288810 = (state_288870[(15)]);
var inst_288824__$1 = cljs.core.seq.call(null,inst_288810);
var state_288870__$1 = (function (){var statearr_288911 = state_288870;
(statearr_288911[(10)] = inst_288824__$1);

return statearr_288911;
})();
if(inst_288824__$1){
var statearr_288912_288982 = state_288870__$1;
(statearr_288912_288982[(1)] = (13));

} else {
var statearr_288913_288985 = state_288870__$1;
(statearr_288913_288985[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (9))){
var inst_288847 = (state_288870[(2)]);
var state_288870__$1 = state_288870;
var statearr_288915_288987 = state_288870__$1;
(statearr_288915_288987[(2)] = inst_288847);

(statearr_288915_288987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (5))){
var inst_288807 = cljs.core.deref.call(null,mults);
var inst_288808 = cljs.core.vals.call(null,inst_288807);
var inst_288809 = cljs.core.seq.call(null,inst_288808);
var inst_288810 = inst_288809;
var inst_288811 = null;
var inst_288812 = (0);
var inst_288813 = (0);
var state_288870__$1 = (function (){var statearr_288917 = state_288870;
(statearr_288917[(12)] = inst_288813);

(statearr_288917[(13)] = inst_288811);

(statearr_288917[(15)] = inst_288810);

(statearr_288917[(16)] = inst_288812);

return statearr_288917;
})();
var statearr_288918_288989 = state_288870__$1;
(statearr_288918_288989[(2)] = null);

(statearr_288918_288989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (14))){
var state_288870__$1 = state_288870;
var statearr_288922_288990 = state_288870__$1;
(statearr_288922_288990[(2)] = null);

(statearr_288922_288990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (16))){
var inst_288824 = (state_288870[(10)]);
var inst_288829 = cljs.core.chunk_first.call(null,inst_288824);
var inst_288830 = cljs.core.chunk_rest.call(null,inst_288824);
var inst_288831 = cljs.core.count.call(null,inst_288829);
var inst_288810 = inst_288830;
var inst_288811 = inst_288829;
var inst_288812 = inst_288831;
var inst_288813 = (0);
var state_288870__$1 = (function (){var statearr_288924 = state_288870;
(statearr_288924[(12)] = inst_288813);

(statearr_288924[(13)] = inst_288811);

(statearr_288924[(15)] = inst_288810);

(statearr_288924[(16)] = inst_288812);

return statearr_288924;
})();
var statearr_288925_288994 = state_288870__$1;
(statearr_288925_288994[(2)] = null);

(statearr_288925_288994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (10))){
var inst_288813 = (state_288870[(12)]);
var inst_288811 = (state_288870[(13)]);
var inst_288810 = (state_288870[(15)]);
var inst_288812 = (state_288870[(16)]);
var inst_288818 = cljs.core._nth.call(null,inst_288811,inst_288813);
var inst_288819 = cljs.core.async.muxch_STAR_.call(null,inst_288818);
var inst_288820 = cljs.core.async.close_BANG_.call(null,inst_288819);
var inst_288821 = (inst_288813 + (1));
var tmp288919 = inst_288811;
var tmp288920 = inst_288810;
var tmp288921 = inst_288812;
var inst_288810__$1 = tmp288920;
var inst_288811__$1 = tmp288919;
var inst_288812__$1 = tmp288921;
var inst_288813__$1 = inst_288821;
var state_288870__$1 = (function (){var statearr_288927 = state_288870;
(statearr_288927[(12)] = inst_288813__$1);

(statearr_288927[(13)] = inst_288811__$1);

(statearr_288927[(17)] = inst_288820);

(statearr_288927[(15)] = inst_288810__$1);

(statearr_288927[(16)] = inst_288812__$1);

return statearr_288927;
})();
var statearr_288929_288999 = state_288870__$1;
(statearr_288929_288999[(2)] = null);

(statearr_288929_288999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (18))){
var inst_288840 = (state_288870[(2)]);
var state_288870__$1 = state_288870;
var statearr_288930_289000 = state_288870__$1;
(statearr_288930_289000[(2)] = inst_288840);

(statearr_288930_289000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288871 === (8))){
var inst_288813 = (state_288870[(12)]);
var inst_288812 = (state_288870[(16)]);
var inst_288815 = (inst_288813 < inst_288812);
var inst_288816 = inst_288815;
var state_288870__$1 = state_288870;
if(cljs.core.truth_(inst_288816)){
var statearr_288931_289002 = state_288870__$1;
(statearr_288931_289002[(1)] = (10));

} else {
var statearr_288932_289003 = state_288870__$1;
(statearr_288932_289003[(1)] = (11));

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
});})(c__40985__auto___288958,mults,ensure_mult,p))
;
return ((function (switch__40398__auto__,c__40985__auto___288958,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_288944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_288944[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_288944[(1)] = (1));

return statearr_288944;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_288870){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_288870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e288945){if((e288945 instanceof Object)){
var ex__40402__auto__ = e288945;
var statearr_288947_289007 = state_288870;
(statearr_288947_289007[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__289008 = state_288870;
state_288870 = G__289008;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_288870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_288870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___288958,mults,ensure_mult,p))
})();
var state__40987__auto__ = (function (){var statearr_288948 = f__40986__auto__.call(null);
(statearr_288948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___288958);

return statearr_288948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___288958,mults,ensure_mult,p))
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
var args289010 = [];
var len__36461__auto___289019 = arguments.length;
var i__36462__auto___289020 = (0);
while(true){
if((i__36462__auto___289020 < len__36461__auto___289019)){
args289010.push((arguments[i__36462__auto___289020]));

var G__289021 = (i__36462__auto___289020 + (1));
i__36462__auto___289020 = G__289021;
continue;
} else {
}
break;
}

var G__289015 = args289010.length;
switch (G__289015) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289010.length)].join('')));

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
var args289023 = [];
var len__36461__auto___289026 = arguments.length;
var i__36462__auto___289027 = (0);
while(true){
if((i__36462__auto___289027 < len__36461__auto___289026)){
args289023.push((arguments[i__36462__auto___289027]));

var G__289028 = (i__36462__auto___289027 + (1));
i__36462__auto___289027 = G__289028;
continue;
} else {
}
break;
}

var G__289025 = args289023.length;
switch (G__289025) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289023.length)].join('')));

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
var args289030 = [];
var len__36461__auto___289114 = arguments.length;
var i__36462__auto___289115 = (0);
while(true){
if((i__36462__auto___289115 < len__36461__auto___289114)){
args289030.push((arguments[i__36462__auto___289115]));

var G__289116 = (i__36462__auto___289115 + (1));
i__36462__auto___289115 = G__289116;
continue;
} else {
}
break;
}

var G__289032 = args289030.length;
switch (G__289032) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289030.length)].join('')));

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
var c__40985__auto___289128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___289128,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___289128,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_289071){
var state_val_289072 = (state_289071[(1)]);
if((state_val_289072 === (7))){
var state_289071__$1 = state_289071;
var statearr_289075_289129 = state_289071__$1;
(statearr_289075_289129[(2)] = null);

(statearr_289075_289129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289072 === (1))){
var state_289071__$1 = state_289071;
var statearr_289078_289130 = state_289071__$1;
(statearr_289078_289130[(2)] = null);

(statearr_289078_289130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289072 === (4))){
var inst_289035 = (state_289071[(7)]);
var inst_289037 = (inst_289035 < cnt);
var state_289071__$1 = state_289071;
if(cljs.core.truth_(inst_289037)){
var statearr_289079_289135 = state_289071__$1;
(statearr_289079_289135[(1)] = (6));

} else {
var statearr_289082_289136 = state_289071__$1;
(statearr_289082_289136[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289072 === (15))){
var inst_289067 = (state_289071[(2)]);
var state_289071__$1 = state_289071;
var statearr_289083_289138 = state_289071__$1;
(statearr_289083_289138[(2)] = inst_289067);

(statearr_289083_289138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289072 === (13))){
var inst_289060 = cljs.core.async.close_BANG_.call(null,out);
var state_289071__$1 = state_289071;
var statearr_289084_289140 = state_289071__$1;
(statearr_289084_289140[(2)] = inst_289060);

(statearr_289084_289140[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289072 === (6))){
var state_289071__$1 = state_289071;
var statearr_289085_289142 = state_289071__$1;
(statearr_289085_289142[(2)] = null);

(statearr_289085_289142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289072 === (3))){
var inst_289069 = (state_289071[(2)]);
var state_289071__$1 = state_289071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_289071__$1,inst_289069);
} else {
if((state_val_289072 === (12))){
var inst_289057 = (state_289071[(8)]);
var inst_289057__$1 = (state_289071[(2)]);
var inst_289058 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_289057__$1);
var state_289071__$1 = (function (){var statearr_289086 = state_289071;
(statearr_289086[(8)] = inst_289057__$1);

return statearr_289086;
})();
if(cljs.core.truth_(inst_289058)){
var statearr_289087_289146 = state_289071__$1;
(statearr_289087_289146[(1)] = (13));

} else {
var statearr_289088_289147 = state_289071__$1;
(statearr_289088_289147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289072 === (2))){
var inst_289034 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_289035 = (0);
var state_289071__$1 = (function (){var statearr_289089 = state_289071;
(statearr_289089[(9)] = inst_289034);

(statearr_289089[(7)] = inst_289035);

return statearr_289089;
})();
var statearr_289090_289148 = state_289071__$1;
(statearr_289090_289148[(2)] = null);

(statearr_289090_289148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289072 === (11))){
var inst_289035 = (state_289071[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_289071,(10),Object,null,(9));
var inst_289044 = chs__$1.call(null,inst_289035);
var inst_289045 = done.call(null,inst_289035);
var inst_289046 = cljs.core.async.take_BANG_.call(null,inst_289044,inst_289045);
var state_289071__$1 = state_289071;
var statearr_289092_289152 = state_289071__$1;
(statearr_289092_289152[(2)] = inst_289046);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_289071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289072 === (9))){
var inst_289035 = (state_289071[(7)]);
var inst_289048 = (state_289071[(2)]);
var inst_289049 = (inst_289035 + (1));
var inst_289035__$1 = inst_289049;
var state_289071__$1 = (function (){var statearr_289093 = state_289071;
(statearr_289093[(10)] = inst_289048);

(statearr_289093[(7)] = inst_289035__$1);

return statearr_289093;
})();
var statearr_289095_289159 = state_289071__$1;
(statearr_289095_289159[(2)] = null);

(statearr_289095_289159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289072 === (5))){
var inst_289055 = (state_289071[(2)]);
var state_289071__$1 = (function (){var statearr_289096 = state_289071;
(statearr_289096[(11)] = inst_289055);

return statearr_289096;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_289071__$1,(12),dchan);
} else {
if((state_val_289072 === (14))){
var inst_289057 = (state_289071[(8)]);
var inst_289062 = cljs.core.apply.call(null,f,inst_289057);
var state_289071__$1 = state_289071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_289071__$1,(16),out,inst_289062);
} else {
if((state_val_289072 === (16))){
var inst_289064 = (state_289071[(2)]);
var state_289071__$1 = (function (){var statearr_289098 = state_289071;
(statearr_289098[(12)] = inst_289064);

return statearr_289098;
})();
var statearr_289099_289162 = state_289071__$1;
(statearr_289099_289162[(2)] = null);

(statearr_289099_289162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289072 === (10))){
var inst_289039 = (state_289071[(2)]);
var inst_289040 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_289071__$1 = (function (){var statearr_289100 = state_289071;
(statearr_289100[(13)] = inst_289039);

return statearr_289100;
})();
var statearr_289101_289166 = state_289071__$1;
(statearr_289101_289166[(2)] = inst_289040);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_289071__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289072 === (8))){
var inst_289053 = (state_289071[(2)]);
var state_289071__$1 = state_289071;
var statearr_289102_289170 = state_289071__$1;
(statearr_289102_289170[(2)] = inst_289053);

(statearr_289102_289170[(1)] = (5));


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
});})(c__40985__auto___289128,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40398__auto__,c__40985__auto___289128,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_289110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_289110[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_289110[(1)] = (1));

return statearr_289110;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_289071){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_289071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e289111){if((e289111 instanceof Object)){
var ex__40402__auto__ = e289111;
var statearr_289112_289177 = state_289071;
(statearr_289112_289177[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_289071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e289111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__289184 = state_289071;
state_289071 = G__289184;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_289071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_289071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___289128,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40987__auto__ = (function (){var statearr_289113 = f__40986__auto__.call(null);
(statearr_289113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___289128);

return statearr_289113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___289128,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args289189 = [];
var len__36461__auto___289250 = arguments.length;
var i__36462__auto___289252 = (0);
while(true){
if((i__36462__auto___289252 < len__36461__auto___289250)){
args289189.push((arguments[i__36462__auto___289252]));

var G__289254 = (i__36462__auto___289252 + (1));
i__36462__auto___289252 = G__289254;
continue;
} else {
}
break;
}

var G__289192 = args289189.length;
switch (G__289192) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289189.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40985__auto___289257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___289257,out){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___289257,out){
return (function (state_289222){
var state_val_289223 = (state_289222[(1)]);
if((state_val_289223 === (7))){
var inst_289202 = (state_289222[(7)]);
var inst_289201 = (state_289222[(8)]);
var inst_289201__$1 = (state_289222[(2)]);
var inst_289202__$1 = cljs.core.nth.call(null,inst_289201__$1,(0),null);
var inst_289203 = cljs.core.nth.call(null,inst_289201__$1,(1),null);
var inst_289204 = (inst_289202__$1 == null);
var state_289222__$1 = (function (){var statearr_289224 = state_289222;
(statearr_289224[(7)] = inst_289202__$1);

(statearr_289224[(9)] = inst_289203);

(statearr_289224[(8)] = inst_289201__$1);

return statearr_289224;
})();
if(cljs.core.truth_(inst_289204)){
var statearr_289225_289262 = state_289222__$1;
(statearr_289225_289262[(1)] = (8));

} else {
var statearr_289226_289263 = state_289222__$1;
(statearr_289226_289263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289223 === (1))){
var inst_289193 = cljs.core.vec.call(null,chs);
var inst_289194 = inst_289193;
var state_289222__$1 = (function (){var statearr_289227 = state_289222;
(statearr_289227[(10)] = inst_289194);

return statearr_289227;
})();
var statearr_289228_289266 = state_289222__$1;
(statearr_289228_289266[(2)] = null);

(statearr_289228_289266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289223 === (4))){
var inst_289194 = (state_289222[(10)]);
var state_289222__$1 = state_289222;
return cljs.core.async.ioc_alts_BANG_.call(null,state_289222__$1,(7),inst_289194);
} else {
if((state_val_289223 === (6))){
var inst_289218 = (state_289222[(2)]);
var state_289222__$1 = state_289222;
var statearr_289229_289268 = state_289222__$1;
(statearr_289229_289268[(2)] = inst_289218);

(statearr_289229_289268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289223 === (3))){
var inst_289220 = (state_289222[(2)]);
var state_289222__$1 = state_289222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_289222__$1,inst_289220);
} else {
if((state_val_289223 === (2))){
var inst_289194 = (state_289222[(10)]);
var inst_289196 = cljs.core.count.call(null,inst_289194);
var inst_289197 = (inst_289196 > (0));
var state_289222__$1 = state_289222;
if(cljs.core.truth_(inst_289197)){
var statearr_289231_289269 = state_289222__$1;
(statearr_289231_289269[(1)] = (4));

} else {
var statearr_289232_289270 = state_289222__$1;
(statearr_289232_289270[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289223 === (11))){
var inst_289194 = (state_289222[(10)]);
var inst_289211 = (state_289222[(2)]);
var tmp289230 = inst_289194;
var inst_289194__$1 = tmp289230;
var state_289222__$1 = (function (){var statearr_289233 = state_289222;
(statearr_289233[(11)] = inst_289211);

(statearr_289233[(10)] = inst_289194__$1);

return statearr_289233;
})();
var statearr_289234_289271 = state_289222__$1;
(statearr_289234_289271[(2)] = null);

(statearr_289234_289271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289223 === (9))){
var inst_289202 = (state_289222[(7)]);
var state_289222__$1 = state_289222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_289222__$1,(11),out,inst_289202);
} else {
if((state_val_289223 === (5))){
var inst_289216 = cljs.core.async.close_BANG_.call(null,out);
var state_289222__$1 = state_289222;
var statearr_289235_289273 = state_289222__$1;
(statearr_289235_289273[(2)] = inst_289216);

(statearr_289235_289273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289223 === (10))){
var inst_289214 = (state_289222[(2)]);
var state_289222__$1 = state_289222;
var statearr_289236_289276 = state_289222__$1;
(statearr_289236_289276[(2)] = inst_289214);

(statearr_289236_289276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289223 === (8))){
var inst_289202 = (state_289222[(7)]);
var inst_289203 = (state_289222[(9)]);
var inst_289194 = (state_289222[(10)]);
var inst_289201 = (state_289222[(8)]);
var inst_289206 = (function (){var cs = inst_289194;
var vec__289199 = inst_289201;
var v = inst_289202;
var c = inst_289203;
return ((function (cs,vec__289199,v,c,inst_289202,inst_289203,inst_289194,inst_289201,state_val_289223,c__40985__auto___289257,out){
return (function (p1__289188_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__289188_SHARP_);
});
;})(cs,vec__289199,v,c,inst_289202,inst_289203,inst_289194,inst_289201,state_val_289223,c__40985__auto___289257,out))
})();
var inst_289207 = cljs.core.filterv.call(null,inst_289206,inst_289194);
var inst_289194__$1 = inst_289207;
var state_289222__$1 = (function (){var statearr_289238 = state_289222;
(statearr_289238[(10)] = inst_289194__$1);

return statearr_289238;
})();
var statearr_289239_289281 = state_289222__$1;
(statearr_289239_289281[(2)] = null);

(statearr_289239_289281[(1)] = (2));


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
});})(c__40985__auto___289257,out))
;
return ((function (switch__40398__auto__,c__40985__auto___289257,out){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_289245 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_289245[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_289245[(1)] = (1));

return statearr_289245;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_289222){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_289222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e289246){if((e289246 instanceof Object)){
var ex__40402__auto__ = e289246;
var statearr_289247_289285 = state_289222;
(statearr_289247_289285[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_289222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e289246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__289288 = state_289222;
state_289222 = G__289288;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_289222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_289222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___289257,out))
})();
var state__40987__auto__ = (function (){var statearr_289248 = f__40986__auto__.call(null);
(statearr_289248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___289257);

return statearr_289248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___289257,out))
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
var args289291 = [];
var len__36461__auto___289353 = arguments.length;
var i__36462__auto___289354 = (0);
while(true){
if((i__36462__auto___289354 < len__36461__auto___289353)){
args289291.push((arguments[i__36462__auto___289354]));

var G__289355 = (i__36462__auto___289354 + (1));
i__36462__auto___289354 = G__289355;
continue;
} else {
}
break;
}

var G__289293 = args289291.length;
switch (G__289293) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289291.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40985__auto___289357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___289357,out){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___289357,out){
return (function (state_289320){
var state_val_289321 = (state_289320[(1)]);
if((state_val_289321 === (7))){
var inst_289302 = (state_289320[(7)]);
var inst_289302__$1 = (state_289320[(2)]);
var inst_289303 = (inst_289302__$1 == null);
var inst_289304 = cljs.core.not.call(null,inst_289303);
var state_289320__$1 = (function (){var statearr_289322 = state_289320;
(statearr_289322[(7)] = inst_289302__$1);

return statearr_289322;
})();
if(inst_289304){
var statearr_289323_289358 = state_289320__$1;
(statearr_289323_289358[(1)] = (8));

} else {
var statearr_289324_289360 = state_289320__$1;
(statearr_289324_289360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289321 === (1))){
var inst_289297 = (0);
var state_289320__$1 = (function (){var statearr_289327 = state_289320;
(statearr_289327[(8)] = inst_289297);

return statearr_289327;
})();
var statearr_289330_289364 = state_289320__$1;
(statearr_289330_289364[(2)] = null);

(statearr_289330_289364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289321 === (4))){
var state_289320__$1 = state_289320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_289320__$1,(7),ch);
} else {
if((state_val_289321 === (6))){
var inst_289315 = (state_289320[(2)]);
var state_289320__$1 = state_289320;
var statearr_289333_289368 = state_289320__$1;
(statearr_289333_289368[(2)] = inst_289315);

(statearr_289333_289368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289321 === (3))){
var inst_289317 = (state_289320[(2)]);
var inst_289318 = cljs.core.async.close_BANG_.call(null,out);
var state_289320__$1 = (function (){var statearr_289334 = state_289320;
(statearr_289334[(9)] = inst_289317);

return statearr_289334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_289320__$1,inst_289318);
} else {
if((state_val_289321 === (2))){
var inst_289297 = (state_289320[(8)]);
var inst_289299 = (inst_289297 < n);
var state_289320__$1 = state_289320;
if(cljs.core.truth_(inst_289299)){
var statearr_289335_289369 = state_289320__$1;
(statearr_289335_289369[(1)] = (4));

} else {
var statearr_289336_289370 = state_289320__$1;
(statearr_289336_289370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289321 === (11))){
var inst_289297 = (state_289320[(8)]);
var inst_289307 = (state_289320[(2)]);
var inst_289308 = (inst_289297 + (1));
var inst_289297__$1 = inst_289308;
var state_289320__$1 = (function (){var statearr_289337 = state_289320;
(statearr_289337[(8)] = inst_289297__$1);

(statearr_289337[(10)] = inst_289307);

return statearr_289337;
})();
var statearr_289338_289371 = state_289320__$1;
(statearr_289338_289371[(2)] = null);

(statearr_289338_289371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289321 === (9))){
var state_289320__$1 = state_289320;
var statearr_289339_289372 = state_289320__$1;
(statearr_289339_289372[(2)] = null);

(statearr_289339_289372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289321 === (5))){
var state_289320__$1 = state_289320;
var statearr_289340_289373 = state_289320__$1;
(statearr_289340_289373[(2)] = null);

(statearr_289340_289373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289321 === (10))){
var inst_289312 = (state_289320[(2)]);
var state_289320__$1 = state_289320;
var statearr_289341_289376 = state_289320__$1;
(statearr_289341_289376[(2)] = inst_289312);

(statearr_289341_289376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289321 === (8))){
var inst_289302 = (state_289320[(7)]);
var state_289320__$1 = state_289320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_289320__$1,(11),out,inst_289302);
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
});})(c__40985__auto___289357,out))
;
return ((function (switch__40398__auto__,c__40985__auto___289357,out){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_289345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_289345[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_289345[(1)] = (1));

return statearr_289345;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_289320){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_289320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e289348){if((e289348 instanceof Object)){
var ex__40402__auto__ = e289348;
var statearr_289349_289377 = state_289320;
(statearr_289349_289377[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_289320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e289348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__289380 = state_289320;
state_289320 = G__289380;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_289320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_289320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___289357,out))
})();
var state__40987__auto__ = (function (){var statearr_289352 = f__40986__auto__.call(null);
(statearr_289352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___289357);

return statearr_289352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___289357,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async289398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async289398 = (function (map_LT_,f,ch,meta289399){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta289399 = meta289399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async289398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_289400,meta289399__$1){
var self__ = this;
var _289400__$1 = this;
return (new cljs.core.async.t_cljs$core$async289398(self__.map_LT_,self__.f,self__.ch,meta289399__$1));
});

cljs.core.async.t_cljs$core$async289398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_289400){
var self__ = this;
var _289400__$1 = this;
return self__.meta289399;
});

cljs.core.async.t_cljs$core$async289398.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async289398.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async289398.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async289398.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async289398.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async289408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async289408 = (function (map_LT_,f,ch,meta289399,_,fn1,meta289409){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta289399 = meta289399;
this._ = _;
this.fn1 = fn1;
this.meta289409 = meta289409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async289408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_289410,meta289409__$1){
var self__ = this;
var _289410__$1 = this;
return (new cljs.core.async.t_cljs$core$async289408(self__.map_LT_,self__.f,self__.ch,self__.meta289399,self__._,self__.fn1,meta289409__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async289408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_289410){
var self__ = this;
var _289410__$1 = this;
return self__.meta289409;
});})(___$1))
;

cljs.core.async.t_cljs$core$async289408.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async289408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async289408.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async289408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__289387_SHARP_){
return f1.call(null,(((p1__289387_SHARP_ == null))?null:self__.f.call(null,p1__289387_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async289408.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta289399","meta289399",-1752092004,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async289398","cljs.core.async/t_cljs$core$async289398",-646105325,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta289409","meta289409",-1967068995,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async289408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async289408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async289408";

cljs.core.async.t_cljs$core$async289408.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async289408");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async289408 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async289408(map_LT___$1,f__$1,ch__$1,meta289399__$1,___$2,fn1__$1,meta289409){
return (new cljs.core.async.t_cljs$core$async289408(map_LT___$1,f__$1,ch__$1,meta289399__$1,___$2,fn1__$1,meta289409));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async289408(self__.map_LT_,self__.f,self__.ch,self__.meta289399,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async289398.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async289398.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async289398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta289399","meta289399",-1752092004,null)], null);
});

cljs.core.async.t_cljs$core$async289398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async289398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async289398";

cljs.core.async.t_cljs$core$async289398.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async289398");
});

cljs.core.async.__GT_t_cljs$core$async289398 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async289398(map_LT___$1,f__$1,ch__$1,meta289399){
return (new cljs.core.async.t_cljs$core$async289398(map_LT___$1,f__$1,ch__$1,meta289399));
});

}

return (new cljs.core.async.t_cljs$core$async289398(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async289433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async289433 = (function (map_GT_,f,ch,meta289434){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta289434 = meta289434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async289433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_289435,meta289434__$1){
var self__ = this;
var _289435__$1 = this;
return (new cljs.core.async.t_cljs$core$async289433(self__.map_GT_,self__.f,self__.ch,meta289434__$1));
});

cljs.core.async.t_cljs$core$async289433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_289435){
var self__ = this;
var _289435__$1 = this;
return self__.meta289434;
});

cljs.core.async.t_cljs$core$async289433.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async289433.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async289433.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async289433.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async289433.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async289433.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async289433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta289434","meta289434",-1219228580,null)], null);
});

cljs.core.async.t_cljs$core$async289433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async289433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async289433";

cljs.core.async.t_cljs$core$async289433.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async289433");
});

cljs.core.async.__GT_t_cljs$core$async289433 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async289433(map_GT___$1,f__$1,ch__$1,meta289434){
return (new cljs.core.async.t_cljs$core$async289433(map_GT___$1,f__$1,ch__$1,meta289434));
});

}

return (new cljs.core.async.t_cljs$core$async289433(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async289449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async289449 = (function (filter_GT_,p,ch,meta289450){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta289450 = meta289450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async289449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_289451,meta289450__$1){
var self__ = this;
var _289451__$1 = this;
return (new cljs.core.async.t_cljs$core$async289449(self__.filter_GT_,self__.p,self__.ch,meta289450__$1));
});

cljs.core.async.t_cljs$core$async289449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_289451){
var self__ = this;
var _289451__$1 = this;
return self__.meta289450;
});

cljs.core.async.t_cljs$core$async289449.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async289449.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async289449.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async289449.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async289449.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async289449.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async289449.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async289449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta289450","meta289450",798165139,null)], null);
});

cljs.core.async.t_cljs$core$async289449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async289449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async289449";

cljs.core.async.t_cljs$core$async289449.cljs$lang$ctorPrWriter = (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"cljs.core.async/t_cljs$core$async289449");
});

cljs.core.async.__GT_t_cljs$core$async289449 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async289449(filter_GT___$1,p__$1,ch__$1,meta289450){
return (new cljs.core.async.t_cljs$core$async289449(filter_GT___$1,p__$1,ch__$1,meta289450));
});

}

return (new cljs.core.async.t_cljs$core$async289449(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args289464 = [];
var len__36461__auto___289521 = arguments.length;
var i__36462__auto___289522 = (0);
while(true){
if((i__36462__auto___289522 < len__36461__auto___289521)){
args289464.push((arguments[i__36462__auto___289522]));

var G__289523 = (i__36462__auto___289522 + (1));
i__36462__auto___289522 = G__289523;
continue;
} else {
}
break;
}

var G__289467 = args289464.length;
switch (G__289467) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289464.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40985__auto___289525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___289525,out){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___289525,out){
return (function (state_289492){
var state_val_289493 = (state_289492[(1)]);
if((state_val_289493 === (7))){
var inst_289488 = (state_289492[(2)]);
var state_289492__$1 = state_289492;
var statearr_289494_289530 = state_289492__$1;
(statearr_289494_289530[(2)] = inst_289488);

(statearr_289494_289530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289493 === (1))){
var state_289492__$1 = state_289492;
var statearr_289495_289531 = state_289492__$1;
(statearr_289495_289531[(2)] = null);

(statearr_289495_289531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289493 === (4))){
var inst_289470 = (state_289492[(7)]);
var inst_289470__$1 = (state_289492[(2)]);
var inst_289475 = (inst_289470__$1 == null);
var state_289492__$1 = (function (){var statearr_289496 = state_289492;
(statearr_289496[(7)] = inst_289470__$1);

return statearr_289496;
})();
if(cljs.core.truth_(inst_289475)){
var statearr_289497_289536 = state_289492__$1;
(statearr_289497_289536[(1)] = (5));

} else {
var statearr_289498_289537 = state_289492__$1;
(statearr_289498_289537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289493 === (6))){
var inst_289470 = (state_289492[(7)]);
var inst_289479 = p.call(null,inst_289470);
var state_289492__$1 = state_289492;
if(cljs.core.truth_(inst_289479)){
var statearr_289499_289542 = state_289492__$1;
(statearr_289499_289542[(1)] = (8));

} else {
var statearr_289500_289543 = state_289492__$1;
(statearr_289500_289543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289493 === (3))){
var inst_289490 = (state_289492[(2)]);
var state_289492__$1 = state_289492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_289492__$1,inst_289490);
} else {
if((state_val_289493 === (2))){
var state_289492__$1 = state_289492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_289492__$1,(4),ch);
} else {
if((state_val_289493 === (11))){
var inst_289482 = (state_289492[(2)]);
var state_289492__$1 = state_289492;
var statearr_289505_289544 = state_289492__$1;
(statearr_289505_289544[(2)] = inst_289482);

(statearr_289505_289544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289493 === (9))){
var state_289492__$1 = state_289492;
var statearr_289506_289549 = state_289492__$1;
(statearr_289506_289549[(2)] = null);

(statearr_289506_289549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289493 === (5))){
var inst_289477 = cljs.core.async.close_BANG_.call(null,out);
var state_289492__$1 = state_289492;
var statearr_289507_289550 = state_289492__$1;
(statearr_289507_289550[(2)] = inst_289477);

(statearr_289507_289550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289493 === (10))){
var inst_289485 = (state_289492[(2)]);
var state_289492__$1 = (function (){var statearr_289508 = state_289492;
(statearr_289508[(8)] = inst_289485);

return statearr_289508;
})();
var statearr_289509_289551 = state_289492__$1;
(statearr_289509_289551[(2)] = null);

(statearr_289509_289551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289493 === (8))){
var inst_289470 = (state_289492[(7)]);
var state_289492__$1 = state_289492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_289492__$1,(11),out,inst_289470);
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
});})(c__40985__auto___289525,out))
;
return ((function (switch__40398__auto__,c__40985__auto___289525,out){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_289513 = [null,null,null,null,null,null,null,null,null];
(statearr_289513[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_289513[(1)] = (1));

return statearr_289513;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_289492){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_289492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e289514){if((e289514 instanceof Object)){
var ex__40402__auto__ = e289514;
var statearr_289515_289556 = state_289492;
(statearr_289515_289556[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_289492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e289514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__289557 = state_289492;
state_289492 = G__289557;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_289492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_289492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___289525,out))
})();
var state__40987__auto__ = (function (){var statearr_289520 = f__40986__auto__.call(null);
(statearr_289520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___289525);

return statearr_289520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___289525,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args289562 = [];
var len__36461__auto___289569 = arguments.length;
var i__36462__auto___289570 = (0);
while(true){
if((i__36462__auto___289570 < len__36461__auto___289569)){
args289562.push((arguments[i__36462__auto___289570]));

var G__289571 = (i__36462__auto___289570 + (1));
i__36462__auto___289570 = G__289571;
continue;
} else {
}
break;
}

var G__289564 = args289562.length;
switch (G__289564) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289562.length)].join('')));

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
return (function (state_289755){
var state_val_289756 = (state_289755[(1)]);
if((state_val_289756 === (7))){
var inst_289751 = (state_289755[(2)]);
var state_289755__$1 = state_289755;
var statearr_289757_289813 = state_289755__$1;
(statearr_289757_289813[(2)] = inst_289751);

(statearr_289757_289813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (20))){
var inst_289721 = (state_289755[(7)]);
var inst_289732 = (state_289755[(2)]);
var inst_289733 = cljs.core.next.call(null,inst_289721);
var inst_289707 = inst_289733;
var inst_289708 = null;
var inst_289709 = (0);
var inst_289710 = (0);
var state_289755__$1 = (function (){var statearr_289758 = state_289755;
(statearr_289758[(8)] = inst_289710);

(statearr_289758[(9)] = inst_289707);

(statearr_289758[(10)] = inst_289708);

(statearr_289758[(11)] = inst_289732);

(statearr_289758[(12)] = inst_289709);

return statearr_289758;
})();
var statearr_289759_289815 = state_289755__$1;
(statearr_289759_289815[(2)] = null);

(statearr_289759_289815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (1))){
var state_289755__$1 = state_289755;
var statearr_289760_289816 = state_289755__$1;
(statearr_289760_289816[(2)] = null);

(statearr_289760_289816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (4))){
var inst_289695 = (state_289755[(13)]);
var inst_289695__$1 = (state_289755[(2)]);
var inst_289697 = (inst_289695__$1 == null);
var state_289755__$1 = (function (){var statearr_289761 = state_289755;
(statearr_289761[(13)] = inst_289695__$1);

return statearr_289761;
})();
if(cljs.core.truth_(inst_289697)){
var statearr_289762_289817 = state_289755__$1;
(statearr_289762_289817[(1)] = (5));

} else {
var statearr_289763_289819 = state_289755__$1;
(statearr_289763_289819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (15))){
var state_289755__$1 = state_289755;
var statearr_289767_289820 = state_289755__$1;
(statearr_289767_289820[(2)] = null);

(statearr_289767_289820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (21))){
var state_289755__$1 = state_289755;
var statearr_289768_289821 = state_289755__$1;
(statearr_289768_289821[(2)] = null);

(statearr_289768_289821[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (13))){
var inst_289710 = (state_289755[(8)]);
var inst_289707 = (state_289755[(9)]);
var inst_289708 = (state_289755[(10)]);
var inst_289709 = (state_289755[(12)]);
var inst_289717 = (state_289755[(2)]);
var inst_289718 = (inst_289710 + (1));
var tmp289764 = inst_289707;
var tmp289765 = inst_289708;
var tmp289766 = inst_289709;
var inst_289707__$1 = tmp289764;
var inst_289708__$1 = tmp289765;
var inst_289709__$1 = tmp289766;
var inst_289710__$1 = inst_289718;
var state_289755__$1 = (function (){var statearr_289769 = state_289755;
(statearr_289769[(8)] = inst_289710__$1);

(statearr_289769[(9)] = inst_289707__$1);

(statearr_289769[(10)] = inst_289708__$1);

(statearr_289769[(12)] = inst_289709__$1);

(statearr_289769[(14)] = inst_289717);

return statearr_289769;
})();
var statearr_289770_289826 = state_289755__$1;
(statearr_289770_289826[(2)] = null);

(statearr_289770_289826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (22))){
var state_289755__$1 = state_289755;
var statearr_289771_289827 = state_289755__$1;
(statearr_289771_289827[(2)] = null);

(statearr_289771_289827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (6))){
var inst_289695 = (state_289755[(13)]);
var inst_289705 = f.call(null,inst_289695);
var inst_289706 = cljs.core.seq.call(null,inst_289705);
var inst_289707 = inst_289706;
var inst_289708 = null;
var inst_289709 = (0);
var inst_289710 = (0);
var state_289755__$1 = (function (){var statearr_289772 = state_289755;
(statearr_289772[(8)] = inst_289710);

(statearr_289772[(9)] = inst_289707);

(statearr_289772[(10)] = inst_289708);

(statearr_289772[(12)] = inst_289709);

return statearr_289772;
})();
var statearr_289773_289832 = state_289755__$1;
(statearr_289773_289832[(2)] = null);

(statearr_289773_289832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (17))){
var inst_289721 = (state_289755[(7)]);
var inst_289725 = cljs.core.chunk_first.call(null,inst_289721);
var inst_289726 = cljs.core.chunk_rest.call(null,inst_289721);
var inst_289727 = cljs.core.count.call(null,inst_289725);
var inst_289707 = inst_289726;
var inst_289708 = inst_289725;
var inst_289709 = inst_289727;
var inst_289710 = (0);
var state_289755__$1 = (function (){var statearr_289774 = state_289755;
(statearr_289774[(8)] = inst_289710);

(statearr_289774[(9)] = inst_289707);

(statearr_289774[(10)] = inst_289708);

(statearr_289774[(12)] = inst_289709);

return statearr_289774;
})();
var statearr_289775_289837 = state_289755__$1;
(statearr_289775_289837[(2)] = null);

(statearr_289775_289837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (3))){
var inst_289753 = (state_289755[(2)]);
var state_289755__$1 = state_289755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_289755__$1,inst_289753);
} else {
if((state_val_289756 === (12))){
var inst_289741 = (state_289755[(2)]);
var state_289755__$1 = state_289755;
var statearr_289776_289838 = state_289755__$1;
(statearr_289776_289838[(2)] = inst_289741);

(statearr_289776_289838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (2))){
var state_289755__$1 = state_289755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_289755__$1,(4),in$);
} else {
if((state_val_289756 === (23))){
var inst_289749 = (state_289755[(2)]);
var state_289755__$1 = state_289755;
var statearr_289780_289844 = state_289755__$1;
(statearr_289780_289844[(2)] = inst_289749);

(statearr_289780_289844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (19))){
var inst_289736 = (state_289755[(2)]);
var state_289755__$1 = state_289755;
var statearr_289781_289845 = state_289755__$1;
(statearr_289781_289845[(2)] = inst_289736);

(statearr_289781_289845[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (11))){
var inst_289707 = (state_289755[(9)]);
var inst_289721 = (state_289755[(7)]);
var inst_289721__$1 = cljs.core.seq.call(null,inst_289707);
var state_289755__$1 = (function (){var statearr_289786 = state_289755;
(statearr_289786[(7)] = inst_289721__$1);

return statearr_289786;
})();
if(inst_289721__$1){
var statearr_289787_289846 = state_289755__$1;
(statearr_289787_289846[(1)] = (14));

} else {
var statearr_289788_289847 = state_289755__$1;
(statearr_289788_289847[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (9))){
var inst_289743 = (state_289755[(2)]);
var inst_289744 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_289755__$1 = (function (){var statearr_289789 = state_289755;
(statearr_289789[(15)] = inst_289743);

return statearr_289789;
})();
if(cljs.core.truth_(inst_289744)){
var statearr_289790_289848 = state_289755__$1;
(statearr_289790_289848[(1)] = (21));

} else {
var statearr_289791_289849 = state_289755__$1;
(statearr_289791_289849[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (5))){
var inst_289699 = cljs.core.async.close_BANG_.call(null,out);
var state_289755__$1 = state_289755;
var statearr_289792_289850 = state_289755__$1;
(statearr_289792_289850[(2)] = inst_289699);

(statearr_289792_289850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (14))){
var inst_289721 = (state_289755[(7)]);
var inst_289723 = cljs.core.chunked_seq_QMARK_.call(null,inst_289721);
var state_289755__$1 = state_289755;
if(inst_289723){
var statearr_289793_289856 = state_289755__$1;
(statearr_289793_289856[(1)] = (17));

} else {
var statearr_289795_289857 = state_289755__$1;
(statearr_289795_289857[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (16))){
var inst_289739 = (state_289755[(2)]);
var state_289755__$1 = state_289755;
var statearr_289798_289858 = state_289755__$1;
(statearr_289798_289858[(2)] = inst_289739);

(statearr_289798_289858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289756 === (10))){
var inst_289710 = (state_289755[(8)]);
var inst_289708 = (state_289755[(10)]);
var inst_289715 = cljs.core._nth.call(null,inst_289708,inst_289710);
var state_289755__$1 = state_289755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_289755__$1,(13),out,inst_289715);
} else {
if((state_val_289756 === (18))){
var inst_289721 = (state_289755[(7)]);
var inst_289730 = cljs.core.first.call(null,inst_289721);
var state_289755__$1 = state_289755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_289755__$1,(20),out,inst_289730);
} else {
if((state_val_289756 === (8))){
var inst_289710 = (state_289755[(8)]);
var inst_289709 = (state_289755[(12)]);
var inst_289712 = (inst_289710 < inst_289709);
var inst_289713 = inst_289712;
var state_289755__$1 = state_289755;
if(cljs.core.truth_(inst_289713)){
var statearr_289801_289860 = state_289755__$1;
(statearr_289801_289860[(1)] = (10));

} else {
var statearr_289802_289861 = state_289755__$1;
(statearr_289802_289861[(1)] = (11));

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
var statearr_289806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_289806[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40399__auto__);

(statearr_289806[(1)] = (1));

return statearr_289806;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40399__auto____1 = (function (state_289755){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_289755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e289809){if((e289809 instanceof Object)){
var ex__40402__auto__ = e289809;
var statearr_289810_289864 = state_289755;
(statearr_289810_289864[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_289755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e289809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__289866 = state_289755;
state_289755 = G__289866;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40399__auto__ = function(state_289755){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40399__auto____1.call(this,state_289755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40399__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40399__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto__))
})();
var state__40987__auto__ = (function (){var statearr_289812 = f__40986__auto__.call(null);
(statearr_289812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto__);

return statearr_289812;
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
var args289867 = [];
var len__36461__auto___289874 = arguments.length;
var i__36462__auto___289875 = (0);
while(true){
if((i__36462__auto___289875 < len__36461__auto___289874)){
args289867.push((arguments[i__36462__auto___289875]));

var G__289876 = (i__36462__auto___289875 + (1));
i__36462__auto___289875 = G__289876;
continue;
} else {
}
break;
}

var G__289869 = args289867.length;
switch (G__289869) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289867.length)].join('')));

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
var args289878 = [];
var len__36461__auto___289883 = arguments.length;
var i__36462__auto___289884 = (0);
while(true){
if((i__36462__auto___289884 < len__36461__auto___289883)){
args289878.push((arguments[i__36462__auto___289884]));

var G__289885 = (i__36462__auto___289884 + (1));
i__36462__auto___289884 = G__289885;
continue;
} else {
}
break;
}

var G__289882 = args289878.length;
switch (G__289882) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289878.length)].join('')));

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
var args289893 = [];
var len__36461__auto___289954 = arguments.length;
var i__36462__auto___289955 = (0);
while(true){
if((i__36462__auto___289955 < len__36461__auto___289954)){
args289893.push((arguments[i__36462__auto___289955]));

var G__289959 = (i__36462__auto___289955 + (1));
i__36462__auto___289955 = G__289959;
continue;
} else {
}
break;
}

var G__289897 = args289893.length;
switch (G__289897) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args289893.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40985__auto___289961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___289961,out){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___289961,out){
return (function (state_289923){
var state_val_289924 = (state_289923[(1)]);
if((state_val_289924 === (7))){
var inst_289918 = (state_289923[(2)]);
var state_289923__$1 = state_289923;
var statearr_289925_289964 = state_289923__$1;
(statearr_289925_289964[(2)] = inst_289918);

(statearr_289925_289964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289924 === (1))){
var inst_289900 = null;
var state_289923__$1 = (function (){var statearr_289926 = state_289923;
(statearr_289926[(7)] = inst_289900);

return statearr_289926;
})();
var statearr_289927_289966 = state_289923__$1;
(statearr_289927_289966[(2)] = null);

(statearr_289927_289966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289924 === (4))){
var inst_289903 = (state_289923[(8)]);
var inst_289903__$1 = (state_289923[(2)]);
var inst_289904 = (inst_289903__$1 == null);
var inst_289905 = cljs.core.not.call(null,inst_289904);
var state_289923__$1 = (function (){var statearr_289928 = state_289923;
(statearr_289928[(8)] = inst_289903__$1);

return statearr_289928;
})();
if(inst_289905){
var statearr_289929_289967 = state_289923__$1;
(statearr_289929_289967[(1)] = (5));

} else {
var statearr_289930_289968 = state_289923__$1;
(statearr_289930_289968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289924 === (6))){
var state_289923__$1 = state_289923;
var statearr_289931_289969 = state_289923__$1;
(statearr_289931_289969[(2)] = null);

(statearr_289931_289969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289924 === (3))){
var inst_289920 = (state_289923[(2)]);
var inst_289921 = cljs.core.async.close_BANG_.call(null,out);
var state_289923__$1 = (function (){var statearr_289932 = state_289923;
(statearr_289932[(9)] = inst_289920);

return statearr_289932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_289923__$1,inst_289921);
} else {
if((state_val_289924 === (2))){
var state_289923__$1 = state_289923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_289923__$1,(4),ch);
} else {
if((state_val_289924 === (11))){
var inst_289903 = (state_289923[(8)]);
var inst_289912 = (state_289923[(2)]);
var inst_289900 = inst_289903;
var state_289923__$1 = (function (){var statearr_289934 = state_289923;
(statearr_289934[(7)] = inst_289900);

(statearr_289934[(10)] = inst_289912);

return statearr_289934;
})();
var statearr_289935_289974 = state_289923__$1;
(statearr_289935_289974[(2)] = null);

(statearr_289935_289974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289924 === (9))){
var inst_289903 = (state_289923[(8)]);
var state_289923__$1 = state_289923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_289923__$1,(11),out,inst_289903);
} else {
if((state_val_289924 === (5))){
var inst_289900 = (state_289923[(7)]);
var inst_289903 = (state_289923[(8)]);
var inst_289907 = cljs.core._EQ_.call(null,inst_289903,inst_289900);
var state_289923__$1 = state_289923;
if(inst_289907){
var statearr_289939_289976 = state_289923__$1;
(statearr_289939_289976[(1)] = (8));

} else {
var statearr_289941_289977 = state_289923__$1;
(statearr_289941_289977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289924 === (10))){
var inst_289915 = (state_289923[(2)]);
var state_289923__$1 = state_289923;
var statearr_289942_289979 = state_289923__$1;
(statearr_289942_289979[(2)] = inst_289915);

(statearr_289942_289979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_289924 === (8))){
var inst_289900 = (state_289923[(7)]);
var tmp289938 = inst_289900;
var inst_289900__$1 = tmp289938;
var state_289923__$1 = (function (){var statearr_289945 = state_289923;
(statearr_289945[(7)] = inst_289900__$1);

return statearr_289945;
})();
var statearr_289946_289980 = state_289923__$1;
(statearr_289946_289980[(2)] = null);

(statearr_289946_289980[(1)] = (2));


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
});})(c__40985__auto___289961,out))
;
return ((function (switch__40398__auto__,c__40985__auto___289961,out){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_289950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_289950[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_289950[(1)] = (1));

return statearr_289950;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_289923){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_289923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e289951){if((e289951 instanceof Object)){
var ex__40402__auto__ = e289951;
var statearr_289952_289986 = state_289923;
(statearr_289952_289986[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_289923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e289951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__289992 = state_289923;
state_289923 = G__289992;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_289923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_289923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___289961,out))
})();
var state__40987__auto__ = (function (){var statearr_289953 = f__40986__auto__.call(null);
(statearr_289953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___289961);

return statearr_289953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___289961,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args290003 = [];
var len__36461__auto___290088 = arguments.length;
var i__36462__auto___290089 = (0);
while(true){
if((i__36462__auto___290089 < len__36461__auto___290088)){
args290003.push((arguments[i__36462__auto___290089]));

var G__290090 = (i__36462__auto___290089 + (1));
i__36462__auto___290089 = G__290090;
continue;
} else {
}
break;
}

var G__290005 = args290003.length;
switch (G__290005) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290003.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40985__auto___290092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___290092,out){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___290092,out){
return (function (state_290043){
var state_val_290044 = (state_290043[(1)]);
if((state_val_290044 === (7))){
var inst_290039 = (state_290043[(2)]);
var state_290043__$1 = state_290043;
var statearr_290045_290101 = state_290043__$1;
(statearr_290045_290101[(2)] = inst_290039);

(statearr_290045_290101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290044 === (1))){
var inst_290006 = (new Array(n));
var inst_290007 = inst_290006;
var inst_290008 = (0);
var state_290043__$1 = (function (){var statearr_290046 = state_290043;
(statearr_290046[(7)] = inst_290008);

(statearr_290046[(8)] = inst_290007);

return statearr_290046;
})();
var statearr_290047_290102 = state_290043__$1;
(statearr_290047_290102[(2)] = null);

(statearr_290047_290102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290044 === (4))){
var inst_290011 = (state_290043[(9)]);
var inst_290011__$1 = (state_290043[(2)]);
var inst_290012 = (inst_290011__$1 == null);
var inst_290013 = cljs.core.not.call(null,inst_290012);
var state_290043__$1 = (function (){var statearr_290048 = state_290043;
(statearr_290048[(9)] = inst_290011__$1);

return statearr_290048;
})();
if(inst_290013){
var statearr_290049_290103 = state_290043__$1;
(statearr_290049_290103[(1)] = (5));

} else {
var statearr_290050_290104 = state_290043__$1;
(statearr_290050_290104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290044 === (15))){
var inst_290033 = (state_290043[(2)]);
var state_290043__$1 = state_290043;
var statearr_290051_290105 = state_290043__$1;
(statearr_290051_290105[(2)] = inst_290033);

(statearr_290051_290105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290044 === (13))){
var state_290043__$1 = state_290043;
var statearr_290052_290106 = state_290043__$1;
(statearr_290052_290106[(2)] = null);

(statearr_290052_290106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290044 === (6))){
var inst_290008 = (state_290043[(7)]);
var inst_290029 = (inst_290008 > (0));
var state_290043__$1 = state_290043;
if(cljs.core.truth_(inst_290029)){
var statearr_290054_290107 = state_290043__$1;
(statearr_290054_290107[(1)] = (12));

} else {
var statearr_290055_290108 = state_290043__$1;
(statearr_290055_290108[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290044 === (3))){
var inst_290041 = (state_290043[(2)]);
var state_290043__$1 = state_290043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_290043__$1,inst_290041);
} else {
if((state_val_290044 === (12))){
var inst_290007 = (state_290043[(8)]);
var inst_290031 = cljs.core.vec.call(null,inst_290007);
var state_290043__$1 = state_290043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_290043__$1,(15),out,inst_290031);
} else {
if((state_val_290044 === (2))){
var state_290043__$1 = state_290043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_290043__$1,(4),ch);
} else {
if((state_val_290044 === (11))){
var inst_290023 = (state_290043[(2)]);
var inst_290024 = (new Array(n));
var inst_290007 = inst_290024;
var inst_290008 = (0);
var state_290043__$1 = (function (){var statearr_290057 = state_290043;
(statearr_290057[(7)] = inst_290008);

(statearr_290057[(8)] = inst_290007);

(statearr_290057[(10)] = inst_290023);

return statearr_290057;
})();
var statearr_290058_290115 = state_290043__$1;
(statearr_290058_290115[(2)] = null);

(statearr_290058_290115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290044 === (9))){
var inst_290007 = (state_290043[(8)]);
var inst_290021 = cljs.core.vec.call(null,inst_290007);
var state_290043__$1 = state_290043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_290043__$1,(11),out,inst_290021);
} else {
if((state_val_290044 === (5))){
var inst_290016 = (state_290043[(11)]);
var inst_290011 = (state_290043[(9)]);
var inst_290008 = (state_290043[(7)]);
var inst_290007 = (state_290043[(8)]);
var inst_290015 = (inst_290007[inst_290008] = inst_290011);
var inst_290016__$1 = (inst_290008 + (1));
var inst_290017 = (inst_290016__$1 < n);
var state_290043__$1 = (function (){var statearr_290060 = state_290043;
(statearr_290060[(11)] = inst_290016__$1);

(statearr_290060[(12)] = inst_290015);

return statearr_290060;
})();
if(cljs.core.truth_(inst_290017)){
var statearr_290062_290123 = state_290043__$1;
(statearr_290062_290123[(1)] = (8));

} else {
var statearr_290065_290124 = state_290043__$1;
(statearr_290065_290124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290044 === (14))){
var inst_290036 = (state_290043[(2)]);
var inst_290037 = cljs.core.async.close_BANG_.call(null,out);
var state_290043__$1 = (function (){var statearr_290068 = state_290043;
(statearr_290068[(13)] = inst_290036);

return statearr_290068;
})();
var statearr_290069_290125 = state_290043__$1;
(statearr_290069_290125[(2)] = inst_290037);

(statearr_290069_290125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290044 === (10))){
var inst_290027 = (state_290043[(2)]);
var state_290043__$1 = state_290043;
var statearr_290070_290126 = state_290043__$1;
(statearr_290070_290126[(2)] = inst_290027);

(statearr_290070_290126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290044 === (8))){
var inst_290016 = (state_290043[(11)]);
var inst_290007 = (state_290043[(8)]);
var tmp290066 = inst_290007;
var inst_290007__$1 = tmp290066;
var inst_290008 = inst_290016;
var state_290043__$1 = (function (){var statearr_290071 = state_290043;
(statearr_290071[(7)] = inst_290008);

(statearr_290071[(8)] = inst_290007__$1);

return statearr_290071;
})();
var statearr_290072_290127 = state_290043__$1;
(statearr_290072_290127[(2)] = null);

(statearr_290072_290127[(1)] = (2));


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
});})(c__40985__auto___290092,out))
;
return ((function (switch__40398__auto__,c__40985__auto___290092,out){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_290084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_290084[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_290084[(1)] = (1));

return statearr_290084;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_290043){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_290043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e290085){if((e290085 instanceof Object)){
var ex__40402__auto__ = e290085;
var statearr_290086_290128 = state_290043;
(statearr_290086_290128[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_290043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e290085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__290129 = state_290043;
state_290043 = G__290129;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_290043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_290043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___290092,out))
})();
var state__40987__auto__ = (function (){var statearr_290087 = f__40986__auto__.call(null);
(statearr_290087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___290092);

return statearr_290087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___290092,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args290135 = [];
var len__36461__auto___290223 = arguments.length;
var i__36462__auto___290224 = (0);
while(true){
if((i__36462__auto___290224 < len__36461__auto___290223)){
args290135.push((arguments[i__36462__auto___290224]));

var G__290225 = (i__36462__auto___290224 + (1));
i__36462__auto___290224 = G__290225;
continue;
} else {
}
break;
}

var G__290139 = args290135.length;
switch (G__290139) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290135.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40985__auto___290227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___290227,out){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___290227,out){
return (function (state_290187){
var state_val_290188 = (state_290187[(1)]);
if((state_val_290188 === (7))){
var inst_290183 = (state_290187[(2)]);
var state_290187__$1 = state_290187;
var statearr_290189_290228 = state_290187__$1;
(statearr_290189_290228[(2)] = inst_290183);

(statearr_290189_290228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290188 === (1))){
var inst_290146 = [];
var inst_290147 = inst_290146;
var inst_290148 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_290187__$1 = (function (){var statearr_290190 = state_290187;
(statearr_290190[(7)] = inst_290148);

(statearr_290190[(8)] = inst_290147);

return statearr_290190;
})();
var statearr_290191_290230 = state_290187__$1;
(statearr_290191_290230[(2)] = null);

(statearr_290191_290230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290188 === (4))){
var inst_290151 = (state_290187[(9)]);
var inst_290151__$1 = (state_290187[(2)]);
var inst_290152 = (inst_290151__$1 == null);
var inst_290153 = cljs.core.not.call(null,inst_290152);
var state_290187__$1 = (function (){var statearr_290192 = state_290187;
(statearr_290192[(9)] = inst_290151__$1);

return statearr_290192;
})();
if(inst_290153){
var statearr_290193_290231 = state_290187__$1;
(statearr_290193_290231[(1)] = (5));

} else {
var statearr_290194_290233 = state_290187__$1;
(statearr_290194_290233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290188 === (15))){
var inst_290177 = (state_290187[(2)]);
var state_290187__$1 = state_290187;
var statearr_290195_290234 = state_290187__$1;
(statearr_290195_290234[(2)] = inst_290177);

(statearr_290195_290234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290188 === (13))){
var state_290187__$1 = state_290187;
var statearr_290196_290237 = state_290187__$1;
(statearr_290196_290237[(2)] = null);

(statearr_290196_290237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290188 === (6))){
var inst_290147 = (state_290187[(8)]);
var inst_290172 = inst_290147.length;
var inst_290173 = (inst_290172 > (0));
var state_290187__$1 = state_290187;
if(cljs.core.truth_(inst_290173)){
var statearr_290197_290239 = state_290187__$1;
(statearr_290197_290239[(1)] = (12));

} else {
var statearr_290198_290240 = state_290187__$1;
(statearr_290198_290240[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290188 === (3))){
var inst_290185 = (state_290187[(2)]);
var state_290187__$1 = state_290187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_290187__$1,inst_290185);
} else {
if((state_val_290188 === (12))){
var inst_290147 = (state_290187[(8)]);
var inst_290175 = cljs.core.vec.call(null,inst_290147);
var state_290187__$1 = state_290187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_290187__$1,(15),out,inst_290175);
} else {
if((state_val_290188 === (2))){
var state_290187__$1 = state_290187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_290187__$1,(4),ch);
} else {
if((state_val_290188 === (11))){
var inst_290151 = (state_290187[(9)]);
var inst_290155 = (state_290187[(10)]);
var inst_290165 = (state_290187[(2)]);
var inst_290166 = [];
var inst_290167 = inst_290166.push(inst_290151);
var inst_290147 = inst_290166;
var inst_290148 = inst_290155;
var state_290187__$1 = (function (){var statearr_290199 = state_290187;
(statearr_290199[(7)] = inst_290148);

(statearr_290199[(11)] = inst_290167);

(statearr_290199[(12)] = inst_290165);

(statearr_290199[(8)] = inst_290147);

return statearr_290199;
})();
var statearr_290200_290251 = state_290187__$1;
(statearr_290200_290251[(2)] = null);

(statearr_290200_290251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290188 === (9))){
var inst_290147 = (state_290187[(8)]);
var inst_290163 = cljs.core.vec.call(null,inst_290147);
var state_290187__$1 = state_290187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_290187__$1,(11),out,inst_290163);
} else {
if((state_val_290188 === (5))){
var inst_290148 = (state_290187[(7)]);
var inst_290151 = (state_290187[(9)]);
var inst_290155 = (state_290187[(10)]);
var inst_290155__$1 = f.call(null,inst_290151);
var inst_290156 = cljs.core._EQ_.call(null,inst_290155__$1,inst_290148);
var inst_290157 = cljs.core.keyword_identical_QMARK_.call(null,inst_290148,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_290158 = (inst_290156) || (inst_290157);
var state_290187__$1 = (function (){var statearr_290207 = state_290187;
(statearr_290207[(10)] = inst_290155__$1);

return statearr_290207;
})();
if(cljs.core.truth_(inst_290158)){
var statearr_290208_290256 = state_290187__$1;
(statearr_290208_290256[(1)] = (8));

} else {
var statearr_290209_290257 = state_290187__$1;
(statearr_290209_290257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290188 === (14))){
var inst_290180 = (state_290187[(2)]);
var inst_290181 = cljs.core.async.close_BANG_.call(null,out);
var state_290187__$1 = (function (){var statearr_290211 = state_290187;
(statearr_290211[(13)] = inst_290180);

return statearr_290211;
})();
var statearr_290212_290258 = state_290187__$1;
(statearr_290212_290258[(2)] = inst_290181);

(statearr_290212_290258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290188 === (10))){
var inst_290170 = (state_290187[(2)]);
var state_290187__$1 = state_290187;
var statearr_290213_290259 = state_290187__$1;
(statearr_290213_290259[(2)] = inst_290170);

(statearr_290213_290259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290188 === (8))){
var inst_290151 = (state_290187[(9)]);
var inst_290155 = (state_290187[(10)]);
var inst_290147 = (state_290187[(8)]);
var inst_290160 = inst_290147.push(inst_290151);
var tmp290210 = inst_290147;
var inst_290147__$1 = tmp290210;
var inst_290148 = inst_290155;
var state_290187__$1 = (function (){var statearr_290214 = state_290187;
(statearr_290214[(7)] = inst_290148);

(statearr_290214[(8)] = inst_290147__$1);

(statearr_290214[(14)] = inst_290160);

return statearr_290214;
})();
var statearr_290215_290272 = state_290187__$1;
(statearr_290215_290272[(2)] = null);

(statearr_290215_290272[(1)] = (2));


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
});})(c__40985__auto___290227,out))
;
return ((function (switch__40398__auto__,c__40985__auto___290227,out){
return (function() {
var cljs$core$async$state_machine__40399__auto__ = null;
var cljs$core$async$state_machine__40399__auto____0 = (function (){
var statearr_290219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_290219[(0)] = cljs$core$async$state_machine__40399__auto__);

(statearr_290219[(1)] = (1));

return statearr_290219;
});
var cljs$core$async$state_machine__40399__auto____1 = (function (state_290187){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_290187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e290220){if((e290220 instanceof Object)){
var ex__40402__auto__ = e290220;
var statearr_290221_290277 = state_290187;
(statearr_290221_290277[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_290187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e290220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__290278 = state_290187;
state_290187 = G__290278;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
cljs$core$async$state_machine__40399__auto__ = function(state_290187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40399__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40399__auto____1.call(this,state_290187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40399__auto____0;
cljs$core$async$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40399__auto____1;
return cljs$core$async$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___290227,out))
})();
var state__40987__auto__ = (function (){var statearr_290222 = f__40986__auto__.call(null);
(statearr_290222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___290227);

return statearr_290222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___290227,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
