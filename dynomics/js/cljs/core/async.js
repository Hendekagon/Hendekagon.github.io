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
if(typeof cljs.core.async.t_cljs$core$async645123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async645123 = (function (fn_handler,f,meta645124){
this.fn_handler = fn_handler;
this.f = f;
this.meta645124 = meta645124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async645123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_645125,meta645124__$1){
var self__ = this;
var _645125__$1 = this;
return (new cljs.core.async.t_cljs$core$async645123(self__.fn_handler,self__.f,meta645124__$1));
});

cljs.core.async.t_cljs$core$async645123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_645125){
var self__ = this;
var _645125__$1 = this;
return self__.meta645124;
});

cljs.core.async.t_cljs$core$async645123.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async645123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async645123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async645123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta645124","meta645124",-1505134265,null)], null);
});

cljs.core.async.t_cljs$core$async645123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async645123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async645123";

cljs.core.async.t_cljs$core$async645123.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async645123");
});

cljs.core.async.__GT_t_cljs$core$async645123 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async645123(fn_handler__$1,f__$1,meta645124){
return (new cljs.core.async.t_cljs$core$async645123(fn_handler__$1,f__$1,meta645124));
});

}

return (new cljs.core.async.t_cljs$core$async645123(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args645128 = [];
var len__25269__auto___645131 = arguments.length;
var i__25270__auto___645132 = (0);
while(true){
if((i__25270__auto___645132 < len__25269__auto___645131)){
args645128.push((arguments[i__25270__auto___645132]));

var G__645133 = (i__25270__auto___645132 + (1));
i__25270__auto___645132 = G__645133;
continue;
} else {
}
break;
}

var G__645130 = args645128.length;
switch (G__645130) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args645128.length)].join('')));

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
var args645135 = [];
var len__25269__auto___645138 = arguments.length;
var i__25270__auto___645139 = (0);
while(true){
if((i__25270__auto___645139 < len__25269__auto___645138)){
args645135.push((arguments[i__25270__auto___645139]));

var G__645140 = (i__25270__auto___645139 + (1));
i__25270__auto___645139 = G__645140;
continue;
} else {
}
break;
}

var G__645137 = args645135.length;
switch (G__645137) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args645135.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_645142 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_645142);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_645142,ret){
return (function (){
return fn1.call(null,val_645142);
});})(val_645142,ret))
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
var args645143 = [];
var len__25269__auto___645146 = arguments.length;
var i__25270__auto___645147 = (0);
while(true){
if((i__25270__auto___645147 < len__25269__auto___645146)){
args645143.push((arguments[i__25270__auto___645147]));

var G__645148 = (i__25270__auto___645147 + (1));
i__25270__auto___645147 = G__645148;
continue;
} else {
}
break;
}

var G__645145 = args645143.length;
switch (G__645145) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args645143.length)].join('')));

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
var n__25114__auto___645150 = n;
var x_645151 = (0);
while(true){
if((x_645151 < n__25114__auto___645150)){
(a[x_645151] = (0));

var G__645152 = (x_645151 + (1));
x_645151 = G__645152;
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

var G__645153 = (i + (1));
i = G__645153;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async645157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async645157 = (function (alt_flag,flag,meta645158){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta645158 = meta645158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async645157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_645159,meta645158__$1){
var self__ = this;
var _645159__$1 = this;
return (new cljs.core.async.t_cljs$core$async645157(self__.alt_flag,self__.flag,meta645158__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async645157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_645159){
var self__ = this;
var _645159__$1 = this;
return self__.meta645158;
});})(flag))
;

cljs.core.async.t_cljs$core$async645157.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async645157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async645157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async645157.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta645158","meta645158",-642055080,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async645157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async645157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async645157";

cljs.core.async.t_cljs$core$async645157.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async645157");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async645157 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async645157(alt_flag__$1,flag__$1,meta645158){
return (new cljs.core.async.t_cljs$core$async645157(alt_flag__$1,flag__$1,meta645158));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async645157(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async645163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async645163 = (function (alt_handler,flag,cb,meta645164){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta645164 = meta645164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async645163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_645165,meta645164__$1){
var self__ = this;
var _645165__$1 = this;
return (new cljs.core.async.t_cljs$core$async645163(self__.alt_handler,self__.flag,self__.cb,meta645164__$1));
});

cljs.core.async.t_cljs$core$async645163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_645165){
var self__ = this;
var _645165__$1 = this;
return self__.meta645164;
});

cljs.core.async.t_cljs$core$async645163.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async645163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async645163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async645163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta645164","meta645164",1729900022,null)], null);
});

cljs.core.async.t_cljs$core$async645163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async645163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async645163";

cljs.core.async.t_cljs$core$async645163.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async645163");
});

cljs.core.async.__GT_t_cljs$core$async645163 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async645163(alt_handler__$1,flag__$1,cb__$1,meta645164){
return (new cljs.core.async.t_cljs$core$async645163(alt_handler__$1,flag__$1,cb__$1,meta645164));
});

}

return (new cljs.core.async.t_cljs$core$async645163(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__645166_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__645166_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__645167_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__645167_SHARP_,port], null));
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
var G__645168 = (i + (1));
i = G__645168;
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
var len__25269__auto___645174 = arguments.length;
var i__25270__auto___645175 = (0);
while(true){
if((i__25270__auto___645175 < len__25269__auto___645174)){
args__25276__auto__.push((arguments[i__25270__auto___645175]));

var G__645176 = (i__25270__auto___645175 + (1));
i__25270__auto___645175 = G__645176;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((1) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25277__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__645171){
var map__645172 = p__645171;
var map__645172__$1 = ((((!((map__645172 == null)))?((((map__645172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__645172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__645172):map__645172);
var opts = map__645172__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq645169){
var G__645170 = cljs.core.first.call(null,seq645169);
var seq645169__$1 = cljs.core.next.call(null,seq645169);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__645170,seq645169__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args645177 = [];
var len__25269__auto___645227 = arguments.length;
var i__25270__auto___645228 = (0);
while(true){
if((i__25270__auto___645228 < len__25269__auto___645227)){
args645177.push((arguments[i__25270__auto___645228]));

var G__645229 = (i__25270__auto___645228 + (1));
i__25270__auto___645228 = G__645229;
continue;
} else {
}
break;
}

var G__645179 = args645177.length;
switch (G__645179) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args645177.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29846__auto___645231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___645231){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___645231){
return (function (state_645203){
var state_val_645204 = (state_645203[(1)]);
if((state_val_645204 === (7))){
var inst_645199 = (state_645203[(2)]);
var state_645203__$1 = state_645203;
var statearr_645205_645232 = state_645203__$1;
(statearr_645205_645232[(2)] = inst_645199);

(statearr_645205_645232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645204 === (1))){
var state_645203__$1 = state_645203;
var statearr_645206_645233 = state_645203__$1;
(statearr_645206_645233[(2)] = null);

(statearr_645206_645233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645204 === (4))){
var inst_645182 = (state_645203[(7)]);
var inst_645182__$1 = (state_645203[(2)]);
var inst_645183 = (inst_645182__$1 == null);
var state_645203__$1 = (function (){var statearr_645207 = state_645203;
(statearr_645207[(7)] = inst_645182__$1);

return statearr_645207;
})();
if(cljs.core.truth_(inst_645183)){
var statearr_645208_645234 = state_645203__$1;
(statearr_645208_645234[(1)] = (5));

} else {
var statearr_645209_645235 = state_645203__$1;
(statearr_645209_645235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645204 === (13))){
var state_645203__$1 = state_645203;
var statearr_645210_645236 = state_645203__$1;
(statearr_645210_645236[(2)] = null);

(statearr_645210_645236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645204 === (6))){
var inst_645182 = (state_645203[(7)]);
var state_645203__$1 = state_645203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_645203__$1,(11),to,inst_645182);
} else {
if((state_val_645204 === (3))){
var inst_645201 = (state_645203[(2)]);
var state_645203__$1 = state_645203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_645203__$1,inst_645201);
} else {
if((state_val_645204 === (12))){
var state_645203__$1 = state_645203;
var statearr_645211_645237 = state_645203__$1;
(statearr_645211_645237[(2)] = null);

(statearr_645211_645237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645204 === (2))){
var state_645203__$1 = state_645203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_645203__$1,(4),from);
} else {
if((state_val_645204 === (11))){
var inst_645192 = (state_645203[(2)]);
var state_645203__$1 = state_645203;
if(cljs.core.truth_(inst_645192)){
var statearr_645212_645238 = state_645203__$1;
(statearr_645212_645238[(1)] = (12));

} else {
var statearr_645213_645239 = state_645203__$1;
(statearr_645213_645239[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645204 === (9))){
var state_645203__$1 = state_645203;
var statearr_645214_645240 = state_645203__$1;
(statearr_645214_645240[(2)] = null);

(statearr_645214_645240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645204 === (5))){
var state_645203__$1 = state_645203;
if(cljs.core.truth_(close_QMARK_)){
var statearr_645215_645241 = state_645203__$1;
(statearr_645215_645241[(1)] = (8));

} else {
var statearr_645216_645242 = state_645203__$1;
(statearr_645216_645242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645204 === (14))){
var inst_645197 = (state_645203[(2)]);
var state_645203__$1 = state_645203;
var statearr_645217_645243 = state_645203__$1;
(statearr_645217_645243[(2)] = inst_645197);

(statearr_645217_645243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645204 === (10))){
var inst_645189 = (state_645203[(2)]);
var state_645203__$1 = state_645203;
var statearr_645218_645244 = state_645203__$1;
(statearr_645218_645244[(2)] = inst_645189);

(statearr_645218_645244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645204 === (8))){
var inst_645186 = cljs.core.async.close_BANG_.call(null,to);
var state_645203__$1 = state_645203;
var statearr_645219_645245 = state_645203__$1;
(statearr_645219_645245[(2)] = inst_645186);

(statearr_645219_645245[(1)] = (10));


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
});})(c__29846__auto___645231))
;
return ((function (switch__29734__auto__,c__29846__auto___645231){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_645223 = [null,null,null,null,null,null,null,null];
(statearr_645223[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_645223[(1)] = (1));

return statearr_645223;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_645203){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_645203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e645224){if((e645224 instanceof Object)){
var ex__29738__auto__ = e645224;
var statearr_645225_645246 = state_645203;
(statearr_645225_645246[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_645203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e645224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__645247 = state_645203;
state_645203 = G__645247;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_645203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_645203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___645231))
})();
var state__29848__auto__ = (function (){var statearr_645226 = f__29847__auto__.call(null);
(statearr_645226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___645231);

return statearr_645226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___645231))
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
return (function (p__645431){
var vec__645432 = p__645431;
var v = cljs.core.nth.call(null,vec__645432,(0),null);
var p = cljs.core.nth.call(null,vec__645432,(1),null);
var job = vec__645432;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29846__auto___645614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___645614,res,vec__645432,v,p,job,jobs,results){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___645614,res,vec__645432,v,p,job,jobs,results){
return (function (state_645437){
var state_val_645438 = (state_645437[(1)]);
if((state_val_645438 === (1))){
var state_645437__$1 = state_645437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_645437__$1,(2),res,v);
} else {
if((state_val_645438 === (2))){
var inst_645434 = (state_645437[(2)]);
var inst_645435 = cljs.core.async.close_BANG_.call(null,res);
var state_645437__$1 = (function (){var statearr_645439 = state_645437;
(statearr_645439[(7)] = inst_645434);

return statearr_645439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_645437__$1,inst_645435);
} else {
return null;
}
}
});})(c__29846__auto___645614,res,vec__645432,v,p,job,jobs,results))
;
return ((function (switch__29734__auto__,c__29846__auto___645614,res,vec__645432,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0 = (function (){
var statearr_645443 = [null,null,null,null,null,null,null,null];
(statearr_645443[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__);

(statearr_645443[(1)] = (1));

return statearr_645443;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1 = (function (state_645437){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_645437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e645444){if((e645444 instanceof Object)){
var ex__29738__auto__ = e645444;
var statearr_645445_645615 = state_645437;
(statearr_645445_645615[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_645437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e645444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__645616 = state_645437;
state_645437 = G__645616;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = function(state_645437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1.call(this,state_645437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___645614,res,vec__645432,v,p,job,jobs,results))
})();
var state__29848__auto__ = (function (){var statearr_645446 = f__29847__auto__.call(null);
(statearr_645446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___645614);

return statearr_645446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___645614,res,vec__645432,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__645447){
var vec__645448 = p__645447;
var v = cljs.core.nth.call(null,vec__645448,(0),null);
var p = cljs.core.nth.call(null,vec__645448,(1),null);
var job = vec__645448;
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
var n__25114__auto___645617 = n;
var __645618 = (0);
while(true){
if((__645618 < n__25114__auto___645617)){
var G__645449_645619 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__645449_645619) {
case "compute":
var c__29846__auto___645621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__645618,c__29846__auto___645621,G__645449_645619,n__25114__auto___645617,jobs,results,process,async){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (__645618,c__29846__auto___645621,G__645449_645619,n__25114__auto___645617,jobs,results,process,async){
return (function (state_645462){
var state_val_645463 = (state_645462[(1)]);
if((state_val_645463 === (1))){
var state_645462__$1 = state_645462;
var statearr_645464_645622 = state_645462__$1;
(statearr_645464_645622[(2)] = null);

(statearr_645464_645622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645463 === (2))){
var state_645462__$1 = state_645462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_645462__$1,(4),jobs);
} else {
if((state_val_645463 === (3))){
var inst_645460 = (state_645462[(2)]);
var state_645462__$1 = state_645462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_645462__$1,inst_645460);
} else {
if((state_val_645463 === (4))){
var inst_645452 = (state_645462[(2)]);
var inst_645453 = process.call(null,inst_645452);
var state_645462__$1 = state_645462;
if(cljs.core.truth_(inst_645453)){
var statearr_645465_645623 = state_645462__$1;
(statearr_645465_645623[(1)] = (5));

} else {
var statearr_645466_645624 = state_645462__$1;
(statearr_645466_645624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645463 === (5))){
var state_645462__$1 = state_645462;
var statearr_645467_645625 = state_645462__$1;
(statearr_645467_645625[(2)] = null);

(statearr_645467_645625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645463 === (6))){
var state_645462__$1 = state_645462;
var statearr_645468_645626 = state_645462__$1;
(statearr_645468_645626[(2)] = null);

(statearr_645468_645626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645463 === (7))){
var inst_645458 = (state_645462[(2)]);
var state_645462__$1 = state_645462;
var statearr_645469_645627 = state_645462__$1;
(statearr_645469_645627[(2)] = inst_645458);

(statearr_645469_645627[(1)] = (3));


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
});})(__645618,c__29846__auto___645621,G__645449_645619,n__25114__auto___645617,jobs,results,process,async))
;
return ((function (__645618,switch__29734__auto__,c__29846__auto___645621,G__645449_645619,n__25114__auto___645617,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0 = (function (){
var statearr_645473 = [null,null,null,null,null,null,null];
(statearr_645473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__);

(statearr_645473[(1)] = (1));

return statearr_645473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1 = (function (state_645462){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_645462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e645474){if((e645474 instanceof Object)){
var ex__29738__auto__ = e645474;
var statearr_645475_645628 = state_645462;
(statearr_645475_645628[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_645462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e645474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__645629 = state_645462;
state_645462 = G__645629;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = function(state_645462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1.call(this,state_645462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__;
})()
;})(__645618,switch__29734__auto__,c__29846__auto___645621,G__645449_645619,n__25114__auto___645617,jobs,results,process,async))
})();
var state__29848__auto__ = (function (){var statearr_645476 = f__29847__auto__.call(null);
(statearr_645476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___645621);

return statearr_645476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(__645618,c__29846__auto___645621,G__645449_645619,n__25114__auto___645617,jobs,results,process,async))
);


break;
case "async":
var c__29846__auto___645630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__645618,c__29846__auto___645630,G__645449_645619,n__25114__auto___645617,jobs,results,process,async){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (__645618,c__29846__auto___645630,G__645449_645619,n__25114__auto___645617,jobs,results,process,async){
return (function (state_645489){
var state_val_645490 = (state_645489[(1)]);
if((state_val_645490 === (1))){
var state_645489__$1 = state_645489;
var statearr_645491_645631 = state_645489__$1;
(statearr_645491_645631[(2)] = null);

(statearr_645491_645631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645490 === (2))){
var state_645489__$1 = state_645489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_645489__$1,(4),jobs);
} else {
if((state_val_645490 === (3))){
var inst_645487 = (state_645489[(2)]);
var state_645489__$1 = state_645489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_645489__$1,inst_645487);
} else {
if((state_val_645490 === (4))){
var inst_645479 = (state_645489[(2)]);
var inst_645480 = async.call(null,inst_645479);
var state_645489__$1 = state_645489;
if(cljs.core.truth_(inst_645480)){
var statearr_645492_645632 = state_645489__$1;
(statearr_645492_645632[(1)] = (5));

} else {
var statearr_645493_645633 = state_645489__$1;
(statearr_645493_645633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645490 === (5))){
var state_645489__$1 = state_645489;
var statearr_645494_645634 = state_645489__$1;
(statearr_645494_645634[(2)] = null);

(statearr_645494_645634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645490 === (6))){
var state_645489__$1 = state_645489;
var statearr_645495_645635 = state_645489__$1;
(statearr_645495_645635[(2)] = null);

(statearr_645495_645635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645490 === (7))){
var inst_645485 = (state_645489[(2)]);
var state_645489__$1 = state_645489;
var statearr_645496_645636 = state_645489__$1;
(statearr_645496_645636[(2)] = inst_645485);

(statearr_645496_645636[(1)] = (3));


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
});})(__645618,c__29846__auto___645630,G__645449_645619,n__25114__auto___645617,jobs,results,process,async))
;
return ((function (__645618,switch__29734__auto__,c__29846__auto___645630,G__645449_645619,n__25114__auto___645617,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0 = (function (){
var statearr_645500 = [null,null,null,null,null,null,null];
(statearr_645500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__);

(statearr_645500[(1)] = (1));

return statearr_645500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1 = (function (state_645489){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_645489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e645501){if((e645501 instanceof Object)){
var ex__29738__auto__ = e645501;
var statearr_645502_645637 = state_645489;
(statearr_645502_645637[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_645489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e645501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__645638 = state_645489;
state_645489 = G__645638;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = function(state_645489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1.call(this,state_645489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__;
})()
;})(__645618,switch__29734__auto__,c__29846__auto___645630,G__645449_645619,n__25114__auto___645617,jobs,results,process,async))
})();
var state__29848__auto__ = (function (){var statearr_645503 = f__29847__auto__.call(null);
(statearr_645503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___645630);

return statearr_645503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(__645618,c__29846__auto___645630,G__645449_645619,n__25114__auto___645617,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__645639 = (__645618 + (1));
__645618 = G__645639;
continue;
} else {
}
break;
}

var c__29846__auto___645640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___645640,jobs,results,process,async){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___645640,jobs,results,process,async){
return (function (state_645525){
var state_val_645526 = (state_645525[(1)]);
if((state_val_645526 === (1))){
var state_645525__$1 = state_645525;
var statearr_645527_645641 = state_645525__$1;
(statearr_645527_645641[(2)] = null);

(statearr_645527_645641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645526 === (2))){
var state_645525__$1 = state_645525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_645525__$1,(4),from);
} else {
if((state_val_645526 === (3))){
var inst_645523 = (state_645525[(2)]);
var state_645525__$1 = state_645525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_645525__$1,inst_645523);
} else {
if((state_val_645526 === (4))){
var inst_645506 = (state_645525[(7)]);
var inst_645506__$1 = (state_645525[(2)]);
var inst_645507 = (inst_645506__$1 == null);
var state_645525__$1 = (function (){var statearr_645528 = state_645525;
(statearr_645528[(7)] = inst_645506__$1);

return statearr_645528;
})();
if(cljs.core.truth_(inst_645507)){
var statearr_645529_645642 = state_645525__$1;
(statearr_645529_645642[(1)] = (5));

} else {
var statearr_645530_645643 = state_645525__$1;
(statearr_645530_645643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645526 === (5))){
var inst_645509 = cljs.core.async.close_BANG_.call(null,jobs);
var state_645525__$1 = state_645525;
var statearr_645531_645644 = state_645525__$1;
(statearr_645531_645644[(2)] = inst_645509);

(statearr_645531_645644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645526 === (6))){
var inst_645506 = (state_645525[(7)]);
var inst_645511 = (state_645525[(8)]);
var inst_645511__$1 = cljs.core.async.chan.call(null,(1));
var inst_645512 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_645513 = [inst_645506,inst_645511__$1];
var inst_645514 = (new cljs.core.PersistentVector(null,2,(5),inst_645512,inst_645513,null));
var state_645525__$1 = (function (){var statearr_645532 = state_645525;
(statearr_645532[(8)] = inst_645511__$1);

return statearr_645532;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_645525__$1,(8),jobs,inst_645514);
} else {
if((state_val_645526 === (7))){
var inst_645521 = (state_645525[(2)]);
var state_645525__$1 = state_645525;
var statearr_645533_645645 = state_645525__$1;
(statearr_645533_645645[(2)] = inst_645521);

(statearr_645533_645645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645526 === (8))){
var inst_645511 = (state_645525[(8)]);
var inst_645516 = (state_645525[(2)]);
var state_645525__$1 = (function (){var statearr_645534 = state_645525;
(statearr_645534[(9)] = inst_645516);

return statearr_645534;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_645525__$1,(9),results,inst_645511);
} else {
if((state_val_645526 === (9))){
var inst_645518 = (state_645525[(2)]);
var state_645525__$1 = (function (){var statearr_645535 = state_645525;
(statearr_645535[(10)] = inst_645518);

return statearr_645535;
})();
var statearr_645536_645646 = state_645525__$1;
(statearr_645536_645646[(2)] = null);

(statearr_645536_645646[(1)] = (2));


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
});})(c__29846__auto___645640,jobs,results,process,async))
;
return ((function (switch__29734__auto__,c__29846__auto___645640,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0 = (function (){
var statearr_645540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_645540[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__);

(statearr_645540[(1)] = (1));

return statearr_645540;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1 = (function (state_645525){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_645525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e645541){if((e645541 instanceof Object)){
var ex__29738__auto__ = e645541;
var statearr_645542_645647 = state_645525;
(statearr_645542_645647[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_645525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e645541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__645648 = state_645525;
state_645525 = G__645648;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = function(state_645525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1.call(this,state_645525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___645640,jobs,results,process,async))
})();
var state__29848__auto__ = (function (){var statearr_645543 = f__29847__auto__.call(null);
(statearr_645543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___645640);

return statearr_645543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___645640,jobs,results,process,async))
);


var c__29846__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto__,jobs,results,process,async){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto__,jobs,results,process,async){
return (function (state_645581){
var state_val_645582 = (state_645581[(1)]);
if((state_val_645582 === (7))){
var inst_645577 = (state_645581[(2)]);
var state_645581__$1 = state_645581;
var statearr_645583_645649 = state_645581__$1;
(statearr_645583_645649[(2)] = inst_645577);

(statearr_645583_645649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (20))){
var state_645581__$1 = state_645581;
var statearr_645584_645650 = state_645581__$1;
(statearr_645584_645650[(2)] = null);

(statearr_645584_645650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (1))){
var state_645581__$1 = state_645581;
var statearr_645585_645651 = state_645581__$1;
(statearr_645585_645651[(2)] = null);

(statearr_645585_645651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (4))){
var inst_645546 = (state_645581[(7)]);
var inst_645546__$1 = (state_645581[(2)]);
var inst_645547 = (inst_645546__$1 == null);
var state_645581__$1 = (function (){var statearr_645586 = state_645581;
(statearr_645586[(7)] = inst_645546__$1);

return statearr_645586;
})();
if(cljs.core.truth_(inst_645547)){
var statearr_645587_645652 = state_645581__$1;
(statearr_645587_645652[(1)] = (5));

} else {
var statearr_645588_645653 = state_645581__$1;
(statearr_645588_645653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (15))){
var inst_645559 = (state_645581[(8)]);
var state_645581__$1 = state_645581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_645581__$1,(18),to,inst_645559);
} else {
if((state_val_645582 === (21))){
var inst_645572 = (state_645581[(2)]);
var state_645581__$1 = state_645581;
var statearr_645589_645654 = state_645581__$1;
(statearr_645589_645654[(2)] = inst_645572);

(statearr_645589_645654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (13))){
var inst_645574 = (state_645581[(2)]);
var state_645581__$1 = (function (){var statearr_645590 = state_645581;
(statearr_645590[(9)] = inst_645574);

return statearr_645590;
})();
var statearr_645591_645655 = state_645581__$1;
(statearr_645591_645655[(2)] = null);

(statearr_645591_645655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (6))){
var inst_645546 = (state_645581[(7)]);
var state_645581__$1 = state_645581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_645581__$1,(11),inst_645546);
} else {
if((state_val_645582 === (17))){
var inst_645567 = (state_645581[(2)]);
var state_645581__$1 = state_645581;
if(cljs.core.truth_(inst_645567)){
var statearr_645592_645656 = state_645581__$1;
(statearr_645592_645656[(1)] = (19));

} else {
var statearr_645593_645657 = state_645581__$1;
(statearr_645593_645657[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (3))){
var inst_645579 = (state_645581[(2)]);
var state_645581__$1 = state_645581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_645581__$1,inst_645579);
} else {
if((state_val_645582 === (12))){
var inst_645556 = (state_645581[(10)]);
var state_645581__$1 = state_645581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_645581__$1,(14),inst_645556);
} else {
if((state_val_645582 === (2))){
var state_645581__$1 = state_645581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_645581__$1,(4),results);
} else {
if((state_val_645582 === (19))){
var state_645581__$1 = state_645581;
var statearr_645594_645658 = state_645581__$1;
(statearr_645594_645658[(2)] = null);

(statearr_645594_645658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (11))){
var inst_645556 = (state_645581[(2)]);
var state_645581__$1 = (function (){var statearr_645595 = state_645581;
(statearr_645595[(10)] = inst_645556);

return statearr_645595;
})();
var statearr_645596_645659 = state_645581__$1;
(statearr_645596_645659[(2)] = null);

(statearr_645596_645659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (9))){
var state_645581__$1 = state_645581;
var statearr_645597_645660 = state_645581__$1;
(statearr_645597_645660[(2)] = null);

(statearr_645597_645660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (5))){
var state_645581__$1 = state_645581;
if(cljs.core.truth_(close_QMARK_)){
var statearr_645598_645661 = state_645581__$1;
(statearr_645598_645661[(1)] = (8));

} else {
var statearr_645599_645662 = state_645581__$1;
(statearr_645599_645662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (14))){
var inst_645561 = (state_645581[(11)]);
var inst_645559 = (state_645581[(8)]);
var inst_645559__$1 = (state_645581[(2)]);
var inst_645560 = (inst_645559__$1 == null);
var inst_645561__$1 = cljs.core.not.call(null,inst_645560);
var state_645581__$1 = (function (){var statearr_645600 = state_645581;
(statearr_645600[(11)] = inst_645561__$1);

(statearr_645600[(8)] = inst_645559__$1);

return statearr_645600;
})();
if(inst_645561__$1){
var statearr_645601_645663 = state_645581__$1;
(statearr_645601_645663[(1)] = (15));

} else {
var statearr_645602_645664 = state_645581__$1;
(statearr_645602_645664[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (16))){
var inst_645561 = (state_645581[(11)]);
var state_645581__$1 = state_645581;
var statearr_645603_645665 = state_645581__$1;
(statearr_645603_645665[(2)] = inst_645561);

(statearr_645603_645665[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (10))){
var inst_645553 = (state_645581[(2)]);
var state_645581__$1 = state_645581;
var statearr_645604_645666 = state_645581__$1;
(statearr_645604_645666[(2)] = inst_645553);

(statearr_645604_645666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (18))){
var inst_645564 = (state_645581[(2)]);
var state_645581__$1 = state_645581;
var statearr_645605_645667 = state_645581__$1;
(statearr_645605_645667[(2)] = inst_645564);

(statearr_645605_645667[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645582 === (8))){
var inst_645550 = cljs.core.async.close_BANG_.call(null,to);
var state_645581__$1 = state_645581;
var statearr_645606_645668 = state_645581__$1;
(statearr_645606_645668[(2)] = inst_645550);

(statearr_645606_645668[(1)] = (10));


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
var statearr_645610 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_645610[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__);

(statearr_645610[(1)] = (1));

return statearr_645610;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1 = (function (state_645581){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_645581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e645611){if((e645611 instanceof Object)){
var ex__29738__auto__ = e645611;
var statearr_645612_645669 = state_645581;
(statearr_645612_645669[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_645581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e645611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__645670 = state_645581;
state_645581 = G__645670;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__ = function(state_645581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1.call(this,state_645581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto__,jobs,results,process,async))
})();
var state__29848__auto__ = (function (){var statearr_645613 = f__29847__auto__.call(null);
(statearr_645613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto__);

return statearr_645613;
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
var args645671 = [];
var len__25269__auto___645674 = arguments.length;
var i__25270__auto___645675 = (0);
while(true){
if((i__25270__auto___645675 < len__25269__auto___645674)){
args645671.push((arguments[i__25270__auto___645675]));

var G__645676 = (i__25270__auto___645675 + (1));
i__25270__auto___645675 = G__645676;
continue;
} else {
}
break;
}

var G__645673 = args645671.length;
switch (G__645673) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args645671.length)].join('')));

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
var args645678 = [];
var len__25269__auto___645681 = arguments.length;
var i__25270__auto___645682 = (0);
while(true){
if((i__25270__auto___645682 < len__25269__auto___645681)){
args645678.push((arguments[i__25270__auto___645682]));

var G__645683 = (i__25270__auto___645682 + (1));
i__25270__auto___645682 = G__645683;
continue;
} else {
}
break;
}

var G__645680 = args645678.length;
switch (G__645680) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args645678.length)].join('')));

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
var args645685 = [];
var len__25269__auto___645738 = arguments.length;
var i__25270__auto___645739 = (0);
while(true){
if((i__25270__auto___645739 < len__25269__auto___645738)){
args645685.push((arguments[i__25270__auto___645739]));

var G__645740 = (i__25270__auto___645739 + (1));
i__25270__auto___645739 = G__645740;
continue;
} else {
}
break;
}

var G__645687 = args645685.length;
switch (G__645687) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args645685.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29846__auto___645742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___645742,tc,fc){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___645742,tc,fc){
return (function (state_645713){
var state_val_645714 = (state_645713[(1)]);
if((state_val_645714 === (7))){
var inst_645709 = (state_645713[(2)]);
var state_645713__$1 = state_645713;
var statearr_645715_645743 = state_645713__$1;
(statearr_645715_645743[(2)] = inst_645709);

(statearr_645715_645743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645714 === (1))){
var state_645713__$1 = state_645713;
var statearr_645716_645744 = state_645713__$1;
(statearr_645716_645744[(2)] = null);

(statearr_645716_645744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645714 === (4))){
var inst_645690 = (state_645713[(7)]);
var inst_645690__$1 = (state_645713[(2)]);
var inst_645691 = (inst_645690__$1 == null);
var state_645713__$1 = (function (){var statearr_645717 = state_645713;
(statearr_645717[(7)] = inst_645690__$1);

return statearr_645717;
})();
if(cljs.core.truth_(inst_645691)){
var statearr_645718_645745 = state_645713__$1;
(statearr_645718_645745[(1)] = (5));

} else {
var statearr_645719_645746 = state_645713__$1;
(statearr_645719_645746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645714 === (13))){
var state_645713__$1 = state_645713;
var statearr_645720_645747 = state_645713__$1;
(statearr_645720_645747[(2)] = null);

(statearr_645720_645747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645714 === (6))){
var inst_645690 = (state_645713[(7)]);
var inst_645696 = p.call(null,inst_645690);
var state_645713__$1 = state_645713;
if(cljs.core.truth_(inst_645696)){
var statearr_645721_645748 = state_645713__$1;
(statearr_645721_645748[(1)] = (9));

} else {
var statearr_645722_645749 = state_645713__$1;
(statearr_645722_645749[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645714 === (3))){
var inst_645711 = (state_645713[(2)]);
var state_645713__$1 = state_645713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_645713__$1,inst_645711);
} else {
if((state_val_645714 === (12))){
var state_645713__$1 = state_645713;
var statearr_645723_645750 = state_645713__$1;
(statearr_645723_645750[(2)] = null);

(statearr_645723_645750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645714 === (2))){
var state_645713__$1 = state_645713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_645713__$1,(4),ch);
} else {
if((state_val_645714 === (11))){
var inst_645690 = (state_645713[(7)]);
var inst_645700 = (state_645713[(2)]);
var state_645713__$1 = state_645713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_645713__$1,(8),inst_645700,inst_645690);
} else {
if((state_val_645714 === (9))){
var state_645713__$1 = state_645713;
var statearr_645724_645751 = state_645713__$1;
(statearr_645724_645751[(2)] = tc);

(statearr_645724_645751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645714 === (5))){
var inst_645693 = cljs.core.async.close_BANG_.call(null,tc);
var inst_645694 = cljs.core.async.close_BANG_.call(null,fc);
var state_645713__$1 = (function (){var statearr_645725 = state_645713;
(statearr_645725[(8)] = inst_645693);

return statearr_645725;
})();
var statearr_645726_645752 = state_645713__$1;
(statearr_645726_645752[(2)] = inst_645694);

(statearr_645726_645752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645714 === (14))){
var inst_645707 = (state_645713[(2)]);
var state_645713__$1 = state_645713;
var statearr_645727_645753 = state_645713__$1;
(statearr_645727_645753[(2)] = inst_645707);

(statearr_645727_645753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645714 === (10))){
var state_645713__$1 = state_645713;
var statearr_645728_645754 = state_645713__$1;
(statearr_645728_645754[(2)] = fc);

(statearr_645728_645754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645714 === (8))){
var inst_645702 = (state_645713[(2)]);
var state_645713__$1 = state_645713;
if(cljs.core.truth_(inst_645702)){
var statearr_645729_645755 = state_645713__$1;
(statearr_645729_645755[(1)] = (12));

} else {
var statearr_645730_645756 = state_645713__$1;
(statearr_645730_645756[(1)] = (13));

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
});})(c__29846__auto___645742,tc,fc))
;
return ((function (switch__29734__auto__,c__29846__auto___645742,tc,fc){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_645734 = [null,null,null,null,null,null,null,null,null];
(statearr_645734[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_645734[(1)] = (1));

return statearr_645734;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_645713){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_645713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e645735){if((e645735 instanceof Object)){
var ex__29738__auto__ = e645735;
var statearr_645736_645757 = state_645713;
(statearr_645736_645757[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_645713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e645735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__645758 = state_645713;
state_645713 = G__645758;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_645713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_645713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___645742,tc,fc))
})();
var state__29848__auto__ = (function (){var statearr_645737 = f__29847__auto__.call(null);
(statearr_645737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___645742);

return statearr_645737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___645742,tc,fc))
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
return (function (state_645805){
var state_val_645806 = (state_645805[(1)]);
if((state_val_645806 === (1))){
var inst_645791 = init;
var state_645805__$1 = (function (){var statearr_645807 = state_645805;
(statearr_645807[(7)] = inst_645791);

return statearr_645807;
})();
var statearr_645808_645823 = state_645805__$1;
(statearr_645808_645823[(2)] = null);

(statearr_645808_645823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645806 === (2))){
var state_645805__$1 = state_645805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_645805__$1,(4),ch);
} else {
if((state_val_645806 === (3))){
var inst_645803 = (state_645805[(2)]);
var state_645805__$1 = state_645805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_645805__$1,inst_645803);
} else {
if((state_val_645806 === (4))){
var inst_645794 = (state_645805[(8)]);
var inst_645794__$1 = (state_645805[(2)]);
var inst_645795 = (inst_645794__$1 == null);
var state_645805__$1 = (function (){var statearr_645809 = state_645805;
(statearr_645809[(8)] = inst_645794__$1);

return statearr_645809;
})();
if(cljs.core.truth_(inst_645795)){
var statearr_645810_645824 = state_645805__$1;
(statearr_645810_645824[(1)] = (5));

} else {
var statearr_645811_645825 = state_645805__$1;
(statearr_645811_645825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645806 === (5))){
var inst_645791 = (state_645805[(7)]);
var state_645805__$1 = state_645805;
var statearr_645812_645826 = state_645805__$1;
(statearr_645812_645826[(2)] = inst_645791);

(statearr_645812_645826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645806 === (6))){
var inst_645791 = (state_645805[(7)]);
var inst_645794 = (state_645805[(8)]);
var inst_645798 = f.call(null,inst_645791,inst_645794);
var inst_645791__$1 = inst_645798;
var state_645805__$1 = (function (){var statearr_645813 = state_645805;
(statearr_645813[(7)] = inst_645791__$1);

return statearr_645813;
})();
var statearr_645814_645827 = state_645805__$1;
(statearr_645814_645827[(2)] = null);

(statearr_645814_645827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645806 === (7))){
var inst_645801 = (state_645805[(2)]);
var state_645805__$1 = state_645805;
var statearr_645815_645828 = state_645805__$1;
(statearr_645815_645828[(2)] = inst_645801);

(statearr_645815_645828[(1)] = (3));


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
var statearr_645819 = [null,null,null,null,null,null,null,null,null];
(statearr_645819[(0)] = cljs$core$async$reduce_$_state_machine__29735__auto__);

(statearr_645819[(1)] = (1));

return statearr_645819;
});
var cljs$core$async$reduce_$_state_machine__29735__auto____1 = (function (state_645805){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_645805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e645820){if((e645820 instanceof Object)){
var ex__29738__auto__ = e645820;
var statearr_645821_645829 = state_645805;
(statearr_645821_645829[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_645805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e645820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__645830 = state_645805;
state_645805 = G__645830;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29735__auto__ = function(state_645805){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29735__auto____1.call(this,state_645805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29735__auto____0;
cljs$core$async$reduce_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29735__auto____1;
return cljs$core$async$reduce_$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto__))
})();
var state__29848__auto__ = (function (){var statearr_645822 = f__29847__auto__.call(null);
(statearr_645822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto__);

return statearr_645822;
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
var args645831 = [];
var len__25269__auto___645883 = arguments.length;
var i__25270__auto___645884 = (0);
while(true){
if((i__25270__auto___645884 < len__25269__auto___645883)){
args645831.push((arguments[i__25270__auto___645884]));

var G__645885 = (i__25270__auto___645884 + (1));
i__25270__auto___645884 = G__645885;
continue;
} else {
}
break;
}

var G__645833 = args645831.length;
switch (G__645833) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args645831.length)].join('')));

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
return (function (state_645858){
var state_val_645859 = (state_645858[(1)]);
if((state_val_645859 === (7))){
var inst_645840 = (state_645858[(2)]);
var state_645858__$1 = state_645858;
var statearr_645860_645887 = state_645858__$1;
(statearr_645860_645887[(2)] = inst_645840);

(statearr_645860_645887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645859 === (1))){
var inst_645834 = cljs.core.seq.call(null,coll);
var inst_645835 = inst_645834;
var state_645858__$1 = (function (){var statearr_645861 = state_645858;
(statearr_645861[(7)] = inst_645835);

return statearr_645861;
})();
var statearr_645862_645888 = state_645858__$1;
(statearr_645862_645888[(2)] = null);

(statearr_645862_645888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645859 === (4))){
var inst_645835 = (state_645858[(7)]);
var inst_645838 = cljs.core.first.call(null,inst_645835);
var state_645858__$1 = state_645858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_645858__$1,(7),ch,inst_645838);
} else {
if((state_val_645859 === (13))){
var inst_645852 = (state_645858[(2)]);
var state_645858__$1 = state_645858;
var statearr_645863_645889 = state_645858__$1;
(statearr_645863_645889[(2)] = inst_645852);

(statearr_645863_645889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645859 === (6))){
var inst_645843 = (state_645858[(2)]);
var state_645858__$1 = state_645858;
if(cljs.core.truth_(inst_645843)){
var statearr_645864_645890 = state_645858__$1;
(statearr_645864_645890[(1)] = (8));

} else {
var statearr_645865_645891 = state_645858__$1;
(statearr_645865_645891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645859 === (3))){
var inst_645856 = (state_645858[(2)]);
var state_645858__$1 = state_645858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_645858__$1,inst_645856);
} else {
if((state_val_645859 === (12))){
var state_645858__$1 = state_645858;
var statearr_645866_645892 = state_645858__$1;
(statearr_645866_645892[(2)] = null);

(statearr_645866_645892[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645859 === (2))){
var inst_645835 = (state_645858[(7)]);
var state_645858__$1 = state_645858;
if(cljs.core.truth_(inst_645835)){
var statearr_645867_645893 = state_645858__$1;
(statearr_645867_645893[(1)] = (4));

} else {
var statearr_645868_645894 = state_645858__$1;
(statearr_645868_645894[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645859 === (11))){
var inst_645849 = cljs.core.async.close_BANG_.call(null,ch);
var state_645858__$1 = state_645858;
var statearr_645869_645895 = state_645858__$1;
(statearr_645869_645895[(2)] = inst_645849);

(statearr_645869_645895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645859 === (9))){
var state_645858__$1 = state_645858;
if(cljs.core.truth_(close_QMARK_)){
var statearr_645870_645896 = state_645858__$1;
(statearr_645870_645896[(1)] = (11));

} else {
var statearr_645871_645897 = state_645858__$1;
(statearr_645871_645897[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645859 === (5))){
var inst_645835 = (state_645858[(7)]);
var state_645858__$1 = state_645858;
var statearr_645872_645898 = state_645858__$1;
(statearr_645872_645898[(2)] = inst_645835);

(statearr_645872_645898[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645859 === (10))){
var inst_645854 = (state_645858[(2)]);
var state_645858__$1 = state_645858;
var statearr_645873_645899 = state_645858__$1;
(statearr_645873_645899[(2)] = inst_645854);

(statearr_645873_645899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_645859 === (8))){
var inst_645835 = (state_645858[(7)]);
var inst_645845 = cljs.core.next.call(null,inst_645835);
var inst_645835__$1 = inst_645845;
var state_645858__$1 = (function (){var statearr_645874 = state_645858;
(statearr_645874[(7)] = inst_645835__$1);

return statearr_645874;
})();
var statearr_645875_645900 = state_645858__$1;
(statearr_645875_645900[(2)] = null);

(statearr_645875_645900[(1)] = (2));


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
var statearr_645879 = [null,null,null,null,null,null,null,null];
(statearr_645879[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_645879[(1)] = (1));

return statearr_645879;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_645858){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_645858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e645880){if((e645880 instanceof Object)){
var ex__29738__auto__ = e645880;
var statearr_645881_645901 = state_645858;
(statearr_645881_645901[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_645858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e645880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__645902 = state_645858;
state_645858 = G__645902;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_645858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_645858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto__))
})();
var state__29848__auto__ = (function (){var statearr_645882 = f__29847__auto__.call(null);
(statearr_645882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto__);

return statearr_645882;
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
if(typeof cljs.core.async.t_cljs$core$async646124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async646124 = (function (mult,ch,cs,meta646125){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta646125 = meta646125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async646124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_646126,meta646125__$1){
var self__ = this;
var _646126__$1 = this;
return (new cljs.core.async.t_cljs$core$async646124(self__.mult,self__.ch,self__.cs,meta646125__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async646124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_646126){
var self__ = this;
var _646126__$1 = this;
return self__.meta646125;
});})(cs))
;

cljs.core.async.t_cljs$core$async646124.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async646124.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async646124.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async646124.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async646124.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async646124.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async646124.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta646125","meta646125",1806150991,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async646124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async646124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async646124";

cljs.core.async.t_cljs$core$async646124.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async646124");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async646124 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async646124(mult__$1,ch__$1,cs__$1,meta646125){
return (new cljs.core.async.t_cljs$core$async646124(mult__$1,ch__$1,cs__$1,meta646125));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async646124(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29846__auto___646345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___646345,cs,m,dchan,dctr,done){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___646345,cs,m,dchan,dctr,done){
return (function (state_646257){
var state_val_646258 = (state_646257[(1)]);
if((state_val_646258 === (7))){
var inst_646253 = (state_646257[(2)]);
var state_646257__$1 = state_646257;
var statearr_646259_646346 = state_646257__$1;
(statearr_646259_646346[(2)] = inst_646253);

(statearr_646259_646346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (20))){
var inst_646158 = (state_646257[(7)]);
var inst_646168 = cljs.core.first.call(null,inst_646158);
var inst_646169 = cljs.core.nth.call(null,inst_646168,(0),null);
var inst_646170 = cljs.core.nth.call(null,inst_646168,(1),null);
var state_646257__$1 = (function (){var statearr_646260 = state_646257;
(statearr_646260[(8)] = inst_646169);

return statearr_646260;
})();
if(cljs.core.truth_(inst_646170)){
var statearr_646261_646347 = state_646257__$1;
(statearr_646261_646347[(1)] = (22));

} else {
var statearr_646262_646348 = state_646257__$1;
(statearr_646262_646348[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (27))){
var inst_646129 = (state_646257[(9)]);
var inst_646198 = (state_646257[(10)]);
var inst_646200 = (state_646257[(11)]);
var inst_646205 = (state_646257[(12)]);
var inst_646205__$1 = cljs.core._nth.call(null,inst_646198,inst_646200);
var inst_646206 = cljs.core.async.put_BANG_.call(null,inst_646205__$1,inst_646129,done);
var state_646257__$1 = (function (){var statearr_646263 = state_646257;
(statearr_646263[(12)] = inst_646205__$1);

return statearr_646263;
})();
if(cljs.core.truth_(inst_646206)){
var statearr_646264_646349 = state_646257__$1;
(statearr_646264_646349[(1)] = (30));

} else {
var statearr_646265_646350 = state_646257__$1;
(statearr_646265_646350[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (1))){
var state_646257__$1 = state_646257;
var statearr_646266_646351 = state_646257__$1;
(statearr_646266_646351[(2)] = null);

(statearr_646266_646351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (24))){
var inst_646158 = (state_646257[(7)]);
var inst_646175 = (state_646257[(2)]);
var inst_646176 = cljs.core.next.call(null,inst_646158);
var inst_646138 = inst_646176;
var inst_646139 = null;
var inst_646140 = (0);
var inst_646141 = (0);
var state_646257__$1 = (function (){var statearr_646267 = state_646257;
(statearr_646267[(13)] = inst_646141);

(statearr_646267[(14)] = inst_646175);

(statearr_646267[(15)] = inst_646139);

(statearr_646267[(16)] = inst_646140);

(statearr_646267[(17)] = inst_646138);

return statearr_646267;
})();
var statearr_646268_646352 = state_646257__$1;
(statearr_646268_646352[(2)] = null);

(statearr_646268_646352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (39))){
var state_646257__$1 = state_646257;
var statearr_646272_646353 = state_646257__$1;
(statearr_646272_646353[(2)] = null);

(statearr_646272_646353[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (4))){
var inst_646129 = (state_646257[(9)]);
var inst_646129__$1 = (state_646257[(2)]);
var inst_646130 = (inst_646129__$1 == null);
var state_646257__$1 = (function (){var statearr_646273 = state_646257;
(statearr_646273[(9)] = inst_646129__$1);

return statearr_646273;
})();
if(cljs.core.truth_(inst_646130)){
var statearr_646274_646354 = state_646257__$1;
(statearr_646274_646354[(1)] = (5));

} else {
var statearr_646275_646355 = state_646257__$1;
(statearr_646275_646355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (15))){
var inst_646141 = (state_646257[(13)]);
var inst_646139 = (state_646257[(15)]);
var inst_646140 = (state_646257[(16)]);
var inst_646138 = (state_646257[(17)]);
var inst_646154 = (state_646257[(2)]);
var inst_646155 = (inst_646141 + (1));
var tmp646269 = inst_646139;
var tmp646270 = inst_646140;
var tmp646271 = inst_646138;
var inst_646138__$1 = tmp646271;
var inst_646139__$1 = tmp646269;
var inst_646140__$1 = tmp646270;
var inst_646141__$1 = inst_646155;
var state_646257__$1 = (function (){var statearr_646276 = state_646257;
(statearr_646276[(13)] = inst_646141__$1);

(statearr_646276[(15)] = inst_646139__$1);

(statearr_646276[(16)] = inst_646140__$1);

(statearr_646276[(17)] = inst_646138__$1);

(statearr_646276[(18)] = inst_646154);

return statearr_646276;
})();
var statearr_646277_646356 = state_646257__$1;
(statearr_646277_646356[(2)] = null);

(statearr_646277_646356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (21))){
var inst_646179 = (state_646257[(2)]);
var state_646257__$1 = state_646257;
var statearr_646281_646357 = state_646257__$1;
(statearr_646281_646357[(2)] = inst_646179);

(statearr_646281_646357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (31))){
var inst_646205 = (state_646257[(12)]);
var inst_646209 = done.call(null,null);
var inst_646210 = cljs.core.async.untap_STAR_.call(null,m,inst_646205);
var state_646257__$1 = (function (){var statearr_646282 = state_646257;
(statearr_646282[(19)] = inst_646209);

return statearr_646282;
})();
var statearr_646283_646358 = state_646257__$1;
(statearr_646283_646358[(2)] = inst_646210);

(statearr_646283_646358[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (32))){
var inst_646199 = (state_646257[(20)]);
var inst_646197 = (state_646257[(21)]);
var inst_646198 = (state_646257[(10)]);
var inst_646200 = (state_646257[(11)]);
var inst_646212 = (state_646257[(2)]);
var inst_646213 = (inst_646200 + (1));
var tmp646278 = inst_646199;
var tmp646279 = inst_646197;
var tmp646280 = inst_646198;
var inst_646197__$1 = tmp646279;
var inst_646198__$1 = tmp646280;
var inst_646199__$1 = tmp646278;
var inst_646200__$1 = inst_646213;
var state_646257__$1 = (function (){var statearr_646284 = state_646257;
(statearr_646284[(22)] = inst_646212);

(statearr_646284[(20)] = inst_646199__$1);

(statearr_646284[(21)] = inst_646197__$1);

(statearr_646284[(10)] = inst_646198__$1);

(statearr_646284[(11)] = inst_646200__$1);

return statearr_646284;
})();
var statearr_646285_646359 = state_646257__$1;
(statearr_646285_646359[(2)] = null);

(statearr_646285_646359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (40))){
var inst_646225 = (state_646257[(23)]);
var inst_646229 = done.call(null,null);
var inst_646230 = cljs.core.async.untap_STAR_.call(null,m,inst_646225);
var state_646257__$1 = (function (){var statearr_646286 = state_646257;
(statearr_646286[(24)] = inst_646229);

return statearr_646286;
})();
var statearr_646287_646360 = state_646257__$1;
(statearr_646287_646360[(2)] = inst_646230);

(statearr_646287_646360[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (33))){
var inst_646216 = (state_646257[(25)]);
var inst_646218 = cljs.core.chunked_seq_QMARK_.call(null,inst_646216);
var state_646257__$1 = state_646257;
if(inst_646218){
var statearr_646288_646361 = state_646257__$1;
(statearr_646288_646361[(1)] = (36));

} else {
var statearr_646289_646362 = state_646257__$1;
(statearr_646289_646362[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (13))){
var inst_646148 = (state_646257[(26)]);
var inst_646151 = cljs.core.async.close_BANG_.call(null,inst_646148);
var state_646257__$1 = state_646257;
var statearr_646290_646363 = state_646257__$1;
(statearr_646290_646363[(2)] = inst_646151);

(statearr_646290_646363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (22))){
var inst_646169 = (state_646257[(8)]);
var inst_646172 = cljs.core.async.close_BANG_.call(null,inst_646169);
var state_646257__$1 = state_646257;
var statearr_646291_646364 = state_646257__$1;
(statearr_646291_646364[(2)] = inst_646172);

(statearr_646291_646364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (36))){
var inst_646216 = (state_646257[(25)]);
var inst_646220 = cljs.core.chunk_first.call(null,inst_646216);
var inst_646221 = cljs.core.chunk_rest.call(null,inst_646216);
var inst_646222 = cljs.core.count.call(null,inst_646220);
var inst_646197 = inst_646221;
var inst_646198 = inst_646220;
var inst_646199 = inst_646222;
var inst_646200 = (0);
var state_646257__$1 = (function (){var statearr_646292 = state_646257;
(statearr_646292[(20)] = inst_646199);

(statearr_646292[(21)] = inst_646197);

(statearr_646292[(10)] = inst_646198);

(statearr_646292[(11)] = inst_646200);

return statearr_646292;
})();
var statearr_646293_646365 = state_646257__$1;
(statearr_646293_646365[(2)] = null);

(statearr_646293_646365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (41))){
var inst_646216 = (state_646257[(25)]);
var inst_646232 = (state_646257[(2)]);
var inst_646233 = cljs.core.next.call(null,inst_646216);
var inst_646197 = inst_646233;
var inst_646198 = null;
var inst_646199 = (0);
var inst_646200 = (0);
var state_646257__$1 = (function (){var statearr_646294 = state_646257;
(statearr_646294[(20)] = inst_646199);

(statearr_646294[(21)] = inst_646197);

(statearr_646294[(10)] = inst_646198);

(statearr_646294[(11)] = inst_646200);

(statearr_646294[(27)] = inst_646232);

return statearr_646294;
})();
var statearr_646295_646366 = state_646257__$1;
(statearr_646295_646366[(2)] = null);

(statearr_646295_646366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (43))){
var state_646257__$1 = state_646257;
var statearr_646296_646367 = state_646257__$1;
(statearr_646296_646367[(2)] = null);

(statearr_646296_646367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (29))){
var inst_646241 = (state_646257[(2)]);
var state_646257__$1 = state_646257;
var statearr_646297_646368 = state_646257__$1;
(statearr_646297_646368[(2)] = inst_646241);

(statearr_646297_646368[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (44))){
var inst_646250 = (state_646257[(2)]);
var state_646257__$1 = (function (){var statearr_646298 = state_646257;
(statearr_646298[(28)] = inst_646250);

return statearr_646298;
})();
var statearr_646299_646369 = state_646257__$1;
(statearr_646299_646369[(2)] = null);

(statearr_646299_646369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (6))){
var inst_646189 = (state_646257[(29)]);
var inst_646188 = cljs.core.deref.call(null,cs);
var inst_646189__$1 = cljs.core.keys.call(null,inst_646188);
var inst_646190 = cljs.core.count.call(null,inst_646189__$1);
var inst_646191 = cljs.core.reset_BANG_.call(null,dctr,inst_646190);
var inst_646196 = cljs.core.seq.call(null,inst_646189__$1);
var inst_646197 = inst_646196;
var inst_646198 = null;
var inst_646199 = (0);
var inst_646200 = (0);
var state_646257__$1 = (function (){var statearr_646300 = state_646257;
(statearr_646300[(29)] = inst_646189__$1);

(statearr_646300[(20)] = inst_646199);

(statearr_646300[(21)] = inst_646197);

(statearr_646300[(10)] = inst_646198);

(statearr_646300[(30)] = inst_646191);

(statearr_646300[(11)] = inst_646200);

return statearr_646300;
})();
var statearr_646301_646370 = state_646257__$1;
(statearr_646301_646370[(2)] = null);

(statearr_646301_646370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (28))){
var inst_646197 = (state_646257[(21)]);
var inst_646216 = (state_646257[(25)]);
var inst_646216__$1 = cljs.core.seq.call(null,inst_646197);
var state_646257__$1 = (function (){var statearr_646302 = state_646257;
(statearr_646302[(25)] = inst_646216__$1);

return statearr_646302;
})();
if(inst_646216__$1){
var statearr_646303_646371 = state_646257__$1;
(statearr_646303_646371[(1)] = (33));

} else {
var statearr_646304_646372 = state_646257__$1;
(statearr_646304_646372[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (25))){
var inst_646199 = (state_646257[(20)]);
var inst_646200 = (state_646257[(11)]);
var inst_646202 = (inst_646200 < inst_646199);
var inst_646203 = inst_646202;
var state_646257__$1 = state_646257;
if(cljs.core.truth_(inst_646203)){
var statearr_646305_646373 = state_646257__$1;
(statearr_646305_646373[(1)] = (27));

} else {
var statearr_646306_646374 = state_646257__$1;
(statearr_646306_646374[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (34))){
var state_646257__$1 = state_646257;
var statearr_646307_646375 = state_646257__$1;
(statearr_646307_646375[(2)] = null);

(statearr_646307_646375[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (17))){
var state_646257__$1 = state_646257;
var statearr_646308_646376 = state_646257__$1;
(statearr_646308_646376[(2)] = null);

(statearr_646308_646376[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (3))){
var inst_646255 = (state_646257[(2)]);
var state_646257__$1 = state_646257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_646257__$1,inst_646255);
} else {
if((state_val_646258 === (12))){
var inst_646184 = (state_646257[(2)]);
var state_646257__$1 = state_646257;
var statearr_646309_646377 = state_646257__$1;
(statearr_646309_646377[(2)] = inst_646184);

(statearr_646309_646377[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (2))){
var state_646257__$1 = state_646257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_646257__$1,(4),ch);
} else {
if((state_val_646258 === (23))){
var state_646257__$1 = state_646257;
var statearr_646310_646378 = state_646257__$1;
(statearr_646310_646378[(2)] = null);

(statearr_646310_646378[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (35))){
var inst_646239 = (state_646257[(2)]);
var state_646257__$1 = state_646257;
var statearr_646311_646379 = state_646257__$1;
(statearr_646311_646379[(2)] = inst_646239);

(statearr_646311_646379[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (19))){
var inst_646158 = (state_646257[(7)]);
var inst_646162 = cljs.core.chunk_first.call(null,inst_646158);
var inst_646163 = cljs.core.chunk_rest.call(null,inst_646158);
var inst_646164 = cljs.core.count.call(null,inst_646162);
var inst_646138 = inst_646163;
var inst_646139 = inst_646162;
var inst_646140 = inst_646164;
var inst_646141 = (0);
var state_646257__$1 = (function (){var statearr_646312 = state_646257;
(statearr_646312[(13)] = inst_646141);

(statearr_646312[(15)] = inst_646139);

(statearr_646312[(16)] = inst_646140);

(statearr_646312[(17)] = inst_646138);

return statearr_646312;
})();
var statearr_646313_646380 = state_646257__$1;
(statearr_646313_646380[(2)] = null);

(statearr_646313_646380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (11))){
var inst_646158 = (state_646257[(7)]);
var inst_646138 = (state_646257[(17)]);
var inst_646158__$1 = cljs.core.seq.call(null,inst_646138);
var state_646257__$1 = (function (){var statearr_646314 = state_646257;
(statearr_646314[(7)] = inst_646158__$1);

return statearr_646314;
})();
if(inst_646158__$1){
var statearr_646315_646381 = state_646257__$1;
(statearr_646315_646381[(1)] = (16));

} else {
var statearr_646316_646382 = state_646257__$1;
(statearr_646316_646382[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (9))){
var inst_646186 = (state_646257[(2)]);
var state_646257__$1 = state_646257;
var statearr_646317_646383 = state_646257__$1;
(statearr_646317_646383[(2)] = inst_646186);

(statearr_646317_646383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (5))){
var inst_646136 = cljs.core.deref.call(null,cs);
var inst_646137 = cljs.core.seq.call(null,inst_646136);
var inst_646138 = inst_646137;
var inst_646139 = null;
var inst_646140 = (0);
var inst_646141 = (0);
var state_646257__$1 = (function (){var statearr_646318 = state_646257;
(statearr_646318[(13)] = inst_646141);

(statearr_646318[(15)] = inst_646139);

(statearr_646318[(16)] = inst_646140);

(statearr_646318[(17)] = inst_646138);

return statearr_646318;
})();
var statearr_646319_646384 = state_646257__$1;
(statearr_646319_646384[(2)] = null);

(statearr_646319_646384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (14))){
var state_646257__$1 = state_646257;
var statearr_646320_646385 = state_646257__$1;
(statearr_646320_646385[(2)] = null);

(statearr_646320_646385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (45))){
var inst_646247 = (state_646257[(2)]);
var state_646257__$1 = state_646257;
var statearr_646321_646386 = state_646257__$1;
(statearr_646321_646386[(2)] = inst_646247);

(statearr_646321_646386[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (26))){
var inst_646189 = (state_646257[(29)]);
var inst_646243 = (state_646257[(2)]);
var inst_646244 = cljs.core.seq.call(null,inst_646189);
var state_646257__$1 = (function (){var statearr_646322 = state_646257;
(statearr_646322[(31)] = inst_646243);

return statearr_646322;
})();
if(inst_646244){
var statearr_646323_646387 = state_646257__$1;
(statearr_646323_646387[(1)] = (42));

} else {
var statearr_646324_646388 = state_646257__$1;
(statearr_646324_646388[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (16))){
var inst_646158 = (state_646257[(7)]);
var inst_646160 = cljs.core.chunked_seq_QMARK_.call(null,inst_646158);
var state_646257__$1 = state_646257;
if(inst_646160){
var statearr_646325_646389 = state_646257__$1;
(statearr_646325_646389[(1)] = (19));

} else {
var statearr_646326_646390 = state_646257__$1;
(statearr_646326_646390[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (38))){
var inst_646236 = (state_646257[(2)]);
var state_646257__$1 = state_646257;
var statearr_646327_646391 = state_646257__$1;
(statearr_646327_646391[(2)] = inst_646236);

(statearr_646327_646391[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (30))){
var state_646257__$1 = state_646257;
var statearr_646328_646392 = state_646257__$1;
(statearr_646328_646392[(2)] = null);

(statearr_646328_646392[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (10))){
var inst_646141 = (state_646257[(13)]);
var inst_646139 = (state_646257[(15)]);
var inst_646147 = cljs.core._nth.call(null,inst_646139,inst_646141);
var inst_646148 = cljs.core.nth.call(null,inst_646147,(0),null);
var inst_646149 = cljs.core.nth.call(null,inst_646147,(1),null);
var state_646257__$1 = (function (){var statearr_646329 = state_646257;
(statearr_646329[(26)] = inst_646148);

return statearr_646329;
})();
if(cljs.core.truth_(inst_646149)){
var statearr_646330_646393 = state_646257__$1;
(statearr_646330_646393[(1)] = (13));

} else {
var statearr_646331_646394 = state_646257__$1;
(statearr_646331_646394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (18))){
var inst_646182 = (state_646257[(2)]);
var state_646257__$1 = state_646257;
var statearr_646332_646395 = state_646257__$1;
(statearr_646332_646395[(2)] = inst_646182);

(statearr_646332_646395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (42))){
var state_646257__$1 = state_646257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_646257__$1,(45),dchan);
} else {
if((state_val_646258 === (37))){
var inst_646129 = (state_646257[(9)]);
var inst_646225 = (state_646257[(23)]);
var inst_646216 = (state_646257[(25)]);
var inst_646225__$1 = cljs.core.first.call(null,inst_646216);
var inst_646226 = cljs.core.async.put_BANG_.call(null,inst_646225__$1,inst_646129,done);
var state_646257__$1 = (function (){var statearr_646333 = state_646257;
(statearr_646333[(23)] = inst_646225__$1);

return statearr_646333;
})();
if(cljs.core.truth_(inst_646226)){
var statearr_646334_646396 = state_646257__$1;
(statearr_646334_646396[(1)] = (39));

} else {
var statearr_646335_646397 = state_646257__$1;
(statearr_646335_646397[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646258 === (8))){
var inst_646141 = (state_646257[(13)]);
var inst_646140 = (state_646257[(16)]);
var inst_646143 = (inst_646141 < inst_646140);
var inst_646144 = inst_646143;
var state_646257__$1 = state_646257;
if(cljs.core.truth_(inst_646144)){
var statearr_646336_646398 = state_646257__$1;
(statearr_646336_646398[(1)] = (10));

} else {
var statearr_646337_646399 = state_646257__$1;
(statearr_646337_646399[(1)] = (11));

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
});})(c__29846__auto___646345,cs,m,dchan,dctr,done))
;
return ((function (switch__29734__auto__,c__29846__auto___646345,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29735__auto__ = null;
var cljs$core$async$mult_$_state_machine__29735__auto____0 = (function (){
var statearr_646341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_646341[(0)] = cljs$core$async$mult_$_state_machine__29735__auto__);

(statearr_646341[(1)] = (1));

return statearr_646341;
});
var cljs$core$async$mult_$_state_machine__29735__auto____1 = (function (state_646257){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_646257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e646342){if((e646342 instanceof Object)){
var ex__29738__auto__ = e646342;
var statearr_646343_646400 = state_646257;
(statearr_646343_646400[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_646257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e646342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__646401 = state_646257;
state_646257 = G__646401;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29735__auto__ = function(state_646257){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29735__auto____1.call(this,state_646257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29735__auto____0;
cljs$core$async$mult_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29735__auto____1;
return cljs$core$async$mult_$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___646345,cs,m,dchan,dctr,done))
})();
var state__29848__auto__ = (function (){var statearr_646344 = f__29847__auto__.call(null);
(statearr_646344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___646345);

return statearr_646344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___646345,cs,m,dchan,dctr,done))
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
var args646402 = [];
var len__25269__auto___646405 = arguments.length;
var i__25270__auto___646406 = (0);
while(true){
if((i__25270__auto___646406 < len__25269__auto___646405)){
args646402.push((arguments[i__25270__auto___646406]));

var G__646407 = (i__25270__auto___646406 + (1));
i__25270__auto___646406 = G__646407;
continue;
} else {
}
break;
}

var G__646404 = args646402.length;
switch (G__646404) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args646402.length)].join('')));

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
var len__25269__auto___646419 = arguments.length;
var i__25270__auto___646420 = (0);
while(true){
if((i__25270__auto___646420 < len__25269__auto___646419)){
args__25276__auto__.push((arguments[i__25270__auto___646420]));

var G__646421 = (i__25270__auto___646420 + (1));
i__25270__auto___646420 = G__646421;
continue;
} else {
}
break;
}

var argseq__25277__auto__ = ((((3) < args__25276__auto__.length))?(new cljs.core.IndexedSeq(args__25276__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25277__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__646413){
var map__646414 = p__646413;
var map__646414__$1 = ((((!((map__646414 == null)))?((((map__646414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__646414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__646414):map__646414);
var opts = map__646414__$1;
var statearr_646416_646422 = state;
(statearr_646416_646422[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__646414,map__646414__$1,opts){
return (function (val){
var statearr_646417_646423 = state;
(statearr_646417_646423[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__646414,map__646414__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_646418_646424 = state;
(statearr_646418_646424[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq646409){
var G__646410 = cljs.core.first.call(null,seq646409);
var seq646409__$1 = cljs.core.next.call(null,seq646409);
var G__646411 = cljs.core.first.call(null,seq646409__$1);
var seq646409__$2 = cljs.core.next.call(null,seq646409__$1);
var G__646412 = cljs.core.first.call(null,seq646409__$2);
var seq646409__$3 = cljs.core.next.call(null,seq646409__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__646410,G__646411,G__646412,seq646409__$3);
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
if(typeof cljs.core.async.t_cljs$core$async646588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async646588 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta646589){
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
this.meta646589 = meta646589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async646588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_646590,meta646589__$1){
var self__ = this;
var _646590__$1 = this;
return (new cljs.core.async.t_cljs$core$async646588(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta646589__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async646588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_646590){
var self__ = this;
var _646590__$1 = this;
return self__.meta646589;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async646588.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async646588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async646588.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async646588.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async646588.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async646588.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async646588.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async646588.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async646588.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta646589","meta646589",1912166644,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async646588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async646588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async646588";

cljs.core.async.t_cljs$core$async646588.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async646588");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async646588 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async646588(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta646589){
return (new cljs.core.async.t_cljs$core$async646588(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta646589));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async646588(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29846__auto___646751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___646751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___646751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_646688){
var state_val_646689 = (state_646688[(1)]);
if((state_val_646689 === (7))){
var inst_646606 = (state_646688[(2)]);
var state_646688__$1 = state_646688;
var statearr_646690_646752 = state_646688__$1;
(statearr_646690_646752[(2)] = inst_646606);

(statearr_646690_646752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (20))){
var inst_646618 = (state_646688[(7)]);
var state_646688__$1 = state_646688;
var statearr_646691_646753 = state_646688__$1;
(statearr_646691_646753[(2)] = inst_646618);

(statearr_646691_646753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (27))){
var state_646688__$1 = state_646688;
var statearr_646692_646754 = state_646688__$1;
(statearr_646692_646754[(2)] = null);

(statearr_646692_646754[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (1))){
var inst_646594 = (state_646688[(8)]);
var inst_646594__$1 = calc_state.call(null);
var inst_646596 = (inst_646594__$1 == null);
var inst_646597 = cljs.core.not.call(null,inst_646596);
var state_646688__$1 = (function (){var statearr_646693 = state_646688;
(statearr_646693[(8)] = inst_646594__$1);

return statearr_646693;
})();
if(inst_646597){
var statearr_646694_646755 = state_646688__$1;
(statearr_646694_646755[(1)] = (2));

} else {
var statearr_646695_646756 = state_646688__$1;
(statearr_646695_646756[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (24))){
var inst_646648 = (state_646688[(9)]);
var inst_646662 = (state_646688[(10)]);
var inst_646641 = (state_646688[(11)]);
var inst_646662__$1 = inst_646641.call(null,inst_646648);
var state_646688__$1 = (function (){var statearr_646696 = state_646688;
(statearr_646696[(10)] = inst_646662__$1);

return statearr_646696;
})();
if(cljs.core.truth_(inst_646662__$1)){
var statearr_646697_646757 = state_646688__$1;
(statearr_646697_646757[(1)] = (29));

} else {
var statearr_646698_646758 = state_646688__$1;
(statearr_646698_646758[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (4))){
var inst_646609 = (state_646688[(2)]);
var state_646688__$1 = state_646688;
if(cljs.core.truth_(inst_646609)){
var statearr_646699_646759 = state_646688__$1;
(statearr_646699_646759[(1)] = (8));

} else {
var statearr_646700_646760 = state_646688__$1;
(statearr_646700_646760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (15))){
var inst_646635 = (state_646688[(2)]);
var state_646688__$1 = state_646688;
if(cljs.core.truth_(inst_646635)){
var statearr_646701_646761 = state_646688__$1;
(statearr_646701_646761[(1)] = (19));

} else {
var statearr_646702_646762 = state_646688__$1;
(statearr_646702_646762[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (21))){
var inst_646640 = (state_646688[(12)]);
var inst_646640__$1 = (state_646688[(2)]);
var inst_646641 = cljs.core.get.call(null,inst_646640__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_646642 = cljs.core.get.call(null,inst_646640__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_646643 = cljs.core.get.call(null,inst_646640__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_646688__$1 = (function (){var statearr_646703 = state_646688;
(statearr_646703[(13)] = inst_646642);

(statearr_646703[(12)] = inst_646640__$1);

(statearr_646703[(11)] = inst_646641);

return statearr_646703;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_646688__$1,(22),inst_646643);
} else {
if((state_val_646689 === (31))){
var inst_646670 = (state_646688[(2)]);
var state_646688__$1 = state_646688;
if(cljs.core.truth_(inst_646670)){
var statearr_646704_646763 = state_646688__$1;
(statearr_646704_646763[(1)] = (32));

} else {
var statearr_646705_646764 = state_646688__$1;
(statearr_646705_646764[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (32))){
var inst_646647 = (state_646688[(14)]);
var state_646688__$1 = state_646688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_646688__$1,(35),out,inst_646647);
} else {
if((state_val_646689 === (33))){
var inst_646640 = (state_646688[(12)]);
var inst_646618 = inst_646640;
var state_646688__$1 = (function (){var statearr_646706 = state_646688;
(statearr_646706[(7)] = inst_646618);

return statearr_646706;
})();
var statearr_646707_646765 = state_646688__$1;
(statearr_646707_646765[(2)] = null);

(statearr_646707_646765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (13))){
var inst_646618 = (state_646688[(7)]);
var inst_646625 = inst_646618.cljs$lang$protocol_mask$partition0$;
var inst_646626 = (inst_646625 & (64));
var inst_646627 = inst_646618.cljs$core$ISeq$;
var inst_646628 = (inst_646626) || (inst_646627);
var state_646688__$1 = state_646688;
if(cljs.core.truth_(inst_646628)){
var statearr_646708_646766 = state_646688__$1;
(statearr_646708_646766[(1)] = (16));

} else {
var statearr_646709_646767 = state_646688__$1;
(statearr_646709_646767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (22))){
var inst_646648 = (state_646688[(9)]);
var inst_646647 = (state_646688[(14)]);
var inst_646646 = (state_646688[(2)]);
var inst_646647__$1 = cljs.core.nth.call(null,inst_646646,(0),null);
var inst_646648__$1 = cljs.core.nth.call(null,inst_646646,(1),null);
var inst_646649 = (inst_646647__$1 == null);
var inst_646650 = cljs.core._EQ_.call(null,inst_646648__$1,change);
var inst_646651 = (inst_646649) || (inst_646650);
var state_646688__$1 = (function (){var statearr_646710 = state_646688;
(statearr_646710[(9)] = inst_646648__$1);

(statearr_646710[(14)] = inst_646647__$1);

return statearr_646710;
})();
if(cljs.core.truth_(inst_646651)){
var statearr_646711_646768 = state_646688__$1;
(statearr_646711_646768[(1)] = (23));

} else {
var statearr_646712_646769 = state_646688__$1;
(statearr_646712_646769[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (36))){
var inst_646640 = (state_646688[(12)]);
var inst_646618 = inst_646640;
var state_646688__$1 = (function (){var statearr_646713 = state_646688;
(statearr_646713[(7)] = inst_646618);

return statearr_646713;
})();
var statearr_646714_646770 = state_646688__$1;
(statearr_646714_646770[(2)] = null);

(statearr_646714_646770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (29))){
var inst_646662 = (state_646688[(10)]);
var state_646688__$1 = state_646688;
var statearr_646715_646771 = state_646688__$1;
(statearr_646715_646771[(2)] = inst_646662);

(statearr_646715_646771[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (6))){
var state_646688__$1 = state_646688;
var statearr_646716_646772 = state_646688__$1;
(statearr_646716_646772[(2)] = false);

(statearr_646716_646772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (28))){
var inst_646658 = (state_646688[(2)]);
var inst_646659 = calc_state.call(null);
var inst_646618 = inst_646659;
var state_646688__$1 = (function (){var statearr_646717 = state_646688;
(statearr_646717[(7)] = inst_646618);

(statearr_646717[(15)] = inst_646658);

return statearr_646717;
})();
var statearr_646718_646773 = state_646688__$1;
(statearr_646718_646773[(2)] = null);

(statearr_646718_646773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (25))){
var inst_646684 = (state_646688[(2)]);
var state_646688__$1 = state_646688;
var statearr_646719_646774 = state_646688__$1;
(statearr_646719_646774[(2)] = inst_646684);

(statearr_646719_646774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (34))){
var inst_646682 = (state_646688[(2)]);
var state_646688__$1 = state_646688;
var statearr_646720_646775 = state_646688__$1;
(statearr_646720_646775[(2)] = inst_646682);

(statearr_646720_646775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (17))){
var state_646688__$1 = state_646688;
var statearr_646721_646776 = state_646688__$1;
(statearr_646721_646776[(2)] = false);

(statearr_646721_646776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (3))){
var state_646688__$1 = state_646688;
var statearr_646722_646777 = state_646688__$1;
(statearr_646722_646777[(2)] = false);

(statearr_646722_646777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (12))){
var inst_646686 = (state_646688[(2)]);
var state_646688__$1 = state_646688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_646688__$1,inst_646686);
} else {
if((state_val_646689 === (2))){
var inst_646594 = (state_646688[(8)]);
var inst_646599 = inst_646594.cljs$lang$protocol_mask$partition0$;
var inst_646600 = (inst_646599 & (64));
var inst_646601 = inst_646594.cljs$core$ISeq$;
var inst_646602 = (inst_646600) || (inst_646601);
var state_646688__$1 = state_646688;
if(cljs.core.truth_(inst_646602)){
var statearr_646723_646778 = state_646688__$1;
(statearr_646723_646778[(1)] = (5));

} else {
var statearr_646724_646779 = state_646688__$1;
(statearr_646724_646779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (23))){
var inst_646647 = (state_646688[(14)]);
var inst_646653 = (inst_646647 == null);
var state_646688__$1 = state_646688;
if(cljs.core.truth_(inst_646653)){
var statearr_646725_646780 = state_646688__$1;
(statearr_646725_646780[(1)] = (26));

} else {
var statearr_646726_646781 = state_646688__$1;
(statearr_646726_646781[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (35))){
var inst_646673 = (state_646688[(2)]);
var state_646688__$1 = state_646688;
if(cljs.core.truth_(inst_646673)){
var statearr_646727_646782 = state_646688__$1;
(statearr_646727_646782[(1)] = (36));

} else {
var statearr_646728_646783 = state_646688__$1;
(statearr_646728_646783[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (19))){
var inst_646618 = (state_646688[(7)]);
var inst_646637 = cljs.core.apply.call(null,cljs.core.hash_map,inst_646618);
var state_646688__$1 = state_646688;
var statearr_646729_646784 = state_646688__$1;
(statearr_646729_646784[(2)] = inst_646637);

(statearr_646729_646784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (11))){
var inst_646618 = (state_646688[(7)]);
var inst_646622 = (inst_646618 == null);
var inst_646623 = cljs.core.not.call(null,inst_646622);
var state_646688__$1 = state_646688;
if(inst_646623){
var statearr_646730_646785 = state_646688__$1;
(statearr_646730_646785[(1)] = (13));

} else {
var statearr_646731_646786 = state_646688__$1;
(statearr_646731_646786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (9))){
var inst_646594 = (state_646688[(8)]);
var state_646688__$1 = state_646688;
var statearr_646732_646787 = state_646688__$1;
(statearr_646732_646787[(2)] = inst_646594);

(statearr_646732_646787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (5))){
var state_646688__$1 = state_646688;
var statearr_646733_646788 = state_646688__$1;
(statearr_646733_646788[(2)] = true);

(statearr_646733_646788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (14))){
var state_646688__$1 = state_646688;
var statearr_646734_646789 = state_646688__$1;
(statearr_646734_646789[(2)] = false);

(statearr_646734_646789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (26))){
var inst_646648 = (state_646688[(9)]);
var inst_646655 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_646648);
var state_646688__$1 = state_646688;
var statearr_646735_646790 = state_646688__$1;
(statearr_646735_646790[(2)] = inst_646655);

(statearr_646735_646790[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (16))){
var state_646688__$1 = state_646688;
var statearr_646736_646791 = state_646688__$1;
(statearr_646736_646791[(2)] = true);

(statearr_646736_646791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (38))){
var inst_646678 = (state_646688[(2)]);
var state_646688__$1 = state_646688;
var statearr_646737_646792 = state_646688__$1;
(statearr_646737_646792[(2)] = inst_646678);

(statearr_646737_646792[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (30))){
var inst_646648 = (state_646688[(9)]);
var inst_646642 = (state_646688[(13)]);
var inst_646641 = (state_646688[(11)]);
var inst_646665 = cljs.core.empty_QMARK_.call(null,inst_646641);
var inst_646666 = inst_646642.call(null,inst_646648);
var inst_646667 = cljs.core.not.call(null,inst_646666);
var inst_646668 = (inst_646665) && (inst_646667);
var state_646688__$1 = state_646688;
var statearr_646738_646793 = state_646688__$1;
(statearr_646738_646793[(2)] = inst_646668);

(statearr_646738_646793[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (10))){
var inst_646594 = (state_646688[(8)]);
var inst_646614 = (state_646688[(2)]);
var inst_646615 = cljs.core.get.call(null,inst_646614,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_646616 = cljs.core.get.call(null,inst_646614,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_646617 = cljs.core.get.call(null,inst_646614,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_646618 = inst_646594;
var state_646688__$1 = (function (){var statearr_646739 = state_646688;
(statearr_646739[(16)] = inst_646617);

(statearr_646739[(7)] = inst_646618);

(statearr_646739[(17)] = inst_646615);

(statearr_646739[(18)] = inst_646616);

return statearr_646739;
})();
var statearr_646740_646794 = state_646688__$1;
(statearr_646740_646794[(2)] = null);

(statearr_646740_646794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (18))){
var inst_646632 = (state_646688[(2)]);
var state_646688__$1 = state_646688;
var statearr_646741_646795 = state_646688__$1;
(statearr_646741_646795[(2)] = inst_646632);

(statearr_646741_646795[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (37))){
var state_646688__$1 = state_646688;
var statearr_646742_646796 = state_646688__$1;
(statearr_646742_646796[(2)] = null);

(statearr_646742_646796[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646689 === (8))){
var inst_646594 = (state_646688[(8)]);
var inst_646611 = cljs.core.apply.call(null,cljs.core.hash_map,inst_646594);
var state_646688__$1 = state_646688;
var statearr_646743_646797 = state_646688__$1;
(statearr_646743_646797[(2)] = inst_646611);

(statearr_646743_646797[(1)] = (10));


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
});})(c__29846__auto___646751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29734__auto__,c__29846__auto___646751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29735__auto__ = null;
var cljs$core$async$mix_$_state_machine__29735__auto____0 = (function (){
var statearr_646747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_646747[(0)] = cljs$core$async$mix_$_state_machine__29735__auto__);

(statearr_646747[(1)] = (1));

return statearr_646747;
});
var cljs$core$async$mix_$_state_machine__29735__auto____1 = (function (state_646688){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_646688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e646748){if((e646748 instanceof Object)){
var ex__29738__auto__ = e646748;
var statearr_646749_646798 = state_646688;
(statearr_646749_646798[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_646688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e646748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__646799 = state_646688;
state_646688 = G__646799;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29735__auto__ = function(state_646688){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29735__auto____1.call(this,state_646688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29735__auto____0;
cljs$core$async$mix_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29735__auto____1;
return cljs$core$async$mix_$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___646751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29848__auto__ = (function (){var statearr_646750 = f__29847__auto__.call(null);
(statearr_646750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___646751);

return statearr_646750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___646751,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args646800 = [];
var len__25269__auto___646803 = arguments.length;
var i__25270__auto___646804 = (0);
while(true){
if((i__25270__auto___646804 < len__25269__auto___646803)){
args646800.push((arguments[i__25270__auto___646804]));

var G__646805 = (i__25270__auto___646804 + (1));
i__25270__auto___646804 = G__646805;
continue;
} else {
}
break;
}

var G__646802 = args646800.length;
switch (G__646802) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args646800.length)].join('')));

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
var args646808 = [];
var len__25269__auto___646933 = arguments.length;
var i__25270__auto___646934 = (0);
while(true){
if((i__25270__auto___646934 < len__25269__auto___646933)){
args646808.push((arguments[i__25270__auto___646934]));

var G__646935 = (i__25270__auto___646934 + (1));
i__25270__auto___646934 = G__646935;
continue;
} else {
}
break;
}

var G__646810 = args646808.length;
switch (G__646810) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args646808.length)].join('')));

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
return (function (p1__646807_SHARP_){
if(cljs.core.truth_(p1__646807_SHARP_.call(null,topic))){
return p1__646807_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__646807_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24211__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async646811 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async646811 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta646812){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta646812 = meta646812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async646811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_646813,meta646812__$1){
var self__ = this;
var _646813__$1 = this;
return (new cljs.core.async.t_cljs$core$async646811(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta646812__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async646811.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_646813){
var self__ = this;
var _646813__$1 = this;
return self__.meta646812;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async646811.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async646811.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async646811.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async646811.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async646811.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async646811.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async646811.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async646811.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta646812","meta646812",-654650283,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async646811.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async646811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async646811";

cljs.core.async.t_cljs$core$async646811.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async646811");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async646811 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async646811(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta646812){
return (new cljs.core.async.t_cljs$core$async646811(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta646812));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async646811(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29846__auto___646937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___646937,mults,ensure_mult,p){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___646937,mults,ensure_mult,p){
return (function (state_646885){
var state_val_646886 = (state_646885[(1)]);
if((state_val_646886 === (7))){
var inst_646881 = (state_646885[(2)]);
var state_646885__$1 = state_646885;
var statearr_646887_646938 = state_646885__$1;
(statearr_646887_646938[(2)] = inst_646881);

(statearr_646887_646938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (20))){
var state_646885__$1 = state_646885;
var statearr_646888_646939 = state_646885__$1;
(statearr_646888_646939[(2)] = null);

(statearr_646888_646939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (1))){
var state_646885__$1 = state_646885;
var statearr_646889_646940 = state_646885__$1;
(statearr_646889_646940[(2)] = null);

(statearr_646889_646940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (24))){
var inst_646864 = (state_646885[(7)]);
var inst_646873 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_646864);
var state_646885__$1 = state_646885;
var statearr_646890_646941 = state_646885__$1;
(statearr_646890_646941[(2)] = inst_646873);

(statearr_646890_646941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (4))){
var inst_646816 = (state_646885[(8)]);
var inst_646816__$1 = (state_646885[(2)]);
var inst_646817 = (inst_646816__$1 == null);
var state_646885__$1 = (function (){var statearr_646891 = state_646885;
(statearr_646891[(8)] = inst_646816__$1);

return statearr_646891;
})();
if(cljs.core.truth_(inst_646817)){
var statearr_646892_646942 = state_646885__$1;
(statearr_646892_646942[(1)] = (5));

} else {
var statearr_646893_646943 = state_646885__$1;
(statearr_646893_646943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (15))){
var inst_646858 = (state_646885[(2)]);
var state_646885__$1 = state_646885;
var statearr_646894_646944 = state_646885__$1;
(statearr_646894_646944[(2)] = inst_646858);

(statearr_646894_646944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (21))){
var inst_646878 = (state_646885[(2)]);
var state_646885__$1 = (function (){var statearr_646895 = state_646885;
(statearr_646895[(9)] = inst_646878);

return statearr_646895;
})();
var statearr_646896_646945 = state_646885__$1;
(statearr_646896_646945[(2)] = null);

(statearr_646896_646945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (13))){
var inst_646840 = (state_646885[(10)]);
var inst_646842 = cljs.core.chunked_seq_QMARK_.call(null,inst_646840);
var state_646885__$1 = state_646885;
if(inst_646842){
var statearr_646897_646946 = state_646885__$1;
(statearr_646897_646946[(1)] = (16));

} else {
var statearr_646898_646947 = state_646885__$1;
(statearr_646898_646947[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (22))){
var inst_646870 = (state_646885[(2)]);
var state_646885__$1 = state_646885;
if(cljs.core.truth_(inst_646870)){
var statearr_646899_646948 = state_646885__$1;
(statearr_646899_646948[(1)] = (23));

} else {
var statearr_646900_646949 = state_646885__$1;
(statearr_646900_646949[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (6))){
var inst_646866 = (state_646885[(11)]);
var inst_646816 = (state_646885[(8)]);
var inst_646864 = (state_646885[(7)]);
var inst_646864__$1 = topic_fn.call(null,inst_646816);
var inst_646865 = cljs.core.deref.call(null,mults);
var inst_646866__$1 = cljs.core.get.call(null,inst_646865,inst_646864__$1);
var state_646885__$1 = (function (){var statearr_646901 = state_646885;
(statearr_646901[(11)] = inst_646866__$1);

(statearr_646901[(7)] = inst_646864__$1);

return statearr_646901;
})();
if(cljs.core.truth_(inst_646866__$1)){
var statearr_646902_646950 = state_646885__$1;
(statearr_646902_646950[(1)] = (19));

} else {
var statearr_646903_646951 = state_646885__$1;
(statearr_646903_646951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (25))){
var inst_646875 = (state_646885[(2)]);
var state_646885__$1 = state_646885;
var statearr_646904_646952 = state_646885__$1;
(statearr_646904_646952[(2)] = inst_646875);

(statearr_646904_646952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (17))){
var inst_646840 = (state_646885[(10)]);
var inst_646849 = cljs.core.first.call(null,inst_646840);
var inst_646850 = cljs.core.async.muxch_STAR_.call(null,inst_646849);
var inst_646851 = cljs.core.async.close_BANG_.call(null,inst_646850);
var inst_646852 = cljs.core.next.call(null,inst_646840);
var inst_646826 = inst_646852;
var inst_646827 = null;
var inst_646828 = (0);
var inst_646829 = (0);
var state_646885__$1 = (function (){var statearr_646905 = state_646885;
(statearr_646905[(12)] = inst_646829);

(statearr_646905[(13)] = inst_646826);

(statearr_646905[(14)] = inst_646827);

(statearr_646905[(15)] = inst_646851);

(statearr_646905[(16)] = inst_646828);

return statearr_646905;
})();
var statearr_646906_646953 = state_646885__$1;
(statearr_646906_646953[(2)] = null);

(statearr_646906_646953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (3))){
var inst_646883 = (state_646885[(2)]);
var state_646885__$1 = state_646885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_646885__$1,inst_646883);
} else {
if((state_val_646886 === (12))){
var inst_646860 = (state_646885[(2)]);
var state_646885__$1 = state_646885;
var statearr_646907_646954 = state_646885__$1;
(statearr_646907_646954[(2)] = inst_646860);

(statearr_646907_646954[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (2))){
var state_646885__$1 = state_646885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_646885__$1,(4),ch);
} else {
if((state_val_646886 === (23))){
var state_646885__$1 = state_646885;
var statearr_646908_646955 = state_646885__$1;
(statearr_646908_646955[(2)] = null);

(statearr_646908_646955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (19))){
var inst_646866 = (state_646885[(11)]);
var inst_646816 = (state_646885[(8)]);
var inst_646868 = cljs.core.async.muxch_STAR_.call(null,inst_646866);
var state_646885__$1 = state_646885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_646885__$1,(22),inst_646868,inst_646816);
} else {
if((state_val_646886 === (11))){
var inst_646826 = (state_646885[(13)]);
var inst_646840 = (state_646885[(10)]);
var inst_646840__$1 = cljs.core.seq.call(null,inst_646826);
var state_646885__$1 = (function (){var statearr_646909 = state_646885;
(statearr_646909[(10)] = inst_646840__$1);

return statearr_646909;
})();
if(inst_646840__$1){
var statearr_646910_646956 = state_646885__$1;
(statearr_646910_646956[(1)] = (13));

} else {
var statearr_646911_646957 = state_646885__$1;
(statearr_646911_646957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (9))){
var inst_646862 = (state_646885[(2)]);
var state_646885__$1 = state_646885;
var statearr_646912_646958 = state_646885__$1;
(statearr_646912_646958[(2)] = inst_646862);

(statearr_646912_646958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (5))){
var inst_646823 = cljs.core.deref.call(null,mults);
var inst_646824 = cljs.core.vals.call(null,inst_646823);
var inst_646825 = cljs.core.seq.call(null,inst_646824);
var inst_646826 = inst_646825;
var inst_646827 = null;
var inst_646828 = (0);
var inst_646829 = (0);
var state_646885__$1 = (function (){var statearr_646913 = state_646885;
(statearr_646913[(12)] = inst_646829);

(statearr_646913[(13)] = inst_646826);

(statearr_646913[(14)] = inst_646827);

(statearr_646913[(16)] = inst_646828);

return statearr_646913;
})();
var statearr_646914_646959 = state_646885__$1;
(statearr_646914_646959[(2)] = null);

(statearr_646914_646959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (14))){
var state_646885__$1 = state_646885;
var statearr_646918_646960 = state_646885__$1;
(statearr_646918_646960[(2)] = null);

(statearr_646918_646960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (16))){
var inst_646840 = (state_646885[(10)]);
var inst_646844 = cljs.core.chunk_first.call(null,inst_646840);
var inst_646845 = cljs.core.chunk_rest.call(null,inst_646840);
var inst_646846 = cljs.core.count.call(null,inst_646844);
var inst_646826 = inst_646845;
var inst_646827 = inst_646844;
var inst_646828 = inst_646846;
var inst_646829 = (0);
var state_646885__$1 = (function (){var statearr_646919 = state_646885;
(statearr_646919[(12)] = inst_646829);

(statearr_646919[(13)] = inst_646826);

(statearr_646919[(14)] = inst_646827);

(statearr_646919[(16)] = inst_646828);

return statearr_646919;
})();
var statearr_646920_646961 = state_646885__$1;
(statearr_646920_646961[(2)] = null);

(statearr_646920_646961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (10))){
var inst_646829 = (state_646885[(12)]);
var inst_646826 = (state_646885[(13)]);
var inst_646827 = (state_646885[(14)]);
var inst_646828 = (state_646885[(16)]);
var inst_646834 = cljs.core._nth.call(null,inst_646827,inst_646829);
var inst_646835 = cljs.core.async.muxch_STAR_.call(null,inst_646834);
var inst_646836 = cljs.core.async.close_BANG_.call(null,inst_646835);
var inst_646837 = (inst_646829 + (1));
var tmp646915 = inst_646826;
var tmp646916 = inst_646827;
var tmp646917 = inst_646828;
var inst_646826__$1 = tmp646915;
var inst_646827__$1 = tmp646916;
var inst_646828__$1 = tmp646917;
var inst_646829__$1 = inst_646837;
var state_646885__$1 = (function (){var statearr_646921 = state_646885;
(statearr_646921[(12)] = inst_646829__$1);

(statearr_646921[(17)] = inst_646836);

(statearr_646921[(13)] = inst_646826__$1);

(statearr_646921[(14)] = inst_646827__$1);

(statearr_646921[(16)] = inst_646828__$1);

return statearr_646921;
})();
var statearr_646922_646962 = state_646885__$1;
(statearr_646922_646962[(2)] = null);

(statearr_646922_646962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (18))){
var inst_646855 = (state_646885[(2)]);
var state_646885__$1 = state_646885;
var statearr_646923_646963 = state_646885__$1;
(statearr_646923_646963[(2)] = inst_646855);

(statearr_646923_646963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_646886 === (8))){
var inst_646829 = (state_646885[(12)]);
var inst_646828 = (state_646885[(16)]);
var inst_646831 = (inst_646829 < inst_646828);
var inst_646832 = inst_646831;
var state_646885__$1 = state_646885;
if(cljs.core.truth_(inst_646832)){
var statearr_646924_646964 = state_646885__$1;
(statearr_646924_646964[(1)] = (10));

} else {
var statearr_646925_646965 = state_646885__$1;
(statearr_646925_646965[(1)] = (11));

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
});})(c__29846__auto___646937,mults,ensure_mult,p))
;
return ((function (switch__29734__auto__,c__29846__auto___646937,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_646929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_646929[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_646929[(1)] = (1));

return statearr_646929;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_646885){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_646885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e646930){if((e646930 instanceof Object)){
var ex__29738__auto__ = e646930;
var statearr_646931_646966 = state_646885;
(statearr_646931_646966[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_646885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e646930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__646967 = state_646885;
state_646885 = G__646967;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_646885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_646885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___646937,mults,ensure_mult,p))
})();
var state__29848__auto__ = (function (){var statearr_646932 = f__29847__auto__.call(null);
(statearr_646932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___646937);

return statearr_646932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___646937,mults,ensure_mult,p))
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
var args646968 = [];
var len__25269__auto___646971 = arguments.length;
var i__25270__auto___646972 = (0);
while(true){
if((i__25270__auto___646972 < len__25269__auto___646971)){
args646968.push((arguments[i__25270__auto___646972]));

var G__646973 = (i__25270__auto___646972 + (1));
i__25270__auto___646972 = G__646973;
continue;
} else {
}
break;
}

var G__646970 = args646968.length;
switch (G__646970) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args646968.length)].join('')));

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
var args646975 = [];
var len__25269__auto___646978 = arguments.length;
var i__25270__auto___646979 = (0);
while(true){
if((i__25270__auto___646979 < len__25269__auto___646978)){
args646975.push((arguments[i__25270__auto___646979]));

var G__646980 = (i__25270__auto___646979 + (1));
i__25270__auto___646979 = G__646980;
continue;
} else {
}
break;
}

var G__646977 = args646975.length;
switch (G__646977) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args646975.length)].join('')));

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
var args646982 = [];
var len__25269__auto___647053 = arguments.length;
var i__25270__auto___647054 = (0);
while(true){
if((i__25270__auto___647054 < len__25269__auto___647053)){
args646982.push((arguments[i__25270__auto___647054]));

var G__647055 = (i__25270__auto___647054 + (1));
i__25270__auto___647054 = G__647055;
continue;
} else {
}
break;
}

var G__646984 = args646982.length;
switch (G__646984) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args646982.length)].join('')));

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
var c__29846__auto___647057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___647057,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___647057,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_647023){
var state_val_647024 = (state_647023[(1)]);
if((state_val_647024 === (7))){
var state_647023__$1 = state_647023;
var statearr_647025_647058 = state_647023__$1;
(statearr_647025_647058[(2)] = null);

(statearr_647025_647058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647024 === (1))){
var state_647023__$1 = state_647023;
var statearr_647026_647059 = state_647023__$1;
(statearr_647026_647059[(2)] = null);

(statearr_647026_647059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647024 === (4))){
var inst_646987 = (state_647023[(7)]);
var inst_646989 = (inst_646987 < cnt);
var state_647023__$1 = state_647023;
if(cljs.core.truth_(inst_646989)){
var statearr_647027_647060 = state_647023__$1;
(statearr_647027_647060[(1)] = (6));

} else {
var statearr_647028_647061 = state_647023__$1;
(statearr_647028_647061[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647024 === (15))){
var inst_647019 = (state_647023[(2)]);
var state_647023__$1 = state_647023;
var statearr_647029_647062 = state_647023__$1;
(statearr_647029_647062[(2)] = inst_647019);

(statearr_647029_647062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647024 === (13))){
var inst_647012 = cljs.core.async.close_BANG_.call(null,out);
var state_647023__$1 = state_647023;
var statearr_647030_647063 = state_647023__$1;
(statearr_647030_647063[(2)] = inst_647012);

(statearr_647030_647063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647024 === (6))){
var state_647023__$1 = state_647023;
var statearr_647031_647064 = state_647023__$1;
(statearr_647031_647064[(2)] = null);

(statearr_647031_647064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647024 === (3))){
var inst_647021 = (state_647023[(2)]);
var state_647023__$1 = state_647023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_647023__$1,inst_647021);
} else {
if((state_val_647024 === (12))){
var inst_647009 = (state_647023[(8)]);
var inst_647009__$1 = (state_647023[(2)]);
var inst_647010 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_647009__$1);
var state_647023__$1 = (function (){var statearr_647032 = state_647023;
(statearr_647032[(8)] = inst_647009__$1);

return statearr_647032;
})();
if(cljs.core.truth_(inst_647010)){
var statearr_647033_647065 = state_647023__$1;
(statearr_647033_647065[(1)] = (13));

} else {
var statearr_647034_647066 = state_647023__$1;
(statearr_647034_647066[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647024 === (2))){
var inst_646986 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_646987 = (0);
var state_647023__$1 = (function (){var statearr_647035 = state_647023;
(statearr_647035[(7)] = inst_646987);

(statearr_647035[(9)] = inst_646986);

return statearr_647035;
})();
var statearr_647036_647067 = state_647023__$1;
(statearr_647036_647067[(2)] = null);

(statearr_647036_647067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647024 === (11))){
var inst_646987 = (state_647023[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_647023,(10),Object,null,(9));
var inst_646996 = chs__$1.call(null,inst_646987);
var inst_646997 = done.call(null,inst_646987);
var inst_646998 = cljs.core.async.take_BANG_.call(null,inst_646996,inst_646997);
var state_647023__$1 = state_647023;
var statearr_647037_647068 = state_647023__$1;
(statearr_647037_647068[(2)] = inst_646998);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_647023__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647024 === (9))){
var inst_646987 = (state_647023[(7)]);
var inst_647000 = (state_647023[(2)]);
var inst_647001 = (inst_646987 + (1));
var inst_646987__$1 = inst_647001;
var state_647023__$1 = (function (){var statearr_647038 = state_647023;
(statearr_647038[(10)] = inst_647000);

(statearr_647038[(7)] = inst_646987__$1);

return statearr_647038;
})();
var statearr_647039_647069 = state_647023__$1;
(statearr_647039_647069[(2)] = null);

(statearr_647039_647069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647024 === (5))){
var inst_647007 = (state_647023[(2)]);
var state_647023__$1 = (function (){var statearr_647040 = state_647023;
(statearr_647040[(11)] = inst_647007);

return statearr_647040;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_647023__$1,(12),dchan);
} else {
if((state_val_647024 === (14))){
var inst_647009 = (state_647023[(8)]);
var inst_647014 = cljs.core.apply.call(null,f,inst_647009);
var state_647023__$1 = state_647023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_647023__$1,(16),out,inst_647014);
} else {
if((state_val_647024 === (16))){
var inst_647016 = (state_647023[(2)]);
var state_647023__$1 = (function (){var statearr_647041 = state_647023;
(statearr_647041[(12)] = inst_647016);

return statearr_647041;
})();
var statearr_647042_647070 = state_647023__$1;
(statearr_647042_647070[(2)] = null);

(statearr_647042_647070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647024 === (10))){
var inst_646991 = (state_647023[(2)]);
var inst_646992 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_647023__$1 = (function (){var statearr_647043 = state_647023;
(statearr_647043[(13)] = inst_646991);

return statearr_647043;
})();
var statearr_647044_647071 = state_647023__$1;
(statearr_647044_647071[(2)] = inst_646992);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_647023__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647024 === (8))){
var inst_647005 = (state_647023[(2)]);
var state_647023__$1 = state_647023;
var statearr_647045_647072 = state_647023__$1;
(statearr_647045_647072[(2)] = inst_647005);

(statearr_647045_647072[(1)] = (5));


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
});})(c__29846__auto___647057,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29734__auto__,c__29846__auto___647057,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_647049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_647049[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_647049[(1)] = (1));

return statearr_647049;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_647023){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_647023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e647050){if((e647050 instanceof Object)){
var ex__29738__auto__ = e647050;
var statearr_647051_647073 = state_647023;
(statearr_647051_647073[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_647023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e647050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__647074 = state_647023;
state_647023 = G__647074;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_647023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_647023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___647057,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29848__auto__ = (function (){var statearr_647052 = f__29847__auto__.call(null);
(statearr_647052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___647057);

return statearr_647052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___647057,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args647076 = [];
var len__25269__auto___647132 = arguments.length;
var i__25270__auto___647133 = (0);
while(true){
if((i__25270__auto___647133 < len__25269__auto___647132)){
args647076.push((arguments[i__25270__auto___647133]));

var G__647134 = (i__25270__auto___647133 + (1));
i__25270__auto___647133 = G__647134;
continue;
} else {
}
break;
}

var G__647078 = args647076.length;
switch (G__647078) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args647076.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29846__auto___647136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___647136,out){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___647136,out){
return (function (state_647108){
var state_val_647109 = (state_647108[(1)]);
if((state_val_647109 === (7))){
var inst_647087 = (state_647108[(7)]);
var inst_647088 = (state_647108[(8)]);
var inst_647087__$1 = (state_647108[(2)]);
var inst_647088__$1 = cljs.core.nth.call(null,inst_647087__$1,(0),null);
var inst_647089 = cljs.core.nth.call(null,inst_647087__$1,(1),null);
var inst_647090 = (inst_647088__$1 == null);
var state_647108__$1 = (function (){var statearr_647110 = state_647108;
(statearr_647110[(7)] = inst_647087__$1);

(statearr_647110[(8)] = inst_647088__$1);

(statearr_647110[(9)] = inst_647089);

return statearr_647110;
})();
if(cljs.core.truth_(inst_647090)){
var statearr_647111_647137 = state_647108__$1;
(statearr_647111_647137[(1)] = (8));

} else {
var statearr_647112_647138 = state_647108__$1;
(statearr_647112_647138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647109 === (1))){
var inst_647079 = cljs.core.vec.call(null,chs);
var inst_647080 = inst_647079;
var state_647108__$1 = (function (){var statearr_647113 = state_647108;
(statearr_647113[(10)] = inst_647080);

return statearr_647113;
})();
var statearr_647114_647139 = state_647108__$1;
(statearr_647114_647139[(2)] = null);

(statearr_647114_647139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647109 === (4))){
var inst_647080 = (state_647108[(10)]);
var state_647108__$1 = state_647108;
return cljs.core.async.ioc_alts_BANG_.call(null,state_647108__$1,(7),inst_647080);
} else {
if((state_val_647109 === (6))){
var inst_647104 = (state_647108[(2)]);
var state_647108__$1 = state_647108;
var statearr_647115_647140 = state_647108__$1;
(statearr_647115_647140[(2)] = inst_647104);

(statearr_647115_647140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647109 === (3))){
var inst_647106 = (state_647108[(2)]);
var state_647108__$1 = state_647108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_647108__$1,inst_647106);
} else {
if((state_val_647109 === (2))){
var inst_647080 = (state_647108[(10)]);
var inst_647082 = cljs.core.count.call(null,inst_647080);
var inst_647083 = (inst_647082 > (0));
var state_647108__$1 = state_647108;
if(cljs.core.truth_(inst_647083)){
var statearr_647117_647141 = state_647108__$1;
(statearr_647117_647141[(1)] = (4));

} else {
var statearr_647118_647142 = state_647108__$1;
(statearr_647118_647142[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647109 === (11))){
var inst_647080 = (state_647108[(10)]);
var inst_647097 = (state_647108[(2)]);
var tmp647116 = inst_647080;
var inst_647080__$1 = tmp647116;
var state_647108__$1 = (function (){var statearr_647119 = state_647108;
(statearr_647119[(11)] = inst_647097);

(statearr_647119[(10)] = inst_647080__$1);

return statearr_647119;
})();
var statearr_647120_647143 = state_647108__$1;
(statearr_647120_647143[(2)] = null);

(statearr_647120_647143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647109 === (9))){
var inst_647088 = (state_647108[(8)]);
var state_647108__$1 = state_647108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_647108__$1,(11),out,inst_647088);
} else {
if((state_val_647109 === (5))){
var inst_647102 = cljs.core.async.close_BANG_.call(null,out);
var state_647108__$1 = state_647108;
var statearr_647121_647144 = state_647108__$1;
(statearr_647121_647144[(2)] = inst_647102);

(statearr_647121_647144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647109 === (10))){
var inst_647100 = (state_647108[(2)]);
var state_647108__$1 = state_647108;
var statearr_647122_647145 = state_647108__$1;
(statearr_647122_647145[(2)] = inst_647100);

(statearr_647122_647145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647109 === (8))){
var inst_647087 = (state_647108[(7)]);
var inst_647088 = (state_647108[(8)]);
var inst_647080 = (state_647108[(10)]);
var inst_647089 = (state_647108[(9)]);
var inst_647092 = (function (){var cs = inst_647080;
var vec__647085 = inst_647087;
var v = inst_647088;
var c = inst_647089;
return ((function (cs,vec__647085,v,c,inst_647087,inst_647088,inst_647080,inst_647089,state_val_647109,c__29846__auto___647136,out){
return (function (p1__647075_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__647075_SHARP_);
});
;})(cs,vec__647085,v,c,inst_647087,inst_647088,inst_647080,inst_647089,state_val_647109,c__29846__auto___647136,out))
})();
var inst_647093 = cljs.core.filterv.call(null,inst_647092,inst_647080);
var inst_647080__$1 = inst_647093;
var state_647108__$1 = (function (){var statearr_647123 = state_647108;
(statearr_647123[(10)] = inst_647080__$1);

return statearr_647123;
})();
var statearr_647124_647146 = state_647108__$1;
(statearr_647124_647146[(2)] = null);

(statearr_647124_647146[(1)] = (2));


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
});})(c__29846__auto___647136,out))
;
return ((function (switch__29734__auto__,c__29846__auto___647136,out){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_647128 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_647128[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_647128[(1)] = (1));

return statearr_647128;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_647108){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_647108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e647129){if((e647129 instanceof Object)){
var ex__29738__auto__ = e647129;
var statearr_647130_647147 = state_647108;
(statearr_647130_647147[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_647108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e647129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__647148 = state_647108;
state_647108 = G__647148;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_647108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_647108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___647136,out))
})();
var state__29848__auto__ = (function (){var statearr_647131 = f__29847__auto__.call(null);
(statearr_647131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___647136);

return statearr_647131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___647136,out))
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
var args647149 = [];
var len__25269__auto___647198 = arguments.length;
var i__25270__auto___647199 = (0);
while(true){
if((i__25270__auto___647199 < len__25269__auto___647198)){
args647149.push((arguments[i__25270__auto___647199]));

var G__647200 = (i__25270__auto___647199 + (1));
i__25270__auto___647199 = G__647200;
continue;
} else {
}
break;
}

var G__647151 = args647149.length;
switch (G__647151) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args647149.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29846__auto___647202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___647202,out){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___647202,out){
return (function (state_647175){
var state_val_647176 = (state_647175[(1)]);
if((state_val_647176 === (7))){
var inst_647157 = (state_647175[(7)]);
var inst_647157__$1 = (state_647175[(2)]);
var inst_647158 = (inst_647157__$1 == null);
var inst_647159 = cljs.core.not.call(null,inst_647158);
var state_647175__$1 = (function (){var statearr_647177 = state_647175;
(statearr_647177[(7)] = inst_647157__$1);

return statearr_647177;
})();
if(inst_647159){
var statearr_647178_647203 = state_647175__$1;
(statearr_647178_647203[(1)] = (8));

} else {
var statearr_647179_647204 = state_647175__$1;
(statearr_647179_647204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647176 === (1))){
var inst_647152 = (0);
var state_647175__$1 = (function (){var statearr_647180 = state_647175;
(statearr_647180[(8)] = inst_647152);

return statearr_647180;
})();
var statearr_647181_647205 = state_647175__$1;
(statearr_647181_647205[(2)] = null);

(statearr_647181_647205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647176 === (4))){
var state_647175__$1 = state_647175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_647175__$1,(7),ch);
} else {
if((state_val_647176 === (6))){
var inst_647170 = (state_647175[(2)]);
var state_647175__$1 = state_647175;
var statearr_647182_647206 = state_647175__$1;
(statearr_647182_647206[(2)] = inst_647170);

(statearr_647182_647206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647176 === (3))){
var inst_647172 = (state_647175[(2)]);
var inst_647173 = cljs.core.async.close_BANG_.call(null,out);
var state_647175__$1 = (function (){var statearr_647183 = state_647175;
(statearr_647183[(9)] = inst_647172);

return statearr_647183;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_647175__$1,inst_647173);
} else {
if((state_val_647176 === (2))){
var inst_647152 = (state_647175[(8)]);
var inst_647154 = (inst_647152 < n);
var state_647175__$1 = state_647175;
if(cljs.core.truth_(inst_647154)){
var statearr_647184_647207 = state_647175__$1;
(statearr_647184_647207[(1)] = (4));

} else {
var statearr_647185_647208 = state_647175__$1;
(statearr_647185_647208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647176 === (11))){
var inst_647152 = (state_647175[(8)]);
var inst_647162 = (state_647175[(2)]);
var inst_647163 = (inst_647152 + (1));
var inst_647152__$1 = inst_647163;
var state_647175__$1 = (function (){var statearr_647186 = state_647175;
(statearr_647186[(8)] = inst_647152__$1);

(statearr_647186[(10)] = inst_647162);

return statearr_647186;
})();
var statearr_647187_647209 = state_647175__$1;
(statearr_647187_647209[(2)] = null);

(statearr_647187_647209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647176 === (9))){
var state_647175__$1 = state_647175;
var statearr_647188_647210 = state_647175__$1;
(statearr_647188_647210[(2)] = null);

(statearr_647188_647210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647176 === (5))){
var state_647175__$1 = state_647175;
var statearr_647189_647211 = state_647175__$1;
(statearr_647189_647211[(2)] = null);

(statearr_647189_647211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647176 === (10))){
var inst_647167 = (state_647175[(2)]);
var state_647175__$1 = state_647175;
var statearr_647190_647212 = state_647175__$1;
(statearr_647190_647212[(2)] = inst_647167);

(statearr_647190_647212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647176 === (8))){
var inst_647157 = (state_647175[(7)]);
var state_647175__$1 = state_647175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_647175__$1,(11),out,inst_647157);
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
});})(c__29846__auto___647202,out))
;
return ((function (switch__29734__auto__,c__29846__auto___647202,out){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_647194 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_647194[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_647194[(1)] = (1));

return statearr_647194;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_647175){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_647175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e647195){if((e647195 instanceof Object)){
var ex__29738__auto__ = e647195;
var statearr_647196_647213 = state_647175;
(statearr_647196_647213[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_647175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e647195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__647214 = state_647175;
state_647175 = G__647214;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_647175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_647175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___647202,out))
})();
var state__29848__auto__ = (function (){var statearr_647197 = f__29847__auto__.call(null);
(statearr_647197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___647202);

return statearr_647197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___647202,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async647222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async647222 = (function (map_LT_,f,ch,meta647223){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta647223 = meta647223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async647222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_647224,meta647223__$1){
var self__ = this;
var _647224__$1 = this;
return (new cljs.core.async.t_cljs$core$async647222(self__.map_LT_,self__.f,self__.ch,meta647223__$1));
});

cljs.core.async.t_cljs$core$async647222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_647224){
var self__ = this;
var _647224__$1 = this;
return self__.meta647223;
});

cljs.core.async.t_cljs$core$async647222.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async647222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async647222.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async647222.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async647222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async647225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async647225 = (function (map_LT_,f,ch,meta647223,_,fn1,meta647226){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta647223 = meta647223;
this._ = _;
this.fn1 = fn1;
this.meta647226 = meta647226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async647225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_647227,meta647226__$1){
var self__ = this;
var _647227__$1 = this;
return (new cljs.core.async.t_cljs$core$async647225(self__.map_LT_,self__.f,self__.ch,self__.meta647223,self__._,self__.fn1,meta647226__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async647225.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_647227){
var self__ = this;
var _647227__$1 = this;
return self__.meta647226;
});})(___$1))
;

cljs.core.async.t_cljs$core$async647225.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async647225.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async647225.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__647215_SHARP_){
return f1.call(null,(((p1__647215_SHARP_ == null))?null:self__.f.call(null,p1__647215_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async647225.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta647223","meta647223",1071556263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async647222","cljs.core.async/t_cljs$core$async647222",-2096906354,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta647226","meta647226",1268607156,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async647225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async647225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async647225";

cljs.core.async.t_cljs$core$async647225.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async647225");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async647225 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async647225(map_LT___$1,f__$1,ch__$1,meta647223__$1,___$2,fn1__$1,meta647226){
return (new cljs.core.async.t_cljs$core$async647225(map_LT___$1,f__$1,ch__$1,meta647223__$1,___$2,fn1__$1,meta647226));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async647225(self__.map_LT_,self__.f,self__.ch,self__.meta647223,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async647222.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async647222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async647222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta647223","meta647223",1071556263,null)], null);
});

cljs.core.async.t_cljs$core$async647222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async647222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async647222";

cljs.core.async.t_cljs$core$async647222.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async647222");
});

cljs.core.async.__GT_t_cljs$core$async647222 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async647222(map_LT___$1,f__$1,ch__$1,meta647223){
return (new cljs.core.async.t_cljs$core$async647222(map_LT___$1,f__$1,ch__$1,meta647223));
});

}

return (new cljs.core.async.t_cljs$core$async647222(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async647231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async647231 = (function (map_GT_,f,ch,meta647232){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta647232 = meta647232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async647231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_647233,meta647232__$1){
var self__ = this;
var _647233__$1 = this;
return (new cljs.core.async.t_cljs$core$async647231(self__.map_GT_,self__.f,self__.ch,meta647232__$1));
});

cljs.core.async.t_cljs$core$async647231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_647233){
var self__ = this;
var _647233__$1 = this;
return self__.meta647232;
});

cljs.core.async.t_cljs$core$async647231.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async647231.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async647231.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async647231.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async647231.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async647231.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async647231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta647232","meta647232",-7799244,null)], null);
});

cljs.core.async.t_cljs$core$async647231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async647231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async647231";

cljs.core.async.t_cljs$core$async647231.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async647231");
});

cljs.core.async.__GT_t_cljs$core$async647231 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async647231(map_GT___$1,f__$1,ch__$1,meta647232){
return (new cljs.core.async.t_cljs$core$async647231(map_GT___$1,f__$1,ch__$1,meta647232));
});

}

return (new cljs.core.async.t_cljs$core$async647231(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async647237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async647237 = (function (filter_GT_,p,ch,meta647238){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta647238 = meta647238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async647237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_647239,meta647238__$1){
var self__ = this;
var _647239__$1 = this;
return (new cljs.core.async.t_cljs$core$async647237(self__.filter_GT_,self__.p,self__.ch,meta647238__$1));
});

cljs.core.async.t_cljs$core$async647237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_647239){
var self__ = this;
var _647239__$1 = this;
return self__.meta647238;
});

cljs.core.async.t_cljs$core$async647237.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async647237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async647237.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async647237.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async647237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async647237.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async647237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async647237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta647238","meta647238",1530621340,null)], null);
});

cljs.core.async.t_cljs$core$async647237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async647237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async647237";

cljs.core.async.t_cljs$core$async647237.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"cljs.core.async/t_cljs$core$async647237");
});

cljs.core.async.__GT_t_cljs$core$async647237 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async647237(filter_GT___$1,p__$1,ch__$1,meta647238){
return (new cljs.core.async.t_cljs$core$async647237(filter_GT___$1,p__$1,ch__$1,meta647238));
});

}

return (new cljs.core.async.t_cljs$core$async647237(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args647240 = [];
var len__25269__auto___647284 = arguments.length;
var i__25270__auto___647285 = (0);
while(true){
if((i__25270__auto___647285 < len__25269__auto___647284)){
args647240.push((arguments[i__25270__auto___647285]));

var G__647286 = (i__25270__auto___647285 + (1));
i__25270__auto___647285 = G__647286;
continue;
} else {
}
break;
}

var G__647242 = args647240.length;
switch (G__647242) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args647240.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29846__auto___647288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___647288,out){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___647288,out){
return (function (state_647263){
var state_val_647264 = (state_647263[(1)]);
if((state_val_647264 === (7))){
var inst_647259 = (state_647263[(2)]);
var state_647263__$1 = state_647263;
var statearr_647265_647289 = state_647263__$1;
(statearr_647265_647289[(2)] = inst_647259);

(statearr_647265_647289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647264 === (1))){
var state_647263__$1 = state_647263;
var statearr_647266_647290 = state_647263__$1;
(statearr_647266_647290[(2)] = null);

(statearr_647266_647290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647264 === (4))){
var inst_647245 = (state_647263[(7)]);
var inst_647245__$1 = (state_647263[(2)]);
var inst_647246 = (inst_647245__$1 == null);
var state_647263__$1 = (function (){var statearr_647267 = state_647263;
(statearr_647267[(7)] = inst_647245__$1);

return statearr_647267;
})();
if(cljs.core.truth_(inst_647246)){
var statearr_647268_647291 = state_647263__$1;
(statearr_647268_647291[(1)] = (5));

} else {
var statearr_647269_647292 = state_647263__$1;
(statearr_647269_647292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647264 === (6))){
var inst_647245 = (state_647263[(7)]);
var inst_647250 = p.call(null,inst_647245);
var state_647263__$1 = state_647263;
if(cljs.core.truth_(inst_647250)){
var statearr_647270_647293 = state_647263__$1;
(statearr_647270_647293[(1)] = (8));

} else {
var statearr_647271_647294 = state_647263__$1;
(statearr_647271_647294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647264 === (3))){
var inst_647261 = (state_647263[(2)]);
var state_647263__$1 = state_647263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_647263__$1,inst_647261);
} else {
if((state_val_647264 === (2))){
var state_647263__$1 = state_647263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_647263__$1,(4),ch);
} else {
if((state_val_647264 === (11))){
var inst_647253 = (state_647263[(2)]);
var state_647263__$1 = state_647263;
var statearr_647272_647295 = state_647263__$1;
(statearr_647272_647295[(2)] = inst_647253);

(statearr_647272_647295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647264 === (9))){
var state_647263__$1 = state_647263;
var statearr_647273_647296 = state_647263__$1;
(statearr_647273_647296[(2)] = null);

(statearr_647273_647296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647264 === (5))){
var inst_647248 = cljs.core.async.close_BANG_.call(null,out);
var state_647263__$1 = state_647263;
var statearr_647274_647297 = state_647263__$1;
(statearr_647274_647297[(2)] = inst_647248);

(statearr_647274_647297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647264 === (10))){
var inst_647256 = (state_647263[(2)]);
var state_647263__$1 = (function (){var statearr_647275 = state_647263;
(statearr_647275[(8)] = inst_647256);

return statearr_647275;
})();
var statearr_647276_647298 = state_647263__$1;
(statearr_647276_647298[(2)] = null);

(statearr_647276_647298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647264 === (8))){
var inst_647245 = (state_647263[(7)]);
var state_647263__$1 = state_647263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_647263__$1,(11),out,inst_647245);
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
});})(c__29846__auto___647288,out))
;
return ((function (switch__29734__auto__,c__29846__auto___647288,out){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_647280 = [null,null,null,null,null,null,null,null,null];
(statearr_647280[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_647280[(1)] = (1));

return statearr_647280;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_647263){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_647263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e647281){if((e647281 instanceof Object)){
var ex__29738__auto__ = e647281;
var statearr_647282_647299 = state_647263;
(statearr_647282_647299[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_647263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e647281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__647300 = state_647263;
state_647263 = G__647300;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_647263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_647263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___647288,out))
})();
var state__29848__auto__ = (function (){var statearr_647283 = f__29847__auto__.call(null);
(statearr_647283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___647288);

return statearr_647283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___647288,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args647301 = [];
var len__25269__auto___647304 = arguments.length;
var i__25270__auto___647305 = (0);
while(true){
if((i__25270__auto___647305 < len__25269__auto___647304)){
args647301.push((arguments[i__25270__auto___647305]));

var G__647306 = (i__25270__auto___647305 + (1));
i__25270__auto___647305 = G__647306;
continue;
} else {
}
break;
}

var G__647303 = args647301.length;
switch (G__647303) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args647301.length)].join('')));

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
return (function (state_647473){
var state_val_647474 = (state_647473[(1)]);
if((state_val_647474 === (7))){
var inst_647469 = (state_647473[(2)]);
var state_647473__$1 = state_647473;
var statearr_647475_647516 = state_647473__$1;
(statearr_647475_647516[(2)] = inst_647469);

(statearr_647475_647516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (20))){
var inst_647439 = (state_647473[(7)]);
var inst_647450 = (state_647473[(2)]);
var inst_647451 = cljs.core.next.call(null,inst_647439);
var inst_647425 = inst_647451;
var inst_647426 = null;
var inst_647427 = (0);
var inst_647428 = (0);
var state_647473__$1 = (function (){var statearr_647476 = state_647473;
(statearr_647476[(8)] = inst_647427);

(statearr_647476[(9)] = inst_647428);

(statearr_647476[(10)] = inst_647450);

(statearr_647476[(11)] = inst_647425);

(statearr_647476[(12)] = inst_647426);

return statearr_647476;
})();
var statearr_647477_647517 = state_647473__$1;
(statearr_647477_647517[(2)] = null);

(statearr_647477_647517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (1))){
var state_647473__$1 = state_647473;
var statearr_647478_647518 = state_647473__$1;
(statearr_647478_647518[(2)] = null);

(statearr_647478_647518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (4))){
var inst_647414 = (state_647473[(13)]);
var inst_647414__$1 = (state_647473[(2)]);
var inst_647415 = (inst_647414__$1 == null);
var state_647473__$1 = (function (){var statearr_647479 = state_647473;
(statearr_647479[(13)] = inst_647414__$1);

return statearr_647479;
})();
if(cljs.core.truth_(inst_647415)){
var statearr_647480_647519 = state_647473__$1;
(statearr_647480_647519[(1)] = (5));

} else {
var statearr_647481_647520 = state_647473__$1;
(statearr_647481_647520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (15))){
var state_647473__$1 = state_647473;
var statearr_647485_647521 = state_647473__$1;
(statearr_647485_647521[(2)] = null);

(statearr_647485_647521[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (21))){
var state_647473__$1 = state_647473;
var statearr_647486_647522 = state_647473__$1;
(statearr_647486_647522[(2)] = null);

(statearr_647486_647522[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (13))){
var inst_647427 = (state_647473[(8)]);
var inst_647428 = (state_647473[(9)]);
var inst_647425 = (state_647473[(11)]);
var inst_647426 = (state_647473[(12)]);
var inst_647435 = (state_647473[(2)]);
var inst_647436 = (inst_647428 + (1));
var tmp647482 = inst_647427;
var tmp647483 = inst_647425;
var tmp647484 = inst_647426;
var inst_647425__$1 = tmp647483;
var inst_647426__$1 = tmp647484;
var inst_647427__$1 = tmp647482;
var inst_647428__$1 = inst_647436;
var state_647473__$1 = (function (){var statearr_647487 = state_647473;
(statearr_647487[(8)] = inst_647427__$1);

(statearr_647487[(9)] = inst_647428__$1);

(statearr_647487[(14)] = inst_647435);

(statearr_647487[(11)] = inst_647425__$1);

(statearr_647487[(12)] = inst_647426__$1);

return statearr_647487;
})();
var statearr_647488_647523 = state_647473__$1;
(statearr_647488_647523[(2)] = null);

(statearr_647488_647523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (22))){
var state_647473__$1 = state_647473;
var statearr_647489_647524 = state_647473__$1;
(statearr_647489_647524[(2)] = null);

(statearr_647489_647524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (6))){
var inst_647414 = (state_647473[(13)]);
var inst_647423 = f.call(null,inst_647414);
var inst_647424 = cljs.core.seq.call(null,inst_647423);
var inst_647425 = inst_647424;
var inst_647426 = null;
var inst_647427 = (0);
var inst_647428 = (0);
var state_647473__$1 = (function (){var statearr_647490 = state_647473;
(statearr_647490[(8)] = inst_647427);

(statearr_647490[(9)] = inst_647428);

(statearr_647490[(11)] = inst_647425);

(statearr_647490[(12)] = inst_647426);

return statearr_647490;
})();
var statearr_647491_647525 = state_647473__$1;
(statearr_647491_647525[(2)] = null);

(statearr_647491_647525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (17))){
var inst_647439 = (state_647473[(7)]);
var inst_647443 = cljs.core.chunk_first.call(null,inst_647439);
var inst_647444 = cljs.core.chunk_rest.call(null,inst_647439);
var inst_647445 = cljs.core.count.call(null,inst_647443);
var inst_647425 = inst_647444;
var inst_647426 = inst_647443;
var inst_647427 = inst_647445;
var inst_647428 = (0);
var state_647473__$1 = (function (){var statearr_647492 = state_647473;
(statearr_647492[(8)] = inst_647427);

(statearr_647492[(9)] = inst_647428);

(statearr_647492[(11)] = inst_647425);

(statearr_647492[(12)] = inst_647426);

return statearr_647492;
})();
var statearr_647493_647526 = state_647473__$1;
(statearr_647493_647526[(2)] = null);

(statearr_647493_647526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (3))){
var inst_647471 = (state_647473[(2)]);
var state_647473__$1 = state_647473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_647473__$1,inst_647471);
} else {
if((state_val_647474 === (12))){
var inst_647459 = (state_647473[(2)]);
var state_647473__$1 = state_647473;
var statearr_647494_647527 = state_647473__$1;
(statearr_647494_647527[(2)] = inst_647459);

(statearr_647494_647527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (2))){
var state_647473__$1 = state_647473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_647473__$1,(4),in$);
} else {
if((state_val_647474 === (23))){
var inst_647467 = (state_647473[(2)]);
var state_647473__$1 = state_647473;
var statearr_647495_647528 = state_647473__$1;
(statearr_647495_647528[(2)] = inst_647467);

(statearr_647495_647528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (19))){
var inst_647454 = (state_647473[(2)]);
var state_647473__$1 = state_647473;
var statearr_647496_647529 = state_647473__$1;
(statearr_647496_647529[(2)] = inst_647454);

(statearr_647496_647529[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (11))){
var inst_647439 = (state_647473[(7)]);
var inst_647425 = (state_647473[(11)]);
var inst_647439__$1 = cljs.core.seq.call(null,inst_647425);
var state_647473__$1 = (function (){var statearr_647497 = state_647473;
(statearr_647497[(7)] = inst_647439__$1);

return statearr_647497;
})();
if(inst_647439__$1){
var statearr_647498_647530 = state_647473__$1;
(statearr_647498_647530[(1)] = (14));

} else {
var statearr_647499_647531 = state_647473__$1;
(statearr_647499_647531[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (9))){
var inst_647461 = (state_647473[(2)]);
var inst_647462 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_647473__$1 = (function (){var statearr_647500 = state_647473;
(statearr_647500[(15)] = inst_647461);

return statearr_647500;
})();
if(cljs.core.truth_(inst_647462)){
var statearr_647501_647532 = state_647473__$1;
(statearr_647501_647532[(1)] = (21));

} else {
var statearr_647502_647533 = state_647473__$1;
(statearr_647502_647533[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (5))){
var inst_647417 = cljs.core.async.close_BANG_.call(null,out);
var state_647473__$1 = state_647473;
var statearr_647503_647534 = state_647473__$1;
(statearr_647503_647534[(2)] = inst_647417);

(statearr_647503_647534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (14))){
var inst_647439 = (state_647473[(7)]);
var inst_647441 = cljs.core.chunked_seq_QMARK_.call(null,inst_647439);
var state_647473__$1 = state_647473;
if(inst_647441){
var statearr_647504_647535 = state_647473__$1;
(statearr_647504_647535[(1)] = (17));

} else {
var statearr_647505_647536 = state_647473__$1;
(statearr_647505_647536[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (16))){
var inst_647457 = (state_647473[(2)]);
var state_647473__$1 = state_647473;
var statearr_647506_647537 = state_647473__$1;
(statearr_647506_647537[(2)] = inst_647457);

(statearr_647506_647537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647474 === (10))){
var inst_647428 = (state_647473[(9)]);
var inst_647426 = (state_647473[(12)]);
var inst_647433 = cljs.core._nth.call(null,inst_647426,inst_647428);
var state_647473__$1 = state_647473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_647473__$1,(13),out,inst_647433);
} else {
if((state_val_647474 === (18))){
var inst_647439 = (state_647473[(7)]);
var inst_647448 = cljs.core.first.call(null,inst_647439);
var state_647473__$1 = state_647473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_647473__$1,(20),out,inst_647448);
} else {
if((state_val_647474 === (8))){
var inst_647427 = (state_647473[(8)]);
var inst_647428 = (state_647473[(9)]);
var inst_647430 = (inst_647428 < inst_647427);
var inst_647431 = inst_647430;
var state_647473__$1 = state_647473;
if(cljs.core.truth_(inst_647431)){
var statearr_647507_647538 = state_647473__$1;
(statearr_647507_647538[(1)] = (10));

} else {
var statearr_647508_647539 = state_647473__$1;
(statearr_647508_647539[(1)] = (11));

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
var statearr_647512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_647512[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29735__auto__);

(statearr_647512[(1)] = (1));

return statearr_647512;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29735__auto____1 = (function (state_647473){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_647473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e647513){if((e647513 instanceof Object)){
var ex__29738__auto__ = e647513;
var statearr_647514_647540 = state_647473;
(statearr_647514_647540[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_647473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e647513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__647541 = state_647473;
state_647473 = G__647541;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29735__auto__ = function(state_647473){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29735__auto____1.call(this,state_647473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29735__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29735__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto__))
})();
var state__29848__auto__ = (function (){var statearr_647515 = f__29847__auto__.call(null);
(statearr_647515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto__);

return statearr_647515;
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
var args647542 = [];
var len__25269__auto___647545 = arguments.length;
var i__25270__auto___647546 = (0);
while(true){
if((i__25270__auto___647546 < len__25269__auto___647545)){
args647542.push((arguments[i__25270__auto___647546]));

var G__647547 = (i__25270__auto___647546 + (1));
i__25270__auto___647546 = G__647547;
continue;
} else {
}
break;
}

var G__647544 = args647542.length;
switch (G__647544) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args647542.length)].join('')));

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
var args647549 = [];
var len__25269__auto___647552 = arguments.length;
var i__25270__auto___647553 = (0);
while(true){
if((i__25270__auto___647553 < len__25269__auto___647552)){
args647549.push((arguments[i__25270__auto___647553]));

var G__647554 = (i__25270__auto___647553 + (1));
i__25270__auto___647553 = G__647554;
continue;
} else {
}
break;
}

var G__647551 = args647549.length;
switch (G__647551) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args647549.length)].join('')));

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
var args647556 = [];
var len__25269__auto___647607 = arguments.length;
var i__25270__auto___647608 = (0);
while(true){
if((i__25270__auto___647608 < len__25269__auto___647607)){
args647556.push((arguments[i__25270__auto___647608]));

var G__647609 = (i__25270__auto___647608 + (1));
i__25270__auto___647608 = G__647609;
continue;
} else {
}
break;
}

var G__647558 = args647556.length;
switch (G__647558) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args647556.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29846__auto___647611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___647611,out){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___647611,out){
return (function (state_647582){
var state_val_647583 = (state_647582[(1)]);
if((state_val_647583 === (7))){
var inst_647577 = (state_647582[(2)]);
var state_647582__$1 = state_647582;
var statearr_647584_647612 = state_647582__$1;
(statearr_647584_647612[(2)] = inst_647577);

(statearr_647584_647612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647583 === (1))){
var inst_647559 = null;
var state_647582__$1 = (function (){var statearr_647585 = state_647582;
(statearr_647585[(7)] = inst_647559);

return statearr_647585;
})();
var statearr_647586_647613 = state_647582__$1;
(statearr_647586_647613[(2)] = null);

(statearr_647586_647613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647583 === (4))){
var inst_647562 = (state_647582[(8)]);
var inst_647562__$1 = (state_647582[(2)]);
var inst_647563 = (inst_647562__$1 == null);
var inst_647564 = cljs.core.not.call(null,inst_647563);
var state_647582__$1 = (function (){var statearr_647587 = state_647582;
(statearr_647587[(8)] = inst_647562__$1);

return statearr_647587;
})();
if(inst_647564){
var statearr_647588_647614 = state_647582__$1;
(statearr_647588_647614[(1)] = (5));

} else {
var statearr_647589_647615 = state_647582__$1;
(statearr_647589_647615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647583 === (6))){
var state_647582__$1 = state_647582;
var statearr_647590_647616 = state_647582__$1;
(statearr_647590_647616[(2)] = null);

(statearr_647590_647616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647583 === (3))){
var inst_647579 = (state_647582[(2)]);
var inst_647580 = cljs.core.async.close_BANG_.call(null,out);
var state_647582__$1 = (function (){var statearr_647591 = state_647582;
(statearr_647591[(9)] = inst_647579);

return statearr_647591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_647582__$1,inst_647580);
} else {
if((state_val_647583 === (2))){
var state_647582__$1 = state_647582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_647582__$1,(4),ch);
} else {
if((state_val_647583 === (11))){
var inst_647562 = (state_647582[(8)]);
var inst_647571 = (state_647582[(2)]);
var inst_647559 = inst_647562;
var state_647582__$1 = (function (){var statearr_647592 = state_647582;
(statearr_647592[(10)] = inst_647571);

(statearr_647592[(7)] = inst_647559);

return statearr_647592;
})();
var statearr_647593_647617 = state_647582__$1;
(statearr_647593_647617[(2)] = null);

(statearr_647593_647617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647583 === (9))){
var inst_647562 = (state_647582[(8)]);
var state_647582__$1 = state_647582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_647582__$1,(11),out,inst_647562);
} else {
if((state_val_647583 === (5))){
var inst_647559 = (state_647582[(7)]);
var inst_647562 = (state_647582[(8)]);
var inst_647566 = cljs.core._EQ_.call(null,inst_647562,inst_647559);
var state_647582__$1 = state_647582;
if(inst_647566){
var statearr_647595_647618 = state_647582__$1;
(statearr_647595_647618[(1)] = (8));

} else {
var statearr_647596_647619 = state_647582__$1;
(statearr_647596_647619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647583 === (10))){
var inst_647574 = (state_647582[(2)]);
var state_647582__$1 = state_647582;
var statearr_647597_647620 = state_647582__$1;
(statearr_647597_647620[(2)] = inst_647574);

(statearr_647597_647620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647583 === (8))){
var inst_647559 = (state_647582[(7)]);
var tmp647594 = inst_647559;
var inst_647559__$1 = tmp647594;
var state_647582__$1 = (function (){var statearr_647598 = state_647582;
(statearr_647598[(7)] = inst_647559__$1);

return statearr_647598;
})();
var statearr_647599_647621 = state_647582__$1;
(statearr_647599_647621[(2)] = null);

(statearr_647599_647621[(1)] = (2));


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
});})(c__29846__auto___647611,out))
;
return ((function (switch__29734__auto__,c__29846__auto___647611,out){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_647603 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_647603[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_647603[(1)] = (1));

return statearr_647603;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_647582){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_647582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e647604){if((e647604 instanceof Object)){
var ex__29738__auto__ = e647604;
var statearr_647605_647622 = state_647582;
(statearr_647605_647622[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_647582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e647604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__647623 = state_647582;
state_647582 = G__647623;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_647582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_647582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___647611,out))
})();
var state__29848__auto__ = (function (){var statearr_647606 = f__29847__auto__.call(null);
(statearr_647606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___647611);

return statearr_647606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___647611,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args647624 = [];
var len__25269__auto___647694 = arguments.length;
var i__25270__auto___647695 = (0);
while(true){
if((i__25270__auto___647695 < len__25269__auto___647694)){
args647624.push((arguments[i__25270__auto___647695]));

var G__647696 = (i__25270__auto___647695 + (1));
i__25270__auto___647695 = G__647696;
continue;
} else {
}
break;
}

var G__647626 = args647624.length;
switch (G__647626) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args647624.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29846__auto___647698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___647698,out){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___647698,out){
return (function (state_647664){
var state_val_647665 = (state_647664[(1)]);
if((state_val_647665 === (7))){
var inst_647660 = (state_647664[(2)]);
var state_647664__$1 = state_647664;
var statearr_647666_647699 = state_647664__$1;
(statearr_647666_647699[(2)] = inst_647660);

(statearr_647666_647699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647665 === (1))){
var inst_647627 = (new Array(n));
var inst_647628 = inst_647627;
var inst_647629 = (0);
var state_647664__$1 = (function (){var statearr_647667 = state_647664;
(statearr_647667[(7)] = inst_647629);

(statearr_647667[(8)] = inst_647628);

return statearr_647667;
})();
var statearr_647668_647700 = state_647664__$1;
(statearr_647668_647700[(2)] = null);

(statearr_647668_647700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647665 === (4))){
var inst_647632 = (state_647664[(9)]);
var inst_647632__$1 = (state_647664[(2)]);
var inst_647633 = (inst_647632__$1 == null);
var inst_647634 = cljs.core.not.call(null,inst_647633);
var state_647664__$1 = (function (){var statearr_647669 = state_647664;
(statearr_647669[(9)] = inst_647632__$1);

return statearr_647669;
})();
if(inst_647634){
var statearr_647670_647701 = state_647664__$1;
(statearr_647670_647701[(1)] = (5));

} else {
var statearr_647671_647702 = state_647664__$1;
(statearr_647671_647702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647665 === (15))){
var inst_647654 = (state_647664[(2)]);
var state_647664__$1 = state_647664;
var statearr_647672_647703 = state_647664__$1;
(statearr_647672_647703[(2)] = inst_647654);

(statearr_647672_647703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647665 === (13))){
var state_647664__$1 = state_647664;
var statearr_647673_647704 = state_647664__$1;
(statearr_647673_647704[(2)] = null);

(statearr_647673_647704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647665 === (6))){
var inst_647629 = (state_647664[(7)]);
var inst_647650 = (inst_647629 > (0));
var state_647664__$1 = state_647664;
if(cljs.core.truth_(inst_647650)){
var statearr_647674_647705 = state_647664__$1;
(statearr_647674_647705[(1)] = (12));

} else {
var statearr_647675_647706 = state_647664__$1;
(statearr_647675_647706[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647665 === (3))){
var inst_647662 = (state_647664[(2)]);
var state_647664__$1 = state_647664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_647664__$1,inst_647662);
} else {
if((state_val_647665 === (12))){
var inst_647628 = (state_647664[(8)]);
var inst_647652 = cljs.core.vec.call(null,inst_647628);
var state_647664__$1 = state_647664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_647664__$1,(15),out,inst_647652);
} else {
if((state_val_647665 === (2))){
var state_647664__$1 = state_647664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_647664__$1,(4),ch);
} else {
if((state_val_647665 === (11))){
var inst_647644 = (state_647664[(2)]);
var inst_647645 = (new Array(n));
var inst_647628 = inst_647645;
var inst_647629 = (0);
var state_647664__$1 = (function (){var statearr_647676 = state_647664;
(statearr_647676[(7)] = inst_647629);

(statearr_647676[(8)] = inst_647628);

(statearr_647676[(10)] = inst_647644);

return statearr_647676;
})();
var statearr_647677_647707 = state_647664__$1;
(statearr_647677_647707[(2)] = null);

(statearr_647677_647707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647665 === (9))){
var inst_647628 = (state_647664[(8)]);
var inst_647642 = cljs.core.vec.call(null,inst_647628);
var state_647664__$1 = state_647664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_647664__$1,(11),out,inst_647642);
} else {
if((state_val_647665 === (5))){
var inst_647629 = (state_647664[(7)]);
var inst_647628 = (state_647664[(8)]);
var inst_647632 = (state_647664[(9)]);
var inst_647637 = (state_647664[(11)]);
var inst_647636 = (inst_647628[inst_647629] = inst_647632);
var inst_647637__$1 = (inst_647629 + (1));
var inst_647638 = (inst_647637__$1 < n);
var state_647664__$1 = (function (){var statearr_647678 = state_647664;
(statearr_647678[(12)] = inst_647636);

(statearr_647678[(11)] = inst_647637__$1);

return statearr_647678;
})();
if(cljs.core.truth_(inst_647638)){
var statearr_647679_647708 = state_647664__$1;
(statearr_647679_647708[(1)] = (8));

} else {
var statearr_647680_647709 = state_647664__$1;
(statearr_647680_647709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647665 === (14))){
var inst_647657 = (state_647664[(2)]);
var inst_647658 = cljs.core.async.close_BANG_.call(null,out);
var state_647664__$1 = (function (){var statearr_647682 = state_647664;
(statearr_647682[(13)] = inst_647657);

return statearr_647682;
})();
var statearr_647683_647710 = state_647664__$1;
(statearr_647683_647710[(2)] = inst_647658);

(statearr_647683_647710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647665 === (10))){
var inst_647648 = (state_647664[(2)]);
var state_647664__$1 = state_647664;
var statearr_647684_647711 = state_647664__$1;
(statearr_647684_647711[(2)] = inst_647648);

(statearr_647684_647711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647665 === (8))){
var inst_647628 = (state_647664[(8)]);
var inst_647637 = (state_647664[(11)]);
var tmp647681 = inst_647628;
var inst_647628__$1 = tmp647681;
var inst_647629 = inst_647637;
var state_647664__$1 = (function (){var statearr_647685 = state_647664;
(statearr_647685[(7)] = inst_647629);

(statearr_647685[(8)] = inst_647628__$1);

return statearr_647685;
})();
var statearr_647686_647712 = state_647664__$1;
(statearr_647686_647712[(2)] = null);

(statearr_647686_647712[(1)] = (2));


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
});})(c__29846__auto___647698,out))
;
return ((function (switch__29734__auto__,c__29846__auto___647698,out){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_647690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_647690[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_647690[(1)] = (1));

return statearr_647690;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_647664){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_647664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e647691){if((e647691 instanceof Object)){
var ex__29738__auto__ = e647691;
var statearr_647692_647713 = state_647664;
(statearr_647692_647713[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_647664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e647691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__647714 = state_647664;
state_647664 = G__647714;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_647664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_647664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___647698,out))
})();
var state__29848__auto__ = (function (){var statearr_647693 = f__29847__auto__.call(null);
(statearr_647693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___647698);

return statearr_647693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___647698,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args647715 = [];
var len__25269__auto___647789 = arguments.length;
var i__25270__auto___647790 = (0);
while(true){
if((i__25270__auto___647790 < len__25269__auto___647789)){
args647715.push((arguments[i__25270__auto___647790]));

var G__647791 = (i__25270__auto___647790 + (1));
i__25270__auto___647790 = G__647791;
continue;
} else {
}
break;
}

var G__647717 = args647715.length;
switch (G__647717) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args647715.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29846__auto___647793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___647793,out){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___647793,out){
return (function (state_647759){
var state_val_647760 = (state_647759[(1)]);
if((state_val_647760 === (7))){
var inst_647755 = (state_647759[(2)]);
var state_647759__$1 = state_647759;
var statearr_647761_647794 = state_647759__$1;
(statearr_647761_647794[(2)] = inst_647755);

(statearr_647761_647794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647760 === (1))){
var inst_647718 = [];
var inst_647719 = inst_647718;
var inst_647720 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_647759__$1 = (function (){var statearr_647762 = state_647759;
(statearr_647762[(7)] = inst_647719);

(statearr_647762[(8)] = inst_647720);

return statearr_647762;
})();
var statearr_647763_647795 = state_647759__$1;
(statearr_647763_647795[(2)] = null);

(statearr_647763_647795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647760 === (4))){
var inst_647723 = (state_647759[(9)]);
var inst_647723__$1 = (state_647759[(2)]);
var inst_647724 = (inst_647723__$1 == null);
var inst_647725 = cljs.core.not.call(null,inst_647724);
var state_647759__$1 = (function (){var statearr_647764 = state_647759;
(statearr_647764[(9)] = inst_647723__$1);

return statearr_647764;
})();
if(inst_647725){
var statearr_647765_647796 = state_647759__$1;
(statearr_647765_647796[(1)] = (5));

} else {
var statearr_647766_647797 = state_647759__$1;
(statearr_647766_647797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647760 === (15))){
var inst_647749 = (state_647759[(2)]);
var state_647759__$1 = state_647759;
var statearr_647767_647798 = state_647759__$1;
(statearr_647767_647798[(2)] = inst_647749);

(statearr_647767_647798[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647760 === (13))){
var state_647759__$1 = state_647759;
var statearr_647768_647799 = state_647759__$1;
(statearr_647768_647799[(2)] = null);

(statearr_647768_647799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647760 === (6))){
var inst_647719 = (state_647759[(7)]);
var inst_647744 = inst_647719.length;
var inst_647745 = (inst_647744 > (0));
var state_647759__$1 = state_647759;
if(cljs.core.truth_(inst_647745)){
var statearr_647769_647800 = state_647759__$1;
(statearr_647769_647800[(1)] = (12));

} else {
var statearr_647770_647801 = state_647759__$1;
(statearr_647770_647801[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647760 === (3))){
var inst_647757 = (state_647759[(2)]);
var state_647759__$1 = state_647759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_647759__$1,inst_647757);
} else {
if((state_val_647760 === (12))){
var inst_647719 = (state_647759[(7)]);
var inst_647747 = cljs.core.vec.call(null,inst_647719);
var state_647759__$1 = state_647759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_647759__$1,(15),out,inst_647747);
} else {
if((state_val_647760 === (2))){
var state_647759__$1 = state_647759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_647759__$1,(4),ch);
} else {
if((state_val_647760 === (11))){
var inst_647723 = (state_647759[(9)]);
var inst_647727 = (state_647759[(10)]);
var inst_647737 = (state_647759[(2)]);
var inst_647738 = [];
var inst_647739 = inst_647738.push(inst_647723);
var inst_647719 = inst_647738;
var inst_647720 = inst_647727;
var state_647759__$1 = (function (){var statearr_647771 = state_647759;
(statearr_647771[(11)] = inst_647739);

(statearr_647771[(7)] = inst_647719);

(statearr_647771[(8)] = inst_647720);

(statearr_647771[(12)] = inst_647737);

return statearr_647771;
})();
var statearr_647772_647802 = state_647759__$1;
(statearr_647772_647802[(2)] = null);

(statearr_647772_647802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647760 === (9))){
var inst_647719 = (state_647759[(7)]);
var inst_647735 = cljs.core.vec.call(null,inst_647719);
var state_647759__$1 = state_647759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_647759__$1,(11),out,inst_647735);
} else {
if((state_val_647760 === (5))){
var inst_647720 = (state_647759[(8)]);
var inst_647723 = (state_647759[(9)]);
var inst_647727 = (state_647759[(10)]);
var inst_647727__$1 = f.call(null,inst_647723);
var inst_647728 = cljs.core._EQ_.call(null,inst_647727__$1,inst_647720);
var inst_647729 = cljs.core.keyword_identical_QMARK_.call(null,inst_647720,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_647730 = (inst_647728) || (inst_647729);
var state_647759__$1 = (function (){var statearr_647773 = state_647759;
(statearr_647773[(10)] = inst_647727__$1);

return statearr_647773;
})();
if(cljs.core.truth_(inst_647730)){
var statearr_647774_647803 = state_647759__$1;
(statearr_647774_647803[(1)] = (8));

} else {
var statearr_647775_647804 = state_647759__$1;
(statearr_647775_647804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647760 === (14))){
var inst_647752 = (state_647759[(2)]);
var inst_647753 = cljs.core.async.close_BANG_.call(null,out);
var state_647759__$1 = (function (){var statearr_647777 = state_647759;
(statearr_647777[(13)] = inst_647752);

return statearr_647777;
})();
var statearr_647778_647805 = state_647759__$1;
(statearr_647778_647805[(2)] = inst_647753);

(statearr_647778_647805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647760 === (10))){
var inst_647742 = (state_647759[(2)]);
var state_647759__$1 = state_647759;
var statearr_647779_647806 = state_647759__$1;
(statearr_647779_647806[(2)] = inst_647742);

(statearr_647779_647806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_647760 === (8))){
var inst_647719 = (state_647759[(7)]);
var inst_647723 = (state_647759[(9)]);
var inst_647727 = (state_647759[(10)]);
var inst_647732 = inst_647719.push(inst_647723);
var tmp647776 = inst_647719;
var inst_647719__$1 = tmp647776;
var inst_647720 = inst_647727;
var state_647759__$1 = (function (){var statearr_647780 = state_647759;
(statearr_647780[(7)] = inst_647719__$1);

(statearr_647780[(14)] = inst_647732);

(statearr_647780[(8)] = inst_647720);

return statearr_647780;
})();
var statearr_647781_647807 = state_647759__$1;
(statearr_647781_647807[(2)] = null);

(statearr_647781_647807[(1)] = (2));


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
});})(c__29846__auto___647793,out))
;
return ((function (switch__29734__auto__,c__29846__auto___647793,out){
return (function() {
var cljs$core$async$state_machine__29735__auto__ = null;
var cljs$core$async$state_machine__29735__auto____0 = (function (){
var statearr_647785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_647785[(0)] = cljs$core$async$state_machine__29735__auto__);

(statearr_647785[(1)] = (1));

return statearr_647785;
});
var cljs$core$async$state_machine__29735__auto____1 = (function (state_647759){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_647759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e647786){if((e647786 instanceof Object)){
var ex__29738__auto__ = e647786;
var statearr_647787_647808 = state_647759;
(statearr_647787_647808[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_647759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e647786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__647809 = state_647759;
state_647759 = G__647809;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
cljs$core$async$state_machine__29735__auto__ = function(state_647759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29735__auto____1.call(this,state_647759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29735__auto____0;
cljs$core$async$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29735__auto____1;
return cljs$core$async$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___647793,out))
})();
var state__29848__auto__ = (function (){var statearr_647788 = f__29847__auto__.call(null);
(statearr_647788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___647793);

return statearr_647788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___647793,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map