// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async202933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async202933 = (function (fn_handler,f,meta202934){
this.fn_handler = fn_handler;
this.f = f;
this.meta202934 = meta202934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async202933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_202935,meta202934__$1){
var self__ = this;
var _202935__$1 = this;
return (new cljs.core.async.t_cljs$core$async202933(self__.fn_handler,self__.f,meta202934__$1));
});

cljs.core.async.t_cljs$core$async202933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_202935){
var self__ = this;
var _202935__$1 = this;
return self__.meta202934;
});

cljs.core.async.t_cljs$core$async202933.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async202933.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async202933.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async202933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta202934","meta202934",-641276120,null)], null);
});

cljs.core.async.t_cljs$core$async202933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async202933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async202933";

cljs.core.async.t_cljs$core$async202933.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cljs.core.async/t_cljs$core$async202933");
});

cljs.core.async.__GT_t_cljs$core$async202933 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async202933(fn_handler__$1,f__$1,meta202934){
return (new cljs.core.async.t_cljs$core$async202933(fn_handler__$1,f__$1,meta202934));
});

}

return (new cljs.core.async.t_cljs$core$async202933(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args202938 = [];
var len__25279__auto___202941 = arguments.length;
var i__25280__auto___202942 = (0);
while(true){
if((i__25280__auto___202942 < len__25279__auto___202941)){
args202938.push((arguments[i__25280__auto___202942]));

var G__202943 = (i__25280__auto___202942 + (1));
i__25280__auto___202942 = G__202943;
continue;
} else {
}
break;
}

var G__202940 = args202938.length;
switch (G__202940) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args202938.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args202945 = [];
var len__25279__auto___202948 = arguments.length;
var i__25280__auto___202949 = (0);
while(true){
if((i__25280__auto___202949 < len__25279__auto___202948)){
args202945.push((arguments[i__25280__auto___202949]));

var G__202950 = (i__25280__auto___202949 + (1));
i__25280__auto___202949 = G__202950;
continue;
} else {
}
break;
}

var G__202947 = args202945.length;
switch (G__202947) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args202945.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_202952 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_202952);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_202952,ret){
return (function (){
return fn1.call(null,val_202952);
});})(val_202952,ret))
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
var args202953 = [];
var len__25279__auto___202956 = arguments.length;
var i__25280__auto___202957 = (0);
while(true){
if((i__25280__auto___202957 < len__25279__auto___202956)){
args202953.push((arguments[i__25280__auto___202957]));

var G__202958 = (i__25280__auto___202957 + (1));
i__25280__auto___202957 = G__202958;
continue;
} else {
}
break;
}

var G__202955 = args202953.length;
switch (G__202955) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args202953.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__25124__auto___202960 = n;
var x_202961 = (0);
while(true){
if((x_202961 < n__25124__auto___202960)){
(a[x_202961] = (0));

var G__202962 = (x_202961 + (1));
x_202961 = G__202962;
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

var G__202963 = (i + (1));
i = G__202963;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async202967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async202967 = (function (alt_flag,flag,meta202968){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta202968 = meta202968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async202967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_202969,meta202968__$1){
var self__ = this;
var _202969__$1 = this;
return (new cljs.core.async.t_cljs$core$async202967(self__.alt_flag,self__.flag,meta202968__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async202967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_202969){
var self__ = this;
var _202969__$1 = this;
return self__.meta202968;
});})(flag))
;

cljs.core.async.t_cljs$core$async202967.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async202967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async202967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async202967.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta202968","meta202968",-947787750,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async202967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async202967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async202967";

cljs.core.async.t_cljs$core$async202967.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cljs.core.async/t_cljs$core$async202967");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async202967 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async202967(alt_flag__$1,flag__$1,meta202968){
return (new cljs.core.async.t_cljs$core$async202967(alt_flag__$1,flag__$1,meta202968));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async202967(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async202973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async202973 = (function (alt_handler,flag,cb,meta202974){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta202974 = meta202974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async202973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_202975,meta202974__$1){
var self__ = this;
var _202975__$1 = this;
return (new cljs.core.async.t_cljs$core$async202973(self__.alt_handler,self__.flag,self__.cb,meta202974__$1));
});

cljs.core.async.t_cljs$core$async202973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_202975){
var self__ = this;
var _202975__$1 = this;
return self__.meta202974;
});

cljs.core.async.t_cljs$core$async202973.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async202973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async202973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async202973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta202974","meta202974",-325424309,null)], null);
});

cljs.core.async.t_cljs$core$async202973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async202973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async202973";

cljs.core.async.t_cljs$core$async202973.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cljs.core.async/t_cljs$core$async202973");
});

cljs.core.async.__GT_t_cljs$core$async202973 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async202973(alt_handler__$1,flag__$1,cb__$1,meta202974){
return (new cljs.core.async.t_cljs$core$async202973(alt_handler__$1,flag__$1,cb__$1,meta202974));
});

}

return (new cljs.core.async.t_cljs$core$async202973(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__202976_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__202976_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__202977_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__202977_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24221__auto__ = wport;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return port;
}
})()], null));
} else {
var G__202978 = (i + (1));
i = G__202978;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24221__auto__ = ret;
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__24209__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24209__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24209__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__25286__auto__ = [];
var len__25279__auto___202984 = arguments.length;
var i__25280__auto___202985 = (0);
while(true){
if((i__25280__auto___202985 < len__25279__auto___202984)){
args__25286__auto__.push((arguments[i__25280__auto___202985]));

var G__202986 = (i__25280__auto___202985 + (1));
i__25280__auto___202985 = G__202986;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((1) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25287__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__202981){
var map__202982 = p__202981;
var map__202982__$1 = ((((!((map__202982 == null)))?((((map__202982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__202982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__202982):map__202982);
var opts = map__202982__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq202979){
var G__202980 = cljs.core.first.call(null,seq202979);
var seq202979__$1 = cljs.core.next.call(null,seq202979);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__202980,seq202979__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args202987 = [];
var len__25279__auto___203037 = arguments.length;
var i__25280__auto___203038 = (0);
while(true){
if((i__25280__auto___203038 < len__25279__auto___203037)){
args202987.push((arguments[i__25280__auto___203038]));

var G__203039 = (i__25280__auto___203038 + (1));
i__25280__auto___203038 = G__203039;
continue;
} else {
}
break;
}

var G__202989 = args202987.length;
switch (G__202989) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args202987.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36125__auto___203041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___203041){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___203041){
return (function (state_203013){
var state_val_203014 = (state_203013[(1)]);
if((state_val_203014 === (7))){
var inst_203009 = (state_203013[(2)]);
var state_203013__$1 = state_203013;
var statearr_203015_203042 = state_203013__$1;
(statearr_203015_203042[(2)] = inst_203009);

(statearr_203015_203042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203014 === (1))){
var state_203013__$1 = state_203013;
var statearr_203016_203043 = state_203013__$1;
(statearr_203016_203043[(2)] = null);

(statearr_203016_203043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203014 === (4))){
var inst_202992 = (state_203013[(7)]);
var inst_202992__$1 = (state_203013[(2)]);
var inst_202993 = (inst_202992__$1 == null);
var state_203013__$1 = (function (){var statearr_203017 = state_203013;
(statearr_203017[(7)] = inst_202992__$1);

return statearr_203017;
})();
if(cljs.core.truth_(inst_202993)){
var statearr_203018_203044 = state_203013__$1;
(statearr_203018_203044[(1)] = (5));

} else {
var statearr_203019_203045 = state_203013__$1;
(statearr_203019_203045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203014 === (13))){
var state_203013__$1 = state_203013;
var statearr_203020_203046 = state_203013__$1;
(statearr_203020_203046[(2)] = null);

(statearr_203020_203046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203014 === (6))){
var inst_202992 = (state_203013[(7)]);
var state_203013__$1 = state_203013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203013__$1,(11),to,inst_202992);
} else {
if((state_val_203014 === (3))){
var inst_203011 = (state_203013[(2)]);
var state_203013__$1 = state_203013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203013__$1,inst_203011);
} else {
if((state_val_203014 === (12))){
var state_203013__$1 = state_203013;
var statearr_203021_203047 = state_203013__$1;
(statearr_203021_203047[(2)] = null);

(statearr_203021_203047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203014 === (2))){
var state_203013__$1 = state_203013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203013__$1,(4),from);
} else {
if((state_val_203014 === (11))){
var inst_203002 = (state_203013[(2)]);
var state_203013__$1 = state_203013;
if(cljs.core.truth_(inst_203002)){
var statearr_203022_203048 = state_203013__$1;
(statearr_203022_203048[(1)] = (12));

} else {
var statearr_203023_203049 = state_203013__$1;
(statearr_203023_203049[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203014 === (9))){
var state_203013__$1 = state_203013;
var statearr_203024_203050 = state_203013__$1;
(statearr_203024_203050[(2)] = null);

(statearr_203024_203050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203014 === (5))){
var state_203013__$1 = state_203013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_203025_203051 = state_203013__$1;
(statearr_203025_203051[(1)] = (8));

} else {
var statearr_203026_203052 = state_203013__$1;
(statearr_203026_203052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203014 === (14))){
var inst_203007 = (state_203013[(2)]);
var state_203013__$1 = state_203013;
var statearr_203027_203053 = state_203013__$1;
(statearr_203027_203053[(2)] = inst_203007);

(statearr_203027_203053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203014 === (10))){
var inst_202999 = (state_203013[(2)]);
var state_203013__$1 = state_203013;
var statearr_203028_203054 = state_203013__$1;
(statearr_203028_203054[(2)] = inst_202999);

(statearr_203028_203054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203014 === (8))){
var inst_202996 = cljs.core.async.close_BANG_.call(null,to);
var state_203013__$1 = state_203013;
var statearr_203029_203055 = state_203013__$1;
(statearr_203029_203055[(2)] = inst_202996);

(statearr_203029_203055[(1)] = (10));


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
});})(c__36125__auto___203041))
;
return ((function (switch__36013__auto__,c__36125__auto___203041){
return (function() {
var cljs$core$async$state_machine__36014__auto__ = null;
var cljs$core$async$state_machine__36014__auto____0 = (function (){
var statearr_203033 = [null,null,null,null,null,null,null,null];
(statearr_203033[(0)] = cljs$core$async$state_machine__36014__auto__);

(statearr_203033[(1)] = (1));

return statearr_203033;
});
var cljs$core$async$state_machine__36014__auto____1 = (function (state_203013){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_203013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e203034){if((e203034 instanceof Object)){
var ex__36017__auto__ = e203034;
var statearr_203035_203056 = state_203013;
(statearr_203035_203056[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203057 = state_203013;
state_203013 = G__203057;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$state_machine__36014__auto__ = function(state_203013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36014__auto____1.call(this,state_203013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36014__auto____0;
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36014__auto____1;
return cljs$core$async$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___203041))
})();
var state__36127__auto__ = (function (){var statearr_203036 = f__36126__auto__.call(null);
(statearr_203036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___203041);

return statearr_203036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___203041))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__203241){
var vec__203242 = p__203241;
var v = cljs.core.nth.call(null,vec__203242,(0),null);
var p = cljs.core.nth.call(null,vec__203242,(1),null);
var job = vec__203242;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36125__auto___203424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___203424,res,vec__203242,v,p,job,jobs,results){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___203424,res,vec__203242,v,p,job,jobs,results){
return (function (state_203247){
var state_val_203248 = (state_203247[(1)]);
if((state_val_203248 === (1))){
var state_203247__$1 = state_203247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203247__$1,(2),res,v);
} else {
if((state_val_203248 === (2))){
var inst_203244 = (state_203247[(2)]);
var inst_203245 = cljs.core.async.close_BANG_.call(null,res);
var state_203247__$1 = (function (){var statearr_203249 = state_203247;
(statearr_203249[(7)] = inst_203244);

return statearr_203249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203247__$1,inst_203245);
} else {
return null;
}
}
});})(c__36125__auto___203424,res,vec__203242,v,p,job,jobs,results))
;
return ((function (switch__36013__auto__,c__36125__auto___203424,res,vec__203242,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0 = (function (){
var statearr_203253 = [null,null,null,null,null,null,null,null];
(statearr_203253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__);

(statearr_203253[(1)] = (1));

return statearr_203253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1 = (function (state_203247){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_203247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e203254){if((e203254 instanceof Object)){
var ex__36017__auto__ = e203254;
var statearr_203255_203425 = state_203247;
(statearr_203255_203425[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203426 = state_203247;
state_203247 = G__203426;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__ = function(state_203247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1.call(this,state_203247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___203424,res,vec__203242,v,p,job,jobs,results))
})();
var state__36127__auto__ = (function (){var statearr_203256 = f__36126__auto__.call(null);
(statearr_203256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___203424);

return statearr_203256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___203424,res,vec__203242,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__203257){
var vec__203258 = p__203257;
var v = cljs.core.nth.call(null,vec__203258,(0),null);
var p = cljs.core.nth.call(null,vec__203258,(1),null);
var job = vec__203258;
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
var n__25124__auto___203427 = n;
var __203428 = (0);
while(true){
if((__203428 < n__25124__auto___203427)){
var G__203259_203429 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__203259_203429) {
case "compute":
var c__36125__auto___203431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__203428,c__36125__auto___203431,G__203259_203429,n__25124__auto___203427,jobs,results,process,async){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (__203428,c__36125__auto___203431,G__203259_203429,n__25124__auto___203427,jobs,results,process,async){
return (function (state_203272){
var state_val_203273 = (state_203272[(1)]);
if((state_val_203273 === (1))){
var state_203272__$1 = state_203272;
var statearr_203274_203432 = state_203272__$1;
(statearr_203274_203432[(2)] = null);

(statearr_203274_203432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203273 === (2))){
var state_203272__$1 = state_203272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203272__$1,(4),jobs);
} else {
if((state_val_203273 === (3))){
var inst_203270 = (state_203272[(2)]);
var state_203272__$1 = state_203272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203272__$1,inst_203270);
} else {
if((state_val_203273 === (4))){
var inst_203262 = (state_203272[(2)]);
var inst_203263 = process.call(null,inst_203262);
var state_203272__$1 = state_203272;
if(cljs.core.truth_(inst_203263)){
var statearr_203275_203433 = state_203272__$1;
(statearr_203275_203433[(1)] = (5));

} else {
var statearr_203276_203434 = state_203272__$1;
(statearr_203276_203434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203273 === (5))){
var state_203272__$1 = state_203272;
var statearr_203277_203435 = state_203272__$1;
(statearr_203277_203435[(2)] = null);

(statearr_203277_203435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203273 === (6))){
var state_203272__$1 = state_203272;
var statearr_203278_203436 = state_203272__$1;
(statearr_203278_203436[(2)] = null);

(statearr_203278_203436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203273 === (7))){
var inst_203268 = (state_203272[(2)]);
var state_203272__$1 = state_203272;
var statearr_203279_203437 = state_203272__$1;
(statearr_203279_203437[(2)] = inst_203268);

(statearr_203279_203437[(1)] = (3));


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
});})(__203428,c__36125__auto___203431,G__203259_203429,n__25124__auto___203427,jobs,results,process,async))
;
return ((function (__203428,switch__36013__auto__,c__36125__auto___203431,G__203259_203429,n__25124__auto___203427,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0 = (function (){
var statearr_203283 = [null,null,null,null,null,null,null];
(statearr_203283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__);

(statearr_203283[(1)] = (1));

return statearr_203283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1 = (function (state_203272){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_203272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e203284){if((e203284 instanceof Object)){
var ex__36017__auto__ = e203284;
var statearr_203285_203438 = state_203272;
(statearr_203285_203438[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203439 = state_203272;
state_203272 = G__203439;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__ = function(state_203272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1.call(this,state_203272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__;
})()
;})(__203428,switch__36013__auto__,c__36125__auto___203431,G__203259_203429,n__25124__auto___203427,jobs,results,process,async))
})();
var state__36127__auto__ = (function (){var statearr_203286 = f__36126__auto__.call(null);
(statearr_203286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___203431);

return statearr_203286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(__203428,c__36125__auto___203431,G__203259_203429,n__25124__auto___203427,jobs,results,process,async))
);


break;
case "async":
var c__36125__auto___203440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__203428,c__36125__auto___203440,G__203259_203429,n__25124__auto___203427,jobs,results,process,async){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (__203428,c__36125__auto___203440,G__203259_203429,n__25124__auto___203427,jobs,results,process,async){
return (function (state_203299){
var state_val_203300 = (state_203299[(1)]);
if((state_val_203300 === (1))){
var state_203299__$1 = state_203299;
var statearr_203301_203441 = state_203299__$1;
(statearr_203301_203441[(2)] = null);

(statearr_203301_203441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203300 === (2))){
var state_203299__$1 = state_203299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203299__$1,(4),jobs);
} else {
if((state_val_203300 === (3))){
var inst_203297 = (state_203299[(2)]);
var state_203299__$1 = state_203299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203299__$1,inst_203297);
} else {
if((state_val_203300 === (4))){
var inst_203289 = (state_203299[(2)]);
var inst_203290 = async.call(null,inst_203289);
var state_203299__$1 = state_203299;
if(cljs.core.truth_(inst_203290)){
var statearr_203302_203442 = state_203299__$1;
(statearr_203302_203442[(1)] = (5));

} else {
var statearr_203303_203443 = state_203299__$1;
(statearr_203303_203443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203300 === (5))){
var state_203299__$1 = state_203299;
var statearr_203304_203444 = state_203299__$1;
(statearr_203304_203444[(2)] = null);

(statearr_203304_203444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203300 === (6))){
var state_203299__$1 = state_203299;
var statearr_203305_203445 = state_203299__$1;
(statearr_203305_203445[(2)] = null);

(statearr_203305_203445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203300 === (7))){
var inst_203295 = (state_203299[(2)]);
var state_203299__$1 = state_203299;
var statearr_203306_203446 = state_203299__$1;
(statearr_203306_203446[(2)] = inst_203295);

(statearr_203306_203446[(1)] = (3));


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
});})(__203428,c__36125__auto___203440,G__203259_203429,n__25124__auto___203427,jobs,results,process,async))
;
return ((function (__203428,switch__36013__auto__,c__36125__auto___203440,G__203259_203429,n__25124__auto___203427,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0 = (function (){
var statearr_203310 = [null,null,null,null,null,null,null];
(statearr_203310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__);

(statearr_203310[(1)] = (1));

return statearr_203310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1 = (function (state_203299){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_203299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e203311){if((e203311 instanceof Object)){
var ex__36017__auto__ = e203311;
var statearr_203312_203447 = state_203299;
(statearr_203312_203447[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203448 = state_203299;
state_203299 = G__203448;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__ = function(state_203299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1.call(this,state_203299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__;
})()
;})(__203428,switch__36013__auto__,c__36125__auto___203440,G__203259_203429,n__25124__auto___203427,jobs,results,process,async))
})();
var state__36127__auto__ = (function (){var statearr_203313 = f__36126__auto__.call(null);
(statearr_203313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___203440);

return statearr_203313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(__203428,c__36125__auto___203440,G__203259_203429,n__25124__auto___203427,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__203449 = (__203428 + (1));
__203428 = G__203449;
continue;
} else {
}
break;
}

var c__36125__auto___203450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___203450,jobs,results,process,async){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___203450,jobs,results,process,async){
return (function (state_203335){
var state_val_203336 = (state_203335[(1)]);
if((state_val_203336 === (1))){
var state_203335__$1 = state_203335;
var statearr_203337_203451 = state_203335__$1;
(statearr_203337_203451[(2)] = null);

(statearr_203337_203451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203336 === (2))){
var state_203335__$1 = state_203335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203335__$1,(4),from);
} else {
if((state_val_203336 === (3))){
var inst_203333 = (state_203335[(2)]);
var state_203335__$1 = state_203335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203335__$1,inst_203333);
} else {
if((state_val_203336 === (4))){
var inst_203316 = (state_203335[(7)]);
var inst_203316__$1 = (state_203335[(2)]);
var inst_203317 = (inst_203316__$1 == null);
var state_203335__$1 = (function (){var statearr_203338 = state_203335;
(statearr_203338[(7)] = inst_203316__$1);

return statearr_203338;
})();
if(cljs.core.truth_(inst_203317)){
var statearr_203339_203452 = state_203335__$1;
(statearr_203339_203452[(1)] = (5));

} else {
var statearr_203340_203453 = state_203335__$1;
(statearr_203340_203453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203336 === (5))){
var inst_203319 = cljs.core.async.close_BANG_.call(null,jobs);
var state_203335__$1 = state_203335;
var statearr_203341_203454 = state_203335__$1;
(statearr_203341_203454[(2)] = inst_203319);

(statearr_203341_203454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203336 === (6))){
var inst_203316 = (state_203335[(7)]);
var inst_203321 = (state_203335[(8)]);
var inst_203321__$1 = cljs.core.async.chan.call(null,(1));
var inst_203322 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_203323 = [inst_203316,inst_203321__$1];
var inst_203324 = (new cljs.core.PersistentVector(null,2,(5),inst_203322,inst_203323,null));
var state_203335__$1 = (function (){var statearr_203342 = state_203335;
(statearr_203342[(8)] = inst_203321__$1);

return statearr_203342;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203335__$1,(8),jobs,inst_203324);
} else {
if((state_val_203336 === (7))){
var inst_203331 = (state_203335[(2)]);
var state_203335__$1 = state_203335;
var statearr_203343_203455 = state_203335__$1;
(statearr_203343_203455[(2)] = inst_203331);

(statearr_203343_203455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203336 === (8))){
var inst_203321 = (state_203335[(8)]);
var inst_203326 = (state_203335[(2)]);
var state_203335__$1 = (function (){var statearr_203344 = state_203335;
(statearr_203344[(9)] = inst_203326);

return statearr_203344;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203335__$1,(9),results,inst_203321);
} else {
if((state_val_203336 === (9))){
var inst_203328 = (state_203335[(2)]);
var state_203335__$1 = (function (){var statearr_203345 = state_203335;
(statearr_203345[(10)] = inst_203328);

return statearr_203345;
})();
var statearr_203346_203456 = state_203335__$1;
(statearr_203346_203456[(2)] = null);

(statearr_203346_203456[(1)] = (2));


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
});})(c__36125__auto___203450,jobs,results,process,async))
;
return ((function (switch__36013__auto__,c__36125__auto___203450,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0 = (function (){
var statearr_203350 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_203350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__);

(statearr_203350[(1)] = (1));

return statearr_203350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1 = (function (state_203335){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_203335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e203351){if((e203351 instanceof Object)){
var ex__36017__auto__ = e203351;
var statearr_203352_203457 = state_203335;
(statearr_203352_203457[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203458 = state_203335;
state_203335 = G__203458;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__ = function(state_203335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1.call(this,state_203335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___203450,jobs,results,process,async))
})();
var state__36127__auto__ = (function (){var statearr_203353 = f__36126__auto__.call(null);
(statearr_203353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___203450);

return statearr_203353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___203450,jobs,results,process,async))
);


var c__36125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto__,jobs,results,process,async){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto__,jobs,results,process,async){
return (function (state_203391){
var state_val_203392 = (state_203391[(1)]);
if((state_val_203392 === (7))){
var inst_203387 = (state_203391[(2)]);
var state_203391__$1 = state_203391;
var statearr_203393_203459 = state_203391__$1;
(statearr_203393_203459[(2)] = inst_203387);

(statearr_203393_203459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (20))){
var state_203391__$1 = state_203391;
var statearr_203394_203460 = state_203391__$1;
(statearr_203394_203460[(2)] = null);

(statearr_203394_203460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (1))){
var state_203391__$1 = state_203391;
var statearr_203395_203461 = state_203391__$1;
(statearr_203395_203461[(2)] = null);

(statearr_203395_203461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (4))){
var inst_203356 = (state_203391[(7)]);
var inst_203356__$1 = (state_203391[(2)]);
var inst_203357 = (inst_203356__$1 == null);
var state_203391__$1 = (function (){var statearr_203396 = state_203391;
(statearr_203396[(7)] = inst_203356__$1);

return statearr_203396;
})();
if(cljs.core.truth_(inst_203357)){
var statearr_203397_203462 = state_203391__$1;
(statearr_203397_203462[(1)] = (5));

} else {
var statearr_203398_203463 = state_203391__$1;
(statearr_203398_203463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (15))){
var inst_203369 = (state_203391[(8)]);
var state_203391__$1 = state_203391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203391__$1,(18),to,inst_203369);
} else {
if((state_val_203392 === (21))){
var inst_203382 = (state_203391[(2)]);
var state_203391__$1 = state_203391;
var statearr_203399_203464 = state_203391__$1;
(statearr_203399_203464[(2)] = inst_203382);

(statearr_203399_203464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (13))){
var inst_203384 = (state_203391[(2)]);
var state_203391__$1 = (function (){var statearr_203400 = state_203391;
(statearr_203400[(9)] = inst_203384);

return statearr_203400;
})();
var statearr_203401_203465 = state_203391__$1;
(statearr_203401_203465[(2)] = null);

(statearr_203401_203465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (6))){
var inst_203356 = (state_203391[(7)]);
var state_203391__$1 = state_203391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203391__$1,(11),inst_203356);
} else {
if((state_val_203392 === (17))){
var inst_203377 = (state_203391[(2)]);
var state_203391__$1 = state_203391;
if(cljs.core.truth_(inst_203377)){
var statearr_203402_203466 = state_203391__$1;
(statearr_203402_203466[(1)] = (19));

} else {
var statearr_203403_203467 = state_203391__$1;
(statearr_203403_203467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (3))){
var inst_203389 = (state_203391[(2)]);
var state_203391__$1 = state_203391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203391__$1,inst_203389);
} else {
if((state_val_203392 === (12))){
var inst_203366 = (state_203391[(10)]);
var state_203391__$1 = state_203391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203391__$1,(14),inst_203366);
} else {
if((state_val_203392 === (2))){
var state_203391__$1 = state_203391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203391__$1,(4),results);
} else {
if((state_val_203392 === (19))){
var state_203391__$1 = state_203391;
var statearr_203404_203468 = state_203391__$1;
(statearr_203404_203468[(2)] = null);

(statearr_203404_203468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (11))){
var inst_203366 = (state_203391[(2)]);
var state_203391__$1 = (function (){var statearr_203405 = state_203391;
(statearr_203405[(10)] = inst_203366);

return statearr_203405;
})();
var statearr_203406_203469 = state_203391__$1;
(statearr_203406_203469[(2)] = null);

(statearr_203406_203469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (9))){
var state_203391__$1 = state_203391;
var statearr_203407_203470 = state_203391__$1;
(statearr_203407_203470[(2)] = null);

(statearr_203407_203470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (5))){
var state_203391__$1 = state_203391;
if(cljs.core.truth_(close_QMARK_)){
var statearr_203408_203471 = state_203391__$1;
(statearr_203408_203471[(1)] = (8));

} else {
var statearr_203409_203472 = state_203391__$1;
(statearr_203409_203472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (14))){
var inst_203369 = (state_203391[(8)]);
var inst_203371 = (state_203391[(11)]);
var inst_203369__$1 = (state_203391[(2)]);
var inst_203370 = (inst_203369__$1 == null);
var inst_203371__$1 = cljs.core.not.call(null,inst_203370);
var state_203391__$1 = (function (){var statearr_203410 = state_203391;
(statearr_203410[(8)] = inst_203369__$1);

(statearr_203410[(11)] = inst_203371__$1);

return statearr_203410;
})();
if(inst_203371__$1){
var statearr_203411_203473 = state_203391__$1;
(statearr_203411_203473[(1)] = (15));

} else {
var statearr_203412_203474 = state_203391__$1;
(statearr_203412_203474[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (16))){
var inst_203371 = (state_203391[(11)]);
var state_203391__$1 = state_203391;
var statearr_203413_203475 = state_203391__$1;
(statearr_203413_203475[(2)] = inst_203371);

(statearr_203413_203475[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (10))){
var inst_203363 = (state_203391[(2)]);
var state_203391__$1 = state_203391;
var statearr_203414_203476 = state_203391__$1;
(statearr_203414_203476[(2)] = inst_203363);

(statearr_203414_203476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (18))){
var inst_203374 = (state_203391[(2)]);
var state_203391__$1 = state_203391;
var statearr_203415_203477 = state_203391__$1;
(statearr_203415_203477[(2)] = inst_203374);

(statearr_203415_203477[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203392 === (8))){
var inst_203360 = cljs.core.async.close_BANG_.call(null,to);
var state_203391__$1 = state_203391;
var statearr_203416_203478 = state_203391__$1;
(statearr_203416_203478[(2)] = inst_203360);

(statearr_203416_203478[(1)] = (10));


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
});})(c__36125__auto__,jobs,results,process,async))
;
return ((function (switch__36013__auto__,c__36125__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0 = (function (){
var statearr_203420 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_203420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__);

(statearr_203420[(1)] = (1));

return statearr_203420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1 = (function (state_203391){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_203391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e203421){if((e203421 instanceof Object)){
var ex__36017__auto__ = e203421;
var statearr_203422_203479 = state_203391;
(statearr_203422_203479[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203480 = state_203391;
state_203391 = G__203480;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__ = function(state_203391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1.call(this,state_203391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36014__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto__,jobs,results,process,async))
})();
var state__36127__auto__ = (function (){var statearr_203423 = f__36126__auto__.call(null);
(statearr_203423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto__);

return statearr_203423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto__,jobs,results,process,async))
);

return c__36125__auto__;
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
var args203481 = [];
var len__25279__auto___203484 = arguments.length;
var i__25280__auto___203485 = (0);
while(true){
if((i__25280__auto___203485 < len__25279__auto___203484)){
args203481.push((arguments[i__25280__auto___203485]));

var G__203486 = (i__25280__auto___203485 + (1));
i__25280__auto___203485 = G__203486;
continue;
} else {
}
break;
}

var G__203483 = args203481.length;
switch (G__203483) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args203481.length)].join('')));

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
var args203488 = [];
var len__25279__auto___203491 = arguments.length;
var i__25280__auto___203492 = (0);
while(true){
if((i__25280__auto___203492 < len__25279__auto___203491)){
args203488.push((arguments[i__25280__auto___203492]));

var G__203493 = (i__25280__auto___203492 + (1));
i__25280__auto___203492 = G__203493;
continue;
} else {
}
break;
}

var G__203490 = args203488.length;
switch (G__203490) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args203488.length)].join('')));

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
var args203495 = [];
var len__25279__auto___203548 = arguments.length;
var i__25280__auto___203549 = (0);
while(true){
if((i__25280__auto___203549 < len__25279__auto___203548)){
args203495.push((arguments[i__25280__auto___203549]));

var G__203550 = (i__25280__auto___203549 + (1));
i__25280__auto___203549 = G__203550;
continue;
} else {
}
break;
}

var G__203497 = args203495.length;
switch (G__203497) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args203495.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__36125__auto___203552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___203552,tc,fc){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___203552,tc,fc){
return (function (state_203523){
var state_val_203524 = (state_203523[(1)]);
if((state_val_203524 === (7))){
var inst_203519 = (state_203523[(2)]);
var state_203523__$1 = state_203523;
var statearr_203525_203553 = state_203523__$1;
(statearr_203525_203553[(2)] = inst_203519);

(statearr_203525_203553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203524 === (1))){
var state_203523__$1 = state_203523;
var statearr_203526_203554 = state_203523__$1;
(statearr_203526_203554[(2)] = null);

(statearr_203526_203554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203524 === (4))){
var inst_203500 = (state_203523[(7)]);
var inst_203500__$1 = (state_203523[(2)]);
var inst_203501 = (inst_203500__$1 == null);
var state_203523__$1 = (function (){var statearr_203527 = state_203523;
(statearr_203527[(7)] = inst_203500__$1);

return statearr_203527;
})();
if(cljs.core.truth_(inst_203501)){
var statearr_203528_203555 = state_203523__$1;
(statearr_203528_203555[(1)] = (5));

} else {
var statearr_203529_203556 = state_203523__$1;
(statearr_203529_203556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203524 === (13))){
var state_203523__$1 = state_203523;
var statearr_203530_203557 = state_203523__$1;
(statearr_203530_203557[(2)] = null);

(statearr_203530_203557[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203524 === (6))){
var inst_203500 = (state_203523[(7)]);
var inst_203506 = p.call(null,inst_203500);
var state_203523__$1 = state_203523;
if(cljs.core.truth_(inst_203506)){
var statearr_203531_203558 = state_203523__$1;
(statearr_203531_203558[(1)] = (9));

} else {
var statearr_203532_203559 = state_203523__$1;
(statearr_203532_203559[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203524 === (3))){
var inst_203521 = (state_203523[(2)]);
var state_203523__$1 = state_203523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203523__$1,inst_203521);
} else {
if((state_val_203524 === (12))){
var state_203523__$1 = state_203523;
var statearr_203533_203560 = state_203523__$1;
(statearr_203533_203560[(2)] = null);

(statearr_203533_203560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203524 === (2))){
var state_203523__$1 = state_203523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203523__$1,(4),ch);
} else {
if((state_val_203524 === (11))){
var inst_203500 = (state_203523[(7)]);
var inst_203510 = (state_203523[(2)]);
var state_203523__$1 = state_203523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203523__$1,(8),inst_203510,inst_203500);
} else {
if((state_val_203524 === (9))){
var state_203523__$1 = state_203523;
var statearr_203534_203561 = state_203523__$1;
(statearr_203534_203561[(2)] = tc);

(statearr_203534_203561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203524 === (5))){
var inst_203503 = cljs.core.async.close_BANG_.call(null,tc);
var inst_203504 = cljs.core.async.close_BANG_.call(null,fc);
var state_203523__$1 = (function (){var statearr_203535 = state_203523;
(statearr_203535[(8)] = inst_203503);

return statearr_203535;
})();
var statearr_203536_203562 = state_203523__$1;
(statearr_203536_203562[(2)] = inst_203504);

(statearr_203536_203562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203524 === (14))){
var inst_203517 = (state_203523[(2)]);
var state_203523__$1 = state_203523;
var statearr_203537_203563 = state_203523__$1;
(statearr_203537_203563[(2)] = inst_203517);

(statearr_203537_203563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203524 === (10))){
var state_203523__$1 = state_203523;
var statearr_203538_203564 = state_203523__$1;
(statearr_203538_203564[(2)] = fc);

(statearr_203538_203564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203524 === (8))){
var inst_203512 = (state_203523[(2)]);
var state_203523__$1 = state_203523;
if(cljs.core.truth_(inst_203512)){
var statearr_203539_203565 = state_203523__$1;
(statearr_203539_203565[(1)] = (12));

} else {
var statearr_203540_203566 = state_203523__$1;
(statearr_203540_203566[(1)] = (13));

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
});})(c__36125__auto___203552,tc,fc))
;
return ((function (switch__36013__auto__,c__36125__auto___203552,tc,fc){
return (function() {
var cljs$core$async$state_machine__36014__auto__ = null;
var cljs$core$async$state_machine__36014__auto____0 = (function (){
var statearr_203544 = [null,null,null,null,null,null,null,null,null];
(statearr_203544[(0)] = cljs$core$async$state_machine__36014__auto__);

(statearr_203544[(1)] = (1));

return statearr_203544;
});
var cljs$core$async$state_machine__36014__auto____1 = (function (state_203523){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_203523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e203545){if((e203545 instanceof Object)){
var ex__36017__auto__ = e203545;
var statearr_203546_203567 = state_203523;
(statearr_203546_203567[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203568 = state_203523;
state_203523 = G__203568;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$state_machine__36014__auto__ = function(state_203523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36014__auto____1.call(this,state_203523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36014__auto____0;
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36014__auto____1;
return cljs$core$async$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___203552,tc,fc))
})();
var state__36127__auto__ = (function (){var statearr_203547 = f__36126__auto__.call(null);
(statearr_203547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___203552);

return statearr_203547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___203552,tc,fc))
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
var c__36125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto__){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto__){
return (function (state_203615){
var state_val_203616 = (state_203615[(1)]);
if((state_val_203616 === (1))){
var inst_203601 = init;
var state_203615__$1 = (function (){var statearr_203617 = state_203615;
(statearr_203617[(7)] = inst_203601);

return statearr_203617;
})();
var statearr_203618_203633 = state_203615__$1;
(statearr_203618_203633[(2)] = null);

(statearr_203618_203633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203616 === (2))){
var state_203615__$1 = state_203615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_203615__$1,(4),ch);
} else {
if((state_val_203616 === (3))){
var inst_203613 = (state_203615[(2)]);
var state_203615__$1 = state_203615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203615__$1,inst_203613);
} else {
if((state_val_203616 === (4))){
var inst_203604 = (state_203615[(8)]);
var inst_203604__$1 = (state_203615[(2)]);
var inst_203605 = (inst_203604__$1 == null);
var state_203615__$1 = (function (){var statearr_203619 = state_203615;
(statearr_203619[(8)] = inst_203604__$1);

return statearr_203619;
})();
if(cljs.core.truth_(inst_203605)){
var statearr_203620_203634 = state_203615__$1;
(statearr_203620_203634[(1)] = (5));

} else {
var statearr_203621_203635 = state_203615__$1;
(statearr_203621_203635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203616 === (5))){
var inst_203601 = (state_203615[(7)]);
var state_203615__$1 = state_203615;
var statearr_203622_203636 = state_203615__$1;
(statearr_203622_203636[(2)] = inst_203601);

(statearr_203622_203636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203616 === (6))){
var inst_203604 = (state_203615[(8)]);
var inst_203601 = (state_203615[(7)]);
var inst_203608 = f.call(null,inst_203601,inst_203604);
var inst_203601__$1 = inst_203608;
var state_203615__$1 = (function (){var statearr_203623 = state_203615;
(statearr_203623[(7)] = inst_203601__$1);

return statearr_203623;
})();
var statearr_203624_203637 = state_203615__$1;
(statearr_203624_203637[(2)] = null);

(statearr_203624_203637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203616 === (7))){
var inst_203611 = (state_203615[(2)]);
var state_203615__$1 = state_203615;
var statearr_203625_203638 = state_203615__$1;
(statearr_203625_203638[(2)] = inst_203611);

(statearr_203625_203638[(1)] = (3));


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
});})(c__36125__auto__))
;
return ((function (switch__36013__auto__,c__36125__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__36014__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36014__auto____0 = (function (){
var statearr_203629 = [null,null,null,null,null,null,null,null,null];
(statearr_203629[(0)] = cljs$core$async$reduce_$_state_machine__36014__auto__);

(statearr_203629[(1)] = (1));

return statearr_203629;
});
var cljs$core$async$reduce_$_state_machine__36014__auto____1 = (function (state_203615){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_203615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e203630){if((e203630 instanceof Object)){
var ex__36017__auto__ = e203630;
var statearr_203631_203639 = state_203615;
(statearr_203631_203639[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203640 = state_203615;
state_203615 = G__203640;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36014__auto__ = function(state_203615){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36014__auto____1.call(this,state_203615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36014__auto____0;
cljs$core$async$reduce_$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36014__auto____1;
return cljs$core$async$reduce_$_state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto__))
})();
var state__36127__auto__ = (function (){var statearr_203632 = f__36126__auto__.call(null);
(statearr_203632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto__);

return statearr_203632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto__))
);

return c__36125__auto__;
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
var args203641 = [];
var len__25279__auto___203693 = arguments.length;
var i__25280__auto___203694 = (0);
while(true){
if((i__25280__auto___203694 < len__25279__auto___203693)){
args203641.push((arguments[i__25280__auto___203694]));

var G__203695 = (i__25280__auto___203694 + (1));
i__25280__auto___203694 = G__203695;
continue;
} else {
}
break;
}

var G__203643 = args203641.length;
switch (G__203643) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args203641.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto__){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto__){
return (function (state_203668){
var state_val_203669 = (state_203668[(1)]);
if((state_val_203669 === (7))){
var inst_203650 = (state_203668[(2)]);
var state_203668__$1 = state_203668;
var statearr_203670_203697 = state_203668__$1;
(statearr_203670_203697[(2)] = inst_203650);

(statearr_203670_203697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203669 === (1))){
var inst_203644 = cljs.core.seq.call(null,coll);
var inst_203645 = inst_203644;
var state_203668__$1 = (function (){var statearr_203671 = state_203668;
(statearr_203671[(7)] = inst_203645);

return statearr_203671;
})();
var statearr_203672_203698 = state_203668__$1;
(statearr_203672_203698[(2)] = null);

(statearr_203672_203698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203669 === (4))){
var inst_203645 = (state_203668[(7)]);
var inst_203648 = cljs.core.first.call(null,inst_203645);
var state_203668__$1 = state_203668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_203668__$1,(7),ch,inst_203648);
} else {
if((state_val_203669 === (13))){
var inst_203662 = (state_203668[(2)]);
var state_203668__$1 = state_203668;
var statearr_203673_203699 = state_203668__$1;
(statearr_203673_203699[(2)] = inst_203662);

(statearr_203673_203699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203669 === (6))){
var inst_203653 = (state_203668[(2)]);
var state_203668__$1 = state_203668;
if(cljs.core.truth_(inst_203653)){
var statearr_203674_203700 = state_203668__$1;
(statearr_203674_203700[(1)] = (8));

} else {
var statearr_203675_203701 = state_203668__$1;
(statearr_203675_203701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203669 === (3))){
var inst_203666 = (state_203668[(2)]);
var state_203668__$1 = state_203668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_203668__$1,inst_203666);
} else {
if((state_val_203669 === (12))){
var state_203668__$1 = state_203668;
var statearr_203676_203702 = state_203668__$1;
(statearr_203676_203702[(2)] = null);

(statearr_203676_203702[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203669 === (2))){
var inst_203645 = (state_203668[(7)]);
var state_203668__$1 = state_203668;
if(cljs.core.truth_(inst_203645)){
var statearr_203677_203703 = state_203668__$1;
(statearr_203677_203703[(1)] = (4));

} else {
var statearr_203678_203704 = state_203668__$1;
(statearr_203678_203704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203669 === (11))){
var inst_203659 = cljs.core.async.close_BANG_.call(null,ch);
var state_203668__$1 = state_203668;
var statearr_203679_203705 = state_203668__$1;
(statearr_203679_203705[(2)] = inst_203659);

(statearr_203679_203705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203669 === (9))){
var state_203668__$1 = state_203668;
if(cljs.core.truth_(close_QMARK_)){
var statearr_203680_203706 = state_203668__$1;
(statearr_203680_203706[(1)] = (11));

} else {
var statearr_203681_203707 = state_203668__$1;
(statearr_203681_203707[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203669 === (5))){
var inst_203645 = (state_203668[(7)]);
var state_203668__$1 = state_203668;
var statearr_203682_203708 = state_203668__$1;
(statearr_203682_203708[(2)] = inst_203645);

(statearr_203682_203708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203669 === (10))){
var inst_203664 = (state_203668[(2)]);
var state_203668__$1 = state_203668;
var statearr_203683_203709 = state_203668__$1;
(statearr_203683_203709[(2)] = inst_203664);

(statearr_203683_203709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_203669 === (8))){
var inst_203645 = (state_203668[(7)]);
var inst_203655 = cljs.core.next.call(null,inst_203645);
var inst_203645__$1 = inst_203655;
var state_203668__$1 = (function (){var statearr_203684 = state_203668;
(statearr_203684[(7)] = inst_203645__$1);

return statearr_203684;
})();
var statearr_203685_203710 = state_203668__$1;
(statearr_203685_203710[(2)] = null);

(statearr_203685_203710[(1)] = (2));


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
});})(c__36125__auto__))
;
return ((function (switch__36013__auto__,c__36125__auto__){
return (function() {
var cljs$core$async$state_machine__36014__auto__ = null;
var cljs$core$async$state_machine__36014__auto____0 = (function (){
var statearr_203689 = [null,null,null,null,null,null,null,null];
(statearr_203689[(0)] = cljs$core$async$state_machine__36014__auto__);

(statearr_203689[(1)] = (1));

return statearr_203689;
});
var cljs$core$async$state_machine__36014__auto____1 = (function (state_203668){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_203668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e203690){if((e203690 instanceof Object)){
var ex__36017__auto__ = e203690;
var statearr_203691_203711 = state_203668;
(statearr_203691_203711[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_203668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e203690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__203712 = state_203668;
state_203668 = G__203712;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$state_machine__36014__auto__ = function(state_203668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36014__auto____1.call(this,state_203668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36014__auto____0;
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36014__auto____1;
return cljs$core$async$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto__))
})();
var state__36127__auto__ = (function (){var statearr_203692 = f__36126__auto__.call(null);
(statearr_203692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto__);

return statearr_203692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto__))
);

return c__36125__auto__;
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
var x__24876__auto__ = (((_ == null))?null:_);
var m__24877__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,_);
} else {
var m__24877__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,_);
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
var x__24876__auto__ = (((m == null))?null:m);
var m__24877__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__24877__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__24876__auto__ = (((m == null))?null:m);
var m__24877__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,m,ch);
} else {
var m__24877__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,m,ch);
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
var x__24876__auto__ = (((m == null))?null:m);
var m__24877__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,m);
} else {
var m__24877__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async203934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async203934 = (function (mult,ch,cs,meta203935){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta203935 = meta203935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async203934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_203936,meta203935__$1){
var self__ = this;
var _203936__$1 = this;
return (new cljs.core.async.t_cljs$core$async203934(self__.mult,self__.ch,self__.cs,meta203935__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async203934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_203936){
var self__ = this;
var _203936__$1 = this;
return self__.meta203935;
});})(cs))
;

cljs.core.async.t_cljs$core$async203934.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async203934.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async203934.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async203934.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async203934.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async203934.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async203934.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta203935","meta203935",-1223532737,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async203934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async203934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async203934";

cljs.core.async.t_cljs$core$async203934.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cljs.core.async/t_cljs$core$async203934");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async203934 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async203934(mult__$1,ch__$1,cs__$1,meta203935){
return (new cljs.core.async.t_cljs$core$async203934(mult__$1,ch__$1,cs__$1,meta203935));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async203934(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36125__auto___204155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___204155,cs,m,dchan,dctr,done){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___204155,cs,m,dchan,dctr,done){
return (function (state_204067){
var state_val_204068 = (state_204067[(1)]);
if((state_val_204068 === (7))){
var inst_204063 = (state_204067[(2)]);
var state_204067__$1 = state_204067;
var statearr_204069_204156 = state_204067__$1;
(statearr_204069_204156[(2)] = inst_204063);

(statearr_204069_204156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (20))){
var inst_203968 = (state_204067[(7)]);
var inst_203978 = cljs.core.first.call(null,inst_203968);
var inst_203979 = cljs.core.nth.call(null,inst_203978,(0),null);
var inst_203980 = cljs.core.nth.call(null,inst_203978,(1),null);
var state_204067__$1 = (function (){var statearr_204070 = state_204067;
(statearr_204070[(8)] = inst_203979);

return statearr_204070;
})();
if(cljs.core.truth_(inst_203980)){
var statearr_204071_204157 = state_204067__$1;
(statearr_204071_204157[(1)] = (22));

} else {
var statearr_204072_204158 = state_204067__$1;
(statearr_204072_204158[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (27))){
var inst_203939 = (state_204067[(9)]);
var inst_204015 = (state_204067[(10)]);
var inst_204008 = (state_204067[(11)]);
var inst_204010 = (state_204067[(12)]);
var inst_204015__$1 = cljs.core._nth.call(null,inst_204008,inst_204010);
var inst_204016 = cljs.core.async.put_BANG_.call(null,inst_204015__$1,inst_203939,done);
var state_204067__$1 = (function (){var statearr_204073 = state_204067;
(statearr_204073[(10)] = inst_204015__$1);

return statearr_204073;
})();
if(cljs.core.truth_(inst_204016)){
var statearr_204074_204159 = state_204067__$1;
(statearr_204074_204159[(1)] = (30));

} else {
var statearr_204075_204160 = state_204067__$1;
(statearr_204075_204160[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (1))){
var state_204067__$1 = state_204067;
var statearr_204076_204161 = state_204067__$1;
(statearr_204076_204161[(2)] = null);

(statearr_204076_204161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (24))){
var inst_203968 = (state_204067[(7)]);
var inst_203985 = (state_204067[(2)]);
var inst_203986 = cljs.core.next.call(null,inst_203968);
var inst_203948 = inst_203986;
var inst_203949 = null;
var inst_203950 = (0);
var inst_203951 = (0);
var state_204067__$1 = (function (){var statearr_204077 = state_204067;
(statearr_204077[(13)] = inst_203948);

(statearr_204077[(14)] = inst_203949);

(statearr_204077[(15)] = inst_203950);

(statearr_204077[(16)] = inst_203951);

(statearr_204077[(17)] = inst_203985);

return statearr_204077;
})();
var statearr_204078_204162 = state_204067__$1;
(statearr_204078_204162[(2)] = null);

(statearr_204078_204162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (39))){
var state_204067__$1 = state_204067;
var statearr_204082_204163 = state_204067__$1;
(statearr_204082_204163[(2)] = null);

(statearr_204082_204163[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (4))){
var inst_203939 = (state_204067[(9)]);
var inst_203939__$1 = (state_204067[(2)]);
var inst_203940 = (inst_203939__$1 == null);
var state_204067__$1 = (function (){var statearr_204083 = state_204067;
(statearr_204083[(9)] = inst_203939__$1);

return statearr_204083;
})();
if(cljs.core.truth_(inst_203940)){
var statearr_204084_204164 = state_204067__$1;
(statearr_204084_204164[(1)] = (5));

} else {
var statearr_204085_204165 = state_204067__$1;
(statearr_204085_204165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (15))){
var inst_203948 = (state_204067[(13)]);
var inst_203949 = (state_204067[(14)]);
var inst_203950 = (state_204067[(15)]);
var inst_203951 = (state_204067[(16)]);
var inst_203964 = (state_204067[(2)]);
var inst_203965 = (inst_203951 + (1));
var tmp204079 = inst_203948;
var tmp204080 = inst_203949;
var tmp204081 = inst_203950;
var inst_203948__$1 = tmp204079;
var inst_203949__$1 = tmp204080;
var inst_203950__$1 = tmp204081;
var inst_203951__$1 = inst_203965;
var state_204067__$1 = (function (){var statearr_204086 = state_204067;
(statearr_204086[(13)] = inst_203948__$1);

(statearr_204086[(14)] = inst_203949__$1);

(statearr_204086[(15)] = inst_203950__$1);

(statearr_204086[(16)] = inst_203951__$1);

(statearr_204086[(18)] = inst_203964);

return statearr_204086;
})();
var statearr_204087_204166 = state_204067__$1;
(statearr_204087_204166[(2)] = null);

(statearr_204087_204166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (21))){
var inst_203989 = (state_204067[(2)]);
var state_204067__$1 = state_204067;
var statearr_204091_204167 = state_204067__$1;
(statearr_204091_204167[(2)] = inst_203989);

(statearr_204091_204167[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (31))){
var inst_204015 = (state_204067[(10)]);
var inst_204019 = done.call(null,null);
var inst_204020 = cljs.core.async.untap_STAR_.call(null,m,inst_204015);
var state_204067__$1 = (function (){var statearr_204092 = state_204067;
(statearr_204092[(19)] = inst_204019);

return statearr_204092;
})();
var statearr_204093_204168 = state_204067__$1;
(statearr_204093_204168[(2)] = inst_204020);

(statearr_204093_204168[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (32))){
var inst_204007 = (state_204067[(20)]);
var inst_204008 = (state_204067[(11)]);
var inst_204010 = (state_204067[(12)]);
var inst_204009 = (state_204067[(21)]);
var inst_204022 = (state_204067[(2)]);
var inst_204023 = (inst_204010 + (1));
var tmp204088 = inst_204007;
var tmp204089 = inst_204008;
var tmp204090 = inst_204009;
var inst_204007__$1 = tmp204088;
var inst_204008__$1 = tmp204089;
var inst_204009__$1 = tmp204090;
var inst_204010__$1 = inst_204023;
var state_204067__$1 = (function (){var statearr_204094 = state_204067;
(statearr_204094[(20)] = inst_204007__$1);

(statearr_204094[(11)] = inst_204008__$1);

(statearr_204094[(12)] = inst_204010__$1);

(statearr_204094[(22)] = inst_204022);

(statearr_204094[(21)] = inst_204009__$1);

return statearr_204094;
})();
var statearr_204095_204169 = state_204067__$1;
(statearr_204095_204169[(2)] = null);

(statearr_204095_204169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (40))){
var inst_204035 = (state_204067[(23)]);
var inst_204039 = done.call(null,null);
var inst_204040 = cljs.core.async.untap_STAR_.call(null,m,inst_204035);
var state_204067__$1 = (function (){var statearr_204096 = state_204067;
(statearr_204096[(24)] = inst_204039);

return statearr_204096;
})();
var statearr_204097_204170 = state_204067__$1;
(statearr_204097_204170[(2)] = inst_204040);

(statearr_204097_204170[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (33))){
var inst_204026 = (state_204067[(25)]);
var inst_204028 = cljs.core.chunked_seq_QMARK_.call(null,inst_204026);
var state_204067__$1 = state_204067;
if(inst_204028){
var statearr_204098_204171 = state_204067__$1;
(statearr_204098_204171[(1)] = (36));

} else {
var statearr_204099_204172 = state_204067__$1;
(statearr_204099_204172[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (13))){
var inst_203958 = (state_204067[(26)]);
var inst_203961 = cljs.core.async.close_BANG_.call(null,inst_203958);
var state_204067__$1 = state_204067;
var statearr_204100_204173 = state_204067__$1;
(statearr_204100_204173[(2)] = inst_203961);

(statearr_204100_204173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (22))){
var inst_203979 = (state_204067[(8)]);
var inst_203982 = cljs.core.async.close_BANG_.call(null,inst_203979);
var state_204067__$1 = state_204067;
var statearr_204101_204174 = state_204067__$1;
(statearr_204101_204174[(2)] = inst_203982);

(statearr_204101_204174[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (36))){
var inst_204026 = (state_204067[(25)]);
var inst_204030 = cljs.core.chunk_first.call(null,inst_204026);
var inst_204031 = cljs.core.chunk_rest.call(null,inst_204026);
var inst_204032 = cljs.core.count.call(null,inst_204030);
var inst_204007 = inst_204031;
var inst_204008 = inst_204030;
var inst_204009 = inst_204032;
var inst_204010 = (0);
var state_204067__$1 = (function (){var statearr_204102 = state_204067;
(statearr_204102[(20)] = inst_204007);

(statearr_204102[(11)] = inst_204008);

(statearr_204102[(12)] = inst_204010);

(statearr_204102[(21)] = inst_204009);

return statearr_204102;
})();
var statearr_204103_204175 = state_204067__$1;
(statearr_204103_204175[(2)] = null);

(statearr_204103_204175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (41))){
var inst_204026 = (state_204067[(25)]);
var inst_204042 = (state_204067[(2)]);
var inst_204043 = cljs.core.next.call(null,inst_204026);
var inst_204007 = inst_204043;
var inst_204008 = null;
var inst_204009 = (0);
var inst_204010 = (0);
var state_204067__$1 = (function (){var statearr_204104 = state_204067;
(statearr_204104[(20)] = inst_204007);

(statearr_204104[(11)] = inst_204008);

(statearr_204104[(12)] = inst_204010);

(statearr_204104[(27)] = inst_204042);

(statearr_204104[(21)] = inst_204009);

return statearr_204104;
})();
var statearr_204105_204176 = state_204067__$1;
(statearr_204105_204176[(2)] = null);

(statearr_204105_204176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (43))){
var state_204067__$1 = state_204067;
var statearr_204106_204177 = state_204067__$1;
(statearr_204106_204177[(2)] = null);

(statearr_204106_204177[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (29))){
var inst_204051 = (state_204067[(2)]);
var state_204067__$1 = state_204067;
var statearr_204107_204178 = state_204067__$1;
(statearr_204107_204178[(2)] = inst_204051);

(statearr_204107_204178[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (44))){
var inst_204060 = (state_204067[(2)]);
var state_204067__$1 = (function (){var statearr_204108 = state_204067;
(statearr_204108[(28)] = inst_204060);

return statearr_204108;
})();
var statearr_204109_204179 = state_204067__$1;
(statearr_204109_204179[(2)] = null);

(statearr_204109_204179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (6))){
var inst_203999 = (state_204067[(29)]);
var inst_203998 = cljs.core.deref.call(null,cs);
var inst_203999__$1 = cljs.core.keys.call(null,inst_203998);
var inst_204000 = cljs.core.count.call(null,inst_203999__$1);
var inst_204001 = cljs.core.reset_BANG_.call(null,dctr,inst_204000);
var inst_204006 = cljs.core.seq.call(null,inst_203999__$1);
var inst_204007 = inst_204006;
var inst_204008 = null;
var inst_204009 = (0);
var inst_204010 = (0);
var state_204067__$1 = (function (){var statearr_204110 = state_204067;
(statearr_204110[(20)] = inst_204007);

(statearr_204110[(11)] = inst_204008);

(statearr_204110[(12)] = inst_204010);

(statearr_204110[(29)] = inst_203999__$1);

(statearr_204110[(30)] = inst_204001);

(statearr_204110[(21)] = inst_204009);

return statearr_204110;
})();
var statearr_204111_204180 = state_204067__$1;
(statearr_204111_204180[(2)] = null);

(statearr_204111_204180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (28))){
var inst_204007 = (state_204067[(20)]);
var inst_204026 = (state_204067[(25)]);
var inst_204026__$1 = cljs.core.seq.call(null,inst_204007);
var state_204067__$1 = (function (){var statearr_204112 = state_204067;
(statearr_204112[(25)] = inst_204026__$1);

return statearr_204112;
})();
if(inst_204026__$1){
var statearr_204113_204181 = state_204067__$1;
(statearr_204113_204181[(1)] = (33));

} else {
var statearr_204114_204182 = state_204067__$1;
(statearr_204114_204182[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (25))){
var inst_204010 = (state_204067[(12)]);
var inst_204009 = (state_204067[(21)]);
var inst_204012 = (inst_204010 < inst_204009);
var inst_204013 = inst_204012;
var state_204067__$1 = state_204067;
if(cljs.core.truth_(inst_204013)){
var statearr_204115_204183 = state_204067__$1;
(statearr_204115_204183[(1)] = (27));

} else {
var statearr_204116_204184 = state_204067__$1;
(statearr_204116_204184[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (34))){
var state_204067__$1 = state_204067;
var statearr_204117_204185 = state_204067__$1;
(statearr_204117_204185[(2)] = null);

(statearr_204117_204185[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (17))){
var state_204067__$1 = state_204067;
var statearr_204118_204186 = state_204067__$1;
(statearr_204118_204186[(2)] = null);

(statearr_204118_204186[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (3))){
var inst_204065 = (state_204067[(2)]);
var state_204067__$1 = state_204067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204067__$1,inst_204065);
} else {
if((state_val_204068 === (12))){
var inst_203994 = (state_204067[(2)]);
var state_204067__$1 = state_204067;
var statearr_204119_204187 = state_204067__$1;
(statearr_204119_204187[(2)] = inst_203994);

(statearr_204119_204187[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (2))){
var state_204067__$1 = state_204067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204067__$1,(4),ch);
} else {
if((state_val_204068 === (23))){
var state_204067__$1 = state_204067;
var statearr_204120_204188 = state_204067__$1;
(statearr_204120_204188[(2)] = null);

(statearr_204120_204188[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (35))){
var inst_204049 = (state_204067[(2)]);
var state_204067__$1 = state_204067;
var statearr_204121_204189 = state_204067__$1;
(statearr_204121_204189[(2)] = inst_204049);

(statearr_204121_204189[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (19))){
var inst_203968 = (state_204067[(7)]);
var inst_203972 = cljs.core.chunk_first.call(null,inst_203968);
var inst_203973 = cljs.core.chunk_rest.call(null,inst_203968);
var inst_203974 = cljs.core.count.call(null,inst_203972);
var inst_203948 = inst_203973;
var inst_203949 = inst_203972;
var inst_203950 = inst_203974;
var inst_203951 = (0);
var state_204067__$1 = (function (){var statearr_204122 = state_204067;
(statearr_204122[(13)] = inst_203948);

(statearr_204122[(14)] = inst_203949);

(statearr_204122[(15)] = inst_203950);

(statearr_204122[(16)] = inst_203951);

return statearr_204122;
})();
var statearr_204123_204190 = state_204067__$1;
(statearr_204123_204190[(2)] = null);

(statearr_204123_204190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (11))){
var inst_203948 = (state_204067[(13)]);
var inst_203968 = (state_204067[(7)]);
var inst_203968__$1 = cljs.core.seq.call(null,inst_203948);
var state_204067__$1 = (function (){var statearr_204124 = state_204067;
(statearr_204124[(7)] = inst_203968__$1);

return statearr_204124;
})();
if(inst_203968__$1){
var statearr_204125_204191 = state_204067__$1;
(statearr_204125_204191[(1)] = (16));

} else {
var statearr_204126_204192 = state_204067__$1;
(statearr_204126_204192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (9))){
var inst_203996 = (state_204067[(2)]);
var state_204067__$1 = state_204067;
var statearr_204127_204193 = state_204067__$1;
(statearr_204127_204193[(2)] = inst_203996);

(statearr_204127_204193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (5))){
var inst_203946 = cljs.core.deref.call(null,cs);
var inst_203947 = cljs.core.seq.call(null,inst_203946);
var inst_203948 = inst_203947;
var inst_203949 = null;
var inst_203950 = (0);
var inst_203951 = (0);
var state_204067__$1 = (function (){var statearr_204128 = state_204067;
(statearr_204128[(13)] = inst_203948);

(statearr_204128[(14)] = inst_203949);

(statearr_204128[(15)] = inst_203950);

(statearr_204128[(16)] = inst_203951);

return statearr_204128;
})();
var statearr_204129_204194 = state_204067__$1;
(statearr_204129_204194[(2)] = null);

(statearr_204129_204194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (14))){
var state_204067__$1 = state_204067;
var statearr_204130_204195 = state_204067__$1;
(statearr_204130_204195[(2)] = null);

(statearr_204130_204195[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (45))){
var inst_204057 = (state_204067[(2)]);
var state_204067__$1 = state_204067;
var statearr_204131_204196 = state_204067__$1;
(statearr_204131_204196[(2)] = inst_204057);

(statearr_204131_204196[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (26))){
var inst_203999 = (state_204067[(29)]);
var inst_204053 = (state_204067[(2)]);
var inst_204054 = cljs.core.seq.call(null,inst_203999);
var state_204067__$1 = (function (){var statearr_204132 = state_204067;
(statearr_204132[(31)] = inst_204053);

return statearr_204132;
})();
if(inst_204054){
var statearr_204133_204197 = state_204067__$1;
(statearr_204133_204197[(1)] = (42));

} else {
var statearr_204134_204198 = state_204067__$1;
(statearr_204134_204198[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (16))){
var inst_203968 = (state_204067[(7)]);
var inst_203970 = cljs.core.chunked_seq_QMARK_.call(null,inst_203968);
var state_204067__$1 = state_204067;
if(inst_203970){
var statearr_204135_204199 = state_204067__$1;
(statearr_204135_204199[(1)] = (19));

} else {
var statearr_204136_204200 = state_204067__$1;
(statearr_204136_204200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (38))){
var inst_204046 = (state_204067[(2)]);
var state_204067__$1 = state_204067;
var statearr_204137_204201 = state_204067__$1;
(statearr_204137_204201[(2)] = inst_204046);

(statearr_204137_204201[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (30))){
var state_204067__$1 = state_204067;
var statearr_204138_204202 = state_204067__$1;
(statearr_204138_204202[(2)] = null);

(statearr_204138_204202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (10))){
var inst_203949 = (state_204067[(14)]);
var inst_203951 = (state_204067[(16)]);
var inst_203957 = cljs.core._nth.call(null,inst_203949,inst_203951);
var inst_203958 = cljs.core.nth.call(null,inst_203957,(0),null);
var inst_203959 = cljs.core.nth.call(null,inst_203957,(1),null);
var state_204067__$1 = (function (){var statearr_204139 = state_204067;
(statearr_204139[(26)] = inst_203958);

return statearr_204139;
})();
if(cljs.core.truth_(inst_203959)){
var statearr_204140_204203 = state_204067__$1;
(statearr_204140_204203[(1)] = (13));

} else {
var statearr_204141_204204 = state_204067__$1;
(statearr_204141_204204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (18))){
var inst_203992 = (state_204067[(2)]);
var state_204067__$1 = state_204067;
var statearr_204142_204205 = state_204067__$1;
(statearr_204142_204205[(2)] = inst_203992);

(statearr_204142_204205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (42))){
var state_204067__$1 = state_204067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204067__$1,(45),dchan);
} else {
if((state_val_204068 === (37))){
var inst_203939 = (state_204067[(9)]);
var inst_204035 = (state_204067[(23)]);
var inst_204026 = (state_204067[(25)]);
var inst_204035__$1 = cljs.core.first.call(null,inst_204026);
var inst_204036 = cljs.core.async.put_BANG_.call(null,inst_204035__$1,inst_203939,done);
var state_204067__$1 = (function (){var statearr_204143 = state_204067;
(statearr_204143[(23)] = inst_204035__$1);

return statearr_204143;
})();
if(cljs.core.truth_(inst_204036)){
var statearr_204144_204206 = state_204067__$1;
(statearr_204144_204206[(1)] = (39));

} else {
var statearr_204145_204207 = state_204067__$1;
(statearr_204145_204207[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204068 === (8))){
var inst_203950 = (state_204067[(15)]);
var inst_203951 = (state_204067[(16)]);
var inst_203953 = (inst_203951 < inst_203950);
var inst_203954 = inst_203953;
var state_204067__$1 = state_204067;
if(cljs.core.truth_(inst_203954)){
var statearr_204146_204208 = state_204067__$1;
(statearr_204146_204208[(1)] = (10));

} else {
var statearr_204147_204209 = state_204067__$1;
(statearr_204147_204209[(1)] = (11));

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
});})(c__36125__auto___204155,cs,m,dchan,dctr,done))
;
return ((function (switch__36013__auto__,c__36125__auto___204155,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__36014__auto__ = null;
var cljs$core$async$mult_$_state_machine__36014__auto____0 = (function (){
var statearr_204151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_204151[(0)] = cljs$core$async$mult_$_state_machine__36014__auto__);

(statearr_204151[(1)] = (1));

return statearr_204151;
});
var cljs$core$async$mult_$_state_machine__36014__auto____1 = (function (state_204067){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_204067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e204152){if((e204152 instanceof Object)){
var ex__36017__auto__ = e204152;
var statearr_204153_204210 = state_204067;
(statearr_204153_204210[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__204211 = state_204067;
state_204067 = G__204211;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36014__auto__ = function(state_204067){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36014__auto____1.call(this,state_204067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36014__auto____0;
cljs$core$async$mult_$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36014__auto____1;
return cljs$core$async$mult_$_state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___204155,cs,m,dchan,dctr,done))
})();
var state__36127__auto__ = (function (){var statearr_204154 = f__36126__auto__.call(null);
(statearr_204154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___204155);

return statearr_204154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___204155,cs,m,dchan,dctr,done))
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
var args204212 = [];
var len__25279__auto___204215 = arguments.length;
var i__25280__auto___204216 = (0);
while(true){
if((i__25280__auto___204216 < len__25279__auto___204215)){
args204212.push((arguments[i__25280__auto___204216]));

var G__204217 = (i__25280__auto___204216 + (1));
i__25280__auto___204216 = G__204217;
continue;
} else {
}
break;
}

var G__204214 = args204212.length;
switch (G__204214) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args204212.length)].join('')));

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
var x__24876__auto__ = (((m == null))?null:m);
var m__24877__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,m,ch);
} else {
var m__24877__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,m,ch);
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
var x__24876__auto__ = (((m == null))?null:m);
var m__24877__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,m,ch);
} else {
var m__24877__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,m,ch);
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
var x__24876__auto__ = (((m == null))?null:m);
var m__24877__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,m);
} else {
var m__24877__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,m);
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
var x__24876__auto__ = (((m == null))?null:m);
var m__24877__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,m,state_map);
} else {
var m__24877__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,m,state_map);
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
var x__24876__auto__ = (((m == null))?null:m);
var m__24877__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,m,mode);
} else {
var m__24877__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25286__auto__ = [];
var len__25279__auto___204229 = arguments.length;
var i__25280__auto___204230 = (0);
while(true){
if((i__25280__auto___204230 < len__25279__auto___204229)){
args__25286__auto__.push((arguments[i__25280__auto___204230]));

var G__204231 = (i__25280__auto___204230 + (1));
i__25280__auto___204230 = G__204231;
continue;
} else {
}
break;
}

var argseq__25287__auto__ = ((((3) < args__25286__auto__.length))?(new cljs.core.IndexedSeq(args__25286__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25287__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__204223){
var map__204224 = p__204223;
var map__204224__$1 = ((((!((map__204224 == null)))?((((map__204224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__204224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__204224):map__204224);
var opts = map__204224__$1;
var statearr_204226_204232 = state;
(statearr_204226_204232[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__204224,map__204224__$1,opts){
return (function (val){
var statearr_204227_204233 = state;
(statearr_204227_204233[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__204224,map__204224__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_204228_204234 = state;
(statearr_204228_204234[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq204219){
var G__204220 = cljs.core.first.call(null,seq204219);
var seq204219__$1 = cljs.core.next.call(null,seq204219);
var G__204221 = cljs.core.first.call(null,seq204219__$1);
var seq204219__$2 = cljs.core.next.call(null,seq204219__$1);
var G__204222 = cljs.core.first.call(null,seq204219__$2);
var seq204219__$3 = cljs.core.next.call(null,seq204219__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__204220,G__204221,G__204222,seq204219__$3);
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
if(typeof cljs.core.async.t_cljs$core$async204398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async204398 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta204399){
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
this.meta204399 = meta204399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async204398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_204400,meta204399__$1){
var self__ = this;
var _204400__$1 = this;
return (new cljs.core.async.t_cljs$core$async204398(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta204399__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async204398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_204400){
var self__ = this;
var _204400__$1 = this;
return self__.meta204399;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async204398.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async204398.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async204398.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async204398.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async204398.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async204398.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async204398.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async204398.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async204398.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta204399","meta204399",-769402903,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async204398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async204398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async204398";

cljs.core.async.t_cljs$core$async204398.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cljs.core.async/t_cljs$core$async204398");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async204398 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async204398(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta204399){
return (new cljs.core.async.t_cljs$core$async204398(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta204399));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async204398(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36125__auto___204561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___204561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___204561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_204498){
var state_val_204499 = (state_204498[(1)]);
if((state_val_204499 === (7))){
var inst_204416 = (state_204498[(2)]);
var state_204498__$1 = state_204498;
var statearr_204500_204562 = state_204498__$1;
(statearr_204500_204562[(2)] = inst_204416);

(statearr_204500_204562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (20))){
var inst_204428 = (state_204498[(7)]);
var state_204498__$1 = state_204498;
var statearr_204501_204563 = state_204498__$1;
(statearr_204501_204563[(2)] = inst_204428);

(statearr_204501_204563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (27))){
var state_204498__$1 = state_204498;
var statearr_204502_204564 = state_204498__$1;
(statearr_204502_204564[(2)] = null);

(statearr_204502_204564[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (1))){
var inst_204404 = (state_204498[(8)]);
var inst_204404__$1 = calc_state.call(null);
var inst_204406 = (inst_204404__$1 == null);
var inst_204407 = cljs.core.not.call(null,inst_204406);
var state_204498__$1 = (function (){var statearr_204503 = state_204498;
(statearr_204503[(8)] = inst_204404__$1);

return statearr_204503;
})();
if(inst_204407){
var statearr_204504_204565 = state_204498__$1;
(statearr_204504_204565[(1)] = (2));

} else {
var statearr_204505_204566 = state_204498__$1;
(statearr_204505_204566[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (24))){
var inst_204458 = (state_204498[(9)]);
var inst_204472 = (state_204498[(10)]);
var inst_204451 = (state_204498[(11)]);
var inst_204472__$1 = inst_204451.call(null,inst_204458);
var state_204498__$1 = (function (){var statearr_204506 = state_204498;
(statearr_204506[(10)] = inst_204472__$1);

return statearr_204506;
})();
if(cljs.core.truth_(inst_204472__$1)){
var statearr_204507_204567 = state_204498__$1;
(statearr_204507_204567[(1)] = (29));

} else {
var statearr_204508_204568 = state_204498__$1;
(statearr_204508_204568[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (4))){
var inst_204419 = (state_204498[(2)]);
var state_204498__$1 = state_204498;
if(cljs.core.truth_(inst_204419)){
var statearr_204509_204569 = state_204498__$1;
(statearr_204509_204569[(1)] = (8));

} else {
var statearr_204510_204570 = state_204498__$1;
(statearr_204510_204570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (15))){
var inst_204445 = (state_204498[(2)]);
var state_204498__$1 = state_204498;
if(cljs.core.truth_(inst_204445)){
var statearr_204511_204571 = state_204498__$1;
(statearr_204511_204571[(1)] = (19));

} else {
var statearr_204512_204572 = state_204498__$1;
(statearr_204512_204572[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (21))){
var inst_204450 = (state_204498[(12)]);
var inst_204450__$1 = (state_204498[(2)]);
var inst_204451 = cljs.core.get.call(null,inst_204450__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_204452 = cljs.core.get.call(null,inst_204450__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_204453 = cljs.core.get.call(null,inst_204450__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_204498__$1 = (function (){var statearr_204513 = state_204498;
(statearr_204513[(12)] = inst_204450__$1);

(statearr_204513[(13)] = inst_204452);

(statearr_204513[(11)] = inst_204451);

return statearr_204513;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_204498__$1,(22),inst_204453);
} else {
if((state_val_204499 === (31))){
var inst_204480 = (state_204498[(2)]);
var state_204498__$1 = state_204498;
if(cljs.core.truth_(inst_204480)){
var statearr_204514_204573 = state_204498__$1;
(statearr_204514_204573[(1)] = (32));

} else {
var statearr_204515_204574 = state_204498__$1;
(statearr_204515_204574[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (32))){
var inst_204457 = (state_204498[(14)]);
var state_204498__$1 = state_204498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204498__$1,(35),out,inst_204457);
} else {
if((state_val_204499 === (33))){
var inst_204450 = (state_204498[(12)]);
var inst_204428 = inst_204450;
var state_204498__$1 = (function (){var statearr_204516 = state_204498;
(statearr_204516[(7)] = inst_204428);

return statearr_204516;
})();
var statearr_204517_204575 = state_204498__$1;
(statearr_204517_204575[(2)] = null);

(statearr_204517_204575[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (13))){
var inst_204428 = (state_204498[(7)]);
var inst_204435 = inst_204428.cljs$lang$protocol_mask$partition0$;
var inst_204436 = (inst_204435 & (64));
var inst_204437 = inst_204428.cljs$core$ISeq$;
var inst_204438 = (inst_204436) || (inst_204437);
var state_204498__$1 = state_204498;
if(cljs.core.truth_(inst_204438)){
var statearr_204518_204576 = state_204498__$1;
(statearr_204518_204576[(1)] = (16));

} else {
var statearr_204519_204577 = state_204498__$1;
(statearr_204519_204577[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (22))){
var inst_204457 = (state_204498[(14)]);
var inst_204458 = (state_204498[(9)]);
var inst_204456 = (state_204498[(2)]);
var inst_204457__$1 = cljs.core.nth.call(null,inst_204456,(0),null);
var inst_204458__$1 = cljs.core.nth.call(null,inst_204456,(1),null);
var inst_204459 = (inst_204457__$1 == null);
var inst_204460 = cljs.core._EQ_.call(null,inst_204458__$1,change);
var inst_204461 = (inst_204459) || (inst_204460);
var state_204498__$1 = (function (){var statearr_204520 = state_204498;
(statearr_204520[(14)] = inst_204457__$1);

(statearr_204520[(9)] = inst_204458__$1);

return statearr_204520;
})();
if(cljs.core.truth_(inst_204461)){
var statearr_204521_204578 = state_204498__$1;
(statearr_204521_204578[(1)] = (23));

} else {
var statearr_204522_204579 = state_204498__$1;
(statearr_204522_204579[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (36))){
var inst_204450 = (state_204498[(12)]);
var inst_204428 = inst_204450;
var state_204498__$1 = (function (){var statearr_204523 = state_204498;
(statearr_204523[(7)] = inst_204428);

return statearr_204523;
})();
var statearr_204524_204580 = state_204498__$1;
(statearr_204524_204580[(2)] = null);

(statearr_204524_204580[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (29))){
var inst_204472 = (state_204498[(10)]);
var state_204498__$1 = state_204498;
var statearr_204525_204581 = state_204498__$1;
(statearr_204525_204581[(2)] = inst_204472);

(statearr_204525_204581[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (6))){
var state_204498__$1 = state_204498;
var statearr_204526_204582 = state_204498__$1;
(statearr_204526_204582[(2)] = false);

(statearr_204526_204582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (28))){
var inst_204468 = (state_204498[(2)]);
var inst_204469 = calc_state.call(null);
var inst_204428 = inst_204469;
var state_204498__$1 = (function (){var statearr_204527 = state_204498;
(statearr_204527[(7)] = inst_204428);

(statearr_204527[(15)] = inst_204468);

return statearr_204527;
})();
var statearr_204528_204583 = state_204498__$1;
(statearr_204528_204583[(2)] = null);

(statearr_204528_204583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (25))){
var inst_204494 = (state_204498[(2)]);
var state_204498__$1 = state_204498;
var statearr_204529_204584 = state_204498__$1;
(statearr_204529_204584[(2)] = inst_204494);

(statearr_204529_204584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (34))){
var inst_204492 = (state_204498[(2)]);
var state_204498__$1 = state_204498;
var statearr_204530_204585 = state_204498__$1;
(statearr_204530_204585[(2)] = inst_204492);

(statearr_204530_204585[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (17))){
var state_204498__$1 = state_204498;
var statearr_204531_204586 = state_204498__$1;
(statearr_204531_204586[(2)] = false);

(statearr_204531_204586[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (3))){
var state_204498__$1 = state_204498;
var statearr_204532_204587 = state_204498__$1;
(statearr_204532_204587[(2)] = false);

(statearr_204532_204587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (12))){
var inst_204496 = (state_204498[(2)]);
var state_204498__$1 = state_204498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204498__$1,inst_204496);
} else {
if((state_val_204499 === (2))){
var inst_204404 = (state_204498[(8)]);
var inst_204409 = inst_204404.cljs$lang$protocol_mask$partition0$;
var inst_204410 = (inst_204409 & (64));
var inst_204411 = inst_204404.cljs$core$ISeq$;
var inst_204412 = (inst_204410) || (inst_204411);
var state_204498__$1 = state_204498;
if(cljs.core.truth_(inst_204412)){
var statearr_204533_204588 = state_204498__$1;
(statearr_204533_204588[(1)] = (5));

} else {
var statearr_204534_204589 = state_204498__$1;
(statearr_204534_204589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (23))){
var inst_204457 = (state_204498[(14)]);
var inst_204463 = (inst_204457 == null);
var state_204498__$1 = state_204498;
if(cljs.core.truth_(inst_204463)){
var statearr_204535_204590 = state_204498__$1;
(statearr_204535_204590[(1)] = (26));

} else {
var statearr_204536_204591 = state_204498__$1;
(statearr_204536_204591[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (35))){
var inst_204483 = (state_204498[(2)]);
var state_204498__$1 = state_204498;
if(cljs.core.truth_(inst_204483)){
var statearr_204537_204592 = state_204498__$1;
(statearr_204537_204592[(1)] = (36));

} else {
var statearr_204538_204593 = state_204498__$1;
(statearr_204538_204593[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (19))){
var inst_204428 = (state_204498[(7)]);
var inst_204447 = cljs.core.apply.call(null,cljs.core.hash_map,inst_204428);
var state_204498__$1 = state_204498;
var statearr_204539_204594 = state_204498__$1;
(statearr_204539_204594[(2)] = inst_204447);

(statearr_204539_204594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (11))){
var inst_204428 = (state_204498[(7)]);
var inst_204432 = (inst_204428 == null);
var inst_204433 = cljs.core.not.call(null,inst_204432);
var state_204498__$1 = state_204498;
if(inst_204433){
var statearr_204540_204595 = state_204498__$1;
(statearr_204540_204595[(1)] = (13));

} else {
var statearr_204541_204596 = state_204498__$1;
(statearr_204541_204596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (9))){
var inst_204404 = (state_204498[(8)]);
var state_204498__$1 = state_204498;
var statearr_204542_204597 = state_204498__$1;
(statearr_204542_204597[(2)] = inst_204404);

(statearr_204542_204597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (5))){
var state_204498__$1 = state_204498;
var statearr_204543_204598 = state_204498__$1;
(statearr_204543_204598[(2)] = true);

(statearr_204543_204598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (14))){
var state_204498__$1 = state_204498;
var statearr_204544_204599 = state_204498__$1;
(statearr_204544_204599[(2)] = false);

(statearr_204544_204599[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (26))){
var inst_204458 = (state_204498[(9)]);
var inst_204465 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_204458);
var state_204498__$1 = state_204498;
var statearr_204545_204600 = state_204498__$1;
(statearr_204545_204600[(2)] = inst_204465);

(statearr_204545_204600[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (16))){
var state_204498__$1 = state_204498;
var statearr_204546_204601 = state_204498__$1;
(statearr_204546_204601[(2)] = true);

(statearr_204546_204601[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (38))){
var inst_204488 = (state_204498[(2)]);
var state_204498__$1 = state_204498;
var statearr_204547_204602 = state_204498__$1;
(statearr_204547_204602[(2)] = inst_204488);

(statearr_204547_204602[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (30))){
var inst_204452 = (state_204498[(13)]);
var inst_204458 = (state_204498[(9)]);
var inst_204451 = (state_204498[(11)]);
var inst_204475 = cljs.core.empty_QMARK_.call(null,inst_204451);
var inst_204476 = inst_204452.call(null,inst_204458);
var inst_204477 = cljs.core.not.call(null,inst_204476);
var inst_204478 = (inst_204475) && (inst_204477);
var state_204498__$1 = state_204498;
var statearr_204548_204603 = state_204498__$1;
(statearr_204548_204603[(2)] = inst_204478);

(statearr_204548_204603[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (10))){
var inst_204404 = (state_204498[(8)]);
var inst_204424 = (state_204498[(2)]);
var inst_204425 = cljs.core.get.call(null,inst_204424,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_204426 = cljs.core.get.call(null,inst_204424,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_204427 = cljs.core.get.call(null,inst_204424,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_204428 = inst_204404;
var state_204498__$1 = (function (){var statearr_204549 = state_204498;
(statearr_204549[(16)] = inst_204425);

(statearr_204549[(17)] = inst_204426);

(statearr_204549[(18)] = inst_204427);

(statearr_204549[(7)] = inst_204428);

return statearr_204549;
})();
var statearr_204550_204604 = state_204498__$1;
(statearr_204550_204604[(2)] = null);

(statearr_204550_204604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (18))){
var inst_204442 = (state_204498[(2)]);
var state_204498__$1 = state_204498;
var statearr_204551_204605 = state_204498__$1;
(statearr_204551_204605[(2)] = inst_204442);

(statearr_204551_204605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (37))){
var state_204498__$1 = state_204498;
var statearr_204552_204606 = state_204498__$1;
(statearr_204552_204606[(2)] = null);

(statearr_204552_204606[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204499 === (8))){
var inst_204404 = (state_204498[(8)]);
var inst_204421 = cljs.core.apply.call(null,cljs.core.hash_map,inst_204404);
var state_204498__$1 = state_204498;
var statearr_204553_204607 = state_204498__$1;
(statearr_204553_204607[(2)] = inst_204421);

(statearr_204553_204607[(1)] = (10));


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
});})(c__36125__auto___204561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__36013__auto__,c__36125__auto___204561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__36014__auto__ = null;
var cljs$core$async$mix_$_state_machine__36014__auto____0 = (function (){
var statearr_204557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_204557[(0)] = cljs$core$async$mix_$_state_machine__36014__auto__);

(statearr_204557[(1)] = (1));

return statearr_204557;
});
var cljs$core$async$mix_$_state_machine__36014__auto____1 = (function (state_204498){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_204498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e204558){if((e204558 instanceof Object)){
var ex__36017__auto__ = e204558;
var statearr_204559_204608 = state_204498;
(statearr_204559_204608[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__204609 = state_204498;
state_204498 = G__204609;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36014__auto__ = function(state_204498){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36014__auto____1.call(this,state_204498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36014__auto____0;
cljs$core$async$mix_$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36014__auto____1;
return cljs$core$async$mix_$_state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___204561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36127__auto__ = (function (){var statearr_204560 = f__36126__auto__.call(null);
(statearr_204560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___204561);

return statearr_204560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___204561,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__24876__auto__ = (((p == null))?null:p);
var m__24877__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__24877__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__24876__auto__ = (((p == null))?null:p);
var m__24877__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,p,v,ch);
} else {
var m__24877__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args204610 = [];
var len__25279__auto___204613 = arguments.length;
var i__25280__auto___204614 = (0);
while(true){
if((i__25280__auto___204614 < len__25279__auto___204613)){
args204610.push((arguments[i__25280__auto___204614]));

var G__204615 = (i__25280__auto___204614 + (1));
i__25280__auto___204614 = G__204615;
continue;
} else {
}
break;
}

var G__204612 = args204610.length;
switch (G__204612) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args204610.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24876__auto__ = (((p == null))?null:p);
var m__24877__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,p);
} else {
var m__24877__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,p);
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
var x__24876__auto__ = (((p == null))?null:p);
var m__24877__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24876__auto__)]);
if(!((m__24877__auto__ == null))){
return m__24877__auto__.call(null,p,v);
} else {
var m__24877__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24877__auto____$1 == null))){
return m__24877__auto____$1.call(null,p,v);
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
var args204618 = [];
var len__25279__auto___204743 = arguments.length;
var i__25280__auto___204744 = (0);
while(true){
if((i__25280__auto___204744 < len__25279__auto___204743)){
args204618.push((arguments[i__25280__auto___204744]));

var G__204745 = (i__25280__auto___204744 + (1));
i__25280__auto___204744 = G__204745;
continue;
} else {
}
break;
}

var G__204620 = args204618.length;
switch (G__204620) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args204618.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24221__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24221__auto__)){
return or__24221__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24221__auto__,mults){
return (function (p1__204617_SHARP_){
if(cljs.core.truth_(p1__204617_SHARP_.call(null,topic))){
return p1__204617_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__204617_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24221__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async204621 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async204621 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta204622){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta204622 = meta204622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async204621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_204623,meta204622__$1){
var self__ = this;
var _204623__$1 = this;
return (new cljs.core.async.t_cljs$core$async204621(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta204622__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async204621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_204623){
var self__ = this;
var _204623__$1 = this;
return self__.meta204622;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async204621.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async204621.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async204621.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async204621.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async204621.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async204621.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async204621.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async204621.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta204622","meta204622",1921542320,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async204621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async204621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async204621";

cljs.core.async.t_cljs$core$async204621.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cljs.core.async/t_cljs$core$async204621");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async204621 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async204621(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta204622){
return (new cljs.core.async.t_cljs$core$async204621(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta204622));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async204621(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36125__auto___204747 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___204747,mults,ensure_mult,p){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___204747,mults,ensure_mult,p){
return (function (state_204695){
var state_val_204696 = (state_204695[(1)]);
if((state_val_204696 === (7))){
var inst_204691 = (state_204695[(2)]);
var state_204695__$1 = state_204695;
var statearr_204697_204748 = state_204695__$1;
(statearr_204697_204748[(2)] = inst_204691);

(statearr_204697_204748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (20))){
var state_204695__$1 = state_204695;
var statearr_204698_204749 = state_204695__$1;
(statearr_204698_204749[(2)] = null);

(statearr_204698_204749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (1))){
var state_204695__$1 = state_204695;
var statearr_204699_204750 = state_204695__$1;
(statearr_204699_204750[(2)] = null);

(statearr_204699_204750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (24))){
var inst_204674 = (state_204695[(7)]);
var inst_204683 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_204674);
var state_204695__$1 = state_204695;
var statearr_204700_204751 = state_204695__$1;
(statearr_204700_204751[(2)] = inst_204683);

(statearr_204700_204751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (4))){
var inst_204626 = (state_204695[(8)]);
var inst_204626__$1 = (state_204695[(2)]);
var inst_204627 = (inst_204626__$1 == null);
var state_204695__$1 = (function (){var statearr_204701 = state_204695;
(statearr_204701[(8)] = inst_204626__$1);

return statearr_204701;
})();
if(cljs.core.truth_(inst_204627)){
var statearr_204702_204752 = state_204695__$1;
(statearr_204702_204752[(1)] = (5));

} else {
var statearr_204703_204753 = state_204695__$1;
(statearr_204703_204753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (15))){
var inst_204668 = (state_204695[(2)]);
var state_204695__$1 = state_204695;
var statearr_204704_204754 = state_204695__$1;
(statearr_204704_204754[(2)] = inst_204668);

(statearr_204704_204754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (21))){
var inst_204688 = (state_204695[(2)]);
var state_204695__$1 = (function (){var statearr_204705 = state_204695;
(statearr_204705[(9)] = inst_204688);

return statearr_204705;
})();
var statearr_204706_204755 = state_204695__$1;
(statearr_204706_204755[(2)] = null);

(statearr_204706_204755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (13))){
var inst_204650 = (state_204695[(10)]);
var inst_204652 = cljs.core.chunked_seq_QMARK_.call(null,inst_204650);
var state_204695__$1 = state_204695;
if(inst_204652){
var statearr_204707_204756 = state_204695__$1;
(statearr_204707_204756[(1)] = (16));

} else {
var statearr_204708_204757 = state_204695__$1;
(statearr_204708_204757[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (22))){
var inst_204680 = (state_204695[(2)]);
var state_204695__$1 = state_204695;
if(cljs.core.truth_(inst_204680)){
var statearr_204709_204758 = state_204695__$1;
(statearr_204709_204758[(1)] = (23));

} else {
var statearr_204710_204759 = state_204695__$1;
(statearr_204710_204759[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (6))){
var inst_204676 = (state_204695[(11)]);
var inst_204626 = (state_204695[(8)]);
var inst_204674 = (state_204695[(7)]);
var inst_204674__$1 = topic_fn.call(null,inst_204626);
var inst_204675 = cljs.core.deref.call(null,mults);
var inst_204676__$1 = cljs.core.get.call(null,inst_204675,inst_204674__$1);
var state_204695__$1 = (function (){var statearr_204711 = state_204695;
(statearr_204711[(11)] = inst_204676__$1);

(statearr_204711[(7)] = inst_204674__$1);

return statearr_204711;
})();
if(cljs.core.truth_(inst_204676__$1)){
var statearr_204712_204760 = state_204695__$1;
(statearr_204712_204760[(1)] = (19));

} else {
var statearr_204713_204761 = state_204695__$1;
(statearr_204713_204761[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (25))){
var inst_204685 = (state_204695[(2)]);
var state_204695__$1 = state_204695;
var statearr_204714_204762 = state_204695__$1;
(statearr_204714_204762[(2)] = inst_204685);

(statearr_204714_204762[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (17))){
var inst_204650 = (state_204695[(10)]);
var inst_204659 = cljs.core.first.call(null,inst_204650);
var inst_204660 = cljs.core.async.muxch_STAR_.call(null,inst_204659);
var inst_204661 = cljs.core.async.close_BANG_.call(null,inst_204660);
var inst_204662 = cljs.core.next.call(null,inst_204650);
var inst_204636 = inst_204662;
var inst_204637 = null;
var inst_204638 = (0);
var inst_204639 = (0);
var state_204695__$1 = (function (){var statearr_204715 = state_204695;
(statearr_204715[(12)] = inst_204637);

(statearr_204715[(13)] = inst_204636);

(statearr_204715[(14)] = inst_204661);

(statearr_204715[(15)] = inst_204639);

(statearr_204715[(16)] = inst_204638);

return statearr_204715;
})();
var statearr_204716_204763 = state_204695__$1;
(statearr_204716_204763[(2)] = null);

(statearr_204716_204763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (3))){
var inst_204693 = (state_204695[(2)]);
var state_204695__$1 = state_204695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204695__$1,inst_204693);
} else {
if((state_val_204696 === (12))){
var inst_204670 = (state_204695[(2)]);
var state_204695__$1 = state_204695;
var statearr_204717_204764 = state_204695__$1;
(statearr_204717_204764[(2)] = inst_204670);

(statearr_204717_204764[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (2))){
var state_204695__$1 = state_204695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204695__$1,(4),ch);
} else {
if((state_val_204696 === (23))){
var state_204695__$1 = state_204695;
var statearr_204718_204765 = state_204695__$1;
(statearr_204718_204765[(2)] = null);

(statearr_204718_204765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (19))){
var inst_204676 = (state_204695[(11)]);
var inst_204626 = (state_204695[(8)]);
var inst_204678 = cljs.core.async.muxch_STAR_.call(null,inst_204676);
var state_204695__$1 = state_204695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204695__$1,(22),inst_204678,inst_204626);
} else {
if((state_val_204696 === (11))){
var inst_204650 = (state_204695[(10)]);
var inst_204636 = (state_204695[(13)]);
var inst_204650__$1 = cljs.core.seq.call(null,inst_204636);
var state_204695__$1 = (function (){var statearr_204719 = state_204695;
(statearr_204719[(10)] = inst_204650__$1);

return statearr_204719;
})();
if(inst_204650__$1){
var statearr_204720_204766 = state_204695__$1;
(statearr_204720_204766[(1)] = (13));

} else {
var statearr_204721_204767 = state_204695__$1;
(statearr_204721_204767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (9))){
var inst_204672 = (state_204695[(2)]);
var state_204695__$1 = state_204695;
var statearr_204722_204768 = state_204695__$1;
(statearr_204722_204768[(2)] = inst_204672);

(statearr_204722_204768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (5))){
var inst_204633 = cljs.core.deref.call(null,mults);
var inst_204634 = cljs.core.vals.call(null,inst_204633);
var inst_204635 = cljs.core.seq.call(null,inst_204634);
var inst_204636 = inst_204635;
var inst_204637 = null;
var inst_204638 = (0);
var inst_204639 = (0);
var state_204695__$1 = (function (){var statearr_204723 = state_204695;
(statearr_204723[(12)] = inst_204637);

(statearr_204723[(13)] = inst_204636);

(statearr_204723[(15)] = inst_204639);

(statearr_204723[(16)] = inst_204638);

return statearr_204723;
})();
var statearr_204724_204769 = state_204695__$1;
(statearr_204724_204769[(2)] = null);

(statearr_204724_204769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (14))){
var state_204695__$1 = state_204695;
var statearr_204728_204770 = state_204695__$1;
(statearr_204728_204770[(2)] = null);

(statearr_204728_204770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (16))){
var inst_204650 = (state_204695[(10)]);
var inst_204654 = cljs.core.chunk_first.call(null,inst_204650);
var inst_204655 = cljs.core.chunk_rest.call(null,inst_204650);
var inst_204656 = cljs.core.count.call(null,inst_204654);
var inst_204636 = inst_204655;
var inst_204637 = inst_204654;
var inst_204638 = inst_204656;
var inst_204639 = (0);
var state_204695__$1 = (function (){var statearr_204729 = state_204695;
(statearr_204729[(12)] = inst_204637);

(statearr_204729[(13)] = inst_204636);

(statearr_204729[(15)] = inst_204639);

(statearr_204729[(16)] = inst_204638);

return statearr_204729;
})();
var statearr_204730_204771 = state_204695__$1;
(statearr_204730_204771[(2)] = null);

(statearr_204730_204771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (10))){
var inst_204637 = (state_204695[(12)]);
var inst_204636 = (state_204695[(13)]);
var inst_204639 = (state_204695[(15)]);
var inst_204638 = (state_204695[(16)]);
var inst_204644 = cljs.core._nth.call(null,inst_204637,inst_204639);
var inst_204645 = cljs.core.async.muxch_STAR_.call(null,inst_204644);
var inst_204646 = cljs.core.async.close_BANG_.call(null,inst_204645);
var inst_204647 = (inst_204639 + (1));
var tmp204725 = inst_204637;
var tmp204726 = inst_204636;
var tmp204727 = inst_204638;
var inst_204636__$1 = tmp204726;
var inst_204637__$1 = tmp204725;
var inst_204638__$1 = tmp204727;
var inst_204639__$1 = inst_204647;
var state_204695__$1 = (function (){var statearr_204731 = state_204695;
(statearr_204731[(12)] = inst_204637__$1);

(statearr_204731[(13)] = inst_204636__$1);

(statearr_204731[(17)] = inst_204646);

(statearr_204731[(15)] = inst_204639__$1);

(statearr_204731[(16)] = inst_204638__$1);

return statearr_204731;
})();
var statearr_204732_204772 = state_204695__$1;
(statearr_204732_204772[(2)] = null);

(statearr_204732_204772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (18))){
var inst_204665 = (state_204695[(2)]);
var state_204695__$1 = state_204695;
var statearr_204733_204773 = state_204695__$1;
(statearr_204733_204773[(2)] = inst_204665);

(statearr_204733_204773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204696 === (8))){
var inst_204639 = (state_204695[(15)]);
var inst_204638 = (state_204695[(16)]);
var inst_204641 = (inst_204639 < inst_204638);
var inst_204642 = inst_204641;
var state_204695__$1 = state_204695;
if(cljs.core.truth_(inst_204642)){
var statearr_204734_204774 = state_204695__$1;
(statearr_204734_204774[(1)] = (10));

} else {
var statearr_204735_204775 = state_204695__$1;
(statearr_204735_204775[(1)] = (11));

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
});})(c__36125__auto___204747,mults,ensure_mult,p))
;
return ((function (switch__36013__auto__,c__36125__auto___204747,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__36014__auto__ = null;
var cljs$core$async$state_machine__36014__auto____0 = (function (){
var statearr_204739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_204739[(0)] = cljs$core$async$state_machine__36014__auto__);

(statearr_204739[(1)] = (1));

return statearr_204739;
});
var cljs$core$async$state_machine__36014__auto____1 = (function (state_204695){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_204695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e204740){if((e204740 instanceof Object)){
var ex__36017__auto__ = e204740;
var statearr_204741_204776 = state_204695;
(statearr_204741_204776[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__204777 = state_204695;
state_204695 = G__204777;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$state_machine__36014__auto__ = function(state_204695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36014__auto____1.call(this,state_204695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36014__auto____0;
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36014__auto____1;
return cljs$core$async$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___204747,mults,ensure_mult,p))
})();
var state__36127__auto__ = (function (){var statearr_204742 = f__36126__auto__.call(null);
(statearr_204742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___204747);

return statearr_204742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___204747,mults,ensure_mult,p))
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
var args204778 = [];
var len__25279__auto___204781 = arguments.length;
var i__25280__auto___204782 = (0);
while(true){
if((i__25280__auto___204782 < len__25279__auto___204781)){
args204778.push((arguments[i__25280__auto___204782]));

var G__204783 = (i__25280__auto___204782 + (1));
i__25280__auto___204782 = G__204783;
continue;
} else {
}
break;
}

var G__204780 = args204778.length;
switch (G__204780) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args204778.length)].join('')));

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
var args204785 = [];
var len__25279__auto___204788 = arguments.length;
var i__25280__auto___204789 = (0);
while(true){
if((i__25280__auto___204789 < len__25279__auto___204788)){
args204785.push((arguments[i__25280__auto___204789]));

var G__204790 = (i__25280__auto___204789 + (1));
i__25280__auto___204789 = G__204790;
continue;
} else {
}
break;
}

var G__204787 = args204785.length;
switch (G__204787) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args204785.length)].join('')));

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
var args204792 = [];
var len__25279__auto___204863 = arguments.length;
var i__25280__auto___204864 = (0);
while(true){
if((i__25280__auto___204864 < len__25279__auto___204863)){
args204792.push((arguments[i__25280__auto___204864]));

var G__204865 = (i__25280__auto___204864 + (1));
i__25280__auto___204864 = G__204865;
continue;
} else {
}
break;
}

var G__204794 = args204792.length;
switch (G__204794) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args204792.length)].join('')));

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
var c__36125__auto___204867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___204867,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___204867,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_204833){
var state_val_204834 = (state_204833[(1)]);
if((state_val_204834 === (7))){
var state_204833__$1 = state_204833;
var statearr_204835_204868 = state_204833__$1;
(statearr_204835_204868[(2)] = null);

(statearr_204835_204868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204834 === (1))){
var state_204833__$1 = state_204833;
var statearr_204836_204869 = state_204833__$1;
(statearr_204836_204869[(2)] = null);

(statearr_204836_204869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204834 === (4))){
var inst_204797 = (state_204833[(7)]);
var inst_204799 = (inst_204797 < cnt);
var state_204833__$1 = state_204833;
if(cljs.core.truth_(inst_204799)){
var statearr_204837_204870 = state_204833__$1;
(statearr_204837_204870[(1)] = (6));

} else {
var statearr_204838_204871 = state_204833__$1;
(statearr_204838_204871[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204834 === (15))){
var inst_204829 = (state_204833[(2)]);
var state_204833__$1 = state_204833;
var statearr_204839_204872 = state_204833__$1;
(statearr_204839_204872[(2)] = inst_204829);

(statearr_204839_204872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204834 === (13))){
var inst_204822 = cljs.core.async.close_BANG_.call(null,out);
var state_204833__$1 = state_204833;
var statearr_204840_204873 = state_204833__$1;
(statearr_204840_204873[(2)] = inst_204822);

(statearr_204840_204873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204834 === (6))){
var state_204833__$1 = state_204833;
var statearr_204841_204874 = state_204833__$1;
(statearr_204841_204874[(2)] = null);

(statearr_204841_204874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204834 === (3))){
var inst_204831 = (state_204833[(2)]);
var state_204833__$1 = state_204833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204833__$1,inst_204831);
} else {
if((state_val_204834 === (12))){
var inst_204819 = (state_204833[(8)]);
var inst_204819__$1 = (state_204833[(2)]);
var inst_204820 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_204819__$1);
var state_204833__$1 = (function (){var statearr_204842 = state_204833;
(statearr_204842[(8)] = inst_204819__$1);

return statearr_204842;
})();
if(cljs.core.truth_(inst_204820)){
var statearr_204843_204875 = state_204833__$1;
(statearr_204843_204875[(1)] = (13));

} else {
var statearr_204844_204876 = state_204833__$1;
(statearr_204844_204876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204834 === (2))){
var inst_204796 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_204797 = (0);
var state_204833__$1 = (function (){var statearr_204845 = state_204833;
(statearr_204845[(9)] = inst_204796);

(statearr_204845[(7)] = inst_204797);

return statearr_204845;
})();
var statearr_204846_204877 = state_204833__$1;
(statearr_204846_204877[(2)] = null);

(statearr_204846_204877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204834 === (11))){
var inst_204797 = (state_204833[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_204833,(10),Object,null,(9));
var inst_204806 = chs__$1.call(null,inst_204797);
var inst_204807 = done.call(null,inst_204797);
var inst_204808 = cljs.core.async.take_BANG_.call(null,inst_204806,inst_204807);
var state_204833__$1 = state_204833;
var statearr_204847_204878 = state_204833__$1;
(statearr_204847_204878[(2)] = inst_204808);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204833__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204834 === (9))){
var inst_204797 = (state_204833[(7)]);
var inst_204810 = (state_204833[(2)]);
var inst_204811 = (inst_204797 + (1));
var inst_204797__$1 = inst_204811;
var state_204833__$1 = (function (){var statearr_204848 = state_204833;
(statearr_204848[(10)] = inst_204810);

(statearr_204848[(7)] = inst_204797__$1);

return statearr_204848;
})();
var statearr_204849_204879 = state_204833__$1;
(statearr_204849_204879[(2)] = null);

(statearr_204849_204879[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204834 === (5))){
var inst_204817 = (state_204833[(2)]);
var state_204833__$1 = (function (){var statearr_204850 = state_204833;
(statearr_204850[(11)] = inst_204817);

return statearr_204850;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204833__$1,(12),dchan);
} else {
if((state_val_204834 === (14))){
var inst_204819 = (state_204833[(8)]);
var inst_204824 = cljs.core.apply.call(null,f,inst_204819);
var state_204833__$1 = state_204833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204833__$1,(16),out,inst_204824);
} else {
if((state_val_204834 === (16))){
var inst_204826 = (state_204833[(2)]);
var state_204833__$1 = (function (){var statearr_204851 = state_204833;
(statearr_204851[(12)] = inst_204826);

return statearr_204851;
})();
var statearr_204852_204880 = state_204833__$1;
(statearr_204852_204880[(2)] = null);

(statearr_204852_204880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204834 === (10))){
var inst_204801 = (state_204833[(2)]);
var inst_204802 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_204833__$1 = (function (){var statearr_204853 = state_204833;
(statearr_204853[(13)] = inst_204801);

return statearr_204853;
})();
var statearr_204854_204881 = state_204833__$1;
(statearr_204854_204881[(2)] = inst_204802);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204833__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204834 === (8))){
var inst_204815 = (state_204833[(2)]);
var state_204833__$1 = state_204833;
var statearr_204855_204882 = state_204833__$1;
(statearr_204855_204882[(2)] = inst_204815);

(statearr_204855_204882[(1)] = (5));


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
});})(c__36125__auto___204867,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__36013__auto__,c__36125__auto___204867,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__36014__auto__ = null;
var cljs$core$async$state_machine__36014__auto____0 = (function (){
var statearr_204859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_204859[(0)] = cljs$core$async$state_machine__36014__auto__);

(statearr_204859[(1)] = (1));

return statearr_204859;
});
var cljs$core$async$state_machine__36014__auto____1 = (function (state_204833){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_204833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e204860){if((e204860 instanceof Object)){
var ex__36017__auto__ = e204860;
var statearr_204861_204883 = state_204833;
(statearr_204861_204883[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__204884 = state_204833;
state_204833 = G__204884;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$state_machine__36014__auto__ = function(state_204833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36014__auto____1.call(this,state_204833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36014__auto____0;
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36014__auto____1;
return cljs$core$async$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___204867,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36127__auto__ = (function (){var statearr_204862 = f__36126__auto__.call(null);
(statearr_204862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___204867);

return statearr_204862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___204867,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args204886 = [];
var len__25279__auto___204942 = arguments.length;
var i__25280__auto___204943 = (0);
while(true){
if((i__25280__auto___204943 < len__25279__auto___204942)){
args204886.push((arguments[i__25280__auto___204943]));

var G__204944 = (i__25280__auto___204943 + (1));
i__25280__auto___204943 = G__204944;
continue;
} else {
}
break;
}

var G__204888 = args204886.length;
switch (G__204888) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args204886.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36125__auto___204946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___204946,out){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___204946,out){
return (function (state_204918){
var state_val_204919 = (state_204918[(1)]);
if((state_val_204919 === (7))){
var inst_204898 = (state_204918[(7)]);
var inst_204897 = (state_204918[(8)]);
var inst_204897__$1 = (state_204918[(2)]);
var inst_204898__$1 = cljs.core.nth.call(null,inst_204897__$1,(0),null);
var inst_204899 = cljs.core.nth.call(null,inst_204897__$1,(1),null);
var inst_204900 = (inst_204898__$1 == null);
var state_204918__$1 = (function (){var statearr_204920 = state_204918;
(statearr_204920[(9)] = inst_204899);

(statearr_204920[(7)] = inst_204898__$1);

(statearr_204920[(8)] = inst_204897__$1);

return statearr_204920;
})();
if(cljs.core.truth_(inst_204900)){
var statearr_204921_204947 = state_204918__$1;
(statearr_204921_204947[(1)] = (8));

} else {
var statearr_204922_204948 = state_204918__$1;
(statearr_204922_204948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204919 === (1))){
var inst_204889 = cljs.core.vec.call(null,chs);
var inst_204890 = inst_204889;
var state_204918__$1 = (function (){var statearr_204923 = state_204918;
(statearr_204923[(10)] = inst_204890);

return statearr_204923;
})();
var statearr_204924_204949 = state_204918__$1;
(statearr_204924_204949[(2)] = null);

(statearr_204924_204949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204919 === (4))){
var inst_204890 = (state_204918[(10)]);
var state_204918__$1 = state_204918;
return cljs.core.async.ioc_alts_BANG_.call(null,state_204918__$1,(7),inst_204890);
} else {
if((state_val_204919 === (6))){
var inst_204914 = (state_204918[(2)]);
var state_204918__$1 = state_204918;
var statearr_204925_204950 = state_204918__$1;
(statearr_204925_204950[(2)] = inst_204914);

(statearr_204925_204950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204919 === (3))){
var inst_204916 = (state_204918[(2)]);
var state_204918__$1 = state_204918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204918__$1,inst_204916);
} else {
if((state_val_204919 === (2))){
var inst_204890 = (state_204918[(10)]);
var inst_204892 = cljs.core.count.call(null,inst_204890);
var inst_204893 = (inst_204892 > (0));
var state_204918__$1 = state_204918;
if(cljs.core.truth_(inst_204893)){
var statearr_204927_204951 = state_204918__$1;
(statearr_204927_204951[(1)] = (4));

} else {
var statearr_204928_204952 = state_204918__$1;
(statearr_204928_204952[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204919 === (11))){
var inst_204890 = (state_204918[(10)]);
var inst_204907 = (state_204918[(2)]);
var tmp204926 = inst_204890;
var inst_204890__$1 = tmp204926;
var state_204918__$1 = (function (){var statearr_204929 = state_204918;
(statearr_204929[(11)] = inst_204907);

(statearr_204929[(10)] = inst_204890__$1);

return statearr_204929;
})();
var statearr_204930_204953 = state_204918__$1;
(statearr_204930_204953[(2)] = null);

(statearr_204930_204953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204919 === (9))){
var inst_204898 = (state_204918[(7)]);
var state_204918__$1 = state_204918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204918__$1,(11),out,inst_204898);
} else {
if((state_val_204919 === (5))){
var inst_204912 = cljs.core.async.close_BANG_.call(null,out);
var state_204918__$1 = state_204918;
var statearr_204931_204954 = state_204918__$1;
(statearr_204931_204954[(2)] = inst_204912);

(statearr_204931_204954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204919 === (10))){
var inst_204910 = (state_204918[(2)]);
var state_204918__$1 = state_204918;
var statearr_204932_204955 = state_204918__$1;
(statearr_204932_204955[(2)] = inst_204910);

(statearr_204932_204955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204919 === (8))){
var inst_204899 = (state_204918[(9)]);
var inst_204890 = (state_204918[(10)]);
var inst_204898 = (state_204918[(7)]);
var inst_204897 = (state_204918[(8)]);
var inst_204902 = (function (){var cs = inst_204890;
var vec__204895 = inst_204897;
var v = inst_204898;
var c = inst_204899;
return ((function (cs,vec__204895,v,c,inst_204899,inst_204890,inst_204898,inst_204897,state_val_204919,c__36125__auto___204946,out){
return (function (p1__204885_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__204885_SHARP_);
});
;})(cs,vec__204895,v,c,inst_204899,inst_204890,inst_204898,inst_204897,state_val_204919,c__36125__auto___204946,out))
})();
var inst_204903 = cljs.core.filterv.call(null,inst_204902,inst_204890);
var inst_204890__$1 = inst_204903;
var state_204918__$1 = (function (){var statearr_204933 = state_204918;
(statearr_204933[(10)] = inst_204890__$1);

return statearr_204933;
})();
var statearr_204934_204956 = state_204918__$1;
(statearr_204934_204956[(2)] = null);

(statearr_204934_204956[(1)] = (2));


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
});})(c__36125__auto___204946,out))
;
return ((function (switch__36013__auto__,c__36125__auto___204946,out){
return (function() {
var cljs$core$async$state_machine__36014__auto__ = null;
var cljs$core$async$state_machine__36014__auto____0 = (function (){
var statearr_204938 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_204938[(0)] = cljs$core$async$state_machine__36014__auto__);

(statearr_204938[(1)] = (1));

return statearr_204938;
});
var cljs$core$async$state_machine__36014__auto____1 = (function (state_204918){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_204918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e204939){if((e204939 instanceof Object)){
var ex__36017__auto__ = e204939;
var statearr_204940_204957 = state_204918;
(statearr_204940_204957[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e204939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__204958 = state_204918;
state_204918 = G__204958;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$state_machine__36014__auto__ = function(state_204918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36014__auto____1.call(this,state_204918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36014__auto____0;
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36014__auto____1;
return cljs$core$async$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___204946,out))
})();
var state__36127__auto__ = (function (){var statearr_204941 = f__36126__auto__.call(null);
(statearr_204941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___204946);

return statearr_204941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___204946,out))
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
var args204959 = [];
var len__25279__auto___205008 = arguments.length;
var i__25280__auto___205009 = (0);
while(true){
if((i__25280__auto___205009 < len__25279__auto___205008)){
args204959.push((arguments[i__25280__auto___205009]));

var G__205010 = (i__25280__auto___205009 + (1));
i__25280__auto___205009 = G__205010;
continue;
} else {
}
break;
}

var G__204961 = args204959.length;
switch (G__204961) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args204959.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36125__auto___205012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___205012,out){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___205012,out){
return (function (state_204985){
var state_val_204986 = (state_204985[(1)]);
if((state_val_204986 === (7))){
var inst_204967 = (state_204985[(7)]);
var inst_204967__$1 = (state_204985[(2)]);
var inst_204968 = (inst_204967__$1 == null);
var inst_204969 = cljs.core.not.call(null,inst_204968);
var state_204985__$1 = (function (){var statearr_204987 = state_204985;
(statearr_204987[(7)] = inst_204967__$1);

return statearr_204987;
})();
if(inst_204969){
var statearr_204988_205013 = state_204985__$1;
(statearr_204988_205013[(1)] = (8));

} else {
var statearr_204989_205014 = state_204985__$1;
(statearr_204989_205014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204986 === (1))){
var inst_204962 = (0);
var state_204985__$1 = (function (){var statearr_204990 = state_204985;
(statearr_204990[(8)] = inst_204962);

return statearr_204990;
})();
var statearr_204991_205015 = state_204985__$1;
(statearr_204991_205015[(2)] = null);

(statearr_204991_205015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204986 === (4))){
var state_204985__$1 = state_204985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_204985__$1,(7),ch);
} else {
if((state_val_204986 === (6))){
var inst_204980 = (state_204985[(2)]);
var state_204985__$1 = state_204985;
var statearr_204992_205016 = state_204985__$1;
(statearr_204992_205016[(2)] = inst_204980);

(statearr_204992_205016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204986 === (3))){
var inst_204982 = (state_204985[(2)]);
var inst_204983 = cljs.core.async.close_BANG_.call(null,out);
var state_204985__$1 = (function (){var statearr_204993 = state_204985;
(statearr_204993[(9)] = inst_204982);

return statearr_204993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_204985__$1,inst_204983);
} else {
if((state_val_204986 === (2))){
var inst_204962 = (state_204985[(8)]);
var inst_204964 = (inst_204962 < n);
var state_204985__$1 = state_204985;
if(cljs.core.truth_(inst_204964)){
var statearr_204994_205017 = state_204985__$1;
(statearr_204994_205017[(1)] = (4));

} else {
var statearr_204995_205018 = state_204985__$1;
(statearr_204995_205018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204986 === (11))){
var inst_204962 = (state_204985[(8)]);
var inst_204972 = (state_204985[(2)]);
var inst_204973 = (inst_204962 + (1));
var inst_204962__$1 = inst_204973;
var state_204985__$1 = (function (){var statearr_204996 = state_204985;
(statearr_204996[(10)] = inst_204972);

(statearr_204996[(8)] = inst_204962__$1);

return statearr_204996;
})();
var statearr_204997_205019 = state_204985__$1;
(statearr_204997_205019[(2)] = null);

(statearr_204997_205019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204986 === (9))){
var state_204985__$1 = state_204985;
var statearr_204998_205020 = state_204985__$1;
(statearr_204998_205020[(2)] = null);

(statearr_204998_205020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204986 === (5))){
var state_204985__$1 = state_204985;
var statearr_204999_205021 = state_204985__$1;
(statearr_204999_205021[(2)] = null);

(statearr_204999_205021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204986 === (10))){
var inst_204977 = (state_204985[(2)]);
var state_204985__$1 = state_204985;
var statearr_205000_205022 = state_204985__$1;
(statearr_205000_205022[(2)] = inst_204977);

(statearr_205000_205022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_204986 === (8))){
var inst_204967 = (state_204985[(7)]);
var state_204985__$1 = state_204985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_204985__$1,(11),out,inst_204967);
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
});})(c__36125__auto___205012,out))
;
return ((function (switch__36013__auto__,c__36125__auto___205012,out){
return (function() {
var cljs$core$async$state_machine__36014__auto__ = null;
var cljs$core$async$state_machine__36014__auto____0 = (function (){
var statearr_205004 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_205004[(0)] = cljs$core$async$state_machine__36014__auto__);

(statearr_205004[(1)] = (1));

return statearr_205004;
});
var cljs$core$async$state_machine__36014__auto____1 = (function (state_204985){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_204985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e205005){if((e205005 instanceof Object)){
var ex__36017__auto__ = e205005;
var statearr_205006_205023 = state_204985;
(statearr_205006_205023[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_204985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205024 = state_204985;
state_204985 = G__205024;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$state_machine__36014__auto__ = function(state_204985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36014__auto____1.call(this,state_204985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36014__auto____0;
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36014__auto____1;
return cljs$core$async$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___205012,out))
})();
var state__36127__auto__ = (function (){var statearr_205007 = f__36126__auto__.call(null);
(statearr_205007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___205012);

return statearr_205007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___205012,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async205032 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async205032 = (function (map_LT_,f,ch,meta205033){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta205033 = meta205033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async205032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_205034,meta205033__$1){
var self__ = this;
var _205034__$1 = this;
return (new cljs.core.async.t_cljs$core$async205032(self__.map_LT_,self__.f,self__.ch,meta205033__$1));
});

cljs.core.async.t_cljs$core$async205032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_205034){
var self__ = this;
var _205034__$1 = this;
return self__.meta205033;
});

cljs.core.async.t_cljs$core$async205032.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async205032.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async205032.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async205032.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async205032.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async205035 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async205035 = (function (map_LT_,f,ch,meta205033,_,fn1,meta205036){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta205033 = meta205033;
this._ = _;
this.fn1 = fn1;
this.meta205036 = meta205036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async205035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_205037,meta205036__$1){
var self__ = this;
var _205037__$1 = this;
return (new cljs.core.async.t_cljs$core$async205035(self__.map_LT_,self__.f,self__.ch,self__.meta205033,self__._,self__.fn1,meta205036__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async205035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_205037){
var self__ = this;
var _205037__$1 = this;
return self__.meta205036;
});})(___$1))
;

cljs.core.async.t_cljs$core$async205035.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async205035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async205035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__205025_SHARP_){
return f1.call(null,(((p1__205025_SHARP_ == null))?null:self__.f.call(null,p1__205025_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async205035.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta205033","meta205033",-919433899,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async205032","cljs.core.async/t_cljs$core$async205032",-449035805,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta205036","meta205036",-1333446845,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async205035.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async205035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async205035";

cljs.core.async.t_cljs$core$async205035.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cljs.core.async/t_cljs$core$async205035");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async205035 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async205035(map_LT___$1,f__$1,ch__$1,meta205033__$1,___$2,fn1__$1,meta205036){
return (new cljs.core.async.t_cljs$core$async205035(map_LT___$1,f__$1,ch__$1,meta205033__$1,___$2,fn1__$1,meta205036));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async205035(self__.map_LT_,self__.f,self__.ch,self__.meta205033,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24209__auto__ = ret;
if(cljs.core.truth_(and__24209__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24209__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async205032.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async205032.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async205032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta205033","meta205033",-919433899,null)], null);
});

cljs.core.async.t_cljs$core$async205032.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async205032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async205032";

cljs.core.async.t_cljs$core$async205032.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cljs.core.async/t_cljs$core$async205032");
});

cljs.core.async.__GT_t_cljs$core$async205032 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async205032(map_LT___$1,f__$1,ch__$1,meta205033){
return (new cljs.core.async.t_cljs$core$async205032(map_LT___$1,f__$1,ch__$1,meta205033));
});

}

return (new cljs.core.async.t_cljs$core$async205032(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async205041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async205041 = (function (map_GT_,f,ch,meta205042){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta205042 = meta205042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async205041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_205043,meta205042__$1){
var self__ = this;
var _205043__$1 = this;
return (new cljs.core.async.t_cljs$core$async205041(self__.map_GT_,self__.f,self__.ch,meta205042__$1));
});

cljs.core.async.t_cljs$core$async205041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_205043){
var self__ = this;
var _205043__$1 = this;
return self__.meta205042;
});

cljs.core.async.t_cljs$core$async205041.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async205041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async205041.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async205041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async205041.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async205041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async205041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta205042","meta205042",-1270089206,null)], null);
});

cljs.core.async.t_cljs$core$async205041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async205041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async205041";

cljs.core.async.t_cljs$core$async205041.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cljs.core.async/t_cljs$core$async205041");
});

cljs.core.async.__GT_t_cljs$core$async205041 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async205041(map_GT___$1,f__$1,ch__$1,meta205042){
return (new cljs.core.async.t_cljs$core$async205041(map_GT___$1,f__$1,ch__$1,meta205042));
});

}

return (new cljs.core.async.t_cljs$core$async205041(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async205047 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async205047 = (function (filter_GT_,p,ch,meta205048){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta205048 = meta205048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async205047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_205049,meta205048__$1){
var self__ = this;
var _205049__$1 = this;
return (new cljs.core.async.t_cljs$core$async205047(self__.filter_GT_,self__.p,self__.ch,meta205048__$1));
});

cljs.core.async.t_cljs$core$async205047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_205049){
var self__ = this;
var _205049__$1 = this;
return self__.meta205048;
});

cljs.core.async.t_cljs$core$async205047.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async205047.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async205047.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async205047.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async205047.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async205047.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async205047.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async205047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta205048","meta205048",1024916298,null)], null);
});

cljs.core.async.t_cljs$core$async205047.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async205047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async205047";

cljs.core.async.t_cljs$core$async205047.cljs$lang$ctorPrWriter = (function (this__24819__auto__,writer__24820__auto__,opt__24821__auto__){
return cljs.core._write.call(null,writer__24820__auto__,"cljs.core.async/t_cljs$core$async205047");
});

cljs.core.async.__GT_t_cljs$core$async205047 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async205047(filter_GT___$1,p__$1,ch__$1,meta205048){
return (new cljs.core.async.t_cljs$core$async205047(filter_GT___$1,p__$1,ch__$1,meta205048));
});

}

return (new cljs.core.async.t_cljs$core$async205047(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args205050 = [];
var len__25279__auto___205094 = arguments.length;
var i__25280__auto___205095 = (0);
while(true){
if((i__25280__auto___205095 < len__25279__auto___205094)){
args205050.push((arguments[i__25280__auto___205095]));

var G__205096 = (i__25280__auto___205095 + (1));
i__25280__auto___205095 = G__205096;
continue;
} else {
}
break;
}

var G__205052 = args205050.length;
switch (G__205052) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args205050.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36125__auto___205098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___205098,out){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___205098,out){
return (function (state_205073){
var state_val_205074 = (state_205073[(1)]);
if((state_val_205074 === (7))){
var inst_205069 = (state_205073[(2)]);
var state_205073__$1 = state_205073;
var statearr_205075_205099 = state_205073__$1;
(statearr_205075_205099[(2)] = inst_205069);

(statearr_205075_205099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205074 === (1))){
var state_205073__$1 = state_205073;
var statearr_205076_205100 = state_205073__$1;
(statearr_205076_205100[(2)] = null);

(statearr_205076_205100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205074 === (4))){
var inst_205055 = (state_205073[(7)]);
var inst_205055__$1 = (state_205073[(2)]);
var inst_205056 = (inst_205055__$1 == null);
var state_205073__$1 = (function (){var statearr_205077 = state_205073;
(statearr_205077[(7)] = inst_205055__$1);

return statearr_205077;
})();
if(cljs.core.truth_(inst_205056)){
var statearr_205078_205101 = state_205073__$1;
(statearr_205078_205101[(1)] = (5));

} else {
var statearr_205079_205102 = state_205073__$1;
(statearr_205079_205102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205074 === (6))){
var inst_205055 = (state_205073[(7)]);
var inst_205060 = p.call(null,inst_205055);
var state_205073__$1 = state_205073;
if(cljs.core.truth_(inst_205060)){
var statearr_205080_205103 = state_205073__$1;
(statearr_205080_205103[(1)] = (8));

} else {
var statearr_205081_205104 = state_205073__$1;
(statearr_205081_205104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205074 === (3))){
var inst_205071 = (state_205073[(2)]);
var state_205073__$1 = state_205073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205073__$1,inst_205071);
} else {
if((state_val_205074 === (2))){
var state_205073__$1 = state_205073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205073__$1,(4),ch);
} else {
if((state_val_205074 === (11))){
var inst_205063 = (state_205073[(2)]);
var state_205073__$1 = state_205073;
var statearr_205082_205105 = state_205073__$1;
(statearr_205082_205105[(2)] = inst_205063);

(statearr_205082_205105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205074 === (9))){
var state_205073__$1 = state_205073;
var statearr_205083_205106 = state_205073__$1;
(statearr_205083_205106[(2)] = null);

(statearr_205083_205106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205074 === (5))){
var inst_205058 = cljs.core.async.close_BANG_.call(null,out);
var state_205073__$1 = state_205073;
var statearr_205084_205107 = state_205073__$1;
(statearr_205084_205107[(2)] = inst_205058);

(statearr_205084_205107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205074 === (10))){
var inst_205066 = (state_205073[(2)]);
var state_205073__$1 = (function (){var statearr_205085 = state_205073;
(statearr_205085[(8)] = inst_205066);

return statearr_205085;
})();
var statearr_205086_205108 = state_205073__$1;
(statearr_205086_205108[(2)] = null);

(statearr_205086_205108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205074 === (8))){
var inst_205055 = (state_205073[(7)]);
var state_205073__$1 = state_205073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205073__$1,(11),out,inst_205055);
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
});})(c__36125__auto___205098,out))
;
return ((function (switch__36013__auto__,c__36125__auto___205098,out){
return (function() {
var cljs$core$async$state_machine__36014__auto__ = null;
var cljs$core$async$state_machine__36014__auto____0 = (function (){
var statearr_205090 = [null,null,null,null,null,null,null,null,null];
(statearr_205090[(0)] = cljs$core$async$state_machine__36014__auto__);

(statearr_205090[(1)] = (1));

return statearr_205090;
});
var cljs$core$async$state_machine__36014__auto____1 = (function (state_205073){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_205073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e205091){if((e205091 instanceof Object)){
var ex__36017__auto__ = e205091;
var statearr_205092_205109 = state_205073;
(statearr_205092_205109[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205110 = state_205073;
state_205073 = G__205110;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$state_machine__36014__auto__ = function(state_205073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36014__auto____1.call(this,state_205073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36014__auto____0;
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36014__auto____1;
return cljs$core$async$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___205098,out))
})();
var state__36127__auto__ = (function (){var statearr_205093 = f__36126__auto__.call(null);
(statearr_205093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___205098);

return statearr_205093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___205098,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args205111 = [];
var len__25279__auto___205114 = arguments.length;
var i__25280__auto___205115 = (0);
while(true){
if((i__25280__auto___205115 < len__25279__auto___205114)){
args205111.push((arguments[i__25280__auto___205115]));

var G__205116 = (i__25280__auto___205115 + (1));
i__25280__auto___205115 = G__205116;
continue;
} else {
}
break;
}

var G__205113 = args205111.length;
switch (G__205113) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args205111.length)].join('')));

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
var c__36125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto__){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto__){
return (function (state_205283){
var state_val_205284 = (state_205283[(1)]);
if((state_val_205284 === (7))){
var inst_205279 = (state_205283[(2)]);
var state_205283__$1 = state_205283;
var statearr_205285_205326 = state_205283__$1;
(statearr_205285_205326[(2)] = inst_205279);

(statearr_205285_205326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (20))){
var inst_205249 = (state_205283[(7)]);
var inst_205260 = (state_205283[(2)]);
var inst_205261 = cljs.core.next.call(null,inst_205249);
var inst_205235 = inst_205261;
var inst_205236 = null;
var inst_205237 = (0);
var inst_205238 = (0);
var state_205283__$1 = (function (){var statearr_205286 = state_205283;
(statearr_205286[(8)] = inst_205260);

(statearr_205286[(9)] = inst_205237);

(statearr_205286[(10)] = inst_205235);

(statearr_205286[(11)] = inst_205236);

(statearr_205286[(12)] = inst_205238);

return statearr_205286;
})();
var statearr_205287_205327 = state_205283__$1;
(statearr_205287_205327[(2)] = null);

(statearr_205287_205327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (1))){
var state_205283__$1 = state_205283;
var statearr_205288_205328 = state_205283__$1;
(statearr_205288_205328[(2)] = null);

(statearr_205288_205328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (4))){
var inst_205224 = (state_205283[(13)]);
var inst_205224__$1 = (state_205283[(2)]);
var inst_205225 = (inst_205224__$1 == null);
var state_205283__$1 = (function (){var statearr_205289 = state_205283;
(statearr_205289[(13)] = inst_205224__$1);

return statearr_205289;
})();
if(cljs.core.truth_(inst_205225)){
var statearr_205290_205329 = state_205283__$1;
(statearr_205290_205329[(1)] = (5));

} else {
var statearr_205291_205330 = state_205283__$1;
(statearr_205291_205330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (15))){
var state_205283__$1 = state_205283;
var statearr_205295_205331 = state_205283__$1;
(statearr_205295_205331[(2)] = null);

(statearr_205295_205331[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (21))){
var state_205283__$1 = state_205283;
var statearr_205296_205332 = state_205283__$1;
(statearr_205296_205332[(2)] = null);

(statearr_205296_205332[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (13))){
var inst_205237 = (state_205283[(9)]);
var inst_205235 = (state_205283[(10)]);
var inst_205236 = (state_205283[(11)]);
var inst_205238 = (state_205283[(12)]);
var inst_205245 = (state_205283[(2)]);
var inst_205246 = (inst_205238 + (1));
var tmp205292 = inst_205237;
var tmp205293 = inst_205235;
var tmp205294 = inst_205236;
var inst_205235__$1 = tmp205293;
var inst_205236__$1 = tmp205294;
var inst_205237__$1 = tmp205292;
var inst_205238__$1 = inst_205246;
var state_205283__$1 = (function (){var statearr_205297 = state_205283;
(statearr_205297[(9)] = inst_205237__$1);

(statearr_205297[(14)] = inst_205245);

(statearr_205297[(10)] = inst_205235__$1);

(statearr_205297[(11)] = inst_205236__$1);

(statearr_205297[(12)] = inst_205238__$1);

return statearr_205297;
})();
var statearr_205298_205333 = state_205283__$1;
(statearr_205298_205333[(2)] = null);

(statearr_205298_205333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (22))){
var state_205283__$1 = state_205283;
var statearr_205299_205334 = state_205283__$1;
(statearr_205299_205334[(2)] = null);

(statearr_205299_205334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (6))){
var inst_205224 = (state_205283[(13)]);
var inst_205233 = f.call(null,inst_205224);
var inst_205234 = cljs.core.seq.call(null,inst_205233);
var inst_205235 = inst_205234;
var inst_205236 = null;
var inst_205237 = (0);
var inst_205238 = (0);
var state_205283__$1 = (function (){var statearr_205300 = state_205283;
(statearr_205300[(9)] = inst_205237);

(statearr_205300[(10)] = inst_205235);

(statearr_205300[(11)] = inst_205236);

(statearr_205300[(12)] = inst_205238);

return statearr_205300;
})();
var statearr_205301_205335 = state_205283__$1;
(statearr_205301_205335[(2)] = null);

(statearr_205301_205335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (17))){
var inst_205249 = (state_205283[(7)]);
var inst_205253 = cljs.core.chunk_first.call(null,inst_205249);
var inst_205254 = cljs.core.chunk_rest.call(null,inst_205249);
var inst_205255 = cljs.core.count.call(null,inst_205253);
var inst_205235 = inst_205254;
var inst_205236 = inst_205253;
var inst_205237 = inst_205255;
var inst_205238 = (0);
var state_205283__$1 = (function (){var statearr_205302 = state_205283;
(statearr_205302[(9)] = inst_205237);

(statearr_205302[(10)] = inst_205235);

(statearr_205302[(11)] = inst_205236);

(statearr_205302[(12)] = inst_205238);

return statearr_205302;
})();
var statearr_205303_205336 = state_205283__$1;
(statearr_205303_205336[(2)] = null);

(statearr_205303_205336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (3))){
var inst_205281 = (state_205283[(2)]);
var state_205283__$1 = state_205283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205283__$1,inst_205281);
} else {
if((state_val_205284 === (12))){
var inst_205269 = (state_205283[(2)]);
var state_205283__$1 = state_205283;
var statearr_205304_205337 = state_205283__$1;
(statearr_205304_205337[(2)] = inst_205269);

(statearr_205304_205337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (2))){
var state_205283__$1 = state_205283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205283__$1,(4),in$);
} else {
if((state_val_205284 === (23))){
var inst_205277 = (state_205283[(2)]);
var state_205283__$1 = state_205283;
var statearr_205305_205338 = state_205283__$1;
(statearr_205305_205338[(2)] = inst_205277);

(statearr_205305_205338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (19))){
var inst_205264 = (state_205283[(2)]);
var state_205283__$1 = state_205283;
var statearr_205306_205339 = state_205283__$1;
(statearr_205306_205339[(2)] = inst_205264);

(statearr_205306_205339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (11))){
var inst_205249 = (state_205283[(7)]);
var inst_205235 = (state_205283[(10)]);
var inst_205249__$1 = cljs.core.seq.call(null,inst_205235);
var state_205283__$1 = (function (){var statearr_205307 = state_205283;
(statearr_205307[(7)] = inst_205249__$1);

return statearr_205307;
})();
if(inst_205249__$1){
var statearr_205308_205340 = state_205283__$1;
(statearr_205308_205340[(1)] = (14));

} else {
var statearr_205309_205341 = state_205283__$1;
(statearr_205309_205341[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (9))){
var inst_205271 = (state_205283[(2)]);
var inst_205272 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_205283__$1 = (function (){var statearr_205310 = state_205283;
(statearr_205310[(15)] = inst_205271);

return statearr_205310;
})();
if(cljs.core.truth_(inst_205272)){
var statearr_205311_205342 = state_205283__$1;
(statearr_205311_205342[(1)] = (21));

} else {
var statearr_205312_205343 = state_205283__$1;
(statearr_205312_205343[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (5))){
var inst_205227 = cljs.core.async.close_BANG_.call(null,out);
var state_205283__$1 = state_205283;
var statearr_205313_205344 = state_205283__$1;
(statearr_205313_205344[(2)] = inst_205227);

(statearr_205313_205344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (14))){
var inst_205249 = (state_205283[(7)]);
var inst_205251 = cljs.core.chunked_seq_QMARK_.call(null,inst_205249);
var state_205283__$1 = state_205283;
if(inst_205251){
var statearr_205314_205345 = state_205283__$1;
(statearr_205314_205345[(1)] = (17));

} else {
var statearr_205315_205346 = state_205283__$1;
(statearr_205315_205346[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (16))){
var inst_205267 = (state_205283[(2)]);
var state_205283__$1 = state_205283;
var statearr_205316_205347 = state_205283__$1;
(statearr_205316_205347[(2)] = inst_205267);

(statearr_205316_205347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205284 === (10))){
var inst_205236 = (state_205283[(11)]);
var inst_205238 = (state_205283[(12)]);
var inst_205243 = cljs.core._nth.call(null,inst_205236,inst_205238);
var state_205283__$1 = state_205283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205283__$1,(13),out,inst_205243);
} else {
if((state_val_205284 === (18))){
var inst_205249 = (state_205283[(7)]);
var inst_205258 = cljs.core.first.call(null,inst_205249);
var state_205283__$1 = state_205283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205283__$1,(20),out,inst_205258);
} else {
if((state_val_205284 === (8))){
var inst_205237 = (state_205283[(9)]);
var inst_205238 = (state_205283[(12)]);
var inst_205240 = (inst_205238 < inst_205237);
var inst_205241 = inst_205240;
var state_205283__$1 = state_205283;
if(cljs.core.truth_(inst_205241)){
var statearr_205317_205348 = state_205283__$1;
(statearr_205317_205348[(1)] = (10));

} else {
var statearr_205318_205349 = state_205283__$1;
(statearr_205318_205349[(1)] = (11));

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
});})(c__36125__auto__))
;
return ((function (switch__36013__auto__,c__36125__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36014__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36014__auto____0 = (function (){
var statearr_205322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_205322[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36014__auto__);

(statearr_205322[(1)] = (1));

return statearr_205322;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36014__auto____1 = (function (state_205283){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_205283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e205323){if((e205323 instanceof Object)){
var ex__36017__auto__ = e205323;
var statearr_205324_205350 = state_205283;
(statearr_205324_205350[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205351 = state_205283;
state_205283 = G__205351;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36014__auto__ = function(state_205283){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36014__auto____1.call(this,state_205283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36014__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36014__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto__))
})();
var state__36127__auto__ = (function (){var statearr_205325 = f__36126__auto__.call(null);
(statearr_205325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto__);

return statearr_205325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto__))
);

return c__36125__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args205352 = [];
var len__25279__auto___205355 = arguments.length;
var i__25280__auto___205356 = (0);
while(true){
if((i__25280__auto___205356 < len__25279__auto___205355)){
args205352.push((arguments[i__25280__auto___205356]));

var G__205357 = (i__25280__auto___205356 + (1));
i__25280__auto___205356 = G__205357;
continue;
} else {
}
break;
}

var G__205354 = args205352.length;
switch (G__205354) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args205352.length)].join('')));

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
var args205359 = [];
var len__25279__auto___205362 = arguments.length;
var i__25280__auto___205363 = (0);
while(true){
if((i__25280__auto___205363 < len__25279__auto___205362)){
args205359.push((arguments[i__25280__auto___205363]));

var G__205364 = (i__25280__auto___205363 + (1));
i__25280__auto___205363 = G__205364;
continue;
} else {
}
break;
}

var G__205361 = args205359.length;
switch (G__205361) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args205359.length)].join('')));

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
var args205366 = [];
var len__25279__auto___205417 = arguments.length;
var i__25280__auto___205418 = (0);
while(true){
if((i__25280__auto___205418 < len__25279__auto___205417)){
args205366.push((arguments[i__25280__auto___205418]));

var G__205419 = (i__25280__auto___205418 + (1));
i__25280__auto___205418 = G__205419;
continue;
} else {
}
break;
}

var G__205368 = args205366.length;
switch (G__205368) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args205366.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36125__auto___205421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___205421,out){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___205421,out){
return (function (state_205392){
var state_val_205393 = (state_205392[(1)]);
if((state_val_205393 === (7))){
var inst_205387 = (state_205392[(2)]);
var state_205392__$1 = state_205392;
var statearr_205394_205422 = state_205392__$1;
(statearr_205394_205422[(2)] = inst_205387);

(statearr_205394_205422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205393 === (1))){
var inst_205369 = null;
var state_205392__$1 = (function (){var statearr_205395 = state_205392;
(statearr_205395[(7)] = inst_205369);

return statearr_205395;
})();
var statearr_205396_205423 = state_205392__$1;
(statearr_205396_205423[(2)] = null);

(statearr_205396_205423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205393 === (4))){
var inst_205372 = (state_205392[(8)]);
var inst_205372__$1 = (state_205392[(2)]);
var inst_205373 = (inst_205372__$1 == null);
var inst_205374 = cljs.core.not.call(null,inst_205373);
var state_205392__$1 = (function (){var statearr_205397 = state_205392;
(statearr_205397[(8)] = inst_205372__$1);

return statearr_205397;
})();
if(inst_205374){
var statearr_205398_205424 = state_205392__$1;
(statearr_205398_205424[(1)] = (5));

} else {
var statearr_205399_205425 = state_205392__$1;
(statearr_205399_205425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205393 === (6))){
var state_205392__$1 = state_205392;
var statearr_205400_205426 = state_205392__$1;
(statearr_205400_205426[(2)] = null);

(statearr_205400_205426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205393 === (3))){
var inst_205389 = (state_205392[(2)]);
var inst_205390 = cljs.core.async.close_BANG_.call(null,out);
var state_205392__$1 = (function (){var statearr_205401 = state_205392;
(statearr_205401[(9)] = inst_205389);

return statearr_205401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205392__$1,inst_205390);
} else {
if((state_val_205393 === (2))){
var state_205392__$1 = state_205392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205392__$1,(4),ch);
} else {
if((state_val_205393 === (11))){
var inst_205372 = (state_205392[(8)]);
var inst_205381 = (state_205392[(2)]);
var inst_205369 = inst_205372;
var state_205392__$1 = (function (){var statearr_205402 = state_205392;
(statearr_205402[(7)] = inst_205369);

(statearr_205402[(10)] = inst_205381);

return statearr_205402;
})();
var statearr_205403_205427 = state_205392__$1;
(statearr_205403_205427[(2)] = null);

(statearr_205403_205427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205393 === (9))){
var inst_205372 = (state_205392[(8)]);
var state_205392__$1 = state_205392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205392__$1,(11),out,inst_205372);
} else {
if((state_val_205393 === (5))){
var inst_205369 = (state_205392[(7)]);
var inst_205372 = (state_205392[(8)]);
var inst_205376 = cljs.core._EQ_.call(null,inst_205372,inst_205369);
var state_205392__$1 = state_205392;
if(inst_205376){
var statearr_205405_205428 = state_205392__$1;
(statearr_205405_205428[(1)] = (8));

} else {
var statearr_205406_205429 = state_205392__$1;
(statearr_205406_205429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205393 === (10))){
var inst_205384 = (state_205392[(2)]);
var state_205392__$1 = state_205392;
var statearr_205407_205430 = state_205392__$1;
(statearr_205407_205430[(2)] = inst_205384);

(statearr_205407_205430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205393 === (8))){
var inst_205369 = (state_205392[(7)]);
var tmp205404 = inst_205369;
var inst_205369__$1 = tmp205404;
var state_205392__$1 = (function (){var statearr_205408 = state_205392;
(statearr_205408[(7)] = inst_205369__$1);

return statearr_205408;
})();
var statearr_205409_205431 = state_205392__$1;
(statearr_205409_205431[(2)] = null);

(statearr_205409_205431[(1)] = (2));


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
});})(c__36125__auto___205421,out))
;
return ((function (switch__36013__auto__,c__36125__auto___205421,out){
return (function() {
var cljs$core$async$state_machine__36014__auto__ = null;
var cljs$core$async$state_machine__36014__auto____0 = (function (){
var statearr_205413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_205413[(0)] = cljs$core$async$state_machine__36014__auto__);

(statearr_205413[(1)] = (1));

return statearr_205413;
});
var cljs$core$async$state_machine__36014__auto____1 = (function (state_205392){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_205392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e205414){if((e205414 instanceof Object)){
var ex__36017__auto__ = e205414;
var statearr_205415_205432 = state_205392;
(statearr_205415_205432[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205433 = state_205392;
state_205392 = G__205433;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$state_machine__36014__auto__ = function(state_205392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36014__auto____1.call(this,state_205392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36014__auto____0;
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36014__auto____1;
return cljs$core$async$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___205421,out))
})();
var state__36127__auto__ = (function (){var statearr_205416 = f__36126__auto__.call(null);
(statearr_205416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___205421);

return statearr_205416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___205421,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args205434 = [];
var len__25279__auto___205504 = arguments.length;
var i__25280__auto___205505 = (0);
while(true){
if((i__25280__auto___205505 < len__25279__auto___205504)){
args205434.push((arguments[i__25280__auto___205505]));

var G__205506 = (i__25280__auto___205505 + (1));
i__25280__auto___205505 = G__205506;
continue;
} else {
}
break;
}

var G__205436 = args205434.length;
switch (G__205436) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args205434.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36125__auto___205508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___205508,out){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___205508,out){
return (function (state_205474){
var state_val_205475 = (state_205474[(1)]);
if((state_val_205475 === (7))){
var inst_205470 = (state_205474[(2)]);
var state_205474__$1 = state_205474;
var statearr_205476_205509 = state_205474__$1;
(statearr_205476_205509[(2)] = inst_205470);

(statearr_205476_205509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205475 === (1))){
var inst_205437 = (new Array(n));
var inst_205438 = inst_205437;
var inst_205439 = (0);
var state_205474__$1 = (function (){var statearr_205477 = state_205474;
(statearr_205477[(7)] = inst_205438);

(statearr_205477[(8)] = inst_205439);

return statearr_205477;
})();
var statearr_205478_205510 = state_205474__$1;
(statearr_205478_205510[(2)] = null);

(statearr_205478_205510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205475 === (4))){
var inst_205442 = (state_205474[(9)]);
var inst_205442__$1 = (state_205474[(2)]);
var inst_205443 = (inst_205442__$1 == null);
var inst_205444 = cljs.core.not.call(null,inst_205443);
var state_205474__$1 = (function (){var statearr_205479 = state_205474;
(statearr_205479[(9)] = inst_205442__$1);

return statearr_205479;
})();
if(inst_205444){
var statearr_205480_205511 = state_205474__$1;
(statearr_205480_205511[(1)] = (5));

} else {
var statearr_205481_205512 = state_205474__$1;
(statearr_205481_205512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205475 === (15))){
var inst_205464 = (state_205474[(2)]);
var state_205474__$1 = state_205474;
var statearr_205482_205513 = state_205474__$1;
(statearr_205482_205513[(2)] = inst_205464);

(statearr_205482_205513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205475 === (13))){
var state_205474__$1 = state_205474;
var statearr_205483_205514 = state_205474__$1;
(statearr_205483_205514[(2)] = null);

(statearr_205483_205514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205475 === (6))){
var inst_205439 = (state_205474[(8)]);
var inst_205460 = (inst_205439 > (0));
var state_205474__$1 = state_205474;
if(cljs.core.truth_(inst_205460)){
var statearr_205484_205515 = state_205474__$1;
(statearr_205484_205515[(1)] = (12));

} else {
var statearr_205485_205516 = state_205474__$1;
(statearr_205485_205516[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205475 === (3))){
var inst_205472 = (state_205474[(2)]);
var state_205474__$1 = state_205474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205474__$1,inst_205472);
} else {
if((state_val_205475 === (12))){
var inst_205438 = (state_205474[(7)]);
var inst_205462 = cljs.core.vec.call(null,inst_205438);
var state_205474__$1 = state_205474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205474__$1,(15),out,inst_205462);
} else {
if((state_val_205475 === (2))){
var state_205474__$1 = state_205474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205474__$1,(4),ch);
} else {
if((state_val_205475 === (11))){
var inst_205454 = (state_205474[(2)]);
var inst_205455 = (new Array(n));
var inst_205438 = inst_205455;
var inst_205439 = (0);
var state_205474__$1 = (function (){var statearr_205486 = state_205474;
(statearr_205486[(7)] = inst_205438);

(statearr_205486[(10)] = inst_205454);

(statearr_205486[(8)] = inst_205439);

return statearr_205486;
})();
var statearr_205487_205517 = state_205474__$1;
(statearr_205487_205517[(2)] = null);

(statearr_205487_205517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205475 === (9))){
var inst_205438 = (state_205474[(7)]);
var inst_205452 = cljs.core.vec.call(null,inst_205438);
var state_205474__$1 = state_205474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205474__$1,(11),out,inst_205452);
} else {
if((state_val_205475 === (5))){
var inst_205442 = (state_205474[(9)]);
var inst_205438 = (state_205474[(7)]);
var inst_205447 = (state_205474[(11)]);
var inst_205439 = (state_205474[(8)]);
var inst_205446 = (inst_205438[inst_205439] = inst_205442);
var inst_205447__$1 = (inst_205439 + (1));
var inst_205448 = (inst_205447__$1 < n);
var state_205474__$1 = (function (){var statearr_205488 = state_205474;
(statearr_205488[(12)] = inst_205446);

(statearr_205488[(11)] = inst_205447__$1);

return statearr_205488;
})();
if(cljs.core.truth_(inst_205448)){
var statearr_205489_205518 = state_205474__$1;
(statearr_205489_205518[(1)] = (8));

} else {
var statearr_205490_205519 = state_205474__$1;
(statearr_205490_205519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205475 === (14))){
var inst_205467 = (state_205474[(2)]);
var inst_205468 = cljs.core.async.close_BANG_.call(null,out);
var state_205474__$1 = (function (){var statearr_205492 = state_205474;
(statearr_205492[(13)] = inst_205467);

return statearr_205492;
})();
var statearr_205493_205520 = state_205474__$1;
(statearr_205493_205520[(2)] = inst_205468);

(statearr_205493_205520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205475 === (10))){
var inst_205458 = (state_205474[(2)]);
var state_205474__$1 = state_205474;
var statearr_205494_205521 = state_205474__$1;
(statearr_205494_205521[(2)] = inst_205458);

(statearr_205494_205521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205475 === (8))){
var inst_205438 = (state_205474[(7)]);
var inst_205447 = (state_205474[(11)]);
var tmp205491 = inst_205438;
var inst_205438__$1 = tmp205491;
var inst_205439 = inst_205447;
var state_205474__$1 = (function (){var statearr_205495 = state_205474;
(statearr_205495[(7)] = inst_205438__$1);

(statearr_205495[(8)] = inst_205439);

return statearr_205495;
})();
var statearr_205496_205522 = state_205474__$1;
(statearr_205496_205522[(2)] = null);

(statearr_205496_205522[(1)] = (2));


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
});})(c__36125__auto___205508,out))
;
return ((function (switch__36013__auto__,c__36125__auto___205508,out){
return (function() {
var cljs$core$async$state_machine__36014__auto__ = null;
var cljs$core$async$state_machine__36014__auto____0 = (function (){
var statearr_205500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_205500[(0)] = cljs$core$async$state_machine__36014__auto__);

(statearr_205500[(1)] = (1));

return statearr_205500;
});
var cljs$core$async$state_machine__36014__auto____1 = (function (state_205474){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_205474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e205501){if((e205501 instanceof Object)){
var ex__36017__auto__ = e205501;
var statearr_205502_205523 = state_205474;
(statearr_205502_205523[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205524 = state_205474;
state_205474 = G__205524;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$state_machine__36014__auto__ = function(state_205474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36014__auto____1.call(this,state_205474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36014__auto____0;
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36014__auto____1;
return cljs$core$async$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___205508,out))
})();
var state__36127__auto__ = (function (){var statearr_205503 = f__36126__auto__.call(null);
(statearr_205503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___205508);

return statearr_205503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___205508,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args205525 = [];
var len__25279__auto___205599 = arguments.length;
var i__25280__auto___205600 = (0);
while(true){
if((i__25280__auto___205600 < len__25279__auto___205599)){
args205525.push((arguments[i__25280__auto___205600]));

var G__205601 = (i__25280__auto___205600 + (1));
i__25280__auto___205600 = G__205601;
continue;
} else {
}
break;
}

var G__205527 = args205525.length;
switch (G__205527) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args205525.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36125__auto___205603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___205603,out){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___205603,out){
return (function (state_205569){
var state_val_205570 = (state_205569[(1)]);
if((state_val_205570 === (7))){
var inst_205565 = (state_205569[(2)]);
var state_205569__$1 = state_205569;
var statearr_205571_205604 = state_205569__$1;
(statearr_205571_205604[(2)] = inst_205565);

(statearr_205571_205604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205570 === (1))){
var inst_205528 = [];
var inst_205529 = inst_205528;
var inst_205530 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_205569__$1 = (function (){var statearr_205572 = state_205569;
(statearr_205572[(7)] = inst_205530);

(statearr_205572[(8)] = inst_205529);

return statearr_205572;
})();
var statearr_205573_205605 = state_205569__$1;
(statearr_205573_205605[(2)] = null);

(statearr_205573_205605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205570 === (4))){
var inst_205533 = (state_205569[(9)]);
var inst_205533__$1 = (state_205569[(2)]);
var inst_205534 = (inst_205533__$1 == null);
var inst_205535 = cljs.core.not.call(null,inst_205534);
var state_205569__$1 = (function (){var statearr_205574 = state_205569;
(statearr_205574[(9)] = inst_205533__$1);

return statearr_205574;
})();
if(inst_205535){
var statearr_205575_205606 = state_205569__$1;
(statearr_205575_205606[(1)] = (5));

} else {
var statearr_205576_205607 = state_205569__$1;
(statearr_205576_205607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205570 === (15))){
var inst_205559 = (state_205569[(2)]);
var state_205569__$1 = state_205569;
var statearr_205577_205608 = state_205569__$1;
(statearr_205577_205608[(2)] = inst_205559);

(statearr_205577_205608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205570 === (13))){
var state_205569__$1 = state_205569;
var statearr_205578_205609 = state_205569__$1;
(statearr_205578_205609[(2)] = null);

(statearr_205578_205609[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205570 === (6))){
var inst_205529 = (state_205569[(8)]);
var inst_205554 = inst_205529.length;
var inst_205555 = (inst_205554 > (0));
var state_205569__$1 = state_205569;
if(cljs.core.truth_(inst_205555)){
var statearr_205579_205610 = state_205569__$1;
(statearr_205579_205610[(1)] = (12));

} else {
var statearr_205580_205611 = state_205569__$1;
(statearr_205580_205611[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205570 === (3))){
var inst_205567 = (state_205569[(2)]);
var state_205569__$1 = state_205569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205569__$1,inst_205567);
} else {
if((state_val_205570 === (12))){
var inst_205529 = (state_205569[(8)]);
var inst_205557 = cljs.core.vec.call(null,inst_205529);
var state_205569__$1 = state_205569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205569__$1,(15),out,inst_205557);
} else {
if((state_val_205570 === (2))){
var state_205569__$1 = state_205569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205569__$1,(4),ch);
} else {
if((state_val_205570 === (11))){
var inst_205537 = (state_205569[(10)]);
var inst_205533 = (state_205569[(9)]);
var inst_205547 = (state_205569[(2)]);
var inst_205548 = [];
var inst_205549 = inst_205548.push(inst_205533);
var inst_205529 = inst_205548;
var inst_205530 = inst_205537;
var state_205569__$1 = (function (){var statearr_205581 = state_205569;
(statearr_205581[(11)] = inst_205549);

(statearr_205581[(7)] = inst_205530);

(statearr_205581[(12)] = inst_205547);

(statearr_205581[(8)] = inst_205529);

return statearr_205581;
})();
var statearr_205582_205612 = state_205569__$1;
(statearr_205582_205612[(2)] = null);

(statearr_205582_205612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205570 === (9))){
var inst_205529 = (state_205569[(8)]);
var inst_205545 = cljs.core.vec.call(null,inst_205529);
var state_205569__$1 = state_205569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_205569__$1,(11),out,inst_205545);
} else {
if((state_val_205570 === (5))){
var inst_205537 = (state_205569[(10)]);
var inst_205530 = (state_205569[(7)]);
var inst_205533 = (state_205569[(9)]);
var inst_205537__$1 = f.call(null,inst_205533);
var inst_205538 = cljs.core._EQ_.call(null,inst_205537__$1,inst_205530);
var inst_205539 = cljs.core.keyword_identical_QMARK_.call(null,inst_205530,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_205540 = (inst_205538) || (inst_205539);
var state_205569__$1 = (function (){var statearr_205583 = state_205569;
(statearr_205583[(10)] = inst_205537__$1);

return statearr_205583;
})();
if(cljs.core.truth_(inst_205540)){
var statearr_205584_205613 = state_205569__$1;
(statearr_205584_205613[(1)] = (8));

} else {
var statearr_205585_205614 = state_205569__$1;
(statearr_205585_205614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205570 === (14))){
var inst_205562 = (state_205569[(2)]);
var inst_205563 = cljs.core.async.close_BANG_.call(null,out);
var state_205569__$1 = (function (){var statearr_205587 = state_205569;
(statearr_205587[(13)] = inst_205562);

return statearr_205587;
})();
var statearr_205588_205615 = state_205569__$1;
(statearr_205588_205615[(2)] = inst_205563);

(statearr_205588_205615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205570 === (10))){
var inst_205552 = (state_205569[(2)]);
var state_205569__$1 = state_205569;
var statearr_205589_205616 = state_205569__$1;
(statearr_205589_205616[(2)] = inst_205552);

(statearr_205589_205616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205570 === (8))){
var inst_205537 = (state_205569[(10)]);
var inst_205533 = (state_205569[(9)]);
var inst_205529 = (state_205569[(8)]);
var inst_205542 = inst_205529.push(inst_205533);
var tmp205586 = inst_205529;
var inst_205529__$1 = tmp205586;
var inst_205530 = inst_205537;
var state_205569__$1 = (function (){var statearr_205590 = state_205569;
(statearr_205590[(14)] = inst_205542);

(statearr_205590[(7)] = inst_205530);

(statearr_205590[(8)] = inst_205529__$1);

return statearr_205590;
})();
var statearr_205591_205617 = state_205569__$1;
(statearr_205591_205617[(2)] = null);

(statearr_205591_205617[(1)] = (2));


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
});})(c__36125__auto___205603,out))
;
return ((function (switch__36013__auto__,c__36125__auto___205603,out){
return (function() {
var cljs$core$async$state_machine__36014__auto__ = null;
var cljs$core$async$state_machine__36014__auto____0 = (function (){
var statearr_205595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_205595[(0)] = cljs$core$async$state_machine__36014__auto__);

(statearr_205595[(1)] = (1));

return statearr_205595;
});
var cljs$core$async$state_machine__36014__auto____1 = (function (state_205569){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_205569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e205596){if((e205596 instanceof Object)){
var ex__36017__auto__ = e205596;
var statearr_205597_205618 = state_205569;
(statearr_205597_205618[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205619 = state_205569;
state_205569 = G__205619;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
cljs$core$async$state_machine__36014__auto__ = function(state_205569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36014__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36014__auto____1.call(this,state_205569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36014__auto____0;
cljs$core$async$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36014__auto____1;
return cljs$core$async$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___205603,out))
})();
var state__36127__auto__ = (function (){var statearr_205598 = f__36126__auto__.call(null);
(statearr_205598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___205603);

return statearr_205598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___205603,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map