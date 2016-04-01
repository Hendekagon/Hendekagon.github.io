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
var args68613 = [];
var len__36491__auto___68619 = arguments.length;
var i__36492__auto___68620 = (0);
while(true){
if((i__36492__auto___68620 < len__36491__auto___68619)){
args68613.push((arguments[i__36492__auto___68620]));

var G__68621 = (i__36492__auto___68620 + (1));
i__36492__auto___68620 = G__68621;
continue;
} else {
}
break;
}

var G__68615 = args68613.length;
switch (G__68615) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68613.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async68616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68616 = (function (f,blockable,meta68617){
this.f = f;
this.blockable = blockable;
this.meta68617 = meta68617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async68616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68618,meta68617__$1){
var self__ = this;
var _68618__$1 = this;
return (new cljs.core.async.t_cljs$core$async68616(self__.f,self__.blockable,meta68617__$1));
});

cljs.core.async.t_cljs$core$async68616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68618){
var self__ = this;
var _68618__$1 = this;
return self__.meta68617;
});

cljs.core.async.t_cljs$core$async68616.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async68616.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async68616.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async68616.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async68616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta68617","meta68617",-1705601385,null)], null);
});

cljs.core.async.t_cljs$core$async68616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68616";

cljs.core.async.t_cljs$core$async68616.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async68616");
});

cljs.core.async.__GT_t_cljs$core$async68616 = (function cljs$core$async$__GT_t_cljs$core$async68616(f__$1,blockable__$1,meta68617){
return (new cljs.core.async.t_cljs$core$async68616(f__$1,blockable__$1,meta68617));
});

}

return (new cljs.core.async.t_cljs$core$async68616(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args68625 = [];
var len__36491__auto___68628 = arguments.length;
var i__36492__auto___68629 = (0);
while(true){
if((i__36492__auto___68629 < len__36491__auto___68628)){
args68625.push((arguments[i__36492__auto___68629]));

var G__68630 = (i__36492__auto___68629 + (1));
i__36492__auto___68629 = G__68630;
continue;
} else {
}
break;
}

var G__68627 = args68625.length;
switch (G__68627) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68625.length)].join('')));

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
var args68632 = [];
var len__36491__auto___68635 = arguments.length;
var i__36492__auto___68636 = (0);
while(true){
if((i__36492__auto___68636 < len__36491__auto___68635)){
args68632.push((arguments[i__36492__auto___68636]));

var G__68637 = (i__36492__auto___68636 + (1));
i__36492__auto___68636 = G__68637;
continue;
} else {
}
break;
}

var G__68634 = args68632.length;
switch (G__68634) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68632.length)].join('')));

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
var args68639 = [];
var len__36491__auto___68642 = arguments.length;
var i__36492__auto___68643 = (0);
while(true){
if((i__36492__auto___68643 < len__36491__auto___68642)){
args68639.push((arguments[i__36492__auto___68643]));

var G__68644 = (i__36492__auto___68643 + (1));
i__36492__auto___68643 = G__68644;
continue;
} else {
}
break;
}

var G__68641 = args68639.length;
switch (G__68641) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68639.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_68646 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_68646);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_68646,ret){
return (function (){
return fn1.call(null,val_68646);
});})(val_68646,ret))
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
var args68647 = [];
var len__36491__auto___68650 = arguments.length;
var i__36492__auto___68651 = (0);
while(true){
if((i__36492__auto___68651 < len__36491__auto___68650)){
args68647.push((arguments[i__36492__auto___68651]));

var G__68652 = (i__36492__auto___68651 + (1));
i__36492__auto___68651 = G__68652;
continue;
} else {
}
break;
}

var G__68649 = args68647.length;
switch (G__68649) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68647.length)].join('')));

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
var n__36336__auto___68654 = n;
var x_68655 = (0);
while(true){
if((x_68655 < n__36336__auto___68654)){
(a[x_68655] = (0));

var G__68656 = (x_68655 + (1));
x_68655 = G__68656;
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

var G__68657 = (i + (1));
i = G__68657;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async68661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68661 = (function (alt_flag,flag,meta68662){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta68662 = meta68662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async68661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_68663,meta68662__$1){
var self__ = this;
var _68663__$1 = this;
return (new cljs.core.async.t_cljs$core$async68661(self__.alt_flag,self__.flag,meta68662__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async68661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_68663){
var self__ = this;
var _68663__$1 = this;
return self__.meta68662;
});})(flag))
;

cljs.core.async.t_cljs$core$async68661.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async68661.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async68661.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async68661.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async68661.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta68662","meta68662",-1276934952,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async68661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68661";

cljs.core.async.t_cljs$core$async68661.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async68661");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async68661 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async68661(alt_flag__$1,flag__$1,meta68662){
return (new cljs.core.async.t_cljs$core$async68661(alt_flag__$1,flag__$1,meta68662));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async68661(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async68667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68667 = (function (alt_handler,flag,cb,meta68668){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta68668 = meta68668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async68667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68669,meta68668__$1){
var self__ = this;
var _68669__$1 = this;
return (new cljs.core.async.t_cljs$core$async68667(self__.alt_handler,self__.flag,self__.cb,meta68668__$1));
});

cljs.core.async.t_cljs$core$async68667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68669){
var self__ = this;
var _68669__$1 = this;
return self__.meta68668;
});

cljs.core.async.t_cljs$core$async68667.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async68667.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async68667.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async68667.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async68667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta68668","meta68668",-973807728,null)], null);
});

cljs.core.async.t_cljs$core$async68667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68667";

cljs.core.async.t_cljs$core$async68667.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async68667");
});

cljs.core.async.__GT_t_cljs$core$async68667 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async68667(alt_handler__$1,flag__$1,cb__$1,meta68668){
return (new cljs.core.async.t_cljs$core$async68667(alt_handler__$1,flag__$1,cb__$1,meta68668));
});

}

return (new cljs.core.async.t_cljs$core$async68667(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__68670_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68670_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__68671_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__68671_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__35422__auto__ = wport;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return port;
}
})()], null));
} else {
var G__68672 = (i + (1));
i = G__68672;
continue;
}
} else {
return null;
}
break;
}
})();
var or__35422__auto__ = ret;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__35410__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__35410__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__35410__auto__;
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
var args__36498__auto__ = [];
var len__36491__auto___68678 = arguments.length;
var i__36492__auto___68679 = (0);
while(true){
if((i__36492__auto___68679 < len__36491__auto___68678)){
args__36498__auto__.push((arguments[i__36492__auto___68679]));

var G__68680 = (i__36492__auto___68679 + (1));
i__36492__auto___68679 = G__68680;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__68675){
var map__68676 = p__68675;
var map__68676__$1 = ((((!((map__68676 == null)))?((((map__68676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68676):map__68676);
var opts = map__68676__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq68673){
var G__68674 = cljs.core.first.call(null,seq68673);
var seq68673__$1 = cljs.core.next.call(null,seq68673);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__68674,seq68673__$1);
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
var args68681 = [];
var len__36491__auto___68731 = arguments.length;
var i__36492__auto___68732 = (0);
while(true){
if((i__36492__auto___68732 < len__36491__auto___68731)){
args68681.push((arguments[i__36492__auto___68732]));

var G__68733 = (i__36492__auto___68732 + (1));
i__36492__auto___68732 = G__68733;
continue;
} else {
}
break;
}

var G__68683 = args68681.length;
switch (G__68683) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68681.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41196__auto___68735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___68735){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___68735){
return (function (state_68707){
var state_val_68708 = (state_68707[(1)]);
if((state_val_68708 === (7))){
var inst_68703 = (state_68707[(2)]);
var state_68707__$1 = state_68707;
var statearr_68709_68736 = state_68707__$1;
(statearr_68709_68736[(2)] = inst_68703);

(statearr_68709_68736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68708 === (1))){
var state_68707__$1 = state_68707;
var statearr_68710_68737 = state_68707__$1;
(statearr_68710_68737[(2)] = null);

(statearr_68710_68737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68708 === (4))){
var inst_68686 = (state_68707[(7)]);
var inst_68686__$1 = (state_68707[(2)]);
var inst_68687 = (inst_68686__$1 == null);
var state_68707__$1 = (function (){var statearr_68711 = state_68707;
(statearr_68711[(7)] = inst_68686__$1);

return statearr_68711;
})();
if(cljs.core.truth_(inst_68687)){
var statearr_68712_68738 = state_68707__$1;
(statearr_68712_68738[(1)] = (5));

} else {
var statearr_68713_68739 = state_68707__$1;
(statearr_68713_68739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68708 === (13))){
var state_68707__$1 = state_68707;
var statearr_68714_68740 = state_68707__$1;
(statearr_68714_68740[(2)] = null);

(statearr_68714_68740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68708 === (6))){
var inst_68686 = (state_68707[(7)]);
var state_68707__$1 = state_68707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68707__$1,(11),to,inst_68686);
} else {
if((state_val_68708 === (3))){
var inst_68705 = (state_68707[(2)]);
var state_68707__$1 = state_68707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68707__$1,inst_68705);
} else {
if((state_val_68708 === (12))){
var state_68707__$1 = state_68707;
var statearr_68715_68741 = state_68707__$1;
(statearr_68715_68741[(2)] = null);

(statearr_68715_68741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68708 === (2))){
var state_68707__$1 = state_68707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68707__$1,(4),from);
} else {
if((state_val_68708 === (11))){
var inst_68696 = (state_68707[(2)]);
var state_68707__$1 = state_68707;
if(cljs.core.truth_(inst_68696)){
var statearr_68716_68742 = state_68707__$1;
(statearr_68716_68742[(1)] = (12));

} else {
var statearr_68717_68743 = state_68707__$1;
(statearr_68717_68743[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68708 === (9))){
var state_68707__$1 = state_68707;
var statearr_68718_68744 = state_68707__$1;
(statearr_68718_68744[(2)] = null);

(statearr_68718_68744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68708 === (5))){
var state_68707__$1 = state_68707;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68719_68745 = state_68707__$1;
(statearr_68719_68745[(1)] = (8));

} else {
var statearr_68720_68746 = state_68707__$1;
(statearr_68720_68746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68708 === (14))){
var inst_68701 = (state_68707[(2)]);
var state_68707__$1 = state_68707;
var statearr_68721_68747 = state_68707__$1;
(statearr_68721_68747[(2)] = inst_68701);

(statearr_68721_68747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68708 === (10))){
var inst_68693 = (state_68707[(2)]);
var state_68707__$1 = state_68707;
var statearr_68722_68748 = state_68707__$1;
(statearr_68722_68748[(2)] = inst_68693);

(statearr_68722_68748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68708 === (8))){
var inst_68690 = cljs.core.async.close_BANG_.call(null,to);
var state_68707__$1 = state_68707;
var statearr_68723_68749 = state_68707__$1;
(statearr_68723_68749[(2)] = inst_68690);

(statearr_68723_68749[(1)] = (10));


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
});})(c__41196__auto___68735))
;
return ((function (switch__40432__auto__,c__41196__auto___68735){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_68727 = [null,null,null,null,null,null,null,null];
(statearr_68727[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_68727[(1)] = (1));

return statearr_68727;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_68707){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_68707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e68728){if((e68728 instanceof Object)){
var ex__40436__auto__ = e68728;
var statearr_68729_68750 = state_68707;
(statearr_68729_68750[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68751 = state_68707;
state_68707 = G__68751;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_68707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_68707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___68735))
})();
var state__41198__auto__ = (function (){var statearr_68730 = f__41197__auto__.call(null);
(statearr_68730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___68735);

return statearr_68730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___68735))
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
return (function (p__68935){
var vec__68936 = p__68935;
var v = cljs.core.nth.call(null,vec__68936,(0),null);
var p = cljs.core.nth.call(null,vec__68936,(1),null);
var job = vec__68936;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__41196__auto___69118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___69118,res,vec__68936,v,p,job,jobs,results){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___69118,res,vec__68936,v,p,job,jobs,results){
return (function (state_68941){
var state_val_68942 = (state_68941[(1)]);
if((state_val_68942 === (1))){
var state_68941__$1 = state_68941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68941__$1,(2),res,v);
} else {
if((state_val_68942 === (2))){
var inst_68938 = (state_68941[(2)]);
var inst_68939 = cljs.core.async.close_BANG_.call(null,res);
var state_68941__$1 = (function (){var statearr_68943 = state_68941;
(statearr_68943[(7)] = inst_68938);

return statearr_68943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68941__$1,inst_68939);
} else {
return null;
}
}
});})(c__41196__auto___69118,res,vec__68936,v,p,job,jobs,results))
;
return ((function (switch__40432__auto__,c__41196__auto___69118,res,vec__68936,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0 = (function (){
var statearr_68947 = [null,null,null,null,null,null,null,null];
(statearr_68947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__);

(statearr_68947[(1)] = (1));

return statearr_68947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1 = (function (state_68941){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_68941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e68948){if((e68948 instanceof Object)){
var ex__40436__auto__ = e68948;
var statearr_68949_69119 = state_68941;
(statearr_68949_69119[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69120 = state_68941;
state_68941 = G__69120;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = function(state_68941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1.call(this,state_68941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___69118,res,vec__68936,v,p,job,jobs,results))
})();
var state__41198__auto__ = (function (){var statearr_68950 = f__41197__auto__.call(null);
(statearr_68950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___69118);

return statearr_68950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___69118,res,vec__68936,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__68951){
var vec__68952 = p__68951;
var v = cljs.core.nth.call(null,vec__68952,(0),null);
var p = cljs.core.nth.call(null,vec__68952,(1),null);
var job = vec__68952;
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
var n__36336__auto___69121 = n;
var __69122 = (0);
while(true){
if((__69122 < n__36336__auto___69121)){
var G__68953_69123 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__68953_69123) {
case "compute":
var c__41196__auto___69125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__69122,c__41196__auto___69125,G__68953_69123,n__36336__auto___69121,jobs,results,process,async){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (__69122,c__41196__auto___69125,G__68953_69123,n__36336__auto___69121,jobs,results,process,async){
return (function (state_68966){
var state_val_68967 = (state_68966[(1)]);
if((state_val_68967 === (1))){
var state_68966__$1 = state_68966;
var statearr_68968_69126 = state_68966__$1;
(statearr_68968_69126[(2)] = null);

(statearr_68968_69126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68967 === (2))){
var state_68966__$1 = state_68966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68966__$1,(4),jobs);
} else {
if((state_val_68967 === (3))){
var inst_68964 = (state_68966[(2)]);
var state_68966__$1 = state_68966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68966__$1,inst_68964);
} else {
if((state_val_68967 === (4))){
var inst_68956 = (state_68966[(2)]);
var inst_68957 = process.call(null,inst_68956);
var state_68966__$1 = state_68966;
if(cljs.core.truth_(inst_68957)){
var statearr_68969_69127 = state_68966__$1;
(statearr_68969_69127[(1)] = (5));

} else {
var statearr_68970_69128 = state_68966__$1;
(statearr_68970_69128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68967 === (5))){
var state_68966__$1 = state_68966;
var statearr_68971_69129 = state_68966__$1;
(statearr_68971_69129[(2)] = null);

(statearr_68971_69129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68967 === (6))){
var state_68966__$1 = state_68966;
var statearr_68972_69130 = state_68966__$1;
(statearr_68972_69130[(2)] = null);

(statearr_68972_69130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68967 === (7))){
var inst_68962 = (state_68966[(2)]);
var state_68966__$1 = state_68966;
var statearr_68973_69131 = state_68966__$1;
(statearr_68973_69131[(2)] = inst_68962);

(statearr_68973_69131[(1)] = (3));


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
});})(__69122,c__41196__auto___69125,G__68953_69123,n__36336__auto___69121,jobs,results,process,async))
;
return ((function (__69122,switch__40432__auto__,c__41196__auto___69125,G__68953_69123,n__36336__auto___69121,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0 = (function (){
var statearr_68977 = [null,null,null,null,null,null,null];
(statearr_68977[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__);

(statearr_68977[(1)] = (1));

return statearr_68977;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1 = (function (state_68966){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_68966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e68978){if((e68978 instanceof Object)){
var ex__40436__auto__ = e68978;
var statearr_68979_69132 = state_68966;
(statearr_68979_69132[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69133 = state_68966;
state_68966 = G__69133;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = function(state_68966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1.call(this,state_68966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__;
})()
;})(__69122,switch__40432__auto__,c__41196__auto___69125,G__68953_69123,n__36336__auto___69121,jobs,results,process,async))
})();
var state__41198__auto__ = (function (){var statearr_68980 = f__41197__auto__.call(null);
(statearr_68980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___69125);

return statearr_68980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(__69122,c__41196__auto___69125,G__68953_69123,n__36336__auto___69121,jobs,results,process,async))
);


break;
case "async":
var c__41196__auto___69134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__69122,c__41196__auto___69134,G__68953_69123,n__36336__auto___69121,jobs,results,process,async){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (__69122,c__41196__auto___69134,G__68953_69123,n__36336__auto___69121,jobs,results,process,async){
return (function (state_68993){
var state_val_68994 = (state_68993[(1)]);
if((state_val_68994 === (1))){
var state_68993__$1 = state_68993;
var statearr_68995_69135 = state_68993__$1;
(statearr_68995_69135[(2)] = null);

(statearr_68995_69135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68994 === (2))){
var state_68993__$1 = state_68993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68993__$1,(4),jobs);
} else {
if((state_val_68994 === (3))){
var inst_68991 = (state_68993[(2)]);
var state_68993__$1 = state_68993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68993__$1,inst_68991);
} else {
if((state_val_68994 === (4))){
var inst_68983 = (state_68993[(2)]);
var inst_68984 = async.call(null,inst_68983);
var state_68993__$1 = state_68993;
if(cljs.core.truth_(inst_68984)){
var statearr_68996_69136 = state_68993__$1;
(statearr_68996_69136[(1)] = (5));

} else {
var statearr_68997_69137 = state_68993__$1;
(statearr_68997_69137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68994 === (5))){
var state_68993__$1 = state_68993;
var statearr_68998_69138 = state_68993__$1;
(statearr_68998_69138[(2)] = null);

(statearr_68998_69138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68994 === (6))){
var state_68993__$1 = state_68993;
var statearr_68999_69139 = state_68993__$1;
(statearr_68999_69139[(2)] = null);

(statearr_68999_69139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68994 === (7))){
var inst_68989 = (state_68993[(2)]);
var state_68993__$1 = state_68993;
var statearr_69000_69140 = state_68993__$1;
(statearr_69000_69140[(2)] = inst_68989);

(statearr_69000_69140[(1)] = (3));


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
});})(__69122,c__41196__auto___69134,G__68953_69123,n__36336__auto___69121,jobs,results,process,async))
;
return ((function (__69122,switch__40432__auto__,c__41196__auto___69134,G__68953_69123,n__36336__auto___69121,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0 = (function (){
var statearr_69004 = [null,null,null,null,null,null,null];
(statearr_69004[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__);

(statearr_69004[(1)] = (1));

return statearr_69004;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1 = (function (state_68993){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_68993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e69005){if((e69005 instanceof Object)){
var ex__40436__auto__ = e69005;
var statearr_69006_69141 = state_68993;
(statearr_69006_69141[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69142 = state_68993;
state_68993 = G__69142;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = function(state_68993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1.call(this,state_68993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__;
})()
;})(__69122,switch__40432__auto__,c__41196__auto___69134,G__68953_69123,n__36336__auto___69121,jobs,results,process,async))
})();
var state__41198__auto__ = (function (){var statearr_69007 = f__41197__auto__.call(null);
(statearr_69007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___69134);

return statearr_69007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(__69122,c__41196__auto___69134,G__68953_69123,n__36336__auto___69121,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__69143 = (__69122 + (1));
__69122 = G__69143;
continue;
} else {
}
break;
}

var c__41196__auto___69144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___69144,jobs,results,process,async){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___69144,jobs,results,process,async){
return (function (state_69029){
var state_val_69030 = (state_69029[(1)]);
if((state_val_69030 === (1))){
var state_69029__$1 = state_69029;
var statearr_69031_69145 = state_69029__$1;
(statearr_69031_69145[(2)] = null);

(statearr_69031_69145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69030 === (2))){
var state_69029__$1 = state_69029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69029__$1,(4),from);
} else {
if((state_val_69030 === (3))){
var inst_69027 = (state_69029[(2)]);
var state_69029__$1 = state_69029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69029__$1,inst_69027);
} else {
if((state_val_69030 === (4))){
var inst_69010 = (state_69029[(7)]);
var inst_69010__$1 = (state_69029[(2)]);
var inst_69011 = (inst_69010__$1 == null);
var state_69029__$1 = (function (){var statearr_69032 = state_69029;
(statearr_69032[(7)] = inst_69010__$1);

return statearr_69032;
})();
if(cljs.core.truth_(inst_69011)){
var statearr_69033_69146 = state_69029__$1;
(statearr_69033_69146[(1)] = (5));

} else {
var statearr_69034_69147 = state_69029__$1;
(statearr_69034_69147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69030 === (5))){
var inst_69013 = cljs.core.async.close_BANG_.call(null,jobs);
var state_69029__$1 = state_69029;
var statearr_69035_69148 = state_69029__$1;
(statearr_69035_69148[(2)] = inst_69013);

(statearr_69035_69148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69030 === (6))){
var inst_69010 = (state_69029[(7)]);
var inst_69015 = (state_69029[(8)]);
var inst_69015__$1 = cljs.core.async.chan.call(null,(1));
var inst_69016 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69017 = [inst_69010,inst_69015__$1];
var inst_69018 = (new cljs.core.PersistentVector(null,2,(5),inst_69016,inst_69017,null));
var state_69029__$1 = (function (){var statearr_69036 = state_69029;
(statearr_69036[(8)] = inst_69015__$1);

return statearr_69036;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69029__$1,(8),jobs,inst_69018);
} else {
if((state_val_69030 === (7))){
var inst_69025 = (state_69029[(2)]);
var state_69029__$1 = state_69029;
var statearr_69037_69149 = state_69029__$1;
(statearr_69037_69149[(2)] = inst_69025);

(statearr_69037_69149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69030 === (8))){
var inst_69015 = (state_69029[(8)]);
var inst_69020 = (state_69029[(2)]);
var state_69029__$1 = (function (){var statearr_69038 = state_69029;
(statearr_69038[(9)] = inst_69020);

return statearr_69038;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69029__$1,(9),results,inst_69015);
} else {
if((state_val_69030 === (9))){
var inst_69022 = (state_69029[(2)]);
var state_69029__$1 = (function (){var statearr_69039 = state_69029;
(statearr_69039[(10)] = inst_69022);

return statearr_69039;
})();
var statearr_69040_69150 = state_69029__$1;
(statearr_69040_69150[(2)] = null);

(statearr_69040_69150[(1)] = (2));


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
});})(c__41196__auto___69144,jobs,results,process,async))
;
return ((function (switch__40432__auto__,c__41196__auto___69144,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0 = (function (){
var statearr_69044 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__);

(statearr_69044[(1)] = (1));

return statearr_69044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1 = (function (state_69029){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_69029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e69045){if((e69045 instanceof Object)){
var ex__40436__auto__ = e69045;
var statearr_69046_69151 = state_69029;
(statearr_69046_69151[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69152 = state_69029;
state_69029 = G__69152;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = function(state_69029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1.call(this,state_69029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___69144,jobs,results,process,async))
})();
var state__41198__auto__ = (function (){var statearr_69047 = f__41197__auto__.call(null);
(statearr_69047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___69144);

return statearr_69047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___69144,jobs,results,process,async))
);


var c__41196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto__,jobs,results,process,async){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto__,jobs,results,process,async){
return (function (state_69085){
var state_val_69086 = (state_69085[(1)]);
if((state_val_69086 === (7))){
var inst_69081 = (state_69085[(2)]);
var state_69085__$1 = state_69085;
var statearr_69087_69153 = state_69085__$1;
(statearr_69087_69153[(2)] = inst_69081);

(statearr_69087_69153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (20))){
var state_69085__$1 = state_69085;
var statearr_69088_69154 = state_69085__$1;
(statearr_69088_69154[(2)] = null);

(statearr_69088_69154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (1))){
var state_69085__$1 = state_69085;
var statearr_69089_69155 = state_69085__$1;
(statearr_69089_69155[(2)] = null);

(statearr_69089_69155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (4))){
var inst_69050 = (state_69085[(7)]);
var inst_69050__$1 = (state_69085[(2)]);
var inst_69051 = (inst_69050__$1 == null);
var state_69085__$1 = (function (){var statearr_69090 = state_69085;
(statearr_69090[(7)] = inst_69050__$1);

return statearr_69090;
})();
if(cljs.core.truth_(inst_69051)){
var statearr_69091_69156 = state_69085__$1;
(statearr_69091_69156[(1)] = (5));

} else {
var statearr_69092_69157 = state_69085__$1;
(statearr_69092_69157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (15))){
var inst_69063 = (state_69085[(8)]);
var state_69085__$1 = state_69085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69085__$1,(18),to,inst_69063);
} else {
if((state_val_69086 === (21))){
var inst_69076 = (state_69085[(2)]);
var state_69085__$1 = state_69085;
var statearr_69093_69158 = state_69085__$1;
(statearr_69093_69158[(2)] = inst_69076);

(statearr_69093_69158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (13))){
var inst_69078 = (state_69085[(2)]);
var state_69085__$1 = (function (){var statearr_69094 = state_69085;
(statearr_69094[(9)] = inst_69078);

return statearr_69094;
})();
var statearr_69095_69159 = state_69085__$1;
(statearr_69095_69159[(2)] = null);

(statearr_69095_69159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (6))){
var inst_69050 = (state_69085[(7)]);
var state_69085__$1 = state_69085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69085__$1,(11),inst_69050);
} else {
if((state_val_69086 === (17))){
var inst_69071 = (state_69085[(2)]);
var state_69085__$1 = state_69085;
if(cljs.core.truth_(inst_69071)){
var statearr_69096_69160 = state_69085__$1;
(statearr_69096_69160[(1)] = (19));

} else {
var statearr_69097_69161 = state_69085__$1;
(statearr_69097_69161[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (3))){
var inst_69083 = (state_69085[(2)]);
var state_69085__$1 = state_69085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69085__$1,inst_69083);
} else {
if((state_val_69086 === (12))){
var inst_69060 = (state_69085[(10)]);
var state_69085__$1 = state_69085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69085__$1,(14),inst_69060);
} else {
if((state_val_69086 === (2))){
var state_69085__$1 = state_69085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69085__$1,(4),results);
} else {
if((state_val_69086 === (19))){
var state_69085__$1 = state_69085;
var statearr_69098_69162 = state_69085__$1;
(statearr_69098_69162[(2)] = null);

(statearr_69098_69162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (11))){
var inst_69060 = (state_69085[(2)]);
var state_69085__$1 = (function (){var statearr_69099 = state_69085;
(statearr_69099[(10)] = inst_69060);

return statearr_69099;
})();
var statearr_69100_69163 = state_69085__$1;
(statearr_69100_69163[(2)] = null);

(statearr_69100_69163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (9))){
var state_69085__$1 = state_69085;
var statearr_69101_69164 = state_69085__$1;
(statearr_69101_69164[(2)] = null);

(statearr_69101_69164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (5))){
var state_69085__$1 = state_69085;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69102_69165 = state_69085__$1;
(statearr_69102_69165[(1)] = (8));

} else {
var statearr_69103_69166 = state_69085__$1;
(statearr_69103_69166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (14))){
var inst_69065 = (state_69085[(11)]);
var inst_69063 = (state_69085[(8)]);
var inst_69063__$1 = (state_69085[(2)]);
var inst_69064 = (inst_69063__$1 == null);
var inst_69065__$1 = cljs.core.not.call(null,inst_69064);
var state_69085__$1 = (function (){var statearr_69104 = state_69085;
(statearr_69104[(11)] = inst_69065__$1);

(statearr_69104[(8)] = inst_69063__$1);

return statearr_69104;
})();
if(inst_69065__$1){
var statearr_69105_69167 = state_69085__$1;
(statearr_69105_69167[(1)] = (15));

} else {
var statearr_69106_69168 = state_69085__$1;
(statearr_69106_69168[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (16))){
var inst_69065 = (state_69085[(11)]);
var state_69085__$1 = state_69085;
var statearr_69107_69169 = state_69085__$1;
(statearr_69107_69169[(2)] = inst_69065);

(statearr_69107_69169[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (10))){
var inst_69057 = (state_69085[(2)]);
var state_69085__$1 = state_69085;
var statearr_69108_69170 = state_69085__$1;
(statearr_69108_69170[(2)] = inst_69057);

(statearr_69108_69170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (18))){
var inst_69068 = (state_69085[(2)]);
var state_69085__$1 = state_69085;
var statearr_69109_69171 = state_69085__$1;
(statearr_69109_69171[(2)] = inst_69068);

(statearr_69109_69171[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69086 === (8))){
var inst_69054 = cljs.core.async.close_BANG_.call(null,to);
var state_69085__$1 = state_69085;
var statearr_69110_69172 = state_69085__$1;
(statearr_69110_69172[(2)] = inst_69054);

(statearr_69110_69172[(1)] = (10));


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
});})(c__41196__auto__,jobs,results,process,async))
;
return ((function (switch__40432__auto__,c__41196__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0 = (function (){
var statearr_69114 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__);

(statearr_69114[(1)] = (1));

return statearr_69114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1 = (function (state_69085){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_69085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e69115){if((e69115 instanceof Object)){
var ex__40436__auto__ = e69115;
var statearr_69116_69173 = state_69085;
(statearr_69116_69173[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69174 = state_69085;
state_69085 = G__69174;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = function(state_69085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1.call(this,state_69085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto__,jobs,results,process,async))
})();
var state__41198__auto__ = (function (){var statearr_69117 = f__41197__auto__.call(null);
(statearr_69117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto__);

return statearr_69117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto__,jobs,results,process,async))
);

return c__41196__auto__;
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
var args69175 = [];
var len__36491__auto___69178 = arguments.length;
var i__36492__auto___69179 = (0);
while(true){
if((i__36492__auto___69179 < len__36491__auto___69178)){
args69175.push((arguments[i__36492__auto___69179]));

var G__69180 = (i__36492__auto___69179 + (1));
i__36492__auto___69179 = G__69180;
continue;
} else {
}
break;
}

var G__69177 = args69175.length;
switch (G__69177) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69175.length)].join('')));

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
var args69182 = [];
var len__36491__auto___69185 = arguments.length;
var i__36492__auto___69186 = (0);
while(true){
if((i__36492__auto___69186 < len__36491__auto___69185)){
args69182.push((arguments[i__36492__auto___69186]));

var G__69187 = (i__36492__auto___69186 + (1));
i__36492__auto___69186 = G__69187;
continue;
} else {
}
break;
}

var G__69184 = args69182.length;
switch (G__69184) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69182.length)].join('')));

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
var args69189 = [];
var len__36491__auto___69242 = arguments.length;
var i__36492__auto___69243 = (0);
while(true){
if((i__36492__auto___69243 < len__36491__auto___69242)){
args69189.push((arguments[i__36492__auto___69243]));

var G__69244 = (i__36492__auto___69243 + (1));
i__36492__auto___69243 = G__69244;
continue;
} else {
}
break;
}

var G__69191 = args69189.length;
switch (G__69191) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69189.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__41196__auto___69246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___69246,tc,fc){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___69246,tc,fc){
return (function (state_69217){
var state_val_69218 = (state_69217[(1)]);
if((state_val_69218 === (7))){
var inst_69213 = (state_69217[(2)]);
var state_69217__$1 = state_69217;
var statearr_69219_69247 = state_69217__$1;
(statearr_69219_69247[(2)] = inst_69213);

(statearr_69219_69247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (1))){
var state_69217__$1 = state_69217;
var statearr_69220_69248 = state_69217__$1;
(statearr_69220_69248[(2)] = null);

(statearr_69220_69248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (4))){
var inst_69194 = (state_69217[(7)]);
var inst_69194__$1 = (state_69217[(2)]);
var inst_69195 = (inst_69194__$1 == null);
var state_69217__$1 = (function (){var statearr_69221 = state_69217;
(statearr_69221[(7)] = inst_69194__$1);

return statearr_69221;
})();
if(cljs.core.truth_(inst_69195)){
var statearr_69222_69249 = state_69217__$1;
(statearr_69222_69249[(1)] = (5));

} else {
var statearr_69223_69250 = state_69217__$1;
(statearr_69223_69250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (13))){
var state_69217__$1 = state_69217;
var statearr_69224_69251 = state_69217__$1;
(statearr_69224_69251[(2)] = null);

(statearr_69224_69251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (6))){
var inst_69194 = (state_69217[(7)]);
var inst_69200 = p.call(null,inst_69194);
var state_69217__$1 = state_69217;
if(cljs.core.truth_(inst_69200)){
var statearr_69225_69252 = state_69217__$1;
(statearr_69225_69252[(1)] = (9));

} else {
var statearr_69226_69253 = state_69217__$1;
(statearr_69226_69253[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (3))){
var inst_69215 = (state_69217[(2)]);
var state_69217__$1 = state_69217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69217__$1,inst_69215);
} else {
if((state_val_69218 === (12))){
var state_69217__$1 = state_69217;
var statearr_69227_69254 = state_69217__$1;
(statearr_69227_69254[(2)] = null);

(statearr_69227_69254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (2))){
var state_69217__$1 = state_69217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69217__$1,(4),ch);
} else {
if((state_val_69218 === (11))){
var inst_69194 = (state_69217[(7)]);
var inst_69204 = (state_69217[(2)]);
var state_69217__$1 = state_69217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69217__$1,(8),inst_69204,inst_69194);
} else {
if((state_val_69218 === (9))){
var state_69217__$1 = state_69217;
var statearr_69228_69255 = state_69217__$1;
(statearr_69228_69255[(2)] = tc);

(statearr_69228_69255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (5))){
var inst_69197 = cljs.core.async.close_BANG_.call(null,tc);
var inst_69198 = cljs.core.async.close_BANG_.call(null,fc);
var state_69217__$1 = (function (){var statearr_69229 = state_69217;
(statearr_69229[(8)] = inst_69197);

return statearr_69229;
})();
var statearr_69230_69256 = state_69217__$1;
(statearr_69230_69256[(2)] = inst_69198);

(statearr_69230_69256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (14))){
var inst_69211 = (state_69217[(2)]);
var state_69217__$1 = state_69217;
var statearr_69231_69257 = state_69217__$1;
(statearr_69231_69257[(2)] = inst_69211);

(statearr_69231_69257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (10))){
var state_69217__$1 = state_69217;
var statearr_69232_69258 = state_69217__$1;
(statearr_69232_69258[(2)] = fc);

(statearr_69232_69258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69218 === (8))){
var inst_69206 = (state_69217[(2)]);
var state_69217__$1 = state_69217;
if(cljs.core.truth_(inst_69206)){
var statearr_69233_69259 = state_69217__$1;
(statearr_69233_69259[(1)] = (12));

} else {
var statearr_69234_69260 = state_69217__$1;
(statearr_69234_69260[(1)] = (13));

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
});})(c__41196__auto___69246,tc,fc))
;
return ((function (switch__40432__auto__,c__41196__auto___69246,tc,fc){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_69238 = [null,null,null,null,null,null,null,null,null];
(statearr_69238[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_69238[(1)] = (1));

return statearr_69238;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_69217){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_69217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e69239){if((e69239 instanceof Object)){
var ex__40436__auto__ = e69239;
var statearr_69240_69261 = state_69217;
(statearr_69240_69261[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69262 = state_69217;
state_69217 = G__69262;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_69217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_69217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___69246,tc,fc))
})();
var state__41198__auto__ = (function (){var statearr_69241 = f__41197__auto__.call(null);
(statearr_69241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___69246);

return statearr_69241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___69246,tc,fc))
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
var c__41196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto__){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto__){
return (function (state_69326){
var state_val_69327 = (state_69326[(1)]);
if((state_val_69327 === (7))){
var inst_69322 = (state_69326[(2)]);
var state_69326__$1 = state_69326;
var statearr_69328_69349 = state_69326__$1;
(statearr_69328_69349[(2)] = inst_69322);

(statearr_69328_69349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (1))){
var inst_69306 = init;
var state_69326__$1 = (function (){var statearr_69329 = state_69326;
(statearr_69329[(7)] = inst_69306);

return statearr_69329;
})();
var statearr_69330_69350 = state_69326__$1;
(statearr_69330_69350[(2)] = null);

(statearr_69330_69350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (4))){
var inst_69309 = (state_69326[(8)]);
var inst_69309__$1 = (state_69326[(2)]);
var inst_69310 = (inst_69309__$1 == null);
var state_69326__$1 = (function (){var statearr_69331 = state_69326;
(statearr_69331[(8)] = inst_69309__$1);

return statearr_69331;
})();
if(cljs.core.truth_(inst_69310)){
var statearr_69332_69351 = state_69326__$1;
(statearr_69332_69351[(1)] = (5));

} else {
var statearr_69333_69352 = state_69326__$1;
(statearr_69333_69352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (6))){
var inst_69309 = (state_69326[(8)]);
var inst_69306 = (state_69326[(7)]);
var inst_69313 = (state_69326[(9)]);
var inst_69313__$1 = f.call(null,inst_69306,inst_69309);
var inst_69314 = cljs.core.reduced_QMARK_.call(null,inst_69313__$1);
var state_69326__$1 = (function (){var statearr_69334 = state_69326;
(statearr_69334[(9)] = inst_69313__$1);

return statearr_69334;
})();
if(inst_69314){
var statearr_69335_69353 = state_69326__$1;
(statearr_69335_69353[(1)] = (8));

} else {
var statearr_69336_69354 = state_69326__$1;
(statearr_69336_69354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (3))){
var inst_69324 = (state_69326[(2)]);
var state_69326__$1 = state_69326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69326__$1,inst_69324);
} else {
if((state_val_69327 === (2))){
var state_69326__$1 = state_69326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69326__$1,(4),ch);
} else {
if((state_val_69327 === (9))){
var inst_69313 = (state_69326[(9)]);
var inst_69306 = inst_69313;
var state_69326__$1 = (function (){var statearr_69337 = state_69326;
(statearr_69337[(7)] = inst_69306);

return statearr_69337;
})();
var statearr_69338_69355 = state_69326__$1;
(statearr_69338_69355[(2)] = null);

(statearr_69338_69355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (5))){
var inst_69306 = (state_69326[(7)]);
var state_69326__$1 = state_69326;
var statearr_69339_69356 = state_69326__$1;
(statearr_69339_69356[(2)] = inst_69306);

(statearr_69339_69356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (10))){
var inst_69320 = (state_69326[(2)]);
var state_69326__$1 = state_69326;
var statearr_69340_69357 = state_69326__$1;
(statearr_69340_69357[(2)] = inst_69320);

(statearr_69340_69357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69327 === (8))){
var inst_69313 = (state_69326[(9)]);
var inst_69316 = cljs.core.deref.call(null,inst_69313);
var state_69326__$1 = state_69326;
var statearr_69341_69358 = state_69326__$1;
(statearr_69341_69358[(2)] = inst_69316);

(statearr_69341_69358[(1)] = (10));


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
});})(c__41196__auto__))
;
return ((function (switch__40432__auto__,c__41196__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40433__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40433__auto____0 = (function (){
var statearr_69345 = [null,null,null,null,null,null,null,null,null,null];
(statearr_69345[(0)] = cljs$core$async$reduce_$_state_machine__40433__auto__);

(statearr_69345[(1)] = (1));

return statearr_69345;
});
var cljs$core$async$reduce_$_state_machine__40433__auto____1 = (function (state_69326){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_69326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e69346){if((e69346 instanceof Object)){
var ex__40436__auto__ = e69346;
var statearr_69347_69359 = state_69326;
(statearr_69347_69359[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69360 = state_69326;
state_69326 = G__69360;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40433__auto__ = function(state_69326){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40433__auto____1.call(this,state_69326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40433__auto____0;
cljs$core$async$reduce_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40433__auto____1;
return cljs$core$async$reduce_$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto__))
})();
var state__41198__auto__ = (function (){var statearr_69348 = f__41197__auto__.call(null);
(statearr_69348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto__);

return statearr_69348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto__))
);

return c__41196__auto__;
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
var args69361 = [];
var len__36491__auto___69413 = arguments.length;
var i__36492__auto___69414 = (0);
while(true){
if((i__36492__auto___69414 < len__36491__auto___69413)){
args69361.push((arguments[i__36492__auto___69414]));

var G__69415 = (i__36492__auto___69414 + (1));
i__36492__auto___69414 = G__69415;
continue;
} else {
}
break;
}

var G__69363 = args69361.length;
switch (G__69363) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69361.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto__){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto__){
return (function (state_69388){
var state_val_69389 = (state_69388[(1)]);
if((state_val_69389 === (7))){
var inst_69370 = (state_69388[(2)]);
var state_69388__$1 = state_69388;
var statearr_69390_69417 = state_69388__$1;
(statearr_69390_69417[(2)] = inst_69370);

(statearr_69390_69417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69389 === (1))){
var inst_69364 = cljs.core.seq.call(null,coll);
var inst_69365 = inst_69364;
var state_69388__$1 = (function (){var statearr_69391 = state_69388;
(statearr_69391[(7)] = inst_69365);

return statearr_69391;
})();
var statearr_69392_69418 = state_69388__$1;
(statearr_69392_69418[(2)] = null);

(statearr_69392_69418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69389 === (4))){
var inst_69365 = (state_69388[(7)]);
var inst_69368 = cljs.core.first.call(null,inst_69365);
var state_69388__$1 = state_69388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69388__$1,(7),ch,inst_69368);
} else {
if((state_val_69389 === (13))){
var inst_69382 = (state_69388[(2)]);
var state_69388__$1 = state_69388;
var statearr_69393_69419 = state_69388__$1;
(statearr_69393_69419[(2)] = inst_69382);

(statearr_69393_69419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69389 === (6))){
var inst_69373 = (state_69388[(2)]);
var state_69388__$1 = state_69388;
if(cljs.core.truth_(inst_69373)){
var statearr_69394_69420 = state_69388__$1;
(statearr_69394_69420[(1)] = (8));

} else {
var statearr_69395_69421 = state_69388__$1;
(statearr_69395_69421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69389 === (3))){
var inst_69386 = (state_69388[(2)]);
var state_69388__$1 = state_69388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69388__$1,inst_69386);
} else {
if((state_val_69389 === (12))){
var state_69388__$1 = state_69388;
var statearr_69396_69422 = state_69388__$1;
(statearr_69396_69422[(2)] = null);

(statearr_69396_69422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69389 === (2))){
var inst_69365 = (state_69388[(7)]);
var state_69388__$1 = state_69388;
if(cljs.core.truth_(inst_69365)){
var statearr_69397_69423 = state_69388__$1;
(statearr_69397_69423[(1)] = (4));

} else {
var statearr_69398_69424 = state_69388__$1;
(statearr_69398_69424[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69389 === (11))){
var inst_69379 = cljs.core.async.close_BANG_.call(null,ch);
var state_69388__$1 = state_69388;
var statearr_69399_69425 = state_69388__$1;
(statearr_69399_69425[(2)] = inst_69379);

(statearr_69399_69425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69389 === (9))){
var state_69388__$1 = state_69388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_69400_69426 = state_69388__$1;
(statearr_69400_69426[(1)] = (11));

} else {
var statearr_69401_69427 = state_69388__$1;
(statearr_69401_69427[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69389 === (5))){
var inst_69365 = (state_69388[(7)]);
var state_69388__$1 = state_69388;
var statearr_69402_69428 = state_69388__$1;
(statearr_69402_69428[(2)] = inst_69365);

(statearr_69402_69428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69389 === (10))){
var inst_69384 = (state_69388[(2)]);
var state_69388__$1 = state_69388;
var statearr_69403_69429 = state_69388__$1;
(statearr_69403_69429[(2)] = inst_69384);

(statearr_69403_69429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69389 === (8))){
var inst_69365 = (state_69388[(7)]);
var inst_69375 = cljs.core.next.call(null,inst_69365);
var inst_69365__$1 = inst_69375;
var state_69388__$1 = (function (){var statearr_69404 = state_69388;
(statearr_69404[(7)] = inst_69365__$1);

return statearr_69404;
})();
var statearr_69405_69430 = state_69388__$1;
(statearr_69405_69430[(2)] = null);

(statearr_69405_69430[(1)] = (2));


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
});})(c__41196__auto__))
;
return ((function (switch__40432__auto__,c__41196__auto__){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_69409 = [null,null,null,null,null,null,null,null];
(statearr_69409[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_69409[(1)] = (1));

return statearr_69409;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_69388){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_69388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e69410){if((e69410 instanceof Object)){
var ex__40436__auto__ = e69410;
var statearr_69411_69431 = state_69388;
(statearr_69411_69431[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69432 = state_69388;
state_69388 = G__69432;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_69388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_69388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto__))
})();
var state__41198__auto__ = (function (){var statearr_69412 = f__41197__auto__.call(null);
(statearr_69412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto__);

return statearr_69412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto__))
);

return c__41196__auto__;
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
var x__36085__auto__ = (((_ == null))?null:_);
var m__36086__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,_);
} else {
var m__36086__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,_);
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
var x__36085__auto__ = (((m == null))?null:m);
var m__36086__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__36086__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__36085__auto__ = (((m == null))?null:m);
var m__36086__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,m,ch);
} else {
var m__36086__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,m,ch);
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
var x__36085__auto__ = (((m == null))?null:m);
var m__36086__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,m);
} else {
var m__36086__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async69654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69654 = (function (mult,ch,cs,meta69655){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta69655 = meta69655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async69654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_69656,meta69655__$1){
var self__ = this;
var _69656__$1 = this;
return (new cljs.core.async.t_cljs$core$async69654(self__.mult,self__.ch,self__.cs,meta69655__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async69654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_69656){
var self__ = this;
var _69656__$1 = this;
return self__.meta69655;
});})(cs))
;

cljs.core.async.t_cljs$core$async69654.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async69654.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async69654.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async69654.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69654.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69654.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async69654.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta69655","meta69655",-536785039,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async69654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69654";

cljs.core.async.t_cljs$core$async69654.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async69654");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async69654 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async69654(mult__$1,ch__$1,cs__$1,meta69655){
return (new cljs.core.async.t_cljs$core$async69654(mult__$1,ch__$1,cs__$1,meta69655));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async69654(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__41196__auto___69875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___69875,cs,m,dchan,dctr,done){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___69875,cs,m,dchan,dctr,done){
return (function (state_69787){
var state_val_69788 = (state_69787[(1)]);
if((state_val_69788 === (7))){
var inst_69783 = (state_69787[(2)]);
var state_69787__$1 = state_69787;
var statearr_69789_69876 = state_69787__$1;
(statearr_69789_69876[(2)] = inst_69783);

(statearr_69789_69876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (20))){
var inst_69688 = (state_69787[(7)]);
var inst_69698 = cljs.core.first.call(null,inst_69688);
var inst_69699 = cljs.core.nth.call(null,inst_69698,(0),null);
var inst_69700 = cljs.core.nth.call(null,inst_69698,(1),null);
var state_69787__$1 = (function (){var statearr_69790 = state_69787;
(statearr_69790[(8)] = inst_69699);

return statearr_69790;
})();
if(cljs.core.truth_(inst_69700)){
var statearr_69791_69877 = state_69787__$1;
(statearr_69791_69877[(1)] = (22));

} else {
var statearr_69792_69878 = state_69787__$1;
(statearr_69792_69878[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (27))){
var inst_69659 = (state_69787[(9)]);
var inst_69735 = (state_69787[(10)]);
var inst_69728 = (state_69787[(11)]);
var inst_69730 = (state_69787[(12)]);
var inst_69735__$1 = cljs.core._nth.call(null,inst_69728,inst_69730);
var inst_69736 = cljs.core.async.put_BANG_.call(null,inst_69735__$1,inst_69659,done);
var state_69787__$1 = (function (){var statearr_69793 = state_69787;
(statearr_69793[(10)] = inst_69735__$1);

return statearr_69793;
})();
if(cljs.core.truth_(inst_69736)){
var statearr_69794_69879 = state_69787__$1;
(statearr_69794_69879[(1)] = (30));

} else {
var statearr_69795_69880 = state_69787__$1;
(statearr_69795_69880[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (1))){
var state_69787__$1 = state_69787;
var statearr_69796_69881 = state_69787__$1;
(statearr_69796_69881[(2)] = null);

(statearr_69796_69881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (24))){
var inst_69688 = (state_69787[(7)]);
var inst_69705 = (state_69787[(2)]);
var inst_69706 = cljs.core.next.call(null,inst_69688);
var inst_69668 = inst_69706;
var inst_69669 = null;
var inst_69670 = (0);
var inst_69671 = (0);
var state_69787__$1 = (function (){var statearr_69797 = state_69787;
(statearr_69797[(13)] = inst_69670);

(statearr_69797[(14)] = inst_69705);

(statearr_69797[(15)] = inst_69669);

(statearr_69797[(16)] = inst_69671);

(statearr_69797[(17)] = inst_69668);

return statearr_69797;
})();
var statearr_69798_69882 = state_69787__$1;
(statearr_69798_69882[(2)] = null);

(statearr_69798_69882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (39))){
var state_69787__$1 = state_69787;
var statearr_69802_69883 = state_69787__$1;
(statearr_69802_69883[(2)] = null);

(statearr_69802_69883[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (4))){
var inst_69659 = (state_69787[(9)]);
var inst_69659__$1 = (state_69787[(2)]);
var inst_69660 = (inst_69659__$1 == null);
var state_69787__$1 = (function (){var statearr_69803 = state_69787;
(statearr_69803[(9)] = inst_69659__$1);

return statearr_69803;
})();
if(cljs.core.truth_(inst_69660)){
var statearr_69804_69884 = state_69787__$1;
(statearr_69804_69884[(1)] = (5));

} else {
var statearr_69805_69885 = state_69787__$1;
(statearr_69805_69885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (15))){
var inst_69670 = (state_69787[(13)]);
var inst_69669 = (state_69787[(15)]);
var inst_69671 = (state_69787[(16)]);
var inst_69668 = (state_69787[(17)]);
var inst_69684 = (state_69787[(2)]);
var inst_69685 = (inst_69671 + (1));
var tmp69799 = inst_69670;
var tmp69800 = inst_69669;
var tmp69801 = inst_69668;
var inst_69668__$1 = tmp69801;
var inst_69669__$1 = tmp69800;
var inst_69670__$1 = tmp69799;
var inst_69671__$1 = inst_69685;
var state_69787__$1 = (function (){var statearr_69806 = state_69787;
(statearr_69806[(13)] = inst_69670__$1);

(statearr_69806[(15)] = inst_69669__$1);

(statearr_69806[(18)] = inst_69684);

(statearr_69806[(16)] = inst_69671__$1);

(statearr_69806[(17)] = inst_69668__$1);

return statearr_69806;
})();
var statearr_69807_69886 = state_69787__$1;
(statearr_69807_69886[(2)] = null);

(statearr_69807_69886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (21))){
var inst_69709 = (state_69787[(2)]);
var state_69787__$1 = state_69787;
var statearr_69811_69887 = state_69787__$1;
(statearr_69811_69887[(2)] = inst_69709);

(statearr_69811_69887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (31))){
var inst_69735 = (state_69787[(10)]);
var inst_69739 = done.call(null,null);
var inst_69740 = cljs.core.async.untap_STAR_.call(null,m,inst_69735);
var state_69787__$1 = (function (){var statearr_69812 = state_69787;
(statearr_69812[(19)] = inst_69739);

return statearr_69812;
})();
var statearr_69813_69888 = state_69787__$1;
(statearr_69813_69888[(2)] = inst_69740);

(statearr_69813_69888[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (32))){
var inst_69727 = (state_69787[(20)]);
var inst_69728 = (state_69787[(11)]);
var inst_69730 = (state_69787[(12)]);
var inst_69729 = (state_69787[(21)]);
var inst_69742 = (state_69787[(2)]);
var inst_69743 = (inst_69730 + (1));
var tmp69808 = inst_69727;
var tmp69809 = inst_69728;
var tmp69810 = inst_69729;
var inst_69727__$1 = tmp69808;
var inst_69728__$1 = tmp69809;
var inst_69729__$1 = tmp69810;
var inst_69730__$1 = inst_69743;
var state_69787__$1 = (function (){var statearr_69814 = state_69787;
(statearr_69814[(20)] = inst_69727__$1);

(statearr_69814[(11)] = inst_69728__$1);

(statearr_69814[(12)] = inst_69730__$1);

(statearr_69814[(22)] = inst_69742);

(statearr_69814[(21)] = inst_69729__$1);

return statearr_69814;
})();
var statearr_69815_69889 = state_69787__$1;
(statearr_69815_69889[(2)] = null);

(statearr_69815_69889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (40))){
var inst_69755 = (state_69787[(23)]);
var inst_69759 = done.call(null,null);
var inst_69760 = cljs.core.async.untap_STAR_.call(null,m,inst_69755);
var state_69787__$1 = (function (){var statearr_69816 = state_69787;
(statearr_69816[(24)] = inst_69759);

return statearr_69816;
})();
var statearr_69817_69890 = state_69787__$1;
(statearr_69817_69890[(2)] = inst_69760);

(statearr_69817_69890[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (33))){
var inst_69746 = (state_69787[(25)]);
var inst_69748 = cljs.core.chunked_seq_QMARK_.call(null,inst_69746);
var state_69787__$1 = state_69787;
if(inst_69748){
var statearr_69818_69891 = state_69787__$1;
(statearr_69818_69891[(1)] = (36));

} else {
var statearr_69819_69892 = state_69787__$1;
(statearr_69819_69892[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (13))){
var inst_69678 = (state_69787[(26)]);
var inst_69681 = cljs.core.async.close_BANG_.call(null,inst_69678);
var state_69787__$1 = state_69787;
var statearr_69820_69893 = state_69787__$1;
(statearr_69820_69893[(2)] = inst_69681);

(statearr_69820_69893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (22))){
var inst_69699 = (state_69787[(8)]);
var inst_69702 = cljs.core.async.close_BANG_.call(null,inst_69699);
var state_69787__$1 = state_69787;
var statearr_69821_69894 = state_69787__$1;
(statearr_69821_69894[(2)] = inst_69702);

(statearr_69821_69894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (36))){
var inst_69746 = (state_69787[(25)]);
var inst_69750 = cljs.core.chunk_first.call(null,inst_69746);
var inst_69751 = cljs.core.chunk_rest.call(null,inst_69746);
var inst_69752 = cljs.core.count.call(null,inst_69750);
var inst_69727 = inst_69751;
var inst_69728 = inst_69750;
var inst_69729 = inst_69752;
var inst_69730 = (0);
var state_69787__$1 = (function (){var statearr_69822 = state_69787;
(statearr_69822[(20)] = inst_69727);

(statearr_69822[(11)] = inst_69728);

(statearr_69822[(12)] = inst_69730);

(statearr_69822[(21)] = inst_69729);

return statearr_69822;
})();
var statearr_69823_69895 = state_69787__$1;
(statearr_69823_69895[(2)] = null);

(statearr_69823_69895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (41))){
var inst_69746 = (state_69787[(25)]);
var inst_69762 = (state_69787[(2)]);
var inst_69763 = cljs.core.next.call(null,inst_69746);
var inst_69727 = inst_69763;
var inst_69728 = null;
var inst_69729 = (0);
var inst_69730 = (0);
var state_69787__$1 = (function (){var statearr_69824 = state_69787;
(statearr_69824[(20)] = inst_69727);

(statearr_69824[(27)] = inst_69762);

(statearr_69824[(11)] = inst_69728);

(statearr_69824[(12)] = inst_69730);

(statearr_69824[(21)] = inst_69729);

return statearr_69824;
})();
var statearr_69825_69896 = state_69787__$1;
(statearr_69825_69896[(2)] = null);

(statearr_69825_69896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (43))){
var state_69787__$1 = state_69787;
var statearr_69826_69897 = state_69787__$1;
(statearr_69826_69897[(2)] = null);

(statearr_69826_69897[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (29))){
var inst_69771 = (state_69787[(2)]);
var state_69787__$1 = state_69787;
var statearr_69827_69898 = state_69787__$1;
(statearr_69827_69898[(2)] = inst_69771);

(statearr_69827_69898[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (44))){
var inst_69780 = (state_69787[(2)]);
var state_69787__$1 = (function (){var statearr_69828 = state_69787;
(statearr_69828[(28)] = inst_69780);

return statearr_69828;
})();
var statearr_69829_69899 = state_69787__$1;
(statearr_69829_69899[(2)] = null);

(statearr_69829_69899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (6))){
var inst_69719 = (state_69787[(29)]);
var inst_69718 = cljs.core.deref.call(null,cs);
var inst_69719__$1 = cljs.core.keys.call(null,inst_69718);
var inst_69720 = cljs.core.count.call(null,inst_69719__$1);
var inst_69721 = cljs.core.reset_BANG_.call(null,dctr,inst_69720);
var inst_69726 = cljs.core.seq.call(null,inst_69719__$1);
var inst_69727 = inst_69726;
var inst_69728 = null;
var inst_69729 = (0);
var inst_69730 = (0);
var state_69787__$1 = (function (){var statearr_69830 = state_69787;
(statearr_69830[(29)] = inst_69719__$1);

(statearr_69830[(20)] = inst_69727);

(statearr_69830[(30)] = inst_69721);

(statearr_69830[(11)] = inst_69728);

(statearr_69830[(12)] = inst_69730);

(statearr_69830[(21)] = inst_69729);

return statearr_69830;
})();
var statearr_69831_69900 = state_69787__$1;
(statearr_69831_69900[(2)] = null);

(statearr_69831_69900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (28))){
var inst_69727 = (state_69787[(20)]);
var inst_69746 = (state_69787[(25)]);
var inst_69746__$1 = cljs.core.seq.call(null,inst_69727);
var state_69787__$1 = (function (){var statearr_69832 = state_69787;
(statearr_69832[(25)] = inst_69746__$1);

return statearr_69832;
})();
if(inst_69746__$1){
var statearr_69833_69901 = state_69787__$1;
(statearr_69833_69901[(1)] = (33));

} else {
var statearr_69834_69902 = state_69787__$1;
(statearr_69834_69902[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (25))){
var inst_69730 = (state_69787[(12)]);
var inst_69729 = (state_69787[(21)]);
var inst_69732 = (inst_69730 < inst_69729);
var inst_69733 = inst_69732;
var state_69787__$1 = state_69787;
if(cljs.core.truth_(inst_69733)){
var statearr_69835_69903 = state_69787__$1;
(statearr_69835_69903[(1)] = (27));

} else {
var statearr_69836_69904 = state_69787__$1;
(statearr_69836_69904[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (34))){
var state_69787__$1 = state_69787;
var statearr_69837_69905 = state_69787__$1;
(statearr_69837_69905[(2)] = null);

(statearr_69837_69905[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (17))){
var state_69787__$1 = state_69787;
var statearr_69838_69906 = state_69787__$1;
(statearr_69838_69906[(2)] = null);

(statearr_69838_69906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (3))){
var inst_69785 = (state_69787[(2)]);
var state_69787__$1 = state_69787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69787__$1,inst_69785);
} else {
if((state_val_69788 === (12))){
var inst_69714 = (state_69787[(2)]);
var state_69787__$1 = state_69787;
var statearr_69839_69907 = state_69787__$1;
(statearr_69839_69907[(2)] = inst_69714);

(statearr_69839_69907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (2))){
var state_69787__$1 = state_69787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69787__$1,(4),ch);
} else {
if((state_val_69788 === (23))){
var state_69787__$1 = state_69787;
var statearr_69840_69908 = state_69787__$1;
(statearr_69840_69908[(2)] = null);

(statearr_69840_69908[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (35))){
var inst_69769 = (state_69787[(2)]);
var state_69787__$1 = state_69787;
var statearr_69841_69909 = state_69787__$1;
(statearr_69841_69909[(2)] = inst_69769);

(statearr_69841_69909[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (19))){
var inst_69688 = (state_69787[(7)]);
var inst_69692 = cljs.core.chunk_first.call(null,inst_69688);
var inst_69693 = cljs.core.chunk_rest.call(null,inst_69688);
var inst_69694 = cljs.core.count.call(null,inst_69692);
var inst_69668 = inst_69693;
var inst_69669 = inst_69692;
var inst_69670 = inst_69694;
var inst_69671 = (0);
var state_69787__$1 = (function (){var statearr_69842 = state_69787;
(statearr_69842[(13)] = inst_69670);

(statearr_69842[(15)] = inst_69669);

(statearr_69842[(16)] = inst_69671);

(statearr_69842[(17)] = inst_69668);

return statearr_69842;
})();
var statearr_69843_69910 = state_69787__$1;
(statearr_69843_69910[(2)] = null);

(statearr_69843_69910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (11))){
var inst_69688 = (state_69787[(7)]);
var inst_69668 = (state_69787[(17)]);
var inst_69688__$1 = cljs.core.seq.call(null,inst_69668);
var state_69787__$1 = (function (){var statearr_69844 = state_69787;
(statearr_69844[(7)] = inst_69688__$1);

return statearr_69844;
})();
if(inst_69688__$1){
var statearr_69845_69911 = state_69787__$1;
(statearr_69845_69911[(1)] = (16));

} else {
var statearr_69846_69912 = state_69787__$1;
(statearr_69846_69912[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (9))){
var inst_69716 = (state_69787[(2)]);
var state_69787__$1 = state_69787;
var statearr_69847_69913 = state_69787__$1;
(statearr_69847_69913[(2)] = inst_69716);

(statearr_69847_69913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (5))){
var inst_69666 = cljs.core.deref.call(null,cs);
var inst_69667 = cljs.core.seq.call(null,inst_69666);
var inst_69668 = inst_69667;
var inst_69669 = null;
var inst_69670 = (0);
var inst_69671 = (0);
var state_69787__$1 = (function (){var statearr_69848 = state_69787;
(statearr_69848[(13)] = inst_69670);

(statearr_69848[(15)] = inst_69669);

(statearr_69848[(16)] = inst_69671);

(statearr_69848[(17)] = inst_69668);

return statearr_69848;
})();
var statearr_69849_69914 = state_69787__$1;
(statearr_69849_69914[(2)] = null);

(statearr_69849_69914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (14))){
var state_69787__$1 = state_69787;
var statearr_69850_69915 = state_69787__$1;
(statearr_69850_69915[(2)] = null);

(statearr_69850_69915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (45))){
var inst_69777 = (state_69787[(2)]);
var state_69787__$1 = state_69787;
var statearr_69851_69916 = state_69787__$1;
(statearr_69851_69916[(2)] = inst_69777);

(statearr_69851_69916[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (26))){
var inst_69719 = (state_69787[(29)]);
var inst_69773 = (state_69787[(2)]);
var inst_69774 = cljs.core.seq.call(null,inst_69719);
var state_69787__$1 = (function (){var statearr_69852 = state_69787;
(statearr_69852[(31)] = inst_69773);

return statearr_69852;
})();
if(inst_69774){
var statearr_69853_69917 = state_69787__$1;
(statearr_69853_69917[(1)] = (42));

} else {
var statearr_69854_69918 = state_69787__$1;
(statearr_69854_69918[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (16))){
var inst_69688 = (state_69787[(7)]);
var inst_69690 = cljs.core.chunked_seq_QMARK_.call(null,inst_69688);
var state_69787__$1 = state_69787;
if(inst_69690){
var statearr_69855_69919 = state_69787__$1;
(statearr_69855_69919[(1)] = (19));

} else {
var statearr_69856_69920 = state_69787__$1;
(statearr_69856_69920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (38))){
var inst_69766 = (state_69787[(2)]);
var state_69787__$1 = state_69787;
var statearr_69857_69921 = state_69787__$1;
(statearr_69857_69921[(2)] = inst_69766);

(statearr_69857_69921[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (30))){
var state_69787__$1 = state_69787;
var statearr_69858_69922 = state_69787__$1;
(statearr_69858_69922[(2)] = null);

(statearr_69858_69922[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (10))){
var inst_69669 = (state_69787[(15)]);
var inst_69671 = (state_69787[(16)]);
var inst_69677 = cljs.core._nth.call(null,inst_69669,inst_69671);
var inst_69678 = cljs.core.nth.call(null,inst_69677,(0),null);
var inst_69679 = cljs.core.nth.call(null,inst_69677,(1),null);
var state_69787__$1 = (function (){var statearr_69859 = state_69787;
(statearr_69859[(26)] = inst_69678);

return statearr_69859;
})();
if(cljs.core.truth_(inst_69679)){
var statearr_69860_69923 = state_69787__$1;
(statearr_69860_69923[(1)] = (13));

} else {
var statearr_69861_69924 = state_69787__$1;
(statearr_69861_69924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (18))){
var inst_69712 = (state_69787[(2)]);
var state_69787__$1 = state_69787;
var statearr_69862_69925 = state_69787__$1;
(statearr_69862_69925[(2)] = inst_69712);

(statearr_69862_69925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (42))){
var state_69787__$1 = state_69787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69787__$1,(45),dchan);
} else {
if((state_val_69788 === (37))){
var inst_69755 = (state_69787[(23)]);
var inst_69659 = (state_69787[(9)]);
var inst_69746 = (state_69787[(25)]);
var inst_69755__$1 = cljs.core.first.call(null,inst_69746);
var inst_69756 = cljs.core.async.put_BANG_.call(null,inst_69755__$1,inst_69659,done);
var state_69787__$1 = (function (){var statearr_69863 = state_69787;
(statearr_69863[(23)] = inst_69755__$1);

return statearr_69863;
})();
if(cljs.core.truth_(inst_69756)){
var statearr_69864_69926 = state_69787__$1;
(statearr_69864_69926[(1)] = (39));

} else {
var statearr_69865_69927 = state_69787__$1;
(statearr_69865_69927[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69788 === (8))){
var inst_69670 = (state_69787[(13)]);
var inst_69671 = (state_69787[(16)]);
var inst_69673 = (inst_69671 < inst_69670);
var inst_69674 = inst_69673;
var state_69787__$1 = state_69787;
if(cljs.core.truth_(inst_69674)){
var statearr_69866_69928 = state_69787__$1;
(statearr_69866_69928[(1)] = (10));

} else {
var statearr_69867_69929 = state_69787__$1;
(statearr_69867_69929[(1)] = (11));

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
});})(c__41196__auto___69875,cs,m,dchan,dctr,done))
;
return ((function (switch__40432__auto__,c__41196__auto___69875,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40433__auto__ = null;
var cljs$core$async$mult_$_state_machine__40433__auto____0 = (function (){
var statearr_69871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69871[(0)] = cljs$core$async$mult_$_state_machine__40433__auto__);

(statearr_69871[(1)] = (1));

return statearr_69871;
});
var cljs$core$async$mult_$_state_machine__40433__auto____1 = (function (state_69787){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_69787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e69872){if((e69872 instanceof Object)){
var ex__40436__auto__ = e69872;
var statearr_69873_69930 = state_69787;
(statearr_69873_69930[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69931 = state_69787;
state_69787 = G__69931;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40433__auto__ = function(state_69787){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40433__auto____1.call(this,state_69787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40433__auto____0;
cljs$core$async$mult_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40433__auto____1;
return cljs$core$async$mult_$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___69875,cs,m,dchan,dctr,done))
})();
var state__41198__auto__ = (function (){var statearr_69874 = f__41197__auto__.call(null);
(statearr_69874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___69875);

return statearr_69874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___69875,cs,m,dchan,dctr,done))
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
var args69932 = [];
var len__36491__auto___69935 = arguments.length;
var i__36492__auto___69936 = (0);
while(true){
if((i__36492__auto___69936 < len__36491__auto___69935)){
args69932.push((arguments[i__36492__auto___69936]));

var G__69937 = (i__36492__auto___69936 + (1));
i__36492__auto___69936 = G__69937;
continue;
} else {
}
break;
}

var G__69934 = args69932.length;
switch (G__69934) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69932.length)].join('')));

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
var x__36085__auto__ = (((m == null))?null:m);
var m__36086__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,m,ch);
} else {
var m__36086__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,m,ch);
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
var x__36085__auto__ = (((m == null))?null:m);
var m__36086__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,m,ch);
} else {
var m__36086__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,m,ch);
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
var x__36085__auto__ = (((m == null))?null:m);
var m__36086__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,m);
} else {
var m__36086__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,m);
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
var x__36085__auto__ = (((m == null))?null:m);
var m__36086__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,m,state_map);
} else {
var m__36086__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,m,state_map);
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
var x__36085__auto__ = (((m == null))?null:m);
var m__36086__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,m,mode);
} else {
var m__36086__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__36498__auto__ = [];
var len__36491__auto___69949 = arguments.length;
var i__36492__auto___69950 = (0);
while(true){
if((i__36492__auto___69950 < len__36491__auto___69949)){
args__36498__auto__.push((arguments[i__36492__auto___69950]));

var G__69951 = (i__36492__auto___69950 + (1));
i__36492__auto___69950 = G__69951;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((3) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36499__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__69943){
var map__69944 = p__69943;
var map__69944__$1 = ((((!((map__69944 == null)))?((((map__69944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69944):map__69944);
var opts = map__69944__$1;
var statearr_69946_69952 = state;
(statearr_69946_69952[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__69944,map__69944__$1,opts){
return (function (val){
var statearr_69947_69953 = state;
(statearr_69947_69953[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__69944,map__69944__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_69948_69954 = state;
(statearr_69948_69954[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq69939){
var G__69940 = cljs.core.first.call(null,seq69939);
var seq69939__$1 = cljs.core.next.call(null,seq69939);
var G__69941 = cljs.core.first.call(null,seq69939__$1);
var seq69939__$2 = cljs.core.next.call(null,seq69939__$1);
var G__69942 = cljs.core.first.call(null,seq69939__$2);
var seq69939__$3 = cljs.core.next.call(null,seq69939__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69940,G__69941,G__69942,seq69939__$3);
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
if(typeof cljs.core.async.t_cljs$core$async70118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70118 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta70119){
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
this.meta70119 = meta70119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_70120,meta70119__$1){
var self__ = this;
var _70120__$1 = this;
return (new cljs.core.async.t_cljs$core$async70118(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta70119__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_70120){
var self__ = this;
var _70120__$1 = this;
return self__.meta70119;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70118.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async70118.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70118.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async70118.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70118.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70118.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70118.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70118.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async70118.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta70119","meta70119",-291264764,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async70118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70118";

cljs.core.async.t_cljs$core$async70118.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async70118");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async70118 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async70118(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70119){
return (new cljs.core.async.t_cljs$core$async70118(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta70119));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async70118(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41196__auto___70281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___70281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___70281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_70218){
var state_val_70219 = (state_70218[(1)]);
if((state_val_70219 === (7))){
var inst_70136 = (state_70218[(2)]);
var state_70218__$1 = state_70218;
var statearr_70220_70282 = state_70218__$1;
(statearr_70220_70282[(2)] = inst_70136);

(statearr_70220_70282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (20))){
var inst_70148 = (state_70218[(7)]);
var state_70218__$1 = state_70218;
var statearr_70221_70283 = state_70218__$1;
(statearr_70221_70283[(2)] = inst_70148);

(statearr_70221_70283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (27))){
var state_70218__$1 = state_70218;
var statearr_70222_70284 = state_70218__$1;
(statearr_70222_70284[(2)] = null);

(statearr_70222_70284[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (1))){
var inst_70124 = (state_70218[(8)]);
var inst_70124__$1 = calc_state.call(null);
var inst_70126 = (inst_70124__$1 == null);
var inst_70127 = cljs.core.not.call(null,inst_70126);
var state_70218__$1 = (function (){var statearr_70223 = state_70218;
(statearr_70223[(8)] = inst_70124__$1);

return statearr_70223;
})();
if(inst_70127){
var statearr_70224_70285 = state_70218__$1;
(statearr_70224_70285[(1)] = (2));

} else {
var statearr_70225_70286 = state_70218__$1;
(statearr_70225_70286[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (24))){
var inst_70178 = (state_70218[(9)]);
var inst_70171 = (state_70218[(10)]);
var inst_70192 = (state_70218[(11)]);
var inst_70192__$1 = inst_70171.call(null,inst_70178);
var state_70218__$1 = (function (){var statearr_70226 = state_70218;
(statearr_70226[(11)] = inst_70192__$1);

return statearr_70226;
})();
if(cljs.core.truth_(inst_70192__$1)){
var statearr_70227_70287 = state_70218__$1;
(statearr_70227_70287[(1)] = (29));

} else {
var statearr_70228_70288 = state_70218__$1;
(statearr_70228_70288[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (4))){
var inst_70139 = (state_70218[(2)]);
var state_70218__$1 = state_70218;
if(cljs.core.truth_(inst_70139)){
var statearr_70229_70289 = state_70218__$1;
(statearr_70229_70289[(1)] = (8));

} else {
var statearr_70230_70290 = state_70218__$1;
(statearr_70230_70290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (15))){
var inst_70165 = (state_70218[(2)]);
var state_70218__$1 = state_70218;
if(cljs.core.truth_(inst_70165)){
var statearr_70231_70291 = state_70218__$1;
(statearr_70231_70291[(1)] = (19));

} else {
var statearr_70232_70292 = state_70218__$1;
(statearr_70232_70292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (21))){
var inst_70170 = (state_70218[(12)]);
var inst_70170__$1 = (state_70218[(2)]);
var inst_70171 = cljs.core.get.call(null,inst_70170__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70172 = cljs.core.get.call(null,inst_70170__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70173 = cljs.core.get.call(null,inst_70170__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_70218__$1 = (function (){var statearr_70233 = state_70218;
(statearr_70233[(12)] = inst_70170__$1);

(statearr_70233[(10)] = inst_70171);

(statearr_70233[(13)] = inst_70172);

return statearr_70233;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_70218__$1,(22),inst_70173);
} else {
if((state_val_70219 === (31))){
var inst_70200 = (state_70218[(2)]);
var state_70218__$1 = state_70218;
if(cljs.core.truth_(inst_70200)){
var statearr_70234_70293 = state_70218__$1;
(statearr_70234_70293[(1)] = (32));

} else {
var statearr_70235_70294 = state_70218__$1;
(statearr_70235_70294[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (32))){
var inst_70177 = (state_70218[(14)]);
var state_70218__$1 = state_70218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70218__$1,(35),out,inst_70177);
} else {
if((state_val_70219 === (33))){
var inst_70170 = (state_70218[(12)]);
var inst_70148 = inst_70170;
var state_70218__$1 = (function (){var statearr_70236 = state_70218;
(statearr_70236[(7)] = inst_70148);

return statearr_70236;
})();
var statearr_70237_70295 = state_70218__$1;
(statearr_70237_70295[(2)] = null);

(statearr_70237_70295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (13))){
var inst_70148 = (state_70218[(7)]);
var inst_70155 = inst_70148.cljs$lang$protocol_mask$partition0$;
var inst_70156 = (inst_70155 & (64));
var inst_70157 = inst_70148.cljs$core$ISeq$;
var inst_70158 = (inst_70156) || (inst_70157);
var state_70218__$1 = state_70218;
if(cljs.core.truth_(inst_70158)){
var statearr_70238_70296 = state_70218__$1;
(statearr_70238_70296[(1)] = (16));

} else {
var statearr_70239_70297 = state_70218__$1;
(statearr_70239_70297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (22))){
var inst_70178 = (state_70218[(9)]);
var inst_70177 = (state_70218[(14)]);
var inst_70176 = (state_70218[(2)]);
var inst_70177__$1 = cljs.core.nth.call(null,inst_70176,(0),null);
var inst_70178__$1 = cljs.core.nth.call(null,inst_70176,(1),null);
var inst_70179 = (inst_70177__$1 == null);
var inst_70180 = cljs.core._EQ_.call(null,inst_70178__$1,change);
var inst_70181 = (inst_70179) || (inst_70180);
var state_70218__$1 = (function (){var statearr_70240 = state_70218;
(statearr_70240[(9)] = inst_70178__$1);

(statearr_70240[(14)] = inst_70177__$1);

return statearr_70240;
})();
if(cljs.core.truth_(inst_70181)){
var statearr_70241_70298 = state_70218__$1;
(statearr_70241_70298[(1)] = (23));

} else {
var statearr_70242_70299 = state_70218__$1;
(statearr_70242_70299[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (36))){
var inst_70170 = (state_70218[(12)]);
var inst_70148 = inst_70170;
var state_70218__$1 = (function (){var statearr_70243 = state_70218;
(statearr_70243[(7)] = inst_70148);

return statearr_70243;
})();
var statearr_70244_70300 = state_70218__$1;
(statearr_70244_70300[(2)] = null);

(statearr_70244_70300[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (29))){
var inst_70192 = (state_70218[(11)]);
var state_70218__$1 = state_70218;
var statearr_70245_70301 = state_70218__$1;
(statearr_70245_70301[(2)] = inst_70192);

(statearr_70245_70301[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (6))){
var state_70218__$1 = state_70218;
var statearr_70246_70302 = state_70218__$1;
(statearr_70246_70302[(2)] = false);

(statearr_70246_70302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (28))){
var inst_70188 = (state_70218[(2)]);
var inst_70189 = calc_state.call(null);
var inst_70148 = inst_70189;
var state_70218__$1 = (function (){var statearr_70247 = state_70218;
(statearr_70247[(15)] = inst_70188);

(statearr_70247[(7)] = inst_70148);

return statearr_70247;
})();
var statearr_70248_70303 = state_70218__$1;
(statearr_70248_70303[(2)] = null);

(statearr_70248_70303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (25))){
var inst_70214 = (state_70218[(2)]);
var state_70218__$1 = state_70218;
var statearr_70249_70304 = state_70218__$1;
(statearr_70249_70304[(2)] = inst_70214);

(statearr_70249_70304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (34))){
var inst_70212 = (state_70218[(2)]);
var state_70218__$1 = state_70218;
var statearr_70250_70305 = state_70218__$1;
(statearr_70250_70305[(2)] = inst_70212);

(statearr_70250_70305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (17))){
var state_70218__$1 = state_70218;
var statearr_70251_70306 = state_70218__$1;
(statearr_70251_70306[(2)] = false);

(statearr_70251_70306[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (3))){
var state_70218__$1 = state_70218;
var statearr_70252_70307 = state_70218__$1;
(statearr_70252_70307[(2)] = false);

(statearr_70252_70307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (12))){
var inst_70216 = (state_70218[(2)]);
var state_70218__$1 = state_70218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70218__$1,inst_70216);
} else {
if((state_val_70219 === (2))){
var inst_70124 = (state_70218[(8)]);
var inst_70129 = inst_70124.cljs$lang$protocol_mask$partition0$;
var inst_70130 = (inst_70129 & (64));
var inst_70131 = inst_70124.cljs$core$ISeq$;
var inst_70132 = (inst_70130) || (inst_70131);
var state_70218__$1 = state_70218;
if(cljs.core.truth_(inst_70132)){
var statearr_70253_70308 = state_70218__$1;
(statearr_70253_70308[(1)] = (5));

} else {
var statearr_70254_70309 = state_70218__$1;
(statearr_70254_70309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (23))){
var inst_70177 = (state_70218[(14)]);
var inst_70183 = (inst_70177 == null);
var state_70218__$1 = state_70218;
if(cljs.core.truth_(inst_70183)){
var statearr_70255_70310 = state_70218__$1;
(statearr_70255_70310[(1)] = (26));

} else {
var statearr_70256_70311 = state_70218__$1;
(statearr_70256_70311[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (35))){
var inst_70203 = (state_70218[(2)]);
var state_70218__$1 = state_70218;
if(cljs.core.truth_(inst_70203)){
var statearr_70257_70312 = state_70218__$1;
(statearr_70257_70312[(1)] = (36));

} else {
var statearr_70258_70313 = state_70218__$1;
(statearr_70258_70313[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (19))){
var inst_70148 = (state_70218[(7)]);
var inst_70167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70148);
var state_70218__$1 = state_70218;
var statearr_70259_70314 = state_70218__$1;
(statearr_70259_70314[(2)] = inst_70167);

(statearr_70259_70314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (11))){
var inst_70148 = (state_70218[(7)]);
var inst_70152 = (inst_70148 == null);
var inst_70153 = cljs.core.not.call(null,inst_70152);
var state_70218__$1 = state_70218;
if(inst_70153){
var statearr_70260_70315 = state_70218__$1;
(statearr_70260_70315[(1)] = (13));

} else {
var statearr_70261_70316 = state_70218__$1;
(statearr_70261_70316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (9))){
var inst_70124 = (state_70218[(8)]);
var state_70218__$1 = state_70218;
var statearr_70262_70317 = state_70218__$1;
(statearr_70262_70317[(2)] = inst_70124);

(statearr_70262_70317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (5))){
var state_70218__$1 = state_70218;
var statearr_70263_70318 = state_70218__$1;
(statearr_70263_70318[(2)] = true);

(statearr_70263_70318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (14))){
var state_70218__$1 = state_70218;
var statearr_70264_70319 = state_70218__$1;
(statearr_70264_70319[(2)] = false);

(statearr_70264_70319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (26))){
var inst_70178 = (state_70218[(9)]);
var inst_70185 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_70178);
var state_70218__$1 = state_70218;
var statearr_70265_70320 = state_70218__$1;
(statearr_70265_70320[(2)] = inst_70185);

(statearr_70265_70320[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (16))){
var state_70218__$1 = state_70218;
var statearr_70266_70321 = state_70218__$1;
(statearr_70266_70321[(2)] = true);

(statearr_70266_70321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (38))){
var inst_70208 = (state_70218[(2)]);
var state_70218__$1 = state_70218;
var statearr_70267_70322 = state_70218__$1;
(statearr_70267_70322[(2)] = inst_70208);

(statearr_70267_70322[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (30))){
var inst_70178 = (state_70218[(9)]);
var inst_70171 = (state_70218[(10)]);
var inst_70172 = (state_70218[(13)]);
var inst_70195 = cljs.core.empty_QMARK_.call(null,inst_70171);
var inst_70196 = inst_70172.call(null,inst_70178);
var inst_70197 = cljs.core.not.call(null,inst_70196);
var inst_70198 = (inst_70195) && (inst_70197);
var state_70218__$1 = state_70218;
var statearr_70268_70323 = state_70218__$1;
(statearr_70268_70323[(2)] = inst_70198);

(statearr_70268_70323[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (10))){
var inst_70124 = (state_70218[(8)]);
var inst_70144 = (state_70218[(2)]);
var inst_70145 = cljs.core.get.call(null,inst_70144,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_70146 = cljs.core.get.call(null,inst_70144,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_70147 = cljs.core.get.call(null,inst_70144,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_70148 = inst_70124;
var state_70218__$1 = (function (){var statearr_70269 = state_70218;
(statearr_70269[(16)] = inst_70145);

(statearr_70269[(17)] = inst_70146);

(statearr_70269[(7)] = inst_70148);

(statearr_70269[(18)] = inst_70147);

return statearr_70269;
})();
var statearr_70270_70324 = state_70218__$1;
(statearr_70270_70324[(2)] = null);

(statearr_70270_70324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (18))){
var inst_70162 = (state_70218[(2)]);
var state_70218__$1 = state_70218;
var statearr_70271_70325 = state_70218__$1;
(statearr_70271_70325[(2)] = inst_70162);

(statearr_70271_70325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (37))){
var state_70218__$1 = state_70218;
var statearr_70272_70326 = state_70218__$1;
(statearr_70272_70326[(2)] = null);

(statearr_70272_70326[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70219 === (8))){
var inst_70124 = (state_70218[(8)]);
var inst_70141 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70124);
var state_70218__$1 = state_70218;
var statearr_70273_70327 = state_70218__$1;
(statearr_70273_70327[(2)] = inst_70141);

(statearr_70273_70327[(1)] = (10));


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
});})(c__41196__auto___70281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40432__auto__,c__41196__auto___70281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40433__auto__ = null;
var cljs$core$async$mix_$_state_machine__40433__auto____0 = (function (){
var statearr_70277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70277[(0)] = cljs$core$async$mix_$_state_machine__40433__auto__);

(statearr_70277[(1)] = (1));

return statearr_70277;
});
var cljs$core$async$mix_$_state_machine__40433__auto____1 = (function (state_70218){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_70218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e70278){if((e70278 instanceof Object)){
var ex__40436__auto__ = e70278;
var statearr_70279_70328 = state_70218;
(statearr_70279_70328[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70329 = state_70218;
state_70218 = G__70329;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40433__auto__ = function(state_70218){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40433__auto____1.call(this,state_70218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40433__auto____0;
cljs$core$async$mix_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40433__auto____1;
return cljs$core$async$mix_$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___70281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__41198__auto__ = (function (){var statearr_70280 = f__41197__auto__.call(null);
(statearr_70280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___70281);

return statearr_70280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___70281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__36085__auto__ = (((p == null))?null:p);
var m__36086__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__36086__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__36085__auto__ = (((p == null))?null:p);
var m__36086__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,p,v,ch);
} else {
var m__36086__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args70330 = [];
var len__36491__auto___70333 = arguments.length;
var i__36492__auto___70334 = (0);
while(true){
if((i__36492__auto___70334 < len__36491__auto___70333)){
args70330.push((arguments[i__36492__auto___70334]));

var G__70335 = (i__36492__auto___70334 + (1));
i__36492__auto___70334 = G__70335;
continue;
} else {
}
break;
}

var G__70332 = args70330.length;
switch (G__70332) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70330.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__36085__auto__ = (((p == null))?null:p);
var m__36086__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,p);
} else {
var m__36086__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,p);
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
var x__36085__auto__ = (((p == null))?null:p);
var m__36086__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36085__auto__)]);
if(!((m__36086__auto__ == null))){
return m__36086__auto__.call(null,p,v);
} else {
var m__36086__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36086__auto____$1 == null))){
return m__36086__auto____$1.call(null,p,v);
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
var args70338 = [];
var len__36491__auto___70463 = arguments.length;
var i__36492__auto___70464 = (0);
while(true){
if((i__36492__auto___70464 < len__36491__auto___70463)){
args70338.push((arguments[i__36492__auto___70464]));

var G__70465 = (i__36492__auto___70464 + (1));
i__36492__auto___70464 = G__70465;
continue;
} else {
}
break;
}

var G__70340 = args70338.length;
switch (G__70340) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70338.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__35422__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__35422__auto__,mults){
return (function (p1__70337_SHARP_){
if(cljs.core.truth_(p1__70337_SHARP_.call(null,topic))){
return p1__70337_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__70337_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35422__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async70341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70341 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta70342){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta70342 = meta70342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_70343,meta70342__$1){
var self__ = this;
var _70343__$1 = this;
return (new cljs.core.async.t_cljs$core$async70341(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta70342__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70341.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_70343){
var self__ = this;
var _70343__$1 = this;
return self__.meta70342;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70341.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async70341.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70341.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async70341.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70341.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async70341.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70341.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70341.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta70342","meta70342",1070012988,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async70341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70341";

cljs.core.async.t_cljs$core$async70341.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async70341");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async70341 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async70341(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70342){
return (new cljs.core.async.t_cljs$core$async70341(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta70342));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async70341(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41196__auto___70467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___70467,mults,ensure_mult,p){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___70467,mults,ensure_mult,p){
return (function (state_70415){
var state_val_70416 = (state_70415[(1)]);
if((state_val_70416 === (7))){
var inst_70411 = (state_70415[(2)]);
var state_70415__$1 = state_70415;
var statearr_70417_70468 = state_70415__$1;
(statearr_70417_70468[(2)] = inst_70411);

(statearr_70417_70468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (20))){
var state_70415__$1 = state_70415;
var statearr_70418_70469 = state_70415__$1;
(statearr_70418_70469[(2)] = null);

(statearr_70418_70469[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (1))){
var state_70415__$1 = state_70415;
var statearr_70419_70470 = state_70415__$1;
(statearr_70419_70470[(2)] = null);

(statearr_70419_70470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (24))){
var inst_70394 = (state_70415[(7)]);
var inst_70403 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_70394);
var state_70415__$1 = state_70415;
var statearr_70420_70471 = state_70415__$1;
(statearr_70420_70471[(2)] = inst_70403);

(statearr_70420_70471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (4))){
var inst_70346 = (state_70415[(8)]);
var inst_70346__$1 = (state_70415[(2)]);
var inst_70347 = (inst_70346__$1 == null);
var state_70415__$1 = (function (){var statearr_70421 = state_70415;
(statearr_70421[(8)] = inst_70346__$1);

return statearr_70421;
})();
if(cljs.core.truth_(inst_70347)){
var statearr_70422_70472 = state_70415__$1;
(statearr_70422_70472[(1)] = (5));

} else {
var statearr_70423_70473 = state_70415__$1;
(statearr_70423_70473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (15))){
var inst_70388 = (state_70415[(2)]);
var state_70415__$1 = state_70415;
var statearr_70424_70474 = state_70415__$1;
(statearr_70424_70474[(2)] = inst_70388);

(statearr_70424_70474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (21))){
var inst_70408 = (state_70415[(2)]);
var state_70415__$1 = (function (){var statearr_70425 = state_70415;
(statearr_70425[(9)] = inst_70408);

return statearr_70425;
})();
var statearr_70426_70475 = state_70415__$1;
(statearr_70426_70475[(2)] = null);

(statearr_70426_70475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (13))){
var inst_70370 = (state_70415[(10)]);
var inst_70372 = cljs.core.chunked_seq_QMARK_.call(null,inst_70370);
var state_70415__$1 = state_70415;
if(inst_70372){
var statearr_70427_70476 = state_70415__$1;
(statearr_70427_70476[(1)] = (16));

} else {
var statearr_70428_70477 = state_70415__$1;
(statearr_70428_70477[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (22))){
var inst_70400 = (state_70415[(2)]);
var state_70415__$1 = state_70415;
if(cljs.core.truth_(inst_70400)){
var statearr_70429_70478 = state_70415__$1;
(statearr_70429_70478[(1)] = (23));

} else {
var statearr_70430_70479 = state_70415__$1;
(statearr_70430_70479[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (6))){
var inst_70346 = (state_70415[(8)]);
var inst_70394 = (state_70415[(7)]);
var inst_70396 = (state_70415[(11)]);
var inst_70394__$1 = topic_fn.call(null,inst_70346);
var inst_70395 = cljs.core.deref.call(null,mults);
var inst_70396__$1 = cljs.core.get.call(null,inst_70395,inst_70394__$1);
var state_70415__$1 = (function (){var statearr_70431 = state_70415;
(statearr_70431[(7)] = inst_70394__$1);

(statearr_70431[(11)] = inst_70396__$1);

return statearr_70431;
})();
if(cljs.core.truth_(inst_70396__$1)){
var statearr_70432_70480 = state_70415__$1;
(statearr_70432_70480[(1)] = (19));

} else {
var statearr_70433_70481 = state_70415__$1;
(statearr_70433_70481[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (25))){
var inst_70405 = (state_70415[(2)]);
var state_70415__$1 = state_70415;
var statearr_70434_70482 = state_70415__$1;
(statearr_70434_70482[(2)] = inst_70405);

(statearr_70434_70482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (17))){
var inst_70370 = (state_70415[(10)]);
var inst_70379 = cljs.core.first.call(null,inst_70370);
var inst_70380 = cljs.core.async.muxch_STAR_.call(null,inst_70379);
var inst_70381 = cljs.core.async.close_BANG_.call(null,inst_70380);
var inst_70382 = cljs.core.next.call(null,inst_70370);
var inst_70356 = inst_70382;
var inst_70357 = null;
var inst_70358 = (0);
var inst_70359 = (0);
var state_70415__$1 = (function (){var statearr_70435 = state_70415;
(statearr_70435[(12)] = inst_70356);

(statearr_70435[(13)] = inst_70357);

(statearr_70435[(14)] = inst_70359);

(statearr_70435[(15)] = inst_70358);

(statearr_70435[(16)] = inst_70381);

return statearr_70435;
})();
var statearr_70436_70483 = state_70415__$1;
(statearr_70436_70483[(2)] = null);

(statearr_70436_70483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (3))){
var inst_70413 = (state_70415[(2)]);
var state_70415__$1 = state_70415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70415__$1,inst_70413);
} else {
if((state_val_70416 === (12))){
var inst_70390 = (state_70415[(2)]);
var state_70415__$1 = state_70415;
var statearr_70437_70484 = state_70415__$1;
(statearr_70437_70484[(2)] = inst_70390);

(statearr_70437_70484[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (2))){
var state_70415__$1 = state_70415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70415__$1,(4),ch);
} else {
if((state_val_70416 === (23))){
var state_70415__$1 = state_70415;
var statearr_70438_70485 = state_70415__$1;
(statearr_70438_70485[(2)] = null);

(statearr_70438_70485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (19))){
var inst_70346 = (state_70415[(8)]);
var inst_70396 = (state_70415[(11)]);
var inst_70398 = cljs.core.async.muxch_STAR_.call(null,inst_70396);
var state_70415__$1 = state_70415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70415__$1,(22),inst_70398,inst_70346);
} else {
if((state_val_70416 === (11))){
var inst_70356 = (state_70415[(12)]);
var inst_70370 = (state_70415[(10)]);
var inst_70370__$1 = cljs.core.seq.call(null,inst_70356);
var state_70415__$1 = (function (){var statearr_70439 = state_70415;
(statearr_70439[(10)] = inst_70370__$1);

return statearr_70439;
})();
if(inst_70370__$1){
var statearr_70440_70486 = state_70415__$1;
(statearr_70440_70486[(1)] = (13));

} else {
var statearr_70441_70487 = state_70415__$1;
(statearr_70441_70487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (9))){
var inst_70392 = (state_70415[(2)]);
var state_70415__$1 = state_70415;
var statearr_70442_70488 = state_70415__$1;
(statearr_70442_70488[(2)] = inst_70392);

(statearr_70442_70488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (5))){
var inst_70353 = cljs.core.deref.call(null,mults);
var inst_70354 = cljs.core.vals.call(null,inst_70353);
var inst_70355 = cljs.core.seq.call(null,inst_70354);
var inst_70356 = inst_70355;
var inst_70357 = null;
var inst_70358 = (0);
var inst_70359 = (0);
var state_70415__$1 = (function (){var statearr_70443 = state_70415;
(statearr_70443[(12)] = inst_70356);

(statearr_70443[(13)] = inst_70357);

(statearr_70443[(14)] = inst_70359);

(statearr_70443[(15)] = inst_70358);

return statearr_70443;
})();
var statearr_70444_70489 = state_70415__$1;
(statearr_70444_70489[(2)] = null);

(statearr_70444_70489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (14))){
var state_70415__$1 = state_70415;
var statearr_70448_70490 = state_70415__$1;
(statearr_70448_70490[(2)] = null);

(statearr_70448_70490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (16))){
var inst_70370 = (state_70415[(10)]);
var inst_70374 = cljs.core.chunk_first.call(null,inst_70370);
var inst_70375 = cljs.core.chunk_rest.call(null,inst_70370);
var inst_70376 = cljs.core.count.call(null,inst_70374);
var inst_70356 = inst_70375;
var inst_70357 = inst_70374;
var inst_70358 = inst_70376;
var inst_70359 = (0);
var state_70415__$1 = (function (){var statearr_70449 = state_70415;
(statearr_70449[(12)] = inst_70356);

(statearr_70449[(13)] = inst_70357);

(statearr_70449[(14)] = inst_70359);

(statearr_70449[(15)] = inst_70358);

return statearr_70449;
})();
var statearr_70450_70491 = state_70415__$1;
(statearr_70450_70491[(2)] = null);

(statearr_70450_70491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (10))){
var inst_70356 = (state_70415[(12)]);
var inst_70357 = (state_70415[(13)]);
var inst_70359 = (state_70415[(14)]);
var inst_70358 = (state_70415[(15)]);
var inst_70364 = cljs.core._nth.call(null,inst_70357,inst_70359);
var inst_70365 = cljs.core.async.muxch_STAR_.call(null,inst_70364);
var inst_70366 = cljs.core.async.close_BANG_.call(null,inst_70365);
var inst_70367 = (inst_70359 + (1));
var tmp70445 = inst_70356;
var tmp70446 = inst_70357;
var tmp70447 = inst_70358;
var inst_70356__$1 = tmp70445;
var inst_70357__$1 = tmp70446;
var inst_70358__$1 = tmp70447;
var inst_70359__$1 = inst_70367;
var state_70415__$1 = (function (){var statearr_70451 = state_70415;
(statearr_70451[(12)] = inst_70356__$1);

(statearr_70451[(13)] = inst_70357__$1);

(statearr_70451[(14)] = inst_70359__$1);

(statearr_70451[(15)] = inst_70358__$1);

(statearr_70451[(17)] = inst_70366);

return statearr_70451;
})();
var statearr_70452_70492 = state_70415__$1;
(statearr_70452_70492[(2)] = null);

(statearr_70452_70492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (18))){
var inst_70385 = (state_70415[(2)]);
var state_70415__$1 = state_70415;
var statearr_70453_70493 = state_70415__$1;
(statearr_70453_70493[(2)] = inst_70385);

(statearr_70453_70493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70416 === (8))){
var inst_70359 = (state_70415[(14)]);
var inst_70358 = (state_70415[(15)]);
var inst_70361 = (inst_70359 < inst_70358);
var inst_70362 = inst_70361;
var state_70415__$1 = state_70415;
if(cljs.core.truth_(inst_70362)){
var statearr_70454_70494 = state_70415__$1;
(statearr_70454_70494[(1)] = (10));

} else {
var statearr_70455_70495 = state_70415__$1;
(statearr_70455_70495[(1)] = (11));

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
});})(c__41196__auto___70467,mults,ensure_mult,p))
;
return ((function (switch__40432__auto__,c__41196__auto___70467,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_70459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70459[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_70459[(1)] = (1));

return statearr_70459;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_70415){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_70415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e70460){if((e70460 instanceof Object)){
var ex__40436__auto__ = e70460;
var statearr_70461_70496 = state_70415;
(statearr_70461_70496[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70497 = state_70415;
state_70415 = G__70497;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_70415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_70415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___70467,mults,ensure_mult,p))
})();
var state__41198__auto__ = (function (){var statearr_70462 = f__41197__auto__.call(null);
(statearr_70462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___70467);

return statearr_70462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___70467,mults,ensure_mult,p))
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
var args70498 = [];
var len__36491__auto___70501 = arguments.length;
var i__36492__auto___70502 = (0);
while(true){
if((i__36492__auto___70502 < len__36491__auto___70501)){
args70498.push((arguments[i__36492__auto___70502]));

var G__70503 = (i__36492__auto___70502 + (1));
i__36492__auto___70502 = G__70503;
continue;
} else {
}
break;
}

var G__70500 = args70498.length;
switch (G__70500) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70498.length)].join('')));

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
var args70505 = [];
var len__36491__auto___70508 = arguments.length;
var i__36492__auto___70509 = (0);
while(true){
if((i__36492__auto___70509 < len__36491__auto___70508)){
args70505.push((arguments[i__36492__auto___70509]));

var G__70510 = (i__36492__auto___70509 + (1));
i__36492__auto___70509 = G__70510;
continue;
} else {
}
break;
}

var G__70507 = args70505.length;
switch (G__70507) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70505.length)].join('')));

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
var args70512 = [];
var len__36491__auto___70583 = arguments.length;
var i__36492__auto___70584 = (0);
while(true){
if((i__36492__auto___70584 < len__36491__auto___70583)){
args70512.push((arguments[i__36492__auto___70584]));

var G__70585 = (i__36492__auto___70584 + (1));
i__36492__auto___70584 = G__70585;
continue;
} else {
}
break;
}

var G__70514 = args70512.length;
switch (G__70514) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70512.length)].join('')));

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
var c__41196__auto___70587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___70587,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___70587,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_70553){
var state_val_70554 = (state_70553[(1)]);
if((state_val_70554 === (7))){
var state_70553__$1 = state_70553;
var statearr_70555_70588 = state_70553__$1;
(statearr_70555_70588[(2)] = null);

(statearr_70555_70588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70554 === (1))){
var state_70553__$1 = state_70553;
var statearr_70556_70589 = state_70553__$1;
(statearr_70556_70589[(2)] = null);

(statearr_70556_70589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70554 === (4))){
var inst_70517 = (state_70553[(7)]);
var inst_70519 = (inst_70517 < cnt);
var state_70553__$1 = state_70553;
if(cljs.core.truth_(inst_70519)){
var statearr_70557_70590 = state_70553__$1;
(statearr_70557_70590[(1)] = (6));

} else {
var statearr_70558_70591 = state_70553__$1;
(statearr_70558_70591[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70554 === (15))){
var inst_70549 = (state_70553[(2)]);
var state_70553__$1 = state_70553;
var statearr_70559_70592 = state_70553__$1;
(statearr_70559_70592[(2)] = inst_70549);

(statearr_70559_70592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70554 === (13))){
var inst_70542 = cljs.core.async.close_BANG_.call(null,out);
var state_70553__$1 = state_70553;
var statearr_70560_70593 = state_70553__$1;
(statearr_70560_70593[(2)] = inst_70542);

(statearr_70560_70593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70554 === (6))){
var state_70553__$1 = state_70553;
var statearr_70561_70594 = state_70553__$1;
(statearr_70561_70594[(2)] = null);

(statearr_70561_70594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70554 === (3))){
var inst_70551 = (state_70553[(2)]);
var state_70553__$1 = state_70553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70553__$1,inst_70551);
} else {
if((state_val_70554 === (12))){
var inst_70539 = (state_70553[(8)]);
var inst_70539__$1 = (state_70553[(2)]);
var inst_70540 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_70539__$1);
var state_70553__$1 = (function (){var statearr_70562 = state_70553;
(statearr_70562[(8)] = inst_70539__$1);

return statearr_70562;
})();
if(cljs.core.truth_(inst_70540)){
var statearr_70563_70595 = state_70553__$1;
(statearr_70563_70595[(1)] = (13));

} else {
var statearr_70564_70596 = state_70553__$1;
(statearr_70564_70596[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70554 === (2))){
var inst_70516 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_70517 = (0);
var state_70553__$1 = (function (){var statearr_70565 = state_70553;
(statearr_70565[(7)] = inst_70517);

(statearr_70565[(9)] = inst_70516);

return statearr_70565;
})();
var statearr_70566_70597 = state_70553__$1;
(statearr_70566_70597[(2)] = null);

(statearr_70566_70597[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70554 === (11))){
var inst_70517 = (state_70553[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_70553,(10),Object,null,(9));
var inst_70526 = chs__$1.call(null,inst_70517);
var inst_70527 = done.call(null,inst_70517);
var inst_70528 = cljs.core.async.take_BANG_.call(null,inst_70526,inst_70527);
var state_70553__$1 = state_70553;
var statearr_70567_70598 = state_70553__$1;
(statearr_70567_70598[(2)] = inst_70528);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70554 === (9))){
var inst_70517 = (state_70553[(7)]);
var inst_70530 = (state_70553[(2)]);
var inst_70531 = (inst_70517 + (1));
var inst_70517__$1 = inst_70531;
var state_70553__$1 = (function (){var statearr_70568 = state_70553;
(statearr_70568[(7)] = inst_70517__$1);

(statearr_70568[(10)] = inst_70530);

return statearr_70568;
})();
var statearr_70569_70599 = state_70553__$1;
(statearr_70569_70599[(2)] = null);

(statearr_70569_70599[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70554 === (5))){
var inst_70537 = (state_70553[(2)]);
var state_70553__$1 = (function (){var statearr_70570 = state_70553;
(statearr_70570[(11)] = inst_70537);

return statearr_70570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70553__$1,(12),dchan);
} else {
if((state_val_70554 === (14))){
var inst_70539 = (state_70553[(8)]);
var inst_70544 = cljs.core.apply.call(null,f,inst_70539);
var state_70553__$1 = state_70553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70553__$1,(16),out,inst_70544);
} else {
if((state_val_70554 === (16))){
var inst_70546 = (state_70553[(2)]);
var state_70553__$1 = (function (){var statearr_70571 = state_70553;
(statearr_70571[(12)] = inst_70546);

return statearr_70571;
})();
var statearr_70572_70600 = state_70553__$1;
(statearr_70572_70600[(2)] = null);

(statearr_70572_70600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70554 === (10))){
var inst_70521 = (state_70553[(2)]);
var inst_70522 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_70553__$1 = (function (){var statearr_70573 = state_70553;
(statearr_70573[(13)] = inst_70521);

return statearr_70573;
})();
var statearr_70574_70601 = state_70553__$1;
(statearr_70574_70601[(2)] = inst_70522);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70554 === (8))){
var inst_70535 = (state_70553[(2)]);
var state_70553__$1 = state_70553;
var statearr_70575_70602 = state_70553__$1;
(statearr_70575_70602[(2)] = inst_70535);

(statearr_70575_70602[(1)] = (5));


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
});})(c__41196__auto___70587,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40432__auto__,c__41196__auto___70587,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_70579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70579[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_70579[(1)] = (1));

return statearr_70579;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_70553){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_70553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e70580){if((e70580 instanceof Object)){
var ex__40436__auto__ = e70580;
var statearr_70581_70603 = state_70553;
(statearr_70581_70603[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70604 = state_70553;
state_70553 = G__70604;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_70553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_70553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___70587,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__41198__auto__ = (function (){var statearr_70582 = f__41197__auto__.call(null);
(statearr_70582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___70587);

return statearr_70582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___70587,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args70606 = [];
var len__36491__auto___70662 = arguments.length;
var i__36492__auto___70663 = (0);
while(true){
if((i__36492__auto___70663 < len__36491__auto___70662)){
args70606.push((arguments[i__36492__auto___70663]));

var G__70664 = (i__36492__auto___70663 + (1));
i__36492__auto___70663 = G__70664;
continue;
} else {
}
break;
}

var G__70608 = args70606.length;
switch (G__70608) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70606.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41196__auto___70666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___70666,out){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___70666,out){
return (function (state_70638){
var state_val_70639 = (state_70638[(1)]);
if((state_val_70639 === (7))){
var inst_70618 = (state_70638[(7)]);
var inst_70617 = (state_70638[(8)]);
var inst_70617__$1 = (state_70638[(2)]);
var inst_70618__$1 = cljs.core.nth.call(null,inst_70617__$1,(0),null);
var inst_70619 = cljs.core.nth.call(null,inst_70617__$1,(1),null);
var inst_70620 = (inst_70618__$1 == null);
var state_70638__$1 = (function (){var statearr_70640 = state_70638;
(statearr_70640[(7)] = inst_70618__$1);

(statearr_70640[(9)] = inst_70619);

(statearr_70640[(8)] = inst_70617__$1);

return statearr_70640;
})();
if(cljs.core.truth_(inst_70620)){
var statearr_70641_70667 = state_70638__$1;
(statearr_70641_70667[(1)] = (8));

} else {
var statearr_70642_70668 = state_70638__$1;
(statearr_70642_70668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70639 === (1))){
var inst_70609 = cljs.core.vec.call(null,chs);
var inst_70610 = inst_70609;
var state_70638__$1 = (function (){var statearr_70643 = state_70638;
(statearr_70643[(10)] = inst_70610);

return statearr_70643;
})();
var statearr_70644_70669 = state_70638__$1;
(statearr_70644_70669[(2)] = null);

(statearr_70644_70669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70639 === (4))){
var inst_70610 = (state_70638[(10)]);
var state_70638__$1 = state_70638;
return cljs.core.async.ioc_alts_BANG_.call(null,state_70638__$1,(7),inst_70610);
} else {
if((state_val_70639 === (6))){
var inst_70634 = (state_70638[(2)]);
var state_70638__$1 = state_70638;
var statearr_70645_70670 = state_70638__$1;
(statearr_70645_70670[(2)] = inst_70634);

(statearr_70645_70670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70639 === (3))){
var inst_70636 = (state_70638[(2)]);
var state_70638__$1 = state_70638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70638__$1,inst_70636);
} else {
if((state_val_70639 === (2))){
var inst_70610 = (state_70638[(10)]);
var inst_70612 = cljs.core.count.call(null,inst_70610);
var inst_70613 = (inst_70612 > (0));
var state_70638__$1 = state_70638;
if(cljs.core.truth_(inst_70613)){
var statearr_70647_70671 = state_70638__$1;
(statearr_70647_70671[(1)] = (4));

} else {
var statearr_70648_70672 = state_70638__$1;
(statearr_70648_70672[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70639 === (11))){
var inst_70610 = (state_70638[(10)]);
var inst_70627 = (state_70638[(2)]);
var tmp70646 = inst_70610;
var inst_70610__$1 = tmp70646;
var state_70638__$1 = (function (){var statearr_70649 = state_70638;
(statearr_70649[(11)] = inst_70627);

(statearr_70649[(10)] = inst_70610__$1);

return statearr_70649;
})();
var statearr_70650_70673 = state_70638__$1;
(statearr_70650_70673[(2)] = null);

(statearr_70650_70673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70639 === (9))){
var inst_70618 = (state_70638[(7)]);
var state_70638__$1 = state_70638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70638__$1,(11),out,inst_70618);
} else {
if((state_val_70639 === (5))){
var inst_70632 = cljs.core.async.close_BANG_.call(null,out);
var state_70638__$1 = state_70638;
var statearr_70651_70674 = state_70638__$1;
(statearr_70651_70674[(2)] = inst_70632);

(statearr_70651_70674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70639 === (10))){
var inst_70630 = (state_70638[(2)]);
var state_70638__$1 = state_70638;
var statearr_70652_70675 = state_70638__$1;
(statearr_70652_70675[(2)] = inst_70630);

(statearr_70652_70675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70639 === (8))){
var inst_70618 = (state_70638[(7)]);
var inst_70619 = (state_70638[(9)]);
var inst_70617 = (state_70638[(8)]);
var inst_70610 = (state_70638[(10)]);
var inst_70622 = (function (){var cs = inst_70610;
var vec__70615 = inst_70617;
var v = inst_70618;
var c = inst_70619;
return ((function (cs,vec__70615,v,c,inst_70618,inst_70619,inst_70617,inst_70610,state_val_70639,c__41196__auto___70666,out){
return (function (p1__70605_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__70605_SHARP_);
});
;})(cs,vec__70615,v,c,inst_70618,inst_70619,inst_70617,inst_70610,state_val_70639,c__41196__auto___70666,out))
})();
var inst_70623 = cljs.core.filterv.call(null,inst_70622,inst_70610);
var inst_70610__$1 = inst_70623;
var state_70638__$1 = (function (){var statearr_70653 = state_70638;
(statearr_70653[(10)] = inst_70610__$1);

return statearr_70653;
})();
var statearr_70654_70676 = state_70638__$1;
(statearr_70654_70676[(2)] = null);

(statearr_70654_70676[(1)] = (2));


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
});})(c__41196__auto___70666,out))
;
return ((function (switch__40432__auto__,c__41196__auto___70666,out){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_70658 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70658[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_70658[(1)] = (1));

return statearr_70658;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_70638){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_70638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e70659){if((e70659 instanceof Object)){
var ex__40436__auto__ = e70659;
var statearr_70660_70677 = state_70638;
(statearr_70660_70677[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70678 = state_70638;
state_70638 = G__70678;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_70638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_70638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___70666,out))
})();
var state__41198__auto__ = (function (){var statearr_70661 = f__41197__auto__.call(null);
(statearr_70661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___70666);

return statearr_70661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___70666,out))
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
var args70679 = [];
var len__36491__auto___70728 = arguments.length;
var i__36492__auto___70729 = (0);
while(true){
if((i__36492__auto___70729 < len__36491__auto___70728)){
args70679.push((arguments[i__36492__auto___70729]));

var G__70730 = (i__36492__auto___70729 + (1));
i__36492__auto___70729 = G__70730;
continue;
} else {
}
break;
}

var G__70681 = args70679.length;
switch (G__70681) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70679.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41196__auto___70732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___70732,out){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___70732,out){
return (function (state_70705){
var state_val_70706 = (state_70705[(1)]);
if((state_val_70706 === (7))){
var inst_70687 = (state_70705[(7)]);
var inst_70687__$1 = (state_70705[(2)]);
var inst_70688 = (inst_70687__$1 == null);
var inst_70689 = cljs.core.not.call(null,inst_70688);
var state_70705__$1 = (function (){var statearr_70707 = state_70705;
(statearr_70707[(7)] = inst_70687__$1);

return statearr_70707;
})();
if(inst_70689){
var statearr_70708_70733 = state_70705__$1;
(statearr_70708_70733[(1)] = (8));

} else {
var statearr_70709_70734 = state_70705__$1;
(statearr_70709_70734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (1))){
var inst_70682 = (0);
var state_70705__$1 = (function (){var statearr_70710 = state_70705;
(statearr_70710[(8)] = inst_70682);

return statearr_70710;
})();
var statearr_70711_70735 = state_70705__$1;
(statearr_70711_70735[(2)] = null);

(statearr_70711_70735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (4))){
var state_70705__$1 = state_70705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70705__$1,(7),ch);
} else {
if((state_val_70706 === (6))){
var inst_70700 = (state_70705[(2)]);
var state_70705__$1 = state_70705;
var statearr_70712_70736 = state_70705__$1;
(statearr_70712_70736[(2)] = inst_70700);

(statearr_70712_70736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (3))){
var inst_70702 = (state_70705[(2)]);
var inst_70703 = cljs.core.async.close_BANG_.call(null,out);
var state_70705__$1 = (function (){var statearr_70713 = state_70705;
(statearr_70713[(9)] = inst_70702);

return statearr_70713;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70705__$1,inst_70703);
} else {
if((state_val_70706 === (2))){
var inst_70682 = (state_70705[(8)]);
var inst_70684 = (inst_70682 < n);
var state_70705__$1 = state_70705;
if(cljs.core.truth_(inst_70684)){
var statearr_70714_70737 = state_70705__$1;
(statearr_70714_70737[(1)] = (4));

} else {
var statearr_70715_70738 = state_70705__$1;
(statearr_70715_70738[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (11))){
var inst_70682 = (state_70705[(8)]);
var inst_70692 = (state_70705[(2)]);
var inst_70693 = (inst_70682 + (1));
var inst_70682__$1 = inst_70693;
var state_70705__$1 = (function (){var statearr_70716 = state_70705;
(statearr_70716[(10)] = inst_70692);

(statearr_70716[(8)] = inst_70682__$1);

return statearr_70716;
})();
var statearr_70717_70739 = state_70705__$1;
(statearr_70717_70739[(2)] = null);

(statearr_70717_70739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (9))){
var state_70705__$1 = state_70705;
var statearr_70718_70740 = state_70705__$1;
(statearr_70718_70740[(2)] = null);

(statearr_70718_70740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (5))){
var state_70705__$1 = state_70705;
var statearr_70719_70741 = state_70705__$1;
(statearr_70719_70741[(2)] = null);

(statearr_70719_70741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (10))){
var inst_70697 = (state_70705[(2)]);
var state_70705__$1 = state_70705;
var statearr_70720_70742 = state_70705__$1;
(statearr_70720_70742[(2)] = inst_70697);

(statearr_70720_70742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70706 === (8))){
var inst_70687 = (state_70705[(7)]);
var state_70705__$1 = state_70705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70705__$1,(11),out,inst_70687);
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
});})(c__41196__auto___70732,out))
;
return ((function (switch__40432__auto__,c__41196__auto___70732,out){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_70724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70724[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_70724[(1)] = (1));

return statearr_70724;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_70705){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_70705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e70725){if((e70725 instanceof Object)){
var ex__40436__auto__ = e70725;
var statearr_70726_70743 = state_70705;
(statearr_70726_70743[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70744 = state_70705;
state_70705 = G__70744;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_70705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_70705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___70732,out))
})();
var state__41198__auto__ = (function (){var statearr_70727 = f__41197__auto__.call(null);
(statearr_70727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___70732);

return statearr_70727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___70732,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async70752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70752 = (function (map_LT_,f,ch,meta70753){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta70753 = meta70753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70754,meta70753__$1){
var self__ = this;
var _70754__$1 = this;
return (new cljs.core.async.t_cljs$core$async70752(self__.map_LT_,self__.f,self__.ch,meta70753__$1));
});

cljs.core.async.t_cljs$core$async70752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70754){
var self__ = this;
var _70754__$1 = this;
return self__.meta70753;
});

cljs.core.async.t_cljs$core$async70752.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async70752.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70752.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70752.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async70752.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async70755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70755 = (function (map_LT_,f,ch,meta70753,_,fn1,meta70756){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta70753 = meta70753;
this._ = _;
this.fn1 = fn1;
this.meta70756 = meta70756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_70757,meta70756__$1){
var self__ = this;
var _70757__$1 = this;
return (new cljs.core.async.t_cljs$core$async70755(self__.map_LT_,self__.f,self__.ch,self__.meta70753,self__._,self__.fn1,meta70756__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async70755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_70757){
var self__ = this;
var _70757__$1 = this;
return self__.meta70756;
});})(___$1))
;

cljs.core.async.t_cljs$core$async70755.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async70755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async70755.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async70755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__70745_SHARP_){
return f1.call(null,(((p1__70745_SHARP_ == null))?null:self__.f.call(null,p1__70745_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async70755.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70753","meta70753",-1830630918,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async70752","cljs.core.async/t_cljs$core$async70752",-2012372545,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta70756","meta70756",1687444301,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async70755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70755";

cljs.core.async.t_cljs$core$async70755.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async70755");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async70755 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70755(map_LT___$1,f__$1,ch__$1,meta70753__$1,___$2,fn1__$1,meta70756){
return (new cljs.core.async.t_cljs$core$async70755(map_LT___$1,f__$1,ch__$1,meta70753__$1,___$2,fn1__$1,meta70756));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async70755(self__.map_LT_,self__.f,self__.ch,self__.meta70753,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__35410__auto__ = ret;
if(cljs.core.truth_(and__35410__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__35410__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async70752.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async70752.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async70752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70753","meta70753",-1830630918,null)], null);
});

cljs.core.async.t_cljs$core$async70752.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70752";

cljs.core.async.t_cljs$core$async70752.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async70752");
});

cljs.core.async.__GT_t_cljs$core$async70752 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async70752(map_LT___$1,f__$1,ch__$1,meta70753){
return (new cljs.core.async.t_cljs$core$async70752(map_LT___$1,f__$1,ch__$1,meta70753));
});

}

return (new cljs.core.async.t_cljs$core$async70752(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async70761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70761 = (function (map_GT_,f,ch,meta70762){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta70762 = meta70762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70763,meta70762__$1){
var self__ = this;
var _70763__$1 = this;
return (new cljs.core.async.t_cljs$core$async70761(self__.map_GT_,self__.f,self__.ch,meta70762__$1));
});

cljs.core.async.t_cljs$core$async70761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70763){
var self__ = this;
var _70763__$1 = this;
return self__.meta70762;
});

cljs.core.async.t_cljs$core$async70761.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async70761.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70761.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async70761.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async70761.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async70761.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async70761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70762","meta70762",655989898,null)], null);
});

cljs.core.async.t_cljs$core$async70761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70761";

cljs.core.async.t_cljs$core$async70761.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async70761");
});

cljs.core.async.__GT_t_cljs$core$async70761 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async70761(map_GT___$1,f__$1,ch__$1,meta70762){
return (new cljs.core.async.t_cljs$core$async70761(map_GT___$1,f__$1,ch__$1,meta70762));
});

}

return (new cljs.core.async.t_cljs$core$async70761(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async70767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70767 = (function (filter_GT_,p,ch,meta70768){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta70768 = meta70768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async70767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70769,meta70768__$1){
var self__ = this;
var _70769__$1 = this;
return (new cljs.core.async.t_cljs$core$async70767(self__.filter_GT_,self__.p,self__.ch,meta70768__$1));
});

cljs.core.async.t_cljs$core$async70767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70769){
var self__ = this;
var _70769__$1 = this;
return self__.meta70768;
});

cljs.core.async.t_cljs$core$async70767.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async70767.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70767.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async70767.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async70767.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async70767.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async70767.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async70767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta70768","meta70768",2046833696,null)], null);
});

cljs.core.async.t_cljs$core$async70767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async70767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70767";

cljs.core.async.t_cljs$core$async70767.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async70767");
});

cljs.core.async.__GT_t_cljs$core$async70767 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async70767(filter_GT___$1,p__$1,ch__$1,meta70768){
return (new cljs.core.async.t_cljs$core$async70767(filter_GT___$1,p__$1,ch__$1,meta70768));
});

}

return (new cljs.core.async.t_cljs$core$async70767(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args70770 = [];
var len__36491__auto___70814 = arguments.length;
var i__36492__auto___70815 = (0);
while(true){
if((i__36492__auto___70815 < len__36491__auto___70814)){
args70770.push((arguments[i__36492__auto___70815]));

var G__70816 = (i__36492__auto___70815 + (1));
i__36492__auto___70815 = G__70816;
continue;
} else {
}
break;
}

var G__70772 = args70770.length;
switch (G__70772) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70770.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41196__auto___70818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___70818,out){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___70818,out){
return (function (state_70793){
var state_val_70794 = (state_70793[(1)]);
if((state_val_70794 === (7))){
var inst_70789 = (state_70793[(2)]);
var state_70793__$1 = state_70793;
var statearr_70795_70819 = state_70793__$1;
(statearr_70795_70819[(2)] = inst_70789);

(statearr_70795_70819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70794 === (1))){
var state_70793__$1 = state_70793;
var statearr_70796_70820 = state_70793__$1;
(statearr_70796_70820[(2)] = null);

(statearr_70796_70820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70794 === (4))){
var inst_70775 = (state_70793[(7)]);
var inst_70775__$1 = (state_70793[(2)]);
var inst_70776 = (inst_70775__$1 == null);
var state_70793__$1 = (function (){var statearr_70797 = state_70793;
(statearr_70797[(7)] = inst_70775__$1);

return statearr_70797;
})();
if(cljs.core.truth_(inst_70776)){
var statearr_70798_70821 = state_70793__$1;
(statearr_70798_70821[(1)] = (5));

} else {
var statearr_70799_70822 = state_70793__$1;
(statearr_70799_70822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70794 === (6))){
var inst_70775 = (state_70793[(7)]);
var inst_70780 = p.call(null,inst_70775);
var state_70793__$1 = state_70793;
if(cljs.core.truth_(inst_70780)){
var statearr_70800_70823 = state_70793__$1;
(statearr_70800_70823[(1)] = (8));

} else {
var statearr_70801_70824 = state_70793__$1;
(statearr_70801_70824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70794 === (3))){
var inst_70791 = (state_70793[(2)]);
var state_70793__$1 = state_70793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70793__$1,inst_70791);
} else {
if((state_val_70794 === (2))){
var state_70793__$1 = state_70793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70793__$1,(4),ch);
} else {
if((state_val_70794 === (11))){
var inst_70783 = (state_70793[(2)]);
var state_70793__$1 = state_70793;
var statearr_70802_70825 = state_70793__$1;
(statearr_70802_70825[(2)] = inst_70783);

(statearr_70802_70825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70794 === (9))){
var state_70793__$1 = state_70793;
var statearr_70803_70826 = state_70793__$1;
(statearr_70803_70826[(2)] = null);

(statearr_70803_70826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70794 === (5))){
var inst_70778 = cljs.core.async.close_BANG_.call(null,out);
var state_70793__$1 = state_70793;
var statearr_70804_70827 = state_70793__$1;
(statearr_70804_70827[(2)] = inst_70778);

(statearr_70804_70827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70794 === (10))){
var inst_70786 = (state_70793[(2)]);
var state_70793__$1 = (function (){var statearr_70805 = state_70793;
(statearr_70805[(8)] = inst_70786);

return statearr_70805;
})();
var statearr_70806_70828 = state_70793__$1;
(statearr_70806_70828[(2)] = null);

(statearr_70806_70828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70794 === (8))){
var inst_70775 = (state_70793[(7)]);
var state_70793__$1 = state_70793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70793__$1,(11),out,inst_70775);
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
});})(c__41196__auto___70818,out))
;
return ((function (switch__40432__auto__,c__41196__auto___70818,out){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_70810 = [null,null,null,null,null,null,null,null,null];
(statearr_70810[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_70810[(1)] = (1));

return statearr_70810;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_70793){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_70793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e70811){if((e70811 instanceof Object)){
var ex__40436__auto__ = e70811;
var statearr_70812_70829 = state_70793;
(statearr_70812_70829[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70830 = state_70793;
state_70793 = G__70830;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_70793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_70793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___70818,out))
})();
var state__41198__auto__ = (function (){var statearr_70813 = f__41197__auto__.call(null);
(statearr_70813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___70818);

return statearr_70813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___70818,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args70831 = [];
var len__36491__auto___70834 = arguments.length;
var i__36492__auto___70835 = (0);
while(true){
if((i__36492__auto___70835 < len__36491__auto___70834)){
args70831.push((arguments[i__36492__auto___70835]));

var G__70836 = (i__36492__auto___70835 + (1));
i__36492__auto___70835 = G__70836;
continue;
} else {
}
break;
}

var G__70833 = args70831.length;
switch (G__70833) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70831.length)].join('')));

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
var c__41196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto__){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto__){
return (function (state_71003){
var state_val_71004 = (state_71003[(1)]);
if((state_val_71004 === (7))){
var inst_70999 = (state_71003[(2)]);
var state_71003__$1 = state_71003;
var statearr_71005_71046 = state_71003__$1;
(statearr_71005_71046[(2)] = inst_70999);

(statearr_71005_71046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (20))){
var inst_70969 = (state_71003[(7)]);
var inst_70980 = (state_71003[(2)]);
var inst_70981 = cljs.core.next.call(null,inst_70969);
var inst_70955 = inst_70981;
var inst_70956 = null;
var inst_70957 = (0);
var inst_70958 = (0);
var state_71003__$1 = (function (){var statearr_71006 = state_71003;
(statearr_71006[(8)] = inst_70980);

(statearr_71006[(9)] = inst_70958);

(statearr_71006[(10)] = inst_70955);

(statearr_71006[(11)] = inst_70956);

(statearr_71006[(12)] = inst_70957);

return statearr_71006;
})();
var statearr_71007_71047 = state_71003__$1;
(statearr_71007_71047[(2)] = null);

(statearr_71007_71047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (1))){
var state_71003__$1 = state_71003;
var statearr_71008_71048 = state_71003__$1;
(statearr_71008_71048[(2)] = null);

(statearr_71008_71048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (4))){
var inst_70944 = (state_71003[(13)]);
var inst_70944__$1 = (state_71003[(2)]);
var inst_70945 = (inst_70944__$1 == null);
var state_71003__$1 = (function (){var statearr_71009 = state_71003;
(statearr_71009[(13)] = inst_70944__$1);

return statearr_71009;
})();
if(cljs.core.truth_(inst_70945)){
var statearr_71010_71049 = state_71003__$1;
(statearr_71010_71049[(1)] = (5));

} else {
var statearr_71011_71050 = state_71003__$1;
(statearr_71011_71050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (15))){
var state_71003__$1 = state_71003;
var statearr_71015_71051 = state_71003__$1;
(statearr_71015_71051[(2)] = null);

(statearr_71015_71051[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (21))){
var state_71003__$1 = state_71003;
var statearr_71016_71052 = state_71003__$1;
(statearr_71016_71052[(2)] = null);

(statearr_71016_71052[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (13))){
var inst_70958 = (state_71003[(9)]);
var inst_70955 = (state_71003[(10)]);
var inst_70956 = (state_71003[(11)]);
var inst_70957 = (state_71003[(12)]);
var inst_70965 = (state_71003[(2)]);
var inst_70966 = (inst_70958 + (1));
var tmp71012 = inst_70955;
var tmp71013 = inst_70956;
var tmp71014 = inst_70957;
var inst_70955__$1 = tmp71012;
var inst_70956__$1 = tmp71013;
var inst_70957__$1 = tmp71014;
var inst_70958__$1 = inst_70966;
var state_71003__$1 = (function (){var statearr_71017 = state_71003;
(statearr_71017[(9)] = inst_70958__$1);

(statearr_71017[(10)] = inst_70955__$1);

(statearr_71017[(11)] = inst_70956__$1);

(statearr_71017[(14)] = inst_70965);

(statearr_71017[(12)] = inst_70957__$1);

return statearr_71017;
})();
var statearr_71018_71053 = state_71003__$1;
(statearr_71018_71053[(2)] = null);

(statearr_71018_71053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (22))){
var state_71003__$1 = state_71003;
var statearr_71019_71054 = state_71003__$1;
(statearr_71019_71054[(2)] = null);

(statearr_71019_71054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (6))){
var inst_70944 = (state_71003[(13)]);
var inst_70953 = f.call(null,inst_70944);
var inst_70954 = cljs.core.seq.call(null,inst_70953);
var inst_70955 = inst_70954;
var inst_70956 = null;
var inst_70957 = (0);
var inst_70958 = (0);
var state_71003__$1 = (function (){var statearr_71020 = state_71003;
(statearr_71020[(9)] = inst_70958);

(statearr_71020[(10)] = inst_70955);

(statearr_71020[(11)] = inst_70956);

(statearr_71020[(12)] = inst_70957);

return statearr_71020;
})();
var statearr_71021_71055 = state_71003__$1;
(statearr_71021_71055[(2)] = null);

(statearr_71021_71055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (17))){
var inst_70969 = (state_71003[(7)]);
var inst_70973 = cljs.core.chunk_first.call(null,inst_70969);
var inst_70974 = cljs.core.chunk_rest.call(null,inst_70969);
var inst_70975 = cljs.core.count.call(null,inst_70973);
var inst_70955 = inst_70974;
var inst_70956 = inst_70973;
var inst_70957 = inst_70975;
var inst_70958 = (0);
var state_71003__$1 = (function (){var statearr_71022 = state_71003;
(statearr_71022[(9)] = inst_70958);

(statearr_71022[(10)] = inst_70955);

(statearr_71022[(11)] = inst_70956);

(statearr_71022[(12)] = inst_70957);

return statearr_71022;
})();
var statearr_71023_71056 = state_71003__$1;
(statearr_71023_71056[(2)] = null);

(statearr_71023_71056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (3))){
var inst_71001 = (state_71003[(2)]);
var state_71003__$1 = state_71003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71003__$1,inst_71001);
} else {
if((state_val_71004 === (12))){
var inst_70989 = (state_71003[(2)]);
var state_71003__$1 = state_71003;
var statearr_71024_71057 = state_71003__$1;
(statearr_71024_71057[(2)] = inst_70989);

(statearr_71024_71057[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (2))){
var state_71003__$1 = state_71003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71003__$1,(4),in$);
} else {
if((state_val_71004 === (23))){
var inst_70997 = (state_71003[(2)]);
var state_71003__$1 = state_71003;
var statearr_71025_71058 = state_71003__$1;
(statearr_71025_71058[(2)] = inst_70997);

(statearr_71025_71058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (19))){
var inst_70984 = (state_71003[(2)]);
var state_71003__$1 = state_71003;
var statearr_71026_71059 = state_71003__$1;
(statearr_71026_71059[(2)] = inst_70984);

(statearr_71026_71059[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (11))){
var inst_70955 = (state_71003[(10)]);
var inst_70969 = (state_71003[(7)]);
var inst_70969__$1 = cljs.core.seq.call(null,inst_70955);
var state_71003__$1 = (function (){var statearr_71027 = state_71003;
(statearr_71027[(7)] = inst_70969__$1);

return statearr_71027;
})();
if(inst_70969__$1){
var statearr_71028_71060 = state_71003__$1;
(statearr_71028_71060[(1)] = (14));

} else {
var statearr_71029_71061 = state_71003__$1;
(statearr_71029_71061[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (9))){
var inst_70991 = (state_71003[(2)]);
var inst_70992 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_71003__$1 = (function (){var statearr_71030 = state_71003;
(statearr_71030[(15)] = inst_70991);

return statearr_71030;
})();
if(cljs.core.truth_(inst_70992)){
var statearr_71031_71062 = state_71003__$1;
(statearr_71031_71062[(1)] = (21));

} else {
var statearr_71032_71063 = state_71003__$1;
(statearr_71032_71063[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (5))){
var inst_70947 = cljs.core.async.close_BANG_.call(null,out);
var state_71003__$1 = state_71003;
var statearr_71033_71064 = state_71003__$1;
(statearr_71033_71064[(2)] = inst_70947);

(statearr_71033_71064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (14))){
var inst_70969 = (state_71003[(7)]);
var inst_70971 = cljs.core.chunked_seq_QMARK_.call(null,inst_70969);
var state_71003__$1 = state_71003;
if(inst_70971){
var statearr_71034_71065 = state_71003__$1;
(statearr_71034_71065[(1)] = (17));

} else {
var statearr_71035_71066 = state_71003__$1;
(statearr_71035_71066[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (16))){
var inst_70987 = (state_71003[(2)]);
var state_71003__$1 = state_71003;
var statearr_71036_71067 = state_71003__$1;
(statearr_71036_71067[(2)] = inst_70987);

(statearr_71036_71067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71004 === (10))){
var inst_70958 = (state_71003[(9)]);
var inst_70956 = (state_71003[(11)]);
var inst_70963 = cljs.core._nth.call(null,inst_70956,inst_70958);
var state_71003__$1 = state_71003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71003__$1,(13),out,inst_70963);
} else {
if((state_val_71004 === (18))){
var inst_70969 = (state_71003[(7)]);
var inst_70978 = cljs.core.first.call(null,inst_70969);
var state_71003__$1 = state_71003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71003__$1,(20),out,inst_70978);
} else {
if((state_val_71004 === (8))){
var inst_70958 = (state_71003[(9)]);
var inst_70957 = (state_71003[(12)]);
var inst_70960 = (inst_70958 < inst_70957);
var inst_70961 = inst_70960;
var state_71003__$1 = state_71003;
if(cljs.core.truth_(inst_70961)){
var statearr_71037_71068 = state_71003__$1;
(statearr_71037_71068[(1)] = (10));

} else {
var statearr_71038_71069 = state_71003__$1;
(statearr_71038_71069[(1)] = (11));

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
});})(c__41196__auto__))
;
return ((function (switch__40432__auto__,c__41196__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40433__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40433__auto____0 = (function (){
var statearr_71042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71042[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40433__auto__);

(statearr_71042[(1)] = (1));

return statearr_71042;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40433__auto____1 = (function (state_71003){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_71003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e71043){if((e71043 instanceof Object)){
var ex__40436__auto__ = e71043;
var statearr_71044_71070 = state_71003;
(statearr_71044_71070[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71071 = state_71003;
state_71003 = G__71071;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40433__auto__ = function(state_71003){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40433__auto____1.call(this,state_71003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40433__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40433__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto__))
})();
var state__41198__auto__ = (function (){var statearr_71045 = f__41197__auto__.call(null);
(statearr_71045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto__);

return statearr_71045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto__))
);

return c__41196__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args71072 = [];
var len__36491__auto___71075 = arguments.length;
var i__36492__auto___71076 = (0);
while(true){
if((i__36492__auto___71076 < len__36491__auto___71075)){
args71072.push((arguments[i__36492__auto___71076]));

var G__71077 = (i__36492__auto___71076 + (1));
i__36492__auto___71076 = G__71077;
continue;
} else {
}
break;
}

var G__71074 = args71072.length;
switch (G__71074) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71072.length)].join('')));

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
var args71079 = [];
var len__36491__auto___71082 = arguments.length;
var i__36492__auto___71083 = (0);
while(true){
if((i__36492__auto___71083 < len__36491__auto___71082)){
args71079.push((arguments[i__36492__auto___71083]));

var G__71084 = (i__36492__auto___71083 + (1));
i__36492__auto___71083 = G__71084;
continue;
} else {
}
break;
}

var G__71081 = args71079.length;
switch (G__71081) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71079.length)].join('')));

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
var args71086 = [];
var len__36491__auto___71137 = arguments.length;
var i__36492__auto___71138 = (0);
while(true){
if((i__36492__auto___71138 < len__36491__auto___71137)){
args71086.push((arguments[i__36492__auto___71138]));

var G__71139 = (i__36492__auto___71138 + (1));
i__36492__auto___71138 = G__71139;
continue;
} else {
}
break;
}

var G__71088 = args71086.length;
switch (G__71088) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71086.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41196__auto___71141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___71141,out){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___71141,out){
return (function (state_71112){
var state_val_71113 = (state_71112[(1)]);
if((state_val_71113 === (7))){
var inst_71107 = (state_71112[(2)]);
var state_71112__$1 = state_71112;
var statearr_71114_71142 = state_71112__$1;
(statearr_71114_71142[(2)] = inst_71107);

(statearr_71114_71142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71113 === (1))){
var inst_71089 = null;
var state_71112__$1 = (function (){var statearr_71115 = state_71112;
(statearr_71115[(7)] = inst_71089);

return statearr_71115;
})();
var statearr_71116_71143 = state_71112__$1;
(statearr_71116_71143[(2)] = null);

(statearr_71116_71143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71113 === (4))){
var inst_71092 = (state_71112[(8)]);
var inst_71092__$1 = (state_71112[(2)]);
var inst_71093 = (inst_71092__$1 == null);
var inst_71094 = cljs.core.not.call(null,inst_71093);
var state_71112__$1 = (function (){var statearr_71117 = state_71112;
(statearr_71117[(8)] = inst_71092__$1);

return statearr_71117;
})();
if(inst_71094){
var statearr_71118_71144 = state_71112__$1;
(statearr_71118_71144[(1)] = (5));

} else {
var statearr_71119_71145 = state_71112__$1;
(statearr_71119_71145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71113 === (6))){
var state_71112__$1 = state_71112;
var statearr_71120_71146 = state_71112__$1;
(statearr_71120_71146[(2)] = null);

(statearr_71120_71146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71113 === (3))){
var inst_71109 = (state_71112[(2)]);
var inst_71110 = cljs.core.async.close_BANG_.call(null,out);
var state_71112__$1 = (function (){var statearr_71121 = state_71112;
(statearr_71121[(9)] = inst_71109);

return statearr_71121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71112__$1,inst_71110);
} else {
if((state_val_71113 === (2))){
var state_71112__$1 = state_71112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71112__$1,(4),ch);
} else {
if((state_val_71113 === (11))){
var inst_71092 = (state_71112[(8)]);
var inst_71101 = (state_71112[(2)]);
var inst_71089 = inst_71092;
var state_71112__$1 = (function (){var statearr_71122 = state_71112;
(statearr_71122[(7)] = inst_71089);

(statearr_71122[(10)] = inst_71101);

return statearr_71122;
})();
var statearr_71123_71147 = state_71112__$1;
(statearr_71123_71147[(2)] = null);

(statearr_71123_71147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71113 === (9))){
var inst_71092 = (state_71112[(8)]);
var state_71112__$1 = state_71112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71112__$1,(11),out,inst_71092);
} else {
if((state_val_71113 === (5))){
var inst_71092 = (state_71112[(8)]);
var inst_71089 = (state_71112[(7)]);
var inst_71096 = cljs.core._EQ_.call(null,inst_71092,inst_71089);
var state_71112__$1 = state_71112;
if(inst_71096){
var statearr_71125_71148 = state_71112__$1;
(statearr_71125_71148[(1)] = (8));

} else {
var statearr_71126_71149 = state_71112__$1;
(statearr_71126_71149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71113 === (10))){
var inst_71104 = (state_71112[(2)]);
var state_71112__$1 = state_71112;
var statearr_71127_71150 = state_71112__$1;
(statearr_71127_71150[(2)] = inst_71104);

(statearr_71127_71150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71113 === (8))){
var inst_71089 = (state_71112[(7)]);
var tmp71124 = inst_71089;
var inst_71089__$1 = tmp71124;
var state_71112__$1 = (function (){var statearr_71128 = state_71112;
(statearr_71128[(7)] = inst_71089__$1);

return statearr_71128;
})();
var statearr_71129_71151 = state_71112__$1;
(statearr_71129_71151[(2)] = null);

(statearr_71129_71151[(1)] = (2));


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
});})(c__41196__auto___71141,out))
;
return ((function (switch__40432__auto__,c__41196__auto___71141,out){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_71133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71133[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_71133[(1)] = (1));

return statearr_71133;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_71112){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_71112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e71134){if((e71134 instanceof Object)){
var ex__40436__auto__ = e71134;
var statearr_71135_71152 = state_71112;
(statearr_71135_71152[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71153 = state_71112;
state_71112 = G__71153;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_71112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_71112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___71141,out))
})();
var state__41198__auto__ = (function (){var statearr_71136 = f__41197__auto__.call(null);
(statearr_71136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___71141);

return statearr_71136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___71141,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args71154 = [];
var len__36491__auto___71224 = arguments.length;
var i__36492__auto___71225 = (0);
while(true){
if((i__36492__auto___71225 < len__36491__auto___71224)){
args71154.push((arguments[i__36492__auto___71225]));

var G__71226 = (i__36492__auto___71225 + (1));
i__36492__auto___71225 = G__71226;
continue;
} else {
}
break;
}

var G__71156 = args71154.length;
switch (G__71156) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71154.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41196__auto___71228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___71228,out){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___71228,out){
return (function (state_71194){
var state_val_71195 = (state_71194[(1)]);
if((state_val_71195 === (7))){
var inst_71190 = (state_71194[(2)]);
var state_71194__$1 = state_71194;
var statearr_71196_71229 = state_71194__$1;
(statearr_71196_71229[(2)] = inst_71190);

(statearr_71196_71229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (1))){
var inst_71157 = (new Array(n));
var inst_71158 = inst_71157;
var inst_71159 = (0);
var state_71194__$1 = (function (){var statearr_71197 = state_71194;
(statearr_71197[(7)] = inst_71159);

(statearr_71197[(8)] = inst_71158);

return statearr_71197;
})();
var statearr_71198_71230 = state_71194__$1;
(statearr_71198_71230[(2)] = null);

(statearr_71198_71230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (4))){
var inst_71162 = (state_71194[(9)]);
var inst_71162__$1 = (state_71194[(2)]);
var inst_71163 = (inst_71162__$1 == null);
var inst_71164 = cljs.core.not.call(null,inst_71163);
var state_71194__$1 = (function (){var statearr_71199 = state_71194;
(statearr_71199[(9)] = inst_71162__$1);

return statearr_71199;
})();
if(inst_71164){
var statearr_71200_71231 = state_71194__$1;
(statearr_71200_71231[(1)] = (5));

} else {
var statearr_71201_71232 = state_71194__$1;
(statearr_71201_71232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (15))){
var inst_71184 = (state_71194[(2)]);
var state_71194__$1 = state_71194;
var statearr_71202_71233 = state_71194__$1;
(statearr_71202_71233[(2)] = inst_71184);

(statearr_71202_71233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (13))){
var state_71194__$1 = state_71194;
var statearr_71203_71234 = state_71194__$1;
(statearr_71203_71234[(2)] = null);

(statearr_71203_71234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (6))){
var inst_71159 = (state_71194[(7)]);
var inst_71180 = (inst_71159 > (0));
var state_71194__$1 = state_71194;
if(cljs.core.truth_(inst_71180)){
var statearr_71204_71235 = state_71194__$1;
(statearr_71204_71235[(1)] = (12));

} else {
var statearr_71205_71236 = state_71194__$1;
(statearr_71205_71236[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (3))){
var inst_71192 = (state_71194[(2)]);
var state_71194__$1 = state_71194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71194__$1,inst_71192);
} else {
if((state_val_71195 === (12))){
var inst_71158 = (state_71194[(8)]);
var inst_71182 = cljs.core.vec.call(null,inst_71158);
var state_71194__$1 = state_71194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71194__$1,(15),out,inst_71182);
} else {
if((state_val_71195 === (2))){
var state_71194__$1 = state_71194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71194__$1,(4),ch);
} else {
if((state_val_71195 === (11))){
var inst_71174 = (state_71194[(2)]);
var inst_71175 = (new Array(n));
var inst_71158 = inst_71175;
var inst_71159 = (0);
var state_71194__$1 = (function (){var statearr_71206 = state_71194;
(statearr_71206[(10)] = inst_71174);

(statearr_71206[(7)] = inst_71159);

(statearr_71206[(8)] = inst_71158);

return statearr_71206;
})();
var statearr_71207_71237 = state_71194__$1;
(statearr_71207_71237[(2)] = null);

(statearr_71207_71237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (9))){
var inst_71158 = (state_71194[(8)]);
var inst_71172 = cljs.core.vec.call(null,inst_71158);
var state_71194__$1 = state_71194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71194__$1,(11),out,inst_71172);
} else {
if((state_val_71195 === (5))){
var inst_71159 = (state_71194[(7)]);
var inst_71158 = (state_71194[(8)]);
var inst_71162 = (state_71194[(9)]);
var inst_71167 = (state_71194[(11)]);
var inst_71166 = (inst_71158[inst_71159] = inst_71162);
var inst_71167__$1 = (inst_71159 + (1));
var inst_71168 = (inst_71167__$1 < n);
var state_71194__$1 = (function (){var statearr_71208 = state_71194;
(statearr_71208[(12)] = inst_71166);

(statearr_71208[(11)] = inst_71167__$1);

return statearr_71208;
})();
if(cljs.core.truth_(inst_71168)){
var statearr_71209_71238 = state_71194__$1;
(statearr_71209_71238[(1)] = (8));

} else {
var statearr_71210_71239 = state_71194__$1;
(statearr_71210_71239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (14))){
var inst_71187 = (state_71194[(2)]);
var inst_71188 = cljs.core.async.close_BANG_.call(null,out);
var state_71194__$1 = (function (){var statearr_71212 = state_71194;
(statearr_71212[(13)] = inst_71187);

return statearr_71212;
})();
var statearr_71213_71240 = state_71194__$1;
(statearr_71213_71240[(2)] = inst_71188);

(statearr_71213_71240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (10))){
var inst_71178 = (state_71194[(2)]);
var state_71194__$1 = state_71194;
var statearr_71214_71241 = state_71194__$1;
(statearr_71214_71241[(2)] = inst_71178);

(statearr_71214_71241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71195 === (8))){
var inst_71158 = (state_71194[(8)]);
var inst_71167 = (state_71194[(11)]);
var tmp71211 = inst_71158;
var inst_71158__$1 = tmp71211;
var inst_71159 = inst_71167;
var state_71194__$1 = (function (){var statearr_71215 = state_71194;
(statearr_71215[(7)] = inst_71159);

(statearr_71215[(8)] = inst_71158__$1);

return statearr_71215;
})();
var statearr_71216_71242 = state_71194__$1;
(statearr_71216_71242[(2)] = null);

(statearr_71216_71242[(1)] = (2));


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
});})(c__41196__auto___71228,out))
;
return ((function (switch__40432__auto__,c__41196__auto___71228,out){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_71220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71220[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_71220[(1)] = (1));

return statearr_71220;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_71194){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_71194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e71221){if((e71221 instanceof Object)){
var ex__40436__auto__ = e71221;
var statearr_71222_71243 = state_71194;
(statearr_71222_71243[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71244 = state_71194;
state_71194 = G__71244;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_71194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_71194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___71228,out))
})();
var state__41198__auto__ = (function (){var statearr_71223 = f__41197__auto__.call(null);
(statearr_71223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___71228);

return statearr_71223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___71228,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args71245 = [];
var len__36491__auto___71319 = arguments.length;
var i__36492__auto___71320 = (0);
while(true){
if((i__36492__auto___71320 < len__36491__auto___71319)){
args71245.push((arguments[i__36492__auto___71320]));

var G__71321 = (i__36492__auto___71320 + (1));
i__36492__auto___71320 = G__71321;
continue;
} else {
}
break;
}

var G__71247 = args71245.length;
switch (G__71247) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71245.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41196__auto___71323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___71323,out){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___71323,out){
return (function (state_71289){
var state_val_71290 = (state_71289[(1)]);
if((state_val_71290 === (7))){
var inst_71285 = (state_71289[(2)]);
var state_71289__$1 = state_71289;
var statearr_71291_71324 = state_71289__$1;
(statearr_71291_71324[(2)] = inst_71285);

(statearr_71291_71324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71290 === (1))){
var inst_71248 = [];
var inst_71249 = inst_71248;
var inst_71250 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_71289__$1 = (function (){var statearr_71292 = state_71289;
(statearr_71292[(7)] = inst_71249);

(statearr_71292[(8)] = inst_71250);

return statearr_71292;
})();
var statearr_71293_71325 = state_71289__$1;
(statearr_71293_71325[(2)] = null);

(statearr_71293_71325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71290 === (4))){
var inst_71253 = (state_71289[(9)]);
var inst_71253__$1 = (state_71289[(2)]);
var inst_71254 = (inst_71253__$1 == null);
var inst_71255 = cljs.core.not.call(null,inst_71254);
var state_71289__$1 = (function (){var statearr_71294 = state_71289;
(statearr_71294[(9)] = inst_71253__$1);

return statearr_71294;
})();
if(inst_71255){
var statearr_71295_71326 = state_71289__$1;
(statearr_71295_71326[(1)] = (5));

} else {
var statearr_71296_71327 = state_71289__$1;
(statearr_71296_71327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71290 === (15))){
var inst_71279 = (state_71289[(2)]);
var state_71289__$1 = state_71289;
var statearr_71297_71328 = state_71289__$1;
(statearr_71297_71328[(2)] = inst_71279);

(statearr_71297_71328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71290 === (13))){
var state_71289__$1 = state_71289;
var statearr_71298_71329 = state_71289__$1;
(statearr_71298_71329[(2)] = null);

(statearr_71298_71329[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71290 === (6))){
var inst_71249 = (state_71289[(7)]);
var inst_71274 = inst_71249.length;
var inst_71275 = (inst_71274 > (0));
var state_71289__$1 = state_71289;
if(cljs.core.truth_(inst_71275)){
var statearr_71299_71330 = state_71289__$1;
(statearr_71299_71330[(1)] = (12));

} else {
var statearr_71300_71331 = state_71289__$1;
(statearr_71300_71331[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71290 === (3))){
var inst_71287 = (state_71289[(2)]);
var state_71289__$1 = state_71289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71289__$1,inst_71287);
} else {
if((state_val_71290 === (12))){
var inst_71249 = (state_71289[(7)]);
var inst_71277 = cljs.core.vec.call(null,inst_71249);
var state_71289__$1 = state_71289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71289__$1,(15),out,inst_71277);
} else {
if((state_val_71290 === (2))){
var state_71289__$1 = state_71289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71289__$1,(4),ch);
} else {
if((state_val_71290 === (11))){
var inst_71257 = (state_71289[(10)]);
var inst_71253 = (state_71289[(9)]);
var inst_71267 = (state_71289[(2)]);
var inst_71268 = [];
var inst_71269 = inst_71268.push(inst_71253);
var inst_71249 = inst_71268;
var inst_71250 = inst_71257;
var state_71289__$1 = (function (){var statearr_71301 = state_71289;
(statearr_71301[(11)] = inst_71269);

(statearr_71301[(12)] = inst_71267);

(statearr_71301[(7)] = inst_71249);

(statearr_71301[(8)] = inst_71250);

return statearr_71301;
})();
var statearr_71302_71332 = state_71289__$1;
(statearr_71302_71332[(2)] = null);

(statearr_71302_71332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71290 === (9))){
var inst_71249 = (state_71289[(7)]);
var inst_71265 = cljs.core.vec.call(null,inst_71249);
var state_71289__$1 = state_71289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_71289__$1,(11),out,inst_71265);
} else {
if((state_val_71290 === (5))){
var inst_71257 = (state_71289[(10)]);
var inst_71250 = (state_71289[(8)]);
var inst_71253 = (state_71289[(9)]);
var inst_71257__$1 = f.call(null,inst_71253);
var inst_71258 = cljs.core._EQ_.call(null,inst_71257__$1,inst_71250);
var inst_71259 = cljs.core.keyword_identical_QMARK_.call(null,inst_71250,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_71260 = (inst_71258) || (inst_71259);
var state_71289__$1 = (function (){var statearr_71303 = state_71289;
(statearr_71303[(10)] = inst_71257__$1);

return statearr_71303;
})();
if(cljs.core.truth_(inst_71260)){
var statearr_71304_71333 = state_71289__$1;
(statearr_71304_71333[(1)] = (8));

} else {
var statearr_71305_71334 = state_71289__$1;
(statearr_71305_71334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71290 === (14))){
var inst_71282 = (state_71289[(2)]);
var inst_71283 = cljs.core.async.close_BANG_.call(null,out);
var state_71289__$1 = (function (){var statearr_71307 = state_71289;
(statearr_71307[(13)] = inst_71282);

return statearr_71307;
})();
var statearr_71308_71335 = state_71289__$1;
(statearr_71308_71335[(2)] = inst_71283);

(statearr_71308_71335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71290 === (10))){
var inst_71272 = (state_71289[(2)]);
var state_71289__$1 = state_71289;
var statearr_71309_71336 = state_71289__$1;
(statearr_71309_71336[(2)] = inst_71272);

(statearr_71309_71336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71290 === (8))){
var inst_71257 = (state_71289[(10)]);
var inst_71249 = (state_71289[(7)]);
var inst_71253 = (state_71289[(9)]);
var inst_71262 = inst_71249.push(inst_71253);
var tmp71306 = inst_71249;
var inst_71249__$1 = tmp71306;
var inst_71250 = inst_71257;
var state_71289__$1 = (function (){var statearr_71310 = state_71289;
(statearr_71310[(7)] = inst_71249__$1);

(statearr_71310[(8)] = inst_71250);

(statearr_71310[(14)] = inst_71262);

return statearr_71310;
})();
var statearr_71311_71337 = state_71289__$1;
(statearr_71311_71337[(2)] = null);

(statearr_71311_71337[(1)] = (2));


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
});})(c__41196__auto___71323,out))
;
return ((function (switch__40432__auto__,c__41196__auto___71323,out){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_71315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71315[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_71315[(1)] = (1));

return statearr_71315;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_71289){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_71289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e71316){if((e71316 instanceof Object)){
var ex__40436__auto__ = e71316;
var statearr_71317_71338 = state_71289;
(statearr_71317_71338[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71339 = state_71289;
state_71289 = G__71339;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_71289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_71289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___71323,out))
})();
var state__41198__auto__ = (function (){var statearr_71318 = f__41197__auto__.call(null);
(statearr_71318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___71323);

return statearr_71318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___71323,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1459533433626