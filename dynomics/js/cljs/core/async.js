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
if(typeof cljs.core.async.t_cljs$core$async879480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async879480 = (function (fn_handler,f,meta879481){
this.fn_handler = fn_handler;
this.f = f;
this.meta879481 = meta879481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async879480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_879482,meta879481__$1){
var self__ = this;
var _879482__$1 = this;
return (new cljs.core.async.t_cljs$core$async879480(self__.fn_handler,self__.f,meta879481__$1));
});

cljs.core.async.t_cljs$core$async879480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_879482){
var self__ = this;
var _879482__$1 = this;
return self__.meta879481;
});

cljs.core.async.t_cljs$core$async879480.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async879480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async879480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async879480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta879481","meta879481",-1380001688,null)], null);
});

cljs.core.async.t_cljs$core$async879480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async879480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async879480";

cljs.core.async.t_cljs$core$async879480.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async879480");
});

cljs.core.async.__GT_t_cljs$core$async879480 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async879480(fn_handler__$1,f__$1,meta879481){
return (new cljs.core.async.t_cljs$core$async879480(fn_handler__$1,f__$1,meta879481));
});

}

return (new cljs.core.async.t_cljs$core$async879480(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args879485 = [];
var len__25269__auto___879488 = arguments.length;
var i__25270__auto___879489 = (0);
while(true){
if((i__25270__auto___879489 < len__25269__auto___879488)){
args879485.push((arguments[i__25270__auto___879489]));

var G__879490 = (i__25270__auto___879489 + (1));
i__25270__auto___879489 = G__879490;
continue;
} else {
}
break;
}

var G__879487 = args879485.length;
switch (G__879487) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args879485.length)].join('')));

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
var args879492 = [];
var len__25269__auto___879495 = arguments.length;
var i__25270__auto___879496 = (0);
while(true){
if((i__25270__auto___879496 < len__25269__auto___879495)){
args879492.push((arguments[i__25270__auto___879496]));

var G__879497 = (i__25270__auto___879496 + (1));
i__25270__auto___879496 = G__879497;
continue;
} else {
}
break;
}

var G__879494 = args879492.length;
switch (G__879494) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args879492.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_879499 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_879499);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_879499,ret){
return (function (){
return fn1.call(null,val_879499);
});})(val_879499,ret))
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
var args879500 = [];
var len__25269__auto___879503 = arguments.length;
var i__25270__auto___879504 = (0);
while(true){
if((i__25270__auto___879504 < len__25269__auto___879503)){
args879500.push((arguments[i__25270__auto___879504]));

var G__879505 = (i__25270__auto___879504 + (1));
i__25270__auto___879504 = G__879505;
continue;
} else {
}
break;
}

var G__879502 = args879500.length;
switch (G__879502) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args879500.length)].join('')));

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
var n__25114__auto___879507 = n;
var x_879508 = (0);
while(true){
if((x_879508 < n__25114__auto___879507)){
(a[x_879508] = (0));

var G__879509 = (x_879508 + (1));
x_879508 = G__879509;
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

var G__879510 = (i + (1));
i = G__879510;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async879514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async879514 = (function (alt_flag,flag,meta879515){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta879515 = meta879515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async879514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_879516,meta879515__$1){
var self__ = this;
var _879516__$1 = this;
return (new cljs.core.async.t_cljs$core$async879514(self__.alt_flag,self__.flag,meta879515__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async879514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_879516){
var self__ = this;
var _879516__$1 = this;
return self__.meta879515;
});})(flag))
;

cljs.core.async.t_cljs$core$async879514.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async879514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async879514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async879514.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta879515","meta879515",515850287,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async879514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async879514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async879514";

cljs.core.async.t_cljs$core$async879514.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async879514");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async879514 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async879514(alt_flag__$1,flag__$1,meta879515){
return (new cljs.core.async.t_cljs$core$async879514(alt_flag__$1,flag__$1,meta879515));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async879514(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async879520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async879520 = (function (alt_handler,flag,cb,meta879521){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta879521 = meta879521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async879520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_879522,meta879521__$1){
var self__ = this;
var _879522__$1 = this;
return (new cljs.core.async.t_cljs$core$async879520(self__.alt_handler,self__.flag,self__.cb,meta879521__$1));
});

cljs.core.async.t_cljs$core$async879520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_879522){
var self__ = this;
var _879522__$1 = this;
return self__.meta879521;
});

cljs.core.async.t_cljs$core$async879520.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async879520.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async879520.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async879520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta879521","meta879521",408918349,null)], null);
});

cljs.core.async.t_cljs$core$async879520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async879520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async879520";

cljs.core.async.t_cljs$core$async879520.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async879520");
});

cljs.core.async.__GT_t_cljs$core$async879520 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async879520(alt_handler__$1,flag__$1,cb__$1,meta879521){
return (new cljs.core.async.t_cljs$core$async879520(alt_handler__$1,flag__$1,cb__$1,meta879521));
});

}

return (new cljs.core.async.t_cljs$core$async879520(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__879523_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__879523_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__879524_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__879524_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24211__auto__ = wport;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return port;
}
})()], null));
} else {
var G__879525 = (i + (1));
i = G__879525;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24211__auto__ = ret;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__24199__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24199__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24199__auto__;
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
var args__25276__auto__ = [];
var len__25269__auto___879531 = arguments.length;
var i__25270__auto___879532 = (0);
while(true){
if((i__25270__auto___879532 < len__25269__auto___879531)){
args__25276__auto__.push((arguments[i__25270__auto___879532]));

var G__879533 = (i__25270__auto___879532 + (1));
i__25270__auto___879532 = G__879533;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__879528){
var map__879529 = p__879528;
var map__879529__$1 = ((((!((map__879529 == null)))?((((map__879529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__879529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__879529):map__879529);
var opts = map__879529__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq879526){
var G__879527 = cljs.core.first.call(null,seq879526);
var seq879526__$1 = cljs.core.next.call(null,seq879526);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__879527,seq879526__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args879534 = [];
var len__25269__auto___879584 = arguments.length;
var i__25270__auto___879585 = (0);
while(true){
if((i__25270__auto___879585 < len__25269__auto___879584)){
args879534.push((arguments[i__25270__auto___879585]));

var G__879586 = (i__25270__auto___879585 + (1));
i__25270__auto___879585 = G__879586;
continue;
} else {
}
break;
}

var G__879536 = args879534.length;
switch (G__879536) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args879534.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29846__auto___879588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___879588){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___879588){
return (function (state_879560){
var state_val_879561 = (state_879560[(1)]);
if((state_val_879561 === (7))){
var inst_879556 = (state_879560[(2)]);
var state_879560__$1 = state_879560;
var statearr_879562_879589 = state_879560__$1;
(statearr_879562_879589[(2)] = inst_879556);

(statearr_879562_879589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879561 === (1))){
var state_879560__$1 = state_879560;
var statearr_879563_879590 = state_879560__$1;
(statearr_879563_879590[(2)] = null);

(statearr_879563_879590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879561 === (4))){
var inst_879539 = (state_879560[(7)]);
var inst_879539__$1 = (state_879560[(2)]);
var inst_879540 = (inst_879539__$1 == null);
var state_879560__$1 = (function (){var statearr_879564 = state_879560;
(statearr_879564[(7)] = inst_879539__$1);

return statearr_879564;
})();
if(cljs.core.truth_(inst_879540)){
var statearr_879565_879591 = state_879560__$1;
(statearr_879565_879591[(1)] = (5));

} else {
var statearr_879566_879592 = state_879560__$1;
(statearr_879566_879592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879561 === (13))){
var state_879560__$1 = state_879560;
var statearr_879567_879593 = state_879560__$1;
(statearr_879567_879593[(2)] = null);

(statearr_879567_879593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879561 === (6))){
var inst_879539 = (state_879560[(7)]);
var state_879560__$1 = state_879560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_879560__$1,(11),to,inst_879539);
} else {
if((state_val_879561 === (3))){
var inst_879558 = (state_879560[(2)]);
var state_879560__$1 = state_879560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_879560__$1,inst_879558);
} else {
if((state_val_879561 === (12))){
var state_879560__$1 = state_879560;
var statearr_879568_879594 = state_879560__$1;
(statearr_879568_879594[(2)] = null);

(statearr_879568_879594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879561 === (2))){
var state_879560__$1 = state_879560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_879560__$1,(4),from);
} else {
if((state_val_879561 === (11))){
var inst_879549 = (state_879560[(2)]);
var state_879560__$1 = state_879560;
if(cljs.core.truth_(inst_879549)){
var statearr_879569_879595 = state_879560__$1;
(statearr_879569_879595[(1)] = (12));

} else {
var statearr_879570_879596 = state_879560__$1;
(statearr_879570_879596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879561 === (9))){
var state_879560__$1 = state_879560;
var statearr_879571_879597 = state_879560__$1;
(statearr_879571_879597[(2)] = null);

(statearr_879571_879597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879561 === (5))){
var state_879560__$1 = state_879560;
if(cljs.core.truth_(close_QMARK_)){
var statearr_879572_879598 = state_879560__$1;
(statearr_879572_879598[(1)] = (8));

} else {
var statearr_879573_879599 = state_879560__$1;
(statearr_879573_879599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879561 === (14))){
var inst_879554 = (state_879560[(2)]);
var state_879560__$1 = state_879560;
var statearr_879574_879600 = state_879560__$1;
(statearr_879574_879600[(2)] = inst_879554);

(statearr_879574_879600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879561 === (10))){
var inst_879546 = (state_879560[(2)]);
var state_879560__$1 = state_879560;
var statearr_879575_879601 = state_879560__$1;
(statearr_879575_879601[(2)] = inst_879546);

(statearr_879575_879601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879561 === (8))){
var inst_879543 = cljs.core.async.close_BANG_.call(null,to);
var state_879560__$1 = state_879560;
var statearr_879576_879602 = state_879560__$1;
(statearr_879576_879602[(2)] = inst_879543);

(statearr_879576_879602[(1)] = (10));


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
});})(c__29846__auto___879588))
;
return ((function (switch__29734__auto__,c__29846__auto___879588){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_879580 = [null,null,null,null,null,null,null,null];
(statearr_879580[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_879580[(1)] = (1));

return statearr_879580;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_879560){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_879560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e879581){if((e879581 instanceof Object)){
var ex__29738__auto__ = e879581;
var statearr_879582_879603 = state_879560;
(statearr_879582_879603[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_879560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e879581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__879604 = state_879560;
state_879560 = G__879604;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_879560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_879560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___879588))
})();
var state__29848__auto__ = (function (){var statearr_879583 = f__29847__auto__.call(null);
(statearr_879583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___879588);

return statearr_879583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___879588))
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
return (function (p__879788){
var vec__879789 = p__879788;
var v = cljs.core.nth.call(null,vec__879789,(0),null);
var p = cljs.core.nth.call(null,vec__879789,(1),null);
var job = vec__879789;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29846__auto___879971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___879971,res,vec__879789,v,p,job,jobs,results){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___879971,res,vec__879789,v,p,job,jobs,results){
return (function (state_879794){
var state_val_879795 = (state_879794[(1)]);
if((state_val_879795 === (1))){
var state_879794__$1 = state_879794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_879794__$1,(2),res,v);
} else {
if((state_val_879795 === (2))){
var inst_879791 = (state_879794[(2)]);
var inst_879792 = cljs.core.async.close_BANG_.call(null,res);
var state_879794__$1 = (function (){var statearr_879796 = state_879794;
(statearr_879796[(7)] = inst_879791);

return statearr_879796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_879794__$1,inst_879792);
} else {
return null;
}
}
});})(c__29846__auto___879971,res,vec__879789,v,p,job,jobs,results))
;
return ((function (switch__29734__auto__,c__29846__auto___879971,res,vec__879789,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0 = (function (){
var statearr_879800 = [null,null,null,null,null,null,null,null];
(statearr_879800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__);

(statearr_879800[(1)] = (1));

return statearr_879800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1 = (function (state_879794){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_879794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e879801){if((e879801 instanceof Object)){
var ex__29738__auto__ = e879801;
var statearr_879802_879972 = state_879794;
(statearr_879802_879972[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_879794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e879801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__879973 = state_879794;
state_879794 = G__879973;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = function(state_879794){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1.call(this,state_879794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___879971,res,vec__879789,v,p,job,jobs,results))
})();
var state__29848__auto__ = (function (){var statearr_879803 = f__29847__auto__.call(null);
(statearr_879803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___879971);

return statearr_879803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___879971,res,vec__879789,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__879804){
var vec__879805 = p__879804;
var v = cljs.core.nth.call(null,vec__879805,(0),null);
var p = cljs.core.nth.call(null,vec__879805,(1),null);
var job = vec__879805;
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
var n__25114__auto___879974 = n;
var __879975 = (0);
while(true){
if((__879975 < n__25114__auto___879974)){
var G__879806_879976 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__879806_879976) {
case "compute":
var c__29846__auto___879978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__879975,c__29846__auto___879978,G__879806_879976,n__25114__auto___879974,jobs,results,process,async){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (__879975,c__29846__auto___879978,G__879806_879976,n__25114__auto___879974,jobs,results,process,async){
return (function (state_879819){
var state_val_879820 = (state_879819[(1)]);
if((state_val_879820 === (1))){
var state_879819__$1 = state_879819;
var statearr_879821_879979 = state_879819__$1;
(statearr_879821_879979[(2)] = null);

(statearr_879821_879979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879820 === (2))){
var state_879819__$1 = state_879819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_879819__$1,(4),jobs);
} else {
if((state_val_879820 === (3))){
var inst_879817 = (state_879819[(2)]);
var state_879819__$1 = state_879819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_879819__$1,inst_879817);
} else {
if((state_val_879820 === (4))){
var inst_879809 = (state_879819[(2)]);
var inst_879810 = process.call(null,inst_879809);
var state_879819__$1 = state_879819;
if(cljs.core.truth_(inst_879810)){
var statearr_879822_879980 = state_879819__$1;
(statearr_879822_879980[(1)] = (5));

} else {
var statearr_879823_879981 = state_879819__$1;
(statearr_879823_879981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879820 === (5))){
var state_879819__$1 = state_879819;
var statearr_879824_879982 = state_879819__$1;
(statearr_879824_879982[(2)] = null);

(statearr_879824_879982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879820 === (6))){
var state_879819__$1 = state_879819;
var statearr_879825_879983 = state_879819__$1;
(statearr_879825_879983[(2)] = null);

(statearr_879825_879983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879820 === (7))){
var inst_879815 = (state_879819[(2)]);
var state_879819__$1 = state_879819;
var statearr_879826_879984 = state_879819__$1;
(statearr_879826_879984[(2)] = inst_879815);

(statearr_879826_879984[(1)] = (3));


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
});})(__879975,c__29846__auto___879978,G__879806_879976,n__25114__auto___879974,jobs,results,process,async))
;
return ((function (__879975,switch__29734__auto__,c__29846__auto___879978,G__879806_879976,n__25114__auto___879974,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0 = (function (){
var statearr_879830 = [null,null,null,null,null,null,null];
(statearr_879830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__);

(statearr_879830[(1)] = (1));

return statearr_879830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1 = (function (state_879819){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_879819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e879831){if((e879831 instanceof Object)){
var ex__29738__auto__ = e879831;
var statearr_879832_879985 = state_879819;
(statearr_879832_879985[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_879819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e879831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__879986 = state_879819;
state_879819 = G__879986;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = function(state_879819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1.call(this,state_879819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__;
})()
;})(__879975,switch__29734__auto__,c__29846__auto___879978,G__879806_879976,n__25114__auto___879974,jobs,results,process,async))
})();
var state__29848__auto__ = (function (){var statearr_879833 = f__29847__auto__.call(null);
(statearr_879833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___879978);

return statearr_879833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(__879975,c__29846__auto___879978,G__879806_879976,n__25114__auto___879974,jobs,results,process,async))
);


break;
case "async":
var c__29846__auto___879987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__879975,c__29846__auto___879987,G__879806_879976,n__25114__auto___879974,jobs,results,process,async){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (__879975,c__29846__auto___879987,G__879806_879976,n__25114__auto___879974,jobs,results,process,async){
return (function (state_879846){
var state_val_879847 = (state_879846[(1)]);
if((state_val_879847 === (1))){
var state_879846__$1 = state_879846;
var statearr_879848_879988 = state_879846__$1;
(statearr_879848_879988[(2)] = null);

(statearr_879848_879988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879847 === (2))){
var state_879846__$1 = state_879846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_879846__$1,(4),jobs);
} else {
if((state_val_879847 === (3))){
var inst_879844 = (state_879846[(2)]);
var state_879846__$1 = state_879846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_879846__$1,inst_879844);
} else {
if((state_val_879847 === (4))){
var inst_879836 = (state_879846[(2)]);
var inst_879837 = async.call(null,inst_879836);
var state_879846__$1 = state_879846;
if(cljs.core.truth_(inst_879837)){
var statearr_879849_879989 = state_879846__$1;
(statearr_879849_879989[(1)] = (5));

} else {
var statearr_879850_879990 = state_879846__$1;
(statearr_879850_879990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879847 === (5))){
var state_879846__$1 = state_879846;
var statearr_879851_879991 = state_879846__$1;
(statearr_879851_879991[(2)] = null);

(statearr_879851_879991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879847 === (6))){
var state_879846__$1 = state_879846;
var statearr_879852_879992 = state_879846__$1;
(statearr_879852_879992[(2)] = null);

(statearr_879852_879992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879847 === (7))){
var inst_879842 = (state_879846[(2)]);
var state_879846__$1 = state_879846;
var statearr_879853_879993 = state_879846__$1;
(statearr_879853_879993[(2)] = inst_879842);

(statearr_879853_879993[(1)] = (3));


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
});})(__879975,c__29846__auto___879987,G__879806_879976,n__25114__auto___879974,jobs,results,process,async))
;
return ((function (__879975,switch__29734__auto__,c__29846__auto___879987,G__879806_879976,n__25114__auto___879974,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0 = (function (){
var statearr_879857 = [null,null,null,null,null,null,null];
(statearr_879857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__);

(statearr_879857[(1)] = (1));

return statearr_879857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1 = (function (state_879846){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_879846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e879858){if((e879858 instanceof Object)){
var ex__29738__auto__ = e879858;
var statearr_879859_879994 = state_879846;
(statearr_879859_879994[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_879846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e879858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__879995 = state_879846;
state_879846 = G__879995;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = function(state_879846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1.call(this,state_879846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__;
})()
;})(__879975,switch__29734__auto__,c__29846__auto___879987,G__879806_879976,n__25114__auto___879974,jobs,results,process,async))
})();
var state__29848__auto__ = (function (){var statearr_879860 = f__29847__auto__.call(null);
(statearr_879860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___879987);

return statearr_879860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(__879975,c__29846__auto___879987,G__879806_879976,n__25114__auto___879974,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__879996 = (__879975 + (1));
__879975 = G__879996;
continue;
} else {
}
break;
}

var c__29846__auto___879997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___879997,jobs,results,process,async){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___879997,jobs,results,process,async){
return (function (state_879882){
var state_val_879883 = (state_879882[(1)]);
if((state_val_879883 === (1))){
var state_879882__$1 = state_879882;
var statearr_879884_879998 = state_879882__$1;
(statearr_879884_879998[(2)] = null);

(statearr_879884_879998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879883 === (2))){
var state_879882__$1 = state_879882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_879882__$1,(4),from);
} else {
if((state_val_879883 === (3))){
var inst_879880 = (state_879882[(2)]);
var state_879882__$1 = state_879882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_879882__$1,inst_879880);
} else {
if((state_val_879883 === (4))){
var inst_879863 = (state_879882[(7)]);
var inst_879863__$1 = (state_879882[(2)]);
var inst_879864 = (inst_879863__$1 == null);
var state_879882__$1 = (function (){var statearr_879885 = state_879882;
(statearr_879885[(7)] = inst_879863__$1);

return statearr_879885;
})();
if(cljs.core.truth_(inst_879864)){
var statearr_879886_879999 = state_879882__$1;
(statearr_879886_879999[(1)] = (5));

} else {
var statearr_879887_880000 = state_879882__$1;
(statearr_879887_880000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879883 === (5))){
var inst_879866 = cljs.core.async.close_BANG_.call(null,jobs);
var state_879882__$1 = state_879882;
var statearr_879888_880001 = state_879882__$1;
(statearr_879888_880001[(2)] = inst_879866);

(statearr_879888_880001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879883 === (6))){
var inst_879868 = (state_879882[(8)]);
var inst_879863 = (state_879882[(7)]);
var inst_879868__$1 = cljs.core.async.chan.call(null,(1));
var inst_879869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_879870 = [inst_879863,inst_879868__$1];
var inst_879871 = (new cljs.core.PersistentVector(null,2,(5),inst_879869,inst_879870,null));
var state_879882__$1 = (function (){var statearr_879889 = state_879882;
(statearr_879889[(8)] = inst_879868__$1);

return statearr_879889;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_879882__$1,(8),jobs,inst_879871);
} else {
if((state_val_879883 === (7))){
var inst_879878 = (state_879882[(2)]);
var state_879882__$1 = state_879882;
var statearr_879890_880002 = state_879882__$1;
(statearr_879890_880002[(2)] = inst_879878);

(statearr_879890_880002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879883 === (8))){
var inst_879868 = (state_879882[(8)]);
var inst_879873 = (state_879882[(2)]);
var state_879882__$1 = (function (){var statearr_879891 = state_879882;
(statearr_879891[(9)] = inst_879873);

return statearr_879891;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_879882__$1,(9),results,inst_879868);
} else {
if((state_val_879883 === (9))){
var inst_879875 = (state_879882[(2)]);
var state_879882__$1 = (function (){var statearr_879892 = state_879882;
(statearr_879892[(10)] = inst_879875);

return statearr_879892;
})();
var statearr_879893_880003 = state_879882__$1;
(statearr_879893_880003[(2)] = null);

(statearr_879893_880003[(1)] = (2));


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
});})(c__29846__auto___879997,jobs,results,process,async))
;
return ((function (switch__29734__auto__,c__29846__auto___879997,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0 = (function (){
var statearr_879897 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_879897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__);

(statearr_879897[(1)] = (1));

return statearr_879897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1 = (function (state_879882){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_879882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e879898){if((e879898 instanceof Object)){
var ex__29738__auto__ = e879898;
var statearr_879899_880004 = state_879882;
(statearr_879899_880004[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_879882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e879898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__880005 = state_879882;
state_879882 = G__880005;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = function(state_879882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1.call(this,state_879882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___879997,jobs,results,process,async))
})();
var state__29848__auto__ = (function (){var statearr_879900 = f__29847__auto__.call(null);
(statearr_879900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___879997);

return statearr_879900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___879997,jobs,results,process,async))
);


var c__29846__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto__,jobs,results,process,async){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto__,jobs,results,process,async){
return (function (state_879938){
var state_val_879939 = (state_879938[(1)]);
if((state_val_879939 === (7))){
var inst_879934 = (state_879938[(2)]);
var state_879938__$1 = state_879938;
var statearr_879940_880006 = state_879938__$1;
(statearr_879940_880006[(2)] = inst_879934);

(statearr_879940_880006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (20))){
var state_879938__$1 = state_879938;
var statearr_879941_880007 = state_879938__$1;
(statearr_879941_880007[(2)] = null);

(statearr_879941_880007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (1))){
var state_879938__$1 = state_879938;
var statearr_879942_880008 = state_879938__$1;
(statearr_879942_880008[(2)] = null);

(statearr_879942_880008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (4))){
var inst_879903 = (state_879938[(7)]);
var inst_879903__$1 = (state_879938[(2)]);
var inst_879904 = (inst_879903__$1 == null);
var state_879938__$1 = (function (){var statearr_879943 = state_879938;
(statearr_879943[(7)] = inst_879903__$1);

return statearr_879943;
})();
if(cljs.core.truth_(inst_879904)){
var statearr_879944_880009 = state_879938__$1;
(statearr_879944_880009[(1)] = (5));

} else {
var statearr_879945_880010 = state_879938__$1;
(statearr_879945_880010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (15))){
var inst_879916 = (state_879938[(8)]);
var state_879938__$1 = state_879938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_879938__$1,(18),to,inst_879916);
} else {
if((state_val_879939 === (21))){
var inst_879929 = (state_879938[(2)]);
var state_879938__$1 = state_879938;
var statearr_879946_880011 = state_879938__$1;
(statearr_879946_880011[(2)] = inst_879929);

(statearr_879946_880011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (13))){
var inst_879931 = (state_879938[(2)]);
var state_879938__$1 = (function (){var statearr_879947 = state_879938;
(statearr_879947[(9)] = inst_879931);

return statearr_879947;
})();
var statearr_879948_880012 = state_879938__$1;
(statearr_879948_880012[(2)] = null);

(statearr_879948_880012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (6))){
var inst_879903 = (state_879938[(7)]);
var state_879938__$1 = state_879938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_879938__$1,(11),inst_879903);
} else {
if((state_val_879939 === (17))){
var inst_879924 = (state_879938[(2)]);
var state_879938__$1 = state_879938;
if(cljs.core.truth_(inst_879924)){
var statearr_879949_880013 = state_879938__$1;
(statearr_879949_880013[(1)] = (19));

} else {
var statearr_879950_880014 = state_879938__$1;
(statearr_879950_880014[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (3))){
var inst_879936 = (state_879938[(2)]);
var state_879938__$1 = state_879938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_879938__$1,inst_879936);
} else {
if((state_val_879939 === (12))){
var inst_879913 = (state_879938[(10)]);
var state_879938__$1 = state_879938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_879938__$1,(14),inst_879913);
} else {
if((state_val_879939 === (2))){
var state_879938__$1 = state_879938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_879938__$1,(4),results);
} else {
if((state_val_879939 === (19))){
var state_879938__$1 = state_879938;
var statearr_879951_880015 = state_879938__$1;
(statearr_879951_880015[(2)] = null);

(statearr_879951_880015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (11))){
var inst_879913 = (state_879938[(2)]);
var state_879938__$1 = (function (){var statearr_879952 = state_879938;
(statearr_879952[(10)] = inst_879913);

return statearr_879952;
})();
var statearr_879953_880016 = state_879938__$1;
(statearr_879953_880016[(2)] = null);

(statearr_879953_880016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (9))){
var state_879938__$1 = state_879938;
var statearr_879954_880017 = state_879938__$1;
(statearr_879954_880017[(2)] = null);

(statearr_879954_880017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (5))){
var state_879938__$1 = state_879938;
if(cljs.core.truth_(close_QMARK_)){
var statearr_879955_880018 = state_879938__$1;
(statearr_879955_880018[(1)] = (8));

} else {
var statearr_879956_880019 = state_879938__$1;
(statearr_879956_880019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (14))){
var inst_879916 = (state_879938[(8)]);
var inst_879918 = (state_879938[(11)]);
var inst_879916__$1 = (state_879938[(2)]);
var inst_879917 = (inst_879916__$1 == null);
var inst_879918__$1 = cljs.core.not.call(null,inst_879917);
var state_879938__$1 = (function (){var statearr_879957 = state_879938;
(statearr_879957[(8)] = inst_879916__$1);

(statearr_879957[(11)] = inst_879918__$1);

return statearr_879957;
})();
if(inst_879918__$1){
var statearr_879958_880020 = state_879938__$1;
(statearr_879958_880020[(1)] = (15));

} else {
var statearr_879959_880021 = state_879938__$1;
(statearr_879959_880021[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (16))){
var inst_879918 = (state_879938[(11)]);
var state_879938__$1 = state_879938;
var statearr_879960_880022 = state_879938__$1;
(statearr_879960_880022[(2)] = inst_879918);

(statearr_879960_880022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (10))){
var inst_879910 = (state_879938[(2)]);
var state_879938__$1 = state_879938;
var statearr_879961_880023 = state_879938__$1;
(statearr_879961_880023[(2)] = inst_879910);

(statearr_879961_880023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (18))){
var inst_879921 = (state_879938[(2)]);
var state_879938__$1 = state_879938;
var statearr_879962_880024 = state_879938__$1;
(statearr_879962_880024[(2)] = inst_879921);

(statearr_879962_880024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_879939 === (8))){
var inst_879907 = cljs.core.async.close_BANG_.call(null,to);
var state_879938__$1 = state_879938;
var statearr_879963_880025 = state_879938__$1;
(statearr_879963_880025[(2)] = inst_879907);

(statearr_879963_880025[(1)] = (10));


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
});})(c__29846__auto__,jobs,results,process,async))
;
return ((function (switch__29734__auto__,c__29846__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0 = (function (){
var statearr_879967 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_879967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__);

(statearr_879967[(1)] = (1));

return statearr_879967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1 = (function (state_879938){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_879938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e879968){if((e879968 instanceof Object)){
var ex__29738__auto__ = e879968;
var statearr_879969_880026 = state_879938;
(statearr_879969_880026[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_879938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e879968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__880027 = state_879938;
state_879938 = G__880027;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = function(state_879938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1.call(this,state_879938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto__,jobs,results,process,async))
})();
var state__29848__auto__ = (function (){var statearr_879970 = f__29847__auto__.call(null);
(statearr_879970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto__);

return statearr_879970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto__,jobs,results,process,async))
);

return c__29846__auto__;
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
var args880028 = [];
var len__25269__auto___880031 = arguments.length;
var i__25270__auto___880032 = (0);
while(true){
if((i__25270__auto___880032 < len__25269__auto___880031)){
args880028.push((arguments[i__25270__auto___880032]));

var G__880033 = (i__25270__auto___880032 + (1));
i__25270__auto___880032 = G__880033;
continue;
} else {
}
break;
}

var G__880030 = args880028.length;
switch (G__880030) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args880028.length)].join('')));

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
var args880035 = [];
var len__25269__auto___880038 = arguments.length;
var i__25270__auto___880039 = (0);
while(true){
if((i__25270__auto___880039 < len__25269__auto___880038)){
args880035.push((arguments[i__25270__auto___880039]));

var G__880040 = (i__25270__auto___880039 + (1));
i__25270__auto___880039 = G__880040;
continue;
} else {
}
break;
}

var G__880037 = args880035.length;
switch (G__880037) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args880035.length)].join('')));

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
var args880042 = [];
var len__25269__auto___880095 = arguments.length;
var i__25270__auto___880096 = (0);
while(true){
if((i__25270__auto___880096 < len__25269__auto___880095)){
args880042.push((arguments[i__25270__auto___880096]));

var G__880097 = (i__25270__auto___880096 + (1));
i__25270__auto___880096 = G__880097;
continue;
} else {
}
break;
}

var G__880044 = args880042.length;
switch (G__880044) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args880042.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29846__auto___880099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___880099,tc,fc){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___880099,tc,fc){
return (function (state_880070){
var state_val_880071 = (state_880070[(1)]);
if((state_val_880071 === (7))){
var inst_880066 = (state_880070[(2)]);
var state_880070__$1 = state_880070;
var statearr_880072_880100 = state_880070__$1;
(statearr_880072_880100[(2)] = inst_880066);

(statearr_880072_880100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880071 === (1))){
var state_880070__$1 = state_880070;
var statearr_880073_880101 = state_880070__$1;
(statearr_880073_880101[(2)] = null);

(statearr_880073_880101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880071 === (4))){
var inst_880047 = (state_880070[(7)]);
var inst_880047__$1 = (state_880070[(2)]);
var inst_880048 = (inst_880047__$1 == null);
var state_880070__$1 = (function (){var statearr_880074 = state_880070;
(statearr_880074[(7)] = inst_880047__$1);

return statearr_880074;
})();
if(cljs.core.truth_(inst_880048)){
var statearr_880075_880102 = state_880070__$1;
(statearr_880075_880102[(1)] = (5));

} else {
var statearr_880076_880103 = state_880070__$1;
(statearr_880076_880103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880071 === (13))){
var state_880070__$1 = state_880070;
var statearr_880077_880104 = state_880070__$1;
(statearr_880077_880104[(2)] = null);

(statearr_880077_880104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880071 === (6))){
var inst_880047 = (state_880070[(7)]);
var inst_880053 = p.call(null,inst_880047);
var state_880070__$1 = state_880070;
if(cljs.core.truth_(inst_880053)){
var statearr_880078_880105 = state_880070__$1;
(statearr_880078_880105[(1)] = (9));

} else {
var statearr_880079_880106 = state_880070__$1;
(statearr_880079_880106[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880071 === (3))){
var inst_880068 = (state_880070[(2)]);
var state_880070__$1 = state_880070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_880070__$1,inst_880068);
} else {
if((state_val_880071 === (12))){
var state_880070__$1 = state_880070;
var statearr_880080_880107 = state_880070__$1;
(statearr_880080_880107[(2)] = null);

(statearr_880080_880107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880071 === (2))){
var state_880070__$1 = state_880070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_880070__$1,(4),ch);
} else {
if((state_val_880071 === (11))){
var inst_880047 = (state_880070[(7)]);
var inst_880057 = (state_880070[(2)]);
var state_880070__$1 = state_880070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_880070__$1,(8),inst_880057,inst_880047);
} else {
if((state_val_880071 === (9))){
var state_880070__$1 = state_880070;
var statearr_880081_880108 = state_880070__$1;
(statearr_880081_880108[(2)] = tc);

(statearr_880081_880108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880071 === (5))){
var inst_880050 = cljs.core.async.close_BANG_.call(null,tc);
var inst_880051 = cljs.core.async.close_BANG_.call(null,fc);
var state_880070__$1 = (function (){var statearr_880082 = state_880070;
(statearr_880082[(8)] = inst_880050);

return statearr_880082;
})();
var statearr_880083_880109 = state_880070__$1;
(statearr_880083_880109[(2)] = inst_880051);

(statearr_880083_880109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880071 === (14))){
var inst_880064 = (state_880070[(2)]);
var state_880070__$1 = state_880070;
var statearr_880084_880110 = state_880070__$1;
(statearr_880084_880110[(2)] = inst_880064);

(statearr_880084_880110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880071 === (10))){
var state_880070__$1 = state_880070;
var statearr_880085_880111 = state_880070__$1;
(statearr_880085_880111[(2)] = fc);

(statearr_880085_880111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880071 === (8))){
var inst_880059 = (state_880070[(2)]);
var state_880070__$1 = state_880070;
if(cljs.core.truth_(inst_880059)){
var statearr_880086_880112 = state_880070__$1;
(statearr_880086_880112[(1)] = (12));

} else {
var statearr_880087_880113 = state_880070__$1;
(statearr_880087_880113[(1)] = (13));

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
});})(c__29846__auto___880099,tc,fc))
;
return ((function (switch__29734__auto__,c__29846__auto___880099,tc,fc){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_880091 = [null,null,null,null,null,null,null,null,null];
(statearr_880091[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_880091[(1)] = (1));

return statearr_880091;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_880070){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_880070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e880092){if((e880092 instanceof Object)){
var ex__29738__auto__ = e880092;
var statearr_880093_880114 = state_880070;
(statearr_880093_880114[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_880070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e880092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__880115 = state_880070;
state_880070 = G__880115;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_880070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_880070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___880099,tc,fc))
})();
var state__29848__auto__ = (function (){var statearr_880094 = f__29847__auto__.call(null);
(statearr_880094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___880099);

return statearr_880094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___880099,tc,fc))
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
var c__29846__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto__){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto__){
return (function (state_880162){
var state_val_880163 = (state_880162[(1)]);
if((state_val_880163 === (1))){
var inst_880148 = init;
var state_880162__$1 = (function (){var statearr_880164 = state_880162;
(statearr_880164[(7)] = inst_880148);

return statearr_880164;
})();
var statearr_880165_880180 = state_880162__$1;
(statearr_880165_880180[(2)] = null);

(statearr_880165_880180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880163 === (2))){
var state_880162__$1 = state_880162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_880162__$1,(4),ch);
} else {
if((state_val_880163 === (3))){
var inst_880160 = (state_880162[(2)]);
var state_880162__$1 = state_880162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_880162__$1,inst_880160);
} else {
if((state_val_880163 === (4))){
var inst_880151 = (state_880162[(8)]);
var inst_880151__$1 = (state_880162[(2)]);
var inst_880152 = (inst_880151__$1 == null);
var state_880162__$1 = (function (){var statearr_880166 = state_880162;
(statearr_880166[(8)] = inst_880151__$1);

return statearr_880166;
})();
if(cljs.core.truth_(inst_880152)){
var statearr_880167_880181 = state_880162__$1;
(statearr_880167_880181[(1)] = (5));

} else {
var statearr_880168_880182 = state_880162__$1;
(statearr_880168_880182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880163 === (5))){
var inst_880148 = (state_880162[(7)]);
var state_880162__$1 = state_880162;
var statearr_880169_880183 = state_880162__$1;
(statearr_880169_880183[(2)] = inst_880148);

(statearr_880169_880183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880163 === (6))){
var inst_880148 = (state_880162[(7)]);
var inst_880151 = (state_880162[(8)]);
var inst_880155 = f.call(null,inst_880148,inst_880151);
var inst_880148__$1 = inst_880155;
var state_880162__$1 = (function (){var statearr_880170 = state_880162;
(statearr_880170[(7)] = inst_880148__$1);

return statearr_880170;
})();
var statearr_880171_880184 = state_880162__$1;
(statearr_880171_880184[(2)] = null);

(statearr_880171_880184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880163 === (7))){
var inst_880158 = (state_880162[(2)]);
var state_880162__$1 = state_880162;
var statearr_880172_880185 = state_880162__$1;
(statearr_880172_880185[(2)] = inst_880158);

(statearr_880172_880185[(1)] = (3));


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
});})(c__29846__auto__))
;
return ((function (switch__29734__auto__,c__29846__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29735__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29735__auto____0 = (function (){
var statearr_880176 = [null,null,null,null,null,null,null,null,null];
(statearr_880176[(0)] = cljs$core$async$reduce_$_state_machine__29735__auto__);

(statearr_880176[(1)] = (1));

return statearr_880176;
});
var cljs$core$async$reduce_$_state_machine__29735__auto____1 = (function (state_880162){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_880162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e880177){if((e880177 instanceof Object)){
var ex__29738__auto__ = e880177;
var statearr_880178_880186 = state_880162;
(statearr_880178_880186[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_880162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e880177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__880187 = state_880162;
state_880162 = G__880187;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29735__auto__ = function(state_880162){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29735__auto____1.call(this,state_880162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29735__auto____0;
cljs$core$async$reduce_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29735__auto____1;
return cljs$core$async$reduce_$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto__))
})();
var state__29848__auto__ = (function (){var statearr_880179 = f__29847__auto__.call(null);
(statearr_880179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto__);

return statearr_880179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto__))
);

return c__29846__auto__;
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
var args880188 = [];
var len__25269__auto___880240 = arguments.length;
var i__25270__auto___880241 = (0);
while(true){
if((i__25270__auto___880241 < len__25269__auto___880240)){
args880188.push((arguments[i__25270__auto___880241]));

var G__880242 = (i__25270__auto___880241 + (1));
i__25270__auto___880241 = G__880242;
continue;
} else {
}
break;
}

var G__880190 = args880188.length;
switch (G__880190) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args880188.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29846__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto__){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto__){
return (function (state_880215){
var state_val_880216 = (state_880215[(1)]);
if((state_val_880216 === (7))){
var inst_880197 = (state_880215[(2)]);
var state_880215__$1 = state_880215;
var statearr_880217_880244 = state_880215__$1;
(statearr_880217_880244[(2)] = inst_880197);

(statearr_880217_880244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880216 === (1))){
var inst_880191 = cljs.core.seq.call(null,coll);
var inst_880192 = inst_880191;
var state_880215__$1 = (function (){var statearr_880218 = state_880215;
(statearr_880218[(7)] = inst_880192);

return statearr_880218;
})();
var statearr_880219_880245 = state_880215__$1;
(statearr_880219_880245[(2)] = null);

(statearr_880219_880245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880216 === (4))){
var inst_880192 = (state_880215[(7)]);
var inst_880195 = cljs.core.first.call(null,inst_880192);
var state_880215__$1 = state_880215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_880215__$1,(7),ch,inst_880195);
} else {
if((state_val_880216 === (13))){
var inst_880209 = (state_880215[(2)]);
var state_880215__$1 = state_880215;
var statearr_880220_880246 = state_880215__$1;
(statearr_880220_880246[(2)] = inst_880209);

(statearr_880220_880246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880216 === (6))){
var inst_880200 = (state_880215[(2)]);
var state_880215__$1 = state_880215;
if(cljs.core.truth_(inst_880200)){
var statearr_880221_880247 = state_880215__$1;
(statearr_880221_880247[(1)] = (8));

} else {
var statearr_880222_880248 = state_880215__$1;
(statearr_880222_880248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880216 === (3))){
var inst_880213 = (state_880215[(2)]);
var state_880215__$1 = state_880215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_880215__$1,inst_880213);
} else {
if((state_val_880216 === (12))){
var state_880215__$1 = state_880215;
var statearr_880223_880249 = state_880215__$1;
(statearr_880223_880249[(2)] = null);

(statearr_880223_880249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880216 === (2))){
var inst_880192 = (state_880215[(7)]);
var state_880215__$1 = state_880215;
if(cljs.core.truth_(inst_880192)){
var statearr_880224_880250 = state_880215__$1;
(statearr_880224_880250[(1)] = (4));

} else {
var statearr_880225_880251 = state_880215__$1;
(statearr_880225_880251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880216 === (11))){
var inst_880206 = cljs.core.async.close_BANG_.call(null,ch);
var state_880215__$1 = state_880215;
var statearr_880226_880252 = state_880215__$1;
(statearr_880226_880252[(2)] = inst_880206);

(statearr_880226_880252[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880216 === (9))){
var state_880215__$1 = state_880215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_880227_880253 = state_880215__$1;
(statearr_880227_880253[(1)] = (11));

} else {
var statearr_880228_880254 = state_880215__$1;
(statearr_880228_880254[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880216 === (5))){
var inst_880192 = (state_880215[(7)]);
var state_880215__$1 = state_880215;
var statearr_880229_880255 = state_880215__$1;
(statearr_880229_880255[(2)] = inst_880192);

(statearr_880229_880255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880216 === (10))){
var inst_880211 = (state_880215[(2)]);
var state_880215__$1 = state_880215;
var statearr_880230_880256 = state_880215__$1;
(statearr_880230_880256[(2)] = inst_880211);

(statearr_880230_880256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880216 === (8))){
var inst_880192 = (state_880215[(7)]);
var inst_880202 = cljs.core.next.call(null,inst_880192);
var inst_880192__$1 = inst_880202;
var state_880215__$1 = (function (){var statearr_880231 = state_880215;
(statearr_880231[(7)] = inst_880192__$1);

return statearr_880231;
})();
var statearr_880232_880257 = state_880215__$1;
(statearr_880232_880257[(2)] = null);

(statearr_880232_880257[(1)] = (2));


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
});})(c__29846__auto__))
;
return ((function (switch__29734__auto__,c__29846__auto__){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_880236 = [null,null,null,null,null,null,null,null];
(statearr_880236[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_880236[(1)] = (1));

return statearr_880236;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_880215){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_880215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e880237){if((e880237 instanceof Object)){
var ex__29738__auto__ = e880237;
var statearr_880238_880258 = state_880215;
(statearr_880238_880258[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_880215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e880237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__880259 = state_880215;
state_880215 = G__880259;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_880215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_880215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto__))
})();
var state__29848__auto__ = (function (){var statearr_880239 = f__29847__auto__.call(null);
(statearr_880239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto__);

return statearr_880239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto__))
);

return c__29846__auto__;
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
var x__24866__auto__ = (((_ == null))?null:_);
var m__24867__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,_);
} else {
var m__24867__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,_);
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
var x__24866__auto__ = (((m == null))?null:m);
var m__24867__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__24867__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__24866__auto__ = (((m == null))?null:m);
var m__24867__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,m,ch);
} else {
var m__24867__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,m,ch);
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
var x__24866__auto__ = (((m == null))?null:m);
var m__24867__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,m);
} else {
var m__24867__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async880481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async880481 = (function (mult,ch,cs,meta880482){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta880482 = meta880482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async880481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_880483,meta880482__$1){
var self__ = this;
var _880483__$1 = this;
return (new cljs.core.async.t_cljs$core$async880481(self__.mult,self__.ch,self__.cs,meta880482__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async880481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_880483){
var self__ = this;
var _880483__$1 = this;
return self__.meta880482;
});})(cs))
;

cljs.core.async.t_cljs$core$async880481.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async880481.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async880481.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async880481.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async880481.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async880481.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async880481.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta880482","meta880482",2061161856,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async880481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async880481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async880481";

cljs.core.async.t_cljs$core$async880481.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async880481");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async880481 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async880481(mult__$1,ch__$1,cs__$1,meta880482){
return (new cljs.core.async.t_cljs$core$async880481(mult__$1,ch__$1,cs__$1,meta880482));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async880481(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29846__auto___880702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___880702,cs,m,dchan,dctr,done){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___880702,cs,m,dchan,dctr,done){
return (function (state_880614){
var state_val_880615 = (state_880614[(1)]);
if((state_val_880615 === (7))){
var inst_880610 = (state_880614[(2)]);
var state_880614__$1 = state_880614;
var statearr_880616_880703 = state_880614__$1;
(statearr_880616_880703[(2)] = inst_880610);

(statearr_880616_880703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (20))){
var inst_880515 = (state_880614[(7)]);
var inst_880525 = cljs.core.first.call(null,inst_880515);
var inst_880526 = cljs.core.nth.call(null,inst_880525,(0),null);
var inst_880527 = cljs.core.nth.call(null,inst_880525,(1),null);
var state_880614__$1 = (function (){var statearr_880617 = state_880614;
(statearr_880617[(8)] = inst_880526);

return statearr_880617;
})();
if(cljs.core.truth_(inst_880527)){
var statearr_880618_880704 = state_880614__$1;
(statearr_880618_880704[(1)] = (22));

} else {
var statearr_880619_880705 = state_880614__$1;
(statearr_880619_880705[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (27))){
var inst_880557 = (state_880614[(9)]);
var inst_880555 = (state_880614[(10)]);
var inst_880486 = (state_880614[(11)]);
var inst_880562 = (state_880614[(12)]);
var inst_880562__$1 = cljs.core._nth.call(null,inst_880555,inst_880557);
var inst_880563 = cljs.core.async.put_BANG_.call(null,inst_880562__$1,inst_880486,done);
var state_880614__$1 = (function (){var statearr_880620 = state_880614;
(statearr_880620[(12)] = inst_880562__$1);

return statearr_880620;
})();
if(cljs.core.truth_(inst_880563)){
var statearr_880621_880706 = state_880614__$1;
(statearr_880621_880706[(1)] = (30));

} else {
var statearr_880622_880707 = state_880614__$1;
(statearr_880622_880707[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (1))){
var state_880614__$1 = state_880614;
var statearr_880623_880708 = state_880614__$1;
(statearr_880623_880708[(2)] = null);

(statearr_880623_880708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (24))){
var inst_880515 = (state_880614[(7)]);
var inst_880532 = (state_880614[(2)]);
var inst_880533 = cljs.core.next.call(null,inst_880515);
var inst_880495 = inst_880533;
var inst_880496 = null;
var inst_880497 = (0);
var inst_880498 = (0);
var state_880614__$1 = (function (){var statearr_880624 = state_880614;
(statearr_880624[(13)] = inst_880496);

(statearr_880624[(14)] = inst_880497);

(statearr_880624[(15)] = inst_880495);

(statearr_880624[(16)] = inst_880498);

(statearr_880624[(17)] = inst_880532);

return statearr_880624;
})();
var statearr_880625_880709 = state_880614__$1;
(statearr_880625_880709[(2)] = null);

(statearr_880625_880709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (39))){
var state_880614__$1 = state_880614;
var statearr_880629_880710 = state_880614__$1;
(statearr_880629_880710[(2)] = null);

(statearr_880629_880710[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (4))){
var inst_880486 = (state_880614[(11)]);
var inst_880486__$1 = (state_880614[(2)]);
var inst_880487 = (inst_880486__$1 == null);
var state_880614__$1 = (function (){var statearr_880630 = state_880614;
(statearr_880630[(11)] = inst_880486__$1);

return statearr_880630;
})();
if(cljs.core.truth_(inst_880487)){
var statearr_880631_880711 = state_880614__$1;
(statearr_880631_880711[(1)] = (5));

} else {
var statearr_880632_880712 = state_880614__$1;
(statearr_880632_880712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (15))){
var inst_880496 = (state_880614[(13)]);
var inst_880497 = (state_880614[(14)]);
var inst_880495 = (state_880614[(15)]);
var inst_880498 = (state_880614[(16)]);
var inst_880511 = (state_880614[(2)]);
var inst_880512 = (inst_880498 + (1));
var tmp880626 = inst_880496;
var tmp880627 = inst_880497;
var tmp880628 = inst_880495;
var inst_880495__$1 = tmp880628;
var inst_880496__$1 = tmp880626;
var inst_880497__$1 = tmp880627;
var inst_880498__$1 = inst_880512;
var state_880614__$1 = (function (){var statearr_880633 = state_880614;
(statearr_880633[(13)] = inst_880496__$1);

(statearr_880633[(14)] = inst_880497__$1);

(statearr_880633[(15)] = inst_880495__$1);

(statearr_880633[(16)] = inst_880498__$1);

(statearr_880633[(18)] = inst_880511);

return statearr_880633;
})();
var statearr_880634_880713 = state_880614__$1;
(statearr_880634_880713[(2)] = null);

(statearr_880634_880713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (21))){
var inst_880536 = (state_880614[(2)]);
var state_880614__$1 = state_880614;
var statearr_880638_880714 = state_880614__$1;
(statearr_880638_880714[(2)] = inst_880536);

(statearr_880638_880714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (31))){
var inst_880562 = (state_880614[(12)]);
var inst_880566 = done.call(null,null);
var inst_880567 = cljs.core.async.untap_STAR_.call(null,m,inst_880562);
var state_880614__$1 = (function (){var statearr_880639 = state_880614;
(statearr_880639[(19)] = inst_880566);

return statearr_880639;
})();
var statearr_880640_880715 = state_880614__$1;
(statearr_880640_880715[(2)] = inst_880567);

(statearr_880640_880715[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (32))){
var inst_880554 = (state_880614[(20)]);
var inst_880557 = (state_880614[(9)]);
var inst_880555 = (state_880614[(10)]);
var inst_880556 = (state_880614[(21)]);
var inst_880569 = (state_880614[(2)]);
var inst_880570 = (inst_880557 + (1));
var tmp880635 = inst_880554;
var tmp880636 = inst_880555;
var tmp880637 = inst_880556;
var inst_880554__$1 = tmp880635;
var inst_880555__$1 = tmp880636;
var inst_880556__$1 = tmp880637;
var inst_880557__$1 = inst_880570;
var state_880614__$1 = (function (){var statearr_880641 = state_880614;
(statearr_880641[(20)] = inst_880554__$1);

(statearr_880641[(9)] = inst_880557__$1);

(statearr_880641[(10)] = inst_880555__$1);

(statearr_880641[(22)] = inst_880569);

(statearr_880641[(21)] = inst_880556__$1);

return statearr_880641;
})();
var statearr_880642_880716 = state_880614__$1;
(statearr_880642_880716[(2)] = null);

(statearr_880642_880716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (40))){
var inst_880582 = (state_880614[(23)]);
var inst_880586 = done.call(null,null);
var inst_880587 = cljs.core.async.untap_STAR_.call(null,m,inst_880582);
var state_880614__$1 = (function (){var statearr_880643 = state_880614;
(statearr_880643[(24)] = inst_880586);

return statearr_880643;
})();
var statearr_880644_880717 = state_880614__$1;
(statearr_880644_880717[(2)] = inst_880587);

(statearr_880644_880717[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (33))){
var inst_880573 = (state_880614[(25)]);
var inst_880575 = cljs.core.chunked_seq_QMARK_.call(null,inst_880573);
var state_880614__$1 = state_880614;
if(inst_880575){
var statearr_880645_880718 = state_880614__$1;
(statearr_880645_880718[(1)] = (36));

} else {
var statearr_880646_880719 = state_880614__$1;
(statearr_880646_880719[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (13))){
var inst_880505 = (state_880614[(26)]);
var inst_880508 = cljs.core.async.close_BANG_.call(null,inst_880505);
var state_880614__$1 = state_880614;
var statearr_880647_880720 = state_880614__$1;
(statearr_880647_880720[(2)] = inst_880508);

(statearr_880647_880720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (22))){
var inst_880526 = (state_880614[(8)]);
var inst_880529 = cljs.core.async.close_BANG_.call(null,inst_880526);
var state_880614__$1 = state_880614;
var statearr_880648_880721 = state_880614__$1;
(statearr_880648_880721[(2)] = inst_880529);

(statearr_880648_880721[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (36))){
var inst_880573 = (state_880614[(25)]);
var inst_880577 = cljs.core.chunk_first.call(null,inst_880573);
var inst_880578 = cljs.core.chunk_rest.call(null,inst_880573);
var inst_880579 = cljs.core.count.call(null,inst_880577);
var inst_880554 = inst_880578;
var inst_880555 = inst_880577;
var inst_880556 = inst_880579;
var inst_880557 = (0);
var state_880614__$1 = (function (){var statearr_880649 = state_880614;
(statearr_880649[(20)] = inst_880554);

(statearr_880649[(9)] = inst_880557);

(statearr_880649[(10)] = inst_880555);

(statearr_880649[(21)] = inst_880556);

return statearr_880649;
})();
var statearr_880650_880722 = state_880614__$1;
(statearr_880650_880722[(2)] = null);

(statearr_880650_880722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (41))){
var inst_880573 = (state_880614[(25)]);
var inst_880589 = (state_880614[(2)]);
var inst_880590 = cljs.core.next.call(null,inst_880573);
var inst_880554 = inst_880590;
var inst_880555 = null;
var inst_880556 = (0);
var inst_880557 = (0);
var state_880614__$1 = (function (){var statearr_880651 = state_880614;
(statearr_880651[(20)] = inst_880554);

(statearr_880651[(27)] = inst_880589);

(statearr_880651[(9)] = inst_880557);

(statearr_880651[(10)] = inst_880555);

(statearr_880651[(21)] = inst_880556);

return statearr_880651;
})();
var statearr_880652_880723 = state_880614__$1;
(statearr_880652_880723[(2)] = null);

(statearr_880652_880723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (43))){
var state_880614__$1 = state_880614;
var statearr_880653_880724 = state_880614__$1;
(statearr_880653_880724[(2)] = null);

(statearr_880653_880724[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (29))){
var inst_880598 = (state_880614[(2)]);
var state_880614__$1 = state_880614;
var statearr_880654_880725 = state_880614__$1;
(statearr_880654_880725[(2)] = inst_880598);

(statearr_880654_880725[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (44))){
var inst_880607 = (state_880614[(2)]);
var state_880614__$1 = (function (){var statearr_880655 = state_880614;
(statearr_880655[(28)] = inst_880607);

return statearr_880655;
})();
var statearr_880656_880726 = state_880614__$1;
(statearr_880656_880726[(2)] = null);

(statearr_880656_880726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (6))){
var inst_880546 = (state_880614[(29)]);
var inst_880545 = cljs.core.deref.call(null,cs);
var inst_880546__$1 = cljs.core.keys.call(null,inst_880545);
var inst_880547 = cljs.core.count.call(null,inst_880546__$1);
var inst_880548 = cljs.core.reset_BANG_.call(null,dctr,inst_880547);
var inst_880553 = cljs.core.seq.call(null,inst_880546__$1);
var inst_880554 = inst_880553;
var inst_880555 = null;
var inst_880556 = (0);
var inst_880557 = (0);
var state_880614__$1 = (function (){var statearr_880657 = state_880614;
(statearr_880657[(20)] = inst_880554);

(statearr_880657[(29)] = inst_880546__$1);

(statearr_880657[(9)] = inst_880557);

(statearr_880657[(10)] = inst_880555);

(statearr_880657[(30)] = inst_880548);

(statearr_880657[(21)] = inst_880556);

return statearr_880657;
})();
var statearr_880658_880727 = state_880614__$1;
(statearr_880658_880727[(2)] = null);

(statearr_880658_880727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (28))){
var inst_880554 = (state_880614[(20)]);
var inst_880573 = (state_880614[(25)]);
var inst_880573__$1 = cljs.core.seq.call(null,inst_880554);
var state_880614__$1 = (function (){var statearr_880659 = state_880614;
(statearr_880659[(25)] = inst_880573__$1);

return statearr_880659;
})();
if(inst_880573__$1){
var statearr_880660_880728 = state_880614__$1;
(statearr_880660_880728[(1)] = (33));

} else {
var statearr_880661_880729 = state_880614__$1;
(statearr_880661_880729[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (25))){
var inst_880557 = (state_880614[(9)]);
var inst_880556 = (state_880614[(21)]);
var inst_880559 = (inst_880557 < inst_880556);
var inst_880560 = inst_880559;
var state_880614__$1 = state_880614;
if(cljs.core.truth_(inst_880560)){
var statearr_880662_880730 = state_880614__$1;
(statearr_880662_880730[(1)] = (27));

} else {
var statearr_880663_880731 = state_880614__$1;
(statearr_880663_880731[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (34))){
var state_880614__$1 = state_880614;
var statearr_880664_880732 = state_880614__$1;
(statearr_880664_880732[(2)] = null);

(statearr_880664_880732[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (17))){
var state_880614__$1 = state_880614;
var statearr_880665_880733 = state_880614__$1;
(statearr_880665_880733[(2)] = null);

(statearr_880665_880733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (3))){
var inst_880612 = (state_880614[(2)]);
var state_880614__$1 = state_880614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_880614__$1,inst_880612);
} else {
if((state_val_880615 === (12))){
var inst_880541 = (state_880614[(2)]);
var state_880614__$1 = state_880614;
var statearr_880666_880734 = state_880614__$1;
(statearr_880666_880734[(2)] = inst_880541);

(statearr_880666_880734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (2))){
var state_880614__$1 = state_880614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_880614__$1,(4),ch);
} else {
if((state_val_880615 === (23))){
var state_880614__$1 = state_880614;
var statearr_880667_880735 = state_880614__$1;
(statearr_880667_880735[(2)] = null);

(statearr_880667_880735[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (35))){
var inst_880596 = (state_880614[(2)]);
var state_880614__$1 = state_880614;
var statearr_880668_880736 = state_880614__$1;
(statearr_880668_880736[(2)] = inst_880596);

(statearr_880668_880736[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (19))){
var inst_880515 = (state_880614[(7)]);
var inst_880519 = cljs.core.chunk_first.call(null,inst_880515);
var inst_880520 = cljs.core.chunk_rest.call(null,inst_880515);
var inst_880521 = cljs.core.count.call(null,inst_880519);
var inst_880495 = inst_880520;
var inst_880496 = inst_880519;
var inst_880497 = inst_880521;
var inst_880498 = (0);
var state_880614__$1 = (function (){var statearr_880669 = state_880614;
(statearr_880669[(13)] = inst_880496);

(statearr_880669[(14)] = inst_880497);

(statearr_880669[(15)] = inst_880495);

(statearr_880669[(16)] = inst_880498);

return statearr_880669;
})();
var statearr_880670_880737 = state_880614__$1;
(statearr_880670_880737[(2)] = null);

(statearr_880670_880737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (11))){
var inst_880515 = (state_880614[(7)]);
var inst_880495 = (state_880614[(15)]);
var inst_880515__$1 = cljs.core.seq.call(null,inst_880495);
var state_880614__$1 = (function (){var statearr_880671 = state_880614;
(statearr_880671[(7)] = inst_880515__$1);

return statearr_880671;
})();
if(inst_880515__$1){
var statearr_880672_880738 = state_880614__$1;
(statearr_880672_880738[(1)] = (16));

} else {
var statearr_880673_880739 = state_880614__$1;
(statearr_880673_880739[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (9))){
var inst_880543 = (state_880614[(2)]);
var state_880614__$1 = state_880614;
var statearr_880674_880740 = state_880614__$1;
(statearr_880674_880740[(2)] = inst_880543);

(statearr_880674_880740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (5))){
var inst_880493 = cljs.core.deref.call(null,cs);
var inst_880494 = cljs.core.seq.call(null,inst_880493);
var inst_880495 = inst_880494;
var inst_880496 = null;
var inst_880497 = (0);
var inst_880498 = (0);
var state_880614__$1 = (function (){var statearr_880675 = state_880614;
(statearr_880675[(13)] = inst_880496);

(statearr_880675[(14)] = inst_880497);

(statearr_880675[(15)] = inst_880495);

(statearr_880675[(16)] = inst_880498);

return statearr_880675;
})();
var statearr_880676_880741 = state_880614__$1;
(statearr_880676_880741[(2)] = null);

(statearr_880676_880741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (14))){
var state_880614__$1 = state_880614;
var statearr_880677_880742 = state_880614__$1;
(statearr_880677_880742[(2)] = null);

(statearr_880677_880742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (45))){
var inst_880604 = (state_880614[(2)]);
var state_880614__$1 = state_880614;
var statearr_880678_880743 = state_880614__$1;
(statearr_880678_880743[(2)] = inst_880604);

(statearr_880678_880743[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (26))){
var inst_880546 = (state_880614[(29)]);
var inst_880600 = (state_880614[(2)]);
var inst_880601 = cljs.core.seq.call(null,inst_880546);
var state_880614__$1 = (function (){var statearr_880679 = state_880614;
(statearr_880679[(31)] = inst_880600);

return statearr_880679;
})();
if(inst_880601){
var statearr_880680_880744 = state_880614__$1;
(statearr_880680_880744[(1)] = (42));

} else {
var statearr_880681_880745 = state_880614__$1;
(statearr_880681_880745[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (16))){
var inst_880515 = (state_880614[(7)]);
var inst_880517 = cljs.core.chunked_seq_QMARK_.call(null,inst_880515);
var state_880614__$1 = state_880614;
if(inst_880517){
var statearr_880682_880746 = state_880614__$1;
(statearr_880682_880746[(1)] = (19));

} else {
var statearr_880683_880747 = state_880614__$1;
(statearr_880683_880747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (38))){
var inst_880593 = (state_880614[(2)]);
var state_880614__$1 = state_880614;
var statearr_880684_880748 = state_880614__$1;
(statearr_880684_880748[(2)] = inst_880593);

(statearr_880684_880748[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (30))){
var state_880614__$1 = state_880614;
var statearr_880685_880749 = state_880614__$1;
(statearr_880685_880749[(2)] = null);

(statearr_880685_880749[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (10))){
var inst_880496 = (state_880614[(13)]);
var inst_880498 = (state_880614[(16)]);
var inst_880504 = cljs.core._nth.call(null,inst_880496,inst_880498);
var inst_880505 = cljs.core.nth.call(null,inst_880504,(0),null);
var inst_880506 = cljs.core.nth.call(null,inst_880504,(1),null);
var state_880614__$1 = (function (){var statearr_880686 = state_880614;
(statearr_880686[(26)] = inst_880505);

return statearr_880686;
})();
if(cljs.core.truth_(inst_880506)){
var statearr_880687_880750 = state_880614__$1;
(statearr_880687_880750[(1)] = (13));

} else {
var statearr_880688_880751 = state_880614__$1;
(statearr_880688_880751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (18))){
var inst_880539 = (state_880614[(2)]);
var state_880614__$1 = state_880614;
var statearr_880689_880752 = state_880614__$1;
(statearr_880689_880752[(2)] = inst_880539);

(statearr_880689_880752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (42))){
var state_880614__$1 = state_880614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_880614__$1,(45),dchan);
} else {
if((state_val_880615 === (37))){
var inst_880582 = (state_880614[(23)]);
var inst_880573 = (state_880614[(25)]);
var inst_880486 = (state_880614[(11)]);
var inst_880582__$1 = cljs.core.first.call(null,inst_880573);
var inst_880583 = cljs.core.async.put_BANG_.call(null,inst_880582__$1,inst_880486,done);
var state_880614__$1 = (function (){var statearr_880690 = state_880614;
(statearr_880690[(23)] = inst_880582__$1);

return statearr_880690;
})();
if(cljs.core.truth_(inst_880583)){
var statearr_880691_880753 = state_880614__$1;
(statearr_880691_880753[(1)] = (39));

} else {
var statearr_880692_880754 = state_880614__$1;
(statearr_880692_880754[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_880615 === (8))){
var inst_880497 = (state_880614[(14)]);
var inst_880498 = (state_880614[(16)]);
var inst_880500 = (inst_880498 < inst_880497);
var inst_880501 = inst_880500;
var state_880614__$1 = state_880614;
if(cljs.core.truth_(inst_880501)){
var statearr_880693_880755 = state_880614__$1;
(statearr_880693_880755[(1)] = (10));

} else {
var statearr_880694_880756 = state_880614__$1;
(statearr_880694_880756[(1)] = (11));

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
});})(c__29846__auto___880702,cs,m,dchan,dctr,done))
;
return ((function (switch__29734__auto__,c__29846__auto___880702,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29735__auto__ = null;
var cljs$core$async$mult_$_state_machine__29735__auto____0 = (function (){
var statearr_880698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_880698[(0)] = cljs$core$async$mult_$_state_machine__29735__auto__);

(statearr_880698[(1)] = (1));

return statearr_880698;
});
var cljs$core$async$mult_$_state_machine__29735__auto____1 = (function (state_880614){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_880614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e880699){if((e880699 instanceof Object)){
var ex__29738__auto__ = e880699;
var statearr_880700_880757 = state_880614;
(statearr_880700_880757[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_880614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e880699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__880758 = state_880614;
state_880614 = G__880758;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29735__auto__ = function(state_880614){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29735__auto____1.call(this,state_880614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29735__auto____0;
cljs$core$async$mult_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29735__auto____1;
return cljs$core$async$mult_$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___880702,cs,m,dchan,dctr,done))
})();
var state__29848__auto__ = (function (){var statearr_880701 = f__29847__auto__.call(null);
(statearr_880701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___880702);

return statearr_880701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___880702,cs,m,dchan,dctr,done))
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
var args880759 = [];
var len__25269__auto___880762 = arguments.length;
var i__25270__auto___880763 = (0);
while(true){
if((i__25270__auto___880763 < len__25269__auto___880762)){
args880759.push((arguments[i__25270__auto___880763]));

var G__880764 = (i__25270__auto___880763 + (1));
i__25270__auto___880763 = G__880764;
continue;
} else {
}
break;
}

var G__880761 = args880759.length;
switch (G__880761) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args880759.length)].join('')));

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
var x__24866__auto__ = (((m == null))?null:m);
var m__24867__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,m,ch);
} else {
var m__24867__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,m,ch);
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
var x__24866__auto__ = (((m == null))?null:m);
var m__24867__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,m,ch);
} else {
var m__24867__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,m,ch);
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
var x__24866__auto__ = (((m == null))?null:m);
var m__24867__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,m);
} else {
var m__24867__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,m);
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
var x__24866__auto__ = (((m == null))?null:m);
var m__24867__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,m,state_map);
} else {
var m__24867__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,m,state_map);
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
var x__24866__auto__ = (((m == null))?null:m);
var m__24867__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,m,mode);
} else {
var m__24867__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25276__auto__ = [];
var len__25269__auto___880776 = arguments.length;
var i__25270__auto___880777 = (0);
while(true){
if((i__25270__auto___880777 < len__25269__auto___880776)){
args__25276__auto__.push((arguments[i__25270__auto___880777]));

var G__880778 = (i__25270__auto___880777 + (1));
i__25270__auto___880777 = G__880778;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((3) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25277__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__880770){
var map__880771 = p__880770;
var map__880771__$1 = ((((!((map__880771 == null)))?((((map__880771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__880771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__880771):map__880771);
var opts = map__880771__$1;
var statearr_880773_880779 = state;
(statearr_880773_880779[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__880771,map__880771__$1,opts){
return (function (val){
var statearr_880774_880780 = state;
(statearr_880774_880780[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__880771,map__880771__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_880775_880781 = state;
(statearr_880775_880781[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq880766){
var G__880767 = cljs.core.first.call(null,seq880766);
var seq880766__$1 = cljs.core.next.call(null,seq880766);
var G__880768 = cljs.core.first.call(null,seq880766__$1);
var seq880766__$2 = cljs.core.next.call(null,seq880766__$1);
var G__880769 = cljs.core.first.call(null,seq880766__$2);
var seq880766__$3 = cljs.core.next.call(null,seq880766__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__880767,G__880768,G__880769,seq880766__$3);
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
if(typeof cljs.core.async.t_cljs$core$async880945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async880945 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta880946){
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
this.meta880946 = meta880946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async880945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_880947,meta880946__$1){
var self__ = this;
var _880947__$1 = this;
return (new cljs.core.async.t_cljs$core$async880945(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta880946__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async880945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_880947){
var self__ = this;
var _880947__$1 = this;
return self__.meta880946;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async880945.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async880945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async880945.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async880945.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async880945.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async880945.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async880945.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async880945.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async880945.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta880946","meta880946",-632799985,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async880945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async880945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async880945";

cljs.core.async.t_cljs$core$async880945.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async880945");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async880945 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async880945(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta880946){
return (new cljs.core.async.t_cljs$core$async880945(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta880946));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async880945(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29846__auto___881108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___881108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___881108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_881045){
var state_val_881046 = (state_881045[(1)]);
if((state_val_881046 === (7))){
var inst_880963 = (state_881045[(2)]);
var state_881045__$1 = state_881045;
var statearr_881047_881109 = state_881045__$1;
(statearr_881047_881109[(2)] = inst_880963);

(statearr_881047_881109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (20))){
var inst_880975 = (state_881045[(7)]);
var state_881045__$1 = state_881045;
var statearr_881048_881110 = state_881045__$1;
(statearr_881048_881110[(2)] = inst_880975);

(statearr_881048_881110[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (27))){
var state_881045__$1 = state_881045;
var statearr_881049_881111 = state_881045__$1;
(statearr_881049_881111[(2)] = null);

(statearr_881049_881111[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (1))){
var inst_880951 = (state_881045[(8)]);
var inst_880951__$1 = calc_state.call(null);
var inst_880953 = (inst_880951__$1 == null);
var inst_880954 = cljs.core.not.call(null,inst_880953);
var state_881045__$1 = (function (){var statearr_881050 = state_881045;
(statearr_881050[(8)] = inst_880951__$1);

return statearr_881050;
})();
if(inst_880954){
var statearr_881051_881112 = state_881045__$1;
(statearr_881051_881112[(1)] = (2));

} else {
var statearr_881052_881113 = state_881045__$1;
(statearr_881052_881113[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (24))){
var inst_881019 = (state_881045[(9)]);
var inst_881005 = (state_881045[(10)]);
var inst_880998 = (state_881045[(11)]);
var inst_881019__$1 = inst_880998.call(null,inst_881005);
var state_881045__$1 = (function (){var statearr_881053 = state_881045;
(statearr_881053[(9)] = inst_881019__$1);

return statearr_881053;
})();
if(cljs.core.truth_(inst_881019__$1)){
var statearr_881054_881114 = state_881045__$1;
(statearr_881054_881114[(1)] = (29));

} else {
var statearr_881055_881115 = state_881045__$1;
(statearr_881055_881115[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (4))){
var inst_880966 = (state_881045[(2)]);
var state_881045__$1 = state_881045;
if(cljs.core.truth_(inst_880966)){
var statearr_881056_881116 = state_881045__$1;
(statearr_881056_881116[(1)] = (8));

} else {
var statearr_881057_881117 = state_881045__$1;
(statearr_881057_881117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (15))){
var inst_880992 = (state_881045[(2)]);
var state_881045__$1 = state_881045;
if(cljs.core.truth_(inst_880992)){
var statearr_881058_881118 = state_881045__$1;
(statearr_881058_881118[(1)] = (19));

} else {
var statearr_881059_881119 = state_881045__$1;
(statearr_881059_881119[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (21))){
var inst_880997 = (state_881045[(12)]);
var inst_880997__$1 = (state_881045[(2)]);
var inst_880998 = cljs.core.get.call(null,inst_880997__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_880999 = cljs.core.get.call(null,inst_880997__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_881000 = cljs.core.get.call(null,inst_880997__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_881045__$1 = (function (){var statearr_881060 = state_881045;
(statearr_881060[(12)] = inst_880997__$1);

(statearr_881060[(13)] = inst_880999);

(statearr_881060[(11)] = inst_880998);

return statearr_881060;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_881045__$1,(22),inst_881000);
} else {
if((state_val_881046 === (31))){
var inst_881027 = (state_881045[(2)]);
var state_881045__$1 = state_881045;
if(cljs.core.truth_(inst_881027)){
var statearr_881061_881120 = state_881045__$1;
(statearr_881061_881120[(1)] = (32));

} else {
var statearr_881062_881121 = state_881045__$1;
(statearr_881062_881121[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (32))){
var inst_881004 = (state_881045[(14)]);
var state_881045__$1 = state_881045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_881045__$1,(35),out,inst_881004);
} else {
if((state_val_881046 === (33))){
var inst_880997 = (state_881045[(12)]);
var inst_880975 = inst_880997;
var state_881045__$1 = (function (){var statearr_881063 = state_881045;
(statearr_881063[(7)] = inst_880975);

return statearr_881063;
})();
var statearr_881064_881122 = state_881045__$1;
(statearr_881064_881122[(2)] = null);

(statearr_881064_881122[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (13))){
var inst_880975 = (state_881045[(7)]);
var inst_880982 = inst_880975.cljs$lang$protocol_mask$partition0$;
var inst_880983 = (inst_880982 & (64));
var inst_880984 = inst_880975.cljs$core$ISeq$;
var inst_880985 = (inst_880983) || (inst_880984);
var state_881045__$1 = state_881045;
if(cljs.core.truth_(inst_880985)){
var statearr_881065_881123 = state_881045__$1;
(statearr_881065_881123[(1)] = (16));

} else {
var statearr_881066_881124 = state_881045__$1;
(statearr_881066_881124[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (22))){
var inst_881005 = (state_881045[(10)]);
var inst_881004 = (state_881045[(14)]);
var inst_881003 = (state_881045[(2)]);
var inst_881004__$1 = cljs.core.nth.call(null,inst_881003,(0),null);
var inst_881005__$1 = cljs.core.nth.call(null,inst_881003,(1),null);
var inst_881006 = (inst_881004__$1 == null);
var inst_881007 = cljs.core._EQ_.call(null,inst_881005__$1,change);
var inst_881008 = (inst_881006) || (inst_881007);
var state_881045__$1 = (function (){var statearr_881067 = state_881045;
(statearr_881067[(10)] = inst_881005__$1);

(statearr_881067[(14)] = inst_881004__$1);

return statearr_881067;
})();
if(cljs.core.truth_(inst_881008)){
var statearr_881068_881125 = state_881045__$1;
(statearr_881068_881125[(1)] = (23));

} else {
var statearr_881069_881126 = state_881045__$1;
(statearr_881069_881126[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (36))){
var inst_880997 = (state_881045[(12)]);
var inst_880975 = inst_880997;
var state_881045__$1 = (function (){var statearr_881070 = state_881045;
(statearr_881070[(7)] = inst_880975);

return statearr_881070;
})();
var statearr_881071_881127 = state_881045__$1;
(statearr_881071_881127[(2)] = null);

(statearr_881071_881127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (29))){
var inst_881019 = (state_881045[(9)]);
var state_881045__$1 = state_881045;
var statearr_881072_881128 = state_881045__$1;
(statearr_881072_881128[(2)] = inst_881019);

(statearr_881072_881128[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (6))){
var state_881045__$1 = state_881045;
var statearr_881073_881129 = state_881045__$1;
(statearr_881073_881129[(2)] = false);

(statearr_881073_881129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (28))){
var inst_881015 = (state_881045[(2)]);
var inst_881016 = calc_state.call(null);
var inst_880975 = inst_881016;
var state_881045__$1 = (function (){var statearr_881074 = state_881045;
(statearr_881074[(7)] = inst_880975);

(statearr_881074[(15)] = inst_881015);

return statearr_881074;
})();
var statearr_881075_881130 = state_881045__$1;
(statearr_881075_881130[(2)] = null);

(statearr_881075_881130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (25))){
var inst_881041 = (state_881045[(2)]);
var state_881045__$1 = state_881045;
var statearr_881076_881131 = state_881045__$1;
(statearr_881076_881131[(2)] = inst_881041);

(statearr_881076_881131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (34))){
var inst_881039 = (state_881045[(2)]);
var state_881045__$1 = state_881045;
var statearr_881077_881132 = state_881045__$1;
(statearr_881077_881132[(2)] = inst_881039);

(statearr_881077_881132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (17))){
var state_881045__$1 = state_881045;
var statearr_881078_881133 = state_881045__$1;
(statearr_881078_881133[(2)] = false);

(statearr_881078_881133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (3))){
var state_881045__$1 = state_881045;
var statearr_881079_881134 = state_881045__$1;
(statearr_881079_881134[(2)] = false);

(statearr_881079_881134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (12))){
var inst_881043 = (state_881045[(2)]);
var state_881045__$1 = state_881045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_881045__$1,inst_881043);
} else {
if((state_val_881046 === (2))){
var inst_880951 = (state_881045[(8)]);
var inst_880956 = inst_880951.cljs$lang$protocol_mask$partition0$;
var inst_880957 = (inst_880956 & (64));
var inst_880958 = inst_880951.cljs$core$ISeq$;
var inst_880959 = (inst_880957) || (inst_880958);
var state_881045__$1 = state_881045;
if(cljs.core.truth_(inst_880959)){
var statearr_881080_881135 = state_881045__$1;
(statearr_881080_881135[(1)] = (5));

} else {
var statearr_881081_881136 = state_881045__$1;
(statearr_881081_881136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (23))){
var inst_881004 = (state_881045[(14)]);
var inst_881010 = (inst_881004 == null);
var state_881045__$1 = state_881045;
if(cljs.core.truth_(inst_881010)){
var statearr_881082_881137 = state_881045__$1;
(statearr_881082_881137[(1)] = (26));

} else {
var statearr_881083_881138 = state_881045__$1;
(statearr_881083_881138[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (35))){
var inst_881030 = (state_881045[(2)]);
var state_881045__$1 = state_881045;
if(cljs.core.truth_(inst_881030)){
var statearr_881084_881139 = state_881045__$1;
(statearr_881084_881139[(1)] = (36));

} else {
var statearr_881085_881140 = state_881045__$1;
(statearr_881085_881140[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (19))){
var inst_880975 = (state_881045[(7)]);
var inst_880994 = cljs.core.apply.call(null,cljs.core.hash_map,inst_880975);
var state_881045__$1 = state_881045;
var statearr_881086_881141 = state_881045__$1;
(statearr_881086_881141[(2)] = inst_880994);

(statearr_881086_881141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (11))){
var inst_880975 = (state_881045[(7)]);
var inst_880979 = (inst_880975 == null);
var inst_880980 = cljs.core.not.call(null,inst_880979);
var state_881045__$1 = state_881045;
if(inst_880980){
var statearr_881087_881142 = state_881045__$1;
(statearr_881087_881142[(1)] = (13));

} else {
var statearr_881088_881143 = state_881045__$1;
(statearr_881088_881143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (9))){
var inst_880951 = (state_881045[(8)]);
var state_881045__$1 = state_881045;
var statearr_881089_881144 = state_881045__$1;
(statearr_881089_881144[(2)] = inst_880951);

(statearr_881089_881144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (5))){
var state_881045__$1 = state_881045;
var statearr_881090_881145 = state_881045__$1;
(statearr_881090_881145[(2)] = true);

(statearr_881090_881145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (14))){
var state_881045__$1 = state_881045;
var statearr_881091_881146 = state_881045__$1;
(statearr_881091_881146[(2)] = false);

(statearr_881091_881146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (26))){
var inst_881005 = (state_881045[(10)]);
var inst_881012 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_881005);
var state_881045__$1 = state_881045;
var statearr_881092_881147 = state_881045__$1;
(statearr_881092_881147[(2)] = inst_881012);

(statearr_881092_881147[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (16))){
var state_881045__$1 = state_881045;
var statearr_881093_881148 = state_881045__$1;
(statearr_881093_881148[(2)] = true);

(statearr_881093_881148[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (38))){
var inst_881035 = (state_881045[(2)]);
var state_881045__$1 = state_881045;
var statearr_881094_881149 = state_881045__$1;
(statearr_881094_881149[(2)] = inst_881035);

(statearr_881094_881149[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (30))){
var inst_880999 = (state_881045[(13)]);
var inst_881005 = (state_881045[(10)]);
var inst_880998 = (state_881045[(11)]);
var inst_881022 = cljs.core.empty_QMARK_.call(null,inst_880998);
var inst_881023 = inst_880999.call(null,inst_881005);
var inst_881024 = cljs.core.not.call(null,inst_881023);
var inst_881025 = (inst_881022) && (inst_881024);
var state_881045__$1 = state_881045;
var statearr_881095_881150 = state_881045__$1;
(statearr_881095_881150[(2)] = inst_881025);

(statearr_881095_881150[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (10))){
var inst_880951 = (state_881045[(8)]);
var inst_880971 = (state_881045[(2)]);
var inst_880972 = cljs.core.get.call(null,inst_880971,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_880973 = cljs.core.get.call(null,inst_880971,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_880974 = cljs.core.get.call(null,inst_880971,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_880975 = inst_880951;
var state_881045__$1 = (function (){var statearr_881096 = state_881045;
(statearr_881096[(16)] = inst_880972);

(statearr_881096[(7)] = inst_880975);

(statearr_881096[(17)] = inst_880973);

(statearr_881096[(18)] = inst_880974);

return statearr_881096;
})();
var statearr_881097_881151 = state_881045__$1;
(statearr_881097_881151[(2)] = null);

(statearr_881097_881151[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (18))){
var inst_880989 = (state_881045[(2)]);
var state_881045__$1 = state_881045;
var statearr_881098_881152 = state_881045__$1;
(statearr_881098_881152[(2)] = inst_880989);

(statearr_881098_881152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (37))){
var state_881045__$1 = state_881045;
var statearr_881099_881153 = state_881045__$1;
(statearr_881099_881153[(2)] = null);

(statearr_881099_881153[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881046 === (8))){
var inst_880951 = (state_881045[(8)]);
var inst_880968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_880951);
var state_881045__$1 = state_881045;
var statearr_881100_881154 = state_881045__$1;
(statearr_881100_881154[(2)] = inst_880968);

(statearr_881100_881154[(1)] = (10));


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
});})(c__29846__auto___881108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29734__auto__,c__29846__auto___881108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29735__auto__ = null;
var cljs$core$async$mix_$_state_machine__29735__auto____0 = (function (){
var statearr_881104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_881104[(0)] = cljs$core$async$mix_$_state_machine__29735__auto__);

(statearr_881104[(1)] = (1));

return statearr_881104;
});
var cljs$core$async$mix_$_state_machine__29735__auto____1 = (function (state_881045){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_881045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e881105){if((e881105 instanceof Object)){
var ex__29738__auto__ = e881105;
var statearr_881106_881155 = state_881045;
(statearr_881106_881155[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_881045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e881105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__881156 = state_881045;
state_881045 = G__881156;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29735__auto__ = function(state_881045){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29735__auto____1.call(this,state_881045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29735__auto____0;
cljs$core$async$mix_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29735__auto____1;
return cljs$core$async$mix_$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___881108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29848__auto__ = (function (){var statearr_881107 = f__29847__auto__.call(null);
(statearr_881107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___881108);

return statearr_881107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___881108,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__24866__auto__ = (((p == null))?null:p);
var m__24867__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__24867__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__24866__auto__ = (((p == null))?null:p);
var m__24867__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,p,v,ch);
} else {
var m__24867__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args881157 = [];
var len__25269__auto___881160 = arguments.length;
var i__25270__auto___881161 = (0);
while(true){
if((i__25270__auto___881161 < len__25269__auto___881160)){
args881157.push((arguments[i__25270__auto___881161]));

var G__881162 = (i__25270__auto___881161 + (1));
i__25270__auto___881161 = G__881162;
continue;
} else {
}
break;
}

var G__881159 = args881157.length;
switch (G__881159) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881157.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24866__auto__ = (((p == null))?null:p);
var m__24867__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,p);
} else {
var m__24867__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,p);
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
var x__24866__auto__ = (((p == null))?null:p);
var m__24867__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24866__auto__)]);
if(!((m__24867__auto__ == null))){
return m__24867__auto__.call(null,p,v);
} else {
var m__24867__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__24867__auto____$1 == null))){
return m__24867__auto____$1.call(null,p,v);
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
var args881165 = [];
var len__25269__auto___881290 = arguments.length;
var i__25270__auto___881291 = (0);
while(true){
if((i__25270__auto___881291 < len__25269__auto___881290)){
args881165.push((arguments[i__25270__auto___881291]));

var G__881292 = (i__25270__auto___881291 + (1));
i__25270__auto___881291 = G__881292;
continue;
} else {
}
break;
}

var G__881167 = args881165.length;
switch (G__881167) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881165.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24211__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24211__auto__,mults){
return (function (p1__881164_SHARP_){
if(cljs.core.truth_(p1__881164_SHARP_.call(null,topic))){
return p1__881164_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__881164_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24211__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async881168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async881168 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta881169){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta881169 = meta881169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async881168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_881170,meta881169__$1){
var self__ = this;
var _881170__$1 = this;
return (new cljs.core.async.t_cljs$core$async881168(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta881169__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async881168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_881170){
var self__ = this;
var _881170__$1 = this;
return self__.meta881169;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async881168.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async881168.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async881168.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async881168.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async881168.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async881168.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async881168.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async881168.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta881169","meta881169",-538303440,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async881168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async881168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async881168";

cljs.core.async.t_cljs$core$async881168.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async881168");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async881168 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async881168(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta881169){
return (new cljs.core.async.t_cljs$core$async881168(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta881169));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async881168(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29846__auto___881294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___881294,mults,ensure_mult,p){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___881294,mults,ensure_mult,p){
return (function (state_881242){
var state_val_881243 = (state_881242[(1)]);
if((state_val_881243 === (7))){
var inst_881238 = (state_881242[(2)]);
var state_881242__$1 = state_881242;
var statearr_881244_881295 = state_881242__$1;
(statearr_881244_881295[(2)] = inst_881238);

(statearr_881244_881295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (20))){
var state_881242__$1 = state_881242;
var statearr_881245_881296 = state_881242__$1;
(statearr_881245_881296[(2)] = null);

(statearr_881245_881296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (1))){
var state_881242__$1 = state_881242;
var statearr_881246_881297 = state_881242__$1;
(statearr_881246_881297[(2)] = null);

(statearr_881246_881297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (24))){
var inst_881221 = (state_881242[(7)]);
var inst_881230 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_881221);
var state_881242__$1 = state_881242;
var statearr_881247_881298 = state_881242__$1;
(statearr_881247_881298[(2)] = inst_881230);

(statearr_881247_881298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (4))){
var inst_881173 = (state_881242[(8)]);
var inst_881173__$1 = (state_881242[(2)]);
var inst_881174 = (inst_881173__$1 == null);
var state_881242__$1 = (function (){var statearr_881248 = state_881242;
(statearr_881248[(8)] = inst_881173__$1);

return statearr_881248;
})();
if(cljs.core.truth_(inst_881174)){
var statearr_881249_881299 = state_881242__$1;
(statearr_881249_881299[(1)] = (5));

} else {
var statearr_881250_881300 = state_881242__$1;
(statearr_881250_881300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (15))){
var inst_881215 = (state_881242[(2)]);
var state_881242__$1 = state_881242;
var statearr_881251_881301 = state_881242__$1;
(statearr_881251_881301[(2)] = inst_881215);

(statearr_881251_881301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (21))){
var inst_881235 = (state_881242[(2)]);
var state_881242__$1 = (function (){var statearr_881252 = state_881242;
(statearr_881252[(9)] = inst_881235);

return statearr_881252;
})();
var statearr_881253_881302 = state_881242__$1;
(statearr_881253_881302[(2)] = null);

(statearr_881253_881302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (13))){
var inst_881197 = (state_881242[(10)]);
var inst_881199 = cljs.core.chunked_seq_QMARK_.call(null,inst_881197);
var state_881242__$1 = state_881242;
if(inst_881199){
var statearr_881254_881303 = state_881242__$1;
(statearr_881254_881303[(1)] = (16));

} else {
var statearr_881255_881304 = state_881242__$1;
(statearr_881255_881304[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (22))){
var inst_881227 = (state_881242[(2)]);
var state_881242__$1 = state_881242;
if(cljs.core.truth_(inst_881227)){
var statearr_881256_881305 = state_881242__$1;
(statearr_881256_881305[(1)] = (23));

} else {
var statearr_881257_881306 = state_881242__$1;
(statearr_881257_881306[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (6))){
var inst_881223 = (state_881242[(11)]);
var inst_881221 = (state_881242[(7)]);
var inst_881173 = (state_881242[(8)]);
var inst_881221__$1 = topic_fn.call(null,inst_881173);
var inst_881222 = cljs.core.deref.call(null,mults);
var inst_881223__$1 = cljs.core.get.call(null,inst_881222,inst_881221__$1);
var state_881242__$1 = (function (){var statearr_881258 = state_881242;
(statearr_881258[(11)] = inst_881223__$1);

(statearr_881258[(7)] = inst_881221__$1);

return statearr_881258;
})();
if(cljs.core.truth_(inst_881223__$1)){
var statearr_881259_881307 = state_881242__$1;
(statearr_881259_881307[(1)] = (19));

} else {
var statearr_881260_881308 = state_881242__$1;
(statearr_881260_881308[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (25))){
var inst_881232 = (state_881242[(2)]);
var state_881242__$1 = state_881242;
var statearr_881261_881309 = state_881242__$1;
(statearr_881261_881309[(2)] = inst_881232);

(statearr_881261_881309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (17))){
var inst_881197 = (state_881242[(10)]);
var inst_881206 = cljs.core.first.call(null,inst_881197);
var inst_881207 = cljs.core.async.muxch_STAR_.call(null,inst_881206);
var inst_881208 = cljs.core.async.close_BANG_.call(null,inst_881207);
var inst_881209 = cljs.core.next.call(null,inst_881197);
var inst_881183 = inst_881209;
var inst_881184 = null;
var inst_881185 = (0);
var inst_881186 = (0);
var state_881242__$1 = (function (){var statearr_881262 = state_881242;
(statearr_881262[(12)] = inst_881186);

(statearr_881262[(13)] = inst_881183);

(statearr_881262[(14)] = inst_881208);

(statearr_881262[(15)] = inst_881184);

(statearr_881262[(16)] = inst_881185);

return statearr_881262;
})();
var statearr_881263_881310 = state_881242__$1;
(statearr_881263_881310[(2)] = null);

(statearr_881263_881310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (3))){
var inst_881240 = (state_881242[(2)]);
var state_881242__$1 = state_881242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_881242__$1,inst_881240);
} else {
if((state_val_881243 === (12))){
var inst_881217 = (state_881242[(2)]);
var state_881242__$1 = state_881242;
var statearr_881264_881311 = state_881242__$1;
(statearr_881264_881311[(2)] = inst_881217);

(statearr_881264_881311[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (2))){
var state_881242__$1 = state_881242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_881242__$1,(4),ch);
} else {
if((state_val_881243 === (23))){
var state_881242__$1 = state_881242;
var statearr_881265_881312 = state_881242__$1;
(statearr_881265_881312[(2)] = null);

(statearr_881265_881312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (19))){
var inst_881223 = (state_881242[(11)]);
var inst_881173 = (state_881242[(8)]);
var inst_881225 = cljs.core.async.muxch_STAR_.call(null,inst_881223);
var state_881242__$1 = state_881242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_881242__$1,(22),inst_881225,inst_881173);
} else {
if((state_val_881243 === (11))){
var inst_881197 = (state_881242[(10)]);
var inst_881183 = (state_881242[(13)]);
var inst_881197__$1 = cljs.core.seq.call(null,inst_881183);
var state_881242__$1 = (function (){var statearr_881266 = state_881242;
(statearr_881266[(10)] = inst_881197__$1);

return statearr_881266;
})();
if(inst_881197__$1){
var statearr_881267_881313 = state_881242__$1;
(statearr_881267_881313[(1)] = (13));

} else {
var statearr_881268_881314 = state_881242__$1;
(statearr_881268_881314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (9))){
var inst_881219 = (state_881242[(2)]);
var state_881242__$1 = state_881242;
var statearr_881269_881315 = state_881242__$1;
(statearr_881269_881315[(2)] = inst_881219);

(statearr_881269_881315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (5))){
var inst_881180 = cljs.core.deref.call(null,mults);
var inst_881181 = cljs.core.vals.call(null,inst_881180);
var inst_881182 = cljs.core.seq.call(null,inst_881181);
var inst_881183 = inst_881182;
var inst_881184 = null;
var inst_881185 = (0);
var inst_881186 = (0);
var state_881242__$1 = (function (){var statearr_881270 = state_881242;
(statearr_881270[(12)] = inst_881186);

(statearr_881270[(13)] = inst_881183);

(statearr_881270[(15)] = inst_881184);

(statearr_881270[(16)] = inst_881185);

return statearr_881270;
})();
var statearr_881271_881316 = state_881242__$1;
(statearr_881271_881316[(2)] = null);

(statearr_881271_881316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (14))){
var state_881242__$1 = state_881242;
var statearr_881275_881317 = state_881242__$1;
(statearr_881275_881317[(2)] = null);

(statearr_881275_881317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (16))){
var inst_881197 = (state_881242[(10)]);
var inst_881201 = cljs.core.chunk_first.call(null,inst_881197);
var inst_881202 = cljs.core.chunk_rest.call(null,inst_881197);
var inst_881203 = cljs.core.count.call(null,inst_881201);
var inst_881183 = inst_881202;
var inst_881184 = inst_881201;
var inst_881185 = inst_881203;
var inst_881186 = (0);
var state_881242__$1 = (function (){var statearr_881276 = state_881242;
(statearr_881276[(12)] = inst_881186);

(statearr_881276[(13)] = inst_881183);

(statearr_881276[(15)] = inst_881184);

(statearr_881276[(16)] = inst_881185);

return statearr_881276;
})();
var statearr_881277_881318 = state_881242__$1;
(statearr_881277_881318[(2)] = null);

(statearr_881277_881318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (10))){
var inst_881186 = (state_881242[(12)]);
var inst_881183 = (state_881242[(13)]);
var inst_881184 = (state_881242[(15)]);
var inst_881185 = (state_881242[(16)]);
var inst_881191 = cljs.core._nth.call(null,inst_881184,inst_881186);
var inst_881192 = cljs.core.async.muxch_STAR_.call(null,inst_881191);
var inst_881193 = cljs.core.async.close_BANG_.call(null,inst_881192);
var inst_881194 = (inst_881186 + (1));
var tmp881272 = inst_881183;
var tmp881273 = inst_881184;
var tmp881274 = inst_881185;
var inst_881183__$1 = tmp881272;
var inst_881184__$1 = tmp881273;
var inst_881185__$1 = tmp881274;
var inst_881186__$1 = inst_881194;
var state_881242__$1 = (function (){var statearr_881278 = state_881242;
(statearr_881278[(17)] = inst_881193);

(statearr_881278[(12)] = inst_881186__$1);

(statearr_881278[(13)] = inst_881183__$1);

(statearr_881278[(15)] = inst_881184__$1);

(statearr_881278[(16)] = inst_881185__$1);

return statearr_881278;
})();
var statearr_881279_881319 = state_881242__$1;
(statearr_881279_881319[(2)] = null);

(statearr_881279_881319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (18))){
var inst_881212 = (state_881242[(2)]);
var state_881242__$1 = state_881242;
var statearr_881280_881320 = state_881242__$1;
(statearr_881280_881320[(2)] = inst_881212);

(statearr_881280_881320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881243 === (8))){
var inst_881186 = (state_881242[(12)]);
var inst_881185 = (state_881242[(16)]);
var inst_881188 = (inst_881186 < inst_881185);
var inst_881189 = inst_881188;
var state_881242__$1 = state_881242;
if(cljs.core.truth_(inst_881189)){
var statearr_881281_881321 = state_881242__$1;
(statearr_881281_881321[(1)] = (10));

} else {
var statearr_881282_881322 = state_881242__$1;
(statearr_881282_881322[(1)] = (11));

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
});})(c__29846__auto___881294,mults,ensure_mult,p))
;
return ((function (switch__29734__auto__,c__29846__auto___881294,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_881286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_881286[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_881286[(1)] = (1));

return statearr_881286;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_881242){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_881242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e881287){if((e881287 instanceof Object)){
var ex__29738__auto__ = e881287;
var statearr_881288_881323 = state_881242;
(statearr_881288_881323[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_881242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e881287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__881324 = state_881242;
state_881242 = G__881324;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_881242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_881242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___881294,mults,ensure_mult,p))
})();
var state__29848__auto__ = (function (){var statearr_881289 = f__29847__auto__.call(null);
(statearr_881289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___881294);

return statearr_881289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___881294,mults,ensure_mult,p))
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
var args881325 = [];
var len__25269__auto___881328 = arguments.length;
var i__25270__auto___881329 = (0);
while(true){
if((i__25270__auto___881329 < len__25269__auto___881328)){
args881325.push((arguments[i__25270__auto___881329]));

var G__881330 = (i__25270__auto___881329 + (1));
i__25270__auto___881329 = G__881330;
continue;
} else {
}
break;
}

var G__881327 = args881325.length;
switch (G__881327) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881325.length)].join('')));

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
var args881332 = [];
var len__25269__auto___881335 = arguments.length;
var i__25270__auto___881336 = (0);
while(true){
if((i__25270__auto___881336 < len__25269__auto___881335)){
args881332.push((arguments[i__25270__auto___881336]));

var G__881337 = (i__25270__auto___881336 + (1));
i__25270__auto___881336 = G__881337;
continue;
} else {
}
break;
}

var G__881334 = args881332.length;
switch (G__881334) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881332.length)].join('')));

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
var args881339 = [];
var len__25269__auto___881410 = arguments.length;
var i__25270__auto___881411 = (0);
while(true){
if((i__25270__auto___881411 < len__25269__auto___881410)){
args881339.push((arguments[i__25270__auto___881411]));

var G__881412 = (i__25270__auto___881411 + (1));
i__25270__auto___881411 = G__881412;
continue;
} else {
}
break;
}

var G__881341 = args881339.length;
switch (G__881341) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881339.length)].join('')));

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
var c__29846__auto___881414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___881414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___881414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_881380){
var state_val_881381 = (state_881380[(1)]);
if((state_val_881381 === (7))){
var state_881380__$1 = state_881380;
var statearr_881382_881415 = state_881380__$1;
(statearr_881382_881415[(2)] = null);

(statearr_881382_881415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881381 === (1))){
var state_881380__$1 = state_881380;
var statearr_881383_881416 = state_881380__$1;
(statearr_881383_881416[(2)] = null);

(statearr_881383_881416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881381 === (4))){
var inst_881344 = (state_881380[(7)]);
var inst_881346 = (inst_881344 < cnt);
var state_881380__$1 = state_881380;
if(cljs.core.truth_(inst_881346)){
var statearr_881384_881417 = state_881380__$1;
(statearr_881384_881417[(1)] = (6));

} else {
var statearr_881385_881418 = state_881380__$1;
(statearr_881385_881418[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881381 === (15))){
var inst_881376 = (state_881380[(2)]);
var state_881380__$1 = state_881380;
var statearr_881386_881419 = state_881380__$1;
(statearr_881386_881419[(2)] = inst_881376);

(statearr_881386_881419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881381 === (13))){
var inst_881369 = cljs.core.async.close_BANG_.call(null,out);
var state_881380__$1 = state_881380;
var statearr_881387_881420 = state_881380__$1;
(statearr_881387_881420[(2)] = inst_881369);

(statearr_881387_881420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881381 === (6))){
var state_881380__$1 = state_881380;
var statearr_881388_881421 = state_881380__$1;
(statearr_881388_881421[(2)] = null);

(statearr_881388_881421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881381 === (3))){
var inst_881378 = (state_881380[(2)]);
var state_881380__$1 = state_881380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_881380__$1,inst_881378);
} else {
if((state_val_881381 === (12))){
var inst_881366 = (state_881380[(8)]);
var inst_881366__$1 = (state_881380[(2)]);
var inst_881367 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_881366__$1);
var state_881380__$1 = (function (){var statearr_881389 = state_881380;
(statearr_881389[(8)] = inst_881366__$1);

return statearr_881389;
})();
if(cljs.core.truth_(inst_881367)){
var statearr_881390_881422 = state_881380__$1;
(statearr_881390_881422[(1)] = (13));

} else {
var statearr_881391_881423 = state_881380__$1;
(statearr_881391_881423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881381 === (2))){
var inst_881343 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_881344 = (0);
var state_881380__$1 = (function (){var statearr_881392 = state_881380;
(statearr_881392[(7)] = inst_881344);

(statearr_881392[(9)] = inst_881343);

return statearr_881392;
})();
var statearr_881393_881424 = state_881380__$1;
(statearr_881393_881424[(2)] = null);

(statearr_881393_881424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881381 === (11))){
var inst_881344 = (state_881380[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_881380,(10),Object,null,(9));
var inst_881353 = chs__$1.call(null,inst_881344);
var inst_881354 = done.call(null,inst_881344);
var inst_881355 = cljs.core.async.take_BANG_.call(null,inst_881353,inst_881354);
var state_881380__$1 = state_881380;
var statearr_881394_881425 = state_881380__$1;
(statearr_881394_881425[(2)] = inst_881355);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_881380__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881381 === (9))){
var inst_881344 = (state_881380[(7)]);
var inst_881357 = (state_881380[(2)]);
var inst_881358 = (inst_881344 + (1));
var inst_881344__$1 = inst_881358;
var state_881380__$1 = (function (){var statearr_881395 = state_881380;
(statearr_881395[(7)] = inst_881344__$1);

(statearr_881395[(10)] = inst_881357);

return statearr_881395;
})();
var statearr_881396_881426 = state_881380__$1;
(statearr_881396_881426[(2)] = null);

(statearr_881396_881426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881381 === (5))){
var inst_881364 = (state_881380[(2)]);
var state_881380__$1 = (function (){var statearr_881397 = state_881380;
(statearr_881397[(11)] = inst_881364);

return statearr_881397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_881380__$1,(12),dchan);
} else {
if((state_val_881381 === (14))){
var inst_881366 = (state_881380[(8)]);
var inst_881371 = cljs.core.apply.call(null,f,inst_881366);
var state_881380__$1 = state_881380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_881380__$1,(16),out,inst_881371);
} else {
if((state_val_881381 === (16))){
var inst_881373 = (state_881380[(2)]);
var state_881380__$1 = (function (){var statearr_881398 = state_881380;
(statearr_881398[(12)] = inst_881373);

return statearr_881398;
})();
var statearr_881399_881427 = state_881380__$1;
(statearr_881399_881427[(2)] = null);

(statearr_881399_881427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881381 === (10))){
var inst_881348 = (state_881380[(2)]);
var inst_881349 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_881380__$1 = (function (){var statearr_881400 = state_881380;
(statearr_881400[(13)] = inst_881348);

return statearr_881400;
})();
var statearr_881401_881428 = state_881380__$1;
(statearr_881401_881428[(2)] = inst_881349);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_881380__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881381 === (8))){
var inst_881362 = (state_881380[(2)]);
var state_881380__$1 = state_881380;
var statearr_881402_881429 = state_881380__$1;
(statearr_881402_881429[(2)] = inst_881362);

(statearr_881402_881429[(1)] = (5));


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
});})(c__29846__auto___881414,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29734__auto__,c__29846__auto___881414,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_881406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_881406[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_881406[(1)] = (1));

return statearr_881406;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_881380){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_881380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e881407){if((e881407 instanceof Object)){
var ex__29738__auto__ = e881407;
var statearr_881408_881430 = state_881380;
(statearr_881408_881430[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_881380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e881407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__881431 = state_881380;
state_881380 = G__881431;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_881380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_881380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___881414,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29848__auto__ = (function (){var statearr_881409 = f__29847__auto__.call(null);
(statearr_881409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___881414);

return statearr_881409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___881414,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args881433 = [];
var len__25269__auto___881489 = arguments.length;
var i__25270__auto___881490 = (0);
while(true){
if((i__25270__auto___881490 < len__25269__auto___881489)){
args881433.push((arguments[i__25270__auto___881490]));

var G__881491 = (i__25270__auto___881490 + (1));
i__25270__auto___881490 = G__881491;
continue;
} else {
}
break;
}

var G__881435 = args881433.length;
switch (G__881435) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881433.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29846__auto___881493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___881493,out){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___881493,out){
return (function (state_881465){
var state_val_881466 = (state_881465[(1)]);
if((state_val_881466 === (7))){
var inst_881445 = (state_881465[(7)]);
var inst_881444 = (state_881465[(8)]);
var inst_881444__$1 = (state_881465[(2)]);
var inst_881445__$1 = cljs.core.nth.call(null,inst_881444__$1,(0),null);
var inst_881446 = cljs.core.nth.call(null,inst_881444__$1,(1),null);
var inst_881447 = (inst_881445__$1 == null);
var state_881465__$1 = (function (){var statearr_881467 = state_881465;
(statearr_881467[(9)] = inst_881446);

(statearr_881467[(7)] = inst_881445__$1);

(statearr_881467[(8)] = inst_881444__$1);

return statearr_881467;
})();
if(cljs.core.truth_(inst_881447)){
var statearr_881468_881494 = state_881465__$1;
(statearr_881468_881494[(1)] = (8));

} else {
var statearr_881469_881495 = state_881465__$1;
(statearr_881469_881495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881466 === (1))){
var inst_881436 = cljs.core.vec.call(null,chs);
var inst_881437 = inst_881436;
var state_881465__$1 = (function (){var statearr_881470 = state_881465;
(statearr_881470[(10)] = inst_881437);

return statearr_881470;
})();
var statearr_881471_881496 = state_881465__$1;
(statearr_881471_881496[(2)] = null);

(statearr_881471_881496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881466 === (4))){
var inst_881437 = (state_881465[(10)]);
var state_881465__$1 = state_881465;
return cljs.core.async.ioc_alts_BANG_.call(null,state_881465__$1,(7),inst_881437);
} else {
if((state_val_881466 === (6))){
var inst_881461 = (state_881465[(2)]);
var state_881465__$1 = state_881465;
var statearr_881472_881497 = state_881465__$1;
(statearr_881472_881497[(2)] = inst_881461);

(statearr_881472_881497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881466 === (3))){
var inst_881463 = (state_881465[(2)]);
var state_881465__$1 = state_881465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_881465__$1,inst_881463);
} else {
if((state_val_881466 === (2))){
var inst_881437 = (state_881465[(10)]);
var inst_881439 = cljs.core.count.call(null,inst_881437);
var inst_881440 = (inst_881439 > (0));
var state_881465__$1 = state_881465;
if(cljs.core.truth_(inst_881440)){
var statearr_881474_881498 = state_881465__$1;
(statearr_881474_881498[(1)] = (4));

} else {
var statearr_881475_881499 = state_881465__$1;
(statearr_881475_881499[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881466 === (11))){
var inst_881437 = (state_881465[(10)]);
var inst_881454 = (state_881465[(2)]);
var tmp881473 = inst_881437;
var inst_881437__$1 = tmp881473;
var state_881465__$1 = (function (){var statearr_881476 = state_881465;
(statearr_881476[(11)] = inst_881454);

(statearr_881476[(10)] = inst_881437__$1);

return statearr_881476;
})();
var statearr_881477_881500 = state_881465__$1;
(statearr_881477_881500[(2)] = null);

(statearr_881477_881500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881466 === (9))){
var inst_881445 = (state_881465[(7)]);
var state_881465__$1 = state_881465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_881465__$1,(11),out,inst_881445);
} else {
if((state_val_881466 === (5))){
var inst_881459 = cljs.core.async.close_BANG_.call(null,out);
var state_881465__$1 = state_881465;
var statearr_881478_881501 = state_881465__$1;
(statearr_881478_881501[(2)] = inst_881459);

(statearr_881478_881501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881466 === (10))){
var inst_881457 = (state_881465[(2)]);
var state_881465__$1 = state_881465;
var statearr_881479_881502 = state_881465__$1;
(statearr_881479_881502[(2)] = inst_881457);

(statearr_881479_881502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881466 === (8))){
var inst_881446 = (state_881465[(9)]);
var inst_881437 = (state_881465[(10)]);
var inst_881445 = (state_881465[(7)]);
var inst_881444 = (state_881465[(8)]);
var inst_881449 = (function (){var cs = inst_881437;
var vec__881442 = inst_881444;
var v = inst_881445;
var c = inst_881446;
return ((function (cs,vec__881442,v,c,inst_881446,inst_881437,inst_881445,inst_881444,state_val_881466,c__29846__auto___881493,out){
return (function (p1__881432_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__881432_SHARP_);
});
;})(cs,vec__881442,v,c,inst_881446,inst_881437,inst_881445,inst_881444,state_val_881466,c__29846__auto___881493,out))
})();
var inst_881450 = cljs.core.filterv.call(null,inst_881449,inst_881437);
var inst_881437__$1 = inst_881450;
var state_881465__$1 = (function (){var statearr_881480 = state_881465;
(statearr_881480[(10)] = inst_881437__$1);

return statearr_881480;
})();
var statearr_881481_881503 = state_881465__$1;
(statearr_881481_881503[(2)] = null);

(statearr_881481_881503[(1)] = (2));


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
});})(c__29846__auto___881493,out))
;
return ((function (switch__29734__auto__,c__29846__auto___881493,out){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_881485 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_881485[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_881485[(1)] = (1));

return statearr_881485;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_881465){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_881465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e881486){if((e881486 instanceof Object)){
var ex__29738__auto__ = e881486;
var statearr_881487_881504 = state_881465;
(statearr_881487_881504[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_881465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e881486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__881505 = state_881465;
state_881465 = G__881505;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_881465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_881465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___881493,out))
})();
var state__29848__auto__ = (function (){var statearr_881488 = f__29847__auto__.call(null);
(statearr_881488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___881493);

return statearr_881488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___881493,out))
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
var args881506 = [];
var len__25269__auto___881555 = arguments.length;
var i__25270__auto___881556 = (0);
while(true){
if((i__25270__auto___881556 < len__25269__auto___881555)){
args881506.push((arguments[i__25270__auto___881556]));

var G__881557 = (i__25270__auto___881556 + (1));
i__25270__auto___881556 = G__881557;
continue;
} else {
}
break;
}

var G__881508 = args881506.length;
switch (G__881508) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881506.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29846__auto___881559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___881559,out){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___881559,out){
return (function (state_881532){
var state_val_881533 = (state_881532[(1)]);
if((state_val_881533 === (7))){
var inst_881514 = (state_881532[(7)]);
var inst_881514__$1 = (state_881532[(2)]);
var inst_881515 = (inst_881514__$1 == null);
var inst_881516 = cljs.core.not.call(null,inst_881515);
var state_881532__$1 = (function (){var statearr_881534 = state_881532;
(statearr_881534[(7)] = inst_881514__$1);

return statearr_881534;
})();
if(inst_881516){
var statearr_881535_881560 = state_881532__$1;
(statearr_881535_881560[(1)] = (8));

} else {
var statearr_881536_881561 = state_881532__$1;
(statearr_881536_881561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881533 === (1))){
var inst_881509 = (0);
var state_881532__$1 = (function (){var statearr_881537 = state_881532;
(statearr_881537[(8)] = inst_881509);

return statearr_881537;
})();
var statearr_881538_881562 = state_881532__$1;
(statearr_881538_881562[(2)] = null);

(statearr_881538_881562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881533 === (4))){
var state_881532__$1 = state_881532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_881532__$1,(7),ch);
} else {
if((state_val_881533 === (6))){
var inst_881527 = (state_881532[(2)]);
var state_881532__$1 = state_881532;
var statearr_881539_881563 = state_881532__$1;
(statearr_881539_881563[(2)] = inst_881527);

(statearr_881539_881563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881533 === (3))){
var inst_881529 = (state_881532[(2)]);
var inst_881530 = cljs.core.async.close_BANG_.call(null,out);
var state_881532__$1 = (function (){var statearr_881540 = state_881532;
(statearr_881540[(9)] = inst_881529);

return statearr_881540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_881532__$1,inst_881530);
} else {
if((state_val_881533 === (2))){
var inst_881509 = (state_881532[(8)]);
var inst_881511 = (inst_881509 < n);
var state_881532__$1 = state_881532;
if(cljs.core.truth_(inst_881511)){
var statearr_881541_881564 = state_881532__$1;
(statearr_881541_881564[(1)] = (4));

} else {
var statearr_881542_881565 = state_881532__$1;
(statearr_881542_881565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881533 === (11))){
var inst_881509 = (state_881532[(8)]);
var inst_881519 = (state_881532[(2)]);
var inst_881520 = (inst_881509 + (1));
var inst_881509__$1 = inst_881520;
var state_881532__$1 = (function (){var statearr_881543 = state_881532;
(statearr_881543[(8)] = inst_881509__$1);

(statearr_881543[(10)] = inst_881519);

return statearr_881543;
})();
var statearr_881544_881566 = state_881532__$1;
(statearr_881544_881566[(2)] = null);

(statearr_881544_881566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881533 === (9))){
var state_881532__$1 = state_881532;
var statearr_881545_881567 = state_881532__$1;
(statearr_881545_881567[(2)] = null);

(statearr_881545_881567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881533 === (5))){
var state_881532__$1 = state_881532;
var statearr_881546_881568 = state_881532__$1;
(statearr_881546_881568[(2)] = null);

(statearr_881546_881568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881533 === (10))){
var inst_881524 = (state_881532[(2)]);
var state_881532__$1 = state_881532;
var statearr_881547_881569 = state_881532__$1;
(statearr_881547_881569[(2)] = inst_881524);

(statearr_881547_881569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881533 === (8))){
var inst_881514 = (state_881532[(7)]);
var state_881532__$1 = state_881532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_881532__$1,(11),out,inst_881514);
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
});})(c__29846__auto___881559,out))
;
return ((function (switch__29734__auto__,c__29846__auto___881559,out){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_881551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_881551[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_881551[(1)] = (1));

return statearr_881551;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_881532){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_881532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e881552){if((e881552 instanceof Object)){
var ex__29738__auto__ = e881552;
var statearr_881553_881570 = state_881532;
(statearr_881553_881570[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_881532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e881552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__881571 = state_881532;
state_881532 = G__881571;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_881532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_881532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___881559,out))
})();
var state__29848__auto__ = (function (){var statearr_881554 = f__29847__auto__.call(null);
(statearr_881554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___881559);

return statearr_881554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___881559,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async881579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async881579 = (function (map_LT_,f,ch,meta881580){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta881580 = meta881580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async881579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_881581,meta881580__$1){
var self__ = this;
var _881581__$1 = this;
return (new cljs.core.async.t_cljs$core$async881579(self__.map_LT_,self__.f,self__.ch,meta881580__$1));
});

cljs.core.async.t_cljs$core$async881579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_881581){
var self__ = this;
var _881581__$1 = this;
return self__.meta881580;
});

cljs.core.async.t_cljs$core$async881579.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async881579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async881579.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async881579.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async881579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async881582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async881582 = (function (map_LT_,f,ch,meta881580,_,fn1,meta881583){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta881580 = meta881580;
this._ = _;
this.fn1 = fn1;
this.meta881583 = meta881583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async881582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_881584,meta881583__$1){
var self__ = this;
var _881584__$1 = this;
return (new cljs.core.async.t_cljs$core$async881582(self__.map_LT_,self__.f,self__.ch,self__.meta881580,self__._,self__.fn1,meta881583__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async881582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_881584){
var self__ = this;
var _881584__$1 = this;
return self__.meta881583;
});})(___$1))
;

cljs.core.async.t_cljs$core$async881582.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async881582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async881582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__881572_SHARP_){
return f1.call(null,(((p1__881572_SHARP_ == null))?null:self__.f.call(null,p1__881572_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async881582.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta881580","meta881580",-2041410907,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async881579","cljs.core.async/t_cljs$core$async881579",-591716053,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta881583","meta881583",965273914,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async881582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async881582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async881582";

cljs.core.async.t_cljs$core$async881582.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async881582");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async881582 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async881582(map_LT___$1,f__$1,ch__$1,meta881580__$1,___$2,fn1__$1,meta881583){
return (new cljs.core.async.t_cljs$core$async881582(map_LT___$1,f__$1,ch__$1,meta881580__$1,___$2,fn1__$1,meta881583));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async881582(self__.map_LT_,self__.f,self__.ch,self__.meta881580,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24199__auto__ = ret;
if(cljs.core.truth_(and__24199__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24199__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async881579.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async881579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async881579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta881580","meta881580",-2041410907,null)], null);
});

cljs.core.async.t_cljs$core$async881579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async881579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async881579";

cljs.core.async.t_cljs$core$async881579.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async881579");
});

cljs.core.async.__GT_t_cljs$core$async881579 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async881579(map_LT___$1,f__$1,ch__$1,meta881580){
return (new cljs.core.async.t_cljs$core$async881579(map_LT___$1,f__$1,ch__$1,meta881580));
});

}

return (new cljs.core.async.t_cljs$core$async881579(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async881588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async881588 = (function (map_GT_,f,ch,meta881589){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta881589 = meta881589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async881588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_881590,meta881589__$1){
var self__ = this;
var _881590__$1 = this;
return (new cljs.core.async.t_cljs$core$async881588(self__.map_GT_,self__.f,self__.ch,meta881589__$1));
});

cljs.core.async.t_cljs$core$async881588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_881590){
var self__ = this;
var _881590__$1 = this;
return self__.meta881589;
});

cljs.core.async.t_cljs$core$async881588.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async881588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async881588.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async881588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async881588.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async881588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async881588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta881589","meta881589",-827467398,null)], null);
});

cljs.core.async.t_cljs$core$async881588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async881588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async881588";

cljs.core.async.t_cljs$core$async881588.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async881588");
});

cljs.core.async.__GT_t_cljs$core$async881588 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async881588(map_GT___$1,f__$1,ch__$1,meta881589){
return (new cljs.core.async.t_cljs$core$async881588(map_GT___$1,f__$1,ch__$1,meta881589));
});

}

return (new cljs.core.async.t_cljs$core$async881588(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async881594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async881594 = (function (filter_GT_,p,ch,meta881595){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta881595 = meta881595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async881594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_881596,meta881595__$1){
var self__ = this;
var _881596__$1 = this;
return (new cljs.core.async.t_cljs$core$async881594(self__.filter_GT_,self__.p,self__.ch,meta881595__$1));
});

cljs.core.async.t_cljs$core$async881594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_881596){
var self__ = this;
var _881596__$1 = this;
return self__.meta881595;
});

cljs.core.async.t_cljs$core$async881594.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async881594.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async881594.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async881594.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async881594.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async881594.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async881594.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async881594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta881595","meta881595",-2134031518,null)], null);
});

cljs.core.async.t_cljs$core$async881594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async881594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async881594";

cljs.core.async.t_cljs$core$async881594.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async881594");
});

cljs.core.async.__GT_t_cljs$core$async881594 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async881594(filter_GT___$1,p__$1,ch__$1,meta881595){
return (new cljs.core.async.t_cljs$core$async881594(filter_GT___$1,p__$1,ch__$1,meta881595));
});

}

return (new cljs.core.async.t_cljs$core$async881594(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args881597 = [];
var len__25269__auto___881641 = arguments.length;
var i__25270__auto___881642 = (0);
while(true){
if((i__25270__auto___881642 < len__25269__auto___881641)){
args881597.push((arguments[i__25270__auto___881642]));

var G__881643 = (i__25270__auto___881642 + (1));
i__25270__auto___881642 = G__881643;
continue;
} else {
}
break;
}

var G__881599 = args881597.length;
switch (G__881599) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881597.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29846__auto___881645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___881645,out){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___881645,out){
return (function (state_881620){
var state_val_881621 = (state_881620[(1)]);
if((state_val_881621 === (7))){
var inst_881616 = (state_881620[(2)]);
var state_881620__$1 = state_881620;
var statearr_881622_881646 = state_881620__$1;
(statearr_881622_881646[(2)] = inst_881616);

(statearr_881622_881646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881621 === (1))){
var state_881620__$1 = state_881620;
var statearr_881623_881647 = state_881620__$1;
(statearr_881623_881647[(2)] = null);

(statearr_881623_881647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881621 === (4))){
var inst_881602 = (state_881620[(7)]);
var inst_881602__$1 = (state_881620[(2)]);
var inst_881603 = (inst_881602__$1 == null);
var state_881620__$1 = (function (){var statearr_881624 = state_881620;
(statearr_881624[(7)] = inst_881602__$1);

return statearr_881624;
})();
if(cljs.core.truth_(inst_881603)){
var statearr_881625_881648 = state_881620__$1;
(statearr_881625_881648[(1)] = (5));

} else {
var statearr_881626_881649 = state_881620__$1;
(statearr_881626_881649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881621 === (6))){
var inst_881602 = (state_881620[(7)]);
var inst_881607 = p.call(null,inst_881602);
var state_881620__$1 = state_881620;
if(cljs.core.truth_(inst_881607)){
var statearr_881627_881650 = state_881620__$1;
(statearr_881627_881650[(1)] = (8));

} else {
var statearr_881628_881651 = state_881620__$1;
(statearr_881628_881651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881621 === (3))){
var inst_881618 = (state_881620[(2)]);
var state_881620__$1 = state_881620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_881620__$1,inst_881618);
} else {
if((state_val_881621 === (2))){
var state_881620__$1 = state_881620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_881620__$1,(4),ch);
} else {
if((state_val_881621 === (11))){
var inst_881610 = (state_881620[(2)]);
var state_881620__$1 = state_881620;
var statearr_881629_881652 = state_881620__$1;
(statearr_881629_881652[(2)] = inst_881610);

(statearr_881629_881652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881621 === (9))){
var state_881620__$1 = state_881620;
var statearr_881630_881653 = state_881620__$1;
(statearr_881630_881653[(2)] = null);

(statearr_881630_881653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881621 === (5))){
var inst_881605 = cljs.core.async.close_BANG_.call(null,out);
var state_881620__$1 = state_881620;
var statearr_881631_881654 = state_881620__$1;
(statearr_881631_881654[(2)] = inst_881605);

(statearr_881631_881654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881621 === (10))){
var inst_881613 = (state_881620[(2)]);
var state_881620__$1 = (function (){var statearr_881632 = state_881620;
(statearr_881632[(8)] = inst_881613);

return statearr_881632;
})();
var statearr_881633_881655 = state_881620__$1;
(statearr_881633_881655[(2)] = null);

(statearr_881633_881655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881621 === (8))){
var inst_881602 = (state_881620[(7)]);
var state_881620__$1 = state_881620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_881620__$1,(11),out,inst_881602);
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
});})(c__29846__auto___881645,out))
;
return ((function (switch__29734__auto__,c__29846__auto___881645,out){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_881637 = [null,null,null,null,null,null,null,null,null];
(statearr_881637[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_881637[(1)] = (1));

return statearr_881637;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_881620){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_881620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e881638){if((e881638 instanceof Object)){
var ex__29738__auto__ = e881638;
var statearr_881639_881656 = state_881620;
(statearr_881639_881656[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_881620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e881638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__881657 = state_881620;
state_881620 = G__881657;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_881620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_881620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___881645,out))
})();
var state__29848__auto__ = (function (){var statearr_881640 = f__29847__auto__.call(null);
(statearr_881640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___881645);

return statearr_881640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___881645,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args881658 = [];
var len__25269__auto___881661 = arguments.length;
var i__25270__auto___881662 = (0);
while(true){
if((i__25270__auto___881662 < len__25269__auto___881661)){
args881658.push((arguments[i__25270__auto___881662]));

var G__881663 = (i__25270__auto___881662 + (1));
i__25270__auto___881662 = G__881663;
continue;
} else {
}
break;
}

var G__881660 = args881658.length;
switch (G__881660) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881658.length)].join('')));

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
var c__29846__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto__){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto__){
return (function (state_881830){
var state_val_881831 = (state_881830[(1)]);
if((state_val_881831 === (7))){
var inst_881826 = (state_881830[(2)]);
var state_881830__$1 = state_881830;
var statearr_881832_881873 = state_881830__$1;
(statearr_881832_881873[(2)] = inst_881826);

(statearr_881832_881873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (20))){
var inst_881796 = (state_881830[(7)]);
var inst_881807 = (state_881830[(2)]);
var inst_881808 = cljs.core.next.call(null,inst_881796);
var inst_881782 = inst_881808;
var inst_881783 = null;
var inst_881784 = (0);
var inst_881785 = (0);
var state_881830__$1 = (function (){var statearr_881833 = state_881830;
(statearr_881833[(8)] = inst_881782);

(statearr_881833[(9)] = inst_881807);

(statearr_881833[(10)] = inst_881783);

(statearr_881833[(11)] = inst_881785);

(statearr_881833[(12)] = inst_881784);

return statearr_881833;
})();
var statearr_881834_881874 = state_881830__$1;
(statearr_881834_881874[(2)] = null);

(statearr_881834_881874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (1))){
var state_881830__$1 = state_881830;
var statearr_881835_881875 = state_881830__$1;
(statearr_881835_881875[(2)] = null);

(statearr_881835_881875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (4))){
var inst_881771 = (state_881830[(13)]);
var inst_881771__$1 = (state_881830[(2)]);
var inst_881772 = (inst_881771__$1 == null);
var state_881830__$1 = (function (){var statearr_881836 = state_881830;
(statearr_881836[(13)] = inst_881771__$1);

return statearr_881836;
})();
if(cljs.core.truth_(inst_881772)){
var statearr_881837_881876 = state_881830__$1;
(statearr_881837_881876[(1)] = (5));

} else {
var statearr_881838_881877 = state_881830__$1;
(statearr_881838_881877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (15))){
var state_881830__$1 = state_881830;
var statearr_881842_881878 = state_881830__$1;
(statearr_881842_881878[(2)] = null);

(statearr_881842_881878[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (21))){
var state_881830__$1 = state_881830;
var statearr_881843_881879 = state_881830__$1;
(statearr_881843_881879[(2)] = null);

(statearr_881843_881879[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (13))){
var inst_881782 = (state_881830[(8)]);
var inst_881783 = (state_881830[(10)]);
var inst_881785 = (state_881830[(11)]);
var inst_881784 = (state_881830[(12)]);
var inst_881792 = (state_881830[(2)]);
var inst_881793 = (inst_881785 + (1));
var tmp881839 = inst_881782;
var tmp881840 = inst_881783;
var tmp881841 = inst_881784;
var inst_881782__$1 = tmp881839;
var inst_881783__$1 = tmp881840;
var inst_881784__$1 = tmp881841;
var inst_881785__$1 = inst_881793;
var state_881830__$1 = (function (){var statearr_881844 = state_881830;
(statearr_881844[(8)] = inst_881782__$1);

(statearr_881844[(10)] = inst_881783__$1);

(statearr_881844[(11)] = inst_881785__$1);

(statearr_881844[(12)] = inst_881784__$1);

(statearr_881844[(14)] = inst_881792);

return statearr_881844;
})();
var statearr_881845_881880 = state_881830__$1;
(statearr_881845_881880[(2)] = null);

(statearr_881845_881880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (22))){
var state_881830__$1 = state_881830;
var statearr_881846_881881 = state_881830__$1;
(statearr_881846_881881[(2)] = null);

(statearr_881846_881881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (6))){
var inst_881771 = (state_881830[(13)]);
var inst_881780 = f.call(null,inst_881771);
var inst_881781 = cljs.core.seq.call(null,inst_881780);
var inst_881782 = inst_881781;
var inst_881783 = null;
var inst_881784 = (0);
var inst_881785 = (0);
var state_881830__$1 = (function (){var statearr_881847 = state_881830;
(statearr_881847[(8)] = inst_881782);

(statearr_881847[(10)] = inst_881783);

(statearr_881847[(11)] = inst_881785);

(statearr_881847[(12)] = inst_881784);

return statearr_881847;
})();
var statearr_881848_881882 = state_881830__$1;
(statearr_881848_881882[(2)] = null);

(statearr_881848_881882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (17))){
var inst_881796 = (state_881830[(7)]);
var inst_881800 = cljs.core.chunk_first.call(null,inst_881796);
var inst_881801 = cljs.core.chunk_rest.call(null,inst_881796);
var inst_881802 = cljs.core.count.call(null,inst_881800);
var inst_881782 = inst_881801;
var inst_881783 = inst_881800;
var inst_881784 = inst_881802;
var inst_881785 = (0);
var state_881830__$1 = (function (){var statearr_881849 = state_881830;
(statearr_881849[(8)] = inst_881782);

(statearr_881849[(10)] = inst_881783);

(statearr_881849[(11)] = inst_881785);

(statearr_881849[(12)] = inst_881784);

return statearr_881849;
})();
var statearr_881850_881883 = state_881830__$1;
(statearr_881850_881883[(2)] = null);

(statearr_881850_881883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (3))){
var inst_881828 = (state_881830[(2)]);
var state_881830__$1 = state_881830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_881830__$1,inst_881828);
} else {
if((state_val_881831 === (12))){
var inst_881816 = (state_881830[(2)]);
var state_881830__$1 = state_881830;
var statearr_881851_881884 = state_881830__$1;
(statearr_881851_881884[(2)] = inst_881816);

(statearr_881851_881884[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (2))){
var state_881830__$1 = state_881830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_881830__$1,(4),in$);
} else {
if((state_val_881831 === (23))){
var inst_881824 = (state_881830[(2)]);
var state_881830__$1 = state_881830;
var statearr_881852_881885 = state_881830__$1;
(statearr_881852_881885[(2)] = inst_881824);

(statearr_881852_881885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (19))){
var inst_881811 = (state_881830[(2)]);
var state_881830__$1 = state_881830;
var statearr_881853_881886 = state_881830__$1;
(statearr_881853_881886[(2)] = inst_881811);

(statearr_881853_881886[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (11))){
var inst_881796 = (state_881830[(7)]);
var inst_881782 = (state_881830[(8)]);
var inst_881796__$1 = cljs.core.seq.call(null,inst_881782);
var state_881830__$1 = (function (){var statearr_881854 = state_881830;
(statearr_881854[(7)] = inst_881796__$1);

return statearr_881854;
})();
if(inst_881796__$1){
var statearr_881855_881887 = state_881830__$1;
(statearr_881855_881887[(1)] = (14));

} else {
var statearr_881856_881888 = state_881830__$1;
(statearr_881856_881888[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (9))){
var inst_881818 = (state_881830[(2)]);
var inst_881819 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_881830__$1 = (function (){var statearr_881857 = state_881830;
(statearr_881857[(15)] = inst_881818);

return statearr_881857;
})();
if(cljs.core.truth_(inst_881819)){
var statearr_881858_881889 = state_881830__$1;
(statearr_881858_881889[(1)] = (21));

} else {
var statearr_881859_881890 = state_881830__$1;
(statearr_881859_881890[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (5))){
var inst_881774 = cljs.core.async.close_BANG_.call(null,out);
var state_881830__$1 = state_881830;
var statearr_881860_881891 = state_881830__$1;
(statearr_881860_881891[(2)] = inst_881774);

(statearr_881860_881891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (14))){
var inst_881796 = (state_881830[(7)]);
var inst_881798 = cljs.core.chunked_seq_QMARK_.call(null,inst_881796);
var state_881830__$1 = state_881830;
if(inst_881798){
var statearr_881861_881892 = state_881830__$1;
(statearr_881861_881892[(1)] = (17));

} else {
var statearr_881862_881893 = state_881830__$1;
(statearr_881862_881893[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (16))){
var inst_881814 = (state_881830[(2)]);
var state_881830__$1 = state_881830;
var statearr_881863_881894 = state_881830__$1;
(statearr_881863_881894[(2)] = inst_881814);

(statearr_881863_881894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881831 === (10))){
var inst_881783 = (state_881830[(10)]);
var inst_881785 = (state_881830[(11)]);
var inst_881790 = cljs.core._nth.call(null,inst_881783,inst_881785);
var state_881830__$1 = state_881830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_881830__$1,(13),out,inst_881790);
} else {
if((state_val_881831 === (18))){
var inst_881796 = (state_881830[(7)]);
var inst_881805 = cljs.core.first.call(null,inst_881796);
var state_881830__$1 = state_881830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_881830__$1,(20),out,inst_881805);
} else {
if((state_val_881831 === (8))){
var inst_881785 = (state_881830[(11)]);
var inst_881784 = (state_881830[(12)]);
var inst_881787 = (inst_881785 < inst_881784);
var inst_881788 = inst_881787;
var state_881830__$1 = state_881830;
if(cljs.core.truth_(inst_881788)){
var statearr_881864_881895 = state_881830__$1;
(statearr_881864_881895[(1)] = (10));

} else {
var statearr_881865_881896 = state_881830__$1;
(statearr_881865_881896[(1)] = (11));

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
});})(c__29846__auto__))
;
return ((function (switch__29734__auto__,c__29846__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29735__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29735__auto____0 = (function (){
var statearr_881869 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_881869[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29735__auto__);

(statearr_881869[(1)] = (1));

return statearr_881869;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29735__auto____1 = (function (state_881830){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_881830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e881870){if((e881870 instanceof Object)){
var ex__29738__auto__ = e881870;
var statearr_881871_881897 = state_881830;
(statearr_881871_881897[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_881830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e881870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__881898 = state_881830;
state_881830 = G__881898;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29735__auto__ = function(state_881830){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29735__auto____1.call(this,state_881830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29735__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29735__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto__))
})();
var state__29848__auto__ = (function (){var statearr_881872 = f__29847__auto__.call(null);
(statearr_881872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto__);

return statearr_881872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto__))
);

return c__29846__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args881899 = [];
var len__25269__auto___881902 = arguments.length;
var i__25270__auto___881903 = (0);
while(true){
if((i__25270__auto___881903 < len__25269__auto___881902)){
args881899.push((arguments[i__25270__auto___881903]));

var G__881904 = (i__25270__auto___881903 + (1));
i__25270__auto___881903 = G__881904;
continue;
} else {
}
break;
}

var G__881901 = args881899.length;
switch (G__881901) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881899.length)].join('')));

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
var args881906 = [];
var len__25269__auto___881909 = arguments.length;
var i__25270__auto___881910 = (0);
while(true){
if((i__25270__auto___881910 < len__25269__auto___881909)){
args881906.push((arguments[i__25270__auto___881910]));

var G__881911 = (i__25270__auto___881910 + (1));
i__25270__auto___881910 = G__881911;
continue;
} else {
}
break;
}

var G__881908 = args881906.length;
switch (G__881908) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881906.length)].join('')));

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
var args881913 = [];
var len__25269__auto___881964 = arguments.length;
var i__25270__auto___881965 = (0);
while(true){
if((i__25270__auto___881965 < len__25269__auto___881964)){
args881913.push((arguments[i__25270__auto___881965]));

var G__881966 = (i__25270__auto___881965 + (1));
i__25270__auto___881965 = G__881966;
continue;
} else {
}
break;
}

var G__881915 = args881913.length;
switch (G__881915) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881913.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29846__auto___881968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___881968,out){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___881968,out){
return (function (state_881939){
var state_val_881940 = (state_881939[(1)]);
if((state_val_881940 === (7))){
var inst_881934 = (state_881939[(2)]);
var state_881939__$1 = state_881939;
var statearr_881941_881969 = state_881939__$1;
(statearr_881941_881969[(2)] = inst_881934);

(statearr_881941_881969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881940 === (1))){
var inst_881916 = null;
var state_881939__$1 = (function (){var statearr_881942 = state_881939;
(statearr_881942[(7)] = inst_881916);

return statearr_881942;
})();
var statearr_881943_881970 = state_881939__$1;
(statearr_881943_881970[(2)] = null);

(statearr_881943_881970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881940 === (4))){
var inst_881919 = (state_881939[(8)]);
var inst_881919__$1 = (state_881939[(2)]);
var inst_881920 = (inst_881919__$1 == null);
var inst_881921 = cljs.core.not.call(null,inst_881920);
var state_881939__$1 = (function (){var statearr_881944 = state_881939;
(statearr_881944[(8)] = inst_881919__$1);

return statearr_881944;
})();
if(inst_881921){
var statearr_881945_881971 = state_881939__$1;
(statearr_881945_881971[(1)] = (5));

} else {
var statearr_881946_881972 = state_881939__$1;
(statearr_881946_881972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881940 === (6))){
var state_881939__$1 = state_881939;
var statearr_881947_881973 = state_881939__$1;
(statearr_881947_881973[(2)] = null);

(statearr_881947_881973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881940 === (3))){
var inst_881936 = (state_881939[(2)]);
var inst_881937 = cljs.core.async.close_BANG_.call(null,out);
var state_881939__$1 = (function (){var statearr_881948 = state_881939;
(statearr_881948[(9)] = inst_881936);

return statearr_881948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_881939__$1,inst_881937);
} else {
if((state_val_881940 === (2))){
var state_881939__$1 = state_881939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_881939__$1,(4),ch);
} else {
if((state_val_881940 === (11))){
var inst_881919 = (state_881939[(8)]);
var inst_881928 = (state_881939[(2)]);
var inst_881916 = inst_881919;
var state_881939__$1 = (function (){var statearr_881949 = state_881939;
(statearr_881949[(10)] = inst_881928);

(statearr_881949[(7)] = inst_881916);

return statearr_881949;
})();
var statearr_881950_881974 = state_881939__$1;
(statearr_881950_881974[(2)] = null);

(statearr_881950_881974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881940 === (9))){
var inst_881919 = (state_881939[(8)]);
var state_881939__$1 = state_881939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_881939__$1,(11),out,inst_881919);
} else {
if((state_val_881940 === (5))){
var inst_881919 = (state_881939[(8)]);
var inst_881916 = (state_881939[(7)]);
var inst_881923 = cljs.core._EQ_.call(null,inst_881919,inst_881916);
var state_881939__$1 = state_881939;
if(inst_881923){
var statearr_881952_881975 = state_881939__$1;
(statearr_881952_881975[(1)] = (8));

} else {
var statearr_881953_881976 = state_881939__$1;
(statearr_881953_881976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881940 === (10))){
var inst_881931 = (state_881939[(2)]);
var state_881939__$1 = state_881939;
var statearr_881954_881977 = state_881939__$1;
(statearr_881954_881977[(2)] = inst_881931);

(statearr_881954_881977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_881940 === (8))){
var inst_881916 = (state_881939[(7)]);
var tmp881951 = inst_881916;
var inst_881916__$1 = tmp881951;
var state_881939__$1 = (function (){var statearr_881955 = state_881939;
(statearr_881955[(7)] = inst_881916__$1);

return statearr_881955;
})();
var statearr_881956_881978 = state_881939__$1;
(statearr_881956_881978[(2)] = null);

(statearr_881956_881978[(1)] = (2));


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
});})(c__29846__auto___881968,out))
;
return ((function (switch__29734__auto__,c__29846__auto___881968,out){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_881960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_881960[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_881960[(1)] = (1));

return statearr_881960;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_881939){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_881939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e881961){if((e881961 instanceof Object)){
var ex__29738__auto__ = e881961;
var statearr_881962_881979 = state_881939;
(statearr_881962_881979[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_881939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e881961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__881980 = state_881939;
state_881939 = G__881980;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_881939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_881939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___881968,out))
})();
var state__29848__auto__ = (function (){var statearr_881963 = f__29847__auto__.call(null);
(statearr_881963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___881968);

return statearr_881963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___881968,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args881981 = [];
var len__25269__auto___882051 = arguments.length;
var i__25270__auto___882052 = (0);
while(true){
if((i__25270__auto___882052 < len__25269__auto___882051)){
args881981.push((arguments[i__25270__auto___882052]));

var G__882053 = (i__25270__auto___882052 + (1));
i__25270__auto___882052 = G__882053;
continue;
} else {
}
break;
}

var G__881983 = args881981.length;
switch (G__881983) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args881981.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29846__auto___882055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___882055,out){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___882055,out){
return (function (state_882021){
var state_val_882022 = (state_882021[(1)]);
if((state_val_882022 === (7))){
var inst_882017 = (state_882021[(2)]);
var state_882021__$1 = state_882021;
var statearr_882023_882056 = state_882021__$1;
(statearr_882023_882056[(2)] = inst_882017);

(statearr_882023_882056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882022 === (1))){
var inst_881984 = (new Array(n));
var inst_881985 = inst_881984;
var inst_881986 = (0);
var state_882021__$1 = (function (){var statearr_882024 = state_882021;
(statearr_882024[(7)] = inst_881985);

(statearr_882024[(8)] = inst_881986);

return statearr_882024;
})();
var statearr_882025_882057 = state_882021__$1;
(statearr_882025_882057[(2)] = null);

(statearr_882025_882057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882022 === (4))){
var inst_881989 = (state_882021[(9)]);
var inst_881989__$1 = (state_882021[(2)]);
var inst_881990 = (inst_881989__$1 == null);
var inst_881991 = cljs.core.not.call(null,inst_881990);
var state_882021__$1 = (function (){var statearr_882026 = state_882021;
(statearr_882026[(9)] = inst_881989__$1);

return statearr_882026;
})();
if(inst_881991){
var statearr_882027_882058 = state_882021__$1;
(statearr_882027_882058[(1)] = (5));

} else {
var statearr_882028_882059 = state_882021__$1;
(statearr_882028_882059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882022 === (15))){
var inst_882011 = (state_882021[(2)]);
var state_882021__$1 = state_882021;
var statearr_882029_882060 = state_882021__$1;
(statearr_882029_882060[(2)] = inst_882011);

(statearr_882029_882060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882022 === (13))){
var state_882021__$1 = state_882021;
var statearr_882030_882061 = state_882021__$1;
(statearr_882030_882061[(2)] = null);

(statearr_882030_882061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882022 === (6))){
var inst_881986 = (state_882021[(8)]);
var inst_882007 = (inst_881986 > (0));
var state_882021__$1 = state_882021;
if(cljs.core.truth_(inst_882007)){
var statearr_882031_882062 = state_882021__$1;
(statearr_882031_882062[(1)] = (12));

} else {
var statearr_882032_882063 = state_882021__$1;
(statearr_882032_882063[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882022 === (3))){
var inst_882019 = (state_882021[(2)]);
var state_882021__$1 = state_882021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_882021__$1,inst_882019);
} else {
if((state_val_882022 === (12))){
var inst_881985 = (state_882021[(7)]);
var inst_882009 = cljs.core.vec.call(null,inst_881985);
var state_882021__$1 = state_882021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_882021__$1,(15),out,inst_882009);
} else {
if((state_val_882022 === (2))){
var state_882021__$1 = state_882021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_882021__$1,(4),ch);
} else {
if((state_val_882022 === (11))){
var inst_882001 = (state_882021[(2)]);
var inst_882002 = (new Array(n));
var inst_881985 = inst_882002;
var inst_881986 = (0);
var state_882021__$1 = (function (){var statearr_882033 = state_882021;
(statearr_882033[(7)] = inst_881985);

(statearr_882033[(8)] = inst_881986);

(statearr_882033[(10)] = inst_882001);

return statearr_882033;
})();
var statearr_882034_882064 = state_882021__$1;
(statearr_882034_882064[(2)] = null);

(statearr_882034_882064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882022 === (9))){
var inst_881985 = (state_882021[(7)]);
var inst_881999 = cljs.core.vec.call(null,inst_881985);
var state_882021__$1 = state_882021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_882021__$1,(11),out,inst_881999);
} else {
if((state_val_882022 === (5))){
var inst_881989 = (state_882021[(9)]);
var inst_881994 = (state_882021[(11)]);
var inst_881985 = (state_882021[(7)]);
var inst_881986 = (state_882021[(8)]);
var inst_881993 = (inst_881985[inst_881986] = inst_881989);
var inst_881994__$1 = (inst_881986 + (1));
var inst_881995 = (inst_881994__$1 < n);
var state_882021__$1 = (function (){var statearr_882035 = state_882021;
(statearr_882035[(11)] = inst_881994__$1);

(statearr_882035[(12)] = inst_881993);

return statearr_882035;
})();
if(cljs.core.truth_(inst_881995)){
var statearr_882036_882065 = state_882021__$1;
(statearr_882036_882065[(1)] = (8));

} else {
var statearr_882037_882066 = state_882021__$1;
(statearr_882037_882066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882022 === (14))){
var inst_882014 = (state_882021[(2)]);
var inst_882015 = cljs.core.async.close_BANG_.call(null,out);
var state_882021__$1 = (function (){var statearr_882039 = state_882021;
(statearr_882039[(13)] = inst_882014);

return statearr_882039;
})();
var statearr_882040_882067 = state_882021__$1;
(statearr_882040_882067[(2)] = inst_882015);

(statearr_882040_882067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882022 === (10))){
var inst_882005 = (state_882021[(2)]);
var state_882021__$1 = state_882021;
var statearr_882041_882068 = state_882021__$1;
(statearr_882041_882068[(2)] = inst_882005);

(statearr_882041_882068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882022 === (8))){
var inst_881994 = (state_882021[(11)]);
var inst_881985 = (state_882021[(7)]);
var tmp882038 = inst_881985;
var inst_881985__$1 = tmp882038;
var inst_881986 = inst_881994;
var state_882021__$1 = (function (){var statearr_882042 = state_882021;
(statearr_882042[(7)] = inst_881985__$1);

(statearr_882042[(8)] = inst_881986);

return statearr_882042;
})();
var statearr_882043_882069 = state_882021__$1;
(statearr_882043_882069[(2)] = null);

(statearr_882043_882069[(1)] = (2));


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
});})(c__29846__auto___882055,out))
;
return ((function (switch__29734__auto__,c__29846__auto___882055,out){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_882047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_882047[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_882047[(1)] = (1));

return statearr_882047;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_882021){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_882021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e882048){if((e882048 instanceof Object)){
var ex__29738__auto__ = e882048;
var statearr_882049_882070 = state_882021;
(statearr_882049_882070[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_882021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e882048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__882071 = state_882021;
state_882021 = G__882071;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_882021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_882021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___882055,out))
})();
var state__29848__auto__ = (function (){var statearr_882050 = f__29847__auto__.call(null);
(statearr_882050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___882055);

return statearr_882050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___882055,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args882072 = [];
var len__25269__auto___882146 = arguments.length;
var i__25270__auto___882147 = (0);
while(true){
if((i__25270__auto___882147 < len__25269__auto___882146)){
args882072.push((arguments[i__25270__auto___882147]));

var G__882148 = (i__25270__auto___882147 + (1));
i__25270__auto___882147 = G__882148;
continue;
} else {
}
break;
}

var G__882074 = args882072.length;
switch (G__882074) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args882072.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29846__auto___882150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___882150,out){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___882150,out){
return (function (state_882116){
var state_val_882117 = (state_882116[(1)]);
if((state_val_882117 === (7))){
var inst_882112 = (state_882116[(2)]);
var state_882116__$1 = state_882116;
var statearr_882118_882151 = state_882116__$1;
(statearr_882118_882151[(2)] = inst_882112);

(statearr_882118_882151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882117 === (1))){
var inst_882075 = [];
var inst_882076 = inst_882075;
var inst_882077 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_882116__$1 = (function (){var statearr_882119 = state_882116;
(statearr_882119[(7)] = inst_882077);

(statearr_882119[(8)] = inst_882076);

return statearr_882119;
})();
var statearr_882120_882152 = state_882116__$1;
(statearr_882120_882152[(2)] = null);

(statearr_882120_882152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882117 === (4))){
var inst_882080 = (state_882116[(9)]);
var inst_882080__$1 = (state_882116[(2)]);
var inst_882081 = (inst_882080__$1 == null);
var inst_882082 = cljs.core.not.call(null,inst_882081);
var state_882116__$1 = (function (){var statearr_882121 = state_882116;
(statearr_882121[(9)] = inst_882080__$1);

return statearr_882121;
})();
if(inst_882082){
var statearr_882122_882153 = state_882116__$1;
(statearr_882122_882153[(1)] = (5));

} else {
var statearr_882123_882154 = state_882116__$1;
(statearr_882123_882154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882117 === (15))){
var inst_882106 = (state_882116[(2)]);
var state_882116__$1 = state_882116;
var statearr_882124_882155 = state_882116__$1;
(statearr_882124_882155[(2)] = inst_882106);

(statearr_882124_882155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882117 === (13))){
var state_882116__$1 = state_882116;
var statearr_882125_882156 = state_882116__$1;
(statearr_882125_882156[(2)] = null);

(statearr_882125_882156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882117 === (6))){
var inst_882076 = (state_882116[(8)]);
var inst_882101 = inst_882076.length;
var inst_882102 = (inst_882101 > (0));
var state_882116__$1 = state_882116;
if(cljs.core.truth_(inst_882102)){
var statearr_882126_882157 = state_882116__$1;
(statearr_882126_882157[(1)] = (12));

} else {
var statearr_882127_882158 = state_882116__$1;
(statearr_882127_882158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882117 === (3))){
var inst_882114 = (state_882116[(2)]);
var state_882116__$1 = state_882116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_882116__$1,inst_882114);
} else {
if((state_val_882117 === (12))){
var inst_882076 = (state_882116[(8)]);
var inst_882104 = cljs.core.vec.call(null,inst_882076);
var state_882116__$1 = state_882116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_882116__$1,(15),out,inst_882104);
} else {
if((state_val_882117 === (2))){
var state_882116__$1 = state_882116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_882116__$1,(4),ch);
} else {
if((state_val_882117 === (11))){
var inst_882084 = (state_882116[(10)]);
var inst_882080 = (state_882116[(9)]);
var inst_882094 = (state_882116[(2)]);
var inst_882095 = [];
var inst_882096 = inst_882095.push(inst_882080);
var inst_882076 = inst_882095;
var inst_882077 = inst_882084;
var state_882116__$1 = (function (){var statearr_882128 = state_882116;
(statearr_882128[(7)] = inst_882077);

(statearr_882128[(8)] = inst_882076);

(statearr_882128[(11)] = inst_882096);

(statearr_882128[(12)] = inst_882094);

return statearr_882128;
})();
var statearr_882129_882159 = state_882116__$1;
(statearr_882129_882159[(2)] = null);

(statearr_882129_882159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882117 === (9))){
var inst_882076 = (state_882116[(8)]);
var inst_882092 = cljs.core.vec.call(null,inst_882076);
var state_882116__$1 = state_882116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_882116__$1,(11),out,inst_882092);
} else {
if((state_val_882117 === (5))){
var inst_882077 = (state_882116[(7)]);
var inst_882084 = (state_882116[(10)]);
var inst_882080 = (state_882116[(9)]);
var inst_882084__$1 = f.call(null,inst_882080);
var inst_882085 = cljs.core._EQ_.call(null,inst_882084__$1,inst_882077);
var inst_882086 = cljs.core.keyword_identical_QMARK_.call(null,inst_882077,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_882087 = (inst_882085) || (inst_882086);
var state_882116__$1 = (function (){var statearr_882130 = state_882116;
(statearr_882130[(10)] = inst_882084__$1);

return statearr_882130;
})();
if(cljs.core.truth_(inst_882087)){
var statearr_882131_882160 = state_882116__$1;
(statearr_882131_882160[(1)] = (8));

} else {
var statearr_882132_882161 = state_882116__$1;
(statearr_882132_882161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882117 === (14))){
var inst_882109 = (state_882116[(2)]);
var inst_882110 = cljs.core.async.close_BANG_.call(null,out);
var state_882116__$1 = (function (){var statearr_882134 = state_882116;
(statearr_882134[(13)] = inst_882109);

return statearr_882134;
})();
var statearr_882135_882162 = state_882116__$1;
(statearr_882135_882162[(2)] = inst_882110);

(statearr_882135_882162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882117 === (10))){
var inst_882099 = (state_882116[(2)]);
var state_882116__$1 = state_882116;
var statearr_882136_882163 = state_882116__$1;
(statearr_882136_882163[(2)] = inst_882099);

(statearr_882136_882163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882117 === (8))){
var inst_882084 = (state_882116[(10)]);
var inst_882080 = (state_882116[(9)]);
var inst_882076 = (state_882116[(8)]);
var inst_882089 = inst_882076.push(inst_882080);
var tmp882133 = inst_882076;
var inst_882076__$1 = tmp882133;
var inst_882077 = inst_882084;
var state_882116__$1 = (function (){var statearr_882137 = state_882116;
(statearr_882137[(14)] = inst_882089);

(statearr_882137[(7)] = inst_882077);

(statearr_882137[(8)] = inst_882076__$1);

return statearr_882137;
})();
var statearr_882138_882164 = state_882116__$1;
(statearr_882138_882164[(2)] = null);

(statearr_882138_882164[(1)] = (2));


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
});})(c__29846__auto___882150,out))
;
return ((function (switch__29734__auto__,c__29846__auto___882150,out){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_882142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_882142[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_882142[(1)] = (1));

return statearr_882142;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_882116){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_882116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e882143){if((e882143 instanceof Object)){
var ex__29738__auto__ = e882143;
var statearr_882144_882165 = state_882116;
(statearr_882144_882165[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_882116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e882143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__882166 = state_882116;
state_882116 = G__882166;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_882116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_882116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___882150,out))
})();
var state__29848__auto__ = (function (){var statearr_882145 = f__29847__auto__.call(null);
(statearr_882145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___882150);

return statearr_882145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___882150,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map