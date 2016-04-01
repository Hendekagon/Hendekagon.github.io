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
var args126845 = [];
var len__36494__auto___126879 = arguments.length;
var i__36495__auto___126880 = (0);
while(true){
if((i__36495__auto___126880 < len__36494__auto___126879)){
args126845.push((arguments[i__36495__auto___126880]));

var G__126883 = (i__36495__auto___126880 + (1));
i__36495__auto___126880 = G__126883;
continue;
} else {
}
break;
}

var G__126855 = args126845.length;
switch (G__126855) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args126845.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async126862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async126862 = (function (f,blockable,meta126863){
this.f = f;
this.blockable = blockable;
this.meta126863 = meta126863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async126862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_126864,meta126863__$1){
var self__ = this;
var _126864__$1 = this;
return (new cljs.core.async.t_cljs$core$async126862(self__.f,self__.blockable,meta126863__$1));
});

cljs.core.async.t_cljs$core$async126862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_126864){
var self__ = this;
var _126864__$1 = this;
return self__.meta126863;
});

cljs.core.async.t_cljs$core$async126862.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async126862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async126862.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async126862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async126862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta126863","meta126863",512678241,null)], null);
});

cljs.core.async.t_cljs$core$async126862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async126862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async126862";

cljs.core.async.t_cljs$core$async126862.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cljs.core.async/t_cljs$core$async126862");
});

cljs.core.async.__GT_t_cljs$core$async126862 = (function cljs$core$async$__GT_t_cljs$core$async126862(f__$1,blockable__$1,meta126863){
return (new cljs.core.async.t_cljs$core$async126862(f__$1,blockable__$1,meta126863));
});

}

return (new cljs.core.async.t_cljs$core$async126862(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args126909 = [];
var len__36494__auto___126916 = arguments.length;
var i__36495__auto___126917 = (0);
while(true){
if((i__36495__auto___126917 < len__36494__auto___126916)){
args126909.push((arguments[i__36495__auto___126917]));

var G__126918 = (i__36495__auto___126917 + (1));
i__36495__auto___126917 = G__126918;
continue;
} else {
}
break;
}

var G__126913 = args126909.length;
switch (G__126913) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args126909.length)].join('')));

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
var args126924 = [];
var len__36494__auto___126933 = arguments.length;
var i__36495__auto___126934 = (0);
while(true){
if((i__36495__auto___126934 < len__36494__auto___126933)){
args126924.push((arguments[i__36495__auto___126934]));

var G__126935 = (i__36495__auto___126934 + (1));
i__36495__auto___126934 = G__126935;
continue;
} else {
}
break;
}

var G__126928 = args126924.length;
switch (G__126928) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args126924.length)].join('')));

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
var args126947 = [];
var len__36494__auto___126954 = arguments.length;
var i__36495__auto___126955 = (0);
while(true){
if((i__36495__auto___126955 < len__36494__auto___126954)){
args126947.push((arguments[i__36495__auto___126955]));

var G__126956 = (i__36495__auto___126955 + (1));
i__36495__auto___126955 = G__126956;
continue;
} else {
}
break;
}

var G__126950 = args126947.length;
switch (G__126950) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args126947.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_126964 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_126964);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_126964,ret){
return (function (){
return fn1.call(null,val_126964);
});})(val_126964,ret))
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
var args126968 = [];
var len__36494__auto___126975 = arguments.length;
var i__36495__auto___126976 = (0);
while(true){
if((i__36495__auto___126976 < len__36494__auto___126975)){
args126968.push((arguments[i__36495__auto___126976]));

var G__126977 = (i__36495__auto___126976 + (1));
i__36495__auto___126976 = G__126977;
continue;
} else {
}
break;
}

var G__126971 = args126968.length;
switch (G__126971) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args126968.length)].join('')));

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
var n__36339__auto___126988 = n;
var x_126989 = (0);
while(true){
if((x_126989 < n__36339__auto___126988)){
(a[x_126989] = (0));

var G__126990 = (x_126989 + (1));
x_126989 = G__126990;
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

var G__126991 = (i + (1));
i = G__126991;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async127001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async127001 = (function (alt_flag,flag,meta127002){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta127002 = meta127002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async127001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_127003,meta127002__$1){
var self__ = this;
var _127003__$1 = this;
return (new cljs.core.async.t_cljs$core$async127001(self__.alt_flag,self__.flag,meta127002__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async127001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_127003){
var self__ = this;
var _127003__$1 = this;
return self__.meta127002;
});})(flag))
;

cljs.core.async.t_cljs$core$async127001.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async127001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async127001.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async127001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async127001.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta127002","meta127002",237343604,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async127001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async127001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async127001";

cljs.core.async.t_cljs$core$async127001.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cljs.core.async/t_cljs$core$async127001");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async127001 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async127001(alt_flag__$1,flag__$1,meta127002){
return (new cljs.core.async.t_cljs$core$async127001(alt_flag__$1,flag__$1,meta127002));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async127001(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async127027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async127027 = (function (alt_handler,flag,cb,meta127028){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta127028 = meta127028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async127027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_127029,meta127028__$1){
var self__ = this;
var _127029__$1 = this;
return (new cljs.core.async.t_cljs$core$async127027(self__.alt_handler,self__.flag,self__.cb,meta127028__$1));
});

cljs.core.async.t_cljs$core$async127027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_127029){
var self__ = this;
var _127029__$1 = this;
return self__.meta127028;
});

cljs.core.async.t_cljs$core$async127027.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async127027.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async127027.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async127027.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async127027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta127028","meta127028",-1399742591,null)], null);
});

cljs.core.async.t_cljs$core$async127027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async127027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async127027";

cljs.core.async.t_cljs$core$async127027.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cljs.core.async/t_cljs$core$async127027");
});

cljs.core.async.__GT_t_cljs$core$async127027 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async127027(alt_handler__$1,flag__$1,cb__$1,meta127028){
return (new cljs.core.async.t_cljs$core$async127027(alt_handler__$1,flag__$1,cb__$1,meta127028));
});

}

return (new cljs.core.async.t_cljs$core$async127027(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__127042_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__127042_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__127043_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__127043_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__35425__auto__ = wport;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return port;
}
})()], null));
} else {
var G__127066 = (i + (1));
i = G__127066;
continue;
}
} else {
return null;
}
break;
}
})();
var or__35425__auto__ = ret;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__35413__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__35413__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__35413__auto__;
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
var args__36501__auto__ = [];
var len__36494__auto___127087 = arguments.length;
var i__36495__auto___127088 = (0);
while(true){
if((i__36495__auto___127088 < len__36494__auto___127087)){
args__36501__auto__.push((arguments[i__36495__auto___127088]));

var G__127092 = (i__36495__auto___127088 + (1));
i__36495__auto___127088 = G__127092;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((1) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36502__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__127077){
var map__127078 = p__127077;
var map__127078__$1 = ((((!((map__127078 == null)))?((((map__127078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__127078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127078):map__127078);
var opts = map__127078__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq127072){
var G__127073 = cljs.core.first.call(null,seq127072);
var seq127072__$1 = cljs.core.next.call(null,seq127072);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__127073,seq127072__$1);
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
var args127173 = [];
var len__36494__auto___127373 = arguments.length;
var i__36495__auto___127374 = (0);
while(true){
if((i__36495__auto___127374 < len__36494__auto___127373)){
args127173.push((arguments[i__36495__auto___127374]));

var G__127377 = (i__36495__auto___127374 + (1));
i__36495__auto___127374 = G__127377;
continue;
} else {
}
break;
}

var G__127178 = args127173.length;
switch (G__127178) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args127173.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38379__auto___127388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___127388){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___127388){
return (function (state_127296){
var state_val_127299 = (state_127296[(1)]);
if((state_val_127299 === (7))){
var inst_127271 = (state_127296[(2)]);
var state_127296__$1 = state_127296;
var statearr_127314_127391 = state_127296__$1;
(statearr_127314_127391[(2)] = inst_127271);

(statearr_127314_127391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127299 === (1))){
var state_127296__$1 = state_127296;
var statearr_127315_127393 = state_127296__$1;
(statearr_127315_127393[(2)] = null);

(statearr_127315_127393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127299 === (4))){
var inst_127242 = (state_127296[(7)]);
var inst_127242__$1 = (state_127296[(2)]);
var inst_127243 = (inst_127242__$1 == null);
var state_127296__$1 = (function (){var statearr_127318 = state_127296;
(statearr_127318[(7)] = inst_127242__$1);

return statearr_127318;
})();
if(cljs.core.truth_(inst_127243)){
var statearr_127319_127394 = state_127296__$1;
(statearr_127319_127394[(1)] = (5));

} else {
var statearr_127320_127397 = state_127296__$1;
(statearr_127320_127397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127299 === (13))){
var state_127296__$1 = state_127296;
var statearr_127324_127402 = state_127296__$1;
(statearr_127324_127402[(2)] = null);

(statearr_127324_127402[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127299 === (6))){
var inst_127242 = (state_127296[(7)]);
var state_127296__$1 = state_127296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_127296__$1,(11),to,inst_127242);
} else {
if((state_val_127299 === (3))){
var inst_127274 = (state_127296[(2)]);
var state_127296__$1 = state_127296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127296__$1,inst_127274);
} else {
if((state_val_127299 === (12))){
var state_127296__$1 = state_127296;
var statearr_127331_127404 = state_127296__$1;
(statearr_127331_127404[(2)] = null);

(statearr_127331_127404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127299 === (2))){
var state_127296__$1 = state_127296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127296__$1,(4),from);
} else {
if((state_val_127299 === (11))){
var inst_127259 = (state_127296[(2)]);
var state_127296__$1 = state_127296;
if(cljs.core.truth_(inst_127259)){
var statearr_127338_127408 = state_127296__$1;
(statearr_127338_127408[(1)] = (12));

} else {
var statearr_127339_127409 = state_127296__$1;
(statearr_127339_127409[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127299 === (9))){
var state_127296__$1 = state_127296;
var statearr_127349_127410 = state_127296__$1;
(statearr_127349_127410[(2)] = null);

(statearr_127349_127410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127299 === (5))){
var state_127296__$1 = state_127296;
if(cljs.core.truth_(close_QMARK_)){
var statearr_127352_127411 = state_127296__$1;
(statearr_127352_127411[(1)] = (8));

} else {
var statearr_127353_127412 = state_127296__$1;
(statearr_127353_127412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127299 === (14))){
var inst_127269 = (state_127296[(2)]);
var state_127296__$1 = state_127296;
var statearr_127354_127415 = state_127296__$1;
(statearr_127354_127415[(2)] = inst_127269);

(statearr_127354_127415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127299 === (10))){
var inst_127256 = (state_127296[(2)]);
var state_127296__$1 = state_127296;
var statearr_127355_127417 = state_127296__$1;
(statearr_127355_127417[(2)] = inst_127256);

(statearr_127355_127417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127299 === (8))){
var inst_127249 = cljs.core.async.close_BANG_.call(null,to);
var state_127296__$1 = state_127296;
var statearr_127356_127418 = state_127296__$1;
(statearr_127356_127418[(2)] = inst_127249);

(statearr_127356_127418[(1)] = (10));


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
});})(c__38379__auto___127388))
;
return ((function (switch__38358__auto__,c__38379__auto___127388){
return (function() {
var cljs$core$async$state_machine__38359__auto__ = null;
var cljs$core$async$state_machine__38359__auto____0 = (function (){
var statearr_127368 = [null,null,null,null,null,null,null,null];
(statearr_127368[(0)] = cljs$core$async$state_machine__38359__auto__);

(statearr_127368[(1)] = (1));

return statearr_127368;
});
var cljs$core$async$state_machine__38359__auto____1 = (function (state_127296){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_127296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e127369){if((e127369 instanceof Object)){
var ex__38362__auto__ = e127369;
var statearr_127370_127425 = state_127296;
(statearr_127370_127425[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__127426 = state_127296;
state_127296 = G__127426;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$state_machine__38359__auto__ = function(state_127296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38359__auto____1.call(this,state_127296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38359__auto____0;
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38359__auto____1;
return cljs$core$async$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___127388))
})();
var state__38381__auto__ = (function (){var statearr_127372 = f__38380__auto__.call(null);
(statearr_127372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___127388);

return statearr_127372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___127388))
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
return (function (p__127759){
var vec__127760 = p__127759;
var v = cljs.core.nth.call(null,vec__127760,(0),null);
var p = cljs.core.nth.call(null,vec__127760,(1),null);
var job = vec__127760;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38379__auto___128038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___128038,res,vec__127760,v,p,job,jobs,results){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___128038,res,vec__127760,v,p,job,jobs,results){
return (function (state_127765){
var state_val_127766 = (state_127765[(1)]);
if((state_val_127766 === (1))){
var state_127765__$1 = state_127765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_127765__$1,(2),res,v);
} else {
if((state_val_127766 === (2))){
var inst_127762 = (state_127765[(2)]);
var inst_127763 = cljs.core.async.close_BANG_.call(null,res);
var state_127765__$1 = (function (){var statearr_127767 = state_127765;
(statearr_127767[(7)] = inst_127762);

return statearr_127767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127765__$1,inst_127763);
} else {
return null;
}
}
});})(c__38379__auto___128038,res,vec__127760,v,p,job,jobs,results))
;
return ((function (switch__38358__auto__,c__38379__auto___128038,res,vec__127760,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0 = (function (){
var statearr_127771 = [null,null,null,null,null,null,null,null];
(statearr_127771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__);

(statearr_127771[(1)] = (1));

return statearr_127771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1 = (function (state_127765){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_127765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e127772){if((e127772 instanceof Object)){
var ex__38362__auto__ = e127772;
var statearr_127773_128052 = state_127765;
(statearr_127773_128052[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128064 = state_127765;
state_127765 = G__128064;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__ = function(state_127765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1.call(this,state_127765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___128038,res,vec__127760,v,p,job,jobs,results))
})();
var state__38381__auto__ = (function (){var statearr_127775 = f__38380__auto__.call(null);
(statearr_127775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___128038);

return statearr_127775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___128038,res,vec__127760,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__127776){
var vec__127777 = p__127776;
var v = cljs.core.nth.call(null,vec__127777,(0),null);
var p = cljs.core.nth.call(null,vec__127777,(1),null);
var job = vec__127777;
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
var n__36339__auto___128078 = n;
var __128079 = (0);
while(true){
if((__128079 < n__36339__auto___128078)){
var G__127778_128080 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__127778_128080) {
case "compute":
var c__38379__auto___128082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__128079,c__38379__auto___128082,G__127778_128080,n__36339__auto___128078,jobs,results,process,async){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (__128079,c__38379__auto___128082,G__127778_128080,n__36339__auto___128078,jobs,results,process,async){
return (function (state_127792){
var state_val_127793 = (state_127792[(1)]);
if((state_val_127793 === (1))){
var state_127792__$1 = state_127792;
var statearr_127794_128086 = state_127792__$1;
(statearr_127794_128086[(2)] = null);

(statearr_127794_128086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127793 === (2))){
var state_127792__$1 = state_127792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127792__$1,(4),jobs);
} else {
if((state_val_127793 === (3))){
var inst_127790 = (state_127792[(2)]);
var state_127792__$1 = state_127792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127792__$1,inst_127790);
} else {
if((state_val_127793 === (4))){
var inst_127782 = (state_127792[(2)]);
var inst_127783 = process.call(null,inst_127782);
var state_127792__$1 = state_127792;
if(cljs.core.truth_(inst_127783)){
var statearr_127799_128091 = state_127792__$1;
(statearr_127799_128091[(1)] = (5));

} else {
var statearr_127800_128092 = state_127792__$1;
(statearr_127800_128092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127793 === (5))){
var state_127792__$1 = state_127792;
var statearr_127801_128093 = state_127792__$1;
(statearr_127801_128093[(2)] = null);

(statearr_127801_128093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127793 === (6))){
var state_127792__$1 = state_127792;
var statearr_127802_128097 = state_127792__$1;
(statearr_127802_128097[(2)] = null);

(statearr_127802_128097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127793 === (7))){
var inst_127788 = (state_127792[(2)]);
var state_127792__$1 = state_127792;
var statearr_127803_128098 = state_127792__$1;
(statearr_127803_128098[(2)] = inst_127788);

(statearr_127803_128098[(1)] = (3));


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
});})(__128079,c__38379__auto___128082,G__127778_128080,n__36339__auto___128078,jobs,results,process,async))
;
return ((function (__128079,switch__38358__auto__,c__38379__auto___128082,G__127778_128080,n__36339__auto___128078,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0 = (function (){
var statearr_127808 = [null,null,null,null,null,null,null];
(statearr_127808[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__);

(statearr_127808[(1)] = (1));

return statearr_127808;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1 = (function (state_127792){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_127792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e127809){if((e127809 instanceof Object)){
var ex__38362__auto__ = e127809;
var statearr_127810_128111 = state_127792;
(statearr_127810_128111[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128119 = state_127792;
state_127792 = G__128119;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__ = function(state_127792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1.call(this,state_127792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__;
})()
;})(__128079,switch__38358__auto__,c__38379__auto___128082,G__127778_128080,n__36339__auto___128078,jobs,results,process,async))
})();
var state__38381__auto__ = (function (){var statearr_127811 = f__38380__auto__.call(null);
(statearr_127811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___128082);

return statearr_127811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(__128079,c__38379__auto___128082,G__127778_128080,n__36339__auto___128078,jobs,results,process,async))
);


break;
case "async":
var c__38379__auto___128125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__128079,c__38379__auto___128125,G__127778_128080,n__36339__auto___128078,jobs,results,process,async){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (__128079,c__38379__auto___128125,G__127778_128080,n__36339__auto___128078,jobs,results,process,async){
return (function (state_127826){
var state_val_127827 = (state_127826[(1)]);
if((state_val_127827 === (1))){
var state_127826__$1 = state_127826;
var statearr_127829_128133 = state_127826__$1;
(statearr_127829_128133[(2)] = null);

(statearr_127829_128133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127827 === (2))){
var state_127826__$1 = state_127826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127826__$1,(4),jobs);
} else {
if((state_val_127827 === (3))){
var inst_127824 = (state_127826[(2)]);
var state_127826__$1 = state_127826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127826__$1,inst_127824);
} else {
if((state_val_127827 === (4))){
var inst_127814 = (state_127826[(2)]);
var inst_127816 = async.call(null,inst_127814);
var state_127826__$1 = state_127826;
if(cljs.core.truth_(inst_127816)){
var statearr_127833_128137 = state_127826__$1;
(statearr_127833_128137[(1)] = (5));

} else {
var statearr_127834_128138 = state_127826__$1;
(statearr_127834_128138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127827 === (5))){
var state_127826__$1 = state_127826;
var statearr_127835_128139 = state_127826__$1;
(statearr_127835_128139[(2)] = null);

(statearr_127835_128139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127827 === (6))){
var state_127826__$1 = state_127826;
var statearr_127836_128140 = state_127826__$1;
(statearr_127836_128140[(2)] = null);

(statearr_127836_128140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127827 === (7))){
var inst_127822 = (state_127826[(2)]);
var state_127826__$1 = state_127826;
var statearr_127837_128141 = state_127826__$1;
(statearr_127837_128141[(2)] = inst_127822);

(statearr_127837_128141[(1)] = (3));


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
});})(__128079,c__38379__auto___128125,G__127778_128080,n__36339__auto___128078,jobs,results,process,async))
;
return ((function (__128079,switch__38358__auto__,c__38379__auto___128125,G__127778_128080,n__36339__auto___128078,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0 = (function (){
var statearr_127841 = [null,null,null,null,null,null,null];
(statearr_127841[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__);

(statearr_127841[(1)] = (1));

return statearr_127841;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1 = (function (state_127826){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_127826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e127842){if((e127842 instanceof Object)){
var ex__38362__auto__ = e127842;
var statearr_127843_128159 = state_127826;
(statearr_127843_128159[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128160 = state_127826;
state_127826 = G__128160;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__ = function(state_127826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1.call(this,state_127826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__;
})()
;})(__128079,switch__38358__auto__,c__38379__auto___128125,G__127778_128080,n__36339__auto___128078,jobs,results,process,async))
})();
var state__38381__auto__ = (function (){var statearr_127844 = f__38380__auto__.call(null);
(statearr_127844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___128125);

return statearr_127844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(__128079,c__38379__auto___128125,G__127778_128080,n__36339__auto___128078,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__128161 = (__128079 + (1));
__128079 = G__128161;
continue;
} else {
}
break;
}

var c__38379__auto___128162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___128162,jobs,results,process,async){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___128162,jobs,results,process,async){
return (function (state_127870){
var state_val_127871 = (state_127870[(1)]);
if((state_val_127871 === (1))){
var state_127870__$1 = state_127870;
var statearr_127872_128167 = state_127870__$1;
(statearr_127872_128167[(2)] = null);

(statearr_127872_128167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127871 === (2))){
var state_127870__$1 = state_127870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127870__$1,(4),from);
} else {
if((state_val_127871 === (3))){
var inst_127868 = (state_127870[(2)]);
var state_127870__$1 = state_127870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127870__$1,inst_127868);
} else {
if((state_val_127871 === (4))){
var inst_127850 = (state_127870[(7)]);
var inst_127850__$1 = (state_127870[(2)]);
var inst_127852 = (inst_127850__$1 == null);
var state_127870__$1 = (function (){var statearr_127873 = state_127870;
(statearr_127873[(7)] = inst_127850__$1);

return statearr_127873;
})();
if(cljs.core.truth_(inst_127852)){
var statearr_127874_128173 = state_127870__$1;
(statearr_127874_128173[(1)] = (5));

} else {
var statearr_127875_128183 = state_127870__$1;
(statearr_127875_128183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127871 === (5))){
var inst_127854 = cljs.core.async.close_BANG_.call(null,jobs);
var state_127870__$1 = state_127870;
var statearr_127876_128184 = state_127870__$1;
(statearr_127876_128184[(2)] = inst_127854);

(statearr_127876_128184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127871 === (6))){
var inst_127850 = (state_127870[(7)]);
var inst_127856 = (state_127870[(8)]);
var inst_127856__$1 = cljs.core.async.chan.call(null,(1));
var inst_127857 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_127858 = [inst_127850,inst_127856__$1];
var inst_127859 = (new cljs.core.PersistentVector(null,2,(5),inst_127857,inst_127858,null));
var state_127870__$1 = (function (){var statearr_127877 = state_127870;
(statearr_127877[(8)] = inst_127856__$1);

return statearr_127877;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_127870__$1,(8),jobs,inst_127859);
} else {
if((state_val_127871 === (7))){
var inst_127866 = (state_127870[(2)]);
var state_127870__$1 = state_127870;
var statearr_127879_128190 = state_127870__$1;
(statearr_127879_128190[(2)] = inst_127866);

(statearr_127879_128190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127871 === (8))){
var inst_127856 = (state_127870[(8)]);
var inst_127861 = (state_127870[(2)]);
var state_127870__$1 = (function (){var statearr_127885 = state_127870;
(statearr_127885[(9)] = inst_127861);

return statearr_127885;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_127870__$1,(9),results,inst_127856);
} else {
if((state_val_127871 === (9))){
var inst_127863 = (state_127870[(2)]);
var state_127870__$1 = (function (){var statearr_127886 = state_127870;
(statearr_127886[(10)] = inst_127863);

return statearr_127886;
})();
var statearr_127887_128195 = state_127870__$1;
(statearr_127887_128195[(2)] = null);

(statearr_127887_128195[(1)] = (2));


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
});})(c__38379__auto___128162,jobs,results,process,async))
;
return ((function (switch__38358__auto__,c__38379__auto___128162,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0 = (function (){
var statearr_127898 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_127898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__);

(statearr_127898[(1)] = (1));

return statearr_127898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1 = (function (state_127870){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_127870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e127899){if((e127899 instanceof Object)){
var ex__38362__auto__ = e127899;
var statearr_127900_128203 = state_127870;
(statearr_127900_128203[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e127899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128204 = state_127870;
state_127870 = G__128204;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__ = function(state_127870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1.call(this,state_127870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___128162,jobs,results,process,async))
})();
var state__38381__auto__ = (function (){var statearr_127903 = f__38380__auto__.call(null);
(statearr_127903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___128162);

return statearr_127903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___128162,jobs,results,process,async))
);


var c__38379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto__,jobs,results,process,async){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto__,jobs,results,process,async){
return (function (state_127947){
var state_val_127948 = (state_127947[(1)]);
if((state_val_127948 === (7))){
var inst_127943 = (state_127947[(2)]);
var state_127947__$1 = state_127947;
var statearr_127949_128214 = state_127947__$1;
(statearr_127949_128214[(2)] = inst_127943);

(statearr_127949_128214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (20))){
var state_127947__$1 = state_127947;
var statearr_127958_128215 = state_127947__$1;
(statearr_127958_128215[(2)] = null);

(statearr_127958_128215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (1))){
var state_127947__$1 = state_127947;
var statearr_127959_128216 = state_127947__$1;
(statearr_127959_128216[(2)] = null);

(statearr_127959_128216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (4))){
var inst_127907 = (state_127947[(7)]);
var inst_127907__$1 = (state_127947[(2)]);
var inst_127908 = (inst_127907__$1 == null);
var state_127947__$1 = (function (){var statearr_127960 = state_127947;
(statearr_127960[(7)] = inst_127907__$1);

return statearr_127960;
})();
if(cljs.core.truth_(inst_127908)){
var statearr_127962_128219 = state_127947__$1;
(statearr_127962_128219[(1)] = (5));

} else {
var statearr_127964_128220 = state_127947__$1;
(statearr_127964_128220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (15))){
var inst_127923 = (state_127947[(8)]);
var state_127947__$1 = state_127947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_127947__$1,(18),to,inst_127923);
} else {
if((state_val_127948 === (21))){
var inst_127938 = (state_127947[(2)]);
var state_127947__$1 = state_127947;
var statearr_127966_128221 = state_127947__$1;
(statearr_127966_128221[(2)] = inst_127938);

(statearr_127966_128221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (13))){
var inst_127940 = (state_127947[(2)]);
var state_127947__$1 = (function (){var statearr_127967 = state_127947;
(statearr_127967[(9)] = inst_127940);

return statearr_127967;
})();
var statearr_127968_128230 = state_127947__$1;
(statearr_127968_128230[(2)] = null);

(statearr_127968_128230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (6))){
var inst_127907 = (state_127947[(7)]);
var state_127947__$1 = state_127947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127947__$1,(11),inst_127907);
} else {
if((state_val_127948 === (17))){
var inst_127933 = (state_127947[(2)]);
var state_127947__$1 = state_127947;
if(cljs.core.truth_(inst_127933)){
var statearr_127969_128231 = state_127947__$1;
(statearr_127969_128231[(1)] = (19));

} else {
var statearr_127970_128232 = state_127947__$1;
(statearr_127970_128232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (3))){
var inst_127945 = (state_127947[(2)]);
var state_127947__$1 = state_127947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_127947__$1,inst_127945);
} else {
if((state_val_127948 === (12))){
var inst_127917 = (state_127947[(10)]);
var state_127947__$1 = state_127947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127947__$1,(14),inst_127917);
} else {
if((state_val_127948 === (2))){
var state_127947__$1 = state_127947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_127947__$1,(4),results);
} else {
if((state_val_127948 === (19))){
var state_127947__$1 = state_127947;
var statearr_127977_128233 = state_127947__$1;
(statearr_127977_128233[(2)] = null);

(statearr_127977_128233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (11))){
var inst_127917 = (state_127947[(2)]);
var state_127947__$1 = (function (){var statearr_127978 = state_127947;
(statearr_127978[(10)] = inst_127917);

return statearr_127978;
})();
var statearr_127979_128238 = state_127947__$1;
(statearr_127979_128238[(2)] = null);

(statearr_127979_128238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (9))){
var state_127947__$1 = state_127947;
var statearr_127980_128239 = state_127947__$1;
(statearr_127980_128239[(2)] = null);

(statearr_127980_128239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (5))){
var state_127947__$1 = state_127947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_127984_128240 = state_127947__$1;
(statearr_127984_128240[(1)] = (8));

} else {
var statearr_127986_128241 = state_127947__$1;
(statearr_127986_128241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (14))){
var inst_127926 = (state_127947[(11)]);
var inst_127923 = (state_127947[(8)]);
var inst_127923__$1 = (state_127947[(2)]);
var inst_127925 = (inst_127923__$1 == null);
var inst_127926__$1 = cljs.core.not.call(null,inst_127925);
var state_127947__$1 = (function (){var statearr_127988 = state_127947;
(statearr_127988[(11)] = inst_127926__$1);

(statearr_127988[(8)] = inst_127923__$1);

return statearr_127988;
})();
if(inst_127926__$1){
var statearr_127989_128257 = state_127947__$1;
(statearr_127989_128257[(1)] = (15));

} else {
var statearr_127990_128258 = state_127947__$1;
(statearr_127990_128258[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (16))){
var inst_127926 = (state_127947[(11)]);
var state_127947__$1 = state_127947;
var statearr_127991_128259 = state_127947__$1;
(statearr_127991_128259[(2)] = inst_127926);

(statearr_127991_128259[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (10))){
var inst_127914 = (state_127947[(2)]);
var state_127947__$1 = state_127947;
var statearr_127992_128260 = state_127947__$1;
(statearr_127992_128260[(2)] = inst_127914);

(statearr_127992_128260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (18))){
var inst_127930 = (state_127947[(2)]);
var state_127947__$1 = state_127947;
var statearr_127993_128264 = state_127947__$1;
(statearr_127993_128264[(2)] = inst_127930);

(statearr_127993_128264[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_127948 === (8))){
var inst_127911 = cljs.core.async.close_BANG_.call(null,to);
var state_127947__$1 = state_127947;
var statearr_127994_128269 = state_127947__$1;
(statearr_127994_128269[(2)] = inst_127911);

(statearr_127994_128269[(1)] = (10));


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
});})(c__38379__auto__,jobs,results,process,async))
;
return ((function (switch__38358__auto__,c__38379__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0 = (function (){
var statearr_128016 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_128016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__);

(statearr_128016[(1)] = (1));

return statearr_128016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1 = (function (state_127947){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_127947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e128017){if((e128017 instanceof Object)){
var ex__38362__auto__ = e128017;
var statearr_128019_128276 = state_127947;
(statearr_128019_128276[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_127947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128277 = state_127947;
state_127947 = G__128277;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__ = function(state_127947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1.call(this,state_127947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38359__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto__,jobs,results,process,async))
})();
var state__38381__auto__ = (function (){var statearr_128020 = f__38380__auto__.call(null);
(statearr_128020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto__);

return statearr_128020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto__,jobs,results,process,async))
);

return c__38379__auto__;
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
var args128294 = [];
var len__36494__auto___128297 = arguments.length;
var i__36495__auto___128298 = (0);
while(true){
if((i__36495__auto___128298 < len__36494__auto___128297)){
args128294.push((arguments[i__36495__auto___128298]));

var G__128299 = (i__36495__auto___128298 + (1));
i__36495__auto___128298 = G__128299;
continue;
} else {
}
break;
}

var G__128296 = args128294.length;
switch (G__128296) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args128294.length)].join('')));

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
var args128310 = [];
var len__36494__auto___128317 = arguments.length;
var i__36495__auto___128318 = (0);
while(true){
if((i__36495__auto___128318 < len__36494__auto___128317)){
args128310.push((arguments[i__36495__auto___128318]));

var G__128319 = (i__36495__auto___128318 + (1));
i__36495__auto___128318 = G__128319;
continue;
} else {
}
break;
}

var G__128312 = args128310.length;
switch (G__128312) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args128310.length)].join('')));

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
var args128328 = [];
var len__36494__auto___128405 = arguments.length;
var i__36495__auto___128406 = (0);
while(true){
if((i__36495__auto___128406 < len__36494__auto___128405)){
args128328.push((arguments[i__36495__auto___128406]));

var G__128407 = (i__36495__auto___128406 + (1));
i__36495__auto___128406 = G__128407;
continue;
} else {
}
break;
}

var G__128331 = args128328.length;
switch (G__128331) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args128328.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38379__auto___128414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___128414,tc,fc){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___128414,tc,fc){
return (function (state_128366){
var state_val_128367 = (state_128366[(1)]);
if((state_val_128367 === (7))){
var inst_128362 = (state_128366[(2)]);
var state_128366__$1 = state_128366;
var statearr_128369_128415 = state_128366__$1;
(statearr_128369_128415[(2)] = inst_128362);

(statearr_128369_128415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128367 === (1))){
var state_128366__$1 = state_128366;
var statearr_128370_128418 = state_128366__$1;
(statearr_128370_128418[(2)] = null);

(statearr_128370_128418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128367 === (4))){
var inst_128337 = (state_128366[(7)]);
var inst_128337__$1 = (state_128366[(2)]);
var inst_128338 = (inst_128337__$1 == null);
var state_128366__$1 = (function (){var statearr_128375 = state_128366;
(statearr_128375[(7)] = inst_128337__$1);

return statearr_128375;
})();
if(cljs.core.truth_(inst_128338)){
var statearr_128376_128421 = state_128366__$1;
(statearr_128376_128421[(1)] = (5));

} else {
var statearr_128377_128422 = state_128366__$1;
(statearr_128377_128422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128367 === (13))){
var state_128366__$1 = state_128366;
var statearr_128378_128423 = state_128366__$1;
(statearr_128378_128423[(2)] = null);

(statearr_128378_128423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128367 === (6))){
var inst_128337 = (state_128366[(7)]);
var inst_128348 = p.call(null,inst_128337);
var state_128366__$1 = state_128366;
if(cljs.core.truth_(inst_128348)){
var statearr_128379_128427 = state_128366__$1;
(statearr_128379_128427[(1)] = (9));

} else {
var statearr_128380_128429 = state_128366__$1;
(statearr_128380_128429[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128367 === (3))){
var inst_128364 = (state_128366[(2)]);
var state_128366__$1 = state_128366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128366__$1,inst_128364);
} else {
if((state_val_128367 === (12))){
var state_128366__$1 = state_128366;
var statearr_128381_128430 = state_128366__$1;
(statearr_128381_128430[(2)] = null);

(statearr_128381_128430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128367 === (2))){
var state_128366__$1 = state_128366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128366__$1,(4),ch);
} else {
if((state_val_128367 === (11))){
var inst_128337 = (state_128366[(7)]);
var inst_128353 = (state_128366[(2)]);
var state_128366__$1 = state_128366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_128366__$1,(8),inst_128353,inst_128337);
} else {
if((state_val_128367 === (9))){
var state_128366__$1 = state_128366;
var statearr_128383_128435 = state_128366__$1;
(statearr_128383_128435[(2)] = tc);

(statearr_128383_128435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128367 === (5))){
var inst_128341 = cljs.core.async.close_BANG_.call(null,tc);
var inst_128345 = cljs.core.async.close_BANG_.call(null,fc);
var state_128366__$1 = (function (){var statearr_128385 = state_128366;
(statearr_128385[(8)] = inst_128341);

return statearr_128385;
})();
var statearr_128386_128436 = state_128366__$1;
(statearr_128386_128436[(2)] = inst_128345);

(statearr_128386_128436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128367 === (14))){
var inst_128360 = (state_128366[(2)]);
var state_128366__$1 = state_128366;
var statearr_128388_128439 = state_128366__$1;
(statearr_128388_128439[(2)] = inst_128360);

(statearr_128388_128439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128367 === (10))){
var state_128366__$1 = state_128366;
var statearr_128390_128442 = state_128366__$1;
(statearr_128390_128442[(2)] = fc);

(statearr_128390_128442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128367 === (8))){
var inst_128355 = (state_128366[(2)]);
var state_128366__$1 = state_128366;
if(cljs.core.truth_(inst_128355)){
var statearr_128391_128443 = state_128366__$1;
(statearr_128391_128443[(1)] = (12));

} else {
var statearr_128392_128444 = state_128366__$1;
(statearr_128392_128444[(1)] = (13));

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
});})(c__38379__auto___128414,tc,fc))
;
return ((function (switch__38358__auto__,c__38379__auto___128414,tc,fc){
return (function() {
var cljs$core$async$state_machine__38359__auto__ = null;
var cljs$core$async$state_machine__38359__auto____0 = (function (){
var statearr_128397 = [null,null,null,null,null,null,null,null,null];
(statearr_128397[(0)] = cljs$core$async$state_machine__38359__auto__);

(statearr_128397[(1)] = (1));

return statearr_128397;
});
var cljs$core$async$state_machine__38359__auto____1 = (function (state_128366){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_128366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e128398){if((e128398 instanceof Object)){
var ex__38362__auto__ = e128398;
var statearr_128399_128449 = state_128366;
(statearr_128399_128449[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128450 = state_128366;
state_128366 = G__128450;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$state_machine__38359__auto__ = function(state_128366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38359__auto____1.call(this,state_128366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38359__auto____0;
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38359__auto____1;
return cljs$core$async$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___128414,tc,fc))
})();
var state__38381__auto__ = (function (){var statearr_128402 = f__38380__auto__.call(null);
(statearr_128402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___128414);

return statearr_128402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___128414,tc,fc))
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
var c__38379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto__){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto__){
return (function (state_128558){
var state_val_128559 = (state_128558[(1)]);
if((state_val_128559 === (7))){
var inst_128554 = (state_128558[(2)]);
var state_128558__$1 = state_128558;
var statearr_128560_128599 = state_128558__$1;
(statearr_128560_128599[(2)] = inst_128554);

(statearr_128560_128599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128559 === (1))){
var inst_128537 = init;
var state_128558__$1 = (function (){var statearr_128561 = state_128558;
(statearr_128561[(7)] = inst_128537);

return statearr_128561;
})();
var statearr_128562_128604 = state_128558__$1;
(statearr_128562_128604[(2)] = null);

(statearr_128562_128604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128559 === (4))){
var inst_128541 = (state_128558[(8)]);
var inst_128541__$1 = (state_128558[(2)]);
var inst_128542 = (inst_128541__$1 == null);
var state_128558__$1 = (function (){var statearr_128563 = state_128558;
(statearr_128563[(8)] = inst_128541__$1);

return statearr_128563;
})();
if(cljs.core.truth_(inst_128542)){
var statearr_128564_128610 = state_128558__$1;
(statearr_128564_128610[(1)] = (5));

} else {
var statearr_128565_128611 = state_128558__$1;
(statearr_128565_128611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128559 === (6))){
var inst_128545 = (state_128558[(9)]);
var inst_128541 = (state_128558[(8)]);
var inst_128537 = (state_128558[(7)]);
var inst_128545__$1 = f.call(null,inst_128537,inst_128541);
var inst_128546 = cljs.core.reduced_QMARK_.call(null,inst_128545__$1);
var state_128558__$1 = (function (){var statearr_128572 = state_128558;
(statearr_128572[(9)] = inst_128545__$1);

return statearr_128572;
})();
if(inst_128546){
var statearr_128573_128614 = state_128558__$1;
(statearr_128573_128614[(1)] = (8));

} else {
var statearr_128574_128615 = state_128558__$1;
(statearr_128574_128615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128559 === (3))){
var inst_128556 = (state_128558[(2)]);
var state_128558__$1 = state_128558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128558__$1,inst_128556);
} else {
if((state_val_128559 === (2))){
var state_128558__$1 = state_128558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_128558__$1,(4),ch);
} else {
if((state_val_128559 === (9))){
var inst_128545 = (state_128558[(9)]);
var inst_128537 = inst_128545;
var state_128558__$1 = (function (){var statearr_128576 = state_128558;
(statearr_128576[(7)] = inst_128537);

return statearr_128576;
})();
var statearr_128577_128618 = state_128558__$1;
(statearr_128577_128618[(2)] = null);

(statearr_128577_128618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128559 === (5))){
var inst_128537 = (state_128558[(7)]);
var state_128558__$1 = state_128558;
var statearr_128579_128619 = state_128558__$1;
(statearr_128579_128619[(2)] = inst_128537);

(statearr_128579_128619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128559 === (10))){
var inst_128552 = (state_128558[(2)]);
var state_128558__$1 = state_128558;
var statearr_128580_128621 = state_128558__$1;
(statearr_128580_128621[(2)] = inst_128552);

(statearr_128580_128621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128559 === (8))){
var inst_128545 = (state_128558[(9)]);
var inst_128548 = cljs.core.deref.call(null,inst_128545);
var state_128558__$1 = state_128558;
var statearr_128581_128622 = state_128558__$1;
(statearr_128581_128622[(2)] = inst_128548);

(statearr_128581_128622[(1)] = (10));


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
});})(c__38379__auto__))
;
return ((function (switch__38358__auto__,c__38379__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38359__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38359__auto____0 = (function (){
var statearr_128589 = [null,null,null,null,null,null,null,null,null,null];
(statearr_128589[(0)] = cljs$core$async$reduce_$_state_machine__38359__auto__);

(statearr_128589[(1)] = (1));

return statearr_128589;
});
var cljs$core$async$reduce_$_state_machine__38359__auto____1 = (function (state_128558){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_128558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e128591){if((e128591 instanceof Object)){
var ex__38362__auto__ = e128591;
var statearr_128592_128629 = state_128558;
(statearr_128592_128629[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128630 = state_128558;
state_128558 = G__128630;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38359__auto__ = function(state_128558){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38359__auto____1.call(this,state_128558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38359__auto____0;
cljs$core$async$reduce_$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38359__auto____1;
return cljs$core$async$reduce_$_state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto__))
})();
var state__38381__auto__ = (function (){var statearr_128593 = f__38380__auto__.call(null);
(statearr_128593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto__);

return statearr_128593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto__))
);

return c__38379__auto__;
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
var args128635 = [];
var len__36494__auto___128689 = arguments.length;
var i__36495__auto___128690 = (0);
while(true){
if((i__36495__auto___128690 < len__36494__auto___128689)){
args128635.push((arguments[i__36495__auto___128690]));

var G__128691 = (i__36495__auto___128690 + (1));
i__36495__auto___128690 = G__128691;
continue;
} else {
}
break;
}

var G__128637 = args128635.length;
switch (G__128637) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args128635.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto__){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto__){
return (function (state_128662){
var state_val_128663 = (state_128662[(1)]);
if((state_val_128663 === (7))){
var inst_128644 = (state_128662[(2)]);
var state_128662__$1 = state_128662;
var statearr_128665_128693 = state_128662__$1;
(statearr_128665_128693[(2)] = inst_128644);

(statearr_128665_128693[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128663 === (1))){
var inst_128638 = cljs.core.seq.call(null,coll);
var inst_128639 = inst_128638;
var state_128662__$1 = (function (){var statearr_128666 = state_128662;
(statearr_128666[(7)] = inst_128639);

return statearr_128666;
})();
var statearr_128667_128694 = state_128662__$1;
(statearr_128667_128694[(2)] = null);

(statearr_128667_128694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128663 === (4))){
var inst_128639 = (state_128662[(7)]);
var inst_128642 = cljs.core.first.call(null,inst_128639);
var state_128662__$1 = state_128662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_128662__$1,(7),ch,inst_128642);
} else {
if((state_val_128663 === (13))){
var inst_128656 = (state_128662[(2)]);
var state_128662__$1 = state_128662;
var statearr_128668_128695 = state_128662__$1;
(statearr_128668_128695[(2)] = inst_128656);

(statearr_128668_128695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128663 === (6))){
var inst_128647 = (state_128662[(2)]);
var state_128662__$1 = state_128662;
if(cljs.core.truth_(inst_128647)){
var statearr_128669_128696 = state_128662__$1;
(statearr_128669_128696[(1)] = (8));

} else {
var statearr_128670_128697 = state_128662__$1;
(statearr_128670_128697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128663 === (3))){
var inst_128660 = (state_128662[(2)]);
var state_128662__$1 = state_128662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_128662__$1,inst_128660);
} else {
if((state_val_128663 === (12))){
var state_128662__$1 = state_128662;
var statearr_128671_128698 = state_128662__$1;
(statearr_128671_128698[(2)] = null);

(statearr_128671_128698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128663 === (2))){
var inst_128639 = (state_128662[(7)]);
var state_128662__$1 = state_128662;
if(cljs.core.truth_(inst_128639)){
var statearr_128672_128699 = state_128662__$1;
(statearr_128672_128699[(1)] = (4));

} else {
var statearr_128673_128700 = state_128662__$1;
(statearr_128673_128700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128663 === (11))){
var inst_128653 = cljs.core.async.close_BANG_.call(null,ch);
var state_128662__$1 = state_128662;
var statearr_128674_128701 = state_128662__$1;
(statearr_128674_128701[(2)] = inst_128653);

(statearr_128674_128701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128663 === (9))){
var state_128662__$1 = state_128662;
if(cljs.core.truth_(close_QMARK_)){
var statearr_128675_128702 = state_128662__$1;
(statearr_128675_128702[(1)] = (11));

} else {
var statearr_128676_128703 = state_128662__$1;
(statearr_128676_128703[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128663 === (5))){
var inst_128639 = (state_128662[(7)]);
var state_128662__$1 = state_128662;
var statearr_128677_128704 = state_128662__$1;
(statearr_128677_128704[(2)] = inst_128639);

(statearr_128677_128704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128663 === (10))){
var inst_128658 = (state_128662[(2)]);
var state_128662__$1 = state_128662;
var statearr_128678_128705 = state_128662__$1;
(statearr_128678_128705[(2)] = inst_128658);

(statearr_128678_128705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_128663 === (8))){
var inst_128639 = (state_128662[(7)]);
var inst_128649 = cljs.core.next.call(null,inst_128639);
var inst_128639__$1 = inst_128649;
var state_128662__$1 = (function (){var statearr_128679 = state_128662;
(statearr_128679[(7)] = inst_128639__$1);

return statearr_128679;
})();
var statearr_128680_128706 = state_128662__$1;
(statearr_128680_128706[(2)] = null);

(statearr_128680_128706[(1)] = (2));


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
});})(c__38379__auto__))
;
return ((function (switch__38358__auto__,c__38379__auto__){
return (function() {
var cljs$core$async$state_machine__38359__auto__ = null;
var cljs$core$async$state_machine__38359__auto____0 = (function (){
var statearr_128685 = [null,null,null,null,null,null,null,null];
(statearr_128685[(0)] = cljs$core$async$state_machine__38359__auto__);

(statearr_128685[(1)] = (1));

return statearr_128685;
});
var cljs$core$async$state_machine__38359__auto____1 = (function (state_128662){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_128662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e128686){if((e128686 instanceof Object)){
var ex__38362__auto__ = e128686;
var statearr_128687_128707 = state_128662;
(statearr_128687_128707[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_128662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e128686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__128708 = state_128662;
state_128662 = G__128708;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$state_machine__38359__auto__ = function(state_128662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38359__auto____1.call(this,state_128662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38359__auto____0;
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38359__auto____1;
return cljs$core$async$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto__))
})();
var state__38381__auto__ = (function (){var statearr_128688 = f__38380__auto__.call(null);
(statearr_128688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto__);

return statearr_128688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto__))
);

return c__38379__auto__;
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
var x__36088__auto__ = (((_ == null))?null:_);
var m__36089__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,_);
} else {
var m__36089__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,_);
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
var x__36088__auto__ = (((m == null))?null:m);
var m__36089__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__36089__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__36088__auto__ = (((m == null))?null:m);
var m__36089__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,m,ch);
} else {
var m__36089__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,m,ch);
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
var x__36088__auto__ = (((m == null))?null:m);
var m__36089__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,m);
} else {
var m__36089__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async128962 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async128962 = (function (mult,ch,cs,meta128963){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta128963 = meta128963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async128962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_128964,meta128963__$1){
var self__ = this;
var _128964__$1 = this;
return (new cljs.core.async.t_cljs$core$async128962(self__.mult,self__.ch,self__.cs,meta128963__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async128962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_128964){
var self__ = this;
var _128964__$1 = this;
return self__.meta128963;
});})(cs))
;

cljs.core.async.t_cljs$core$async128962.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async128962.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async128962.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async128962.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async128962.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async128962.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async128962.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta128963","meta128963",-1514605692,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async128962.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async128962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async128962";

cljs.core.async.t_cljs$core$async128962.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cljs.core.async/t_cljs$core$async128962");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async128962 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async128962(mult__$1,ch__$1,cs__$1,meta128963){
return (new cljs.core.async.t_cljs$core$async128962(mult__$1,ch__$1,cs__$1,meta128963));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async128962(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38379__auto___129189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___129189,cs,m,dchan,dctr,done){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___129189,cs,m,dchan,dctr,done){
return (function (state_129095){
var state_val_129096 = (state_129095[(1)]);
if((state_val_129096 === (7))){
var inst_129091 = (state_129095[(2)]);
var state_129095__$1 = state_129095;
var statearr_129097_129190 = state_129095__$1;
(statearr_129097_129190[(2)] = inst_129091);

(statearr_129097_129190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (20))){
var inst_128996 = (state_129095[(7)]);
var inst_129006 = cljs.core.first.call(null,inst_128996);
var inst_129007 = cljs.core.nth.call(null,inst_129006,(0),null);
var inst_129008 = cljs.core.nth.call(null,inst_129006,(1),null);
var state_129095__$1 = (function (){var statearr_129098 = state_129095;
(statearr_129098[(8)] = inst_129007);

return statearr_129098;
})();
if(cljs.core.truth_(inst_129008)){
var statearr_129099_129191 = state_129095__$1;
(statearr_129099_129191[(1)] = (22));

} else {
var statearr_129100_129192 = state_129095__$1;
(statearr_129100_129192[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (27))){
var inst_128967 = (state_129095[(9)]);
var inst_129036 = (state_129095[(10)]);
var inst_129038 = (state_129095[(11)]);
var inst_129043 = (state_129095[(12)]);
var inst_129043__$1 = cljs.core._nth.call(null,inst_129036,inst_129038);
var inst_129044 = cljs.core.async.put_BANG_.call(null,inst_129043__$1,inst_128967,done);
var state_129095__$1 = (function (){var statearr_129101 = state_129095;
(statearr_129101[(12)] = inst_129043__$1);

return statearr_129101;
})();
if(cljs.core.truth_(inst_129044)){
var statearr_129102_129193 = state_129095__$1;
(statearr_129102_129193[(1)] = (30));

} else {
var statearr_129103_129194 = state_129095__$1;
(statearr_129103_129194[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (1))){
var state_129095__$1 = state_129095;
var statearr_129104_129195 = state_129095__$1;
(statearr_129104_129195[(2)] = null);

(statearr_129104_129195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (24))){
var inst_128996 = (state_129095[(7)]);
var inst_129013 = (state_129095[(2)]);
var inst_129014 = cljs.core.next.call(null,inst_128996);
var inst_128976 = inst_129014;
var inst_128977 = null;
var inst_128978 = (0);
var inst_128979 = (0);
var state_129095__$1 = (function (){var statearr_129105 = state_129095;
(statearr_129105[(13)] = inst_128976);

(statearr_129105[(14)] = inst_128979);

(statearr_129105[(15)] = inst_128977);

(statearr_129105[(16)] = inst_129013);

(statearr_129105[(17)] = inst_128978);

return statearr_129105;
})();
var statearr_129106_129196 = state_129095__$1;
(statearr_129106_129196[(2)] = null);

(statearr_129106_129196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (39))){
var state_129095__$1 = state_129095;
var statearr_129110_129199 = state_129095__$1;
(statearr_129110_129199[(2)] = null);

(statearr_129110_129199[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (4))){
var inst_128967 = (state_129095[(9)]);
var inst_128967__$1 = (state_129095[(2)]);
var inst_128968 = (inst_128967__$1 == null);
var state_129095__$1 = (function (){var statearr_129111 = state_129095;
(statearr_129111[(9)] = inst_128967__$1);

return statearr_129111;
})();
if(cljs.core.truth_(inst_128968)){
var statearr_129112_129201 = state_129095__$1;
(statearr_129112_129201[(1)] = (5));

} else {
var statearr_129113_129202 = state_129095__$1;
(statearr_129113_129202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (15))){
var inst_128976 = (state_129095[(13)]);
var inst_128979 = (state_129095[(14)]);
var inst_128977 = (state_129095[(15)]);
var inst_128978 = (state_129095[(17)]);
var inst_128992 = (state_129095[(2)]);
var inst_128993 = (inst_128979 + (1));
var tmp129107 = inst_128976;
var tmp129108 = inst_128977;
var tmp129109 = inst_128978;
var inst_128976__$1 = tmp129107;
var inst_128977__$1 = tmp129108;
var inst_128978__$1 = tmp129109;
var inst_128979__$1 = inst_128993;
var state_129095__$1 = (function (){var statearr_129114 = state_129095;
(statearr_129114[(13)] = inst_128976__$1);

(statearr_129114[(14)] = inst_128979__$1);

(statearr_129114[(15)] = inst_128977__$1);

(statearr_129114[(17)] = inst_128978__$1);

(statearr_129114[(18)] = inst_128992);

return statearr_129114;
})();
var statearr_129115_129209 = state_129095__$1;
(statearr_129115_129209[(2)] = null);

(statearr_129115_129209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (21))){
var inst_129017 = (state_129095[(2)]);
var state_129095__$1 = state_129095;
var statearr_129119_129210 = state_129095__$1;
(statearr_129119_129210[(2)] = inst_129017);

(statearr_129119_129210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (31))){
var inst_129043 = (state_129095[(12)]);
var inst_129047 = done.call(null,null);
var inst_129048 = cljs.core.async.untap_STAR_.call(null,m,inst_129043);
var state_129095__$1 = (function (){var statearr_129120 = state_129095;
(statearr_129120[(19)] = inst_129047);

return statearr_129120;
})();
var statearr_129121_129211 = state_129095__$1;
(statearr_129121_129211[(2)] = inst_129048);

(statearr_129121_129211[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (32))){
var inst_129035 = (state_129095[(20)]);
var inst_129036 = (state_129095[(10)]);
var inst_129038 = (state_129095[(11)]);
var inst_129037 = (state_129095[(21)]);
var inst_129050 = (state_129095[(2)]);
var inst_129051 = (inst_129038 + (1));
var tmp129116 = inst_129035;
var tmp129117 = inst_129036;
var tmp129118 = inst_129037;
var inst_129035__$1 = tmp129116;
var inst_129036__$1 = tmp129117;
var inst_129037__$1 = tmp129118;
var inst_129038__$1 = inst_129051;
var state_129095__$1 = (function (){var statearr_129122 = state_129095;
(statearr_129122[(22)] = inst_129050);

(statearr_129122[(20)] = inst_129035__$1);

(statearr_129122[(10)] = inst_129036__$1);

(statearr_129122[(11)] = inst_129038__$1);

(statearr_129122[(21)] = inst_129037__$1);

return statearr_129122;
})();
var statearr_129123_129216 = state_129095__$1;
(statearr_129123_129216[(2)] = null);

(statearr_129123_129216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (40))){
var inst_129063 = (state_129095[(23)]);
var inst_129067 = done.call(null,null);
var inst_129068 = cljs.core.async.untap_STAR_.call(null,m,inst_129063);
var state_129095__$1 = (function (){var statearr_129124 = state_129095;
(statearr_129124[(24)] = inst_129067);

return statearr_129124;
})();
var statearr_129125_129218 = state_129095__$1;
(statearr_129125_129218[(2)] = inst_129068);

(statearr_129125_129218[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (33))){
var inst_129054 = (state_129095[(25)]);
var inst_129056 = cljs.core.chunked_seq_QMARK_.call(null,inst_129054);
var state_129095__$1 = state_129095;
if(inst_129056){
var statearr_129126_129219 = state_129095__$1;
(statearr_129126_129219[(1)] = (36));

} else {
var statearr_129127_129220 = state_129095__$1;
(statearr_129127_129220[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (13))){
var inst_128986 = (state_129095[(26)]);
var inst_128989 = cljs.core.async.close_BANG_.call(null,inst_128986);
var state_129095__$1 = state_129095;
var statearr_129128_129221 = state_129095__$1;
(statearr_129128_129221[(2)] = inst_128989);

(statearr_129128_129221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (22))){
var inst_129007 = (state_129095[(8)]);
var inst_129010 = cljs.core.async.close_BANG_.call(null,inst_129007);
var state_129095__$1 = state_129095;
var statearr_129129_129222 = state_129095__$1;
(statearr_129129_129222[(2)] = inst_129010);

(statearr_129129_129222[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (36))){
var inst_129054 = (state_129095[(25)]);
var inst_129058 = cljs.core.chunk_first.call(null,inst_129054);
var inst_129059 = cljs.core.chunk_rest.call(null,inst_129054);
var inst_129060 = cljs.core.count.call(null,inst_129058);
var inst_129035 = inst_129059;
var inst_129036 = inst_129058;
var inst_129037 = inst_129060;
var inst_129038 = (0);
var state_129095__$1 = (function (){var statearr_129130 = state_129095;
(statearr_129130[(20)] = inst_129035);

(statearr_129130[(10)] = inst_129036);

(statearr_129130[(11)] = inst_129038);

(statearr_129130[(21)] = inst_129037);

return statearr_129130;
})();
var statearr_129131_129226 = state_129095__$1;
(statearr_129131_129226[(2)] = null);

(statearr_129131_129226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (41))){
var inst_129054 = (state_129095[(25)]);
var inst_129070 = (state_129095[(2)]);
var inst_129071 = cljs.core.next.call(null,inst_129054);
var inst_129035 = inst_129071;
var inst_129036 = null;
var inst_129037 = (0);
var inst_129038 = (0);
var state_129095__$1 = (function (){var statearr_129132 = state_129095;
(statearr_129132[(20)] = inst_129035);

(statearr_129132[(27)] = inst_129070);

(statearr_129132[(10)] = inst_129036);

(statearr_129132[(11)] = inst_129038);

(statearr_129132[(21)] = inst_129037);

return statearr_129132;
})();
var statearr_129133_129227 = state_129095__$1;
(statearr_129133_129227[(2)] = null);

(statearr_129133_129227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (43))){
var state_129095__$1 = state_129095;
var statearr_129134_129228 = state_129095__$1;
(statearr_129134_129228[(2)] = null);

(statearr_129134_129228[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (29))){
var inst_129079 = (state_129095[(2)]);
var state_129095__$1 = state_129095;
var statearr_129135_129229 = state_129095__$1;
(statearr_129135_129229[(2)] = inst_129079);

(statearr_129135_129229[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (44))){
var inst_129088 = (state_129095[(2)]);
var state_129095__$1 = (function (){var statearr_129136 = state_129095;
(statearr_129136[(28)] = inst_129088);

return statearr_129136;
})();
var statearr_129137_129230 = state_129095__$1;
(statearr_129137_129230[(2)] = null);

(statearr_129137_129230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (6))){
var inst_129027 = (state_129095[(29)]);
var inst_129026 = cljs.core.deref.call(null,cs);
var inst_129027__$1 = cljs.core.keys.call(null,inst_129026);
var inst_129028 = cljs.core.count.call(null,inst_129027__$1);
var inst_129029 = cljs.core.reset_BANG_.call(null,dctr,inst_129028);
var inst_129034 = cljs.core.seq.call(null,inst_129027__$1);
var inst_129035 = inst_129034;
var inst_129036 = null;
var inst_129037 = (0);
var inst_129038 = (0);
var state_129095__$1 = (function (){var statearr_129138 = state_129095;
(statearr_129138[(29)] = inst_129027__$1);

(statearr_129138[(20)] = inst_129035);

(statearr_129138[(10)] = inst_129036);

(statearr_129138[(11)] = inst_129038);

(statearr_129138[(21)] = inst_129037);

(statearr_129138[(30)] = inst_129029);

return statearr_129138;
})();
var statearr_129139_129232 = state_129095__$1;
(statearr_129139_129232[(2)] = null);

(statearr_129139_129232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (28))){
var inst_129054 = (state_129095[(25)]);
var inst_129035 = (state_129095[(20)]);
var inst_129054__$1 = cljs.core.seq.call(null,inst_129035);
var state_129095__$1 = (function (){var statearr_129140 = state_129095;
(statearr_129140[(25)] = inst_129054__$1);

return statearr_129140;
})();
if(inst_129054__$1){
var statearr_129141_129233 = state_129095__$1;
(statearr_129141_129233[(1)] = (33));

} else {
var statearr_129142_129234 = state_129095__$1;
(statearr_129142_129234[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (25))){
var inst_129038 = (state_129095[(11)]);
var inst_129037 = (state_129095[(21)]);
var inst_129040 = (inst_129038 < inst_129037);
var inst_129041 = inst_129040;
var state_129095__$1 = state_129095;
if(cljs.core.truth_(inst_129041)){
var statearr_129143_129236 = state_129095__$1;
(statearr_129143_129236[(1)] = (27));

} else {
var statearr_129144_129237 = state_129095__$1;
(statearr_129144_129237[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (34))){
var state_129095__$1 = state_129095;
var statearr_129145_129238 = state_129095__$1;
(statearr_129145_129238[(2)] = null);

(statearr_129145_129238[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (17))){
var state_129095__$1 = state_129095;
var statearr_129146_129239 = state_129095__$1;
(statearr_129146_129239[(2)] = null);

(statearr_129146_129239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (3))){
var inst_129093 = (state_129095[(2)]);
var state_129095__$1 = state_129095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129095__$1,inst_129093);
} else {
if((state_val_129096 === (12))){
var inst_129022 = (state_129095[(2)]);
var state_129095__$1 = state_129095;
var statearr_129147_129240 = state_129095__$1;
(statearr_129147_129240[(2)] = inst_129022);

(statearr_129147_129240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (2))){
var state_129095__$1 = state_129095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129095__$1,(4),ch);
} else {
if((state_val_129096 === (23))){
var state_129095__$1 = state_129095;
var statearr_129148_129241 = state_129095__$1;
(statearr_129148_129241[(2)] = null);

(statearr_129148_129241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (35))){
var inst_129077 = (state_129095[(2)]);
var state_129095__$1 = state_129095;
var statearr_129150_129243 = state_129095__$1;
(statearr_129150_129243[(2)] = inst_129077);

(statearr_129150_129243[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (19))){
var inst_128996 = (state_129095[(7)]);
var inst_129000 = cljs.core.chunk_first.call(null,inst_128996);
var inst_129001 = cljs.core.chunk_rest.call(null,inst_128996);
var inst_129002 = cljs.core.count.call(null,inst_129000);
var inst_128976 = inst_129001;
var inst_128977 = inst_129000;
var inst_128978 = inst_129002;
var inst_128979 = (0);
var state_129095__$1 = (function (){var statearr_129151 = state_129095;
(statearr_129151[(13)] = inst_128976);

(statearr_129151[(14)] = inst_128979);

(statearr_129151[(15)] = inst_128977);

(statearr_129151[(17)] = inst_128978);

return statearr_129151;
})();
var statearr_129152_129244 = state_129095__$1;
(statearr_129152_129244[(2)] = null);

(statearr_129152_129244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (11))){
var inst_128976 = (state_129095[(13)]);
var inst_128996 = (state_129095[(7)]);
var inst_128996__$1 = cljs.core.seq.call(null,inst_128976);
var state_129095__$1 = (function (){var statearr_129153 = state_129095;
(statearr_129153[(7)] = inst_128996__$1);

return statearr_129153;
})();
if(inst_128996__$1){
var statearr_129154_129246 = state_129095__$1;
(statearr_129154_129246[(1)] = (16));

} else {
var statearr_129155_129247 = state_129095__$1;
(statearr_129155_129247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (9))){
var inst_129024 = (state_129095[(2)]);
var state_129095__$1 = state_129095;
var statearr_129156_129248 = state_129095__$1;
(statearr_129156_129248[(2)] = inst_129024);

(statearr_129156_129248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (5))){
var inst_128974 = cljs.core.deref.call(null,cs);
var inst_128975 = cljs.core.seq.call(null,inst_128974);
var inst_128976 = inst_128975;
var inst_128977 = null;
var inst_128978 = (0);
var inst_128979 = (0);
var state_129095__$1 = (function (){var statearr_129157 = state_129095;
(statearr_129157[(13)] = inst_128976);

(statearr_129157[(14)] = inst_128979);

(statearr_129157[(15)] = inst_128977);

(statearr_129157[(17)] = inst_128978);

return statearr_129157;
})();
var statearr_129158_129249 = state_129095__$1;
(statearr_129158_129249[(2)] = null);

(statearr_129158_129249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (14))){
var state_129095__$1 = state_129095;
var statearr_129159_129250 = state_129095__$1;
(statearr_129159_129250[(2)] = null);

(statearr_129159_129250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (45))){
var inst_129085 = (state_129095[(2)]);
var state_129095__$1 = state_129095;
var statearr_129160_129251 = state_129095__$1;
(statearr_129160_129251[(2)] = inst_129085);

(statearr_129160_129251[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (26))){
var inst_129027 = (state_129095[(29)]);
var inst_129081 = (state_129095[(2)]);
var inst_129082 = cljs.core.seq.call(null,inst_129027);
var state_129095__$1 = (function (){var statearr_129161 = state_129095;
(statearr_129161[(31)] = inst_129081);

return statearr_129161;
})();
if(inst_129082){
var statearr_129162_129252 = state_129095__$1;
(statearr_129162_129252[(1)] = (42));

} else {
var statearr_129163_129253 = state_129095__$1;
(statearr_129163_129253[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (16))){
var inst_128996 = (state_129095[(7)]);
var inst_128998 = cljs.core.chunked_seq_QMARK_.call(null,inst_128996);
var state_129095__$1 = state_129095;
if(inst_128998){
var statearr_129164_129254 = state_129095__$1;
(statearr_129164_129254[(1)] = (19));

} else {
var statearr_129165_129255 = state_129095__$1;
(statearr_129165_129255[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (38))){
var inst_129074 = (state_129095[(2)]);
var state_129095__$1 = state_129095;
var statearr_129166_129256 = state_129095__$1;
(statearr_129166_129256[(2)] = inst_129074);

(statearr_129166_129256[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (30))){
var state_129095__$1 = state_129095;
var statearr_129167_129257 = state_129095__$1;
(statearr_129167_129257[(2)] = null);

(statearr_129167_129257[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (10))){
var inst_128979 = (state_129095[(14)]);
var inst_128977 = (state_129095[(15)]);
var inst_128985 = cljs.core._nth.call(null,inst_128977,inst_128979);
var inst_128986 = cljs.core.nth.call(null,inst_128985,(0),null);
var inst_128987 = cljs.core.nth.call(null,inst_128985,(1),null);
var state_129095__$1 = (function (){var statearr_129168 = state_129095;
(statearr_129168[(26)] = inst_128986);

return statearr_129168;
})();
if(cljs.core.truth_(inst_128987)){
var statearr_129169_129258 = state_129095__$1;
(statearr_129169_129258[(1)] = (13));

} else {
var statearr_129170_129259 = state_129095__$1;
(statearr_129170_129259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (18))){
var inst_129020 = (state_129095[(2)]);
var state_129095__$1 = state_129095;
var statearr_129171_129260 = state_129095__$1;
(statearr_129171_129260[(2)] = inst_129020);

(statearr_129171_129260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (42))){
var state_129095__$1 = state_129095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129095__$1,(45),dchan);
} else {
if((state_val_129096 === (37))){
var inst_129054 = (state_129095[(25)]);
var inst_128967 = (state_129095[(9)]);
var inst_129063 = (state_129095[(23)]);
var inst_129063__$1 = cljs.core.first.call(null,inst_129054);
var inst_129064 = cljs.core.async.put_BANG_.call(null,inst_129063__$1,inst_128967,done);
var state_129095__$1 = (function (){var statearr_129172 = state_129095;
(statearr_129172[(23)] = inst_129063__$1);

return statearr_129172;
})();
if(cljs.core.truth_(inst_129064)){
var statearr_129173_129261 = state_129095__$1;
(statearr_129173_129261[(1)] = (39));

} else {
var statearr_129174_129262 = state_129095__$1;
(statearr_129174_129262[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129096 === (8))){
var inst_128979 = (state_129095[(14)]);
var inst_128978 = (state_129095[(17)]);
var inst_128981 = (inst_128979 < inst_128978);
var inst_128982 = inst_128981;
var state_129095__$1 = state_129095;
if(cljs.core.truth_(inst_128982)){
var statearr_129175_129263 = state_129095__$1;
(statearr_129175_129263[(1)] = (10));

} else {
var statearr_129176_129264 = state_129095__$1;
(statearr_129176_129264[(1)] = (11));

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
});})(c__38379__auto___129189,cs,m,dchan,dctr,done))
;
return ((function (switch__38358__auto__,c__38379__auto___129189,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38359__auto__ = null;
var cljs$core$async$mult_$_state_machine__38359__auto____0 = (function (){
var statearr_129180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_129180[(0)] = cljs$core$async$mult_$_state_machine__38359__auto__);

(statearr_129180[(1)] = (1));

return statearr_129180;
});
var cljs$core$async$mult_$_state_machine__38359__auto____1 = (function (state_129095){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_129095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e129181){if((e129181 instanceof Object)){
var ex__38362__auto__ = e129181;
var statearr_129182_129265 = state_129095;
(statearr_129182_129265[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129266 = state_129095;
state_129095 = G__129266;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38359__auto__ = function(state_129095){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38359__auto____1.call(this,state_129095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38359__auto____0;
cljs$core$async$mult_$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38359__auto____1;
return cljs$core$async$mult_$_state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___129189,cs,m,dchan,dctr,done))
})();
var state__38381__auto__ = (function (){var statearr_129183 = f__38380__auto__.call(null);
(statearr_129183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___129189);

return statearr_129183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___129189,cs,m,dchan,dctr,done))
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
var args129270 = [];
var len__36494__auto___129279 = arguments.length;
var i__36495__auto___129280 = (0);
while(true){
if((i__36495__auto___129280 < len__36494__auto___129279)){
args129270.push((arguments[i__36495__auto___129280]));

var G__129281 = (i__36495__auto___129280 + (1));
i__36495__auto___129280 = G__129281;
continue;
} else {
}
break;
}

var G__129278 = args129270.length;
switch (G__129278) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args129270.length)].join('')));

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
var x__36088__auto__ = (((m == null))?null:m);
var m__36089__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,m,ch);
} else {
var m__36089__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,m,ch);
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
var x__36088__auto__ = (((m == null))?null:m);
var m__36089__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,m,ch);
} else {
var m__36089__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,m,ch);
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
var x__36088__auto__ = (((m == null))?null:m);
var m__36089__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,m);
} else {
var m__36089__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,m);
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
var x__36088__auto__ = (((m == null))?null:m);
var m__36089__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,m,state_map);
} else {
var m__36089__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,m,state_map);
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
var x__36088__auto__ = (((m == null))?null:m);
var m__36089__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,m,mode);
} else {
var m__36089__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__36501__auto__ = [];
var len__36494__auto___129302 = arguments.length;
var i__36495__auto___129303 = (0);
while(true){
if((i__36495__auto___129303 < len__36494__auto___129302)){
args__36501__auto__.push((arguments[i__36495__auto___129303]));

var G__129304 = (i__36495__auto___129303 + (1));
i__36495__auto___129303 = G__129304;
continue;
} else {
}
break;
}

var argseq__36502__auto__ = ((((3) < args__36501__auto__.length))?(new cljs.core.IndexedSeq(args__36501__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36502__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__129295){
var map__129296 = p__129295;
var map__129296__$1 = ((((!((map__129296 == null)))?((((map__129296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__129296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__129296):map__129296);
var opts = map__129296__$1;
var statearr_129299_129306 = state;
(statearr_129299_129306[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__129296,map__129296__$1,opts){
return (function (val){
var statearr_129300_129307 = state;
(statearr_129300_129307[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__129296,map__129296__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_129301_129308 = state;
(statearr_129301_129308[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq129291){
var G__129292 = cljs.core.first.call(null,seq129291);
var seq129291__$1 = cljs.core.next.call(null,seq129291);
var G__129293 = cljs.core.first.call(null,seq129291__$1);
var seq129291__$2 = cljs.core.next.call(null,seq129291__$1);
var G__129294 = cljs.core.first.call(null,seq129291__$2);
var seq129291__$3 = cljs.core.next.call(null,seq129291__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__129292,G__129293,G__129294,seq129291__$3);
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
if(typeof cljs.core.async.t_cljs$core$async129483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async129483 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta129484){
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
this.meta129484 = meta129484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async129483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_129485,meta129484__$1){
var self__ = this;
var _129485__$1 = this;
return (new cljs.core.async.t_cljs$core$async129483(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta129484__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async129483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_129485){
var self__ = this;
var _129485__$1 = this;
return self__.meta129484;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async129483.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async129483.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async129483.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async129483.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async129483.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async129483.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async129483.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async129483.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async129483.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta129484","meta129484",2020114755,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async129483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async129483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async129483";

cljs.core.async.t_cljs$core$async129483.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cljs.core.async/t_cljs$core$async129483");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async129483 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async129483(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta129484){
return (new cljs.core.async.t_cljs$core$async129483(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta129484));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async129483(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38379__auto___129658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___129658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___129658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_129587){
var state_val_129588 = (state_129587[(1)]);
if((state_val_129588 === (7))){
var inst_129501 = (state_129587[(2)]);
var state_129587__$1 = state_129587;
var statearr_129589_129659 = state_129587__$1;
(statearr_129589_129659[(2)] = inst_129501);

(statearr_129589_129659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (20))){
var inst_129513 = (state_129587[(7)]);
var state_129587__$1 = state_129587;
var statearr_129590_129660 = state_129587__$1;
(statearr_129590_129660[(2)] = inst_129513);

(statearr_129590_129660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (27))){
var state_129587__$1 = state_129587;
var statearr_129591_129661 = state_129587__$1;
(statearr_129591_129661[(2)] = null);

(statearr_129591_129661[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (1))){
var inst_129489 = (state_129587[(8)]);
var inst_129489__$1 = calc_state.call(null);
var inst_129491 = (inst_129489__$1 == null);
var inst_129492 = cljs.core.not.call(null,inst_129491);
var state_129587__$1 = (function (){var statearr_129593 = state_129587;
(statearr_129593[(8)] = inst_129489__$1);

return statearr_129593;
})();
if(inst_129492){
var statearr_129594_129662 = state_129587__$1;
(statearr_129594_129662[(1)] = (2));

} else {
var statearr_129595_129663 = state_129587__$1;
(statearr_129595_129663[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (24))){
var inst_129543 = (state_129587[(9)]);
var inst_129561 = (state_129587[(10)]);
var inst_129536 = (state_129587[(11)]);
var inst_129561__$1 = inst_129536.call(null,inst_129543);
var state_129587__$1 = (function (){var statearr_129596 = state_129587;
(statearr_129596[(10)] = inst_129561__$1);

return statearr_129596;
})();
if(cljs.core.truth_(inst_129561__$1)){
var statearr_129597_129664 = state_129587__$1;
(statearr_129597_129664[(1)] = (29));

} else {
var statearr_129598_129665 = state_129587__$1;
(statearr_129598_129665[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (4))){
var inst_129504 = (state_129587[(2)]);
var state_129587__$1 = state_129587;
if(cljs.core.truth_(inst_129504)){
var statearr_129599_129666 = state_129587__$1;
(statearr_129599_129666[(1)] = (8));

} else {
var statearr_129600_129667 = state_129587__$1;
(statearr_129600_129667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (15))){
var inst_129530 = (state_129587[(2)]);
var state_129587__$1 = state_129587;
if(cljs.core.truth_(inst_129530)){
var statearr_129601_129668 = state_129587__$1;
(statearr_129601_129668[(1)] = (19));

} else {
var statearr_129602_129669 = state_129587__$1;
(statearr_129602_129669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (21))){
var inst_129535 = (state_129587[(12)]);
var inst_129535__$1 = (state_129587[(2)]);
var inst_129536 = cljs.core.get.call(null,inst_129535__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_129537 = cljs.core.get.call(null,inst_129535__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_129538 = cljs.core.get.call(null,inst_129535__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_129587__$1 = (function (){var statearr_129603 = state_129587;
(statearr_129603[(12)] = inst_129535__$1);

(statearr_129603[(13)] = inst_129537);

(statearr_129603[(11)] = inst_129536);

return statearr_129603;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_129587__$1,(22),inst_129538);
} else {
if((state_val_129588 === (31))){
var inst_129569 = (state_129587[(2)]);
var state_129587__$1 = state_129587;
if(cljs.core.truth_(inst_129569)){
var statearr_129604_129673 = state_129587__$1;
(statearr_129604_129673[(1)] = (32));

} else {
var statearr_129605_129674 = state_129587__$1;
(statearr_129605_129674[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (32))){
var inst_129542 = (state_129587[(14)]);
var state_129587__$1 = state_129587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129587__$1,(35),out,inst_129542);
} else {
if((state_val_129588 === (33))){
var inst_129535 = (state_129587[(12)]);
var inst_129513 = inst_129535;
var state_129587__$1 = (function (){var statearr_129606 = state_129587;
(statearr_129606[(7)] = inst_129513);

return statearr_129606;
})();
var statearr_129607_129675 = state_129587__$1;
(statearr_129607_129675[(2)] = null);

(statearr_129607_129675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (13))){
var inst_129513 = (state_129587[(7)]);
var inst_129520 = inst_129513.cljs$lang$protocol_mask$partition0$;
var inst_129521 = (inst_129520 & (64));
var inst_129522 = inst_129513.cljs$core$ISeq$;
var inst_129523 = (inst_129521) || (inst_129522);
var state_129587__$1 = state_129587;
if(cljs.core.truth_(inst_129523)){
var statearr_129608_129676 = state_129587__$1;
(statearr_129608_129676[(1)] = (16));

} else {
var statearr_129609_129677 = state_129587__$1;
(statearr_129609_129677[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (22))){
var inst_129543 = (state_129587[(9)]);
var inst_129542 = (state_129587[(14)]);
var inst_129541 = (state_129587[(2)]);
var inst_129542__$1 = cljs.core.nth.call(null,inst_129541,(0),null);
var inst_129543__$1 = cljs.core.nth.call(null,inst_129541,(1),null);
var inst_129544 = (inst_129542__$1 == null);
var inst_129545 = cljs.core._EQ_.call(null,inst_129543__$1,change);
var inst_129546 = (inst_129544) || (inst_129545);
var state_129587__$1 = (function (){var statearr_129613 = state_129587;
(statearr_129613[(9)] = inst_129543__$1);

(statearr_129613[(14)] = inst_129542__$1);

return statearr_129613;
})();
if(cljs.core.truth_(inst_129546)){
var statearr_129614_129684 = state_129587__$1;
(statearr_129614_129684[(1)] = (23));

} else {
var statearr_129615_129685 = state_129587__$1;
(statearr_129615_129685[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (36))){
var inst_129535 = (state_129587[(12)]);
var inst_129513 = inst_129535;
var state_129587__$1 = (function (){var statearr_129616 = state_129587;
(statearr_129616[(7)] = inst_129513);

return statearr_129616;
})();
var statearr_129617_129686 = state_129587__$1;
(statearr_129617_129686[(2)] = null);

(statearr_129617_129686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (29))){
var inst_129561 = (state_129587[(10)]);
var state_129587__$1 = state_129587;
var statearr_129618_129687 = state_129587__$1;
(statearr_129618_129687[(2)] = inst_129561);

(statearr_129618_129687[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (6))){
var state_129587__$1 = state_129587;
var statearr_129619_129688 = state_129587__$1;
(statearr_129619_129688[(2)] = false);

(statearr_129619_129688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (28))){
var inst_129557 = (state_129587[(2)]);
var inst_129558 = calc_state.call(null);
var inst_129513 = inst_129558;
var state_129587__$1 = (function (){var statearr_129620 = state_129587;
(statearr_129620[(15)] = inst_129557);

(statearr_129620[(7)] = inst_129513);

return statearr_129620;
})();
var statearr_129621_129689 = state_129587__$1;
(statearr_129621_129689[(2)] = null);

(statearr_129621_129689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (25))){
var inst_129583 = (state_129587[(2)]);
var state_129587__$1 = state_129587;
var statearr_129622_129690 = state_129587__$1;
(statearr_129622_129690[(2)] = inst_129583);

(statearr_129622_129690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (34))){
var inst_129581 = (state_129587[(2)]);
var state_129587__$1 = state_129587;
var statearr_129623_129691 = state_129587__$1;
(statearr_129623_129691[(2)] = inst_129581);

(statearr_129623_129691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (17))){
var state_129587__$1 = state_129587;
var statearr_129624_129696 = state_129587__$1;
(statearr_129624_129696[(2)] = false);

(statearr_129624_129696[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (3))){
var state_129587__$1 = state_129587;
var statearr_129625_129697 = state_129587__$1;
(statearr_129625_129697[(2)] = false);

(statearr_129625_129697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (12))){
var inst_129585 = (state_129587[(2)]);
var state_129587__$1 = state_129587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129587__$1,inst_129585);
} else {
if((state_val_129588 === (2))){
var inst_129489 = (state_129587[(8)]);
var inst_129494 = inst_129489.cljs$lang$protocol_mask$partition0$;
var inst_129495 = (inst_129494 & (64));
var inst_129496 = inst_129489.cljs$core$ISeq$;
var inst_129497 = (inst_129495) || (inst_129496);
var state_129587__$1 = state_129587;
if(cljs.core.truth_(inst_129497)){
var statearr_129626_129699 = state_129587__$1;
(statearr_129626_129699[(1)] = (5));

} else {
var statearr_129627_129700 = state_129587__$1;
(statearr_129627_129700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (23))){
var inst_129542 = (state_129587[(14)]);
var inst_129552 = (inst_129542 == null);
var state_129587__$1 = state_129587;
if(cljs.core.truth_(inst_129552)){
var statearr_129628_129701 = state_129587__$1;
(statearr_129628_129701[(1)] = (26));

} else {
var statearr_129629_129702 = state_129587__$1;
(statearr_129629_129702[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (35))){
var inst_129572 = (state_129587[(2)]);
var state_129587__$1 = state_129587;
if(cljs.core.truth_(inst_129572)){
var statearr_129630_129703 = state_129587__$1;
(statearr_129630_129703[(1)] = (36));

} else {
var statearr_129631_129704 = state_129587__$1;
(statearr_129631_129704[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (19))){
var inst_129513 = (state_129587[(7)]);
var inst_129532 = cljs.core.apply.call(null,cljs.core.hash_map,inst_129513);
var state_129587__$1 = state_129587;
var statearr_129632_129705 = state_129587__$1;
(statearr_129632_129705[(2)] = inst_129532);

(statearr_129632_129705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (11))){
var inst_129513 = (state_129587[(7)]);
var inst_129517 = (inst_129513 == null);
var inst_129518 = cljs.core.not.call(null,inst_129517);
var state_129587__$1 = state_129587;
if(inst_129518){
var statearr_129633_129709 = state_129587__$1;
(statearr_129633_129709[(1)] = (13));

} else {
var statearr_129634_129710 = state_129587__$1;
(statearr_129634_129710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (9))){
var inst_129489 = (state_129587[(8)]);
var state_129587__$1 = state_129587;
var statearr_129635_129711 = state_129587__$1;
(statearr_129635_129711[(2)] = inst_129489);

(statearr_129635_129711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (5))){
var state_129587__$1 = state_129587;
var statearr_129636_129712 = state_129587__$1;
(statearr_129636_129712[(2)] = true);

(statearr_129636_129712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (14))){
var state_129587__$1 = state_129587;
var statearr_129637_129713 = state_129587__$1;
(statearr_129637_129713[(2)] = false);

(statearr_129637_129713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (26))){
var inst_129543 = (state_129587[(9)]);
var inst_129554 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_129543);
var state_129587__$1 = state_129587;
var statearr_129638_129714 = state_129587__$1;
(statearr_129638_129714[(2)] = inst_129554);

(statearr_129638_129714[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (16))){
var state_129587__$1 = state_129587;
var statearr_129639_129715 = state_129587__$1;
(statearr_129639_129715[(2)] = true);

(statearr_129639_129715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (38))){
var inst_129577 = (state_129587[(2)]);
var state_129587__$1 = state_129587;
var statearr_129640_129716 = state_129587__$1;
(statearr_129640_129716[(2)] = inst_129577);

(statearr_129640_129716[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (30))){
var inst_129543 = (state_129587[(9)]);
var inst_129537 = (state_129587[(13)]);
var inst_129536 = (state_129587[(11)]);
var inst_129564 = cljs.core.empty_QMARK_.call(null,inst_129536);
var inst_129565 = inst_129537.call(null,inst_129543);
var inst_129566 = cljs.core.not.call(null,inst_129565);
var inst_129567 = (inst_129564) && (inst_129566);
var state_129587__$1 = state_129587;
var statearr_129641_129717 = state_129587__$1;
(statearr_129641_129717[(2)] = inst_129567);

(statearr_129641_129717[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (10))){
var inst_129489 = (state_129587[(8)]);
var inst_129509 = (state_129587[(2)]);
var inst_129510 = cljs.core.get.call(null,inst_129509,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_129511 = cljs.core.get.call(null,inst_129509,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_129512 = cljs.core.get.call(null,inst_129509,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_129513 = inst_129489;
var state_129587__$1 = (function (){var statearr_129642 = state_129587;
(statearr_129642[(16)] = inst_129510);

(statearr_129642[(17)] = inst_129512);

(statearr_129642[(7)] = inst_129513);

(statearr_129642[(18)] = inst_129511);

return statearr_129642;
})();
var statearr_129643_129718 = state_129587__$1;
(statearr_129643_129718[(2)] = null);

(statearr_129643_129718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (18))){
var inst_129527 = (state_129587[(2)]);
var state_129587__$1 = state_129587;
var statearr_129644_129719 = state_129587__$1;
(statearr_129644_129719[(2)] = inst_129527);

(statearr_129644_129719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (37))){
var state_129587__$1 = state_129587;
var statearr_129645_129720 = state_129587__$1;
(statearr_129645_129720[(2)] = null);

(statearr_129645_129720[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129588 === (8))){
var inst_129489 = (state_129587[(8)]);
var inst_129506 = cljs.core.apply.call(null,cljs.core.hash_map,inst_129489);
var state_129587__$1 = state_129587;
var statearr_129646_129722 = state_129587__$1;
(statearr_129646_129722[(2)] = inst_129506);

(statearr_129646_129722[(1)] = (10));


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
});})(c__38379__auto___129658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38358__auto__,c__38379__auto___129658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38359__auto__ = null;
var cljs$core$async$mix_$_state_machine__38359__auto____0 = (function (){
var statearr_129651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_129651[(0)] = cljs$core$async$mix_$_state_machine__38359__auto__);

(statearr_129651[(1)] = (1));

return statearr_129651;
});
var cljs$core$async$mix_$_state_machine__38359__auto____1 = (function (state_129587){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_129587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e129652){if((e129652 instanceof Object)){
var ex__38362__auto__ = e129652;
var statearr_129653_129724 = state_129587;
(statearr_129653_129724[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__129725 = state_129587;
state_129587 = G__129725;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38359__auto__ = function(state_129587){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38359__auto____1.call(this,state_129587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38359__auto____0;
cljs$core$async$mix_$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38359__auto____1;
return cljs$core$async$mix_$_state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___129658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38381__auto__ = (function (){var statearr_129654 = f__38380__auto__.call(null);
(statearr_129654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___129658);

return statearr_129654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___129658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__36088__auto__ = (((p == null))?null:p);
var m__36089__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__36089__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__36088__auto__ = (((p == null))?null:p);
var m__36089__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,p,v,ch);
} else {
var m__36089__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args129728 = [];
var len__36494__auto___129731 = arguments.length;
var i__36495__auto___129732 = (0);
while(true){
if((i__36495__auto___129732 < len__36494__auto___129731)){
args129728.push((arguments[i__36495__auto___129732]));

var G__129733 = (i__36495__auto___129732 + (1));
i__36495__auto___129732 = G__129733;
continue;
} else {
}
break;
}

var G__129730 = args129728.length;
switch (G__129730) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args129728.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__36088__auto__ = (((p == null))?null:p);
var m__36089__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,p);
} else {
var m__36089__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,p);
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
var x__36088__auto__ = (((p == null))?null:p);
var m__36089__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36088__auto__)]);
if(!((m__36089__auto__ == null))){
return m__36089__auto__.call(null,p,v);
} else {
var m__36089__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36089__auto____$1 == null))){
return m__36089__auto____$1.call(null,p,v);
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
var args129736 = [];
var len__36494__auto___129873 = arguments.length;
var i__36495__auto___129874 = (0);
while(true){
if((i__36495__auto___129874 < len__36494__auto___129873)){
args129736.push((arguments[i__36495__auto___129874]));

var G__129875 = (i__36495__auto___129874 + (1));
i__36495__auto___129874 = G__129875;
continue;
} else {
}
break;
}

var G__129738 = args129736.length;
switch (G__129738) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args129736.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__35425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__35425__auto__,mults){
return (function (p1__129735_SHARP_){
if(cljs.core.truth_(p1__129735_SHARP_.call(null,topic))){
return p1__129735_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__129735_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35425__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async129739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async129739 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta129740){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta129740 = meta129740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async129739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_129741,meta129740__$1){
var self__ = this;
var _129741__$1 = this;
return (new cljs.core.async.t_cljs$core$async129739(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta129740__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async129739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_129741){
var self__ = this;
var _129741__$1 = this;
return self__.meta129740;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async129739.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async129739.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async129739.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async129739.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async129739.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async129739.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async129739.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async129739.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta129740","meta129740",465865910,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async129739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async129739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async129739";

cljs.core.async.t_cljs$core$async129739.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cljs.core.async/t_cljs$core$async129739");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async129739 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async129739(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta129740){
return (new cljs.core.async.t_cljs$core$async129739(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta129740));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async129739(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38379__auto___129901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___129901,mults,ensure_mult,p){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___129901,mults,ensure_mult,p){
return (function (state_129813){
var state_val_129814 = (state_129813[(1)]);
if((state_val_129814 === (7))){
var inst_129809 = (state_129813[(2)]);
var state_129813__$1 = state_129813;
var statearr_129815_129904 = state_129813__$1;
(statearr_129815_129904[(2)] = inst_129809);

(statearr_129815_129904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (20))){
var state_129813__$1 = state_129813;
var statearr_129816_129906 = state_129813__$1;
(statearr_129816_129906[(2)] = null);

(statearr_129816_129906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (1))){
var state_129813__$1 = state_129813;
var statearr_129817_129908 = state_129813__$1;
(statearr_129817_129908[(2)] = null);

(statearr_129817_129908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (24))){
var inst_129792 = (state_129813[(7)]);
var inst_129801 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_129792);
var state_129813__$1 = state_129813;
var statearr_129818_129911 = state_129813__$1;
(statearr_129818_129911[(2)] = inst_129801);

(statearr_129818_129911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (4))){
var inst_129744 = (state_129813[(8)]);
var inst_129744__$1 = (state_129813[(2)]);
var inst_129745 = (inst_129744__$1 == null);
var state_129813__$1 = (function (){var statearr_129819 = state_129813;
(statearr_129819[(8)] = inst_129744__$1);

return statearr_129819;
})();
if(cljs.core.truth_(inst_129745)){
var statearr_129820_129920 = state_129813__$1;
(statearr_129820_129920[(1)] = (5));

} else {
var statearr_129822_129922 = state_129813__$1;
(statearr_129822_129922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (15))){
var inst_129786 = (state_129813[(2)]);
var state_129813__$1 = state_129813;
var statearr_129824_129923 = state_129813__$1;
(statearr_129824_129923[(2)] = inst_129786);

(statearr_129824_129923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (21))){
var inst_129806 = (state_129813[(2)]);
var state_129813__$1 = (function (){var statearr_129825 = state_129813;
(statearr_129825[(9)] = inst_129806);

return statearr_129825;
})();
var statearr_129826_129924 = state_129813__$1;
(statearr_129826_129924[(2)] = null);

(statearr_129826_129924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (13))){
var inst_129768 = (state_129813[(10)]);
var inst_129770 = cljs.core.chunked_seq_QMARK_.call(null,inst_129768);
var state_129813__$1 = state_129813;
if(inst_129770){
var statearr_129827_129926 = state_129813__$1;
(statearr_129827_129926[(1)] = (16));

} else {
var statearr_129828_129927 = state_129813__$1;
(statearr_129828_129927[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (22))){
var inst_129798 = (state_129813[(2)]);
var state_129813__$1 = state_129813;
if(cljs.core.truth_(inst_129798)){
var statearr_129829_129928 = state_129813__$1;
(statearr_129829_129928[(1)] = (23));

} else {
var statearr_129830_129929 = state_129813__$1;
(statearr_129830_129929[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (6))){
var inst_129792 = (state_129813[(7)]);
var inst_129744 = (state_129813[(8)]);
var inst_129794 = (state_129813[(11)]);
var inst_129792__$1 = topic_fn.call(null,inst_129744);
var inst_129793 = cljs.core.deref.call(null,mults);
var inst_129794__$1 = cljs.core.get.call(null,inst_129793,inst_129792__$1);
var state_129813__$1 = (function (){var statearr_129831 = state_129813;
(statearr_129831[(7)] = inst_129792__$1);

(statearr_129831[(11)] = inst_129794__$1);

return statearr_129831;
})();
if(cljs.core.truth_(inst_129794__$1)){
var statearr_129833_129935 = state_129813__$1;
(statearr_129833_129935[(1)] = (19));

} else {
var statearr_129835_129936 = state_129813__$1;
(statearr_129835_129936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (25))){
var inst_129803 = (state_129813[(2)]);
var state_129813__$1 = state_129813;
var statearr_129836_129938 = state_129813__$1;
(statearr_129836_129938[(2)] = inst_129803);

(statearr_129836_129938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (17))){
var inst_129768 = (state_129813[(10)]);
var inst_129777 = cljs.core.first.call(null,inst_129768);
var inst_129778 = cljs.core.async.muxch_STAR_.call(null,inst_129777);
var inst_129779 = cljs.core.async.close_BANG_.call(null,inst_129778);
var inst_129780 = cljs.core.next.call(null,inst_129768);
var inst_129754 = inst_129780;
var inst_129755 = null;
var inst_129756 = (0);
var inst_129757 = (0);
var state_129813__$1 = (function (){var statearr_129838 = state_129813;
(statearr_129838[(12)] = inst_129754);

(statearr_129838[(13)] = inst_129779);

(statearr_129838[(14)] = inst_129757);

(statearr_129838[(15)] = inst_129755);

(statearr_129838[(16)] = inst_129756);

return statearr_129838;
})();
var statearr_129839_129949 = state_129813__$1;
(statearr_129839_129949[(2)] = null);

(statearr_129839_129949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (3))){
var inst_129811 = (state_129813[(2)]);
var state_129813__$1 = state_129813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_129813__$1,inst_129811);
} else {
if((state_val_129814 === (12))){
var inst_129788 = (state_129813[(2)]);
var state_129813__$1 = state_129813;
var statearr_129840_129953 = state_129813__$1;
(statearr_129840_129953[(2)] = inst_129788);

(statearr_129840_129953[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (2))){
var state_129813__$1 = state_129813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_129813__$1,(4),ch);
} else {
if((state_val_129814 === (23))){
var state_129813__$1 = state_129813;
var statearr_129841_129955 = state_129813__$1;
(statearr_129841_129955[(2)] = null);

(statearr_129841_129955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (19))){
var inst_129744 = (state_129813[(8)]);
var inst_129794 = (state_129813[(11)]);
var inst_129796 = cljs.core.async.muxch_STAR_.call(null,inst_129794);
var state_129813__$1 = state_129813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_129813__$1,(22),inst_129796,inst_129744);
} else {
if((state_val_129814 === (11))){
var inst_129768 = (state_129813[(10)]);
var inst_129754 = (state_129813[(12)]);
var inst_129768__$1 = cljs.core.seq.call(null,inst_129754);
var state_129813__$1 = (function (){var statearr_129842 = state_129813;
(statearr_129842[(10)] = inst_129768__$1);

return statearr_129842;
})();
if(inst_129768__$1){
var statearr_129843_129966 = state_129813__$1;
(statearr_129843_129966[(1)] = (13));

} else {
var statearr_129844_129967 = state_129813__$1;
(statearr_129844_129967[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (9))){
var inst_129790 = (state_129813[(2)]);
var state_129813__$1 = state_129813;
var statearr_129847_129969 = state_129813__$1;
(statearr_129847_129969[(2)] = inst_129790);

(statearr_129847_129969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (5))){
var inst_129751 = cljs.core.deref.call(null,mults);
var inst_129752 = cljs.core.vals.call(null,inst_129751);
var inst_129753 = cljs.core.seq.call(null,inst_129752);
var inst_129754 = inst_129753;
var inst_129755 = null;
var inst_129756 = (0);
var inst_129757 = (0);
var state_129813__$1 = (function (){var statearr_129848 = state_129813;
(statearr_129848[(12)] = inst_129754);

(statearr_129848[(14)] = inst_129757);

(statearr_129848[(15)] = inst_129755);

(statearr_129848[(16)] = inst_129756);

return statearr_129848;
})();
var statearr_129849_129971 = state_129813__$1;
(statearr_129849_129971[(2)] = null);

(statearr_129849_129971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (14))){
var state_129813__$1 = state_129813;
var statearr_129853_129972 = state_129813__$1;
(statearr_129853_129972[(2)] = null);

(statearr_129853_129972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (16))){
var inst_129768 = (state_129813[(10)]);
var inst_129772 = cljs.core.chunk_first.call(null,inst_129768);
var inst_129773 = cljs.core.chunk_rest.call(null,inst_129768);
var inst_129774 = cljs.core.count.call(null,inst_129772);
var inst_129754 = inst_129773;
var inst_129755 = inst_129772;
var inst_129756 = inst_129774;
var inst_129757 = (0);
var state_129813__$1 = (function (){var statearr_129854 = state_129813;
(statearr_129854[(12)] = inst_129754);

(statearr_129854[(14)] = inst_129757);

(statearr_129854[(15)] = inst_129755);

(statearr_129854[(16)] = inst_129756);

return statearr_129854;
})();
var statearr_129855_129977 = state_129813__$1;
(statearr_129855_129977[(2)] = null);

(statearr_129855_129977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (10))){
var inst_129754 = (state_129813[(12)]);
var inst_129757 = (state_129813[(14)]);
var inst_129755 = (state_129813[(15)]);
var inst_129756 = (state_129813[(16)]);
var inst_129762 = cljs.core._nth.call(null,inst_129755,inst_129757);
var inst_129763 = cljs.core.async.muxch_STAR_.call(null,inst_129762);
var inst_129764 = cljs.core.async.close_BANG_.call(null,inst_129763);
var inst_129765 = (inst_129757 + (1));
var tmp129850 = inst_129754;
var tmp129851 = inst_129755;
var tmp129852 = inst_129756;
var inst_129754__$1 = tmp129850;
var inst_129755__$1 = tmp129851;
var inst_129756__$1 = tmp129852;
var inst_129757__$1 = inst_129765;
var state_129813__$1 = (function (){var statearr_129856 = state_129813;
(statearr_129856[(17)] = inst_129764);

(statearr_129856[(12)] = inst_129754__$1);

(statearr_129856[(14)] = inst_129757__$1);

(statearr_129856[(15)] = inst_129755__$1);

(statearr_129856[(16)] = inst_129756__$1);

return statearr_129856;
})();
var statearr_129859_129989 = state_129813__$1;
(statearr_129859_129989[(2)] = null);

(statearr_129859_129989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (18))){
var inst_129783 = (state_129813[(2)]);
var state_129813__$1 = state_129813;
var statearr_129860_129992 = state_129813__$1;
(statearr_129860_129992[(2)] = inst_129783);

(statearr_129860_129992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_129814 === (8))){
var inst_129757 = (state_129813[(14)]);
var inst_129756 = (state_129813[(16)]);
var inst_129759 = (inst_129757 < inst_129756);
var inst_129760 = inst_129759;
var state_129813__$1 = state_129813;
if(cljs.core.truth_(inst_129760)){
var statearr_129862_129995 = state_129813__$1;
(statearr_129862_129995[(1)] = (10));

} else {
var statearr_129863_129996 = state_129813__$1;
(statearr_129863_129996[(1)] = (11));

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
});})(c__38379__auto___129901,mults,ensure_mult,p))
;
return ((function (switch__38358__auto__,c__38379__auto___129901,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38359__auto__ = null;
var cljs$core$async$state_machine__38359__auto____0 = (function (){
var statearr_129867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_129867[(0)] = cljs$core$async$state_machine__38359__auto__);

(statearr_129867[(1)] = (1));

return statearr_129867;
});
var cljs$core$async$state_machine__38359__auto____1 = (function (state_129813){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_129813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e129868){if((e129868 instanceof Object)){
var ex__38362__auto__ = e129868;
var statearr_129869_130002 = state_129813;
(statearr_129869_130002[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_129813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e129868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__130009 = state_129813;
state_129813 = G__130009;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$state_machine__38359__auto__ = function(state_129813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38359__auto____1.call(this,state_129813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38359__auto____0;
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38359__auto____1;
return cljs$core$async$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___129901,mults,ensure_mult,p))
})();
var state__38381__auto__ = (function (){var statearr_129870 = f__38380__auto__.call(null);
(statearr_129870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___129901);

return statearr_129870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___129901,mults,ensure_mult,p))
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
var args130011 = [];
var len__36494__auto___130015 = arguments.length;
var i__36495__auto___130016 = (0);
while(true){
if((i__36495__auto___130016 < len__36494__auto___130015)){
args130011.push((arguments[i__36495__auto___130016]));

var G__130017 = (i__36495__auto___130016 + (1));
i__36495__auto___130016 = G__130017;
continue;
} else {
}
break;
}

var G__130014 = args130011.length;
switch (G__130014) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args130011.length)].join('')));

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
var args130027 = [];
var len__36494__auto___130040 = arguments.length;
var i__36495__auto___130041 = (0);
while(true){
if((i__36495__auto___130041 < len__36494__auto___130040)){
args130027.push((arguments[i__36495__auto___130041]));

var G__130043 = (i__36495__auto___130041 + (1));
i__36495__auto___130041 = G__130043;
continue;
} else {
}
break;
}

var G__130037 = args130027.length;
switch (G__130037) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args130027.length)].join('')));

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
var args130048 = [];
var len__36494__auto___130133 = arguments.length;
var i__36495__auto___130134 = (0);
while(true){
if((i__36495__auto___130134 < len__36494__auto___130133)){
args130048.push((arguments[i__36495__auto___130134]));

var G__130135 = (i__36495__auto___130134 + (1));
i__36495__auto___130134 = G__130135;
continue;
} else {
}
break;
}

var G__130058 = args130048.length;
switch (G__130058) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args130048.length)].join('')));

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
var c__38379__auto___130137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___130137,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___130137,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_130099){
var state_val_130100 = (state_130099[(1)]);
if((state_val_130100 === (7))){
var state_130099__$1 = state_130099;
var statearr_130101_130139 = state_130099__$1;
(statearr_130101_130139[(2)] = null);

(statearr_130101_130139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130100 === (1))){
var state_130099__$1 = state_130099;
var statearr_130102_130140 = state_130099__$1;
(statearr_130102_130140[(2)] = null);

(statearr_130102_130140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130100 === (4))){
var inst_130062 = (state_130099[(7)]);
var inst_130064 = (inst_130062 < cnt);
var state_130099__$1 = state_130099;
if(cljs.core.truth_(inst_130064)){
var statearr_130105_130142 = state_130099__$1;
(statearr_130105_130142[(1)] = (6));

} else {
var statearr_130106_130143 = state_130099__$1;
(statearr_130106_130143[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130100 === (15))){
var inst_130095 = (state_130099[(2)]);
var state_130099__$1 = state_130099;
var statearr_130107_130144 = state_130099__$1;
(statearr_130107_130144[(2)] = inst_130095);

(statearr_130107_130144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130100 === (13))){
var inst_130088 = cljs.core.async.close_BANG_.call(null,out);
var state_130099__$1 = state_130099;
var statearr_130109_130145 = state_130099__$1;
(statearr_130109_130145[(2)] = inst_130088);

(statearr_130109_130145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130100 === (6))){
var state_130099__$1 = state_130099;
var statearr_130110_130146 = state_130099__$1;
(statearr_130110_130146[(2)] = null);

(statearr_130110_130146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130100 === (3))){
var inst_130097 = (state_130099[(2)]);
var state_130099__$1 = state_130099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_130099__$1,inst_130097);
} else {
if((state_val_130100 === (12))){
var inst_130085 = (state_130099[(8)]);
var inst_130085__$1 = (state_130099[(2)]);
var inst_130086 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_130085__$1);
var state_130099__$1 = (function (){var statearr_130111 = state_130099;
(statearr_130111[(8)] = inst_130085__$1);

return statearr_130111;
})();
if(cljs.core.truth_(inst_130086)){
var statearr_130112_130147 = state_130099__$1;
(statearr_130112_130147[(1)] = (13));

} else {
var statearr_130113_130148 = state_130099__$1;
(statearr_130113_130148[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130100 === (2))){
var inst_130061 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_130062 = (0);
var state_130099__$1 = (function (){var statearr_130114 = state_130099;
(statearr_130114[(9)] = inst_130061);

(statearr_130114[(7)] = inst_130062);

return statearr_130114;
})();
var statearr_130115_130150 = state_130099__$1;
(statearr_130115_130150[(2)] = null);

(statearr_130115_130150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130100 === (11))){
var inst_130062 = (state_130099[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_130099,(10),Object,null,(9));
var inst_130072 = chs__$1.call(null,inst_130062);
var inst_130073 = done.call(null,inst_130062);
var inst_130074 = cljs.core.async.take_BANG_.call(null,inst_130072,inst_130073);
var state_130099__$1 = state_130099;
var statearr_130116_130152 = state_130099__$1;
(statearr_130116_130152[(2)] = inst_130074);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130100 === (9))){
var inst_130062 = (state_130099[(7)]);
var inst_130076 = (state_130099[(2)]);
var inst_130077 = (inst_130062 + (1));
var inst_130062__$1 = inst_130077;
var state_130099__$1 = (function (){var statearr_130117 = state_130099;
(statearr_130117[(10)] = inst_130076);

(statearr_130117[(7)] = inst_130062__$1);

return statearr_130117;
})();
var statearr_130118_130153 = state_130099__$1;
(statearr_130118_130153[(2)] = null);

(statearr_130118_130153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130100 === (5))){
var inst_130083 = (state_130099[(2)]);
var state_130099__$1 = (function (){var statearr_130119 = state_130099;
(statearr_130119[(11)] = inst_130083);

return statearr_130119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_130099__$1,(12),dchan);
} else {
if((state_val_130100 === (14))){
var inst_130085 = (state_130099[(8)]);
var inst_130090 = cljs.core.apply.call(null,f,inst_130085);
var state_130099__$1 = state_130099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_130099__$1,(16),out,inst_130090);
} else {
if((state_val_130100 === (16))){
var inst_130092 = (state_130099[(2)]);
var state_130099__$1 = (function (){var statearr_130121 = state_130099;
(statearr_130121[(12)] = inst_130092);

return statearr_130121;
})();
var statearr_130122_130155 = state_130099__$1;
(statearr_130122_130155[(2)] = null);

(statearr_130122_130155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130100 === (10))){
var inst_130067 = (state_130099[(2)]);
var inst_130068 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_130099__$1 = (function (){var statearr_130123 = state_130099;
(statearr_130123[(13)] = inst_130067);

return statearr_130123;
})();
var statearr_130124_130159 = state_130099__$1;
(statearr_130124_130159[(2)] = inst_130068);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130100 === (8))){
var inst_130081 = (state_130099[(2)]);
var state_130099__$1 = state_130099;
var statearr_130125_130160 = state_130099__$1;
(statearr_130125_130160[(2)] = inst_130081);

(statearr_130125_130160[(1)] = (5));


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
});})(c__38379__auto___130137,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38358__auto__,c__38379__auto___130137,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38359__auto__ = null;
var cljs$core$async$state_machine__38359__auto____0 = (function (){
var statearr_130129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_130129[(0)] = cljs$core$async$state_machine__38359__auto__);

(statearr_130129[(1)] = (1));

return statearr_130129;
});
var cljs$core$async$state_machine__38359__auto____1 = (function (state_130099){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_130099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e130130){if((e130130 instanceof Object)){
var ex__38362__auto__ = e130130;
var statearr_130131_130162 = state_130099;
(statearr_130131_130162[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e130130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__130166 = state_130099;
state_130099 = G__130166;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$state_machine__38359__auto__ = function(state_130099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38359__auto____1.call(this,state_130099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38359__auto____0;
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38359__auto____1;
return cljs$core$async$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___130137,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38381__auto__ = (function (){var statearr_130132 = f__38380__auto__.call(null);
(statearr_130132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___130137);

return statearr_130132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___130137,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args130169 = [];
var len__36494__auto___130238 = arguments.length;
var i__36495__auto___130239 = (0);
while(true){
if((i__36495__auto___130239 < len__36494__auto___130238)){
args130169.push((arguments[i__36495__auto___130239]));

var G__130241 = (i__36495__auto___130239 + (1));
i__36495__auto___130239 = G__130241;
continue;
} else {
}
break;
}

var G__130171 = args130169.length;
switch (G__130171) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args130169.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38379__auto___130243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___130243,out){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___130243,out){
return (function (state_130204){
var state_val_130205 = (state_130204[(1)]);
if((state_val_130205 === (7))){
var inst_130182 = (state_130204[(7)]);
var inst_130184 = (state_130204[(8)]);
var inst_130182__$1 = (state_130204[(2)]);
var inst_130184__$1 = cljs.core.nth.call(null,inst_130182__$1,(0),null);
var inst_130185 = cljs.core.nth.call(null,inst_130182__$1,(1),null);
var inst_130186 = (inst_130184__$1 == null);
var state_130204__$1 = (function (){var statearr_130207 = state_130204;
(statearr_130207[(9)] = inst_130185);

(statearr_130207[(7)] = inst_130182__$1);

(statearr_130207[(8)] = inst_130184__$1);

return statearr_130207;
})();
if(cljs.core.truth_(inst_130186)){
var statearr_130208_130244 = state_130204__$1;
(statearr_130208_130244[(1)] = (8));

} else {
var statearr_130209_130245 = state_130204__$1;
(statearr_130209_130245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130205 === (1))){
var inst_130172 = cljs.core.vec.call(null,chs);
var inst_130174 = inst_130172;
var state_130204__$1 = (function (){var statearr_130210 = state_130204;
(statearr_130210[(10)] = inst_130174);

return statearr_130210;
})();
var statearr_130211_130246 = state_130204__$1;
(statearr_130211_130246[(2)] = null);

(statearr_130211_130246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130205 === (4))){
var inst_130174 = (state_130204[(10)]);
var state_130204__$1 = state_130204;
return cljs.core.async.ioc_alts_BANG_.call(null,state_130204__$1,(7),inst_130174);
} else {
if((state_val_130205 === (6))){
var inst_130200 = (state_130204[(2)]);
var state_130204__$1 = state_130204;
var statearr_130212_130247 = state_130204__$1;
(statearr_130212_130247[(2)] = inst_130200);

(statearr_130212_130247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130205 === (3))){
var inst_130202 = (state_130204[(2)]);
var state_130204__$1 = state_130204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_130204__$1,inst_130202);
} else {
if((state_val_130205 === (2))){
var inst_130174 = (state_130204[(10)]);
var inst_130177 = cljs.core.count.call(null,inst_130174);
var inst_130178 = (inst_130177 > (0));
var state_130204__$1 = state_130204;
if(cljs.core.truth_(inst_130178)){
var statearr_130216_130248 = state_130204__$1;
(statearr_130216_130248[(1)] = (4));

} else {
var statearr_130217_130249 = state_130204__$1;
(statearr_130217_130249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130205 === (11))){
var inst_130174 = (state_130204[(10)]);
var inst_130193 = (state_130204[(2)]);
var tmp130213 = inst_130174;
var inst_130174__$1 = tmp130213;
var state_130204__$1 = (function (){var statearr_130219 = state_130204;
(statearr_130219[(11)] = inst_130193);

(statearr_130219[(10)] = inst_130174__$1);

return statearr_130219;
})();
var statearr_130220_130250 = state_130204__$1;
(statearr_130220_130250[(2)] = null);

(statearr_130220_130250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130205 === (9))){
var inst_130184 = (state_130204[(8)]);
var state_130204__$1 = state_130204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_130204__$1,(11),out,inst_130184);
} else {
if((state_val_130205 === (5))){
var inst_130198 = cljs.core.async.close_BANG_.call(null,out);
var state_130204__$1 = state_130204;
var statearr_130221_130251 = state_130204__$1;
(statearr_130221_130251[(2)] = inst_130198);

(statearr_130221_130251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130205 === (10))){
var inst_130196 = (state_130204[(2)]);
var state_130204__$1 = state_130204;
var statearr_130223_130252 = state_130204__$1;
(statearr_130223_130252[(2)] = inst_130196);

(statearr_130223_130252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130205 === (8))){
var inst_130185 = (state_130204[(9)]);
var inst_130182 = (state_130204[(7)]);
var inst_130184 = (state_130204[(8)]);
var inst_130174 = (state_130204[(10)]);
var inst_130188 = (function (){var cs = inst_130174;
var vec__130180 = inst_130182;
var v = inst_130184;
var c = inst_130185;
return ((function (cs,vec__130180,v,c,inst_130185,inst_130182,inst_130184,inst_130174,state_val_130205,c__38379__auto___130243,out){
return (function (p1__130168_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__130168_SHARP_);
});
;})(cs,vec__130180,v,c,inst_130185,inst_130182,inst_130184,inst_130174,state_val_130205,c__38379__auto___130243,out))
})();
var inst_130189 = cljs.core.filterv.call(null,inst_130188,inst_130174);
var inst_130174__$1 = inst_130189;
var state_130204__$1 = (function (){var statearr_130224 = state_130204;
(statearr_130224[(10)] = inst_130174__$1);

return statearr_130224;
})();
var statearr_130225_130253 = state_130204__$1;
(statearr_130225_130253[(2)] = null);

(statearr_130225_130253[(1)] = (2));


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
});})(c__38379__auto___130243,out))
;
return ((function (switch__38358__auto__,c__38379__auto___130243,out){
return (function() {
var cljs$core$async$state_machine__38359__auto__ = null;
var cljs$core$async$state_machine__38359__auto____0 = (function (){
var statearr_130232 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_130232[(0)] = cljs$core$async$state_machine__38359__auto__);

(statearr_130232[(1)] = (1));

return statearr_130232;
});
var cljs$core$async$state_machine__38359__auto____1 = (function (state_130204){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_130204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e130233){if((e130233 instanceof Object)){
var ex__38362__auto__ = e130233;
var statearr_130234_130254 = state_130204;
(statearr_130234_130254[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e130233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__130255 = state_130204;
state_130204 = G__130255;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$state_machine__38359__auto__ = function(state_130204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38359__auto____1.call(this,state_130204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38359__auto____0;
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38359__auto____1;
return cljs$core$async$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___130243,out))
})();
var state__38381__auto__ = (function (){var statearr_130235 = f__38380__auto__.call(null);
(statearr_130235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___130243);

return statearr_130235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___130243,out))
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
var args130262 = [];
var len__36494__auto___130321 = arguments.length;
var i__36495__auto___130322 = (0);
while(true){
if((i__36495__auto___130322 < len__36494__auto___130321)){
args130262.push((arguments[i__36495__auto___130322]));

var G__130325 = (i__36495__auto___130322 + (1));
i__36495__auto___130322 = G__130325;
continue;
} else {
}
break;
}

var G__130264 = args130262.length;
switch (G__130264) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args130262.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38379__auto___130332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___130332,out){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___130332,out){
return (function (state_130290){
var state_val_130291 = (state_130290[(1)]);
if((state_val_130291 === (7))){
var inst_130271 = (state_130290[(7)]);
var inst_130271__$1 = (state_130290[(2)]);
var inst_130272 = (inst_130271__$1 == null);
var inst_130273 = cljs.core.not.call(null,inst_130272);
var state_130290__$1 = (function (){var statearr_130293 = state_130290;
(statearr_130293[(7)] = inst_130271__$1);

return statearr_130293;
})();
if(inst_130273){
var statearr_130294_130333 = state_130290__$1;
(statearr_130294_130333[(1)] = (8));

} else {
var statearr_130295_130334 = state_130290__$1;
(statearr_130295_130334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130291 === (1))){
var inst_130265 = (0);
var state_130290__$1 = (function (){var statearr_130296 = state_130290;
(statearr_130296[(8)] = inst_130265);

return statearr_130296;
})();
var statearr_130297_130335 = state_130290__$1;
(statearr_130297_130335[(2)] = null);

(statearr_130297_130335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130291 === (4))){
var state_130290__$1 = state_130290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_130290__$1,(7),ch);
} else {
if((state_val_130291 === (6))){
var inst_130284 = (state_130290[(2)]);
var state_130290__$1 = state_130290;
var statearr_130298_130340 = state_130290__$1;
(statearr_130298_130340[(2)] = inst_130284);

(statearr_130298_130340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130291 === (3))){
var inst_130287 = (state_130290[(2)]);
var inst_130288 = cljs.core.async.close_BANG_.call(null,out);
var state_130290__$1 = (function (){var statearr_130301 = state_130290;
(statearr_130301[(9)] = inst_130287);

return statearr_130301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_130290__$1,inst_130288);
} else {
if((state_val_130291 === (2))){
var inst_130265 = (state_130290[(8)]);
var inst_130268 = (inst_130265 < n);
var state_130290__$1 = state_130290;
if(cljs.core.truth_(inst_130268)){
var statearr_130303_130343 = state_130290__$1;
(statearr_130303_130343[(1)] = (4));

} else {
var statearr_130304_130344 = state_130290__$1;
(statearr_130304_130344[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130291 === (11))){
var inst_130265 = (state_130290[(8)]);
var inst_130276 = (state_130290[(2)]);
var inst_130277 = (inst_130265 + (1));
var inst_130265__$1 = inst_130277;
var state_130290__$1 = (function (){var statearr_130306 = state_130290;
(statearr_130306[(10)] = inst_130276);

(statearr_130306[(8)] = inst_130265__$1);

return statearr_130306;
})();
var statearr_130307_130349 = state_130290__$1;
(statearr_130307_130349[(2)] = null);

(statearr_130307_130349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130291 === (9))){
var state_130290__$1 = state_130290;
var statearr_130308_130350 = state_130290__$1;
(statearr_130308_130350[(2)] = null);

(statearr_130308_130350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130291 === (5))){
var state_130290__$1 = state_130290;
var statearr_130309_130351 = state_130290__$1;
(statearr_130309_130351[(2)] = null);

(statearr_130309_130351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130291 === (10))){
var inst_130281 = (state_130290[(2)]);
var state_130290__$1 = state_130290;
var statearr_130310_130352 = state_130290__$1;
(statearr_130310_130352[(2)] = inst_130281);

(statearr_130310_130352[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130291 === (8))){
var inst_130271 = (state_130290[(7)]);
var state_130290__$1 = state_130290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_130290__$1,(11),out,inst_130271);
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
});})(c__38379__auto___130332,out))
;
return ((function (switch__38358__auto__,c__38379__auto___130332,out){
return (function() {
var cljs$core$async$state_machine__38359__auto__ = null;
var cljs$core$async$state_machine__38359__auto____0 = (function (){
var statearr_130314 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_130314[(0)] = cljs$core$async$state_machine__38359__auto__);

(statearr_130314[(1)] = (1));

return statearr_130314;
});
var cljs$core$async$state_machine__38359__auto____1 = (function (state_130290){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_130290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e130316){if((e130316 instanceof Object)){
var ex__38362__auto__ = e130316;
var statearr_130317_130356 = state_130290;
(statearr_130317_130356[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e130316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__130361 = state_130290;
state_130290 = G__130361;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$state_machine__38359__auto__ = function(state_130290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38359__auto____1.call(this,state_130290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38359__auto____0;
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38359__auto____1;
return cljs$core$async$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___130332,out))
})();
var state__38381__auto__ = (function (){var statearr_130319 = f__38380__auto__.call(null);
(statearr_130319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___130332);

return statearr_130319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___130332,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async130379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async130379 = (function (map_LT_,f,ch,meta130380){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta130380 = meta130380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async130379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_130381,meta130380__$1){
var self__ = this;
var _130381__$1 = this;
return (new cljs.core.async.t_cljs$core$async130379(self__.map_LT_,self__.f,self__.ch,meta130380__$1));
});

cljs.core.async.t_cljs$core$async130379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_130381){
var self__ = this;
var _130381__$1 = this;
return self__.meta130380;
});

cljs.core.async.t_cljs$core$async130379.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async130379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async130379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async130379.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async130379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async130387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async130387 = (function (map_LT_,f,ch,meta130380,_,fn1,meta130388){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta130380 = meta130380;
this._ = _;
this.fn1 = fn1;
this.meta130388 = meta130388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async130387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_130389,meta130388__$1){
var self__ = this;
var _130389__$1 = this;
return (new cljs.core.async.t_cljs$core$async130387(self__.map_LT_,self__.f,self__.ch,self__.meta130380,self__._,self__.fn1,meta130388__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async130387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_130389){
var self__ = this;
var _130389__$1 = this;
return self__.meta130388;
});})(___$1))
;

cljs.core.async.t_cljs$core$async130387.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async130387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async130387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async130387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__130366_SHARP_){
return f1.call(null,(((p1__130366_SHARP_ == null))?null:self__.f.call(null,p1__130366_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async130387.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta130380","meta130380",1451712855,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async130379","cljs.core.async/t_cljs$core$async130379",485789582,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta130388","meta130388",578760764,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async130387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async130387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async130387";

cljs.core.async.t_cljs$core$async130387.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cljs.core.async/t_cljs$core$async130387");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async130387 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async130387(map_LT___$1,f__$1,ch__$1,meta130380__$1,___$2,fn1__$1,meta130388){
return (new cljs.core.async.t_cljs$core$async130387(map_LT___$1,f__$1,ch__$1,meta130380__$1,___$2,fn1__$1,meta130388));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async130387(self__.map_LT_,self__.f,self__.ch,self__.meta130380,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__35413__auto__ = ret;
if(cljs.core.truth_(and__35413__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__35413__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async130379.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async130379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async130379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta130380","meta130380",1451712855,null)], null);
});

cljs.core.async.t_cljs$core$async130379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async130379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async130379";

cljs.core.async.t_cljs$core$async130379.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cljs.core.async/t_cljs$core$async130379");
});

cljs.core.async.__GT_t_cljs$core$async130379 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async130379(map_LT___$1,f__$1,ch__$1,meta130380){
return (new cljs.core.async.t_cljs$core$async130379(map_LT___$1,f__$1,ch__$1,meta130380));
});

}

return (new cljs.core.async.t_cljs$core$async130379(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async130418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async130418 = (function (map_GT_,f,ch,meta130419){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta130419 = meta130419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async130418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_130420,meta130419__$1){
var self__ = this;
var _130420__$1 = this;
return (new cljs.core.async.t_cljs$core$async130418(self__.map_GT_,self__.f,self__.ch,meta130419__$1));
});

cljs.core.async.t_cljs$core$async130418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_130420){
var self__ = this;
var _130420__$1 = this;
return self__.meta130419;
});

cljs.core.async.t_cljs$core$async130418.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async130418.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async130418.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async130418.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async130418.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async130418.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async130418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta130419","meta130419",849342037,null)], null);
});

cljs.core.async.t_cljs$core$async130418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async130418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async130418";

cljs.core.async.t_cljs$core$async130418.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cljs.core.async/t_cljs$core$async130418");
});

cljs.core.async.__GT_t_cljs$core$async130418 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async130418(map_GT___$1,f__$1,ch__$1,meta130419){
return (new cljs.core.async.t_cljs$core$async130418(map_GT___$1,f__$1,ch__$1,meta130419));
});

}

return (new cljs.core.async.t_cljs$core$async130418(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async130431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async130431 = (function (filter_GT_,p,ch,meta130432){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta130432 = meta130432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async130431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_130433,meta130432__$1){
var self__ = this;
var _130433__$1 = this;
return (new cljs.core.async.t_cljs$core$async130431(self__.filter_GT_,self__.p,self__.ch,meta130432__$1));
});

cljs.core.async.t_cljs$core$async130431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_130433){
var self__ = this;
var _130433__$1 = this;
return self__.meta130432;
});

cljs.core.async.t_cljs$core$async130431.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async130431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async130431.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async130431.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async130431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async130431.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async130431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async130431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta130432","meta130432",-1670768886,null)], null);
});

cljs.core.async.t_cljs$core$async130431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async130431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async130431";

cljs.core.async.t_cljs$core$async130431.cljs$lang$ctorPrWriter = (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"cljs.core.async/t_cljs$core$async130431");
});

cljs.core.async.__GT_t_cljs$core$async130431 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async130431(filter_GT___$1,p__$1,ch__$1,meta130432){
return (new cljs.core.async.t_cljs$core$async130431(filter_GT___$1,p__$1,ch__$1,meta130432));
});

}

return (new cljs.core.async.t_cljs$core$async130431(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args130444 = [];
var len__36494__auto___130498 = arguments.length;
var i__36495__auto___130499 = (0);
while(true){
if((i__36495__auto___130499 < len__36494__auto___130498)){
args130444.push((arguments[i__36495__auto___130499]));

var G__130500 = (i__36495__auto___130499 + (1));
i__36495__auto___130499 = G__130500;
continue;
} else {
}
break;
}

var G__130446 = args130444.length;
switch (G__130446) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args130444.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38379__auto___130502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___130502,out){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___130502,out){
return (function (state_130473){
var state_val_130474 = (state_130473[(1)]);
if((state_val_130474 === (7))){
var inst_130469 = (state_130473[(2)]);
var state_130473__$1 = state_130473;
var statearr_130475_130503 = state_130473__$1;
(statearr_130475_130503[(2)] = inst_130469);

(statearr_130475_130503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130474 === (1))){
var state_130473__$1 = state_130473;
var statearr_130476_130506 = state_130473__$1;
(statearr_130476_130506[(2)] = null);

(statearr_130476_130506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130474 === (4))){
var inst_130455 = (state_130473[(7)]);
var inst_130455__$1 = (state_130473[(2)]);
var inst_130456 = (inst_130455__$1 == null);
var state_130473__$1 = (function (){var statearr_130477 = state_130473;
(statearr_130477[(7)] = inst_130455__$1);

return statearr_130477;
})();
if(cljs.core.truth_(inst_130456)){
var statearr_130478_130510 = state_130473__$1;
(statearr_130478_130510[(1)] = (5));

} else {
var statearr_130479_130511 = state_130473__$1;
(statearr_130479_130511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130474 === (6))){
var inst_130455 = (state_130473[(7)]);
var inst_130460 = p.call(null,inst_130455);
var state_130473__$1 = state_130473;
if(cljs.core.truth_(inst_130460)){
var statearr_130480_130514 = state_130473__$1;
(statearr_130480_130514[(1)] = (8));

} else {
var statearr_130481_130515 = state_130473__$1;
(statearr_130481_130515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130474 === (3))){
var inst_130471 = (state_130473[(2)]);
var state_130473__$1 = state_130473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_130473__$1,inst_130471);
} else {
if((state_val_130474 === (2))){
var state_130473__$1 = state_130473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_130473__$1,(4),ch);
} else {
if((state_val_130474 === (11))){
var inst_130463 = (state_130473[(2)]);
var state_130473__$1 = state_130473;
var statearr_130482_130516 = state_130473__$1;
(statearr_130482_130516[(2)] = inst_130463);

(statearr_130482_130516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130474 === (9))){
var state_130473__$1 = state_130473;
var statearr_130483_130517 = state_130473__$1;
(statearr_130483_130517[(2)] = null);

(statearr_130483_130517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130474 === (5))){
var inst_130458 = cljs.core.async.close_BANG_.call(null,out);
var state_130473__$1 = state_130473;
var statearr_130484_130518 = state_130473__$1;
(statearr_130484_130518[(2)] = inst_130458);

(statearr_130484_130518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130474 === (10))){
var inst_130466 = (state_130473[(2)]);
var state_130473__$1 = (function (){var statearr_130485 = state_130473;
(statearr_130485[(8)] = inst_130466);

return statearr_130485;
})();
var statearr_130486_130519 = state_130473__$1;
(statearr_130486_130519[(2)] = null);

(statearr_130486_130519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130474 === (8))){
var inst_130455 = (state_130473[(7)]);
var state_130473__$1 = state_130473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_130473__$1,(11),out,inst_130455);
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
});})(c__38379__auto___130502,out))
;
return ((function (switch__38358__auto__,c__38379__auto___130502,out){
return (function() {
var cljs$core$async$state_machine__38359__auto__ = null;
var cljs$core$async$state_machine__38359__auto____0 = (function (){
var statearr_130494 = [null,null,null,null,null,null,null,null,null];
(statearr_130494[(0)] = cljs$core$async$state_machine__38359__auto__);

(statearr_130494[(1)] = (1));

return statearr_130494;
});
var cljs$core$async$state_machine__38359__auto____1 = (function (state_130473){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_130473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e130495){if((e130495 instanceof Object)){
var ex__38362__auto__ = e130495;
var statearr_130496_130522 = state_130473;
(statearr_130496_130522[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e130495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__130523 = state_130473;
state_130473 = G__130523;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$state_machine__38359__auto__ = function(state_130473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38359__auto____1.call(this,state_130473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38359__auto____0;
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38359__auto____1;
return cljs$core$async$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___130502,out))
})();
var state__38381__auto__ = (function (){var statearr_130497 = f__38380__auto__.call(null);
(statearr_130497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___130502);

return statearr_130497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___130502,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args130525 = [];
var len__36494__auto___130535 = arguments.length;
var i__36495__auto___130536 = (0);
while(true){
if((i__36495__auto___130536 < len__36494__auto___130535)){
args130525.push((arguments[i__36495__auto___130536]));

var G__130537 = (i__36495__auto___130536 + (1));
i__36495__auto___130536 = G__130537;
continue;
} else {
}
break;
}

var G__130532 = args130525.length;
switch (G__130532) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args130525.length)].join('')));

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
var c__38379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto__){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto__){
return (function (state_130719){
var state_val_130720 = (state_130719[(1)]);
if((state_val_130720 === (7))){
var inst_130715 = (state_130719[(2)]);
var state_130719__$1 = state_130719;
var statearr_130721_130777 = state_130719__$1;
(statearr_130721_130777[(2)] = inst_130715);

(statearr_130721_130777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (20))){
var inst_130685 = (state_130719[(7)]);
var inst_130696 = (state_130719[(2)]);
var inst_130697 = cljs.core.next.call(null,inst_130685);
var inst_130671 = inst_130697;
var inst_130672 = null;
var inst_130673 = (0);
var inst_130674 = (0);
var state_130719__$1 = (function (){var statearr_130722 = state_130719;
(statearr_130722[(8)] = inst_130673);

(statearr_130722[(9)] = inst_130672);

(statearr_130722[(10)] = inst_130696);

(statearr_130722[(11)] = inst_130674);

(statearr_130722[(12)] = inst_130671);

return statearr_130722;
})();
var statearr_130723_130778 = state_130719__$1;
(statearr_130723_130778[(2)] = null);

(statearr_130723_130778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (1))){
var state_130719__$1 = state_130719;
var statearr_130724_130779 = state_130719__$1;
(statearr_130724_130779[(2)] = null);

(statearr_130724_130779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (4))){
var inst_130660 = (state_130719[(13)]);
var inst_130660__$1 = (state_130719[(2)]);
var inst_130661 = (inst_130660__$1 == null);
var state_130719__$1 = (function (){var statearr_130725 = state_130719;
(statearr_130725[(13)] = inst_130660__$1);

return statearr_130725;
})();
if(cljs.core.truth_(inst_130661)){
var statearr_130726_130780 = state_130719__$1;
(statearr_130726_130780[(1)] = (5));

} else {
var statearr_130727_130781 = state_130719__$1;
(statearr_130727_130781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (15))){
var state_130719__$1 = state_130719;
var statearr_130731_130782 = state_130719__$1;
(statearr_130731_130782[(2)] = null);

(statearr_130731_130782[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (21))){
var state_130719__$1 = state_130719;
var statearr_130732_130783 = state_130719__$1;
(statearr_130732_130783[(2)] = null);

(statearr_130732_130783[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (13))){
var inst_130673 = (state_130719[(8)]);
var inst_130672 = (state_130719[(9)]);
var inst_130674 = (state_130719[(11)]);
var inst_130671 = (state_130719[(12)]);
var inst_130681 = (state_130719[(2)]);
var inst_130682 = (inst_130674 + (1));
var tmp130728 = inst_130673;
var tmp130729 = inst_130672;
var tmp130730 = inst_130671;
var inst_130671__$1 = tmp130730;
var inst_130672__$1 = tmp130729;
var inst_130673__$1 = tmp130728;
var inst_130674__$1 = inst_130682;
var state_130719__$1 = (function (){var statearr_130733 = state_130719;
(statearr_130733[(14)] = inst_130681);

(statearr_130733[(8)] = inst_130673__$1);

(statearr_130733[(9)] = inst_130672__$1);

(statearr_130733[(11)] = inst_130674__$1);

(statearr_130733[(12)] = inst_130671__$1);

return statearr_130733;
})();
var statearr_130734_130786 = state_130719__$1;
(statearr_130734_130786[(2)] = null);

(statearr_130734_130786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (22))){
var state_130719__$1 = state_130719;
var statearr_130735_130787 = state_130719__$1;
(statearr_130735_130787[(2)] = null);

(statearr_130735_130787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (6))){
var inst_130660 = (state_130719[(13)]);
var inst_130669 = f.call(null,inst_130660);
var inst_130670 = cljs.core.seq.call(null,inst_130669);
var inst_130671 = inst_130670;
var inst_130672 = null;
var inst_130673 = (0);
var inst_130674 = (0);
var state_130719__$1 = (function (){var statearr_130736 = state_130719;
(statearr_130736[(8)] = inst_130673);

(statearr_130736[(9)] = inst_130672);

(statearr_130736[(11)] = inst_130674);

(statearr_130736[(12)] = inst_130671);

return statearr_130736;
})();
var statearr_130737_130794 = state_130719__$1;
(statearr_130737_130794[(2)] = null);

(statearr_130737_130794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (17))){
var inst_130685 = (state_130719[(7)]);
var inst_130689 = cljs.core.chunk_first.call(null,inst_130685);
var inst_130690 = cljs.core.chunk_rest.call(null,inst_130685);
var inst_130691 = cljs.core.count.call(null,inst_130689);
var inst_130671 = inst_130690;
var inst_130672 = inst_130689;
var inst_130673 = inst_130691;
var inst_130674 = (0);
var state_130719__$1 = (function (){var statearr_130738 = state_130719;
(statearr_130738[(8)] = inst_130673);

(statearr_130738[(9)] = inst_130672);

(statearr_130738[(11)] = inst_130674);

(statearr_130738[(12)] = inst_130671);

return statearr_130738;
})();
var statearr_130739_130795 = state_130719__$1;
(statearr_130739_130795[(2)] = null);

(statearr_130739_130795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (3))){
var inst_130717 = (state_130719[(2)]);
var state_130719__$1 = state_130719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_130719__$1,inst_130717);
} else {
if((state_val_130720 === (12))){
var inst_130705 = (state_130719[(2)]);
var state_130719__$1 = state_130719;
var statearr_130740_130798 = state_130719__$1;
(statearr_130740_130798[(2)] = inst_130705);

(statearr_130740_130798[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (2))){
var state_130719__$1 = state_130719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_130719__$1,(4),in$);
} else {
if((state_val_130720 === (23))){
var inst_130713 = (state_130719[(2)]);
var state_130719__$1 = state_130719;
var statearr_130741_130802 = state_130719__$1;
(statearr_130741_130802[(2)] = inst_130713);

(statearr_130741_130802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (19))){
var inst_130700 = (state_130719[(2)]);
var state_130719__$1 = state_130719;
var statearr_130742_130803 = state_130719__$1;
(statearr_130742_130803[(2)] = inst_130700);

(statearr_130742_130803[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (11))){
var inst_130685 = (state_130719[(7)]);
var inst_130671 = (state_130719[(12)]);
var inst_130685__$1 = cljs.core.seq.call(null,inst_130671);
var state_130719__$1 = (function (){var statearr_130743 = state_130719;
(statearr_130743[(7)] = inst_130685__$1);

return statearr_130743;
})();
if(inst_130685__$1){
var statearr_130744_130807 = state_130719__$1;
(statearr_130744_130807[(1)] = (14));

} else {
var statearr_130745_130808 = state_130719__$1;
(statearr_130745_130808[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (9))){
var inst_130707 = (state_130719[(2)]);
var inst_130708 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_130719__$1 = (function (){var statearr_130746 = state_130719;
(statearr_130746[(15)] = inst_130707);

return statearr_130746;
})();
if(cljs.core.truth_(inst_130708)){
var statearr_130747_130809 = state_130719__$1;
(statearr_130747_130809[(1)] = (21));

} else {
var statearr_130748_130810 = state_130719__$1;
(statearr_130748_130810[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (5))){
var inst_130663 = cljs.core.async.close_BANG_.call(null,out);
var state_130719__$1 = state_130719;
var statearr_130749_130811 = state_130719__$1;
(statearr_130749_130811[(2)] = inst_130663);

(statearr_130749_130811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (14))){
var inst_130685 = (state_130719[(7)]);
var inst_130687 = cljs.core.chunked_seq_QMARK_.call(null,inst_130685);
var state_130719__$1 = state_130719;
if(inst_130687){
var statearr_130750_130814 = state_130719__$1;
(statearr_130750_130814[(1)] = (17));

} else {
var statearr_130751_130815 = state_130719__$1;
(statearr_130751_130815[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (16))){
var inst_130703 = (state_130719[(2)]);
var state_130719__$1 = state_130719;
var statearr_130752_130816 = state_130719__$1;
(statearr_130752_130816[(2)] = inst_130703);

(statearr_130752_130816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130720 === (10))){
var inst_130672 = (state_130719[(9)]);
var inst_130674 = (state_130719[(11)]);
var inst_130679 = cljs.core._nth.call(null,inst_130672,inst_130674);
var state_130719__$1 = state_130719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_130719__$1,(13),out,inst_130679);
} else {
if((state_val_130720 === (18))){
var inst_130685 = (state_130719[(7)]);
var inst_130694 = cljs.core.first.call(null,inst_130685);
var state_130719__$1 = state_130719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_130719__$1,(20),out,inst_130694);
} else {
if((state_val_130720 === (8))){
var inst_130673 = (state_130719[(8)]);
var inst_130674 = (state_130719[(11)]);
var inst_130676 = (inst_130674 < inst_130673);
var inst_130677 = inst_130676;
var state_130719__$1 = state_130719;
if(cljs.core.truth_(inst_130677)){
var statearr_130754_130821 = state_130719__$1;
(statearr_130754_130821[(1)] = (10));

} else {
var statearr_130755_130822 = state_130719__$1;
(statearr_130755_130822[(1)] = (11));

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
});})(c__38379__auto__))
;
return ((function (switch__38358__auto__,c__38379__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38359__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38359__auto____0 = (function (){
var statearr_130766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_130766[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38359__auto__);

(statearr_130766[(1)] = (1));

return statearr_130766;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38359__auto____1 = (function (state_130719){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_130719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e130767){if((e130767 instanceof Object)){
var ex__38362__auto__ = e130767;
var statearr_130768_130823 = state_130719;
(statearr_130768_130823[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e130767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__130825 = state_130719;
state_130719 = G__130825;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38359__auto__ = function(state_130719){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38359__auto____1.call(this,state_130719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38359__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38359__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto__))
})();
var state__38381__auto__ = (function (){var statearr_130771 = f__38380__auto__.call(null);
(statearr_130771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto__);

return statearr_130771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto__))
);

return c__38379__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args130830 = [];
var len__36494__auto___130833 = arguments.length;
var i__36495__auto___130836 = (0);
while(true){
if((i__36495__auto___130836 < len__36494__auto___130833)){
args130830.push((arguments[i__36495__auto___130836]));

var G__130839 = (i__36495__auto___130836 + (1));
i__36495__auto___130836 = G__130839;
continue;
} else {
}
break;
}

var G__130832 = args130830.length;
switch (G__130832) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args130830.length)].join('')));

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
var args130845 = [];
var len__36494__auto___130848 = arguments.length;
var i__36495__auto___130849 = (0);
while(true){
if((i__36495__auto___130849 < len__36494__auto___130848)){
args130845.push((arguments[i__36495__auto___130849]));

var G__130854 = (i__36495__auto___130849 + (1));
i__36495__auto___130849 = G__130854;
continue;
} else {
}
break;
}

var G__130847 = args130845.length;
switch (G__130847) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args130845.length)].join('')));

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
var args130860 = [];
var len__36494__auto___130923 = arguments.length;
var i__36495__auto___130924 = (0);
while(true){
if((i__36495__auto___130924 < len__36494__auto___130923)){
args130860.push((arguments[i__36495__auto___130924]));

var G__130925 = (i__36495__auto___130924 + (1));
i__36495__auto___130924 = G__130925;
continue;
} else {
}
break;
}

var G__130866 = args130860.length;
switch (G__130866) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args130860.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38379__auto___130931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___130931,out){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___130931,out){
return (function (state_130890){
var state_val_130891 = (state_130890[(1)]);
if((state_val_130891 === (7))){
var inst_130885 = (state_130890[(2)]);
var state_130890__$1 = state_130890;
var statearr_130892_130936 = state_130890__$1;
(statearr_130892_130936[(2)] = inst_130885);

(statearr_130892_130936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130891 === (1))){
var inst_130867 = null;
var state_130890__$1 = (function (){var statearr_130893 = state_130890;
(statearr_130893[(7)] = inst_130867);

return statearr_130893;
})();
var statearr_130894_130937 = state_130890__$1;
(statearr_130894_130937[(2)] = null);

(statearr_130894_130937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130891 === (4))){
var inst_130870 = (state_130890[(8)]);
var inst_130870__$1 = (state_130890[(2)]);
var inst_130871 = (inst_130870__$1 == null);
var inst_130872 = cljs.core.not.call(null,inst_130871);
var state_130890__$1 = (function (){var statearr_130899 = state_130890;
(statearr_130899[(8)] = inst_130870__$1);

return statearr_130899;
})();
if(inst_130872){
var statearr_130900_130938 = state_130890__$1;
(statearr_130900_130938[(1)] = (5));

} else {
var statearr_130901_130939 = state_130890__$1;
(statearr_130901_130939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130891 === (6))){
var state_130890__$1 = state_130890;
var statearr_130902_130940 = state_130890__$1;
(statearr_130902_130940[(2)] = null);

(statearr_130902_130940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130891 === (3))){
var inst_130887 = (state_130890[(2)]);
var inst_130888 = cljs.core.async.close_BANG_.call(null,out);
var state_130890__$1 = (function (){var statearr_130903 = state_130890;
(statearr_130903[(9)] = inst_130887);

return statearr_130903;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_130890__$1,inst_130888);
} else {
if((state_val_130891 === (2))){
var state_130890__$1 = state_130890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_130890__$1,(4),ch);
} else {
if((state_val_130891 === (11))){
var inst_130870 = (state_130890[(8)]);
var inst_130879 = (state_130890[(2)]);
var inst_130867 = inst_130870;
var state_130890__$1 = (function (){var statearr_130904 = state_130890;
(statearr_130904[(7)] = inst_130867);

(statearr_130904[(10)] = inst_130879);

return statearr_130904;
})();
var statearr_130905_130943 = state_130890__$1;
(statearr_130905_130943[(2)] = null);

(statearr_130905_130943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130891 === (9))){
var inst_130870 = (state_130890[(8)]);
var state_130890__$1 = state_130890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_130890__$1,(11),out,inst_130870);
} else {
if((state_val_130891 === (5))){
var inst_130867 = (state_130890[(7)]);
var inst_130870 = (state_130890[(8)]);
var inst_130874 = cljs.core._EQ_.call(null,inst_130870,inst_130867);
var state_130890__$1 = state_130890;
if(inst_130874){
var statearr_130907_130945 = state_130890__$1;
(statearr_130907_130945[(1)] = (8));

} else {
var statearr_130908_130946 = state_130890__$1;
(statearr_130908_130946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130891 === (10))){
var inst_130882 = (state_130890[(2)]);
var state_130890__$1 = state_130890;
var statearr_130909_130947 = state_130890__$1;
(statearr_130909_130947[(2)] = inst_130882);

(statearr_130909_130947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_130891 === (8))){
var inst_130867 = (state_130890[(7)]);
var tmp130906 = inst_130867;
var inst_130867__$1 = tmp130906;
var state_130890__$1 = (function (){var statearr_130910 = state_130890;
(statearr_130910[(7)] = inst_130867__$1);

return statearr_130910;
})();
var statearr_130911_130948 = state_130890__$1;
(statearr_130911_130948[(2)] = null);

(statearr_130911_130948[(1)] = (2));


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
});})(c__38379__auto___130931,out))
;
return ((function (switch__38358__auto__,c__38379__auto___130931,out){
return (function() {
var cljs$core$async$state_machine__38359__auto__ = null;
var cljs$core$async$state_machine__38359__auto____0 = (function (){
var statearr_130919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_130919[(0)] = cljs$core$async$state_machine__38359__auto__);

(statearr_130919[(1)] = (1));

return statearr_130919;
});
var cljs$core$async$state_machine__38359__auto____1 = (function (state_130890){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_130890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e130920){if((e130920 instanceof Object)){
var ex__38362__auto__ = e130920;
var statearr_130921_130953 = state_130890;
(statearr_130921_130953[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_130890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e130920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__130954 = state_130890;
state_130890 = G__130954;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$state_machine__38359__auto__ = function(state_130890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38359__auto____1.call(this,state_130890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38359__auto____0;
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38359__auto____1;
return cljs$core$async$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___130931,out))
})();
var state__38381__auto__ = (function (){var statearr_130922 = f__38380__auto__.call(null);
(statearr_130922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___130931);

return statearr_130922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___130931,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args130963 = [];
var len__36494__auto___131035 = arguments.length;
var i__36495__auto___131036 = (0);
while(true){
if((i__36495__auto___131036 < len__36494__auto___131035)){
args130963.push((arguments[i__36495__auto___131036]));

var G__131037 = (i__36495__auto___131036 + (1));
i__36495__auto___131036 = G__131037;
continue;
} else {
}
break;
}

var G__130965 = args130963.length;
switch (G__130965) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args130963.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38379__auto___131039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___131039,out){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___131039,out){
return (function (state_131004){
var state_val_131005 = (state_131004[(1)]);
if((state_val_131005 === (7))){
var inst_131000 = (state_131004[(2)]);
var state_131004__$1 = state_131004;
var statearr_131006_131043 = state_131004__$1;
(statearr_131006_131043[(2)] = inst_131000);

(statearr_131006_131043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131005 === (1))){
var inst_130966 = (new Array(n));
var inst_130967 = inst_130966;
var inst_130968 = (0);
var state_131004__$1 = (function (){var statearr_131007 = state_131004;
(statearr_131007[(7)] = inst_130967);

(statearr_131007[(8)] = inst_130968);

return statearr_131007;
})();
var statearr_131008_131048 = state_131004__$1;
(statearr_131008_131048[(2)] = null);

(statearr_131008_131048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131005 === (4))){
var inst_130971 = (state_131004[(9)]);
var inst_130971__$1 = (state_131004[(2)]);
var inst_130972 = (inst_130971__$1 == null);
var inst_130973 = cljs.core.not.call(null,inst_130972);
var state_131004__$1 = (function (){var statearr_131009 = state_131004;
(statearr_131009[(9)] = inst_130971__$1);

return statearr_131009;
})();
if(inst_130973){
var statearr_131010_131054 = state_131004__$1;
(statearr_131010_131054[(1)] = (5));

} else {
var statearr_131011_131055 = state_131004__$1;
(statearr_131011_131055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131005 === (15))){
var inst_130994 = (state_131004[(2)]);
var state_131004__$1 = state_131004;
var statearr_131012_131058 = state_131004__$1;
(statearr_131012_131058[(2)] = inst_130994);

(statearr_131012_131058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131005 === (13))){
var state_131004__$1 = state_131004;
var statearr_131013_131060 = state_131004__$1;
(statearr_131013_131060[(2)] = null);

(statearr_131013_131060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131005 === (6))){
var inst_130968 = (state_131004[(8)]);
var inst_130990 = (inst_130968 > (0));
var state_131004__$1 = state_131004;
if(cljs.core.truth_(inst_130990)){
var statearr_131014_131061 = state_131004__$1;
(statearr_131014_131061[(1)] = (12));

} else {
var statearr_131015_131062 = state_131004__$1;
(statearr_131015_131062[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131005 === (3))){
var inst_131002 = (state_131004[(2)]);
var state_131004__$1 = state_131004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131004__$1,inst_131002);
} else {
if((state_val_131005 === (12))){
var inst_130967 = (state_131004[(7)]);
var inst_130992 = cljs.core.vec.call(null,inst_130967);
var state_131004__$1 = state_131004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131004__$1,(15),out,inst_130992);
} else {
if((state_val_131005 === (2))){
var state_131004__$1 = state_131004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131004__$1,(4),ch);
} else {
if((state_val_131005 === (11))){
var inst_130983 = (state_131004[(2)]);
var inst_130984 = (new Array(n));
var inst_130967 = inst_130984;
var inst_130968 = (0);
var state_131004__$1 = (function (){var statearr_131017 = state_131004;
(statearr_131017[(7)] = inst_130967);

(statearr_131017[(10)] = inst_130983);

(statearr_131017[(8)] = inst_130968);

return statearr_131017;
})();
var statearr_131018_131064 = state_131004__$1;
(statearr_131018_131064[(2)] = null);

(statearr_131018_131064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131005 === (9))){
var inst_130967 = (state_131004[(7)]);
var inst_130981 = cljs.core.vec.call(null,inst_130967);
var state_131004__$1 = state_131004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131004__$1,(11),out,inst_130981);
} else {
if((state_val_131005 === (5))){
var inst_130967 = (state_131004[(7)]);
var inst_130971 = (state_131004[(9)]);
var inst_130968 = (state_131004[(8)]);
var inst_130976 = (state_131004[(11)]);
var inst_130975 = (inst_130967[inst_130968] = inst_130971);
var inst_130976__$1 = (inst_130968 + (1));
var inst_130977 = (inst_130976__$1 < n);
var state_131004__$1 = (function (){var statearr_131019 = state_131004;
(statearr_131019[(12)] = inst_130975);

(statearr_131019[(11)] = inst_130976__$1);

return statearr_131019;
})();
if(cljs.core.truth_(inst_130977)){
var statearr_131020_131066 = state_131004__$1;
(statearr_131020_131066[(1)] = (8));

} else {
var statearr_131021_131067 = state_131004__$1;
(statearr_131021_131067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131005 === (14))){
var inst_130997 = (state_131004[(2)]);
var inst_130998 = cljs.core.async.close_BANG_.call(null,out);
var state_131004__$1 = (function (){var statearr_131023 = state_131004;
(statearr_131023[(13)] = inst_130997);

return statearr_131023;
})();
var statearr_131024_131068 = state_131004__$1;
(statearr_131024_131068[(2)] = inst_130998);

(statearr_131024_131068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131005 === (10))){
var inst_130988 = (state_131004[(2)]);
var state_131004__$1 = state_131004;
var statearr_131025_131069 = state_131004__$1;
(statearr_131025_131069[(2)] = inst_130988);

(statearr_131025_131069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131005 === (8))){
var inst_130967 = (state_131004[(7)]);
var inst_130976 = (state_131004[(11)]);
var tmp131022 = inst_130967;
var inst_130967__$1 = tmp131022;
var inst_130968 = inst_130976;
var state_131004__$1 = (function (){var statearr_131026 = state_131004;
(statearr_131026[(7)] = inst_130967__$1);

(statearr_131026[(8)] = inst_130968);

return statearr_131026;
})();
var statearr_131027_131074 = state_131004__$1;
(statearr_131027_131074[(2)] = null);

(statearr_131027_131074[(1)] = (2));


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
});})(c__38379__auto___131039,out))
;
return ((function (switch__38358__auto__,c__38379__auto___131039,out){
return (function() {
var cljs$core$async$state_machine__38359__auto__ = null;
var cljs$core$async$state_machine__38359__auto____0 = (function (){
var statearr_131031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_131031[(0)] = cljs$core$async$state_machine__38359__auto__);

(statearr_131031[(1)] = (1));

return statearr_131031;
});
var cljs$core$async$state_machine__38359__auto____1 = (function (state_131004){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_131004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e131032){if((e131032 instanceof Object)){
var ex__38362__auto__ = e131032;
var statearr_131033_131077 = state_131004;
(statearr_131033_131077[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e131032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__131080 = state_131004;
state_131004 = G__131080;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$state_machine__38359__auto__ = function(state_131004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38359__auto____1.call(this,state_131004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38359__auto____0;
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38359__auto____1;
return cljs$core$async$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___131039,out))
})();
var state__38381__auto__ = (function (){var statearr_131034 = f__38380__auto__.call(null);
(statearr_131034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___131039);

return statearr_131034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___131039,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args131085 = [];
var len__36494__auto___131170 = arguments.length;
var i__36495__auto___131171 = (0);
while(true){
if((i__36495__auto___131171 < len__36494__auto___131170)){
args131085.push((arguments[i__36495__auto___131171]));

var G__131172 = (i__36495__auto___131171 + (1));
i__36495__auto___131171 = G__131172;
continue;
} else {
}
break;
}

var G__131087 = args131085.length;
switch (G__131087) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131085.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38379__auto___131174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___131174,out){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___131174,out){
return (function (state_131134){
var state_val_131135 = (state_131134[(1)]);
if((state_val_131135 === (7))){
var inst_131125 = (state_131134[(2)]);
var state_131134__$1 = state_131134;
var statearr_131136_131175 = state_131134__$1;
(statearr_131136_131175[(2)] = inst_131125);

(statearr_131136_131175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131135 === (1))){
var inst_131088 = [];
var inst_131089 = inst_131088;
var inst_131090 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_131134__$1 = (function (){var statearr_131137 = state_131134;
(statearr_131137[(7)] = inst_131090);

(statearr_131137[(8)] = inst_131089);

return statearr_131137;
})();
var statearr_131138_131178 = state_131134__$1;
(statearr_131138_131178[(2)] = null);

(statearr_131138_131178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131135 === (4))){
var inst_131093 = (state_131134[(9)]);
var inst_131093__$1 = (state_131134[(2)]);
var inst_131094 = (inst_131093__$1 == null);
var inst_131095 = cljs.core.not.call(null,inst_131094);
var state_131134__$1 = (function (){var statearr_131139 = state_131134;
(statearr_131139[(9)] = inst_131093__$1);

return statearr_131139;
})();
if(inst_131095){
var statearr_131140_131180 = state_131134__$1;
(statearr_131140_131180[(1)] = (5));

} else {
var statearr_131141_131181 = state_131134__$1;
(statearr_131141_131181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131135 === (15))){
var inst_131119 = (state_131134[(2)]);
var state_131134__$1 = state_131134;
var statearr_131142_131182 = state_131134__$1;
(statearr_131142_131182[(2)] = inst_131119);

(statearr_131142_131182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131135 === (13))){
var state_131134__$1 = state_131134;
var statearr_131143_131183 = state_131134__$1;
(statearr_131143_131183[(2)] = null);

(statearr_131143_131183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131135 === (6))){
var inst_131089 = (state_131134[(8)]);
var inst_131114 = inst_131089.length;
var inst_131115 = (inst_131114 > (0));
var state_131134__$1 = state_131134;
if(cljs.core.truth_(inst_131115)){
var statearr_131144_131184 = state_131134__$1;
(statearr_131144_131184[(1)] = (12));

} else {
var statearr_131145_131187 = state_131134__$1;
(statearr_131145_131187[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131135 === (3))){
var inst_131127 = (state_131134[(2)]);
var state_131134__$1 = state_131134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131134__$1,inst_131127);
} else {
if((state_val_131135 === (12))){
var inst_131089 = (state_131134[(8)]);
var inst_131117 = cljs.core.vec.call(null,inst_131089);
var state_131134__$1 = state_131134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131134__$1,(15),out,inst_131117);
} else {
if((state_val_131135 === (2))){
var state_131134__$1 = state_131134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131134__$1,(4),ch);
} else {
if((state_val_131135 === (11))){
var inst_131093 = (state_131134[(9)]);
var inst_131097 = (state_131134[(10)]);
var inst_131107 = (state_131134[(2)]);
var inst_131108 = [];
var inst_131109 = inst_131108.push(inst_131093);
var inst_131089 = inst_131108;
var inst_131090 = inst_131097;
var state_131134__$1 = (function (){var statearr_131146 = state_131134;
(statearr_131146[(11)] = inst_131109);

(statearr_131146[(12)] = inst_131107);

(statearr_131146[(7)] = inst_131090);

(statearr_131146[(8)] = inst_131089);

return statearr_131146;
})();
var statearr_131147_131190 = state_131134__$1;
(statearr_131147_131190[(2)] = null);

(statearr_131147_131190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131135 === (9))){
var inst_131089 = (state_131134[(8)]);
var inst_131105 = cljs.core.vec.call(null,inst_131089);
var state_131134__$1 = state_131134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_131134__$1,(11),out,inst_131105);
} else {
if((state_val_131135 === (5))){
var inst_131093 = (state_131134[(9)]);
var inst_131090 = (state_131134[(7)]);
var inst_131097 = (state_131134[(10)]);
var inst_131097__$1 = f.call(null,inst_131093);
var inst_131098 = cljs.core._EQ_.call(null,inst_131097__$1,inst_131090);
var inst_131099 = cljs.core.keyword_identical_QMARK_.call(null,inst_131090,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_131100 = (inst_131098) || (inst_131099);
var state_131134__$1 = (function (){var statearr_131148 = state_131134;
(statearr_131148[(10)] = inst_131097__$1);

return statearr_131148;
})();
if(cljs.core.truth_(inst_131100)){
var statearr_131149_131193 = state_131134__$1;
(statearr_131149_131193[(1)] = (8));

} else {
var statearr_131150_131194 = state_131134__$1;
(statearr_131150_131194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131135 === (14))){
var inst_131122 = (state_131134[(2)]);
var inst_131123 = cljs.core.async.close_BANG_.call(null,out);
var state_131134__$1 = (function (){var statearr_131152 = state_131134;
(statearr_131152[(13)] = inst_131122);

return statearr_131152;
})();
var statearr_131153_131195 = state_131134__$1;
(statearr_131153_131195[(2)] = inst_131123);

(statearr_131153_131195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131135 === (10))){
var inst_131112 = (state_131134[(2)]);
var state_131134__$1 = state_131134;
var statearr_131154_131196 = state_131134__$1;
(statearr_131154_131196[(2)] = inst_131112);

(statearr_131154_131196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131135 === (8))){
var inst_131093 = (state_131134[(9)]);
var inst_131089 = (state_131134[(8)]);
var inst_131097 = (state_131134[(10)]);
var inst_131102 = inst_131089.push(inst_131093);
var tmp131151 = inst_131089;
var inst_131089__$1 = tmp131151;
var inst_131090 = inst_131097;
var state_131134__$1 = (function (){var statearr_131155 = state_131134;
(statearr_131155[(14)] = inst_131102);

(statearr_131155[(7)] = inst_131090);

(statearr_131155[(8)] = inst_131089__$1);

return statearr_131155;
})();
var statearr_131156_131197 = state_131134__$1;
(statearr_131156_131197[(2)] = null);

(statearr_131156_131197[(1)] = (2));


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
});})(c__38379__auto___131174,out))
;
return ((function (switch__38358__auto__,c__38379__auto___131174,out){
return (function() {
var cljs$core$async$state_machine__38359__auto__ = null;
var cljs$core$async$state_machine__38359__auto____0 = (function (){
var statearr_131165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_131165[(0)] = cljs$core$async$state_machine__38359__auto__);

(statearr_131165[(1)] = (1));

return statearr_131165;
});
var cljs$core$async$state_machine__38359__auto____1 = (function (state_131134){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_131134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e131166){if((e131166 instanceof Object)){
var ex__38362__auto__ = e131166;
var statearr_131167_131206 = state_131134;
(statearr_131167_131206[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e131166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__131209 = state_131134;
state_131134 = G__131209;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
cljs$core$async$state_machine__38359__auto__ = function(state_131134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38359__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38359__auto____1.call(this,state_131134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38359__auto____0;
cljs$core$async$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38359__auto____1;
return cljs$core$async$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___131174,out))
})();
var state__38381__auto__ = (function (){var statearr_131168 = f__38380__auto__.call(null);
(statearr_131168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___131174);

return statearr_131168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___131174,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
