// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async293991 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async293991 = (function (fn_handler,f,meta293992){
this.fn_handler = fn_handler;
this.f = f;
this.meta293992 = meta293992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async293991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_293993,meta293992__$1){
var self__ = this;
var _293993__$1 = this;
return (new cljs.core.async.t_cljs$core$async293991(self__.fn_handler,self__.f,meta293992__$1));
});

cljs.core.async.t_cljs$core$async293991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_293993){
var self__ = this;
var _293993__$1 = this;
return self__.meta293992;
});

cljs.core.async.t_cljs$core$async293991.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async293991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async293991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async293991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta293992","meta293992",-1676636606,null)], null);
});

cljs.core.async.t_cljs$core$async293991.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async293991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async293991";

cljs.core.async.t_cljs$core$async293991.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async293991");
});

cljs.core.async.__GT_t_cljs$core$async293991 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async293991(fn_handler__$1,f__$1,meta293992){
return (new cljs.core.async.t_cljs$core$async293991(fn_handler__$1,f__$1,meta293992));
});

}

return (new cljs.core.async.t_cljs$core$async293991(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args294000 = [];
var len__36260__auto___294003 = arguments.length;
var i__36261__auto___294004 = (0);
while(true){
if((i__36261__auto___294004 < len__36260__auto___294003)){
args294000.push((arguments[i__36261__auto___294004]));

var G__294005 = (i__36261__auto___294004 + (1));
i__36261__auto___294004 = G__294005;
continue;
} else {
}
break;
}

var G__294002 = args294000.length;
switch (G__294002) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args294000.length)].join('')));

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
var args294016 = [];
var len__36260__auto___294022 = arguments.length;
var i__36261__auto___294028 = (0);
while(true){
if((i__36261__auto___294028 < len__36260__auto___294022)){
args294016.push((arguments[i__36261__auto___294028]));

var G__294030 = (i__36261__auto___294028 + (1));
i__36261__auto___294028 = G__294030;
continue;
} else {
}
break;
}

var G__294018 = args294016.length;
switch (G__294018) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args294016.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_294050 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_294050);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_294050,ret){
return (function (){
return fn1.call(null,val_294050);
});})(val_294050,ret))
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
var args294054 = [];
var len__36260__auto___294061 = arguments.length;
var i__36261__auto___294062 = (0);
while(true){
if((i__36261__auto___294062 < len__36260__auto___294061)){
args294054.push((arguments[i__36261__auto___294062]));

var G__294063 = (i__36261__auto___294062 + (1));
i__36261__auto___294062 = G__294063;
continue;
} else {
}
break;
}

var G__294058 = args294054.length;
switch (G__294058) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args294054.length)].join('')));

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
var n__36105__auto___294079 = n;
var x_294080 = (0);
while(true){
if((x_294080 < n__36105__auto___294079)){
(a[x_294080] = (0));

var G__294081 = (x_294080 + (1));
x_294080 = G__294081;
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

var G__294084 = (i + (1));
i = G__294084;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async294093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async294093 = (function (alt_flag,flag,meta294094){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta294094 = meta294094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async294093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_294095,meta294094__$1){
var self__ = this;
var _294095__$1 = this;
return (new cljs.core.async.t_cljs$core$async294093(self__.alt_flag,self__.flag,meta294094__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async294093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_294095){
var self__ = this;
var _294095__$1 = this;
return self__.meta294094;
});})(flag))
;

cljs.core.async.t_cljs$core$async294093.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async294093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async294093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async294093.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta294094","meta294094",-1936270026,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async294093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async294093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async294093";

cljs.core.async.t_cljs$core$async294093.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async294093");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async294093 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async294093(alt_flag__$1,flag__$1,meta294094){
return (new cljs.core.async.t_cljs$core$async294093(alt_flag__$1,flag__$1,meta294094));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async294093(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async294113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async294113 = (function (alt_handler,flag,cb,meta294114){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta294114 = meta294114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async294113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_294115,meta294114__$1){
var self__ = this;
var _294115__$1 = this;
return (new cljs.core.async.t_cljs$core$async294113(self__.alt_handler,self__.flag,self__.cb,meta294114__$1));
});

cljs.core.async.t_cljs$core$async294113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_294115){
var self__ = this;
var _294115__$1 = this;
return self__.meta294114;
});

cljs.core.async.t_cljs$core$async294113.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async294113.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async294113.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async294113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta294114","meta294114",-497091101,null)], null);
});

cljs.core.async.t_cljs$core$async294113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async294113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async294113";

cljs.core.async.t_cljs$core$async294113.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async294113");
});

cljs.core.async.__GT_t_cljs$core$async294113 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async294113(alt_handler__$1,flag__$1,cb__$1,meta294114){
return (new cljs.core.async.t_cljs$core$async294113(alt_handler__$1,flag__$1,cb__$1,meta294114));
});

}

return (new cljs.core.async.t_cljs$core$async294113(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__294141_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__294141_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__294143_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__294143_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__35191__auto__ = wport;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return port;
}
})()], null));
} else {
var G__294150 = (i + (1));
i = G__294150;
continue;
}
} else {
return null;
}
break;
}
})();
var or__35191__auto__ = ret;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__35179__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__35179__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__35179__auto__;
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
var args__36267__auto__ = [];
var len__36260__auto___294158 = arguments.length;
var i__36261__auto___294159 = (0);
while(true){
if((i__36261__auto___294159 < len__36260__auto___294158)){
args__36267__auto__.push((arguments[i__36261__auto___294159]));

var G__294163 = (i__36261__auto___294159 + (1));
i__36261__auto___294159 = G__294163;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__294155){
var map__294156 = p__294155;
var map__294156__$1 = ((((!((map__294156 == null)))?((((map__294156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__294156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__294156):map__294156);
var opts = map__294156__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq294151){
var G__294152 = cljs.core.first.call(null,seq294151);
var seq294151__$1 = cljs.core.next.call(null,seq294151);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__294152,seq294151__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args294177 = [];
var len__36260__auto___294247 = arguments.length;
var i__36261__auto___294248 = (0);
while(true){
if((i__36261__auto___294248 < len__36260__auto___294247)){
args294177.push((arguments[i__36261__auto___294248]));

var G__294249 = (i__36261__auto___294248 + (1));
i__36261__auto___294248 = G__294249;
continue;
} else {
}
break;
}

var G__294180 = args294177.length;
switch (G__294180) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args294177.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38100__auto___294254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___294254){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___294254){
return (function (state_294208){
var state_val_294209 = (state_294208[(1)]);
if((state_val_294209 === (7))){
var inst_294204 = (state_294208[(2)]);
var state_294208__$1 = state_294208;
var statearr_294210_294255 = state_294208__$1;
(statearr_294210_294255[(2)] = inst_294204);

(statearr_294210_294255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294209 === (1))){
var state_294208__$1 = state_294208;
var statearr_294211_294256 = state_294208__$1;
(statearr_294211_294256[(2)] = null);

(statearr_294211_294256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294209 === (4))){
var inst_294187 = (state_294208[(7)]);
var inst_294187__$1 = (state_294208[(2)]);
var inst_294188 = (inst_294187__$1 == null);
var state_294208__$1 = (function (){var statearr_294212 = state_294208;
(statearr_294212[(7)] = inst_294187__$1);

return statearr_294212;
})();
if(cljs.core.truth_(inst_294188)){
var statearr_294213_294265 = state_294208__$1;
(statearr_294213_294265[(1)] = (5));

} else {
var statearr_294214_294266 = state_294208__$1;
(statearr_294214_294266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294209 === (13))){
var state_294208__$1 = state_294208;
var statearr_294215_294267 = state_294208__$1;
(statearr_294215_294267[(2)] = null);

(statearr_294215_294267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294209 === (6))){
var inst_294187 = (state_294208[(7)]);
var state_294208__$1 = state_294208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_294208__$1,(11),to,inst_294187);
} else {
if((state_val_294209 === (3))){
var inst_294206 = (state_294208[(2)]);
var state_294208__$1 = state_294208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_294208__$1,inst_294206);
} else {
if((state_val_294209 === (12))){
var state_294208__$1 = state_294208;
var statearr_294218_294268 = state_294208__$1;
(statearr_294218_294268[(2)] = null);

(statearr_294218_294268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294209 === (2))){
var state_294208__$1 = state_294208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_294208__$1,(4),from);
} else {
if((state_val_294209 === (11))){
var inst_294197 = (state_294208[(2)]);
var state_294208__$1 = state_294208;
if(cljs.core.truth_(inst_294197)){
var statearr_294220_294287 = state_294208__$1;
(statearr_294220_294287[(1)] = (12));

} else {
var statearr_294221_294288 = state_294208__$1;
(statearr_294221_294288[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294209 === (9))){
var state_294208__$1 = state_294208;
var statearr_294228_294289 = state_294208__$1;
(statearr_294228_294289[(2)] = null);

(statearr_294228_294289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294209 === (5))){
var state_294208__$1 = state_294208;
if(cljs.core.truth_(close_QMARK_)){
var statearr_294232_294292 = state_294208__$1;
(statearr_294232_294292[(1)] = (8));

} else {
var statearr_294233_294298 = state_294208__$1;
(statearr_294233_294298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294209 === (14))){
var inst_294202 = (state_294208[(2)]);
var state_294208__$1 = state_294208;
var statearr_294234_294299 = state_294208__$1;
(statearr_294234_294299[(2)] = inst_294202);

(statearr_294234_294299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294209 === (10))){
var inst_294194 = (state_294208[(2)]);
var state_294208__$1 = state_294208;
var statearr_294235_294300 = state_294208__$1;
(statearr_294235_294300[(2)] = inst_294194);

(statearr_294235_294300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294209 === (8))){
var inst_294191 = cljs.core.async.close_BANG_.call(null,to);
var state_294208__$1 = state_294208;
var statearr_294236_294303 = state_294208__$1;
(statearr_294236_294303[(2)] = inst_294191);

(statearr_294236_294303[(1)] = (10));


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
});})(c__38100__auto___294254))
;
return ((function (switch__38079__auto__,c__38100__auto___294254){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_294240 = [null,null,null,null,null,null,null,null];
(statearr_294240[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_294240[(1)] = (1));

return statearr_294240;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_294208){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_294208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e294243){if((e294243 instanceof Object)){
var ex__38083__auto__ = e294243;
var statearr_294244_294310 = state_294208;
(statearr_294244_294310[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_294208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e294243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__294315 = state_294208;
state_294208 = G__294315;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_294208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_294208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___294254))
})();
var state__38102__auto__ = (function (){var statearr_294246 = f__38101__auto__.call(null);
(statearr_294246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___294254);

return statearr_294246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___294254))
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
return (function (p__294560){
var vec__294561 = p__294560;
var v = cljs.core.nth.call(null,vec__294561,(0),null);
var p = cljs.core.nth.call(null,vec__294561,(1),null);
var job = vec__294561;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38100__auto___294854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___294854,res,vec__294561,v,p,job,jobs,results){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___294854,res,vec__294561,v,p,job,jobs,results){
return (function (state_294566){
var state_val_294567 = (state_294566[(1)]);
if((state_val_294567 === (1))){
var state_294566__$1 = state_294566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_294566__$1,(2),res,v);
} else {
if((state_val_294567 === (2))){
var inst_294563 = (state_294566[(2)]);
var inst_294564 = cljs.core.async.close_BANG_.call(null,res);
var state_294566__$1 = (function (){var statearr_294575 = state_294566;
(statearr_294575[(7)] = inst_294563);

return statearr_294575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_294566__$1,inst_294564);
} else {
return null;
}
}
});})(c__38100__auto___294854,res,vec__294561,v,p,job,jobs,results))
;
return ((function (switch__38079__auto__,c__38100__auto___294854,res,vec__294561,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_294579 = [null,null,null,null,null,null,null,null];
(statearr_294579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_294579[(1)] = (1));

return statearr_294579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_294566){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_294566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e294580){if((e294580 instanceof Object)){
var ex__38083__auto__ = e294580;
var statearr_294581_294877 = state_294566;
(statearr_294581_294877[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_294566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e294580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__294880 = state_294566;
state_294566 = G__294880;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_294566){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_294566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___294854,res,vec__294561,v,p,job,jobs,results))
})();
var state__38102__auto__ = (function (){var statearr_294584 = f__38101__auto__.call(null);
(statearr_294584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___294854);

return statearr_294584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___294854,res,vec__294561,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__294586){
var vec__294587 = p__294586;
var v = cljs.core.nth.call(null,vec__294587,(0),null);
var p = cljs.core.nth.call(null,vec__294587,(1),null);
var job = vec__294587;
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
var n__36105__auto___294897 = n;
var __294898 = (0);
while(true){
if((__294898 < n__36105__auto___294897)){
var G__294588_294899 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__294588_294899) {
case "compute":
var c__38100__auto___294903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__294898,c__38100__auto___294903,G__294588_294899,n__36105__auto___294897,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (__294898,c__38100__auto___294903,G__294588_294899,n__36105__auto___294897,jobs,results,process,async){
return (function (state_294603){
var state_val_294604 = (state_294603[(1)]);
if((state_val_294604 === (1))){
var state_294603__$1 = state_294603;
var statearr_294607_294908 = state_294603__$1;
(statearr_294607_294908[(2)] = null);

(statearr_294607_294908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294604 === (2))){
var state_294603__$1 = state_294603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_294603__$1,(4),jobs);
} else {
if((state_val_294604 === (3))){
var inst_294601 = (state_294603[(2)]);
var state_294603__$1 = state_294603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_294603__$1,inst_294601);
} else {
if((state_val_294604 === (4))){
var inst_294591 = (state_294603[(2)]);
var inst_294592 = process.call(null,inst_294591);
var state_294603__$1 = state_294603;
if(cljs.core.truth_(inst_294592)){
var statearr_294608_294915 = state_294603__$1;
(statearr_294608_294915[(1)] = (5));

} else {
var statearr_294611_294916 = state_294603__$1;
(statearr_294611_294916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294604 === (5))){
var state_294603__$1 = state_294603;
var statearr_294613_294919 = state_294603__$1;
(statearr_294613_294919[(2)] = null);

(statearr_294613_294919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294604 === (6))){
var state_294603__$1 = state_294603;
var statearr_294614_294923 = state_294603__$1;
(statearr_294614_294923[(2)] = null);

(statearr_294614_294923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294604 === (7))){
var inst_294597 = (state_294603[(2)]);
var state_294603__$1 = state_294603;
var statearr_294615_294927 = state_294603__$1;
(statearr_294615_294927[(2)] = inst_294597);

(statearr_294615_294927[(1)] = (3));


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
});})(__294898,c__38100__auto___294903,G__294588_294899,n__36105__auto___294897,jobs,results,process,async))
;
return ((function (__294898,switch__38079__auto__,c__38100__auto___294903,G__294588_294899,n__36105__auto___294897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_294622 = [null,null,null,null,null,null,null];
(statearr_294622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_294622[(1)] = (1));

return statearr_294622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_294603){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_294603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e294623){if((e294623 instanceof Object)){
var ex__38083__auto__ = e294623;
var statearr_294624_294942 = state_294603;
(statearr_294624_294942[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_294603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e294623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__294944 = state_294603;
state_294603 = G__294944;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_294603){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_294603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(__294898,switch__38079__auto__,c__38100__auto___294903,G__294588_294899,n__36105__auto___294897,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_294628 = f__38101__auto__.call(null);
(statearr_294628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___294903);

return statearr_294628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(__294898,c__38100__auto___294903,G__294588_294899,n__36105__auto___294897,jobs,results,process,async))
);


break;
case "async":
var c__38100__auto___294948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__294898,c__38100__auto___294948,G__294588_294899,n__36105__auto___294897,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (__294898,c__38100__auto___294948,G__294588_294899,n__36105__auto___294897,jobs,results,process,async){
return (function (state_294642){
var state_val_294643 = (state_294642[(1)]);
if((state_val_294643 === (1))){
var state_294642__$1 = state_294642;
var statearr_294646_294954 = state_294642__$1;
(statearr_294646_294954[(2)] = null);

(statearr_294646_294954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294643 === (2))){
var state_294642__$1 = state_294642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_294642__$1,(4),jobs);
} else {
if((state_val_294643 === (3))){
var inst_294640 = (state_294642[(2)]);
var state_294642__$1 = state_294642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_294642__$1,inst_294640);
} else {
if((state_val_294643 === (4))){
var inst_294632 = (state_294642[(2)]);
var inst_294633 = async.call(null,inst_294632);
var state_294642__$1 = state_294642;
if(cljs.core.truth_(inst_294633)){
var statearr_294649_294960 = state_294642__$1;
(statearr_294649_294960[(1)] = (5));

} else {
var statearr_294663_294961 = state_294642__$1;
(statearr_294663_294961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294643 === (5))){
var state_294642__$1 = state_294642;
var statearr_294664_294964 = state_294642__$1;
(statearr_294664_294964[(2)] = null);

(statearr_294664_294964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294643 === (6))){
var state_294642__$1 = state_294642;
var statearr_294665_294966 = state_294642__$1;
(statearr_294665_294966[(2)] = null);

(statearr_294665_294966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294643 === (7))){
var inst_294638 = (state_294642[(2)]);
var state_294642__$1 = state_294642;
var statearr_294666_294969 = state_294642__$1;
(statearr_294666_294969[(2)] = inst_294638);

(statearr_294666_294969[(1)] = (3));


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
});})(__294898,c__38100__auto___294948,G__294588_294899,n__36105__auto___294897,jobs,results,process,async))
;
return ((function (__294898,switch__38079__auto__,c__38100__auto___294948,G__294588_294899,n__36105__auto___294897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_294670 = [null,null,null,null,null,null,null];
(statearr_294670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_294670[(1)] = (1));

return statearr_294670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_294642){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_294642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e294671){if((e294671 instanceof Object)){
var ex__38083__auto__ = e294671;
var statearr_294672_294977 = state_294642;
(statearr_294672_294977[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_294642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e294671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__294979 = state_294642;
state_294642 = G__294979;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_294642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_294642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(__294898,switch__38079__auto__,c__38100__auto___294948,G__294588_294899,n__36105__auto___294897,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_294673 = f__38101__auto__.call(null);
(statearr_294673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___294948);

return statearr_294673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(__294898,c__38100__auto___294948,G__294588_294899,n__36105__auto___294897,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__294983 = (__294898 + (1));
__294898 = G__294983;
continue;
} else {
}
break;
}

var c__38100__auto___294984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___294984,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___294984,jobs,results,process,async){
return (function (state_294700){
var state_val_294701 = (state_294700[(1)]);
if((state_val_294701 === (1))){
var state_294700__$1 = state_294700;
var statearr_294704_294990 = state_294700__$1;
(statearr_294704_294990[(2)] = null);

(statearr_294704_294990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294701 === (2))){
var state_294700__$1 = state_294700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_294700__$1,(4),from);
} else {
if((state_val_294701 === (3))){
var inst_294697 = (state_294700[(2)]);
var state_294700__$1 = state_294700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_294700__$1,inst_294697);
} else {
if((state_val_294701 === (4))){
var inst_294680 = (state_294700[(7)]);
var inst_294680__$1 = (state_294700[(2)]);
var inst_294681 = (inst_294680__$1 == null);
var state_294700__$1 = (function (){var statearr_294708 = state_294700;
(statearr_294708[(7)] = inst_294680__$1);

return statearr_294708;
})();
if(cljs.core.truth_(inst_294681)){
var statearr_294710_294995 = state_294700__$1;
(statearr_294710_294995[(1)] = (5));

} else {
var statearr_294711_294998 = state_294700__$1;
(statearr_294711_294998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294701 === (5))){
var inst_294683 = cljs.core.async.close_BANG_.call(null,jobs);
var state_294700__$1 = state_294700;
var statearr_294712_295002 = state_294700__$1;
(statearr_294712_295002[(2)] = inst_294683);

(statearr_294712_295002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294701 === (6))){
var inst_294680 = (state_294700[(7)]);
var inst_294685 = (state_294700[(8)]);
var inst_294685__$1 = cljs.core.async.chan.call(null,(1));
var inst_294686 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_294687 = [inst_294680,inst_294685__$1];
var inst_294688 = (new cljs.core.PersistentVector(null,2,(5),inst_294686,inst_294687,null));
var state_294700__$1 = (function (){var statearr_294715 = state_294700;
(statearr_294715[(8)] = inst_294685__$1);

return statearr_294715;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_294700__$1,(8),jobs,inst_294688);
} else {
if((state_val_294701 === (7))){
var inst_294695 = (state_294700[(2)]);
var state_294700__$1 = state_294700;
var statearr_294717_295009 = state_294700__$1;
(statearr_294717_295009[(2)] = inst_294695);

(statearr_294717_295009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294701 === (8))){
var inst_294685 = (state_294700[(8)]);
var inst_294690 = (state_294700[(2)]);
var state_294700__$1 = (function (){var statearr_294718 = state_294700;
(statearr_294718[(9)] = inst_294690);

return statearr_294718;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_294700__$1,(9),results,inst_294685);
} else {
if((state_val_294701 === (9))){
var inst_294692 = (state_294700[(2)]);
var state_294700__$1 = (function (){var statearr_294720 = state_294700;
(statearr_294720[(10)] = inst_294692);

return statearr_294720;
})();
var statearr_294721_295013 = state_294700__$1;
(statearr_294721_295013[(2)] = null);

(statearr_294721_295013[(1)] = (2));


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
});})(c__38100__auto___294984,jobs,results,process,async))
;
return ((function (switch__38079__auto__,c__38100__auto___294984,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_294732 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_294732[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_294732[(1)] = (1));

return statearr_294732;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_294700){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_294700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e294735){if((e294735 instanceof Object)){
var ex__38083__auto__ = e294735;
var statearr_294737_295019 = state_294700;
(statearr_294737_295019[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_294700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e294735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__295025 = state_294700;
state_294700 = G__295025;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_294700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_294700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___294984,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_294739 = f__38101__auto__.call(null);
(statearr_294739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___294984);

return statearr_294739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___294984,jobs,results,process,async))
);


var c__38100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto__,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto__,jobs,results,process,async){
return (function (state_294780){
var state_val_294781 = (state_294780[(1)]);
if((state_val_294781 === (7))){
var inst_294776 = (state_294780[(2)]);
var state_294780__$1 = state_294780;
var statearr_294783_295034 = state_294780__$1;
(statearr_294783_295034[(2)] = inst_294776);

(statearr_294783_295034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (20))){
var state_294780__$1 = state_294780;
var statearr_294784_295036 = state_294780__$1;
(statearr_294784_295036[(2)] = null);

(statearr_294784_295036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (1))){
var state_294780__$1 = state_294780;
var statearr_294785_295038 = state_294780__$1;
(statearr_294785_295038[(2)] = null);

(statearr_294785_295038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (4))){
var inst_294742 = (state_294780[(7)]);
var inst_294742__$1 = (state_294780[(2)]);
var inst_294743 = (inst_294742__$1 == null);
var state_294780__$1 = (function (){var statearr_294787 = state_294780;
(statearr_294787[(7)] = inst_294742__$1);

return statearr_294787;
})();
if(cljs.core.truth_(inst_294743)){
var statearr_294789_295045 = state_294780__$1;
(statearr_294789_295045[(1)] = (5));

} else {
var statearr_294790_295047 = state_294780__$1;
(statearr_294790_295047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (15))){
var inst_294756 = (state_294780[(8)]);
var state_294780__$1 = state_294780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_294780__$1,(18),to,inst_294756);
} else {
if((state_val_294781 === (21))){
var inst_294771 = (state_294780[(2)]);
var state_294780__$1 = state_294780;
var statearr_294799_295048 = state_294780__$1;
(statearr_294799_295048[(2)] = inst_294771);

(statearr_294799_295048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (13))){
var inst_294773 = (state_294780[(2)]);
var state_294780__$1 = (function (){var statearr_294801 = state_294780;
(statearr_294801[(9)] = inst_294773);

return statearr_294801;
})();
var statearr_294802_295056 = state_294780__$1;
(statearr_294802_295056[(2)] = null);

(statearr_294802_295056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (6))){
var inst_294742 = (state_294780[(7)]);
var state_294780__$1 = state_294780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_294780__$1,(11),inst_294742);
} else {
if((state_val_294781 === (17))){
var inst_294766 = (state_294780[(2)]);
var state_294780__$1 = state_294780;
if(cljs.core.truth_(inst_294766)){
var statearr_294804_295057 = state_294780__$1;
(statearr_294804_295057[(1)] = (19));

} else {
var statearr_294805_295060 = state_294780__$1;
(statearr_294805_295060[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (3))){
var inst_294778 = (state_294780[(2)]);
var state_294780__$1 = state_294780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_294780__$1,inst_294778);
} else {
if((state_val_294781 === (12))){
var inst_294753 = (state_294780[(10)]);
var state_294780__$1 = state_294780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_294780__$1,(14),inst_294753);
} else {
if((state_val_294781 === (2))){
var state_294780__$1 = state_294780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_294780__$1,(4),results);
} else {
if((state_val_294781 === (19))){
var state_294780__$1 = state_294780;
var statearr_294807_295075 = state_294780__$1;
(statearr_294807_295075[(2)] = null);

(statearr_294807_295075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (11))){
var inst_294753 = (state_294780[(2)]);
var state_294780__$1 = (function (){var statearr_294808 = state_294780;
(statearr_294808[(10)] = inst_294753);

return statearr_294808;
})();
var statearr_294809_295079 = state_294780__$1;
(statearr_294809_295079[(2)] = null);

(statearr_294809_295079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (9))){
var state_294780__$1 = state_294780;
var statearr_294810_295080 = state_294780__$1;
(statearr_294810_295080[(2)] = null);

(statearr_294810_295080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (5))){
var state_294780__$1 = state_294780;
if(cljs.core.truth_(close_QMARK_)){
var statearr_294811_295083 = state_294780__$1;
(statearr_294811_295083[(1)] = (8));

} else {
var statearr_294812_295085 = state_294780__$1;
(statearr_294812_295085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (14))){
var inst_294758 = (state_294780[(11)]);
var inst_294756 = (state_294780[(8)]);
var inst_294756__$1 = (state_294780[(2)]);
var inst_294757 = (inst_294756__$1 == null);
var inst_294758__$1 = cljs.core.not.call(null,inst_294757);
var state_294780__$1 = (function (){var statearr_294815 = state_294780;
(statearr_294815[(11)] = inst_294758__$1);

(statearr_294815[(8)] = inst_294756__$1);

return statearr_294815;
})();
if(inst_294758__$1){
var statearr_294816_295093 = state_294780__$1;
(statearr_294816_295093[(1)] = (15));

} else {
var statearr_294818_295095 = state_294780__$1;
(statearr_294818_295095[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (16))){
var inst_294758 = (state_294780[(11)]);
var state_294780__$1 = state_294780;
var statearr_294819_295096 = state_294780__$1;
(statearr_294819_295096[(2)] = inst_294758);

(statearr_294819_295096[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (10))){
var inst_294750 = (state_294780[(2)]);
var state_294780__$1 = state_294780;
var statearr_294820_295104 = state_294780__$1;
(statearr_294820_295104[(2)] = inst_294750);

(statearr_294820_295104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (18))){
var inst_294763 = (state_294780[(2)]);
var state_294780__$1 = state_294780;
var statearr_294822_295105 = state_294780__$1;
(statearr_294822_295105[(2)] = inst_294763);

(statearr_294822_295105[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_294781 === (8))){
var inst_294747 = cljs.core.async.close_BANG_.call(null,to);
var state_294780__$1 = state_294780;
var statearr_294823_295108 = state_294780__$1;
(statearr_294823_295108[(2)] = inst_294747);

(statearr_294823_295108[(1)] = (10));


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
});})(c__38100__auto__,jobs,results,process,async))
;
return ((function (switch__38079__auto__,c__38100__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_294838 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_294838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_294838[(1)] = (1));

return statearr_294838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_294780){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_294780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e294840){if((e294840 instanceof Object)){
var ex__38083__auto__ = e294840;
var statearr_294841_295117 = state_294780;
(statearr_294841_295117[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_294780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e294840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__295120 = state_294780;
state_294780 = G__295120;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_294780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_294780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_294843 = f__38101__auto__.call(null);
(statearr_294843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_294843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto__,jobs,results,process,async))
);

return c__38100__auto__;
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
var args295129 = [];
var len__36260__auto___295142 = arguments.length;
var i__36261__auto___295144 = (0);
while(true){
if((i__36261__auto___295144 < len__36260__auto___295142)){
args295129.push((arguments[i__36261__auto___295144]));

var G__295145 = (i__36261__auto___295144 + (1));
i__36261__auto___295144 = G__295145;
continue;
} else {
}
break;
}

var G__295134 = args295129.length;
switch (G__295134) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args295129.length)].join('')));

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
var args295153 = [];
var len__36260__auto___295167 = arguments.length;
var i__36261__auto___295168 = (0);
while(true){
if((i__36261__auto___295168 < len__36260__auto___295167)){
args295153.push((arguments[i__36261__auto___295168]));

var G__295169 = (i__36261__auto___295168 + (1));
i__36261__auto___295168 = G__295169;
continue;
} else {
}
break;
}

var G__295160 = args295153.length;
switch (G__295160) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args295153.length)].join('')));

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
var args295179 = [];
var len__36260__auto___295245 = arguments.length;
var i__36261__auto___295246 = (0);
while(true){
if((i__36261__auto___295246 < len__36260__auto___295245)){
args295179.push((arguments[i__36261__auto___295246]));

var G__295250 = (i__36261__auto___295246 + (1));
i__36261__auto___295246 = G__295250;
continue;
} else {
}
break;
}

var G__295182 = args295179.length;
switch (G__295182) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args295179.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38100__auto___295257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___295257,tc,fc){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___295257,tc,fc){
return (function (state_295208){
var state_val_295209 = (state_295208[(1)]);
if((state_val_295209 === (7))){
var inst_295204 = (state_295208[(2)]);
var state_295208__$1 = state_295208;
var statearr_295214_295261 = state_295208__$1;
(statearr_295214_295261[(2)] = inst_295204);

(statearr_295214_295261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295209 === (1))){
var state_295208__$1 = state_295208;
var statearr_295215_295262 = state_295208__$1;
(statearr_295215_295262[(2)] = null);

(statearr_295215_295262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295209 === (4))){
var inst_295185 = (state_295208[(7)]);
var inst_295185__$1 = (state_295208[(2)]);
var inst_295186 = (inst_295185__$1 == null);
var state_295208__$1 = (function (){var statearr_295217 = state_295208;
(statearr_295217[(7)] = inst_295185__$1);

return statearr_295217;
})();
if(cljs.core.truth_(inst_295186)){
var statearr_295218_295269 = state_295208__$1;
(statearr_295218_295269[(1)] = (5));

} else {
var statearr_295219_295270 = state_295208__$1;
(statearr_295219_295270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295209 === (13))){
var state_295208__$1 = state_295208;
var statearr_295220_295274 = state_295208__$1;
(statearr_295220_295274[(2)] = null);

(statearr_295220_295274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295209 === (6))){
var inst_295185 = (state_295208[(7)]);
var inst_295191 = p.call(null,inst_295185);
var state_295208__$1 = state_295208;
if(cljs.core.truth_(inst_295191)){
var statearr_295221_295277 = state_295208__$1;
(statearr_295221_295277[(1)] = (9));

} else {
var statearr_295222_295278 = state_295208__$1;
(statearr_295222_295278[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295209 === (3))){
var inst_295206 = (state_295208[(2)]);
var state_295208__$1 = state_295208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_295208__$1,inst_295206);
} else {
if((state_val_295209 === (12))){
var state_295208__$1 = state_295208;
var statearr_295223_295281 = state_295208__$1;
(statearr_295223_295281[(2)] = null);

(statearr_295223_295281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295209 === (2))){
var state_295208__$1 = state_295208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_295208__$1,(4),ch);
} else {
if((state_val_295209 === (11))){
var inst_295185 = (state_295208[(7)]);
var inst_295195 = (state_295208[(2)]);
var state_295208__$1 = state_295208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_295208__$1,(8),inst_295195,inst_295185);
} else {
if((state_val_295209 === (9))){
var state_295208__$1 = state_295208;
var statearr_295224_295285 = state_295208__$1;
(statearr_295224_295285[(2)] = tc);

(statearr_295224_295285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295209 === (5))){
var inst_295188 = cljs.core.async.close_BANG_.call(null,tc);
var inst_295189 = cljs.core.async.close_BANG_.call(null,fc);
var state_295208__$1 = (function (){var statearr_295225 = state_295208;
(statearr_295225[(8)] = inst_295188);

return statearr_295225;
})();
var statearr_295226_295290 = state_295208__$1;
(statearr_295226_295290[(2)] = inst_295189);

(statearr_295226_295290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295209 === (14))){
var inst_295202 = (state_295208[(2)]);
var state_295208__$1 = state_295208;
var statearr_295227_295292 = state_295208__$1;
(statearr_295227_295292[(2)] = inst_295202);

(statearr_295227_295292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295209 === (10))){
var state_295208__$1 = state_295208;
var statearr_295229_295295 = state_295208__$1;
(statearr_295229_295295[(2)] = fc);

(statearr_295229_295295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295209 === (8))){
var inst_295197 = (state_295208[(2)]);
var state_295208__$1 = state_295208;
if(cljs.core.truth_(inst_295197)){
var statearr_295231_295299 = state_295208__$1;
(statearr_295231_295299[(1)] = (12));

} else {
var statearr_295232_295301 = state_295208__$1;
(statearr_295232_295301[(1)] = (13));

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
});})(c__38100__auto___295257,tc,fc))
;
return ((function (switch__38079__auto__,c__38100__auto___295257,tc,fc){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_295237 = [null,null,null,null,null,null,null,null,null];
(statearr_295237[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_295237[(1)] = (1));

return statearr_295237;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_295208){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_295208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e295238){if((e295238 instanceof Object)){
var ex__38083__auto__ = e295238;
var statearr_295239_295309 = state_295208;
(statearr_295239_295309[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_295208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e295238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__295310 = state_295208;
state_295208 = G__295310;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_295208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_295208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___295257,tc,fc))
})();
var state__38102__auto__ = (function (){var statearr_295241 = f__38101__auto__.call(null);
(statearr_295241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___295257);

return statearr_295241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___295257,tc,fc))
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
var c__38100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto__){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto__){
return (function (state_295366){
var state_val_295367 = (state_295366[(1)]);
if((state_val_295367 === (1))){
var inst_295352 = init;
var state_295366__$1 = (function (){var statearr_295370 = state_295366;
(statearr_295370[(7)] = inst_295352);

return statearr_295370;
})();
var statearr_295371_295396 = state_295366__$1;
(statearr_295371_295396[(2)] = null);

(statearr_295371_295396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295367 === (2))){
var state_295366__$1 = state_295366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_295366__$1,(4),ch);
} else {
if((state_val_295367 === (3))){
var inst_295364 = (state_295366[(2)]);
var state_295366__$1 = state_295366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_295366__$1,inst_295364);
} else {
if((state_val_295367 === (4))){
var inst_295355 = (state_295366[(8)]);
var inst_295355__$1 = (state_295366[(2)]);
var inst_295356 = (inst_295355__$1 == null);
var state_295366__$1 = (function (){var statearr_295373 = state_295366;
(statearr_295373[(8)] = inst_295355__$1);

return statearr_295373;
})();
if(cljs.core.truth_(inst_295356)){
var statearr_295374_295400 = state_295366__$1;
(statearr_295374_295400[(1)] = (5));

} else {
var statearr_295375_295401 = state_295366__$1;
(statearr_295375_295401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295367 === (5))){
var inst_295352 = (state_295366[(7)]);
var state_295366__$1 = state_295366;
var statearr_295376_295406 = state_295366__$1;
(statearr_295376_295406[(2)] = inst_295352);

(statearr_295376_295406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295367 === (6))){
var inst_295352 = (state_295366[(7)]);
var inst_295355 = (state_295366[(8)]);
var inst_295359 = f.call(null,inst_295352,inst_295355);
var inst_295352__$1 = inst_295359;
var state_295366__$1 = (function (){var statearr_295377 = state_295366;
(statearr_295377[(7)] = inst_295352__$1);

return statearr_295377;
})();
var statearr_295378_295410 = state_295366__$1;
(statearr_295378_295410[(2)] = null);

(statearr_295378_295410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295367 === (7))){
var inst_295362 = (state_295366[(2)]);
var state_295366__$1 = state_295366;
var statearr_295387_295411 = state_295366__$1;
(statearr_295387_295411[(2)] = inst_295362);

(statearr_295387_295411[(1)] = (3));


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
});})(c__38100__auto__))
;
return ((function (switch__38079__auto__,c__38100__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38080__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38080__auto____0 = (function (){
var statearr_295392 = [null,null,null,null,null,null,null,null,null];
(statearr_295392[(0)] = cljs$core$async$reduce_$_state_machine__38080__auto__);

(statearr_295392[(1)] = (1));

return statearr_295392;
});
var cljs$core$async$reduce_$_state_machine__38080__auto____1 = (function (state_295366){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_295366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e295393){if((e295393 instanceof Object)){
var ex__38083__auto__ = e295393;
var statearr_295394_295415 = state_295366;
(statearr_295394_295415[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_295366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e295393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__295417 = state_295366;
state_295366 = G__295417;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38080__auto__ = function(state_295366){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38080__auto____1.call(this,state_295366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38080__auto____0;
cljs$core$async$reduce_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38080__auto____1;
return cljs$core$async$reduce_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_295395 = f__38101__auto__.call(null);
(statearr_295395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_295395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto__))
);

return c__38100__auto__;
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
var args295425 = [];
var len__36260__auto___295493 = arguments.length;
var i__36261__auto___295494 = (0);
while(true){
if((i__36261__auto___295494 < len__36260__auto___295493)){
args295425.push((arguments[i__36261__auto___295494]));

var G__295495 = (i__36261__auto___295494 + (1));
i__36261__auto___295494 = G__295495;
continue;
} else {
}
break;
}

var G__295431 = args295425.length;
switch (G__295431) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args295425.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto__){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto__){
return (function (state_295456){
var state_val_295457 = (state_295456[(1)]);
if((state_val_295457 === (7))){
var inst_295438 = (state_295456[(2)]);
var state_295456__$1 = state_295456;
var statearr_295458_295500 = state_295456__$1;
(statearr_295458_295500[(2)] = inst_295438);

(statearr_295458_295500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295457 === (1))){
var inst_295432 = cljs.core.seq.call(null,coll);
var inst_295433 = inst_295432;
var state_295456__$1 = (function (){var statearr_295460 = state_295456;
(statearr_295460[(7)] = inst_295433);

return statearr_295460;
})();
var statearr_295462_295502 = state_295456__$1;
(statearr_295462_295502[(2)] = null);

(statearr_295462_295502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295457 === (4))){
var inst_295433 = (state_295456[(7)]);
var inst_295436 = cljs.core.first.call(null,inst_295433);
var state_295456__$1 = state_295456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_295456__$1,(7),ch,inst_295436);
} else {
if((state_val_295457 === (13))){
var inst_295450 = (state_295456[(2)]);
var state_295456__$1 = state_295456;
var statearr_295468_295506 = state_295456__$1;
(statearr_295468_295506[(2)] = inst_295450);

(statearr_295468_295506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295457 === (6))){
var inst_295441 = (state_295456[(2)]);
var state_295456__$1 = state_295456;
if(cljs.core.truth_(inst_295441)){
var statearr_295469_295508 = state_295456__$1;
(statearr_295469_295508[(1)] = (8));

} else {
var statearr_295470_295509 = state_295456__$1;
(statearr_295470_295509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295457 === (3))){
var inst_295454 = (state_295456[(2)]);
var state_295456__$1 = state_295456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_295456__$1,inst_295454);
} else {
if((state_val_295457 === (12))){
var state_295456__$1 = state_295456;
var statearr_295471_295510 = state_295456__$1;
(statearr_295471_295510[(2)] = null);

(statearr_295471_295510[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295457 === (2))){
var inst_295433 = (state_295456[(7)]);
var state_295456__$1 = state_295456;
if(cljs.core.truth_(inst_295433)){
var statearr_295472_295513 = state_295456__$1;
(statearr_295472_295513[(1)] = (4));

} else {
var statearr_295473_295515 = state_295456__$1;
(statearr_295473_295515[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295457 === (11))){
var inst_295447 = cljs.core.async.close_BANG_.call(null,ch);
var state_295456__$1 = state_295456;
var statearr_295474_295516 = state_295456__$1;
(statearr_295474_295516[(2)] = inst_295447);

(statearr_295474_295516[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295457 === (9))){
var state_295456__$1 = state_295456;
if(cljs.core.truth_(close_QMARK_)){
var statearr_295475_295517 = state_295456__$1;
(statearr_295475_295517[(1)] = (11));

} else {
var statearr_295476_295518 = state_295456__$1;
(statearr_295476_295518[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295457 === (5))){
var inst_295433 = (state_295456[(7)]);
var state_295456__$1 = state_295456;
var statearr_295477_295519 = state_295456__$1;
(statearr_295477_295519[(2)] = inst_295433);

(statearr_295477_295519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295457 === (10))){
var inst_295452 = (state_295456[(2)]);
var state_295456__$1 = state_295456;
var statearr_295478_295522 = state_295456__$1;
(statearr_295478_295522[(2)] = inst_295452);

(statearr_295478_295522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295457 === (8))){
var inst_295433 = (state_295456[(7)]);
var inst_295443 = cljs.core.next.call(null,inst_295433);
var inst_295433__$1 = inst_295443;
var state_295456__$1 = (function (){var statearr_295479 = state_295456;
(statearr_295479[(7)] = inst_295433__$1);

return statearr_295479;
})();
var statearr_295480_295525 = state_295456__$1;
(statearr_295480_295525[(2)] = null);

(statearr_295480_295525[(1)] = (2));


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
});})(c__38100__auto__))
;
return ((function (switch__38079__auto__,c__38100__auto__){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_295486 = [null,null,null,null,null,null,null,null];
(statearr_295486[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_295486[(1)] = (1));

return statearr_295486;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_295456){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_295456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e295487){if((e295487 instanceof Object)){
var ex__38083__auto__ = e295487;
var statearr_295489_295529 = state_295456;
(statearr_295489_295529[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_295456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e295487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__295533 = state_295456;
state_295456 = G__295533;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_295456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_295456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_295491 = f__38101__auto__.call(null);
(statearr_295491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_295491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto__))
);

return c__38100__auto__;
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
var x__35854__auto__ = (((_ == null))?null:_);
var m__35855__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,_);
} else {
var m__35855__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,_);
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
var x__35854__auto__ = (((m == null))?null:m);
var m__35855__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__35855__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__35854__auto__ = (((m == null))?null:m);
var m__35855__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,m,ch);
} else {
var m__35855__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,m,ch);
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
var x__35854__auto__ = (((m == null))?null:m);
var m__35855__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,m);
} else {
var m__35855__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async295807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async295807 = (function (mult,ch,cs,meta295808){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta295808 = meta295808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async295807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_295809,meta295808__$1){
var self__ = this;
var _295809__$1 = this;
return (new cljs.core.async.t_cljs$core$async295807(self__.mult,self__.ch,self__.cs,meta295808__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async295807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_295809){
var self__ = this;
var _295809__$1 = this;
return self__.meta295808;
});})(cs))
;

cljs.core.async.t_cljs$core$async295807.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async295807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async295807.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async295807.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async295807.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async295807.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async295807.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta295808","meta295808",341337707,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async295807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async295807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async295807";

cljs.core.async.t_cljs$core$async295807.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async295807");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async295807 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async295807(mult__$1,ch__$1,cs__$1,meta295808){
return (new cljs.core.async.t_cljs$core$async295807(mult__$1,ch__$1,cs__$1,meta295808));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async295807(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38100__auto___296086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___296086,cs,m,dchan,dctr,done){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___296086,cs,m,dchan,dctr,done){
return (function (state_295949){
var state_val_295950 = (state_295949[(1)]);
if((state_val_295950 === (7))){
var inst_295944 = (state_295949[(2)]);
var state_295949__$1 = state_295949;
var statearr_295951_296090 = state_295949__$1;
(statearr_295951_296090[(2)] = inst_295944);

(statearr_295951_296090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (20))){
var inst_295847 = (state_295949[(7)]);
var inst_295857 = cljs.core.first.call(null,inst_295847);
var inst_295858 = cljs.core.nth.call(null,inst_295857,(0),null);
var inst_295859 = cljs.core.nth.call(null,inst_295857,(1),null);
var state_295949__$1 = (function (){var statearr_295952 = state_295949;
(statearr_295952[(8)] = inst_295858);

return statearr_295952;
})();
if(cljs.core.truth_(inst_295859)){
var statearr_295953_296091 = state_295949__$1;
(statearr_295953_296091[(1)] = (22));

} else {
var statearr_295954_296092 = state_295949__$1;
(statearr_295954_296092[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (27))){
var inst_295889 = (state_295949[(9)]);
var inst_295887 = (state_295949[(10)]);
var inst_295815 = (state_295949[(11)]);
var inst_295894 = (state_295949[(12)]);
var inst_295894__$1 = cljs.core._nth.call(null,inst_295887,inst_295889);
var inst_295895 = cljs.core.async.put_BANG_.call(null,inst_295894__$1,inst_295815,done);
var state_295949__$1 = (function (){var statearr_295955 = state_295949;
(statearr_295955[(12)] = inst_295894__$1);

return statearr_295955;
})();
if(cljs.core.truth_(inst_295895)){
var statearr_295957_296097 = state_295949__$1;
(statearr_295957_296097[(1)] = (30));

} else {
var statearr_295958_296098 = state_295949__$1;
(statearr_295958_296098[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (1))){
var state_295949__$1 = state_295949;
var statearr_295960_296099 = state_295949__$1;
(statearr_295960_296099[(2)] = null);

(statearr_295960_296099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (24))){
var inst_295847 = (state_295949[(7)]);
var inst_295864 = (state_295949[(2)]);
var inst_295865 = cljs.core.next.call(null,inst_295847);
var inst_295826 = inst_295865;
var inst_295827 = null;
var inst_295828 = (0);
var inst_295829 = (0);
var state_295949__$1 = (function (){var statearr_295962 = state_295949;
(statearr_295962[(13)] = inst_295826);

(statearr_295962[(14)] = inst_295864);

(statearr_295962[(15)] = inst_295828);

(statearr_295962[(16)] = inst_295829);

(statearr_295962[(17)] = inst_295827);

return statearr_295962;
})();
var statearr_295963_296103 = state_295949__$1;
(statearr_295963_296103[(2)] = null);

(statearr_295963_296103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (39))){
var state_295949__$1 = state_295949;
var statearr_295967_296105 = state_295949__$1;
(statearr_295967_296105[(2)] = null);

(statearr_295967_296105[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (4))){
var inst_295815 = (state_295949[(11)]);
var inst_295815__$1 = (state_295949[(2)]);
var inst_295816 = (inst_295815__$1 == null);
var state_295949__$1 = (function (){var statearr_295968 = state_295949;
(statearr_295968[(11)] = inst_295815__$1);

return statearr_295968;
})();
if(cljs.core.truth_(inst_295816)){
var statearr_295971_296106 = state_295949__$1;
(statearr_295971_296106[(1)] = (5));

} else {
var statearr_295972_296107 = state_295949__$1;
(statearr_295972_296107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (15))){
var inst_295826 = (state_295949[(13)]);
var inst_295828 = (state_295949[(15)]);
var inst_295829 = (state_295949[(16)]);
var inst_295827 = (state_295949[(17)]);
var inst_295843 = (state_295949[(2)]);
var inst_295844 = (inst_295829 + (1));
var tmp295964 = inst_295826;
var tmp295965 = inst_295828;
var tmp295966 = inst_295827;
var inst_295826__$1 = tmp295964;
var inst_295827__$1 = tmp295966;
var inst_295828__$1 = tmp295965;
var inst_295829__$1 = inst_295844;
var state_295949__$1 = (function (){var statearr_295974 = state_295949;
(statearr_295974[(13)] = inst_295826__$1);

(statearr_295974[(15)] = inst_295828__$1);

(statearr_295974[(16)] = inst_295829__$1);

(statearr_295974[(17)] = inst_295827__$1);

(statearr_295974[(18)] = inst_295843);

return statearr_295974;
})();
var statearr_295975_296108 = state_295949__$1;
(statearr_295975_296108[(2)] = null);

(statearr_295975_296108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (21))){
var inst_295868 = (state_295949[(2)]);
var state_295949__$1 = state_295949;
var statearr_295979_296109 = state_295949__$1;
(statearr_295979_296109[(2)] = inst_295868);

(statearr_295979_296109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (31))){
var inst_295894 = (state_295949[(12)]);
var inst_295898 = done.call(null,null);
var inst_295899 = cljs.core.async.untap_STAR_.call(null,m,inst_295894);
var state_295949__$1 = (function (){var statearr_295986 = state_295949;
(statearr_295986[(19)] = inst_295898);

return statearr_295986;
})();
var statearr_295987_296110 = state_295949__$1;
(statearr_295987_296110[(2)] = inst_295899);

(statearr_295987_296110[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (32))){
var inst_295889 = (state_295949[(9)]);
var inst_295887 = (state_295949[(10)]);
var inst_295888 = (state_295949[(20)]);
var inst_295886 = (state_295949[(21)]);
var inst_295901 = (state_295949[(2)]);
var inst_295902 = (inst_295889 + (1));
var tmp295976 = inst_295887;
var tmp295977 = inst_295888;
var tmp295978 = inst_295886;
var inst_295886__$1 = tmp295978;
var inst_295887__$1 = tmp295976;
var inst_295888__$1 = tmp295977;
var inst_295889__$1 = inst_295902;
var state_295949__$1 = (function (){var statearr_295990 = state_295949;
(statearr_295990[(9)] = inst_295889__$1);

(statearr_295990[(10)] = inst_295887__$1);

(statearr_295990[(20)] = inst_295888__$1);

(statearr_295990[(21)] = inst_295886__$1);

(statearr_295990[(22)] = inst_295901);

return statearr_295990;
})();
var statearr_295992_296111 = state_295949__$1;
(statearr_295992_296111[(2)] = null);

(statearr_295992_296111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (40))){
var inst_295914 = (state_295949[(23)]);
var inst_295919 = done.call(null,null);
var inst_295920 = cljs.core.async.untap_STAR_.call(null,m,inst_295914);
var state_295949__$1 = (function (){var statearr_295993 = state_295949;
(statearr_295993[(24)] = inst_295919);

return statearr_295993;
})();
var statearr_295994_296112 = state_295949__$1;
(statearr_295994_296112[(2)] = inst_295920);

(statearr_295994_296112[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (33))){
var inst_295905 = (state_295949[(25)]);
var inst_295907 = cljs.core.chunked_seq_QMARK_.call(null,inst_295905);
var state_295949__$1 = state_295949;
if(inst_295907){
var statearr_295995_296113 = state_295949__$1;
(statearr_295995_296113[(1)] = (36));

} else {
var statearr_295996_296114 = state_295949__$1;
(statearr_295996_296114[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (13))){
var inst_295837 = (state_295949[(26)]);
var inst_295840 = cljs.core.async.close_BANG_.call(null,inst_295837);
var state_295949__$1 = state_295949;
var statearr_295997_296115 = state_295949__$1;
(statearr_295997_296115[(2)] = inst_295840);

(statearr_295997_296115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (22))){
var inst_295858 = (state_295949[(8)]);
var inst_295861 = cljs.core.async.close_BANG_.call(null,inst_295858);
var state_295949__$1 = state_295949;
var statearr_295998_296116 = state_295949__$1;
(statearr_295998_296116[(2)] = inst_295861);

(statearr_295998_296116[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (36))){
var inst_295905 = (state_295949[(25)]);
var inst_295909 = cljs.core.chunk_first.call(null,inst_295905);
var inst_295910 = cljs.core.chunk_rest.call(null,inst_295905);
var inst_295911 = cljs.core.count.call(null,inst_295909);
var inst_295886 = inst_295910;
var inst_295887 = inst_295909;
var inst_295888 = inst_295911;
var inst_295889 = (0);
var state_295949__$1 = (function (){var statearr_295999 = state_295949;
(statearr_295999[(9)] = inst_295889);

(statearr_295999[(10)] = inst_295887);

(statearr_295999[(20)] = inst_295888);

(statearr_295999[(21)] = inst_295886);

return statearr_295999;
})();
var statearr_296000_296120 = state_295949__$1;
(statearr_296000_296120[(2)] = null);

(statearr_296000_296120[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (41))){
var inst_295905 = (state_295949[(25)]);
var inst_295922 = (state_295949[(2)]);
var inst_295923 = cljs.core.next.call(null,inst_295905);
var inst_295886 = inst_295923;
var inst_295887 = null;
var inst_295888 = (0);
var inst_295889 = (0);
var state_295949__$1 = (function (){var statearr_296001 = state_295949;
(statearr_296001[(9)] = inst_295889);

(statearr_296001[(10)] = inst_295887);

(statearr_296001[(20)] = inst_295888);

(statearr_296001[(21)] = inst_295886);

(statearr_296001[(27)] = inst_295922);

return statearr_296001;
})();
var statearr_296004_296127 = state_295949__$1;
(statearr_296004_296127[(2)] = null);

(statearr_296004_296127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (43))){
var state_295949__$1 = state_295949;
var statearr_296005_296128 = state_295949__$1;
(statearr_296005_296128[(2)] = null);

(statearr_296005_296128[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (29))){
var inst_295932 = (state_295949[(2)]);
var state_295949__$1 = state_295949;
var statearr_296007_296129 = state_295949__$1;
(statearr_296007_296129[(2)] = inst_295932);

(statearr_296007_296129[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (44))){
var inst_295941 = (state_295949[(2)]);
var state_295949__$1 = (function (){var statearr_296008 = state_295949;
(statearr_296008[(28)] = inst_295941);

return statearr_296008;
})();
var statearr_296009_296130 = state_295949__$1;
(statearr_296009_296130[(2)] = null);

(statearr_296009_296130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (6))){
var inst_295878 = (state_295949[(29)]);
var inst_295877 = cljs.core.deref.call(null,cs);
var inst_295878__$1 = cljs.core.keys.call(null,inst_295877);
var inst_295879 = cljs.core.count.call(null,inst_295878__$1);
var inst_295880 = cljs.core.reset_BANG_.call(null,dctr,inst_295879);
var inst_295885 = cljs.core.seq.call(null,inst_295878__$1);
var inst_295886 = inst_295885;
var inst_295887 = null;
var inst_295888 = (0);
var inst_295889 = (0);
var state_295949__$1 = (function (){var statearr_296010 = state_295949;
(statearr_296010[(30)] = inst_295880);

(statearr_296010[(9)] = inst_295889);

(statearr_296010[(10)] = inst_295887);

(statearr_296010[(20)] = inst_295888);

(statearr_296010[(29)] = inst_295878__$1);

(statearr_296010[(21)] = inst_295886);

return statearr_296010;
})();
var statearr_296011_296135 = state_295949__$1;
(statearr_296011_296135[(2)] = null);

(statearr_296011_296135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (28))){
var inst_295905 = (state_295949[(25)]);
var inst_295886 = (state_295949[(21)]);
var inst_295905__$1 = cljs.core.seq.call(null,inst_295886);
var state_295949__$1 = (function (){var statearr_296012 = state_295949;
(statearr_296012[(25)] = inst_295905__$1);

return statearr_296012;
})();
if(inst_295905__$1){
var statearr_296013_296137 = state_295949__$1;
(statearr_296013_296137[(1)] = (33));

} else {
var statearr_296014_296138 = state_295949__$1;
(statearr_296014_296138[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (25))){
var inst_295889 = (state_295949[(9)]);
var inst_295888 = (state_295949[(20)]);
var inst_295891 = (inst_295889 < inst_295888);
var inst_295892 = inst_295891;
var state_295949__$1 = state_295949;
if(cljs.core.truth_(inst_295892)){
var statearr_296019_296139 = state_295949__$1;
(statearr_296019_296139[(1)] = (27));

} else {
var statearr_296020_296140 = state_295949__$1;
(statearr_296020_296140[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (34))){
var state_295949__$1 = state_295949;
var statearr_296021_296141 = state_295949__$1;
(statearr_296021_296141[(2)] = null);

(statearr_296021_296141[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (17))){
var state_295949__$1 = state_295949;
var statearr_296022_296145 = state_295949__$1;
(statearr_296022_296145[(2)] = null);

(statearr_296022_296145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (3))){
var inst_295946 = (state_295949[(2)]);
var state_295949__$1 = state_295949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_295949__$1,inst_295946);
} else {
if((state_val_295950 === (12))){
var inst_295873 = (state_295949[(2)]);
var state_295949__$1 = state_295949;
var statearr_296025_296146 = state_295949__$1;
(statearr_296025_296146[(2)] = inst_295873);

(statearr_296025_296146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (2))){
var state_295949__$1 = state_295949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_295949__$1,(4),ch);
} else {
if((state_val_295950 === (23))){
var state_295949__$1 = state_295949;
var statearr_296027_296147 = state_295949__$1;
(statearr_296027_296147[(2)] = null);

(statearr_296027_296147[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (35))){
var inst_295930 = (state_295949[(2)]);
var state_295949__$1 = state_295949;
var statearr_296028_296148 = state_295949__$1;
(statearr_296028_296148[(2)] = inst_295930);

(statearr_296028_296148[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (19))){
var inst_295847 = (state_295949[(7)]);
var inst_295851 = cljs.core.chunk_first.call(null,inst_295847);
var inst_295852 = cljs.core.chunk_rest.call(null,inst_295847);
var inst_295853 = cljs.core.count.call(null,inst_295851);
var inst_295826 = inst_295852;
var inst_295827 = inst_295851;
var inst_295828 = inst_295853;
var inst_295829 = (0);
var state_295949__$1 = (function (){var statearr_296029 = state_295949;
(statearr_296029[(13)] = inst_295826);

(statearr_296029[(15)] = inst_295828);

(statearr_296029[(16)] = inst_295829);

(statearr_296029[(17)] = inst_295827);

return statearr_296029;
})();
var statearr_296030_296149 = state_295949__$1;
(statearr_296030_296149[(2)] = null);

(statearr_296030_296149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (11))){
var inst_295826 = (state_295949[(13)]);
var inst_295847 = (state_295949[(7)]);
var inst_295847__$1 = cljs.core.seq.call(null,inst_295826);
var state_295949__$1 = (function (){var statearr_296032 = state_295949;
(statearr_296032[(7)] = inst_295847__$1);

return statearr_296032;
})();
if(inst_295847__$1){
var statearr_296033_296151 = state_295949__$1;
(statearr_296033_296151[(1)] = (16));

} else {
var statearr_296034_296152 = state_295949__$1;
(statearr_296034_296152[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (9))){
var inst_295875 = (state_295949[(2)]);
var state_295949__$1 = state_295949;
var statearr_296035_296153 = state_295949__$1;
(statearr_296035_296153[(2)] = inst_295875);

(statearr_296035_296153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (5))){
var inst_295823 = cljs.core.deref.call(null,cs);
var inst_295825 = cljs.core.seq.call(null,inst_295823);
var inst_295826 = inst_295825;
var inst_295827 = null;
var inst_295828 = (0);
var inst_295829 = (0);
var state_295949__$1 = (function (){var statearr_296039 = state_295949;
(statearr_296039[(13)] = inst_295826);

(statearr_296039[(15)] = inst_295828);

(statearr_296039[(16)] = inst_295829);

(statearr_296039[(17)] = inst_295827);

return statearr_296039;
})();
var statearr_296040_296155 = state_295949__$1;
(statearr_296040_296155[(2)] = null);

(statearr_296040_296155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (14))){
var state_295949__$1 = state_295949;
var statearr_296041_296156 = state_295949__$1;
(statearr_296041_296156[(2)] = null);

(statearr_296041_296156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (45))){
var inst_295938 = (state_295949[(2)]);
var state_295949__$1 = state_295949;
var statearr_296042_296157 = state_295949__$1;
(statearr_296042_296157[(2)] = inst_295938);

(statearr_296042_296157[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (26))){
var inst_295878 = (state_295949[(29)]);
var inst_295934 = (state_295949[(2)]);
var inst_295935 = cljs.core.seq.call(null,inst_295878);
var state_295949__$1 = (function (){var statearr_296043 = state_295949;
(statearr_296043[(31)] = inst_295934);

return statearr_296043;
})();
if(inst_295935){
var statearr_296044_296158 = state_295949__$1;
(statearr_296044_296158[(1)] = (42));

} else {
var statearr_296045_296159 = state_295949__$1;
(statearr_296045_296159[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (16))){
var inst_295847 = (state_295949[(7)]);
var inst_295849 = cljs.core.chunked_seq_QMARK_.call(null,inst_295847);
var state_295949__$1 = state_295949;
if(inst_295849){
var statearr_296046_296161 = state_295949__$1;
(statearr_296046_296161[(1)] = (19));

} else {
var statearr_296047_296162 = state_295949__$1;
(statearr_296047_296162[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (38))){
var inst_295926 = (state_295949[(2)]);
var state_295949__$1 = state_295949;
var statearr_296048_296163 = state_295949__$1;
(statearr_296048_296163[(2)] = inst_295926);

(statearr_296048_296163[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (30))){
var state_295949__$1 = state_295949;
var statearr_296049_296164 = state_295949__$1;
(statearr_296049_296164[(2)] = null);

(statearr_296049_296164[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (10))){
var inst_295829 = (state_295949[(16)]);
var inst_295827 = (state_295949[(17)]);
var inst_295835 = cljs.core._nth.call(null,inst_295827,inst_295829);
var inst_295837 = cljs.core.nth.call(null,inst_295835,(0),null);
var inst_295838 = cljs.core.nth.call(null,inst_295835,(1),null);
var state_295949__$1 = (function (){var statearr_296054 = state_295949;
(statearr_296054[(26)] = inst_295837);

return statearr_296054;
})();
if(cljs.core.truth_(inst_295838)){
var statearr_296056_296166 = state_295949__$1;
(statearr_296056_296166[(1)] = (13));

} else {
var statearr_296057_296167 = state_295949__$1;
(statearr_296057_296167[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (18))){
var inst_295871 = (state_295949[(2)]);
var state_295949__$1 = state_295949;
var statearr_296059_296168 = state_295949__$1;
(statearr_296059_296168[(2)] = inst_295871);

(statearr_296059_296168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (42))){
var state_295949__$1 = state_295949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_295949__$1,(45),dchan);
} else {
if((state_val_295950 === (37))){
var inst_295815 = (state_295949[(11)]);
var inst_295905 = (state_295949[(25)]);
var inst_295914 = (state_295949[(23)]);
var inst_295914__$1 = cljs.core.first.call(null,inst_295905);
var inst_295915 = cljs.core.async.put_BANG_.call(null,inst_295914__$1,inst_295815,done);
var state_295949__$1 = (function (){var statearr_296060 = state_295949;
(statearr_296060[(23)] = inst_295914__$1);

return statearr_296060;
})();
if(cljs.core.truth_(inst_295915)){
var statearr_296061_296169 = state_295949__$1;
(statearr_296061_296169[(1)] = (39));

} else {
var statearr_296062_296170 = state_295949__$1;
(statearr_296062_296170[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_295950 === (8))){
var inst_295828 = (state_295949[(15)]);
var inst_295829 = (state_295949[(16)]);
var inst_295831 = (inst_295829 < inst_295828);
var inst_295832 = inst_295831;
var state_295949__$1 = state_295949;
if(cljs.core.truth_(inst_295832)){
var statearr_296063_296171 = state_295949__$1;
(statearr_296063_296171[(1)] = (10));

} else {
var statearr_296064_296172 = state_295949__$1;
(statearr_296064_296172[(1)] = (11));

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
});})(c__38100__auto___296086,cs,m,dchan,dctr,done))
;
return ((function (switch__38079__auto__,c__38100__auto___296086,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38080__auto__ = null;
var cljs$core$async$mult_$_state_machine__38080__auto____0 = (function (){
var statearr_296070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_296070[(0)] = cljs$core$async$mult_$_state_machine__38080__auto__);

(statearr_296070[(1)] = (1));

return statearr_296070;
});
var cljs$core$async$mult_$_state_machine__38080__auto____1 = (function (state_295949){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_295949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e296071){if((e296071 instanceof Object)){
var ex__38083__auto__ = e296071;
var statearr_296073_296173 = state_295949;
(statearr_296073_296173[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_295949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296174 = state_295949;
state_295949 = G__296174;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38080__auto__ = function(state_295949){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38080__auto____1.call(this,state_295949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38080__auto____0;
cljs$core$async$mult_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38080__auto____1;
return cljs$core$async$mult_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___296086,cs,m,dchan,dctr,done))
})();
var state__38102__auto__ = (function (){var statearr_296074 = f__38101__auto__.call(null);
(statearr_296074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___296086);

return statearr_296074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___296086,cs,m,dchan,dctr,done))
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
var args296175 = [];
var len__36260__auto___296178 = arguments.length;
var i__36261__auto___296179 = (0);
while(true){
if((i__36261__auto___296179 < len__36260__auto___296178)){
args296175.push((arguments[i__36261__auto___296179]));

var G__296180 = (i__36261__auto___296179 + (1));
i__36261__auto___296179 = G__296180;
continue;
} else {
}
break;
}

var G__296177 = args296175.length;
switch (G__296177) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args296175.length)].join('')));

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
var x__35854__auto__ = (((m == null))?null:m);
var m__35855__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,m,ch);
} else {
var m__35855__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,m,ch);
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
var x__35854__auto__ = (((m == null))?null:m);
var m__35855__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,m,ch);
} else {
var m__35855__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,m,ch);
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
var x__35854__auto__ = (((m == null))?null:m);
var m__35855__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,m);
} else {
var m__35855__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,m);
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
var x__35854__auto__ = (((m == null))?null:m);
var m__35855__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,m,state_map);
} else {
var m__35855__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,m,state_map);
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
var x__35854__auto__ = (((m == null))?null:m);
var m__35855__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,m,mode);
} else {
var m__35855__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__36267__auto__ = [];
var len__36260__auto___296209 = arguments.length;
var i__36261__auto___296210 = (0);
while(true){
if((i__36261__auto___296210 < len__36260__auto___296209)){
args__36267__auto__.push((arguments[i__36261__auto___296210]));

var G__296211 = (i__36261__auto___296210 + (1));
i__36261__auto___296210 = G__296211;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((3) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36268__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__296203){
var map__296204 = p__296203;
var map__296204__$1 = ((((!((map__296204 == null)))?((((map__296204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__296204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__296204):map__296204);
var opts = map__296204__$1;
var statearr_296206_296212 = state;
(statearr_296206_296212[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__296204,map__296204__$1,opts){
return (function (val){
var statearr_296207_296213 = state;
(statearr_296207_296213[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__296204,map__296204__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_296208_296214 = state;
(statearr_296208_296214[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq296199){
var G__296200 = cljs.core.first.call(null,seq296199);
var seq296199__$1 = cljs.core.next.call(null,seq296199);
var G__296201 = cljs.core.first.call(null,seq296199__$1);
var seq296199__$2 = cljs.core.next.call(null,seq296199__$1);
var G__296202 = cljs.core.first.call(null,seq296199__$2);
var seq296199__$3 = cljs.core.next.call(null,seq296199__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__296200,G__296201,G__296202,seq296199__$3);
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
if(typeof cljs.core.async.t_cljs$core$async296382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async296382 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta296383){
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
this.meta296383 = meta296383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async296382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_296384,meta296383__$1){
var self__ = this;
var _296384__$1 = this;
return (new cljs.core.async.t_cljs$core$async296382(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta296383__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async296382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_296384){
var self__ = this;
var _296384__$1 = this;
return self__.meta296383;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async296382.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async296382.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async296382.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async296382.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async296382.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async296382.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async296382.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async296382.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async296382.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta296383","meta296383",1370564833,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async296382.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async296382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async296382";

cljs.core.async.t_cljs$core$async296382.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async296382");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async296382 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async296382(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta296383){
return (new cljs.core.async.t_cljs$core$async296382(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta296383));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async296382(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38100__auto___296563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___296563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___296563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_296482){
var state_val_296483 = (state_296482[(1)]);
if((state_val_296483 === (7))){
var inst_296400 = (state_296482[(2)]);
var state_296482__$1 = state_296482;
var statearr_296484_296565 = state_296482__$1;
(statearr_296484_296565[(2)] = inst_296400);

(statearr_296484_296565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (20))){
var inst_296412 = (state_296482[(7)]);
var state_296482__$1 = state_296482;
var statearr_296485_296566 = state_296482__$1;
(statearr_296485_296566[(2)] = inst_296412);

(statearr_296485_296566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (27))){
var state_296482__$1 = state_296482;
var statearr_296486_296567 = state_296482__$1;
(statearr_296486_296567[(2)] = null);

(statearr_296486_296567[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (1))){
var inst_296388 = (state_296482[(8)]);
var inst_296388__$1 = calc_state.call(null);
var inst_296390 = (inst_296388__$1 == null);
var inst_296391 = cljs.core.not.call(null,inst_296390);
var state_296482__$1 = (function (){var statearr_296487 = state_296482;
(statearr_296487[(8)] = inst_296388__$1);

return statearr_296487;
})();
if(inst_296391){
var statearr_296488_296568 = state_296482__$1;
(statearr_296488_296568[(1)] = (2));

} else {
var statearr_296489_296569 = state_296482__$1;
(statearr_296489_296569[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (24))){
var inst_296456 = (state_296482[(9)]);
var inst_296442 = (state_296482[(10)]);
var inst_296435 = (state_296482[(11)]);
var inst_296456__$1 = inst_296435.call(null,inst_296442);
var state_296482__$1 = (function (){var statearr_296490 = state_296482;
(statearr_296490[(9)] = inst_296456__$1);

return statearr_296490;
})();
if(cljs.core.truth_(inst_296456__$1)){
var statearr_296491_296571 = state_296482__$1;
(statearr_296491_296571[(1)] = (29));

} else {
var statearr_296492_296572 = state_296482__$1;
(statearr_296492_296572[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (4))){
var inst_296403 = (state_296482[(2)]);
var state_296482__$1 = state_296482;
if(cljs.core.truth_(inst_296403)){
var statearr_296493_296573 = state_296482__$1;
(statearr_296493_296573[(1)] = (8));

} else {
var statearr_296494_296574 = state_296482__$1;
(statearr_296494_296574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (15))){
var inst_296429 = (state_296482[(2)]);
var state_296482__$1 = state_296482;
if(cljs.core.truth_(inst_296429)){
var statearr_296495_296575 = state_296482__$1;
(statearr_296495_296575[(1)] = (19));

} else {
var statearr_296496_296576 = state_296482__$1;
(statearr_296496_296576[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (21))){
var inst_296434 = (state_296482[(12)]);
var inst_296434__$1 = (state_296482[(2)]);
var inst_296435 = cljs.core.get.call(null,inst_296434__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_296436 = cljs.core.get.call(null,inst_296434__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_296437 = cljs.core.get.call(null,inst_296434__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_296482__$1 = (function (){var statearr_296497 = state_296482;
(statearr_296497[(13)] = inst_296436);

(statearr_296497[(11)] = inst_296435);

(statearr_296497[(12)] = inst_296434__$1);

return statearr_296497;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_296482__$1,(22),inst_296437);
} else {
if((state_val_296483 === (31))){
var inst_296464 = (state_296482[(2)]);
var state_296482__$1 = state_296482;
if(cljs.core.truth_(inst_296464)){
var statearr_296498_296578 = state_296482__$1;
(statearr_296498_296578[(1)] = (32));

} else {
var statearr_296499_296579 = state_296482__$1;
(statearr_296499_296579[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (32))){
var inst_296441 = (state_296482[(14)]);
var state_296482__$1 = state_296482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296482__$1,(35),out,inst_296441);
} else {
if((state_val_296483 === (33))){
var inst_296434 = (state_296482[(12)]);
var inst_296412 = inst_296434;
var state_296482__$1 = (function (){var statearr_296500 = state_296482;
(statearr_296500[(7)] = inst_296412);

return statearr_296500;
})();
var statearr_296501_296580 = state_296482__$1;
(statearr_296501_296580[(2)] = null);

(statearr_296501_296580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (13))){
var inst_296412 = (state_296482[(7)]);
var inst_296419 = inst_296412.cljs$lang$protocol_mask$partition0$;
var inst_296420 = (inst_296419 & (64));
var inst_296421 = inst_296412.cljs$core$ISeq$;
var inst_296422 = (inst_296420) || (inst_296421);
var state_296482__$1 = state_296482;
if(cljs.core.truth_(inst_296422)){
var statearr_296502_296581 = state_296482__$1;
(statearr_296502_296581[(1)] = (16));

} else {
var statearr_296503_296582 = state_296482__$1;
(statearr_296503_296582[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (22))){
var inst_296442 = (state_296482[(10)]);
var inst_296441 = (state_296482[(14)]);
var inst_296440 = (state_296482[(2)]);
var inst_296441__$1 = cljs.core.nth.call(null,inst_296440,(0),null);
var inst_296442__$1 = cljs.core.nth.call(null,inst_296440,(1),null);
var inst_296443 = (inst_296441__$1 == null);
var inst_296444 = cljs.core._EQ_.call(null,inst_296442__$1,change);
var inst_296445 = (inst_296443) || (inst_296444);
var state_296482__$1 = (function (){var statearr_296504 = state_296482;
(statearr_296504[(10)] = inst_296442__$1);

(statearr_296504[(14)] = inst_296441__$1);

return statearr_296504;
})();
if(cljs.core.truth_(inst_296445)){
var statearr_296505_296583 = state_296482__$1;
(statearr_296505_296583[(1)] = (23));

} else {
var statearr_296506_296584 = state_296482__$1;
(statearr_296506_296584[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (36))){
var inst_296434 = (state_296482[(12)]);
var inst_296412 = inst_296434;
var state_296482__$1 = (function (){var statearr_296507 = state_296482;
(statearr_296507[(7)] = inst_296412);

return statearr_296507;
})();
var statearr_296508_296585 = state_296482__$1;
(statearr_296508_296585[(2)] = null);

(statearr_296508_296585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (29))){
var inst_296456 = (state_296482[(9)]);
var state_296482__$1 = state_296482;
var statearr_296509_296586 = state_296482__$1;
(statearr_296509_296586[(2)] = inst_296456);

(statearr_296509_296586[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (6))){
var state_296482__$1 = state_296482;
var statearr_296510_296587 = state_296482__$1;
(statearr_296510_296587[(2)] = false);

(statearr_296510_296587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (28))){
var inst_296452 = (state_296482[(2)]);
var inst_296453 = calc_state.call(null);
var inst_296412 = inst_296453;
var state_296482__$1 = (function (){var statearr_296511 = state_296482;
(statearr_296511[(15)] = inst_296452);

(statearr_296511[(7)] = inst_296412);

return statearr_296511;
})();
var statearr_296512_296588 = state_296482__$1;
(statearr_296512_296588[(2)] = null);

(statearr_296512_296588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (25))){
var inst_296478 = (state_296482[(2)]);
var state_296482__$1 = state_296482;
var statearr_296513_296589 = state_296482__$1;
(statearr_296513_296589[(2)] = inst_296478);

(statearr_296513_296589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (34))){
var inst_296476 = (state_296482[(2)]);
var state_296482__$1 = state_296482;
var statearr_296514_296590 = state_296482__$1;
(statearr_296514_296590[(2)] = inst_296476);

(statearr_296514_296590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (17))){
var state_296482__$1 = state_296482;
var statearr_296515_296591 = state_296482__$1;
(statearr_296515_296591[(2)] = false);

(statearr_296515_296591[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (3))){
var state_296482__$1 = state_296482;
var statearr_296516_296592 = state_296482__$1;
(statearr_296516_296592[(2)] = false);

(statearr_296516_296592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (12))){
var inst_296480 = (state_296482[(2)]);
var state_296482__$1 = state_296482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296482__$1,inst_296480);
} else {
if((state_val_296483 === (2))){
var inst_296388 = (state_296482[(8)]);
var inst_296393 = inst_296388.cljs$lang$protocol_mask$partition0$;
var inst_296394 = (inst_296393 & (64));
var inst_296395 = inst_296388.cljs$core$ISeq$;
var inst_296396 = (inst_296394) || (inst_296395);
var state_296482__$1 = state_296482;
if(cljs.core.truth_(inst_296396)){
var statearr_296517_296593 = state_296482__$1;
(statearr_296517_296593[(1)] = (5));

} else {
var statearr_296518_296594 = state_296482__$1;
(statearr_296518_296594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (23))){
var inst_296441 = (state_296482[(14)]);
var inst_296447 = (inst_296441 == null);
var state_296482__$1 = state_296482;
if(cljs.core.truth_(inst_296447)){
var statearr_296521_296595 = state_296482__$1;
(statearr_296521_296595[(1)] = (26));

} else {
var statearr_296522_296596 = state_296482__$1;
(statearr_296522_296596[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (35))){
var inst_296467 = (state_296482[(2)]);
var state_296482__$1 = state_296482;
if(cljs.core.truth_(inst_296467)){
var statearr_296524_296597 = state_296482__$1;
(statearr_296524_296597[(1)] = (36));

} else {
var statearr_296525_296598 = state_296482__$1;
(statearr_296525_296598[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (19))){
var inst_296412 = (state_296482[(7)]);
var inst_296431 = cljs.core.apply.call(null,cljs.core.hash_map,inst_296412);
var state_296482__$1 = state_296482;
var statearr_296526_296599 = state_296482__$1;
(statearr_296526_296599[(2)] = inst_296431);

(statearr_296526_296599[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (11))){
var inst_296412 = (state_296482[(7)]);
var inst_296416 = (inst_296412 == null);
var inst_296417 = cljs.core.not.call(null,inst_296416);
var state_296482__$1 = state_296482;
if(inst_296417){
var statearr_296527_296600 = state_296482__$1;
(statearr_296527_296600[(1)] = (13));

} else {
var statearr_296528_296601 = state_296482__$1;
(statearr_296528_296601[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (9))){
var inst_296388 = (state_296482[(8)]);
var state_296482__$1 = state_296482;
var statearr_296529_296602 = state_296482__$1;
(statearr_296529_296602[(2)] = inst_296388);

(statearr_296529_296602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (5))){
var state_296482__$1 = state_296482;
var statearr_296530_296603 = state_296482__$1;
(statearr_296530_296603[(2)] = true);

(statearr_296530_296603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (14))){
var state_296482__$1 = state_296482;
var statearr_296531_296604 = state_296482__$1;
(statearr_296531_296604[(2)] = false);

(statearr_296531_296604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (26))){
var inst_296442 = (state_296482[(10)]);
var inst_296449 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_296442);
var state_296482__$1 = state_296482;
var statearr_296538_296605 = state_296482__$1;
(statearr_296538_296605[(2)] = inst_296449);

(statearr_296538_296605[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (16))){
var state_296482__$1 = state_296482;
var statearr_296539_296606 = state_296482__$1;
(statearr_296539_296606[(2)] = true);

(statearr_296539_296606[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (38))){
var inst_296472 = (state_296482[(2)]);
var state_296482__$1 = state_296482;
var statearr_296540_296607 = state_296482__$1;
(statearr_296540_296607[(2)] = inst_296472);

(statearr_296540_296607[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (30))){
var inst_296436 = (state_296482[(13)]);
var inst_296442 = (state_296482[(10)]);
var inst_296435 = (state_296482[(11)]);
var inst_296459 = cljs.core.empty_QMARK_.call(null,inst_296435);
var inst_296460 = inst_296436.call(null,inst_296442);
var inst_296461 = cljs.core.not.call(null,inst_296460);
var inst_296462 = (inst_296459) && (inst_296461);
var state_296482__$1 = state_296482;
var statearr_296541_296610 = state_296482__$1;
(statearr_296541_296610[(2)] = inst_296462);

(statearr_296541_296610[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (10))){
var inst_296388 = (state_296482[(8)]);
var inst_296408 = (state_296482[(2)]);
var inst_296409 = cljs.core.get.call(null,inst_296408,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_296410 = cljs.core.get.call(null,inst_296408,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_296411 = cljs.core.get.call(null,inst_296408,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_296412 = inst_296388;
var state_296482__$1 = (function (){var statearr_296542 = state_296482;
(statearr_296542[(16)] = inst_296410);

(statearr_296542[(17)] = inst_296409);

(statearr_296542[(18)] = inst_296411);

(statearr_296542[(7)] = inst_296412);

return statearr_296542;
})();
var statearr_296543_296614 = state_296482__$1;
(statearr_296543_296614[(2)] = null);

(statearr_296543_296614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (18))){
var inst_296426 = (state_296482[(2)]);
var state_296482__$1 = state_296482;
var statearr_296544_296615 = state_296482__$1;
(statearr_296544_296615[(2)] = inst_296426);

(statearr_296544_296615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (37))){
var state_296482__$1 = state_296482;
var statearr_296545_296616 = state_296482__$1;
(statearr_296545_296616[(2)] = null);

(statearr_296545_296616[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296483 === (8))){
var inst_296388 = (state_296482[(8)]);
var inst_296405 = cljs.core.apply.call(null,cljs.core.hash_map,inst_296388);
var state_296482__$1 = state_296482;
var statearr_296546_296619 = state_296482__$1;
(statearr_296546_296619[(2)] = inst_296405);

(statearr_296546_296619[(1)] = (10));


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
});})(c__38100__auto___296563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38079__auto__,c__38100__auto___296563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38080__auto__ = null;
var cljs$core$async$mix_$_state_machine__38080__auto____0 = (function (){
var statearr_296550 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_296550[(0)] = cljs$core$async$mix_$_state_machine__38080__auto__);

(statearr_296550[(1)] = (1));

return statearr_296550;
});
var cljs$core$async$mix_$_state_machine__38080__auto____1 = (function (state_296482){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_296482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e296551){if((e296551 instanceof Object)){
var ex__38083__auto__ = e296551;
var statearr_296552_296623 = state_296482;
(statearr_296552_296623[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296624 = state_296482;
state_296482 = G__296624;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38080__auto__ = function(state_296482){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38080__auto____1.call(this,state_296482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38080__auto____0;
cljs$core$async$mix_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38080__auto____1;
return cljs$core$async$mix_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___296563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38102__auto__ = (function (){var statearr_296553 = f__38101__auto__.call(null);
(statearr_296553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___296563);

return statearr_296553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___296563,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__35854__auto__ = (((p == null))?null:p);
var m__35855__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__35855__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__35854__auto__ = (((p == null))?null:p);
var m__35855__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,p,v,ch);
} else {
var m__35855__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args296635 = [];
var len__36260__auto___296658 = arguments.length;
var i__36261__auto___296659 = (0);
while(true){
if((i__36261__auto___296659 < len__36260__auto___296658)){
args296635.push((arguments[i__36261__auto___296659]));

var G__296661 = (i__36261__auto___296659 + (1));
i__36261__auto___296659 = G__296661;
continue;
} else {
}
break;
}

var G__296637 = args296635.length;
switch (G__296637) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args296635.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__35854__auto__ = (((p == null))?null:p);
var m__35855__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,p);
} else {
var m__35855__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,p);
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
var x__35854__auto__ = (((p == null))?null:p);
var m__35855__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35854__auto__)]);
if(!((m__35855__auto__ == null))){
return m__35855__auto__.call(null,p,v);
} else {
var m__35855__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35855__auto____$1 == null))){
return m__35855__auto____$1.call(null,p,v);
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
var args296675 = [];
var len__36260__auto___296840 = arguments.length;
var i__36261__auto___296841 = (0);
while(true){
if((i__36261__auto___296841 < len__36260__auto___296840)){
args296675.push((arguments[i__36261__auto___296841]));

var G__296848 = (i__36261__auto___296841 + (1));
i__36261__auto___296841 = G__296848;
continue;
} else {
}
break;
}

var G__296677 = args296675.length;
switch (G__296677) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args296675.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__35191__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__35191__auto__,mults){
return (function (p1__296674_SHARP_){
if(cljs.core.truth_(p1__296674_SHARP_.call(null,topic))){
return p1__296674_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__296674_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35191__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async296682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async296682 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta296683){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta296683 = meta296683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async296682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_296684,meta296683__$1){
var self__ = this;
var _296684__$1 = this;
return (new cljs.core.async.t_cljs$core$async296682(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta296683__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async296682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_296684){
var self__ = this;
var _296684__$1 = this;
return self__.meta296683;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async296682.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async296682.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async296682.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async296682.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async296682.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async296682.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async296682.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async296682.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta296683","meta296683",578986085,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async296682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async296682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async296682";

cljs.core.async.t_cljs$core$async296682.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async296682");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async296682 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async296682(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta296683){
return (new cljs.core.async.t_cljs$core$async296682(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta296683));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async296682(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38100__auto___296875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___296875,mults,ensure_mult,p){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___296875,mults,ensure_mult,p){
return (function (state_296770){
var state_val_296771 = (state_296770[(1)]);
if((state_val_296771 === (7))){
var inst_296765 = (state_296770[(2)]);
var state_296770__$1 = state_296770;
var statearr_296773_296883 = state_296770__$1;
(statearr_296773_296883[(2)] = inst_296765);

(statearr_296773_296883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (20))){
var state_296770__$1 = state_296770;
var statearr_296774_296886 = state_296770__$1;
(statearr_296774_296886[(2)] = null);

(statearr_296774_296886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (1))){
var state_296770__$1 = state_296770;
var statearr_296776_296892 = state_296770__$1;
(statearr_296776_296892[(2)] = null);

(statearr_296776_296892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (24))){
var inst_296748 = (state_296770[(7)]);
var inst_296757 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_296748);
var state_296770__$1 = state_296770;
var statearr_296777_296895 = state_296770__$1;
(statearr_296777_296895[(2)] = inst_296757);

(statearr_296777_296895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (4))){
var inst_296698 = (state_296770[(8)]);
var inst_296698__$1 = (state_296770[(2)]);
var inst_296699 = (inst_296698__$1 == null);
var state_296770__$1 = (function (){var statearr_296779 = state_296770;
(statearr_296779[(8)] = inst_296698__$1);

return statearr_296779;
})();
if(cljs.core.truth_(inst_296699)){
var statearr_296780_296904 = state_296770__$1;
(statearr_296780_296904[(1)] = (5));

} else {
var statearr_296781_296905 = state_296770__$1;
(statearr_296781_296905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (15))){
var inst_296742 = (state_296770[(2)]);
var state_296770__$1 = state_296770;
var statearr_296783_296906 = state_296770__$1;
(statearr_296783_296906[(2)] = inst_296742);

(statearr_296783_296906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (21))){
var inst_296762 = (state_296770[(2)]);
var state_296770__$1 = (function (){var statearr_296784 = state_296770;
(statearr_296784[(9)] = inst_296762);

return statearr_296784;
})();
var statearr_296785_296908 = state_296770__$1;
(statearr_296785_296908[(2)] = null);

(statearr_296785_296908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (13))){
var inst_296723 = (state_296770[(10)]);
var inst_296725 = cljs.core.chunked_seq_QMARK_.call(null,inst_296723);
var state_296770__$1 = state_296770;
if(inst_296725){
var statearr_296786_296909 = state_296770__$1;
(statearr_296786_296909[(1)] = (16));

} else {
var statearr_296788_296910 = state_296770__$1;
(statearr_296788_296910[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (22))){
var inst_296754 = (state_296770[(2)]);
var state_296770__$1 = state_296770;
if(cljs.core.truth_(inst_296754)){
var statearr_296790_296911 = state_296770__$1;
(statearr_296790_296911[(1)] = (23));

} else {
var statearr_296791_296912 = state_296770__$1;
(statearr_296791_296912[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (6))){
var inst_296750 = (state_296770[(11)]);
var inst_296748 = (state_296770[(7)]);
var inst_296698 = (state_296770[(8)]);
var inst_296748__$1 = topic_fn.call(null,inst_296698);
var inst_296749 = cljs.core.deref.call(null,mults);
var inst_296750__$1 = cljs.core.get.call(null,inst_296749,inst_296748__$1);
var state_296770__$1 = (function (){var statearr_296798 = state_296770;
(statearr_296798[(11)] = inst_296750__$1);

(statearr_296798[(7)] = inst_296748__$1);

return statearr_296798;
})();
if(cljs.core.truth_(inst_296750__$1)){
var statearr_296800_296916 = state_296770__$1;
(statearr_296800_296916[(1)] = (19));

} else {
var statearr_296801_296917 = state_296770__$1;
(statearr_296801_296917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (25))){
var inst_296759 = (state_296770[(2)]);
var state_296770__$1 = state_296770;
var statearr_296802_296918 = state_296770__$1;
(statearr_296802_296918[(2)] = inst_296759);

(statearr_296802_296918[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (17))){
var inst_296723 = (state_296770[(10)]);
var inst_296733 = cljs.core.first.call(null,inst_296723);
var inst_296734 = cljs.core.async.muxch_STAR_.call(null,inst_296733);
var inst_296735 = cljs.core.async.close_BANG_.call(null,inst_296734);
var inst_296736 = cljs.core.next.call(null,inst_296723);
var inst_296708 = inst_296736;
var inst_296709 = null;
var inst_296710 = (0);
var inst_296711 = (0);
var state_296770__$1 = (function (){var statearr_296803 = state_296770;
(statearr_296803[(12)] = inst_296735);

(statearr_296803[(13)] = inst_296710);

(statearr_296803[(14)] = inst_296708);

(statearr_296803[(15)] = inst_296709);

(statearr_296803[(16)] = inst_296711);

return statearr_296803;
})();
var statearr_296804_296919 = state_296770__$1;
(statearr_296804_296919[(2)] = null);

(statearr_296804_296919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (3))){
var inst_296767 = (state_296770[(2)]);
var state_296770__$1 = state_296770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_296770__$1,inst_296767);
} else {
if((state_val_296771 === (12))){
var inst_296744 = (state_296770[(2)]);
var state_296770__$1 = state_296770;
var statearr_296805_296921 = state_296770__$1;
(statearr_296805_296921[(2)] = inst_296744);

(statearr_296805_296921[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (2))){
var state_296770__$1 = state_296770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_296770__$1,(4),ch);
} else {
if((state_val_296771 === (23))){
var state_296770__$1 = state_296770;
var statearr_296806_296922 = state_296770__$1;
(statearr_296806_296922[(2)] = null);

(statearr_296806_296922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (19))){
var inst_296750 = (state_296770[(11)]);
var inst_296698 = (state_296770[(8)]);
var inst_296752 = cljs.core.async.muxch_STAR_.call(null,inst_296750);
var state_296770__$1 = state_296770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_296770__$1,(22),inst_296752,inst_296698);
} else {
if((state_val_296771 === (11))){
var inst_296708 = (state_296770[(14)]);
var inst_296723 = (state_296770[(10)]);
var inst_296723__$1 = cljs.core.seq.call(null,inst_296708);
var state_296770__$1 = (function (){var statearr_296807 = state_296770;
(statearr_296807[(10)] = inst_296723__$1);

return statearr_296807;
})();
if(inst_296723__$1){
var statearr_296809_296923 = state_296770__$1;
(statearr_296809_296923[(1)] = (13));

} else {
var statearr_296810_296924 = state_296770__$1;
(statearr_296810_296924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (9))){
var inst_296746 = (state_296770[(2)]);
var state_296770__$1 = state_296770;
var statearr_296811_296925 = state_296770__$1;
(statearr_296811_296925[(2)] = inst_296746);

(statearr_296811_296925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (5))){
var inst_296705 = cljs.core.deref.call(null,mults);
var inst_296706 = cljs.core.vals.call(null,inst_296705);
var inst_296707 = cljs.core.seq.call(null,inst_296706);
var inst_296708 = inst_296707;
var inst_296709 = null;
var inst_296710 = (0);
var inst_296711 = (0);
var state_296770__$1 = (function (){var statearr_296812 = state_296770;
(statearr_296812[(13)] = inst_296710);

(statearr_296812[(14)] = inst_296708);

(statearr_296812[(15)] = inst_296709);

(statearr_296812[(16)] = inst_296711);

return statearr_296812;
})();
var statearr_296813_296926 = state_296770__$1;
(statearr_296813_296926[(2)] = null);

(statearr_296813_296926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (14))){
var state_296770__$1 = state_296770;
var statearr_296817_296927 = state_296770__$1;
(statearr_296817_296927[(2)] = null);

(statearr_296817_296927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (16))){
var inst_296723 = (state_296770[(10)]);
var inst_296728 = cljs.core.chunk_first.call(null,inst_296723);
var inst_296729 = cljs.core.chunk_rest.call(null,inst_296723);
var inst_296730 = cljs.core.count.call(null,inst_296728);
var inst_296708 = inst_296729;
var inst_296709 = inst_296728;
var inst_296710 = inst_296730;
var inst_296711 = (0);
var state_296770__$1 = (function (){var statearr_296818 = state_296770;
(statearr_296818[(13)] = inst_296710);

(statearr_296818[(14)] = inst_296708);

(statearr_296818[(15)] = inst_296709);

(statearr_296818[(16)] = inst_296711);

return statearr_296818;
})();
var statearr_296819_296929 = state_296770__$1;
(statearr_296819_296929[(2)] = null);

(statearr_296819_296929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (10))){
var inst_296710 = (state_296770[(13)]);
var inst_296708 = (state_296770[(14)]);
var inst_296709 = (state_296770[(15)]);
var inst_296711 = (state_296770[(16)]);
var inst_296717 = cljs.core._nth.call(null,inst_296709,inst_296711);
var inst_296718 = cljs.core.async.muxch_STAR_.call(null,inst_296717);
var inst_296719 = cljs.core.async.close_BANG_.call(null,inst_296718);
var inst_296720 = (inst_296711 + (1));
var tmp296814 = inst_296710;
var tmp296815 = inst_296708;
var tmp296816 = inst_296709;
var inst_296708__$1 = tmp296815;
var inst_296709__$1 = tmp296816;
var inst_296710__$1 = tmp296814;
var inst_296711__$1 = inst_296720;
var state_296770__$1 = (function (){var statearr_296820 = state_296770;
(statearr_296820[(17)] = inst_296719);

(statearr_296820[(13)] = inst_296710__$1);

(statearr_296820[(14)] = inst_296708__$1);

(statearr_296820[(15)] = inst_296709__$1);

(statearr_296820[(16)] = inst_296711__$1);

return statearr_296820;
})();
var statearr_296821_296931 = state_296770__$1;
(statearr_296821_296931[(2)] = null);

(statearr_296821_296931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (18))){
var inst_296739 = (state_296770[(2)]);
var state_296770__$1 = state_296770;
var statearr_296822_296932 = state_296770__$1;
(statearr_296822_296932[(2)] = inst_296739);

(statearr_296822_296932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_296771 === (8))){
var inst_296710 = (state_296770[(13)]);
var inst_296711 = (state_296770[(16)]);
var inst_296713 = (inst_296711 < inst_296710);
var inst_296714 = inst_296713;
var state_296770__$1 = state_296770;
if(cljs.core.truth_(inst_296714)){
var statearr_296823_296934 = state_296770__$1;
(statearr_296823_296934[(1)] = (10));

} else {
var statearr_296828_296935 = state_296770__$1;
(statearr_296828_296935[(1)] = (11));

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
});})(c__38100__auto___296875,mults,ensure_mult,p))
;
return ((function (switch__38079__auto__,c__38100__auto___296875,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_296834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_296834[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_296834[(1)] = (1));

return statearr_296834;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_296770){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_296770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e296835){if((e296835 instanceof Object)){
var ex__38083__auto__ = e296835;
var statearr_296836_296937 = state_296770;
(statearr_296836_296937[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_296770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e296835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__296938 = state_296770;
state_296770 = G__296938;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_296770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_296770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___296875,mults,ensure_mult,p))
})();
var state__38102__auto__ = (function (){var statearr_296838 = f__38101__auto__.call(null);
(statearr_296838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___296875);

return statearr_296838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___296875,mults,ensure_mult,p))
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
var args296940 = [];
var len__36260__auto___296946 = arguments.length;
var i__36261__auto___296947 = (0);
while(true){
if((i__36261__auto___296947 < len__36260__auto___296946)){
args296940.push((arguments[i__36261__auto___296947]));

var G__296948 = (i__36261__auto___296947 + (1));
i__36261__auto___296947 = G__296948;
continue;
} else {
}
break;
}

var G__296942 = args296940.length;
switch (G__296942) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args296940.length)].join('')));

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
var args296954 = [];
var len__36260__auto___296958 = arguments.length;
var i__36261__auto___296959 = (0);
while(true){
if((i__36261__auto___296959 < len__36260__auto___296958)){
args296954.push((arguments[i__36261__auto___296959]));

var G__296960 = (i__36261__auto___296959 + (1));
i__36261__auto___296959 = G__296960;
continue;
} else {
}
break;
}

var G__296956 = args296954.length;
switch (G__296956) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args296954.length)].join('')));

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
var args296965 = [];
var len__36260__auto___297047 = arguments.length;
var i__36261__auto___297048 = (0);
while(true){
if((i__36261__auto___297048 < len__36260__auto___297047)){
args296965.push((arguments[i__36261__auto___297048]));

var G__297049 = (i__36261__auto___297048 + (1));
i__36261__auto___297048 = G__297049;
continue;
} else {
}
break;
}

var G__296967 = args296965.length;
switch (G__296967) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args296965.length)].join('')));

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
var c__38100__auto___297051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___297051,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___297051,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_297009){
var state_val_297010 = (state_297009[(1)]);
if((state_val_297010 === (7))){
var state_297009__$1 = state_297009;
var statearr_297012_297052 = state_297009__$1;
(statearr_297012_297052[(2)] = null);

(statearr_297012_297052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297010 === (1))){
var state_297009__$1 = state_297009;
var statearr_297013_297053 = state_297009__$1;
(statearr_297013_297053[(2)] = null);

(statearr_297013_297053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297010 === (4))){
var inst_296971 = (state_297009[(7)]);
var inst_296973 = (inst_296971 < cnt);
var state_297009__$1 = state_297009;
if(cljs.core.truth_(inst_296973)){
var statearr_297014_297054 = state_297009__$1;
(statearr_297014_297054[(1)] = (6));

} else {
var statearr_297015_297055 = state_297009__$1;
(statearr_297015_297055[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297010 === (15))){
var inst_297004 = (state_297009[(2)]);
var state_297009__$1 = state_297009;
var statearr_297016_297056 = state_297009__$1;
(statearr_297016_297056[(2)] = inst_297004);

(statearr_297016_297056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297010 === (13))){
var inst_296996 = cljs.core.async.close_BANG_.call(null,out);
var state_297009__$1 = state_297009;
var statearr_297017_297057 = state_297009__$1;
(statearr_297017_297057[(2)] = inst_296996);

(statearr_297017_297057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297010 === (6))){
var state_297009__$1 = state_297009;
var statearr_297018_297058 = state_297009__$1;
(statearr_297018_297058[(2)] = null);

(statearr_297018_297058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297010 === (3))){
var inst_297006 = (state_297009[(2)]);
var state_297009__$1 = state_297009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_297009__$1,inst_297006);
} else {
if((state_val_297010 === (12))){
var inst_296993 = (state_297009[(8)]);
var inst_296993__$1 = (state_297009[(2)]);
var inst_296994 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_296993__$1);
var state_297009__$1 = (function (){var statearr_297019 = state_297009;
(statearr_297019[(8)] = inst_296993__$1);

return statearr_297019;
})();
if(cljs.core.truth_(inst_296994)){
var statearr_297020_297059 = state_297009__$1;
(statearr_297020_297059[(1)] = (13));

} else {
var statearr_297022_297060 = state_297009__$1;
(statearr_297022_297060[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297010 === (2))){
var inst_296970 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_296971 = (0);
var state_297009__$1 = (function (){var statearr_297023 = state_297009;
(statearr_297023[(7)] = inst_296971);

(statearr_297023[(9)] = inst_296970);

return statearr_297023;
})();
var statearr_297024_297061 = state_297009__$1;
(statearr_297024_297061[(2)] = null);

(statearr_297024_297061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297010 === (11))){
var inst_296971 = (state_297009[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_297009,(10),Object,null,(9));
var inst_296980 = chs__$1.call(null,inst_296971);
var inst_296981 = done.call(null,inst_296971);
var inst_296982 = cljs.core.async.take_BANG_.call(null,inst_296980,inst_296981);
var state_297009__$1 = state_297009;
var statearr_297025_297062 = state_297009__$1;
(statearr_297025_297062[(2)] = inst_296982);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297009__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297010 === (9))){
var inst_296971 = (state_297009[(7)]);
var inst_296984 = (state_297009[(2)]);
var inst_296985 = (inst_296971 + (1));
var inst_296971__$1 = inst_296985;
var state_297009__$1 = (function (){var statearr_297027 = state_297009;
(statearr_297027[(10)] = inst_296984);

(statearr_297027[(7)] = inst_296971__$1);

return statearr_297027;
})();
var statearr_297030_297063 = state_297009__$1;
(statearr_297030_297063[(2)] = null);

(statearr_297030_297063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297010 === (5))){
var inst_296991 = (state_297009[(2)]);
var state_297009__$1 = (function (){var statearr_297031 = state_297009;
(statearr_297031[(11)] = inst_296991);

return statearr_297031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_297009__$1,(12),dchan);
} else {
if((state_val_297010 === (14))){
var inst_296993 = (state_297009[(8)]);
var inst_296999 = cljs.core.apply.call(null,f,inst_296993);
var state_297009__$1 = state_297009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297009__$1,(16),out,inst_296999);
} else {
if((state_val_297010 === (16))){
var inst_297001 = (state_297009[(2)]);
var state_297009__$1 = (function (){var statearr_297032 = state_297009;
(statearr_297032[(12)] = inst_297001);

return statearr_297032;
})();
var statearr_297033_297064 = state_297009__$1;
(statearr_297033_297064[(2)] = null);

(statearr_297033_297064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297010 === (10))){
var inst_296975 = (state_297009[(2)]);
var inst_296976 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_297009__$1 = (function (){var statearr_297034 = state_297009;
(statearr_297034[(13)] = inst_296975);

return statearr_297034;
})();
var statearr_297035_297065 = state_297009__$1;
(statearr_297035_297065[(2)] = inst_296976);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297009__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297010 === (8))){
var inst_296989 = (state_297009[(2)]);
var state_297009__$1 = state_297009;
var statearr_297036_297066 = state_297009__$1;
(statearr_297036_297066[(2)] = inst_296989);

(statearr_297036_297066[(1)] = (5));


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
});})(c__38100__auto___297051,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38079__auto__,c__38100__auto___297051,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_297043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_297043[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_297043[(1)] = (1));

return statearr_297043;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_297009){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_297009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e297044){if((e297044 instanceof Object)){
var ex__38083__auto__ = e297044;
var statearr_297045_297067 = state_297009;
(statearr_297045_297067[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e297044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__297068 = state_297009;
state_297009 = G__297068;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_297009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_297009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___297051,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38102__auto__ = (function (){var statearr_297046 = f__38101__auto__.call(null);
(statearr_297046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___297051);

return statearr_297046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___297051,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args297070 = [];
var len__36260__auto___297126 = arguments.length;
var i__36261__auto___297127 = (0);
while(true){
if((i__36261__auto___297127 < len__36260__auto___297126)){
args297070.push((arguments[i__36261__auto___297127]));

var G__297128 = (i__36261__auto___297127 + (1));
i__36261__auto___297127 = G__297128;
continue;
} else {
}
break;
}

var G__297072 = args297070.length;
switch (G__297072) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args297070.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___297130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___297130,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___297130,out){
return (function (state_297102){
var state_val_297103 = (state_297102[(1)]);
if((state_val_297103 === (7))){
var inst_297081 = (state_297102[(7)]);
var inst_297082 = (state_297102[(8)]);
var inst_297081__$1 = (state_297102[(2)]);
var inst_297082__$1 = cljs.core.nth.call(null,inst_297081__$1,(0),null);
var inst_297083 = cljs.core.nth.call(null,inst_297081__$1,(1),null);
var inst_297084 = (inst_297082__$1 == null);
var state_297102__$1 = (function (){var statearr_297104 = state_297102;
(statearr_297104[(7)] = inst_297081__$1);

(statearr_297104[(9)] = inst_297083);

(statearr_297104[(8)] = inst_297082__$1);

return statearr_297104;
})();
if(cljs.core.truth_(inst_297084)){
var statearr_297105_297131 = state_297102__$1;
(statearr_297105_297131[(1)] = (8));

} else {
var statearr_297106_297132 = state_297102__$1;
(statearr_297106_297132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297103 === (1))){
var inst_297073 = cljs.core.vec.call(null,chs);
var inst_297074 = inst_297073;
var state_297102__$1 = (function (){var statearr_297107 = state_297102;
(statearr_297107[(10)] = inst_297074);

return statearr_297107;
})();
var statearr_297108_297133 = state_297102__$1;
(statearr_297108_297133[(2)] = null);

(statearr_297108_297133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297103 === (4))){
var inst_297074 = (state_297102[(10)]);
var state_297102__$1 = state_297102;
return cljs.core.async.ioc_alts_BANG_.call(null,state_297102__$1,(7),inst_297074);
} else {
if((state_val_297103 === (6))){
var inst_297098 = (state_297102[(2)]);
var state_297102__$1 = state_297102;
var statearr_297109_297134 = state_297102__$1;
(statearr_297109_297134[(2)] = inst_297098);

(statearr_297109_297134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297103 === (3))){
var inst_297100 = (state_297102[(2)]);
var state_297102__$1 = state_297102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_297102__$1,inst_297100);
} else {
if((state_val_297103 === (2))){
var inst_297074 = (state_297102[(10)]);
var inst_297076 = cljs.core.count.call(null,inst_297074);
var inst_297077 = (inst_297076 > (0));
var state_297102__$1 = state_297102;
if(cljs.core.truth_(inst_297077)){
var statearr_297111_297135 = state_297102__$1;
(statearr_297111_297135[(1)] = (4));

} else {
var statearr_297112_297136 = state_297102__$1;
(statearr_297112_297136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297103 === (11))){
var inst_297074 = (state_297102[(10)]);
var inst_297091 = (state_297102[(2)]);
var tmp297110 = inst_297074;
var inst_297074__$1 = tmp297110;
var state_297102__$1 = (function (){var statearr_297113 = state_297102;
(statearr_297113[(10)] = inst_297074__$1);

(statearr_297113[(11)] = inst_297091);

return statearr_297113;
})();
var statearr_297114_297137 = state_297102__$1;
(statearr_297114_297137[(2)] = null);

(statearr_297114_297137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297103 === (9))){
var inst_297082 = (state_297102[(8)]);
var state_297102__$1 = state_297102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297102__$1,(11),out,inst_297082);
} else {
if((state_val_297103 === (5))){
var inst_297096 = cljs.core.async.close_BANG_.call(null,out);
var state_297102__$1 = state_297102;
var statearr_297115_297138 = state_297102__$1;
(statearr_297115_297138[(2)] = inst_297096);

(statearr_297115_297138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297103 === (10))){
var inst_297094 = (state_297102[(2)]);
var state_297102__$1 = state_297102;
var statearr_297116_297139 = state_297102__$1;
(statearr_297116_297139[(2)] = inst_297094);

(statearr_297116_297139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297103 === (8))){
var inst_297081 = (state_297102[(7)]);
var inst_297083 = (state_297102[(9)]);
var inst_297074 = (state_297102[(10)]);
var inst_297082 = (state_297102[(8)]);
var inst_297086 = (function (){var cs = inst_297074;
var vec__297079 = inst_297081;
var v = inst_297082;
var c = inst_297083;
return ((function (cs,vec__297079,v,c,inst_297081,inst_297083,inst_297074,inst_297082,state_val_297103,c__38100__auto___297130,out){
return (function (p1__297069_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__297069_SHARP_);
});
;})(cs,vec__297079,v,c,inst_297081,inst_297083,inst_297074,inst_297082,state_val_297103,c__38100__auto___297130,out))
})();
var inst_297087 = cljs.core.filterv.call(null,inst_297086,inst_297074);
var inst_297074__$1 = inst_297087;
var state_297102__$1 = (function (){var statearr_297117 = state_297102;
(statearr_297117[(10)] = inst_297074__$1);

return statearr_297117;
})();
var statearr_297118_297140 = state_297102__$1;
(statearr_297118_297140[(2)] = null);

(statearr_297118_297140[(1)] = (2));


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
});})(c__38100__auto___297130,out))
;
return ((function (switch__38079__auto__,c__38100__auto___297130,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_297122 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_297122[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_297122[(1)] = (1));

return statearr_297122;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_297102){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_297102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e297123){if((e297123 instanceof Object)){
var ex__38083__auto__ = e297123;
var statearr_297124_297141 = state_297102;
(statearr_297124_297141[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e297123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__297142 = state_297102;
state_297102 = G__297142;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_297102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_297102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___297130,out))
})();
var state__38102__auto__ = (function (){var statearr_297125 = f__38101__auto__.call(null);
(statearr_297125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___297130);

return statearr_297125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___297130,out))
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
var args297143 = [];
var len__36260__auto___297198 = arguments.length;
var i__36261__auto___297199 = (0);
while(true){
if((i__36261__auto___297199 < len__36260__auto___297198)){
args297143.push((arguments[i__36261__auto___297199]));

var G__297200 = (i__36261__auto___297199 + (1));
i__36261__auto___297199 = G__297200;
continue;
} else {
}
break;
}

var G__297145 = args297143.length;
switch (G__297145) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args297143.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___297205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___297205,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___297205,out){
return (function (state_297169){
var state_val_297170 = (state_297169[(1)]);
if((state_val_297170 === (7))){
var inst_297151 = (state_297169[(7)]);
var inst_297151__$1 = (state_297169[(2)]);
var inst_297152 = (inst_297151__$1 == null);
var inst_297153 = cljs.core.not.call(null,inst_297152);
var state_297169__$1 = (function (){var statearr_297171 = state_297169;
(statearr_297171[(7)] = inst_297151__$1);

return statearr_297171;
})();
if(inst_297153){
var statearr_297172_297210 = state_297169__$1;
(statearr_297172_297210[(1)] = (8));

} else {
var statearr_297173_297217 = state_297169__$1;
(statearr_297173_297217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297170 === (1))){
var inst_297146 = (0);
var state_297169__$1 = (function (){var statearr_297174 = state_297169;
(statearr_297174[(8)] = inst_297146);

return statearr_297174;
})();
var statearr_297175_297218 = state_297169__$1;
(statearr_297175_297218[(2)] = null);

(statearr_297175_297218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297170 === (4))){
var state_297169__$1 = state_297169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_297169__$1,(7),ch);
} else {
if((state_val_297170 === (6))){
var inst_297164 = (state_297169[(2)]);
var state_297169__$1 = state_297169;
var statearr_297176_297222 = state_297169__$1;
(statearr_297176_297222[(2)] = inst_297164);

(statearr_297176_297222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297170 === (3))){
var inst_297166 = (state_297169[(2)]);
var inst_297167 = cljs.core.async.close_BANG_.call(null,out);
var state_297169__$1 = (function (){var statearr_297177 = state_297169;
(statearr_297177[(9)] = inst_297166);

return statearr_297177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_297169__$1,inst_297167);
} else {
if((state_val_297170 === (2))){
var inst_297146 = (state_297169[(8)]);
var inst_297148 = (inst_297146 < n);
var state_297169__$1 = state_297169;
if(cljs.core.truth_(inst_297148)){
var statearr_297178_297224 = state_297169__$1;
(statearr_297178_297224[(1)] = (4));

} else {
var statearr_297179_297225 = state_297169__$1;
(statearr_297179_297225[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297170 === (11))){
var inst_297146 = (state_297169[(8)]);
var inst_297156 = (state_297169[(2)]);
var inst_297157 = (inst_297146 + (1));
var inst_297146__$1 = inst_297157;
var state_297169__$1 = (function (){var statearr_297180 = state_297169;
(statearr_297180[(10)] = inst_297156);

(statearr_297180[(8)] = inst_297146__$1);

return statearr_297180;
})();
var statearr_297181_297231 = state_297169__$1;
(statearr_297181_297231[(2)] = null);

(statearr_297181_297231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297170 === (9))){
var state_297169__$1 = state_297169;
var statearr_297182_297233 = state_297169__$1;
(statearr_297182_297233[(2)] = null);

(statearr_297182_297233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297170 === (5))){
var state_297169__$1 = state_297169;
var statearr_297183_297234 = state_297169__$1;
(statearr_297183_297234[(2)] = null);

(statearr_297183_297234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297170 === (10))){
var inst_297161 = (state_297169[(2)]);
var state_297169__$1 = state_297169;
var statearr_297184_297235 = state_297169__$1;
(statearr_297184_297235[(2)] = inst_297161);

(statearr_297184_297235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297170 === (8))){
var inst_297151 = (state_297169[(7)]);
var state_297169__$1 = state_297169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297169__$1,(11),out,inst_297151);
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
});})(c__38100__auto___297205,out))
;
return ((function (switch__38079__auto__,c__38100__auto___297205,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_297191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_297191[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_297191[(1)] = (1));

return statearr_297191;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_297169){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_297169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e297193){if((e297193 instanceof Object)){
var ex__38083__auto__ = e297193;
var statearr_297194_297240 = state_297169;
(statearr_297194_297240[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e297193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__297241 = state_297169;
state_297169 = G__297241;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_297169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_297169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___297205,out))
})();
var state__38102__auto__ = (function (){var statearr_297195 = f__38101__auto__.call(null);
(statearr_297195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___297205);

return statearr_297195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___297205,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async297266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async297266 = (function (map_LT_,f,ch,meta297267){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta297267 = meta297267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async297266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_297268,meta297267__$1){
var self__ = this;
var _297268__$1 = this;
return (new cljs.core.async.t_cljs$core$async297266(self__.map_LT_,self__.f,self__.ch,meta297267__$1));
});

cljs.core.async.t_cljs$core$async297266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_297268){
var self__ = this;
var _297268__$1 = this;
return self__.meta297267;
});

cljs.core.async.t_cljs$core$async297266.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async297266.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async297266.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async297266.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async297266.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async297274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async297274 = (function (map_LT_,f,ch,meta297267,_,fn1,meta297275){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta297267 = meta297267;
this._ = _;
this.fn1 = fn1;
this.meta297275 = meta297275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async297274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_297276,meta297275__$1){
var self__ = this;
var _297276__$1 = this;
return (new cljs.core.async.t_cljs$core$async297274(self__.map_LT_,self__.f,self__.ch,self__.meta297267,self__._,self__.fn1,meta297275__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async297274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_297276){
var self__ = this;
var _297276__$1 = this;
return self__.meta297275;
});})(___$1))
;

cljs.core.async.t_cljs$core$async297274.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async297274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async297274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__297244_SHARP_){
return f1.call(null,(((p1__297244_SHARP_ == null))?null:self__.f.call(null,p1__297244_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async297274.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta297267","meta297267",-1044373955,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async297266","cljs.core.async/t_cljs$core$async297266",-81057452,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta297275","meta297275",1761212492,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async297274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async297274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async297274";

cljs.core.async.t_cljs$core$async297274.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async297274");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async297274 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async297274(map_LT___$1,f__$1,ch__$1,meta297267__$1,___$2,fn1__$1,meta297275){
return (new cljs.core.async.t_cljs$core$async297274(map_LT___$1,f__$1,ch__$1,meta297267__$1,___$2,fn1__$1,meta297275));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async297274(self__.map_LT_,self__.f,self__.ch,self__.meta297267,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__35179__auto__ = ret;
if(cljs.core.truth_(and__35179__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__35179__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async297266.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async297266.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async297266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta297267","meta297267",-1044373955,null)], null);
});

cljs.core.async.t_cljs$core$async297266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async297266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async297266";

cljs.core.async.t_cljs$core$async297266.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async297266");
});

cljs.core.async.__GT_t_cljs$core$async297266 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async297266(map_LT___$1,f__$1,ch__$1,meta297267){
return (new cljs.core.async.t_cljs$core$async297266(map_LT___$1,f__$1,ch__$1,meta297267));
});

}

return (new cljs.core.async.t_cljs$core$async297266(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async297305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async297305 = (function (map_GT_,f,ch,meta297306){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta297306 = meta297306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async297305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_297307,meta297306__$1){
var self__ = this;
var _297307__$1 = this;
return (new cljs.core.async.t_cljs$core$async297305(self__.map_GT_,self__.f,self__.ch,meta297306__$1));
});

cljs.core.async.t_cljs$core$async297305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_297307){
var self__ = this;
var _297307__$1 = this;
return self__.meta297306;
});

cljs.core.async.t_cljs$core$async297305.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async297305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async297305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async297305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async297305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async297305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async297305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta297306","meta297306",569421270,null)], null);
});

cljs.core.async.t_cljs$core$async297305.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async297305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async297305";

cljs.core.async.t_cljs$core$async297305.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async297305");
});

cljs.core.async.__GT_t_cljs$core$async297305 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async297305(map_GT___$1,f__$1,ch__$1,meta297306){
return (new cljs.core.async.t_cljs$core$async297305(map_GT___$1,f__$1,ch__$1,meta297306));
});

}

return (new cljs.core.async.t_cljs$core$async297305(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async297320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async297320 = (function (filter_GT_,p,ch,meta297321){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta297321 = meta297321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async297320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_297322,meta297321__$1){
var self__ = this;
var _297322__$1 = this;
return (new cljs.core.async.t_cljs$core$async297320(self__.filter_GT_,self__.p,self__.ch,meta297321__$1));
});

cljs.core.async.t_cljs$core$async297320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_297322){
var self__ = this;
var _297322__$1 = this;
return self__.meta297321;
});

cljs.core.async.t_cljs$core$async297320.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async297320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async297320.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async297320.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async297320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async297320.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async297320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async297320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta297321","meta297321",1122570654,null)], null);
});

cljs.core.async.t_cljs$core$async297320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async297320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async297320";

cljs.core.async.t_cljs$core$async297320.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async297320");
});

cljs.core.async.__GT_t_cljs$core$async297320 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async297320(filter_GT___$1,p__$1,ch__$1,meta297321){
return (new cljs.core.async.t_cljs$core$async297320(filter_GT___$1,p__$1,ch__$1,meta297321));
});

}

return (new cljs.core.async.t_cljs$core$async297320(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args297337 = [];
var len__36260__auto___297385 = arguments.length;
var i__36261__auto___297386 = (0);
while(true){
if((i__36261__auto___297386 < len__36260__auto___297385)){
args297337.push((arguments[i__36261__auto___297386]));

var G__297387 = (i__36261__auto___297386 + (1));
i__36261__auto___297386 = G__297387;
continue;
} else {
}
break;
}

var G__297339 = args297337.length;
switch (G__297339) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args297337.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___297391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___297391,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___297391,out){
return (function (state_297360){
var state_val_297361 = (state_297360[(1)]);
if((state_val_297361 === (7))){
var inst_297356 = (state_297360[(2)]);
var state_297360__$1 = state_297360;
var statearr_297362_297395 = state_297360__$1;
(statearr_297362_297395[(2)] = inst_297356);

(statearr_297362_297395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297361 === (1))){
var state_297360__$1 = state_297360;
var statearr_297363_297398 = state_297360__$1;
(statearr_297363_297398[(2)] = null);

(statearr_297363_297398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297361 === (4))){
var inst_297342 = (state_297360[(7)]);
var inst_297342__$1 = (state_297360[(2)]);
var inst_297343 = (inst_297342__$1 == null);
var state_297360__$1 = (function (){var statearr_297364 = state_297360;
(statearr_297364[(7)] = inst_297342__$1);

return statearr_297364;
})();
if(cljs.core.truth_(inst_297343)){
var statearr_297365_297399 = state_297360__$1;
(statearr_297365_297399[(1)] = (5));

} else {
var statearr_297366_297400 = state_297360__$1;
(statearr_297366_297400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297361 === (6))){
var inst_297342 = (state_297360[(7)]);
var inst_297347 = p.call(null,inst_297342);
var state_297360__$1 = state_297360;
if(cljs.core.truth_(inst_297347)){
var statearr_297369_297401 = state_297360__$1;
(statearr_297369_297401[(1)] = (8));

} else {
var statearr_297370_297402 = state_297360__$1;
(statearr_297370_297402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297361 === (3))){
var inst_297358 = (state_297360[(2)]);
var state_297360__$1 = state_297360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_297360__$1,inst_297358);
} else {
if((state_val_297361 === (2))){
var state_297360__$1 = state_297360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_297360__$1,(4),ch);
} else {
if((state_val_297361 === (11))){
var inst_297350 = (state_297360[(2)]);
var state_297360__$1 = state_297360;
var statearr_297373_297403 = state_297360__$1;
(statearr_297373_297403[(2)] = inst_297350);

(statearr_297373_297403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297361 === (9))){
var state_297360__$1 = state_297360;
var statearr_297374_297406 = state_297360__$1;
(statearr_297374_297406[(2)] = null);

(statearr_297374_297406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297361 === (5))){
var inst_297345 = cljs.core.async.close_BANG_.call(null,out);
var state_297360__$1 = state_297360;
var statearr_297375_297407 = state_297360__$1;
(statearr_297375_297407[(2)] = inst_297345);

(statearr_297375_297407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297361 === (10))){
var inst_297353 = (state_297360[(2)]);
var state_297360__$1 = (function (){var statearr_297376 = state_297360;
(statearr_297376[(8)] = inst_297353);

return statearr_297376;
})();
var statearr_297377_297408 = state_297360__$1;
(statearr_297377_297408[(2)] = null);

(statearr_297377_297408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297361 === (8))){
var inst_297342 = (state_297360[(7)]);
var state_297360__$1 = state_297360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297360__$1,(11),out,inst_297342);
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
});})(c__38100__auto___297391,out))
;
return ((function (switch__38079__auto__,c__38100__auto___297391,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_297381 = [null,null,null,null,null,null,null,null,null];
(statearr_297381[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_297381[(1)] = (1));

return statearr_297381;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_297360){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_297360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e297382){if((e297382 instanceof Object)){
var ex__38083__auto__ = e297382;
var statearr_297383_297415 = state_297360;
(statearr_297383_297415[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e297382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__297418 = state_297360;
state_297360 = G__297418;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_297360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_297360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___297391,out))
})();
var state__38102__auto__ = (function (){var statearr_297384 = f__38101__auto__.call(null);
(statearr_297384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___297391);

return statearr_297384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___297391,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args297419 = [];
var len__36260__auto___297422 = arguments.length;
var i__36261__auto___297423 = (0);
while(true){
if((i__36261__auto___297423 < len__36260__auto___297422)){
args297419.push((arguments[i__36261__auto___297423]));

var G__297424 = (i__36261__auto___297423 + (1));
i__36261__auto___297423 = G__297424;
continue;
} else {
}
break;
}

var G__297421 = args297419.length;
switch (G__297421) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args297419.length)].join('')));

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
var c__38100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto__){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto__){
return (function (state_297606){
var state_val_297607 = (state_297606[(1)]);
if((state_val_297607 === (7))){
var inst_297602 = (state_297606[(2)]);
var state_297606__$1 = state_297606;
var statearr_297608_297664 = state_297606__$1;
(statearr_297608_297664[(2)] = inst_297602);

(statearr_297608_297664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (20))){
var inst_297572 = (state_297606[(7)]);
var inst_297583 = (state_297606[(2)]);
var inst_297584 = cljs.core.next.call(null,inst_297572);
var inst_297558 = inst_297584;
var inst_297559 = null;
var inst_297560 = (0);
var inst_297561 = (0);
var state_297606__$1 = (function (){var statearr_297609 = state_297606;
(statearr_297609[(8)] = inst_297559);

(statearr_297609[(9)] = inst_297561);

(statearr_297609[(10)] = inst_297583);

(statearr_297609[(11)] = inst_297558);

(statearr_297609[(12)] = inst_297560);

return statearr_297609;
})();
var statearr_297610_297665 = state_297606__$1;
(statearr_297610_297665[(2)] = null);

(statearr_297610_297665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (1))){
var state_297606__$1 = state_297606;
var statearr_297611_297666 = state_297606__$1;
(statearr_297611_297666[(2)] = null);

(statearr_297611_297666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (4))){
var inst_297547 = (state_297606[(13)]);
var inst_297547__$1 = (state_297606[(2)]);
var inst_297548 = (inst_297547__$1 == null);
var state_297606__$1 = (function (){var statearr_297612 = state_297606;
(statearr_297612[(13)] = inst_297547__$1);

return statearr_297612;
})();
if(cljs.core.truth_(inst_297548)){
var statearr_297613_297667 = state_297606__$1;
(statearr_297613_297667[(1)] = (5));

} else {
var statearr_297614_297668 = state_297606__$1;
(statearr_297614_297668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (15))){
var state_297606__$1 = state_297606;
var statearr_297618_297669 = state_297606__$1;
(statearr_297618_297669[(2)] = null);

(statearr_297618_297669[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (21))){
var state_297606__$1 = state_297606;
var statearr_297619_297670 = state_297606__$1;
(statearr_297619_297670[(2)] = null);

(statearr_297619_297670[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (13))){
var inst_297559 = (state_297606[(8)]);
var inst_297561 = (state_297606[(9)]);
var inst_297558 = (state_297606[(11)]);
var inst_297560 = (state_297606[(12)]);
var inst_297568 = (state_297606[(2)]);
var inst_297569 = (inst_297561 + (1));
var tmp297615 = inst_297559;
var tmp297616 = inst_297558;
var tmp297617 = inst_297560;
var inst_297558__$1 = tmp297616;
var inst_297559__$1 = tmp297615;
var inst_297560__$1 = tmp297617;
var inst_297561__$1 = inst_297569;
var state_297606__$1 = (function (){var statearr_297620 = state_297606;
(statearr_297620[(8)] = inst_297559__$1);

(statearr_297620[(9)] = inst_297561__$1);

(statearr_297620[(11)] = inst_297558__$1);

(statearr_297620[(14)] = inst_297568);

(statearr_297620[(12)] = inst_297560__$1);

return statearr_297620;
})();
var statearr_297621_297672 = state_297606__$1;
(statearr_297621_297672[(2)] = null);

(statearr_297621_297672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (22))){
var state_297606__$1 = state_297606;
var statearr_297622_297674 = state_297606__$1;
(statearr_297622_297674[(2)] = null);

(statearr_297622_297674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (6))){
var inst_297547 = (state_297606[(13)]);
var inst_297556 = f.call(null,inst_297547);
var inst_297557 = cljs.core.seq.call(null,inst_297556);
var inst_297558 = inst_297557;
var inst_297559 = null;
var inst_297560 = (0);
var inst_297561 = (0);
var state_297606__$1 = (function (){var statearr_297623 = state_297606;
(statearr_297623[(8)] = inst_297559);

(statearr_297623[(9)] = inst_297561);

(statearr_297623[(11)] = inst_297558);

(statearr_297623[(12)] = inst_297560);

return statearr_297623;
})();
var statearr_297624_297675 = state_297606__$1;
(statearr_297624_297675[(2)] = null);

(statearr_297624_297675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (17))){
var inst_297572 = (state_297606[(7)]);
var inst_297576 = cljs.core.chunk_first.call(null,inst_297572);
var inst_297577 = cljs.core.chunk_rest.call(null,inst_297572);
var inst_297578 = cljs.core.count.call(null,inst_297576);
var inst_297558 = inst_297577;
var inst_297559 = inst_297576;
var inst_297560 = inst_297578;
var inst_297561 = (0);
var state_297606__$1 = (function (){var statearr_297625 = state_297606;
(statearr_297625[(8)] = inst_297559);

(statearr_297625[(9)] = inst_297561);

(statearr_297625[(11)] = inst_297558);

(statearr_297625[(12)] = inst_297560);

return statearr_297625;
})();
var statearr_297626_297682 = state_297606__$1;
(statearr_297626_297682[(2)] = null);

(statearr_297626_297682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (3))){
var inst_297604 = (state_297606[(2)]);
var state_297606__$1 = state_297606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_297606__$1,inst_297604);
} else {
if((state_val_297607 === (12))){
var inst_297592 = (state_297606[(2)]);
var state_297606__$1 = state_297606;
var statearr_297627_297683 = state_297606__$1;
(statearr_297627_297683[(2)] = inst_297592);

(statearr_297627_297683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (2))){
var state_297606__$1 = state_297606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_297606__$1,(4),in$);
} else {
if((state_val_297607 === (23))){
var inst_297600 = (state_297606[(2)]);
var state_297606__$1 = state_297606;
var statearr_297628_297686 = state_297606__$1;
(statearr_297628_297686[(2)] = inst_297600);

(statearr_297628_297686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (19))){
var inst_297587 = (state_297606[(2)]);
var state_297606__$1 = state_297606;
var statearr_297629_297687 = state_297606__$1;
(statearr_297629_297687[(2)] = inst_297587);

(statearr_297629_297687[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (11))){
var inst_297572 = (state_297606[(7)]);
var inst_297558 = (state_297606[(11)]);
var inst_297572__$1 = cljs.core.seq.call(null,inst_297558);
var state_297606__$1 = (function (){var statearr_297630 = state_297606;
(statearr_297630[(7)] = inst_297572__$1);

return statearr_297630;
})();
if(inst_297572__$1){
var statearr_297631_297692 = state_297606__$1;
(statearr_297631_297692[(1)] = (14));

} else {
var statearr_297632_297694 = state_297606__$1;
(statearr_297632_297694[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (9))){
var inst_297594 = (state_297606[(2)]);
var inst_297595 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_297606__$1 = (function (){var statearr_297633 = state_297606;
(statearr_297633[(15)] = inst_297594);

return statearr_297633;
})();
if(cljs.core.truth_(inst_297595)){
var statearr_297634_297696 = state_297606__$1;
(statearr_297634_297696[(1)] = (21));

} else {
var statearr_297635_297697 = state_297606__$1;
(statearr_297635_297697[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (5))){
var inst_297550 = cljs.core.async.close_BANG_.call(null,out);
var state_297606__$1 = state_297606;
var statearr_297636_297698 = state_297606__$1;
(statearr_297636_297698[(2)] = inst_297550);

(statearr_297636_297698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (14))){
var inst_297572 = (state_297606[(7)]);
var inst_297574 = cljs.core.chunked_seq_QMARK_.call(null,inst_297572);
var state_297606__$1 = state_297606;
if(inst_297574){
var statearr_297637_297699 = state_297606__$1;
(statearr_297637_297699[(1)] = (17));

} else {
var statearr_297638_297702 = state_297606__$1;
(statearr_297638_297702[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (16))){
var inst_297590 = (state_297606[(2)]);
var state_297606__$1 = state_297606;
var statearr_297639_297703 = state_297606__$1;
(statearr_297639_297703[(2)] = inst_297590);

(statearr_297639_297703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297607 === (10))){
var inst_297559 = (state_297606[(8)]);
var inst_297561 = (state_297606[(9)]);
var inst_297566 = cljs.core._nth.call(null,inst_297559,inst_297561);
var state_297606__$1 = state_297606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297606__$1,(13),out,inst_297566);
} else {
if((state_val_297607 === (18))){
var inst_297572 = (state_297606[(7)]);
var inst_297581 = cljs.core.first.call(null,inst_297572);
var state_297606__$1 = state_297606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297606__$1,(20),out,inst_297581);
} else {
if((state_val_297607 === (8))){
var inst_297561 = (state_297606[(9)]);
var inst_297560 = (state_297606[(12)]);
var inst_297563 = (inst_297561 < inst_297560);
var inst_297564 = inst_297563;
var state_297606__$1 = state_297606;
if(cljs.core.truth_(inst_297564)){
var statearr_297640_297708 = state_297606__$1;
(statearr_297640_297708[(1)] = (10));

} else {
var statearr_297641_297709 = state_297606__$1;
(statearr_297641_297709[(1)] = (11));

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
});})(c__38100__auto__))
;
return ((function (switch__38079__auto__,c__38100__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_297646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_297646[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__);

(statearr_297646[(1)] = (1));

return statearr_297646;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1 = (function (state_297606){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_297606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e297647){if((e297647 instanceof Object)){
var ex__38083__auto__ = e297647;
var statearr_297650_297711 = state_297606;
(statearr_297650_297711[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e297647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__297712 = state_297606;
state_297606 = G__297712;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__ = function(state_297606){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1.call(this,state_297606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_297656 = f__38101__auto__.call(null);
(statearr_297656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_297656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto__))
);

return c__38100__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args297717 = [];
var len__36260__auto___297724 = arguments.length;
var i__36261__auto___297725 = (0);
while(true){
if((i__36261__auto___297725 < len__36260__auto___297724)){
args297717.push((arguments[i__36261__auto___297725]));

var G__297726 = (i__36261__auto___297725 + (1));
i__36261__auto___297725 = G__297726;
continue;
} else {
}
break;
}

var G__297719 = args297717.length;
switch (G__297719) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args297717.length)].join('')));

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
var args297732 = [];
var len__36260__auto___297739 = arguments.length;
var i__36261__auto___297740 = (0);
while(true){
if((i__36261__auto___297740 < len__36260__auto___297739)){
args297732.push((arguments[i__36261__auto___297740]));

var G__297741 = (i__36261__auto___297740 + (1));
i__36261__auto___297740 = G__297741;
continue;
} else {
}
break;
}

var G__297734 = args297732.length;
switch (G__297734) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args297732.length)].join('')));

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
var args297751 = [];
var len__36260__auto___297814 = arguments.length;
var i__36261__auto___297815 = (0);
while(true){
if((i__36261__auto___297815 < len__36260__auto___297814)){
args297751.push((arguments[i__36261__auto___297815]));

var G__297816 = (i__36261__auto___297815 + (1));
i__36261__auto___297815 = G__297816;
continue;
} else {
}
break;
}

var G__297753 = args297751.length;
switch (G__297753) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args297751.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___297822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___297822,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___297822,out){
return (function (state_297781){
var state_val_297782 = (state_297781[(1)]);
if((state_val_297782 === (7))){
var inst_297776 = (state_297781[(2)]);
var state_297781__$1 = state_297781;
var statearr_297783_297823 = state_297781__$1;
(statearr_297783_297823[(2)] = inst_297776);

(statearr_297783_297823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297782 === (1))){
var inst_297754 = null;
var state_297781__$1 = (function (){var statearr_297784 = state_297781;
(statearr_297784[(7)] = inst_297754);

return statearr_297784;
})();
var statearr_297785_297824 = state_297781__$1;
(statearr_297785_297824[(2)] = null);

(statearr_297785_297824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297782 === (4))){
var inst_297757 = (state_297781[(8)]);
var inst_297757__$1 = (state_297781[(2)]);
var inst_297758 = (inst_297757__$1 == null);
var inst_297759 = cljs.core.not.call(null,inst_297758);
var state_297781__$1 = (function (){var statearr_297786 = state_297781;
(statearr_297786[(8)] = inst_297757__$1);

return statearr_297786;
})();
if(inst_297759){
var statearr_297787_297827 = state_297781__$1;
(statearr_297787_297827[(1)] = (5));

} else {
var statearr_297788_297828 = state_297781__$1;
(statearr_297788_297828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297782 === (6))){
var state_297781__$1 = state_297781;
var statearr_297789_297829 = state_297781__$1;
(statearr_297789_297829[(2)] = null);

(statearr_297789_297829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297782 === (3))){
var inst_297778 = (state_297781[(2)]);
var inst_297779 = cljs.core.async.close_BANG_.call(null,out);
var state_297781__$1 = (function (){var statearr_297790 = state_297781;
(statearr_297790[(9)] = inst_297778);

return statearr_297790;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_297781__$1,inst_297779);
} else {
if((state_val_297782 === (2))){
var state_297781__$1 = state_297781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_297781__$1,(4),ch);
} else {
if((state_val_297782 === (11))){
var inst_297757 = (state_297781[(8)]);
var inst_297766 = (state_297781[(2)]);
var inst_297754 = inst_297757;
var state_297781__$1 = (function (){var statearr_297791 = state_297781;
(statearr_297791[(7)] = inst_297754);

(statearr_297791[(10)] = inst_297766);

return statearr_297791;
})();
var statearr_297792_297831 = state_297781__$1;
(statearr_297792_297831[(2)] = null);

(statearr_297792_297831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297782 === (9))){
var inst_297757 = (state_297781[(8)]);
var state_297781__$1 = state_297781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297781__$1,(11),out,inst_297757);
} else {
if((state_val_297782 === (5))){
var inst_297757 = (state_297781[(8)]);
var inst_297754 = (state_297781[(7)]);
var inst_297761 = cljs.core._EQ_.call(null,inst_297757,inst_297754);
var state_297781__$1 = state_297781;
if(inst_297761){
var statearr_297798_297832 = state_297781__$1;
(statearr_297798_297832[(1)] = (8));

} else {
var statearr_297799_297833 = state_297781__$1;
(statearr_297799_297833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297782 === (10))){
var inst_297769 = (state_297781[(2)]);
var state_297781__$1 = state_297781;
var statearr_297800_297834 = state_297781__$1;
(statearr_297800_297834[(2)] = inst_297769);

(statearr_297800_297834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297782 === (8))){
var inst_297754 = (state_297781[(7)]);
var tmp297797 = inst_297754;
var inst_297754__$1 = tmp297797;
var state_297781__$1 = (function (){var statearr_297801 = state_297781;
(statearr_297801[(7)] = inst_297754__$1);

return statearr_297801;
})();
var statearr_297802_297839 = state_297781__$1;
(statearr_297802_297839[(2)] = null);

(statearr_297802_297839[(1)] = (2));


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
});})(c__38100__auto___297822,out))
;
return ((function (switch__38079__auto__,c__38100__auto___297822,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_297806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_297806[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_297806[(1)] = (1));

return statearr_297806;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_297781){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_297781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e297807){if((e297807 instanceof Object)){
var ex__38083__auto__ = e297807;
var statearr_297808_297848 = state_297781;
(statearr_297808_297848[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e297807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__297849 = state_297781;
state_297781 = G__297849;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_297781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_297781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___297822,out))
})();
var state__38102__auto__ = (function (){var statearr_297809 = f__38101__auto__.call(null);
(statearr_297809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___297822);

return statearr_297809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___297822,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args297850 = [];
var len__36260__auto___297922 = arguments.length;
var i__36261__auto___297923 = (0);
while(true){
if((i__36261__auto___297923 < len__36260__auto___297922)){
args297850.push((arguments[i__36261__auto___297923]));

var G__297924 = (i__36261__auto___297923 + (1));
i__36261__auto___297923 = G__297924;
continue;
} else {
}
break;
}

var G__297853 = args297850.length;
switch (G__297853) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args297850.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___297933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___297933,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___297933,out){
return (function (state_297891){
var state_val_297892 = (state_297891[(1)]);
if((state_val_297892 === (7))){
var inst_297887 = (state_297891[(2)]);
var state_297891__$1 = state_297891;
var statearr_297893_297938 = state_297891__$1;
(statearr_297893_297938[(2)] = inst_297887);

(statearr_297893_297938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297892 === (1))){
var inst_297854 = (new Array(n));
var inst_297855 = inst_297854;
var inst_297856 = (0);
var state_297891__$1 = (function (){var statearr_297895 = state_297891;
(statearr_297895[(7)] = inst_297856);

(statearr_297895[(8)] = inst_297855);

return statearr_297895;
})();
var statearr_297896_297942 = state_297891__$1;
(statearr_297896_297942[(2)] = null);

(statearr_297896_297942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297892 === (4))){
var inst_297859 = (state_297891[(9)]);
var inst_297859__$1 = (state_297891[(2)]);
var inst_297860 = (inst_297859__$1 == null);
var inst_297861 = cljs.core.not.call(null,inst_297860);
var state_297891__$1 = (function (){var statearr_297897 = state_297891;
(statearr_297897[(9)] = inst_297859__$1);

return statearr_297897;
})();
if(inst_297861){
var statearr_297898_297944 = state_297891__$1;
(statearr_297898_297944[(1)] = (5));

} else {
var statearr_297899_297945 = state_297891__$1;
(statearr_297899_297945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297892 === (15))){
var inst_297881 = (state_297891[(2)]);
var state_297891__$1 = state_297891;
var statearr_297900_297946 = state_297891__$1;
(statearr_297900_297946[(2)] = inst_297881);

(statearr_297900_297946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297892 === (13))){
var state_297891__$1 = state_297891;
var statearr_297901_297947 = state_297891__$1;
(statearr_297901_297947[(2)] = null);

(statearr_297901_297947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297892 === (6))){
var inst_297856 = (state_297891[(7)]);
var inst_297877 = (inst_297856 > (0));
var state_297891__$1 = state_297891;
if(cljs.core.truth_(inst_297877)){
var statearr_297902_297949 = state_297891__$1;
(statearr_297902_297949[(1)] = (12));

} else {
var statearr_297903_297950 = state_297891__$1;
(statearr_297903_297950[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297892 === (3))){
var inst_297889 = (state_297891[(2)]);
var state_297891__$1 = state_297891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_297891__$1,inst_297889);
} else {
if((state_val_297892 === (12))){
var inst_297855 = (state_297891[(8)]);
var inst_297879 = cljs.core.vec.call(null,inst_297855);
var state_297891__$1 = state_297891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297891__$1,(15),out,inst_297879);
} else {
if((state_val_297892 === (2))){
var state_297891__$1 = state_297891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_297891__$1,(4),ch);
} else {
if((state_val_297892 === (11))){
var inst_297871 = (state_297891[(2)]);
var inst_297872 = (new Array(n));
var inst_297855 = inst_297872;
var inst_297856 = (0);
var state_297891__$1 = (function (){var statearr_297904 = state_297891;
(statearr_297904[(7)] = inst_297856);

(statearr_297904[(8)] = inst_297855);

(statearr_297904[(10)] = inst_297871);

return statearr_297904;
})();
var statearr_297905_297952 = state_297891__$1;
(statearr_297905_297952[(2)] = null);

(statearr_297905_297952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297892 === (9))){
var inst_297855 = (state_297891[(8)]);
var inst_297869 = cljs.core.vec.call(null,inst_297855);
var state_297891__$1 = state_297891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_297891__$1,(11),out,inst_297869);
} else {
if((state_val_297892 === (5))){
var inst_297864 = (state_297891[(11)]);
var inst_297859 = (state_297891[(9)]);
var inst_297856 = (state_297891[(7)]);
var inst_297855 = (state_297891[(8)]);
var inst_297863 = (inst_297855[inst_297856] = inst_297859);
var inst_297864__$1 = (inst_297856 + (1));
var inst_297865 = (inst_297864__$1 < n);
var state_297891__$1 = (function (){var statearr_297906 = state_297891;
(statearr_297906[(11)] = inst_297864__$1);

(statearr_297906[(12)] = inst_297863);

return statearr_297906;
})();
if(cljs.core.truth_(inst_297865)){
var statearr_297907_297957 = state_297891__$1;
(statearr_297907_297957[(1)] = (8));

} else {
var statearr_297908_297958 = state_297891__$1;
(statearr_297908_297958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297892 === (14))){
var inst_297884 = (state_297891[(2)]);
var inst_297885 = cljs.core.async.close_BANG_.call(null,out);
var state_297891__$1 = (function (){var statearr_297910 = state_297891;
(statearr_297910[(13)] = inst_297884);

return statearr_297910;
})();
var statearr_297911_297960 = state_297891__$1;
(statearr_297911_297960[(2)] = inst_297885);

(statearr_297911_297960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297892 === (10))){
var inst_297875 = (state_297891[(2)]);
var state_297891__$1 = state_297891;
var statearr_297912_297964 = state_297891__$1;
(statearr_297912_297964[(2)] = inst_297875);

(statearr_297912_297964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_297892 === (8))){
var inst_297864 = (state_297891[(11)]);
var inst_297855 = (state_297891[(8)]);
var tmp297909 = inst_297855;
var inst_297855__$1 = tmp297909;
var inst_297856 = inst_297864;
var state_297891__$1 = (function (){var statearr_297913 = state_297891;
(statearr_297913[(7)] = inst_297856);

(statearr_297913[(8)] = inst_297855__$1);

return statearr_297913;
})();
var statearr_297914_297968 = state_297891__$1;
(statearr_297914_297968[(2)] = null);

(statearr_297914_297968[(1)] = (2));


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
});})(c__38100__auto___297933,out))
;
return ((function (switch__38079__auto__,c__38100__auto___297933,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_297918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_297918[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_297918[(1)] = (1));

return statearr_297918;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_297891){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_297891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e297919){if((e297919 instanceof Object)){
var ex__38083__auto__ = e297919;
var statearr_297920_297970 = state_297891;
(statearr_297920_297970[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_297891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e297919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__297971 = state_297891;
state_297891 = G__297971;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_297891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_297891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___297933,out))
})();
var state__38102__auto__ = (function (){var statearr_297921 = f__38101__auto__.call(null);
(statearr_297921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___297933);

return statearr_297921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___297933,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args297977 = [];
var len__36260__auto___298057 = arguments.length;
var i__36261__auto___298059 = (0);
while(true){
if((i__36261__auto___298059 < len__36260__auto___298057)){
args297977.push((arguments[i__36261__auto___298059]));

var G__298061 = (i__36261__auto___298059 + (1));
i__36261__auto___298059 = G__298061;
continue;
} else {
}
break;
}

var G__297979 = args297977.length;
switch (G__297979) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args297977.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___298064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___298064,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___298064,out){
return (function (state_298021){
var state_val_298022 = (state_298021[(1)]);
if((state_val_298022 === (7))){
var inst_298017 = (state_298021[(2)]);
var state_298021__$1 = state_298021;
var statearr_298023_298065 = state_298021__$1;
(statearr_298023_298065[(2)] = inst_298017);

(statearr_298023_298065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298022 === (1))){
var inst_297980 = [];
var inst_297981 = inst_297980;
var inst_297982 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_298021__$1 = (function (){var statearr_298024 = state_298021;
(statearr_298024[(7)] = inst_297981);

(statearr_298024[(8)] = inst_297982);

return statearr_298024;
})();
var statearr_298025_298068 = state_298021__$1;
(statearr_298025_298068[(2)] = null);

(statearr_298025_298068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298022 === (4))){
var inst_297985 = (state_298021[(9)]);
var inst_297985__$1 = (state_298021[(2)]);
var inst_297986 = (inst_297985__$1 == null);
var inst_297987 = cljs.core.not.call(null,inst_297986);
var state_298021__$1 = (function (){var statearr_298026 = state_298021;
(statearr_298026[(9)] = inst_297985__$1);

return statearr_298026;
})();
if(inst_297987){
var statearr_298027_298071 = state_298021__$1;
(statearr_298027_298071[(1)] = (5));

} else {
var statearr_298028_298072 = state_298021__$1;
(statearr_298028_298072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298022 === (15))){
var inst_298011 = (state_298021[(2)]);
var state_298021__$1 = state_298021;
var statearr_298029_298073 = state_298021__$1;
(statearr_298029_298073[(2)] = inst_298011);

(statearr_298029_298073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298022 === (13))){
var state_298021__$1 = state_298021;
var statearr_298030_298074 = state_298021__$1;
(statearr_298030_298074[(2)] = null);

(statearr_298030_298074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298022 === (6))){
var inst_297981 = (state_298021[(7)]);
var inst_298006 = inst_297981.length;
var inst_298007 = (inst_298006 > (0));
var state_298021__$1 = state_298021;
if(cljs.core.truth_(inst_298007)){
var statearr_298031_298075 = state_298021__$1;
(statearr_298031_298075[(1)] = (12));

} else {
var statearr_298032_298076 = state_298021__$1;
(statearr_298032_298076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298022 === (3))){
var inst_298019 = (state_298021[(2)]);
var state_298021__$1 = state_298021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_298021__$1,inst_298019);
} else {
if((state_val_298022 === (12))){
var inst_297981 = (state_298021[(7)]);
var inst_298009 = cljs.core.vec.call(null,inst_297981);
var state_298021__$1 = state_298021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_298021__$1,(15),out,inst_298009);
} else {
if((state_val_298022 === (2))){
var state_298021__$1 = state_298021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_298021__$1,(4),ch);
} else {
if((state_val_298022 === (11))){
var inst_297989 = (state_298021[(10)]);
var inst_297985 = (state_298021[(9)]);
var inst_297999 = (state_298021[(2)]);
var inst_298000 = [];
var inst_298001 = inst_298000.push(inst_297985);
var inst_297981 = inst_298000;
var inst_297982 = inst_297989;
var state_298021__$1 = (function (){var statearr_298038 = state_298021;
(statearr_298038[(7)] = inst_297981);

(statearr_298038[(11)] = inst_298001);

(statearr_298038[(8)] = inst_297982);

(statearr_298038[(12)] = inst_297999);

return statearr_298038;
})();
var statearr_298039_298079 = state_298021__$1;
(statearr_298039_298079[(2)] = null);

(statearr_298039_298079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298022 === (9))){
var inst_297981 = (state_298021[(7)]);
var inst_297997 = cljs.core.vec.call(null,inst_297981);
var state_298021__$1 = state_298021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_298021__$1,(11),out,inst_297997);
} else {
if((state_val_298022 === (5))){
var inst_297989 = (state_298021[(10)]);
var inst_297985 = (state_298021[(9)]);
var inst_297982 = (state_298021[(8)]);
var inst_297989__$1 = f.call(null,inst_297985);
var inst_297990 = cljs.core._EQ_.call(null,inst_297989__$1,inst_297982);
var inst_297991 = cljs.core.keyword_identical_QMARK_.call(null,inst_297982,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_297992 = (inst_297990) || (inst_297991);
var state_298021__$1 = (function (){var statearr_298041 = state_298021;
(statearr_298041[(10)] = inst_297989__$1);

return statearr_298041;
})();
if(cljs.core.truth_(inst_297992)){
var statearr_298042_298086 = state_298021__$1;
(statearr_298042_298086[(1)] = (8));

} else {
var statearr_298043_298087 = state_298021__$1;
(statearr_298043_298087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298022 === (14))){
var inst_298014 = (state_298021[(2)]);
var inst_298015 = cljs.core.async.close_BANG_.call(null,out);
var state_298021__$1 = (function (){var statearr_298045 = state_298021;
(statearr_298045[(13)] = inst_298014);

return statearr_298045;
})();
var statearr_298046_298092 = state_298021__$1;
(statearr_298046_298092[(2)] = inst_298015);

(statearr_298046_298092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298022 === (10))){
var inst_298004 = (state_298021[(2)]);
var state_298021__$1 = state_298021;
var statearr_298047_298093 = state_298021__$1;
(statearr_298047_298093[(2)] = inst_298004);

(statearr_298047_298093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298022 === (8))){
var inst_297989 = (state_298021[(10)]);
var inst_297981 = (state_298021[(7)]);
var inst_297985 = (state_298021[(9)]);
var inst_297994 = inst_297981.push(inst_297985);
var tmp298044 = inst_297981;
var inst_297981__$1 = tmp298044;
var inst_297982 = inst_297989;
var state_298021__$1 = (function (){var statearr_298048 = state_298021;
(statearr_298048[(7)] = inst_297981__$1);

(statearr_298048[(14)] = inst_297994);

(statearr_298048[(8)] = inst_297982);

return statearr_298048;
})();
var statearr_298049_298095 = state_298021__$1;
(statearr_298049_298095[(2)] = null);

(statearr_298049_298095[(1)] = (2));


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
});})(c__38100__auto___298064,out))
;
return ((function (switch__38079__auto__,c__38100__auto___298064,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_298053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_298053[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_298053[(1)] = (1));

return statearr_298053;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_298021){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_298021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e298054){if((e298054 instanceof Object)){
var ex__38083__auto__ = e298054;
var statearr_298055_298101 = state_298021;
(statearr_298055_298101[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e298054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__298102 = state_298021;
state_298021 = G__298102;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_298021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_298021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___298064,out))
})();
var state__38102__auto__ = (function (){var statearr_298056 = f__38101__auto__.call(null);
(statearr_298056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___298064);

return statearr_298056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___298064,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1459068554770