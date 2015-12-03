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
if(typeof cljs.core.async.t_cljs$core$async49063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49063 = (function (fn_handler,f,meta49064){
this.fn_handler = fn_handler;
this.f = f;
this.meta49064 = meta49064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49065,meta49064__$1){
var self__ = this;
var _49065__$1 = this;
return (new cljs.core.async.t_cljs$core$async49063(self__.fn_handler,self__.f,meta49064__$1));
});

cljs.core.async.t_cljs$core$async49063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49065){
var self__ = this;
var _49065__$1 = this;
return self__.meta49064;
});

cljs.core.async.t_cljs$core$async49063.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async49063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async49063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta49064","meta49064",473523959,null)], null);
});

cljs.core.async.t_cljs$core$async49063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49063";

cljs.core.async.t_cljs$core$async49063.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cljs.core.async/t_cljs$core$async49063");
});

cljs.core.async.__GT_t_cljs$core$async49063 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async49063(fn_handler__$1,f__$1,meta49064){
return (new cljs.core.async.t_cljs$core$async49063(fn_handler__$1,f__$1,meta49064));
});

}

return (new cljs.core.async.t_cljs$core$async49063(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args49068 = [];
var len__25223__auto___49071 = arguments.length;
var i__25224__auto___49072 = (0);
while(true){
if((i__25224__auto___49072 < len__25223__auto___49071)){
args49068.push((arguments[i__25224__auto___49072]));

var G__49073 = (i__25224__auto___49072 + (1));
i__25224__auto___49072 = G__49073;
continue;
} else {
}
break;
}

var G__49070 = args49068.length;
switch (G__49070) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49068.length)].join('')));

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
var args49075 = [];
var len__25223__auto___49078 = arguments.length;
var i__25224__auto___49079 = (0);
while(true){
if((i__25224__auto___49079 < len__25223__auto___49078)){
args49075.push((arguments[i__25224__auto___49079]));

var G__49080 = (i__25224__auto___49079 + (1));
i__25224__auto___49079 = G__49080;
continue;
} else {
}
break;
}

var G__49077 = args49075.length;
switch (G__49077) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49075.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_49082 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_49082);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_49082,ret){
return (function (){
return fn1.call(null,val_49082);
});})(val_49082,ret))
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
var args49083 = [];
var len__25223__auto___49086 = arguments.length;
var i__25224__auto___49087 = (0);
while(true){
if((i__25224__auto___49087 < len__25223__auto___49086)){
args49083.push((arguments[i__25224__auto___49087]));

var G__49088 = (i__25224__auto___49087 + (1));
i__25224__auto___49087 = G__49088;
continue;
} else {
}
break;
}

var G__49085 = args49083.length;
switch (G__49085) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49083.length)].join('')));

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
var n__25068__auto___49090 = n;
var x_49091 = (0);
while(true){
if((x_49091 < n__25068__auto___49090)){
(a[x_49091] = (0));

var G__49092 = (x_49091 + (1));
x_49091 = G__49092;
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

var G__49093 = (i + (1));
i = G__49093;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async49097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49097 = (function (alt_flag,flag,meta49098){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta49098 = meta49098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_49099,meta49098__$1){
var self__ = this;
var _49099__$1 = this;
return (new cljs.core.async.t_cljs$core$async49097(self__.alt_flag,self__.flag,meta49098__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_49099){
var self__ = this;
var _49099__$1 = this;
return self__.meta49098;
});})(flag))
;

cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async49097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async49097.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49098","meta49098",-610792763,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async49097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49097";

cljs.core.async.t_cljs$core$async49097.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cljs.core.async/t_cljs$core$async49097");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async49097 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49097(alt_flag__$1,flag__$1,meta49098){
return (new cljs.core.async.t_cljs$core$async49097(alt_flag__$1,flag__$1,meta49098));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async49097(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async49103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49103 = (function (alt_handler,flag,cb,meta49104){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta49104 = meta49104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49105,meta49104__$1){
var self__ = this;
var _49105__$1 = this;
return (new cljs.core.async.t_cljs$core$async49103(self__.alt_handler,self__.flag,self__.cb,meta49104__$1));
});

cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49105){
var self__ = this;
var _49105__$1 = this;
return self__.meta49104;
});

cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async49103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async49103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49104","meta49104",-595189245,null)], null);
});

cljs.core.async.t_cljs$core$async49103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49103";

cljs.core.async.t_cljs$core$async49103.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cljs.core.async/t_cljs$core$async49103");
});

cljs.core.async.__GT_t_cljs$core$async49103 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49103(alt_handler__$1,flag__$1,cb__$1,meta49104){
return (new cljs.core.async.t_cljs$core$async49103(alt_handler__$1,flag__$1,cb__$1,meta49104));
});

}

return (new cljs.core.async.t_cljs$core$async49103(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__49106_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49106_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49107_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49107_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24165__auto__ = wport;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49108 = (i + (1));
i = G__49108;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24165__auto__ = ret;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__24153__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24153__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24153__auto__;
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
var args__25230__auto__ = [];
var len__25223__auto___49114 = arguments.length;
var i__25224__auto___49115 = (0);
while(true){
if((i__25224__auto___49115 < len__25223__auto___49114)){
args__25230__auto__.push((arguments[i__25224__auto___49115]));

var G__49116 = (i__25224__auto___49115 + (1));
i__25224__auto___49115 = G__49116;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((1) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25231__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49111){
var map__49112 = p__49111;
var map__49112__$1 = ((((!((map__49112 == null)))?((((map__49112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49112):map__49112);
var opts = map__49112__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49109){
var G__49110 = cljs.core.first.call(null,seq49109);
var seq49109__$1 = cljs.core.next.call(null,seq49109);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49110,seq49109__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args49117 = [];
var len__25223__auto___49167 = arguments.length;
var i__25224__auto___49168 = (0);
while(true){
if((i__25224__auto___49168 < len__25223__auto___49167)){
args49117.push((arguments[i__25224__auto___49168]));

var G__49169 = (i__25224__auto___49168 + (1));
i__25224__auto___49168 = G__49169;
continue;
} else {
}
break;
}

var G__49119 = args49117.length;
switch (G__49119) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49117.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35567__auto___49171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___49171){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___49171){
return (function (state_49143){
var state_val_49144 = (state_49143[(1)]);
if((state_val_49144 === (7))){
var inst_49139 = (state_49143[(2)]);
var state_49143__$1 = state_49143;
var statearr_49145_49172 = state_49143__$1;
(statearr_49145_49172[(2)] = inst_49139);

(statearr_49145_49172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49144 === (1))){
var state_49143__$1 = state_49143;
var statearr_49146_49173 = state_49143__$1;
(statearr_49146_49173[(2)] = null);

(statearr_49146_49173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49144 === (4))){
var inst_49122 = (state_49143[(7)]);
var inst_49122__$1 = (state_49143[(2)]);
var inst_49123 = (inst_49122__$1 == null);
var state_49143__$1 = (function (){var statearr_49147 = state_49143;
(statearr_49147[(7)] = inst_49122__$1);

return statearr_49147;
})();
if(cljs.core.truth_(inst_49123)){
var statearr_49148_49174 = state_49143__$1;
(statearr_49148_49174[(1)] = (5));

} else {
var statearr_49149_49175 = state_49143__$1;
(statearr_49149_49175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49144 === (13))){
var state_49143__$1 = state_49143;
var statearr_49150_49176 = state_49143__$1;
(statearr_49150_49176[(2)] = null);

(statearr_49150_49176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49144 === (6))){
var inst_49122 = (state_49143[(7)]);
var state_49143__$1 = state_49143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49143__$1,(11),to,inst_49122);
} else {
if((state_val_49144 === (3))){
var inst_49141 = (state_49143[(2)]);
var state_49143__$1 = state_49143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49143__$1,inst_49141);
} else {
if((state_val_49144 === (12))){
var state_49143__$1 = state_49143;
var statearr_49151_49177 = state_49143__$1;
(statearr_49151_49177[(2)] = null);

(statearr_49151_49177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49144 === (2))){
var state_49143__$1 = state_49143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49143__$1,(4),from);
} else {
if((state_val_49144 === (11))){
var inst_49132 = (state_49143[(2)]);
var state_49143__$1 = state_49143;
if(cljs.core.truth_(inst_49132)){
var statearr_49152_49178 = state_49143__$1;
(statearr_49152_49178[(1)] = (12));

} else {
var statearr_49153_49179 = state_49143__$1;
(statearr_49153_49179[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49144 === (9))){
var state_49143__$1 = state_49143;
var statearr_49154_49180 = state_49143__$1;
(statearr_49154_49180[(2)] = null);

(statearr_49154_49180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49144 === (5))){
var state_49143__$1 = state_49143;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49155_49181 = state_49143__$1;
(statearr_49155_49181[(1)] = (8));

} else {
var statearr_49156_49182 = state_49143__$1;
(statearr_49156_49182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49144 === (14))){
var inst_49137 = (state_49143[(2)]);
var state_49143__$1 = state_49143;
var statearr_49157_49183 = state_49143__$1;
(statearr_49157_49183[(2)] = inst_49137);

(statearr_49157_49183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49144 === (10))){
var inst_49129 = (state_49143[(2)]);
var state_49143__$1 = state_49143;
var statearr_49158_49184 = state_49143__$1;
(statearr_49158_49184[(2)] = inst_49129);

(statearr_49158_49184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49144 === (8))){
var inst_49126 = cljs.core.async.close_BANG_.call(null,to);
var state_49143__$1 = state_49143;
var statearr_49159_49185 = state_49143__$1;
(statearr_49159_49185[(2)] = inst_49126);

(statearr_49159_49185[(1)] = (10));


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
});})(c__35567__auto___49171))
;
return ((function (switch__35455__auto__,c__35567__auto___49171){
return (function() {
var cljs$core$async$state_machine__35456__auto__ = null;
var cljs$core$async$state_machine__35456__auto____0 = (function (){
var statearr_49163 = [null,null,null,null,null,null,null,null];
(statearr_49163[(0)] = cljs$core$async$state_machine__35456__auto__);

(statearr_49163[(1)] = (1));

return statearr_49163;
});
var cljs$core$async$state_machine__35456__auto____1 = (function (state_49143){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_49143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e49164){if((e49164 instanceof Object)){
var ex__35459__auto__ = e49164;
var statearr_49165_49186 = state_49143;
(statearr_49165_49186[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49187 = state_49143;
state_49143 = G__49187;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$state_machine__35456__auto__ = function(state_49143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35456__auto____1.call(this,state_49143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35456__auto____0;
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35456__auto____1;
return cljs$core$async$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___49171))
})();
var state__35569__auto__ = (function (){var statearr_49166 = f__35568__auto__.call(null);
(statearr_49166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___49171);

return statearr_49166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___49171))
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
return (function (p__49371){
var vec__49372 = p__49371;
var v = cljs.core.nth.call(null,vec__49372,(0),null);
var p = cljs.core.nth.call(null,vec__49372,(1),null);
var job = vec__49372;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35567__auto___49554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___49554,res,vec__49372,v,p,job,jobs,results){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___49554,res,vec__49372,v,p,job,jobs,results){
return (function (state_49377){
var state_val_49378 = (state_49377[(1)]);
if((state_val_49378 === (1))){
var state_49377__$1 = state_49377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49377__$1,(2),res,v);
} else {
if((state_val_49378 === (2))){
var inst_49374 = (state_49377[(2)]);
var inst_49375 = cljs.core.async.close_BANG_.call(null,res);
var state_49377__$1 = (function (){var statearr_49379 = state_49377;
(statearr_49379[(7)] = inst_49374);

return statearr_49379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49377__$1,inst_49375);
} else {
return null;
}
}
});})(c__35567__auto___49554,res,vec__49372,v,p,job,jobs,results))
;
return ((function (switch__35455__auto__,c__35567__auto___49554,res,vec__49372,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0 = (function (){
var statearr_49383 = [null,null,null,null,null,null,null,null];
(statearr_49383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__);

(statearr_49383[(1)] = (1));

return statearr_49383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1 = (function (state_49377){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_49377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e49384){if((e49384 instanceof Object)){
var ex__35459__auto__ = e49384;
var statearr_49385_49555 = state_49377;
(statearr_49385_49555[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49556 = state_49377;
state_49377 = G__49556;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__ = function(state_49377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1.call(this,state_49377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___49554,res,vec__49372,v,p,job,jobs,results))
})();
var state__35569__auto__ = (function (){var statearr_49386 = f__35568__auto__.call(null);
(statearr_49386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___49554);

return statearr_49386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___49554,res,vec__49372,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__49387){
var vec__49388 = p__49387;
var v = cljs.core.nth.call(null,vec__49388,(0),null);
var p = cljs.core.nth.call(null,vec__49388,(1),null);
var job = vec__49388;
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
var n__25068__auto___49557 = n;
var __49558 = (0);
while(true){
if((__49558 < n__25068__auto___49557)){
var G__49389_49559 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__49389_49559) {
case "compute":
var c__35567__auto___49561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__49558,c__35567__auto___49561,G__49389_49559,n__25068__auto___49557,jobs,results,process,async){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (__49558,c__35567__auto___49561,G__49389_49559,n__25068__auto___49557,jobs,results,process,async){
return (function (state_49402){
var state_val_49403 = (state_49402[(1)]);
if((state_val_49403 === (1))){
var state_49402__$1 = state_49402;
var statearr_49404_49562 = state_49402__$1;
(statearr_49404_49562[(2)] = null);

(statearr_49404_49562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (2))){
var state_49402__$1 = state_49402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49402__$1,(4),jobs);
} else {
if((state_val_49403 === (3))){
var inst_49400 = (state_49402[(2)]);
var state_49402__$1 = state_49402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49402__$1,inst_49400);
} else {
if((state_val_49403 === (4))){
var inst_49392 = (state_49402[(2)]);
var inst_49393 = process.call(null,inst_49392);
var state_49402__$1 = state_49402;
if(cljs.core.truth_(inst_49393)){
var statearr_49405_49563 = state_49402__$1;
(statearr_49405_49563[(1)] = (5));

} else {
var statearr_49406_49564 = state_49402__$1;
(statearr_49406_49564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (5))){
var state_49402__$1 = state_49402;
var statearr_49407_49565 = state_49402__$1;
(statearr_49407_49565[(2)] = null);

(statearr_49407_49565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (6))){
var state_49402__$1 = state_49402;
var statearr_49408_49566 = state_49402__$1;
(statearr_49408_49566[(2)] = null);

(statearr_49408_49566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (7))){
var inst_49398 = (state_49402[(2)]);
var state_49402__$1 = state_49402;
var statearr_49409_49567 = state_49402__$1;
(statearr_49409_49567[(2)] = inst_49398);

(statearr_49409_49567[(1)] = (3));


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
});})(__49558,c__35567__auto___49561,G__49389_49559,n__25068__auto___49557,jobs,results,process,async))
;
return ((function (__49558,switch__35455__auto__,c__35567__auto___49561,G__49389_49559,n__25068__auto___49557,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0 = (function (){
var statearr_49413 = [null,null,null,null,null,null,null];
(statearr_49413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__);

(statearr_49413[(1)] = (1));

return statearr_49413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1 = (function (state_49402){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_49402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e49414){if((e49414 instanceof Object)){
var ex__35459__auto__ = e49414;
var statearr_49415_49568 = state_49402;
(statearr_49415_49568[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49569 = state_49402;
state_49402 = G__49569;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__ = function(state_49402){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1.call(this,state_49402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__;
})()
;})(__49558,switch__35455__auto__,c__35567__auto___49561,G__49389_49559,n__25068__auto___49557,jobs,results,process,async))
})();
var state__35569__auto__ = (function (){var statearr_49416 = f__35568__auto__.call(null);
(statearr_49416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___49561);

return statearr_49416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(__49558,c__35567__auto___49561,G__49389_49559,n__25068__auto___49557,jobs,results,process,async))
);


break;
case "async":
var c__35567__auto___49570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__49558,c__35567__auto___49570,G__49389_49559,n__25068__auto___49557,jobs,results,process,async){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (__49558,c__35567__auto___49570,G__49389_49559,n__25068__auto___49557,jobs,results,process,async){
return (function (state_49429){
var state_val_49430 = (state_49429[(1)]);
if((state_val_49430 === (1))){
var state_49429__$1 = state_49429;
var statearr_49431_49571 = state_49429__$1;
(statearr_49431_49571[(2)] = null);

(statearr_49431_49571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49430 === (2))){
var state_49429__$1 = state_49429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49429__$1,(4),jobs);
} else {
if((state_val_49430 === (3))){
var inst_49427 = (state_49429[(2)]);
var state_49429__$1 = state_49429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49429__$1,inst_49427);
} else {
if((state_val_49430 === (4))){
var inst_49419 = (state_49429[(2)]);
var inst_49420 = async.call(null,inst_49419);
var state_49429__$1 = state_49429;
if(cljs.core.truth_(inst_49420)){
var statearr_49432_49572 = state_49429__$1;
(statearr_49432_49572[(1)] = (5));

} else {
var statearr_49433_49573 = state_49429__$1;
(statearr_49433_49573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49430 === (5))){
var state_49429__$1 = state_49429;
var statearr_49434_49574 = state_49429__$1;
(statearr_49434_49574[(2)] = null);

(statearr_49434_49574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49430 === (6))){
var state_49429__$1 = state_49429;
var statearr_49435_49575 = state_49429__$1;
(statearr_49435_49575[(2)] = null);

(statearr_49435_49575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49430 === (7))){
var inst_49425 = (state_49429[(2)]);
var state_49429__$1 = state_49429;
var statearr_49436_49576 = state_49429__$1;
(statearr_49436_49576[(2)] = inst_49425);

(statearr_49436_49576[(1)] = (3));


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
});})(__49558,c__35567__auto___49570,G__49389_49559,n__25068__auto___49557,jobs,results,process,async))
;
return ((function (__49558,switch__35455__auto__,c__35567__auto___49570,G__49389_49559,n__25068__auto___49557,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0 = (function (){
var statearr_49440 = [null,null,null,null,null,null,null];
(statearr_49440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__);

(statearr_49440[(1)] = (1));

return statearr_49440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1 = (function (state_49429){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_49429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e49441){if((e49441 instanceof Object)){
var ex__35459__auto__ = e49441;
var statearr_49442_49577 = state_49429;
(statearr_49442_49577[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49578 = state_49429;
state_49429 = G__49578;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__ = function(state_49429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1.call(this,state_49429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__;
})()
;})(__49558,switch__35455__auto__,c__35567__auto___49570,G__49389_49559,n__25068__auto___49557,jobs,results,process,async))
})();
var state__35569__auto__ = (function (){var statearr_49443 = f__35568__auto__.call(null);
(statearr_49443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___49570);

return statearr_49443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(__49558,c__35567__auto___49570,G__49389_49559,n__25068__auto___49557,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__49579 = (__49558 + (1));
__49558 = G__49579;
continue;
} else {
}
break;
}

var c__35567__auto___49580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___49580,jobs,results,process,async){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___49580,jobs,results,process,async){
return (function (state_49465){
var state_val_49466 = (state_49465[(1)]);
if((state_val_49466 === (1))){
var state_49465__$1 = state_49465;
var statearr_49467_49581 = state_49465__$1;
(statearr_49467_49581[(2)] = null);

(statearr_49467_49581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49466 === (2))){
var state_49465__$1 = state_49465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49465__$1,(4),from);
} else {
if((state_val_49466 === (3))){
var inst_49463 = (state_49465[(2)]);
var state_49465__$1 = state_49465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49465__$1,inst_49463);
} else {
if((state_val_49466 === (4))){
var inst_49446 = (state_49465[(7)]);
var inst_49446__$1 = (state_49465[(2)]);
var inst_49447 = (inst_49446__$1 == null);
var state_49465__$1 = (function (){var statearr_49468 = state_49465;
(statearr_49468[(7)] = inst_49446__$1);

return statearr_49468;
})();
if(cljs.core.truth_(inst_49447)){
var statearr_49469_49582 = state_49465__$1;
(statearr_49469_49582[(1)] = (5));

} else {
var statearr_49470_49583 = state_49465__$1;
(statearr_49470_49583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49466 === (5))){
var inst_49449 = cljs.core.async.close_BANG_.call(null,jobs);
var state_49465__$1 = state_49465;
var statearr_49471_49584 = state_49465__$1;
(statearr_49471_49584[(2)] = inst_49449);

(statearr_49471_49584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49466 === (6))){
var inst_49451 = (state_49465[(8)]);
var inst_49446 = (state_49465[(7)]);
var inst_49451__$1 = cljs.core.async.chan.call(null,(1));
var inst_49452 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49453 = [inst_49446,inst_49451__$1];
var inst_49454 = (new cljs.core.PersistentVector(null,2,(5),inst_49452,inst_49453,null));
var state_49465__$1 = (function (){var statearr_49472 = state_49465;
(statearr_49472[(8)] = inst_49451__$1);

return statearr_49472;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49465__$1,(8),jobs,inst_49454);
} else {
if((state_val_49466 === (7))){
var inst_49461 = (state_49465[(2)]);
var state_49465__$1 = state_49465;
var statearr_49473_49585 = state_49465__$1;
(statearr_49473_49585[(2)] = inst_49461);

(statearr_49473_49585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49466 === (8))){
var inst_49451 = (state_49465[(8)]);
var inst_49456 = (state_49465[(2)]);
var state_49465__$1 = (function (){var statearr_49474 = state_49465;
(statearr_49474[(9)] = inst_49456);

return statearr_49474;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49465__$1,(9),results,inst_49451);
} else {
if((state_val_49466 === (9))){
var inst_49458 = (state_49465[(2)]);
var state_49465__$1 = (function (){var statearr_49475 = state_49465;
(statearr_49475[(10)] = inst_49458);

return statearr_49475;
})();
var statearr_49476_49586 = state_49465__$1;
(statearr_49476_49586[(2)] = null);

(statearr_49476_49586[(1)] = (2));


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
});})(c__35567__auto___49580,jobs,results,process,async))
;
return ((function (switch__35455__auto__,c__35567__auto___49580,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0 = (function (){
var statearr_49480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__);

(statearr_49480[(1)] = (1));

return statearr_49480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1 = (function (state_49465){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_49465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e49481){if((e49481 instanceof Object)){
var ex__35459__auto__ = e49481;
var statearr_49482_49587 = state_49465;
(statearr_49482_49587[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49588 = state_49465;
state_49465 = G__49588;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__ = function(state_49465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1.call(this,state_49465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___49580,jobs,results,process,async))
})();
var state__35569__auto__ = (function (){var statearr_49483 = f__35568__auto__.call(null);
(statearr_49483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___49580);

return statearr_49483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___49580,jobs,results,process,async))
);


var c__35567__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto__,jobs,results,process,async){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto__,jobs,results,process,async){
return (function (state_49521){
var state_val_49522 = (state_49521[(1)]);
if((state_val_49522 === (7))){
var inst_49517 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
var statearr_49523_49589 = state_49521__$1;
(statearr_49523_49589[(2)] = inst_49517);

(statearr_49523_49589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (20))){
var state_49521__$1 = state_49521;
var statearr_49524_49590 = state_49521__$1;
(statearr_49524_49590[(2)] = null);

(statearr_49524_49590[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (1))){
var state_49521__$1 = state_49521;
var statearr_49525_49591 = state_49521__$1;
(statearr_49525_49591[(2)] = null);

(statearr_49525_49591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (4))){
var inst_49486 = (state_49521[(7)]);
var inst_49486__$1 = (state_49521[(2)]);
var inst_49487 = (inst_49486__$1 == null);
var state_49521__$1 = (function (){var statearr_49526 = state_49521;
(statearr_49526[(7)] = inst_49486__$1);

return statearr_49526;
})();
if(cljs.core.truth_(inst_49487)){
var statearr_49527_49592 = state_49521__$1;
(statearr_49527_49592[(1)] = (5));

} else {
var statearr_49528_49593 = state_49521__$1;
(statearr_49528_49593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (15))){
var inst_49499 = (state_49521[(8)]);
var state_49521__$1 = state_49521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49521__$1,(18),to,inst_49499);
} else {
if((state_val_49522 === (21))){
var inst_49512 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
var statearr_49529_49594 = state_49521__$1;
(statearr_49529_49594[(2)] = inst_49512);

(statearr_49529_49594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (13))){
var inst_49514 = (state_49521[(2)]);
var state_49521__$1 = (function (){var statearr_49530 = state_49521;
(statearr_49530[(9)] = inst_49514);

return statearr_49530;
})();
var statearr_49531_49595 = state_49521__$1;
(statearr_49531_49595[(2)] = null);

(statearr_49531_49595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (6))){
var inst_49486 = (state_49521[(7)]);
var state_49521__$1 = state_49521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49521__$1,(11),inst_49486);
} else {
if((state_val_49522 === (17))){
var inst_49507 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
if(cljs.core.truth_(inst_49507)){
var statearr_49532_49596 = state_49521__$1;
(statearr_49532_49596[(1)] = (19));

} else {
var statearr_49533_49597 = state_49521__$1;
(statearr_49533_49597[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (3))){
var inst_49519 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49521__$1,inst_49519);
} else {
if((state_val_49522 === (12))){
var inst_49496 = (state_49521[(10)]);
var state_49521__$1 = state_49521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49521__$1,(14),inst_49496);
} else {
if((state_val_49522 === (2))){
var state_49521__$1 = state_49521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49521__$1,(4),results);
} else {
if((state_val_49522 === (19))){
var state_49521__$1 = state_49521;
var statearr_49534_49598 = state_49521__$1;
(statearr_49534_49598[(2)] = null);

(statearr_49534_49598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (11))){
var inst_49496 = (state_49521[(2)]);
var state_49521__$1 = (function (){var statearr_49535 = state_49521;
(statearr_49535[(10)] = inst_49496);

return statearr_49535;
})();
var statearr_49536_49599 = state_49521__$1;
(statearr_49536_49599[(2)] = null);

(statearr_49536_49599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (9))){
var state_49521__$1 = state_49521;
var statearr_49537_49600 = state_49521__$1;
(statearr_49537_49600[(2)] = null);

(statearr_49537_49600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (5))){
var state_49521__$1 = state_49521;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49538_49601 = state_49521__$1;
(statearr_49538_49601[(1)] = (8));

} else {
var statearr_49539_49602 = state_49521__$1;
(statearr_49539_49602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (14))){
var inst_49501 = (state_49521[(11)]);
var inst_49499 = (state_49521[(8)]);
var inst_49499__$1 = (state_49521[(2)]);
var inst_49500 = (inst_49499__$1 == null);
var inst_49501__$1 = cljs.core.not.call(null,inst_49500);
var state_49521__$1 = (function (){var statearr_49540 = state_49521;
(statearr_49540[(11)] = inst_49501__$1);

(statearr_49540[(8)] = inst_49499__$1);

return statearr_49540;
})();
if(inst_49501__$1){
var statearr_49541_49603 = state_49521__$1;
(statearr_49541_49603[(1)] = (15));

} else {
var statearr_49542_49604 = state_49521__$1;
(statearr_49542_49604[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (16))){
var inst_49501 = (state_49521[(11)]);
var state_49521__$1 = state_49521;
var statearr_49543_49605 = state_49521__$1;
(statearr_49543_49605[(2)] = inst_49501);

(statearr_49543_49605[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (10))){
var inst_49493 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
var statearr_49544_49606 = state_49521__$1;
(statearr_49544_49606[(2)] = inst_49493);

(statearr_49544_49606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (18))){
var inst_49504 = (state_49521[(2)]);
var state_49521__$1 = state_49521;
var statearr_49545_49607 = state_49521__$1;
(statearr_49545_49607[(2)] = inst_49504);

(statearr_49545_49607[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49522 === (8))){
var inst_49490 = cljs.core.async.close_BANG_.call(null,to);
var state_49521__$1 = state_49521;
var statearr_49546_49608 = state_49521__$1;
(statearr_49546_49608[(2)] = inst_49490);

(statearr_49546_49608[(1)] = (10));


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
});})(c__35567__auto__,jobs,results,process,async))
;
return ((function (switch__35455__auto__,c__35567__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0 = (function (){
var statearr_49550 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__);

(statearr_49550[(1)] = (1));

return statearr_49550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1 = (function (state_49521){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_49521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e49551){if((e49551 instanceof Object)){
var ex__35459__auto__ = e49551;
var statearr_49552_49609 = state_49521;
(statearr_49552_49609[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49610 = state_49521;
state_49521 = G__49610;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__ = function(state_49521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1.call(this,state_49521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto__,jobs,results,process,async))
})();
var state__35569__auto__ = (function (){var statearr_49553 = f__35568__auto__.call(null);
(statearr_49553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto__);

return statearr_49553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto__,jobs,results,process,async))
);

return c__35567__auto__;
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
var args49611 = [];
var len__25223__auto___49614 = arguments.length;
var i__25224__auto___49615 = (0);
while(true){
if((i__25224__auto___49615 < len__25223__auto___49614)){
args49611.push((arguments[i__25224__auto___49615]));

var G__49616 = (i__25224__auto___49615 + (1));
i__25224__auto___49615 = G__49616;
continue;
} else {
}
break;
}

var G__49613 = args49611.length;
switch (G__49613) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49611.length)].join('')));

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
var args49618 = [];
var len__25223__auto___49621 = arguments.length;
var i__25224__auto___49622 = (0);
while(true){
if((i__25224__auto___49622 < len__25223__auto___49621)){
args49618.push((arguments[i__25224__auto___49622]));

var G__49623 = (i__25224__auto___49622 + (1));
i__25224__auto___49622 = G__49623;
continue;
} else {
}
break;
}

var G__49620 = args49618.length;
switch (G__49620) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49618.length)].join('')));

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
var args49625 = [];
var len__25223__auto___49678 = arguments.length;
var i__25224__auto___49679 = (0);
while(true){
if((i__25224__auto___49679 < len__25223__auto___49678)){
args49625.push((arguments[i__25224__auto___49679]));

var G__49680 = (i__25224__auto___49679 + (1));
i__25224__auto___49679 = G__49680;
continue;
} else {
}
break;
}

var G__49627 = args49625.length;
switch (G__49627) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49625.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35567__auto___49682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___49682,tc,fc){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___49682,tc,fc){
return (function (state_49653){
var state_val_49654 = (state_49653[(1)]);
if((state_val_49654 === (7))){
var inst_49649 = (state_49653[(2)]);
var state_49653__$1 = state_49653;
var statearr_49655_49683 = state_49653__$1;
(statearr_49655_49683[(2)] = inst_49649);

(statearr_49655_49683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49654 === (1))){
var state_49653__$1 = state_49653;
var statearr_49656_49684 = state_49653__$1;
(statearr_49656_49684[(2)] = null);

(statearr_49656_49684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49654 === (4))){
var inst_49630 = (state_49653[(7)]);
var inst_49630__$1 = (state_49653[(2)]);
var inst_49631 = (inst_49630__$1 == null);
var state_49653__$1 = (function (){var statearr_49657 = state_49653;
(statearr_49657[(7)] = inst_49630__$1);

return statearr_49657;
})();
if(cljs.core.truth_(inst_49631)){
var statearr_49658_49685 = state_49653__$1;
(statearr_49658_49685[(1)] = (5));

} else {
var statearr_49659_49686 = state_49653__$1;
(statearr_49659_49686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49654 === (13))){
var state_49653__$1 = state_49653;
var statearr_49660_49687 = state_49653__$1;
(statearr_49660_49687[(2)] = null);

(statearr_49660_49687[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49654 === (6))){
var inst_49630 = (state_49653[(7)]);
var inst_49636 = p.call(null,inst_49630);
var state_49653__$1 = state_49653;
if(cljs.core.truth_(inst_49636)){
var statearr_49661_49688 = state_49653__$1;
(statearr_49661_49688[(1)] = (9));

} else {
var statearr_49662_49689 = state_49653__$1;
(statearr_49662_49689[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49654 === (3))){
var inst_49651 = (state_49653[(2)]);
var state_49653__$1 = state_49653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49653__$1,inst_49651);
} else {
if((state_val_49654 === (12))){
var state_49653__$1 = state_49653;
var statearr_49663_49690 = state_49653__$1;
(statearr_49663_49690[(2)] = null);

(statearr_49663_49690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49654 === (2))){
var state_49653__$1 = state_49653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49653__$1,(4),ch);
} else {
if((state_val_49654 === (11))){
var inst_49630 = (state_49653[(7)]);
var inst_49640 = (state_49653[(2)]);
var state_49653__$1 = state_49653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49653__$1,(8),inst_49640,inst_49630);
} else {
if((state_val_49654 === (9))){
var state_49653__$1 = state_49653;
var statearr_49664_49691 = state_49653__$1;
(statearr_49664_49691[(2)] = tc);

(statearr_49664_49691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49654 === (5))){
var inst_49633 = cljs.core.async.close_BANG_.call(null,tc);
var inst_49634 = cljs.core.async.close_BANG_.call(null,fc);
var state_49653__$1 = (function (){var statearr_49665 = state_49653;
(statearr_49665[(8)] = inst_49633);

return statearr_49665;
})();
var statearr_49666_49692 = state_49653__$1;
(statearr_49666_49692[(2)] = inst_49634);

(statearr_49666_49692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49654 === (14))){
var inst_49647 = (state_49653[(2)]);
var state_49653__$1 = state_49653;
var statearr_49667_49693 = state_49653__$1;
(statearr_49667_49693[(2)] = inst_49647);

(statearr_49667_49693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49654 === (10))){
var state_49653__$1 = state_49653;
var statearr_49668_49694 = state_49653__$1;
(statearr_49668_49694[(2)] = fc);

(statearr_49668_49694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49654 === (8))){
var inst_49642 = (state_49653[(2)]);
var state_49653__$1 = state_49653;
if(cljs.core.truth_(inst_49642)){
var statearr_49669_49695 = state_49653__$1;
(statearr_49669_49695[(1)] = (12));

} else {
var statearr_49670_49696 = state_49653__$1;
(statearr_49670_49696[(1)] = (13));

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
});})(c__35567__auto___49682,tc,fc))
;
return ((function (switch__35455__auto__,c__35567__auto___49682,tc,fc){
return (function() {
var cljs$core$async$state_machine__35456__auto__ = null;
var cljs$core$async$state_machine__35456__auto____0 = (function (){
var statearr_49674 = [null,null,null,null,null,null,null,null,null];
(statearr_49674[(0)] = cljs$core$async$state_machine__35456__auto__);

(statearr_49674[(1)] = (1));

return statearr_49674;
});
var cljs$core$async$state_machine__35456__auto____1 = (function (state_49653){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_49653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e49675){if((e49675 instanceof Object)){
var ex__35459__auto__ = e49675;
var statearr_49676_49697 = state_49653;
(statearr_49676_49697[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49698 = state_49653;
state_49653 = G__49698;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$state_machine__35456__auto__ = function(state_49653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35456__auto____1.call(this,state_49653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35456__auto____0;
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35456__auto____1;
return cljs$core$async$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___49682,tc,fc))
})();
var state__35569__auto__ = (function (){var statearr_49677 = f__35568__auto__.call(null);
(statearr_49677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___49682);

return statearr_49677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___49682,tc,fc))
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
var c__35567__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto__){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto__){
return (function (state_49745){
var state_val_49746 = (state_49745[(1)]);
if((state_val_49746 === (1))){
var inst_49731 = init;
var state_49745__$1 = (function (){var statearr_49747 = state_49745;
(statearr_49747[(7)] = inst_49731);

return statearr_49747;
})();
var statearr_49748_49763 = state_49745__$1;
(statearr_49748_49763[(2)] = null);

(statearr_49748_49763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49746 === (2))){
var state_49745__$1 = state_49745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49745__$1,(4),ch);
} else {
if((state_val_49746 === (3))){
var inst_49743 = (state_49745[(2)]);
var state_49745__$1 = state_49745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49745__$1,inst_49743);
} else {
if((state_val_49746 === (4))){
var inst_49734 = (state_49745[(8)]);
var inst_49734__$1 = (state_49745[(2)]);
var inst_49735 = (inst_49734__$1 == null);
var state_49745__$1 = (function (){var statearr_49749 = state_49745;
(statearr_49749[(8)] = inst_49734__$1);

return statearr_49749;
})();
if(cljs.core.truth_(inst_49735)){
var statearr_49750_49764 = state_49745__$1;
(statearr_49750_49764[(1)] = (5));

} else {
var statearr_49751_49765 = state_49745__$1;
(statearr_49751_49765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49746 === (5))){
var inst_49731 = (state_49745[(7)]);
var state_49745__$1 = state_49745;
var statearr_49752_49766 = state_49745__$1;
(statearr_49752_49766[(2)] = inst_49731);

(statearr_49752_49766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49746 === (6))){
var inst_49731 = (state_49745[(7)]);
var inst_49734 = (state_49745[(8)]);
var inst_49738 = f.call(null,inst_49731,inst_49734);
var inst_49731__$1 = inst_49738;
var state_49745__$1 = (function (){var statearr_49753 = state_49745;
(statearr_49753[(7)] = inst_49731__$1);

return statearr_49753;
})();
var statearr_49754_49767 = state_49745__$1;
(statearr_49754_49767[(2)] = null);

(statearr_49754_49767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49746 === (7))){
var inst_49741 = (state_49745[(2)]);
var state_49745__$1 = state_49745;
var statearr_49755_49768 = state_49745__$1;
(statearr_49755_49768[(2)] = inst_49741);

(statearr_49755_49768[(1)] = (3));


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
});})(c__35567__auto__))
;
return ((function (switch__35455__auto__,c__35567__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35456__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35456__auto____0 = (function (){
var statearr_49759 = [null,null,null,null,null,null,null,null,null];
(statearr_49759[(0)] = cljs$core$async$reduce_$_state_machine__35456__auto__);

(statearr_49759[(1)] = (1));

return statearr_49759;
});
var cljs$core$async$reduce_$_state_machine__35456__auto____1 = (function (state_49745){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_49745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e49760){if((e49760 instanceof Object)){
var ex__35459__auto__ = e49760;
var statearr_49761_49769 = state_49745;
(statearr_49761_49769[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49770 = state_49745;
state_49745 = G__49770;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35456__auto__ = function(state_49745){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35456__auto____1.call(this,state_49745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35456__auto____0;
cljs$core$async$reduce_$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35456__auto____1;
return cljs$core$async$reduce_$_state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto__))
})();
var state__35569__auto__ = (function (){var statearr_49762 = f__35568__auto__.call(null);
(statearr_49762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto__);

return statearr_49762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto__))
);

return c__35567__auto__;
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
var args49771 = [];
var len__25223__auto___49823 = arguments.length;
var i__25224__auto___49824 = (0);
while(true){
if((i__25224__auto___49824 < len__25223__auto___49823)){
args49771.push((arguments[i__25224__auto___49824]));

var G__49825 = (i__25224__auto___49824 + (1));
i__25224__auto___49824 = G__49825;
continue;
} else {
}
break;
}

var G__49773 = args49771.length;
switch (G__49773) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49771.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35567__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto__){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto__){
return (function (state_49798){
var state_val_49799 = (state_49798[(1)]);
if((state_val_49799 === (7))){
var inst_49780 = (state_49798[(2)]);
var state_49798__$1 = state_49798;
var statearr_49800_49827 = state_49798__$1;
(statearr_49800_49827[(2)] = inst_49780);

(statearr_49800_49827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49799 === (1))){
var inst_49774 = cljs.core.seq.call(null,coll);
var inst_49775 = inst_49774;
var state_49798__$1 = (function (){var statearr_49801 = state_49798;
(statearr_49801[(7)] = inst_49775);

return statearr_49801;
})();
var statearr_49802_49828 = state_49798__$1;
(statearr_49802_49828[(2)] = null);

(statearr_49802_49828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49799 === (4))){
var inst_49775 = (state_49798[(7)]);
var inst_49778 = cljs.core.first.call(null,inst_49775);
var state_49798__$1 = state_49798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49798__$1,(7),ch,inst_49778);
} else {
if((state_val_49799 === (13))){
var inst_49792 = (state_49798[(2)]);
var state_49798__$1 = state_49798;
var statearr_49803_49829 = state_49798__$1;
(statearr_49803_49829[(2)] = inst_49792);

(statearr_49803_49829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49799 === (6))){
var inst_49783 = (state_49798[(2)]);
var state_49798__$1 = state_49798;
if(cljs.core.truth_(inst_49783)){
var statearr_49804_49830 = state_49798__$1;
(statearr_49804_49830[(1)] = (8));

} else {
var statearr_49805_49831 = state_49798__$1;
(statearr_49805_49831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49799 === (3))){
var inst_49796 = (state_49798[(2)]);
var state_49798__$1 = state_49798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49798__$1,inst_49796);
} else {
if((state_val_49799 === (12))){
var state_49798__$1 = state_49798;
var statearr_49806_49832 = state_49798__$1;
(statearr_49806_49832[(2)] = null);

(statearr_49806_49832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49799 === (2))){
var inst_49775 = (state_49798[(7)]);
var state_49798__$1 = state_49798;
if(cljs.core.truth_(inst_49775)){
var statearr_49807_49833 = state_49798__$1;
(statearr_49807_49833[(1)] = (4));

} else {
var statearr_49808_49834 = state_49798__$1;
(statearr_49808_49834[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49799 === (11))){
var inst_49789 = cljs.core.async.close_BANG_.call(null,ch);
var state_49798__$1 = state_49798;
var statearr_49809_49835 = state_49798__$1;
(statearr_49809_49835[(2)] = inst_49789);

(statearr_49809_49835[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49799 === (9))){
var state_49798__$1 = state_49798;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49810_49836 = state_49798__$1;
(statearr_49810_49836[(1)] = (11));

} else {
var statearr_49811_49837 = state_49798__$1;
(statearr_49811_49837[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49799 === (5))){
var inst_49775 = (state_49798[(7)]);
var state_49798__$1 = state_49798;
var statearr_49812_49838 = state_49798__$1;
(statearr_49812_49838[(2)] = inst_49775);

(statearr_49812_49838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49799 === (10))){
var inst_49794 = (state_49798[(2)]);
var state_49798__$1 = state_49798;
var statearr_49813_49839 = state_49798__$1;
(statearr_49813_49839[(2)] = inst_49794);

(statearr_49813_49839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49799 === (8))){
var inst_49775 = (state_49798[(7)]);
var inst_49785 = cljs.core.next.call(null,inst_49775);
var inst_49775__$1 = inst_49785;
var state_49798__$1 = (function (){var statearr_49814 = state_49798;
(statearr_49814[(7)] = inst_49775__$1);

return statearr_49814;
})();
var statearr_49815_49840 = state_49798__$1;
(statearr_49815_49840[(2)] = null);

(statearr_49815_49840[(1)] = (2));


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
});})(c__35567__auto__))
;
return ((function (switch__35455__auto__,c__35567__auto__){
return (function() {
var cljs$core$async$state_machine__35456__auto__ = null;
var cljs$core$async$state_machine__35456__auto____0 = (function (){
var statearr_49819 = [null,null,null,null,null,null,null,null];
(statearr_49819[(0)] = cljs$core$async$state_machine__35456__auto__);

(statearr_49819[(1)] = (1));

return statearr_49819;
});
var cljs$core$async$state_machine__35456__auto____1 = (function (state_49798){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_49798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e49820){if((e49820 instanceof Object)){
var ex__35459__auto__ = e49820;
var statearr_49821_49841 = state_49798;
(statearr_49821_49841[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49842 = state_49798;
state_49798 = G__49842;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$state_machine__35456__auto__ = function(state_49798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35456__auto____1.call(this,state_49798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35456__auto____0;
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35456__auto____1;
return cljs$core$async$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto__))
})();
var state__35569__auto__ = (function (){var statearr_49822 = f__35568__auto__.call(null);
(statearr_49822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto__);

return statearr_49822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto__))
);

return c__35567__auto__;
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
var x__24820__auto__ = (((_ == null))?null:_);
var m__24821__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,_);
} else {
var m__24821__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,_);
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
var x__24820__auto__ = (((m == null))?null:m);
var m__24821__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__24821__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__24820__auto__ = (((m == null))?null:m);
var m__24821__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,m,ch);
} else {
var m__24821__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,m,ch);
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
var x__24820__auto__ = (((m == null))?null:m);
var m__24821__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,m);
} else {
var m__24821__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async50064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50064 = (function (mult,ch,cs,meta50065){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta50065 = meta50065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_50066,meta50065__$1){
var self__ = this;
var _50066__$1 = this;
return (new cljs.core.async.t_cljs$core$async50064(self__.mult,self__.ch,self__.cs,meta50065__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async50064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_50066){
var self__ = this;
var _50066__$1 = this;
return self__.meta50065;
});})(cs))
;

cljs.core.async.t_cljs$core$async50064.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async50064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async50064.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async50064.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50064.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50064.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50064.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50065","meta50065",-1814896314,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async50064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50064";

cljs.core.async.t_cljs$core$async50064.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cljs.core.async/t_cljs$core$async50064");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async50064 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async50064(mult__$1,ch__$1,cs__$1,meta50065){
return (new cljs.core.async.t_cljs$core$async50064(mult__$1,ch__$1,cs__$1,meta50065));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async50064(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35567__auto___50285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___50285,cs,m,dchan,dctr,done){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___50285,cs,m,dchan,dctr,done){
return (function (state_50197){
var state_val_50198 = (state_50197[(1)]);
if((state_val_50198 === (7))){
var inst_50193 = (state_50197[(2)]);
var state_50197__$1 = state_50197;
var statearr_50199_50286 = state_50197__$1;
(statearr_50199_50286[(2)] = inst_50193);

(statearr_50199_50286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (20))){
var inst_50098 = (state_50197[(7)]);
var inst_50108 = cljs.core.first.call(null,inst_50098);
var inst_50109 = cljs.core.nth.call(null,inst_50108,(0),null);
var inst_50110 = cljs.core.nth.call(null,inst_50108,(1),null);
var state_50197__$1 = (function (){var statearr_50200 = state_50197;
(statearr_50200[(8)] = inst_50109);

return statearr_50200;
})();
if(cljs.core.truth_(inst_50110)){
var statearr_50201_50287 = state_50197__$1;
(statearr_50201_50287[(1)] = (22));

} else {
var statearr_50202_50288 = state_50197__$1;
(statearr_50202_50288[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (27))){
var inst_50140 = (state_50197[(9)]);
var inst_50069 = (state_50197[(10)]);
var inst_50138 = (state_50197[(11)]);
var inst_50145 = (state_50197[(12)]);
var inst_50145__$1 = cljs.core._nth.call(null,inst_50138,inst_50140);
var inst_50146 = cljs.core.async.put_BANG_.call(null,inst_50145__$1,inst_50069,done);
var state_50197__$1 = (function (){var statearr_50203 = state_50197;
(statearr_50203[(12)] = inst_50145__$1);

return statearr_50203;
})();
if(cljs.core.truth_(inst_50146)){
var statearr_50204_50289 = state_50197__$1;
(statearr_50204_50289[(1)] = (30));

} else {
var statearr_50205_50290 = state_50197__$1;
(statearr_50205_50290[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (1))){
var state_50197__$1 = state_50197;
var statearr_50206_50291 = state_50197__$1;
(statearr_50206_50291[(2)] = null);

(statearr_50206_50291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (24))){
var inst_50098 = (state_50197[(7)]);
var inst_50115 = (state_50197[(2)]);
var inst_50116 = cljs.core.next.call(null,inst_50098);
var inst_50078 = inst_50116;
var inst_50079 = null;
var inst_50080 = (0);
var inst_50081 = (0);
var state_50197__$1 = (function (){var statearr_50207 = state_50197;
(statearr_50207[(13)] = inst_50079);

(statearr_50207[(14)] = inst_50078);

(statearr_50207[(15)] = inst_50115);

(statearr_50207[(16)] = inst_50080);

(statearr_50207[(17)] = inst_50081);

return statearr_50207;
})();
var statearr_50208_50292 = state_50197__$1;
(statearr_50208_50292[(2)] = null);

(statearr_50208_50292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (39))){
var state_50197__$1 = state_50197;
var statearr_50212_50293 = state_50197__$1;
(statearr_50212_50293[(2)] = null);

(statearr_50212_50293[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (4))){
var inst_50069 = (state_50197[(10)]);
var inst_50069__$1 = (state_50197[(2)]);
var inst_50070 = (inst_50069__$1 == null);
var state_50197__$1 = (function (){var statearr_50213 = state_50197;
(statearr_50213[(10)] = inst_50069__$1);

return statearr_50213;
})();
if(cljs.core.truth_(inst_50070)){
var statearr_50214_50294 = state_50197__$1;
(statearr_50214_50294[(1)] = (5));

} else {
var statearr_50215_50295 = state_50197__$1;
(statearr_50215_50295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (15))){
var inst_50079 = (state_50197[(13)]);
var inst_50078 = (state_50197[(14)]);
var inst_50080 = (state_50197[(16)]);
var inst_50081 = (state_50197[(17)]);
var inst_50094 = (state_50197[(2)]);
var inst_50095 = (inst_50081 + (1));
var tmp50209 = inst_50079;
var tmp50210 = inst_50078;
var tmp50211 = inst_50080;
var inst_50078__$1 = tmp50210;
var inst_50079__$1 = tmp50209;
var inst_50080__$1 = tmp50211;
var inst_50081__$1 = inst_50095;
var state_50197__$1 = (function (){var statearr_50216 = state_50197;
(statearr_50216[(13)] = inst_50079__$1);

(statearr_50216[(14)] = inst_50078__$1);

(statearr_50216[(16)] = inst_50080__$1);

(statearr_50216[(18)] = inst_50094);

(statearr_50216[(17)] = inst_50081__$1);

return statearr_50216;
})();
var statearr_50217_50296 = state_50197__$1;
(statearr_50217_50296[(2)] = null);

(statearr_50217_50296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (21))){
var inst_50119 = (state_50197[(2)]);
var state_50197__$1 = state_50197;
var statearr_50221_50297 = state_50197__$1;
(statearr_50221_50297[(2)] = inst_50119);

(statearr_50221_50297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (31))){
var inst_50145 = (state_50197[(12)]);
var inst_50149 = done.call(null,null);
var inst_50150 = cljs.core.async.untap_STAR_.call(null,m,inst_50145);
var state_50197__$1 = (function (){var statearr_50222 = state_50197;
(statearr_50222[(19)] = inst_50149);

return statearr_50222;
})();
var statearr_50223_50298 = state_50197__$1;
(statearr_50223_50298[(2)] = inst_50150);

(statearr_50223_50298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (32))){
var inst_50140 = (state_50197[(9)]);
var inst_50138 = (state_50197[(11)]);
var inst_50137 = (state_50197[(20)]);
var inst_50139 = (state_50197[(21)]);
var inst_50152 = (state_50197[(2)]);
var inst_50153 = (inst_50140 + (1));
var tmp50218 = inst_50138;
var tmp50219 = inst_50137;
var tmp50220 = inst_50139;
var inst_50137__$1 = tmp50219;
var inst_50138__$1 = tmp50218;
var inst_50139__$1 = tmp50220;
var inst_50140__$1 = inst_50153;
var state_50197__$1 = (function (){var statearr_50224 = state_50197;
(statearr_50224[(9)] = inst_50140__$1);

(statearr_50224[(22)] = inst_50152);

(statearr_50224[(11)] = inst_50138__$1);

(statearr_50224[(20)] = inst_50137__$1);

(statearr_50224[(21)] = inst_50139__$1);

return statearr_50224;
})();
var statearr_50225_50299 = state_50197__$1;
(statearr_50225_50299[(2)] = null);

(statearr_50225_50299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (40))){
var inst_50165 = (state_50197[(23)]);
var inst_50169 = done.call(null,null);
var inst_50170 = cljs.core.async.untap_STAR_.call(null,m,inst_50165);
var state_50197__$1 = (function (){var statearr_50226 = state_50197;
(statearr_50226[(24)] = inst_50169);

return statearr_50226;
})();
var statearr_50227_50300 = state_50197__$1;
(statearr_50227_50300[(2)] = inst_50170);

(statearr_50227_50300[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (33))){
var inst_50156 = (state_50197[(25)]);
var inst_50158 = cljs.core.chunked_seq_QMARK_.call(null,inst_50156);
var state_50197__$1 = state_50197;
if(inst_50158){
var statearr_50228_50301 = state_50197__$1;
(statearr_50228_50301[(1)] = (36));

} else {
var statearr_50229_50302 = state_50197__$1;
(statearr_50229_50302[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (13))){
var inst_50088 = (state_50197[(26)]);
var inst_50091 = cljs.core.async.close_BANG_.call(null,inst_50088);
var state_50197__$1 = state_50197;
var statearr_50230_50303 = state_50197__$1;
(statearr_50230_50303[(2)] = inst_50091);

(statearr_50230_50303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (22))){
var inst_50109 = (state_50197[(8)]);
var inst_50112 = cljs.core.async.close_BANG_.call(null,inst_50109);
var state_50197__$1 = state_50197;
var statearr_50231_50304 = state_50197__$1;
(statearr_50231_50304[(2)] = inst_50112);

(statearr_50231_50304[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (36))){
var inst_50156 = (state_50197[(25)]);
var inst_50160 = cljs.core.chunk_first.call(null,inst_50156);
var inst_50161 = cljs.core.chunk_rest.call(null,inst_50156);
var inst_50162 = cljs.core.count.call(null,inst_50160);
var inst_50137 = inst_50161;
var inst_50138 = inst_50160;
var inst_50139 = inst_50162;
var inst_50140 = (0);
var state_50197__$1 = (function (){var statearr_50232 = state_50197;
(statearr_50232[(9)] = inst_50140);

(statearr_50232[(11)] = inst_50138);

(statearr_50232[(20)] = inst_50137);

(statearr_50232[(21)] = inst_50139);

return statearr_50232;
})();
var statearr_50233_50305 = state_50197__$1;
(statearr_50233_50305[(2)] = null);

(statearr_50233_50305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (41))){
var inst_50156 = (state_50197[(25)]);
var inst_50172 = (state_50197[(2)]);
var inst_50173 = cljs.core.next.call(null,inst_50156);
var inst_50137 = inst_50173;
var inst_50138 = null;
var inst_50139 = (0);
var inst_50140 = (0);
var state_50197__$1 = (function (){var statearr_50234 = state_50197;
(statearr_50234[(27)] = inst_50172);

(statearr_50234[(9)] = inst_50140);

(statearr_50234[(11)] = inst_50138);

(statearr_50234[(20)] = inst_50137);

(statearr_50234[(21)] = inst_50139);

return statearr_50234;
})();
var statearr_50235_50306 = state_50197__$1;
(statearr_50235_50306[(2)] = null);

(statearr_50235_50306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (43))){
var state_50197__$1 = state_50197;
var statearr_50236_50307 = state_50197__$1;
(statearr_50236_50307[(2)] = null);

(statearr_50236_50307[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (29))){
var inst_50181 = (state_50197[(2)]);
var state_50197__$1 = state_50197;
var statearr_50237_50308 = state_50197__$1;
(statearr_50237_50308[(2)] = inst_50181);

(statearr_50237_50308[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (44))){
var inst_50190 = (state_50197[(2)]);
var state_50197__$1 = (function (){var statearr_50238 = state_50197;
(statearr_50238[(28)] = inst_50190);

return statearr_50238;
})();
var statearr_50239_50309 = state_50197__$1;
(statearr_50239_50309[(2)] = null);

(statearr_50239_50309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (6))){
var inst_50129 = (state_50197[(29)]);
var inst_50128 = cljs.core.deref.call(null,cs);
var inst_50129__$1 = cljs.core.keys.call(null,inst_50128);
var inst_50130 = cljs.core.count.call(null,inst_50129__$1);
var inst_50131 = cljs.core.reset_BANG_.call(null,dctr,inst_50130);
var inst_50136 = cljs.core.seq.call(null,inst_50129__$1);
var inst_50137 = inst_50136;
var inst_50138 = null;
var inst_50139 = (0);
var inst_50140 = (0);
var state_50197__$1 = (function (){var statearr_50240 = state_50197;
(statearr_50240[(9)] = inst_50140);

(statearr_50240[(29)] = inst_50129__$1);

(statearr_50240[(30)] = inst_50131);

(statearr_50240[(11)] = inst_50138);

(statearr_50240[(20)] = inst_50137);

(statearr_50240[(21)] = inst_50139);

return statearr_50240;
})();
var statearr_50241_50310 = state_50197__$1;
(statearr_50241_50310[(2)] = null);

(statearr_50241_50310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (28))){
var inst_50156 = (state_50197[(25)]);
var inst_50137 = (state_50197[(20)]);
var inst_50156__$1 = cljs.core.seq.call(null,inst_50137);
var state_50197__$1 = (function (){var statearr_50242 = state_50197;
(statearr_50242[(25)] = inst_50156__$1);

return statearr_50242;
})();
if(inst_50156__$1){
var statearr_50243_50311 = state_50197__$1;
(statearr_50243_50311[(1)] = (33));

} else {
var statearr_50244_50312 = state_50197__$1;
(statearr_50244_50312[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (25))){
var inst_50140 = (state_50197[(9)]);
var inst_50139 = (state_50197[(21)]);
var inst_50142 = (inst_50140 < inst_50139);
var inst_50143 = inst_50142;
var state_50197__$1 = state_50197;
if(cljs.core.truth_(inst_50143)){
var statearr_50245_50313 = state_50197__$1;
(statearr_50245_50313[(1)] = (27));

} else {
var statearr_50246_50314 = state_50197__$1;
(statearr_50246_50314[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (34))){
var state_50197__$1 = state_50197;
var statearr_50247_50315 = state_50197__$1;
(statearr_50247_50315[(2)] = null);

(statearr_50247_50315[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (17))){
var state_50197__$1 = state_50197;
var statearr_50248_50316 = state_50197__$1;
(statearr_50248_50316[(2)] = null);

(statearr_50248_50316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (3))){
var inst_50195 = (state_50197[(2)]);
var state_50197__$1 = state_50197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50197__$1,inst_50195);
} else {
if((state_val_50198 === (12))){
var inst_50124 = (state_50197[(2)]);
var state_50197__$1 = state_50197;
var statearr_50249_50317 = state_50197__$1;
(statearr_50249_50317[(2)] = inst_50124);

(statearr_50249_50317[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (2))){
var state_50197__$1 = state_50197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50197__$1,(4),ch);
} else {
if((state_val_50198 === (23))){
var state_50197__$1 = state_50197;
var statearr_50250_50318 = state_50197__$1;
(statearr_50250_50318[(2)] = null);

(statearr_50250_50318[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (35))){
var inst_50179 = (state_50197[(2)]);
var state_50197__$1 = state_50197;
var statearr_50251_50319 = state_50197__$1;
(statearr_50251_50319[(2)] = inst_50179);

(statearr_50251_50319[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (19))){
var inst_50098 = (state_50197[(7)]);
var inst_50102 = cljs.core.chunk_first.call(null,inst_50098);
var inst_50103 = cljs.core.chunk_rest.call(null,inst_50098);
var inst_50104 = cljs.core.count.call(null,inst_50102);
var inst_50078 = inst_50103;
var inst_50079 = inst_50102;
var inst_50080 = inst_50104;
var inst_50081 = (0);
var state_50197__$1 = (function (){var statearr_50252 = state_50197;
(statearr_50252[(13)] = inst_50079);

(statearr_50252[(14)] = inst_50078);

(statearr_50252[(16)] = inst_50080);

(statearr_50252[(17)] = inst_50081);

return statearr_50252;
})();
var statearr_50253_50320 = state_50197__$1;
(statearr_50253_50320[(2)] = null);

(statearr_50253_50320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (11))){
var inst_50098 = (state_50197[(7)]);
var inst_50078 = (state_50197[(14)]);
var inst_50098__$1 = cljs.core.seq.call(null,inst_50078);
var state_50197__$1 = (function (){var statearr_50254 = state_50197;
(statearr_50254[(7)] = inst_50098__$1);

return statearr_50254;
})();
if(inst_50098__$1){
var statearr_50255_50321 = state_50197__$1;
(statearr_50255_50321[(1)] = (16));

} else {
var statearr_50256_50322 = state_50197__$1;
(statearr_50256_50322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (9))){
var inst_50126 = (state_50197[(2)]);
var state_50197__$1 = state_50197;
var statearr_50257_50323 = state_50197__$1;
(statearr_50257_50323[(2)] = inst_50126);

(statearr_50257_50323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (5))){
var inst_50076 = cljs.core.deref.call(null,cs);
var inst_50077 = cljs.core.seq.call(null,inst_50076);
var inst_50078 = inst_50077;
var inst_50079 = null;
var inst_50080 = (0);
var inst_50081 = (0);
var state_50197__$1 = (function (){var statearr_50258 = state_50197;
(statearr_50258[(13)] = inst_50079);

(statearr_50258[(14)] = inst_50078);

(statearr_50258[(16)] = inst_50080);

(statearr_50258[(17)] = inst_50081);

return statearr_50258;
})();
var statearr_50259_50324 = state_50197__$1;
(statearr_50259_50324[(2)] = null);

(statearr_50259_50324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (14))){
var state_50197__$1 = state_50197;
var statearr_50260_50325 = state_50197__$1;
(statearr_50260_50325[(2)] = null);

(statearr_50260_50325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (45))){
var inst_50187 = (state_50197[(2)]);
var state_50197__$1 = state_50197;
var statearr_50261_50326 = state_50197__$1;
(statearr_50261_50326[(2)] = inst_50187);

(statearr_50261_50326[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (26))){
var inst_50129 = (state_50197[(29)]);
var inst_50183 = (state_50197[(2)]);
var inst_50184 = cljs.core.seq.call(null,inst_50129);
var state_50197__$1 = (function (){var statearr_50262 = state_50197;
(statearr_50262[(31)] = inst_50183);

return statearr_50262;
})();
if(inst_50184){
var statearr_50263_50327 = state_50197__$1;
(statearr_50263_50327[(1)] = (42));

} else {
var statearr_50264_50328 = state_50197__$1;
(statearr_50264_50328[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (16))){
var inst_50098 = (state_50197[(7)]);
var inst_50100 = cljs.core.chunked_seq_QMARK_.call(null,inst_50098);
var state_50197__$1 = state_50197;
if(inst_50100){
var statearr_50265_50329 = state_50197__$1;
(statearr_50265_50329[(1)] = (19));

} else {
var statearr_50266_50330 = state_50197__$1;
(statearr_50266_50330[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (38))){
var inst_50176 = (state_50197[(2)]);
var state_50197__$1 = state_50197;
var statearr_50267_50331 = state_50197__$1;
(statearr_50267_50331[(2)] = inst_50176);

(statearr_50267_50331[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (30))){
var state_50197__$1 = state_50197;
var statearr_50268_50332 = state_50197__$1;
(statearr_50268_50332[(2)] = null);

(statearr_50268_50332[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (10))){
var inst_50079 = (state_50197[(13)]);
var inst_50081 = (state_50197[(17)]);
var inst_50087 = cljs.core._nth.call(null,inst_50079,inst_50081);
var inst_50088 = cljs.core.nth.call(null,inst_50087,(0),null);
var inst_50089 = cljs.core.nth.call(null,inst_50087,(1),null);
var state_50197__$1 = (function (){var statearr_50269 = state_50197;
(statearr_50269[(26)] = inst_50088);

return statearr_50269;
})();
if(cljs.core.truth_(inst_50089)){
var statearr_50270_50333 = state_50197__$1;
(statearr_50270_50333[(1)] = (13));

} else {
var statearr_50271_50334 = state_50197__$1;
(statearr_50271_50334[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (18))){
var inst_50122 = (state_50197[(2)]);
var state_50197__$1 = state_50197;
var statearr_50272_50335 = state_50197__$1;
(statearr_50272_50335[(2)] = inst_50122);

(statearr_50272_50335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (42))){
var state_50197__$1 = state_50197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50197__$1,(45),dchan);
} else {
if((state_val_50198 === (37))){
var inst_50165 = (state_50197[(23)]);
var inst_50069 = (state_50197[(10)]);
var inst_50156 = (state_50197[(25)]);
var inst_50165__$1 = cljs.core.first.call(null,inst_50156);
var inst_50166 = cljs.core.async.put_BANG_.call(null,inst_50165__$1,inst_50069,done);
var state_50197__$1 = (function (){var statearr_50273 = state_50197;
(statearr_50273[(23)] = inst_50165__$1);

return statearr_50273;
})();
if(cljs.core.truth_(inst_50166)){
var statearr_50274_50336 = state_50197__$1;
(statearr_50274_50336[(1)] = (39));

} else {
var statearr_50275_50337 = state_50197__$1;
(statearr_50275_50337[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50198 === (8))){
var inst_50080 = (state_50197[(16)]);
var inst_50081 = (state_50197[(17)]);
var inst_50083 = (inst_50081 < inst_50080);
var inst_50084 = inst_50083;
var state_50197__$1 = state_50197;
if(cljs.core.truth_(inst_50084)){
var statearr_50276_50338 = state_50197__$1;
(statearr_50276_50338[(1)] = (10));

} else {
var statearr_50277_50339 = state_50197__$1;
(statearr_50277_50339[(1)] = (11));

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
});})(c__35567__auto___50285,cs,m,dchan,dctr,done))
;
return ((function (switch__35455__auto__,c__35567__auto___50285,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35456__auto__ = null;
var cljs$core$async$mult_$_state_machine__35456__auto____0 = (function (){
var statearr_50281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50281[(0)] = cljs$core$async$mult_$_state_machine__35456__auto__);

(statearr_50281[(1)] = (1));

return statearr_50281;
});
var cljs$core$async$mult_$_state_machine__35456__auto____1 = (function (state_50197){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_50197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e50282){if((e50282 instanceof Object)){
var ex__35459__auto__ = e50282;
var statearr_50283_50340 = state_50197;
(statearr_50283_50340[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50341 = state_50197;
state_50197 = G__50341;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35456__auto__ = function(state_50197){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35456__auto____1.call(this,state_50197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35456__auto____0;
cljs$core$async$mult_$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35456__auto____1;
return cljs$core$async$mult_$_state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___50285,cs,m,dchan,dctr,done))
})();
var state__35569__auto__ = (function (){var statearr_50284 = f__35568__auto__.call(null);
(statearr_50284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___50285);

return statearr_50284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___50285,cs,m,dchan,dctr,done))
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
var args50342 = [];
var len__25223__auto___50345 = arguments.length;
var i__25224__auto___50346 = (0);
while(true){
if((i__25224__auto___50346 < len__25223__auto___50345)){
args50342.push((arguments[i__25224__auto___50346]));

var G__50347 = (i__25224__auto___50346 + (1));
i__25224__auto___50346 = G__50347;
continue;
} else {
}
break;
}

var G__50344 = args50342.length;
switch (G__50344) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50342.length)].join('')));

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
var x__24820__auto__ = (((m == null))?null:m);
var m__24821__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,m,ch);
} else {
var m__24821__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,m,ch);
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
var x__24820__auto__ = (((m == null))?null:m);
var m__24821__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,m,ch);
} else {
var m__24821__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,m,ch);
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
var x__24820__auto__ = (((m == null))?null:m);
var m__24821__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,m);
} else {
var m__24821__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,m);
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
var x__24820__auto__ = (((m == null))?null:m);
var m__24821__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,m,state_map);
} else {
var m__24821__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,m,state_map);
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
var x__24820__auto__ = (((m == null))?null:m);
var m__24821__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,m,mode);
} else {
var m__24821__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25230__auto__ = [];
var len__25223__auto___50359 = arguments.length;
var i__25224__auto___50360 = (0);
while(true){
if((i__25224__auto___50360 < len__25223__auto___50359)){
args__25230__auto__.push((arguments[i__25224__auto___50360]));

var G__50361 = (i__25224__auto___50360 + (1));
i__25224__auto___50360 = G__50361;
continue;
} else {
}
break;
}

var argseq__25231__auto__ = ((((3) < args__25230__auto__.length))?(new cljs.core.IndexedSeq(args__25230__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25231__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50353){
var map__50354 = p__50353;
var map__50354__$1 = ((((!((map__50354 == null)))?((((map__50354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50354):map__50354);
var opts = map__50354__$1;
var statearr_50356_50362 = state;
(statearr_50356_50362[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__50354,map__50354__$1,opts){
return (function (val){
var statearr_50357_50363 = state;
(statearr_50357_50363[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__50354,map__50354__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_50358_50364 = state;
(statearr_50358_50364[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50349){
var G__50350 = cljs.core.first.call(null,seq50349);
var seq50349__$1 = cljs.core.next.call(null,seq50349);
var G__50351 = cljs.core.first.call(null,seq50349__$1);
var seq50349__$2 = cljs.core.next.call(null,seq50349__$1);
var G__50352 = cljs.core.first.call(null,seq50349__$2);
var seq50349__$3 = cljs.core.next.call(null,seq50349__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50350,G__50351,G__50352,seq50349__$3);
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
if(typeof cljs.core.async.t_cljs$core$async50528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50528 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50529){
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
this.meta50529 = meta50529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50530,meta50529__$1){
var self__ = this;
var _50530__$1 = this;
return (new cljs.core.async.t_cljs$core$async50528(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50529__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50530){
var self__ = this;
var _50530__$1 = this;
return self__.meta50529;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50528.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async50528.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50529","meta50529",-477824830,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50528";

cljs.core.async.t_cljs$core$async50528.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cljs.core.async/t_cljs$core$async50528");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async50528 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async50528(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50529){
return (new cljs.core.async.t_cljs$core$async50528(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50529));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async50528(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35567__auto___50691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___50691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___50691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50628){
var state_val_50629 = (state_50628[(1)]);
if((state_val_50629 === (7))){
var inst_50546 = (state_50628[(2)]);
var state_50628__$1 = state_50628;
var statearr_50630_50692 = state_50628__$1;
(statearr_50630_50692[(2)] = inst_50546);

(statearr_50630_50692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (20))){
var inst_50558 = (state_50628[(7)]);
var state_50628__$1 = state_50628;
var statearr_50631_50693 = state_50628__$1;
(statearr_50631_50693[(2)] = inst_50558);

(statearr_50631_50693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (27))){
var state_50628__$1 = state_50628;
var statearr_50632_50694 = state_50628__$1;
(statearr_50632_50694[(2)] = null);

(statearr_50632_50694[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (1))){
var inst_50534 = (state_50628[(8)]);
var inst_50534__$1 = calc_state.call(null);
var inst_50536 = (inst_50534__$1 == null);
var inst_50537 = cljs.core.not.call(null,inst_50536);
var state_50628__$1 = (function (){var statearr_50633 = state_50628;
(statearr_50633[(8)] = inst_50534__$1);

return statearr_50633;
})();
if(inst_50537){
var statearr_50634_50695 = state_50628__$1;
(statearr_50634_50695[(1)] = (2));

} else {
var statearr_50635_50696 = state_50628__$1;
(statearr_50635_50696[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (24))){
var inst_50602 = (state_50628[(9)]);
var inst_50588 = (state_50628[(10)]);
var inst_50581 = (state_50628[(11)]);
var inst_50602__$1 = inst_50581.call(null,inst_50588);
var state_50628__$1 = (function (){var statearr_50636 = state_50628;
(statearr_50636[(9)] = inst_50602__$1);

return statearr_50636;
})();
if(cljs.core.truth_(inst_50602__$1)){
var statearr_50637_50697 = state_50628__$1;
(statearr_50637_50697[(1)] = (29));

} else {
var statearr_50638_50698 = state_50628__$1;
(statearr_50638_50698[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (4))){
var inst_50549 = (state_50628[(2)]);
var state_50628__$1 = state_50628;
if(cljs.core.truth_(inst_50549)){
var statearr_50639_50699 = state_50628__$1;
(statearr_50639_50699[(1)] = (8));

} else {
var statearr_50640_50700 = state_50628__$1;
(statearr_50640_50700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (15))){
var inst_50575 = (state_50628[(2)]);
var state_50628__$1 = state_50628;
if(cljs.core.truth_(inst_50575)){
var statearr_50641_50701 = state_50628__$1;
(statearr_50641_50701[(1)] = (19));

} else {
var statearr_50642_50702 = state_50628__$1;
(statearr_50642_50702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (21))){
var inst_50580 = (state_50628[(12)]);
var inst_50580__$1 = (state_50628[(2)]);
var inst_50581 = cljs.core.get.call(null,inst_50580__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50582 = cljs.core.get.call(null,inst_50580__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50583 = cljs.core.get.call(null,inst_50580__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50628__$1 = (function (){var statearr_50643 = state_50628;
(statearr_50643[(11)] = inst_50581);

(statearr_50643[(12)] = inst_50580__$1);

(statearr_50643[(13)] = inst_50582);

return statearr_50643;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_50628__$1,(22),inst_50583);
} else {
if((state_val_50629 === (31))){
var inst_50610 = (state_50628[(2)]);
var state_50628__$1 = state_50628;
if(cljs.core.truth_(inst_50610)){
var statearr_50644_50703 = state_50628__$1;
(statearr_50644_50703[(1)] = (32));

} else {
var statearr_50645_50704 = state_50628__$1;
(statearr_50645_50704[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (32))){
var inst_50587 = (state_50628[(14)]);
var state_50628__$1 = state_50628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50628__$1,(35),out,inst_50587);
} else {
if((state_val_50629 === (33))){
var inst_50580 = (state_50628[(12)]);
var inst_50558 = inst_50580;
var state_50628__$1 = (function (){var statearr_50646 = state_50628;
(statearr_50646[(7)] = inst_50558);

return statearr_50646;
})();
var statearr_50647_50705 = state_50628__$1;
(statearr_50647_50705[(2)] = null);

(statearr_50647_50705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (13))){
var inst_50558 = (state_50628[(7)]);
var inst_50565 = inst_50558.cljs$lang$protocol_mask$partition0$;
var inst_50566 = (inst_50565 & (64));
var inst_50567 = inst_50558.cljs$core$ISeq$;
var inst_50568 = (inst_50566) || (inst_50567);
var state_50628__$1 = state_50628;
if(cljs.core.truth_(inst_50568)){
var statearr_50648_50706 = state_50628__$1;
(statearr_50648_50706[(1)] = (16));

} else {
var statearr_50649_50707 = state_50628__$1;
(statearr_50649_50707[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (22))){
var inst_50587 = (state_50628[(14)]);
var inst_50588 = (state_50628[(10)]);
var inst_50586 = (state_50628[(2)]);
var inst_50587__$1 = cljs.core.nth.call(null,inst_50586,(0),null);
var inst_50588__$1 = cljs.core.nth.call(null,inst_50586,(1),null);
var inst_50589 = (inst_50587__$1 == null);
var inst_50590 = cljs.core._EQ_.call(null,inst_50588__$1,change);
var inst_50591 = (inst_50589) || (inst_50590);
var state_50628__$1 = (function (){var statearr_50650 = state_50628;
(statearr_50650[(14)] = inst_50587__$1);

(statearr_50650[(10)] = inst_50588__$1);

return statearr_50650;
})();
if(cljs.core.truth_(inst_50591)){
var statearr_50651_50708 = state_50628__$1;
(statearr_50651_50708[(1)] = (23));

} else {
var statearr_50652_50709 = state_50628__$1;
(statearr_50652_50709[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (36))){
var inst_50580 = (state_50628[(12)]);
var inst_50558 = inst_50580;
var state_50628__$1 = (function (){var statearr_50653 = state_50628;
(statearr_50653[(7)] = inst_50558);

return statearr_50653;
})();
var statearr_50654_50710 = state_50628__$1;
(statearr_50654_50710[(2)] = null);

(statearr_50654_50710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (29))){
var inst_50602 = (state_50628[(9)]);
var state_50628__$1 = state_50628;
var statearr_50655_50711 = state_50628__$1;
(statearr_50655_50711[(2)] = inst_50602);

(statearr_50655_50711[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (6))){
var state_50628__$1 = state_50628;
var statearr_50656_50712 = state_50628__$1;
(statearr_50656_50712[(2)] = false);

(statearr_50656_50712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (28))){
var inst_50598 = (state_50628[(2)]);
var inst_50599 = calc_state.call(null);
var inst_50558 = inst_50599;
var state_50628__$1 = (function (){var statearr_50657 = state_50628;
(statearr_50657[(15)] = inst_50598);

(statearr_50657[(7)] = inst_50558);

return statearr_50657;
})();
var statearr_50658_50713 = state_50628__$1;
(statearr_50658_50713[(2)] = null);

(statearr_50658_50713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (25))){
var inst_50624 = (state_50628[(2)]);
var state_50628__$1 = state_50628;
var statearr_50659_50714 = state_50628__$1;
(statearr_50659_50714[(2)] = inst_50624);

(statearr_50659_50714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (34))){
var inst_50622 = (state_50628[(2)]);
var state_50628__$1 = state_50628;
var statearr_50660_50715 = state_50628__$1;
(statearr_50660_50715[(2)] = inst_50622);

(statearr_50660_50715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (17))){
var state_50628__$1 = state_50628;
var statearr_50661_50716 = state_50628__$1;
(statearr_50661_50716[(2)] = false);

(statearr_50661_50716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (3))){
var state_50628__$1 = state_50628;
var statearr_50662_50717 = state_50628__$1;
(statearr_50662_50717[(2)] = false);

(statearr_50662_50717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (12))){
var inst_50626 = (state_50628[(2)]);
var state_50628__$1 = state_50628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50628__$1,inst_50626);
} else {
if((state_val_50629 === (2))){
var inst_50534 = (state_50628[(8)]);
var inst_50539 = inst_50534.cljs$lang$protocol_mask$partition0$;
var inst_50540 = (inst_50539 & (64));
var inst_50541 = inst_50534.cljs$core$ISeq$;
var inst_50542 = (inst_50540) || (inst_50541);
var state_50628__$1 = state_50628;
if(cljs.core.truth_(inst_50542)){
var statearr_50663_50718 = state_50628__$1;
(statearr_50663_50718[(1)] = (5));

} else {
var statearr_50664_50719 = state_50628__$1;
(statearr_50664_50719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (23))){
var inst_50587 = (state_50628[(14)]);
var inst_50593 = (inst_50587 == null);
var state_50628__$1 = state_50628;
if(cljs.core.truth_(inst_50593)){
var statearr_50665_50720 = state_50628__$1;
(statearr_50665_50720[(1)] = (26));

} else {
var statearr_50666_50721 = state_50628__$1;
(statearr_50666_50721[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (35))){
var inst_50613 = (state_50628[(2)]);
var state_50628__$1 = state_50628;
if(cljs.core.truth_(inst_50613)){
var statearr_50667_50722 = state_50628__$1;
(statearr_50667_50722[(1)] = (36));

} else {
var statearr_50668_50723 = state_50628__$1;
(statearr_50668_50723[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (19))){
var inst_50558 = (state_50628[(7)]);
var inst_50577 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50558);
var state_50628__$1 = state_50628;
var statearr_50669_50724 = state_50628__$1;
(statearr_50669_50724[(2)] = inst_50577);

(statearr_50669_50724[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (11))){
var inst_50558 = (state_50628[(7)]);
var inst_50562 = (inst_50558 == null);
var inst_50563 = cljs.core.not.call(null,inst_50562);
var state_50628__$1 = state_50628;
if(inst_50563){
var statearr_50670_50725 = state_50628__$1;
(statearr_50670_50725[(1)] = (13));

} else {
var statearr_50671_50726 = state_50628__$1;
(statearr_50671_50726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (9))){
var inst_50534 = (state_50628[(8)]);
var state_50628__$1 = state_50628;
var statearr_50672_50727 = state_50628__$1;
(statearr_50672_50727[(2)] = inst_50534);

(statearr_50672_50727[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (5))){
var state_50628__$1 = state_50628;
var statearr_50673_50728 = state_50628__$1;
(statearr_50673_50728[(2)] = true);

(statearr_50673_50728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (14))){
var state_50628__$1 = state_50628;
var statearr_50674_50729 = state_50628__$1;
(statearr_50674_50729[(2)] = false);

(statearr_50674_50729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (26))){
var inst_50588 = (state_50628[(10)]);
var inst_50595 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_50588);
var state_50628__$1 = state_50628;
var statearr_50675_50730 = state_50628__$1;
(statearr_50675_50730[(2)] = inst_50595);

(statearr_50675_50730[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (16))){
var state_50628__$1 = state_50628;
var statearr_50676_50731 = state_50628__$1;
(statearr_50676_50731[(2)] = true);

(statearr_50676_50731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (38))){
var inst_50618 = (state_50628[(2)]);
var state_50628__$1 = state_50628;
var statearr_50677_50732 = state_50628__$1;
(statearr_50677_50732[(2)] = inst_50618);

(statearr_50677_50732[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (30))){
var inst_50588 = (state_50628[(10)]);
var inst_50581 = (state_50628[(11)]);
var inst_50582 = (state_50628[(13)]);
var inst_50605 = cljs.core.empty_QMARK_.call(null,inst_50581);
var inst_50606 = inst_50582.call(null,inst_50588);
var inst_50607 = cljs.core.not.call(null,inst_50606);
var inst_50608 = (inst_50605) && (inst_50607);
var state_50628__$1 = state_50628;
var statearr_50678_50733 = state_50628__$1;
(statearr_50678_50733[(2)] = inst_50608);

(statearr_50678_50733[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (10))){
var inst_50534 = (state_50628[(8)]);
var inst_50554 = (state_50628[(2)]);
var inst_50555 = cljs.core.get.call(null,inst_50554,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50556 = cljs.core.get.call(null,inst_50554,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50557 = cljs.core.get.call(null,inst_50554,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50558 = inst_50534;
var state_50628__$1 = (function (){var statearr_50679 = state_50628;
(statearr_50679[(16)] = inst_50557);

(statearr_50679[(7)] = inst_50558);

(statearr_50679[(17)] = inst_50556);

(statearr_50679[(18)] = inst_50555);

return statearr_50679;
})();
var statearr_50680_50734 = state_50628__$1;
(statearr_50680_50734[(2)] = null);

(statearr_50680_50734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (18))){
var inst_50572 = (state_50628[(2)]);
var state_50628__$1 = state_50628;
var statearr_50681_50735 = state_50628__$1;
(statearr_50681_50735[(2)] = inst_50572);

(statearr_50681_50735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (37))){
var state_50628__$1 = state_50628;
var statearr_50682_50736 = state_50628__$1;
(statearr_50682_50736[(2)] = null);

(statearr_50682_50736[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50629 === (8))){
var inst_50534 = (state_50628[(8)]);
var inst_50551 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50534);
var state_50628__$1 = state_50628;
var statearr_50683_50737 = state_50628__$1;
(statearr_50683_50737[(2)] = inst_50551);

(statearr_50683_50737[(1)] = (10));


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
});})(c__35567__auto___50691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35455__auto__,c__35567__auto___50691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35456__auto__ = null;
var cljs$core$async$mix_$_state_machine__35456__auto____0 = (function (){
var statearr_50687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50687[(0)] = cljs$core$async$mix_$_state_machine__35456__auto__);

(statearr_50687[(1)] = (1));

return statearr_50687;
});
var cljs$core$async$mix_$_state_machine__35456__auto____1 = (function (state_50628){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_50628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e50688){if((e50688 instanceof Object)){
var ex__35459__auto__ = e50688;
var statearr_50689_50738 = state_50628;
(statearr_50689_50738[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50739 = state_50628;
state_50628 = G__50739;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35456__auto__ = function(state_50628){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35456__auto____1.call(this,state_50628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35456__auto____0;
cljs$core$async$mix_$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35456__auto____1;
return cljs$core$async$mix_$_state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___50691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35569__auto__ = (function (){var statearr_50690 = f__35568__auto__.call(null);
(statearr_50690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___50691);

return statearr_50690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___50691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__24820__auto__ = (((p == null))?null:p);
var m__24821__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__24821__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__24820__auto__ = (((p == null))?null:p);
var m__24821__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,p,v,ch);
} else {
var m__24821__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args50740 = [];
var len__25223__auto___50743 = arguments.length;
var i__25224__auto___50744 = (0);
while(true){
if((i__25224__auto___50744 < len__25223__auto___50743)){
args50740.push((arguments[i__25224__auto___50744]));

var G__50745 = (i__25224__auto___50744 + (1));
i__25224__auto___50744 = G__50745;
continue;
} else {
}
break;
}

var G__50742 = args50740.length;
switch (G__50742) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50740.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24820__auto__ = (((p == null))?null:p);
var m__24821__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,p);
} else {
var m__24821__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,p);
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
var x__24820__auto__ = (((p == null))?null:p);
var m__24821__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24820__auto__)]);
if(!((m__24821__auto__ == null))){
return m__24821__auto__.call(null,p,v);
} else {
var m__24821__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24821__auto____$1 == null))){
return m__24821__auto____$1.call(null,p,v);
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
var args50748 = [];
var len__25223__auto___50873 = arguments.length;
var i__25224__auto___50874 = (0);
while(true){
if((i__25224__auto___50874 < len__25223__auto___50873)){
args50748.push((arguments[i__25224__auto___50874]));

var G__50875 = (i__25224__auto___50874 + (1));
i__25224__auto___50874 = G__50875;
continue;
} else {
}
break;
}

var G__50750 = args50748.length;
switch (G__50750) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50748.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24165__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24165__auto__,mults){
return (function (p1__50747_SHARP_){
if(cljs.core.truth_(p1__50747_SHARP_.call(null,topic))){
return p1__50747_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__50747_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24165__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async50751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50751 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50752){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50752 = meta50752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50753,meta50752__$1){
var self__ = this;
var _50753__$1 = this;
return (new cljs.core.async.t_cljs$core$async50751(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50752__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50751.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50753){
var self__ = this;
var _50753__$1 = this;
return self__.meta50752;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50751.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async50751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50751.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async50751.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50751.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async50751.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50751.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50751.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50752","meta50752",457984313,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50751";

cljs.core.async.t_cljs$core$async50751.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cljs.core.async/t_cljs$core$async50751");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async50751 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async50751(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50752){
return (new cljs.core.async.t_cljs$core$async50751(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50752));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async50751(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35567__auto___50877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___50877,mults,ensure_mult,p){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___50877,mults,ensure_mult,p){
return (function (state_50825){
var state_val_50826 = (state_50825[(1)]);
if((state_val_50826 === (7))){
var inst_50821 = (state_50825[(2)]);
var state_50825__$1 = state_50825;
var statearr_50827_50878 = state_50825__$1;
(statearr_50827_50878[(2)] = inst_50821);

(statearr_50827_50878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (20))){
var state_50825__$1 = state_50825;
var statearr_50828_50879 = state_50825__$1;
(statearr_50828_50879[(2)] = null);

(statearr_50828_50879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (1))){
var state_50825__$1 = state_50825;
var statearr_50829_50880 = state_50825__$1;
(statearr_50829_50880[(2)] = null);

(statearr_50829_50880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (24))){
var inst_50804 = (state_50825[(7)]);
var inst_50813 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_50804);
var state_50825__$1 = state_50825;
var statearr_50830_50881 = state_50825__$1;
(statearr_50830_50881[(2)] = inst_50813);

(statearr_50830_50881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (4))){
var inst_50756 = (state_50825[(8)]);
var inst_50756__$1 = (state_50825[(2)]);
var inst_50757 = (inst_50756__$1 == null);
var state_50825__$1 = (function (){var statearr_50831 = state_50825;
(statearr_50831[(8)] = inst_50756__$1);

return statearr_50831;
})();
if(cljs.core.truth_(inst_50757)){
var statearr_50832_50882 = state_50825__$1;
(statearr_50832_50882[(1)] = (5));

} else {
var statearr_50833_50883 = state_50825__$1;
(statearr_50833_50883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (15))){
var inst_50798 = (state_50825[(2)]);
var state_50825__$1 = state_50825;
var statearr_50834_50884 = state_50825__$1;
(statearr_50834_50884[(2)] = inst_50798);

(statearr_50834_50884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (21))){
var inst_50818 = (state_50825[(2)]);
var state_50825__$1 = (function (){var statearr_50835 = state_50825;
(statearr_50835[(9)] = inst_50818);

return statearr_50835;
})();
var statearr_50836_50885 = state_50825__$1;
(statearr_50836_50885[(2)] = null);

(statearr_50836_50885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (13))){
var inst_50780 = (state_50825[(10)]);
var inst_50782 = cljs.core.chunked_seq_QMARK_.call(null,inst_50780);
var state_50825__$1 = state_50825;
if(inst_50782){
var statearr_50837_50886 = state_50825__$1;
(statearr_50837_50886[(1)] = (16));

} else {
var statearr_50838_50887 = state_50825__$1;
(statearr_50838_50887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (22))){
var inst_50810 = (state_50825[(2)]);
var state_50825__$1 = state_50825;
if(cljs.core.truth_(inst_50810)){
var statearr_50839_50888 = state_50825__$1;
(statearr_50839_50888[(1)] = (23));

} else {
var statearr_50840_50889 = state_50825__$1;
(statearr_50840_50889[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (6))){
var inst_50806 = (state_50825[(11)]);
var inst_50756 = (state_50825[(8)]);
var inst_50804 = (state_50825[(7)]);
var inst_50804__$1 = topic_fn.call(null,inst_50756);
var inst_50805 = cljs.core.deref.call(null,mults);
var inst_50806__$1 = cljs.core.get.call(null,inst_50805,inst_50804__$1);
var state_50825__$1 = (function (){var statearr_50841 = state_50825;
(statearr_50841[(11)] = inst_50806__$1);

(statearr_50841[(7)] = inst_50804__$1);

return statearr_50841;
})();
if(cljs.core.truth_(inst_50806__$1)){
var statearr_50842_50890 = state_50825__$1;
(statearr_50842_50890[(1)] = (19));

} else {
var statearr_50843_50891 = state_50825__$1;
(statearr_50843_50891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (25))){
var inst_50815 = (state_50825[(2)]);
var state_50825__$1 = state_50825;
var statearr_50844_50892 = state_50825__$1;
(statearr_50844_50892[(2)] = inst_50815);

(statearr_50844_50892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (17))){
var inst_50780 = (state_50825[(10)]);
var inst_50789 = cljs.core.first.call(null,inst_50780);
var inst_50790 = cljs.core.async.muxch_STAR_.call(null,inst_50789);
var inst_50791 = cljs.core.async.close_BANG_.call(null,inst_50790);
var inst_50792 = cljs.core.next.call(null,inst_50780);
var inst_50766 = inst_50792;
var inst_50767 = null;
var inst_50768 = (0);
var inst_50769 = (0);
var state_50825__$1 = (function (){var statearr_50845 = state_50825;
(statearr_50845[(12)] = inst_50766);

(statearr_50845[(13)] = inst_50769);

(statearr_50845[(14)] = inst_50767);

(statearr_50845[(15)] = inst_50768);

(statearr_50845[(16)] = inst_50791);

return statearr_50845;
})();
var statearr_50846_50893 = state_50825__$1;
(statearr_50846_50893[(2)] = null);

(statearr_50846_50893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (3))){
var inst_50823 = (state_50825[(2)]);
var state_50825__$1 = state_50825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50825__$1,inst_50823);
} else {
if((state_val_50826 === (12))){
var inst_50800 = (state_50825[(2)]);
var state_50825__$1 = state_50825;
var statearr_50847_50894 = state_50825__$1;
(statearr_50847_50894[(2)] = inst_50800);

(statearr_50847_50894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (2))){
var state_50825__$1 = state_50825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50825__$1,(4),ch);
} else {
if((state_val_50826 === (23))){
var state_50825__$1 = state_50825;
var statearr_50848_50895 = state_50825__$1;
(statearr_50848_50895[(2)] = null);

(statearr_50848_50895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (19))){
var inst_50806 = (state_50825[(11)]);
var inst_50756 = (state_50825[(8)]);
var inst_50808 = cljs.core.async.muxch_STAR_.call(null,inst_50806);
var state_50825__$1 = state_50825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50825__$1,(22),inst_50808,inst_50756);
} else {
if((state_val_50826 === (11))){
var inst_50766 = (state_50825[(12)]);
var inst_50780 = (state_50825[(10)]);
var inst_50780__$1 = cljs.core.seq.call(null,inst_50766);
var state_50825__$1 = (function (){var statearr_50849 = state_50825;
(statearr_50849[(10)] = inst_50780__$1);

return statearr_50849;
})();
if(inst_50780__$1){
var statearr_50850_50896 = state_50825__$1;
(statearr_50850_50896[(1)] = (13));

} else {
var statearr_50851_50897 = state_50825__$1;
(statearr_50851_50897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (9))){
var inst_50802 = (state_50825[(2)]);
var state_50825__$1 = state_50825;
var statearr_50852_50898 = state_50825__$1;
(statearr_50852_50898[(2)] = inst_50802);

(statearr_50852_50898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (5))){
var inst_50763 = cljs.core.deref.call(null,mults);
var inst_50764 = cljs.core.vals.call(null,inst_50763);
var inst_50765 = cljs.core.seq.call(null,inst_50764);
var inst_50766 = inst_50765;
var inst_50767 = null;
var inst_50768 = (0);
var inst_50769 = (0);
var state_50825__$1 = (function (){var statearr_50853 = state_50825;
(statearr_50853[(12)] = inst_50766);

(statearr_50853[(13)] = inst_50769);

(statearr_50853[(14)] = inst_50767);

(statearr_50853[(15)] = inst_50768);

return statearr_50853;
})();
var statearr_50854_50899 = state_50825__$1;
(statearr_50854_50899[(2)] = null);

(statearr_50854_50899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (14))){
var state_50825__$1 = state_50825;
var statearr_50858_50900 = state_50825__$1;
(statearr_50858_50900[(2)] = null);

(statearr_50858_50900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (16))){
var inst_50780 = (state_50825[(10)]);
var inst_50784 = cljs.core.chunk_first.call(null,inst_50780);
var inst_50785 = cljs.core.chunk_rest.call(null,inst_50780);
var inst_50786 = cljs.core.count.call(null,inst_50784);
var inst_50766 = inst_50785;
var inst_50767 = inst_50784;
var inst_50768 = inst_50786;
var inst_50769 = (0);
var state_50825__$1 = (function (){var statearr_50859 = state_50825;
(statearr_50859[(12)] = inst_50766);

(statearr_50859[(13)] = inst_50769);

(statearr_50859[(14)] = inst_50767);

(statearr_50859[(15)] = inst_50768);

return statearr_50859;
})();
var statearr_50860_50901 = state_50825__$1;
(statearr_50860_50901[(2)] = null);

(statearr_50860_50901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (10))){
var inst_50766 = (state_50825[(12)]);
var inst_50769 = (state_50825[(13)]);
var inst_50767 = (state_50825[(14)]);
var inst_50768 = (state_50825[(15)]);
var inst_50774 = cljs.core._nth.call(null,inst_50767,inst_50769);
var inst_50775 = cljs.core.async.muxch_STAR_.call(null,inst_50774);
var inst_50776 = cljs.core.async.close_BANG_.call(null,inst_50775);
var inst_50777 = (inst_50769 + (1));
var tmp50855 = inst_50766;
var tmp50856 = inst_50767;
var tmp50857 = inst_50768;
var inst_50766__$1 = tmp50855;
var inst_50767__$1 = tmp50856;
var inst_50768__$1 = tmp50857;
var inst_50769__$1 = inst_50777;
var state_50825__$1 = (function (){var statearr_50861 = state_50825;
(statearr_50861[(12)] = inst_50766__$1);

(statearr_50861[(13)] = inst_50769__$1);

(statearr_50861[(14)] = inst_50767__$1);

(statearr_50861[(17)] = inst_50776);

(statearr_50861[(15)] = inst_50768__$1);

return statearr_50861;
})();
var statearr_50862_50902 = state_50825__$1;
(statearr_50862_50902[(2)] = null);

(statearr_50862_50902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (18))){
var inst_50795 = (state_50825[(2)]);
var state_50825__$1 = state_50825;
var statearr_50863_50903 = state_50825__$1;
(statearr_50863_50903[(2)] = inst_50795);

(statearr_50863_50903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50826 === (8))){
var inst_50769 = (state_50825[(13)]);
var inst_50768 = (state_50825[(15)]);
var inst_50771 = (inst_50769 < inst_50768);
var inst_50772 = inst_50771;
var state_50825__$1 = state_50825;
if(cljs.core.truth_(inst_50772)){
var statearr_50864_50904 = state_50825__$1;
(statearr_50864_50904[(1)] = (10));

} else {
var statearr_50865_50905 = state_50825__$1;
(statearr_50865_50905[(1)] = (11));

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
});})(c__35567__auto___50877,mults,ensure_mult,p))
;
return ((function (switch__35455__auto__,c__35567__auto___50877,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35456__auto__ = null;
var cljs$core$async$state_machine__35456__auto____0 = (function (){
var statearr_50869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50869[(0)] = cljs$core$async$state_machine__35456__auto__);

(statearr_50869[(1)] = (1));

return statearr_50869;
});
var cljs$core$async$state_machine__35456__auto____1 = (function (state_50825){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_50825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e50870){if((e50870 instanceof Object)){
var ex__35459__auto__ = e50870;
var statearr_50871_50906 = state_50825;
(statearr_50871_50906[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50907 = state_50825;
state_50825 = G__50907;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$state_machine__35456__auto__ = function(state_50825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35456__auto____1.call(this,state_50825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35456__auto____0;
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35456__auto____1;
return cljs$core$async$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___50877,mults,ensure_mult,p))
})();
var state__35569__auto__ = (function (){var statearr_50872 = f__35568__auto__.call(null);
(statearr_50872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___50877);

return statearr_50872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___50877,mults,ensure_mult,p))
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
var args50908 = [];
var len__25223__auto___50911 = arguments.length;
var i__25224__auto___50912 = (0);
while(true){
if((i__25224__auto___50912 < len__25223__auto___50911)){
args50908.push((arguments[i__25224__auto___50912]));

var G__50913 = (i__25224__auto___50912 + (1));
i__25224__auto___50912 = G__50913;
continue;
} else {
}
break;
}

var G__50910 = args50908.length;
switch (G__50910) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50908.length)].join('')));

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
var args50915 = [];
var len__25223__auto___50918 = arguments.length;
var i__25224__auto___50919 = (0);
while(true){
if((i__25224__auto___50919 < len__25223__auto___50918)){
args50915.push((arguments[i__25224__auto___50919]));

var G__50920 = (i__25224__auto___50919 + (1));
i__25224__auto___50919 = G__50920;
continue;
} else {
}
break;
}

var G__50917 = args50915.length;
switch (G__50917) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50915.length)].join('')));

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
var args50922 = [];
var len__25223__auto___50993 = arguments.length;
var i__25224__auto___50994 = (0);
while(true){
if((i__25224__auto___50994 < len__25223__auto___50993)){
args50922.push((arguments[i__25224__auto___50994]));

var G__50995 = (i__25224__auto___50994 + (1));
i__25224__auto___50994 = G__50995;
continue;
} else {
}
break;
}

var G__50924 = args50922.length;
switch (G__50924) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50922.length)].join('')));

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
var c__35567__auto___50997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___50997,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___50997,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50963){
var state_val_50964 = (state_50963[(1)]);
if((state_val_50964 === (7))){
var state_50963__$1 = state_50963;
var statearr_50965_50998 = state_50963__$1;
(statearr_50965_50998[(2)] = null);

(statearr_50965_50998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50964 === (1))){
var state_50963__$1 = state_50963;
var statearr_50966_50999 = state_50963__$1;
(statearr_50966_50999[(2)] = null);

(statearr_50966_50999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50964 === (4))){
var inst_50927 = (state_50963[(7)]);
var inst_50929 = (inst_50927 < cnt);
var state_50963__$1 = state_50963;
if(cljs.core.truth_(inst_50929)){
var statearr_50967_51000 = state_50963__$1;
(statearr_50967_51000[(1)] = (6));

} else {
var statearr_50968_51001 = state_50963__$1;
(statearr_50968_51001[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50964 === (15))){
var inst_50959 = (state_50963[(2)]);
var state_50963__$1 = state_50963;
var statearr_50969_51002 = state_50963__$1;
(statearr_50969_51002[(2)] = inst_50959);

(statearr_50969_51002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50964 === (13))){
var inst_50952 = cljs.core.async.close_BANG_.call(null,out);
var state_50963__$1 = state_50963;
var statearr_50970_51003 = state_50963__$1;
(statearr_50970_51003[(2)] = inst_50952);

(statearr_50970_51003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50964 === (6))){
var state_50963__$1 = state_50963;
var statearr_50971_51004 = state_50963__$1;
(statearr_50971_51004[(2)] = null);

(statearr_50971_51004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50964 === (3))){
var inst_50961 = (state_50963[(2)]);
var state_50963__$1 = state_50963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50963__$1,inst_50961);
} else {
if((state_val_50964 === (12))){
var inst_50949 = (state_50963[(8)]);
var inst_50949__$1 = (state_50963[(2)]);
var inst_50950 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_50949__$1);
var state_50963__$1 = (function (){var statearr_50972 = state_50963;
(statearr_50972[(8)] = inst_50949__$1);

return statearr_50972;
})();
if(cljs.core.truth_(inst_50950)){
var statearr_50973_51005 = state_50963__$1;
(statearr_50973_51005[(1)] = (13));

} else {
var statearr_50974_51006 = state_50963__$1;
(statearr_50974_51006[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50964 === (2))){
var inst_50926 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_50927 = (0);
var state_50963__$1 = (function (){var statearr_50975 = state_50963;
(statearr_50975[(7)] = inst_50927);

(statearr_50975[(9)] = inst_50926);

return statearr_50975;
})();
var statearr_50976_51007 = state_50963__$1;
(statearr_50976_51007[(2)] = null);

(statearr_50976_51007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50964 === (11))){
var inst_50927 = (state_50963[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50963,(10),Object,null,(9));
var inst_50936 = chs__$1.call(null,inst_50927);
var inst_50937 = done.call(null,inst_50927);
var inst_50938 = cljs.core.async.take_BANG_.call(null,inst_50936,inst_50937);
var state_50963__$1 = state_50963;
var statearr_50977_51008 = state_50963__$1;
(statearr_50977_51008[(2)] = inst_50938);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50963__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50964 === (9))){
var inst_50927 = (state_50963[(7)]);
var inst_50940 = (state_50963[(2)]);
var inst_50941 = (inst_50927 + (1));
var inst_50927__$1 = inst_50941;
var state_50963__$1 = (function (){var statearr_50978 = state_50963;
(statearr_50978[(7)] = inst_50927__$1);

(statearr_50978[(10)] = inst_50940);

return statearr_50978;
})();
var statearr_50979_51009 = state_50963__$1;
(statearr_50979_51009[(2)] = null);

(statearr_50979_51009[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50964 === (5))){
var inst_50947 = (state_50963[(2)]);
var state_50963__$1 = (function (){var statearr_50980 = state_50963;
(statearr_50980[(11)] = inst_50947);

return statearr_50980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50963__$1,(12),dchan);
} else {
if((state_val_50964 === (14))){
var inst_50949 = (state_50963[(8)]);
var inst_50954 = cljs.core.apply.call(null,f,inst_50949);
var state_50963__$1 = state_50963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50963__$1,(16),out,inst_50954);
} else {
if((state_val_50964 === (16))){
var inst_50956 = (state_50963[(2)]);
var state_50963__$1 = (function (){var statearr_50981 = state_50963;
(statearr_50981[(12)] = inst_50956);

return statearr_50981;
})();
var statearr_50982_51010 = state_50963__$1;
(statearr_50982_51010[(2)] = null);

(statearr_50982_51010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50964 === (10))){
var inst_50931 = (state_50963[(2)]);
var inst_50932 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_50963__$1 = (function (){var statearr_50983 = state_50963;
(statearr_50983[(13)] = inst_50931);

return statearr_50983;
})();
var statearr_50984_51011 = state_50963__$1;
(statearr_50984_51011[(2)] = inst_50932);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50963__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50964 === (8))){
var inst_50945 = (state_50963[(2)]);
var state_50963__$1 = state_50963;
var statearr_50985_51012 = state_50963__$1;
(statearr_50985_51012[(2)] = inst_50945);

(statearr_50985_51012[(1)] = (5));


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
});})(c__35567__auto___50997,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35455__auto__,c__35567__auto___50997,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35456__auto__ = null;
var cljs$core$async$state_machine__35456__auto____0 = (function (){
var statearr_50989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50989[(0)] = cljs$core$async$state_machine__35456__auto__);

(statearr_50989[(1)] = (1));

return statearr_50989;
});
var cljs$core$async$state_machine__35456__auto____1 = (function (state_50963){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_50963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e50990){if((e50990 instanceof Object)){
var ex__35459__auto__ = e50990;
var statearr_50991_51013 = state_50963;
(statearr_50991_51013[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51014 = state_50963;
state_50963 = G__51014;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$state_machine__35456__auto__ = function(state_50963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35456__auto____1.call(this,state_50963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35456__auto____0;
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35456__auto____1;
return cljs$core$async$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___50997,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35569__auto__ = (function (){var statearr_50992 = f__35568__auto__.call(null);
(statearr_50992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___50997);

return statearr_50992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___50997,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args51016 = [];
var len__25223__auto___51072 = arguments.length;
var i__25224__auto___51073 = (0);
while(true){
if((i__25224__auto___51073 < len__25223__auto___51072)){
args51016.push((arguments[i__25224__auto___51073]));

var G__51074 = (i__25224__auto___51073 + (1));
i__25224__auto___51073 = G__51074;
continue;
} else {
}
break;
}

var G__51018 = args51016.length;
switch (G__51018) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51016.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35567__auto___51076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___51076,out){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___51076,out){
return (function (state_51048){
var state_val_51049 = (state_51048[(1)]);
if((state_val_51049 === (7))){
var inst_51027 = (state_51048[(7)]);
var inst_51028 = (state_51048[(8)]);
var inst_51027__$1 = (state_51048[(2)]);
var inst_51028__$1 = cljs.core.nth.call(null,inst_51027__$1,(0),null);
var inst_51029 = cljs.core.nth.call(null,inst_51027__$1,(1),null);
var inst_51030 = (inst_51028__$1 == null);
var state_51048__$1 = (function (){var statearr_51050 = state_51048;
(statearr_51050[(7)] = inst_51027__$1);

(statearr_51050[(9)] = inst_51029);

(statearr_51050[(8)] = inst_51028__$1);

return statearr_51050;
})();
if(cljs.core.truth_(inst_51030)){
var statearr_51051_51077 = state_51048__$1;
(statearr_51051_51077[(1)] = (8));

} else {
var statearr_51052_51078 = state_51048__$1;
(statearr_51052_51078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (1))){
var inst_51019 = cljs.core.vec.call(null,chs);
var inst_51020 = inst_51019;
var state_51048__$1 = (function (){var statearr_51053 = state_51048;
(statearr_51053[(10)] = inst_51020);

return statearr_51053;
})();
var statearr_51054_51079 = state_51048__$1;
(statearr_51054_51079[(2)] = null);

(statearr_51054_51079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (4))){
var inst_51020 = (state_51048[(10)]);
var state_51048__$1 = state_51048;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51048__$1,(7),inst_51020);
} else {
if((state_val_51049 === (6))){
var inst_51044 = (state_51048[(2)]);
var state_51048__$1 = state_51048;
var statearr_51055_51080 = state_51048__$1;
(statearr_51055_51080[(2)] = inst_51044);

(statearr_51055_51080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (3))){
var inst_51046 = (state_51048[(2)]);
var state_51048__$1 = state_51048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51048__$1,inst_51046);
} else {
if((state_val_51049 === (2))){
var inst_51020 = (state_51048[(10)]);
var inst_51022 = cljs.core.count.call(null,inst_51020);
var inst_51023 = (inst_51022 > (0));
var state_51048__$1 = state_51048;
if(cljs.core.truth_(inst_51023)){
var statearr_51057_51081 = state_51048__$1;
(statearr_51057_51081[(1)] = (4));

} else {
var statearr_51058_51082 = state_51048__$1;
(statearr_51058_51082[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (11))){
var inst_51020 = (state_51048[(10)]);
var inst_51037 = (state_51048[(2)]);
var tmp51056 = inst_51020;
var inst_51020__$1 = tmp51056;
var state_51048__$1 = (function (){var statearr_51059 = state_51048;
(statearr_51059[(11)] = inst_51037);

(statearr_51059[(10)] = inst_51020__$1);

return statearr_51059;
})();
var statearr_51060_51083 = state_51048__$1;
(statearr_51060_51083[(2)] = null);

(statearr_51060_51083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (9))){
var inst_51028 = (state_51048[(8)]);
var state_51048__$1 = state_51048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51048__$1,(11),out,inst_51028);
} else {
if((state_val_51049 === (5))){
var inst_51042 = cljs.core.async.close_BANG_.call(null,out);
var state_51048__$1 = state_51048;
var statearr_51061_51084 = state_51048__$1;
(statearr_51061_51084[(2)] = inst_51042);

(statearr_51061_51084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (10))){
var inst_51040 = (state_51048[(2)]);
var state_51048__$1 = state_51048;
var statearr_51062_51085 = state_51048__$1;
(statearr_51062_51085[(2)] = inst_51040);

(statearr_51062_51085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51049 === (8))){
var inst_51027 = (state_51048[(7)]);
var inst_51029 = (state_51048[(9)]);
var inst_51020 = (state_51048[(10)]);
var inst_51028 = (state_51048[(8)]);
var inst_51032 = (function (){var cs = inst_51020;
var vec__51025 = inst_51027;
var v = inst_51028;
var c = inst_51029;
return ((function (cs,vec__51025,v,c,inst_51027,inst_51029,inst_51020,inst_51028,state_val_51049,c__35567__auto___51076,out){
return (function (p1__51015_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__51015_SHARP_);
});
;})(cs,vec__51025,v,c,inst_51027,inst_51029,inst_51020,inst_51028,state_val_51049,c__35567__auto___51076,out))
})();
var inst_51033 = cljs.core.filterv.call(null,inst_51032,inst_51020);
var inst_51020__$1 = inst_51033;
var state_51048__$1 = (function (){var statearr_51063 = state_51048;
(statearr_51063[(10)] = inst_51020__$1);

return statearr_51063;
})();
var statearr_51064_51086 = state_51048__$1;
(statearr_51064_51086[(2)] = null);

(statearr_51064_51086[(1)] = (2));


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
});})(c__35567__auto___51076,out))
;
return ((function (switch__35455__auto__,c__35567__auto___51076,out){
return (function() {
var cljs$core$async$state_machine__35456__auto__ = null;
var cljs$core$async$state_machine__35456__auto____0 = (function (){
var statearr_51068 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51068[(0)] = cljs$core$async$state_machine__35456__auto__);

(statearr_51068[(1)] = (1));

return statearr_51068;
});
var cljs$core$async$state_machine__35456__auto____1 = (function (state_51048){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_51048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e51069){if((e51069 instanceof Object)){
var ex__35459__auto__ = e51069;
var statearr_51070_51087 = state_51048;
(statearr_51070_51087[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51088 = state_51048;
state_51048 = G__51088;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$state_machine__35456__auto__ = function(state_51048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35456__auto____1.call(this,state_51048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35456__auto____0;
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35456__auto____1;
return cljs$core$async$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___51076,out))
})();
var state__35569__auto__ = (function (){var statearr_51071 = f__35568__auto__.call(null);
(statearr_51071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___51076);

return statearr_51071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___51076,out))
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
var args51089 = [];
var len__25223__auto___51138 = arguments.length;
var i__25224__auto___51139 = (0);
while(true){
if((i__25224__auto___51139 < len__25223__auto___51138)){
args51089.push((arguments[i__25224__auto___51139]));

var G__51140 = (i__25224__auto___51139 + (1));
i__25224__auto___51139 = G__51140;
continue;
} else {
}
break;
}

var G__51091 = args51089.length;
switch (G__51091) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51089.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35567__auto___51142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___51142,out){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___51142,out){
return (function (state_51115){
var state_val_51116 = (state_51115[(1)]);
if((state_val_51116 === (7))){
var inst_51097 = (state_51115[(7)]);
var inst_51097__$1 = (state_51115[(2)]);
var inst_51098 = (inst_51097__$1 == null);
var inst_51099 = cljs.core.not.call(null,inst_51098);
var state_51115__$1 = (function (){var statearr_51117 = state_51115;
(statearr_51117[(7)] = inst_51097__$1);

return statearr_51117;
})();
if(inst_51099){
var statearr_51118_51143 = state_51115__$1;
(statearr_51118_51143[(1)] = (8));

} else {
var statearr_51119_51144 = state_51115__$1;
(statearr_51119_51144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51116 === (1))){
var inst_51092 = (0);
var state_51115__$1 = (function (){var statearr_51120 = state_51115;
(statearr_51120[(8)] = inst_51092);

return statearr_51120;
})();
var statearr_51121_51145 = state_51115__$1;
(statearr_51121_51145[(2)] = null);

(statearr_51121_51145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51116 === (4))){
var state_51115__$1 = state_51115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51115__$1,(7),ch);
} else {
if((state_val_51116 === (6))){
var inst_51110 = (state_51115[(2)]);
var state_51115__$1 = state_51115;
var statearr_51122_51146 = state_51115__$1;
(statearr_51122_51146[(2)] = inst_51110);

(statearr_51122_51146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51116 === (3))){
var inst_51112 = (state_51115[(2)]);
var inst_51113 = cljs.core.async.close_BANG_.call(null,out);
var state_51115__$1 = (function (){var statearr_51123 = state_51115;
(statearr_51123[(9)] = inst_51112);

return statearr_51123;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51115__$1,inst_51113);
} else {
if((state_val_51116 === (2))){
var inst_51092 = (state_51115[(8)]);
var inst_51094 = (inst_51092 < n);
var state_51115__$1 = state_51115;
if(cljs.core.truth_(inst_51094)){
var statearr_51124_51147 = state_51115__$1;
(statearr_51124_51147[(1)] = (4));

} else {
var statearr_51125_51148 = state_51115__$1;
(statearr_51125_51148[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51116 === (11))){
var inst_51092 = (state_51115[(8)]);
var inst_51102 = (state_51115[(2)]);
var inst_51103 = (inst_51092 + (1));
var inst_51092__$1 = inst_51103;
var state_51115__$1 = (function (){var statearr_51126 = state_51115;
(statearr_51126[(8)] = inst_51092__$1);

(statearr_51126[(10)] = inst_51102);

return statearr_51126;
})();
var statearr_51127_51149 = state_51115__$1;
(statearr_51127_51149[(2)] = null);

(statearr_51127_51149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51116 === (9))){
var state_51115__$1 = state_51115;
var statearr_51128_51150 = state_51115__$1;
(statearr_51128_51150[(2)] = null);

(statearr_51128_51150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51116 === (5))){
var state_51115__$1 = state_51115;
var statearr_51129_51151 = state_51115__$1;
(statearr_51129_51151[(2)] = null);

(statearr_51129_51151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51116 === (10))){
var inst_51107 = (state_51115[(2)]);
var state_51115__$1 = state_51115;
var statearr_51130_51152 = state_51115__$1;
(statearr_51130_51152[(2)] = inst_51107);

(statearr_51130_51152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51116 === (8))){
var inst_51097 = (state_51115[(7)]);
var state_51115__$1 = state_51115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51115__$1,(11),out,inst_51097);
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
});})(c__35567__auto___51142,out))
;
return ((function (switch__35455__auto__,c__35567__auto___51142,out){
return (function() {
var cljs$core$async$state_machine__35456__auto__ = null;
var cljs$core$async$state_machine__35456__auto____0 = (function (){
var statearr_51134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51134[(0)] = cljs$core$async$state_machine__35456__auto__);

(statearr_51134[(1)] = (1));

return statearr_51134;
});
var cljs$core$async$state_machine__35456__auto____1 = (function (state_51115){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_51115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e51135){if((e51135 instanceof Object)){
var ex__35459__auto__ = e51135;
var statearr_51136_51153 = state_51115;
(statearr_51136_51153[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51154 = state_51115;
state_51115 = G__51154;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$state_machine__35456__auto__ = function(state_51115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35456__auto____1.call(this,state_51115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35456__auto____0;
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35456__auto____1;
return cljs$core$async$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___51142,out))
})();
var state__35569__auto__ = (function (){var statearr_51137 = f__35568__auto__.call(null);
(statearr_51137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___51142);

return statearr_51137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___51142,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async51162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51162 = (function (map_LT_,f,ch,meta51163){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta51163 = meta51163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51164,meta51163__$1){
var self__ = this;
var _51164__$1 = this;
return (new cljs.core.async.t_cljs$core$async51162(self__.map_LT_,self__.f,self__.ch,meta51163__$1));
});

cljs.core.async.t_cljs$core$async51162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51164){
var self__ = this;
var _51164__$1 = this;
return self__.meta51163;
});

cljs.core.async.t_cljs$core$async51162.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async51162.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51162.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51162.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async51162.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async51165 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51165 = (function (map_LT_,f,ch,meta51163,_,fn1,meta51166){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta51163 = meta51163;
this._ = _;
this.fn1 = fn1;
this.meta51166 = meta51166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_51167,meta51166__$1){
var self__ = this;
var _51167__$1 = this;
return (new cljs.core.async.t_cljs$core$async51165(self__.map_LT_,self__.f,self__.ch,self__.meta51163,self__._,self__.fn1,meta51166__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async51165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_51167){
var self__ = this;
var _51167__$1 = this;
return self__.meta51166;
});})(___$1))
;

cljs.core.async.t_cljs$core$async51165.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async51165.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async51165.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__51155_SHARP_){
return f1.call(null,(((p1__51155_SHARP_ == null))?null:self__.f.call(null,p1__51155_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async51165.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51163","meta51163",-1267930522,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51162","cljs.core.async/t_cljs$core$async51162",-1356009590,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51166","meta51166",-38106211,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async51165.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51165";

cljs.core.async.t_cljs$core$async51165.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cljs.core.async/t_cljs$core$async51165");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async51165 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51165(map_LT___$1,f__$1,ch__$1,meta51163__$1,___$2,fn1__$1,meta51166){
return (new cljs.core.async.t_cljs$core$async51165(map_LT___$1,f__$1,ch__$1,meta51163__$1,___$2,fn1__$1,meta51166));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async51165(self__.map_LT_,self__.f,self__.ch,self__.meta51163,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24153__auto__ = ret;
if(cljs.core.truth_(and__24153__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24153__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async51162.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async51162.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async51162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51163","meta51163",-1267930522,null)], null);
});

cljs.core.async.t_cljs$core$async51162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51162";

cljs.core.async.t_cljs$core$async51162.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cljs.core.async/t_cljs$core$async51162");
});

cljs.core.async.__GT_t_cljs$core$async51162 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51162(map_LT___$1,f__$1,ch__$1,meta51163){
return (new cljs.core.async.t_cljs$core$async51162(map_LT___$1,f__$1,ch__$1,meta51163));
});

}

return (new cljs.core.async.t_cljs$core$async51162(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async51171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51171 = (function (map_GT_,f,ch,meta51172){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta51172 = meta51172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51173,meta51172__$1){
var self__ = this;
var _51173__$1 = this;
return (new cljs.core.async.t_cljs$core$async51171(self__.map_GT_,self__.f,self__.ch,meta51172__$1));
});

cljs.core.async.t_cljs$core$async51171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51173){
var self__ = this;
var _51173__$1 = this;
return self__.meta51172;
});

cljs.core.async.t_cljs$core$async51171.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async51171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51171.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async51171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async51171.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async51171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async51171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51172","meta51172",-2073814,null)], null);
});

cljs.core.async.t_cljs$core$async51171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51171";

cljs.core.async.t_cljs$core$async51171.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cljs.core.async/t_cljs$core$async51171");
});

cljs.core.async.__GT_t_cljs$core$async51171 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51171(map_GT___$1,f__$1,ch__$1,meta51172){
return (new cljs.core.async.t_cljs$core$async51171(map_GT___$1,f__$1,ch__$1,meta51172));
});

}

return (new cljs.core.async.t_cljs$core$async51171(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async51177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51177 = (function (filter_GT_,p,ch,meta51178){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta51178 = meta51178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51179,meta51178__$1){
var self__ = this;
var _51179__$1 = this;
return (new cljs.core.async.t_cljs$core$async51177(self__.filter_GT_,self__.p,self__.ch,meta51178__$1));
});

cljs.core.async.t_cljs$core$async51177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51179){
var self__ = this;
var _51179__$1 = this;
return self__.meta51178;
});

cljs.core.async.t_cljs$core$async51177.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async51177.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51177.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51177.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async51177.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async51177.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async51177.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async51177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51178","meta51178",699158044,null)], null);
});

cljs.core.async.t_cljs$core$async51177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51177";

cljs.core.async.t_cljs$core$async51177.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"cljs.core.async/t_cljs$core$async51177");
});

cljs.core.async.__GT_t_cljs$core$async51177 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51177(filter_GT___$1,p__$1,ch__$1,meta51178){
return (new cljs.core.async.t_cljs$core$async51177(filter_GT___$1,p__$1,ch__$1,meta51178));
});

}

return (new cljs.core.async.t_cljs$core$async51177(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args51180 = [];
var len__25223__auto___51224 = arguments.length;
var i__25224__auto___51225 = (0);
while(true){
if((i__25224__auto___51225 < len__25223__auto___51224)){
args51180.push((arguments[i__25224__auto___51225]));

var G__51226 = (i__25224__auto___51225 + (1));
i__25224__auto___51225 = G__51226;
continue;
} else {
}
break;
}

var G__51182 = args51180.length;
switch (G__51182) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51180.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35567__auto___51228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___51228,out){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___51228,out){
return (function (state_51203){
var state_val_51204 = (state_51203[(1)]);
if((state_val_51204 === (7))){
var inst_51199 = (state_51203[(2)]);
var state_51203__$1 = state_51203;
var statearr_51205_51229 = state_51203__$1;
(statearr_51205_51229[(2)] = inst_51199);

(statearr_51205_51229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51204 === (1))){
var state_51203__$1 = state_51203;
var statearr_51206_51230 = state_51203__$1;
(statearr_51206_51230[(2)] = null);

(statearr_51206_51230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51204 === (4))){
var inst_51185 = (state_51203[(7)]);
var inst_51185__$1 = (state_51203[(2)]);
var inst_51186 = (inst_51185__$1 == null);
var state_51203__$1 = (function (){var statearr_51207 = state_51203;
(statearr_51207[(7)] = inst_51185__$1);

return statearr_51207;
})();
if(cljs.core.truth_(inst_51186)){
var statearr_51208_51231 = state_51203__$1;
(statearr_51208_51231[(1)] = (5));

} else {
var statearr_51209_51232 = state_51203__$1;
(statearr_51209_51232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51204 === (6))){
var inst_51185 = (state_51203[(7)]);
var inst_51190 = p.call(null,inst_51185);
var state_51203__$1 = state_51203;
if(cljs.core.truth_(inst_51190)){
var statearr_51210_51233 = state_51203__$1;
(statearr_51210_51233[(1)] = (8));

} else {
var statearr_51211_51234 = state_51203__$1;
(statearr_51211_51234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51204 === (3))){
var inst_51201 = (state_51203[(2)]);
var state_51203__$1 = state_51203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51203__$1,inst_51201);
} else {
if((state_val_51204 === (2))){
var state_51203__$1 = state_51203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51203__$1,(4),ch);
} else {
if((state_val_51204 === (11))){
var inst_51193 = (state_51203[(2)]);
var state_51203__$1 = state_51203;
var statearr_51212_51235 = state_51203__$1;
(statearr_51212_51235[(2)] = inst_51193);

(statearr_51212_51235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51204 === (9))){
var state_51203__$1 = state_51203;
var statearr_51213_51236 = state_51203__$1;
(statearr_51213_51236[(2)] = null);

(statearr_51213_51236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51204 === (5))){
var inst_51188 = cljs.core.async.close_BANG_.call(null,out);
var state_51203__$1 = state_51203;
var statearr_51214_51237 = state_51203__$1;
(statearr_51214_51237[(2)] = inst_51188);

(statearr_51214_51237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51204 === (10))){
var inst_51196 = (state_51203[(2)]);
var state_51203__$1 = (function (){var statearr_51215 = state_51203;
(statearr_51215[(8)] = inst_51196);

return statearr_51215;
})();
var statearr_51216_51238 = state_51203__$1;
(statearr_51216_51238[(2)] = null);

(statearr_51216_51238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51204 === (8))){
var inst_51185 = (state_51203[(7)]);
var state_51203__$1 = state_51203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51203__$1,(11),out,inst_51185);
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
});})(c__35567__auto___51228,out))
;
return ((function (switch__35455__auto__,c__35567__auto___51228,out){
return (function() {
var cljs$core$async$state_machine__35456__auto__ = null;
var cljs$core$async$state_machine__35456__auto____0 = (function (){
var statearr_51220 = [null,null,null,null,null,null,null,null,null];
(statearr_51220[(0)] = cljs$core$async$state_machine__35456__auto__);

(statearr_51220[(1)] = (1));

return statearr_51220;
});
var cljs$core$async$state_machine__35456__auto____1 = (function (state_51203){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_51203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e51221){if((e51221 instanceof Object)){
var ex__35459__auto__ = e51221;
var statearr_51222_51239 = state_51203;
(statearr_51222_51239[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51240 = state_51203;
state_51203 = G__51240;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$state_machine__35456__auto__ = function(state_51203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35456__auto____1.call(this,state_51203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35456__auto____0;
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35456__auto____1;
return cljs$core$async$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___51228,out))
})();
var state__35569__auto__ = (function (){var statearr_51223 = f__35568__auto__.call(null);
(statearr_51223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___51228);

return statearr_51223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___51228,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args51241 = [];
var len__25223__auto___51244 = arguments.length;
var i__25224__auto___51245 = (0);
while(true){
if((i__25224__auto___51245 < len__25223__auto___51244)){
args51241.push((arguments[i__25224__auto___51245]));

var G__51246 = (i__25224__auto___51245 + (1));
i__25224__auto___51245 = G__51246;
continue;
} else {
}
break;
}

var G__51243 = args51241.length;
switch (G__51243) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51241.length)].join('')));

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
var c__35567__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto__){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto__){
return (function (state_51413){
var state_val_51414 = (state_51413[(1)]);
if((state_val_51414 === (7))){
var inst_51409 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51415_51456 = state_51413__$1;
(statearr_51415_51456[(2)] = inst_51409);

(statearr_51415_51456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (20))){
var inst_51379 = (state_51413[(7)]);
var inst_51390 = (state_51413[(2)]);
var inst_51391 = cljs.core.next.call(null,inst_51379);
var inst_51365 = inst_51391;
var inst_51366 = null;
var inst_51367 = (0);
var inst_51368 = (0);
var state_51413__$1 = (function (){var statearr_51416 = state_51413;
(statearr_51416[(8)] = inst_51365);

(statearr_51416[(9)] = inst_51390);

(statearr_51416[(10)] = inst_51368);

(statearr_51416[(11)] = inst_51367);

(statearr_51416[(12)] = inst_51366);

return statearr_51416;
})();
var statearr_51417_51457 = state_51413__$1;
(statearr_51417_51457[(2)] = null);

(statearr_51417_51457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (1))){
var state_51413__$1 = state_51413;
var statearr_51418_51458 = state_51413__$1;
(statearr_51418_51458[(2)] = null);

(statearr_51418_51458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (4))){
var inst_51354 = (state_51413[(13)]);
var inst_51354__$1 = (state_51413[(2)]);
var inst_51355 = (inst_51354__$1 == null);
var state_51413__$1 = (function (){var statearr_51419 = state_51413;
(statearr_51419[(13)] = inst_51354__$1);

return statearr_51419;
})();
if(cljs.core.truth_(inst_51355)){
var statearr_51420_51459 = state_51413__$1;
(statearr_51420_51459[(1)] = (5));

} else {
var statearr_51421_51460 = state_51413__$1;
(statearr_51421_51460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (15))){
var state_51413__$1 = state_51413;
var statearr_51425_51461 = state_51413__$1;
(statearr_51425_51461[(2)] = null);

(statearr_51425_51461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (21))){
var state_51413__$1 = state_51413;
var statearr_51426_51462 = state_51413__$1;
(statearr_51426_51462[(2)] = null);

(statearr_51426_51462[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (13))){
var inst_51365 = (state_51413[(8)]);
var inst_51368 = (state_51413[(10)]);
var inst_51367 = (state_51413[(11)]);
var inst_51366 = (state_51413[(12)]);
var inst_51375 = (state_51413[(2)]);
var inst_51376 = (inst_51368 + (1));
var tmp51422 = inst_51365;
var tmp51423 = inst_51367;
var tmp51424 = inst_51366;
var inst_51365__$1 = tmp51422;
var inst_51366__$1 = tmp51424;
var inst_51367__$1 = tmp51423;
var inst_51368__$1 = inst_51376;
var state_51413__$1 = (function (){var statearr_51427 = state_51413;
(statearr_51427[(14)] = inst_51375);

(statearr_51427[(8)] = inst_51365__$1);

(statearr_51427[(10)] = inst_51368__$1);

(statearr_51427[(11)] = inst_51367__$1);

(statearr_51427[(12)] = inst_51366__$1);

return statearr_51427;
})();
var statearr_51428_51463 = state_51413__$1;
(statearr_51428_51463[(2)] = null);

(statearr_51428_51463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (22))){
var state_51413__$1 = state_51413;
var statearr_51429_51464 = state_51413__$1;
(statearr_51429_51464[(2)] = null);

(statearr_51429_51464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (6))){
var inst_51354 = (state_51413[(13)]);
var inst_51363 = f.call(null,inst_51354);
var inst_51364 = cljs.core.seq.call(null,inst_51363);
var inst_51365 = inst_51364;
var inst_51366 = null;
var inst_51367 = (0);
var inst_51368 = (0);
var state_51413__$1 = (function (){var statearr_51430 = state_51413;
(statearr_51430[(8)] = inst_51365);

(statearr_51430[(10)] = inst_51368);

(statearr_51430[(11)] = inst_51367);

(statearr_51430[(12)] = inst_51366);

return statearr_51430;
})();
var statearr_51431_51465 = state_51413__$1;
(statearr_51431_51465[(2)] = null);

(statearr_51431_51465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (17))){
var inst_51379 = (state_51413[(7)]);
var inst_51383 = cljs.core.chunk_first.call(null,inst_51379);
var inst_51384 = cljs.core.chunk_rest.call(null,inst_51379);
var inst_51385 = cljs.core.count.call(null,inst_51383);
var inst_51365 = inst_51384;
var inst_51366 = inst_51383;
var inst_51367 = inst_51385;
var inst_51368 = (0);
var state_51413__$1 = (function (){var statearr_51432 = state_51413;
(statearr_51432[(8)] = inst_51365);

(statearr_51432[(10)] = inst_51368);

(statearr_51432[(11)] = inst_51367);

(statearr_51432[(12)] = inst_51366);

return statearr_51432;
})();
var statearr_51433_51466 = state_51413__$1;
(statearr_51433_51466[(2)] = null);

(statearr_51433_51466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (3))){
var inst_51411 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51413__$1,inst_51411);
} else {
if((state_val_51414 === (12))){
var inst_51399 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51434_51467 = state_51413__$1;
(statearr_51434_51467[(2)] = inst_51399);

(statearr_51434_51467[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (2))){
var state_51413__$1 = state_51413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51413__$1,(4),in$);
} else {
if((state_val_51414 === (23))){
var inst_51407 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51435_51468 = state_51413__$1;
(statearr_51435_51468[(2)] = inst_51407);

(statearr_51435_51468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (19))){
var inst_51394 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51436_51469 = state_51413__$1;
(statearr_51436_51469[(2)] = inst_51394);

(statearr_51436_51469[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (11))){
var inst_51365 = (state_51413[(8)]);
var inst_51379 = (state_51413[(7)]);
var inst_51379__$1 = cljs.core.seq.call(null,inst_51365);
var state_51413__$1 = (function (){var statearr_51437 = state_51413;
(statearr_51437[(7)] = inst_51379__$1);

return statearr_51437;
})();
if(inst_51379__$1){
var statearr_51438_51470 = state_51413__$1;
(statearr_51438_51470[(1)] = (14));

} else {
var statearr_51439_51471 = state_51413__$1;
(statearr_51439_51471[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (9))){
var inst_51401 = (state_51413[(2)]);
var inst_51402 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_51413__$1 = (function (){var statearr_51440 = state_51413;
(statearr_51440[(15)] = inst_51401);

return statearr_51440;
})();
if(cljs.core.truth_(inst_51402)){
var statearr_51441_51472 = state_51413__$1;
(statearr_51441_51472[(1)] = (21));

} else {
var statearr_51442_51473 = state_51413__$1;
(statearr_51442_51473[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (5))){
var inst_51357 = cljs.core.async.close_BANG_.call(null,out);
var state_51413__$1 = state_51413;
var statearr_51443_51474 = state_51413__$1;
(statearr_51443_51474[(2)] = inst_51357);

(statearr_51443_51474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (14))){
var inst_51379 = (state_51413[(7)]);
var inst_51381 = cljs.core.chunked_seq_QMARK_.call(null,inst_51379);
var state_51413__$1 = state_51413;
if(inst_51381){
var statearr_51444_51475 = state_51413__$1;
(statearr_51444_51475[(1)] = (17));

} else {
var statearr_51445_51476 = state_51413__$1;
(statearr_51445_51476[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (16))){
var inst_51397 = (state_51413[(2)]);
var state_51413__$1 = state_51413;
var statearr_51446_51477 = state_51413__$1;
(statearr_51446_51477[(2)] = inst_51397);

(statearr_51446_51477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51414 === (10))){
var inst_51368 = (state_51413[(10)]);
var inst_51366 = (state_51413[(12)]);
var inst_51373 = cljs.core._nth.call(null,inst_51366,inst_51368);
var state_51413__$1 = state_51413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51413__$1,(13),out,inst_51373);
} else {
if((state_val_51414 === (18))){
var inst_51379 = (state_51413[(7)]);
var inst_51388 = cljs.core.first.call(null,inst_51379);
var state_51413__$1 = state_51413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51413__$1,(20),out,inst_51388);
} else {
if((state_val_51414 === (8))){
var inst_51368 = (state_51413[(10)]);
var inst_51367 = (state_51413[(11)]);
var inst_51370 = (inst_51368 < inst_51367);
var inst_51371 = inst_51370;
var state_51413__$1 = state_51413;
if(cljs.core.truth_(inst_51371)){
var statearr_51447_51478 = state_51413__$1;
(statearr_51447_51478[(1)] = (10));

} else {
var statearr_51448_51479 = state_51413__$1;
(statearr_51448_51479[(1)] = (11));

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
});})(c__35567__auto__))
;
return ((function (switch__35455__auto__,c__35567__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35456__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35456__auto____0 = (function (){
var statearr_51452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51452[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35456__auto__);

(statearr_51452[(1)] = (1));

return statearr_51452;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35456__auto____1 = (function (state_51413){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_51413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e51453){if((e51453 instanceof Object)){
var ex__35459__auto__ = e51453;
var statearr_51454_51480 = state_51413;
(statearr_51454_51480[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51481 = state_51413;
state_51413 = G__51481;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35456__auto__ = function(state_51413){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35456__auto____1.call(this,state_51413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35456__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35456__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto__))
})();
var state__35569__auto__ = (function (){var statearr_51455 = f__35568__auto__.call(null);
(statearr_51455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto__);

return statearr_51455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto__))
);

return c__35567__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args51482 = [];
var len__25223__auto___51485 = arguments.length;
var i__25224__auto___51486 = (0);
while(true){
if((i__25224__auto___51486 < len__25223__auto___51485)){
args51482.push((arguments[i__25224__auto___51486]));

var G__51487 = (i__25224__auto___51486 + (1));
i__25224__auto___51486 = G__51487;
continue;
} else {
}
break;
}

var G__51484 = args51482.length;
switch (G__51484) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51482.length)].join('')));

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
var args51489 = [];
var len__25223__auto___51492 = arguments.length;
var i__25224__auto___51493 = (0);
while(true){
if((i__25224__auto___51493 < len__25223__auto___51492)){
args51489.push((arguments[i__25224__auto___51493]));

var G__51494 = (i__25224__auto___51493 + (1));
i__25224__auto___51493 = G__51494;
continue;
} else {
}
break;
}

var G__51491 = args51489.length;
switch (G__51491) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51489.length)].join('')));

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
var args51496 = [];
var len__25223__auto___51547 = arguments.length;
var i__25224__auto___51548 = (0);
while(true){
if((i__25224__auto___51548 < len__25223__auto___51547)){
args51496.push((arguments[i__25224__auto___51548]));

var G__51549 = (i__25224__auto___51548 + (1));
i__25224__auto___51548 = G__51549;
continue;
} else {
}
break;
}

var G__51498 = args51496.length;
switch (G__51498) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51496.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35567__auto___51551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___51551,out){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___51551,out){
return (function (state_51522){
var state_val_51523 = (state_51522[(1)]);
if((state_val_51523 === (7))){
var inst_51517 = (state_51522[(2)]);
var state_51522__$1 = state_51522;
var statearr_51524_51552 = state_51522__$1;
(statearr_51524_51552[(2)] = inst_51517);

(statearr_51524_51552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (1))){
var inst_51499 = null;
var state_51522__$1 = (function (){var statearr_51525 = state_51522;
(statearr_51525[(7)] = inst_51499);

return statearr_51525;
})();
var statearr_51526_51553 = state_51522__$1;
(statearr_51526_51553[(2)] = null);

(statearr_51526_51553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (4))){
var inst_51502 = (state_51522[(8)]);
var inst_51502__$1 = (state_51522[(2)]);
var inst_51503 = (inst_51502__$1 == null);
var inst_51504 = cljs.core.not.call(null,inst_51503);
var state_51522__$1 = (function (){var statearr_51527 = state_51522;
(statearr_51527[(8)] = inst_51502__$1);

return statearr_51527;
})();
if(inst_51504){
var statearr_51528_51554 = state_51522__$1;
(statearr_51528_51554[(1)] = (5));

} else {
var statearr_51529_51555 = state_51522__$1;
(statearr_51529_51555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (6))){
var state_51522__$1 = state_51522;
var statearr_51530_51556 = state_51522__$1;
(statearr_51530_51556[(2)] = null);

(statearr_51530_51556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (3))){
var inst_51519 = (state_51522[(2)]);
var inst_51520 = cljs.core.async.close_BANG_.call(null,out);
var state_51522__$1 = (function (){var statearr_51531 = state_51522;
(statearr_51531[(9)] = inst_51519);

return statearr_51531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51522__$1,inst_51520);
} else {
if((state_val_51523 === (2))){
var state_51522__$1 = state_51522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51522__$1,(4),ch);
} else {
if((state_val_51523 === (11))){
var inst_51502 = (state_51522[(8)]);
var inst_51511 = (state_51522[(2)]);
var inst_51499 = inst_51502;
var state_51522__$1 = (function (){var statearr_51532 = state_51522;
(statearr_51532[(7)] = inst_51499);

(statearr_51532[(10)] = inst_51511);

return statearr_51532;
})();
var statearr_51533_51557 = state_51522__$1;
(statearr_51533_51557[(2)] = null);

(statearr_51533_51557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (9))){
var inst_51502 = (state_51522[(8)]);
var state_51522__$1 = state_51522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51522__$1,(11),out,inst_51502);
} else {
if((state_val_51523 === (5))){
var inst_51499 = (state_51522[(7)]);
var inst_51502 = (state_51522[(8)]);
var inst_51506 = cljs.core._EQ_.call(null,inst_51502,inst_51499);
var state_51522__$1 = state_51522;
if(inst_51506){
var statearr_51535_51558 = state_51522__$1;
(statearr_51535_51558[(1)] = (8));

} else {
var statearr_51536_51559 = state_51522__$1;
(statearr_51536_51559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (10))){
var inst_51514 = (state_51522[(2)]);
var state_51522__$1 = state_51522;
var statearr_51537_51560 = state_51522__$1;
(statearr_51537_51560[(2)] = inst_51514);

(statearr_51537_51560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51523 === (8))){
var inst_51499 = (state_51522[(7)]);
var tmp51534 = inst_51499;
var inst_51499__$1 = tmp51534;
var state_51522__$1 = (function (){var statearr_51538 = state_51522;
(statearr_51538[(7)] = inst_51499__$1);

return statearr_51538;
})();
var statearr_51539_51561 = state_51522__$1;
(statearr_51539_51561[(2)] = null);

(statearr_51539_51561[(1)] = (2));


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
});})(c__35567__auto___51551,out))
;
return ((function (switch__35455__auto__,c__35567__auto___51551,out){
return (function() {
var cljs$core$async$state_machine__35456__auto__ = null;
var cljs$core$async$state_machine__35456__auto____0 = (function (){
var statearr_51543 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51543[(0)] = cljs$core$async$state_machine__35456__auto__);

(statearr_51543[(1)] = (1));

return statearr_51543;
});
var cljs$core$async$state_machine__35456__auto____1 = (function (state_51522){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_51522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e51544){if((e51544 instanceof Object)){
var ex__35459__auto__ = e51544;
var statearr_51545_51562 = state_51522;
(statearr_51545_51562[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51563 = state_51522;
state_51522 = G__51563;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$state_machine__35456__auto__ = function(state_51522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35456__auto____1.call(this,state_51522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35456__auto____0;
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35456__auto____1;
return cljs$core$async$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___51551,out))
})();
var state__35569__auto__ = (function (){var statearr_51546 = f__35568__auto__.call(null);
(statearr_51546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___51551);

return statearr_51546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___51551,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args51564 = [];
var len__25223__auto___51634 = arguments.length;
var i__25224__auto___51635 = (0);
while(true){
if((i__25224__auto___51635 < len__25223__auto___51634)){
args51564.push((arguments[i__25224__auto___51635]));

var G__51636 = (i__25224__auto___51635 + (1));
i__25224__auto___51635 = G__51636;
continue;
} else {
}
break;
}

var G__51566 = args51564.length;
switch (G__51566) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51564.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35567__auto___51638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___51638,out){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___51638,out){
return (function (state_51604){
var state_val_51605 = (state_51604[(1)]);
if((state_val_51605 === (7))){
var inst_51600 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
var statearr_51606_51639 = state_51604__$1;
(statearr_51606_51639[(2)] = inst_51600);

(statearr_51606_51639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (1))){
var inst_51567 = (new Array(n));
var inst_51568 = inst_51567;
var inst_51569 = (0);
var state_51604__$1 = (function (){var statearr_51607 = state_51604;
(statearr_51607[(7)] = inst_51568);

(statearr_51607[(8)] = inst_51569);

return statearr_51607;
})();
var statearr_51608_51640 = state_51604__$1;
(statearr_51608_51640[(2)] = null);

(statearr_51608_51640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (4))){
var inst_51572 = (state_51604[(9)]);
var inst_51572__$1 = (state_51604[(2)]);
var inst_51573 = (inst_51572__$1 == null);
var inst_51574 = cljs.core.not.call(null,inst_51573);
var state_51604__$1 = (function (){var statearr_51609 = state_51604;
(statearr_51609[(9)] = inst_51572__$1);

return statearr_51609;
})();
if(inst_51574){
var statearr_51610_51641 = state_51604__$1;
(statearr_51610_51641[(1)] = (5));

} else {
var statearr_51611_51642 = state_51604__$1;
(statearr_51611_51642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (15))){
var inst_51594 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
var statearr_51612_51643 = state_51604__$1;
(statearr_51612_51643[(2)] = inst_51594);

(statearr_51612_51643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (13))){
var state_51604__$1 = state_51604;
var statearr_51613_51644 = state_51604__$1;
(statearr_51613_51644[(2)] = null);

(statearr_51613_51644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (6))){
var inst_51569 = (state_51604[(8)]);
var inst_51590 = (inst_51569 > (0));
var state_51604__$1 = state_51604;
if(cljs.core.truth_(inst_51590)){
var statearr_51614_51645 = state_51604__$1;
(statearr_51614_51645[(1)] = (12));

} else {
var statearr_51615_51646 = state_51604__$1;
(statearr_51615_51646[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (3))){
var inst_51602 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51604__$1,inst_51602);
} else {
if((state_val_51605 === (12))){
var inst_51568 = (state_51604[(7)]);
var inst_51592 = cljs.core.vec.call(null,inst_51568);
var state_51604__$1 = state_51604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51604__$1,(15),out,inst_51592);
} else {
if((state_val_51605 === (2))){
var state_51604__$1 = state_51604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51604__$1,(4),ch);
} else {
if((state_val_51605 === (11))){
var inst_51584 = (state_51604[(2)]);
var inst_51585 = (new Array(n));
var inst_51568 = inst_51585;
var inst_51569 = (0);
var state_51604__$1 = (function (){var statearr_51616 = state_51604;
(statearr_51616[(7)] = inst_51568);

(statearr_51616[(8)] = inst_51569);

(statearr_51616[(10)] = inst_51584);

return statearr_51616;
})();
var statearr_51617_51647 = state_51604__$1;
(statearr_51617_51647[(2)] = null);

(statearr_51617_51647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (9))){
var inst_51568 = (state_51604[(7)]);
var inst_51582 = cljs.core.vec.call(null,inst_51568);
var state_51604__$1 = state_51604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51604__$1,(11),out,inst_51582);
} else {
if((state_val_51605 === (5))){
var inst_51572 = (state_51604[(9)]);
var inst_51577 = (state_51604[(11)]);
var inst_51568 = (state_51604[(7)]);
var inst_51569 = (state_51604[(8)]);
var inst_51576 = (inst_51568[inst_51569] = inst_51572);
var inst_51577__$1 = (inst_51569 + (1));
var inst_51578 = (inst_51577__$1 < n);
var state_51604__$1 = (function (){var statearr_51618 = state_51604;
(statearr_51618[(12)] = inst_51576);

(statearr_51618[(11)] = inst_51577__$1);

return statearr_51618;
})();
if(cljs.core.truth_(inst_51578)){
var statearr_51619_51648 = state_51604__$1;
(statearr_51619_51648[(1)] = (8));

} else {
var statearr_51620_51649 = state_51604__$1;
(statearr_51620_51649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (14))){
var inst_51597 = (state_51604[(2)]);
var inst_51598 = cljs.core.async.close_BANG_.call(null,out);
var state_51604__$1 = (function (){var statearr_51622 = state_51604;
(statearr_51622[(13)] = inst_51597);

return statearr_51622;
})();
var statearr_51623_51650 = state_51604__$1;
(statearr_51623_51650[(2)] = inst_51598);

(statearr_51623_51650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (10))){
var inst_51588 = (state_51604[(2)]);
var state_51604__$1 = state_51604;
var statearr_51624_51651 = state_51604__$1;
(statearr_51624_51651[(2)] = inst_51588);

(statearr_51624_51651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51605 === (8))){
var inst_51577 = (state_51604[(11)]);
var inst_51568 = (state_51604[(7)]);
var tmp51621 = inst_51568;
var inst_51568__$1 = tmp51621;
var inst_51569 = inst_51577;
var state_51604__$1 = (function (){var statearr_51625 = state_51604;
(statearr_51625[(7)] = inst_51568__$1);

(statearr_51625[(8)] = inst_51569);

return statearr_51625;
})();
var statearr_51626_51652 = state_51604__$1;
(statearr_51626_51652[(2)] = null);

(statearr_51626_51652[(1)] = (2));


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
});})(c__35567__auto___51638,out))
;
return ((function (switch__35455__auto__,c__35567__auto___51638,out){
return (function() {
var cljs$core$async$state_machine__35456__auto__ = null;
var cljs$core$async$state_machine__35456__auto____0 = (function (){
var statearr_51630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51630[(0)] = cljs$core$async$state_machine__35456__auto__);

(statearr_51630[(1)] = (1));

return statearr_51630;
});
var cljs$core$async$state_machine__35456__auto____1 = (function (state_51604){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_51604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e51631){if((e51631 instanceof Object)){
var ex__35459__auto__ = e51631;
var statearr_51632_51653 = state_51604;
(statearr_51632_51653[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51654 = state_51604;
state_51604 = G__51654;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$state_machine__35456__auto__ = function(state_51604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35456__auto____1.call(this,state_51604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35456__auto____0;
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35456__auto____1;
return cljs$core$async$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___51638,out))
})();
var state__35569__auto__ = (function (){var statearr_51633 = f__35568__auto__.call(null);
(statearr_51633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___51638);

return statearr_51633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___51638,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args51655 = [];
var len__25223__auto___51729 = arguments.length;
var i__25224__auto___51730 = (0);
while(true){
if((i__25224__auto___51730 < len__25223__auto___51729)){
args51655.push((arguments[i__25224__auto___51730]));

var G__51731 = (i__25224__auto___51730 + (1));
i__25224__auto___51730 = G__51731;
continue;
} else {
}
break;
}

var G__51657 = args51655.length;
switch (G__51657) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51655.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35567__auto___51733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___51733,out){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___51733,out){
return (function (state_51699){
var state_val_51700 = (state_51699[(1)]);
if((state_val_51700 === (7))){
var inst_51695 = (state_51699[(2)]);
var state_51699__$1 = state_51699;
var statearr_51701_51734 = state_51699__$1;
(statearr_51701_51734[(2)] = inst_51695);

(statearr_51701_51734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (1))){
var inst_51658 = [];
var inst_51659 = inst_51658;
var inst_51660 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51699__$1 = (function (){var statearr_51702 = state_51699;
(statearr_51702[(7)] = inst_51659);

(statearr_51702[(8)] = inst_51660);

return statearr_51702;
})();
var statearr_51703_51735 = state_51699__$1;
(statearr_51703_51735[(2)] = null);

(statearr_51703_51735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (4))){
var inst_51663 = (state_51699[(9)]);
var inst_51663__$1 = (state_51699[(2)]);
var inst_51664 = (inst_51663__$1 == null);
var inst_51665 = cljs.core.not.call(null,inst_51664);
var state_51699__$1 = (function (){var statearr_51704 = state_51699;
(statearr_51704[(9)] = inst_51663__$1);

return statearr_51704;
})();
if(inst_51665){
var statearr_51705_51736 = state_51699__$1;
(statearr_51705_51736[(1)] = (5));

} else {
var statearr_51706_51737 = state_51699__$1;
(statearr_51706_51737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (15))){
var inst_51689 = (state_51699[(2)]);
var state_51699__$1 = state_51699;
var statearr_51707_51738 = state_51699__$1;
(statearr_51707_51738[(2)] = inst_51689);

(statearr_51707_51738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (13))){
var state_51699__$1 = state_51699;
var statearr_51708_51739 = state_51699__$1;
(statearr_51708_51739[(2)] = null);

(statearr_51708_51739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (6))){
var inst_51659 = (state_51699[(7)]);
var inst_51684 = inst_51659.length;
var inst_51685 = (inst_51684 > (0));
var state_51699__$1 = state_51699;
if(cljs.core.truth_(inst_51685)){
var statearr_51709_51740 = state_51699__$1;
(statearr_51709_51740[(1)] = (12));

} else {
var statearr_51710_51741 = state_51699__$1;
(statearr_51710_51741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (3))){
var inst_51697 = (state_51699[(2)]);
var state_51699__$1 = state_51699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51699__$1,inst_51697);
} else {
if((state_val_51700 === (12))){
var inst_51659 = (state_51699[(7)]);
var inst_51687 = cljs.core.vec.call(null,inst_51659);
var state_51699__$1 = state_51699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51699__$1,(15),out,inst_51687);
} else {
if((state_val_51700 === (2))){
var state_51699__$1 = state_51699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51699__$1,(4),ch);
} else {
if((state_val_51700 === (11))){
var inst_51663 = (state_51699[(9)]);
var inst_51667 = (state_51699[(10)]);
var inst_51677 = (state_51699[(2)]);
var inst_51678 = [];
var inst_51679 = inst_51678.push(inst_51663);
var inst_51659 = inst_51678;
var inst_51660 = inst_51667;
var state_51699__$1 = (function (){var statearr_51711 = state_51699;
(statearr_51711[(11)] = inst_51677);

(statearr_51711[(12)] = inst_51679);

(statearr_51711[(7)] = inst_51659);

(statearr_51711[(8)] = inst_51660);

return statearr_51711;
})();
var statearr_51712_51742 = state_51699__$1;
(statearr_51712_51742[(2)] = null);

(statearr_51712_51742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (9))){
var inst_51659 = (state_51699[(7)]);
var inst_51675 = cljs.core.vec.call(null,inst_51659);
var state_51699__$1 = state_51699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51699__$1,(11),out,inst_51675);
} else {
if((state_val_51700 === (5))){
var inst_51663 = (state_51699[(9)]);
var inst_51667 = (state_51699[(10)]);
var inst_51660 = (state_51699[(8)]);
var inst_51667__$1 = f.call(null,inst_51663);
var inst_51668 = cljs.core._EQ_.call(null,inst_51667__$1,inst_51660);
var inst_51669 = cljs.core.keyword_identical_QMARK_.call(null,inst_51660,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51670 = (inst_51668) || (inst_51669);
var state_51699__$1 = (function (){var statearr_51713 = state_51699;
(statearr_51713[(10)] = inst_51667__$1);

return statearr_51713;
})();
if(cljs.core.truth_(inst_51670)){
var statearr_51714_51743 = state_51699__$1;
(statearr_51714_51743[(1)] = (8));

} else {
var statearr_51715_51744 = state_51699__$1;
(statearr_51715_51744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (14))){
var inst_51692 = (state_51699[(2)]);
var inst_51693 = cljs.core.async.close_BANG_.call(null,out);
var state_51699__$1 = (function (){var statearr_51717 = state_51699;
(statearr_51717[(13)] = inst_51692);

return statearr_51717;
})();
var statearr_51718_51745 = state_51699__$1;
(statearr_51718_51745[(2)] = inst_51693);

(statearr_51718_51745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (10))){
var inst_51682 = (state_51699[(2)]);
var state_51699__$1 = state_51699;
var statearr_51719_51746 = state_51699__$1;
(statearr_51719_51746[(2)] = inst_51682);

(statearr_51719_51746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51700 === (8))){
var inst_51663 = (state_51699[(9)]);
var inst_51667 = (state_51699[(10)]);
var inst_51659 = (state_51699[(7)]);
var inst_51672 = inst_51659.push(inst_51663);
var tmp51716 = inst_51659;
var inst_51659__$1 = tmp51716;
var inst_51660 = inst_51667;
var state_51699__$1 = (function (){var statearr_51720 = state_51699;
(statearr_51720[(14)] = inst_51672);

(statearr_51720[(7)] = inst_51659__$1);

(statearr_51720[(8)] = inst_51660);

return statearr_51720;
})();
var statearr_51721_51747 = state_51699__$1;
(statearr_51721_51747[(2)] = null);

(statearr_51721_51747[(1)] = (2));


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
});})(c__35567__auto___51733,out))
;
return ((function (switch__35455__auto__,c__35567__auto___51733,out){
return (function() {
var cljs$core$async$state_machine__35456__auto__ = null;
var cljs$core$async$state_machine__35456__auto____0 = (function (){
var statearr_51725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51725[(0)] = cljs$core$async$state_machine__35456__auto__);

(statearr_51725[(1)] = (1));

return statearr_51725;
});
var cljs$core$async$state_machine__35456__auto____1 = (function (state_51699){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_51699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e51726){if((e51726 instanceof Object)){
var ex__35459__auto__ = e51726;
var statearr_51727_51748 = state_51699;
(statearr_51727_51748[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51749 = state_51699;
state_51699 = G__51749;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
cljs$core$async$state_machine__35456__auto__ = function(state_51699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35456__auto____1.call(this,state_51699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35456__auto____0;
cljs$core$async$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35456__auto____1;
return cljs$core$async$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___51733,out))
})();
var state__35569__auto__ = (function (){var statearr_51728 = f__35568__auto__.call(null);
(statearr_51728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___51733);

return statearr_51728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___51733,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map