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
if(typeof cljs.core.async.t_cljs$core$async284078 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async284078 = (function (fn_handler,f,meta284079){
this.fn_handler = fn_handler;
this.f = f;
this.meta284079 = meta284079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async284078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_284080,meta284079__$1){
var self__ = this;
var _284080__$1 = this;
return (new cljs.core.async.t_cljs$core$async284078(self__.fn_handler,self__.f,meta284079__$1));
});

cljs.core.async.t_cljs$core$async284078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_284080){
var self__ = this;
var _284080__$1 = this;
return self__.meta284079;
});

cljs.core.async.t_cljs$core$async284078.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async284078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async284078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async284078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta284079","meta284079",-707690992,null)], null);
});

cljs.core.async.t_cljs$core$async284078.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async284078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async284078";

cljs.core.async.t_cljs$core$async284078.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async284078");
});

cljs.core.async.__GT_t_cljs$core$async284078 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async284078(fn_handler__$1,f__$1,meta284079){
return (new cljs.core.async.t_cljs$core$async284078(fn_handler__$1,f__$1,meta284079));
});

}

return (new cljs.core.async.t_cljs$core$async284078(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args284113 = [];
var len__36260__auto___284127 = arguments.length;
var i__36261__auto___284128 = (0);
while(true){
if((i__36261__auto___284128 < len__36260__auto___284127)){
args284113.push((arguments[i__36261__auto___284128]));

var G__284130 = (i__36261__auto___284128 + (1));
i__36261__auto___284128 = G__284130;
continue;
} else {
}
break;
}

var G__284121 = args284113.length;
switch (G__284121) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args284113.length)].join('')));

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
var args284158 = [];
var len__36260__auto___284174 = arguments.length;
var i__36261__auto___284175 = (0);
while(true){
if((i__36261__auto___284175 < len__36260__auto___284174)){
args284158.push((arguments[i__36261__auto___284175]));

var G__284177 = (i__36261__auto___284175 + (1));
i__36261__auto___284175 = G__284177;
continue;
} else {
}
break;
}

var G__284170 = args284158.length;
switch (G__284170) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args284158.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_284185 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_284185);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_284185,ret){
return (function (){
return fn1.call(null,val_284185);
});})(val_284185,ret))
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
var args284195 = [];
var len__36260__auto___284241 = arguments.length;
var i__36261__auto___284244 = (0);
while(true){
if((i__36261__auto___284244 < len__36260__auto___284241)){
args284195.push((arguments[i__36261__auto___284244]));

var G__284245 = (i__36261__auto___284244 + (1));
i__36261__auto___284244 = G__284245;
continue;
} else {
}
break;
}

var G__284238 = args284195.length;
switch (G__284238) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args284195.length)].join('')));

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
var n__36105__auto___284251 = n;
var x_284252 = (0);
while(true){
if((x_284252 < n__36105__auto___284251)){
(a[x_284252] = (0));

var G__284253 = (x_284252 + (1));
x_284252 = G__284253;
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

var G__284289 = (i + (1));
i = G__284289;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async284300 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async284300 = (function (alt_flag,flag,meta284301){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta284301 = meta284301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async284300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_284302,meta284301__$1){
var self__ = this;
var _284302__$1 = this;
return (new cljs.core.async.t_cljs$core$async284300(self__.alt_flag,self__.flag,meta284301__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async284300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_284302){
var self__ = this;
var _284302__$1 = this;
return self__.meta284301;
});})(flag))
;

cljs.core.async.t_cljs$core$async284300.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async284300.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async284300.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async284300.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta284301","meta284301",-202746113,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async284300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async284300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async284300";

cljs.core.async.t_cljs$core$async284300.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async284300");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async284300 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async284300(alt_flag__$1,flag__$1,meta284301){
return (new cljs.core.async.t_cljs$core$async284300(alt_flag__$1,flag__$1,meta284301));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async284300(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async284312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async284312 = (function (alt_handler,flag,cb,meta284313){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta284313 = meta284313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async284312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_284314,meta284313__$1){
var self__ = this;
var _284314__$1 = this;
return (new cljs.core.async.t_cljs$core$async284312(self__.alt_handler,self__.flag,self__.cb,meta284313__$1));
});

cljs.core.async.t_cljs$core$async284312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_284314){
var self__ = this;
var _284314__$1 = this;
return self__.meta284313;
});

cljs.core.async.t_cljs$core$async284312.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async284312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async284312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async284312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta284313","meta284313",-422641388,null)], null);
});

cljs.core.async.t_cljs$core$async284312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async284312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async284312";

cljs.core.async.t_cljs$core$async284312.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async284312");
});

cljs.core.async.__GT_t_cljs$core$async284312 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async284312(alt_handler__$1,flag__$1,cb__$1,meta284313){
return (new cljs.core.async.t_cljs$core$async284312(alt_handler__$1,flag__$1,cb__$1,meta284313));
});

}

return (new cljs.core.async.t_cljs$core$async284312(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__284373_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__284373_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__284374_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__284374_SHARP_,port], null));
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
var G__284393 = (i + (1));
i = G__284393;
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
var len__36260__auto___284408 = arguments.length;
var i__36261__auto___284409 = (0);
while(true){
if((i__36261__auto___284409 < len__36260__auto___284408)){
args__36267__auto__.push((arguments[i__36261__auto___284409]));

var G__284410 = (i__36261__auto___284409 + (1));
i__36261__auto___284409 = G__284410;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__284404){
var map__284405 = p__284404;
var map__284405__$1 = ((((!((map__284405 == null)))?((((map__284405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__284405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__284405):map__284405);
var opts = map__284405__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq284399){
var G__284400 = cljs.core.first.call(null,seq284399);
var seq284399__$1 = cljs.core.next.call(null,seq284399);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__284400,seq284399__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args284414 = [];
var len__36260__auto___284485 = arguments.length;
var i__36261__auto___284486 = (0);
while(true){
if((i__36261__auto___284486 < len__36260__auto___284485)){
args284414.push((arguments[i__36261__auto___284486]));

var G__284487 = (i__36261__auto___284486 + (1));
i__36261__auto___284486 = G__284487;
continue;
} else {
}
break;
}

var G__284419 = args284414.length;
switch (G__284419) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args284414.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38100__auto___284492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___284492){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___284492){
return (function (state_284443){
var state_val_284444 = (state_284443[(1)]);
if((state_val_284444 === (7))){
var inst_284439 = (state_284443[(2)]);
var state_284443__$1 = state_284443;
var statearr_284445_284499 = state_284443__$1;
(statearr_284445_284499[(2)] = inst_284439);

(statearr_284445_284499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284444 === (1))){
var state_284443__$1 = state_284443;
var statearr_284447_284504 = state_284443__$1;
(statearr_284447_284504[(2)] = null);

(statearr_284447_284504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284444 === (4))){
var inst_284422 = (state_284443[(7)]);
var inst_284422__$1 = (state_284443[(2)]);
var inst_284423 = (inst_284422__$1 == null);
var state_284443__$1 = (function (){var statearr_284449 = state_284443;
(statearr_284449[(7)] = inst_284422__$1);

return statearr_284449;
})();
if(cljs.core.truth_(inst_284423)){
var statearr_284451_284511 = state_284443__$1;
(statearr_284451_284511[(1)] = (5));

} else {
var statearr_284452_284512 = state_284443__$1;
(statearr_284452_284512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284444 === (13))){
var state_284443__$1 = state_284443;
var statearr_284454_284513 = state_284443__$1;
(statearr_284454_284513[(2)] = null);

(statearr_284454_284513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284444 === (6))){
var inst_284422 = (state_284443[(7)]);
var state_284443__$1 = state_284443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_284443__$1,(11),to,inst_284422);
} else {
if((state_val_284444 === (3))){
var inst_284441 = (state_284443[(2)]);
var state_284443__$1 = state_284443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_284443__$1,inst_284441);
} else {
if((state_val_284444 === (12))){
var state_284443__$1 = state_284443;
var statearr_284457_284518 = state_284443__$1;
(statearr_284457_284518[(2)] = null);

(statearr_284457_284518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284444 === (2))){
var state_284443__$1 = state_284443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_284443__$1,(4),from);
} else {
if((state_val_284444 === (11))){
var inst_284432 = (state_284443[(2)]);
var state_284443__$1 = state_284443;
if(cljs.core.truth_(inst_284432)){
var statearr_284458_284520 = state_284443__$1;
(statearr_284458_284520[(1)] = (12));

} else {
var statearr_284459_284522 = state_284443__$1;
(statearr_284459_284522[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284444 === (9))){
var state_284443__$1 = state_284443;
var statearr_284461_284525 = state_284443__$1;
(statearr_284461_284525[(2)] = null);

(statearr_284461_284525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284444 === (5))){
var state_284443__$1 = state_284443;
if(cljs.core.truth_(close_QMARK_)){
var statearr_284462_284526 = state_284443__$1;
(statearr_284462_284526[(1)] = (8));

} else {
var statearr_284463_284527 = state_284443__$1;
(statearr_284463_284527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284444 === (14))){
var inst_284437 = (state_284443[(2)]);
var state_284443__$1 = state_284443;
var statearr_284464_284532 = state_284443__$1;
(statearr_284464_284532[(2)] = inst_284437);

(statearr_284464_284532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284444 === (10))){
var inst_284429 = (state_284443[(2)]);
var state_284443__$1 = state_284443;
var statearr_284467_284540 = state_284443__$1;
(statearr_284467_284540[(2)] = inst_284429);

(statearr_284467_284540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284444 === (8))){
var inst_284426 = cljs.core.async.close_BANG_.call(null,to);
var state_284443__$1 = state_284443;
var statearr_284468_284541 = state_284443__$1;
(statearr_284468_284541[(2)] = inst_284426);

(statearr_284468_284541[(1)] = (10));


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
});})(c__38100__auto___284492))
;
return ((function (switch__38079__auto__,c__38100__auto___284492){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_284474 = [null,null,null,null,null,null,null,null];
(statearr_284474[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_284474[(1)] = (1));

return statearr_284474;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_284443){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_284443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e284475){if((e284475 instanceof Object)){
var ex__38083__auto__ = e284475;
var statearr_284476_284546 = state_284443;
(statearr_284476_284546[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_284443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e284475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__284550 = state_284443;
state_284443 = G__284550;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_284443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_284443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___284492))
})();
var state__38102__auto__ = (function (){var statearr_284478 = f__38101__auto__.call(null);
(statearr_284478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___284492);

return statearr_284478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___284492))
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
return (function (p__284812){
var vec__284813 = p__284812;
var v = cljs.core.nth.call(null,vec__284813,(0),null);
var p = cljs.core.nth.call(null,vec__284813,(1),null);
var job = vec__284813;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38100__auto___285099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___285099,res,vec__284813,v,p,job,jobs,results){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___285099,res,vec__284813,v,p,job,jobs,results){
return (function (state_284818){
var state_val_284819 = (state_284818[(1)]);
if((state_val_284819 === (1))){
var state_284818__$1 = state_284818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_284818__$1,(2),res,v);
} else {
if((state_val_284819 === (2))){
var inst_284815 = (state_284818[(2)]);
var inst_284816 = cljs.core.async.close_BANG_.call(null,res);
var state_284818__$1 = (function (){var statearr_284820 = state_284818;
(statearr_284820[(7)] = inst_284815);

return statearr_284820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_284818__$1,inst_284816);
} else {
return null;
}
}
});})(c__38100__auto___285099,res,vec__284813,v,p,job,jobs,results))
;
return ((function (switch__38079__auto__,c__38100__auto___285099,res,vec__284813,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_284827 = [null,null,null,null,null,null,null,null];
(statearr_284827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_284827[(1)] = (1));

return statearr_284827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_284818){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_284818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e284828){if((e284828 instanceof Object)){
var ex__38083__auto__ = e284828;
var statearr_284830_285124 = state_284818;
(statearr_284830_285124[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_284818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e284828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__285127 = state_284818;
state_284818 = G__285127;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_284818){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_284818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___285099,res,vec__284813,v,p,job,jobs,results))
})();
var state__38102__auto__ = (function (){var statearr_284831 = f__38101__auto__.call(null);
(statearr_284831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___285099);

return statearr_284831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___285099,res,vec__284813,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__284832){
var vec__284833 = p__284832;
var v = cljs.core.nth.call(null,vec__284833,(0),null);
var p = cljs.core.nth.call(null,vec__284833,(1),null);
var job = vec__284833;
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
var n__36105__auto___285140 = n;
var __285141 = (0);
while(true){
if((__285141 < n__36105__auto___285140)){
var G__284836_285143 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__284836_285143) {
case "compute":
var c__38100__auto___285145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__285141,c__38100__auto___285145,G__284836_285143,n__36105__auto___285140,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (__285141,c__38100__auto___285145,G__284836_285143,n__36105__auto___285140,jobs,results,process,async){
return (function (state_284850){
var state_val_284851 = (state_284850[(1)]);
if((state_val_284851 === (1))){
var state_284850__$1 = state_284850;
var statearr_284855_285151 = state_284850__$1;
(statearr_284855_285151[(2)] = null);

(statearr_284855_285151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284851 === (2))){
var state_284850__$1 = state_284850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_284850__$1,(4),jobs);
} else {
if((state_val_284851 === (3))){
var inst_284848 = (state_284850[(2)]);
var state_284850__$1 = state_284850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_284850__$1,inst_284848);
} else {
if((state_val_284851 === (4))){
var inst_284840 = (state_284850[(2)]);
var inst_284841 = process.call(null,inst_284840);
var state_284850__$1 = state_284850;
if(cljs.core.truth_(inst_284841)){
var statearr_284857_285157 = state_284850__$1;
(statearr_284857_285157[(1)] = (5));

} else {
var statearr_284858_285159 = state_284850__$1;
(statearr_284858_285159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284851 === (5))){
var state_284850__$1 = state_284850;
var statearr_284860_285163 = state_284850__$1;
(statearr_284860_285163[(2)] = null);

(statearr_284860_285163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284851 === (6))){
var state_284850__$1 = state_284850;
var statearr_284862_285167 = state_284850__$1;
(statearr_284862_285167[(2)] = null);

(statearr_284862_285167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284851 === (7))){
var inst_284846 = (state_284850[(2)]);
var state_284850__$1 = state_284850;
var statearr_284864_285170 = state_284850__$1;
(statearr_284864_285170[(2)] = inst_284846);

(statearr_284864_285170[(1)] = (3));


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
});})(__285141,c__38100__auto___285145,G__284836_285143,n__36105__auto___285140,jobs,results,process,async))
;
return ((function (__285141,switch__38079__auto__,c__38100__auto___285145,G__284836_285143,n__36105__auto___285140,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_284869 = [null,null,null,null,null,null,null];
(statearr_284869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_284869[(1)] = (1));

return statearr_284869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_284850){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_284850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e284872){if((e284872 instanceof Object)){
var ex__38083__auto__ = e284872;
var statearr_284873_285179 = state_284850;
(statearr_284873_285179[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_284850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e284872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__285180 = state_284850;
state_284850 = G__285180;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_284850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_284850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(__285141,switch__38079__auto__,c__38100__auto___285145,G__284836_285143,n__36105__auto___285140,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_284875 = f__38101__auto__.call(null);
(statearr_284875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___285145);

return statearr_284875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(__285141,c__38100__auto___285145,G__284836_285143,n__36105__auto___285140,jobs,results,process,async))
);


break;
case "async":
var c__38100__auto___285187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__285141,c__38100__auto___285187,G__284836_285143,n__36105__auto___285140,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (__285141,c__38100__auto___285187,G__284836_285143,n__36105__auto___285140,jobs,results,process,async){
return (function (state_284890){
var state_val_284891 = (state_284890[(1)]);
if((state_val_284891 === (1))){
var state_284890__$1 = state_284890;
var statearr_284892_285191 = state_284890__$1;
(statearr_284892_285191[(2)] = null);

(statearr_284892_285191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284891 === (2))){
var state_284890__$1 = state_284890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_284890__$1,(4),jobs);
} else {
if((state_val_284891 === (3))){
var inst_284888 = (state_284890[(2)]);
var state_284890__$1 = state_284890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_284890__$1,inst_284888);
} else {
if((state_val_284891 === (4))){
var inst_284880 = (state_284890[(2)]);
var inst_284881 = async.call(null,inst_284880);
var state_284890__$1 = state_284890;
if(cljs.core.truth_(inst_284881)){
var statearr_284896_285198 = state_284890__$1;
(statearr_284896_285198[(1)] = (5));

} else {
var statearr_284898_285199 = state_284890__$1;
(statearr_284898_285199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284891 === (5))){
var state_284890__$1 = state_284890;
var statearr_284899_285200 = state_284890__$1;
(statearr_284899_285200[(2)] = null);

(statearr_284899_285200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284891 === (6))){
var state_284890__$1 = state_284890;
var statearr_284901_285202 = state_284890__$1;
(statearr_284901_285202[(2)] = null);

(statearr_284901_285202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284891 === (7))){
var inst_284886 = (state_284890[(2)]);
var state_284890__$1 = state_284890;
var statearr_284902_285206 = state_284890__$1;
(statearr_284902_285206[(2)] = inst_284886);

(statearr_284902_285206[(1)] = (3));


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
});})(__285141,c__38100__auto___285187,G__284836_285143,n__36105__auto___285140,jobs,results,process,async))
;
return ((function (__285141,switch__38079__auto__,c__38100__auto___285187,G__284836_285143,n__36105__auto___285140,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_284906 = [null,null,null,null,null,null,null];
(statearr_284906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_284906[(1)] = (1));

return statearr_284906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_284890){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_284890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e284907){if((e284907 instanceof Object)){
var ex__38083__auto__ = e284907;
var statearr_284908_285214 = state_284890;
(statearr_284908_285214[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_284890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e284907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__285219 = state_284890;
state_284890 = G__285219;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_284890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_284890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(__285141,switch__38079__auto__,c__38100__auto___285187,G__284836_285143,n__36105__auto___285140,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_284912 = f__38101__auto__.call(null);
(statearr_284912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___285187);

return statearr_284912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(__285141,c__38100__auto___285187,G__284836_285143,n__36105__auto___285140,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__285222 = (__285141 + (1));
__285141 = G__285222;
continue;
} else {
}
break;
}

var c__38100__auto___285224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___285224,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___285224,jobs,results,process,async){
return (function (state_284942){
var state_val_284943 = (state_284942[(1)]);
if((state_val_284943 === (1))){
var state_284942__$1 = state_284942;
var statearr_284947_285229 = state_284942__$1;
(statearr_284947_285229[(2)] = null);

(statearr_284947_285229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284943 === (2))){
var state_284942__$1 = state_284942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_284942__$1,(4),from);
} else {
if((state_val_284943 === (3))){
var inst_284936 = (state_284942[(2)]);
var state_284942__$1 = state_284942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_284942__$1,inst_284936);
} else {
if((state_val_284943 === (4))){
var inst_284918 = (state_284942[(7)]);
var inst_284918__$1 = (state_284942[(2)]);
var inst_284919 = (inst_284918__$1 == null);
var state_284942__$1 = (function (){var statearr_284951 = state_284942;
(statearr_284951[(7)] = inst_284918__$1);

return statearr_284951;
})();
if(cljs.core.truth_(inst_284919)){
var statearr_284952_285237 = state_284942__$1;
(statearr_284952_285237[(1)] = (5));

} else {
var statearr_284953_285238 = state_284942__$1;
(statearr_284953_285238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284943 === (5))){
var inst_284921 = cljs.core.async.close_BANG_.call(null,jobs);
var state_284942__$1 = state_284942;
var statearr_284962_285241 = state_284942__$1;
(statearr_284962_285241[(2)] = inst_284921);

(statearr_284962_285241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284943 === (6))){
var inst_284923 = (state_284942[(8)]);
var inst_284918 = (state_284942[(7)]);
var inst_284923__$1 = cljs.core.async.chan.call(null,(1));
var inst_284925 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_284926 = [inst_284918,inst_284923__$1];
var inst_284927 = (new cljs.core.PersistentVector(null,2,(5),inst_284925,inst_284926,null));
var state_284942__$1 = (function (){var statearr_284964 = state_284942;
(statearr_284964[(8)] = inst_284923__$1);

return statearr_284964;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_284942__$1,(8),jobs,inst_284927);
} else {
if((state_val_284943 === (7))){
var inst_284934 = (state_284942[(2)]);
var state_284942__$1 = state_284942;
var statearr_284965_285249 = state_284942__$1;
(statearr_284965_285249[(2)] = inst_284934);

(statearr_284965_285249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_284943 === (8))){
var inst_284923 = (state_284942[(8)]);
var inst_284929 = (state_284942[(2)]);
var state_284942__$1 = (function (){var statearr_284966 = state_284942;
(statearr_284966[(9)] = inst_284929);

return statearr_284966;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_284942__$1,(9),results,inst_284923);
} else {
if((state_val_284943 === (9))){
var inst_284931 = (state_284942[(2)]);
var state_284942__$1 = (function (){var statearr_284968 = state_284942;
(statearr_284968[(10)] = inst_284931);

return statearr_284968;
})();
var statearr_284969_285255 = state_284942__$1;
(statearr_284969_285255[(2)] = null);

(statearr_284969_285255[(1)] = (2));


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
});})(c__38100__auto___285224,jobs,results,process,async))
;
return ((function (switch__38079__auto__,c__38100__auto___285224,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_284978 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_284978[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_284978[(1)] = (1));

return statearr_284978;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_284942){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_284942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e284980){if((e284980 instanceof Object)){
var ex__38083__auto__ = e284980;
var statearr_284981_285260 = state_284942;
(statearr_284981_285260[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_284942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e284980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__285261 = state_284942;
state_284942 = G__285261;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_284942){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_284942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___285224,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_284983 = f__38101__auto__.call(null);
(statearr_284983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___285224);

return statearr_284983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___285224,jobs,results,process,async))
);


var c__38100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto__,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto__,jobs,results,process,async){
return (function (state_285026){
var state_val_285027 = (state_285026[(1)]);
if((state_val_285027 === (7))){
var inst_285020 = (state_285026[(2)]);
var state_285026__$1 = state_285026;
var statearr_285029_285271 = state_285026__$1;
(statearr_285029_285271[(2)] = inst_285020);

(statearr_285029_285271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (20))){
var state_285026__$1 = state_285026;
var statearr_285031_285276 = state_285026__$1;
(statearr_285031_285276[(2)] = null);

(statearr_285031_285276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (1))){
var state_285026__$1 = state_285026;
var statearr_285034_285278 = state_285026__$1;
(statearr_285034_285278[(2)] = null);

(statearr_285034_285278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (4))){
var inst_284986 = (state_285026[(7)]);
var inst_284986__$1 = (state_285026[(2)]);
var inst_284987 = (inst_284986__$1 == null);
var state_285026__$1 = (function (){var statearr_285035 = state_285026;
(statearr_285035[(7)] = inst_284986__$1);

return statearr_285035;
})();
if(cljs.core.truth_(inst_284987)){
var statearr_285037_285285 = state_285026__$1;
(statearr_285037_285285[(1)] = (5));

} else {
var statearr_285038_285287 = state_285026__$1;
(statearr_285038_285287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (15))){
var inst_284999 = (state_285026[(8)]);
var state_285026__$1 = state_285026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_285026__$1,(18),to,inst_284999);
} else {
if((state_val_285027 === (21))){
var inst_285014 = (state_285026[(2)]);
var state_285026__$1 = state_285026;
var statearr_285039_285288 = state_285026__$1;
(statearr_285039_285288[(2)] = inst_285014);

(statearr_285039_285288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (13))){
var inst_285017 = (state_285026[(2)]);
var state_285026__$1 = (function (){var statearr_285044 = state_285026;
(statearr_285044[(9)] = inst_285017);

return statearr_285044;
})();
var statearr_285046_285295 = state_285026__$1;
(statearr_285046_285295[(2)] = null);

(statearr_285046_285295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (6))){
var inst_284986 = (state_285026[(7)]);
var state_285026__$1 = state_285026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_285026__$1,(11),inst_284986);
} else {
if((state_val_285027 === (17))){
var inst_285009 = (state_285026[(2)]);
var state_285026__$1 = state_285026;
if(cljs.core.truth_(inst_285009)){
var statearr_285047_285298 = state_285026__$1;
(statearr_285047_285298[(1)] = (19));

} else {
var statearr_285049_285299 = state_285026__$1;
(statearr_285049_285299[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (3))){
var inst_285022 = (state_285026[(2)]);
var state_285026__$1 = state_285026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_285026__$1,inst_285022);
} else {
if((state_val_285027 === (12))){
var inst_284996 = (state_285026[(10)]);
var state_285026__$1 = state_285026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_285026__$1,(14),inst_284996);
} else {
if((state_val_285027 === (2))){
var state_285026__$1 = state_285026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_285026__$1,(4),results);
} else {
if((state_val_285027 === (19))){
var state_285026__$1 = state_285026;
var statearr_285054_285307 = state_285026__$1;
(statearr_285054_285307[(2)] = null);

(statearr_285054_285307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (11))){
var inst_284996 = (state_285026[(2)]);
var state_285026__$1 = (function (){var statearr_285056 = state_285026;
(statearr_285056[(10)] = inst_284996);

return statearr_285056;
})();
var statearr_285057_285308 = state_285026__$1;
(statearr_285057_285308[(2)] = null);

(statearr_285057_285308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (9))){
var state_285026__$1 = state_285026;
var statearr_285058_285313 = state_285026__$1;
(statearr_285058_285313[(2)] = null);

(statearr_285058_285313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (5))){
var state_285026__$1 = state_285026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_285060_285317 = state_285026__$1;
(statearr_285060_285317[(1)] = (8));

} else {
var statearr_285061_285318 = state_285026__$1;
(statearr_285061_285318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (14))){
var inst_285003 = (state_285026[(11)]);
var inst_284999 = (state_285026[(8)]);
var inst_284999__$1 = (state_285026[(2)]);
var inst_285002 = (inst_284999__$1 == null);
var inst_285003__$1 = cljs.core.not.call(null,inst_285002);
var state_285026__$1 = (function (){var statearr_285062 = state_285026;
(statearr_285062[(11)] = inst_285003__$1);

(statearr_285062[(8)] = inst_284999__$1);

return statearr_285062;
})();
if(inst_285003__$1){
var statearr_285063_285323 = state_285026__$1;
(statearr_285063_285323[(1)] = (15));

} else {
var statearr_285064_285326 = state_285026__$1;
(statearr_285064_285326[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (16))){
var inst_285003 = (state_285026[(11)]);
var state_285026__$1 = state_285026;
var statearr_285067_285329 = state_285026__$1;
(statearr_285067_285329[(2)] = inst_285003);

(statearr_285067_285329[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (10))){
var inst_284993 = (state_285026[(2)]);
var state_285026__$1 = state_285026;
var statearr_285070_285332 = state_285026__$1;
(statearr_285070_285332[(2)] = inst_284993);

(statearr_285070_285332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (18))){
var inst_285006 = (state_285026[(2)]);
var state_285026__$1 = state_285026;
var statearr_285073_285333 = state_285026__$1;
(statearr_285073_285333[(2)] = inst_285006);

(statearr_285073_285333[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285027 === (8))){
var inst_284990 = cljs.core.async.close_BANG_.call(null,to);
var state_285026__$1 = state_285026;
var statearr_285075_285346 = state_285026__$1;
(statearr_285075_285346[(2)] = inst_284990);

(statearr_285075_285346[(1)] = (10));


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
var statearr_285082 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_285082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_285082[(1)] = (1));

return statearr_285082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_285026){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_285026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e285083){if((e285083 instanceof Object)){
var ex__38083__auto__ = e285083;
var statearr_285085_285351 = state_285026;
(statearr_285085_285351[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_285026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e285083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__285353 = state_285026;
state_285026 = G__285353;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_285026){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_285026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_285086 = f__38101__auto__.call(null);
(statearr_285086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_285086;
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
var args285357 = [];
var len__36260__auto___285371 = arguments.length;
var i__36261__auto___285372 = (0);
while(true){
if((i__36261__auto___285372 < len__36260__auto___285371)){
args285357.push((arguments[i__36261__auto___285372]));

var G__285373 = (i__36261__auto___285372 + (1));
i__36261__auto___285372 = G__285373;
continue;
} else {
}
break;
}

var G__285363 = args285357.length;
switch (G__285363) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285357.length)].join('')));

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
var args285379 = [];
var len__36260__auto___285395 = arguments.length;
var i__36261__auto___285396 = (0);
while(true){
if((i__36261__auto___285396 < len__36260__auto___285395)){
args285379.push((arguments[i__36261__auto___285396]));

var G__285398 = (i__36261__auto___285396 + (1));
i__36261__auto___285396 = G__285398;
continue;
} else {
}
break;
}

var G__285384 = args285379.length;
switch (G__285384) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285379.length)].join('')));

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
var args285417 = [];
var len__36260__auto___285485 = arguments.length;
var i__36261__auto___285486 = (0);
while(true){
if((i__36261__auto___285486 < len__36260__auto___285485)){
args285417.push((arguments[i__36261__auto___285486]));

var G__285489 = (i__36261__auto___285486 + (1));
i__36261__auto___285486 = G__285489;
continue;
} else {
}
break;
}

var G__285423 = args285417.length;
switch (G__285423) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285417.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38100__auto___285492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___285492,tc,fc){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___285492,tc,fc){
return (function (state_285451){
var state_val_285452 = (state_285451[(1)]);
if((state_val_285452 === (7))){
var inst_285447 = (state_285451[(2)]);
var state_285451__$1 = state_285451;
var statearr_285454_285499 = state_285451__$1;
(statearr_285454_285499[(2)] = inst_285447);

(statearr_285454_285499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285452 === (1))){
var state_285451__$1 = state_285451;
var statearr_285456_285501 = state_285451__$1;
(statearr_285456_285501[(2)] = null);

(statearr_285456_285501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285452 === (4))){
var inst_285427 = (state_285451[(7)]);
var inst_285427__$1 = (state_285451[(2)]);
var inst_285428 = (inst_285427__$1 == null);
var state_285451__$1 = (function (){var statearr_285458 = state_285451;
(statearr_285458[(7)] = inst_285427__$1);

return statearr_285458;
})();
if(cljs.core.truth_(inst_285428)){
var statearr_285459_285507 = state_285451__$1;
(statearr_285459_285507[(1)] = (5));

} else {
var statearr_285460_285509 = state_285451__$1;
(statearr_285460_285509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285452 === (13))){
var state_285451__$1 = state_285451;
var statearr_285461_285512 = state_285451__$1;
(statearr_285461_285512[(2)] = null);

(statearr_285461_285512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285452 === (6))){
var inst_285427 = (state_285451[(7)]);
var inst_285434 = p.call(null,inst_285427);
var state_285451__$1 = state_285451;
if(cljs.core.truth_(inst_285434)){
var statearr_285462_285513 = state_285451__$1;
(statearr_285462_285513[(1)] = (9));

} else {
var statearr_285463_285514 = state_285451__$1;
(statearr_285463_285514[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285452 === (3))){
var inst_285449 = (state_285451[(2)]);
var state_285451__$1 = state_285451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_285451__$1,inst_285449);
} else {
if((state_val_285452 === (12))){
var state_285451__$1 = state_285451;
var statearr_285464_285519 = state_285451__$1;
(statearr_285464_285519[(2)] = null);

(statearr_285464_285519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285452 === (2))){
var state_285451__$1 = state_285451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_285451__$1,(4),ch);
} else {
if((state_val_285452 === (11))){
var inst_285427 = (state_285451[(7)]);
var inst_285438 = (state_285451[(2)]);
var state_285451__$1 = state_285451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_285451__$1,(8),inst_285438,inst_285427);
} else {
if((state_val_285452 === (9))){
var state_285451__$1 = state_285451;
var statearr_285467_285524 = state_285451__$1;
(statearr_285467_285524[(2)] = tc);

(statearr_285467_285524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285452 === (5))){
var inst_285430 = cljs.core.async.close_BANG_.call(null,tc);
var inst_285431 = cljs.core.async.close_BANG_.call(null,fc);
var state_285451__$1 = (function (){var statearr_285469 = state_285451;
(statearr_285469[(8)] = inst_285430);

return statearr_285469;
})();
var statearr_285470_285531 = state_285451__$1;
(statearr_285470_285531[(2)] = inst_285431);

(statearr_285470_285531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285452 === (14))){
var inst_285445 = (state_285451[(2)]);
var state_285451__$1 = state_285451;
var statearr_285471_285533 = state_285451__$1;
(statearr_285471_285533[(2)] = inst_285445);

(statearr_285471_285533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285452 === (10))){
var state_285451__$1 = state_285451;
var statearr_285472_285534 = state_285451__$1;
(statearr_285472_285534[(2)] = fc);

(statearr_285472_285534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285452 === (8))){
var inst_285440 = (state_285451[(2)]);
var state_285451__$1 = state_285451;
if(cljs.core.truth_(inst_285440)){
var statearr_285474_285538 = state_285451__$1;
(statearr_285474_285538[(1)] = (12));

} else {
var statearr_285475_285540 = state_285451__$1;
(statearr_285475_285540[(1)] = (13));

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
});})(c__38100__auto___285492,tc,fc))
;
return ((function (switch__38079__auto__,c__38100__auto___285492,tc,fc){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_285480 = [null,null,null,null,null,null,null,null,null];
(statearr_285480[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_285480[(1)] = (1));

return statearr_285480;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_285451){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_285451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e285481){if((e285481 instanceof Object)){
var ex__38083__auto__ = e285481;
var statearr_285482_285543 = state_285451;
(statearr_285482_285543[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_285451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e285481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__285547 = state_285451;
state_285451 = G__285547;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_285451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_285451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___285492,tc,fc))
})();
var state__38102__auto__ = (function (){var statearr_285484 = f__38101__auto__.call(null);
(statearr_285484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___285492);

return statearr_285484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___285492,tc,fc))
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
return (function (state_285611){
var state_val_285612 = (state_285611[(1)]);
if((state_val_285612 === (1))){
var inst_285597 = init;
var state_285611__$1 = (function (){var statearr_285616 = state_285611;
(statearr_285616[(7)] = inst_285597);

return statearr_285616;
})();
var statearr_285618_285641 = state_285611__$1;
(statearr_285618_285641[(2)] = null);

(statearr_285618_285641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285612 === (2))){
var state_285611__$1 = state_285611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_285611__$1,(4),ch);
} else {
if((state_val_285612 === (3))){
var inst_285609 = (state_285611[(2)]);
var state_285611__$1 = state_285611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_285611__$1,inst_285609);
} else {
if((state_val_285612 === (4))){
var inst_285600 = (state_285611[(8)]);
var inst_285600__$1 = (state_285611[(2)]);
var inst_285601 = (inst_285600__$1 == null);
var state_285611__$1 = (function (){var statearr_285621 = state_285611;
(statearr_285621[(8)] = inst_285600__$1);

return statearr_285621;
})();
if(cljs.core.truth_(inst_285601)){
var statearr_285622_285654 = state_285611__$1;
(statearr_285622_285654[(1)] = (5));

} else {
var statearr_285623_285655 = state_285611__$1;
(statearr_285623_285655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285612 === (5))){
var inst_285597 = (state_285611[(7)]);
var state_285611__$1 = state_285611;
var statearr_285624_285656 = state_285611__$1;
(statearr_285624_285656[(2)] = inst_285597);

(statearr_285624_285656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285612 === (6))){
var inst_285600 = (state_285611[(8)]);
var inst_285597 = (state_285611[(7)]);
var inst_285604 = f.call(null,inst_285597,inst_285600);
var inst_285597__$1 = inst_285604;
var state_285611__$1 = (function (){var statearr_285625 = state_285611;
(statearr_285625[(7)] = inst_285597__$1);

return statearr_285625;
})();
var statearr_285626_285660 = state_285611__$1;
(statearr_285626_285660[(2)] = null);

(statearr_285626_285660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285612 === (7))){
var inst_285607 = (state_285611[(2)]);
var state_285611__$1 = state_285611;
var statearr_285627_285661 = state_285611__$1;
(statearr_285627_285661[(2)] = inst_285607);

(statearr_285627_285661[(1)] = (3));


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
var statearr_285633 = [null,null,null,null,null,null,null,null,null];
(statearr_285633[(0)] = cljs$core$async$reduce_$_state_machine__38080__auto__);

(statearr_285633[(1)] = (1));

return statearr_285633;
});
var cljs$core$async$reduce_$_state_machine__38080__auto____1 = (function (state_285611){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_285611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e285635){if((e285635 instanceof Object)){
var ex__38083__auto__ = e285635;
var statearr_285636_285665 = state_285611;
(statearr_285636_285665[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_285611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e285635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__285668 = state_285611;
state_285611 = G__285668;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38080__auto__ = function(state_285611){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38080__auto____1.call(this,state_285611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38080__auto____0;
cljs$core$async$reduce_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38080__auto____1;
return cljs$core$async$reduce_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_285637 = f__38101__auto__.call(null);
(statearr_285637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_285637;
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
var args285674 = [];
var len__36260__auto___285754 = arguments.length;
var i__36261__auto___285755 = (0);
while(true){
if((i__36261__auto___285755 < len__36260__auto___285754)){
args285674.push((arguments[i__36261__auto___285755]));

var G__285756 = (i__36261__auto___285755 + (1));
i__36261__auto___285755 = G__285756;
continue;
} else {
}
break;
}

var G__285679 = args285674.length;
switch (G__285679) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args285674.length)].join('')));

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
return (function (state_285708){
var state_val_285709 = (state_285708[(1)]);
if((state_val_285709 === (7))){
var inst_285688 = (state_285708[(2)]);
var state_285708__$1 = state_285708;
var statearr_285710_285763 = state_285708__$1;
(statearr_285710_285763[(2)] = inst_285688);

(statearr_285710_285763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285709 === (1))){
var inst_285680 = cljs.core.seq.call(null,coll);
var inst_285681 = inst_285680;
var state_285708__$1 = (function (){var statearr_285711 = state_285708;
(statearr_285711[(7)] = inst_285681);

return statearr_285711;
})();
var statearr_285712_285764 = state_285708__$1;
(statearr_285712_285764[(2)] = null);

(statearr_285712_285764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285709 === (4))){
var inst_285681 = (state_285708[(7)]);
var inst_285685 = cljs.core.first.call(null,inst_285681);
var state_285708__$1 = state_285708;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_285708__$1,(7),ch,inst_285685);
} else {
if((state_val_285709 === (13))){
var inst_285701 = (state_285708[(2)]);
var state_285708__$1 = state_285708;
var statearr_285715_285768 = state_285708__$1;
(statearr_285715_285768[(2)] = inst_285701);

(statearr_285715_285768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285709 === (6))){
var inst_285691 = (state_285708[(2)]);
var state_285708__$1 = state_285708;
if(cljs.core.truth_(inst_285691)){
var statearr_285717_285769 = state_285708__$1;
(statearr_285717_285769[(1)] = (8));

} else {
var statearr_285718_285770 = state_285708__$1;
(statearr_285718_285770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285709 === (3))){
var inst_285705 = (state_285708[(2)]);
var state_285708__$1 = state_285708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_285708__$1,inst_285705);
} else {
if((state_val_285709 === (12))){
var state_285708__$1 = state_285708;
var statearr_285719_285777 = state_285708__$1;
(statearr_285719_285777[(2)] = null);

(statearr_285719_285777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285709 === (2))){
var inst_285681 = (state_285708[(7)]);
var state_285708__$1 = state_285708;
if(cljs.core.truth_(inst_285681)){
var statearr_285720_285779 = state_285708__$1;
(statearr_285720_285779[(1)] = (4));

} else {
var statearr_285721_285780 = state_285708__$1;
(statearr_285721_285780[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285709 === (11))){
var inst_285698 = cljs.core.async.close_BANG_.call(null,ch);
var state_285708__$1 = state_285708;
var statearr_285730_285781 = state_285708__$1;
(statearr_285730_285781[(2)] = inst_285698);

(statearr_285730_285781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285709 === (9))){
var state_285708__$1 = state_285708;
if(cljs.core.truth_(close_QMARK_)){
var statearr_285734_285783 = state_285708__$1;
(statearr_285734_285783[(1)] = (11));

} else {
var statearr_285735_285785 = state_285708__$1;
(statearr_285735_285785[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285709 === (5))){
var inst_285681 = (state_285708[(7)]);
var state_285708__$1 = state_285708;
var statearr_285736_285787 = state_285708__$1;
(statearr_285736_285787[(2)] = inst_285681);

(statearr_285736_285787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285709 === (10))){
var inst_285703 = (state_285708[(2)]);
var state_285708__$1 = state_285708;
var statearr_285737_285789 = state_285708__$1;
(statearr_285737_285789[(2)] = inst_285703);

(statearr_285737_285789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_285709 === (8))){
var inst_285681 = (state_285708[(7)]);
var inst_285694 = cljs.core.next.call(null,inst_285681);
var inst_285681__$1 = inst_285694;
var state_285708__$1 = (function (){var statearr_285738 = state_285708;
(statearr_285738[(7)] = inst_285681__$1);

return statearr_285738;
})();
var statearr_285739_285790 = state_285708__$1;
(statearr_285739_285790[(2)] = null);

(statearr_285739_285790[(1)] = (2));


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
var statearr_285749 = [null,null,null,null,null,null,null,null];
(statearr_285749[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_285749[(1)] = (1));

return statearr_285749;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_285708){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_285708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e285750){if((e285750 instanceof Object)){
var ex__38083__auto__ = e285750;
var statearr_285751_285793 = state_285708;
(statearr_285751_285793[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_285708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e285750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__285795 = state_285708;
state_285708 = G__285795;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_285708){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_285708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_285753 = f__38101__auto__.call(null);
(statearr_285753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_285753;
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
if(typeof cljs.core.async.t_cljs$core$async286082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async286082 = (function (mult,ch,cs,meta286083){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta286083 = meta286083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async286082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_286084,meta286083__$1){
var self__ = this;
var _286084__$1 = this;
return (new cljs.core.async.t_cljs$core$async286082(self__.mult,self__.ch,self__.cs,meta286083__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async286082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_286084){
var self__ = this;
var _286084__$1 = this;
return self__.meta286083;
});})(cs))
;

cljs.core.async.t_cljs$core$async286082.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async286082.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async286082.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async286082.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async286082.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async286082.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async286082.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta286083","meta286083",1035639348,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async286082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async286082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async286082";

cljs.core.async.t_cljs$core$async286082.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async286082");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async286082 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async286082(mult__$1,ch__$1,cs__$1,meta286083){
return (new cljs.core.async.t_cljs$core$async286082(mult__$1,ch__$1,cs__$1,meta286083));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async286082(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38100__auto___286347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___286347,cs,m,dchan,dctr,done){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___286347,cs,m,dchan,dctr,done){
return (function (state_286231){
var state_val_286233 = (state_286231[(1)]);
if((state_val_286233 === (7))){
var inst_286226 = (state_286231[(2)]);
var state_286231__$1 = state_286231;
var statearr_286235_286349 = state_286231__$1;
(statearr_286235_286349[(2)] = inst_286226);

(statearr_286235_286349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (20))){
var inst_286128 = (state_286231[(7)]);
var inst_286139 = cljs.core.first.call(null,inst_286128);
var inst_286140 = cljs.core.nth.call(null,inst_286139,(0),null);
var inst_286141 = cljs.core.nth.call(null,inst_286139,(1),null);
var state_286231__$1 = (function (){var statearr_286236 = state_286231;
(statearr_286236[(8)] = inst_286140);

return statearr_286236;
})();
if(cljs.core.truth_(inst_286141)){
var statearr_286237_286350 = state_286231__$1;
(statearr_286237_286350[(1)] = (22));

} else {
var statearr_286238_286351 = state_286231__$1;
(statearr_286238_286351[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (27))){
var inst_286178 = (state_286231[(9)]);
var inst_286093 = (state_286231[(10)]);
var inst_286171 = (state_286231[(11)]);
var inst_286173 = (state_286231[(12)]);
var inst_286178__$1 = cljs.core._nth.call(null,inst_286171,inst_286173);
var inst_286179 = cljs.core.async.put_BANG_.call(null,inst_286178__$1,inst_286093,done);
var state_286231__$1 = (function (){var statearr_286239 = state_286231;
(statearr_286239[(9)] = inst_286178__$1);

return statearr_286239;
})();
if(cljs.core.truth_(inst_286179)){
var statearr_286240_286352 = state_286231__$1;
(statearr_286240_286352[(1)] = (30));

} else {
var statearr_286241_286353 = state_286231__$1;
(statearr_286241_286353[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (1))){
var state_286231__$1 = state_286231;
var statearr_286242_286354 = state_286231__$1;
(statearr_286242_286354[(2)] = null);

(statearr_286242_286354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (24))){
var inst_286128 = (state_286231[(7)]);
var inst_286147 = (state_286231[(2)]);
var inst_286148 = cljs.core.next.call(null,inst_286128);
var inst_286102 = inst_286148;
var inst_286103 = null;
var inst_286104 = (0);
var inst_286105 = (0);
var state_286231__$1 = (function (){var statearr_286243 = state_286231;
(statearr_286243[(13)] = inst_286103);

(statearr_286243[(14)] = inst_286147);

(statearr_286243[(15)] = inst_286102);

(statearr_286243[(16)] = inst_286104);

(statearr_286243[(17)] = inst_286105);

return statearr_286243;
})();
var statearr_286244_286355 = state_286231__$1;
(statearr_286244_286355[(2)] = null);

(statearr_286244_286355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (39))){
var state_286231__$1 = state_286231;
var statearr_286248_286356 = state_286231__$1;
(statearr_286248_286356[(2)] = null);

(statearr_286248_286356[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (4))){
var inst_286093 = (state_286231[(10)]);
var inst_286093__$1 = (state_286231[(2)]);
var inst_286094 = (inst_286093__$1 == null);
var state_286231__$1 = (function (){var statearr_286249 = state_286231;
(statearr_286249[(10)] = inst_286093__$1);

return statearr_286249;
})();
if(cljs.core.truth_(inst_286094)){
var statearr_286250_286357 = state_286231__$1;
(statearr_286250_286357[(1)] = (5));

} else {
var statearr_286251_286358 = state_286231__$1;
(statearr_286251_286358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (15))){
var inst_286103 = (state_286231[(13)]);
var inst_286102 = (state_286231[(15)]);
var inst_286104 = (state_286231[(16)]);
var inst_286105 = (state_286231[(17)]);
var inst_286118 = (state_286231[(2)]);
var inst_286119 = (inst_286105 + (1));
var tmp286245 = inst_286103;
var tmp286246 = inst_286102;
var tmp286247 = inst_286104;
var inst_286102__$1 = tmp286246;
var inst_286103__$1 = tmp286245;
var inst_286104__$1 = tmp286247;
var inst_286105__$1 = inst_286119;
var state_286231__$1 = (function (){var statearr_286252 = state_286231;
(statearr_286252[(13)] = inst_286103__$1);

(statearr_286252[(15)] = inst_286102__$1);

(statearr_286252[(16)] = inst_286104__$1);

(statearr_286252[(18)] = inst_286118);

(statearr_286252[(17)] = inst_286105__$1);

return statearr_286252;
})();
var statearr_286257_286359 = state_286231__$1;
(statearr_286257_286359[(2)] = null);

(statearr_286257_286359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (21))){
var inst_286151 = (state_286231[(2)]);
var state_286231__$1 = state_286231;
var statearr_286262_286360 = state_286231__$1;
(statearr_286262_286360[(2)] = inst_286151);

(statearr_286262_286360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (31))){
var inst_286178 = (state_286231[(9)]);
var inst_286182 = done.call(null,null);
var inst_286183 = cljs.core.async.untap_STAR_.call(null,m,inst_286178);
var state_286231__$1 = (function (){var statearr_286264 = state_286231;
(statearr_286264[(19)] = inst_286182);

return statearr_286264;
})();
var statearr_286265_286361 = state_286231__$1;
(statearr_286265_286361[(2)] = inst_286183);

(statearr_286265_286361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (32))){
var inst_286170 = (state_286231[(20)]);
var inst_286171 = (state_286231[(11)]);
var inst_286173 = (state_286231[(12)]);
var inst_286172 = (state_286231[(21)]);
var inst_286185 = (state_286231[(2)]);
var inst_286186 = (inst_286173 + (1));
var tmp286258 = inst_286170;
var tmp286259 = inst_286171;
var tmp286260 = inst_286172;
var inst_286170__$1 = tmp286258;
var inst_286171__$1 = tmp286259;
var inst_286172__$1 = tmp286260;
var inst_286173__$1 = inst_286186;
var state_286231__$1 = (function (){var statearr_286267 = state_286231;
(statearr_286267[(22)] = inst_286185);

(statearr_286267[(20)] = inst_286170__$1);

(statearr_286267[(11)] = inst_286171__$1);

(statearr_286267[(12)] = inst_286173__$1);

(statearr_286267[(21)] = inst_286172__$1);

return statearr_286267;
})();
var statearr_286268_286362 = state_286231__$1;
(statearr_286268_286362[(2)] = null);

(statearr_286268_286362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (40))){
var inst_286198 = (state_286231[(23)]);
var inst_286202 = done.call(null,null);
var inst_286203 = cljs.core.async.untap_STAR_.call(null,m,inst_286198);
var state_286231__$1 = (function (){var statearr_286269 = state_286231;
(statearr_286269[(24)] = inst_286202);

return statearr_286269;
})();
var statearr_286270_286366 = state_286231__$1;
(statearr_286270_286366[(2)] = inst_286203);

(statearr_286270_286366[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (33))){
var inst_286189 = (state_286231[(25)]);
var inst_286191 = cljs.core.chunked_seq_QMARK_.call(null,inst_286189);
var state_286231__$1 = state_286231;
if(inst_286191){
var statearr_286271_286373 = state_286231__$1;
(statearr_286271_286373[(1)] = (36));

} else {
var statearr_286272_286374 = state_286231__$1;
(statearr_286272_286374[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (13))){
var inst_286112 = (state_286231[(26)]);
var inst_286115 = cljs.core.async.close_BANG_.call(null,inst_286112);
var state_286231__$1 = state_286231;
var statearr_286273_286375 = state_286231__$1;
(statearr_286273_286375[(2)] = inst_286115);

(statearr_286273_286375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (22))){
var inst_286140 = (state_286231[(8)]);
var inst_286144 = cljs.core.async.close_BANG_.call(null,inst_286140);
var state_286231__$1 = state_286231;
var statearr_286275_286376 = state_286231__$1;
(statearr_286275_286376[(2)] = inst_286144);

(statearr_286275_286376[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (36))){
var inst_286189 = (state_286231[(25)]);
var inst_286193 = cljs.core.chunk_first.call(null,inst_286189);
var inst_286194 = cljs.core.chunk_rest.call(null,inst_286189);
var inst_286195 = cljs.core.count.call(null,inst_286193);
var inst_286170 = inst_286194;
var inst_286171 = inst_286193;
var inst_286172 = inst_286195;
var inst_286173 = (0);
var state_286231__$1 = (function (){var statearr_286278 = state_286231;
(statearr_286278[(20)] = inst_286170);

(statearr_286278[(11)] = inst_286171);

(statearr_286278[(12)] = inst_286173);

(statearr_286278[(21)] = inst_286172);

return statearr_286278;
})();
var statearr_286279_286377 = state_286231__$1;
(statearr_286279_286377[(2)] = null);

(statearr_286279_286377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (41))){
var inst_286189 = (state_286231[(25)]);
var inst_286205 = (state_286231[(2)]);
var inst_286206 = cljs.core.next.call(null,inst_286189);
var inst_286170 = inst_286206;
var inst_286171 = null;
var inst_286172 = (0);
var inst_286173 = (0);
var state_286231__$1 = (function (){var statearr_286281 = state_286231;
(statearr_286281[(20)] = inst_286170);

(statearr_286281[(11)] = inst_286171);

(statearr_286281[(27)] = inst_286205);

(statearr_286281[(12)] = inst_286173);

(statearr_286281[(21)] = inst_286172);

return statearr_286281;
})();
var statearr_286282_286378 = state_286231__$1;
(statearr_286282_286378[(2)] = null);

(statearr_286282_286378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (43))){
var state_286231__$1 = state_286231;
var statearr_286283_286379 = state_286231__$1;
(statearr_286283_286379[(2)] = null);

(statearr_286283_286379[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (29))){
var inst_286214 = (state_286231[(2)]);
var state_286231__$1 = state_286231;
var statearr_286284_286380 = state_286231__$1;
(statearr_286284_286380[(2)] = inst_286214);

(statearr_286284_286380[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (44))){
var inst_286223 = (state_286231[(2)]);
var state_286231__$1 = (function (){var statearr_286285 = state_286231;
(statearr_286285[(28)] = inst_286223);

return statearr_286285;
})();
var statearr_286286_286381 = state_286231__$1;
(statearr_286286_286381[(2)] = null);

(statearr_286286_286381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (6))){
var inst_286161 = (state_286231[(29)]);
var inst_286160 = cljs.core.deref.call(null,cs);
var inst_286161__$1 = cljs.core.keys.call(null,inst_286160);
var inst_286162 = cljs.core.count.call(null,inst_286161__$1);
var inst_286163 = cljs.core.reset_BANG_.call(null,dctr,inst_286162);
var inst_286169 = cljs.core.seq.call(null,inst_286161__$1);
var inst_286170 = inst_286169;
var inst_286171 = null;
var inst_286172 = (0);
var inst_286173 = (0);
var state_286231__$1 = (function (){var statearr_286287 = state_286231;
(statearr_286287[(20)] = inst_286170);

(statearr_286287[(29)] = inst_286161__$1);

(statearr_286287[(30)] = inst_286163);

(statearr_286287[(11)] = inst_286171);

(statearr_286287[(12)] = inst_286173);

(statearr_286287[(21)] = inst_286172);

return statearr_286287;
})();
var statearr_286288_286382 = state_286231__$1;
(statearr_286288_286382[(2)] = null);

(statearr_286288_286382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (28))){
var inst_286170 = (state_286231[(20)]);
var inst_286189 = (state_286231[(25)]);
var inst_286189__$1 = cljs.core.seq.call(null,inst_286170);
var state_286231__$1 = (function (){var statearr_286289 = state_286231;
(statearr_286289[(25)] = inst_286189__$1);

return statearr_286289;
})();
if(inst_286189__$1){
var statearr_286290_286387 = state_286231__$1;
(statearr_286290_286387[(1)] = (33));

} else {
var statearr_286291_286388 = state_286231__$1;
(statearr_286291_286388[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (25))){
var inst_286173 = (state_286231[(12)]);
var inst_286172 = (state_286231[(21)]);
var inst_286175 = (inst_286173 < inst_286172);
var inst_286176 = inst_286175;
var state_286231__$1 = state_286231;
if(cljs.core.truth_(inst_286176)){
var statearr_286295_286389 = state_286231__$1;
(statearr_286295_286389[(1)] = (27));

} else {
var statearr_286296_286390 = state_286231__$1;
(statearr_286296_286390[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (34))){
var state_286231__$1 = state_286231;
var statearr_286297_286391 = state_286231__$1;
(statearr_286297_286391[(2)] = null);

(statearr_286297_286391[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (17))){
var state_286231__$1 = state_286231;
var statearr_286298_286392 = state_286231__$1;
(statearr_286298_286392[(2)] = null);

(statearr_286298_286392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (3))){
var inst_286228 = (state_286231[(2)]);
var state_286231__$1 = state_286231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286231__$1,inst_286228);
} else {
if((state_val_286233 === (12))){
var inst_286156 = (state_286231[(2)]);
var state_286231__$1 = state_286231;
var statearr_286299_286394 = state_286231__$1;
(statearr_286299_286394[(2)] = inst_286156);

(statearr_286299_286394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (2))){
var state_286231__$1 = state_286231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286231__$1,(4),ch);
} else {
if((state_val_286233 === (23))){
var state_286231__$1 = state_286231;
var statearr_286300_286395 = state_286231__$1;
(statearr_286300_286395[(2)] = null);

(statearr_286300_286395[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (35))){
var inst_286212 = (state_286231[(2)]);
var state_286231__$1 = state_286231;
var statearr_286301_286396 = state_286231__$1;
(statearr_286301_286396[(2)] = inst_286212);

(statearr_286301_286396[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (19))){
var inst_286128 = (state_286231[(7)]);
var inst_286132 = cljs.core.chunk_first.call(null,inst_286128);
var inst_286133 = cljs.core.chunk_rest.call(null,inst_286128);
var inst_286134 = cljs.core.count.call(null,inst_286132);
var inst_286102 = inst_286133;
var inst_286103 = inst_286132;
var inst_286104 = inst_286134;
var inst_286105 = (0);
var state_286231__$1 = (function (){var statearr_286302 = state_286231;
(statearr_286302[(13)] = inst_286103);

(statearr_286302[(15)] = inst_286102);

(statearr_286302[(16)] = inst_286104);

(statearr_286302[(17)] = inst_286105);

return statearr_286302;
})();
var statearr_286303_286400 = state_286231__$1;
(statearr_286303_286400[(2)] = null);

(statearr_286303_286400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (11))){
var inst_286102 = (state_286231[(15)]);
var inst_286128 = (state_286231[(7)]);
var inst_286128__$1 = cljs.core.seq.call(null,inst_286102);
var state_286231__$1 = (function (){var statearr_286304 = state_286231;
(statearr_286304[(7)] = inst_286128__$1);

return statearr_286304;
})();
if(inst_286128__$1){
var statearr_286305_286401 = state_286231__$1;
(statearr_286305_286401[(1)] = (16));

} else {
var statearr_286306_286402 = state_286231__$1;
(statearr_286306_286402[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (9))){
var inst_286158 = (state_286231[(2)]);
var state_286231__$1 = state_286231;
var statearr_286307_286403 = state_286231__$1;
(statearr_286307_286403[(2)] = inst_286158);

(statearr_286307_286403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (5))){
var inst_286100 = cljs.core.deref.call(null,cs);
var inst_286101 = cljs.core.seq.call(null,inst_286100);
var inst_286102 = inst_286101;
var inst_286103 = null;
var inst_286104 = (0);
var inst_286105 = (0);
var state_286231__$1 = (function (){var statearr_286310 = state_286231;
(statearr_286310[(13)] = inst_286103);

(statearr_286310[(15)] = inst_286102);

(statearr_286310[(16)] = inst_286104);

(statearr_286310[(17)] = inst_286105);

return statearr_286310;
})();
var statearr_286311_286404 = state_286231__$1;
(statearr_286311_286404[(2)] = null);

(statearr_286311_286404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (14))){
var state_286231__$1 = state_286231;
var statearr_286313_286405 = state_286231__$1;
(statearr_286313_286405[(2)] = null);

(statearr_286313_286405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (45))){
var inst_286220 = (state_286231[(2)]);
var state_286231__$1 = state_286231;
var statearr_286314_286407 = state_286231__$1;
(statearr_286314_286407[(2)] = inst_286220);

(statearr_286314_286407[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (26))){
var inst_286161 = (state_286231[(29)]);
var inst_286216 = (state_286231[(2)]);
var inst_286217 = cljs.core.seq.call(null,inst_286161);
var state_286231__$1 = (function (){var statearr_286315 = state_286231;
(statearr_286315[(31)] = inst_286216);

return statearr_286315;
})();
if(inst_286217){
var statearr_286316_286409 = state_286231__$1;
(statearr_286316_286409[(1)] = (42));

} else {
var statearr_286317_286410 = state_286231__$1;
(statearr_286317_286410[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (16))){
var inst_286128 = (state_286231[(7)]);
var inst_286130 = cljs.core.chunked_seq_QMARK_.call(null,inst_286128);
var state_286231__$1 = state_286231;
if(inst_286130){
var statearr_286318_286411 = state_286231__$1;
(statearr_286318_286411[(1)] = (19));

} else {
var statearr_286319_286412 = state_286231__$1;
(statearr_286319_286412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (38))){
var inst_286209 = (state_286231[(2)]);
var state_286231__$1 = state_286231;
var statearr_286320_286413 = state_286231__$1;
(statearr_286320_286413[(2)] = inst_286209);

(statearr_286320_286413[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (30))){
var state_286231__$1 = state_286231;
var statearr_286321_286414 = state_286231__$1;
(statearr_286321_286414[(2)] = null);

(statearr_286321_286414[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (10))){
var inst_286103 = (state_286231[(13)]);
var inst_286105 = (state_286231[(17)]);
var inst_286111 = cljs.core._nth.call(null,inst_286103,inst_286105);
var inst_286112 = cljs.core.nth.call(null,inst_286111,(0),null);
var inst_286113 = cljs.core.nth.call(null,inst_286111,(1),null);
var state_286231__$1 = (function (){var statearr_286324 = state_286231;
(statearr_286324[(26)] = inst_286112);

return statearr_286324;
})();
if(cljs.core.truth_(inst_286113)){
var statearr_286325_286416 = state_286231__$1;
(statearr_286325_286416[(1)] = (13));

} else {
var statearr_286326_286417 = state_286231__$1;
(statearr_286326_286417[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (18))){
var inst_286154 = (state_286231[(2)]);
var state_286231__$1 = state_286231;
var statearr_286328_286419 = state_286231__$1;
(statearr_286328_286419[(2)] = inst_286154);

(statearr_286328_286419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (42))){
var state_286231__$1 = state_286231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_286231__$1,(45),dchan);
} else {
if((state_val_286233 === (37))){
var inst_286093 = (state_286231[(10)]);
var inst_286198 = (state_286231[(23)]);
var inst_286189 = (state_286231[(25)]);
var inst_286198__$1 = cljs.core.first.call(null,inst_286189);
var inst_286199 = cljs.core.async.put_BANG_.call(null,inst_286198__$1,inst_286093,done);
var state_286231__$1 = (function (){var statearr_286329 = state_286231;
(statearr_286329[(23)] = inst_286198__$1);

return statearr_286329;
})();
if(cljs.core.truth_(inst_286199)){
var statearr_286330_286420 = state_286231__$1;
(statearr_286330_286420[(1)] = (39));

} else {
var statearr_286331_286421 = state_286231__$1;
(statearr_286331_286421[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286233 === (8))){
var inst_286104 = (state_286231[(16)]);
var inst_286105 = (state_286231[(17)]);
var inst_286107 = (inst_286105 < inst_286104);
var inst_286108 = inst_286107;
var state_286231__$1 = state_286231;
if(cljs.core.truth_(inst_286108)){
var statearr_286332_286422 = state_286231__$1;
(statearr_286332_286422[(1)] = (10));

} else {
var statearr_286333_286423 = state_286231__$1;
(statearr_286333_286423[(1)] = (11));

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
});})(c__38100__auto___286347,cs,m,dchan,dctr,done))
;
return ((function (switch__38079__auto__,c__38100__auto___286347,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38080__auto__ = null;
var cljs$core$async$mult_$_state_machine__38080__auto____0 = (function (){
var statearr_286341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_286341[(0)] = cljs$core$async$mult_$_state_machine__38080__auto__);

(statearr_286341[(1)] = (1));

return statearr_286341;
});
var cljs$core$async$mult_$_state_machine__38080__auto____1 = (function (state_286231){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_286231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e286342){if((e286342 instanceof Object)){
var ex__38083__auto__ = e286342;
var statearr_286343_286424 = state_286231;
(statearr_286343_286424[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286425 = state_286231;
state_286231 = G__286425;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38080__auto__ = function(state_286231){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38080__auto____1.call(this,state_286231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38080__auto____0;
cljs$core$async$mult_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38080__auto____1;
return cljs$core$async$mult_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___286347,cs,m,dchan,dctr,done))
})();
var state__38102__auto__ = (function (){var statearr_286344 = f__38101__auto__.call(null);
(statearr_286344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___286347);

return statearr_286344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___286347,cs,m,dchan,dctr,done))
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
var args286426 = [];
var len__36260__auto___286429 = arguments.length;
var i__36261__auto___286430 = (0);
while(true){
if((i__36261__auto___286430 < len__36260__auto___286429)){
args286426.push((arguments[i__36261__auto___286430]));

var G__286431 = (i__36261__auto___286430 + (1));
i__36261__auto___286430 = G__286431;
continue;
} else {
}
break;
}

var G__286428 = args286426.length;
switch (G__286428) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286426.length)].join('')));

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
var len__36260__auto___286460 = arguments.length;
var i__36261__auto___286461 = (0);
while(true){
if((i__36261__auto___286461 < len__36260__auto___286460)){
args__36267__auto__.push((arguments[i__36261__auto___286461]));

var G__286462 = (i__36261__auto___286461 + (1));
i__36261__auto___286461 = G__286462;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((3) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36268__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__286454){
var map__286455 = p__286454;
var map__286455__$1 = ((((!((map__286455 == null)))?((((map__286455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__286455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__286455):map__286455);
var opts = map__286455__$1;
var statearr_286457_286463 = state;
(statearr_286457_286463[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__286455,map__286455__$1,opts){
return (function (val){
var statearr_286458_286464 = state;
(statearr_286458_286464[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__286455,map__286455__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_286459_286465 = state;
(statearr_286459_286465[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq286450){
var G__286451 = cljs.core.first.call(null,seq286450);
var seq286450__$1 = cljs.core.next.call(null,seq286450);
var G__286452 = cljs.core.first.call(null,seq286450__$1);
var seq286450__$2 = cljs.core.next.call(null,seq286450__$1);
var G__286453 = cljs.core.first.call(null,seq286450__$2);
var seq286450__$3 = cljs.core.next.call(null,seq286450__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__286451,G__286452,G__286453,seq286450__$3);
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
if(typeof cljs.core.async.t_cljs$core$async286633 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async286633 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta286634){
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
this.meta286634 = meta286634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async286633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_286635,meta286634__$1){
var self__ = this;
var _286635__$1 = this;
return (new cljs.core.async.t_cljs$core$async286633(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta286634__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async286633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_286635){
var self__ = this;
var _286635__$1 = this;
return self__.meta286634;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async286633.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async286633.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async286633.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async286633.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async286633.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async286633.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async286633.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async286633.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async286633.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta286634","meta286634",942914930,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async286633.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async286633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async286633";

cljs.core.async.t_cljs$core$async286633.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async286633");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async286633 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async286633(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta286634){
return (new cljs.core.async.t_cljs$core$async286633(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta286634));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async286633(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38100__auto___286816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___286816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___286816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_286742){
var state_val_286743 = (state_286742[(1)]);
if((state_val_286743 === (7))){
var inst_286660 = (state_286742[(2)]);
var state_286742__$1 = state_286742;
var statearr_286744_286818 = state_286742__$1;
(statearr_286744_286818[(2)] = inst_286660);

(statearr_286744_286818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (20))){
var inst_286672 = (state_286742[(7)]);
var state_286742__$1 = state_286742;
var statearr_286745_286819 = state_286742__$1;
(statearr_286745_286819[(2)] = inst_286672);

(statearr_286745_286819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (27))){
var state_286742__$1 = state_286742;
var statearr_286746_286820 = state_286742__$1;
(statearr_286746_286820[(2)] = null);

(statearr_286746_286820[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (1))){
var inst_286648 = (state_286742[(8)]);
var inst_286648__$1 = calc_state.call(null);
var inst_286650 = (inst_286648__$1 == null);
var inst_286651 = cljs.core.not.call(null,inst_286650);
var state_286742__$1 = (function (){var statearr_286747 = state_286742;
(statearr_286747[(8)] = inst_286648__$1);

return statearr_286747;
})();
if(inst_286651){
var statearr_286748_286821 = state_286742__$1;
(statearr_286748_286821[(1)] = (2));

} else {
var statearr_286749_286822 = state_286742__$1;
(statearr_286749_286822[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (24))){
var inst_286716 = (state_286742[(9)]);
var inst_286695 = (state_286742[(10)]);
var inst_286702 = (state_286742[(11)]);
var inst_286716__$1 = inst_286695.call(null,inst_286702);
var state_286742__$1 = (function (){var statearr_286750 = state_286742;
(statearr_286750[(9)] = inst_286716__$1);

return statearr_286750;
})();
if(cljs.core.truth_(inst_286716__$1)){
var statearr_286751_286823 = state_286742__$1;
(statearr_286751_286823[(1)] = (29));

} else {
var statearr_286752_286824 = state_286742__$1;
(statearr_286752_286824[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (4))){
var inst_286663 = (state_286742[(2)]);
var state_286742__$1 = state_286742;
if(cljs.core.truth_(inst_286663)){
var statearr_286753_286825 = state_286742__$1;
(statearr_286753_286825[(1)] = (8));

} else {
var statearr_286754_286826 = state_286742__$1;
(statearr_286754_286826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (15))){
var inst_286689 = (state_286742[(2)]);
var state_286742__$1 = state_286742;
if(cljs.core.truth_(inst_286689)){
var statearr_286755_286827 = state_286742__$1;
(statearr_286755_286827[(1)] = (19));

} else {
var statearr_286756_286828 = state_286742__$1;
(statearr_286756_286828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (21))){
var inst_286694 = (state_286742[(12)]);
var inst_286694__$1 = (state_286742[(2)]);
var inst_286695 = cljs.core.get.call(null,inst_286694__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_286696 = cljs.core.get.call(null,inst_286694__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_286697 = cljs.core.get.call(null,inst_286694__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_286742__$1 = (function (){var statearr_286757 = state_286742;
(statearr_286757[(13)] = inst_286696);

(statearr_286757[(10)] = inst_286695);

(statearr_286757[(12)] = inst_286694__$1);

return statearr_286757;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_286742__$1,(22),inst_286697);
} else {
if((state_val_286743 === (31))){
var inst_286724 = (state_286742[(2)]);
var state_286742__$1 = state_286742;
if(cljs.core.truth_(inst_286724)){
var statearr_286762_286829 = state_286742__$1;
(statearr_286762_286829[(1)] = (32));

} else {
var statearr_286763_286830 = state_286742__$1;
(statearr_286763_286830[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (32))){
var inst_286701 = (state_286742[(14)]);
var state_286742__$1 = state_286742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_286742__$1,(35),out,inst_286701);
} else {
if((state_val_286743 === (33))){
var inst_286694 = (state_286742[(12)]);
var inst_286672 = inst_286694;
var state_286742__$1 = (function (){var statearr_286764 = state_286742;
(statearr_286764[(7)] = inst_286672);

return statearr_286764;
})();
var statearr_286765_286831 = state_286742__$1;
(statearr_286765_286831[(2)] = null);

(statearr_286765_286831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (13))){
var inst_286672 = (state_286742[(7)]);
var inst_286679 = inst_286672.cljs$lang$protocol_mask$partition0$;
var inst_286680 = (inst_286679 & (64));
var inst_286681 = inst_286672.cljs$core$ISeq$;
var inst_286682 = (inst_286680) || (inst_286681);
var state_286742__$1 = state_286742;
if(cljs.core.truth_(inst_286682)){
var statearr_286766_286832 = state_286742__$1;
(statearr_286766_286832[(1)] = (16));

} else {
var statearr_286767_286833 = state_286742__$1;
(statearr_286767_286833[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (22))){
var inst_286702 = (state_286742[(11)]);
var inst_286701 = (state_286742[(14)]);
var inst_286700 = (state_286742[(2)]);
var inst_286701__$1 = cljs.core.nth.call(null,inst_286700,(0),null);
var inst_286702__$1 = cljs.core.nth.call(null,inst_286700,(1),null);
var inst_286703 = (inst_286701__$1 == null);
var inst_286704 = cljs.core._EQ_.call(null,inst_286702__$1,change);
var inst_286705 = (inst_286703) || (inst_286704);
var state_286742__$1 = (function (){var statearr_286768 = state_286742;
(statearr_286768[(11)] = inst_286702__$1);

(statearr_286768[(14)] = inst_286701__$1);

return statearr_286768;
})();
if(cljs.core.truth_(inst_286705)){
var statearr_286769_286834 = state_286742__$1;
(statearr_286769_286834[(1)] = (23));

} else {
var statearr_286770_286835 = state_286742__$1;
(statearr_286770_286835[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (36))){
var inst_286694 = (state_286742[(12)]);
var inst_286672 = inst_286694;
var state_286742__$1 = (function (){var statearr_286771 = state_286742;
(statearr_286771[(7)] = inst_286672);

return statearr_286771;
})();
var statearr_286772_286836 = state_286742__$1;
(statearr_286772_286836[(2)] = null);

(statearr_286772_286836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (29))){
var inst_286716 = (state_286742[(9)]);
var state_286742__$1 = state_286742;
var statearr_286773_286837 = state_286742__$1;
(statearr_286773_286837[(2)] = inst_286716);

(statearr_286773_286837[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (6))){
var state_286742__$1 = state_286742;
var statearr_286774_286838 = state_286742__$1;
(statearr_286774_286838[(2)] = false);

(statearr_286774_286838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (28))){
var inst_286712 = (state_286742[(2)]);
var inst_286713 = calc_state.call(null);
var inst_286672 = inst_286713;
var state_286742__$1 = (function (){var statearr_286775 = state_286742;
(statearr_286775[(7)] = inst_286672);

(statearr_286775[(15)] = inst_286712);

return statearr_286775;
})();
var statearr_286776_286839 = state_286742__$1;
(statearr_286776_286839[(2)] = null);

(statearr_286776_286839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (25))){
var inst_286738 = (state_286742[(2)]);
var state_286742__$1 = state_286742;
var statearr_286778_286840 = state_286742__$1;
(statearr_286778_286840[(2)] = inst_286738);

(statearr_286778_286840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (34))){
var inst_286736 = (state_286742[(2)]);
var state_286742__$1 = state_286742;
var statearr_286779_286841 = state_286742__$1;
(statearr_286779_286841[(2)] = inst_286736);

(statearr_286779_286841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (17))){
var state_286742__$1 = state_286742;
var statearr_286780_286842 = state_286742__$1;
(statearr_286780_286842[(2)] = false);

(statearr_286780_286842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (3))){
var state_286742__$1 = state_286742;
var statearr_286781_286843 = state_286742__$1;
(statearr_286781_286843[(2)] = false);

(statearr_286781_286843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (12))){
var inst_286740 = (state_286742[(2)]);
var state_286742__$1 = state_286742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_286742__$1,inst_286740);
} else {
if((state_val_286743 === (2))){
var inst_286648 = (state_286742[(8)]);
var inst_286653 = inst_286648.cljs$lang$protocol_mask$partition0$;
var inst_286654 = (inst_286653 & (64));
var inst_286655 = inst_286648.cljs$core$ISeq$;
var inst_286656 = (inst_286654) || (inst_286655);
var state_286742__$1 = state_286742;
if(cljs.core.truth_(inst_286656)){
var statearr_286782_286844 = state_286742__$1;
(statearr_286782_286844[(1)] = (5));

} else {
var statearr_286783_286845 = state_286742__$1;
(statearr_286783_286845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (23))){
var inst_286701 = (state_286742[(14)]);
var inst_286707 = (inst_286701 == null);
var state_286742__$1 = state_286742;
if(cljs.core.truth_(inst_286707)){
var statearr_286784_286846 = state_286742__$1;
(statearr_286784_286846[(1)] = (26));

} else {
var statearr_286785_286847 = state_286742__$1;
(statearr_286785_286847[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (35))){
var inst_286727 = (state_286742[(2)]);
var state_286742__$1 = state_286742;
if(cljs.core.truth_(inst_286727)){
var statearr_286786_286850 = state_286742__$1;
(statearr_286786_286850[(1)] = (36));

} else {
var statearr_286787_286851 = state_286742__$1;
(statearr_286787_286851[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (19))){
var inst_286672 = (state_286742[(7)]);
var inst_286691 = cljs.core.apply.call(null,cljs.core.hash_map,inst_286672);
var state_286742__$1 = state_286742;
var statearr_286788_286852 = state_286742__$1;
(statearr_286788_286852[(2)] = inst_286691);

(statearr_286788_286852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (11))){
var inst_286672 = (state_286742[(7)]);
var inst_286676 = (inst_286672 == null);
var inst_286677 = cljs.core.not.call(null,inst_286676);
var state_286742__$1 = state_286742;
if(inst_286677){
var statearr_286789_286855 = state_286742__$1;
(statearr_286789_286855[(1)] = (13));

} else {
var statearr_286790_286857 = state_286742__$1;
(statearr_286790_286857[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (9))){
var inst_286648 = (state_286742[(8)]);
var state_286742__$1 = state_286742;
var statearr_286791_286858 = state_286742__$1;
(statearr_286791_286858[(2)] = inst_286648);

(statearr_286791_286858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (5))){
var state_286742__$1 = state_286742;
var statearr_286792_286859 = state_286742__$1;
(statearr_286792_286859[(2)] = true);

(statearr_286792_286859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (14))){
var state_286742__$1 = state_286742;
var statearr_286793_286860 = state_286742__$1;
(statearr_286793_286860[(2)] = false);

(statearr_286793_286860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (26))){
var inst_286702 = (state_286742[(11)]);
var inst_286709 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_286702);
var state_286742__$1 = state_286742;
var statearr_286794_286863 = state_286742__$1;
(statearr_286794_286863[(2)] = inst_286709);

(statearr_286794_286863[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (16))){
var state_286742__$1 = state_286742;
var statearr_286795_286864 = state_286742__$1;
(statearr_286795_286864[(2)] = true);

(statearr_286795_286864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (38))){
var inst_286732 = (state_286742[(2)]);
var state_286742__$1 = state_286742;
var statearr_286799_286865 = state_286742__$1;
(statearr_286799_286865[(2)] = inst_286732);

(statearr_286799_286865[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (30))){
var inst_286696 = (state_286742[(13)]);
var inst_286695 = (state_286742[(10)]);
var inst_286702 = (state_286742[(11)]);
var inst_286719 = cljs.core.empty_QMARK_.call(null,inst_286695);
var inst_286720 = inst_286696.call(null,inst_286702);
var inst_286721 = cljs.core.not.call(null,inst_286720);
var inst_286722 = (inst_286719) && (inst_286721);
var state_286742__$1 = state_286742;
var statearr_286800_286869 = state_286742__$1;
(statearr_286800_286869[(2)] = inst_286722);

(statearr_286800_286869[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (10))){
var inst_286648 = (state_286742[(8)]);
var inst_286668 = (state_286742[(2)]);
var inst_286669 = cljs.core.get.call(null,inst_286668,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_286670 = cljs.core.get.call(null,inst_286668,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_286671 = cljs.core.get.call(null,inst_286668,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_286672 = inst_286648;
var state_286742__$1 = (function (){var statearr_286801 = state_286742;
(statearr_286801[(16)] = inst_286669);

(statearr_286801[(7)] = inst_286672);

(statearr_286801[(17)] = inst_286670);

(statearr_286801[(18)] = inst_286671);

return statearr_286801;
})();
var statearr_286802_286872 = state_286742__$1;
(statearr_286802_286872[(2)] = null);

(statearr_286802_286872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (18))){
var inst_286686 = (state_286742[(2)]);
var state_286742__$1 = state_286742;
var statearr_286803_286873 = state_286742__$1;
(statearr_286803_286873[(2)] = inst_286686);

(statearr_286803_286873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (37))){
var state_286742__$1 = state_286742;
var statearr_286804_286876 = state_286742__$1;
(statearr_286804_286876[(2)] = null);

(statearr_286804_286876[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_286743 === (8))){
var inst_286648 = (state_286742[(8)]);
var inst_286665 = cljs.core.apply.call(null,cljs.core.hash_map,inst_286648);
var state_286742__$1 = state_286742;
var statearr_286805_286877 = state_286742__$1;
(statearr_286805_286877[(2)] = inst_286665);

(statearr_286805_286877[(1)] = (10));


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
});})(c__38100__auto___286816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38079__auto__,c__38100__auto___286816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38080__auto__ = null;
var cljs$core$async$mix_$_state_machine__38080__auto____0 = (function (){
var statearr_286809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_286809[(0)] = cljs$core$async$mix_$_state_machine__38080__auto__);

(statearr_286809[(1)] = (1));

return statearr_286809;
});
var cljs$core$async$mix_$_state_machine__38080__auto____1 = (function (state_286742){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_286742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e286810){if((e286810 instanceof Object)){
var ex__38083__auto__ = e286810;
var statearr_286811_286882 = state_286742;
(statearr_286811_286882[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_286742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e286810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__286883 = state_286742;
state_286742 = G__286883;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38080__auto__ = function(state_286742){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38080__auto____1.call(this,state_286742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38080__auto____0;
cljs$core$async$mix_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38080__auto____1;
return cljs$core$async$mix_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___286816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38102__auto__ = (function (){var statearr_286812 = f__38101__auto__.call(null);
(statearr_286812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___286816);

return statearr_286812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___286816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args286905 = [];
var len__36260__auto___286921 = arguments.length;
var i__36261__auto___286922 = (0);
while(true){
if((i__36261__auto___286922 < len__36260__auto___286921)){
args286905.push((arguments[i__36261__auto___286922]));

var G__286923 = (i__36261__auto___286922 + (1));
i__36261__auto___286922 = G__286923;
continue;
} else {
}
break;
}

var G__286908 = args286905.length;
switch (G__286908) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286905.length)].join('')));

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
var args286934 = [];
var len__36260__auto___287105 = arguments.length;
var i__36261__auto___287107 = (0);
while(true){
if((i__36261__auto___287107 < len__36260__auto___287105)){
args286934.push((arguments[i__36261__auto___287107]));

var G__287109 = (i__36261__auto___287107 + (1));
i__36261__auto___287107 = G__287109;
continue;
} else {
}
break;
}

var G__286944 = args286934.length;
switch (G__286944) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args286934.length)].join('')));

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
return (function (p1__286933_SHARP_){
if(cljs.core.truth_(p1__286933_SHARP_.call(null,topic))){
return p1__286933_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__286933_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35191__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async286947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async286947 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta286948){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta286948 = meta286948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async286947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_286949,meta286948__$1){
var self__ = this;
var _286949__$1 = this;
return (new cljs.core.async.t_cljs$core$async286947(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta286948__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async286947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_286949){
var self__ = this;
var _286949__$1 = this;
return self__.meta286948;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async286947.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async286947.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async286947.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async286947.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async286947.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async286947.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async286947.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async286947.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta286948","meta286948",-1529532523,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async286947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async286947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async286947";

cljs.core.async.t_cljs$core$async286947.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async286947");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async286947 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async286947(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta286948){
return (new cljs.core.async.t_cljs$core$async286947(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta286948));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async286947(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38100__auto___287134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___287134,mults,ensure_mult,p){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___287134,mults,ensure_mult,p){
return (function (state_287034){
var state_val_287035 = (state_287034[(1)]);
if((state_val_287035 === (7))){
var inst_287030 = (state_287034[(2)]);
var state_287034__$1 = state_287034;
var statearr_287036_287138 = state_287034__$1;
(statearr_287036_287138[(2)] = inst_287030);

(statearr_287036_287138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (20))){
var state_287034__$1 = state_287034;
var statearr_287037_287140 = state_287034__$1;
(statearr_287037_287140[(2)] = null);

(statearr_287037_287140[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (1))){
var state_287034__$1 = state_287034;
var statearr_287038_287141 = state_287034__$1;
(statearr_287038_287141[(2)] = null);

(statearr_287038_287141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (24))){
var inst_287013 = (state_287034[(7)]);
var inst_287022 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_287013);
var state_287034__$1 = state_287034;
var statearr_287040_287144 = state_287034__$1;
(statearr_287040_287144[(2)] = inst_287022);

(statearr_287040_287144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (4))){
var inst_286958 = (state_287034[(8)]);
var inst_286958__$1 = (state_287034[(2)]);
var inst_286959 = (inst_286958__$1 == null);
var state_287034__$1 = (function (){var statearr_287041 = state_287034;
(statearr_287041[(8)] = inst_286958__$1);

return statearr_287041;
})();
if(cljs.core.truth_(inst_286959)){
var statearr_287042_287147 = state_287034__$1;
(statearr_287042_287147[(1)] = (5));

} else {
var statearr_287043_287149 = state_287034__$1;
(statearr_287043_287149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (15))){
var inst_287007 = (state_287034[(2)]);
var state_287034__$1 = state_287034;
var statearr_287044_287156 = state_287034__$1;
(statearr_287044_287156[(2)] = inst_287007);

(statearr_287044_287156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (21))){
var inst_287027 = (state_287034[(2)]);
var state_287034__$1 = (function (){var statearr_287045 = state_287034;
(statearr_287045[(9)] = inst_287027);

return statearr_287045;
})();
var statearr_287046_287158 = state_287034__$1;
(statearr_287046_287158[(2)] = null);

(statearr_287046_287158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (13))){
var inst_286989 = (state_287034[(10)]);
var inst_286991 = cljs.core.chunked_seq_QMARK_.call(null,inst_286989);
var state_287034__$1 = state_287034;
if(inst_286991){
var statearr_287047_287159 = state_287034__$1;
(statearr_287047_287159[(1)] = (16));

} else {
var statearr_287048_287160 = state_287034__$1;
(statearr_287048_287160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (22))){
var inst_287019 = (state_287034[(2)]);
var state_287034__$1 = state_287034;
if(cljs.core.truth_(inst_287019)){
var statearr_287049_287161 = state_287034__$1;
(statearr_287049_287161[(1)] = (23));

} else {
var statearr_287050_287162 = state_287034__$1;
(statearr_287050_287162[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (6))){
var inst_286958 = (state_287034[(8)]);
var inst_287013 = (state_287034[(7)]);
var inst_287015 = (state_287034[(11)]);
var inst_287013__$1 = topic_fn.call(null,inst_286958);
var inst_287014 = cljs.core.deref.call(null,mults);
var inst_287015__$1 = cljs.core.get.call(null,inst_287014,inst_287013__$1);
var state_287034__$1 = (function (){var statearr_287051 = state_287034;
(statearr_287051[(7)] = inst_287013__$1);

(statearr_287051[(11)] = inst_287015__$1);

return statearr_287051;
})();
if(cljs.core.truth_(inst_287015__$1)){
var statearr_287052_287164 = state_287034__$1;
(statearr_287052_287164[(1)] = (19));

} else {
var statearr_287053_287165 = state_287034__$1;
(statearr_287053_287165[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (25))){
var inst_287024 = (state_287034[(2)]);
var state_287034__$1 = state_287034;
var statearr_287054_287166 = state_287034__$1;
(statearr_287054_287166[(2)] = inst_287024);

(statearr_287054_287166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (17))){
var inst_286989 = (state_287034[(10)]);
var inst_286998 = cljs.core.first.call(null,inst_286989);
var inst_286999 = cljs.core.async.muxch_STAR_.call(null,inst_286998);
var inst_287000 = cljs.core.async.close_BANG_.call(null,inst_286999);
var inst_287001 = cljs.core.next.call(null,inst_286989);
var inst_286974 = inst_287001;
var inst_286975 = null;
var inst_286976 = (0);
var inst_286977 = (0);
var state_287034__$1 = (function (){var statearr_287059 = state_287034;
(statearr_287059[(12)] = inst_286974);

(statearr_287059[(13)] = inst_286977);

(statearr_287059[(14)] = inst_286975);

(statearr_287059[(15)] = inst_287000);

(statearr_287059[(16)] = inst_286976);

return statearr_287059;
})();
var statearr_287060_287170 = state_287034__$1;
(statearr_287060_287170[(2)] = null);

(statearr_287060_287170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (3))){
var inst_287032 = (state_287034[(2)]);
var state_287034__$1 = state_287034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287034__$1,inst_287032);
} else {
if((state_val_287035 === (12))){
var inst_287009 = (state_287034[(2)]);
var state_287034__$1 = state_287034;
var statearr_287062_287171 = state_287034__$1;
(statearr_287062_287171[(2)] = inst_287009);

(statearr_287062_287171[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (2))){
var state_287034__$1 = state_287034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287034__$1,(4),ch);
} else {
if((state_val_287035 === (23))){
var state_287034__$1 = state_287034;
var statearr_287064_287172 = state_287034__$1;
(statearr_287064_287172[(2)] = null);

(statearr_287064_287172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (19))){
var inst_286958 = (state_287034[(8)]);
var inst_287015 = (state_287034[(11)]);
var inst_287017 = cljs.core.async.muxch_STAR_.call(null,inst_287015);
var state_287034__$1 = state_287034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287034__$1,(22),inst_287017,inst_286958);
} else {
if((state_val_287035 === (11))){
var inst_286974 = (state_287034[(12)]);
var inst_286989 = (state_287034[(10)]);
var inst_286989__$1 = cljs.core.seq.call(null,inst_286974);
var state_287034__$1 = (function (){var statearr_287065 = state_287034;
(statearr_287065[(10)] = inst_286989__$1);

return statearr_287065;
})();
if(inst_286989__$1){
var statearr_287067_287174 = state_287034__$1;
(statearr_287067_287174[(1)] = (13));

} else {
var statearr_287068_287175 = state_287034__$1;
(statearr_287068_287175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (9))){
var inst_287011 = (state_287034[(2)]);
var state_287034__$1 = state_287034;
var statearr_287069_287176 = state_287034__$1;
(statearr_287069_287176[(2)] = inst_287011);

(statearr_287069_287176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (5))){
var inst_286971 = cljs.core.deref.call(null,mults);
var inst_286972 = cljs.core.vals.call(null,inst_286971);
var inst_286973 = cljs.core.seq.call(null,inst_286972);
var inst_286974 = inst_286973;
var inst_286975 = null;
var inst_286976 = (0);
var inst_286977 = (0);
var state_287034__$1 = (function (){var statearr_287071 = state_287034;
(statearr_287071[(12)] = inst_286974);

(statearr_287071[(13)] = inst_286977);

(statearr_287071[(14)] = inst_286975);

(statearr_287071[(16)] = inst_286976);

return statearr_287071;
})();
var statearr_287072_287177 = state_287034__$1;
(statearr_287072_287177[(2)] = null);

(statearr_287072_287177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (14))){
var state_287034__$1 = state_287034;
var statearr_287082_287178 = state_287034__$1;
(statearr_287082_287178[(2)] = null);

(statearr_287082_287178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (16))){
var inst_286989 = (state_287034[(10)]);
var inst_286993 = cljs.core.chunk_first.call(null,inst_286989);
var inst_286994 = cljs.core.chunk_rest.call(null,inst_286989);
var inst_286995 = cljs.core.count.call(null,inst_286993);
var inst_286974 = inst_286994;
var inst_286975 = inst_286993;
var inst_286976 = inst_286995;
var inst_286977 = (0);
var state_287034__$1 = (function (){var statearr_287084 = state_287034;
(statearr_287084[(12)] = inst_286974);

(statearr_287084[(13)] = inst_286977);

(statearr_287084[(14)] = inst_286975);

(statearr_287084[(16)] = inst_286976);

return statearr_287084;
})();
var statearr_287086_287179 = state_287034__$1;
(statearr_287086_287179[(2)] = null);

(statearr_287086_287179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (10))){
var inst_286974 = (state_287034[(12)]);
var inst_286977 = (state_287034[(13)]);
var inst_286975 = (state_287034[(14)]);
var inst_286976 = (state_287034[(16)]);
var inst_286982 = cljs.core._nth.call(null,inst_286975,inst_286977);
var inst_286983 = cljs.core.async.muxch_STAR_.call(null,inst_286982);
var inst_286984 = cljs.core.async.close_BANG_.call(null,inst_286983);
var inst_286986 = (inst_286977 + (1));
var tmp287073 = inst_286974;
var tmp287074 = inst_286975;
var tmp287075 = inst_286976;
var inst_286974__$1 = tmp287073;
var inst_286975__$1 = tmp287074;
var inst_286976__$1 = tmp287075;
var inst_286977__$1 = inst_286986;
var state_287034__$1 = (function (){var statearr_287088 = state_287034;
(statearr_287088[(12)] = inst_286974__$1);

(statearr_287088[(13)] = inst_286977__$1);

(statearr_287088[(14)] = inst_286975__$1);

(statearr_287088[(16)] = inst_286976__$1);

(statearr_287088[(17)] = inst_286984);

return statearr_287088;
})();
var statearr_287089_287181 = state_287034__$1;
(statearr_287089_287181[(2)] = null);

(statearr_287089_287181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (18))){
var inst_287004 = (state_287034[(2)]);
var state_287034__$1 = state_287034;
var statearr_287090_287182 = state_287034__$1;
(statearr_287090_287182[(2)] = inst_287004);

(statearr_287090_287182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287035 === (8))){
var inst_286977 = (state_287034[(13)]);
var inst_286976 = (state_287034[(16)]);
var inst_286979 = (inst_286977 < inst_286976);
var inst_286980 = inst_286979;
var state_287034__$1 = state_287034;
if(cljs.core.truth_(inst_286980)){
var statearr_287092_287184 = state_287034__$1;
(statearr_287092_287184[(1)] = (10));

} else {
var statearr_287093_287185 = state_287034__$1;
(statearr_287093_287185[(1)] = (11));

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
});})(c__38100__auto___287134,mults,ensure_mult,p))
;
return ((function (switch__38079__auto__,c__38100__auto___287134,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_287099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_287099[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_287099[(1)] = (1));

return statearr_287099;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_287034){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_287034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e287100){if((e287100 instanceof Object)){
var ex__38083__auto__ = e287100;
var statearr_287101_287186 = state_287034;
(statearr_287101_287186[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287187 = state_287034;
state_287034 = G__287187;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_287034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_287034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___287134,mults,ensure_mult,p))
})();
var state__38102__auto__ = (function (){var statearr_287103 = f__38101__auto__.call(null);
(statearr_287103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___287134);

return statearr_287103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___287134,mults,ensure_mult,p))
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
var args287189 = [];
var len__36260__auto___287193 = arguments.length;
var i__36261__auto___287194 = (0);
while(true){
if((i__36261__auto___287194 < len__36260__auto___287193)){
args287189.push((arguments[i__36261__auto___287194]));

var G__287195 = (i__36261__auto___287194 + (1));
i__36261__auto___287194 = G__287195;
continue;
} else {
}
break;
}

var G__287192 = args287189.length;
switch (G__287192) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287189.length)].join('')));

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
var args287201 = [];
var len__36260__auto___287205 = arguments.length;
var i__36261__auto___287206 = (0);
while(true){
if((i__36261__auto___287206 < len__36260__auto___287205)){
args287201.push((arguments[i__36261__auto___287206]));

var G__287207 = (i__36261__auto___287206 + (1));
i__36261__auto___287206 = G__287207;
continue;
} else {
}
break;
}

var G__287203 = args287201.length;
switch (G__287203) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287201.length)].join('')));

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
var args287212 = [];
var len__36260__auto___287295 = arguments.length;
var i__36261__auto___287296 = (0);
while(true){
if((i__36261__auto___287296 < len__36260__auto___287295)){
args287212.push((arguments[i__36261__auto___287296]));

var G__287299 = (i__36261__auto___287296 + (1));
i__36261__auto___287296 = G__287299;
continue;
} else {
}
break;
}

var G__287215 = args287212.length;
switch (G__287215) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287212.length)].join('')));

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
var c__38100__auto___287302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___287302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___287302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_287257){
var state_val_287258 = (state_287257[(1)]);
if((state_val_287258 === (7))){
var state_287257__$1 = state_287257;
var statearr_287259_287303 = state_287257__$1;
(statearr_287259_287303[(2)] = null);

(statearr_287259_287303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287258 === (1))){
var state_287257__$1 = state_287257;
var statearr_287260_287304 = state_287257__$1;
(statearr_287260_287304[(2)] = null);

(statearr_287260_287304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287258 === (4))){
var inst_287220 = (state_287257[(7)]);
var inst_287222 = (inst_287220 < cnt);
var state_287257__$1 = state_287257;
if(cljs.core.truth_(inst_287222)){
var statearr_287261_287305 = state_287257__$1;
(statearr_287261_287305[(1)] = (6));

} else {
var statearr_287262_287306 = state_287257__$1;
(statearr_287262_287306[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287258 === (15))){
var inst_287253 = (state_287257[(2)]);
var state_287257__$1 = state_287257;
var statearr_287264_287307 = state_287257__$1;
(statearr_287264_287307[(2)] = inst_287253);

(statearr_287264_287307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287258 === (13))){
var inst_287246 = cljs.core.async.close_BANG_.call(null,out);
var state_287257__$1 = state_287257;
var statearr_287265_287308 = state_287257__$1;
(statearr_287265_287308[(2)] = inst_287246);

(statearr_287265_287308[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287258 === (6))){
var state_287257__$1 = state_287257;
var statearr_287266_287309 = state_287257__$1;
(statearr_287266_287309[(2)] = null);

(statearr_287266_287309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287258 === (3))){
var inst_287255 = (state_287257[(2)]);
var state_287257__$1 = state_287257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287257__$1,inst_287255);
} else {
if((state_val_287258 === (12))){
var inst_287243 = (state_287257[(8)]);
var inst_287243__$1 = (state_287257[(2)]);
var inst_287244 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_287243__$1);
var state_287257__$1 = (function (){var statearr_287267 = state_287257;
(statearr_287267[(8)] = inst_287243__$1);

return statearr_287267;
})();
if(cljs.core.truth_(inst_287244)){
var statearr_287268_287310 = state_287257__$1;
(statearr_287268_287310[(1)] = (13));

} else {
var statearr_287269_287311 = state_287257__$1;
(statearr_287269_287311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287258 === (2))){
var inst_287218 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_287220 = (0);
var state_287257__$1 = (function (){var statearr_287270 = state_287257;
(statearr_287270[(7)] = inst_287220);

(statearr_287270[(9)] = inst_287218);

return statearr_287270;
})();
var statearr_287271_287312 = state_287257__$1;
(statearr_287271_287312[(2)] = null);

(statearr_287271_287312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287258 === (11))){
var inst_287220 = (state_287257[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_287257,(10),Object,null,(9));
var inst_287229 = chs__$1.call(null,inst_287220);
var inst_287230 = done.call(null,inst_287220);
var inst_287231 = cljs.core.async.take_BANG_.call(null,inst_287229,inst_287230);
var state_287257__$1 = state_287257;
var statearr_287274_287313 = state_287257__$1;
(statearr_287274_287313[(2)] = inst_287231);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287257__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287258 === (9))){
var inst_287220 = (state_287257[(7)]);
var inst_287234 = (state_287257[(2)]);
var inst_287235 = (inst_287220 + (1));
var inst_287220__$1 = inst_287235;
var state_287257__$1 = (function (){var statearr_287276 = state_287257;
(statearr_287276[(7)] = inst_287220__$1);

(statearr_287276[(10)] = inst_287234);

return statearr_287276;
})();
var statearr_287277_287314 = state_287257__$1;
(statearr_287277_287314[(2)] = null);

(statearr_287277_287314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287258 === (5))){
var inst_287241 = (state_287257[(2)]);
var state_287257__$1 = (function (){var statearr_287278 = state_287257;
(statearr_287278[(11)] = inst_287241);

return statearr_287278;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287257__$1,(12),dchan);
} else {
if((state_val_287258 === (14))){
var inst_287243 = (state_287257[(8)]);
var inst_287248 = cljs.core.apply.call(null,f,inst_287243);
var state_287257__$1 = state_287257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287257__$1,(16),out,inst_287248);
} else {
if((state_val_287258 === (16))){
var inst_287250 = (state_287257[(2)]);
var state_287257__$1 = (function (){var statearr_287279 = state_287257;
(statearr_287279[(12)] = inst_287250);

return statearr_287279;
})();
var statearr_287280_287321 = state_287257__$1;
(statearr_287280_287321[(2)] = null);

(statearr_287280_287321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287258 === (10))){
var inst_287224 = (state_287257[(2)]);
var inst_287225 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_287257__$1 = (function (){var statearr_287281 = state_287257;
(statearr_287281[(13)] = inst_287224);

return statearr_287281;
})();
var statearr_287282_287322 = state_287257__$1;
(statearr_287282_287322[(2)] = inst_287225);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287257__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287258 === (8))){
var inst_287239 = (state_287257[(2)]);
var state_287257__$1 = state_287257;
var statearr_287284_287323 = state_287257__$1;
(statearr_287284_287323[(2)] = inst_287239);

(statearr_287284_287323[(1)] = (5));


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
});})(c__38100__auto___287302,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38079__auto__,c__38100__auto___287302,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_287288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_287288[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_287288[(1)] = (1));

return statearr_287288;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_287257){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_287257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e287292){if((e287292 instanceof Object)){
var ex__38083__auto__ = e287292;
var statearr_287293_287327 = state_287257;
(statearr_287293_287327[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287330 = state_287257;
state_287257 = G__287330;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_287257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_287257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___287302,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38102__auto__ = (function (){var statearr_287294 = f__38101__auto__.call(null);
(statearr_287294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___287302);

return statearr_287294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___287302,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args287334 = [];
var len__36260__auto___287406 = arguments.length;
var i__36261__auto___287407 = (0);
while(true){
if((i__36261__auto___287407 < len__36260__auto___287406)){
args287334.push((arguments[i__36261__auto___287407]));

var G__287408 = (i__36261__auto___287407 + (1));
i__36261__auto___287407 = G__287408;
continue;
} else {
}
break;
}

var G__287338 = args287334.length;
switch (G__287338) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287334.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___287414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___287414,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___287414,out){
return (function (state_287372){
var state_val_287373 = (state_287372[(1)]);
if((state_val_287373 === (7))){
var inst_287350 = (state_287372[(7)]);
var inst_287351 = (state_287372[(8)]);
var inst_287350__$1 = (state_287372[(2)]);
var inst_287351__$1 = cljs.core.nth.call(null,inst_287350__$1,(0),null);
var inst_287352 = cljs.core.nth.call(null,inst_287350__$1,(1),null);
var inst_287353 = (inst_287351__$1 == null);
var state_287372__$1 = (function (){var statearr_287376 = state_287372;
(statearr_287376[(9)] = inst_287352);

(statearr_287376[(7)] = inst_287350__$1);

(statearr_287376[(8)] = inst_287351__$1);

return statearr_287376;
})();
if(cljs.core.truth_(inst_287353)){
var statearr_287377_287415 = state_287372__$1;
(statearr_287377_287415[(1)] = (8));

} else {
var statearr_287378_287417 = state_287372__$1;
(statearr_287378_287417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287373 === (1))){
var inst_287340 = cljs.core.vec.call(null,chs);
var inst_287341 = inst_287340;
var state_287372__$1 = (function (){var statearr_287380 = state_287372;
(statearr_287380[(10)] = inst_287341);

return statearr_287380;
})();
var statearr_287381_287420 = state_287372__$1;
(statearr_287381_287420[(2)] = null);

(statearr_287381_287420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287373 === (4))){
var inst_287341 = (state_287372[(10)]);
var state_287372__$1 = state_287372;
return cljs.core.async.ioc_alts_BANG_.call(null,state_287372__$1,(7),inst_287341);
} else {
if((state_val_287373 === (6))){
var inst_287368 = (state_287372[(2)]);
var state_287372__$1 = state_287372;
var statearr_287383_287425 = state_287372__$1;
(statearr_287383_287425[(2)] = inst_287368);

(statearr_287383_287425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287373 === (3))){
var inst_287370 = (state_287372[(2)]);
var state_287372__$1 = state_287372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287372__$1,inst_287370);
} else {
if((state_val_287373 === (2))){
var inst_287341 = (state_287372[(10)]);
var inst_287343 = cljs.core.count.call(null,inst_287341);
var inst_287344 = (inst_287343 > (0));
var state_287372__$1 = state_287372;
if(cljs.core.truth_(inst_287344)){
var statearr_287385_287430 = state_287372__$1;
(statearr_287385_287430[(1)] = (4));

} else {
var statearr_287386_287431 = state_287372__$1;
(statearr_287386_287431[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287373 === (11))){
var inst_287341 = (state_287372[(10)]);
var inst_287361 = (state_287372[(2)]);
var tmp287384 = inst_287341;
var inst_287341__$1 = tmp287384;
var state_287372__$1 = (function (){var statearr_287387 = state_287372;
(statearr_287387[(10)] = inst_287341__$1);

(statearr_287387[(11)] = inst_287361);

return statearr_287387;
})();
var statearr_287388_287432 = state_287372__$1;
(statearr_287388_287432[(2)] = null);

(statearr_287388_287432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287373 === (9))){
var inst_287351 = (state_287372[(8)]);
var state_287372__$1 = state_287372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287372__$1,(11),out,inst_287351);
} else {
if((state_val_287373 === (5))){
var inst_287366 = cljs.core.async.close_BANG_.call(null,out);
var state_287372__$1 = state_287372;
var statearr_287389_287436 = state_287372__$1;
(statearr_287389_287436[(2)] = inst_287366);

(statearr_287389_287436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287373 === (10))){
var inst_287364 = (state_287372[(2)]);
var state_287372__$1 = state_287372;
var statearr_287390_287437 = state_287372__$1;
(statearr_287390_287437[(2)] = inst_287364);

(statearr_287390_287437[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287373 === (8))){
var inst_287341 = (state_287372[(10)]);
var inst_287352 = (state_287372[(9)]);
var inst_287350 = (state_287372[(7)]);
var inst_287351 = (state_287372[(8)]);
var inst_287356 = (function (){var cs = inst_287341;
var vec__287347 = inst_287350;
var v = inst_287351;
var c = inst_287352;
return ((function (cs,vec__287347,v,c,inst_287341,inst_287352,inst_287350,inst_287351,state_val_287373,c__38100__auto___287414,out){
return (function (p1__287333_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__287333_SHARP_);
});
;})(cs,vec__287347,v,c,inst_287341,inst_287352,inst_287350,inst_287351,state_val_287373,c__38100__auto___287414,out))
})();
var inst_287357 = cljs.core.filterv.call(null,inst_287356,inst_287341);
var inst_287341__$1 = inst_287357;
var state_287372__$1 = (function (){var statearr_287391 = state_287372;
(statearr_287391[(10)] = inst_287341__$1);

return statearr_287391;
})();
var statearr_287392_287447 = state_287372__$1;
(statearr_287392_287447[(2)] = null);

(statearr_287392_287447[(1)] = (2));


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
});})(c__38100__auto___287414,out))
;
return ((function (switch__38079__auto__,c__38100__auto___287414,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_287401 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_287401[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_287401[(1)] = (1));

return statearr_287401;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_287372){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_287372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e287402){if((e287402 instanceof Object)){
var ex__38083__auto__ = e287402;
var statearr_287403_287454 = state_287372;
(statearr_287403_287454[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287458 = state_287372;
state_287372 = G__287458;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_287372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_287372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___287414,out))
})();
var state__38102__auto__ = (function (){var statearr_287405 = f__38101__auto__.call(null);
(statearr_287405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___287414);

return statearr_287405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___287414,out))
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
var args287460 = [];
var len__36260__auto___287516 = arguments.length;
var i__36261__auto___287517 = (0);
while(true){
if((i__36261__auto___287517 < len__36260__auto___287516)){
args287460.push((arguments[i__36261__auto___287517]));

var G__287518 = (i__36261__auto___287517 + (1));
i__36261__auto___287517 = G__287518;
continue;
} else {
}
break;
}

var G__287462 = args287460.length;
switch (G__287462) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287460.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___287524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___287524,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___287524,out){
return (function (state_287486){
var state_val_287487 = (state_287486[(1)]);
if((state_val_287487 === (7))){
var inst_287468 = (state_287486[(7)]);
var inst_287468__$1 = (state_287486[(2)]);
var inst_287469 = (inst_287468__$1 == null);
var inst_287470 = cljs.core.not.call(null,inst_287469);
var state_287486__$1 = (function (){var statearr_287488 = state_287486;
(statearr_287488[(7)] = inst_287468__$1);

return statearr_287488;
})();
if(inst_287470){
var statearr_287490_287528 = state_287486__$1;
(statearr_287490_287528[(1)] = (8));

} else {
var statearr_287491_287529 = state_287486__$1;
(statearr_287491_287529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287487 === (1))){
var inst_287463 = (0);
var state_287486__$1 = (function (){var statearr_287492 = state_287486;
(statearr_287492[(8)] = inst_287463);

return statearr_287492;
})();
var statearr_287493_287530 = state_287486__$1;
(statearr_287493_287530[(2)] = null);

(statearr_287493_287530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287487 === (4))){
var state_287486__$1 = state_287486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287486__$1,(7),ch);
} else {
if((state_val_287487 === (6))){
var inst_287481 = (state_287486[(2)]);
var state_287486__$1 = state_287486;
var statearr_287495_287531 = state_287486__$1;
(statearr_287495_287531[(2)] = inst_287481);

(statearr_287495_287531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287487 === (3))){
var inst_287483 = (state_287486[(2)]);
var inst_287484 = cljs.core.async.close_BANG_.call(null,out);
var state_287486__$1 = (function (){var statearr_287497 = state_287486;
(statearr_287497[(9)] = inst_287483);

return statearr_287497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287486__$1,inst_287484);
} else {
if((state_val_287487 === (2))){
var inst_287463 = (state_287486[(8)]);
var inst_287465 = (inst_287463 < n);
var state_287486__$1 = state_287486;
if(cljs.core.truth_(inst_287465)){
var statearr_287498_287532 = state_287486__$1;
(statearr_287498_287532[(1)] = (4));

} else {
var statearr_287499_287533 = state_287486__$1;
(statearr_287499_287533[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287487 === (11))){
var inst_287463 = (state_287486[(8)]);
var inst_287473 = (state_287486[(2)]);
var inst_287474 = (inst_287463 + (1));
var inst_287463__$1 = inst_287474;
var state_287486__$1 = (function (){var statearr_287500 = state_287486;
(statearr_287500[(8)] = inst_287463__$1);

(statearr_287500[(10)] = inst_287473);

return statearr_287500;
})();
var statearr_287501_287536 = state_287486__$1;
(statearr_287501_287536[(2)] = null);

(statearr_287501_287536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287487 === (9))){
var state_287486__$1 = state_287486;
var statearr_287502_287537 = state_287486__$1;
(statearr_287502_287537[(2)] = null);

(statearr_287502_287537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287487 === (5))){
var state_287486__$1 = state_287486;
var statearr_287503_287539 = state_287486__$1;
(statearr_287503_287539[(2)] = null);

(statearr_287503_287539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287487 === (10))){
var inst_287478 = (state_287486[(2)]);
var state_287486__$1 = state_287486;
var statearr_287506_287540 = state_287486__$1;
(statearr_287506_287540[(2)] = inst_287478);

(statearr_287506_287540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287487 === (8))){
var inst_287468 = (state_287486[(7)]);
var state_287486__$1 = state_287486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287486__$1,(11),out,inst_287468);
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
});})(c__38100__auto___287524,out))
;
return ((function (switch__38079__auto__,c__38100__auto___287524,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_287512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_287512[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_287512[(1)] = (1));

return statearr_287512;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_287486){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_287486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e287513){if((e287513 instanceof Object)){
var ex__38083__auto__ = e287513;
var statearr_287514_287545 = state_287486;
(statearr_287514_287545[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287546 = state_287486;
state_287486 = G__287546;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_287486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_287486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___287524,out))
})();
var state__38102__auto__ = (function (){var statearr_287515 = f__38101__auto__.call(null);
(statearr_287515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___287524);

return statearr_287515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___287524,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async287561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async287561 = (function (map_LT_,f,ch,meta287562){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta287562 = meta287562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async287561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_287563,meta287562__$1){
var self__ = this;
var _287563__$1 = this;
return (new cljs.core.async.t_cljs$core$async287561(self__.map_LT_,self__.f,self__.ch,meta287562__$1));
});

cljs.core.async.t_cljs$core$async287561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_287563){
var self__ = this;
var _287563__$1 = this;
return self__.meta287562;
});

cljs.core.async.t_cljs$core$async287561.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async287561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async287561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async287561.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async287561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async287567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async287567 = (function (map_LT_,f,ch,meta287562,_,fn1,meta287568){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta287562 = meta287562;
this._ = _;
this.fn1 = fn1;
this.meta287568 = meta287568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async287567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_287569,meta287568__$1){
var self__ = this;
var _287569__$1 = this;
return (new cljs.core.async.t_cljs$core$async287567(self__.map_LT_,self__.f,self__.ch,self__.meta287562,self__._,self__.fn1,meta287568__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async287567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_287569){
var self__ = this;
var _287569__$1 = this;
return self__.meta287568;
});})(___$1))
;

cljs.core.async.t_cljs$core$async287567.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async287567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async287567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__287549_SHARP_){
return f1.call(null,(((p1__287549_SHARP_ == null))?null:self__.f.call(null,p1__287549_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async287567.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta287562","meta287562",1727130788,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async287561","cljs.core.async/t_cljs$core$async287561",-1532731829,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta287568","meta287568",-1652150932,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async287567.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async287567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async287567";

cljs.core.async.t_cljs$core$async287567.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async287567");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async287567 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async287567(map_LT___$1,f__$1,ch__$1,meta287562__$1,___$2,fn1__$1,meta287568){
return (new cljs.core.async.t_cljs$core$async287567(map_LT___$1,f__$1,ch__$1,meta287562__$1,___$2,fn1__$1,meta287568));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async287567(self__.map_LT_,self__.f,self__.ch,self__.meta287562,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async287561.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async287561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async287561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta287562","meta287562",1727130788,null)], null);
});

cljs.core.async.t_cljs$core$async287561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async287561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async287561";

cljs.core.async.t_cljs$core$async287561.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async287561");
});

cljs.core.async.__GT_t_cljs$core$async287561 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async287561(map_LT___$1,f__$1,ch__$1,meta287562){
return (new cljs.core.async.t_cljs$core$async287561(map_LT___$1,f__$1,ch__$1,meta287562));
});

}

return (new cljs.core.async.t_cljs$core$async287561(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async287590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async287590 = (function (map_GT_,f,ch,meta287591){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta287591 = meta287591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async287590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_287592,meta287591__$1){
var self__ = this;
var _287592__$1 = this;
return (new cljs.core.async.t_cljs$core$async287590(self__.map_GT_,self__.f,self__.ch,meta287591__$1));
});

cljs.core.async.t_cljs$core$async287590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_287592){
var self__ = this;
var _287592__$1 = this;
return self__.meta287591;
});

cljs.core.async.t_cljs$core$async287590.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async287590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async287590.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async287590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async287590.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async287590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async287590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta287591","meta287591",-146587947,null)], null);
});

cljs.core.async.t_cljs$core$async287590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async287590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async287590";

cljs.core.async.t_cljs$core$async287590.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async287590");
});

cljs.core.async.__GT_t_cljs$core$async287590 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async287590(map_GT___$1,f__$1,ch__$1,meta287591){
return (new cljs.core.async.t_cljs$core$async287590(map_GT___$1,f__$1,ch__$1,meta287591));
});

}

return (new cljs.core.async.t_cljs$core$async287590(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async287606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async287606 = (function (filter_GT_,p,ch,meta287607){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta287607 = meta287607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async287606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_287608,meta287607__$1){
var self__ = this;
var _287608__$1 = this;
return (new cljs.core.async.t_cljs$core$async287606(self__.filter_GT_,self__.p,self__.ch,meta287607__$1));
});

cljs.core.async.t_cljs$core$async287606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_287608){
var self__ = this;
var _287608__$1 = this;
return self__.meta287607;
});

cljs.core.async.t_cljs$core$async287606.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async287606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async287606.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async287606.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async287606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async287606.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async287606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async287606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta287607","meta287607",-2122982190,null)], null);
});

cljs.core.async.t_cljs$core$async287606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async287606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async287606";

cljs.core.async.t_cljs$core$async287606.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async287606");
});

cljs.core.async.__GT_t_cljs$core$async287606 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async287606(filter_GT___$1,p__$1,ch__$1,meta287607){
return (new cljs.core.async.t_cljs$core$async287606(filter_GT___$1,p__$1,ch__$1,meta287607));
});

}

return (new cljs.core.async.t_cljs$core$async287606(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args287624 = [];
var len__36260__auto___287668 = arguments.length;
var i__36261__auto___287669 = (0);
while(true){
if((i__36261__auto___287669 < len__36260__auto___287668)){
args287624.push((arguments[i__36261__auto___287669]));

var G__287670 = (i__36261__auto___287669 + (1));
i__36261__auto___287669 = G__287670;
continue;
} else {
}
break;
}

var G__287626 = args287624.length;
switch (G__287626) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287624.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___287672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___287672,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___287672,out){
return (function (state_287647){
var state_val_287648 = (state_287647[(1)]);
if((state_val_287648 === (7))){
var inst_287643 = (state_287647[(2)]);
var state_287647__$1 = state_287647;
var statearr_287649_287673 = state_287647__$1;
(statearr_287649_287673[(2)] = inst_287643);

(statearr_287649_287673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287648 === (1))){
var state_287647__$1 = state_287647;
var statearr_287650_287675 = state_287647__$1;
(statearr_287650_287675[(2)] = null);

(statearr_287650_287675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287648 === (4))){
var inst_287629 = (state_287647[(7)]);
var inst_287629__$1 = (state_287647[(2)]);
var inst_287630 = (inst_287629__$1 == null);
var state_287647__$1 = (function (){var statearr_287651 = state_287647;
(statearr_287651[(7)] = inst_287629__$1);

return statearr_287651;
})();
if(cljs.core.truth_(inst_287630)){
var statearr_287652_287683 = state_287647__$1;
(statearr_287652_287683[(1)] = (5));

} else {
var statearr_287653_287684 = state_287647__$1;
(statearr_287653_287684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287648 === (6))){
var inst_287629 = (state_287647[(7)]);
var inst_287634 = p.call(null,inst_287629);
var state_287647__$1 = state_287647;
if(cljs.core.truth_(inst_287634)){
var statearr_287654_287692 = state_287647__$1;
(statearr_287654_287692[(1)] = (8));

} else {
var statearr_287655_287693 = state_287647__$1;
(statearr_287655_287693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287648 === (3))){
var inst_287645 = (state_287647[(2)]);
var state_287647__$1 = state_287647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287647__$1,inst_287645);
} else {
if((state_val_287648 === (2))){
var state_287647__$1 = state_287647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287647__$1,(4),ch);
} else {
if((state_val_287648 === (11))){
var inst_287637 = (state_287647[(2)]);
var state_287647__$1 = state_287647;
var statearr_287656_287694 = state_287647__$1;
(statearr_287656_287694[(2)] = inst_287637);

(statearr_287656_287694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287648 === (9))){
var state_287647__$1 = state_287647;
var statearr_287657_287695 = state_287647__$1;
(statearr_287657_287695[(2)] = null);

(statearr_287657_287695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287648 === (5))){
var inst_287632 = cljs.core.async.close_BANG_.call(null,out);
var state_287647__$1 = state_287647;
var statearr_287658_287696 = state_287647__$1;
(statearr_287658_287696[(2)] = inst_287632);

(statearr_287658_287696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287648 === (10))){
var inst_287640 = (state_287647[(2)]);
var state_287647__$1 = (function (){var statearr_287659 = state_287647;
(statearr_287659[(8)] = inst_287640);

return statearr_287659;
})();
var statearr_287660_287697 = state_287647__$1;
(statearr_287660_287697[(2)] = null);

(statearr_287660_287697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287648 === (8))){
var inst_287629 = (state_287647[(7)]);
var state_287647__$1 = state_287647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287647__$1,(11),out,inst_287629);
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
});})(c__38100__auto___287672,out))
;
return ((function (switch__38079__auto__,c__38100__auto___287672,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_287664 = [null,null,null,null,null,null,null,null,null];
(statearr_287664[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_287664[(1)] = (1));

return statearr_287664;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_287647){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_287647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e287665){if((e287665 instanceof Object)){
var ex__38083__auto__ = e287665;
var statearr_287666_287698 = state_287647;
(statearr_287666_287698[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__287699 = state_287647;
state_287647 = G__287699;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_287647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_287647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___287672,out))
})();
var state__38102__auto__ = (function (){var statearr_287667 = f__38101__auto__.call(null);
(statearr_287667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___287672);

return statearr_287667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___287672,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args287702 = [];
var len__36260__auto___287711 = arguments.length;
var i__36261__auto___287712 = (0);
while(true){
if((i__36261__auto___287712 < len__36260__auto___287711)){
args287702.push((arguments[i__36261__auto___287712]));

var G__287713 = (i__36261__auto___287712 + (1));
i__36261__auto___287712 = G__287713;
continue;
} else {
}
break;
}

var G__287707 = args287702.length;
switch (G__287707) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args287702.length)].join('')));

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
return (function (state_287899){
var state_val_287900 = (state_287899[(1)]);
if((state_val_287900 === (7))){
var inst_287895 = (state_287899[(2)]);
var state_287899__$1 = state_287899;
var statearr_287901_287962 = state_287899__$1;
(statearr_287901_287962[(2)] = inst_287895);

(statearr_287901_287962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (20))){
var inst_287865 = (state_287899[(7)]);
var inst_287876 = (state_287899[(2)]);
var inst_287877 = cljs.core.next.call(null,inst_287865);
var inst_287851 = inst_287877;
var inst_287852 = null;
var inst_287853 = (0);
var inst_287854 = (0);
var state_287899__$1 = (function (){var statearr_287902 = state_287899;
(statearr_287902[(8)] = inst_287854);

(statearr_287902[(9)] = inst_287853);

(statearr_287902[(10)] = inst_287876);

(statearr_287902[(11)] = inst_287851);

(statearr_287902[(12)] = inst_287852);

return statearr_287902;
})();
var statearr_287903_287963 = state_287899__$1;
(statearr_287903_287963[(2)] = null);

(statearr_287903_287963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (1))){
var state_287899__$1 = state_287899;
var statearr_287908_287968 = state_287899__$1;
(statearr_287908_287968[(2)] = null);

(statearr_287908_287968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (4))){
var inst_287836 = (state_287899[(13)]);
var inst_287836__$1 = (state_287899[(2)]);
var inst_287841 = (inst_287836__$1 == null);
var state_287899__$1 = (function (){var statearr_287909 = state_287899;
(statearr_287909[(13)] = inst_287836__$1);

return statearr_287909;
})();
if(cljs.core.truth_(inst_287841)){
var statearr_287910_287969 = state_287899__$1;
(statearr_287910_287969[(1)] = (5));

} else {
var statearr_287911_287970 = state_287899__$1;
(statearr_287911_287970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (15))){
var state_287899__$1 = state_287899;
var statearr_287915_287971 = state_287899__$1;
(statearr_287915_287971[(2)] = null);

(statearr_287915_287971[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (21))){
var state_287899__$1 = state_287899;
var statearr_287916_287972 = state_287899__$1;
(statearr_287916_287972[(2)] = null);

(statearr_287916_287972[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (13))){
var inst_287854 = (state_287899[(8)]);
var inst_287853 = (state_287899[(9)]);
var inst_287851 = (state_287899[(11)]);
var inst_287852 = (state_287899[(12)]);
var inst_287861 = (state_287899[(2)]);
var inst_287862 = (inst_287854 + (1));
var tmp287912 = inst_287853;
var tmp287913 = inst_287851;
var tmp287914 = inst_287852;
var inst_287851__$1 = tmp287913;
var inst_287852__$1 = tmp287914;
var inst_287853__$1 = tmp287912;
var inst_287854__$1 = inst_287862;
var state_287899__$1 = (function (){var statearr_287917 = state_287899;
(statearr_287917[(8)] = inst_287854__$1);

(statearr_287917[(9)] = inst_287853__$1);

(statearr_287917[(14)] = inst_287861);

(statearr_287917[(11)] = inst_287851__$1);

(statearr_287917[(12)] = inst_287852__$1);

return statearr_287917;
})();
var statearr_287918_287977 = state_287899__$1;
(statearr_287918_287977[(2)] = null);

(statearr_287918_287977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (22))){
var state_287899__$1 = state_287899;
var statearr_287919_287982 = state_287899__$1;
(statearr_287919_287982[(2)] = null);

(statearr_287919_287982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (6))){
var inst_287836 = (state_287899[(13)]);
var inst_287849 = f.call(null,inst_287836);
var inst_287850 = cljs.core.seq.call(null,inst_287849);
var inst_287851 = inst_287850;
var inst_287852 = null;
var inst_287853 = (0);
var inst_287854 = (0);
var state_287899__$1 = (function (){var statearr_287920 = state_287899;
(statearr_287920[(8)] = inst_287854);

(statearr_287920[(9)] = inst_287853);

(statearr_287920[(11)] = inst_287851);

(statearr_287920[(12)] = inst_287852);

return statearr_287920;
})();
var statearr_287921_287983 = state_287899__$1;
(statearr_287921_287983[(2)] = null);

(statearr_287921_287983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (17))){
var inst_287865 = (state_287899[(7)]);
var inst_287869 = cljs.core.chunk_first.call(null,inst_287865);
var inst_287870 = cljs.core.chunk_rest.call(null,inst_287865);
var inst_287871 = cljs.core.count.call(null,inst_287869);
var inst_287851 = inst_287870;
var inst_287852 = inst_287869;
var inst_287853 = inst_287871;
var inst_287854 = (0);
var state_287899__$1 = (function (){var statearr_287922 = state_287899;
(statearr_287922[(8)] = inst_287854);

(statearr_287922[(9)] = inst_287853);

(statearr_287922[(11)] = inst_287851);

(statearr_287922[(12)] = inst_287852);

return statearr_287922;
})();
var statearr_287927_287988 = state_287899__$1;
(statearr_287927_287988[(2)] = null);

(statearr_287927_287988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (3))){
var inst_287897 = (state_287899[(2)]);
var state_287899__$1 = state_287899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_287899__$1,inst_287897);
} else {
if((state_val_287900 === (12))){
var inst_287885 = (state_287899[(2)]);
var state_287899__$1 = state_287899;
var statearr_287928_287989 = state_287899__$1;
(statearr_287928_287989[(2)] = inst_287885);

(statearr_287928_287989[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (2))){
var state_287899__$1 = state_287899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_287899__$1,(4),in$);
} else {
if((state_val_287900 === (23))){
var inst_287893 = (state_287899[(2)]);
var state_287899__$1 = state_287899;
var statearr_287929_287992 = state_287899__$1;
(statearr_287929_287992[(2)] = inst_287893);

(statearr_287929_287992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (19))){
var inst_287880 = (state_287899[(2)]);
var state_287899__$1 = state_287899;
var statearr_287930_287993 = state_287899__$1;
(statearr_287930_287993[(2)] = inst_287880);

(statearr_287930_287993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (11))){
var inst_287865 = (state_287899[(7)]);
var inst_287851 = (state_287899[(11)]);
var inst_287865__$1 = cljs.core.seq.call(null,inst_287851);
var state_287899__$1 = (function (){var statearr_287931 = state_287899;
(statearr_287931[(7)] = inst_287865__$1);

return statearr_287931;
})();
if(inst_287865__$1){
var statearr_287932_287994 = state_287899__$1;
(statearr_287932_287994[(1)] = (14));

} else {
var statearr_287933_287996 = state_287899__$1;
(statearr_287933_287996[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (9))){
var inst_287887 = (state_287899[(2)]);
var inst_287888 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_287899__$1 = (function (){var statearr_287934 = state_287899;
(statearr_287934[(15)] = inst_287887);

return statearr_287934;
})();
if(cljs.core.truth_(inst_287888)){
var statearr_287935_287997 = state_287899__$1;
(statearr_287935_287997[(1)] = (21));

} else {
var statearr_287936_287998 = state_287899__$1;
(statearr_287936_287998[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (5))){
var inst_287843 = cljs.core.async.close_BANG_.call(null,out);
var state_287899__$1 = state_287899;
var statearr_287937_287999 = state_287899__$1;
(statearr_287937_287999[(2)] = inst_287843);

(statearr_287937_287999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (14))){
var inst_287865 = (state_287899[(7)]);
var inst_287867 = cljs.core.chunked_seq_QMARK_.call(null,inst_287865);
var state_287899__$1 = state_287899;
if(inst_287867){
var statearr_287938_288000 = state_287899__$1;
(statearr_287938_288000[(1)] = (17));

} else {
var statearr_287939_288001 = state_287899__$1;
(statearr_287939_288001[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (16))){
var inst_287883 = (state_287899[(2)]);
var state_287899__$1 = state_287899;
var statearr_287944_288004 = state_287899__$1;
(statearr_287944_288004[(2)] = inst_287883);

(statearr_287944_288004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_287900 === (10))){
var inst_287854 = (state_287899[(8)]);
var inst_287852 = (state_287899[(12)]);
var inst_287859 = cljs.core._nth.call(null,inst_287852,inst_287854);
var state_287899__$1 = state_287899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287899__$1,(13),out,inst_287859);
} else {
if((state_val_287900 === (18))){
var inst_287865 = (state_287899[(7)]);
var inst_287874 = cljs.core.first.call(null,inst_287865);
var state_287899__$1 = state_287899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_287899__$1,(20),out,inst_287874);
} else {
if((state_val_287900 === (8))){
var inst_287854 = (state_287899[(8)]);
var inst_287853 = (state_287899[(9)]);
var inst_287856 = (inst_287854 < inst_287853);
var inst_287857 = inst_287856;
var state_287899__$1 = state_287899;
if(cljs.core.truth_(inst_287857)){
var statearr_287945_288015 = state_287899__$1;
(statearr_287945_288015[(1)] = (10));

} else {
var statearr_287946_288016 = state_287899__$1;
(statearr_287946_288016[(1)] = (11));

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
var statearr_287950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_287950[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__);

(statearr_287950[(1)] = (1));

return statearr_287950;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1 = (function (state_287899){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_287899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e287952){if((e287952 instanceof Object)){
var ex__38083__auto__ = e287952;
var statearr_287955_288017 = state_287899;
(statearr_287955_288017[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_287899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e287952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288018 = state_287899;
state_287899 = G__288018;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__ = function(state_287899){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1.call(this,state_287899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_287957 = f__38101__auto__.call(null);
(statearr_287957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_287957;
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
var args288020 = [];
var len__36260__auto___288024 = arguments.length;
var i__36261__auto___288025 = (0);
while(true){
if((i__36261__auto___288025 < len__36260__auto___288024)){
args288020.push((arguments[i__36261__auto___288025]));

var G__288026 = (i__36261__auto___288025 + (1));
i__36261__auto___288025 = G__288026;
continue;
} else {
}
break;
}

var G__288022 = args288020.length;
switch (G__288022) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288020.length)].join('')));

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
var args288028 = [];
var len__36260__auto___288031 = arguments.length;
var i__36261__auto___288032 = (0);
while(true){
if((i__36261__auto___288032 < len__36260__auto___288031)){
args288028.push((arguments[i__36261__auto___288032]));

var G__288033 = (i__36261__auto___288032 + (1));
i__36261__auto___288032 = G__288033;
continue;
} else {
}
break;
}

var G__288030 = args288028.length;
switch (G__288030) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288028.length)].join('')));

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
var args288042 = [];
var len__36260__auto___288102 = arguments.length;
var i__36261__auto___288103 = (0);
while(true){
if((i__36261__auto___288103 < len__36260__auto___288102)){
args288042.push((arguments[i__36261__auto___288103]));

var G__288104 = (i__36261__auto___288103 + (1));
i__36261__auto___288103 = G__288104;
continue;
} else {
}
break;
}

var G__288044 = args288042.length;
switch (G__288044) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288042.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___288107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___288107,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___288107,out){
return (function (state_288073){
var state_val_288074 = (state_288073[(1)]);
if((state_val_288074 === (7))){
var inst_288068 = (state_288073[(2)]);
var state_288073__$1 = state_288073;
var statearr_288075_288108 = state_288073__$1;
(statearr_288075_288108[(2)] = inst_288068);

(statearr_288075_288108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288074 === (1))){
var inst_288048 = null;
var state_288073__$1 = (function (){var statearr_288076 = state_288073;
(statearr_288076[(7)] = inst_288048);

return statearr_288076;
})();
var statearr_288077_288109 = state_288073__$1;
(statearr_288077_288109[(2)] = null);

(statearr_288077_288109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288074 === (4))){
var inst_288052 = (state_288073[(8)]);
var inst_288052__$1 = (state_288073[(2)]);
var inst_288053 = (inst_288052__$1 == null);
var inst_288054 = cljs.core.not.call(null,inst_288053);
var state_288073__$1 = (function (){var statearr_288080 = state_288073;
(statearr_288080[(8)] = inst_288052__$1);

return statearr_288080;
})();
if(inst_288054){
var statearr_288081_288114 = state_288073__$1;
(statearr_288081_288114[(1)] = (5));

} else {
var statearr_288083_288115 = state_288073__$1;
(statearr_288083_288115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288074 === (6))){
var state_288073__$1 = state_288073;
var statearr_288084_288117 = state_288073__$1;
(statearr_288084_288117[(2)] = null);

(statearr_288084_288117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288074 === (3))){
var inst_288070 = (state_288073[(2)]);
var inst_288071 = cljs.core.async.close_BANG_.call(null,out);
var state_288073__$1 = (function (){var statearr_288085 = state_288073;
(statearr_288085[(9)] = inst_288070);

return statearr_288085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288073__$1,inst_288071);
} else {
if((state_val_288074 === (2))){
var state_288073__$1 = state_288073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288073__$1,(4),ch);
} else {
if((state_val_288074 === (11))){
var inst_288052 = (state_288073[(8)]);
var inst_288062 = (state_288073[(2)]);
var inst_288048 = inst_288052;
var state_288073__$1 = (function (){var statearr_288086 = state_288073;
(statearr_288086[(10)] = inst_288062);

(statearr_288086[(7)] = inst_288048);

return statearr_288086;
})();
var statearr_288087_288121 = state_288073__$1;
(statearr_288087_288121[(2)] = null);

(statearr_288087_288121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288074 === (9))){
var inst_288052 = (state_288073[(8)]);
var state_288073__$1 = state_288073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288073__$1,(11),out,inst_288052);
} else {
if((state_val_288074 === (5))){
var inst_288048 = (state_288073[(7)]);
var inst_288052 = (state_288073[(8)]);
var inst_288056 = cljs.core._EQ_.call(null,inst_288052,inst_288048);
var state_288073__$1 = state_288073;
if(inst_288056){
var statearr_288089_288126 = state_288073__$1;
(statearr_288089_288126[(1)] = (8));

} else {
var statearr_288090_288127 = state_288073__$1;
(statearr_288090_288127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288074 === (10))){
var inst_288065 = (state_288073[(2)]);
var state_288073__$1 = state_288073;
var statearr_288091_288128 = state_288073__$1;
(statearr_288091_288128[(2)] = inst_288065);

(statearr_288091_288128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288074 === (8))){
var inst_288048 = (state_288073[(7)]);
var tmp288088 = inst_288048;
var inst_288048__$1 = tmp288088;
var state_288073__$1 = (function (){var statearr_288092 = state_288073;
(statearr_288092[(7)] = inst_288048__$1);

return statearr_288092;
})();
var statearr_288093_288129 = state_288073__$1;
(statearr_288093_288129[(2)] = null);

(statearr_288093_288129[(1)] = (2));


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
});})(c__38100__auto___288107,out))
;
return ((function (switch__38079__auto__,c__38100__auto___288107,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_288098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_288098[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_288098[(1)] = (1));

return statearr_288098;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_288073){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_288073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e288099){if((e288099 instanceof Object)){
var ex__38083__auto__ = e288099;
var statearr_288100_288135 = state_288073;
(statearr_288100_288135[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288136 = state_288073;
state_288073 = G__288136;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_288073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_288073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___288107,out))
})();
var state__38102__auto__ = (function (){var statearr_288101 = f__38101__auto__.call(null);
(statearr_288101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___288107);

return statearr_288101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___288107,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args288137 = [];
var len__36260__auto___288216 = arguments.length;
var i__36261__auto___288217 = (0);
while(true){
if((i__36261__auto___288217 < len__36260__auto___288216)){
args288137.push((arguments[i__36261__auto___288217]));

var G__288218 = (i__36261__auto___288217 + (1));
i__36261__auto___288217 = G__288218;
continue;
} else {
}
break;
}

var G__288139 = args288137.length;
switch (G__288139) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288137.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___288224 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___288224,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___288224,out){
return (function (state_288182){
var state_val_288183 = (state_288182[(1)]);
if((state_val_288183 === (7))){
var inst_288178 = (state_288182[(2)]);
var state_288182__$1 = state_288182;
var statearr_288185_288225 = state_288182__$1;
(statearr_288185_288225[(2)] = inst_288178);

(statearr_288185_288225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288183 === (1))){
var inst_288140 = (new Array(n));
var inst_288146 = inst_288140;
var inst_288147 = (0);
var state_288182__$1 = (function (){var statearr_288186 = state_288182;
(statearr_288186[(7)] = inst_288146);

(statearr_288186[(8)] = inst_288147);

return statearr_288186;
})();
var statearr_288187_288226 = state_288182__$1;
(statearr_288187_288226[(2)] = null);

(statearr_288187_288226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288183 === (4))){
var inst_288150 = (state_288182[(9)]);
var inst_288150__$1 = (state_288182[(2)]);
var inst_288151 = (inst_288150__$1 == null);
var inst_288152 = cljs.core.not.call(null,inst_288151);
var state_288182__$1 = (function (){var statearr_288188 = state_288182;
(statearr_288188[(9)] = inst_288150__$1);

return statearr_288188;
})();
if(inst_288152){
var statearr_288189_288227 = state_288182__$1;
(statearr_288189_288227[(1)] = (5));

} else {
var statearr_288190_288228 = state_288182__$1;
(statearr_288190_288228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288183 === (15))){
var inst_288172 = (state_288182[(2)]);
var state_288182__$1 = state_288182;
var statearr_288191_288231 = state_288182__$1;
(statearr_288191_288231[(2)] = inst_288172);

(statearr_288191_288231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288183 === (13))){
var state_288182__$1 = state_288182;
var statearr_288192_288232 = state_288182__$1;
(statearr_288192_288232[(2)] = null);

(statearr_288192_288232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288183 === (6))){
var inst_288147 = (state_288182[(8)]);
var inst_288168 = (inst_288147 > (0));
var state_288182__$1 = state_288182;
if(cljs.core.truth_(inst_288168)){
var statearr_288193_288233 = state_288182__$1;
(statearr_288193_288233[(1)] = (12));

} else {
var statearr_288194_288234 = state_288182__$1;
(statearr_288194_288234[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288183 === (3))){
var inst_288180 = (state_288182[(2)]);
var state_288182__$1 = state_288182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288182__$1,inst_288180);
} else {
if((state_val_288183 === (12))){
var inst_288146 = (state_288182[(7)]);
var inst_288170 = cljs.core.vec.call(null,inst_288146);
var state_288182__$1 = state_288182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288182__$1,(15),out,inst_288170);
} else {
if((state_val_288183 === (2))){
var state_288182__$1 = state_288182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288182__$1,(4),ch);
} else {
if((state_val_288183 === (11))){
var inst_288162 = (state_288182[(2)]);
var inst_288163 = (new Array(n));
var inst_288146 = inst_288163;
var inst_288147 = (0);
var state_288182__$1 = (function (){var statearr_288195 = state_288182;
(statearr_288195[(7)] = inst_288146);

(statearr_288195[(8)] = inst_288147);

(statearr_288195[(10)] = inst_288162);

return statearr_288195;
})();
var statearr_288196_288241 = state_288182__$1;
(statearr_288196_288241[(2)] = null);

(statearr_288196_288241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288183 === (9))){
var inst_288146 = (state_288182[(7)]);
var inst_288160 = cljs.core.vec.call(null,inst_288146);
var state_288182__$1 = state_288182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288182__$1,(11),out,inst_288160);
} else {
if((state_val_288183 === (5))){
var inst_288146 = (state_288182[(7)]);
var inst_288150 = (state_288182[(9)]);
var inst_288147 = (state_288182[(8)]);
var inst_288155 = (state_288182[(11)]);
var inst_288154 = (inst_288146[inst_288147] = inst_288150);
var inst_288155__$1 = (inst_288147 + (1));
var inst_288156 = (inst_288155__$1 < n);
var state_288182__$1 = (function (){var statearr_288198 = state_288182;
(statearr_288198[(12)] = inst_288154);

(statearr_288198[(11)] = inst_288155__$1);

return statearr_288198;
})();
if(cljs.core.truth_(inst_288156)){
var statearr_288199_288246 = state_288182__$1;
(statearr_288199_288246[(1)] = (8));

} else {
var statearr_288200_288247 = state_288182__$1;
(statearr_288200_288247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288183 === (14))){
var inst_288175 = (state_288182[(2)]);
var inst_288176 = cljs.core.async.close_BANG_.call(null,out);
var state_288182__$1 = (function (){var statearr_288203 = state_288182;
(statearr_288203[(13)] = inst_288175);

return statearr_288203;
})();
var statearr_288204_288248 = state_288182__$1;
(statearr_288204_288248[(2)] = inst_288176);

(statearr_288204_288248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288183 === (10))){
var inst_288166 = (state_288182[(2)]);
var state_288182__$1 = state_288182;
var statearr_288205_288249 = state_288182__$1;
(statearr_288205_288249[(2)] = inst_288166);

(statearr_288205_288249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288183 === (8))){
var inst_288146 = (state_288182[(7)]);
var inst_288155 = (state_288182[(11)]);
var tmp288201 = inst_288146;
var inst_288146__$1 = tmp288201;
var inst_288147 = inst_288155;
var state_288182__$1 = (function (){var statearr_288206 = state_288182;
(statearr_288206[(7)] = inst_288146__$1);

(statearr_288206[(8)] = inst_288147);

return statearr_288206;
})();
var statearr_288207_288253 = state_288182__$1;
(statearr_288207_288253[(2)] = null);

(statearr_288207_288253[(1)] = (2));


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
});})(c__38100__auto___288224,out))
;
return ((function (switch__38079__auto__,c__38100__auto___288224,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_288212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_288212[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_288212[(1)] = (1));

return statearr_288212;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_288182){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_288182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e288213){if((e288213 instanceof Object)){
var ex__38083__auto__ = e288213;
var statearr_288214_288257 = state_288182;
(statearr_288214_288257[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288258 = state_288182;
state_288182 = G__288258;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_288182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_288182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___288224,out))
})();
var state__38102__auto__ = (function (){var statearr_288215 = f__38101__auto__.call(null);
(statearr_288215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___288224);

return statearr_288215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___288224,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args288262 = [];
var len__36260__auto___288344 = arguments.length;
var i__36261__auto___288345 = (0);
while(true){
if((i__36261__auto___288345 < len__36260__auto___288344)){
args288262.push((arguments[i__36261__auto___288345]));

var G__288347 = (i__36261__auto___288345 + (1));
i__36261__auto___288345 = G__288347;
continue;
} else {
}
break;
}

var G__288264 = args288262.length;
switch (G__288264) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288262.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___288349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___288349,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___288349,out){
return (function (state_288309){
var state_val_288310 = (state_288309[(1)]);
if((state_val_288310 === (7))){
var inst_288305 = (state_288309[(2)]);
var state_288309__$1 = state_288309;
var statearr_288311_288355 = state_288309__$1;
(statearr_288311_288355[(2)] = inst_288305);

(statearr_288311_288355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288310 === (1))){
var inst_288267 = [];
var inst_288268 = inst_288267;
var inst_288269 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_288309__$1 = (function (){var statearr_288312 = state_288309;
(statearr_288312[(7)] = inst_288269);

(statearr_288312[(8)] = inst_288268);

return statearr_288312;
})();
var statearr_288313_288356 = state_288309__$1;
(statearr_288313_288356[(2)] = null);

(statearr_288313_288356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288310 === (4))){
var inst_288272 = (state_288309[(9)]);
var inst_288272__$1 = (state_288309[(2)]);
var inst_288273 = (inst_288272__$1 == null);
var inst_288274 = cljs.core.not.call(null,inst_288273);
var state_288309__$1 = (function (){var statearr_288314 = state_288309;
(statearr_288314[(9)] = inst_288272__$1);

return statearr_288314;
})();
if(inst_288274){
var statearr_288315_288367 = state_288309__$1;
(statearr_288315_288367[(1)] = (5));

} else {
var statearr_288316_288368 = state_288309__$1;
(statearr_288316_288368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288310 === (15))){
var inst_288299 = (state_288309[(2)]);
var state_288309__$1 = state_288309;
var statearr_288317_288374 = state_288309__$1;
(statearr_288317_288374[(2)] = inst_288299);

(statearr_288317_288374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288310 === (13))){
var state_288309__$1 = state_288309;
var statearr_288318_288375 = state_288309__$1;
(statearr_288318_288375[(2)] = null);

(statearr_288318_288375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288310 === (6))){
var inst_288268 = (state_288309[(8)]);
var inst_288294 = inst_288268.length;
var inst_288295 = (inst_288294 > (0));
var state_288309__$1 = state_288309;
if(cljs.core.truth_(inst_288295)){
var statearr_288319_288376 = state_288309__$1;
(statearr_288319_288376[(1)] = (12));

} else {
var statearr_288320_288377 = state_288309__$1;
(statearr_288320_288377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288310 === (3))){
var inst_288307 = (state_288309[(2)]);
var state_288309__$1 = state_288309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288309__$1,inst_288307);
} else {
if((state_val_288310 === (12))){
var inst_288268 = (state_288309[(8)]);
var inst_288297 = cljs.core.vec.call(null,inst_288268);
var state_288309__$1 = state_288309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288309__$1,(15),out,inst_288297);
} else {
if((state_val_288310 === (2))){
var state_288309__$1 = state_288309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288309__$1,(4),ch);
} else {
if((state_val_288310 === (11))){
var inst_288276 = (state_288309[(10)]);
var inst_288272 = (state_288309[(9)]);
var inst_288286 = (state_288309[(2)]);
var inst_288287 = [];
var inst_288288 = inst_288287.push(inst_288272);
var inst_288268 = inst_288287;
var inst_288269 = inst_288276;
var state_288309__$1 = (function (){var statearr_288321 = state_288309;
(statearr_288321[(7)] = inst_288269);

(statearr_288321[(11)] = inst_288286);

(statearr_288321[(12)] = inst_288288);

(statearr_288321[(8)] = inst_288268);

return statearr_288321;
})();
var statearr_288322_288378 = state_288309__$1;
(statearr_288322_288378[(2)] = null);

(statearr_288322_288378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288310 === (9))){
var inst_288268 = (state_288309[(8)]);
var inst_288284 = cljs.core.vec.call(null,inst_288268);
var state_288309__$1 = state_288309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_288309__$1,(11),out,inst_288284);
} else {
if((state_val_288310 === (5))){
var inst_288276 = (state_288309[(10)]);
var inst_288269 = (state_288309[(7)]);
var inst_288272 = (state_288309[(9)]);
var inst_288276__$1 = f.call(null,inst_288272);
var inst_288277 = cljs.core._EQ_.call(null,inst_288276__$1,inst_288269);
var inst_288278 = cljs.core.keyword_identical_QMARK_.call(null,inst_288269,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_288279 = (inst_288277) || (inst_288278);
var state_288309__$1 = (function (){var statearr_288327 = state_288309;
(statearr_288327[(10)] = inst_288276__$1);

return statearr_288327;
})();
if(cljs.core.truth_(inst_288279)){
var statearr_288328_288381 = state_288309__$1;
(statearr_288328_288381[(1)] = (8));

} else {
var statearr_288329_288382 = state_288309__$1;
(statearr_288329_288382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288310 === (14))){
var inst_288302 = (state_288309[(2)]);
var inst_288303 = cljs.core.async.close_BANG_.call(null,out);
var state_288309__$1 = (function (){var statearr_288331 = state_288309;
(statearr_288331[(13)] = inst_288302);

return statearr_288331;
})();
var statearr_288332_288388 = state_288309__$1;
(statearr_288332_288388[(2)] = inst_288303);

(statearr_288332_288388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288310 === (10))){
var inst_288291 = (state_288309[(2)]);
var state_288309__$1 = state_288309;
var statearr_288333_288389 = state_288309__$1;
(statearr_288333_288389[(2)] = inst_288291);

(statearr_288333_288389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288310 === (8))){
var inst_288276 = (state_288309[(10)]);
var inst_288272 = (state_288309[(9)]);
var inst_288268 = (state_288309[(8)]);
var inst_288281 = inst_288268.push(inst_288272);
var tmp288330 = inst_288268;
var inst_288268__$1 = tmp288330;
var inst_288269 = inst_288276;
var state_288309__$1 = (function (){var statearr_288334 = state_288309;
(statearr_288334[(14)] = inst_288281);

(statearr_288334[(7)] = inst_288269);

(statearr_288334[(8)] = inst_288268__$1);

return statearr_288334;
})();
var statearr_288335_288398 = state_288309__$1;
(statearr_288335_288398[(2)] = null);

(statearr_288335_288398[(1)] = (2));


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
});})(c__38100__auto___288349,out))
;
return ((function (switch__38079__auto__,c__38100__auto___288349,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_288339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_288339[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_288339[(1)] = (1));

return statearr_288339;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_288309){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_288309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e288341){if((e288341 instanceof Object)){
var ex__38083__auto__ = e288341;
var statearr_288342_288399 = state_288309;
(statearr_288342_288399[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288404 = state_288309;
state_288309 = G__288404;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_288309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_288309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___288349,out))
})();
var state__38102__auto__ = (function (){var statearr_288343 = f__38101__auto__.call(null);
(statearr_288343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___288349);

return statearr_288343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___288349,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
