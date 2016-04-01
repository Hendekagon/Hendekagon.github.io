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
var args86569 = [];
var len__36491__auto___86584 = arguments.length;
var i__36492__auto___86585 = (0);
while(true){
if((i__36492__auto___86585 < len__36491__auto___86584)){
args86569.push((arguments[i__36492__auto___86585]));

var G__86586 = (i__36492__auto___86585 + (1));
i__36492__auto___86585 = G__86586;
continue;
} else {
}
break;
}

var G__86575 = args86569.length;
switch (G__86575) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86569.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async86576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async86576 = (function (f,blockable,meta86577){
this.f = f;
this.blockable = blockable;
this.meta86577 = meta86577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async86576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86578,meta86577__$1){
var self__ = this;
var _86578__$1 = this;
return (new cljs.core.async.t_cljs$core$async86576(self__.f,self__.blockable,meta86577__$1));
});

cljs.core.async.t_cljs$core$async86576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86578){
var self__ = this;
var _86578__$1 = this;
return self__.meta86577;
});

cljs.core.async.t_cljs$core$async86576.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async86576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async86576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async86576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async86576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta86577","meta86577",-913205176,null)], null);
});

cljs.core.async.t_cljs$core$async86576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async86576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async86576";

cljs.core.async.t_cljs$core$async86576.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async86576");
});

cljs.core.async.__GT_t_cljs$core$async86576 = (function cljs$core$async$__GT_t_cljs$core$async86576(f__$1,blockable__$1,meta86577){
return (new cljs.core.async.t_cljs$core$async86576(f__$1,blockable__$1,meta86577));
});

}

return (new cljs.core.async.t_cljs$core$async86576(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args86606 = [];
var len__36491__auto___86615 = arguments.length;
var i__36492__auto___86616 = (0);
while(true){
if((i__36492__auto___86616 < len__36491__auto___86615)){
args86606.push((arguments[i__36492__auto___86616]));

var G__86617 = (i__36492__auto___86616 + (1));
i__36492__auto___86616 = G__86617;
continue;
} else {
}
break;
}

var G__86612 = args86606.length;
switch (G__86612) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86606.length)].join('')));

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
var args86662 = [];
var len__36491__auto___86668 = arguments.length;
var i__36492__auto___86669 = (0);
while(true){
if((i__36492__auto___86669 < len__36491__auto___86668)){
args86662.push((arguments[i__36492__auto___86669]));

var G__86670 = (i__36492__auto___86669 + (1));
i__36492__auto___86669 = G__86670;
continue;
} else {
}
break;
}

var G__86666 = args86662.length;
switch (G__86666) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86662.length)].join('')));

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
var args86712 = [];
var len__36491__auto___86766 = arguments.length;
var i__36492__auto___86767 = (0);
while(true){
if((i__36492__auto___86767 < len__36491__auto___86766)){
args86712.push((arguments[i__36492__auto___86767]));

var G__86768 = (i__36492__auto___86767 + (1));
i__36492__auto___86767 = G__86768;
continue;
} else {
}
break;
}

var G__86720 = args86712.length;
switch (G__86720) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86712.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_86772 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_86772);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_86772,ret){
return (function (){
return fn1.call(null,val_86772);
});})(val_86772,ret))
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
var args86782 = [];
var len__36491__auto___86788 = arguments.length;
var i__36492__auto___86789 = (0);
while(true){
if((i__36492__auto___86789 < len__36491__auto___86788)){
args86782.push((arguments[i__36492__auto___86789]));

var G__86790 = (i__36492__auto___86789 + (1));
i__36492__auto___86789 = G__86790;
continue;
} else {
}
break;
}

var G__86784 = args86782.length;
switch (G__86784) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86782.length)].join('')));

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
var n__36336__auto___86798 = n;
var x_86799 = (0);
while(true){
if((x_86799 < n__36336__auto___86798)){
(a[x_86799] = (0));

var G__86856 = (x_86799 + (1));
x_86799 = G__86856;
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

var G__86857 = (i + (1));
i = G__86857;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async86867 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async86867 = (function (alt_flag,flag,meta86868){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta86868 = meta86868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async86867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_86869,meta86868__$1){
var self__ = this;
var _86869__$1 = this;
return (new cljs.core.async.t_cljs$core$async86867(self__.alt_flag,self__.flag,meta86868__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async86867.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_86869){
var self__ = this;
var _86869__$1 = this;
return self__.meta86868;
});})(flag))
;

cljs.core.async.t_cljs$core$async86867.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async86867.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async86867.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async86867.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async86867.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta86868","meta86868",-362898176,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async86867.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async86867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async86867";

cljs.core.async.t_cljs$core$async86867.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async86867");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async86867 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async86867(alt_flag__$1,flag__$1,meta86868){
return (new cljs.core.async.t_cljs$core$async86867(alt_flag__$1,flag__$1,meta86868));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async86867(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async86921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async86921 = (function (alt_handler,flag,cb,meta86922){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta86922 = meta86922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async86921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86923,meta86922__$1){
var self__ = this;
var _86923__$1 = this;
return (new cljs.core.async.t_cljs$core$async86921(self__.alt_handler,self__.flag,self__.cb,meta86922__$1));
});

cljs.core.async.t_cljs$core$async86921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86923){
var self__ = this;
var _86923__$1 = this;
return self__.meta86922;
});

cljs.core.async.t_cljs$core$async86921.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async86921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async86921.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async86921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async86921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta86922","meta86922",-2070858191,null)], null);
});

cljs.core.async.t_cljs$core$async86921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async86921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async86921";

cljs.core.async.t_cljs$core$async86921.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async86921");
});

cljs.core.async.__GT_t_cljs$core$async86921 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async86921(alt_handler__$1,flag__$1,cb__$1,meta86922){
return (new cljs.core.async.t_cljs$core$async86921(alt_handler__$1,flag__$1,cb__$1,meta86922));
});

}

return (new cljs.core.async.t_cljs$core$async86921(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__86943_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__86943_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__86944_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__86944_SHARP_,port], null));
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
var G__86973 = (i + (1));
i = G__86973;
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
var len__36491__auto___86989 = arguments.length;
var i__36492__auto___86990 = (0);
while(true){
if((i__36492__auto___86990 < len__36491__auto___86989)){
args__36498__auto__.push((arguments[i__36492__auto___86990]));

var G__86991 = (i__36492__auto___86990 + (1));
i__36492__auto___86990 = G__86991;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((1) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36499__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__86985){
var map__86986 = p__86985;
var map__86986__$1 = ((((!((map__86986 == null)))?((((map__86986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86986):map__86986);
var opts = map__86986__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq86981){
var G__86982 = cljs.core.first.call(null,seq86981);
var seq86981__$1 = cljs.core.next.call(null,seq86981);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__86982,seq86981__$1);
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
var args87001 = [];
var len__36491__auto___87080 = arguments.length;
var i__36492__auto___87081 = (0);
while(true){
if((i__36492__auto___87081 < len__36491__auto___87080)){
args87001.push((arguments[i__36492__auto___87081]));

var G__87083 = (i__36492__auto___87081 + (1));
i__36492__auto___87081 = G__87083;
continue;
} else {
}
break;
}

var G__87007 = args87001.length;
switch (G__87007) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87001.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41196__auto___87090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___87090){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___87090){
return (function (state_87040){
var state_val_87041 = (state_87040[(1)]);
if((state_val_87041 === (7))){
var inst_87035 = (state_87040[(2)]);
var state_87040__$1 = state_87040;
var statearr_87043_87093 = state_87040__$1;
(statearr_87043_87093[(2)] = inst_87035);

(statearr_87043_87093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (1))){
var state_87040__$1 = state_87040;
var statearr_87045_87101 = state_87040__$1;
(statearr_87045_87101[(2)] = null);

(statearr_87045_87101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (4))){
var inst_87015 = (state_87040[(7)]);
var inst_87015__$1 = (state_87040[(2)]);
var inst_87016 = (inst_87015__$1 == null);
var state_87040__$1 = (function (){var statearr_87047 = state_87040;
(statearr_87047[(7)] = inst_87015__$1);

return statearr_87047;
})();
if(cljs.core.truth_(inst_87016)){
var statearr_87048_87103 = state_87040__$1;
(statearr_87048_87103[(1)] = (5));

} else {
var statearr_87049_87104 = state_87040__$1;
(statearr_87049_87104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (13))){
var state_87040__$1 = state_87040;
var statearr_87050_87107 = state_87040__$1;
(statearr_87050_87107[(2)] = null);

(statearr_87050_87107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (6))){
var inst_87015 = (state_87040[(7)]);
var state_87040__$1 = state_87040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87040__$1,(11),to,inst_87015);
} else {
if((state_val_87041 === (3))){
var inst_87037 = (state_87040[(2)]);
var state_87040__$1 = state_87040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87040__$1,inst_87037);
} else {
if((state_val_87041 === (12))){
var state_87040__$1 = state_87040;
var statearr_87057_87112 = state_87040__$1;
(statearr_87057_87112[(2)] = null);

(statearr_87057_87112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (2))){
var state_87040__$1 = state_87040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87040__$1,(4),from);
} else {
if((state_val_87041 === (11))){
var inst_87028 = (state_87040[(2)]);
var state_87040__$1 = state_87040;
if(cljs.core.truth_(inst_87028)){
var statearr_87058_87116 = state_87040__$1;
(statearr_87058_87116[(1)] = (12));

} else {
var statearr_87059_87119 = state_87040__$1;
(statearr_87059_87119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (9))){
var state_87040__$1 = state_87040;
var statearr_87061_87121 = state_87040__$1;
(statearr_87061_87121[(2)] = null);

(statearr_87061_87121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (5))){
var state_87040__$1 = state_87040;
if(cljs.core.truth_(close_QMARK_)){
var statearr_87064_87122 = state_87040__$1;
(statearr_87064_87122[(1)] = (8));

} else {
var statearr_87065_87123 = state_87040__$1;
(statearr_87065_87123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (14))){
var inst_87033 = (state_87040[(2)]);
var state_87040__$1 = state_87040;
var statearr_87067_87128 = state_87040__$1;
(statearr_87067_87128[(2)] = inst_87033);

(statearr_87067_87128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (10))){
var inst_87025 = (state_87040[(2)]);
var state_87040__$1 = state_87040;
var statearr_87068_87131 = state_87040__$1;
(statearr_87068_87131[(2)] = inst_87025);

(statearr_87068_87131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87041 === (8))){
var inst_87022 = cljs.core.async.close_BANG_.call(null,to);
var state_87040__$1 = state_87040;
var statearr_87069_87138 = state_87040__$1;
(statearr_87069_87138[(2)] = inst_87022);

(statearr_87069_87138[(1)] = (10));


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
});})(c__41196__auto___87090))
;
return ((function (switch__40432__auto__,c__41196__auto___87090){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_87073 = [null,null,null,null,null,null,null,null];
(statearr_87073[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_87073[(1)] = (1));

return statearr_87073;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_87040){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_87040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e87074){if((e87074 instanceof Object)){
var ex__40436__auto__ = e87074;
var statearr_87075_87151 = state_87040;
(statearr_87075_87151[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87153 = state_87040;
state_87040 = G__87153;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_87040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_87040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___87090))
})();
var state__41198__auto__ = (function (){var statearr_87078 = f__41197__auto__.call(null);
(statearr_87078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___87090);

return statearr_87078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___87090))
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
return (function (p__87421){
var vec__87422 = p__87421;
var v = cljs.core.nth.call(null,vec__87422,(0),null);
var p = cljs.core.nth.call(null,vec__87422,(1),null);
var job = vec__87422;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__41196__auto___87716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___87716,res,vec__87422,v,p,job,jobs,results){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___87716,res,vec__87422,v,p,job,jobs,results){
return (function (state_87428){
var state_val_87429 = (state_87428[(1)]);
if((state_val_87429 === (1))){
var state_87428__$1 = state_87428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87428__$1,(2),res,v);
} else {
if((state_val_87429 === (2))){
var inst_87425 = (state_87428[(2)]);
var inst_87426 = cljs.core.async.close_BANG_.call(null,res);
var state_87428__$1 = (function (){var statearr_87431 = state_87428;
(statearr_87431[(7)] = inst_87425);

return statearr_87431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87428__$1,inst_87426);
} else {
return null;
}
}
});})(c__41196__auto___87716,res,vec__87422,v,p,job,jobs,results))
;
return ((function (switch__40432__auto__,c__41196__auto___87716,res,vec__87422,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0 = (function (){
var statearr_87437 = [null,null,null,null,null,null,null,null];
(statearr_87437[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__);

(statearr_87437[(1)] = (1));

return statearr_87437;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1 = (function (state_87428){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_87428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e87438){if((e87438 instanceof Object)){
var ex__40436__auto__ = e87438;
var statearr_87440_87741 = state_87428;
(statearr_87440_87741[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87745 = state_87428;
state_87428 = G__87745;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = function(state_87428){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1.call(this,state_87428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___87716,res,vec__87422,v,p,job,jobs,results))
})();
var state__41198__auto__ = (function (){var statearr_87444 = f__41197__auto__.call(null);
(statearr_87444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___87716);

return statearr_87444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___87716,res,vec__87422,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__87446){
var vec__87447 = p__87446;
var v = cljs.core.nth.call(null,vec__87447,(0),null);
var p = cljs.core.nth.call(null,vec__87447,(1),null);
var job = vec__87447;
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
var n__36336__auto___87752 = n;
var __87753 = (0);
while(true){
if((__87753 < n__36336__auto___87752)){
var G__87448_87754 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__87448_87754) {
case "compute":
var c__41196__auto___87756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__87753,c__41196__auto___87756,G__87448_87754,n__36336__auto___87752,jobs,results,process,async){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (__87753,c__41196__auto___87756,G__87448_87754,n__36336__auto___87752,jobs,results,process,async){
return (function (state_87463){
var state_val_87464 = (state_87463[(1)]);
if((state_val_87464 === (1))){
var state_87463__$1 = state_87463;
var statearr_87468_87760 = state_87463__$1;
(statearr_87468_87760[(2)] = null);

(statearr_87468_87760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87464 === (2))){
var state_87463__$1 = state_87463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87463__$1,(4),jobs);
} else {
if((state_val_87464 === (3))){
var inst_87461 = (state_87463[(2)]);
var state_87463__$1 = state_87463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87463__$1,inst_87461);
} else {
if((state_val_87464 === (4))){
var inst_87453 = (state_87463[(2)]);
var inst_87454 = process.call(null,inst_87453);
var state_87463__$1 = state_87463;
if(cljs.core.truth_(inst_87454)){
var statearr_87472_87762 = state_87463__$1;
(statearr_87472_87762[(1)] = (5));

} else {
var statearr_87474_87763 = state_87463__$1;
(statearr_87474_87763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87464 === (5))){
var state_87463__$1 = state_87463;
var statearr_87476_87764 = state_87463__$1;
(statearr_87476_87764[(2)] = null);

(statearr_87476_87764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87464 === (6))){
var state_87463__$1 = state_87463;
var statearr_87477_87768 = state_87463__$1;
(statearr_87477_87768[(2)] = null);

(statearr_87477_87768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87464 === (7))){
var inst_87459 = (state_87463[(2)]);
var state_87463__$1 = state_87463;
var statearr_87478_87770 = state_87463__$1;
(statearr_87478_87770[(2)] = inst_87459);

(statearr_87478_87770[(1)] = (3));


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
});})(__87753,c__41196__auto___87756,G__87448_87754,n__36336__auto___87752,jobs,results,process,async))
;
return ((function (__87753,switch__40432__auto__,c__41196__auto___87756,G__87448_87754,n__36336__auto___87752,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0 = (function (){
var statearr_87491 = [null,null,null,null,null,null,null];
(statearr_87491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__);

(statearr_87491[(1)] = (1));

return statearr_87491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1 = (function (state_87463){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_87463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e87492){if((e87492 instanceof Object)){
var ex__40436__auto__ = e87492;
var statearr_87493_87789 = state_87463;
(statearr_87493_87789[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87791 = state_87463;
state_87463 = G__87791;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = function(state_87463){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1.call(this,state_87463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__;
})()
;})(__87753,switch__40432__auto__,c__41196__auto___87756,G__87448_87754,n__36336__auto___87752,jobs,results,process,async))
})();
var state__41198__auto__ = (function (){var statearr_87497 = f__41197__auto__.call(null);
(statearr_87497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___87756);

return statearr_87497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(__87753,c__41196__auto___87756,G__87448_87754,n__36336__auto___87752,jobs,results,process,async))
);


break;
case "async":
var c__41196__auto___87796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__87753,c__41196__auto___87796,G__87448_87754,n__36336__auto___87752,jobs,results,process,async){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (__87753,c__41196__auto___87796,G__87448_87754,n__36336__auto___87752,jobs,results,process,async){
return (function (state_87513){
var state_val_87514 = (state_87513[(1)]);
if((state_val_87514 === (1))){
var state_87513__$1 = state_87513;
var statearr_87516_87802 = state_87513__$1;
(statearr_87516_87802[(2)] = null);

(statearr_87516_87802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87514 === (2))){
var state_87513__$1 = state_87513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87513__$1,(4),jobs);
} else {
if((state_val_87514 === (3))){
var inst_87510 = (state_87513[(2)]);
var state_87513__$1 = state_87513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87513__$1,inst_87510);
} else {
if((state_val_87514 === (4))){
var inst_87501 = (state_87513[(2)]);
var inst_87502 = async.call(null,inst_87501);
var state_87513__$1 = state_87513;
if(cljs.core.truth_(inst_87502)){
var statearr_87517_87807 = state_87513__$1;
(statearr_87517_87807[(1)] = (5));

} else {
var statearr_87519_87809 = state_87513__$1;
(statearr_87519_87809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87514 === (5))){
var state_87513__$1 = state_87513;
var statearr_87520_87810 = state_87513__$1;
(statearr_87520_87810[(2)] = null);

(statearr_87520_87810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87514 === (6))){
var state_87513__$1 = state_87513;
var statearr_87521_87811 = state_87513__$1;
(statearr_87521_87811[(2)] = null);

(statearr_87521_87811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87514 === (7))){
var inst_87508 = (state_87513[(2)]);
var state_87513__$1 = state_87513;
var statearr_87524_87813 = state_87513__$1;
(statearr_87524_87813[(2)] = inst_87508);

(statearr_87524_87813[(1)] = (3));


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
});})(__87753,c__41196__auto___87796,G__87448_87754,n__36336__auto___87752,jobs,results,process,async))
;
return ((function (__87753,switch__40432__auto__,c__41196__auto___87796,G__87448_87754,n__36336__auto___87752,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0 = (function (){
var statearr_87532 = [null,null,null,null,null,null,null];
(statearr_87532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__);

(statearr_87532[(1)] = (1));

return statearr_87532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1 = (function (state_87513){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_87513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e87534){if((e87534 instanceof Object)){
var ex__40436__auto__ = e87534;
var statearr_87535_87817 = state_87513;
(statearr_87535_87817[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87820 = state_87513;
state_87513 = G__87820;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = function(state_87513){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1.call(this,state_87513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__;
})()
;})(__87753,switch__40432__auto__,c__41196__auto___87796,G__87448_87754,n__36336__auto___87752,jobs,results,process,async))
})();
var state__41198__auto__ = (function (){var statearr_87536 = f__41197__auto__.call(null);
(statearr_87536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___87796);

return statearr_87536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(__87753,c__41196__auto___87796,G__87448_87754,n__36336__auto___87752,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__87825 = (__87753 + (1));
__87753 = G__87825;
continue;
} else {
}
break;
}

var c__41196__auto___87827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___87827,jobs,results,process,async){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___87827,jobs,results,process,async){
return (function (state_87563){
var state_val_87564 = (state_87563[(1)]);
if((state_val_87564 === (1))){
var state_87563__$1 = state_87563;
var statearr_87571_87835 = state_87563__$1;
(statearr_87571_87835[(2)] = null);

(statearr_87571_87835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87564 === (2))){
var state_87563__$1 = state_87563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87563__$1,(4),from);
} else {
if((state_val_87564 === (3))){
var inst_87561 = (state_87563[(2)]);
var state_87563__$1 = state_87563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87563__$1,inst_87561);
} else {
if((state_val_87564 === (4))){
var inst_87541 = (state_87563[(7)]);
var inst_87541__$1 = (state_87563[(2)]);
var inst_87542 = (inst_87541__$1 == null);
var state_87563__$1 = (function (){var statearr_87572 = state_87563;
(statearr_87572[(7)] = inst_87541__$1);

return statearr_87572;
})();
if(cljs.core.truth_(inst_87542)){
var statearr_87573_87839 = state_87563__$1;
(statearr_87573_87839[(1)] = (5));

} else {
var statearr_87574_87840 = state_87563__$1;
(statearr_87574_87840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87564 === (5))){
var inst_87544 = cljs.core.async.close_BANG_.call(null,jobs);
var state_87563__$1 = state_87563;
var statearr_87577_87841 = state_87563__$1;
(statearr_87577_87841[(2)] = inst_87544);

(statearr_87577_87841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87564 === (6))){
var inst_87541 = (state_87563[(7)]);
var inst_87546 = (state_87563[(8)]);
var inst_87546__$1 = cljs.core.async.chan.call(null,(1));
var inst_87548 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_87549 = [inst_87541,inst_87546__$1];
var inst_87550 = (new cljs.core.PersistentVector(null,2,(5),inst_87548,inst_87549,null));
var state_87563__$1 = (function (){var statearr_87579 = state_87563;
(statearr_87579[(8)] = inst_87546__$1);

return statearr_87579;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87563__$1,(8),jobs,inst_87550);
} else {
if((state_val_87564 === (7))){
var inst_87559 = (state_87563[(2)]);
var state_87563__$1 = state_87563;
var statearr_87580_87845 = state_87563__$1;
(statearr_87580_87845[(2)] = inst_87559);

(statearr_87580_87845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87564 === (8))){
var inst_87546 = (state_87563[(8)]);
var inst_87552 = (state_87563[(2)]);
var state_87563__$1 = (function (){var statearr_87582 = state_87563;
(statearr_87582[(9)] = inst_87552);

return statearr_87582;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87563__$1,(9),results,inst_87546);
} else {
if((state_val_87564 === (9))){
var inst_87555 = (state_87563[(2)]);
var state_87563__$1 = (function (){var statearr_87585 = state_87563;
(statearr_87585[(10)] = inst_87555);

return statearr_87585;
})();
var statearr_87586_87849 = state_87563__$1;
(statearr_87586_87849[(2)] = null);

(statearr_87586_87849[(1)] = (2));


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
});})(c__41196__auto___87827,jobs,results,process,async))
;
return ((function (switch__40432__auto__,c__41196__auto___87827,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0 = (function (){
var statearr_87594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_87594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__);

(statearr_87594[(1)] = (1));

return statearr_87594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1 = (function (state_87563){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_87563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e87596){if((e87596 instanceof Object)){
var ex__40436__auto__ = e87596;
var statearr_87597_87857 = state_87563;
(statearr_87597_87857[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87860 = state_87563;
state_87563 = G__87860;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = function(state_87563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1.call(this,state_87563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___87827,jobs,results,process,async))
})();
var state__41198__auto__ = (function (){var statearr_87598 = f__41197__auto__.call(null);
(statearr_87598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___87827);

return statearr_87598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___87827,jobs,results,process,async))
);


var c__41196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto__,jobs,results,process,async){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto__,jobs,results,process,async){
return (function (state_87645){
var state_val_87646 = (state_87645[(1)]);
if((state_val_87646 === (7))){
var inst_87641 = (state_87645[(2)]);
var state_87645__$1 = state_87645;
var statearr_87650_87879 = state_87645__$1;
(statearr_87650_87879[(2)] = inst_87641);

(statearr_87650_87879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (20))){
var state_87645__$1 = state_87645;
var statearr_87651_87892 = state_87645__$1;
(statearr_87651_87892[(2)] = null);

(statearr_87651_87892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (1))){
var state_87645__$1 = state_87645;
var statearr_87654_87893 = state_87645__$1;
(statearr_87654_87893[(2)] = null);

(statearr_87654_87893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (4))){
var inst_87602 = (state_87645[(7)]);
var inst_87602__$1 = (state_87645[(2)]);
var inst_87603 = (inst_87602__$1 == null);
var state_87645__$1 = (function (){var statearr_87656 = state_87645;
(statearr_87656[(7)] = inst_87602__$1);

return statearr_87656;
})();
if(cljs.core.truth_(inst_87603)){
var statearr_87657_87906 = state_87645__$1;
(statearr_87657_87906[(1)] = (5));

} else {
var statearr_87658_87907 = state_87645__$1;
(statearr_87658_87907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (15))){
var inst_87621 = (state_87645[(8)]);
var state_87645__$1 = state_87645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87645__$1,(18),to,inst_87621);
} else {
if((state_val_87646 === (21))){
var inst_87636 = (state_87645[(2)]);
var state_87645__$1 = state_87645;
var statearr_87660_87910 = state_87645__$1;
(statearr_87660_87910[(2)] = inst_87636);

(statearr_87660_87910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (13))){
var inst_87638 = (state_87645[(2)]);
var state_87645__$1 = (function (){var statearr_87661 = state_87645;
(statearr_87661[(9)] = inst_87638);

return statearr_87661;
})();
var statearr_87663_87911 = state_87645__$1;
(statearr_87663_87911[(2)] = null);

(statearr_87663_87911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (6))){
var inst_87602 = (state_87645[(7)]);
var state_87645__$1 = state_87645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87645__$1,(11),inst_87602);
} else {
if((state_val_87646 === (17))){
var inst_87631 = (state_87645[(2)]);
var state_87645__$1 = state_87645;
if(cljs.core.truth_(inst_87631)){
var statearr_87664_87912 = state_87645__$1;
(statearr_87664_87912[(1)] = (19));

} else {
var statearr_87665_87913 = state_87645__$1;
(statearr_87665_87913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (3))){
var inst_87643 = (state_87645[(2)]);
var state_87645__$1 = state_87645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87645__$1,inst_87643);
} else {
if((state_val_87646 === (12))){
var inst_87618 = (state_87645[(10)]);
var state_87645__$1 = state_87645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87645__$1,(14),inst_87618);
} else {
if((state_val_87646 === (2))){
var state_87645__$1 = state_87645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87645__$1,(4),results);
} else {
if((state_val_87646 === (19))){
var state_87645__$1 = state_87645;
var statearr_87670_87916 = state_87645__$1;
(statearr_87670_87916[(2)] = null);

(statearr_87670_87916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (11))){
var inst_87618 = (state_87645[(2)]);
var state_87645__$1 = (function (){var statearr_87675 = state_87645;
(statearr_87675[(10)] = inst_87618);

return statearr_87675;
})();
var statearr_87676_87918 = state_87645__$1;
(statearr_87676_87918[(2)] = null);

(statearr_87676_87918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (9))){
var state_87645__$1 = state_87645;
var statearr_87677_87919 = state_87645__$1;
(statearr_87677_87919[(2)] = null);

(statearr_87677_87919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (5))){
var state_87645__$1 = state_87645;
if(cljs.core.truth_(close_QMARK_)){
var statearr_87678_87931 = state_87645__$1;
(statearr_87678_87931[(1)] = (8));

} else {
var statearr_87679_87933 = state_87645__$1;
(statearr_87679_87933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (14))){
var inst_87621 = (state_87645[(8)]);
var inst_87625 = (state_87645[(11)]);
var inst_87621__$1 = (state_87645[(2)]);
var inst_87624 = (inst_87621__$1 == null);
var inst_87625__$1 = cljs.core.not.call(null,inst_87624);
var state_87645__$1 = (function (){var statearr_87683 = state_87645;
(statearr_87683[(8)] = inst_87621__$1);

(statearr_87683[(11)] = inst_87625__$1);

return statearr_87683;
})();
if(inst_87625__$1){
var statearr_87684_87941 = state_87645__$1;
(statearr_87684_87941[(1)] = (15));

} else {
var statearr_87685_87943 = state_87645__$1;
(statearr_87685_87943[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (16))){
var inst_87625 = (state_87645[(11)]);
var state_87645__$1 = state_87645;
var statearr_87687_87945 = state_87645__$1;
(statearr_87687_87945[(2)] = inst_87625);

(statearr_87687_87945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (10))){
var inst_87610 = (state_87645[(2)]);
var state_87645__$1 = state_87645;
var statearr_87689_87946 = state_87645__$1;
(statearr_87689_87946[(2)] = inst_87610);

(statearr_87689_87946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (18))){
var inst_87628 = (state_87645[(2)]);
var state_87645__$1 = state_87645;
var statearr_87691_87954 = state_87645__$1;
(statearr_87691_87954[(2)] = inst_87628);

(statearr_87691_87954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87646 === (8))){
var inst_87607 = cljs.core.async.close_BANG_.call(null,to);
var state_87645__$1 = state_87645;
var statearr_87692_87955 = state_87645__$1;
(statearr_87692_87955[(2)] = inst_87607);

(statearr_87692_87955[(1)] = (10));


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
var statearr_87701 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87701[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__);

(statearr_87701[(1)] = (1));

return statearr_87701;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1 = (function (state_87645){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_87645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e87702){if((e87702 instanceof Object)){
var ex__40436__auto__ = e87702;
var statearr_87703_87960 = state_87645;
(statearr_87703_87960[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87969 = state_87645;
state_87645 = G__87969;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__ = function(state_87645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1.call(this,state_87645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40433__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto__,jobs,results,process,async))
})();
var state__41198__auto__ = (function (){var statearr_87706 = f__41197__auto__.call(null);
(statearr_87706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto__);

return statearr_87706;
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
var args87970 = [];
var len__36491__auto___87974 = arguments.length;
var i__36492__auto___87975 = (0);
while(true){
if((i__36492__auto___87975 < len__36491__auto___87974)){
args87970.push((arguments[i__36492__auto___87975]));

var G__87976 = (i__36492__auto___87975 + (1));
i__36492__auto___87975 = G__87976;
continue;
} else {
}
break;
}

var G__87973 = args87970.length;
switch (G__87973) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87970.length)].join('')));

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
var args87999 = [];
var len__36491__auto___88017 = arguments.length;
var i__36492__auto___88018 = (0);
while(true){
if((i__36492__auto___88018 < len__36491__auto___88017)){
args87999.push((arguments[i__36492__auto___88018]));

var G__88021 = (i__36492__auto___88018 + (1));
i__36492__auto___88018 = G__88021;
continue;
} else {
}
break;
}

var G__88003 = args87999.length;
switch (G__88003) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args87999.length)].join('')));

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
var args88029 = [];
var len__36491__auto___88104 = arguments.length;
var i__36492__auto___88105 = (0);
while(true){
if((i__36492__auto___88105 < len__36491__auto___88104)){
args88029.push((arguments[i__36492__auto___88105]));

var G__88106 = (i__36492__auto___88105 + (1));
i__36492__auto___88105 = G__88106;
continue;
} else {
}
break;
}

var G__88032 = args88029.length;
switch (G__88032) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88029.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__41196__auto___88108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___88108,tc,fc){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___88108,tc,fc){
return (function (state_88059){
var state_val_88060 = (state_88059[(1)]);
if((state_val_88060 === (7))){
var inst_88055 = (state_88059[(2)]);
var state_88059__$1 = state_88059;
var statearr_88061_88109 = state_88059__$1;
(statearr_88061_88109[(2)] = inst_88055);

(statearr_88061_88109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88060 === (1))){
var state_88059__$1 = state_88059;
var statearr_88062_88110 = state_88059__$1;
(statearr_88062_88110[(2)] = null);

(statearr_88062_88110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88060 === (4))){
var inst_88036 = (state_88059[(7)]);
var inst_88036__$1 = (state_88059[(2)]);
var inst_88037 = (inst_88036__$1 == null);
var state_88059__$1 = (function (){var statearr_88069 = state_88059;
(statearr_88069[(7)] = inst_88036__$1);

return statearr_88069;
})();
if(cljs.core.truth_(inst_88037)){
var statearr_88071_88111 = state_88059__$1;
(statearr_88071_88111[(1)] = (5));

} else {
var statearr_88073_88112 = state_88059__$1;
(statearr_88073_88112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88060 === (13))){
var state_88059__$1 = state_88059;
var statearr_88075_88113 = state_88059__$1;
(statearr_88075_88113[(2)] = null);

(statearr_88075_88113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88060 === (6))){
var inst_88036 = (state_88059[(7)]);
var inst_88042 = p.call(null,inst_88036);
var state_88059__$1 = state_88059;
if(cljs.core.truth_(inst_88042)){
var statearr_88077_88117 = state_88059__$1;
(statearr_88077_88117[(1)] = (9));

} else {
var statearr_88078_88118 = state_88059__$1;
(statearr_88078_88118[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88060 === (3))){
var inst_88057 = (state_88059[(2)]);
var state_88059__$1 = state_88059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88059__$1,inst_88057);
} else {
if((state_val_88060 === (12))){
var state_88059__$1 = state_88059;
var statearr_88080_88122 = state_88059__$1;
(statearr_88080_88122[(2)] = null);

(statearr_88080_88122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88060 === (2))){
var state_88059__$1 = state_88059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88059__$1,(4),ch);
} else {
if((state_val_88060 === (11))){
var inst_88036 = (state_88059[(7)]);
var inst_88046 = (state_88059[(2)]);
var state_88059__$1 = state_88059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88059__$1,(8),inst_88046,inst_88036);
} else {
if((state_val_88060 === (9))){
var state_88059__$1 = state_88059;
var statearr_88083_88125 = state_88059__$1;
(statearr_88083_88125[(2)] = tc);

(statearr_88083_88125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88060 === (5))){
var inst_88039 = cljs.core.async.close_BANG_.call(null,tc);
var inst_88040 = cljs.core.async.close_BANG_.call(null,fc);
var state_88059__$1 = (function (){var statearr_88085 = state_88059;
(statearr_88085[(8)] = inst_88039);

return statearr_88085;
})();
var statearr_88086_88127 = state_88059__$1;
(statearr_88086_88127[(2)] = inst_88040);

(statearr_88086_88127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88060 === (14))){
var inst_88053 = (state_88059[(2)]);
var state_88059__$1 = state_88059;
var statearr_88089_88128 = state_88059__$1;
(statearr_88089_88128[(2)] = inst_88053);

(statearr_88089_88128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88060 === (10))){
var state_88059__$1 = state_88059;
var statearr_88090_88131 = state_88059__$1;
(statearr_88090_88131[(2)] = fc);

(statearr_88090_88131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88060 === (8))){
var inst_88048 = (state_88059[(2)]);
var state_88059__$1 = state_88059;
if(cljs.core.truth_(inst_88048)){
var statearr_88091_88133 = state_88059__$1;
(statearr_88091_88133[(1)] = (12));

} else {
var statearr_88092_88134 = state_88059__$1;
(statearr_88092_88134[(1)] = (13));

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
});})(c__41196__auto___88108,tc,fc))
;
return ((function (switch__40432__auto__,c__41196__auto___88108,tc,fc){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_88097 = [null,null,null,null,null,null,null,null,null];
(statearr_88097[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_88097[(1)] = (1));

return statearr_88097;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_88059){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_88059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e88098){if((e88098 instanceof Object)){
var ex__40436__auto__ = e88098;
var statearr_88099_88135 = state_88059;
(statearr_88099_88135[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88139 = state_88059;
state_88059 = G__88139;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_88059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_88059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___88108,tc,fc))
})();
var state__41198__auto__ = (function (){var statearr_88100 = f__41197__auto__.call(null);
(statearr_88100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___88108);

return statearr_88100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___88108,tc,fc))
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
return (function (state_88221){
var state_val_88222 = (state_88221[(1)]);
if((state_val_88222 === (7))){
var inst_88217 = (state_88221[(2)]);
var state_88221__$1 = state_88221;
var statearr_88223_88257 = state_88221__$1;
(statearr_88223_88257[(2)] = inst_88217);

(statearr_88223_88257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88222 === (1))){
var inst_88195 = init;
var state_88221__$1 = (function (){var statearr_88224 = state_88221;
(statearr_88224[(7)] = inst_88195);

return statearr_88224;
})();
var statearr_88225_88258 = state_88221__$1;
(statearr_88225_88258[(2)] = null);

(statearr_88225_88258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88222 === (4))){
var inst_88198 = (state_88221[(8)]);
var inst_88198__$1 = (state_88221[(2)]);
var inst_88199 = (inst_88198__$1 == null);
var state_88221__$1 = (function (){var statearr_88229 = state_88221;
(statearr_88229[(8)] = inst_88198__$1);

return statearr_88229;
})();
if(cljs.core.truth_(inst_88199)){
var statearr_88230_88262 = state_88221__$1;
(statearr_88230_88262[(1)] = (5));

} else {
var statearr_88231_88263 = state_88221__$1;
(statearr_88231_88263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88222 === (6))){
var inst_88202 = (state_88221[(9)]);
var inst_88195 = (state_88221[(7)]);
var inst_88198 = (state_88221[(8)]);
var inst_88202__$1 = f.call(null,inst_88195,inst_88198);
var inst_88209 = cljs.core.reduced_QMARK_.call(null,inst_88202__$1);
var state_88221__$1 = (function (){var statearr_88232 = state_88221;
(statearr_88232[(9)] = inst_88202__$1);

return statearr_88232;
})();
if(inst_88209){
var statearr_88233_88267 = state_88221__$1;
(statearr_88233_88267[(1)] = (8));

} else {
var statearr_88234_88269 = state_88221__$1;
(statearr_88234_88269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88222 === (3))){
var inst_88219 = (state_88221[(2)]);
var state_88221__$1 = state_88221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88221__$1,inst_88219);
} else {
if((state_val_88222 === (2))){
var state_88221__$1 = state_88221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88221__$1,(4),ch);
} else {
if((state_val_88222 === (9))){
var inst_88202 = (state_88221[(9)]);
var inst_88195 = inst_88202;
var state_88221__$1 = (function (){var statearr_88235 = state_88221;
(statearr_88235[(7)] = inst_88195);

return statearr_88235;
})();
var statearr_88237_88270 = state_88221__$1;
(statearr_88237_88270[(2)] = null);

(statearr_88237_88270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88222 === (5))){
var inst_88195 = (state_88221[(7)]);
var state_88221__$1 = state_88221;
var statearr_88239_88277 = state_88221__$1;
(statearr_88239_88277[(2)] = inst_88195);

(statearr_88239_88277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88222 === (10))){
var inst_88215 = (state_88221[(2)]);
var state_88221__$1 = state_88221;
var statearr_88241_88278 = state_88221__$1;
(statearr_88241_88278[(2)] = inst_88215);

(statearr_88241_88278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88222 === (8))){
var inst_88202 = (state_88221[(9)]);
var inst_88211 = cljs.core.deref.call(null,inst_88202);
var state_88221__$1 = state_88221;
var statearr_88242_88281 = state_88221__$1;
(statearr_88242_88281[(2)] = inst_88211);

(statearr_88242_88281[(1)] = (10));


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
var statearr_88246 = [null,null,null,null,null,null,null,null,null,null];
(statearr_88246[(0)] = cljs$core$async$reduce_$_state_machine__40433__auto__);

(statearr_88246[(1)] = (1));

return statearr_88246;
});
var cljs$core$async$reduce_$_state_machine__40433__auto____1 = (function (state_88221){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_88221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e88247){if((e88247 instanceof Object)){
var ex__40436__auto__ = e88247;
var statearr_88248_88288 = state_88221;
(statearr_88248_88288[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88293 = state_88221;
state_88221 = G__88293;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40433__auto__ = function(state_88221){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40433__auto____1.call(this,state_88221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40433__auto____0;
cljs$core$async$reduce_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40433__auto____1;
return cljs$core$async$reduce_$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto__))
})();
var state__41198__auto__ = (function (){var statearr_88249 = f__41197__auto__.call(null);
(statearr_88249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto__);

return statearr_88249;
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
var args88297 = [];
var len__36491__auto___88365 = arguments.length;
var i__36492__auto___88366 = (0);
while(true){
if((i__36492__auto___88366 < len__36491__auto___88365)){
args88297.push((arguments[i__36492__auto___88366]));

var G__88367 = (i__36492__auto___88366 + (1));
i__36492__auto___88366 = G__88367;
continue;
} else {
}
break;
}

var G__88302 = args88297.length;
switch (G__88302) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88297.length)].join('')));

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
return (function (state_88329){
var state_val_88330 = (state_88329[(1)]);
if((state_val_88330 === (7))){
var inst_88311 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
var statearr_88331_88372 = state_88329__$1;
(statearr_88331_88372[(2)] = inst_88311);

(statearr_88331_88372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (1))){
var inst_88305 = cljs.core.seq.call(null,coll);
var inst_88306 = inst_88305;
var state_88329__$1 = (function (){var statearr_88332 = state_88329;
(statearr_88332[(7)] = inst_88306);

return statearr_88332;
})();
var statearr_88334_88376 = state_88329__$1;
(statearr_88334_88376[(2)] = null);

(statearr_88334_88376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (4))){
var inst_88306 = (state_88329[(7)]);
var inst_88309 = cljs.core.first.call(null,inst_88306);
var state_88329__$1 = state_88329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88329__$1,(7),ch,inst_88309);
} else {
if((state_val_88330 === (13))){
var inst_88323 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
var statearr_88337_88378 = state_88329__$1;
(statearr_88337_88378[(2)] = inst_88323);

(statearr_88337_88378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (6))){
var inst_88314 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
if(cljs.core.truth_(inst_88314)){
var statearr_88338_88382 = state_88329__$1;
(statearr_88338_88382[(1)] = (8));

} else {
var statearr_88339_88383 = state_88329__$1;
(statearr_88339_88383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (3))){
var inst_88327 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88329__$1,inst_88327);
} else {
if((state_val_88330 === (12))){
var state_88329__$1 = state_88329;
var statearr_88340_88384 = state_88329__$1;
(statearr_88340_88384[(2)] = null);

(statearr_88340_88384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (2))){
var inst_88306 = (state_88329[(7)]);
var state_88329__$1 = state_88329;
if(cljs.core.truth_(inst_88306)){
var statearr_88342_88387 = state_88329__$1;
(statearr_88342_88387[(1)] = (4));

} else {
var statearr_88344_88389 = state_88329__$1;
(statearr_88344_88389[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (11))){
var inst_88320 = cljs.core.async.close_BANG_.call(null,ch);
var state_88329__$1 = state_88329;
var statearr_88345_88391 = state_88329__$1;
(statearr_88345_88391[(2)] = inst_88320);

(statearr_88345_88391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (9))){
var state_88329__$1 = state_88329;
if(cljs.core.truth_(close_QMARK_)){
var statearr_88347_88392 = state_88329__$1;
(statearr_88347_88392[(1)] = (11));

} else {
var statearr_88348_88393 = state_88329__$1;
(statearr_88348_88393[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (5))){
var inst_88306 = (state_88329[(7)]);
var state_88329__$1 = state_88329;
var statearr_88349_88394 = state_88329__$1;
(statearr_88349_88394[(2)] = inst_88306);

(statearr_88349_88394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (10))){
var inst_88325 = (state_88329[(2)]);
var state_88329__$1 = state_88329;
var statearr_88350_88398 = state_88329__$1;
(statearr_88350_88398[(2)] = inst_88325);

(statearr_88350_88398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88330 === (8))){
var inst_88306 = (state_88329[(7)]);
var inst_88316 = cljs.core.next.call(null,inst_88306);
var inst_88306__$1 = inst_88316;
var state_88329__$1 = (function (){var statearr_88351 = state_88329;
(statearr_88351[(7)] = inst_88306__$1);

return statearr_88351;
})();
var statearr_88352_88399 = state_88329__$1;
(statearr_88352_88399[(2)] = null);

(statearr_88352_88399[(1)] = (2));


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
var statearr_88360 = [null,null,null,null,null,null,null,null];
(statearr_88360[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_88360[(1)] = (1));

return statearr_88360;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_88329){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_88329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e88361){if((e88361 instanceof Object)){
var ex__40436__auto__ = e88361;
var statearr_88362_88403 = state_88329;
(statearr_88362_88403[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88404 = state_88329;
state_88329 = G__88404;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_88329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_88329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto__))
})();
var state__41198__auto__ = (function (){var statearr_88363 = f__41197__auto__.call(null);
(statearr_88363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto__);

return statearr_88363;
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
if(typeof cljs.core.async.t_cljs$core$async88661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async88661 = (function (mult,ch,cs,meta88662){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta88662 = meta88662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async88661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_88663,meta88662__$1){
var self__ = this;
var _88663__$1 = this;
return (new cljs.core.async.t_cljs$core$async88661(self__.mult,self__.ch,self__.cs,meta88662__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async88661.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_88663){
var self__ = this;
var _88663__$1 = this;
return self__.meta88662;
});})(cs))
;

cljs.core.async.t_cljs$core$async88661.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async88661.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async88661.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async88661.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async88661.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async88661.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async88661.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta88662","meta88662",636525995,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async88661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async88661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async88661";

cljs.core.async.t_cljs$core$async88661.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async88661");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async88661 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async88661(mult__$1,ch__$1,cs__$1,meta88662){
return (new cljs.core.async.t_cljs$core$async88661(mult__$1,ch__$1,cs__$1,meta88662));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async88661(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__41196__auto___88889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___88889,cs,m,dchan,dctr,done){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___88889,cs,m,dchan,dctr,done){
return (function (state_88797){
var state_val_88798 = (state_88797[(1)]);
if((state_val_88798 === (7))){
var inst_88793 = (state_88797[(2)]);
var state_88797__$1 = state_88797;
var statearr_88799_88890 = state_88797__$1;
(statearr_88799_88890[(2)] = inst_88793);

(statearr_88799_88890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (20))){
var inst_88698 = (state_88797[(7)]);
var inst_88708 = cljs.core.first.call(null,inst_88698);
var inst_88709 = cljs.core.nth.call(null,inst_88708,(0),null);
var inst_88710 = cljs.core.nth.call(null,inst_88708,(1),null);
var state_88797__$1 = (function (){var statearr_88800 = state_88797;
(statearr_88800[(8)] = inst_88709);

return statearr_88800;
})();
if(cljs.core.truth_(inst_88710)){
var statearr_88801_88891 = state_88797__$1;
(statearr_88801_88891[(1)] = (22));

} else {
var statearr_88802_88892 = state_88797__$1;
(statearr_88802_88892[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (27))){
var inst_88738 = (state_88797[(9)]);
var inst_88740 = (state_88797[(10)]);
var inst_88745 = (state_88797[(11)]);
var inst_88666 = (state_88797[(12)]);
var inst_88745__$1 = cljs.core._nth.call(null,inst_88738,inst_88740);
var inst_88746 = cljs.core.async.put_BANG_.call(null,inst_88745__$1,inst_88666,done);
var state_88797__$1 = (function (){var statearr_88803 = state_88797;
(statearr_88803[(11)] = inst_88745__$1);

return statearr_88803;
})();
if(cljs.core.truth_(inst_88746)){
var statearr_88804_88896 = state_88797__$1;
(statearr_88804_88896[(1)] = (30));

} else {
var statearr_88805_88897 = state_88797__$1;
(statearr_88805_88897[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (1))){
var state_88797__$1 = state_88797;
var statearr_88806_88898 = state_88797__$1;
(statearr_88806_88898[(2)] = null);

(statearr_88806_88898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (24))){
var inst_88698 = (state_88797[(7)]);
var inst_88715 = (state_88797[(2)]);
var inst_88716 = cljs.core.next.call(null,inst_88698);
var inst_88675 = inst_88716;
var inst_88676 = null;
var inst_88677 = (0);
var inst_88678 = (0);
var state_88797__$1 = (function (){var statearr_88807 = state_88797;
(statearr_88807[(13)] = inst_88678);

(statearr_88807[(14)] = inst_88675);

(statearr_88807[(15)] = inst_88676);

(statearr_88807[(16)] = inst_88677);

(statearr_88807[(17)] = inst_88715);

return statearr_88807;
})();
var statearr_88808_88905 = state_88797__$1;
(statearr_88808_88905[(2)] = null);

(statearr_88808_88905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (39))){
var state_88797__$1 = state_88797;
var statearr_88812_88906 = state_88797__$1;
(statearr_88812_88906[(2)] = null);

(statearr_88812_88906[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (4))){
var inst_88666 = (state_88797[(12)]);
var inst_88666__$1 = (state_88797[(2)]);
var inst_88667 = (inst_88666__$1 == null);
var state_88797__$1 = (function (){var statearr_88813 = state_88797;
(statearr_88813[(12)] = inst_88666__$1);

return statearr_88813;
})();
if(cljs.core.truth_(inst_88667)){
var statearr_88814_88907 = state_88797__$1;
(statearr_88814_88907[(1)] = (5));

} else {
var statearr_88815_88908 = state_88797__$1;
(statearr_88815_88908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (15))){
var inst_88678 = (state_88797[(13)]);
var inst_88675 = (state_88797[(14)]);
var inst_88676 = (state_88797[(15)]);
var inst_88677 = (state_88797[(16)]);
var inst_88694 = (state_88797[(2)]);
var inst_88695 = (inst_88678 + (1));
var tmp88809 = inst_88675;
var tmp88810 = inst_88676;
var tmp88811 = inst_88677;
var inst_88675__$1 = tmp88809;
var inst_88676__$1 = tmp88810;
var inst_88677__$1 = tmp88811;
var inst_88678__$1 = inst_88695;
var state_88797__$1 = (function (){var statearr_88816 = state_88797;
(statearr_88816[(13)] = inst_88678__$1);

(statearr_88816[(14)] = inst_88675__$1);

(statearr_88816[(15)] = inst_88676__$1);

(statearr_88816[(16)] = inst_88677__$1);

(statearr_88816[(18)] = inst_88694);

return statearr_88816;
})();
var statearr_88817_88909 = state_88797__$1;
(statearr_88817_88909[(2)] = null);

(statearr_88817_88909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (21))){
var inst_88719 = (state_88797[(2)]);
var state_88797__$1 = state_88797;
var statearr_88821_88914 = state_88797__$1;
(statearr_88821_88914[(2)] = inst_88719);

(statearr_88821_88914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (31))){
var inst_88745 = (state_88797[(11)]);
var inst_88749 = done.call(null,null);
var inst_88750 = cljs.core.async.untap_STAR_.call(null,m,inst_88745);
var state_88797__$1 = (function (){var statearr_88822 = state_88797;
(statearr_88822[(19)] = inst_88749);

return statearr_88822;
})();
var statearr_88823_88915 = state_88797__$1;
(statearr_88823_88915[(2)] = inst_88750);

(statearr_88823_88915[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (32))){
var inst_88737 = (state_88797[(20)]);
var inst_88739 = (state_88797[(21)]);
var inst_88738 = (state_88797[(9)]);
var inst_88740 = (state_88797[(10)]);
var inst_88752 = (state_88797[(2)]);
var inst_88753 = (inst_88740 + (1));
var tmp88818 = inst_88737;
var tmp88819 = inst_88739;
var tmp88820 = inst_88738;
var inst_88737__$1 = tmp88818;
var inst_88738__$1 = tmp88820;
var inst_88739__$1 = tmp88819;
var inst_88740__$1 = inst_88753;
var state_88797__$1 = (function (){var statearr_88824 = state_88797;
(statearr_88824[(20)] = inst_88737__$1);

(statearr_88824[(21)] = inst_88739__$1);

(statearr_88824[(9)] = inst_88738__$1);

(statearr_88824[(10)] = inst_88740__$1);

(statearr_88824[(22)] = inst_88752);

return statearr_88824;
})();
var statearr_88825_88917 = state_88797__$1;
(statearr_88825_88917[(2)] = null);

(statearr_88825_88917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (40))){
var inst_88765 = (state_88797[(23)]);
var inst_88769 = done.call(null,null);
var inst_88770 = cljs.core.async.untap_STAR_.call(null,m,inst_88765);
var state_88797__$1 = (function (){var statearr_88826 = state_88797;
(statearr_88826[(24)] = inst_88769);

return statearr_88826;
})();
var statearr_88827_88921 = state_88797__$1;
(statearr_88827_88921[(2)] = inst_88770);

(statearr_88827_88921[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (33))){
var inst_88756 = (state_88797[(25)]);
var inst_88758 = cljs.core.chunked_seq_QMARK_.call(null,inst_88756);
var state_88797__$1 = state_88797;
if(inst_88758){
var statearr_88828_88922 = state_88797__$1;
(statearr_88828_88922[(1)] = (36));

} else {
var statearr_88829_88923 = state_88797__$1;
(statearr_88829_88923[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (13))){
var inst_88688 = (state_88797[(26)]);
var inst_88691 = cljs.core.async.close_BANG_.call(null,inst_88688);
var state_88797__$1 = state_88797;
var statearr_88830_88924 = state_88797__$1;
(statearr_88830_88924[(2)] = inst_88691);

(statearr_88830_88924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (22))){
var inst_88709 = (state_88797[(8)]);
var inst_88712 = cljs.core.async.close_BANG_.call(null,inst_88709);
var state_88797__$1 = state_88797;
var statearr_88831_88925 = state_88797__$1;
(statearr_88831_88925[(2)] = inst_88712);

(statearr_88831_88925[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (36))){
var inst_88756 = (state_88797[(25)]);
var inst_88760 = cljs.core.chunk_first.call(null,inst_88756);
var inst_88761 = cljs.core.chunk_rest.call(null,inst_88756);
var inst_88762 = cljs.core.count.call(null,inst_88760);
var inst_88737 = inst_88761;
var inst_88738 = inst_88760;
var inst_88739 = inst_88762;
var inst_88740 = (0);
var state_88797__$1 = (function (){var statearr_88833 = state_88797;
(statearr_88833[(20)] = inst_88737);

(statearr_88833[(21)] = inst_88739);

(statearr_88833[(9)] = inst_88738);

(statearr_88833[(10)] = inst_88740);

return statearr_88833;
})();
var statearr_88834_88926 = state_88797__$1;
(statearr_88834_88926[(2)] = null);

(statearr_88834_88926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (41))){
var inst_88756 = (state_88797[(25)]);
var inst_88772 = (state_88797[(2)]);
var inst_88773 = cljs.core.next.call(null,inst_88756);
var inst_88737 = inst_88773;
var inst_88738 = null;
var inst_88739 = (0);
var inst_88740 = (0);
var state_88797__$1 = (function (){var statearr_88835 = state_88797;
(statearr_88835[(20)] = inst_88737);

(statearr_88835[(21)] = inst_88739);

(statearr_88835[(9)] = inst_88738);

(statearr_88835[(10)] = inst_88740);

(statearr_88835[(27)] = inst_88772);

return statearr_88835;
})();
var statearr_88836_88927 = state_88797__$1;
(statearr_88836_88927[(2)] = null);

(statearr_88836_88927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (43))){
var state_88797__$1 = state_88797;
var statearr_88837_88928 = state_88797__$1;
(statearr_88837_88928[(2)] = null);

(statearr_88837_88928[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (29))){
var inst_88781 = (state_88797[(2)]);
var state_88797__$1 = state_88797;
var statearr_88838_88930 = state_88797__$1;
(statearr_88838_88930[(2)] = inst_88781);

(statearr_88838_88930[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (44))){
var inst_88790 = (state_88797[(2)]);
var state_88797__$1 = (function (){var statearr_88839 = state_88797;
(statearr_88839[(28)] = inst_88790);

return statearr_88839;
})();
var statearr_88840_88931 = state_88797__$1;
(statearr_88840_88931[(2)] = null);

(statearr_88840_88931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (6))){
var inst_88729 = (state_88797[(29)]);
var inst_88728 = cljs.core.deref.call(null,cs);
var inst_88729__$1 = cljs.core.keys.call(null,inst_88728);
var inst_88730 = cljs.core.count.call(null,inst_88729__$1);
var inst_88731 = cljs.core.reset_BANG_.call(null,dctr,inst_88730);
var inst_88736 = cljs.core.seq.call(null,inst_88729__$1);
var inst_88737 = inst_88736;
var inst_88738 = null;
var inst_88739 = (0);
var inst_88740 = (0);
var state_88797__$1 = (function (){var statearr_88842 = state_88797;
(statearr_88842[(29)] = inst_88729__$1);

(statearr_88842[(20)] = inst_88737);

(statearr_88842[(21)] = inst_88739);

(statearr_88842[(30)] = inst_88731);

(statearr_88842[(9)] = inst_88738);

(statearr_88842[(10)] = inst_88740);

return statearr_88842;
})();
var statearr_88843_88933 = state_88797__$1;
(statearr_88843_88933[(2)] = null);

(statearr_88843_88933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (28))){
var inst_88737 = (state_88797[(20)]);
var inst_88756 = (state_88797[(25)]);
var inst_88756__$1 = cljs.core.seq.call(null,inst_88737);
var state_88797__$1 = (function (){var statearr_88844 = state_88797;
(statearr_88844[(25)] = inst_88756__$1);

return statearr_88844;
})();
if(inst_88756__$1){
var statearr_88845_88934 = state_88797__$1;
(statearr_88845_88934[(1)] = (33));

} else {
var statearr_88846_88935 = state_88797__$1;
(statearr_88846_88935[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (25))){
var inst_88739 = (state_88797[(21)]);
var inst_88740 = (state_88797[(10)]);
var inst_88742 = (inst_88740 < inst_88739);
var inst_88743 = inst_88742;
var state_88797__$1 = state_88797;
if(cljs.core.truth_(inst_88743)){
var statearr_88847_88937 = state_88797__$1;
(statearr_88847_88937[(1)] = (27));

} else {
var statearr_88848_88938 = state_88797__$1;
(statearr_88848_88938[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (34))){
var state_88797__$1 = state_88797;
var statearr_88849_88939 = state_88797__$1;
(statearr_88849_88939[(2)] = null);

(statearr_88849_88939[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (17))){
var state_88797__$1 = state_88797;
var statearr_88850_88940 = state_88797__$1;
(statearr_88850_88940[(2)] = null);

(statearr_88850_88940[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (3))){
var inst_88795 = (state_88797[(2)]);
var state_88797__$1 = state_88797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88797__$1,inst_88795);
} else {
if((state_val_88798 === (12))){
var inst_88724 = (state_88797[(2)]);
var state_88797__$1 = state_88797;
var statearr_88851_88941 = state_88797__$1;
(statearr_88851_88941[(2)] = inst_88724);

(statearr_88851_88941[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (2))){
var state_88797__$1 = state_88797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88797__$1,(4),ch);
} else {
if((state_val_88798 === (23))){
var state_88797__$1 = state_88797;
var statearr_88852_88943 = state_88797__$1;
(statearr_88852_88943[(2)] = null);

(statearr_88852_88943[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (35))){
var inst_88779 = (state_88797[(2)]);
var state_88797__$1 = state_88797;
var statearr_88853_88944 = state_88797__$1;
(statearr_88853_88944[(2)] = inst_88779);

(statearr_88853_88944[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (19))){
var inst_88698 = (state_88797[(7)]);
var inst_88702 = cljs.core.chunk_first.call(null,inst_88698);
var inst_88703 = cljs.core.chunk_rest.call(null,inst_88698);
var inst_88704 = cljs.core.count.call(null,inst_88702);
var inst_88675 = inst_88703;
var inst_88676 = inst_88702;
var inst_88677 = inst_88704;
var inst_88678 = (0);
var state_88797__$1 = (function (){var statearr_88855 = state_88797;
(statearr_88855[(13)] = inst_88678);

(statearr_88855[(14)] = inst_88675);

(statearr_88855[(15)] = inst_88676);

(statearr_88855[(16)] = inst_88677);

return statearr_88855;
})();
var statearr_88856_88945 = state_88797__$1;
(statearr_88856_88945[(2)] = null);

(statearr_88856_88945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (11))){
var inst_88698 = (state_88797[(7)]);
var inst_88675 = (state_88797[(14)]);
var inst_88698__$1 = cljs.core.seq.call(null,inst_88675);
var state_88797__$1 = (function (){var statearr_88857 = state_88797;
(statearr_88857[(7)] = inst_88698__$1);

return statearr_88857;
})();
if(inst_88698__$1){
var statearr_88858_88946 = state_88797__$1;
(statearr_88858_88946[(1)] = (16));

} else {
var statearr_88859_88947 = state_88797__$1;
(statearr_88859_88947[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (9))){
var inst_88726 = (state_88797[(2)]);
var state_88797__$1 = state_88797;
var statearr_88860_88948 = state_88797__$1;
(statearr_88860_88948[(2)] = inst_88726);

(statearr_88860_88948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (5))){
var inst_88673 = cljs.core.deref.call(null,cs);
var inst_88674 = cljs.core.seq.call(null,inst_88673);
var inst_88675 = inst_88674;
var inst_88676 = null;
var inst_88677 = (0);
var inst_88678 = (0);
var state_88797__$1 = (function (){var statearr_88861 = state_88797;
(statearr_88861[(13)] = inst_88678);

(statearr_88861[(14)] = inst_88675);

(statearr_88861[(15)] = inst_88676);

(statearr_88861[(16)] = inst_88677);

return statearr_88861;
})();
var statearr_88862_88949 = state_88797__$1;
(statearr_88862_88949[(2)] = null);

(statearr_88862_88949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (14))){
var state_88797__$1 = state_88797;
var statearr_88863_88950 = state_88797__$1;
(statearr_88863_88950[(2)] = null);

(statearr_88863_88950[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (45))){
var inst_88787 = (state_88797[(2)]);
var state_88797__$1 = state_88797;
var statearr_88864_88951 = state_88797__$1;
(statearr_88864_88951[(2)] = inst_88787);

(statearr_88864_88951[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (26))){
var inst_88729 = (state_88797[(29)]);
var inst_88783 = (state_88797[(2)]);
var inst_88784 = cljs.core.seq.call(null,inst_88729);
var state_88797__$1 = (function (){var statearr_88866 = state_88797;
(statearr_88866[(31)] = inst_88783);

return statearr_88866;
})();
if(inst_88784){
var statearr_88867_88952 = state_88797__$1;
(statearr_88867_88952[(1)] = (42));

} else {
var statearr_88868_88953 = state_88797__$1;
(statearr_88868_88953[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (16))){
var inst_88698 = (state_88797[(7)]);
var inst_88700 = cljs.core.chunked_seq_QMARK_.call(null,inst_88698);
var state_88797__$1 = state_88797;
if(inst_88700){
var statearr_88869_88954 = state_88797__$1;
(statearr_88869_88954[(1)] = (19));

} else {
var statearr_88870_88955 = state_88797__$1;
(statearr_88870_88955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (38))){
var inst_88776 = (state_88797[(2)]);
var state_88797__$1 = state_88797;
var statearr_88871_88956 = state_88797__$1;
(statearr_88871_88956[(2)] = inst_88776);

(statearr_88871_88956[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (30))){
var state_88797__$1 = state_88797;
var statearr_88872_88957 = state_88797__$1;
(statearr_88872_88957[(2)] = null);

(statearr_88872_88957[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (10))){
var inst_88678 = (state_88797[(13)]);
var inst_88676 = (state_88797[(15)]);
var inst_88687 = cljs.core._nth.call(null,inst_88676,inst_88678);
var inst_88688 = cljs.core.nth.call(null,inst_88687,(0),null);
var inst_88689 = cljs.core.nth.call(null,inst_88687,(1),null);
var state_88797__$1 = (function (){var statearr_88873 = state_88797;
(statearr_88873[(26)] = inst_88688);

return statearr_88873;
})();
if(cljs.core.truth_(inst_88689)){
var statearr_88874_88958 = state_88797__$1;
(statearr_88874_88958[(1)] = (13));

} else {
var statearr_88875_88959 = state_88797__$1;
(statearr_88875_88959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (18))){
var inst_88722 = (state_88797[(2)]);
var state_88797__$1 = state_88797;
var statearr_88876_88960 = state_88797__$1;
(statearr_88876_88960[(2)] = inst_88722);

(statearr_88876_88960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (42))){
var state_88797__$1 = state_88797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88797__$1,(45),dchan);
} else {
if((state_val_88798 === (37))){
var inst_88765 = (state_88797[(23)]);
var inst_88666 = (state_88797[(12)]);
var inst_88756 = (state_88797[(25)]);
var inst_88765__$1 = cljs.core.first.call(null,inst_88756);
var inst_88766 = cljs.core.async.put_BANG_.call(null,inst_88765__$1,inst_88666,done);
var state_88797__$1 = (function (){var statearr_88877 = state_88797;
(statearr_88877[(23)] = inst_88765__$1);

return statearr_88877;
})();
if(cljs.core.truth_(inst_88766)){
var statearr_88878_88961 = state_88797__$1;
(statearr_88878_88961[(1)] = (39));

} else {
var statearr_88879_88962 = state_88797__$1;
(statearr_88879_88962[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88798 === (8))){
var inst_88678 = (state_88797[(13)]);
var inst_88677 = (state_88797[(16)]);
var inst_88680 = (inst_88678 < inst_88677);
var inst_88682 = inst_88680;
var state_88797__$1 = state_88797;
if(cljs.core.truth_(inst_88682)){
var statearr_88880_88963 = state_88797__$1;
(statearr_88880_88963[(1)] = (10));

} else {
var statearr_88881_88964 = state_88797__$1;
(statearr_88881_88964[(1)] = (11));

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
});})(c__41196__auto___88889,cs,m,dchan,dctr,done))
;
return ((function (switch__40432__auto__,c__41196__auto___88889,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40433__auto__ = null;
var cljs$core$async$mult_$_state_machine__40433__auto____0 = (function (){
var statearr_88885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88885[(0)] = cljs$core$async$mult_$_state_machine__40433__auto__);

(statearr_88885[(1)] = (1));

return statearr_88885;
});
var cljs$core$async$mult_$_state_machine__40433__auto____1 = (function (state_88797){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_88797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e88886){if((e88886 instanceof Object)){
var ex__40436__auto__ = e88886;
var statearr_88887_88968 = state_88797;
(statearr_88887_88968[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88969 = state_88797;
state_88797 = G__88969;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40433__auto__ = function(state_88797){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40433__auto____1.call(this,state_88797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40433__auto____0;
cljs$core$async$mult_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40433__auto____1;
return cljs$core$async$mult_$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___88889,cs,m,dchan,dctr,done))
})();
var state__41198__auto__ = (function (){var statearr_88888 = f__41197__auto__.call(null);
(statearr_88888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___88889);

return statearr_88888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___88889,cs,m,dchan,dctr,done))
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
var args88976 = [];
var len__36491__auto___88979 = arguments.length;
var i__36492__auto___88980 = (0);
while(true){
if((i__36492__auto___88980 < len__36491__auto___88979)){
args88976.push((arguments[i__36492__auto___88980]));

var G__88981 = (i__36492__auto___88980 + (1));
i__36492__auto___88980 = G__88981;
continue;
} else {
}
break;
}

var G__88978 = args88976.length;
switch (G__88978) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args88976.length)].join('')));

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
var len__36491__auto___89003 = arguments.length;
var i__36492__auto___89004 = (0);
while(true){
if((i__36492__auto___89004 < len__36491__auto___89003)){
args__36498__auto__.push((arguments[i__36492__auto___89004]));

var G__89005 = (i__36492__auto___89004 + (1));
i__36492__auto___89004 = G__89005;
continue;
} else {
}
break;
}

var argseq__36499__auto__ = ((((3) < args__36498__auto__.length))?(new cljs.core.IndexedSeq(args__36498__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36499__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__88997){
var map__88998 = p__88997;
var map__88998__$1 = ((((!((map__88998 == null)))?((((map__88998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__88998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88998):map__88998);
var opts = map__88998__$1;
var statearr_89000_89007 = state;
(statearr_89000_89007[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__88998,map__88998__$1,opts){
return (function (val){
var statearr_89001_89008 = state;
(statearr_89001_89008[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__88998,map__88998__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_89002_89009 = state;
(statearr_89002_89009[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq88993){
var G__88994 = cljs.core.first.call(null,seq88993);
var seq88993__$1 = cljs.core.next.call(null,seq88993);
var G__88995 = cljs.core.first.call(null,seq88993__$1);
var seq88993__$2 = cljs.core.next.call(null,seq88993__$1);
var G__88996 = cljs.core.first.call(null,seq88993__$2);
var seq88993__$3 = cljs.core.next.call(null,seq88993__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__88994,G__88995,G__88996,seq88993__$3);
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
if(typeof cljs.core.async.t_cljs$core$async89183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async89183 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta89184){
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
this.meta89184 = meta89184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async89183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_89185,meta89184__$1){
var self__ = this;
var _89185__$1 = this;
return (new cljs.core.async.t_cljs$core$async89183(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta89184__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_89185){
var self__ = this;
var _89185__$1 = this;
return self__.meta89184;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89183.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async89183.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89183.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async89183.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89183.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89183.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89183.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89183.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async89183.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta89184","meta89184",81117107,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async89183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async89183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async89183";

cljs.core.async.t_cljs$core$async89183.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async89183");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async89183 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async89183(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta89184){
return (new cljs.core.async.t_cljs$core$async89183(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta89184));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async89183(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41196__auto___89358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___89358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___89358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_89291){
var state_val_89292 = (state_89291[(1)]);
if((state_val_89292 === (7))){
var inst_89206 = (state_89291[(2)]);
var state_89291__$1 = state_89291;
var statearr_89293_89359 = state_89291__$1;
(statearr_89293_89359[(2)] = inst_89206);

(statearr_89293_89359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (20))){
var inst_89218 = (state_89291[(7)]);
var state_89291__$1 = state_89291;
var statearr_89294_89360 = state_89291__$1;
(statearr_89294_89360[(2)] = inst_89218);

(statearr_89294_89360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (27))){
var state_89291__$1 = state_89291;
var statearr_89295_89361 = state_89291__$1;
(statearr_89295_89361[(2)] = null);

(statearr_89295_89361[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (1))){
var inst_89194 = (state_89291[(8)]);
var inst_89194__$1 = calc_state.call(null);
var inst_89196 = (inst_89194__$1 == null);
var inst_89197 = cljs.core.not.call(null,inst_89196);
var state_89291__$1 = (function (){var statearr_89296 = state_89291;
(statearr_89296[(8)] = inst_89194__$1);

return statearr_89296;
})();
if(inst_89197){
var statearr_89297_89362 = state_89291__$1;
(statearr_89297_89362[(1)] = (2));

} else {
var statearr_89298_89363 = state_89291__$1;
(statearr_89298_89363[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (24))){
var inst_89248 = (state_89291[(9)]);
var inst_89241 = (state_89291[(10)]);
var inst_89265 = (state_89291[(11)]);
var inst_89265__$1 = inst_89241.call(null,inst_89248);
var state_89291__$1 = (function (){var statearr_89299 = state_89291;
(statearr_89299[(11)] = inst_89265__$1);

return statearr_89299;
})();
if(cljs.core.truth_(inst_89265__$1)){
var statearr_89300_89364 = state_89291__$1;
(statearr_89300_89364[(1)] = (29));

} else {
var statearr_89301_89365 = state_89291__$1;
(statearr_89301_89365[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (4))){
var inst_89209 = (state_89291[(2)]);
var state_89291__$1 = state_89291;
if(cljs.core.truth_(inst_89209)){
var statearr_89302_89366 = state_89291__$1;
(statearr_89302_89366[(1)] = (8));

} else {
var statearr_89303_89367 = state_89291__$1;
(statearr_89303_89367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (15))){
var inst_89235 = (state_89291[(2)]);
var state_89291__$1 = state_89291;
if(cljs.core.truth_(inst_89235)){
var statearr_89304_89370 = state_89291__$1;
(statearr_89304_89370[(1)] = (19));

} else {
var statearr_89305_89371 = state_89291__$1;
(statearr_89305_89371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (21))){
var inst_89240 = (state_89291[(12)]);
var inst_89240__$1 = (state_89291[(2)]);
var inst_89241 = cljs.core.get.call(null,inst_89240__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_89242 = cljs.core.get.call(null,inst_89240__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_89243 = cljs.core.get.call(null,inst_89240__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_89291__$1 = (function (){var statearr_89306 = state_89291;
(statearr_89306[(12)] = inst_89240__$1);

(statearr_89306[(13)] = inst_89242);

(statearr_89306[(10)] = inst_89241);

return statearr_89306;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_89291__$1,(22),inst_89243);
} else {
if((state_val_89292 === (31))){
var inst_89273 = (state_89291[(2)]);
var state_89291__$1 = state_89291;
if(cljs.core.truth_(inst_89273)){
var statearr_89307_89374 = state_89291__$1;
(statearr_89307_89374[(1)] = (32));

} else {
var statearr_89308_89376 = state_89291__$1;
(statearr_89308_89376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (32))){
var inst_89247 = (state_89291[(14)]);
var state_89291__$1 = state_89291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89291__$1,(35),out,inst_89247);
} else {
if((state_val_89292 === (33))){
var inst_89240 = (state_89291[(12)]);
var inst_89218 = inst_89240;
var state_89291__$1 = (function (){var statearr_89309 = state_89291;
(statearr_89309[(7)] = inst_89218);

return statearr_89309;
})();
var statearr_89310_89377 = state_89291__$1;
(statearr_89310_89377[(2)] = null);

(statearr_89310_89377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (13))){
var inst_89218 = (state_89291[(7)]);
var inst_89225 = inst_89218.cljs$lang$protocol_mask$partition0$;
var inst_89226 = (inst_89225 & (64));
var inst_89227 = inst_89218.cljs$core$ISeq$;
var inst_89228 = (inst_89226) || (inst_89227);
var state_89291__$1 = state_89291;
if(cljs.core.truth_(inst_89228)){
var statearr_89311_89380 = state_89291__$1;
(statearr_89311_89380[(1)] = (16));

} else {
var statearr_89312_89381 = state_89291__$1;
(statearr_89312_89381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (22))){
var inst_89247 = (state_89291[(14)]);
var inst_89248 = (state_89291[(9)]);
var inst_89246 = (state_89291[(2)]);
var inst_89247__$1 = cljs.core.nth.call(null,inst_89246,(0),null);
var inst_89248__$1 = cljs.core.nth.call(null,inst_89246,(1),null);
var inst_89252 = (inst_89247__$1 == null);
var inst_89253 = cljs.core._EQ_.call(null,inst_89248__$1,change);
var inst_89254 = (inst_89252) || (inst_89253);
var state_89291__$1 = (function (){var statearr_89313 = state_89291;
(statearr_89313[(14)] = inst_89247__$1);

(statearr_89313[(9)] = inst_89248__$1);

return statearr_89313;
})();
if(cljs.core.truth_(inst_89254)){
var statearr_89314_89385 = state_89291__$1;
(statearr_89314_89385[(1)] = (23));

} else {
var statearr_89315_89386 = state_89291__$1;
(statearr_89315_89386[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (36))){
var inst_89240 = (state_89291[(12)]);
var inst_89218 = inst_89240;
var state_89291__$1 = (function (){var statearr_89316 = state_89291;
(statearr_89316[(7)] = inst_89218);

return statearr_89316;
})();
var statearr_89317_89387 = state_89291__$1;
(statearr_89317_89387[(2)] = null);

(statearr_89317_89387[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (29))){
var inst_89265 = (state_89291[(11)]);
var state_89291__$1 = state_89291;
var statearr_89318_89389 = state_89291__$1;
(statearr_89318_89389[(2)] = inst_89265);

(statearr_89318_89389[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (6))){
var state_89291__$1 = state_89291;
var statearr_89319_89391 = state_89291__$1;
(statearr_89319_89391[(2)] = false);

(statearr_89319_89391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (28))){
var inst_89261 = (state_89291[(2)]);
var inst_89262 = calc_state.call(null);
var inst_89218 = inst_89262;
var state_89291__$1 = (function (){var statearr_89320 = state_89291;
(statearr_89320[(7)] = inst_89218);

(statearr_89320[(15)] = inst_89261);

return statearr_89320;
})();
var statearr_89321_89393 = state_89291__$1;
(statearr_89321_89393[(2)] = null);

(statearr_89321_89393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (25))){
var inst_89287 = (state_89291[(2)]);
var state_89291__$1 = state_89291;
var statearr_89322_89395 = state_89291__$1;
(statearr_89322_89395[(2)] = inst_89287);

(statearr_89322_89395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (34))){
var inst_89285 = (state_89291[(2)]);
var state_89291__$1 = state_89291;
var statearr_89323_89397 = state_89291__$1;
(statearr_89323_89397[(2)] = inst_89285);

(statearr_89323_89397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (17))){
var state_89291__$1 = state_89291;
var statearr_89324_89399 = state_89291__$1;
(statearr_89324_89399[(2)] = false);

(statearr_89324_89399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (3))){
var state_89291__$1 = state_89291;
var statearr_89325_89400 = state_89291__$1;
(statearr_89325_89400[(2)] = false);

(statearr_89325_89400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (12))){
var inst_89289 = (state_89291[(2)]);
var state_89291__$1 = state_89291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89291__$1,inst_89289);
} else {
if((state_val_89292 === (2))){
var inst_89194 = (state_89291[(8)]);
var inst_89199 = inst_89194.cljs$lang$protocol_mask$partition0$;
var inst_89200 = (inst_89199 & (64));
var inst_89201 = inst_89194.cljs$core$ISeq$;
var inst_89202 = (inst_89200) || (inst_89201);
var state_89291__$1 = state_89291;
if(cljs.core.truth_(inst_89202)){
var statearr_89327_89403 = state_89291__$1;
(statearr_89327_89403[(1)] = (5));

} else {
var statearr_89328_89404 = state_89291__$1;
(statearr_89328_89404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (23))){
var inst_89247 = (state_89291[(14)]);
var inst_89256 = (inst_89247 == null);
var state_89291__$1 = state_89291;
if(cljs.core.truth_(inst_89256)){
var statearr_89329_89405 = state_89291__$1;
(statearr_89329_89405[(1)] = (26));

} else {
var statearr_89330_89406 = state_89291__$1;
(statearr_89330_89406[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (35))){
var inst_89276 = (state_89291[(2)]);
var state_89291__$1 = state_89291;
if(cljs.core.truth_(inst_89276)){
var statearr_89331_89409 = state_89291__$1;
(statearr_89331_89409[(1)] = (36));

} else {
var statearr_89332_89410 = state_89291__$1;
(statearr_89332_89410[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (19))){
var inst_89218 = (state_89291[(7)]);
var inst_89237 = cljs.core.apply.call(null,cljs.core.hash_map,inst_89218);
var state_89291__$1 = state_89291;
var statearr_89333_89411 = state_89291__$1;
(statearr_89333_89411[(2)] = inst_89237);

(statearr_89333_89411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (11))){
var inst_89218 = (state_89291[(7)]);
var inst_89222 = (inst_89218 == null);
var inst_89223 = cljs.core.not.call(null,inst_89222);
var state_89291__$1 = state_89291;
if(inst_89223){
var statearr_89334_89416 = state_89291__$1;
(statearr_89334_89416[(1)] = (13));

} else {
var statearr_89335_89418 = state_89291__$1;
(statearr_89335_89418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (9))){
var inst_89194 = (state_89291[(8)]);
var state_89291__$1 = state_89291;
var statearr_89337_89420 = state_89291__$1;
(statearr_89337_89420[(2)] = inst_89194);

(statearr_89337_89420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (5))){
var state_89291__$1 = state_89291;
var statearr_89338_89421 = state_89291__$1;
(statearr_89338_89421[(2)] = true);

(statearr_89338_89421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (14))){
var state_89291__$1 = state_89291;
var statearr_89339_89423 = state_89291__$1;
(statearr_89339_89423[(2)] = false);

(statearr_89339_89423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (26))){
var inst_89248 = (state_89291[(9)]);
var inst_89258 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_89248);
var state_89291__$1 = state_89291;
var statearr_89340_89425 = state_89291__$1;
(statearr_89340_89425[(2)] = inst_89258);

(statearr_89340_89425[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (16))){
var state_89291__$1 = state_89291;
var statearr_89341_89433 = state_89291__$1;
(statearr_89341_89433[(2)] = true);

(statearr_89341_89433[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (38))){
var inst_89281 = (state_89291[(2)]);
var state_89291__$1 = state_89291;
var statearr_89342_89435 = state_89291__$1;
(statearr_89342_89435[(2)] = inst_89281);

(statearr_89342_89435[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (30))){
var inst_89248 = (state_89291[(9)]);
var inst_89242 = (state_89291[(13)]);
var inst_89241 = (state_89291[(10)]);
var inst_89268 = cljs.core.empty_QMARK_.call(null,inst_89241);
var inst_89269 = inst_89242.call(null,inst_89248);
var inst_89270 = cljs.core.not.call(null,inst_89269);
var inst_89271 = (inst_89268) && (inst_89270);
var state_89291__$1 = state_89291;
var statearr_89343_89439 = state_89291__$1;
(statearr_89343_89439[(2)] = inst_89271);

(statearr_89343_89439[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (10))){
var inst_89194 = (state_89291[(8)]);
var inst_89214 = (state_89291[(2)]);
var inst_89215 = cljs.core.get.call(null,inst_89214,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_89216 = cljs.core.get.call(null,inst_89214,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_89217 = cljs.core.get.call(null,inst_89214,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_89218 = inst_89194;
var state_89291__$1 = (function (){var statearr_89344 = state_89291;
(statearr_89344[(7)] = inst_89218);

(statearr_89344[(16)] = inst_89216);

(statearr_89344[(17)] = inst_89217);

(statearr_89344[(18)] = inst_89215);

return statearr_89344;
})();
var statearr_89345_89443 = state_89291__$1;
(statearr_89345_89443[(2)] = null);

(statearr_89345_89443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (18))){
var inst_89232 = (state_89291[(2)]);
var state_89291__$1 = state_89291;
var statearr_89346_89445 = state_89291__$1;
(statearr_89346_89445[(2)] = inst_89232);

(statearr_89346_89445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (37))){
var state_89291__$1 = state_89291;
var statearr_89347_89447 = state_89291__$1;
(statearr_89347_89447[(2)] = null);

(statearr_89347_89447[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89292 === (8))){
var inst_89194 = (state_89291[(8)]);
var inst_89211 = cljs.core.apply.call(null,cljs.core.hash_map,inst_89194);
var state_89291__$1 = state_89291;
var statearr_89348_89455 = state_89291__$1;
(statearr_89348_89455[(2)] = inst_89211);

(statearr_89348_89455[(1)] = (10));


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
});})(c__41196__auto___89358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40432__auto__,c__41196__auto___89358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40433__auto__ = null;
var cljs$core$async$mix_$_state_machine__40433__auto____0 = (function (){
var statearr_89353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89353[(0)] = cljs$core$async$mix_$_state_machine__40433__auto__);

(statearr_89353[(1)] = (1));

return statearr_89353;
});
var cljs$core$async$mix_$_state_machine__40433__auto____1 = (function (state_89291){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_89291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e89354){if((e89354 instanceof Object)){
var ex__40436__auto__ = e89354;
var statearr_89355_89457 = state_89291;
(statearr_89355_89457[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89458 = state_89291;
state_89291 = G__89458;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40433__auto__ = function(state_89291){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40433__auto____1.call(this,state_89291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40433__auto____0;
cljs$core$async$mix_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40433__auto____1;
return cljs$core$async$mix_$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___89358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__41198__auto__ = (function (){var statearr_89356 = f__41197__auto__.call(null);
(statearr_89356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___89358);

return statearr_89356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___89358,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args89478 = [];
var len__36491__auto___89494 = arguments.length;
var i__36492__auto___89495 = (0);
while(true){
if((i__36492__auto___89495 < len__36491__auto___89494)){
args89478.push((arguments[i__36492__auto___89495]));

var G__89496 = (i__36492__auto___89495 + (1));
i__36492__auto___89495 = G__89496;
continue;
} else {
}
break;
}

var G__89482 = args89478.length;
switch (G__89482) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89478.length)].join('')));

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
var args89506 = [];
var len__36491__auto___89676 = arguments.length;
var i__36492__auto___89678 = (0);
while(true){
if((i__36492__auto___89678 < len__36491__auto___89676)){
args89506.push((arguments[i__36492__auto___89678]));

var G__89680 = (i__36492__auto___89678 + (1));
i__36492__auto___89678 = G__89680;
continue;
} else {
}
break;
}

var G__89515 = args89506.length;
switch (G__89515) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89506.length)].join('')));

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
return (function (p1__89504_SHARP_){
if(cljs.core.truth_(p1__89504_SHARP_.call(null,topic))){
return p1__89504_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__89504_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35422__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async89518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async89518 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta89519){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta89519 = meta89519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async89518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_89520,meta89519__$1){
var self__ = this;
var _89520__$1 = this;
return (new cljs.core.async.t_cljs$core$async89518(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta89519__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_89520){
var self__ = this;
var _89520__$1 = this;
return self__.meta89519;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89518.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async89518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89518.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async89518.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89518.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async89518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89518.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89518.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta89519","meta89519",1762445554,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async89518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async89518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async89518";

cljs.core.async.t_cljs$core$async89518.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async89518");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async89518 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async89518(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta89519){
return (new cljs.core.async.t_cljs$core$async89518(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta89519));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async89518(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41196__auto___89695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___89695,mults,ensure_mult,p){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___89695,mults,ensure_mult,p){
return (function (state_89607){
var state_val_89608 = (state_89607[(1)]);
if((state_val_89608 === (7))){
var inst_89603 = (state_89607[(2)]);
var state_89607__$1 = state_89607;
var statearr_89609_89696 = state_89607__$1;
(statearr_89609_89696[(2)] = inst_89603);

(statearr_89609_89696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (20))){
var state_89607__$1 = state_89607;
var statearr_89610_89697 = state_89607__$1;
(statearr_89610_89697[(2)] = null);

(statearr_89610_89697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (1))){
var state_89607__$1 = state_89607;
var statearr_89611_89698 = state_89607__$1;
(statearr_89611_89698[(2)] = null);

(statearr_89611_89698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (24))){
var inst_89585 = (state_89607[(7)]);
var inst_89595 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_89585);
var state_89607__$1 = state_89607;
var statearr_89612_89700 = state_89607__$1;
(statearr_89612_89700[(2)] = inst_89595);

(statearr_89612_89700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (4))){
var inst_89526 = (state_89607[(8)]);
var inst_89526__$1 = (state_89607[(2)]);
var inst_89528 = (inst_89526__$1 == null);
var state_89607__$1 = (function (){var statearr_89613 = state_89607;
(statearr_89613[(8)] = inst_89526__$1);

return statearr_89613;
})();
if(cljs.core.truth_(inst_89528)){
var statearr_89614_89701 = state_89607__$1;
(statearr_89614_89701[(1)] = (5));

} else {
var statearr_89615_89702 = state_89607__$1;
(statearr_89615_89702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (15))){
var inst_89579 = (state_89607[(2)]);
var state_89607__$1 = state_89607;
var statearr_89616_89703 = state_89607__$1;
(statearr_89616_89703[(2)] = inst_89579);

(statearr_89616_89703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (21))){
var inst_89600 = (state_89607[(2)]);
var state_89607__$1 = (function (){var statearr_89618 = state_89607;
(statearr_89618[(9)] = inst_89600);

return statearr_89618;
})();
var statearr_89619_89704 = state_89607__$1;
(statearr_89619_89704[(2)] = null);

(statearr_89619_89704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (13))){
var inst_89554 = (state_89607[(10)]);
var inst_89556 = cljs.core.chunked_seq_QMARK_.call(null,inst_89554);
var state_89607__$1 = state_89607;
if(inst_89556){
var statearr_89620_89705 = state_89607__$1;
(statearr_89620_89705[(1)] = (16));

} else {
var statearr_89621_89706 = state_89607__$1;
(statearr_89621_89706[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (22))){
var inst_89591 = (state_89607[(2)]);
var state_89607__$1 = state_89607;
if(cljs.core.truth_(inst_89591)){
var statearr_89622_89707 = state_89607__$1;
(statearr_89622_89707[(1)] = (23));

} else {
var statearr_89623_89708 = state_89607__$1;
(statearr_89623_89708[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (6))){
var inst_89585 = (state_89607[(7)]);
var inst_89587 = (state_89607[(11)]);
var inst_89526 = (state_89607[(8)]);
var inst_89585__$1 = topic_fn.call(null,inst_89526);
var inst_89586 = cljs.core.deref.call(null,mults);
var inst_89587__$1 = cljs.core.get.call(null,inst_89586,inst_89585__$1);
var state_89607__$1 = (function (){var statearr_89624 = state_89607;
(statearr_89624[(7)] = inst_89585__$1);

(statearr_89624[(11)] = inst_89587__$1);

return statearr_89624;
})();
if(cljs.core.truth_(inst_89587__$1)){
var statearr_89625_89709 = state_89607__$1;
(statearr_89625_89709[(1)] = (19));

} else {
var statearr_89626_89710 = state_89607__$1;
(statearr_89626_89710[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (25))){
var inst_89597 = (state_89607[(2)]);
var state_89607__$1 = state_89607;
var statearr_89627_89711 = state_89607__$1;
(statearr_89627_89711[(2)] = inst_89597);

(statearr_89627_89711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (17))){
var inst_89554 = (state_89607[(10)]);
var inst_89564 = cljs.core.first.call(null,inst_89554);
var inst_89565 = cljs.core.async.muxch_STAR_.call(null,inst_89564);
var inst_89566 = cljs.core.async.close_BANG_.call(null,inst_89565);
var inst_89567 = cljs.core.next.call(null,inst_89554);
var inst_89538 = inst_89567;
var inst_89539 = null;
var inst_89540 = (0);
var inst_89541 = (0);
var state_89607__$1 = (function (){var statearr_89628 = state_89607;
(statearr_89628[(12)] = inst_89538);

(statearr_89628[(13)] = inst_89541);

(statearr_89628[(14)] = inst_89566);

(statearr_89628[(15)] = inst_89540);

(statearr_89628[(16)] = inst_89539);

return statearr_89628;
})();
var statearr_89629_89712 = state_89607__$1;
(statearr_89629_89712[(2)] = null);

(statearr_89629_89712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (3))){
var inst_89605 = (state_89607[(2)]);
var state_89607__$1 = state_89607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89607__$1,inst_89605);
} else {
if((state_val_89608 === (12))){
var inst_89581 = (state_89607[(2)]);
var state_89607__$1 = state_89607;
var statearr_89630_89713 = state_89607__$1;
(statearr_89630_89713[(2)] = inst_89581);

(statearr_89630_89713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (2))){
var state_89607__$1 = state_89607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89607__$1,(4),ch);
} else {
if((state_val_89608 === (23))){
var state_89607__$1 = state_89607;
var statearr_89635_89715 = state_89607__$1;
(statearr_89635_89715[(2)] = null);

(statearr_89635_89715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (19))){
var inst_89587 = (state_89607[(11)]);
var inst_89526 = (state_89607[(8)]);
var inst_89589 = cljs.core.async.muxch_STAR_.call(null,inst_89587);
var state_89607__$1 = state_89607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89607__$1,(22),inst_89589,inst_89526);
} else {
if((state_val_89608 === (11))){
var inst_89554 = (state_89607[(10)]);
var inst_89538 = (state_89607[(12)]);
var inst_89554__$1 = cljs.core.seq.call(null,inst_89538);
var state_89607__$1 = (function (){var statearr_89638 = state_89607;
(statearr_89638[(10)] = inst_89554__$1);

return statearr_89638;
})();
if(inst_89554__$1){
var statearr_89639_89717 = state_89607__$1;
(statearr_89639_89717[(1)] = (13));

} else {
var statearr_89640_89718 = state_89607__$1;
(statearr_89640_89718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (9))){
var inst_89583 = (state_89607[(2)]);
var state_89607__$1 = state_89607;
var statearr_89641_89719 = state_89607__$1;
(statearr_89641_89719[(2)] = inst_89583);

(statearr_89641_89719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (5))){
var inst_89534 = cljs.core.deref.call(null,mults);
var inst_89535 = cljs.core.vals.call(null,inst_89534);
var inst_89536 = cljs.core.seq.call(null,inst_89535);
var inst_89538 = inst_89536;
var inst_89539 = null;
var inst_89540 = (0);
var inst_89541 = (0);
var state_89607__$1 = (function (){var statearr_89643 = state_89607;
(statearr_89643[(12)] = inst_89538);

(statearr_89643[(13)] = inst_89541);

(statearr_89643[(15)] = inst_89540);

(statearr_89643[(16)] = inst_89539);

return statearr_89643;
})();
var statearr_89644_89720 = state_89607__$1;
(statearr_89644_89720[(2)] = null);

(statearr_89644_89720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (14))){
var state_89607__$1 = state_89607;
var statearr_89649_89721 = state_89607__$1;
(statearr_89649_89721[(2)] = null);

(statearr_89649_89721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (16))){
var inst_89554 = (state_89607[(10)]);
var inst_89558 = cljs.core.chunk_first.call(null,inst_89554);
var inst_89559 = cljs.core.chunk_rest.call(null,inst_89554);
var inst_89560 = cljs.core.count.call(null,inst_89558);
var inst_89538 = inst_89559;
var inst_89539 = inst_89558;
var inst_89540 = inst_89560;
var inst_89541 = (0);
var state_89607__$1 = (function (){var statearr_89650 = state_89607;
(statearr_89650[(12)] = inst_89538);

(statearr_89650[(13)] = inst_89541);

(statearr_89650[(15)] = inst_89540);

(statearr_89650[(16)] = inst_89539);

return statearr_89650;
})();
var statearr_89651_89723 = state_89607__$1;
(statearr_89651_89723[(2)] = null);

(statearr_89651_89723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (10))){
var inst_89538 = (state_89607[(12)]);
var inst_89541 = (state_89607[(13)]);
var inst_89540 = (state_89607[(15)]);
var inst_89539 = (state_89607[(16)]);
var inst_89546 = cljs.core._nth.call(null,inst_89539,inst_89541);
var inst_89548 = cljs.core.async.muxch_STAR_.call(null,inst_89546);
var inst_89549 = cljs.core.async.close_BANG_.call(null,inst_89548);
var inst_89550 = (inst_89541 + (1));
var tmp89646 = inst_89538;
var tmp89647 = inst_89540;
var tmp89648 = inst_89539;
var inst_89538__$1 = tmp89646;
var inst_89539__$1 = tmp89648;
var inst_89540__$1 = tmp89647;
var inst_89541__$1 = inst_89550;
var state_89607__$1 = (function (){var statearr_89659 = state_89607;
(statearr_89659[(12)] = inst_89538__$1);

(statearr_89659[(13)] = inst_89541__$1);

(statearr_89659[(15)] = inst_89540__$1);

(statearr_89659[(17)] = inst_89549);

(statearr_89659[(16)] = inst_89539__$1);

return statearr_89659;
})();
var statearr_89660_89725 = state_89607__$1;
(statearr_89660_89725[(2)] = null);

(statearr_89660_89725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (18))){
var inst_89570 = (state_89607[(2)]);
var state_89607__$1 = state_89607;
var statearr_89661_89727 = state_89607__$1;
(statearr_89661_89727[(2)] = inst_89570);

(statearr_89661_89727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89608 === (8))){
var inst_89541 = (state_89607[(13)]);
var inst_89540 = (state_89607[(15)]);
var inst_89543 = (inst_89541 < inst_89540);
var inst_89544 = inst_89543;
var state_89607__$1 = state_89607;
if(cljs.core.truth_(inst_89544)){
var statearr_89663_89728 = state_89607__$1;
(statearr_89663_89728[(1)] = (10));

} else {
var statearr_89664_89731 = state_89607__$1;
(statearr_89664_89731[(1)] = (11));

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
});})(c__41196__auto___89695,mults,ensure_mult,p))
;
return ((function (switch__40432__auto__,c__41196__auto___89695,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_89670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89670[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_89670[(1)] = (1));

return statearr_89670;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_89607){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_89607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e89672){if((e89672 instanceof Object)){
var ex__40436__auto__ = e89672;
var statearr_89673_89734 = state_89607;
(statearr_89673_89734[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89735 = state_89607;
state_89607 = G__89735;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_89607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_89607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___89695,mults,ensure_mult,p))
})();
var state__41198__auto__ = (function (){var statearr_89674 = f__41197__auto__.call(null);
(statearr_89674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___89695);

return statearr_89674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___89695,mults,ensure_mult,p))
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
var args89739 = [];
var len__36491__auto___89746 = arguments.length;
var i__36492__auto___89747 = (0);
while(true){
if((i__36492__auto___89747 < len__36491__auto___89746)){
args89739.push((arguments[i__36492__auto___89747]));

var G__89748 = (i__36492__auto___89747 + (1));
i__36492__auto___89747 = G__89748;
continue;
} else {
}
break;
}

var G__89742 = args89739.length;
switch (G__89742) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89739.length)].join('')));

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
var args89754 = [];
var len__36491__auto___89761 = arguments.length;
var i__36492__auto___89762 = (0);
while(true){
if((i__36492__auto___89762 < len__36491__auto___89761)){
args89754.push((arguments[i__36492__auto___89762]));

var G__89763 = (i__36492__auto___89762 + (1));
i__36492__auto___89762 = G__89763;
continue;
} else {
}
break;
}

var G__89757 = args89754.length;
switch (G__89757) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89754.length)].join('')));

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
var args89768 = [];
var len__36491__auto___89839 = arguments.length;
var i__36492__auto___89840 = (0);
while(true){
if((i__36492__auto___89840 < len__36491__auto___89839)){
args89768.push((arguments[i__36492__auto___89840]));

var G__89841 = (i__36492__auto___89840 + (1));
i__36492__auto___89840 = G__89841;
continue;
} else {
}
break;
}

var G__89770 = args89768.length;
switch (G__89770) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89768.length)].join('')));

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
var c__41196__auto___89849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___89849,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___89849,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_89809){
var state_val_89810 = (state_89809[(1)]);
if((state_val_89810 === (7))){
var state_89809__$1 = state_89809;
var statearr_89811_89853 = state_89809__$1;
(statearr_89811_89853[(2)] = null);

(statearr_89811_89853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89810 === (1))){
var state_89809__$1 = state_89809;
var statearr_89812_89854 = state_89809__$1;
(statearr_89812_89854[(2)] = null);

(statearr_89812_89854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89810 === (4))){
var inst_89773 = (state_89809[(7)]);
var inst_89775 = (inst_89773 < cnt);
var state_89809__$1 = state_89809;
if(cljs.core.truth_(inst_89775)){
var statearr_89813_89858 = state_89809__$1;
(statearr_89813_89858[(1)] = (6));

} else {
var statearr_89814_89860 = state_89809__$1;
(statearr_89814_89860[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89810 === (15))){
var inst_89805 = (state_89809[(2)]);
var state_89809__$1 = state_89809;
var statearr_89815_89861 = state_89809__$1;
(statearr_89815_89861[(2)] = inst_89805);

(statearr_89815_89861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89810 === (13))){
var inst_89798 = cljs.core.async.close_BANG_.call(null,out);
var state_89809__$1 = state_89809;
var statearr_89816_89862 = state_89809__$1;
(statearr_89816_89862[(2)] = inst_89798);

(statearr_89816_89862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89810 === (6))){
var state_89809__$1 = state_89809;
var statearr_89817_89864 = state_89809__$1;
(statearr_89817_89864[(2)] = null);

(statearr_89817_89864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89810 === (3))){
var inst_89807 = (state_89809[(2)]);
var state_89809__$1 = state_89809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89809__$1,inst_89807);
} else {
if((state_val_89810 === (12))){
var inst_89795 = (state_89809[(8)]);
var inst_89795__$1 = (state_89809[(2)]);
var inst_89796 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_89795__$1);
var state_89809__$1 = (function (){var statearr_89818 = state_89809;
(statearr_89818[(8)] = inst_89795__$1);

return statearr_89818;
})();
if(cljs.core.truth_(inst_89796)){
var statearr_89819_89870 = state_89809__$1;
(statearr_89819_89870[(1)] = (13));

} else {
var statearr_89820_89871 = state_89809__$1;
(statearr_89820_89871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89810 === (2))){
var inst_89772 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_89773 = (0);
var state_89809__$1 = (function (){var statearr_89821 = state_89809;
(statearr_89821[(9)] = inst_89772);

(statearr_89821[(7)] = inst_89773);

return statearr_89821;
})();
var statearr_89822_89875 = state_89809__$1;
(statearr_89822_89875[(2)] = null);

(statearr_89822_89875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89810 === (11))){
var inst_89773 = (state_89809[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_89809,(10),Object,null,(9));
var inst_89782 = chs__$1.call(null,inst_89773);
var inst_89783 = done.call(null,inst_89773);
var inst_89784 = cljs.core.async.take_BANG_.call(null,inst_89782,inst_89783);
var state_89809__$1 = state_89809;
var statearr_89823_89877 = state_89809__$1;
(statearr_89823_89877[(2)] = inst_89784);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89809__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89810 === (9))){
var inst_89773 = (state_89809[(7)]);
var inst_89786 = (state_89809[(2)]);
var inst_89787 = (inst_89773 + (1));
var inst_89773__$1 = inst_89787;
var state_89809__$1 = (function (){var statearr_89824 = state_89809;
(statearr_89824[(7)] = inst_89773__$1);

(statearr_89824[(10)] = inst_89786);

return statearr_89824;
})();
var statearr_89825_89878 = state_89809__$1;
(statearr_89825_89878[(2)] = null);

(statearr_89825_89878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89810 === (5))){
var inst_89793 = (state_89809[(2)]);
var state_89809__$1 = (function (){var statearr_89826 = state_89809;
(statearr_89826[(11)] = inst_89793);

return statearr_89826;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89809__$1,(12),dchan);
} else {
if((state_val_89810 === (14))){
var inst_89795 = (state_89809[(8)]);
var inst_89800 = cljs.core.apply.call(null,f,inst_89795);
var state_89809__$1 = state_89809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89809__$1,(16),out,inst_89800);
} else {
if((state_val_89810 === (16))){
var inst_89802 = (state_89809[(2)]);
var state_89809__$1 = (function (){var statearr_89827 = state_89809;
(statearr_89827[(12)] = inst_89802);

return statearr_89827;
})();
var statearr_89828_89885 = state_89809__$1;
(statearr_89828_89885[(2)] = null);

(statearr_89828_89885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89810 === (10))){
var inst_89777 = (state_89809[(2)]);
var inst_89778 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_89809__$1 = (function (){var statearr_89829 = state_89809;
(statearr_89829[(13)] = inst_89777);

return statearr_89829;
})();
var statearr_89830_89890 = state_89809__$1;
(statearr_89830_89890[(2)] = inst_89778);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89809__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89810 === (8))){
var inst_89791 = (state_89809[(2)]);
var state_89809__$1 = state_89809;
var statearr_89831_89891 = state_89809__$1;
(statearr_89831_89891[(2)] = inst_89791);

(statearr_89831_89891[(1)] = (5));


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
});})(c__41196__auto___89849,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40432__auto__,c__41196__auto___89849,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_89835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89835[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_89835[(1)] = (1));

return statearr_89835;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_89809){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_89809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e89836){if((e89836 instanceof Object)){
var ex__40436__auto__ = e89836;
var statearr_89837_89893 = state_89809;
(statearr_89837_89893[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89895 = state_89809;
state_89809 = G__89895;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_89809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_89809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___89849,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__41198__auto__ = (function (){var statearr_89838 = f__41197__auto__.call(null);
(statearr_89838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___89849);

return statearr_89838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___89849,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args89902 = [];
var len__36491__auto___89980 = arguments.length;
var i__36492__auto___89981 = (0);
while(true){
if((i__36492__auto___89981 < len__36491__auto___89980)){
args89902.push((arguments[i__36492__auto___89981]));

var G__89982 = (i__36492__auto___89981 + (1));
i__36492__auto___89981 = G__89982;
continue;
} else {
}
break;
}

var G__89906 = args89902.length;
switch (G__89906) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args89902.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41196__auto___89988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___89988,out){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___89988,out){
return (function (state_89938){
var state_val_89939 = (state_89938[(1)]);
if((state_val_89939 === (7))){
var inst_89917 = (state_89938[(7)]);
var inst_89918 = (state_89938[(8)]);
var inst_89917__$1 = (state_89938[(2)]);
var inst_89918__$1 = cljs.core.nth.call(null,inst_89917__$1,(0),null);
var inst_89919 = cljs.core.nth.call(null,inst_89917__$1,(1),null);
var inst_89920 = (inst_89918__$1 == null);
var state_89938__$1 = (function (){var statearr_89940 = state_89938;
(statearr_89940[(7)] = inst_89917__$1);

(statearr_89940[(8)] = inst_89918__$1);

(statearr_89940[(9)] = inst_89919);

return statearr_89940;
})();
if(cljs.core.truth_(inst_89920)){
var statearr_89941_89989 = state_89938__$1;
(statearr_89941_89989[(1)] = (8));

} else {
var statearr_89942_89990 = state_89938__$1;
(statearr_89942_89990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89939 === (1))){
var inst_89909 = cljs.core.vec.call(null,chs);
var inst_89910 = inst_89909;
var state_89938__$1 = (function (){var statearr_89943 = state_89938;
(statearr_89943[(10)] = inst_89910);

return statearr_89943;
})();
var statearr_89944_89991 = state_89938__$1;
(statearr_89944_89991[(2)] = null);

(statearr_89944_89991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89939 === (4))){
var inst_89910 = (state_89938[(10)]);
var state_89938__$1 = state_89938;
return cljs.core.async.ioc_alts_BANG_.call(null,state_89938__$1,(7),inst_89910);
} else {
if((state_val_89939 === (6))){
var inst_89934 = (state_89938[(2)]);
var state_89938__$1 = state_89938;
var statearr_89948_89992 = state_89938__$1;
(statearr_89948_89992[(2)] = inst_89934);

(statearr_89948_89992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89939 === (3))){
var inst_89936 = (state_89938[(2)]);
var state_89938__$1 = state_89938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89938__$1,inst_89936);
} else {
if((state_val_89939 === (2))){
var inst_89910 = (state_89938[(10)]);
var inst_89912 = cljs.core.count.call(null,inst_89910);
var inst_89913 = (inst_89912 > (0));
var state_89938__$1 = state_89938;
if(cljs.core.truth_(inst_89913)){
var statearr_89953_89993 = state_89938__$1;
(statearr_89953_89993[(1)] = (4));

} else {
var statearr_89954_89995 = state_89938__$1;
(statearr_89954_89995[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89939 === (11))){
var inst_89910 = (state_89938[(10)]);
var inst_89927 = (state_89938[(2)]);
var tmp89949 = inst_89910;
var inst_89910__$1 = tmp89949;
var state_89938__$1 = (function (){var statearr_89955 = state_89938;
(statearr_89955[(11)] = inst_89927);

(statearr_89955[(10)] = inst_89910__$1);

return statearr_89955;
})();
var statearr_89956_89998 = state_89938__$1;
(statearr_89956_89998[(2)] = null);

(statearr_89956_89998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89939 === (9))){
var inst_89918 = (state_89938[(8)]);
var state_89938__$1 = state_89938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_89938__$1,(11),out,inst_89918);
} else {
if((state_val_89939 === (5))){
var inst_89932 = cljs.core.async.close_BANG_.call(null,out);
var state_89938__$1 = state_89938;
var statearr_89957_89999 = state_89938__$1;
(statearr_89957_89999[(2)] = inst_89932);

(statearr_89957_89999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89939 === (10))){
var inst_89930 = (state_89938[(2)]);
var state_89938__$1 = state_89938;
var statearr_89958_90002 = state_89938__$1;
(statearr_89958_90002[(2)] = inst_89930);

(statearr_89958_90002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89939 === (8))){
var inst_89917 = (state_89938[(7)]);
var inst_89918 = (state_89938[(8)]);
var inst_89910 = (state_89938[(10)]);
var inst_89919 = (state_89938[(9)]);
var inst_89922 = (function (){var cs = inst_89910;
var vec__89915 = inst_89917;
var v = inst_89918;
var c = inst_89919;
return ((function (cs,vec__89915,v,c,inst_89917,inst_89918,inst_89910,inst_89919,state_val_89939,c__41196__auto___89988,out){
return (function (p1__89901_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__89901_SHARP_);
});
;})(cs,vec__89915,v,c,inst_89917,inst_89918,inst_89910,inst_89919,state_val_89939,c__41196__auto___89988,out))
})();
var inst_89923 = cljs.core.filterv.call(null,inst_89922,inst_89910);
var inst_89910__$1 = inst_89923;
var state_89938__$1 = (function (){var statearr_89963 = state_89938;
(statearr_89963[(10)] = inst_89910__$1);

return statearr_89963;
})();
var statearr_89964_90005 = state_89938__$1;
(statearr_89964_90005[(2)] = null);

(statearr_89964_90005[(1)] = (2));


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
});})(c__41196__auto___89988,out))
;
return ((function (switch__40432__auto__,c__41196__auto___89988,out){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_89970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89970[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_89970[(1)] = (1));

return statearr_89970;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_89938){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_89938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e89971){if((e89971 instanceof Object)){
var ex__40436__auto__ = e89971;
var statearr_89972_90010 = state_89938;
(statearr_89972_90010[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e89971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90013 = state_89938;
state_89938 = G__90013;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_89938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_89938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___89988,out))
})();
var state__41198__auto__ = (function (){var statearr_89976 = f__41197__auto__.call(null);
(statearr_89976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___89988);

return statearr_89976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___89988,out))
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
var args90015 = [];
var len__36491__auto___90072 = arguments.length;
var i__36492__auto___90073 = (0);
while(true){
if((i__36492__auto___90073 < len__36491__auto___90072)){
args90015.push((arguments[i__36492__auto___90073]));

var G__90074 = (i__36492__auto___90073 + (1));
i__36492__auto___90073 = G__90074;
continue;
} else {
}
break;
}

var G__90017 = args90015.length;
switch (G__90017) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90015.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41196__auto___90078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___90078,out){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___90078,out){
return (function (state_90042){
var state_val_90043 = (state_90042[(1)]);
if((state_val_90043 === (7))){
var inst_90023 = (state_90042[(7)]);
var inst_90023__$1 = (state_90042[(2)]);
var inst_90024 = (inst_90023__$1 == null);
var inst_90025 = cljs.core.not.call(null,inst_90024);
var state_90042__$1 = (function (){var statearr_90045 = state_90042;
(statearr_90045[(7)] = inst_90023__$1);

return statearr_90045;
})();
if(inst_90025){
var statearr_90046_90083 = state_90042__$1;
(statearr_90046_90083[(1)] = (8));

} else {
var statearr_90047_90084 = state_90042__$1;
(statearr_90047_90084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90043 === (1))){
var inst_90018 = (0);
var state_90042__$1 = (function (){var statearr_90048 = state_90042;
(statearr_90048[(8)] = inst_90018);

return statearr_90048;
})();
var statearr_90049_90085 = state_90042__$1;
(statearr_90049_90085[(2)] = null);

(statearr_90049_90085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90043 === (4))){
var state_90042__$1 = state_90042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90042__$1,(7),ch);
} else {
if((state_val_90043 === (6))){
var inst_90037 = (state_90042[(2)]);
var state_90042__$1 = state_90042;
var statearr_90051_90086 = state_90042__$1;
(statearr_90051_90086[(2)] = inst_90037);

(statearr_90051_90086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90043 === (3))){
var inst_90039 = (state_90042[(2)]);
var inst_90040 = cljs.core.async.close_BANG_.call(null,out);
var state_90042__$1 = (function (){var statearr_90052 = state_90042;
(statearr_90052[(9)] = inst_90039);

return statearr_90052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90042__$1,inst_90040);
} else {
if((state_val_90043 === (2))){
var inst_90018 = (state_90042[(8)]);
var inst_90020 = (inst_90018 < n);
var state_90042__$1 = state_90042;
if(cljs.core.truth_(inst_90020)){
var statearr_90053_90090 = state_90042__$1;
(statearr_90053_90090[(1)] = (4));

} else {
var statearr_90054_90091 = state_90042__$1;
(statearr_90054_90091[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90043 === (11))){
var inst_90018 = (state_90042[(8)]);
var inst_90028 = (state_90042[(2)]);
var inst_90029 = (inst_90018 + (1));
var inst_90018__$1 = inst_90029;
var state_90042__$1 = (function (){var statearr_90055 = state_90042;
(statearr_90055[(10)] = inst_90028);

(statearr_90055[(8)] = inst_90018__$1);

return statearr_90055;
})();
var statearr_90058_90092 = state_90042__$1;
(statearr_90058_90092[(2)] = null);

(statearr_90058_90092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90043 === (9))){
var state_90042__$1 = state_90042;
var statearr_90059_90095 = state_90042__$1;
(statearr_90059_90095[(2)] = null);

(statearr_90059_90095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90043 === (5))){
var state_90042__$1 = state_90042;
var statearr_90061_90098 = state_90042__$1;
(statearr_90061_90098[(2)] = null);

(statearr_90061_90098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90043 === (10))){
var inst_90034 = (state_90042[(2)]);
var state_90042__$1 = state_90042;
var statearr_90063_90101 = state_90042__$1;
(statearr_90063_90101[(2)] = inst_90034);

(statearr_90063_90101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90043 === (8))){
var inst_90023 = (state_90042[(7)]);
var state_90042__$1 = state_90042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90042__$1,(11),out,inst_90023);
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
});})(c__41196__auto___90078,out))
;
return ((function (switch__40432__auto__,c__41196__auto___90078,out){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_90067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90067[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_90067[(1)] = (1));

return statearr_90067;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_90042){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_90042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e90068){if((e90068 instanceof Object)){
var ex__40436__auto__ = e90068;
var statearr_90069_90102 = state_90042;
(statearr_90069_90102[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90105 = state_90042;
state_90042 = G__90105;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_90042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_90042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___90078,out))
})();
var state__41198__auto__ = (function (){var statearr_90070 = f__41197__auto__.call(null);
(statearr_90070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___90078);

return statearr_90070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___90078,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async90122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90122 = (function (map_LT_,f,ch,meta90123){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta90123 = meta90123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_90124,meta90123__$1){
var self__ = this;
var _90124__$1 = this;
return (new cljs.core.async.t_cljs$core$async90122(self__.map_LT_,self__.f,self__.ch,meta90123__$1));
});

cljs.core.async.t_cljs$core$async90122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_90124){
var self__ = this;
var _90124__$1 = this;
return self__.meta90123;
});

cljs.core.async.t_cljs$core$async90122.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async90122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90122.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90122.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async90122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async90125 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90125 = (function (map_LT_,f,ch,meta90123,_,fn1,meta90126){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta90123 = meta90123;
this._ = _;
this.fn1 = fn1;
this.meta90126 = meta90126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_90127,meta90126__$1){
var self__ = this;
var _90127__$1 = this;
return (new cljs.core.async.t_cljs$core$async90125(self__.map_LT_,self__.f,self__.ch,self__.meta90123,self__._,self__.fn1,meta90126__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async90125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_90127){
var self__ = this;
var _90127__$1 = this;
return self__.meta90126;
});})(___$1))
;

cljs.core.async.t_cljs$core$async90125.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async90125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async90125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async90125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__90108_SHARP_){
return f1.call(null,(((p1__90108_SHARP_ == null))?null:self__.f.call(null,p1__90108_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async90125.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta90123","meta90123",219750258,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async90122","cljs.core.async/t_cljs$core$async90122",-656000577,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta90126","meta90126",268741837,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async90125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90125";

cljs.core.async.t_cljs$core$async90125.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async90125");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async90125 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async90125(map_LT___$1,f__$1,ch__$1,meta90123__$1,___$2,fn1__$1,meta90126){
return (new cljs.core.async.t_cljs$core$async90125(map_LT___$1,f__$1,ch__$1,meta90123__$1,___$2,fn1__$1,meta90126));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async90125(self__.map_LT_,self__.f,self__.ch,self__.meta90123,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async90122.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async90122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async90122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta90123","meta90123",219750258,null)], null);
});

cljs.core.async.t_cljs$core$async90122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90122";

cljs.core.async.t_cljs$core$async90122.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async90122");
});

cljs.core.async.__GT_t_cljs$core$async90122 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async90122(map_LT___$1,f__$1,ch__$1,meta90123){
return (new cljs.core.async.t_cljs$core$async90122(map_LT___$1,f__$1,ch__$1,meta90123));
});

}

return (new cljs.core.async.t_cljs$core$async90122(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async90152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90152 = (function (map_GT_,f,ch,meta90153){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta90153 = meta90153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_90154,meta90153__$1){
var self__ = this;
var _90154__$1 = this;
return (new cljs.core.async.t_cljs$core$async90152(self__.map_GT_,self__.f,self__.ch,meta90153__$1));
});

cljs.core.async.t_cljs$core$async90152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_90154){
var self__ = this;
var _90154__$1 = this;
return self__.meta90153;
});

cljs.core.async.t_cljs$core$async90152.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async90152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90152.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async90152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async90152.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async90152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async90152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta90153","meta90153",877263877,null)], null);
});

cljs.core.async.t_cljs$core$async90152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90152";

cljs.core.async.t_cljs$core$async90152.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async90152");
});

cljs.core.async.__GT_t_cljs$core$async90152 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async90152(map_GT___$1,f__$1,ch__$1,meta90153){
return (new cljs.core.async.t_cljs$core$async90152(map_GT___$1,f__$1,ch__$1,meta90153));
});

}

return (new cljs.core.async.t_cljs$core$async90152(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async90162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async90162 = (function (filter_GT_,p,ch,meta90163){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta90163 = meta90163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async90162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_90164,meta90163__$1){
var self__ = this;
var _90164__$1 = this;
return (new cljs.core.async.t_cljs$core$async90162(self__.filter_GT_,self__.p,self__.ch,meta90163__$1));
});

cljs.core.async.t_cljs$core$async90162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_90164){
var self__ = this;
var _90164__$1 = this;
return self__.meta90163;
});

cljs.core.async.t_cljs$core$async90162.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async90162.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90162.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async90162.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async90162.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async90162.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async90162.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async90162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta90163","meta90163",-1347847081,null)], null);
});

cljs.core.async.t_cljs$core$async90162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async90162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async90162";

cljs.core.async.t_cljs$core$async90162.cljs$lang$ctorPrWriter = (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"cljs.core.async/t_cljs$core$async90162");
});

cljs.core.async.__GT_t_cljs$core$async90162 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async90162(filter_GT___$1,p__$1,ch__$1,meta90163){
return (new cljs.core.async.t_cljs$core$async90162(filter_GT___$1,p__$1,ch__$1,meta90163));
});

}

return (new cljs.core.async.t_cljs$core$async90162(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args90180 = [];
var len__36491__auto___90226 = arguments.length;
var i__36492__auto___90227 = (0);
while(true){
if((i__36492__auto___90227 < len__36491__auto___90226)){
args90180.push((arguments[i__36492__auto___90227]));

var G__90231 = (i__36492__auto___90227 + (1));
i__36492__auto___90227 = G__90231;
continue;
} else {
}
break;
}

var G__90182 = args90180.length;
switch (G__90182) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90180.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41196__auto___90236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___90236,out){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___90236,out){
return (function (state_90203){
var state_val_90204 = (state_90203[(1)]);
if((state_val_90204 === (7))){
var inst_90199 = (state_90203[(2)]);
var state_90203__$1 = state_90203;
var statearr_90205_90237 = state_90203__$1;
(statearr_90205_90237[(2)] = inst_90199);

(statearr_90205_90237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90204 === (1))){
var state_90203__$1 = state_90203;
var statearr_90206_90238 = state_90203__$1;
(statearr_90206_90238[(2)] = null);

(statearr_90206_90238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90204 === (4))){
var inst_90185 = (state_90203[(7)]);
var inst_90185__$1 = (state_90203[(2)]);
var inst_90186 = (inst_90185__$1 == null);
var state_90203__$1 = (function (){var statearr_90207 = state_90203;
(statearr_90207[(7)] = inst_90185__$1);

return statearr_90207;
})();
if(cljs.core.truth_(inst_90186)){
var statearr_90208_90241 = state_90203__$1;
(statearr_90208_90241[(1)] = (5));

} else {
var statearr_90209_90242 = state_90203__$1;
(statearr_90209_90242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90204 === (6))){
var inst_90185 = (state_90203[(7)]);
var inst_90190 = p.call(null,inst_90185);
var state_90203__$1 = state_90203;
if(cljs.core.truth_(inst_90190)){
var statearr_90210_90246 = state_90203__$1;
(statearr_90210_90246[(1)] = (8));

} else {
var statearr_90211_90247 = state_90203__$1;
(statearr_90211_90247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90204 === (3))){
var inst_90201 = (state_90203[(2)]);
var state_90203__$1 = state_90203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90203__$1,inst_90201);
} else {
if((state_val_90204 === (2))){
var state_90203__$1 = state_90203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90203__$1,(4),ch);
} else {
if((state_val_90204 === (11))){
var inst_90193 = (state_90203[(2)]);
var state_90203__$1 = state_90203;
var statearr_90212_90251 = state_90203__$1;
(statearr_90212_90251[(2)] = inst_90193);

(statearr_90212_90251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90204 === (9))){
var state_90203__$1 = state_90203;
var statearr_90213_90252 = state_90203__$1;
(statearr_90213_90252[(2)] = null);

(statearr_90213_90252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90204 === (5))){
var inst_90188 = cljs.core.async.close_BANG_.call(null,out);
var state_90203__$1 = state_90203;
var statearr_90214_90253 = state_90203__$1;
(statearr_90214_90253[(2)] = inst_90188);

(statearr_90214_90253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90204 === (10))){
var inst_90196 = (state_90203[(2)]);
var state_90203__$1 = (function (){var statearr_90215 = state_90203;
(statearr_90215[(8)] = inst_90196);

return statearr_90215;
})();
var statearr_90216_90254 = state_90203__$1;
(statearr_90216_90254[(2)] = null);

(statearr_90216_90254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90204 === (8))){
var inst_90185 = (state_90203[(7)]);
var state_90203__$1 = state_90203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90203__$1,(11),out,inst_90185);
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
});})(c__41196__auto___90236,out))
;
return ((function (switch__40432__auto__,c__41196__auto___90236,out){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_90222 = [null,null,null,null,null,null,null,null,null];
(statearr_90222[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_90222[(1)] = (1));

return statearr_90222;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_90203){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_90203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e90223){if((e90223 instanceof Object)){
var ex__40436__auto__ = e90223;
var statearr_90224_90257 = state_90203;
(statearr_90224_90257[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90259 = state_90203;
state_90203 = G__90259;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_90203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_90203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___90236,out))
})();
var state__41198__auto__ = (function (){var statearr_90225 = f__41197__auto__.call(null);
(statearr_90225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___90236);

return statearr_90225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___90236,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args90263 = [];
var len__36491__auto___90267 = arguments.length;
var i__36492__auto___90268 = (0);
while(true){
if((i__36492__auto___90268 < len__36491__auto___90267)){
args90263.push((arguments[i__36492__auto___90268]));

var G__90269 = (i__36492__auto___90268 + (1));
i__36492__auto___90268 = G__90269;
continue;
} else {
}
break;
}

var G__90265 = args90263.length;
switch (G__90265) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90263.length)].join('')));

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
return (function (state_90468){
var state_val_90469 = (state_90468[(1)]);
if((state_val_90469 === (7))){
var inst_90460 = (state_90468[(2)]);
var state_90468__$1 = state_90468;
var statearr_90470_90521 = state_90468__$1;
(statearr_90470_90521[(2)] = inst_90460);

(statearr_90470_90521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (20))){
var inst_90430 = (state_90468[(7)]);
var inst_90441 = (state_90468[(2)]);
var inst_90442 = cljs.core.next.call(null,inst_90430);
var inst_90416 = inst_90442;
var inst_90417 = null;
var inst_90418 = (0);
var inst_90419 = (0);
var state_90468__$1 = (function (){var statearr_90471 = state_90468;
(statearr_90471[(8)] = inst_90441);

(statearr_90471[(9)] = inst_90417);

(statearr_90471[(10)] = inst_90419);

(statearr_90471[(11)] = inst_90416);

(statearr_90471[(12)] = inst_90418);

return statearr_90471;
})();
var statearr_90472_90523 = state_90468__$1;
(statearr_90472_90523[(2)] = null);

(statearr_90472_90523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (1))){
var state_90468__$1 = state_90468;
var statearr_90473_90524 = state_90468__$1;
(statearr_90473_90524[(2)] = null);

(statearr_90473_90524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (4))){
var inst_90405 = (state_90468[(13)]);
var inst_90405__$1 = (state_90468[(2)]);
var inst_90406 = (inst_90405__$1 == null);
var state_90468__$1 = (function (){var statearr_90474 = state_90468;
(statearr_90474[(13)] = inst_90405__$1);

return statearr_90474;
})();
if(cljs.core.truth_(inst_90406)){
var statearr_90475_90525 = state_90468__$1;
(statearr_90475_90525[(1)] = (5));

} else {
var statearr_90476_90526 = state_90468__$1;
(statearr_90476_90526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (15))){
var state_90468__$1 = state_90468;
var statearr_90480_90527 = state_90468__$1;
(statearr_90480_90527[(2)] = null);

(statearr_90480_90527[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (21))){
var state_90468__$1 = state_90468;
var statearr_90481_90530 = state_90468__$1;
(statearr_90481_90530[(2)] = null);

(statearr_90481_90530[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (13))){
var inst_90417 = (state_90468[(9)]);
var inst_90419 = (state_90468[(10)]);
var inst_90416 = (state_90468[(11)]);
var inst_90418 = (state_90468[(12)]);
var inst_90426 = (state_90468[(2)]);
var inst_90427 = (inst_90419 + (1));
var tmp90477 = inst_90417;
var tmp90478 = inst_90416;
var tmp90479 = inst_90418;
var inst_90416__$1 = tmp90478;
var inst_90417__$1 = tmp90477;
var inst_90418__$1 = tmp90479;
var inst_90419__$1 = inst_90427;
var state_90468__$1 = (function (){var statearr_90482 = state_90468;
(statearr_90482[(14)] = inst_90426);

(statearr_90482[(9)] = inst_90417__$1);

(statearr_90482[(10)] = inst_90419__$1);

(statearr_90482[(11)] = inst_90416__$1);

(statearr_90482[(12)] = inst_90418__$1);

return statearr_90482;
})();
var statearr_90483_90533 = state_90468__$1;
(statearr_90483_90533[(2)] = null);

(statearr_90483_90533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (22))){
var state_90468__$1 = state_90468;
var statearr_90484_90538 = state_90468__$1;
(statearr_90484_90538[(2)] = null);

(statearr_90484_90538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (6))){
var inst_90405 = (state_90468[(13)]);
var inst_90414 = f.call(null,inst_90405);
var inst_90415 = cljs.core.seq.call(null,inst_90414);
var inst_90416 = inst_90415;
var inst_90417 = null;
var inst_90418 = (0);
var inst_90419 = (0);
var state_90468__$1 = (function (){var statearr_90489 = state_90468;
(statearr_90489[(9)] = inst_90417);

(statearr_90489[(10)] = inst_90419);

(statearr_90489[(11)] = inst_90416);

(statearr_90489[(12)] = inst_90418);

return statearr_90489;
})();
var statearr_90490_90543 = state_90468__$1;
(statearr_90490_90543[(2)] = null);

(statearr_90490_90543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (17))){
var inst_90430 = (state_90468[(7)]);
var inst_90434 = cljs.core.chunk_first.call(null,inst_90430);
var inst_90435 = cljs.core.chunk_rest.call(null,inst_90430);
var inst_90436 = cljs.core.count.call(null,inst_90434);
var inst_90416 = inst_90435;
var inst_90417 = inst_90434;
var inst_90418 = inst_90436;
var inst_90419 = (0);
var state_90468__$1 = (function (){var statearr_90491 = state_90468;
(statearr_90491[(9)] = inst_90417);

(statearr_90491[(10)] = inst_90419);

(statearr_90491[(11)] = inst_90416);

(statearr_90491[(12)] = inst_90418);

return statearr_90491;
})();
var statearr_90492_90545 = state_90468__$1;
(statearr_90492_90545[(2)] = null);

(statearr_90492_90545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (3))){
var inst_90462 = (state_90468[(2)]);
var state_90468__$1 = state_90468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90468__$1,inst_90462);
} else {
if((state_val_90469 === (12))){
var inst_90450 = (state_90468[(2)]);
var state_90468__$1 = state_90468;
var statearr_90493_90546 = state_90468__$1;
(statearr_90493_90546[(2)] = inst_90450);

(statearr_90493_90546[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (2))){
var state_90468__$1 = state_90468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90468__$1,(4),in$);
} else {
if((state_val_90469 === (23))){
var inst_90458 = (state_90468[(2)]);
var state_90468__$1 = state_90468;
var statearr_90494_90547 = state_90468__$1;
(statearr_90494_90547[(2)] = inst_90458);

(statearr_90494_90547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (19))){
var inst_90445 = (state_90468[(2)]);
var state_90468__$1 = state_90468;
var statearr_90495_90549 = state_90468__$1;
(statearr_90495_90549[(2)] = inst_90445);

(statearr_90495_90549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (11))){
var inst_90430 = (state_90468[(7)]);
var inst_90416 = (state_90468[(11)]);
var inst_90430__$1 = cljs.core.seq.call(null,inst_90416);
var state_90468__$1 = (function (){var statearr_90496 = state_90468;
(statearr_90496[(7)] = inst_90430__$1);

return statearr_90496;
})();
if(inst_90430__$1){
var statearr_90497_90550 = state_90468__$1;
(statearr_90497_90550[(1)] = (14));

} else {
var statearr_90500_90551 = state_90468__$1;
(statearr_90500_90551[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (9))){
var inst_90452 = (state_90468[(2)]);
var inst_90453 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_90468__$1 = (function (){var statearr_90503 = state_90468;
(statearr_90503[(15)] = inst_90452);

return statearr_90503;
})();
if(cljs.core.truth_(inst_90453)){
var statearr_90504_90552 = state_90468__$1;
(statearr_90504_90552[(1)] = (21));

} else {
var statearr_90505_90553 = state_90468__$1;
(statearr_90505_90553[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (5))){
var inst_90408 = cljs.core.async.close_BANG_.call(null,out);
var state_90468__$1 = state_90468;
var statearr_90506_90554 = state_90468__$1;
(statearr_90506_90554[(2)] = inst_90408);

(statearr_90506_90554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (14))){
var inst_90430 = (state_90468[(7)]);
var inst_90432 = cljs.core.chunked_seq_QMARK_.call(null,inst_90430);
var state_90468__$1 = state_90468;
if(inst_90432){
var statearr_90507_90555 = state_90468__$1;
(statearr_90507_90555[(1)] = (17));

} else {
var statearr_90508_90556 = state_90468__$1;
(statearr_90508_90556[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (16))){
var inst_90448 = (state_90468[(2)]);
var state_90468__$1 = state_90468;
var statearr_90509_90557 = state_90468__$1;
(statearr_90509_90557[(2)] = inst_90448);

(statearr_90509_90557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90469 === (10))){
var inst_90417 = (state_90468[(9)]);
var inst_90419 = (state_90468[(10)]);
var inst_90424 = cljs.core._nth.call(null,inst_90417,inst_90419);
var state_90468__$1 = state_90468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90468__$1,(13),out,inst_90424);
} else {
if((state_val_90469 === (18))){
var inst_90430 = (state_90468[(7)]);
var inst_90439 = cljs.core.first.call(null,inst_90430);
var state_90468__$1 = state_90468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90468__$1,(20),out,inst_90439);
} else {
if((state_val_90469 === (8))){
var inst_90419 = (state_90468[(10)]);
var inst_90418 = (state_90468[(12)]);
var inst_90421 = (inst_90419 < inst_90418);
var inst_90422 = inst_90421;
var state_90468__$1 = state_90468;
if(cljs.core.truth_(inst_90422)){
var statearr_90510_90573 = state_90468__$1;
(statearr_90510_90573[(1)] = (10));

} else {
var statearr_90511_90574 = state_90468__$1;
(statearr_90511_90574[(1)] = (11));

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
var statearr_90515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90515[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40433__auto__);

(statearr_90515[(1)] = (1));

return statearr_90515;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40433__auto____1 = (function (state_90468){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_90468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e90516){if((e90516 instanceof Object)){
var ex__40436__auto__ = e90516;
var statearr_90517_90575 = state_90468;
(statearr_90517_90575[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90576 = state_90468;
state_90468 = G__90576;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40433__auto__ = function(state_90468){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40433__auto____1.call(this,state_90468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40433__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40433__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto__))
})();
var state__41198__auto__ = (function (){var statearr_90518 = f__41197__auto__.call(null);
(statearr_90518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto__);

return statearr_90518;
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
var args90578 = [];
var len__36491__auto___90582 = arguments.length;
var i__36492__auto___90583 = (0);
while(true){
if((i__36492__auto___90583 < len__36491__auto___90582)){
args90578.push((arguments[i__36492__auto___90583]));

var G__90584 = (i__36492__auto___90583 + (1));
i__36492__auto___90583 = G__90584;
continue;
} else {
}
break;
}

var G__90581 = args90578.length;
switch (G__90581) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90578.length)].join('')));

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
var args90590 = [];
var len__36491__auto___90597 = arguments.length;
var i__36492__auto___90599 = (0);
while(true){
if((i__36492__auto___90599 < len__36491__auto___90597)){
args90590.push((arguments[i__36492__auto___90599]));

var G__90602 = (i__36492__auto___90599 + (1));
i__36492__auto___90599 = G__90602;
continue;
} else {
}
break;
}

var G__90593 = args90590.length;
switch (G__90593) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90590.length)].join('')));

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
var args90605 = [];
var len__36491__auto___90667 = arguments.length;
var i__36492__auto___90668 = (0);
while(true){
if((i__36492__auto___90668 < len__36491__auto___90667)){
args90605.push((arguments[i__36492__auto___90668]));

var G__90669 = (i__36492__auto___90668 + (1));
i__36492__auto___90668 = G__90669;
continue;
} else {
}
break;
}

var G__90612 = args90605.length;
switch (G__90612) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90605.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41196__auto___90673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___90673,out){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___90673,out){
return (function (state_90636){
var state_val_90637 = (state_90636[(1)]);
if((state_val_90637 === (7))){
var inst_90631 = (state_90636[(2)]);
var state_90636__$1 = state_90636;
var statearr_90638_90675 = state_90636__$1;
(statearr_90638_90675[(2)] = inst_90631);

(statearr_90638_90675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90637 === (1))){
var inst_90613 = null;
var state_90636__$1 = (function (){var statearr_90639 = state_90636;
(statearr_90639[(7)] = inst_90613);

return statearr_90639;
})();
var statearr_90640_90676 = state_90636__$1;
(statearr_90640_90676[(2)] = null);

(statearr_90640_90676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90637 === (4))){
var inst_90616 = (state_90636[(8)]);
var inst_90616__$1 = (state_90636[(2)]);
var inst_90617 = (inst_90616__$1 == null);
var inst_90618 = cljs.core.not.call(null,inst_90617);
var state_90636__$1 = (function (){var statearr_90641 = state_90636;
(statearr_90641[(8)] = inst_90616__$1);

return statearr_90641;
})();
if(inst_90618){
var statearr_90642_90677 = state_90636__$1;
(statearr_90642_90677[(1)] = (5));

} else {
var statearr_90643_90678 = state_90636__$1;
(statearr_90643_90678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90637 === (6))){
var state_90636__$1 = state_90636;
var statearr_90649_90681 = state_90636__$1;
(statearr_90649_90681[(2)] = null);

(statearr_90649_90681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90637 === (3))){
var inst_90633 = (state_90636[(2)]);
var inst_90634 = cljs.core.async.close_BANG_.call(null,out);
var state_90636__$1 = (function (){var statearr_90650 = state_90636;
(statearr_90650[(9)] = inst_90633);

return statearr_90650;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90636__$1,inst_90634);
} else {
if((state_val_90637 === (2))){
var state_90636__$1 = state_90636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90636__$1,(4),ch);
} else {
if((state_val_90637 === (11))){
var inst_90616 = (state_90636[(8)]);
var inst_90625 = (state_90636[(2)]);
var inst_90613 = inst_90616;
var state_90636__$1 = (function (){var statearr_90651 = state_90636;
(statearr_90651[(10)] = inst_90625);

(statearr_90651[(7)] = inst_90613);

return statearr_90651;
})();
var statearr_90652_90684 = state_90636__$1;
(statearr_90652_90684[(2)] = null);

(statearr_90652_90684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90637 === (9))){
var inst_90616 = (state_90636[(8)]);
var state_90636__$1 = state_90636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90636__$1,(11),out,inst_90616);
} else {
if((state_val_90637 === (5))){
var inst_90613 = (state_90636[(7)]);
var inst_90616 = (state_90636[(8)]);
var inst_90620 = cljs.core._EQ_.call(null,inst_90616,inst_90613);
var state_90636__$1 = state_90636;
if(inst_90620){
var statearr_90654_90685 = state_90636__$1;
(statearr_90654_90685[(1)] = (8));

} else {
var statearr_90655_90686 = state_90636__$1;
(statearr_90655_90686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90637 === (10))){
var inst_90628 = (state_90636[(2)]);
var state_90636__$1 = state_90636;
var statearr_90656_90689 = state_90636__$1;
(statearr_90656_90689[(2)] = inst_90628);

(statearr_90656_90689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90637 === (8))){
var inst_90613 = (state_90636[(7)]);
var tmp90653 = inst_90613;
var inst_90613__$1 = tmp90653;
var state_90636__$1 = (function (){var statearr_90658 = state_90636;
(statearr_90658[(7)] = inst_90613__$1);

return statearr_90658;
})();
var statearr_90659_90690 = state_90636__$1;
(statearr_90659_90690[(2)] = null);

(statearr_90659_90690[(1)] = (2));


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
});})(c__41196__auto___90673,out))
;
return ((function (switch__40432__auto__,c__41196__auto___90673,out){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_90663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90663[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_90663[(1)] = (1));

return statearr_90663;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_90636){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_90636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e90664){if((e90664 instanceof Object)){
var ex__40436__auto__ = e90664;
var statearr_90665_90691 = state_90636;
(statearr_90665_90691[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90692 = state_90636;
state_90636 = G__90692;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_90636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_90636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___90673,out))
})();
var state__41198__auto__ = (function (){var statearr_90666 = f__41197__auto__.call(null);
(statearr_90666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___90673);

return statearr_90666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___90673,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args90703 = [];
var len__36491__auto___90789 = arguments.length;
var i__36492__auto___90790 = (0);
while(true){
if((i__36492__auto___90790 < len__36491__auto___90789)){
args90703.push((arguments[i__36492__auto___90790]));

var G__90792 = (i__36492__auto___90790 + (1));
i__36492__auto___90790 = G__90792;
continue;
} else {
}
break;
}

var G__90708 = args90703.length;
switch (G__90708) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90703.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41196__auto___90795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___90795,out){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___90795,out){
return (function (state_90749){
var state_val_90750 = (state_90749[(1)]);
if((state_val_90750 === (7))){
var inst_90745 = (state_90749[(2)]);
var state_90749__$1 = state_90749;
var statearr_90754_90796 = state_90749__$1;
(statearr_90754_90796[(2)] = inst_90745);

(statearr_90754_90796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90750 === (1))){
var inst_90712 = (new Array(n));
var inst_90713 = inst_90712;
var inst_90714 = (0);
var state_90749__$1 = (function (){var statearr_90755 = state_90749;
(statearr_90755[(7)] = inst_90714);

(statearr_90755[(8)] = inst_90713);

return statearr_90755;
})();
var statearr_90756_90802 = state_90749__$1;
(statearr_90756_90802[(2)] = null);

(statearr_90756_90802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90750 === (4))){
var inst_90717 = (state_90749[(9)]);
var inst_90717__$1 = (state_90749[(2)]);
var inst_90718 = (inst_90717__$1 == null);
var inst_90719 = cljs.core.not.call(null,inst_90718);
var state_90749__$1 = (function (){var statearr_90757 = state_90749;
(statearr_90757[(9)] = inst_90717__$1);

return statearr_90757;
})();
if(inst_90719){
var statearr_90758_90808 = state_90749__$1;
(statearr_90758_90808[(1)] = (5));

} else {
var statearr_90759_90809 = state_90749__$1;
(statearr_90759_90809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90750 === (15))){
var inst_90739 = (state_90749[(2)]);
var state_90749__$1 = state_90749;
var statearr_90760_90815 = state_90749__$1;
(statearr_90760_90815[(2)] = inst_90739);

(statearr_90760_90815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90750 === (13))){
var state_90749__$1 = state_90749;
var statearr_90761_90821 = state_90749__$1;
(statearr_90761_90821[(2)] = null);

(statearr_90761_90821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90750 === (6))){
var inst_90714 = (state_90749[(7)]);
var inst_90735 = (inst_90714 > (0));
var state_90749__$1 = state_90749;
if(cljs.core.truth_(inst_90735)){
var statearr_90762_90822 = state_90749__$1;
(statearr_90762_90822[(1)] = (12));

} else {
var statearr_90763_90823 = state_90749__$1;
(statearr_90763_90823[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90750 === (3))){
var inst_90747 = (state_90749[(2)]);
var state_90749__$1 = state_90749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90749__$1,inst_90747);
} else {
if((state_val_90750 === (12))){
var inst_90713 = (state_90749[(8)]);
var inst_90737 = cljs.core.vec.call(null,inst_90713);
var state_90749__$1 = state_90749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90749__$1,(15),out,inst_90737);
} else {
if((state_val_90750 === (2))){
var state_90749__$1 = state_90749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90749__$1,(4),ch);
} else {
if((state_val_90750 === (11))){
var inst_90729 = (state_90749[(2)]);
var inst_90730 = (new Array(n));
var inst_90713 = inst_90730;
var inst_90714 = (0);
var state_90749__$1 = (function (){var statearr_90766 = state_90749;
(statearr_90766[(7)] = inst_90714);

(statearr_90766[(8)] = inst_90713);

(statearr_90766[(10)] = inst_90729);

return statearr_90766;
})();
var statearr_90767_90824 = state_90749__$1;
(statearr_90767_90824[(2)] = null);

(statearr_90767_90824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90750 === (9))){
var inst_90713 = (state_90749[(8)]);
var inst_90727 = cljs.core.vec.call(null,inst_90713);
var state_90749__$1 = state_90749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90749__$1,(11),out,inst_90727);
} else {
if((state_val_90750 === (5))){
var inst_90722 = (state_90749[(11)]);
var inst_90714 = (state_90749[(7)]);
var inst_90713 = (state_90749[(8)]);
var inst_90717 = (state_90749[(9)]);
var inst_90721 = (inst_90713[inst_90714] = inst_90717);
var inst_90722__$1 = (inst_90714 + (1));
var inst_90723 = (inst_90722__$1 < n);
var state_90749__$1 = (function (){var statearr_90769 = state_90749;
(statearr_90769[(11)] = inst_90722__$1);

(statearr_90769[(12)] = inst_90721);

return statearr_90769;
})();
if(cljs.core.truth_(inst_90723)){
var statearr_90770_90827 = state_90749__$1;
(statearr_90770_90827[(1)] = (8));

} else {
var statearr_90771_90828 = state_90749__$1;
(statearr_90771_90828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90750 === (14))){
var inst_90742 = (state_90749[(2)]);
var inst_90743 = cljs.core.async.close_BANG_.call(null,out);
var state_90749__$1 = (function (){var statearr_90773 = state_90749;
(statearr_90773[(13)] = inst_90742);

return statearr_90773;
})();
var statearr_90774_90829 = state_90749__$1;
(statearr_90774_90829[(2)] = inst_90743);

(statearr_90774_90829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90750 === (10))){
var inst_90733 = (state_90749[(2)]);
var state_90749__$1 = state_90749;
var statearr_90775_90830 = state_90749__$1;
(statearr_90775_90830[(2)] = inst_90733);

(statearr_90775_90830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90750 === (8))){
var inst_90722 = (state_90749[(11)]);
var inst_90713 = (state_90749[(8)]);
var tmp90772 = inst_90713;
var inst_90713__$1 = tmp90772;
var inst_90714 = inst_90722;
var state_90749__$1 = (function (){var statearr_90780 = state_90749;
(statearr_90780[(7)] = inst_90714);

(statearr_90780[(8)] = inst_90713__$1);

return statearr_90780;
})();
var statearr_90781_90831 = state_90749__$1;
(statearr_90781_90831[(2)] = null);

(statearr_90781_90831[(1)] = (2));


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
});})(c__41196__auto___90795,out))
;
return ((function (switch__40432__auto__,c__41196__auto___90795,out){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_90785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90785[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_90785[(1)] = (1));

return statearr_90785;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_90749){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_90749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e90786){if((e90786 instanceof Object)){
var ex__40436__auto__ = e90786;
var statearr_90787_90841 = state_90749;
(statearr_90787_90841[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90846 = state_90749;
state_90749 = G__90846;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_90749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_90749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___90795,out))
})();
var state__41198__auto__ = (function (){var statearr_90788 = f__41197__auto__.call(null);
(statearr_90788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___90795);

return statearr_90788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___90795,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args90847 = [];
var len__36491__auto___90935 = arguments.length;
var i__36492__auto___90939 = (0);
while(true){
if((i__36492__auto___90939 < len__36491__auto___90935)){
args90847.push((arguments[i__36492__auto___90939]));

var G__90940 = (i__36492__auto___90939 + (1));
i__36492__auto___90939 = G__90940;
continue;
} else {
}
break;
}

var G__90849 = args90847.length;
switch (G__90849) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args90847.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__41196__auto___90946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___90946,out){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___90946,out){
return (function (state_90899){
var state_val_90900 = (state_90899[(1)]);
if((state_val_90900 === (7))){
var inst_90895 = (state_90899[(2)]);
var state_90899__$1 = state_90899;
var statearr_90901_90947 = state_90899__$1;
(statearr_90901_90947[(2)] = inst_90895);

(statearr_90901_90947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90900 === (1))){
var inst_90854 = [];
var inst_90855 = inst_90854;
var inst_90856 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_90899__$1 = (function (){var statearr_90902 = state_90899;
(statearr_90902[(7)] = inst_90855);

(statearr_90902[(8)] = inst_90856);

return statearr_90902;
})();
var statearr_90903_90948 = state_90899__$1;
(statearr_90903_90948[(2)] = null);

(statearr_90903_90948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90900 === (4))){
var inst_90859 = (state_90899[(9)]);
var inst_90859__$1 = (state_90899[(2)]);
var inst_90860 = (inst_90859__$1 == null);
var inst_90861 = cljs.core.not.call(null,inst_90860);
var state_90899__$1 = (function (){var statearr_90904 = state_90899;
(statearr_90904[(9)] = inst_90859__$1);

return statearr_90904;
})();
if(inst_90861){
var statearr_90905_90949 = state_90899__$1;
(statearr_90905_90949[(1)] = (5));

} else {
var statearr_90906_90950 = state_90899__$1;
(statearr_90906_90950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90900 === (15))){
var inst_90889 = (state_90899[(2)]);
var state_90899__$1 = state_90899;
var statearr_90907_90953 = state_90899__$1;
(statearr_90907_90953[(2)] = inst_90889);

(statearr_90907_90953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90900 === (13))){
var state_90899__$1 = state_90899;
var statearr_90908_90957 = state_90899__$1;
(statearr_90908_90957[(2)] = null);

(statearr_90908_90957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90900 === (6))){
var inst_90855 = (state_90899[(7)]);
var inst_90884 = inst_90855.length;
var inst_90885 = (inst_90884 > (0));
var state_90899__$1 = state_90899;
if(cljs.core.truth_(inst_90885)){
var statearr_90909_90960 = state_90899__$1;
(statearr_90909_90960[(1)] = (12));

} else {
var statearr_90910_90967 = state_90899__$1;
(statearr_90910_90967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90900 === (3))){
var inst_90897 = (state_90899[(2)]);
var state_90899__$1 = state_90899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90899__$1,inst_90897);
} else {
if((state_val_90900 === (12))){
var inst_90855 = (state_90899[(7)]);
var inst_90887 = cljs.core.vec.call(null,inst_90855);
var state_90899__$1 = state_90899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90899__$1,(15),out,inst_90887);
} else {
if((state_val_90900 === (2))){
var state_90899__$1 = state_90899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90899__$1,(4),ch);
} else {
if((state_val_90900 === (11))){
var inst_90859 = (state_90899[(9)]);
var inst_90864 = (state_90899[(10)]);
var inst_90877 = (state_90899[(2)]);
var inst_90878 = [];
var inst_90879 = inst_90878.push(inst_90859);
var inst_90855 = inst_90878;
var inst_90856 = inst_90864;
var state_90899__$1 = (function (){var statearr_90911 = state_90899;
(statearr_90911[(11)] = inst_90877);

(statearr_90911[(7)] = inst_90855);

(statearr_90911[(8)] = inst_90856);

(statearr_90911[(12)] = inst_90879);

return statearr_90911;
})();
var statearr_90912_90979 = state_90899__$1;
(statearr_90912_90979[(2)] = null);

(statearr_90912_90979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90900 === (9))){
var inst_90855 = (state_90899[(7)]);
var inst_90875 = cljs.core.vec.call(null,inst_90855);
var state_90899__$1 = state_90899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_90899__$1,(11),out,inst_90875);
} else {
if((state_val_90900 === (5))){
var inst_90859 = (state_90899[(9)]);
var inst_90856 = (state_90899[(8)]);
var inst_90864 = (state_90899[(10)]);
var inst_90864__$1 = f.call(null,inst_90859);
var inst_90868 = cljs.core._EQ_.call(null,inst_90864__$1,inst_90856);
var inst_90869 = cljs.core.keyword_identical_QMARK_.call(null,inst_90856,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_90870 = (inst_90868) || (inst_90869);
var state_90899__$1 = (function (){var statearr_90913 = state_90899;
(statearr_90913[(10)] = inst_90864__$1);

return statearr_90913;
})();
if(cljs.core.truth_(inst_90870)){
var statearr_90914_90986 = state_90899__$1;
(statearr_90914_90986[(1)] = (8));

} else {
var statearr_90915_90988 = state_90899__$1;
(statearr_90915_90988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90900 === (14))){
var inst_90892 = (state_90899[(2)]);
var inst_90893 = cljs.core.async.close_BANG_.call(null,out);
var state_90899__$1 = (function (){var statearr_90917 = state_90899;
(statearr_90917[(13)] = inst_90892);

return statearr_90917;
})();
var statearr_90918_90989 = state_90899__$1;
(statearr_90918_90989[(2)] = inst_90893);

(statearr_90918_90989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90900 === (10))){
var inst_90882 = (state_90899[(2)]);
var state_90899__$1 = state_90899;
var statearr_90919_90990 = state_90899__$1;
(statearr_90919_90990[(2)] = inst_90882);

(statearr_90919_90990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90900 === (8))){
var inst_90855 = (state_90899[(7)]);
var inst_90859 = (state_90899[(9)]);
var inst_90864 = (state_90899[(10)]);
var inst_90872 = inst_90855.push(inst_90859);
var tmp90916 = inst_90855;
var inst_90855__$1 = tmp90916;
var inst_90856 = inst_90864;
var state_90899__$1 = (function (){var statearr_90920 = state_90899;
(statearr_90920[(7)] = inst_90855__$1);

(statearr_90920[(8)] = inst_90856);

(statearr_90920[(14)] = inst_90872);

return statearr_90920;
})();
var statearr_90921_90995 = state_90899__$1;
(statearr_90921_90995[(2)] = null);

(statearr_90921_90995[(1)] = (2));


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
});})(c__41196__auto___90946,out))
;
return ((function (switch__40432__auto__,c__41196__auto___90946,out){
return (function() {
var cljs$core$async$state_machine__40433__auto__ = null;
var cljs$core$async$state_machine__40433__auto____0 = (function (){
var statearr_90927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90927[(0)] = cljs$core$async$state_machine__40433__auto__);

(statearr_90927[(1)] = (1));

return statearr_90927;
});
var cljs$core$async$state_machine__40433__auto____1 = (function (state_90899){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_90899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e90928){if((e90928 instanceof Object)){
var ex__40436__auto__ = e90928;
var statearr_90929_90998 = state_90899;
(statearr_90929_90998[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91005 = state_90899;
state_90899 = G__91005;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
cljs$core$async$state_machine__40433__auto__ = function(state_90899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40433__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40433__auto____1.call(this,state_90899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40433__auto____0;
cljs$core$async$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40433__auto____1;
return cljs$core$async$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___90946,out))
})();
var state__41198__auto__ = (function (){var statearr_90934 = f__41197__auto__.call(null);
(statearr_90934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___90946);

return statearr_90934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___90946,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
