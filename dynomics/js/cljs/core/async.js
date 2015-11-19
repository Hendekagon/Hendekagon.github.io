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
if(typeof cljs.core.async.t_cljs$core$async376962 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async376962 = (function (fn_handler,f,meta376963){
this.fn_handler = fn_handler;
this.f = f;
this.meta376963 = meta376963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async376962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_376964,meta376963__$1){
var self__ = this;
var _376964__$1 = this;
return (new cljs.core.async.t_cljs$core$async376962(self__.fn_handler,self__.f,meta376963__$1));
});

cljs.core.async.t_cljs$core$async376962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_376964){
var self__ = this;
var _376964__$1 = this;
return self__.meta376963;
});

cljs.core.async.t_cljs$core$async376962.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async376962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async376962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async376962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta376963","meta376963",2008244449,null)], null);
});

cljs.core.async.t_cljs$core$async376962.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async376962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async376962";

cljs.core.async.t_cljs$core$async376962.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async376962");
});

cljs.core.async.__GT_t_cljs$core$async376962 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async376962(fn_handler__$1,f__$1,meta376963){
return (new cljs.core.async.t_cljs$core$async376962(fn_handler__$1,f__$1,meta376963));
});

}

return (new cljs.core.async.t_cljs$core$async376962(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args376967 = [];
var len__25219__auto___376970 = arguments.length;
var i__25220__auto___376971 = (0);
while(true){
if((i__25220__auto___376971 < len__25219__auto___376970)){
args376967.push((arguments[i__25220__auto___376971]));

var G__376972 = (i__25220__auto___376971 + (1));
i__25220__auto___376971 = G__376972;
continue;
} else {
}
break;
}

var G__376969 = args376967.length;
switch (G__376969) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376967.length)].join('')));

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
var args376974 = [];
var len__25219__auto___376977 = arguments.length;
var i__25220__auto___376978 = (0);
while(true){
if((i__25220__auto___376978 < len__25219__auto___376977)){
args376974.push((arguments[i__25220__auto___376978]));

var G__376979 = (i__25220__auto___376978 + (1));
i__25220__auto___376978 = G__376979;
continue;
} else {
}
break;
}

var G__376976 = args376974.length;
switch (G__376976) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376974.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_376981 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_376981);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_376981,ret){
return (function (){
return fn1.call(null,val_376981);
});})(val_376981,ret))
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
var args376982 = [];
var len__25219__auto___376985 = arguments.length;
var i__25220__auto___376986 = (0);
while(true){
if((i__25220__auto___376986 < len__25219__auto___376985)){
args376982.push((arguments[i__25220__auto___376986]));

var G__376987 = (i__25220__auto___376986 + (1));
i__25220__auto___376986 = G__376987;
continue;
} else {
}
break;
}

var G__376984 = args376982.length;
switch (G__376984) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args376982.length)].join('')));

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
var n__25064__auto___376989 = n;
var x_376990 = (0);
while(true){
if((x_376990 < n__25064__auto___376989)){
(a[x_376990] = (0));

var G__376991 = (x_376990 + (1));
x_376990 = G__376991;
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

var G__376992 = (i + (1));
i = G__376992;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async376996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async376996 = (function (alt_flag,flag,meta376997){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta376997 = meta376997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async376996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_376998,meta376997__$1){
var self__ = this;
var _376998__$1 = this;
return (new cljs.core.async.t_cljs$core$async376996(self__.alt_flag,self__.flag,meta376997__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async376996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_376998){
var self__ = this;
var _376998__$1 = this;
return self__.meta376997;
});})(flag))
;

cljs.core.async.t_cljs$core$async376996.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async376996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async376996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async376996.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta376997","meta376997",286009922,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async376996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async376996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async376996";

cljs.core.async.t_cljs$core$async376996.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async376996");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async376996 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async376996(alt_flag__$1,flag__$1,meta376997){
return (new cljs.core.async.t_cljs$core$async376996(alt_flag__$1,flag__$1,meta376997));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async376996(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async377002 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async377002 = (function (alt_handler,flag,cb,meta377003){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta377003 = meta377003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async377002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_377004,meta377003__$1){
var self__ = this;
var _377004__$1 = this;
return (new cljs.core.async.t_cljs$core$async377002(self__.alt_handler,self__.flag,self__.cb,meta377003__$1));
});

cljs.core.async.t_cljs$core$async377002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_377004){
var self__ = this;
var _377004__$1 = this;
return self__.meta377003;
});

cljs.core.async.t_cljs$core$async377002.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async377002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async377002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async377002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta377003","meta377003",-512614768,null)], null);
});

cljs.core.async.t_cljs$core$async377002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async377002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async377002";

cljs.core.async.t_cljs$core$async377002.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async377002");
});

cljs.core.async.__GT_t_cljs$core$async377002 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async377002(alt_handler__$1,flag__$1,cb__$1,meta377003){
return (new cljs.core.async.t_cljs$core$async377002(alt_handler__$1,flag__$1,cb__$1,meta377003));
});

}

return (new cljs.core.async.t_cljs$core$async377002(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__377005_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__377005_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__377006_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__377006_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24161__auto__ = wport;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return port;
}
})()], null));
} else {
var G__377007 = (i + (1));
i = G__377007;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24161__auto__ = ret;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__24149__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24149__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24149__auto__;
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
var args__25226__auto__ = [];
var len__25219__auto___377013 = arguments.length;
var i__25220__auto___377014 = (0);
while(true){
if((i__25220__auto___377014 < len__25219__auto___377013)){
args__25226__auto__.push((arguments[i__25220__auto___377014]));

var G__377015 = (i__25220__auto___377014 + (1));
i__25220__auto___377014 = G__377015;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__377010){
var map__377011 = p__377010;
var map__377011__$1 = ((((!((map__377011 == null)))?((((map__377011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377011):map__377011);
var opts = map__377011__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq377008){
var G__377009 = cljs.core.first.call(null,seq377008);
var seq377008__$1 = cljs.core.next.call(null,seq377008);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__377009,seq377008__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args377016 = [];
var len__25219__auto___377066 = arguments.length;
var i__25220__auto___377067 = (0);
while(true){
if((i__25220__auto___377067 < len__25219__auto___377066)){
args377016.push((arguments[i__25220__auto___377067]));

var G__377068 = (i__25220__auto___377067 + (1));
i__25220__auto___377067 = G__377068;
continue;
} else {
}
break;
}

var G__377018 = args377016.length;
switch (G__377018) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args377016.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35562__auto___377070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___377070){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___377070){
return (function (state_377042){
var state_val_377043 = (state_377042[(1)]);
if((state_val_377043 === (7))){
var inst_377038 = (state_377042[(2)]);
var state_377042__$1 = state_377042;
var statearr_377044_377071 = state_377042__$1;
(statearr_377044_377071[(2)] = inst_377038);

(statearr_377044_377071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377043 === (1))){
var state_377042__$1 = state_377042;
var statearr_377045_377072 = state_377042__$1;
(statearr_377045_377072[(2)] = null);

(statearr_377045_377072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377043 === (4))){
var inst_377021 = (state_377042[(7)]);
var inst_377021__$1 = (state_377042[(2)]);
var inst_377022 = (inst_377021__$1 == null);
var state_377042__$1 = (function (){var statearr_377046 = state_377042;
(statearr_377046[(7)] = inst_377021__$1);

return statearr_377046;
})();
if(cljs.core.truth_(inst_377022)){
var statearr_377047_377073 = state_377042__$1;
(statearr_377047_377073[(1)] = (5));

} else {
var statearr_377048_377074 = state_377042__$1;
(statearr_377048_377074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377043 === (13))){
var state_377042__$1 = state_377042;
var statearr_377049_377075 = state_377042__$1;
(statearr_377049_377075[(2)] = null);

(statearr_377049_377075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377043 === (6))){
var inst_377021 = (state_377042[(7)]);
var state_377042__$1 = state_377042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_377042__$1,(11),to,inst_377021);
} else {
if((state_val_377043 === (3))){
var inst_377040 = (state_377042[(2)]);
var state_377042__$1 = state_377042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_377042__$1,inst_377040);
} else {
if((state_val_377043 === (12))){
var state_377042__$1 = state_377042;
var statearr_377050_377076 = state_377042__$1;
(statearr_377050_377076[(2)] = null);

(statearr_377050_377076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377043 === (2))){
var state_377042__$1 = state_377042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_377042__$1,(4),from);
} else {
if((state_val_377043 === (11))){
var inst_377031 = (state_377042[(2)]);
var state_377042__$1 = state_377042;
if(cljs.core.truth_(inst_377031)){
var statearr_377051_377077 = state_377042__$1;
(statearr_377051_377077[(1)] = (12));

} else {
var statearr_377052_377078 = state_377042__$1;
(statearr_377052_377078[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377043 === (9))){
var state_377042__$1 = state_377042;
var statearr_377053_377079 = state_377042__$1;
(statearr_377053_377079[(2)] = null);

(statearr_377053_377079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377043 === (5))){
var state_377042__$1 = state_377042;
if(cljs.core.truth_(close_QMARK_)){
var statearr_377054_377080 = state_377042__$1;
(statearr_377054_377080[(1)] = (8));

} else {
var statearr_377055_377081 = state_377042__$1;
(statearr_377055_377081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377043 === (14))){
var inst_377036 = (state_377042[(2)]);
var state_377042__$1 = state_377042;
var statearr_377056_377082 = state_377042__$1;
(statearr_377056_377082[(2)] = inst_377036);

(statearr_377056_377082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377043 === (10))){
var inst_377028 = (state_377042[(2)]);
var state_377042__$1 = state_377042;
var statearr_377057_377083 = state_377042__$1;
(statearr_377057_377083[(2)] = inst_377028);

(statearr_377057_377083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377043 === (8))){
var inst_377025 = cljs.core.async.close_BANG_.call(null,to);
var state_377042__$1 = state_377042;
var statearr_377058_377084 = state_377042__$1;
(statearr_377058_377084[(2)] = inst_377025);

(statearr_377058_377084[(1)] = (10));


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
});})(c__35562__auto___377070))
;
return ((function (switch__35450__auto__,c__35562__auto___377070){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_377062 = [null,null,null,null,null,null,null,null];
(statearr_377062[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_377062[(1)] = (1));

return statearr_377062;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_377042){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_377042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e377063){if((e377063 instanceof Object)){
var ex__35454__auto__ = e377063;
var statearr_377064_377085 = state_377042;
(statearr_377064_377085[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_377042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e377063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__377086 = state_377042;
state_377042 = G__377086;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_377042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_377042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___377070))
})();
var state__35564__auto__ = (function (){var statearr_377065 = f__35563__auto__.call(null);
(statearr_377065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___377070);

return statearr_377065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___377070))
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
return (function (p__377270){
var vec__377271 = p__377270;
var v = cljs.core.nth.call(null,vec__377271,(0),null);
var p = cljs.core.nth.call(null,vec__377271,(1),null);
var job = vec__377271;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35562__auto___377453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___377453,res,vec__377271,v,p,job,jobs,results){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___377453,res,vec__377271,v,p,job,jobs,results){
return (function (state_377276){
var state_val_377277 = (state_377276[(1)]);
if((state_val_377277 === (1))){
var state_377276__$1 = state_377276;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_377276__$1,(2),res,v);
} else {
if((state_val_377277 === (2))){
var inst_377273 = (state_377276[(2)]);
var inst_377274 = cljs.core.async.close_BANG_.call(null,res);
var state_377276__$1 = (function (){var statearr_377278 = state_377276;
(statearr_377278[(7)] = inst_377273);

return statearr_377278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_377276__$1,inst_377274);
} else {
return null;
}
}
});})(c__35562__auto___377453,res,vec__377271,v,p,job,jobs,results))
;
return ((function (switch__35450__auto__,c__35562__auto___377453,res,vec__377271,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0 = (function (){
var statearr_377282 = [null,null,null,null,null,null,null,null];
(statearr_377282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__);

(statearr_377282[(1)] = (1));

return statearr_377282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1 = (function (state_377276){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_377276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e377283){if((e377283 instanceof Object)){
var ex__35454__auto__ = e377283;
var statearr_377284_377454 = state_377276;
(statearr_377284_377454[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_377276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e377283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__377455 = state_377276;
state_377276 = G__377455;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = function(state_377276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1.call(this,state_377276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___377453,res,vec__377271,v,p,job,jobs,results))
})();
var state__35564__auto__ = (function (){var statearr_377285 = f__35563__auto__.call(null);
(statearr_377285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___377453);

return statearr_377285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___377453,res,vec__377271,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__377286){
var vec__377287 = p__377286;
var v = cljs.core.nth.call(null,vec__377287,(0),null);
var p = cljs.core.nth.call(null,vec__377287,(1),null);
var job = vec__377287;
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
var n__25064__auto___377456 = n;
var __377457 = (0);
while(true){
if((__377457 < n__25064__auto___377456)){
var G__377288_377458 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__377288_377458) {
case "compute":
var c__35562__auto___377460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__377457,c__35562__auto___377460,G__377288_377458,n__25064__auto___377456,jobs,results,process,async){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (__377457,c__35562__auto___377460,G__377288_377458,n__25064__auto___377456,jobs,results,process,async){
return (function (state_377301){
var state_val_377302 = (state_377301[(1)]);
if((state_val_377302 === (1))){
var state_377301__$1 = state_377301;
var statearr_377303_377461 = state_377301__$1;
(statearr_377303_377461[(2)] = null);

(statearr_377303_377461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377302 === (2))){
var state_377301__$1 = state_377301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_377301__$1,(4),jobs);
} else {
if((state_val_377302 === (3))){
var inst_377299 = (state_377301[(2)]);
var state_377301__$1 = state_377301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_377301__$1,inst_377299);
} else {
if((state_val_377302 === (4))){
var inst_377291 = (state_377301[(2)]);
var inst_377292 = process.call(null,inst_377291);
var state_377301__$1 = state_377301;
if(cljs.core.truth_(inst_377292)){
var statearr_377304_377462 = state_377301__$1;
(statearr_377304_377462[(1)] = (5));

} else {
var statearr_377305_377463 = state_377301__$1;
(statearr_377305_377463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377302 === (5))){
var state_377301__$1 = state_377301;
var statearr_377306_377464 = state_377301__$1;
(statearr_377306_377464[(2)] = null);

(statearr_377306_377464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377302 === (6))){
var state_377301__$1 = state_377301;
var statearr_377307_377465 = state_377301__$1;
(statearr_377307_377465[(2)] = null);

(statearr_377307_377465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377302 === (7))){
var inst_377297 = (state_377301[(2)]);
var state_377301__$1 = state_377301;
var statearr_377308_377466 = state_377301__$1;
(statearr_377308_377466[(2)] = inst_377297);

(statearr_377308_377466[(1)] = (3));


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
});})(__377457,c__35562__auto___377460,G__377288_377458,n__25064__auto___377456,jobs,results,process,async))
;
return ((function (__377457,switch__35450__auto__,c__35562__auto___377460,G__377288_377458,n__25064__auto___377456,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0 = (function (){
var statearr_377312 = [null,null,null,null,null,null,null];
(statearr_377312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__);

(statearr_377312[(1)] = (1));

return statearr_377312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1 = (function (state_377301){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_377301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e377313){if((e377313 instanceof Object)){
var ex__35454__auto__ = e377313;
var statearr_377314_377467 = state_377301;
(statearr_377314_377467[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_377301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e377313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__377468 = state_377301;
state_377301 = G__377468;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = function(state_377301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1.call(this,state_377301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__;
})()
;})(__377457,switch__35450__auto__,c__35562__auto___377460,G__377288_377458,n__25064__auto___377456,jobs,results,process,async))
})();
var state__35564__auto__ = (function (){var statearr_377315 = f__35563__auto__.call(null);
(statearr_377315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___377460);

return statearr_377315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(__377457,c__35562__auto___377460,G__377288_377458,n__25064__auto___377456,jobs,results,process,async))
);


break;
case "async":
var c__35562__auto___377469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__377457,c__35562__auto___377469,G__377288_377458,n__25064__auto___377456,jobs,results,process,async){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (__377457,c__35562__auto___377469,G__377288_377458,n__25064__auto___377456,jobs,results,process,async){
return (function (state_377328){
var state_val_377329 = (state_377328[(1)]);
if((state_val_377329 === (1))){
var state_377328__$1 = state_377328;
var statearr_377330_377470 = state_377328__$1;
(statearr_377330_377470[(2)] = null);

(statearr_377330_377470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377329 === (2))){
var state_377328__$1 = state_377328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_377328__$1,(4),jobs);
} else {
if((state_val_377329 === (3))){
var inst_377326 = (state_377328[(2)]);
var state_377328__$1 = state_377328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_377328__$1,inst_377326);
} else {
if((state_val_377329 === (4))){
var inst_377318 = (state_377328[(2)]);
var inst_377319 = async.call(null,inst_377318);
var state_377328__$1 = state_377328;
if(cljs.core.truth_(inst_377319)){
var statearr_377331_377471 = state_377328__$1;
(statearr_377331_377471[(1)] = (5));

} else {
var statearr_377332_377472 = state_377328__$1;
(statearr_377332_377472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377329 === (5))){
var state_377328__$1 = state_377328;
var statearr_377333_377473 = state_377328__$1;
(statearr_377333_377473[(2)] = null);

(statearr_377333_377473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377329 === (6))){
var state_377328__$1 = state_377328;
var statearr_377334_377474 = state_377328__$1;
(statearr_377334_377474[(2)] = null);

(statearr_377334_377474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377329 === (7))){
var inst_377324 = (state_377328[(2)]);
var state_377328__$1 = state_377328;
var statearr_377335_377475 = state_377328__$1;
(statearr_377335_377475[(2)] = inst_377324);

(statearr_377335_377475[(1)] = (3));


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
});})(__377457,c__35562__auto___377469,G__377288_377458,n__25064__auto___377456,jobs,results,process,async))
;
return ((function (__377457,switch__35450__auto__,c__35562__auto___377469,G__377288_377458,n__25064__auto___377456,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0 = (function (){
var statearr_377339 = [null,null,null,null,null,null,null];
(statearr_377339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__);

(statearr_377339[(1)] = (1));

return statearr_377339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1 = (function (state_377328){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_377328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e377340){if((e377340 instanceof Object)){
var ex__35454__auto__ = e377340;
var statearr_377341_377476 = state_377328;
(statearr_377341_377476[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_377328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e377340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__377477 = state_377328;
state_377328 = G__377477;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = function(state_377328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1.call(this,state_377328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__;
})()
;})(__377457,switch__35450__auto__,c__35562__auto___377469,G__377288_377458,n__25064__auto___377456,jobs,results,process,async))
})();
var state__35564__auto__ = (function (){var statearr_377342 = f__35563__auto__.call(null);
(statearr_377342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___377469);

return statearr_377342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(__377457,c__35562__auto___377469,G__377288_377458,n__25064__auto___377456,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__377478 = (__377457 + (1));
__377457 = G__377478;
continue;
} else {
}
break;
}

var c__35562__auto___377479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___377479,jobs,results,process,async){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___377479,jobs,results,process,async){
return (function (state_377364){
var state_val_377365 = (state_377364[(1)]);
if((state_val_377365 === (1))){
var state_377364__$1 = state_377364;
var statearr_377366_377480 = state_377364__$1;
(statearr_377366_377480[(2)] = null);

(statearr_377366_377480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377365 === (2))){
var state_377364__$1 = state_377364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_377364__$1,(4),from);
} else {
if((state_val_377365 === (3))){
var inst_377362 = (state_377364[(2)]);
var state_377364__$1 = state_377364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_377364__$1,inst_377362);
} else {
if((state_val_377365 === (4))){
var inst_377345 = (state_377364[(7)]);
var inst_377345__$1 = (state_377364[(2)]);
var inst_377346 = (inst_377345__$1 == null);
var state_377364__$1 = (function (){var statearr_377367 = state_377364;
(statearr_377367[(7)] = inst_377345__$1);

return statearr_377367;
})();
if(cljs.core.truth_(inst_377346)){
var statearr_377368_377481 = state_377364__$1;
(statearr_377368_377481[(1)] = (5));

} else {
var statearr_377369_377482 = state_377364__$1;
(statearr_377369_377482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377365 === (5))){
var inst_377348 = cljs.core.async.close_BANG_.call(null,jobs);
var state_377364__$1 = state_377364;
var statearr_377370_377483 = state_377364__$1;
(statearr_377370_377483[(2)] = inst_377348);

(statearr_377370_377483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377365 === (6))){
var inst_377345 = (state_377364[(7)]);
var inst_377350 = (state_377364[(8)]);
var inst_377350__$1 = cljs.core.async.chan.call(null,(1));
var inst_377351 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_377352 = [inst_377345,inst_377350__$1];
var inst_377353 = (new cljs.core.PersistentVector(null,2,(5),inst_377351,inst_377352,null));
var state_377364__$1 = (function (){var statearr_377371 = state_377364;
(statearr_377371[(8)] = inst_377350__$1);

return statearr_377371;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_377364__$1,(8),jobs,inst_377353);
} else {
if((state_val_377365 === (7))){
var inst_377360 = (state_377364[(2)]);
var state_377364__$1 = state_377364;
var statearr_377372_377484 = state_377364__$1;
(statearr_377372_377484[(2)] = inst_377360);

(statearr_377372_377484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377365 === (8))){
var inst_377350 = (state_377364[(8)]);
var inst_377355 = (state_377364[(2)]);
var state_377364__$1 = (function (){var statearr_377373 = state_377364;
(statearr_377373[(9)] = inst_377355);

return statearr_377373;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_377364__$1,(9),results,inst_377350);
} else {
if((state_val_377365 === (9))){
var inst_377357 = (state_377364[(2)]);
var state_377364__$1 = (function (){var statearr_377374 = state_377364;
(statearr_377374[(10)] = inst_377357);

return statearr_377374;
})();
var statearr_377375_377485 = state_377364__$1;
(statearr_377375_377485[(2)] = null);

(statearr_377375_377485[(1)] = (2));


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
});})(c__35562__auto___377479,jobs,results,process,async))
;
return ((function (switch__35450__auto__,c__35562__auto___377479,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0 = (function (){
var statearr_377379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_377379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__);

(statearr_377379[(1)] = (1));

return statearr_377379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1 = (function (state_377364){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_377364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e377380){if((e377380 instanceof Object)){
var ex__35454__auto__ = e377380;
var statearr_377381_377486 = state_377364;
(statearr_377381_377486[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_377364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e377380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__377487 = state_377364;
state_377364 = G__377487;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = function(state_377364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1.call(this,state_377364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___377479,jobs,results,process,async))
})();
var state__35564__auto__ = (function (){var statearr_377382 = f__35563__auto__.call(null);
(statearr_377382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___377479);

return statearr_377382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___377479,jobs,results,process,async))
);


var c__35562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto__,jobs,results,process,async){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto__,jobs,results,process,async){
return (function (state_377420){
var state_val_377421 = (state_377420[(1)]);
if((state_val_377421 === (7))){
var inst_377416 = (state_377420[(2)]);
var state_377420__$1 = state_377420;
var statearr_377422_377488 = state_377420__$1;
(statearr_377422_377488[(2)] = inst_377416);

(statearr_377422_377488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (20))){
var state_377420__$1 = state_377420;
var statearr_377423_377489 = state_377420__$1;
(statearr_377423_377489[(2)] = null);

(statearr_377423_377489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (1))){
var state_377420__$1 = state_377420;
var statearr_377424_377490 = state_377420__$1;
(statearr_377424_377490[(2)] = null);

(statearr_377424_377490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (4))){
var inst_377385 = (state_377420[(7)]);
var inst_377385__$1 = (state_377420[(2)]);
var inst_377386 = (inst_377385__$1 == null);
var state_377420__$1 = (function (){var statearr_377425 = state_377420;
(statearr_377425[(7)] = inst_377385__$1);

return statearr_377425;
})();
if(cljs.core.truth_(inst_377386)){
var statearr_377426_377491 = state_377420__$1;
(statearr_377426_377491[(1)] = (5));

} else {
var statearr_377427_377492 = state_377420__$1;
(statearr_377427_377492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (15))){
var inst_377398 = (state_377420[(8)]);
var state_377420__$1 = state_377420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_377420__$1,(18),to,inst_377398);
} else {
if((state_val_377421 === (21))){
var inst_377411 = (state_377420[(2)]);
var state_377420__$1 = state_377420;
var statearr_377428_377493 = state_377420__$1;
(statearr_377428_377493[(2)] = inst_377411);

(statearr_377428_377493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (13))){
var inst_377413 = (state_377420[(2)]);
var state_377420__$1 = (function (){var statearr_377429 = state_377420;
(statearr_377429[(9)] = inst_377413);

return statearr_377429;
})();
var statearr_377430_377494 = state_377420__$1;
(statearr_377430_377494[(2)] = null);

(statearr_377430_377494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (6))){
var inst_377385 = (state_377420[(7)]);
var state_377420__$1 = state_377420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_377420__$1,(11),inst_377385);
} else {
if((state_val_377421 === (17))){
var inst_377406 = (state_377420[(2)]);
var state_377420__$1 = state_377420;
if(cljs.core.truth_(inst_377406)){
var statearr_377431_377495 = state_377420__$1;
(statearr_377431_377495[(1)] = (19));

} else {
var statearr_377432_377496 = state_377420__$1;
(statearr_377432_377496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (3))){
var inst_377418 = (state_377420[(2)]);
var state_377420__$1 = state_377420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_377420__$1,inst_377418);
} else {
if((state_val_377421 === (12))){
var inst_377395 = (state_377420[(10)]);
var state_377420__$1 = state_377420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_377420__$1,(14),inst_377395);
} else {
if((state_val_377421 === (2))){
var state_377420__$1 = state_377420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_377420__$1,(4),results);
} else {
if((state_val_377421 === (19))){
var state_377420__$1 = state_377420;
var statearr_377433_377497 = state_377420__$1;
(statearr_377433_377497[(2)] = null);

(statearr_377433_377497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (11))){
var inst_377395 = (state_377420[(2)]);
var state_377420__$1 = (function (){var statearr_377434 = state_377420;
(statearr_377434[(10)] = inst_377395);

return statearr_377434;
})();
var statearr_377435_377498 = state_377420__$1;
(statearr_377435_377498[(2)] = null);

(statearr_377435_377498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (9))){
var state_377420__$1 = state_377420;
var statearr_377436_377499 = state_377420__$1;
(statearr_377436_377499[(2)] = null);

(statearr_377436_377499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (5))){
var state_377420__$1 = state_377420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_377437_377500 = state_377420__$1;
(statearr_377437_377500[(1)] = (8));

} else {
var statearr_377438_377501 = state_377420__$1;
(statearr_377438_377501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (14))){
var inst_377400 = (state_377420[(11)]);
var inst_377398 = (state_377420[(8)]);
var inst_377398__$1 = (state_377420[(2)]);
var inst_377399 = (inst_377398__$1 == null);
var inst_377400__$1 = cljs.core.not.call(null,inst_377399);
var state_377420__$1 = (function (){var statearr_377439 = state_377420;
(statearr_377439[(11)] = inst_377400__$1);

(statearr_377439[(8)] = inst_377398__$1);

return statearr_377439;
})();
if(inst_377400__$1){
var statearr_377440_377502 = state_377420__$1;
(statearr_377440_377502[(1)] = (15));

} else {
var statearr_377441_377503 = state_377420__$1;
(statearr_377441_377503[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (16))){
var inst_377400 = (state_377420[(11)]);
var state_377420__$1 = state_377420;
var statearr_377442_377504 = state_377420__$1;
(statearr_377442_377504[(2)] = inst_377400);

(statearr_377442_377504[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (10))){
var inst_377392 = (state_377420[(2)]);
var state_377420__$1 = state_377420;
var statearr_377443_377505 = state_377420__$1;
(statearr_377443_377505[(2)] = inst_377392);

(statearr_377443_377505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (18))){
var inst_377403 = (state_377420[(2)]);
var state_377420__$1 = state_377420;
var statearr_377444_377506 = state_377420__$1;
(statearr_377444_377506[(2)] = inst_377403);

(statearr_377444_377506[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377421 === (8))){
var inst_377389 = cljs.core.async.close_BANG_.call(null,to);
var state_377420__$1 = state_377420;
var statearr_377445_377507 = state_377420__$1;
(statearr_377445_377507[(2)] = inst_377389);

(statearr_377445_377507[(1)] = (10));


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
});})(c__35562__auto__,jobs,results,process,async))
;
return ((function (switch__35450__auto__,c__35562__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0 = (function (){
var statearr_377449 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_377449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__);

(statearr_377449[(1)] = (1));

return statearr_377449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1 = (function (state_377420){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_377420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e377450){if((e377450 instanceof Object)){
var ex__35454__auto__ = e377450;
var statearr_377451_377508 = state_377420;
(statearr_377451_377508[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_377420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e377450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__377509 = state_377420;
state_377420 = G__377509;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = function(state_377420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1.call(this,state_377420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto__,jobs,results,process,async))
})();
var state__35564__auto__ = (function (){var statearr_377452 = f__35563__auto__.call(null);
(statearr_377452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto__);

return statearr_377452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto__,jobs,results,process,async))
);

return c__35562__auto__;
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
var args377510 = [];
var len__25219__auto___377513 = arguments.length;
var i__25220__auto___377514 = (0);
while(true){
if((i__25220__auto___377514 < len__25219__auto___377513)){
args377510.push((arguments[i__25220__auto___377514]));

var G__377515 = (i__25220__auto___377514 + (1));
i__25220__auto___377514 = G__377515;
continue;
} else {
}
break;
}

var G__377512 = args377510.length;
switch (G__377512) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args377510.length)].join('')));

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
var args377517 = [];
var len__25219__auto___377520 = arguments.length;
var i__25220__auto___377521 = (0);
while(true){
if((i__25220__auto___377521 < len__25219__auto___377520)){
args377517.push((arguments[i__25220__auto___377521]));

var G__377522 = (i__25220__auto___377521 + (1));
i__25220__auto___377521 = G__377522;
continue;
} else {
}
break;
}

var G__377519 = args377517.length;
switch (G__377519) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args377517.length)].join('')));

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
var args377524 = [];
var len__25219__auto___377577 = arguments.length;
var i__25220__auto___377578 = (0);
while(true){
if((i__25220__auto___377578 < len__25219__auto___377577)){
args377524.push((arguments[i__25220__auto___377578]));

var G__377579 = (i__25220__auto___377578 + (1));
i__25220__auto___377578 = G__377579;
continue;
} else {
}
break;
}

var G__377526 = args377524.length;
switch (G__377526) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args377524.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35562__auto___377581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___377581,tc,fc){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___377581,tc,fc){
return (function (state_377552){
var state_val_377553 = (state_377552[(1)]);
if((state_val_377553 === (7))){
var inst_377548 = (state_377552[(2)]);
var state_377552__$1 = state_377552;
var statearr_377554_377582 = state_377552__$1;
(statearr_377554_377582[(2)] = inst_377548);

(statearr_377554_377582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377553 === (1))){
var state_377552__$1 = state_377552;
var statearr_377555_377583 = state_377552__$1;
(statearr_377555_377583[(2)] = null);

(statearr_377555_377583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377553 === (4))){
var inst_377529 = (state_377552[(7)]);
var inst_377529__$1 = (state_377552[(2)]);
var inst_377530 = (inst_377529__$1 == null);
var state_377552__$1 = (function (){var statearr_377556 = state_377552;
(statearr_377556[(7)] = inst_377529__$1);

return statearr_377556;
})();
if(cljs.core.truth_(inst_377530)){
var statearr_377557_377584 = state_377552__$1;
(statearr_377557_377584[(1)] = (5));

} else {
var statearr_377558_377585 = state_377552__$1;
(statearr_377558_377585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377553 === (13))){
var state_377552__$1 = state_377552;
var statearr_377559_377586 = state_377552__$1;
(statearr_377559_377586[(2)] = null);

(statearr_377559_377586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377553 === (6))){
var inst_377529 = (state_377552[(7)]);
var inst_377535 = p.call(null,inst_377529);
var state_377552__$1 = state_377552;
if(cljs.core.truth_(inst_377535)){
var statearr_377560_377587 = state_377552__$1;
(statearr_377560_377587[(1)] = (9));

} else {
var statearr_377561_377588 = state_377552__$1;
(statearr_377561_377588[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377553 === (3))){
var inst_377550 = (state_377552[(2)]);
var state_377552__$1 = state_377552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_377552__$1,inst_377550);
} else {
if((state_val_377553 === (12))){
var state_377552__$1 = state_377552;
var statearr_377562_377589 = state_377552__$1;
(statearr_377562_377589[(2)] = null);

(statearr_377562_377589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377553 === (2))){
var state_377552__$1 = state_377552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_377552__$1,(4),ch);
} else {
if((state_val_377553 === (11))){
var inst_377529 = (state_377552[(7)]);
var inst_377539 = (state_377552[(2)]);
var state_377552__$1 = state_377552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_377552__$1,(8),inst_377539,inst_377529);
} else {
if((state_val_377553 === (9))){
var state_377552__$1 = state_377552;
var statearr_377563_377590 = state_377552__$1;
(statearr_377563_377590[(2)] = tc);

(statearr_377563_377590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377553 === (5))){
var inst_377532 = cljs.core.async.close_BANG_.call(null,tc);
var inst_377533 = cljs.core.async.close_BANG_.call(null,fc);
var state_377552__$1 = (function (){var statearr_377564 = state_377552;
(statearr_377564[(8)] = inst_377532);

return statearr_377564;
})();
var statearr_377565_377591 = state_377552__$1;
(statearr_377565_377591[(2)] = inst_377533);

(statearr_377565_377591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377553 === (14))){
var inst_377546 = (state_377552[(2)]);
var state_377552__$1 = state_377552;
var statearr_377566_377592 = state_377552__$1;
(statearr_377566_377592[(2)] = inst_377546);

(statearr_377566_377592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377553 === (10))){
var state_377552__$1 = state_377552;
var statearr_377567_377593 = state_377552__$1;
(statearr_377567_377593[(2)] = fc);

(statearr_377567_377593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377553 === (8))){
var inst_377541 = (state_377552[(2)]);
var state_377552__$1 = state_377552;
if(cljs.core.truth_(inst_377541)){
var statearr_377568_377594 = state_377552__$1;
(statearr_377568_377594[(1)] = (12));

} else {
var statearr_377569_377595 = state_377552__$1;
(statearr_377569_377595[(1)] = (13));

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
});})(c__35562__auto___377581,tc,fc))
;
return ((function (switch__35450__auto__,c__35562__auto___377581,tc,fc){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_377573 = [null,null,null,null,null,null,null,null,null];
(statearr_377573[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_377573[(1)] = (1));

return statearr_377573;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_377552){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_377552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e377574){if((e377574 instanceof Object)){
var ex__35454__auto__ = e377574;
var statearr_377575_377596 = state_377552;
(statearr_377575_377596[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_377552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e377574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__377597 = state_377552;
state_377552 = G__377597;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_377552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_377552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___377581,tc,fc))
})();
var state__35564__auto__ = (function (){var statearr_377576 = f__35563__auto__.call(null);
(statearr_377576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___377581);

return statearr_377576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___377581,tc,fc))
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
var c__35562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto__){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto__){
return (function (state_377644){
var state_val_377645 = (state_377644[(1)]);
if((state_val_377645 === (1))){
var inst_377630 = init;
var state_377644__$1 = (function (){var statearr_377646 = state_377644;
(statearr_377646[(7)] = inst_377630);

return statearr_377646;
})();
var statearr_377647_377662 = state_377644__$1;
(statearr_377647_377662[(2)] = null);

(statearr_377647_377662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377645 === (2))){
var state_377644__$1 = state_377644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_377644__$1,(4),ch);
} else {
if((state_val_377645 === (3))){
var inst_377642 = (state_377644[(2)]);
var state_377644__$1 = state_377644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_377644__$1,inst_377642);
} else {
if((state_val_377645 === (4))){
var inst_377633 = (state_377644[(8)]);
var inst_377633__$1 = (state_377644[(2)]);
var inst_377634 = (inst_377633__$1 == null);
var state_377644__$1 = (function (){var statearr_377648 = state_377644;
(statearr_377648[(8)] = inst_377633__$1);

return statearr_377648;
})();
if(cljs.core.truth_(inst_377634)){
var statearr_377649_377663 = state_377644__$1;
(statearr_377649_377663[(1)] = (5));

} else {
var statearr_377650_377664 = state_377644__$1;
(statearr_377650_377664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377645 === (5))){
var inst_377630 = (state_377644[(7)]);
var state_377644__$1 = state_377644;
var statearr_377651_377665 = state_377644__$1;
(statearr_377651_377665[(2)] = inst_377630);

(statearr_377651_377665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377645 === (6))){
var inst_377633 = (state_377644[(8)]);
var inst_377630 = (state_377644[(7)]);
var inst_377637 = f.call(null,inst_377630,inst_377633);
var inst_377630__$1 = inst_377637;
var state_377644__$1 = (function (){var statearr_377652 = state_377644;
(statearr_377652[(7)] = inst_377630__$1);

return statearr_377652;
})();
var statearr_377653_377666 = state_377644__$1;
(statearr_377653_377666[(2)] = null);

(statearr_377653_377666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377645 === (7))){
var inst_377640 = (state_377644[(2)]);
var state_377644__$1 = state_377644;
var statearr_377654_377667 = state_377644__$1;
(statearr_377654_377667[(2)] = inst_377640);

(statearr_377654_377667[(1)] = (3));


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
});})(c__35562__auto__))
;
return ((function (switch__35450__auto__,c__35562__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35451__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35451__auto____0 = (function (){
var statearr_377658 = [null,null,null,null,null,null,null,null,null];
(statearr_377658[(0)] = cljs$core$async$reduce_$_state_machine__35451__auto__);

(statearr_377658[(1)] = (1));

return statearr_377658;
});
var cljs$core$async$reduce_$_state_machine__35451__auto____1 = (function (state_377644){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_377644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e377659){if((e377659 instanceof Object)){
var ex__35454__auto__ = e377659;
var statearr_377660_377668 = state_377644;
(statearr_377660_377668[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_377644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e377659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__377669 = state_377644;
state_377644 = G__377669;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35451__auto__ = function(state_377644){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35451__auto____1.call(this,state_377644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35451__auto____0;
cljs$core$async$reduce_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35451__auto____1;
return cljs$core$async$reduce_$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto__))
})();
var state__35564__auto__ = (function (){var statearr_377661 = f__35563__auto__.call(null);
(statearr_377661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto__);

return statearr_377661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto__))
);

return c__35562__auto__;
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
var args377670 = [];
var len__25219__auto___377722 = arguments.length;
var i__25220__auto___377723 = (0);
while(true){
if((i__25220__auto___377723 < len__25219__auto___377722)){
args377670.push((arguments[i__25220__auto___377723]));

var G__377724 = (i__25220__auto___377723 + (1));
i__25220__auto___377723 = G__377724;
continue;
} else {
}
break;
}

var G__377672 = args377670.length;
switch (G__377672) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args377670.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto__){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto__){
return (function (state_377697){
var state_val_377698 = (state_377697[(1)]);
if((state_val_377698 === (7))){
var inst_377679 = (state_377697[(2)]);
var state_377697__$1 = state_377697;
var statearr_377699_377726 = state_377697__$1;
(statearr_377699_377726[(2)] = inst_377679);

(statearr_377699_377726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377698 === (1))){
var inst_377673 = cljs.core.seq.call(null,coll);
var inst_377674 = inst_377673;
var state_377697__$1 = (function (){var statearr_377700 = state_377697;
(statearr_377700[(7)] = inst_377674);

return statearr_377700;
})();
var statearr_377701_377727 = state_377697__$1;
(statearr_377701_377727[(2)] = null);

(statearr_377701_377727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377698 === (4))){
var inst_377674 = (state_377697[(7)]);
var inst_377677 = cljs.core.first.call(null,inst_377674);
var state_377697__$1 = state_377697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_377697__$1,(7),ch,inst_377677);
} else {
if((state_val_377698 === (13))){
var inst_377691 = (state_377697[(2)]);
var state_377697__$1 = state_377697;
var statearr_377702_377728 = state_377697__$1;
(statearr_377702_377728[(2)] = inst_377691);

(statearr_377702_377728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377698 === (6))){
var inst_377682 = (state_377697[(2)]);
var state_377697__$1 = state_377697;
if(cljs.core.truth_(inst_377682)){
var statearr_377703_377729 = state_377697__$1;
(statearr_377703_377729[(1)] = (8));

} else {
var statearr_377704_377730 = state_377697__$1;
(statearr_377704_377730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377698 === (3))){
var inst_377695 = (state_377697[(2)]);
var state_377697__$1 = state_377697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_377697__$1,inst_377695);
} else {
if((state_val_377698 === (12))){
var state_377697__$1 = state_377697;
var statearr_377705_377731 = state_377697__$1;
(statearr_377705_377731[(2)] = null);

(statearr_377705_377731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377698 === (2))){
var inst_377674 = (state_377697[(7)]);
var state_377697__$1 = state_377697;
if(cljs.core.truth_(inst_377674)){
var statearr_377706_377732 = state_377697__$1;
(statearr_377706_377732[(1)] = (4));

} else {
var statearr_377707_377733 = state_377697__$1;
(statearr_377707_377733[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377698 === (11))){
var inst_377688 = cljs.core.async.close_BANG_.call(null,ch);
var state_377697__$1 = state_377697;
var statearr_377708_377734 = state_377697__$1;
(statearr_377708_377734[(2)] = inst_377688);

(statearr_377708_377734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377698 === (9))){
var state_377697__$1 = state_377697;
if(cljs.core.truth_(close_QMARK_)){
var statearr_377709_377735 = state_377697__$1;
(statearr_377709_377735[(1)] = (11));

} else {
var statearr_377710_377736 = state_377697__$1;
(statearr_377710_377736[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377698 === (5))){
var inst_377674 = (state_377697[(7)]);
var state_377697__$1 = state_377697;
var statearr_377711_377737 = state_377697__$1;
(statearr_377711_377737[(2)] = inst_377674);

(statearr_377711_377737[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377698 === (10))){
var inst_377693 = (state_377697[(2)]);
var state_377697__$1 = state_377697;
var statearr_377712_377738 = state_377697__$1;
(statearr_377712_377738[(2)] = inst_377693);

(statearr_377712_377738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_377698 === (8))){
var inst_377674 = (state_377697[(7)]);
var inst_377684 = cljs.core.next.call(null,inst_377674);
var inst_377674__$1 = inst_377684;
var state_377697__$1 = (function (){var statearr_377713 = state_377697;
(statearr_377713[(7)] = inst_377674__$1);

return statearr_377713;
})();
var statearr_377714_377739 = state_377697__$1;
(statearr_377714_377739[(2)] = null);

(statearr_377714_377739[(1)] = (2));


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
});})(c__35562__auto__))
;
return ((function (switch__35450__auto__,c__35562__auto__){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_377718 = [null,null,null,null,null,null,null,null];
(statearr_377718[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_377718[(1)] = (1));

return statearr_377718;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_377697){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_377697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e377719){if((e377719 instanceof Object)){
var ex__35454__auto__ = e377719;
var statearr_377720_377740 = state_377697;
(statearr_377720_377740[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_377697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e377719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__377741 = state_377697;
state_377697 = G__377741;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_377697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_377697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto__))
})();
var state__35564__auto__ = (function (){var statearr_377721 = f__35563__auto__.call(null);
(statearr_377721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto__);

return statearr_377721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto__))
);

return c__35562__auto__;
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
var x__24816__auto__ = (((_ == null))?null:_);
var m__24817__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,_);
} else {
var m__24817__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,_);
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
var x__24816__auto__ = (((m == null))?null:m);
var m__24817__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__24817__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__24816__auto__ = (((m == null))?null:m);
var m__24817__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,m,ch);
} else {
var m__24817__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,m,ch);
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
var x__24816__auto__ = (((m == null))?null:m);
var m__24817__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,m);
} else {
var m__24817__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async377963 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async377963 = (function (mult,ch,cs,meta377964){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta377964 = meta377964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async377963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_377965,meta377964__$1){
var self__ = this;
var _377965__$1 = this;
return (new cljs.core.async.t_cljs$core$async377963(self__.mult,self__.ch,self__.cs,meta377964__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async377963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_377965){
var self__ = this;
var _377965__$1 = this;
return self__.meta377964;
});})(cs))
;

cljs.core.async.t_cljs$core$async377963.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async377963.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async377963.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async377963.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async377963.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async377963.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async377963.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta377964","meta377964",-81062545,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async377963.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async377963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async377963";

cljs.core.async.t_cljs$core$async377963.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async377963");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async377963 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async377963(mult__$1,ch__$1,cs__$1,meta377964){
return (new cljs.core.async.t_cljs$core$async377963(mult__$1,ch__$1,cs__$1,meta377964));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async377963(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35562__auto___378184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___378184,cs,m,dchan,dctr,done){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___378184,cs,m,dchan,dctr,done){
return (function (state_378096){
var state_val_378097 = (state_378096[(1)]);
if((state_val_378097 === (7))){
var inst_378092 = (state_378096[(2)]);
var state_378096__$1 = state_378096;
var statearr_378098_378185 = state_378096__$1;
(statearr_378098_378185[(2)] = inst_378092);

(statearr_378098_378185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (20))){
var inst_377997 = (state_378096[(7)]);
var inst_378007 = cljs.core.first.call(null,inst_377997);
var inst_378008 = cljs.core.nth.call(null,inst_378007,(0),null);
var inst_378009 = cljs.core.nth.call(null,inst_378007,(1),null);
var state_378096__$1 = (function (){var statearr_378099 = state_378096;
(statearr_378099[(8)] = inst_378008);

return statearr_378099;
})();
if(cljs.core.truth_(inst_378009)){
var statearr_378100_378186 = state_378096__$1;
(statearr_378100_378186[(1)] = (22));

} else {
var statearr_378101_378187 = state_378096__$1;
(statearr_378101_378187[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (27))){
var inst_378044 = (state_378096[(9)]);
var inst_378037 = (state_378096[(10)]);
var inst_377968 = (state_378096[(11)]);
var inst_378039 = (state_378096[(12)]);
var inst_378044__$1 = cljs.core._nth.call(null,inst_378037,inst_378039);
var inst_378045 = cljs.core.async.put_BANG_.call(null,inst_378044__$1,inst_377968,done);
var state_378096__$1 = (function (){var statearr_378102 = state_378096;
(statearr_378102[(9)] = inst_378044__$1);

return statearr_378102;
})();
if(cljs.core.truth_(inst_378045)){
var statearr_378103_378188 = state_378096__$1;
(statearr_378103_378188[(1)] = (30));

} else {
var statearr_378104_378189 = state_378096__$1;
(statearr_378104_378189[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (1))){
var state_378096__$1 = state_378096;
var statearr_378105_378190 = state_378096__$1;
(statearr_378105_378190[(2)] = null);

(statearr_378105_378190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (24))){
var inst_377997 = (state_378096[(7)]);
var inst_378014 = (state_378096[(2)]);
var inst_378015 = cljs.core.next.call(null,inst_377997);
var inst_377977 = inst_378015;
var inst_377978 = null;
var inst_377979 = (0);
var inst_377980 = (0);
var state_378096__$1 = (function (){var statearr_378106 = state_378096;
(statearr_378106[(13)] = inst_377978);

(statearr_378106[(14)] = inst_377977);

(statearr_378106[(15)] = inst_378014);

(statearr_378106[(16)] = inst_377979);

(statearr_378106[(17)] = inst_377980);

return statearr_378106;
})();
var statearr_378107_378191 = state_378096__$1;
(statearr_378107_378191[(2)] = null);

(statearr_378107_378191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (39))){
var state_378096__$1 = state_378096;
var statearr_378111_378192 = state_378096__$1;
(statearr_378111_378192[(2)] = null);

(statearr_378111_378192[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (4))){
var inst_377968 = (state_378096[(11)]);
var inst_377968__$1 = (state_378096[(2)]);
var inst_377969 = (inst_377968__$1 == null);
var state_378096__$1 = (function (){var statearr_378112 = state_378096;
(statearr_378112[(11)] = inst_377968__$1);

return statearr_378112;
})();
if(cljs.core.truth_(inst_377969)){
var statearr_378113_378193 = state_378096__$1;
(statearr_378113_378193[(1)] = (5));

} else {
var statearr_378114_378194 = state_378096__$1;
(statearr_378114_378194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (15))){
var inst_377978 = (state_378096[(13)]);
var inst_377977 = (state_378096[(14)]);
var inst_377979 = (state_378096[(16)]);
var inst_377980 = (state_378096[(17)]);
var inst_377993 = (state_378096[(2)]);
var inst_377994 = (inst_377980 + (1));
var tmp378108 = inst_377978;
var tmp378109 = inst_377977;
var tmp378110 = inst_377979;
var inst_377977__$1 = tmp378109;
var inst_377978__$1 = tmp378108;
var inst_377979__$1 = tmp378110;
var inst_377980__$1 = inst_377994;
var state_378096__$1 = (function (){var statearr_378115 = state_378096;
(statearr_378115[(13)] = inst_377978__$1);

(statearr_378115[(14)] = inst_377977__$1);

(statearr_378115[(18)] = inst_377993);

(statearr_378115[(16)] = inst_377979__$1);

(statearr_378115[(17)] = inst_377980__$1);

return statearr_378115;
})();
var statearr_378116_378195 = state_378096__$1;
(statearr_378116_378195[(2)] = null);

(statearr_378116_378195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (21))){
var inst_378018 = (state_378096[(2)]);
var state_378096__$1 = state_378096;
var statearr_378120_378196 = state_378096__$1;
(statearr_378120_378196[(2)] = inst_378018);

(statearr_378120_378196[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (31))){
var inst_378044 = (state_378096[(9)]);
var inst_378048 = done.call(null,null);
var inst_378049 = cljs.core.async.untap_STAR_.call(null,m,inst_378044);
var state_378096__$1 = (function (){var statearr_378121 = state_378096;
(statearr_378121[(19)] = inst_378048);

return statearr_378121;
})();
var statearr_378122_378197 = state_378096__$1;
(statearr_378122_378197[(2)] = inst_378049);

(statearr_378122_378197[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (32))){
var inst_378037 = (state_378096[(10)]);
var inst_378036 = (state_378096[(20)]);
var inst_378038 = (state_378096[(21)]);
var inst_378039 = (state_378096[(12)]);
var inst_378051 = (state_378096[(2)]);
var inst_378052 = (inst_378039 + (1));
var tmp378117 = inst_378037;
var tmp378118 = inst_378036;
var tmp378119 = inst_378038;
var inst_378036__$1 = tmp378118;
var inst_378037__$1 = tmp378117;
var inst_378038__$1 = tmp378119;
var inst_378039__$1 = inst_378052;
var state_378096__$1 = (function (){var statearr_378123 = state_378096;
(statearr_378123[(10)] = inst_378037__$1);

(statearr_378123[(22)] = inst_378051);

(statearr_378123[(20)] = inst_378036__$1);

(statearr_378123[(21)] = inst_378038__$1);

(statearr_378123[(12)] = inst_378039__$1);

return statearr_378123;
})();
var statearr_378124_378198 = state_378096__$1;
(statearr_378124_378198[(2)] = null);

(statearr_378124_378198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (40))){
var inst_378064 = (state_378096[(23)]);
var inst_378068 = done.call(null,null);
var inst_378069 = cljs.core.async.untap_STAR_.call(null,m,inst_378064);
var state_378096__$1 = (function (){var statearr_378125 = state_378096;
(statearr_378125[(24)] = inst_378068);

return statearr_378125;
})();
var statearr_378126_378199 = state_378096__$1;
(statearr_378126_378199[(2)] = inst_378069);

(statearr_378126_378199[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (33))){
var inst_378055 = (state_378096[(25)]);
var inst_378057 = cljs.core.chunked_seq_QMARK_.call(null,inst_378055);
var state_378096__$1 = state_378096;
if(inst_378057){
var statearr_378127_378200 = state_378096__$1;
(statearr_378127_378200[(1)] = (36));

} else {
var statearr_378128_378201 = state_378096__$1;
(statearr_378128_378201[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (13))){
var inst_377987 = (state_378096[(26)]);
var inst_377990 = cljs.core.async.close_BANG_.call(null,inst_377987);
var state_378096__$1 = state_378096;
var statearr_378129_378202 = state_378096__$1;
(statearr_378129_378202[(2)] = inst_377990);

(statearr_378129_378202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (22))){
var inst_378008 = (state_378096[(8)]);
var inst_378011 = cljs.core.async.close_BANG_.call(null,inst_378008);
var state_378096__$1 = state_378096;
var statearr_378130_378203 = state_378096__$1;
(statearr_378130_378203[(2)] = inst_378011);

(statearr_378130_378203[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (36))){
var inst_378055 = (state_378096[(25)]);
var inst_378059 = cljs.core.chunk_first.call(null,inst_378055);
var inst_378060 = cljs.core.chunk_rest.call(null,inst_378055);
var inst_378061 = cljs.core.count.call(null,inst_378059);
var inst_378036 = inst_378060;
var inst_378037 = inst_378059;
var inst_378038 = inst_378061;
var inst_378039 = (0);
var state_378096__$1 = (function (){var statearr_378131 = state_378096;
(statearr_378131[(10)] = inst_378037);

(statearr_378131[(20)] = inst_378036);

(statearr_378131[(21)] = inst_378038);

(statearr_378131[(12)] = inst_378039);

return statearr_378131;
})();
var statearr_378132_378204 = state_378096__$1;
(statearr_378132_378204[(2)] = null);

(statearr_378132_378204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (41))){
var inst_378055 = (state_378096[(25)]);
var inst_378071 = (state_378096[(2)]);
var inst_378072 = cljs.core.next.call(null,inst_378055);
var inst_378036 = inst_378072;
var inst_378037 = null;
var inst_378038 = (0);
var inst_378039 = (0);
var state_378096__$1 = (function (){var statearr_378133 = state_378096;
(statearr_378133[(10)] = inst_378037);

(statearr_378133[(20)] = inst_378036);

(statearr_378133[(21)] = inst_378038);

(statearr_378133[(12)] = inst_378039);

(statearr_378133[(27)] = inst_378071);

return statearr_378133;
})();
var statearr_378134_378205 = state_378096__$1;
(statearr_378134_378205[(2)] = null);

(statearr_378134_378205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (43))){
var state_378096__$1 = state_378096;
var statearr_378135_378206 = state_378096__$1;
(statearr_378135_378206[(2)] = null);

(statearr_378135_378206[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (29))){
var inst_378080 = (state_378096[(2)]);
var state_378096__$1 = state_378096;
var statearr_378136_378207 = state_378096__$1;
(statearr_378136_378207[(2)] = inst_378080);

(statearr_378136_378207[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (44))){
var inst_378089 = (state_378096[(2)]);
var state_378096__$1 = (function (){var statearr_378137 = state_378096;
(statearr_378137[(28)] = inst_378089);

return statearr_378137;
})();
var statearr_378138_378208 = state_378096__$1;
(statearr_378138_378208[(2)] = null);

(statearr_378138_378208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (6))){
var inst_378028 = (state_378096[(29)]);
var inst_378027 = cljs.core.deref.call(null,cs);
var inst_378028__$1 = cljs.core.keys.call(null,inst_378027);
var inst_378029 = cljs.core.count.call(null,inst_378028__$1);
var inst_378030 = cljs.core.reset_BANG_.call(null,dctr,inst_378029);
var inst_378035 = cljs.core.seq.call(null,inst_378028__$1);
var inst_378036 = inst_378035;
var inst_378037 = null;
var inst_378038 = (0);
var inst_378039 = (0);
var state_378096__$1 = (function (){var statearr_378139 = state_378096;
(statearr_378139[(30)] = inst_378030);

(statearr_378139[(29)] = inst_378028__$1);

(statearr_378139[(10)] = inst_378037);

(statearr_378139[(20)] = inst_378036);

(statearr_378139[(21)] = inst_378038);

(statearr_378139[(12)] = inst_378039);

return statearr_378139;
})();
var statearr_378140_378209 = state_378096__$1;
(statearr_378140_378209[(2)] = null);

(statearr_378140_378209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (28))){
var inst_378036 = (state_378096[(20)]);
var inst_378055 = (state_378096[(25)]);
var inst_378055__$1 = cljs.core.seq.call(null,inst_378036);
var state_378096__$1 = (function (){var statearr_378141 = state_378096;
(statearr_378141[(25)] = inst_378055__$1);

return statearr_378141;
})();
if(inst_378055__$1){
var statearr_378142_378210 = state_378096__$1;
(statearr_378142_378210[(1)] = (33));

} else {
var statearr_378143_378211 = state_378096__$1;
(statearr_378143_378211[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (25))){
var inst_378038 = (state_378096[(21)]);
var inst_378039 = (state_378096[(12)]);
var inst_378041 = (inst_378039 < inst_378038);
var inst_378042 = inst_378041;
var state_378096__$1 = state_378096;
if(cljs.core.truth_(inst_378042)){
var statearr_378144_378212 = state_378096__$1;
(statearr_378144_378212[(1)] = (27));

} else {
var statearr_378145_378213 = state_378096__$1;
(statearr_378145_378213[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (34))){
var state_378096__$1 = state_378096;
var statearr_378146_378214 = state_378096__$1;
(statearr_378146_378214[(2)] = null);

(statearr_378146_378214[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (17))){
var state_378096__$1 = state_378096;
var statearr_378147_378215 = state_378096__$1;
(statearr_378147_378215[(2)] = null);

(statearr_378147_378215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (3))){
var inst_378094 = (state_378096[(2)]);
var state_378096__$1 = state_378096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_378096__$1,inst_378094);
} else {
if((state_val_378097 === (12))){
var inst_378023 = (state_378096[(2)]);
var state_378096__$1 = state_378096;
var statearr_378148_378216 = state_378096__$1;
(statearr_378148_378216[(2)] = inst_378023);

(statearr_378148_378216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (2))){
var state_378096__$1 = state_378096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_378096__$1,(4),ch);
} else {
if((state_val_378097 === (23))){
var state_378096__$1 = state_378096;
var statearr_378149_378217 = state_378096__$1;
(statearr_378149_378217[(2)] = null);

(statearr_378149_378217[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (35))){
var inst_378078 = (state_378096[(2)]);
var state_378096__$1 = state_378096;
var statearr_378150_378218 = state_378096__$1;
(statearr_378150_378218[(2)] = inst_378078);

(statearr_378150_378218[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (19))){
var inst_377997 = (state_378096[(7)]);
var inst_378001 = cljs.core.chunk_first.call(null,inst_377997);
var inst_378002 = cljs.core.chunk_rest.call(null,inst_377997);
var inst_378003 = cljs.core.count.call(null,inst_378001);
var inst_377977 = inst_378002;
var inst_377978 = inst_378001;
var inst_377979 = inst_378003;
var inst_377980 = (0);
var state_378096__$1 = (function (){var statearr_378151 = state_378096;
(statearr_378151[(13)] = inst_377978);

(statearr_378151[(14)] = inst_377977);

(statearr_378151[(16)] = inst_377979);

(statearr_378151[(17)] = inst_377980);

return statearr_378151;
})();
var statearr_378152_378219 = state_378096__$1;
(statearr_378152_378219[(2)] = null);

(statearr_378152_378219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (11))){
var inst_377997 = (state_378096[(7)]);
var inst_377977 = (state_378096[(14)]);
var inst_377997__$1 = cljs.core.seq.call(null,inst_377977);
var state_378096__$1 = (function (){var statearr_378153 = state_378096;
(statearr_378153[(7)] = inst_377997__$1);

return statearr_378153;
})();
if(inst_377997__$1){
var statearr_378154_378220 = state_378096__$1;
(statearr_378154_378220[(1)] = (16));

} else {
var statearr_378155_378221 = state_378096__$1;
(statearr_378155_378221[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (9))){
var inst_378025 = (state_378096[(2)]);
var state_378096__$1 = state_378096;
var statearr_378156_378222 = state_378096__$1;
(statearr_378156_378222[(2)] = inst_378025);

(statearr_378156_378222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (5))){
var inst_377975 = cljs.core.deref.call(null,cs);
var inst_377976 = cljs.core.seq.call(null,inst_377975);
var inst_377977 = inst_377976;
var inst_377978 = null;
var inst_377979 = (0);
var inst_377980 = (0);
var state_378096__$1 = (function (){var statearr_378157 = state_378096;
(statearr_378157[(13)] = inst_377978);

(statearr_378157[(14)] = inst_377977);

(statearr_378157[(16)] = inst_377979);

(statearr_378157[(17)] = inst_377980);

return statearr_378157;
})();
var statearr_378158_378223 = state_378096__$1;
(statearr_378158_378223[(2)] = null);

(statearr_378158_378223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (14))){
var state_378096__$1 = state_378096;
var statearr_378159_378224 = state_378096__$1;
(statearr_378159_378224[(2)] = null);

(statearr_378159_378224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (45))){
var inst_378086 = (state_378096[(2)]);
var state_378096__$1 = state_378096;
var statearr_378160_378225 = state_378096__$1;
(statearr_378160_378225[(2)] = inst_378086);

(statearr_378160_378225[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (26))){
var inst_378028 = (state_378096[(29)]);
var inst_378082 = (state_378096[(2)]);
var inst_378083 = cljs.core.seq.call(null,inst_378028);
var state_378096__$1 = (function (){var statearr_378161 = state_378096;
(statearr_378161[(31)] = inst_378082);

return statearr_378161;
})();
if(inst_378083){
var statearr_378162_378226 = state_378096__$1;
(statearr_378162_378226[(1)] = (42));

} else {
var statearr_378163_378227 = state_378096__$1;
(statearr_378163_378227[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (16))){
var inst_377997 = (state_378096[(7)]);
var inst_377999 = cljs.core.chunked_seq_QMARK_.call(null,inst_377997);
var state_378096__$1 = state_378096;
if(inst_377999){
var statearr_378164_378228 = state_378096__$1;
(statearr_378164_378228[(1)] = (19));

} else {
var statearr_378165_378229 = state_378096__$1;
(statearr_378165_378229[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (38))){
var inst_378075 = (state_378096[(2)]);
var state_378096__$1 = state_378096;
var statearr_378166_378230 = state_378096__$1;
(statearr_378166_378230[(2)] = inst_378075);

(statearr_378166_378230[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (30))){
var state_378096__$1 = state_378096;
var statearr_378167_378231 = state_378096__$1;
(statearr_378167_378231[(2)] = null);

(statearr_378167_378231[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (10))){
var inst_377978 = (state_378096[(13)]);
var inst_377980 = (state_378096[(17)]);
var inst_377986 = cljs.core._nth.call(null,inst_377978,inst_377980);
var inst_377987 = cljs.core.nth.call(null,inst_377986,(0),null);
var inst_377988 = cljs.core.nth.call(null,inst_377986,(1),null);
var state_378096__$1 = (function (){var statearr_378168 = state_378096;
(statearr_378168[(26)] = inst_377987);

return statearr_378168;
})();
if(cljs.core.truth_(inst_377988)){
var statearr_378169_378232 = state_378096__$1;
(statearr_378169_378232[(1)] = (13));

} else {
var statearr_378170_378233 = state_378096__$1;
(statearr_378170_378233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (18))){
var inst_378021 = (state_378096[(2)]);
var state_378096__$1 = state_378096;
var statearr_378171_378234 = state_378096__$1;
(statearr_378171_378234[(2)] = inst_378021);

(statearr_378171_378234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (42))){
var state_378096__$1 = state_378096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_378096__$1,(45),dchan);
} else {
if((state_val_378097 === (37))){
var inst_378064 = (state_378096[(23)]);
var inst_377968 = (state_378096[(11)]);
var inst_378055 = (state_378096[(25)]);
var inst_378064__$1 = cljs.core.first.call(null,inst_378055);
var inst_378065 = cljs.core.async.put_BANG_.call(null,inst_378064__$1,inst_377968,done);
var state_378096__$1 = (function (){var statearr_378172 = state_378096;
(statearr_378172[(23)] = inst_378064__$1);

return statearr_378172;
})();
if(cljs.core.truth_(inst_378065)){
var statearr_378173_378235 = state_378096__$1;
(statearr_378173_378235[(1)] = (39));

} else {
var statearr_378174_378236 = state_378096__$1;
(statearr_378174_378236[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378097 === (8))){
var inst_377979 = (state_378096[(16)]);
var inst_377980 = (state_378096[(17)]);
var inst_377982 = (inst_377980 < inst_377979);
var inst_377983 = inst_377982;
var state_378096__$1 = state_378096;
if(cljs.core.truth_(inst_377983)){
var statearr_378175_378237 = state_378096__$1;
(statearr_378175_378237[(1)] = (10));

} else {
var statearr_378176_378238 = state_378096__$1;
(statearr_378176_378238[(1)] = (11));

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
});})(c__35562__auto___378184,cs,m,dchan,dctr,done))
;
return ((function (switch__35450__auto__,c__35562__auto___378184,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35451__auto__ = null;
var cljs$core$async$mult_$_state_machine__35451__auto____0 = (function (){
var statearr_378180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_378180[(0)] = cljs$core$async$mult_$_state_machine__35451__auto__);

(statearr_378180[(1)] = (1));

return statearr_378180;
});
var cljs$core$async$mult_$_state_machine__35451__auto____1 = (function (state_378096){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_378096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e378181){if((e378181 instanceof Object)){
var ex__35454__auto__ = e378181;
var statearr_378182_378239 = state_378096;
(statearr_378182_378239[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_378096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e378181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__378240 = state_378096;
state_378096 = G__378240;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35451__auto__ = function(state_378096){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35451__auto____1.call(this,state_378096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35451__auto____0;
cljs$core$async$mult_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35451__auto____1;
return cljs$core$async$mult_$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___378184,cs,m,dchan,dctr,done))
})();
var state__35564__auto__ = (function (){var statearr_378183 = f__35563__auto__.call(null);
(statearr_378183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___378184);

return statearr_378183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___378184,cs,m,dchan,dctr,done))
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
var args378241 = [];
var len__25219__auto___378244 = arguments.length;
var i__25220__auto___378245 = (0);
while(true){
if((i__25220__auto___378245 < len__25219__auto___378244)){
args378241.push((arguments[i__25220__auto___378245]));

var G__378246 = (i__25220__auto___378245 + (1));
i__25220__auto___378245 = G__378246;
continue;
} else {
}
break;
}

var G__378243 = args378241.length;
switch (G__378243) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args378241.length)].join('')));

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
var x__24816__auto__ = (((m == null))?null:m);
var m__24817__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,m,ch);
} else {
var m__24817__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,m,ch);
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
var x__24816__auto__ = (((m == null))?null:m);
var m__24817__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,m,ch);
} else {
var m__24817__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,m,ch);
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
var x__24816__auto__ = (((m == null))?null:m);
var m__24817__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,m);
} else {
var m__24817__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,m);
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
var x__24816__auto__ = (((m == null))?null:m);
var m__24817__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,m,state_map);
} else {
var m__24817__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,m,state_map);
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
var x__24816__auto__ = (((m == null))?null:m);
var m__24817__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,m,mode);
} else {
var m__24817__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25226__auto__ = [];
var len__25219__auto___378258 = arguments.length;
var i__25220__auto___378259 = (0);
while(true){
if((i__25220__auto___378259 < len__25219__auto___378258)){
args__25226__auto__.push((arguments[i__25220__auto___378259]));

var G__378260 = (i__25220__auto___378259 + (1));
i__25220__auto___378259 = G__378260;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((3) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25227__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__378252){
var map__378253 = p__378252;
var map__378253__$1 = ((((!((map__378253 == null)))?((((map__378253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378253):map__378253);
var opts = map__378253__$1;
var statearr_378255_378261 = state;
(statearr_378255_378261[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__378253,map__378253__$1,opts){
return (function (val){
var statearr_378256_378262 = state;
(statearr_378256_378262[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__378253,map__378253__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_378257_378263 = state;
(statearr_378257_378263[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq378248){
var G__378249 = cljs.core.first.call(null,seq378248);
var seq378248__$1 = cljs.core.next.call(null,seq378248);
var G__378250 = cljs.core.first.call(null,seq378248__$1);
var seq378248__$2 = cljs.core.next.call(null,seq378248__$1);
var G__378251 = cljs.core.first.call(null,seq378248__$2);
var seq378248__$3 = cljs.core.next.call(null,seq378248__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__378249,G__378250,G__378251,seq378248__$3);
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
if(typeof cljs.core.async.t_cljs$core$async378427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async378427 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta378428){
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
this.meta378428 = meta378428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async378427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_378429,meta378428__$1){
var self__ = this;
var _378429__$1 = this;
return (new cljs.core.async.t_cljs$core$async378427(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta378428__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async378427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_378429){
var self__ = this;
var _378429__$1 = this;
return self__.meta378428;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async378427.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async378427.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async378427.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async378427.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async378427.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async378427.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async378427.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async378427.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async378427.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta378428","meta378428",-601484473,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async378427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async378427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async378427";

cljs.core.async.t_cljs$core$async378427.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async378427");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async378427 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async378427(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta378428){
return (new cljs.core.async.t_cljs$core$async378427(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta378428));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async378427(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35562__auto___378590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___378590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___378590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_378527){
var state_val_378528 = (state_378527[(1)]);
if((state_val_378528 === (7))){
var inst_378445 = (state_378527[(2)]);
var state_378527__$1 = state_378527;
var statearr_378529_378591 = state_378527__$1;
(statearr_378529_378591[(2)] = inst_378445);

(statearr_378529_378591[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (20))){
var inst_378457 = (state_378527[(7)]);
var state_378527__$1 = state_378527;
var statearr_378530_378592 = state_378527__$1;
(statearr_378530_378592[(2)] = inst_378457);

(statearr_378530_378592[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (27))){
var state_378527__$1 = state_378527;
var statearr_378531_378593 = state_378527__$1;
(statearr_378531_378593[(2)] = null);

(statearr_378531_378593[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (1))){
var inst_378433 = (state_378527[(8)]);
var inst_378433__$1 = calc_state.call(null);
var inst_378435 = (inst_378433__$1 == null);
var inst_378436 = cljs.core.not.call(null,inst_378435);
var state_378527__$1 = (function (){var statearr_378532 = state_378527;
(statearr_378532[(8)] = inst_378433__$1);

return statearr_378532;
})();
if(inst_378436){
var statearr_378533_378594 = state_378527__$1;
(statearr_378533_378594[(1)] = (2));

} else {
var statearr_378534_378595 = state_378527__$1;
(statearr_378534_378595[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (24))){
var inst_378480 = (state_378527[(9)]);
var inst_378501 = (state_378527[(10)]);
var inst_378487 = (state_378527[(11)]);
var inst_378501__$1 = inst_378480.call(null,inst_378487);
var state_378527__$1 = (function (){var statearr_378535 = state_378527;
(statearr_378535[(10)] = inst_378501__$1);

return statearr_378535;
})();
if(cljs.core.truth_(inst_378501__$1)){
var statearr_378536_378596 = state_378527__$1;
(statearr_378536_378596[(1)] = (29));

} else {
var statearr_378537_378597 = state_378527__$1;
(statearr_378537_378597[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (4))){
var inst_378448 = (state_378527[(2)]);
var state_378527__$1 = state_378527;
if(cljs.core.truth_(inst_378448)){
var statearr_378538_378598 = state_378527__$1;
(statearr_378538_378598[(1)] = (8));

} else {
var statearr_378539_378599 = state_378527__$1;
(statearr_378539_378599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (15))){
var inst_378474 = (state_378527[(2)]);
var state_378527__$1 = state_378527;
if(cljs.core.truth_(inst_378474)){
var statearr_378540_378600 = state_378527__$1;
(statearr_378540_378600[(1)] = (19));

} else {
var statearr_378541_378601 = state_378527__$1;
(statearr_378541_378601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (21))){
var inst_378479 = (state_378527[(12)]);
var inst_378479__$1 = (state_378527[(2)]);
var inst_378480 = cljs.core.get.call(null,inst_378479__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_378481 = cljs.core.get.call(null,inst_378479__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_378482 = cljs.core.get.call(null,inst_378479__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_378527__$1 = (function (){var statearr_378542 = state_378527;
(statearr_378542[(13)] = inst_378481);

(statearr_378542[(9)] = inst_378480);

(statearr_378542[(12)] = inst_378479__$1);

return statearr_378542;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_378527__$1,(22),inst_378482);
} else {
if((state_val_378528 === (31))){
var inst_378509 = (state_378527[(2)]);
var state_378527__$1 = state_378527;
if(cljs.core.truth_(inst_378509)){
var statearr_378543_378602 = state_378527__$1;
(statearr_378543_378602[(1)] = (32));

} else {
var statearr_378544_378603 = state_378527__$1;
(statearr_378544_378603[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (32))){
var inst_378486 = (state_378527[(14)]);
var state_378527__$1 = state_378527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_378527__$1,(35),out,inst_378486);
} else {
if((state_val_378528 === (33))){
var inst_378479 = (state_378527[(12)]);
var inst_378457 = inst_378479;
var state_378527__$1 = (function (){var statearr_378545 = state_378527;
(statearr_378545[(7)] = inst_378457);

return statearr_378545;
})();
var statearr_378546_378604 = state_378527__$1;
(statearr_378546_378604[(2)] = null);

(statearr_378546_378604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (13))){
var inst_378457 = (state_378527[(7)]);
var inst_378464 = inst_378457.cljs$lang$protocol_mask$partition0$;
var inst_378465 = (inst_378464 & (64));
var inst_378466 = inst_378457.cljs$core$ISeq$;
var inst_378467 = (inst_378465) || (inst_378466);
var state_378527__$1 = state_378527;
if(cljs.core.truth_(inst_378467)){
var statearr_378547_378605 = state_378527__$1;
(statearr_378547_378605[(1)] = (16));

} else {
var statearr_378548_378606 = state_378527__$1;
(statearr_378548_378606[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (22))){
var inst_378486 = (state_378527[(14)]);
var inst_378487 = (state_378527[(11)]);
var inst_378485 = (state_378527[(2)]);
var inst_378486__$1 = cljs.core.nth.call(null,inst_378485,(0),null);
var inst_378487__$1 = cljs.core.nth.call(null,inst_378485,(1),null);
var inst_378488 = (inst_378486__$1 == null);
var inst_378489 = cljs.core._EQ_.call(null,inst_378487__$1,change);
var inst_378490 = (inst_378488) || (inst_378489);
var state_378527__$1 = (function (){var statearr_378549 = state_378527;
(statearr_378549[(14)] = inst_378486__$1);

(statearr_378549[(11)] = inst_378487__$1);

return statearr_378549;
})();
if(cljs.core.truth_(inst_378490)){
var statearr_378550_378607 = state_378527__$1;
(statearr_378550_378607[(1)] = (23));

} else {
var statearr_378551_378608 = state_378527__$1;
(statearr_378551_378608[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (36))){
var inst_378479 = (state_378527[(12)]);
var inst_378457 = inst_378479;
var state_378527__$1 = (function (){var statearr_378552 = state_378527;
(statearr_378552[(7)] = inst_378457);

return statearr_378552;
})();
var statearr_378553_378609 = state_378527__$1;
(statearr_378553_378609[(2)] = null);

(statearr_378553_378609[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (29))){
var inst_378501 = (state_378527[(10)]);
var state_378527__$1 = state_378527;
var statearr_378554_378610 = state_378527__$1;
(statearr_378554_378610[(2)] = inst_378501);

(statearr_378554_378610[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (6))){
var state_378527__$1 = state_378527;
var statearr_378555_378611 = state_378527__$1;
(statearr_378555_378611[(2)] = false);

(statearr_378555_378611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (28))){
var inst_378497 = (state_378527[(2)]);
var inst_378498 = calc_state.call(null);
var inst_378457 = inst_378498;
var state_378527__$1 = (function (){var statearr_378556 = state_378527;
(statearr_378556[(15)] = inst_378497);

(statearr_378556[(7)] = inst_378457);

return statearr_378556;
})();
var statearr_378557_378612 = state_378527__$1;
(statearr_378557_378612[(2)] = null);

(statearr_378557_378612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (25))){
var inst_378523 = (state_378527[(2)]);
var state_378527__$1 = state_378527;
var statearr_378558_378613 = state_378527__$1;
(statearr_378558_378613[(2)] = inst_378523);

(statearr_378558_378613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (34))){
var inst_378521 = (state_378527[(2)]);
var state_378527__$1 = state_378527;
var statearr_378559_378614 = state_378527__$1;
(statearr_378559_378614[(2)] = inst_378521);

(statearr_378559_378614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (17))){
var state_378527__$1 = state_378527;
var statearr_378560_378615 = state_378527__$1;
(statearr_378560_378615[(2)] = false);

(statearr_378560_378615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (3))){
var state_378527__$1 = state_378527;
var statearr_378561_378616 = state_378527__$1;
(statearr_378561_378616[(2)] = false);

(statearr_378561_378616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (12))){
var inst_378525 = (state_378527[(2)]);
var state_378527__$1 = state_378527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_378527__$1,inst_378525);
} else {
if((state_val_378528 === (2))){
var inst_378433 = (state_378527[(8)]);
var inst_378438 = inst_378433.cljs$lang$protocol_mask$partition0$;
var inst_378439 = (inst_378438 & (64));
var inst_378440 = inst_378433.cljs$core$ISeq$;
var inst_378441 = (inst_378439) || (inst_378440);
var state_378527__$1 = state_378527;
if(cljs.core.truth_(inst_378441)){
var statearr_378562_378617 = state_378527__$1;
(statearr_378562_378617[(1)] = (5));

} else {
var statearr_378563_378618 = state_378527__$1;
(statearr_378563_378618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (23))){
var inst_378486 = (state_378527[(14)]);
var inst_378492 = (inst_378486 == null);
var state_378527__$1 = state_378527;
if(cljs.core.truth_(inst_378492)){
var statearr_378564_378619 = state_378527__$1;
(statearr_378564_378619[(1)] = (26));

} else {
var statearr_378565_378620 = state_378527__$1;
(statearr_378565_378620[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (35))){
var inst_378512 = (state_378527[(2)]);
var state_378527__$1 = state_378527;
if(cljs.core.truth_(inst_378512)){
var statearr_378566_378621 = state_378527__$1;
(statearr_378566_378621[(1)] = (36));

} else {
var statearr_378567_378622 = state_378527__$1;
(statearr_378567_378622[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (19))){
var inst_378457 = (state_378527[(7)]);
var inst_378476 = cljs.core.apply.call(null,cljs.core.hash_map,inst_378457);
var state_378527__$1 = state_378527;
var statearr_378568_378623 = state_378527__$1;
(statearr_378568_378623[(2)] = inst_378476);

(statearr_378568_378623[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (11))){
var inst_378457 = (state_378527[(7)]);
var inst_378461 = (inst_378457 == null);
var inst_378462 = cljs.core.not.call(null,inst_378461);
var state_378527__$1 = state_378527;
if(inst_378462){
var statearr_378569_378624 = state_378527__$1;
(statearr_378569_378624[(1)] = (13));

} else {
var statearr_378570_378625 = state_378527__$1;
(statearr_378570_378625[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (9))){
var inst_378433 = (state_378527[(8)]);
var state_378527__$1 = state_378527;
var statearr_378571_378626 = state_378527__$1;
(statearr_378571_378626[(2)] = inst_378433);

(statearr_378571_378626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (5))){
var state_378527__$1 = state_378527;
var statearr_378572_378627 = state_378527__$1;
(statearr_378572_378627[(2)] = true);

(statearr_378572_378627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (14))){
var state_378527__$1 = state_378527;
var statearr_378573_378628 = state_378527__$1;
(statearr_378573_378628[(2)] = false);

(statearr_378573_378628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (26))){
var inst_378487 = (state_378527[(11)]);
var inst_378494 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_378487);
var state_378527__$1 = state_378527;
var statearr_378574_378629 = state_378527__$1;
(statearr_378574_378629[(2)] = inst_378494);

(statearr_378574_378629[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (16))){
var state_378527__$1 = state_378527;
var statearr_378575_378630 = state_378527__$1;
(statearr_378575_378630[(2)] = true);

(statearr_378575_378630[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (38))){
var inst_378517 = (state_378527[(2)]);
var state_378527__$1 = state_378527;
var statearr_378576_378631 = state_378527__$1;
(statearr_378576_378631[(2)] = inst_378517);

(statearr_378576_378631[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (30))){
var inst_378481 = (state_378527[(13)]);
var inst_378480 = (state_378527[(9)]);
var inst_378487 = (state_378527[(11)]);
var inst_378504 = cljs.core.empty_QMARK_.call(null,inst_378480);
var inst_378505 = inst_378481.call(null,inst_378487);
var inst_378506 = cljs.core.not.call(null,inst_378505);
var inst_378507 = (inst_378504) && (inst_378506);
var state_378527__$1 = state_378527;
var statearr_378577_378632 = state_378527__$1;
(statearr_378577_378632[(2)] = inst_378507);

(statearr_378577_378632[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (10))){
var inst_378433 = (state_378527[(8)]);
var inst_378453 = (state_378527[(2)]);
var inst_378454 = cljs.core.get.call(null,inst_378453,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_378455 = cljs.core.get.call(null,inst_378453,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_378456 = cljs.core.get.call(null,inst_378453,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_378457 = inst_378433;
var state_378527__$1 = (function (){var statearr_378578 = state_378527;
(statearr_378578[(16)] = inst_378455);

(statearr_378578[(17)] = inst_378454);

(statearr_378578[(7)] = inst_378457);

(statearr_378578[(18)] = inst_378456);

return statearr_378578;
})();
var statearr_378579_378633 = state_378527__$1;
(statearr_378579_378633[(2)] = null);

(statearr_378579_378633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (18))){
var inst_378471 = (state_378527[(2)]);
var state_378527__$1 = state_378527;
var statearr_378580_378634 = state_378527__$1;
(statearr_378580_378634[(2)] = inst_378471);

(statearr_378580_378634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (37))){
var state_378527__$1 = state_378527;
var statearr_378581_378635 = state_378527__$1;
(statearr_378581_378635[(2)] = null);

(statearr_378581_378635[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378528 === (8))){
var inst_378433 = (state_378527[(8)]);
var inst_378450 = cljs.core.apply.call(null,cljs.core.hash_map,inst_378433);
var state_378527__$1 = state_378527;
var statearr_378582_378636 = state_378527__$1;
(statearr_378582_378636[(2)] = inst_378450);

(statearr_378582_378636[(1)] = (10));


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
});})(c__35562__auto___378590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35450__auto__,c__35562__auto___378590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35451__auto__ = null;
var cljs$core$async$mix_$_state_machine__35451__auto____0 = (function (){
var statearr_378586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_378586[(0)] = cljs$core$async$mix_$_state_machine__35451__auto__);

(statearr_378586[(1)] = (1));

return statearr_378586;
});
var cljs$core$async$mix_$_state_machine__35451__auto____1 = (function (state_378527){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_378527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e378587){if((e378587 instanceof Object)){
var ex__35454__auto__ = e378587;
var statearr_378588_378637 = state_378527;
(statearr_378588_378637[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_378527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e378587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__378638 = state_378527;
state_378527 = G__378638;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35451__auto__ = function(state_378527){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35451__auto____1.call(this,state_378527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35451__auto____0;
cljs$core$async$mix_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35451__auto____1;
return cljs$core$async$mix_$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___378590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35564__auto__ = (function (){var statearr_378589 = f__35563__auto__.call(null);
(statearr_378589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___378590);

return statearr_378589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___378590,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__24816__auto__ = (((p == null))?null:p);
var m__24817__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__24817__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__24816__auto__ = (((p == null))?null:p);
var m__24817__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,p,v,ch);
} else {
var m__24817__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args378639 = [];
var len__25219__auto___378642 = arguments.length;
var i__25220__auto___378643 = (0);
while(true){
if((i__25220__auto___378643 < len__25219__auto___378642)){
args378639.push((arguments[i__25220__auto___378643]));

var G__378644 = (i__25220__auto___378643 + (1));
i__25220__auto___378643 = G__378644;
continue;
} else {
}
break;
}

var G__378641 = args378639.length;
switch (G__378641) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args378639.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24816__auto__ = (((p == null))?null:p);
var m__24817__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,p);
} else {
var m__24817__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,p);
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
var x__24816__auto__ = (((p == null))?null:p);
var m__24817__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24816__auto__)]);
if(!((m__24817__auto__ == null))){
return m__24817__auto__.call(null,p,v);
} else {
var m__24817__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24817__auto____$1 == null))){
return m__24817__auto____$1.call(null,p,v);
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
var args378647 = [];
var len__25219__auto___378772 = arguments.length;
var i__25220__auto___378773 = (0);
while(true){
if((i__25220__auto___378773 < len__25219__auto___378772)){
args378647.push((arguments[i__25220__auto___378773]));

var G__378774 = (i__25220__auto___378773 + (1));
i__25220__auto___378773 = G__378774;
continue;
} else {
}
break;
}

var G__378649 = args378647.length;
switch (G__378649) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args378647.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24161__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24161__auto__,mults){
return (function (p1__378646_SHARP_){
if(cljs.core.truth_(p1__378646_SHARP_.call(null,topic))){
return p1__378646_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__378646_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24161__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async378650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async378650 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta378651){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta378651 = meta378651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async378650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_378652,meta378651__$1){
var self__ = this;
var _378652__$1 = this;
return (new cljs.core.async.t_cljs$core$async378650(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta378651__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async378650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_378652){
var self__ = this;
var _378652__$1 = this;
return self__.meta378651;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async378650.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async378650.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async378650.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async378650.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async378650.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async378650.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async378650.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async378650.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta378651","meta378651",-1949916042,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async378650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async378650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async378650";

cljs.core.async.t_cljs$core$async378650.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async378650");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async378650 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async378650(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta378651){
return (new cljs.core.async.t_cljs$core$async378650(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta378651));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async378650(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35562__auto___378776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___378776,mults,ensure_mult,p){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___378776,mults,ensure_mult,p){
return (function (state_378724){
var state_val_378725 = (state_378724[(1)]);
if((state_val_378725 === (7))){
var inst_378720 = (state_378724[(2)]);
var state_378724__$1 = state_378724;
var statearr_378726_378777 = state_378724__$1;
(statearr_378726_378777[(2)] = inst_378720);

(statearr_378726_378777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (20))){
var state_378724__$1 = state_378724;
var statearr_378727_378778 = state_378724__$1;
(statearr_378727_378778[(2)] = null);

(statearr_378727_378778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (1))){
var state_378724__$1 = state_378724;
var statearr_378728_378779 = state_378724__$1;
(statearr_378728_378779[(2)] = null);

(statearr_378728_378779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (24))){
var inst_378703 = (state_378724[(7)]);
var inst_378712 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_378703);
var state_378724__$1 = state_378724;
var statearr_378729_378780 = state_378724__$1;
(statearr_378729_378780[(2)] = inst_378712);

(statearr_378729_378780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (4))){
var inst_378655 = (state_378724[(8)]);
var inst_378655__$1 = (state_378724[(2)]);
var inst_378656 = (inst_378655__$1 == null);
var state_378724__$1 = (function (){var statearr_378730 = state_378724;
(statearr_378730[(8)] = inst_378655__$1);

return statearr_378730;
})();
if(cljs.core.truth_(inst_378656)){
var statearr_378731_378781 = state_378724__$1;
(statearr_378731_378781[(1)] = (5));

} else {
var statearr_378732_378782 = state_378724__$1;
(statearr_378732_378782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (15))){
var inst_378697 = (state_378724[(2)]);
var state_378724__$1 = state_378724;
var statearr_378733_378783 = state_378724__$1;
(statearr_378733_378783[(2)] = inst_378697);

(statearr_378733_378783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (21))){
var inst_378717 = (state_378724[(2)]);
var state_378724__$1 = (function (){var statearr_378734 = state_378724;
(statearr_378734[(9)] = inst_378717);

return statearr_378734;
})();
var statearr_378735_378784 = state_378724__$1;
(statearr_378735_378784[(2)] = null);

(statearr_378735_378784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (13))){
var inst_378679 = (state_378724[(10)]);
var inst_378681 = cljs.core.chunked_seq_QMARK_.call(null,inst_378679);
var state_378724__$1 = state_378724;
if(inst_378681){
var statearr_378736_378785 = state_378724__$1;
(statearr_378736_378785[(1)] = (16));

} else {
var statearr_378737_378786 = state_378724__$1;
(statearr_378737_378786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (22))){
var inst_378709 = (state_378724[(2)]);
var state_378724__$1 = state_378724;
if(cljs.core.truth_(inst_378709)){
var statearr_378738_378787 = state_378724__$1;
(statearr_378738_378787[(1)] = (23));

} else {
var statearr_378739_378788 = state_378724__$1;
(statearr_378739_378788[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (6))){
var inst_378705 = (state_378724[(11)]);
var inst_378703 = (state_378724[(7)]);
var inst_378655 = (state_378724[(8)]);
var inst_378703__$1 = topic_fn.call(null,inst_378655);
var inst_378704 = cljs.core.deref.call(null,mults);
var inst_378705__$1 = cljs.core.get.call(null,inst_378704,inst_378703__$1);
var state_378724__$1 = (function (){var statearr_378740 = state_378724;
(statearr_378740[(11)] = inst_378705__$1);

(statearr_378740[(7)] = inst_378703__$1);

return statearr_378740;
})();
if(cljs.core.truth_(inst_378705__$1)){
var statearr_378741_378789 = state_378724__$1;
(statearr_378741_378789[(1)] = (19));

} else {
var statearr_378742_378790 = state_378724__$1;
(statearr_378742_378790[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (25))){
var inst_378714 = (state_378724[(2)]);
var state_378724__$1 = state_378724;
var statearr_378743_378791 = state_378724__$1;
(statearr_378743_378791[(2)] = inst_378714);

(statearr_378743_378791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (17))){
var inst_378679 = (state_378724[(10)]);
var inst_378688 = cljs.core.first.call(null,inst_378679);
var inst_378689 = cljs.core.async.muxch_STAR_.call(null,inst_378688);
var inst_378690 = cljs.core.async.close_BANG_.call(null,inst_378689);
var inst_378691 = cljs.core.next.call(null,inst_378679);
var inst_378665 = inst_378691;
var inst_378666 = null;
var inst_378667 = (0);
var inst_378668 = (0);
var state_378724__$1 = (function (){var statearr_378744 = state_378724;
(statearr_378744[(12)] = inst_378690);

(statearr_378744[(13)] = inst_378665);

(statearr_378744[(14)] = inst_378666);

(statearr_378744[(15)] = inst_378668);

(statearr_378744[(16)] = inst_378667);

return statearr_378744;
})();
var statearr_378745_378792 = state_378724__$1;
(statearr_378745_378792[(2)] = null);

(statearr_378745_378792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (3))){
var inst_378722 = (state_378724[(2)]);
var state_378724__$1 = state_378724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_378724__$1,inst_378722);
} else {
if((state_val_378725 === (12))){
var inst_378699 = (state_378724[(2)]);
var state_378724__$1 = state_378724;
var statearr_378746_378793 = state_378724__$1;
(statearr_378746_378793[(2)] = inst_378699);

(statearr_378746_378793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (2))){
var state_378724__$1 = state_378724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_378724__$1,(4),ch);
} else {
if((state_val_378725 === (23))){
var state_378724__$1 = state_378724;
var statearr_378747_378794 = state_378724__$1;
(statearr_378747_378794[(2)] = null);

(statearr_378747_378794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (19))){
var inst_378705 = (state_378724[(11)]);
var inst_378655 = (state_378724[(8)]);
var inst_378707 = cljs.core.async.muxch_STAR_.call(null,inst_378705);
var state_378724__$1 = state_378724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_378724__$1,(22),inst_378707,inst_378655);
} else {
if((state_val_378725 === (11))){
var inst_378679 = (state_378724[(10)]);
var inst_378665 = (state_378724[(13)]);
var inst_378679__$1 = cljs.core.seq.call(null,inst_378665);
var state_378724__$1 = (function (){var statearr_378748 = state_378724;
(statearr_378748[(10)] = inst_378679__$1);

return statearr_378748;
})();
if(inst_378679__$1){
var statearr_378749_378795 = state_378724__$1;
(statearr_378749_378795[(1)] = (13));

} else {
var statearr_378750_378796 = state_378724__$1;
(statearr_378750_378796[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (9))){
var inst_378701 = (state_378724[(2)]);
var state_378724__$1 = state_378724;
var statearr_378751_378797 = state_378724__$1;
(statearr_378751_378797[(2)] = inst_378701);

(statearr_378751_378797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (5))){
var inst_378662 = cljs.core.deref.call(null,mults);
var inst_378663 = cljs.core.vals.call(null,inst_378662);
var inst_378664 = cljs.core.seq.call(null,inst_378663);
var inst_378665 = inst_378664;
var inst_378666 = null;
var inst_378667 = (0);
var inst_378668 = (0);
var state_378724__$1 = (function (){var statearr_378752 = state_378724;
(statearr_378752[(13)] = inst_378665);

(statearr_378752[(14)] = inst_378666);

(statearr_378752[(15)] = inst_378668);

(statearr_378752[(16)] = inst_378667);

return statearr_378752;
})();
var statearr_378753_378798 = state_378724__$1;
(statearr_378753_378798[(2)] = null);

(statearr_378753_378798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (14))){
var state_378724__$1 = state_378724;
var statearr_378757_378799 = state_378724__$1;
(statearr_378757_378799[(2)] = null);

(statearr_378757_378799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (16))){
var inst_378679 = (state_378724[(10)]);
var inst_378683 = cljs.core.chunk_first.call(null,inst_378679);
var inst_378684 = cljs.core.chunk_rest.call(null,inst_378679);
var inst_378685 = cljs.core.count.call(null,inst_378683);
var inst_378665 = inst_378684;
var inst_378666 = inst_378683;
var inst_378667 = inst_378685;
var inst_378668 = (0);
var state_378724__$1 = (function (){var statearr_378758 = state_378724;
(statearr_378758[(13)] = inst_378665);

(statearr_378758[(14)] = inst_378666);

(statearr_378758[(15)] = inst_378668);

(statearr_378758[(16)] = inst_378667);

return statearr_378758;
})();
var statearr_378759_378800 = state_378724__$1;
(statearr_378759_378800[(2)] = null);

(statearr_378759_378800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (10))){
var inst_378665 = (state_378724[(13)]);
var inst_378666 = (state_378724[(14)]);
var inst_378668 = (state_378724[(15)]);
var inst_378667 = (state_378724[(16)]);
var inst_378673 = cljs.core._nth.call(null,inst_378666,inst_378668);
var inst_378674 = cljs.core.async.muxch_STAR_.call(null,inst_378673);
var inst_378675 = cljs.core.async.close_BANG_.call(null,inst_378674);
var inst_378676 = (inst_378668 + (1));
var tmp378754 = inst_378665;
var tmp378755 = inst_378666;
var tmp378756 = inst_378667;
var inst_378665__$1 = tmp378754;
var inst_378666__$1 = tmp378755;
var inst_378667__$1 = tmp378756;
var inst_378668__$1 = inst_378676;
var state_378724__$1 = (function (){var statearr_378760 = state_378724;
(statearr_378760[(13)] = inst_378665__$1);

(statearr_378760[(14)] = inst_378666__$1);

(statearr_378760[(15)] = inst_378668__$1);

(statearr_378760[(17)] = inst_378675);

(statearr_378760[(16)] = inst_378667__$1);

return statearr_378760;
})();
var statearr_378761_378801 = state_378724__$1;
(statearr_378761_378801[(2)] = null);

(statearr_378761_378801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (18))){
var inst_378694 = (state_378724[(2)]);
var state_378724__$1 = state_378724;
var statearr_378762_378802 = state_378724__$1;
(statearr_378762_378802[(2)] = inst_378694);

(statearr_378762_378802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378725 === (8))){
var inst_378668 = (state_378724[(15)]);
var inst_378667 = (state_378724[(16)]);
var inst_378670 = (inst_378668 < inst_378667);
var inst_378671 = inst_378670;
var state_378724__$1 = state_378724;
if(cljs.core.truth_(inst_378671)){
var statearr_378763_378803 = state_378724__$1;
(statearr_378763_378803[(1)] = (10));

} else {
var statearr_378764_378804 = state_378724__$1;
(statearr_378764_378804[(1)] = (11));

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
});})(c__35562__auto___378776,mults,ensure_mult,p))
;
return ((function (switch__35450__auto__,c__35562__auto___378776,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_378768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_378768[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_378768[(1)] = (1));

return statearr_378768;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_378724){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_378724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e378769){if((e378769 instanceof Object)){
var ex__35454__auto__ = e378769;
var statearr_378770_378805 = state_378724;
(statearr_378770_378805[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_378724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e378769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__378806 = state_378724;
state_378724 = G__378806;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_378724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_378724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___378776,mults,ensure_mult,p))
})();
var state__35564__auto__ = (function (){var statearr_378771 = f__35563__auto__.call(null);
(statearr_378771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___378776);

return statearr_378771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___378776,mults,ensure_mult,p))
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
var args378807 = [];
var len__25219__auto___378810 = arguments.length;
var i__25220__auto___378811 = (0);
while(true){
if((i__25220__auto___378811 < len__25219__auto___378810)){
args378807.push((arguments[i__25220__auto___378811]));

var G__378812 = (i__25220__auto___378811 + (1));
i__25220__auto___378811 = G__378812;
continue;
} else {
}
break;
}

var G__378809 = args378807.length;
switch (G__378809) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args378807.length)].join('')));

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
var args378814 = [];
var len__25219__auto___378817 = arguments.length;
var i__25220__auto___378818 = (0);
while(true){
if((i__25220__auto___378818 < len__25219__auto___378817)){
args378814.push((arguments[i__25220__auto___378818]));

var G__378819 = (i__25220__auto___378818 + (1));
i__25220__auto___378818 = G__378819;
continue;
} else {
}
break;
}

var G__378816 = args378814.length;
switch (G__378816) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args378814.length)].join('')));

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
var args378821 = [];
var len__25219__auto___378892 = arguments.length;
var i__25220__auto___378893 = (0);
while(true){
if((i__25220__auto___378893 < len__25219__auto___378892)){
args378821.push((arguments[i__25220__auto___378893]));

var G__378894 = (i__25220__auto___378893 + (1));
i__25220__auto___378893 = G__378894;
continue;
} else {
}
break;
}

var G__378823 = args378821.length;
switch (G__378823) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args378821.length)].join('')));

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
var c__35562__auto___378896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___378896,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___378896,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_378862){
var state_val_378863 = (state_378862[(1)]);
if((state_val_378863 === (7))){
var state_378862__$1 = state_378862;
var statearr_378864_378897 = state_378862__$1;
(statearr_378864_378897[(2)] = null);

(statearr_378864_378897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378863 === (1))){
var state_378862__$1 = state_378862;
var statearr_378865_378898 = state_378862__$1;
(statearr_378865_378898[(2)] = null);

(statearr_378865_378898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378863 === (4))){
var inst_378826 = (state_378862[(7)]);
var inst_378828 = (inst_378826 < cnt);
var state_378862__$1 = state_378862;
if(cljs.core.truth_(inst_378828)){
var statearr_378866_378899 = state_378862__$1;
(statearr_378866_378899[(1)] = (6));

} else {
var statearr_378867_378900 = state_378862__$1;
(statearr_378867_378900[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378863 === (15))){
var inst_378858 = (state_378862[(2)]);
var state_378862__$1 = state_378862;
var statearr_378868_378901 = state_378862__$1;
(statearr_378868_378901[(2)] = inst_378858);

(statearr_378868_378901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378863 === (13))){
var inst_378851 = cljs.core.async.close_BANG_.call(null,out);
var state_378862__$1 = state_378862;
var statearr_378869_378902 = state_378862__$1;
(statearr_378869_378902[(2)] = inst_378851);

(statearr_378869_378902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378863 === (6))){
var state_378862__$1 = state_378862;
var statearr_378870_378903 = state_378862__$1;
(statearr_378870_378903[(2)] = null);

(statearr_378870_378903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378863 === (3))){
var inst_378860 = (state_378862[(2)]);
var state_378862__$1 = state_378862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_378862__$1,inst_378860);
} else {
if((state_val_378863 === (12))){
var inst_378848 = (state_378862[(8)]);
var inst_378848__$1 = (state_378862[(2)]);
var inst_378849 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_378848__$1);
var state_378862__$1 = (function (){var statearr_378871 = state_378862;
(statearr_378871[(8)] = inst_378848__$1);

return statearr_378871;
})();
if(cljs.core.truth_(inst_378849)){
var statearr_378872_378904 = state_378862__$1;
(statearr_378872_378904[(1)] = (13));

} else {
var statearr_378873_378905 = state_378862__$1;
(statearr_378873_378905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378863 === (2))){
var inst_378825 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_378826 = (0);
var state_378862__$1 = (function (){var statearr_378874 = state_378862;
(statearr_378874[(7)] = inst_378826);

(statearr_378874[(9)] = inst_378825);

return statearr_378874;
})();
var statearr_378875_378906 = state_378862__$1;
(statearr_378875_378906[(2)] = null);

(statearr_378875_378906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378863 === (11))){
var inst_378826 = (state_378862[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_378862,(10),Object,null,(9));
var inst_378835 = chs__$1.call(null,inst_378826);
var inst_378836 = done.call(null,inst_378826);
var inst_378837 = cljs.core.async.take_BANG_.call(null,inst_378835,inst_378836);
var state_378862__$1 = state_378862;
var statearr_378876_378907 = state_378862__$1;
(statearr_378876_378907[(2)] = inst_378837);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_378862__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378863 === (9))){
var inst_378826 = (state_378862[(7)]);
var inst_378839 = (state_378862[(2)]);
var inst_378840 = (inst_378826 + (1));
var inst_378826__$1 = inst_378840;
var state_378862__$1 = (function (){var statearr_378877 = state_378862;
(statearr_378877[(7)] = inst_378826__$1);

(statearr_378877[(10)] = inst_378839);

return statearr_378877;
})();
var statearr_378878_378908 = state_378862__$1;
(statearr_378878_378908[(2)] = null);

(statearr_378878_378908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378863 === (5))){
var inst_378846 = (state_378862[(2)]);
var state_378862__$1 = (function (){var statearr_378879 = state_378862;
(statearr_378879[(11)] = inst_378846);

return statearr_378879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_378862__$1,(12),dchan);
} else {
if((state_val_378863 === (14))){
var inst_378848 = (state_378862[(8)]);
var inst_378853 = cljs.core.apply.call(null,f,inst_378848);
var state_378862__$1 = state_378862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_378862__$1,(16),out,inst_378853);
} else {
if((state_val_378863 === (16))){
var inst_378855 = (state_378862[(2)]);
var state_378862__$1 = (function (){var statearr_378880 = state_378862;
(statearr_378880[(12)] = inst_378855);

return statearr_378880;
})();
var statearr_378881_378909 = state_378862__$1;
(statearr_378881_378909[(2)] = null);

(statearr_378881_378909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378863 === (10))){
var inst_378830 = (state_378862[(2)]);
var inst_378831 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_378862__$1 = (function (){var statearr_378882 = state_378862;
(statearr_378882[(13)] = inst_378830);

return statearr_378882;
})();
var statearr_378883_378910 = state_378862__$1;
(statearr_378883_378910[(2)] = inst_378831);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_378862__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378863 === (8))){
var inst_378844 = (state_378862[(2)]);
var state_378862__$1 = state_378862;
var statearr_378884_378911 = state_378862__$1;
(statearr_378884_378911[(2)] = inst_378844);

(statearr_378884_378911[(1)] = (5));


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
});})(c__35562__auto___378896,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35450__auto__,c__35562__auto___378896,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_378888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_378888[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_378888[(1)] = (1));

return statearr_378888;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_378862){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_378862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e378889){if((e378889 instanceof Object)){
var ex__35454__auto__ = e378889;
var statearr_378890_378912 = state_378862;
(statearr_378890_378912[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_378862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e378889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__378913 = state_378862;
state_378862 = G__378913;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_378862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_378862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___378896,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35564__auto__ = (function (){var statearr_378891 = f__35563__auto__.call(null);
(statearr_378891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___378896);

return statearr_378891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___378896,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args378915 = [];
var len__25219__auto___378971 = arguments.length;
var i__25220__auto___378972 = (0);
while(true){
if((i__25220__auto___378972 < len__25219__auto___378971)){
args378915.push((arguments[i__25220__auto___378972]));

var G__378973 = (i__25220__auto___378972 + (1));
i__25220__auto___378972 = G__378973;
continue;
} else {
}
break;
}

var G__378917 = args378915.length;
switch (G__378917) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args378915.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35562__auto___378975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___378975,out){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___378975,out){
return (function (state_378947){
var state_val_378948 = (state_378947[(1)]);
if((state_val_378948 === (7))){
var inst_378926 = (state_378947[(7)]);
var inst_378927 = (state_378947[(8)]);
var inst_378926__$1 = (state_378947[(2)]);
var inst_378927__$1 = cljs.core.nth.call(null,inst_378926__$1,(0),null);
var inst_378928 = cljs.core.nth.call(null,inst_378926__$1,(1),null);
var inst_378929 = (inst_378927__$1 == null);
var state_378947__$1 = (function (){var statearr_378949 = state_378947;
(statearr_378949[(7)] = inst_378926__$1);

(statearr_378949[(8)] = inst_378927__$1);

(statearr_378949[(9)] = inst_378928);

return statearr_378949;
})();
if(cljs.core.truth_(inst_378929)){
var statearr_378950_378976 = state_378947__$1;
(statearr_378950_378976[(1)] = (8));

} else {
var statearr_378951_378977 = state_378947__$1;
(statearr_378951_378977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378948 === (1))){
var inst_378918 = cljs.core.vec.call(null,chs);
var inst_378919 = inst_378918;
var state_378947__$1 = (function (){var statearr_378952 = state_378947;
(statearr_378952[(10)] = inst_378919);

return statearr_378952;
})();
var statearr_378953_378978 = state_378947__$1;
(statearr_378953_378978[(2)] = null);

(statearr_378953_378978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378948 === (4))){
var inst_378919 = (state_378947[(10)]);
var state_378947__$1 = state_378947;
return cljs.core.async.ioc_alts_BANG_.call(null,state_378947__$1,(7),inst_378919);
} else {
if((state_val_378948 === (6))){
var inst_378943 = (state_378947[(2)]);
var state_378947__$1 = state_378947;
var statearr_378954_378979 = state_378947__$1;
(statearr_378954_378979[(2)] = inst_378943);

(statearr_378954_378979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378948 === (3))){
var inst_378945 = (state_378947[(2)]);
var state_378947__$1 = state_378947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_378947__$1,inst_378945);
} else {
if((state_val_378948 === (2))){
var inst_378919 = (state_378947[(10)]);
var inst_378921 = cljs.core.count.call(null,inst_378919);
var inst_378922 = (inst_378921 > (0));
var state_378947__$1 = state_378947;
if(cljs.core.truth_(inst_378922)){
var statearr_378956_378980 = state_378947__$1;
(statearr_378956_378980[(1)] = (4));

} else {
var statearr_378957_378981 = state_378947__$1;
(statearr_378957_378981[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378948 === (11))){
var inst_378919 = (state_378947[(10)]);
var inst_378936 = (state_378947[(2)]);
var tmp378955 = inst_378919;
var inst_378919__$1 = tmp378955;
var state_378947__$1 = (function (){var statearr_378958 = state_378947;
(statearr_378958[(10)] = inst_378919__$1);

(statearr_378958[(11)] = inst_378936);

return statearr_378958;
})();
var statearr_378959_378982 = state_378947__$1;
(statearr_378959_378982[(2)] = null);

(statearr_378959_378982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378948 === (9))){
var inst_378927 = (state_378947[(8)]);
var state_378947__$1 = state_378947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_378947__$1,(11),out,inst_378927);
} else {
if((state_val_378948 === (5))){
var inst_378941 = cljs.core.async.close_BANG_.call(null,out);
var state_378947__$1 = state_378947;
var statearr_378960_378983 = state_378947__$1;
(statearr_378960_378983[(2)] = inst_378941);

(statearr_378960_378983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378948 === (10))){
var inst_378939 = (state_378947[(2)]);
var state_378947__$1 = state_378947;
var statearr_378961_378984 = state_378947__$1;
(statearr_378961_378984[(2)] = inst_378939);

(statearr_378961_378984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_378948 === (8))){
var inst_378919 = (state_378947[(10)]);
var inst_378926 = (state_378947[(7)]);
var inst_378927 = (state_378947[(8)]);
var inst_378928 = (state_378947[(9)]);
var inst_378931 = (function (){var cs = inst_378919;
var vec__378924 = inst_378926;
var v = inst_378927;
var c = inst_378928;
return ((function (cs,vec__378924,v,c,inst_378919,inst_378926,inst_378927,inst_378928,state_val_378948,c__35562__auto___378975,out){
return (function (p1__378914_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__378914_SHARP_);
});
;})(cs,vec__378924,v,c,inst_378919,inst_378926,inst_378927,inst_378928,state_val_378948,c__35562__auto___378975,out))
})();
var inst_378932 = cljs.core.filterv.call(null,inst_378931,inst_378919);
var inst_378919__$1 = inst_378932;
var state_378947__$1 = (function (){var statearr_378962 = state_378947;
(statearr_378962[(10)] = inst_378919__$1);

return statearr_378962;
})();
var statearr_378963_378985 = state_378947__$1;
(statearr_378963_378985[(2)] = null);

(statearr_378963_378985[(1)] = (2));


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
});})(c__35562__auto___378975,out))
;
return ((function (switch__35450__auto__,c__35562__auto___378975,out){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_378967 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_378967[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_378967[(1)] = (1));

return statearr_378967;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_378947){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_378947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e378968){if((e378968 instanceof Object)){
var ex__35454__auto__ = e378968;
var statearr_378969_378986 = state_378947;
(statearr_378969_378986[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_378947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e378968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__378987 = state_378947;
state_378947 = G__378987;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_378947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_378947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___378975,out))
})();
var state__35564__auto__ = (function (){var statearr_378970 = f__35563__auto__.call(null);
(statearr_378970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___378975);

return statearr_378970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___378975,out))
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
var args378988 = [];
var len__25219__auto___379037 = arguments.length;
var i__25220__auto___379038 = (0);
while(true){
if((i__25220__auto___379038 < len__25219__auto___379037)){
args378988.push((arguments[i__25220__auto___379038]));

var G__379039 = (i__25220__auto___379038 + (1));
i__25220__auto___379038 = G__379039;
continue;
} else {
}
break;
}

var G__378990 = args378988.length;
switch (G__378990) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args378988.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35562__auto___379041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___379041,out){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___379041,out){
return (function (state_379014){
var state_val_379015 = (state_379014[(1)]);
if((state_val_379015 === (7))){
var inst_378996 = (state_379014[(7)]);
var inst_378996__$1 = (state_379014[(2)]);
var inst_378997 = (inst_378996__$1 == null);
var inst_378998 = cljs.core.not.call(null,inst_378997);
var state_379014__$1 = (function (){var statearr_379016 = state_379014;
(statearr_379016[(7)] = inst_378996__$1);

return statearr_379016;
})();
if(inst_378998){
var statearr_379017_379042 = state_379014__$1;
(statearr_379017_379042[(1)] = (8));

} else {
var statearr_379018_379043 = state_379014__$1;
(statearr_379018_379043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379015 === (1))){
var inst_378991 = (0);
var state_379014__$1 = (function (){var statearr_379019 = state_379014;
(statearr_379019[(8)] = inst_378991);

return statearr_379019;
})();
var statearr_379020_379044 = state_379014__$1;
(statearr_379020_379044[(2)] = null);

(statearr_379020_379044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379015 === (4))){
var state_379014__$1 = state_379014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379014__$1,(7),ch);
} else {
if((state_val_379015 === (6))){
var inst_379009 = (state_379014[(2)]);
var state_379014__$1 = state_379014;
var statearr_379021_379045 = state_379014__$1;
(statearr_379021_379045[(2)] = inst_379009);

(statearr_379021_379045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379015 === (3))){
var inst_379011 = (state_379014[(2)]);
var inst_379012 = cljs.core.async.close_BANG_.call(null,out);
var state_379014__$1 = (function (){var statearr_379022 = state_379014;
(statearr_379022[(9)] = inst_379011);

return statearr_379022;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_379014__$1,inst_379012);
} else {
if((state_val_379015 === (2))){
var inst_378991 = (state_379014[(8)]);
var inst_378993 = (inst_378991 < n);
var state_379014__$1 = state_379014;
if(cljs.core.truth_(inst_378993)){
var statearr_379023_379046 = state_379014__$1;
(statearr_379023_379046[(1)] = (4));

} else {
var statearr_379024_379047 = state_379014__$1;
(statearr_379024_379047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379015 === (11))){
var inst_378991 = (state_379014[(8)]);
var inst_379001 = (state_379014[(2)]);
var inst_379002 = (inst_378991 + (1));
var inst_378991__$1 = inst_379002;
var state_379014__$1 = (function (){var statearr_379025 = state_379014;
(statearr_379025[(10)] = inst_379001);

(statearr_379025[(8)] = inst_378991__$1);

return statearr_379025;
})();
var statearr_379026_379048 = state_379014__$1;
(statearr_379026_379048[(2)] = null);

(statearr_379026_379048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379015 === (9))){
var state_379014__$1 = state_379014;
var statearr_379027_379049 = state_379014__$1;
(statearr_379027_379049[(2)] = null);

(statearr_379027_379049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379015 === (5))){
var state_379014__$1 = state_379014;
var statearr_379028_379050 = state_379014__$1;
(statearr_379028_379050[(2)] = null);

(statearr_379028_379050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379015 === (10))){
var inst_379006 = (state_379014[(2)]);
var state_379014__$1 = state_379014;
var statearr_379029_379051 = state_379014__$1;
(statearr_379029_379051[(2)] = inst_379006);

(statearr_379029_379051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379015 === (8))){
var inst_378996 = (state_379014[(7)]);
var state_379014__$1 = state_379014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379014__$1,(11),out,inst_378996);
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
});})(c__35562__auto___379041,out))
;
return ((function (switch__35450__auto__,c__35562__auto___379041,out){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_379033 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_379033[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_379033[(1)] = (1));

return statearr_379033;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_379014){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_379014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e379034){if((e379034 instanceof Object)){
var ex__35454__auto__ = e379034;
var statearr_379035_379052 = state_379014;
(statearr_379035_379052[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_379014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e379034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__379053 = state_379014;
state_379014 = G__379053;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_379014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_379014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___379041,out))
})();
var state__35564__auto__ = (function (){var statearr_379036 = f__35563__auto__.call(null);
(statearr_379036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___379041);

return statearr_379036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___379041,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async379061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async379061 = (function (map_LT_,f,ch,meta379062){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta379062 = meta379062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async379061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_379063,meta379062__$1){
var self__ = this;
var _379063__$1 = this;
return (new cljs.core.async.t_cljs$core$async379061(self__.map_LT_,self__.f,self__.ch,meta379062__$1));
});

cljs.core.async.t_cljs$core$async379061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_379063){
var self__ = this;
var _379063__$1 = this;
return self__.meta379062;
});

cljs.core.async.t_cljs$core$async379061.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async379061.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async379061.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async379061.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async379061.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async379064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async379064 = (function (map_LT_,f,ch,meta379062,_,fn1,meta379065){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta379062 = meta379062;
this._ = _;
this.fn1 = fn1;
this.meta379065 = meta379065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async379064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_379066,meta379065__$1){
var self__ = this;
var _379066__$1 = this;
return (new cljs.core.async.t_cljs$core$async379064(self__.map_LT_,self__.f,self__.ch,self__.meta379062,self__._,self__.fn1,meta379065__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async379064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_379066){
var self__ = this;
var _379066__$1 = this;
return self__.meta379065;
});})(___$1))
;

cljs.core.async.t_cljs$core$async379064.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async379064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async379064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__379054_SHARP_){
return f1.call(null,(((p1__379054_SHARP_ == null))?null:self__.f.call(null,p1__379054_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async379064.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta379062","meta379062",233505350,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async379061","cljs.core.async/t_cljs$core$async379061",-1335842072,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta379065","meta379065",441966990,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async379064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async379064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async379064";

cljs.core.async.t_cljs$core$async379064.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async379064");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async379064 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async379064(map_LT___$1,f__$1,ch__$1,meta379062__$1,___$2,fn1__$1,meta379065){
return (new cljs.core.async.t_cljs$core$async379064(map_LT___$1,f__$1,ch__$1,meta379062__$1,___$2,fn1__$1,meta379065));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async379064(self__.map_LT_,self__.f,self__.ch,self__.meta379062,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24149__auto__ = ret;
if(cljs.core.truth_(and__24149__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24149__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async379061.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async379061.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async379061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta379062","meta379062",233505350,null)], null);
});

cljs.core.async.t_cljs$core$async379061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async379061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async379061";

cljs.core.async.t_cljs$core$async379061.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async379061");
});

cljs.core.async.__GT_t_cljs$core$async379061 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async379061(map_LT___$1,f__$1,ch__$1,meta379062){
return (new cljs.core.async.t_cljs$core$async379061(map_LT___$1,f__$1,ch__$1,meta379062));
});

}

return (new cljs.core.async.t_cljs$core$async379061(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async379070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async379070 = (function (map_GT_,f,ch,meta379071){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta379071 = meta379071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async379070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_379072,meta379071__$1){
var self__ = this;
var _379072__$1 = this;
return (new cljs.core.async.t_cljs$core$async379070(self__.map_GT_,self__.f,self__.ch,meta379071__$1));
});

cljs.core.async.t_cljs$core$async379070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_379072){
var self__ = this;
var _379072__$1 = this;
return self__.meta379071;
});

cljs.core.async.t_cljs$core$async379070.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async379070.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async379070.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async379070.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async379070.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async379070.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async379070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta379071","meta379071",1832098914,null)], null);
});

cljs.core.async.t_cljs$core$async379070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async379070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async379070";

cljs.core.async.t_cljs$core$async379070.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async379070");
});

cljs.core.async.__GT_t_cljs$core$async379070 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async379070(map_GT___$1,f__$1,ch__$1,meta379071){
return (new cljs.core.async.t_cljs$core$async379070(map_GT___$1,f__$1,ch__$1,meta379071));
});

}

return (new cljs.core.async.t_cljs$core$async379070(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async379076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async379076 = (function (filter_GT_,p,ch,meta379077){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta379077 = meta379077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async379076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_379078,meta379077__$1){
var self__ = this;
var _379078__$1 = this;
return (new cljs.core.async.t_cljs$core$async379076(self__.filter_GT_,self__.p,self__.ch,meta379077__$1));
});

cljs.core.async.t_cljs$core$async379076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_379078){
var self__ = this;
var _379078__$1 = this;
return self__.meta379077;
});

cljs.core.async.t_cljs$core$async379076.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async379076.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async379076.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async379076.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async379076.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async379076.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async379076.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async379076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta379077","meta379077",968114862,null)], null);
});

cljs.core.async.t_cljs$core$async379076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async379076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async379076";

cljs.core.async.t_cljs$core$async379076.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async379076");
});

cljs.core.async.__GT_t_cljs$core$async379076 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async379076(filter_GT___$1,p__$1,ch__$1,meta379077){
return (new cljs.core.async.t_cljs$core$async379076(filter_GT___$1,p__$1,ch__$1,meta379077));
});

}

return (new cljs.core.async.t_cljs$core$async379076(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args379079 = [];
var len__25219__auto___379123 = arguments.length;
var i__25220__auto___379124 = (0);
while(true){
if((i__25220__auto___379124 < len__25219__auto___379123)){
args379079.push((arguments[i__25220__auto___379124]));

var G__379125 = (i__25220__auto___379124 + (1));
i__25220__auto___379124 = G__379125;
continue;
} else {
}
break;
}

var G__379081 = args379079.length;
switch (G__379081) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args379079.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35562__auto___379127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___379127,out){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___379127,out){
return (function (state_379102){
var state_val_379103 = (state_379102[(1)]);
if((state_val_379103 === (7))){
var inst_379098 = (state_379102[(2)]);
var state_379102__$1 = state_379102;
var statearr_379104_379128 = state_379102__$1;
(statearr_379104_379128[(2)] = inst_379098);

(statearr_379104_379128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379103 === (1))){
var state_379102__$1 = state_379102;
var statearr_379105_379129 = state_379102__$1;
(statearr_379105_379129[(2)] = null);

(statearr_379105_379129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379103 === (4))){
var inst_379084 = (state_379102[(7)]);
var inst_379084__$1 = (state_379102[(2)]);
var inst_379085 = (inst_379084__$1 == null);
var state_379102__$1 = (function (){var statearr_379106 = state_379102;
(statearr_379106[(7)] = inst_379084__$1);

return statearr_379106;
})();
if(cljs.core.truth_(inst_379085)){
var statearr_379107_379130 = state_379102__$1;
(statearr_379107_379130[(1)] = (5));

} else {
var statearr_379108_379131 = state_379102__$1;
(statearr_379108_379131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379103 === (6))){
var inst_379084 = (state_379102[(7)]);
var inst_379089 = p.call(null,inst_379084);
var state_379102__$1 = state_379102;
if(cljs.core.truth_(inst_379089)){
var statearr_379109_379132 = state_379102__$1;
(statearr_379109_379132[(1)] = (8));

} else {
var statearr_379110_379133 = state_379102__$1;
(statearr_379110_379133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379103 === (3))){
var inst_379100 = (state_379102[(2)]);
var state_379102__$1 = state_379102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_379102__$1,inst_379100);
} else {
if((state_val_379103 === (2))){
var state_379102__$1 = state_379102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379102__$1,(4),ch);
} else {
if((state_val_379103 === (11))){
var inst_379092 = (state_379102[(2)]);
var state_379102__$1 = state_379102;
var statearr_379111_379134 = state_379102__$1;
(statearr_379111_379134[(2)] = inst_379092);

(statearr_379111_379134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379103 === (9))){
var state_379102__$1 = state_379102;
var statearr_379112_379135 = state_379102__$1;
(statearr_379112_379135[(2)] = null);

(statearr_379112_379135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379103 === (5))){
var inst_379087 = cljs.core.async.close_BANG_.call(null,out);
var state_379102__$1 = state_379102;
var statearr_379113_379136 = state_379102__$1;
(statearr_379113_379136[(2)] = inst_379087);

(statearr_379113_379136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379103 === (10))){
var inst_379095 = (state_379102[(2)]);
var state_379102__$1 = (function (){var statearr_379114 = state_379102;
(statearr_379114[(8)] = inst_379095);

return statearr_379114;
})();
var statearr_379115_379137 = state_379102__$1;
(statearr_379115_379137[(2)] = null);

(statearr_379115_379137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379103 === (8))){
var inst_379084 = (state_379102[(7)]);
var state_379102__$1 = state_379102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379102__$1,(11),out,inst_379084);
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
});})(c__35562__auto___379127,out))
;
return ((function (switch__35450__auto__,c__35562__auto___379127,out){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_379119 = [null,null,null,null,null,null,null,null,null];
(statearr_379119[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_379119[(1)] = (1));

return statearr_379119;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_379102){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_379102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e379120){if((e379120 instanceof Object)){
var ex__35454__auto__ = e379120;
var statearr_379121_379138 = state_379102;
(statearr_379121_379138[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_379102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e379120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__379139 = state_379102;
state_379102 = G__379139;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_379102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_379102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___379127,out))
})();
var state__35564__auto__ = (function (){var statearr_379122 = f__35563__auto__.call(null);
(statearr_379122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___379127);

return statearr_379122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___379127,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args379140 = [];
var len__25219__auto___379143 = arguments.length;
var i__25220__auto___379144 = (0);
while(true){
if((i__25220__auto___379144 < len__25219__auto___379143)){
args379140.push((arguments[i__25220__auto___379144]));

var G__379145 = (i__25220__auto___379144 + (1));
i__25220__auto___379144 = G__379145;
continue;
} else {
}
break;
}

var G__379142 = args379140.length;
switch (G__379142) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args379140.length)].join('')));

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
var c__35562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto__){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto__){
return (function (state_379312){
var state_val_379313 = (state_379312[(1)]);
if((state_val_379313 === (7))){
var inst_379308 = (state_379312[(2)]);
var state_379312__$1 = state_379312;
var statearr_379314_379355 = state_379312__$1;
(statearr_379314_379355[(2)] = inst_379308);

(statearr_379314_379355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (20))){
var inst_379278 = (state_379312[(7)]);
var inst_379289 = (state_379312[(2)]);
var inst_379290 = cljs.core.next.call(null,inst_379278);
var inst_379264 = inst_379290;
var inst_379265 = null;
var inst_379266 = (0);
var inst_379267 = (0);
var state_379312__$1 = (function (){var statearr_379315 = state_379312;
(statearr_379315[(8)] = inst_379264);

(statearr_379315[(9)] = inst_379267);

(statearr_379315[(10)] = inst_379266);

(statearr_379315[(11)] = inst_379289);

(statearr_379315[(12)] = inst_379265);

return statearr_379315;
})();
var statearr_379316_379356 = state_379312__$1;
(statearr_379316_379356[(2)] = null);

(statearr_379316_379356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (1))){
var state_379312__$1 = state_379312;
var statearr_379317_379357 = state_379312__$1;
(statearr_379317_379357[(2)] = null);

(statearr_379317_379357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (4))){
var inst_379253 = (state_379312[(13)]);
var inst_379253__$1 = (state_379312[(2)]);
var inst_379254 = (inst_379253__$1 == null);
var state_379312__$1 = (function (){var statearr_379318 = state_379312;
(statearr_379318[(13)] = inst_379253__$1);

return statearr_379318;
})();
if(cljs.core.truth_(inst_379254)){
var statearr_379319_379358 = state_379312__$1;
(statearr_379319_379358[(1)] = (5));

} else {
var statearr_379320_379359 = state_379312__$1;
(statearr_379320_379359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (15))){
var state_379312__$1 = state_379312;
var statearr_379324_379360 = state_379312__$1;
(statearr_379324_379360[(2)] = null);

(statearr_379324_379360[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (21))){
var state_379312__$1 = state_379312;
var statearr_379325_379361 = state_379312__$1;
(statearr_379325_379361[(2)] = null);

(statearr_379325_379361[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (13))){
var inst_379264 = (state_379312[(8)]);
var inst_379267 = (state_379312[(9)]);
var inst_379266 = (state_379312[(10)]);
var inst_379265 = (state_379312[(12)]);
var inst_379274 = (state_379312[(2)]);
var inst_379275 = (inst_379267 + (1));
var tmp379321 = inst_379264;
var tmp379322 = inst_379266;
var tmp379323 = inst_379265;
var inst_379264__$1 = tmp379321;
var inst_379265__$1 = tmp379323;
var inst_379266__$1 = tmp379322;
var inst_379267__$1 = inst_379275;
var state_379312__$1 = (function (){var statearr_379326 = state_379312;
(statearr_379326[(8)] = inst_379264__$1);

(statearr_379326[(9)] = inst_379267__$1);

(statearr_379326[(10)] = inst_379266__$1);

(statearr_379326[(14)] = inst_379274);

(statearr_379326[(12)] = inst_379265__$1);

return statearr_379326;
})();
var statearr_379327_379362 = state_379312__$1;
(statearr_379327_379362[(2)] = null);

(statearr_379327_379362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (22))){
var state_379312__$1 = state_379312;
var statearr_379328_379363 = state_379312__$1;
(statearr_379328_379363[(2)] = null);

(statearr_379328_379363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (6))){
var inst_379253 = (state_379312[(13)]);
var inst_379262 = f.call(null,inst_379253);
var inst_379263 = cljs.core.seq.call(null,inst_379262);
var inst_379264 = inst_379263;
var inst_379265 = null;
var inst_379266 = (0);
var inst_379267 = (0);
var state_379312__$1 = (function (){var statearr_379329 = state_379312;
(statearr_379329[(8)] = inst_379264);

(statearr_379329[(9)] = inst_379267);

(statearr_379329[(10)] = inst_379266);

(statearr_379329[(12)] = inst_379265);

return statearr_379329;
})();
var statearr_379330_379364 = state_379312__$1;
(statearr_379330_379364[(2)] = null);

(statearr_379330_379364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (17))){
var inst_379278 = (state_379312[(7)]);
var inst_379282 = cljs.core.chunk_first.call(null,inst_379278);
var inst_379283 = cljs.core.chunk_rest.call(null,inst_379278);
var inst_379284 = cljs.core.count.call(null,inst_379282);
var inst_379264 = inst_379283;
var inst_379265 = inst_379282;
var inst_379266 = inst_379284;
var inst_379267 = (0);
var state_379312__$1 = (function (){var statearr_379331 = state_379312;
(statearr_379331[(8)] = inst_379264);

(statearr_379331[(9)] = inst_379267);

(statearr_379331[(10)] = inst_379266);

(statearr_379331[(12)] = inst_379265);

return statearr_379331;
})();
var statearr_379332_379365 = state_379312__$1;
(statearr_379332_379365[(2)] = null);

(statearr_379332_379365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (3))){
var inst_379310 = (state_379312[(2)]);
var state_379312__$1 = state_379312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_379312__$1,inst_379310);
} else {
if((state_val_379313 === (12))){
var inst_379298 = (state_379312[(2)]);
var state_379312__$1 = state_379312;
var statearr_379333_379366 = state_379312__$1;
(statearr_379333_379366[(2)] = inst_379298);

(statearr_379333_379366[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (2))){
var state_379312__$1 = state_379312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379312__$1,(4),in$);
} else {
if((state_val_379313 === (23))){
var inst_379306 = (state_379312[(2)]);
var state_379312__$1 = state_379312;
var statearr_379334_379367 = state_379312__$1;
(statearr_379334_379367[(2)] = inst_379306);

(statearr_379334_379367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (19))){
var inst_379293 = (state_379312[(2)]);
var state_379312__$1 = state_379312;
var statearr_379335_379368 = state_379312__$1;
(statearr_379335_379368[(2)] = inst_379293);

(statearr_379335_379368[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (11))){
var inst_379264 = (state_379312[(8)]);
var inst_379278 = (state_379312[(7)]);
var inst_379278__$1 = cljs.core.seq.call(null,inst_379264);
var state_379312__$1 = (function (){var statearr_379336 = state_379312;
(statearr_379336[(7)] = inst_379278__$1);

return statearr_379336;
})();
if(inst_379278__$1){
var statearr_379337_379369 = state_379312__$1;
(statearr_379337_379369[(1)] = (14));

} else {
var statearr_379338_379370 = state_379312__$1;
(statearr_379338_379370[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (9))){
var inst_379300 = (state_379312[(2)]);
var inst_379301 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_379312__$1 = (function (){var statearr_379339 = state_379312;
(statearr_379339[(15)] = inst_379300);

return statearr_379339;
})();
if(cljs.core.truth_(inst_379301)){
var statearr_379340_379371 = state_379312__$1;
(statearr_379340_379371[(1)] = (21));

} else {
var statearr_379341_379372 = state_379312__$1;
(statearr_379341_379372[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (5))){
var inst_379256 = cljs.core.async.close_BANG_.call(null,out);
var state_379312__$1 = state_379312;
var statearr_379342_379373 = state_379312__$1;
(statearr_379342_379373[(2)] = inst_379256);

(statearr_379342_379373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (14))){
var inst_379278 = (state_379312[(7)]);
var inst_379280 = cljs.core.chunked_seq_QMARK_.call(null,inst_379278);
var state_379312__$1 = state_379312;
if(inst_379280){
var statearr_379343_379374 = state_379312__$1;
(statearr_379343_379374[(1)] = (17));

} else {
var statearr_379344_379375 = state_379312__$1;
(statearr_379344_379375[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (16))){
var inst_379296 = (state_379312[(2)]);
var state_379312__$1 = state_379312;
var statearr_379345_379376 = state_379312__$1;
(statearr_379345_379376[(2)] = inst_379296);

(statearr_379345_379376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379313 === (10))){
var inst_379267 = (state_379312[(9)]);
var inst_379265 = (state_379312[(12)]);
var inst_379272 = cljs.core._nth.call(null,inst_379265,inst_379267);
var state_379312__$1 = state_379312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379312__$1,(13),out,inst_379272);
} else {
if((state_val_379313 === (18))){
var inst_379278 = (state_379312[(7)]);
var inst_379287 = cljs.core.first.call(null,inst_379278);
var state_379312__$1 = state_379312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379312__$1,(20),out,inst_379287);
} else {
if((state_val_379313 === (8))){
var inst_379267 = (state_379312[(9)]);
var inst_379266 = (state_379312[(10)]);
var inst_379269 = (inst_379267 < inst_379266);
var inst_379270 = inst_379269;
var state_379312__$1 = state_379312;
if(cljs.core.truth_(inst_379270)){
var statearr_379346_379377 = state_379312__$1;
(statearr_379346_379377[(1)] = (10));

} else {
var statearr_379347_379378 = state_379312__$1;
(statearr_379347_379378[(1)] = (11));

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
});})(c__35562__auto__))
;
return ((function (switch__35450__auto__,c__35562__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35451__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35451__auto____0 = (function (){
var statearr_379351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_379351[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35451__auto__);

(statearr_379351[(1)] = (1));

return statearr_379351;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35451__auto____1 = (function (state_379312){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_379312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e379352){if((e379352 instanceof Object)){
var ex__35454__auto__ = e379352;
var statearr_379353_379379 = state_379312;
(statearr_379353_379379[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_379312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e379352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__379380 = state_379312;
state_379312 = G__379380;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35451__auto__ = function(state_379312){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35451__auto____1.call(this,state_379312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35451__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35451__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto__))
})();
var state__35564__auto__ = (function (){var statearr_379354 = f__35563__auto__.call(null);
(statearr_379354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto__);

return statearr_379354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto__))
);

return c__35562__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args379381 = [];
var len__25219__auto___379384 = arguments.length;
var i__25220__auto___379385 = (0);
while(true){
if((i__25220__auto___379385 < len__25219__auto___379384)){
args379381.push((arguments[i__25220__auto___379385]));

var G__379386 = (i__25220__auto___379385 + (1));
i__25220__auto___379385 = G__379386;
continue;
} else {
}
break;
}

var G__379383 = args379381.length;
switch (G__379383) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args379381.length)].join('')));

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
var args379388 = [];
var len__25219__auto___379391 = arguments.length;
var i__25220__auto___379392 = (0);
while(true){
if((i__25220__auto___379392 < len__25219__auto___379391)){
args379388.push((arguments[i__25220__auto___379392]));

var G__379393 = (i__25220__auto___379392 + (1));
i__25220__auto___379392 = G__379393;
continue;
} else {
}
break;
}

var G__379390 = args379388.length;
switch (G__379390) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args379388.length)].join('')));

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
var args379395 = [];
var len__25219__auto___379446 = arguments.length;
var i__25220__auto___379447 = (0);
while(true){
if((i__25220__auto___379447 < len__25219__auto___379446)){
args379395.push((arguments[i__25220__auto___379447]));

var G__379448 = (i__25220__auto___379447 + (1));
i__25220__auto___379447 = G__379448;
continue;
} else {
}
break;
}

var G__379397 = args379395.length;
switch (G__379397) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args379395.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35562__auto___379450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___379450,out){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___379450,out){
return (function (state_379421){
var state_val_379422 = (state_379421[(1)]);
if((state_val_379422 === (7))){
var inst_379416 = (state_379421[(2)]);
var state_379421__$1 = state_379421;
var statearr_379423_379451 = state_379421__$1;
(statearr_379423_379451[(2)] = inst_379416);

(statearr_379423_379451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379422 === (1))){
var inst_379398 = null;
var state_379421__$1 = (function (){var statearr_379424 = state_379421;
(statearr_379424[(7)] = inst_379398);

return statearr_379424;
})();
var statearr_379425_379452 = state_379421__$1;
(statearr_379425_379452[(2)] = null);

(statearr_379425_379452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379422 === (4))){
var inst_379401 = (state_379421[(8)]);
var inst_379401__$1 = (state_379421[(2)]);
var inst_379402 = (inst_379401__$1 == null);
var inst_379403 = cljs.core.not.call(null,inst_379402);
var state_379421__$1 = (function (){var statearr_379426 = state_379421;
(statearr_379426[(8)] = inst_379401__$1);

return statearr_379426;
})();
if(inst_379403){
var statearr_379427_379453 = state_379421__$1;
(statearr_379427_379453[(1)] = (5));

} else {
var statearr_379428_379454 = state_379421__$1;
(statearr_379428_379454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379422 === (6))){
var state_379421__$1 = state_379421;
var statearr_379429_379455 = state_379421__$1;
(statearr_379429_379455[(2)] = null);

(statearr_379429_379455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379422 === (3))){
var inst_379418 = (state_379421[(2)]);
var inst_379419 = cljs.core.async.close_BANG_.call(null,out);
var state_379421__$1 = (function (){var statearr_379430 = state_379421;
(statearr_379430[(9)] = inst_379418);

return statearr_379430;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_379421__$1,inst_379419);
} else {
if((state_val_379422 === (2))){
var state_379421__$1 = state_379421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379421__$1,(4),ch);
} else {
if((state_val_379422 === (11))){
var inst_379401 = (state_379421[(8)]);
var inst_379410 = (state_379421[(2)]);
var inst_379398 = inst_379401;
var state_379421__$1 = (function (){var statearr_379431 = state_379421;
(statearr_379431[(10)] = inst_379410);

(statearr_379431[(7)] = inst_379398);

return statearr_379431;
})();
var statearr_379432_379456 = state_379421__$1;
(statearr_379432_379456[(2)] = null);

(statearr_379432_379456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379422 === (9))){
var inst_379401 = (state_379421[(8)]);
var state_379421__$1 = state_379421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379421__$1,(11),out,inst_379401);
} else {
if((state_val_379422 === (5))){
var inst_379401 = (state_379421[(8)]);
var inst_379398 = (state_379421[(7)]);
var inst_379405 = cljs.core._EQ_.call(null,inst_379401,inst_379398);
var state_379421__$1 = state_379421;
if(inst_379405){
var statearr_379434_379457 = state_379421__$1;
(statearr_379434_379457[(1)] = (8));

} else {
var statearr_379435_379458 = state_379421__$1;
(statearr_379435_379458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379422 === (10))){
var inst_379413 = (state_379421[(2)]);
var state_379421__$1 = state_379421;
var statearr_379436_379459 = state_379421__$1;
(statearr_379436_379459[(2)] = inst_379413);

(statearr_379436_379459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379422 === (8))){
var inst_379398 = (state_379421[(7)]);
var tmp379433 = inst_379398;
var inst_379398__$1 = tmp379433;
var state_379421__$1 = (function (){var statearr_379437 = state_379421;
(statearr_379437[(7)] = inst_379398__$1);

return statearr_379437;
})();
var statearr_379438_379460 = state_379421__$1;
(statearr_379438_379460[(2)] = null);

(statearr_379438_379460[(1)] = (2));


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
});})(c__35562__auto___379450,out))
;
return ((function (switch__35450__auto__,c__35562__auto___379450,out){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_379442 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_379442[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_379442[(1)] = (1));

return statearr_379442;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_379421){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_379421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e379443){if((e379443 instanceof Object)){
var ex__35454__auto__ = e379443;
var statearr_379444_379461 = state_379421;
(statearr_379444_379461[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_379421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e379443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__379462 = state_379421;
state_379421 = G__379462;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_379421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_379421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___379450,out))
})();
var state__35564__auto__ = (function (){var statearr_379445 = f__35563__auto__.call(null);
(statearr_379445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___379450);

return statearr_379445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___379450,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args379463 = [];
var len__25219__auto___379533 = arguments.length;
var i__25220__auto___379534 = (0);
while(true){
if((i__25220__auto___379534 < len__25219__auto___379533)){
args379463.push((arguments[i__25220__auto___379534]));

var G__379535 = (i__25220__auto___379534 + (1));
i__25220__auto___379534 = G__379535;
continue;
} else {
}
break;
}

var G__379465 = args379463.length;
switch (G__379465) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args379463.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35562__auto___379537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___379537,out){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___379537,out){
return (function (state_379503){
var state_val_379504 = (state_379503[(1)]);
if((state_val_379504 === (7))){
var inst_379499 = (state_379503[(2)]);
var state_379503__$1 = state_379503;
var statearr_379505_379538 = state_379503__$1;
(statearr_379505_379538[(2)] = inst_379499);

(statearr_379505_379538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379504 === (1))){
var inst_379466 = (new Array(n));
var inst_379467 = inst_379466;
var inst_379468 = (0);
var state_379503__$1 = (function (){var statearr_379506 = state_379503;
(statearr_379506[(7)] = inst_379467);

(statearr_379506[(8)] = inst_379468);

return statearr_379506;
})();
var statearr_379507_379539 = state_379503__$1;
(statearr_379507_379539[(2)] = null);

(statearr_379507_379539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379504 === (4))){
var inst_379471 = (state_379503[(9)]);
var inst_379471__$1 = (state_379503[(2)]);
var inst_379472 = (inst_379471__$1 == null);
var inst_379473 = cljs.core.not.call(null,inst_379472);
var state_379503__$1 = (function (){var statearr_379508 = state_379503;
(statearr_379508[(9)] = inst_379471__$1);

return statearr_379508;
})();
if(inst_379473){
var statearr_379509_379540 = state_379503__$1;
(statearr_379509_379540[(1)] = (5));

} else {
var statearr_379510_379541 = state_379503__$1;
(statearr_379510_379541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379504 === (15))){
var inst_379493 = (state_379503[(2)]);
var state_379503__$1 = state_379503;
var statearr_379511_379542 = state_379503__$1;
(statearr_379511_379542[(2)] = inst_379493);

(statearr_379511_379542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379504 === (13))){
var state_379503__$1 = state_379503;
var statearr_379512_379543 = state_379503__$1;
(statearr_379512_379543[(2)] = null);

(statearr_379512_379543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379504 === (6))){
var inst_379468 = (state_379503[(8)]);
var inst_379489 = (inst_379468 > (0));
var state_379503__$1 = state_379503;
if(cljs.core.truth_(inst_379489)){
var statearr_379513_379544 = state_379503__$1;
(statearr_379513_379544[(1)] = (12));

} else {
var statearr_379514_379545 = state_379503__$1;
(statearr_379514_379545[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379504 === (3))){
var inst_379501 = (state_379503[(2)]);
var state_379503__$1 = state_379503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_379503__$1,inst_379501);
} else {
if((state_val_379504 === (12))){
var inst_379467 = (state_379503[(7)]);
var inst_379491 = cljs.core.vec.call(null,inst_379467);
var state_379503__$1 = state_379503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379503__$1,(15),out,inst_379491);
} else {
if((state_val_379504 === (2))){
var state_379503__$1 = state_379503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379503__$1,(4),ch);
} else {
if((state_val_379504 === (11))){
var inst_379483 = (state_379503[(2)]);
var inst_379484 = (new Array(n));
var inst_379467 = inst_379484;
var inst_379468 = (0);
var state_379503__$1 = (function (){var statearr_379515 = state_379503;
(statearr_379515[(10)] = inst_379483);

(statearr_379515[(7)] = inst_379467);

(statearr_379515[(8)] = inst_379468);

return statearr_379515;
})();
var statearr_379516_379546 = state_379503__$1;
(statearr_379516_379546[(2)] = null);

(statearr_379516_379546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379504 === (9))){
var inst_379467 = (state_379503[(7)]);
var inst_379481 = cljs.core.vec.call(null,inst_379467);
var state_379503__$1 = state_379503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379503__$1,(11),out,inst_379481);
} else {
if((state_val_379504 === (5))){
var inst_379476 = (state_379503[(11)]);
var inst_379467 = (state_379503[(7)]);
var inst_379468 = (state_379503[(8)]);
var inst_379471 = (state_379503[(9)]);
var inst_379475 = (inst_379467[inst_379468] = inst_379471);
var inst_379476__$1 = (inst_379468 + (1));
var inst_379477 = (inst_379476__$1 < n);
var state_379503__$1 = (function (){var statearr_379517 = state_379503;
(statearr_379517[(11)] = inst_379476__$1);

(statearr_379517[(12)] = inst_379475);

return statearr_379517;
})();
if(cljs.core.truth_(inst_379477)){
var statearr_379518_379547 = state_379503__$1;
(statearr_379518_379547[(1)] = (8));

} else {
var statearr_379519_379548 = state_379503__$1;
(statearr_379519_379548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379504 === (14))){
var inst_379496 = (state_379503[(2)]);
var inst_379497 = cljs.core.async.close_BANG_.call(null,out);
var state_379503__$1 = (function (){var statearr_379521 = state_379503;
(statearr_379521[(13)] = inst_379496);

return statearr_379521;
})();
var statearr_379522_379549 = state_379503__$1;
(statearr_379522_379549[(2)] = inst_379497);

(statearr_379522_379549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379504 === (10))){
var inst_379487 = (state_379503[(2)]);
var state_379503__$1 = state_379503;
var statearr_379523_379550 = state_379503__$1;
(statearr_379523_379550[(2)] = inst_379487);

(statearr_379523_379550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379504 === (8))){
var inst_379476 = (state_379503[(11)]);
var inst_379467 = (state_379503[(7)]);
var tmp379520 = inst_379467;
var inst_379467__$1 = tmp379520;
var inst_379468 = inst_379476;
var state_379503__$1 = (function (){var statearr_379524 = state_379503;
(statearr_379524[(7)] = inst_379467__$1);

(statearr_379524[(8)] = inst_379468);

return statearr_379524;
})();
var statearr_379525_379551 = state_379503__$1;
(statearr_379525_379551[(2)] = null);

(statearr_379525_379551[(1)] = (2));


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
});})(c__35562__auto___379537,out))
;
return ((function (switch__35450__auto__,c__35562__auto___379537,out){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_379529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_379529[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_379529[(1)] = (1));

return statearr_379529;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_379503){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_379503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e379530){if((e379530 instanceof Object)){
var ex__35454__auto__ = e379530;
var statearr_379531_379552 = state_379503;
(statearr_379531_379552[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_379503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e379530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__379553 = state_379503;
state_379503 = G__379553;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_379503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_379503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___379537,out))
})();
var state__35564__auto__ = (function (){var statearr_379532 = f__35563__auto__.call(null);
(statearr_379532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___379537);

return statearr_379532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___379537,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args379554 = [];
var len__25219__auto___379628 = arguments.length;
var i__25220__auto___379629 = (0);
while(true){
if((i__25220__auto___379629 < len__25219__auto___379628)){
args379554.push((arguments[i__25220__auto___379629]));

var G__379630 = (i__25220__auto___379629 + (1));
i__25220__auto___379629 = G__379630;
continue;
} else {
}
break;
}

var G__379556 = args379554.length;
switch (G__379556) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args379554.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35562__auto___379632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___379632,out){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___379632,out){
return (function (state_379598){
var state_val_379599 = (state_379598[(1)]);
if((state_val_379599 === (7))){
var inst_379594 = (state_379598[(2)]);
var state_379598__$1 = state_379598;
var statearr_379600_379633 = state_379598__$1;
(statearr_379600_379633[(2)] = inst_379594);

(statearr_379600_379633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379599 === (1))){
var inst_379557 = [];
var inst_379558 = inst_379557;
var inst_379559 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_379598__$1 = (function (){var statearr_379601 = state_379598;
(statearr_379601[(7)] = inst_379559);

(statearr_379601[(8)] = inst_379558);

return statearr_379601;
})();
var statearr_379602_379634 = state_379598__$1;
(statearr_379602_379634[(2)] = null);

(statearr_379602_379634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379599 === (4))){
var inst_379562 = (state_379598[(9)]);
var inst_379562__$1 = (state_379598[(2)]);
var inst_379563 = (inst_379562__$1 == null);
var inst_379564 = cljs.core.not.call(null,inst_379563);
var state_379598__$1 = (function (){var statearr_379603 = state_379598;
(statearr_379603[(9)] = inst_379562__$1);

return statearr_379603;
})();
if(inst_379564){
var statearr_379604_379635 = state_379598__$1;
(statearr_379604_379635[(1)] = (5));

} else {
var statearr_379605_379636 = state_379598__$1;
(statearr_379605_379636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379599 === (15))){
var inst_379588 = (state_379598[(2)]);
var state_379598__$1 = state_379598;
var statearr_379606_379637 = state_379598__$1;
(statearr_379606_379637[(2)] = inst_379588);

(statearr_379606_379637[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379599 === (13))){
var state_379598__$1 = state_379598;
var statearr_379607_379638 = state_379598__$1;
(statearr_379607_379638[(2)] = null);

(statearr_379607_379638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379599 === (6))){
var inst_379558 = (state_379598[(8)]);
var inst_379583 = inst_379558.length;
var inst_379584 = (inst_379583 > (0));
var state_379598__$1 = state_379598;
if(cljs.core.truth_(inst_379584)){
var statearr_379608_379639 = state_379598__$1;
(statearr_379608_379639[(1)] = (12));

} else {
var statearr_379609_379640 = state_379598__$1;
(statearr_379609_379640[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379599 === (3))){
var inst_379596 = (state_379598[(2)]);
var state_379598__$1 = state_379598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_379598__$1,inst_379596);
} else {
if((state_val_379599 === (12))){
var inst_379558 = (state_379598[(8)]);
var inst_379586 = cljs.core.vec.call(null,inst_379558);
var state_379598__$1 = state_379598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379598__$1,(15),out,inst_379586);
} else {
if((state_val_379599 === (2))){
var state_379598__$1 = state_379598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379598__$1,(4),ch);
} else {
if((state_val_379599 === (11))){
var inst_379566 = (state_379598[(10)]);
var inst_379562 = (state_379598[(9)]);
var inst_379576 = (state_379598[(2)]);
var inst_379577 = [];
var inst_379578 = inst_379577.push(inst_379562);
var inst_379558 = inst_379577;
var inst_379559 = inst_379566;
var state_379598__$1 = (function (){var statearr_379610 = state_379598;
(statearr_379610[(11)] = inst_379578);

(statearr_379610[(12)] = inst_379576);

(statearr_379610[(7)] = inst_379559);

(statearr_379610[(8)] = inst_379558);

return statearr_379610;
})();
var statearr_379611_379641 = state_379598__$1;
(statearr_379611_379641[(2)] = null);

(statearr_379611_379641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379599 === (9))){
var inst_379558 = (state_379598[(8)]);
var inst_379574 = cljs.core.vec.call(null,inst_379558);
var state_379598__$1 = state_379598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_379598__$1,(11),out,inst_379574);
} else {
if((state_val_379599 === (5))){
var inst_379566 = (state_379598[(10)]);
var inst_379559 = (state_379598[(7)]);
var inst_379562 = (state_379598[(9)]);
var inst_379566__$1 = f.call(null,inst_379562);
var inst_379567 = cljs.core._EQ_.call(null,inst_379566__$1,inst_379559);
var inst_379568 = cljs.core.keyword_identical_QMARK_.call(null,inst_379559,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_379569 = (inst_379567) || (inst_379568);
var state_379598__$1 = (function (){var statearr_379612 = state_379598;
(statearr_379612[(10)] = inst_379566__$1);

return statearr_379612;
})();
if(cljs.core.truth_(inst_379569)){
var statearr_379613_379642 = state_379598__$1;
(statearr_379613_379642[(1)] = (8));

} else {
var statearr_379614_379643 = state_379598__$1;
(statearr_379614_379643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379599 === (14))){
var inst_379591 = (state_379598[(2)]);
var inst_379592 = cljs.core.async.close_BANG_.call(null,out);
var state_379598__$1 = (function (){var statearr_379616 = state_379598;
(statearr_379616[(13)] = inst_379591);

return statearr_379616;
})();
var statearr_379617_379644 = state_379598__$1;
(statearr_379617_379644[(2)] = inst_379592);

(statearr_379617_379644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379599 === (10))){
var inst_379581 = (state_379598[(2)]);
var state_379598__$1 = state_379598;
var statearr_379618_379645 = state_379598__$1;
(statearr_379618_379645[(2)] = inst_379581);

(statearr_379618_379645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379599 === (8))){
var inst_379566 = (state_379598[(10)]);
var inst_379558 = (state_379598[(8)]);
var inst_379562 = (state_379598[(9)]);
var inst_379571 = inst_379558.push(inst_379562);
var tmp379615 = inst_379558;
var inst_379558__$1 = tmp379615;
var inst_379559 = inst_379566;
var state_379598__$1 = (function (){var statearr_379619 = state_379598;
(statearr_379619[(7)] = inst_379559);

(statearr_379619[(14)] = inst_379571);

(statearr_379619[(8)] = inst_379558__$1);

return statearr_379619;
})();
var statearr_379620_379646 = state_379598__$1;
(statearr_379620_379646[(2)] = null);

(statearr_379620_379646[(1)] = (2));


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
});})(c__35562__auto___379632,out))
;
return ((function (switch__35450__auto__,c__35562__auto___379632,out){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_379624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_379624[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_379624[(1)] = (1));

return statearr_379624;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_379598){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_379598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e379625){if((e379625 instanceof Object)){
var ex__35454__auto__ = e379625;
var statearr_379626_379647 = state_379598;
(statearr_379626_379647[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_379598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e379625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__379648 = state_379598;
state_379598 = G__379648;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_379598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_379598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___379632,out))
})();
var state__35564__auto__ = (function (){var statearr_379627 = f__35563__auto__.call(null);
(statearr_379627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___379632);

return statearr_379627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___379632,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map