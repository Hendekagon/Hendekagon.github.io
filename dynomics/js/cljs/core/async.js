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
if(typeof cljs.core.async.t_cljs$core$async1885701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async1885701 = (function (fn_handler,f,meta1885702){
this.fn_handler = fn_handler;
this.f = f;
this.meta1885702 = meta1885702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1885701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1885703,meta1885702__$1){
var self__ = this;
var _1885703__$1 = this;
return (new cljs.core.async.t_cljs$core$async1885701(self__.fn_handler,self__.f,meta1885702__$1));
});

cljs.core.async.t_cljs$core$async1885701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1885703){
var self__ = this;
var _1885703__$1 = this;
return self__.meta1885702;
});

cljs.core.async.t_cljs$core$async1885701.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async1885701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async1885701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async1885701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta1885702","meta1885702",542391557,null)], null);
});

cljs.core.async.t_cljs$core$async1885701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1885701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1885701";

cljs.core.async.t_cljs$core$async1885701.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async1885701");
});

cljs.core.async.__GT_t_cljs$core$async1885701 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async1885701(fn_handler__$1,f__$1,meta1885702){
return (new cljs.core.async.t_cljs$core$async1885701(fn_handler__$1,f__$1,meta1885702));
});

}

return (new cljs.core.async.t_cljs$core$async1885701(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args1885706 = [];
var len__25219__auto___1885709 = arguments.length;
var i__25220__auto___1885710 = (0);
while(true){
if((i__25220__auto___1885710 < len__25219__auto___1885709)){
args1885706.push((arguments[i__25220__auto___1885710]));

var G__1885711 = (i__25220__auto___1885710 + (1));
i__25220__auto___1885710 = G__1885711;
continue;
} else {
}
break;
}

var G__1885708 = args1885706.length;
switch (G__1885708) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1885706.length)].join('')));

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
var args1885713 = [];
var len__25219__auto___1885716 = arguments.length;
var i__25220__auto___1885717 = (0);
while(true){
if((i__25220__auto___1885717 < len__25219__auto___1885716)){
args1885713.push((arguments[i__25220__auto___1885717]));

var G__1885718 = (i__25220__auto___1885717 + (1));
i__25220__auto___1885717 = G__1885718;
continue;
} else {
}
break;
}

var G__1885715 = args1885713.length;
switch (G__1885715) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1885713.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_1885720 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_1885720);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_1885720,ret){
return (function (){
return fn1.call(null,val_1885720);
});})(val_1885720,ret))
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
var args1885721 = [];
var len__25219__auto___1885724 = arguments.length;
var i__25220__auto___1885725 = (0);
while(true){
if((i__25220__auto___1885725 < len__25219__auto___1885724)){
args1885721.push((arguments[i__25220__auto___1885725]));

var G__1885726 = (i__25220__auto___1885725 + (1));
i__25220__auto___1885725 = G__1885726;
continue;
} else {
}
break;
}

var G__1885723 = args1885721.length;
switch (G__1885723) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1885721.length)].join('')));

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
var n__25064__auto___1885728 = n;
var x_1885729 = (0);
while(true){
if((x_1885729 < n__25064__auto___1885728)){
(a[x_1885729] = (0));

var G__1885730 = (x_1885729 + (1));
x_1885729 = G__1885730;
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

var G__1885731 = (i + (1));
i = G__1885731;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async1885735 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async1885735 = (function (alt_flag,flag,meta1885736){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta1885736 = meta1885736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1885735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_1885737,meta1885736__$1){
var self__ = this;
var _1885737__$1 = this;
return (new cljs.core.async.t_cljs$core$async1885735(self__.alt_flag,self__.flag,meta1885736__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async1885735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_1885737){
var self__ = this;
var _1885737__$1 = this;
return self__.meta1885736;
});})(flag))
;

cljs.core.async.t_cljs$core$async1885735.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async1885735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async1885735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async1885735.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta1885736","meta1885736",1862340730,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async1885735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1885735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1885735";

cljs.core.async.t_cljs$core$async1885735.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async1885735");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async1885735 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async1885735(alt_flag__$1,flag__$1,meta1885736){
return (new cljs.core.async.t_cljs$core$async1885735(alt_flag__$1,flag__$1,meta1885736));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async1885735(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async1885741 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async1885741 = (function (alt_handler,flag,cb,meta1885742){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta1885742 = meta1885742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1885741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1885743,meta1885742__$1){
var self__ = this;
var _1885743__$1 = this;
return (new cljs.core.async.t_cljs$core$async1885741(self__.alt_handler,self__.flag,self__.cb,meta1885742__$1));
});

cljs.core.async.t_cljs$core$async1885741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1885743){
var self__ = this;
var _1885743__$1 = this;
return self__.meta1885742;
});

cljs.core.async.t_cljs$core$async1885741.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async1885741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async1885741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async1885741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta1885742","meta1885742",1391258422,null)], null);
});

cljs.core.async.t_cljs$core$async1885741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1885741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1885741";

cljs.core.async.t_cljs$core$async1885741.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async1885741");
});

cljs.core.async.__GT_t_cljs$core$async1885741 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async1885741(alt_handler__$1,flag__$1,cb__$1,meta1885742){
return (new cljs.core.async.t_cljs$core$async1885741(alt_handler__$1,flag__$1,cb__$1,meta1885742));
});

}

return (new cljs.core.async.t_cljs$core$async1885741(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__1885744_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1885744_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__1885745_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__1885745_SHARP_,port], null));
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
var G__1885746 = (i + (1));
i = G__1885746;
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
var len__25219__auto___1885752 = arguments.length;
var i__25220__auto___1885753 = (0);
while(true){
if((i__25220__auto___1885753 < len__25219__auto___1885752)){
args__25226__auto__.push((arguments[i__25220__auto___1885753]));

var G__1885754 = (i__25220__auto___1885753 + (1));
i__25220__auto___1885753 = G__1885754;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((1) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25227__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__1885749){
var map__1885750 = p__1885749;
var map__1885750__$1 = ((((!((map__1885750 == null)))?((((map__1885750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1885750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1885750):map__1885750);
var opts = map__1885750__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq1885747){
var G__1885748 = cljs.core.first.call(null,seq1885747);
var seq1885747__$1 = cljs.core.next.call(null,seq1885747);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1885748,seq1885747__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args1885755 = [];
var len__25219__auto___1885805 = arguments.length;
var i__25220__auto___1885806 = (0);
while(true){
if((i__25220__auto___1885806 < len__25219__auto___1885805)){
args1885755.push((arguments[i__25220__auto___1885806]));

var G__1885807 = (i__25220__auto___1885806 + (1));
i__25220__auto___1885806 = G__1885807;
continue;
} else {
}
break;
}

var G__1885757 = args1885755.length;
switch (G__1885757) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1885755.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35562__auto___1885809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1885809){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1885809){
return (function (state_1885781){
var state_val_1885782 = (state_1885781[(1)]);
if((state_val_1885782 === (7))){
var inst_1885777 = (state_1885781[(2)]);
var state_1885781__$1 = state_1885781;
var statearr_1885783_1885810 = state_1885781__$1;
(statearr_1885783_1885810[(2)] = inst_1885777);

(statearr_1885783_1885810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1885782 === (1))){
var state_1885781__$1 = state_1885781;
var statearr_1885784_1885811 = state_1885781__$1;
(statearr_1885784_1885811[(2)] = null);

(statearr_1885784_1885811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1885782 === (4))){
var inst_1885760 = (state_1885781[(7)]);
var inst_1885760__$1 = (state_1885781[(2)]);
var inst_1885761 = (inst_1885760__$1 == null);
var state_1885781__$1 = (function (){var statearr_1885785 = state_1885781;
(statearr_1885785[(7)] = inst_1885760__$1);

return statearr_1885785;
})();
if(cljs.core.truth_(inst_1885761)){
var statearr_1885786_1885812 = state_1885781__$1;
(statearr_1885786_1885812[(1)] = (5));

} else {
var statearr_1885787_1885813 = state_1885781__$1;
(statearr_1885787_1885813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1885782 === (13))){
var state_1885781__$1 = state_1885781;
var statearr_1885788_1885814 = state_1885781__$1;
(statearr_1885788_1885814[(2)] = null);

(statearr_1885788_1885814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1885782 === (6))){
var inst_1885760 = (state_1885781[(7)]);
var state_1885781__$1 = state_1885781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1885781__$1,(11),to,inst_1885760);
} else {
if((state_val_1885782 === (3))){
var inst_1885779 = (state_1885781[(2)]);
var state_1885781__$1 = state_1885781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1885781__$1,inst_1885779);
} else {
if((state_val_1885782 === (12))){
var state_1885781__$1 = state_1885781;
var statearr_1885789_1885815 = state_1885781__$1;
(statearr_1885789_1885815[(2)] = null);

(statearr_1885789_1885815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1885782 === (2))){
var state_1885781__$1 = state_1885781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1885781__$1,(4),from);
} else {
if((state_val_1885782 === (11))){
var inst_1885770 = (state_1885781[(2)]);
var state_1885781__$1 = state_1885781;
if(cljs.core.truth_(inst_1885770)){
var statearr_1885790_1885816 = state_1885781__$1;
(statearr_1885790_1885816[(1)] = (12));

} else {
var statearr_1885791_1885817 = state_1885781__$1;
(statearr_1885791_1885817[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1885782 === (9))){
var state_1885781__$1 = state_1885781;
var statearr_1885792_1885818 = state_1885781__$1;
(statearr_1885792_1885818[(2)] = null);

(statearr_1885792_1885818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1885782 === (5))){
var state_1885781__$1 = state_1885781;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1885793_1885819 = state_1885781__$1;
(statearr_1885793_1885819[(1)] = (8));

} else {
var statearr_1885794_1885820 = state_1885781__$1;
(statearr_1885794_1885820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1885782 === (14))){
var inst_1885775 = (state_1885781[(2)]);
var state_1885781__$1 = state_1885781;
var statearr_1885795_1885821 = state_1885781__$1;
(statearr_1885795_1885821[(2)] = inst_1885775);

(statearr_1885795_1885821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1885782 === (10))){
var inst_1885767 = (state_1885781[(2)]);
var state_1885781__$1 = state_1885781;
var statearr_1885796_1885822 = state_1885781__$1;
(statearr_1885796_1885822[(2)] = inst_1885767);

(statearr_1885796_1885822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1885782 === (8))){
var inst_1885764 = cljs.core.async.close_BANG_.call(null,to);
var state_1885781__$1 = state_1885781;
var statearr_1885797_1885823 = state_1885781__$1;
(statearr_1885797_1885823[(2)] = inst_1885764);

(statearr_1885797_1885823[(1)] = (10));


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
});})(c__35562__auto___1885809))
;
return ((function (switch__35450__auto__,c__35562__auto___1885809){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_1885801 = [null,null,null,null,null,null,null,null];
(statearr_1885801[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_1885801[(1)] = (1));

return statearr_1885801;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_1885781){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1885781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1885802){if((e1885802 instanceof Object)){
var ex__35454__auto__ = e1885802;
var statearr_1885803_1885824 = state_1885781;
(statearr_1885803_1885824[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1885781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1885802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1885825 = state_1885781;
state_1885781 = G__1885825;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_1885781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_1885781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1885809))
})();
var state__35564__auto__ = (function (){var statearr_1885804 = f__35563__auto__.call(null);
(statearr_1885804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1885809);

return statearr_1885804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1885809))
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
return (function (p__1886009){
var vec__1886010 = p__1886009;
var v = cljs.core.nth.call(null,vec__1886010,(0),null);
var p = cljs.core.nth.call(null,vec__1886010,(1),null);
var job = vec__1886010;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35562__auto___1886192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1886192,res,vec__1886010,v,p,job,jobs,results){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1886192,res,vec__1886010,v,p,job,jobs,results){
return (function (state_1886015){
var state_val_1886016 = (state_1886015[(1)]);
if((state_val_1886016 === (1))){
var state_1886015__$1 = state_1886015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1886015__$1,(2),res,v);
} else {
if((state_val_1886016 === (2))){
var inst_1886012 = (state_1886015[(2)]);
var inst_1886013 = cljs.core.async.close_BANG_.call(null,res);
var state_1886015__$1 = (function (){var statearr_1886017 = state_1886015;
(statearr_1886017[(7)] = inst_1886012);

return statearr_1886017;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1886015__$1,inst_1886013);
} else {
return null;
}
}
});})(c__35562__auto___1886192,res,vec__1886010,v,p,job,jobs,results))
;
return ((function (switch__35450__auto__,c__35562__auto___1886192,res,vec__1886010,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0 = (function (){
var statearr_1886021 = [null,null,null,null,null,null,null,null];
(statearr_1886021[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__);

(statearr_1886021[(1)] = (1));

return statearr_1886021;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1 = (function (state_1886015){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1886015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1886022){if((e1886022 instanceof Object)){
var ex__35454__auto__ = e1886022;
var statearr_1886023_1886193 = state_1886015;
(statearr_1886023_1886193[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1886015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1886022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1886194 = state_1886015;
state_1886015 = G__1886194;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = function(state_1886015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1.call(this,state_1886015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1886192,res,vec__1886010,v,p,job,jobs,results))
})();
var state__35564__auto__ = (function (){var statearr_1886024 = f__35563__auto__.call(null);
(statearr_1886024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1886192);

return statearr_1886024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1886192,res,vec__1886010,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__1886025){
var vec__1886026 = p__1886025;
var v = cljs.core.nth.call(null,vec__1886026,(0),null);
var p = cljs.core.nth.call(null,vec__1886026,(1),null);
var job = vec__1886026;
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
var n__25064__auto___1886195 = n;
var __1886196 = (0);
while(true){
if((__1886196 < n__25064__auto___1886195)){
var G__1886027_1886197 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__1886027_1886197) {
case "compute":
var c__35562__auto___1886199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1886196,c__35562__auto___1886199,G__1886027_1886197,n__25064__auto___1886195,jobs,results,process,async){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (__1886196,c__35562__auto___1886199,G__1886027_1886197,n__25064__auto___1886195,jobs,results,process,async){
return (function (state_1886040){
var state_val_1886041 = (state_1886040[(1)]);
if((state_val_1886041 === (1))){
var state_1886040__$1 = state_1886040;
var statearr_1886042_1886200 = state_1886040__$1;
(statearr_1886042_1886200[(2)] = null);

(statearr_1886042_1886200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886041 === (2))){
var state_1886040__$1 = state_1886040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1886040__$1,(4),jobs);
} else {
if((state_val_1886041 === (3))){
var inst_1886038 = (state_1886040[(2)]);
var state_1886040__$1 = state_1886040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1886040__$1,inst_1886038);
} else {
if((state_val_1886041 === (4))){
var inst_1886030 = (state_1886040[(2)]);
var inst_1886031 = process.call(null,inst_1886030);
var state_1886040__$1 = state_1886040;
if(cljs.core.truth_(inst_1886031)){
var statearr_1886043_1886201 = state_1886040__$1;
(statearr_1886043_1886201[(1)] = (5));

} else {
var statearr_1886044_1886202 = state_1886040__$1;
(statearr_1886044_1886202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886041 === (5))){
var state_1886040__$1 = state_1886040;
var statearr_1886045_1886203 = state_1886040__$1;
(statearr_1886045_1886203[(2)] = null);

(statearr_1886045_1886203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886041 === (6))){
var state_1886040__$1 = state_1886040;
var statearr_1886046_1886204 = state_1886040__$1;
(statearr_1886046_1886204[(2)] = null);

(statearr_1886046_1886204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886041 === (7))){
var inst_1886036 = (state_1886040[(2)]);
var state_1886040__$1 = state_1886040;
var statearr_1886047_1886205 = state_1886040__$1;
(statearr_1886047_1886205[(2)] = inst_1886036);

(statearr_1886047_1886205[(1)] = (3));


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
});})(__1886196,c__35562__auto___1886199,G__1886027_1886197,n__25064__auto___1886195,jobs,results,process,async))
;
return ((function (__1886196,switch__35450__auto__,c__35562__auto___1886199,G__1886027_1886197,n__25064__auto___1886195,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0 = (function (){
var statearr_1886051 = [null,null,null,null,null,null,null];
(statearr_1886051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__);

(statearr_1886051[(1)] = (1));

return statearr_1886051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1 = (function (state_1886040){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1886040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1886052){if((e1886052 instanceof Object)){
var ex__35454__auto__ = e1886052;
var statearr_1886053_1886206 = state_1886040;
(statearr_1886053_1886206[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1886040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1886052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1886207 = state_1886040;
state_1886040 = G__1886207;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = function(state_1886040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1.call(this,state_1886040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__;
})()
;})(__1886196,switch__35450__auto__,c__35562__auto___1886199,G__1886027_1886197,n__25064__auto___1886195,jobs,results,process,async))
})();
var state__35564__auto__ = (function (){var statearr_1886054 = f__35563__auto__.call(null);
(statearr_1886054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1886199);

return statearr_1886054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(__1886196,c__35562__auto___1886199,G__1886027_1886197,n__25064__auto___1886195,jobs,results,process,async))
);


break;
case "async":
var c__35562__auto___1886208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__1886196,c__35562__auto___1886208,G__1886027_1886197,n__25064__auto___1886195,jobs,results,process,async){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (__1886196,c__35562__auto___1886208,G__1886027_1886197,n__25064__auto___1886195,jobs,results,process,async){
return (function (state_1886067){
var state_val_1886068 = (state_1886067[(1)]);
if((state_val_1886068 === (1))){
var state_1886067__$1 = state_1886067;
var statearr_1886069_1886209 = state_1886067__$1;
(statearr_1886069_1886209[(2)] = null);

(statearr_1886069_1886209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886068 === (2))){
var state_1886067__$1 = state_1886067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1886067__$1,(4),jobs);
} else {
if((state_val_1886068 === (3))){
var inst_1886065 = (state_1886067[(2)]);
var state_1886067__$1 = state_1886067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1886067__$1,inst_1886065);
} else {
if((state_val_1886068 === (4))){
var inst_1886057 = (state_1886067[(2)]);
var inst_1886058 = async.call(null,inst_1886057);
var state_1886067__$1 = state_1886067;
if(cljs.core.truth_(inst_1886058)){
var statearr_1886070_1886210 = state_1886067__$1;
(statearr_1886070_1886210[(1)] = (5));

} else {
var statearr_1886071_1886211 = state_1886067__$1;
(statearr_1886071_1886211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886068 === (5))){
var state_1886067__$1 = state_1886067;
var statearr_1886072_1886212 = state_1886067__$1;
(statearr_1886072_1886212[(2)] = null);

(statearr_1886072_1886212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886068 === (6))){
var state_1886067__$1 = state_1886067;
var statearr_1886073_1886213 = state_1886067__$1;
(statearr_1886073_1886213[(2)] = null);

(statearr_1886073_1886213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886068 === (7))){
var inst_1886063 = (state_1886067[(2)]);
var state_1886067__$1 = state_1886067;
var statearr_1886074_1886214 = state_1886067__$1;
(statearr_1886074_1886214[(2)] = inst_1886063);

(statearr_1886074_1886214[(1)] = (3));


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
});})(__1886196,c__35562__auto___1886208,G__1886027_1886197,n__25064__auto___1886195,jobs,results,process,async))
;
return ((function (__1886196,switch__35450__auto__,c__35562__auto___1886208,G__1886027_1886197,n__25064__auto___1886195,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0 = (function (){
var statearr_1886078 = [null,null,null,null,null,null,null];
(statearr_1886078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__);

(statearr_1886078[(1)] = (1));

return statearr_1886078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1 = (function (state_1886067){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1886067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1886079){if((e1886079 instanceof Object)){
var ex__35454__auto__ = e1886079;
var statearr_1886080_1886215 = state_1886067;
(statearr_1886080_1886215[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1886067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1886079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1886216 = state_1886067;
state_1886067 = G__1886216;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = function(state_1886067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1.call(this,state_1886067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__;
})()
;})(__1886196,switch__35450__auto__,c__35562__auto___1886208,G__1886027_1886197,n__25064__auto___1886195,jobs,results,process,async))
})();
var state__35564__auto__ = (function (){var statearr_1886081 = f__35563__auto__.call(null);
(statearr_1886081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1886208);

return statearr_1886081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(__1886196,c__35562__auto___1886208,G__1886027_1886197,n__25064__auto___1886195,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__1886217 = (__1886196 + (1));
__1886196 = G__1886217;
continue;
} else {
}
break;
}

var c__35562__auto___1886218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1886218,jobs,results,process,async){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1886218,jobs,results,process,async){
return (function (state_1886103){
var state_val_1886104 = (state_1886103[(1)]);
if((state_val_1886104 === (1))){
var state_1886103__$1 = state_1886103;
var statearr_1886105_1886219 = state_1886103__$1;
(statearr_1886105_1886219[(2)] = null);

(statearr_1886105_1886219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886104 === (2))){
var state_1886103__$1 = state_1886103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1886103__$1,(4),from);
} else {
if((state_val_1886104 === (3))){
var inst_1886101 = (state_1886103[(2)]);
var state_1886103__$1 = state_1886103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1886103__$1,inst_1886101);
} else {
if((state_val_1886104 === (4))){
var inst_1886084 = (state_1886103[(7)]);
var inst_1886084__$1 = (state_1886103[(2)]);
var inst_1886085 = (inst_1886084__$1 == null);
var state_1886103__$1 = (function (){var statearr_1886106 = state_1886103;
(statearr_1886106[(7)] = inst_1886084__$1);

return statearr_1886106;
})();
if(cljs.core.truth_(inst_1886085)){
var statearr_1886107_1886220 = state_1886103__$1;
(statearr_1886107_1886220[(1)] = (5));

} else {
var statearr_1886108_1886221 = state_1886103__$1;
(statearr_1886108_1886221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886104 === (5))){
var inst_1886087 = cljs.core.async.close_BANG_.call(null,jobs);
var state_1886103__$1 = state_1886103;
var statearr_1886109_1886222 = state_1886103__$1;
(statearr_1886109_1886222[(2)] = inst_1886087);

(statearr_1886109_1886222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886104 === (6))){
var inst_1886089 = (state_1886103[(8)]);
var inst_1886084 = (state_1886103[(7)]);
var inst_1886089__$1 = cljs.core.async.chan.call(null,(1));
var inst_1886090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_1886091 = [inst_1886084,inst_1886089__$1];
var inst_1886092 = (new cljs.core.PersistentVector(null,2,(5),inst_1886090,inst_1886091,null));
var state_1886103__$1 = (function (){var statearr_1886110 = state_1886103;
(statearr_1886110[(8)] = inst_1886089__$1);

return statearr_1886110;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1886103__$1,(8),jobs,inst_1886092);
} else {
if((state_val_1886104 === (7))){
var inst_1886099 = (state_1886103[(2)]);
var state_1886103__$1 = state_1886103;
var statearr_1886111_1886223 = state_1886103__$1;
(statearr_1886111_1886223[(2)] = inst_1886099);

(statearr_1886111_1886223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886104 === (8))){
var inst_1886089 = (state_1886103[(8)]);
var inst_1886094 = (state_1886103[(2)]);
var state_1886103__$1 = (function (){var statearr_1886112 = state_1886103;
(statearr_1886112[(9)] = inst_1886094);

return statearr_1886112;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1886103__$1,(9),results,inst_1886089);
} else {
if((state_val_1886104 === (9))){
var inst_1886096 = (state_1886103[(2)]);
var state_1886103__$1 = (function (){var statearr_1886113 = state_1886103;
(statearr_1886113[(10)] = inst_1886096);

return statearr_1886113;
})();
var statearr_1886114_1886224 = state_1886103__$1;
(statearr_1886114_1886224[(2)] = null);

(statearr_1886114_1886224[(1)] = (2));


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
});})(c__35562__auto___1886218,jobs,results,process,async))
;
return ((function (switch__35450__auto__,c__35562__auto___1886218,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0 = (function (){
var statearr_1886118 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1886118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__);

(statearr_1886118[(1)] = (1));

return statearr_1886118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1 = (function (state_1886103){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1886103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1886119){if((e1886119 instanceof Object)){
var ex__35454__auto__ = e1886119;
var statearr_1886120_1886225 = state_1886103;
(statearr_1886120_1886225[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1886103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1886119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1886226 = state_1886103;
state_1886103 = G__1886226;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = function(state_1886103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1.call(this,state_1886103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1886218,jobs,results,process,async))
})();
var state__35564__auto__ = (function (){var statearr_1886121 = f__35563__auto__.call(null);
(statearr_1886121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1886218);

return statearr_1886121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1886218,jobs,results,process,async))
);


var c__35562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto__,jobs,results,process,async){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto__,jobs,results,process,async){
return (function (state_1886159){
var state_val_1886160 = (state_1886159[(1)]);
if((state_val_1886160 === (7))){
var inst_1886155 = (state_1886159[(2)]);
var state_1886159__$1 = state_1886159;
var statearr_1886161_1886227 = state_1886159__$1;
(statearr_1886161_1886227[(2)] = inst_1886155);

(statearr_1886161_1886227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (20))){
var state_1886159__$1 = state_1886159;
var statearr_1886162_1886228 = state_1886159__$1;
(statearr_1886162_1886228[(2)] = null);

(statearr_1886162_1886228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (1))){
var state_1886159__$1 = state_1886159;
var statearr_1886163_1886229 = state_1886159__$1;
(statearr_1886163_1886229[(2)] = null);

(statearr_1886163_1886229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (4))){
var inst_1886124 = (state_1886159[(7)]);
var inst_1886124__$1 = (state_1886159[(2)]);
var inst_1886125 = (inst_1886124__$1 == null);
var state_1886159__$1 = (function (){var statearr_1886164 = state_1886159;
(statearr_1886164[(7)] = inst_1886124__$1);

return statearr_1886164;
})();
if(cljs.core.truth_(inst_1886125)){
var statearr_1886165_1886230 = state_1886159__$1;
(statearr_1886165_1886230[(1)] = (5));

} else {
var statearr_1886166_1886231 = state_1886159__$1;
(statearr_1886166_1886231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (15))){
var inst_1886137 = (state_1886159[(8)]);
var state_1886159__$1 = state_1886159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1886159__$1,(18),to,inst_1886137);
} else {
if((state_val_1886160 === (21))){
var inst_1886150 = (state_1886159[(2)]);
var state_1886159__$1 = state_1886159;
var statearr_1886167_1886232 = state_1886159__$1;
(statearr_1886167_1886232[(2)] = inst_1886150);

(statearr_1886167_1886232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (13))){
var inst_1886152 = (state_1886159[(2)]);
var state_1886159__$1 = (function (){var statearr_1886168 = state_1886159;
(statearr_1886168[(9)] = inst_1886152);

return statearr_1886168;
})();
var statearr_1886169_1886233 = state_1886159__$1;
(statearr_1886169_1886233[(2)] = null);

(statearr_1886169_1886233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (6))){
var inst_1886124 = (state_1886159[(7)]);
var state_1886159__$1 = state_1886159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1886159__$1,(11),inst_1886124);
} else {
if((state_val_1886160 === (17))){
var inst_1886145 = (state_1886159[(2)]);
var state_1886159__$1 = state_1886159;
if(cljs.core.truth_(inst_1886145)){
var statearr_1886170_1886234 = state_1886159__$1;
(statearr_1886170_1886234[(1)] = (19));

} else {
var statearr_1886171_1886235 = state_1886159__$1;
(statearr_1886171_1886235[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (3))){
var inst_1886157 = (state_1886159[(2)]);
var state_1886159__$1 = state_1886159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1886159__$1,inst_1886157);
} else {
if((state_val_1886160 === (12))){
var inst_1886134 = (state_1886159[(10)]);
var state_1886159__$1 = state_1886159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1886159__$1,(14),inst_1886134);
} else {
if((state_val_1886160 === (2))){
var state_1886159__$1 = state_1886159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1886159__$1,(4),results);
} else {
if((state_val_1886160 === (19))){
var state_1886159__$1 = state_1886159;
var statearr_1886172_1886236 = state_1886159__$1;
(statearr_1886172_1886236[(2)] = null);

(statearr_1886172_1886236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (11))){
var inst_1886134 = (state_1886159[(2)]);
var state_1886159__$1 = (function (){var statearr_1886173 = state_1886159;
(statearr_1886173[(10)] = inst_1886134);

return statearr_1886173;
})();
var statearr_1886174_1886237 = state_1886159__$1;
(statearr_1886174_1886237[(2)] = null);

(statearr_1886174_1886237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (9))){
var state_1886159__$1 = state_1886159;
var statearr_1886175_1886238 = state_1886159__$1;
(statearr_1886175_1886238[(2)] = null);

(statearr_1886175_1886238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (5))){
var state_1886159__$1 = state_1886159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1886176_1886239 = state_1886159__$1;
(statearr_1886176_1886239[(1)] = (8));

} else {
var statearr_1886177_1886240 = state_1886159__$1;
(statearr_1886177_1886240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (14))){
var inst_1886137 = (state_1886159[(8)]);
var inst_1886139 = (state_1886159[(11)]);
var inst_1886137__$1 = (state_1886159[(2)]);
var inst_1886138 = (inst_1886137__$1 == null);
var inst_1886139__$1 = cljs.core.not.call(null,inst_1886138);
var state_1886159__$1 = (function (){var statearr_1886178 = state_1886159;
(statearr_1886178[(8)] = inst_1886137__$1);

(statearr_1886178[(11)] = inst_1886139__$1);

return statearr_1886178;
})();
if(inst_1886139__$1){
var statearr_1886179_1886241 = state_1886159__$1;
(statearr_1886179_1886241[(1)] = (15));

} else {
var statearr_1886180_1886242 = state_1886159__$1;
(statearr_1886180_1886242[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (16))){
var inst_1886139 = (state_1886159[(11)]);
var state_1886159__$1 = state_1886159;
var statearr_1886181_1886243 = state_1886159__$1;
(statearr_1886181_1886243[(2)] = inst_1886139);

(statearr_1886181_1886243[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (10))){
var inst_1886131 = (state_1886159[(2)]);
var state_1886159__$1 = state_1886159;
var statearr_1886182_1886244 = state_1886159__$1;
(statearr_1886182_1886244[(2)] = inst_1886131);

(statearr_1886182_1886244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (18))){
var inst_1886142 = (state_1886159[(2)]);
var state_1886159__$1 = state_1886159;
var statearr_1886183_1886245 = state_1886159__$1;
(statearr_1886183_1886245[(2)] = inst_1886142);

(statearr_1886183_1886245[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886160 === (8))){
var inst_1886128 = cljs.core.async.close_BANG_.call(null,to);
var state_1886159__$1 = state_1886159;
var statearr_1886184_1886246 = state_1886159__$1;
(statearr_1886184_1886246[(2)] = inst_1886128);

(statearr_1886184_1886246[(1)] = (10));


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
var statearr_1886188 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1886188[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__);

(statearr_1886188[(1)] = (1));

return statearr_1886188;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1 = (function (state_1886159){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1886159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1886189){if((e1886189 instanceof Object)){
var ex__35454__auto__ = e1886189;
var statearr_1886190_1886247 = state_1886159;
(statearr_1886190_1886247[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1886159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1886189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1886248 = state_1886159;
state_1886159 = G__1886248;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__ = function(state_1886159){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1.call(this,state_1886159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35451__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto__,jobs,results,process,async))
})();
var state__35564__auto__ = (function (){var statearr_1886191 = f__35563__auto__.call(null);
(statearr_1886191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto__);

return statearr_1886191;
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
var args1886249 = [];
var len__25219__auto___1886252 = arguments.length;
var i__25220__auto___1886253 = (0);
while(true){
if((i__25220__auto___1886253 < len__25219__auto___1886252)){
args1886249.push((arguments[i__25220__auto___1886253]));

var G__1886254 = (i__25220__auto___1886253 + (1));
i__25220__auto___1886253 = G__1886254;
continue;
} else {
}
break;
}

var G__1886251 = args1886249.length;
switch (G__1886251) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1886249.length)].join('')));

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
var args1886256 = [];
var len__25219__auto___1886259 = arguments.length;
var i__25220__auto___1886260 = (0);
while(true){
if((i__25220__auto___1886260 < len__25219__auto___1886259)){
args1886256.push((arguments[i__25220__auto___1886260]));

var G__1886261 = (i__25220__auto___1886260 + (1));
i__25220__auto___1886260 = G__1886261;
continue;
} else {
}
break;
}

var G__1886258 = args1886256.length;
switch (G__1886258) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1886256.length)].join('')));

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
var args1886263 = [];
var len__25219__auto___1886316 = arguments.length;
var i__25220__auto___1886317 = (0);
while(true){
if((i__25220__auto___1886317 < len__25219__auto___1886316)){
args1886263.push((arguments[i__25220__auto___1886317]));

var G__1886318 = (i__25220__auto___1886317 + (1));
i__25220__auto___1886317 = G__1886318;
continue;
} else {
}
break;
}

var G__1886265 = args1886263.length;
switch (G__1886265) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1886263.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35562__auto___1886320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1886320,tc,fc){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1886320,tc,fc){
return (function (state_1886291){
var state_val_1886292 = (state_1886291[(1)]);
if((state_val_1886292 === (7))){
var inst_1886287 = (state_1886291[(2)]);
var state_1886291__$1 = state_1886291;
var statearr_1886293_1886321 = state_1886291__$1;
(statearr_1886293_1886321[(2)] = inst_1886287);

(statearr_1886293_1886321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886292 === (1))){
var state_1886291__$1 = state_1886291;
var statearr_1886294_1886322 = state_1886291__$1;
(statearr_1886294_1886322[(2)] = null);

(statearr_1886294_1886322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886292 === (4))){
var inst_1886268 = (state_1886291[(7)]);
var inst_1886268__$1 = (state_1886291[(2)]);
var inst_1886269 = (inst_1886268__$1 == null);
var state_1886291__$1 = (function (){var statearr_1886295 = state_1886291;
(statearr_1886295[(7)] = inst_1886268__$1);

return statearr_1886295;
})();
if(cljs.core.truth_(inst_1886269)){
var statearr_1886296_1886323 = state_1886291__$1;
(statearr_1886296_1886323[(1)] = (5));

} else {
var statearr_1886297_1886324 = state_1886291__$1;
(statearr_1886297_1886324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886292 === (13))){
var state_1886291__$1 = state_1886291;
var statearr_1886298_1886325 = state_1886291__$1;
(statearr_1886298_1886325[(2)] = null);

(statearr_1886298_1886325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886292 === (6))){
var inst_1886268 = (state_1886291[(7)]);
var inst_1886274 = p.call(null,inst_1886268);
var state_1886291__$1 = state_1886291;
if(cljs.core.truth_(inst_1886274)){
var statearr_1886299_1886326 = state_1886291__$1;
(statearr_1886299_1886326[(1)] = (9));

} else {
var statearr_1886300_1886327 = state_1886291__$1;
(statearr_1886300_1886327[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886292 === (3))){
var inst_1886289 = (state_1886291[(2)]);
var state_1886291__$1 = state_1886291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1886291__$1,inst_1886289);
} else {
if((state_val_1886292 === (12))){
var state_1886291__$1 = state_1886291;
var statearr_1886301_1886328 = state_1886291__$1;
(statearr_1886301_1886328[(2)] = null);

(statearr_1886301_1886328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886292 === (2))){
var state_1886291__$1 = state_1886291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1886291__$1,(4),ch);
} else {
if((state_val_1886292 === (11))){
var inst_1886268 = (state_1886291[(7)]);
var inst_1886278 = (state_1886291[(2)]);
var state_1886291__$1 = state_1886291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1886291__$1,(8),inst_1886278,inst_1886268);
} else {
if((state_val_1886292 === (9))){
var state_1886291__$1 = state_1886291;
var statearr_1886302_1886329 = state_1886291__$1;
(statearr_1886302_1886329[(2)] = tc);

(statearr_1886302_1886329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886292 === (5))){
var inst_1886271 = cljs.core.async.close_BANG_.call(null,tc);
var inst_1886272 = cljs.core.async.close_BANG_.call(null,fc);
var state_1886291__$1 = (function (){var statearr_1886303 = state_1886291;
(statearr_1886303[(8)] = inst_1886271);

return statearr_1886303;
})();
var statearr_1886304_1886330 = state_1886291__$1;
(statearr_1886304_1886330[(2)] = inst_1886272);

(statearr_1886304_1886330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886292 === (14))){
var inst_1886285 = (state_1886291[(2)]);
var state_1886291__$1 = state_1886291;
var statearr_1886305_1886331 = state_1886291__$1;
(statearr_1886305_1886331[(2)] = inst_1886285);

(statearr_1886305_1886331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886292 === (10))){
var state_1886291__$1 = state_1886291;
var statearr_1886306_1886332 = state_1886291__$1;
(statearr_1886306_1886332[(2)] = fc);

(statearr_1886306_1886332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886292 === (8))){
var inst_1886280 = (state_1886291[(2)]);
var state_1886291__$1 = state_1886291;
if(cljs.core.truth_(inst_1886280)){
var statearr_1886307_1886333 = state_1886291__$1;
(statearr_1886307_1886333[(1)] = (12));

} else {
var statearr_1886308_1886334 = state_1886291__$1;
(statearr_1886308_1886334[(1)] = (13));

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
});})(c__35562__auto___1886320,tc,fc))
;
return ((function (switch__35450__auto__,c__35562__auto___1886320,tc,fc){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_1886312 = [null,null,null,null,null,null,null,null,null];
(statearr_1886312[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_1886312[(1)] = (1));

return statearr_1886312;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_1886291){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1886291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1886313){if((e1886313 instanceof Object)){
var ex__35454__auto__ = e1886313;
var statearr_1886314_1886335 = state_1886291;
(statearr_1886314_1886335[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1886291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1886313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1886336 = state_1886291;
state_1886291 = G__1886336;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_1886291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_1886291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1886320,tc,fc))
})();
var state__35564__auto__ = (function (){var statearr_1886315 = f__35563__auto__.call(null);
(statearr_1886315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1886320);

return statearr_1886315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1886320,tc,fc))
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
return (function (state_1886383){
var state_val_1886384 = (state_1886383[(1)]);
if((state_val_1886384 === (1))){
var inst_1886369 = init;
var state_1886383__$1 = (function (){var statearr_1886385 = state_1886383;
(statearr_1886385[(7)] = inst_1886369);

return statearr_1886385;
})();
var statearr_1886386_1886401 = state_1886383__$1;
(statearr_1886386_1886401[(2)] = null);

(statearr_1886386_1886401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886384 === (2))){
var state_1886383__$1 = state_1886383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1886383__$1,(4),ch);
} else {
if((state_val_1886384 === (3))){
var inst_1886381 = (state_1886383[(2)]);
var state_1886383__$1 = state_1886383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1886383__$1,inst_1886381);
} else {
if((state_val_1886384 === (4))){
var inst_1886372 = (state_1886383[(8)]);
var inst_1886372__$1 = (state_1886383[(2)]);
var inst_1886373 = (inst_1886372__$1 == null);
var state_1886383__$1 = (function (){var statearr_1886387 = state_1886383;
(statearr_1886387[(8)] = inst_1886372__$1);

return statearr_1886387;
})();
if(cljs.core.truth_(inst_1886373)){
var statearr_1886388_1886402 = state_1886383__$1;
(statearr_1886388_1886402[(1)] = (5));

} else {
var statearr_1886389_1886403 = state_1886383__$1;
(statearr_1886389_1886403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886384 === (5))){
var inst_1886369 = (state_1886383[(7)]);
var state_1886383__$1 = state_1886383;
var statearr_1886390_1886404 = state_1886383__$1;
(statearr_1886390_1886404[(2)] = inst_1886369);

(statearr_1886390_1886404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886384 === (6))){
var inst_1886369 = (state_1886383[(7)]);
var inst_1886372 = (state_1886383[(8)]);
var inst_1886376 = f.call(null,inst_1886369,inst_1886372);
var inst_1886369__$1 = inst_1886376;
var state_1886383__$1 = (function (){var statearr_1886391 = state_1886383;
(statearr_1886391[(7)] = inst_1886369__$1);

return statearr_1886391;
})();
var statearr_1886392_1886405 = state_1886383__$1;
(statearr_1886392_1886405[(2)] = null);

(statearr_1886392_1886405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886384 === (7))){
var inst_1886379 = (state_1886383[(2)]);
var state_1886383__$1 = state_1886383;
var statearr_1886393_1886406 = state_1886383__$1;
(statearr_1886393_1886406[(2)] = inst_1886379);

(statearr_1886393_1886406[(1)] = (3));


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
var statearr_1886397 = [null,null,null,null,null,null,null,null,null];
(statearr_1886397[(0)] = cljs$core$async$reduce_$_state_machine__35451__auto__);

(statearr_1886397[(1)] = (1));

return statearr_1886397;
});
var cljs$core$async$reduce_$_state_machine__35451__auto____1 = (function (state_1886383){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1886383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1886398){if((e1886398 instanceof Object)){
var ex__35454__auto__ = e1886398;
var statearr_1886399_1886407 = state_1886383;
(statearr_1886399_1886407[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1886383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1886398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1886408 = state_1886383;
state_1886383 = G__1886408;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35451__auto__ = function(state_1886383){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35451__auto____1.call(this,state_1886383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35451__auto____0;
cljs$core$async$reduce_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35451__auto____1;
return cljs$core$async$reduce_$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto__))
})();
var state__35564__auto__ = (function (){var statearr_1886400 = f__35563__auto__.call(null);
(statearr_1886400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto__);

return statearr_1886400;
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
var args1886409 = [];
var len__25219__auto___1886461 = arguments.length;
var i__25220__auto___1886462 = (0);
while(true){
if((i__25220__auto___1886462 < len__25219__auto___1886461)){
args1886409.push((arguments[i__25220__auto___1886462]));

var G__1886463 = (i__25220__auto___1886462 + (1));
i__25220__auto___1886462 = G__1886463;
continue;
} else {
}
break;
}

var G__1886411 = args1886409.length;
switch (G__1886411) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1886409.length)].join('')));

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
return (function (state_1886436){
var state_val_1886437 = (state_1886436[(1)]);
if((state_val_1886437 === (7))){
var inst_1886418 = (state_1886436[(2)]);
var state_1886436__$1 = state_1886436;
var statearr_1886438_1886465 = state_1886436__$1;
(statearr_1886438_1886465[(2)] = inst_1886418);

(statearr_1886438_1886465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886437 === (1))){
var inst_1886412 = cljs.core.seq.call(null,coll);
var inst_1886413 = inst_1886412;
var state_1886436__$1 = (function (){var statearr_1886439 = state_1886436;
(statearr_1886439[(7)] = inst_1886413);

return statearr_1886439;
})();
var statearr_1886440_1886466 = state_1886436__$1;
(statearr_1886440_1886466[(2)] = null);

(statearr_1886440_1886466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886437 === (4))){
var inst_1886413 = (state_1886436[(7)]);
var inst_1886416 = cljs.core.first.call(null,inst_1886413);
var state_1886436__$1 = state_1886436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1886436__$1,(7),ch,inst_1886416);
} else {
if((state_val_1886437 === (13))){
var inst_1886430 = (state_1886436[(2)]);
var state_1886436__$1 = state_1886436;
var statearr_1886441_1886467 = state_1886436__$1;
(statearr_1886441_1886467[(2)] = inst_1886430);

(statearr_1886441_1886467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886437 === (6))){
var inst_1886421 = (state_1886436[(2)]);
var state_1886436__$1 = state_1886436;
if(cljs.core.truth_(inst_1886421)){
var statearr_1886442_1886468 = state_1886436__$1;
(statearr_1886442_1886468[(1)] = (8));

} else {
var statearr_1886443_1886469 = state_1886436__$1;
(statearr_1886443_1886469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886437 === (3))){
var inst_1886434 = (state_1886436[(2)]);
var state_1886436__$1 = state_1886436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1886436__$1,inst_1886434);
} else {
if((state_val_1886437 === (12))){
var state_1886436__$1 = state_1886436;
var statearr_1886444_1886470 = state_1886436__$1;
(statearr_1886444_1886470[(2)] = null);

(statearr_1886444_1886470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886437 === (2))){
var inst_1886413 = (state_1886436[(7)]);
var state_1886436__$1 = state_1886436;
if(cljs.core.truth_(inst_1886413)){
var statearr_1886445_1886471 = state_1886436__$1;
(statearr_1886445_1886471[(1)] = (4));

} else {
var statearr_1886446_1886472 = state_1886436__$1;
(statearr_1886446_1886472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886437 === (11))){
var inst_1886427 = cljs.core.async.close_BANG_.call(null,ch);
var state_1886436__$1 = state_1886436;
var statearr_1886447_1886473 = state_1886436__$1;
(statearr_1886447_1886473[(2)] = inst_1886427);

(statearr_1886447_1886473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886437 === (9))){
var state_1886436__$1 = state_1886436;
if(cljs.core.truth_(close_QMARK_)){
var statearr_1886448_1886474 = state_1886436__$1;
(statearr_1886448_1886474[(1)] = (11));

} else {
var statearr_1886449_1886475 = state_1886436__$1;
(statearr_1886449_1886475[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886437 === (5))){
var inst_1886413 = (state_1886436[(7)]);
var state_1886436__$1 = state_1886436;
var statearr_1886450_1886476 = state_1886436__$1;
(statearr_1886450_1886476[(2)] = inst_1886413);

(statearr_1886450_1886476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886437 === (10))){
var inst_1886432 = (state_1886436[(2)]);
var state_1886436__$1 = state_1886436;
var statearr_1886451_1886477 = state_1886436__$1;
(statearr_1886451_1886477[(2)] = inst_1886432);

(statearr_1886451_1886477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886437 === (8))){
var inst_1886413 = (state_1886436[(7)]);
var inst_1886423 = cljs.core.next.call(null,inst_1886413);
var inst_1886413__$1 = inst_1886423;
var state_1886436__$1 = (function (){var statearr_1886452 = state_1886436;
(statearr_1886452[(7)] = inst_1886413__$1);

return statearr_1886452;
})();
var statearr_1886453_1886478 = state_1886436__$1;
(statearr_1886453_1886478[(2)] = null);

(statearr_1886453_1886478[(1)] = (2));


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
var statearr_1886457 = [null,null,null,null,null,null,null,null];
(statearr_1886457[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_1886457[(1)] = (1));

return statearr_1886457;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_1886436){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1886436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1886458){if((e1886458 instanceof Object)){
var ex__35454__auto__ = e1886458;
var statearr_1886459_1886479 = state_1886436;
(statearr_1886459_1886479[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1886436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1886458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1886480 = state_1886436;
state_1886436 = G__1886480;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_1886436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_1886436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto__))
})();
var state__35564__auto__ = (function (){var statearr_1886460 = f__35563__auto__.call(null);
(statearr_1886460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto__);

return statearr_1886460;
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
if(typeof cljs.core.async.t_cljs$core$async1886702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async1886702 = (function (mult,ch,cs,meta1886703){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta1886703 = meta1886703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1886702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_1886704,meta1886703__$1){
var self__ = this;
var _1886704__$1 = this;
return (new cljs.core.async.t_cljs$core$async1886702(self__.mult,self__.ch,self__.cs,meta1886703__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async1886702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_1886704){
var self__ = this;
var _1886704__$1 = this;
return self__.meta1886703;
});})(cs))
;

cljs.core.async.t_cljs$core$async1886702.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async1886702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async1886702.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async1886702.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async1886702.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async1886702.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async1886702.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta1886703","meta1886703",1024643002,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async1886702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1886702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1886702";

cljs.core.async.t_cljs$core$async1886702.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async1886702");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async1886702 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async1886702(mult__$1,ch__$1,cs__$1,meta1886703){
return (new cljs.core.async.t_cljs$core$async1886702(mult__$1,ch__$1,cs__$1,meta1886703));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async1886702(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__35562__auto___1886923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1886923,cs,m,dchan,dctr,done){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1886923,cs,m,dchan,dctr,done){
return (function (state_1886835){
var state_val_1886836 = (state_1886835[(1)]);
if((state_val_1886836 === (7))){
var inst_1886831 = (state_1886835[(2)]);
var state_1886835__$1 = state_1886835;
var statearr_1886837_1886924 = state_1886835__$1;
(statearr_1886837_1886924[(2)] = inst_1886831);

(statearr_1886837_1886924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (20))){
var inst_1886736 = (state_1886835[(7)]);
var inst_1886746 = cljs.core.first.call(null,inst_1886736);
var inst_1886747 = cljs.core.nth.call(null,inst_1886746,(0),null);
var inst_1886748 = cljs.core.nth.call(null,inst_1886746,(1),null);
var state_1886835__$1 = (function (){var statearr_1886838 = state_1886835;
(statearr_1886838[(8)] = inst_1886747);

return statearr_1886838;
})();
if(cljs.core.truth_(inst_1886748)){
var statearr_1886839_1886925 = state_1886835__$1;
(statearr_1886839_1886925[(1)] = (22));

} else {
var statearr_1886840_1886926 = state_1886835__$1;
(statearr_1886840_1886926[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (27))){
var inst_1886776 = (state_1886835[(9)]);
var inst_1886778 = (state_1886835[(10)]);
var inst_1886783 = (state_1886835[(11)]);
var inst_1886707 = (state_1886835[(12)]);
var inst_1886783__$1 = cljs.core._nth.call(null,inst_1886776,inst_1886778);
var inst_1886784 = cljs.core.async.put_BANG_.call(null,inst_1886783__$1,inst_1886707,done);
var state_1886835__$1 = (function (){var statearr_1886841 = state_1886835;
(statearr_1886841[(11)] = inst_1886783__$1);

return statearr_1886841;
})();
if(cljs.core.truth_(inst_1886784)){
var statearr_1886842_1886927 = state_1886835__$1;
(statearr_1886842_1886927[(1)] = (30));

} else {
var statearr_1886843_1886928 = state_1886835__$1;
(statearr_1886843_1886928[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (1))){
var state_1886835__$1 = state_1886835;
var statearr_1886844_1886929 = state_1886835__$1;
(statearr_1886844_1886929[(2)] = null);

(statearr_1886844_1886929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (24))){
var inst_1886736 = (state_1886835[(7)]);
var inst_1886753 = (state_1886835[(2)]);
var inst_1886754 = cljs.core.next.call(null,inst_1886736);
var inst_1886716 = inst_1886754;
var inst_1886717 = null;
var inst_1886718 = (0);
var inst_1886719 = (0);
var state_1886835__$1 = (function (){var statearr_1886845 = state_1886835;
(statearr_1886845[(13)] = inst_1886718);

(statearr_1886845[(14)] = inst_1886717);

(statearr_1886845[(15)] = inst_1886719);

(statearr_1886845[(16)] = inst_1886716);

(statearr_1886845[(17)] = inst_1886753);

return statearr_1886845;
})();
var statearr_1886846_1886930 = state_1886835__$1;
(statearr_1886846_1886930[(2)] = null);

(statearr_1886846_1886930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (39))){
var state_1886835__$1 = state_1886835;
var statearr_1886850_1886931 = state_1886835__$1;
(statearr_1886850_1886931[(2)] = null);

(statearr_1886850_1886931[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (4))){
var inst_1886707 = (state_1886835[(12)]);
var inst_1886707__$1 = (state_1886835[(2)]);
var inst_1886708 = (inst_1886707__$1 == null);
var state_1886835__$1 = (function (){var statearr_1886851 = state_1886835;
(statearr_1886851[(12)] = inst_1886707__$1);

return statearr_1886851;
})();
if(cljs.core.truth_(inst_1886708)){
var statearr_1886852_1886932 = state_1886835__$1;
(statearr_1886852_1886932[(1)] = (5));

} else {
var statearr_1886853_1886933 = state_1886835__$1;
(statearr_1886853_1886933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (15))){
var inst_1886718 = (state_1886835[(13)]);
var inst_1886717 = (state_1886835[(14)]);
var inst_1886719 = (state_1886835[(15)]);
var inst_1886716 = (state_1886835[(16)]);
var inst_1886732 = (state_1886835[(2)]);
var inst_1886733 = (inst_1886719 + (1));
var tmp1886847 = inst_1886718;
var tmp1886848 = inst_1886717;
var tmp1886849 = inst_1886716;
var inst_1886716__$1 = tmp1886849;
var inst_1886717__$1 = tmp1886848;
var inst_1886718__$1 = tmp1886847;
var inst_1886719__$1 = inst_1886733;
var state_1886835__$1 = (function (){var statearr_1886854 = state_1886835;
(statearr_1886854[(13)] = inst_1886718__$1);

(statearr_1886854[(14)] = inst_1886717__$1);

(statearr_1886854[(18)] = inst_1886732);

(statearr_1886854[(15)] = inst_1886719__$1);

(statearr_1886854[(16)] = inst_1886716__$1);

return statearr_1886854;
})();
var statearr_1886855_1886934 = state_1886835__$1;
(statearr_1886855_1886934[(2)] = null);

(statearr_1886855_1886934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (21))){
var inst_1886757 = (state_1886835[(2)]);
var state_1886835__$1 = state_1886835;
var statearr_1886859_1886935 = state_1886835__$1;
(statearr_1886859_1886935[(2)] = inst_1886757);

(statearr_1886859_1886935[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (31))){
var inst_1886783 = (state_1886835[(11)]);
var inst_1886787 = done.call(null,null);
var inst_1886788 = cljs.core.async.untap_STAR_.call(null,m,inst_1886783);
var state_1886835__$1 = (function (){var statearr_1886860 = state_1886835;
(statearr_1886860[(19)] = inst_1886787);

return statearr_1886860;
})();
var statearr_1886861_1886936 = state_1886835__$1;
(statearr_1886861_1886936[(2)] = inst_1886788);

(statearr_1886861_1886936[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (32))){
var inst_1886775 = (state_1886835[(20)]);
var inst_1886776 = (state_1886835[(9)]);
var inst_1886777 = (state_1886835[(21)]);
var inst_1886778 = (state_1886835[(10)]);
var inst_1886790 = (state_1886835[(2)]);
var inst_1886791 = (inst_1886778 + (1));
var tmp1886856 = inst_1886775;
var tmp1886857 = inst_1886776;
var tmp1886858 = inst_1886777;
var inst_1886775__$1 = tmp1886856;
var inst_1886776__$1 = tmp1886857;
var inst_1886777__$1 = tmp1886858;
var inst_1886778__$1 = inst_1886791;
var state_1886835__$1 = (function (){var statearr_1886862 = state_1886835;
(statearr_1886862[(20)] = inst_1886775__$1);

(statearr_1886862[(9)] = inst_1886776__$1);

(statearr_1886862[(22)] = inst_1886790);

(statearr_1886862[(21)] = inst_1886777__$1);

(statearr_1886862[(10)] = inst_1886778__$1);

return statearr_1886862;
})();
var statearr_1886863_1886937 = state_1886835__$1;
(statearr_1886863_1886937[(2)] = null);

(statearr_1886863_1886937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (40))){
var inst_1886803 = (state_1886835[(23)]);
var inst_1886807 = done.call(null,null);
var inst_1886808 = cljs.core.async.untap_STAR_.call(null,m,inst_1886803);
var state_1886835__$1 = (function (){var statearr_1886864 = state_1886835;
(statearr_1886864[(24)] = inst_1886807);

return statearr_1886864;
})();
var statearr_1886865_1886938 = state_1886835__$1;
(statearr_1886865_1886938[(2)] = inst_1886808);

(statearr_1886865_1886938[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (33))){
var inst_1886794 = (state_1886835[(25)]);
var inst_1886796 = cljs.core.chunked_seq_QMARK_.call(null,inst_1886794);
var state_1886835__$1 = state_1886835;
if(inst_1886796){
var statearr_1886866_1886939 = state_1886835__$1;
(statearr_1886866_1886939[(1)] = (36));

} else {
var statearr_1886867_1886940 = state_1886835__$1;
(statearr_1886867_1886940[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (13))){
var inst_1886726 = (state_1886835[(26)]);
var inst_1886729 = cljs.core.async.close_BANG_.call(null,inst_1886726);
var state_1886835__$1 = state_1886835;
var statearr_1886868_1886941 = state_1886835__$1;
(statearr_1886868_1886941[(2)] = inst_1886729);

(statearr_1886868_1886941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (22))){
var inst_1886747 = (state_1886835[(8)]);
var inst_1886750 = cljs.core.async.close_BANG_.call(null,inst_1886747);
var state_1886835__$1 = state_1886835;
var statearr_1886869_1886942 = state_1886835__$1;
(statearr_1886869_1886942[(2)] = inst_1886750);

(statearr_1886869_1886942[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (36))){
var inst_1886794 = (state_1886835[(25)]);
var inst_1886798 = cljs.core.chunk_first.call(null,inst_1886794);
var inst_1886799 = cljs.core.chunk_rest.call(null,inst_1886794);
var inst_1886800 = cljs.core.count.call(null,inst_1886798);
var inst_1886775 = inst_1886799;
var inst_1886776 = inst_1886798;
var inst_1886777 = inst_1886800;
var inst_1886778 = (0);
var state_1886835__$1 = (function (){var statearr_1886870 = state_1886835;
(statearr_1886870[(20)] = inst_1886775);

(statearr_1886870[(9)] = inst_1886776);

(statearr_1886870[(21)] = inst_1886777);

(statearr_1886870[(10)] = inst_1886778);

return statearr_1886870;
})();
var statearr_1886871_1886943 = state_1886835__$1;
(statearr_1886871_1886943[(2)] = null);

(statearr_1886871_1886943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (41))){
var inst_1886794 = (state_1886835[(25)]);
var inst_1886810 = (state_1886835[(2)]);
var inst_1886811 = cljs.core.next.call(null,inst_1886794);
var inst_1886775 = inst_1886811;
var inst_1886776 = null;
var inst_1886777 = (0);
var inst_1886778 = (0);
var state_1886835__$1 = (function (){var statearr_1886872 = state_1886835;
(statearr_1886872[(20)] = inst_1886775);

(statearr_1886872[(9)] = inst_1886776);

(statearr_1886872[(21)] = inst_1886777);

(statearr_1886872[(27)] = inst_1886810);

(statearr_1886872[(10)] = inst_1886778);

return statearr_1886872;
})();
var statearr_1886873_1886944 = state_1886835__$1;
(statearr_1886873_1886944[(2)] = null);

(statearr_1886873_1886944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (43))){
var state_1886835__$1 = state_1886835;
var statearr_1886874_1886945 = state_1886835__$1;
(statearr_1886874_1886945[(2)] = null);

(statearr_1886874_1886945[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (29))){
var inst_1886819 = (state_1886835[(2)]);
var state_1886835__$1 = state_1886835;
var statearr_1886875_1886946 = state_1886835__$1;
(statearr_1886875_1886946[(2)] = inst_1886819);

(statearr_1886875_1886946[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (44))){
var inst_1886828 = (state_1886835[(2)]);
var state_1886835__$1 = (function (){var statearr_1886876 = state_1886835;
(statearr_1886876[(28)] = inst_1886828);

return statearr_1886876;
})();
var statearr_1886877_1886947 = state_1886835__$1;
(statearr_1886877_1886947[(2)] = null);

(statearr_1886877_1886947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (6))){
var inst_1886767 = (state_1886835[(29)]);
var inst_1886766 = cljs.core.deref.call(null,cs);
var inst_1886767__$1 = cljs.core.keys.call(null,inst_1886766);
var inst_1886768 = cljs.core.count.call(null,inst_1886767__$1);
var inst_1886769 = cljs.core.reset_BANG_.call(null,dctr,inst_1886768);
var inst_1886774 = cljs.core.seq.call(null,inst_1886767__$1);
var inst_1886775 = inst_1886774;
var inst_1886776 = null;
var inst_1886777 = (0);
var inst_1886778 = (0);
var state_1886835__$1 = (function (){var statearr_1886878 = state_1886835;
(statearr_1886878[(29)] = inst_1886767__$1);

(statearr_1886878[(20)] = inst_1886775);

(statearr_1886878[(9)] = inst_1886776);

(statearr_1886878[(21)] = inst_1886777);

(statearr_1886878[(10)] = inst_1886778);

(statearr_1886878[(30)] = inst_1886769);

return statearr_1886878;
})();
var statearr_1886879_1886948 = state_1886835__$1;
(statearr_1886879_1886948[(2)] = null);

(statearr_1886879_1886948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (28))){
var inst_1886775 = (state_1886835[(20)]);
var inst_1886794 = (state_1886835[(25)]);
var inst_1886794__$1 = cljs.core.seq.call(null,inst_1886775);
var state_1886835__$1 = (function (){var statearr_1886880 = state_1886835;
(statearr_1886880[(25)] = inst_1886794__$1);

return statearr_1886880;
})();
if(inst_1886794__$1){
var statearr_1886881_1886949 = state_1886835__$1;
(statearr_1886881_1886949[(1)] = (33));

} else {
var statearr_1886882_1886950 = state_1886835__$1;
(statearr_1886882_1886950[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (25))){
var inst_1886777 = (state_1886835[(21)]);
var inst_1886778 = (state_1886835[(10)]);
var inst_1886780 = (inst_1886778 < inst_1886777);
var inst_1886781 = inst_1886780;
var state_1886835__$1 = state_1886835;
if(cljs.core.truth_(inst_1886781)){
var statearr_1886883_1886951 = state_1886835__$1;
(statearr_1886883_1886951[(1)] = (27));

} else {
var statearr_1886884_1886952 = state_1886835__$1;
(statearr_1886884_1886952[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (34))){
var state_1886835__$1 = state_1886835;
var statearr_1886885_1886953 = state_1886835__$1;
(statearr_1886885_1886953[(2)] = null);

(statearr_1886885_1886953[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (17))){
var state_1886835__$1 = state_1886835;
var statearr_1886886_1886954 = state_1886835__$1;
(statearr_1886886_1886954[(2)] = null);

(statearr_1886886_1886954[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (3))){
var inst_1886833 = (state_1886835[(2)]);
var state_1886835__$1 = state_1886835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1886835__$1,inst_1886833);
} else {
if((state_val_1886836 === (12))){
var inst_1886762 = (state_1886835[(2)]);
var state_1886835__$1 = state_1886835;
var statearr_1886887_1886955 = state_1886835__$1;
(statearr_1886887_1886955[(2)] = inst_1886762);

(statearr_1886887_1886955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (2))){
var state_1886835__$1 = state_1886835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1886835__$1,(4),ch);
} else {
if((state_val_1886836 === (23))){
var state_1886835__$1 = state_1886835;
var statearr_1886888_1886956 = state_1886835__$1;
(statearr_1886888_1886956[(2)] = null);

(statearr_1886888_1886956[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (35))){
var inst_1886817 = (state_1886835[(2)]);
var state_1886835__$1 = state_1886835;
var statearr_1886889_1886957 = state_1886835__$1;
(statearr_1886889_1886957[(2)] = inst_1886817);

(statearr_1886889_1886957[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (19))){
var inst_1886736 = (state_1886835[(7)]);
var inst_1886740 = cljs.core.chunk_first.call(null,inst_1886736);
var inst_1886741 = cljs.core.chunk_rest.call(null,inst_1886736);
var inst_1886742 = cljs.core.count.call(null,inst_1886740);
var inst_1886716 = inst_1886741;
var inst_1886717 = inst_1886740;
var inst_1886718 = inst_1886742;
var inst_1886719 = (0);
var state_1886835__$1 = (function (){var statearr_1886890 = state_1886835;
(statearr_1886890[(13)] = inst_1886718);

(statearr_1886890[(14)] = inst_1886717);

(statearr_1886890[(15)] = inst_1886719);

(statearr_1886890[(16)] = inst_1886716);

return statearr_1886890;
})();
var statearr_1886891_1886958 = state_1886835__$1;
(statearr_1886891_1886958[(2)] = null);

(statearr_1886891_1886958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (11))){
var inst_1886716 = (state_1886835[(16)]);
var inst_1886736 = (state_1886835[(7)]);
var inst_1886736__$1 = cljs.core.seq.call(null,inst_1886716);
var state_1886835__$1 = (function (){var statearr_1886892 = state_1886835;
(statearr_1886892[(7)] = inst_1886736__$1);

return statearr_1886892;
})();
if(inst_1886736__$1){
var statearr_1886893_1886959 = state_1886835__$1;
(statearr_1886893_1886959[(1)] = (16));

} else {
var statearr_1886894_1886960 = state_1886835__$1;
(statearr_1886894_1886960[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (9))){
var inst_1886764 = (state_1886835[(2)]);
var state_1886835__$1 = state_1886835;
var statearr_1886895_1886961 = state_1886835__$1;
(statearr_1886895_1886961[(2)] = inst_1886764);

(statearr_1886895_1886961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (5))){
var inst_1886714 = cljs.core.deref.call(null,cs);
var inst_1886715 = cljs.core.seq.call(null,inst_1886714);
var inst_1886716 = inst_1886715;
var inst_1886717 = null;
var inst_1886718 = (0);
var inst_1886719 = (0);
var state_1886835__$1 = (function (){var statearr_1886896 = state_1886835;
(statearr_1886896[(13)] = inst_1886718);

(statearr_1886896[(14)] = inst_1886717);

(statearr_1886896[(15)] = inst_1886719);

(statearr_1886896[(16)] = inst_1886716);

return statearr_1886896;
})();
var statearr_1886897_1886962 = state_1886835__$1;
(statearr_1886897_1886962[(2)] = null);

(statearr_1886897_1886962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (14))){
var state_1886835__$1 = state_1886835;
var statearr_1886898_1886963 = state_1886835__$1;
(statearr_1886898_1886963[(2)] = null);

(statearr_1886898_1886963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (45))){
var inst_1886825 = (state_1886835[(2)]);
var state_1886835__$1 = state_1886835;
var statearr_1886899_1886964 = state_1886835__$1;
(statearr_1886899_1886964[(2)] = inst_1886825);

(statearr_1886899_1886964[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (26))){
var inst_1886767 = (state_1886835[(29)]);
var inst_1886821 = (state_1886835[(2)]);
var inst_1886822 = cljs.core.seq.call(null,inst_1886767);
var state_1886835__$1 = (function (){var statearr_1886900 = state_1886835;
(statearr_1886900[(31)] = inst_1886821);

return statearr_1886900;
})();
if(inst_1886822){
var statearr_1886901_1886965 = state_1886835__$1;
(statearr_1886901_1886965[(1)] = (42));

} else {
var statearr_1886902_1886966 = state_1886835__$1;
(statearr_1886902_1886966[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (16))){
var inst_1886736 = (state_1886835[(7)]);
var inst_1886738 = cljs.core.chunked_seq_QMARK_.call(null,inst_1886736);
var state_1886835__$1 = state_1886835;
if(inst_1886738){
var statearr_1886903_1886967 = state_1886835__$1;
(statearr_1886903_1886967[(1)] = (19));

} else {
var statearr_1886904_1886968 = state_1886835__$1;
(statearr_1886904_1886968[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (38))){
var inst_1886814 = (state_1886835[(2)]);
var state_1886835__$1 = state_1886835;
var statearr_1886905_1886969 = state_1886835__$1;
(statearr_1886905_1886969[(2)] = inst_1886814);

(statearr_1886905_1886969[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (30))){
var state_1886835__$1 = state_1886835;
var statearr_1886906_1886970 = state_1886835__$1;
(statearr_1886906_1886970[(2)] = null);

(statearr_1886906_1886970[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (10))){
var inst_1886717 = (state_1886835[(14)]);
var inst_1886719 = (state_1886835[(15)]);
var inst_1886725 = cljs.core._nth.call(null,inst_1886717,inst_1886719);
var inst_1886726 = cljs.core.nth.call(null,inst_1886725,(0),null);
var inst_1886727 = cljs.core.nth.call(null,inst_1886725,(1),null);
var state_1886835__$1 = (function (){var statearr_1886907 = state_1886835;
(statearr_1886907[(26)] = inst_1886726);

return statearr_1886907;
})();
if(cljs.core.truth_(inst_1886727)){
var statearr_1886908_1886971 = state_1886835__$1;
(statearr_1886908_1886971[(1)] = (13));

} else {
var statearr_1886909_1886972 = state_1886835__$1;
(statearr_1886909_1886972[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (18))){
var inst_1886760 = (state_1886835[(2)]);
var state_1886835__$1 = state_1886835;
var statearr_1886910_1886973 = state_1886835__$1;
(statearr_1886910_1886973[(2)] = inst_1886760);

(statearr_1886910_1886973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (42))){
var state_1886835__$1 = state_1886835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1886835__$1,(45),dchan);
} else {
if((state_val_1886836 === (37))){
var inst_1886803 = (state_1886835[(23)]);
var inst_1886794 = (state_1886835[(25)]);
var inst_1886707 = (state_1886835[(12)]);
var inst_1886803__$1 = cljs.core.first.call(null,inst_1886794);
var inst_1886804 = cljs.core.async.put_BANG_.call(null,inst_1886803__$1,inst_1886707,done);
var state_1886835__$1 = (function (){var statearr_1886911 = state_1886835;
(statearr_1886911[(23)] = inst_1886803__$1);

return statearr_1886911;
})();
if(cljs.core.truth_(inst_1886804)){
var statearr_1886912_1886974 = state_1886835__$1;
(statearr_1886912_1886974[(1)] = (39));

} else {
var statearr_1886913_1886975 = state_1886835__$1;
(statearr_1886913_1886975[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1886836 === (8))){
var inst_1886718 = (state_1886835[(13)]);
var inst_1886719 = (state_1886835[(15)]);
var inst_1886721 = (inst_1886719 < inst_1886718);
var inst_1886722 = inst_1886721;
var state_1886835__$1 = state_1886835;
if(cljs.core.truth_(inst_1886722)){
var statearr_1886914_1886976 = state_1886835__$1;
(statearr_1886914_1886976[(1)] = (10));

} else {
var statearr_1886915_1886977 = state_1886835__$1;
(statearr_1886915_1886977[(1)] = (11));

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
});})(c__35562__auto___1886923,cs,m,dchan,dctr,done))
;
return ((function (switch__35450__auto__,c__35562__auto___1886923,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35451__auto__ = null;
var cljs$core$async$mult_$_state_machine__35451__auto____0 = (function (){
var statearr_1886919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1886919[(0)] = cljs$core$async$mult_$_state_machine__35451__auto__);

(statearr_1886919[(1)] = (1));

return statearr_1886919;
});
var cljs$core$async$mult_$_state_machine__35451__auto____1 = (function (state_1886835){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1886835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1886920){if((e1886920 instanceof Object)){
var ex__35454__auto__ = e1886920;
var statearr_1886921_1886978 = state_1886835;
(statearr_1886921_1886978[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1886835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1886920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1886979 = state_1886835;
state_1886835 = G__1886979;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35451__auto__ = function(state_1886835){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35451__auto____1.call(this,state_1886835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35451__auto____0;
cljs$core$async$mult_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35451__auto____1;
return cljs$core$async$mult_$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1886923,cs,m,dchan,dctr,done))
})();
var state__35564__auto__ = (function (){var statearr_1886922 = f__35563__auto__.call(null);
(statearr_1886922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1886923);

return statearr_1886922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1886923,cs,m,dchan,dctr,done))
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
var args1886980 = [];
var len__25219__auto___1886983 = arguments.length;
var i__25220__auto___1886984 = (0);
while(true){
if((i__25220__auto___1886984 < len__25219__auto___1886983)){
args1886980.push((arguments[i__25220__auto___1886984]));

var G__1886985 = (i__25220__auto___1886984 + (1));
i__25220__auto___1886984 = G__1886985;
continue;
} else {
}
break;
}

var G__1886982 = args1886980.length;
switch (G__1886982) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1886980.length)].join('')));

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
var len__25219__auto___1886997 = arguments.length;
var i__25220__auto___1886998 = (0);
while(true){
if((i__25220__auto___1886998 < len__25219__auto___1886997)){
args__25226__auto__.push((arguments[i__25220__auto___1886998]));

var G__1886999 = (i__25220__auto___1886998 + (1));
i__25220__auto___1886998 = G__1886999;
continue;
} else {
}
break;
}

var argseq__25227__auto__ = ((((3) < args__25226__auto__.length))?(new cljs.core.IndexedSeq(args__25226__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25227__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__1886991){
var map__1886992 = p__1886991;
var map__1886992__$1 = ((((!((map__1886992 == null)))?((((map__1886992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1886992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1886992):map__1886992);
var opts = map__1886992__$1;
var statearr_1886994_1887000 = state;
(statearr_1886994_1887000[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__1886992,map__1886992__$1,opts){
return (function (val){
var statearr_1886995_1887001 = state;
(statearr_1886995_1887001[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__1886992,map__1886992__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_1886996_1887002 = state;
(statearr_1886996_1887002[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq1886987){
var G__1886988 = cljs.core.first.call(null,seq1886987);
var seq1886987__$1 = cljs.core.next.call(null,seq1886987);
var G__1886989 = cljs.core.first.call(null,seq1886987__$1);
var seq1886987__$2 = cljs.core.next.call(null,seq1886987__$1);
var G__1886990 = cljs.core.first.call(null,seq1886987__$2);
var seq1886987__$3 = cljs.core.next.call(null,seq1886987__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__1886988,G__1886989,G__1886990,seq1886987__$3);
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
if(typeof cljs.core.async.t_cljs$core$async1887166 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async1887166 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta1887167){
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
this.meta1887167 = meta1887167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1887166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1887168,meta1887167__$1){
var self__ = this;
var _1887168__$1 = this;
return (new cljs.core.async.t_cljs$core$async1887166(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta1887167__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1887166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_1887168){
var self__ = this;
var _1887168__$1 = this;
return self__.meta1887167;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1887166.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async1887166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1887166.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async1887166.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1887166.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1887166.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1887166.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1887166.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async1887166.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta1887167","meta1887167",620486185,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async1887166.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1887166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1887166";

cljs.core.async.t_cljs$core$async1887166.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async1887166");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async1887166 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async1887166(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1887167){
return (new cljs.core.async.t_cljs$core$async1887166(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta1887167));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async1887166(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35562__auto___1887329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1887329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1887329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_1887266){
var state_val_1887267 = (state_1887266[(1)]);
if((state_val_1887267 === (7))){
var inst_1887184 = (state_1887266[(2)]);
var state_1887266__$1 = state_1887266;
var statearr_1887268_1887330 = state_1887266__$1;
(statearr_1887268_1887330[(2)] = inst_1887184);

(statearr_1887268_1887330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (20))){
var inst_1887196 = (state_1887266[(7)]);
var state_1887266__$1 = state_1887266;
var statearr_1887269_1887331 = state_1887266__$1;
(statearr_1887269_1887331[(2)] = inst_1887196);

(statearr_1887269_1887331[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (27))){
var state_1887266__$1 = state_1887266;
var statearr_1887270_1887332 = state_1887266__$1;
(statearr_1887270_1887332[(2)] = null);

(statearr_1887270_1887332[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (1))){
var inst_1887172 = (state_1887266[(8)]);
var inst_1887172__$1 = calc_state.call(null);
var inst_1887174 = (inst_1887172__$1 == null);
var inst_1887175 = cljs.core.not.call(null,inst_1887174);
var state_1887266__$1 = (function (){var statearr_1887271 = state_1887266;
(statearr_1887271[(8)] = inst_1887172__$1);

return statearr_1887271;
})();
if(inst_1887175){
var statearr_1887272_1887333 = state_1887266__$1;
(statearr_1887272_1887333[(1)] = (2));

} else {
var statearr_1887273_1887334 = state_1887266__$1;
(statearr_1887273_1887334[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (24))){
var inst_1887240 = (state_1887266[(9)]);
var inst_1887226 = (state_1887266[(10)]);
var inst_1887219 = (state_1887266[(11)]);
var inst_1887240__$1 = inst_1887219.call(null,inst_1887226);
var state_1887266__$1 = (function (){var statearr_1887274 = state_1887266;
(statearr_1887274[(9)] = inst_1887240__$1);

return statearr_1887274;
})();
if(cljs.core.truth_(inst_1887240__$1)){
var statearr_1887275_1887335 = state_1887266__$1;
(statearr_1887275_1887335[(1)] = (29));

} else {
var statearr_1887276_1887336 = state_1887266__$1;
(statearr_1887276_1887336[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (4))){
var inst_1887187 = (state_1887266[(2)]);
var state_1887266__$1 = state_1887266;
if(cljs.core.truth_(inst_1887187)){
var statearr_1887277_1887337 = state_1887266__$1;
(statearr_1887277_1887337[(1)] = (8));

} else {
var statearr_1887278_1887338 = state_1887266__$1;
(statearr_1887278_1887338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (15))){
var inst_1887213 = (state_1887266[(2)]);
var state_1887266__$1 = state_1887266;
if(cljs.core.truth_(inst_1887213)){
var statearr_1887279_1887339 = state_1887266__$1;
(statearr_1887279_1887339[(1)] = (19));

} else {
var statearr_1887280_1887340 = state_1887266__$1;
(statearr_1887280_1887340[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (21))){
var inst_1887218 = (state_1887266[(12)]);
var inst_1887218__$1 = (state_1887266[(2)]);
var inst_1887219 = cljs.core.get.call(null,inst_1887218__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_1887220 = cljs.core.get.call(null,inst_1887218__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_1887221 = cljs.core.get.call(null,inst_1887218__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_1887266__$1 = (function (){var statearr_1887281 = state_1887266;
(statearr_1887281[(13)] = inst_1887220);

(statearr_1887281[(12)] = inst_1887218__$1);

(statearr_1887281[(11)] = inst_1887219);

return statearr_1887281;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_1887266__$1,(22),inst_1887221);
} else {
if((state_val_1887267 === (31))){
var inst_1887248 = (state_1887266[(2)]);
var state_1887266__$1 = state_1887266;
if(cljs.core.truth_(inst_1887248)){
var statearr_1887282_1887341 = state_1887266__$1;
(statearr_1887282_1887341[(1)] = (32));

} else {
var statearr_1887283_1887342 = state_1887266__$1;
(statearr_1887283_1887342[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (32))){
var inst_1887225 = (state_1887266[(14)]);
var state_1887266__$1 = state_1887266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1887266__$1,(35),out,inst_1887225);
} else {
if((state_val_1887267 === (33))){
var inst_1887218 = (state_1887266[(12)]);
var inst_1887196 = inst_1887218;
var state_1887266__$1 = (function (){var statearr_1887284 = state_1887266;
(statearr_1887284[(7)] = inst_1887196);

return statearr_1887284;
})();
var statearr_1887285_1887343 = state_1887266__$1;
(statearr_1887285_1887343[(2)] = null);

(statearr_1887285_1887343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (13))){
var inst_1887196 = (state_1887266[(7)]);
var inst_1887203 = inst_1887196.cljs$lang$protocol_mask$partition0$;
var inst_1887204 = (inst_1887203 & (64));
var inst_1887205 = inst_1887196.cljs$core$ISeq$;
var inst_1887206 = (inst_1887204) || (inst_1887205);
var state_1887266__$1 = state_1887266;
if(cljs.core.truth_(inst_1887206)){
var statearr_1887286_1887344 = state_1887266__$1;
(statearr_1887286_1887344[(1)] = (16));

} else {
var statearr_1887287_1887345 = state_1887266__$1;
(statearr_1887287_1887345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (22))){
var inst_1887225 = (state_1887266[(14)]);
var inst_1887226 = (state_1887266[(10)]);
var inst_1887224 = (state_1887266[(2)]);
var inst_1887225__$1 = cljs.core.nth.call(null,inst_1887224,(0),null);
var inst_1887226__$1 = cljs.core.nth.call(null,inst_1887224,(1),null);
var inst_1887227 = (inst_1887225__$1 == null);
var inst_1887228 = cljs.core._EQ_.call(null,inst_1887226__$1,change);
var inst_1887229 = (inst_1887227) || (inst_1887228);
var state_1887266__$1 = (function (){var statearr_1887288 = state_1887266;
(statearr_1887288[(14)] = inst_1887225__$1);

(statearr_1887288[(10)] = inst_1887226__$1);

return statearr_1887288;
})();
if(cljs.core.truth_(inst_1887229)){
var statearr_1887289_1887346 = state_1887266__$1;
(statearr_1887289_1887346[(1)] = (23));

} else {
var statearr_1887290_1887347 = state_1887266__$1;
(statearr_1887290_1887347[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (36))){
var inst_1887218 = (state_1887266[(12)]);
var inst_1887196 = inst_1887218;
var state_1887266__$1 = (function (){var statearr_1887291 = state_1887266;
(statearr_1887291[(7)] = inst_1887196);

return statearr_1887291;
})();
var statearr_1887292_1887348 = state_1887266__$1;
(statearr_1887292_1887348[(2)] = null);

(statearr_1887292_1887348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (29))){
var inst_1887240 = (state_1887266[(9)]);
var state_1887266__$1 = state_1887266;
var statearr_1887293_1887349 = state_1887266__$1;
(statearr_1887293_1887349[(2)] = inst_1887240);

(statearr_1887293_1887349[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (6))){
var state_1887266__$1 = state_1887266;
var statearr_1887294_1887350 = state_1887266__$1;
(statearr_1887294_1887350[(2)] = false);

(statearr_1887294_1887350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (28))){
var inst_1887236 = (state_1887266[(2)]);
var inst_1887237 = calc_state.call(null);
var inst_1887196 = inst_1887237;
var state_1887266__$1 = (function (){var statearr_1887295 = state_1887266;
(statearr_1887295[(15)] = inst_1887236);

(statearr_1887295[(7)] = inst_1887196);

return statearr_1887295;
})();
var statearr_1887296_1887351 = state_1887266__$1;
(statearr_1887296_1887351[(2)] = null);

(statearr_1887296_1887351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (25))){
var inst_1887262 = (state_1887266[(2)]);
var state_1887266__$1 = state_1887266;
var statearr_1887297_1887352 = state_1887266__$1;
(statearr_1887297_1887352[(2)] = inst_1887262);

(statearr_1887297_1887352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (34))){
var inst_1887260 = (state_1887266[(2)]);
var state_1887266__$1 = state_1887266;
var statearr_1887298_1887353 = state_1887266__$1;
(statearr_1887298_1887353[(2)] = inst_1887260);

(statearr_1887298_1887353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (17))){
var state_1887266__$1 = state_1887266;
var statearr_1887299_1887354 = state_1887266__$1;
(statearr_1887299_1887354[(2)] = false);

(statearr_1887299_1887354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (3))){
var state_1887266__$1 = state_1887266;
var statearr_1887300_1887355 = state_1887266__$1;
(statearr_1887300_1887355[(2)] = false);

(statearr_1887300_1887355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (12))){
var inst_1887264 = (state_1887266[(2)]);
var state_1887266__$1 = state_1887266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1887266__$1,inst_1887264);
} else {
if((state_val_1887267 === (2))){
var inst_1887172 = (state_1887266[(8)]);
var inst_1887177 = inst_1887172.cljs$lang$protocol_mask$partition0$;
var inst_1887178 = (inst_1887177 & (64));
var inst_1887179 = inst_1887172.cljs$core$ISeq$;
var inst_1887180 = (inst_1887178) || (inst_1887179);
var state_1887266__$1 = state_1887266;
if(cljs.core.truth_(inst_1887180)){
var statearr_1887301_1887356 = state_1887266__$1;
(statearr_1887301_1887356[(1)] = (5));

} else {
var statearr_1887302_1887357 = state_1887266__$1;
(statearr_1887302_1887357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (23))){
var inst_1887225 = (state_1887266[(14)]);
var inst_1887231 = (inst_1887225 == null);
var state_1887266__$1 = state_1887266;
if(cljs.core.truth_(inst_1887231)){
var statearr_1887303_1887358 = state_1887266__$1;
(statearr_1887303_1887358[(1)] = (26));

} else {
var statearr_1887304_1887359 = state_1887266__$1;
(statearr_1887304_1887359[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (35))){
var inst_1887251 = (state_1887266[(2)]);
var state_1887266__$1 = state_1887266;
if(cljs.core.truth_(inst_1887251)){
var statearr_1887305_1887360 = state_1887266__$1;
(statearr_1887305_1887360[(1)] = (36));

} else {
var statearr_1887306_1887361 = state_1887266__$1;
(statearr_1887306_1887361[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (19))){
var inst_1887196 = (state_1887266[(7)]);
var inst_1887215 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1887196);
var state_1887266__$1 = state_1887266;
var statearr_1887307_1887362 = state_1887266__$1;
(statearr_1887307_1887362[(2)] = inst_1887215);

(statearr_1887307_1887362[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (11))){
var inst_1887196 = (state_1887266[(7)]);
var inst_1887200 = (inst_1887196 == null);
var inst_1887201 = cljs.core.not.call(null,inst_1887200);
var state_1887266__$1 = state_1887266;
if(inst_1887201){
var statearr_1887308_1887363 = state_1887266__$1;
(statearr_1887308_1887363[(1)] = (13));

} else {
var statearr_1887309_1887364 = state_1887266__$1;
(statearr_1887309_1887364[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (9))){
var inst_1887172 = (state_1887266[(8)]);
var state_1887266__$1 = state_1887266;
var statearr_1887310_1887365 = state_1887266__$1;
(statearr_1887310_1887365[(2)] = inst_1887172);

(statearr_1887310_1887365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (5))){
var state_1887266__$1 = state_1887266;
var statearr_1887311_1887366 = state_1887266__$1;
(statearr_1887311_1887366[(2)] = true);

(statearr_1887311_1887366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (14))){
var state_1887266__$1 = state_1887266;
var statearr_1887312_1887367 = state_1887266__$1;
(statearr_1887312_1887367[(2)] = false);

(statearr_1887312_1887367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (26))){
var inst_1887226 = (state_1887266[(10)]);
var inst_1887233 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_1887226);
var state_1887266__$1 = state_1887266;
var statearr_1887313_1887368 = state_1887266__$1;
(statearr_1887313_1887368[(2)] = inst_1887233);

(statearr_1887313_1887368[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (16))){
var state_1887266__$1 = state_1887266;
var statearr_1887314_1887369 = state_1887266__$1;
(statearr_1887314_1887369[(2)] = true);

(statearr_1887314_1887369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (38))){
var inst_1887256 = (state_1887266[(2)]);
var state_1887266__$1 = state_1887266;
var statearr_1887315_1887370 = state_1887266__$1;
(statearr_1887315_1887370[(2)] = inst_1887256);

(statearr_1887315_1887370[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (30))){
var inst_1887220 = (state_1887266[(13)]);
var inst_1887226 = (state_1887266[(10)]);
var inst_1887219 = (state_1887266[(11)]);
var inst_1887243 = cljs.core.empty_QMARK_.call(null,inst_1887219);
var inst_1887244 = inst_1887220.call(null,inst_1887226);
var inst_1887245 = cljs.core.not.call(null,inst_1887244);
var inst_1887246 = (inst_1887243) && (inst_1887245);
var state_1887266__$1 = state_1887266;
var statearr_1887316_1887371 = state_1887266__$1;
(statearr_1887316_1887371[(2)] = inst_1887246);

(statearr_1887316_1887371[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (10))){
var inst_1887172 = (state_1887266[(8)]);
var inst_1887192 = (state_1887266[(2)]);
var inst_1887193 = cljs.core.get.call(null,inst_1887192,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_1887194 = cljs.core.get.call(null,inst_1887192,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_1887195 = cljs.core.get.call(null,inst_1887192,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_1887196 = inst_1887172;
var state_1887266__$1 = (function (){var statearr_1887317 = state_1887266;
(statearr_1887317[(7)] = inst_1887196);

(statearr_1887317[(16)] = inst_1887193);

(statearr_1887317[(17)] = inst_1887195);

(statearr_1887317[(18)] = inst_1887194);

return statearr_1887317;
})();
var statearr_1887318_1887372 = state_1887266__$1;
(statearr_1887318_1887372[(2)] = null);

(statearr_1887318_1887372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (18))){
var inst_1887210 = (state_1887266[(2)]);
var state_1887266__$1 = state_1887266;
var statearr_1887319_1887373 = state_1887266__$1;
(statearr_1887319_1887373[(2)] = inst_1887210);

(statearr_1887319_1887373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (37))){
var state_1887266__$1 = state_1887266;
var statearr_1887320_1887374 = state_1887266__$1;
(statearr_1887320_1887374[(2)] = null);

(statearr_1887320_1887374[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887267 === (8))){
var inst_1887172 = (state_1887266[(8)]);
var inst_1887189 = cljs.core.apply.call(null,cljs.core.hash_map,inst_1887172);
var state_1887266__$1 = state_1887266;
var statearr_1887321_1887375 = state_1887266__$1;
(statearr_1887321_1887375[(2)] = inst_1887189);

(statearr_1887321_1887375[(1)] = (10));


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
});})(c__35562__auto___1887329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35450__auto__,c__35562__auto___1887329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35451__auto__ = null;
var cljs$core$async$mix_$_state_machine__35451__auto____0 = (function (){
var statearr_1887325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1887325[(0)] = cljs$core$async$mix_$_state_machine__35451__auto__);

(statearr_1887325[(1)] = (1));

return statearr_1887325;
});
var cljs$core$async$mix_$_state_machine__35451__auto____1 = (function (state_1887266){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1887266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1887326){if((e1887326 instanceof Object)){
var ex__35454__auto__ = e1887326;
var statearr_1887327_1887376 = state_1887266;
(statearr_1887327_1887376[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1887266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1887326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1887377 = state_1887266;
state_1887266 = G__1887377;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35451__auto__ = function(state_1887266){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35451__auto____1.call(this,state_1887266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35451__auto____0;
cljs$core$async$mix_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35451__auto____1;
return cljs$core$async$mix_$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1887329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35564__auto__ = (function (){var statearr_1887328 = f__35563__auto__.call(null);
(statearr_1887328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1887329);

return statearr_1887328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1887329,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args1887378 = [];
var len__25219__auto___1887381 = arguments.length;
var i__25220__auto___1887382 = (0);
while(true){
if((i__25220__auto___1887382 < len__25219__auto___1887381)){
args1887378.push((arguments[i__25220__auto___1887382]));

var G__1887383 = (i__25220__auto___1887382 + (1));
i__25220__auto___1887382 = G__1887383;
continue;
} else {
}
break;
}

var G__1887380 = args1887378.length;
switch (G__1887380) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1887378.length)].join('')));

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
var args1887386 = [];
var len__25219__auto___1887511 = arguments.length;
var i__25220__auto___1887512 = (0);
while(true){
if((i__25220__auto___1887512 < len__25219__auto___1887511)){
args1887386.push((arguments[i__25220__auto___1887512]));

var G__1887513 = (i__25220__auto___1887512 + (1));
i__25220__auto___1887512 = G__1887513;
continue;
} else {
}
break;
}

var G__1887388 = args1887386.length;
switch (G__1887388) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1887386.length)].join('')));

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
return (function (p1__1887385_SHARP_){
if(cljs.core.truth_(p1__1887385_SHARP_.call(null,topic))){
return p1__1887385_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__1887385_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24161__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async1887389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async1887389 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta1887390){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta1887390 = meta1887390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1887389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_1887391,meta1887390__$1){
var self__ = this;
var _1887391__$1 = this;
return (new cljs.core.async.t_cljs$core$async1887389(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta1887390__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1887389.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_1887391){
var self__ = this;
var _1887391__$1 = this;
return self__.meta1887390;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1887389.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async1887389.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1887389.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async1887389.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1887389.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async1887389.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1887389.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1887389.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta1887390","meta1887390",-96595500,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async1887389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1887389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1887389";

cljs.core.async.t_cljs$core$async1887389.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async1887389");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async1887389 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async1887389(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta1887390){
return (new cljs.core.async.t_cljs$core$async1887389(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta1887390));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async1887389(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35562__auto___1887515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1887515,mults,ensure_mult,p){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1887515,mults,ensure_mult,p){
return (function (state_1887463){
var state_val_1887464 = (state_1887463[(1)]);
if((state_val_1887464 === (7))){
var inst_1887459 = (state_1887463[(2)]);
var state_1887463__$1 = state_1887463;
var statearr_1887465_1887516 = state_1887463__$1;
(statearr_1887465_1887516[(2)] = inst_1887459);

(statearr_1887465_1887516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (20))){
var state_1887463__$1 = state_1887463;
var statearr_1887466_1887517 = state_1887463__$1;
(statearr_1887466_1887517[(2)] = null);

(statearr_1887466_1887517[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (1))){
var state_1887463__$1 = state_1887463;
var statearr_1887467_1887518 = state_1887463__$1;
(statearr_1887467_1887518[(2)] = null);

(statearr_1887467_1887518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (24))){
var inst_1887442 = (state_1887463[(7)]);
var inst_1887451 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_1887442);
var state_1887463__$1 = state_1887463;
var statearr_1887468_1887519 = state_1887463__$1;
(statearr_1887468_1887519[(2)] = inst_1887451);

(statearr_1887468_1887519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (4))){
var inst_1887394 = (state_1887463[(8)]);
var inst_1887394__$1 = (state_1887463[(2)]);
var inst_1887395 = (inst_1887394__$1 == null);
var state_1887463__$1 = (function (){var statearr_1887469 = state_1887463;
(statearr_1887469[(8)] = inst_1887394__$1);

return statearr_1887469;
})();
if(cljs.core.truth_(inst_1887395)){
var statearr_1887470_1887520 = state_1887463__$1;
(statearr_1887470_1887520[(1)] = (5));

} else {
var statearr_1887471_1887521 = state_1887463__$1;
(statearr_1887471_1887521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (15))){
var inst_1887436 = (state_1887463[(2)]);
var state_1887463__$1 = state_1887463;
var statearr_1887472_1887522 = state_1887463__$1;
(statearr_1887472_1887522[(2)] = inst_1887436);

(statearr_1887472_1887522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (21))){
var inst_1887456 = (state_1887463[(2)]);
var state_1887463__$1 = (function (){var statearr_1887473 = state_1887463;
(statearr_1887473[(9)] = inst_1887456);

return statearr_1887473;
})();
var statearr_1887474_1887523 = state_1887463__$1;
(statearr_1887474_1887523[(2)] = null);

(statearr_1887474_1887523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (13))){
var inst_1887418 = (state_1887463[(10)]);
var inst_1887420 = cljs.core.chunked_seq_QMARK_.call(null,inst_1887418);
var state_1887463__$1 = state_1887463;
if(inst_1887420){
var statearr_1887475_1887524 = state_1887463__$1;
(statearr_1887475_1887524[(1)] = (16));

} else {
var statearr_1887476_1887525 = state_1887463__$1;
(statearr_1887476_1887525[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (22))){
var inst_1887448 = (state_1887463[(2)]);
var state_1887463__$1 = state_1887463;
if(cljs.core.truth_(inst_1887448)){
var statearr_1887477_1887526 = state_1887463__$1;
(statearr_1887477_1887526[(1)] = (23));

} else {
var statearr_1887478_1887527 = state_1887463__$1;
(statearr_1887478_1887527[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (6))){
var inst_1887442 = (state_1887463[(7)]);
var inst_1887394 = (state_1887463[(8)]);
var inst_1887444 = (state_1887463[(11)]);
var inst_1887442__$1 = topic_fn.call(null,inst_1887394);
var inst_1887443 = cljs.core.deref.call(null,mults);
var inst_1887444__$1 = cljs.core.get.call(null,inst_1887443,inst_1887442__$1);
var state_1887463__$1 = (function (){var statearr_1887479 = state_1887463;
(statearr_1887479[(7)] = inst_1887442__$1);

(statearr_1887479[(11)] = inst_1887444__$1);

return statearr_1887479;
})();
if(cljs.core.truth_(inst_1887444__$1)){
var statearr_1887480_1887528 = state_1887463__$1;
(statearr_1887480_1887528[(1)] = (19));

} else {
var statearr_1887481_1887529 = state_1887463__$1;
(statearr_1887481_1887529[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (25))){
var inst_1887453 = (state_1887463[(2)]);
var state_1887463__$1 = state_1887463;
var statearr_1887482_1887530 = state_1887463__$1;
(statearr_1887482_1887530[(2)] = inst_1887453);

(statearr_1887482_1887530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (17))){
var inst_1887418 = (state_1887463[(10)]);
var inst_1887427 = cljs.core.first.call(null,inst_1887418);
var inst_1887428 = cljs.core.async.muxch_STAR_.call(null,inst_1887427);
var inst_1887429 = cljs.core.async.close_BANG_.call(null,inst_1887428);
var inst_1887430 = cljs.core.next.call(null,inst_1887418);
var inst_1887404 = inst_1887430;
var inst_1887405 = null;
var inst_1887406 = (0);
var inst_1887407 = (0);
var state_1887463__$1 = (function (){var statearr_1887483 = state_1887463;
(statearr_1887483[(12)] = inst_1887405);

(statearr_1887483[(13)] = inst_1887407);

(statearr_1887483[(14)] = inst_1887429);

(statearr_1887483[(15)] = inst_1887406);

(statearr_1887483[(16)] = inst_1887404);

return statearr_1887483;
})();
var statearr_1887484_1887531 = state_1887463__$1;
(statearr_1887484_1887531[(2)] = null);

(statearr_1887484_1887531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (3))){
var inst_1887461 = (state_1887463[(2)]);
var state_1887463__$1 = state_1887463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1887463__$1,inst_1887461);
} else {
if((state_val_1887464 === (12))){
var inst_1887438 = (state_1887463[(2)]);
var state_1887463__$1 = state_1887463;
var statearr_1887485_1887532 = state_1887463__$1;
(statearr_1887485_1887532[(2)] = inst_1887438);

(statearr_1887485_1887532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (2))){
var state_1887463__$1 = state_1887463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1887463__$1,(4),ch);
} else {
if((state_val_1887464 === (23))){
var state_1887463__$1 = state_1887463;
var statearr_1887486_1887533 = state_1887463__$1;
(statearr_1887486_1887533[(2)] = null);

(statearr_1887486_1887533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (19))){
var inst_1887394 = (state_1887463[(8)]);
var inst_1887444 = (state_1887463[(11)]);
var inst_1887446 = cljs.core.async.muxch_STAR_.call(null,inst_1887444);
var state_1887463__$1 = state_1887463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1887463__$1,(22),inst_1887446,inst_1887394);
} else {
if((state_val_1887464 === (11))){
var inst_1887418 = (state_1887463[(10)]);
var inst_1887404 = (state_1887463[(16)]);
var inst_1887418__$1 = cljs.core.seq.call(null,inst_1887404);
var state_1887463__$1 = (function (){var statearr_1887487 = state_1887463;
(statearr_1887487[(10)] = inst_1887418__$1);

return statearr_1887487;
})();
if(inst_1887418__$1){
var statearr_1887488_1887534 = state_1887463__$1;
(statearr_1887488_1887534[(1)] = (13));

} else {
var statearr_1887489_1887535 = state_1887463__$1;
(statearr_1887489_1887535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (9))){
var inst_1887440 = (state_1887463[(2)]);
var state_1887463__$1 = state_1887463;
var statearr_1887490_1887536 = state_1887463__$1;
(statearr_1887490_1887536[(2)] = inst_1887440);

(statearr_1887490_1887536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (5))){
var inst_1887401 = cljs.core.deref.call(null,mults);
var inst_1887402 = cljs.core.vals.call(null,inst_1887401);
var inst_1887403 = cljs.core.seq.call(null,inst_1887402);
var inst_1887404 = inst_1887403;
var inst_1887405 = null;
var inst_1887406 = (0);
var inst_1887407 = (0);
var state_1887463__$1 = (function (){var statearr_1887491 = state_1887463;
(statearr_1887491[(12)] = inst_1887405);

(statearr_1887491[(13)] = inst_1887407);

(statearr_1887491[(15)] = inst_1887406);

(statearr_1887491[(16)] = inst_1887404);

return statearr_1887491;
})();
var statearr_1887492_1887537 = state_1887463__$1;
(statearr_1887492_1887537[(2)] = null);

(statearr_1887492_1887537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (14))){
var state_1887463__$1 = state_1887463;
var statearr_1887496_1887538 = state_1887463__$1;
(statearr_1887496_1887538[(2)] = null);

(statearr_1887496_1887538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (16))){
var inst_1887418 = (state_1887463[(10)]);
var inst_1887422 = cljs.core.chunk_first.call(null,inst_1887418);
var inst_1887423 = cljs.core.chunk_rest.call(null,inst_1887418);
var inst_1887424 = cljs.core.count.call(null,inst_1887422);
var inst_1887404 = inst_1887423;
var inst_1887405 = inst_1887422;
var inst_1887406 = inst_1887424;
var inst_1887407 = (0);
var state_1887463__$1 = (function (){var statearr_1887497 = state_1887463;
(statearr_1887497[(12)] = inst_1887405);

(statearr_1887497[(13)] = inst_1887407);

(statearr_1887497[(15)] = inst_1887406);

(statearr_1887497[(16)] = inst_1887404);

return statearr_1887497;
})();
var statearr_1887498_1887539 = state_1887463__$1;
(statearr_1887498_1887539[(2)] = null);

(statearr_1887498_1887539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (10))){
var inst_1887405 = (state_1887463[(12)]);
var inst_1887407 = (state_1887463[(13)]);
var inst_1887406 = (state_1887463[(15)]);
var inst_1887404 = (state_1887463[(16)]);
var inst_1887412 = cljs.core._nth.call(null,inst_1887405,inst_1887407);
var inst_1887413 = cljs.core.async.muxch_STAR_.call(null,inst_1887412);
var inst_1887414 = cljs.core.async.close_BANG_.call(null,inst_1887413);
var inst_1887415 = (inst_1887407 + (1));
var tmp1887493 = inst_1887405;
var tmp1887494 = inst_1887406;
var tmp1887495 = inst_1887404;
var inst_1887404__$1 = tmp1887495;
var inst_1887405__$1 = tmp1887493;
var inst_1887406__$1 = tmp1887494;
var inst_1887407__$1 = inst_1887415;
var state_1887463__$1 = (function (){var statearr_1887499 = state_1887463;
(statearr_1887499[(12)] = inst_1887405__$1);

(statearr_1887499[(13)] = inst_1887407__$1);

(statearr_1887499[(17)] = inst_1887414);

(statearr_1887499[(15)] = inst_1887406__$1);

(statearr_1887499[(16)] = inst_1887404__$1);

return statearr_1887499;
})();
var statearr_1887500_1887540 = state_1887463__$1;
(statearr_1887500_1887540[(2)] = null);

(statearr_1887500_1887540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (18))){
var inst_1887433 = (state_1887463[(2)]);
var state_1887463__$1 = state_1887463;
var statearr_1887501_1887541 = state_1887463__$1;
(statearr_1887501_1887541[(2)] = inst_1887433);

(statearr_1887501_1887541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887464 === (8))){
var inst_1887407 = (state_1887463[(13)]);
var inst_1887406 = (state_1887463[(15)]);
var inst_1887409 = (inst_1887407 < inst_1887406);
var inst_1887410 = inst_1887409;
var state_1887463__$1 = state_1887463;
if(cljs.core.truth_(inst_1887410)){
var statearr_1887502_1887542 = state_1887463__$1;
(statearr_1887502_1887542[(1)] = (10));

} else {
var statearr_1887503_1887543 = state_1887463__$1;
(statearr_1887503_1887543[(1)] = (11));

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
});})(c__35562__auto___1887515,mults,ensure_mult,p))
;
return ((function (switch__35450__auto__,c__35562__auto___1887515,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_1887507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1887507[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_1887507[(1)] = (1));

return statearr_1887507;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_1887463){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1887463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1887508){if((e1887508 instanceof Object)){
var ex__35454__auto__ = e1887508;
var statearr_1887509_1887544 = state_1887463;
(statearr_1887509_1887544[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1887463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1887508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1887545 = state_1887463;
state_1887463 = G__1887545;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_1887463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_1887463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1887515,mults,ensure_mult,p))
})();
var state__35564__auto__ = (function (){var statearr_1887510 = f__35563__auto__.call(null);
(statearr_1887510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1887515);

return statearr_1887510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1887515,mults,ensure_mult,p))
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
var args1887546 = [];
var len__25219__auto___1887549 = arguments.length;
var i__25220__auto___1887550 = (0);
while(true){
if((i__25220__auto___1887550 < len__25219__auto___1887549)){
args1887546.push((arguments[i__25220__auto___1887550]));

var G__1887551 = (i__25220__auto___1887550 + (1));
i__25220__auto___1887550 = G__1887551;
continue;
} else {
}
break;
}

var G__1887548 = args1887546.length;
switch (G__1887548) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1887546.length)].join('')));

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
var args1887553 = [];
var len__25219__auto___1887556 = arguments.length;
var i__25220__auto___1887557 = (0);
while(true){
if((i__25220__auto___1887557 < len__25219__auto___1887556)){
args1887553.push((arguments[i__25220__auto___1887557]));

var G__1887558 = (i__25220__auto___1887557 + (1));
i__25220__auto___1887557 = G__1887558;
continue;
} else {
}
break;
}

var G__1887555 = args1887553.length;
switch (G__1887555) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1887553.length)].join('')));

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
var args1887560 = [];
var len__25219__auto___1887631 = arguments.length;
var i__25220__auto___1887632 = (0);
while(true){
if((i__25220__auto___1887632 < len__25219__auto___1887631)){
args1887560.push((arguments[i__25220__auto___1887632]));

var G__1887633 = (i__25220__auto___1887632 + (1));
i__25220__auto___1887632 = G__1887633;
continue;
} else {
}
break;
}

var G__1887562 = args1887560.length;
switch (G__1887562) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1887560.length)].join('')));

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
var c__35562__auto___1887635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1887635,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1887635,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_1887601){
var state_val_1887602 = (state_1887601[(1)]);
if((state_val_1887602 === (7))){
var state_1887601__$1 = state_1887601;
var statearr_1887603_1887636 = state_1887601__$1;
(statearr_1887603_1887636[(2)] = null);

(statearr_1887603_1887636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887602 === (1))){
var state_1887601__$1 = state_1887601;
var statearr_1887604_1887637 = state_1887601__$1;
(statearr_1887604_1887637[(2)] = null);

(statearr_1887604_1887637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887602 === (4))){
var inst_1887565 = (state_1887601[(7)]);
var inst_1887567 = (inst_1887565 < cnt);
var state_1887601__$1 = state_1887601;
if(cljs.core.truth_(inst_1887567)){
var statearr_1887605_1887638 = state_1887601__$1;
(statearr_1887605_1887638[(1)] = (6));

} else {
var statearr_1887606_1887639 = state_1887601__$1;
(statearr_1887606_1887639[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887602 === (15))){
var inst_1887597 = (state_1887601[(2)]);
var state_1887601__$1 = state_1887601;
var statearr_1887607_1887640 = state_1887601__$1;
(statearr_1887607_1887640[(2)] = inst_1887597);

(statearr_1887607_1887640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887602 === (13))){
var inst_1887590 = cljs.core.async.close_BANG_.call(null,out);
var state_1887601__$1 = state_1887601;
var statearr_1887608_1887641 = state_1887601__$1;
(statearr_1887608_1887641[(2)] = inst_1887590);

(statearr_1887608_1887641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887602 === (6))){
var state_1887601__$1 = state_1887601;
var statearr_1887609_1887642 = state_1887601__$1;
(statearr_1887609_1887642[(2)] = null);

(statearr_1887609_1887642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887602 === (3))){
var inst_1887599 = (state_1887601[(2)]);
var state_1887601__$1 = state_1887601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1887601__$1,inst_1887599);
} else {
if((state_val_1887602 === (12))){
var inst_1887587 = (state_1887601[(8)]);
var inst_1887587__$1 = (state_1887601[(2)]);
var inst_1887588 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_1887587__$1);
var state_1887601__$1 = (function (){var statearr_1887610 = state_1887601;
(statearr_1887610[(8)] = inst_1887587__$1);

return statearr_1887610;
})();
if(cljs.core.truth_(inst_1887588)){
var statearr_1887611_1887643 = state_1887601__$1;
(statearr_1887611_1887643[(1)] = (13));

} else {
var statearr_1887612_1887644 = state_1887601__$1;
(statearr_1887612_1887644[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887602 === (2))){
var inst_1887564 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_1887565 = (0);
var state_1887601__$1 = (function (){var statearr_1887613 = state_1887601;
(statearr_1887613[(7)] = inst_1887565);

(statearr_1887613[(9)] = inst_1887564);

return statearr_1887613;
})();
var statearr_1887614_1887645 = state_1887601__$1;
(statearr_1887614_1887645[(2)] = null);

(statearr_1887614_1887645[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887602 === (11))){
var inst_1887565 = (state_1887601[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_1887601,(10),Object,null,(9));
var inst_1887574 = chs__$1.call(null,inst_1887565);
var inst_1887575 = done.call(null,inst_1887565);
var inst_1887576 = cljs.core.async.take_BANG_.call(null,inst_1887574,inst_1887575);
var state_1887601__$1 = state_1887601;
var statearr_1887615_1887646 = state_1887601__$1;
(statearr_1887615_1887646[(2)] = inst_1887576);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1887601__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887602 === (9))){
var inst_1887565 = (state_1887601[(7)]);
var inst_1887578 = (state_1887601[(2)]);
var inst_1887579 = (inst_1887565 + (1));
var inst_1887565__$1 = inst_1887579;
var state_1887601__$1 = (function (){var statearr_1887616 = state_1887601;
(statearr_1887616[(7)] = inst_1887565__$1);

(statearr_1887616[(10)] = inst_1887578);

return statearr_1887616;
})();
var statearr_1887617_1887647 = state_1887601__$1;
(statearr_1887617_1887647[(2)] = null);

(statearr_1887617_1887647[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887602 === (5))){
var inst_1887585 = (state_1887601[(2)]);
var state_1887601__$1 = (function (){var statearr_1887618 = state_1887601;
(statearr_1887618[(11)] = inst_1887585);

return statearr_1887618;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1887601__$1,(12),dchan);
} else {
if((state_val_1887602 === (14))){
var inst_1887587 = (state_1887601[(8)]);
var inst_1887592 = cljs.core.apply.call(null,f,inst_1887587);
var state_1887601__$1 = state_1887601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1887601__$1,(16),out,inst_1887592);
} else {
if((state_val_1887602 === (16))){
var inst_1887594 = (state_1887601[(2)]);
var state_1887601__$1 = (function (){var statearr_1887619 = state_1887601;
(statearr_1887619[(12)] = inst_1887594);

return statearr_1887619;
})();
var statearr_1887620_1887648 = state_1887601__$1;
(statearr_1887620_1887648[(2)] = null);

(statearr_1887620_1887648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887602 === (10))){
var inst_1887569 = (state_1887601[(2)]);
var inst_1887570 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_1887601__$1 = (function (){var statearr_1887621 = state_1887601;
(statearr_1887621[(13)] = inst_1887569);

return statearr_1887621;
})();
var statearr_1887622_1887649 = state_1887601__$1;
(statearr_1887622_1887649[(2)] = inst_1887570);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1887601__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887602 === (8))){
var inst_1887583 = (state_1887601[(2)]);
var state_1887601__$1 = state_1887601;
var statearr_1887623_1887650 = state_1887601__$1;
(statearr_1887623_1887650[(2)] = inst_1887583);

(statearr_1887623_1887650[(1)] = (5));


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
});})(c__35562__auto___1887635,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35450__auto__,c__35562__auto___1887635,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_1887627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1887627[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_1887627[(1)] = (1));

return statearr_1887627;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_1887601){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1887601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1887628){if((e1887628 instanceof Object)){
var ex__35454__auto__ = e1887628;
var statearr_1887629_1887651 = state_1887601;
(statearr_1887629_1887651[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1887601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1887628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1887652 = state_1887601;
state_1887601 = G__1887652;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_1887601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_1887601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1887635,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35564__auto__ = (function (){var statearr_1887630 = f__35563__auto__.call(null);
(statearr_1887630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1887635);

return statearr_1887630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1887635,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args1887654 = [];
var len__25219__auto___1887710 = arguments.length;
var i__25220__auto___1887711 = (0);
while(true){
if((i__25220__auto___1887711 < len__25219__auto___1887710)){
args1887654.push((arguments[i__25220__auto___1887711]));

var G__1887712 = (i__25220__auto___1887711 + (1));
i__25220__auto___1887711 = G__1887712;
continue;
} else {
}
break;
}

var G__1887656 = args1887654.length;
switch (G__1887656) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1887654.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35562__auto___1887714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1887714,out){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1887714,out){
return (function (state_1887686){
var state_val_1887687 = (state_1887686[(1)]);
if((state_val_1887687 === (7))){
var inst_1887666 = (state_1887686[(7)]);
var inst_1887665 = (state_1887686[(8)]);
var inst_1887665__$1 = (state_1887686[(2)]);
var inst_1887666__$1 = cljs.core.nth.call(null,inst_1887665__$1,(0),null);
var inst_1887667 = cljs.core.nth.call(null,inst_1887665__$1,(1),null);
var inst_1887668 = (inst_1887666__$1 == null);
var state_1887686__$1 = (function (){var statearr_1887688 = state_1887686;
(statearr_1887688[(7)] = inst_1887666__$1);

(statearr_1887688[(8)] = inst_1887665__$1);

(statearr_1887688[(9)] = inst_1887667);

return statearr_1887688;
})();
if(cljs.core.truth_(inst_1887668)){
var statearr_1887689_1887715 = state_1887686__$1;
(statearr_1887689_1887715[(1)] = (8));

} else {
var statearr_1887690_1887716 = state_1887686__$1;
(statearr_1887690_1887716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887687 === (1))){
var inst_1887657 = cljs.core.vec.call(null,chs);
var inst_1887658 = inst_1887657;
var state_1887686__$1 = (function (){var statearr_1887691 = state_1887686;
(statearr_1887691[(10)] = inst_1887658);

return statearr_1887691;
})();
var statearr_1887692_1887717 = state_1887686__$1;
(statearr_1887692_1887717[(2)] = null);

(statearr_1887692_1887717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887687 === (4))){
var inst_1887658 = (state_1887686[(10)]);
var state_1887686__$1 = state_1887686;
return cljs.core.async.ioc_alts_BANG_.call(null,state_1887686__$1,(7),inst_1887658);
} else {
if((state_val_1887687 === (6))){
var inst_1887682 = (state_1887686[(2)]);
var state_1887686__$1 = state_1887686;
var statearr_1887693_1887718 = state_1887686__$1;
(statearr_1887693_1887718[(2)] = inst_1887682);

(statearr_1887693_1887718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887687 === (3))){
var inst_1887684 = (state_1887686[(2)]);
var state_1887686__$1 = state_1887686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1887686__$1,inst_1887684);
} else {
if((state_val_1887687 === (2))){
var inst_1887658 = (state_1887686[(10)]);
var inst_1887660 = cljs.core.count.call(null,inst_1887658);
var inst_1887661 = (inst_1887660 > (0));
var state_1887686__$1 = state_1887686;
if(cljs.core.truth_(inst_1887661)){
var statearr_1887695_1887719 = state_1887686__$1;
(statearr_1887695_1887719[(1)] = (4));

} else {
var statearr_1887696_1887720 = state_1887686__$1;
(statearr_1887696_1887720[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887687 === (11))){
var inst_1887658 = (state_1887686[(10)]);
var inst_1887675 = (state_1887686[(2)]);
var tmp1887694 = inst_1887658;
var inst_1887658__$1 = tmp1887694;
var state_1887686__$1 = (function (){var statearr_1887697 = state_1887686;
(statearr_1887697[(10)] = inst_1887658__$1);

(statearr_1887697[(11)] = inst_1887675);

return statearr_1887697;
})();
var statearr_1887698_1887721 = state_1887686__$1;
(statearr_1887698_1887721[(2)] = null);

(statearr_1887698_1887721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887687 === (9))){
var inst_1887666 = (state_1887686[(7)]);
var state_1887686__$1 = state_1887686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1887686__$1,(11),out,inst_1887666);
} else {
if((state_val_1887687 === (5))){
var inst_1887680 = cljs.core.async.close_BANG_.call(null,out);
var state_1887686__$1 = state_1887686;
var statearr_1887699_1887722 = state_1887686__$1;
(statearr_1887699_1887722[(2)] = inst_1887680);

(statearr_1887699_1887722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887687 === (10))){
var inst_1887678 = (state_1887686[(2)]);
var state_1887686__$1 = state_1887686;
var statearr_1887700_1887723 = state_1887686__$1;
(statearr_1887700_1887723[(2)] = inst_1887678);

(statearr_1887700_1887723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887687 === (8))){
var inst_1887666 = (state_1887686[(7)]);
var inst_1887658 = (state_1887686[(10)]);
var inst_1887665 = (state_1887686[(8)]);
var inst_1887667 = (state_1887686[(9)]);
var inst_1887670 = (function (){var cs = inst_1887658;
var vec__1887663 = inst_1887665;
var v = inst_1887666;
var c = inst_1887667;
return ((function (cs,vec__1887663,v,c,inst_1887666,inst_1887658,inst_1887665,inst_1887667,state_val_1887687,c__35562__auto___1887714,out){
return (function (p1__1887653_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__1887653_SHARP_);
});
;})(cs,vec__1887663,v,c,inst_1887666,inst_1887658,inst_1887665,inst_1887667,state_val_1887687,c__35562__auto___1887714,out))
})();
var inst_1887671 = cljs.core.filterv.call(null,inst_1887670,inst_1887658);
var inst_1887658__$1 = inst_1887671;
var state_1887686__$1 = (function (){var statearr_1887701 = state_1887686;
(statearr_1887701[(10)] = inst_1887658__$1);

return statearr_1887701;
})();
var statearr_1887702_1887724 = state_1887686__$1;
(statearr_1887702_1887724[(2)] = null);

(statearr_1887702_1887724[(1)] = (2));


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
});})(c__35562__auto___1887714,out))
;
return ((function (switch__35450__auto__,c__35562__auto___1887714,out){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_1887706 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1887706[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_1887706[(1)] = (1));

return statearr_1887706;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_1887686){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1887686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1887707){if((e1887707 instanceof Object)){
var ex__35454__auto__ = e1887707;
var statearr_1887708_1887725 = state_1887686;
(statearr_1887708_1887725[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1887686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1887707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1887726 = state_1887686;
state_1887686 = G__1887726;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_1887686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_1887686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1887714,out))
})();
var state__35564__auto__ = (function (){var statearr_1887709 = f__35563__auto__.call(null);
(statearr_1887709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1887714);

return statearr_1887709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1887714,out))
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
var args1887727 = [];
var len__25219__auto___1887776 = arguments.length;
var i__25220__auto___1887777 = (0);
while(true){
if((i__25220__auto___1887777 < len__25219__auto___1887776)){
args1887727.push((arguments[i__25220__auto___1887777]));

var G__1887778 = (i__25220__auto___1887777 + (1));
i__25220__auto___1887777 = G__1887778;
continue;
} else {
}
break;
}

var G__1887729 = args1887727.length;
switch (G__1887729) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1887727.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35562__auto___1887780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1887780,out){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1887780,out){
return (function (state_1887753){
var state_val_1887754 = (state_1887753[(1)]);
if((state_val_1887754 === (7))){
var inst_1887735 = (state_1887753[(7)]);
var inst_1887735__$1 = (state_1887753[(2)]);
var inst_1887736 = (inst_1887735__$1 == null);
var inst_1887737 = cljs.core.not.call(null,inst_1887736);
var state_1887753__$1 = (function (){var statearr_1887755 = state_1887753;
(statearr_1887755[(7)] = inst_1887735__$1);

return statearr_1887755;
})();
if(inst_1887737){
var statearr_1887756_1887781 = state_1887753__$1;
(statearr_1887756_1887781[(1)] = (8));

} else {
var statearr_1887757_1887782 = state_1887753__$1;
(statearr_1887757_1887782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887754 === (1))){
var inst_1887730 = (0);
var state_1887753__$1 = (function (){var statearr_1887758 = state_1887753;
(statearr_1887758[(8)] = inst_1887730);

return statearr_1887758;
})();
var statearr_1887759_1887783 = state_1887753__$1;
(statearr_1887759_1887783[(2)] = null);

(statearr_1887759_1887783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887754 === (4))){
var state_1887753__$1 = state_1887753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1887753__$1,(7),ch);
} else {
if((state_val_1887754 === (6))){
var inst_1887748 = (state_1887753[(2)]);
var state_1887753__$1 = state_1887753;
var statearr_1887760_1887784 = state_1887753__$1;
(statearr_1887760_1887784[(2)] = inst_1887748);

(statearr_1887760_1887784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887754 === (3))){
var inst_1887750 = (state_1887753[(2)]);
var inst_1887751 = cljs.core.async.close_BANG_.call(null,out);
var state_1887753__$1 = (function (){var statearr_1887761 = state_1887753;
(statearr_1887761[(9)] = inst_1887750);

return statearr_1887761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1887753__$1,inst_1887751);
} else {
if((state_val_1887754 === (2))){
var inst_1887730 = (state_1887753[(8)]);
var inst_1887732 = (inst_1887730 < n);
var state_1887753__$1 = state_1887753;
if(cljs.core.truth_(inst_1887732)){
var statearr_1887762_1887785 = state_1887753__$1;
(statearr_1887762_1887785[(1)] = (4));

} else {
var statearr_1887763_1887786 = state_1887753__$1;
(statearr_1887763_1887786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887754 === (11))){
var inst_1887730 = (state_1887753[(8)]);
var inst_1887740 = (state_1887753[(2)]);
var inst_1887741 = (inst_1887730 + (1));
var inst_1887730__$1 = inst_1887741;
var state_1887753__$1 = (function (){var statearr_1887764 = state_1887753;
(statearr_1887764[(10)] = inst_1887740);

(statearr_1887764[(8)] = inst_1887730__$1);

return statearr_1887764;
})();
var statearr_1887765_1887787 = state_1887753__$1;
(statearr_1887765_1887787[(2)] = null);

(statearr_1887765_1887787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887754 === (9))){
var state_1887753__$1 = state_1887753;
var statearr_1887766_1887788 = state_1887753__$1;
(statearr_1887766_1887788[(2)] = null);

(statearr_1887766_1887788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887754 === (5))){
var state_1887753__$1 = state_1887753;
var statearr_1887767_1887789 = state_1887753__$1;
(statearr_1887767_1887789[(2)] = null);

(statearr_1887767_1887789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887754 === (10))){
var inst_1887745 = (state_1887753[(2)]);
var state_1887753__$1 = state_1887753;
var statearr_1887768_1887790 = state_1887753__$1;
(statearr_1887768_1887790[(2)] = inst_1887745);

(statearr_1887768_1887790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887754 === (8))){
var inst_1887735 = (state_1887753[(7)]);
var state_1887753__$1 = state_1887753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1887753__$1,(11),out,inst_1887735);
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
});})(c__35562__auto___1887780,out))
;
return ((function (switch__35450__auto__,c__35562__auto___1887780,out){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_1887772 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1887772[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_1887772[(1)] = (1));

return statearr_1887772;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_1887753){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1887753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1887773){if((e1887773 instanceof Object)){
var ex__35454__auto__ = e1887773;
var statearr_1887774_1887791 = state_1887753;
(statearr_1887774_1887791[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1887753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1887773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1887792 = state_1887753;
state_1887753 = G__1887792;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_1887753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_1887753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1887780,out))
})();
var state__35564__auto__ = (function (){var statearr_1887775 = f__35563__auto__.call(null);
(statearr_1887775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1887780);

return statearr_1887775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1887780,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async1887800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async1887800 = (function (map_LT_,f,ch,meta1887801){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta1887801 = meta1887801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1887800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1887802,meta1887801__$1){
var self__ = this;
var _1887802__$1 = this;
return (new cljs.core.async.t_cljs$core$async1887800(self__.map_LT_,self__.f,self__.ch,meta1887801__$1));
});

cljs.core.async.t_cljs$core$async1887800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1887802){
var self__ = this;
var _1887802__$1 = this;
return self__.meta1887801;
});

cljs.core.async.t_cljs$core$async1887800.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async1887800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async1887800.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async1887800.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async1887800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async1887803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async1887803 = (function (map_LT_,f,ch,meta1887801,_,fn1,meta1887804){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta1887801 = meta1887801;
this._ = _;
this.fn1 = fn1;
this.meta1887804 = meta1887804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1887803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_1887805,meta1887804__$1){
var self__ = this;
var _1887805__$1 = this;
return (new cljs.core.async.t_cljs$core$async1887803(self__.map_LT_,self__.f,self__.ch,self__.meta1887801,self__._,self__.fn1,meta1887804__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async1887803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_1887805){
var self__ = this;
var _1887805__$1 = this;
return self__.meta1887804;
});})(___$1))
;

cljs.core.async.t_cljs$core$async1887803.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async1887803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async1887803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__1887793_SHARP_){
return f1.call(null,(((p1__1887793_SHARP_ == null))?null:self__.f.call(null,p1__1887793_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async1887803.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta1887801","meta1887801",-945603155,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async1887800","cljs.core.async/t_cljs$core$async1887800",1800508528,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta1887804","meta1887804",-1498706273,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async1887803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1887803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1887803";

cljs.core.async.t_cljs$core$async1887803.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async1887803");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async1887803 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async1887803(map_LT___$1,f__$1,ch__$1,meta1887801__$1,___$2,fn1__$1,meta1887804){
return (new cljs.core.async.t_cljs$core$async1887803(map_LT___$1,f__$1,ch__$1,meta1887801__$1,___$2,fn1__$1,meta1887804));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async1887803(self__.map_LT_,self__.f,self__.ch,self__.meta1887801,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async1887800.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async1887800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async1887800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta1887801","meta1887801",-945603155,null)], null);
});

cljs.core.async.t_cljs$core$async1887800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1887800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1887800";

cljs.core.async.t_cljs$core$async1887800.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async1887800");
});

cljs.core.async.__GT_t_cljs$core$async1887800 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async1887800(map_LT___$1,f__$1,ch__$1,meta1887801){
return (new cljs.core.async.t_cljs$core$async1887800(map_LT___$1,f__$1,ch__$1,meta1887801));
});

}

return (new cljs.core.async.t_cljs$core$async1887800(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async1887809 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async1887809 = (function (map_GT_,f,ch,meta1887810){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta1887810 = meta1887810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1887809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1887811,meta1887810__$1){
var self__ = this;
var _1887811__$1 = this;
return (new cljs.core.async.t_cljs$core$async1887809(self__.map_GT_,self__.f,self__.ch,meta1887810__$1));
});

cljs.core.async.t_cljs$core$async1887809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1887811){
var self__ = this;
var _1887811__$1 = this;
return self__.meta1887810;
});

cljs.core.async.t_cljs$core$async1887809.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async1887809.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async1887809.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async1887809.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async1887809.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async1887809.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async1887809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta1887810","meta1887810",1125152753,null)], null);
});

cljs.core.async.t_cljs$core$async1887809.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1887809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1887809";

cljs.core.async.t_cljs$core$async1887809.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async1887809");
});

cljs.core.async.__GT_t_cljs$core$async1887809 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async1887809(map_GT___$1,f__$1,ch__$1,meta1887810){
return (new cljs.core.async.t_cljs$core$async1887809(map_GT___$1,f__$1,ch__$1,meta1887810));
});

}

return (new cljs.core.async.t_cljs$core$async1887809(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async1887815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async1887815 = (function (filter_GT_,p,ch,meta1887816){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta1887816 = meta1887816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async1887815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1887817,meta1887816__$1){
var self__ = this;
var _1887817__$1 = this;
return (new cljs.core.async.t_cljs$core$async1887815(self__.filter_GT_,self__.p,self__.ch,meta1887816__$1));
});

cljs.core.async.t_cljs$core$async1887815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1887817){
var self__ = this;
var _1887817__$1 = this;
return self__.meta1887816;
});

cljs.core.async.t_cljs$core$async1887815.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async1887815.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async1887815.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async1887815.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async1887815.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async1887815.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async1887815.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async1887815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta1887816","meta1887816",-887164962,null)], null);
});

cljs.core.async.t_cljs$core$async1887815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async1887815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async1887815";

cljs.core.async.t_cljs$core$async1887815.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"cljs.core.async/t_cljs$core$async1887815");
});

cljs.core.async.__GT_t_cljs$core$async1887815 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async1887815(filter_GT___$1,p__$1,ch__$1,meta1887816){
return (new cljs.core.async.t_cljs$core$async1887815(filter_GT___$1,p__$1,ch__$1,meta1887816));
});

}

return (new cljs.core.async.t_cljs$core$async1887815(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args1887818 = [];
var len__25219__auto___1887862 = arguments.length;
var i__25220__auto___1887863 = (0);
while(true){
if((i__25220__auto___1887863 < len__25219__auto___1887862)){
args1887818.push((arguments[i__25220__auto___1887863]));

var G__1887864 = (i__25220__auto___1887863 + (1));
i__25220__auto___1887863 = G__1887864;
continue;
} else {
}
break;
}

var G__1887820 = args1887818.length;
switch (G__1887820) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1887818.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35562__auto___1887866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1887866,out){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1887866,out){
return (function (state_1887841){
var state_val_1887842 = (state_1887841[(1)]);
if((state_val_1887842 === (7))){
var inst_1887837 = (state_1887841[(2)]);
var state_1887841__$1 = state_1887841;
var statearr_1887843_1887867 = state_1887841__$1;
(statearr_1887843_1887867[(2)] = inst_1887837);

(statearr_1887843_1887867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887842 === (1))){
var state_1887841__$1 = state_1887841;
var statearr_1887844_1887868 = state_1887841__$1;
(statearr_1887844_1887868[(2)] = null);

(statearr_1887844_1887868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887842 === (4))){
var inst_1887823 = (state_1887841[(7)]);
var inst_1887823__$1 = (state_1887841[(2)]);
var inst_1887824 = (inst_1887823__$1 == null);
var state_1887841__$1 = (function (){var statearr_1887845 = state_1887841;
(statearr_1887845[(7)] = inst_1887823__$1);

return statearr_1887845;
})();
if(cljs.core.truth_(inst_1887824)){
var statearr_1887846_1887869 = state_1887841__$1;
(statearr_1887846_1887869[(1)] = (5));

} else {
var statearr_1887847_1887870 = state_1887841__$1;
(statearr_1887847_1887870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887842 === (6))){
var inst_1887823 = (state_1887841[(7)]);
var inst_1887828 = p.call(null,inst_1887823);
var state_1887841__$1 = state_1887841;
if(cljs.core.truth_(inst_1887828)){
var statearr_1887848_1887871 = state_1887841__$1;
(statearr_1887848_1887871[(1)] = (8));

} else {
var statearr_1887849_1887872 = state_1887841__$1;
(statearr_1887849_1887872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887842 === (3))){
var inst_1887839 = (state_1887841[(2)]);
var state_1887841__$1 = state_1887841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1887841__$1,inst_1887839);
} else {
if((state_val_1887842 === (2))){
var state_1887841__$1 = state_1887841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1887841__$1,(4),ch);
} else {
if((state_val_1887842 === (11))){
var inst_1887831 = (state_1887841[(2)]);
var state_1887841__$1 = state_1887841;
var statearr_1887850_1887873 = state_1887841__$1;
(statearr_1887850_1887873[(2)] = inst_1887831);

(statearr_1887850_1887873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887842 === (9))){
var state_1887841__$1 = state_1887841;
var statearr_1887851_1887874 = state_1887841__$1;
(statearr_1887851_1887874[(2)] = null);

(statearr_1887851_1887874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887842 === (5))){
var inst_1887826 = cljs.core.async.close_BANG_.call(null,out);
var state_1887841__$1 = state_1887841;
var statearr_1887852_1887875 = state_1887841__$1;
(statearr_1887852_1887875[(2)] = inst_1887826);

(statearr_1887852_1887875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887842 === (10))){
var inst_1887834 = (state_1887841[(2)]);
var state_1887841__$1 = (function (){var statearr_1887853 = state_1887841;
(statearr_1887853[(8)] = inst_1887834);

return statearr_1887853;
})();
var statearr_1887854_1887876 = state_1887841__$1;
(statearr_1887854_1887876[(2)] = null);

(statearr_1887854_1887876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1887842 === (8))){
var inst_1887823 = (state_1887841[(7)]);
var state_1887841__$1 = state_1887841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1887841__$1,(11),out,inst_1887823);
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
});})(c__35562__auto___1887866,out))
;
return ((function (switch__35450__auto__,c__35562__auto___1887866,out){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_1887858 = [null,null,null,null,null,null,null,null,null];
(statearr_1887858[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_1887858[(1)] = (1));

return statearr_1887858;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_1887841){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1887841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1887859){if((e1887859 instanceof Object)){
var ex__35454__auto__ = e1887859;
var statearr_1887860_1887877 = state_1887841;
(statearr_1887860_1887877[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1887841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1887859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1887878 = state_1887841;
state_1887841 = G__1887878;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_1887841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_1887841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1887866,out))
})();
var state__35564__auto__ = (function (){var statearr_1887861 = f__35563__auto__.call(null);
(statearr_1887861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1887866);

return statearr_1887861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1887866,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args1887879 = [];
var len__25219__auto___1887882 = arguments.length;
var i__25220__auto___1887883 = (0);
while(true){
if((i__25220__auto___1887883 < len__25219__auto___1887882)){
args1887879.push((arguments[i__25220__auto___1887883]));

var G__1887884 = (i__25220__auto___1887883 + (1));
i__25220__auto___1887883 = G__1887884;
continue;
} else {
}
break;
}

var G__1887881 = args1887879.length;
switch (G__1887881) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1887879.length)].join('')));

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
return (function (state_1888051){
var state_val_1888052 = (state_1888051[(1)]);
if((state_val_1888052 === (7))){
var inst_1888047 = (state_1888051[(2)]);
var state_1888051__$1 = state_1888051;
var statearr_1888053_1888094 = state_1888051__$1;
(statearr_1888053_1888094[(2)] = inst_1888047);

(statearr_1888053_1888094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (20))){
var inst_1888017 = (state_1888051[(7)]);
var inst_1888028 = (state_1888051[(2)]);
var inst_1888029 = cljs.core.next.call(null,inst_1888017);
var inst_1888003 = inst_1888029;
var inst_1888004 = null;
var inst_1888005 = (0);
var inst_1888006 = (0);
var state_1888051__$1 = (function (){var statearr_1888054 = state_1888051;
(statearr_1888054[(8)] = inst_1888028);

(statearr_1888054[(9)] = inst_1888003);

(statearr_1888054[(10)] = inst_1888004);

(statearr_1888054[(11)] = inst_1888005);

(statearr_1888054[(12)] = inst_1888006);

return statearr_1888054;
})();
var statearr_1888055_1888095 = state_1888051__$1;
(statearr_1888055_1888095[(2)] = null);

(statearr_1888055_1888095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (1))){
var state_1888051__$1 = state_1888051;
var statearr_1888056_1888096 = state_1888051__$1;
(statearr_1888056_1888096[(2)] = null);

(statearr_1888056_1888096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (4))){
var inst_1887992 = (state_1888051[(13)]);
var inst_1887992__$1 = (state_1888051[(2)]);
var inst_1887993 = (inst_1887992__$1 == null);
var state_1888051__$1 = (function (){var statearr_1888057 = state_1888051;
(statearr_1888057[(13)] = inst_1887992__$1);

return statearr_1888057;
})();
if(cljs.core.truth_(inst_1887993)){
var statearr_1888058_1888097 = state_1888051__$1;
(statearr_1888058_1888097[(1)] = (5));

} else {
var statearr_1888059_1888098 = state_1888051__$1;
(statearr_1888059_1888098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (15))){
var state_1888051__$1 = state_1888051;
var statearr_1888063_1888099 = state_1888051__$1;
(statearr_1888063_1888099[(2)] = null);

(statearr_1888063_1888099[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (21))){
var state_1888051__$1 = state_1888051;
var statearr_1888064_1888100 = state_1888051__$1;
(statearr_1888064_1888100[(2)] = null);

(statearr_1888064_1888100[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (13))){
var inst_1888003 = (state_1888051[(9)]);
var inst_1888004 = (state_1888051[(10)]);
var inst_1888005 = (state_1888051[(11)]);
var inst_1888006 = (state_1888051[(12)]);
var inst_1888013 = (state_1888051[(2)]);
var inst_1888014 = (inst_1888006 + (1));
var tmp1888060 = inst_1888003;
var tmp1888061 = inst_1888004;
var tmp1888062 = inst_1888005;
var inst_1888003__$1 = tmp1888060;
var inst_1888004__$1 = tmp1888061;
var inst_1888005__$1 = tmp1888062;
var inst_1888006__$1 = inst_1888014;
var state_1888051__$1 = (function (){var statearr_1888065 = state_1888051;
(statearr_1888065[(9)] = inst_1888003__$1);

(statearr_1888065[(10)] = inst_1888004__$1);

(statearr_1888065[(11)] = inst_1888005__$1);

(statearr_1888065[(12)] = inst_1888006__$1);

(statearr_1888065[(14)] = inst_1888013);

return statearr_1888065;
})();
var statearr_1888066_1888101 = state_1888051__$1;
(statearr_1888066_1888101[(2)] = null);

(statearr_1888066_1888101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (22))){
var state_1888051__$1 = state_1888051;
var statearr_1888067_1888102 = state_1888051__$1;
(statearr_1888067_1888102[(2)] = null);

(statearr_1888067_1888102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (6))){
var inst_1887992 = (state_1888051[(13)]);
var inst_1888001 = f.call(null,inst_1887992);
var inst_1888002 = cljs.core.seq.call(null,inst_1888001);
var inst_1888003 = inst_1888002;
var inst_1888004 = null;
var inst_1888005 = (0);
var inst_1888006 = (0);
var state_1888051__$1 = (function (){var statearr_1888068 = state_1888051;
(statearr_1888068[(9)] = inst_1888003);

(statearr_1888068[(10)] = inst_1888004);

(statearr_1888068[(11)] = inst_1888005);

(statearr_1888068[(12)] = inst_1888006);

return statearr_1888068;
})();
var statearr_1888069_1888103 = state_1888051__$1;
(statearr_1888069_1888103[(2)] = null);

(statearr_1888069_1888103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (17))){
var inst_1888017 = (state_1888051[(7)]);
var inst_1888021 = cljs.core.chunk_first.call(null,inst_1888017);
var inst_1888022 = cljs.core.chunk_rest.call(null,inst_1888017);
var inst_1888023 = cljs.core.count.call(null,inst_1888021);
var inst_1888003 = inst_1888022;
var inst_1888004 = inst_1888021;
var inst_1888005 = inst_1888023;
var inst_1888006 = (0);
var state_1888051__$1 = (function (){var statearr_1888070 = state_1888051;
(statearr_1888070[(9)] = inst_1888003);

(statearr_1888070[(10)] = inst_1888004);

(statearr_1888070[(11)] = inst_1888005);

(statearr_1888070[(12)] = inst_1888006);

return statearr_1888070;
})();
var statearr_1888071_1888104 = state_1888051__$1;
(statearr_1888071_1888104[(2)] = null);

(statearr_1888071_1888104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (3))){
var inst_1888049 = (state_1888051[(2)]);
var state_1888051__$1 = state_1888051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1888051__$1,inst_1888049);
} else {
if((state_val_1888052 === (12))){
var inst_1888037 = (state_1888051[(2)]);
var state_1888051__$1 = state_1888051;
var statearr_1888072_1888105 = state_1888051__$1;
(statearr_1888072_1888105[(2)] = inst_1888037);

(statearr_1888072_1888105[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (2))){
var state_1888051__$1 = state_1888051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1888051__$1,(4),in$);
} else {
if((state_val_1888052 === (23))){
var inst_1888045 = (state_1888051[(2)]);
var state_1888051__$1 = state_1888051;
var statearr_1888073_1888106 = state_1888051__$1;
(statearr_1888073_1888106[(2)] = inst_1888045);

(statearr_1888073_1888106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (19))){
var inst_1888032 = (state_1888051[(2)]);
var state_1888051__$1 = state_1888051;
var statearr_1888074_1888107 = state_1888051__$1;
(statearr_1888074_1888107[(2)] = inst_1888032);

(statearr_1888074_1888107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (11))){
var inst_1888003 = (state_1888051[(9)]);
var inst_1888017 = (state_1888051[(7)]);
var inst_1888017__$1 = cljs.core.seq.call(null,inst_1888003);
var state_1888051__$1 = (function (){var statearr_1888075 = state_1888051;
(statearr_1888075[(7)] = inst_1888017__$1);

return statearr_1888075;
})();
if(inst_1888017__$1){
var statearr_1888076_1888108 = state_1888051__$1;
(statearr_1888076_1888108[(1)] = (14));

} else {
var statearr_1888077_1888109 = state_1888051__$1;
(statearr_1888077_1888109[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (9))){
var inst_1888039 = (state_1888051[(2)]);
var inst_1888040 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_1888051__$1 = (function (){var statearr_1888078 = state_1888051;
(statearr_1888078[(15)] = inst_1888039);

return statearr_1888078;
})();
if(cljs.core.truth_(inst_1888040)){
var statearr_1888079_1888110 = state_1888051__$1;
(statearr_1888079_1888110[(1)] = (21));

} else {
var statearr_1888080_1888111 = state_1888051__$1;
(statearr_1888080_1888111[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (5))){
var inst_1887995 = cljs.core.async.close_BANG_.call(null,out);
var state_1888051__$1 = state_1888051;
var statearr_1888081_1888112 = state_1888051__$1;
(statearr_1888081_1888112[(2)] = inst_1887995);

(statearr_1888081_1888112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (14))){
var inst_1888017 = (state_1888051[(7)]);
var inst_1888019 = cljs.core.chunked_seq_QMARK_.call(null,inst_1888017);
var state_1888051__$1 = state_1888051;
if(inst_1888019){
var statearr_1888082_1888113 = state_1888051__$1;
(statearr_1888082_1888113[(1)] = (17));

} else {
var statearr_1888083_1888114 = state_1888051__$1;
(statearr_1888083_1888114[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (16))){
var inst_1888035 = (state_1888051[(2)]);
var state_1888051__$1 = state_1888051;
var statearr_1888084_1888115 = state_1888051__$1;
(statearr_1888084_1888115[(2)] = inst_1888035);

(statearr_1888084_1888115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888052 === (10))){
var inst_1888004 = (state_1888051[(10)]);
var inst_1888006 = (state_1888051[(12)]);
var inst_1888011 = cljs.core._nth.call(null,inst_1888004,inst_1888006);
var state_1888051__$1 = state_1888051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1888051__$1,(13),out,inst_1888011);
} else {
if((state_val_1888052 === (18))){
var inst_1888017 = (state_1888051[(7)]);
var inst_1888026 = cljs.core.first.call(null,inst_1888017);
var state_1888051__$1 = state_1888051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1888051__$1,(20),out,inst_1888026);
} else {
if((state_val_1888052 === (8))){
var inst_1888005 = (state_1888051[(11)]);
var inst_1888006 = (state_1888051[(12)]);
var inst_1888008 = (inst_1888006 < inst_1888005);
var inst_1888009 = inst_1888008;
var state_1888051__$1 = state_1888051;
if(cljs.core.truth_(inst_1888009)){
var statearr_1888085_1888116 = state_1888051__$1;
(statearr_1888085_1888116[(1)] = (10));

} else {
var statearr_1888086_1888117 = state_1888051__$1;
(statearr_1888086_1888117[(1)] = (11));

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
var statearr_1888090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1888090[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35451__auto__);

(statearr_1888090[(1)] = (1));

return statearr_1888090;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35451__auto____1 = (function (state_1888051){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1888051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1888091){if((e1888091 instanceof Object)){
var ex__35454__auto__ = e1888091;
var statearr_1888092_1888118 = state_1888051;
(statearr_1888092_1888118[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1888051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1888091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1888119 = state_1888051;
state_1888051 = G__1888119;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35451__auto__ = function(state_1888051){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35451__auto____1.call(this,state_1888051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35451__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35451__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto__))
})();
var state__35564__auto__ = (function (){var statearr_1888093 = f__35563__auto__.call(null);
(statearr_1888093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto__);

return statearr_1888093;
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
var args1888120 = [];
var len__25219__auto___1888123 = arguments.length;
var i__25220__auto___1888124 = (0);
while(true){
if((i__25220__auto___1888124 < len__25219__auto___1888123)){
args1888120.push((arguments[i__25220__auto___1888124]));

var G__1888125 = (i__25220__auto___1888124 + (1));
i__25220__auto___1888124 = G__1888125;
continue;
} else {
}
break;
}

var G__1888122 = args1888120.length;
switch (G__1888122) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1888120.length)].join('')));

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
var args1888127 = [];
var len__25219__auto___1888130 = arguments.length;
var i__25220__auto___1888131 = (0);
while(true){
if((i__25220__auto___1888131 < len__25219__auto___1888130)){
args1888127.push((arguments[i__25220__auto___1888131]));

var G__1888132 = (i__25220__auto___1888131 + (1));
i__25220__auto___1888131 = G__1888132;
continue;
} else {
}
break;
}

var G__1888129 = args1888127.length;
switch (G__1888129) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1888127.length)].join('')));

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
var args1888134 = [];
var len__25219__auto___1888185 = arguments.length;
var i__25220__auto___1888186 = (0);
while(true){
if((i__25220__auto___1888186 < len__25219__auto___1888185)){
args1888134.push((arguments[i__25220__auto___1888186]));

var G__1888187 = (i__25220__auto___1888186 + (1));
i__25220__auto___1888186 = G__1888187;
continue;
} else {
}
break;
}

var G__1888136 = args1888134.length;
switch (G__1888136) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1888134.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35562__auto___1888189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1888189,out){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1888189,out){
return (function (state_1888160){
var state_val_1888161 = (state_1888160[(1)]);
if((state_val_1888161 === (7))){
var inst_1888155 = (state_1888160[(2)]);
var state_1888160__$1 = state_1888160;
var statearr_1888162_1888190 = state_1888160__$1;
(statearr_1888162_1888190[(2)] = inst_1888155);

(statearr_1888162_1888190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888161 === (1))){
var inst_1888137 = null;
var state_1888160__$1 = (function (){var statearr_1888163 = state_1888160;
(statearr_1888163[(7)] = inst_1888137);

return statearr_1888163;
})();
var statearr_1888164_1888191 = state_1888160__$1;
(statearr_1888164_1888191[(2)] = null);

(statearr_1888164_1888191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888161 === (4))){
var inst_1888140 = (state_1888160[(8)]);
var inst_1888140__$1 = (state_1888160[(2)]);
var inst_1888141 = (inst_1888140__$1 == null);
var inst_1888142 = cljs.core.not.call(null,inst_1888141);
var state_1888160__$1 = (function (){var statearr_1888165 = state_1888160;
(statearr_1888165[(8)] = inst_1888140__$1);

return statearr_1888165;
})();
if(inst_1888142){
var statearr_1888166_1888192 = state_1888160__$1;
(statearr_1888166_1888192[(1)] = (5));

} else {
var statearr_1888167_1888193 = state_1888160__$1;
(statearr_1888167_1888193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888161 === (6))){
var state_1888160__$1 = state_1888160;
var statearr_1888168_1888194 = state_1888160__$1;
(statearr_1888168_1888194[(2)] = null);

(statearr_1888168_1888194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888161 === (3))){
var inst_1888157 = (state_1888160[(2)]);
var inst_1888158 = cljs.core.async.close_BANG_.call(null,out);
var state_1888160__$1 = (function (){var statearr_1888169 = state_1888160;
(statearr_1888169[(9)] = inst_1888157);

return statearr_1888169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1888160__$1,inst_1888158);
} else {
if((state_val_1888161 === (2))){
var state_1888160__$1 = state_1888160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1888160__$1,(4),ch);
} else {
if((state_val_1888161 === (11))){
var inst_1888140 = (state_1888160[(8)]);
var inst_1888149 = (state_1888160[(2)]);
var inst_1888137 = inst_1888140;
var state_1888160__$1 = (function (){var statearr_1888170 = state_1888160;
(statearr_1888170[(7)] = inst_1888137);

(statearr_1888170[(10)] = inst_1888149);

return statearr_1888170;
})();
var statearr_1888171_1888195 = state_1888160__$1;
(statearr_1888171_1888195[(2)] = null);

(statearr_1888171_1888195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888161 === (9))){
var inst_1888140 = (state_1888160[(8)]);
var state_1888160__$1 = state_1888160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1888160__$1,(11),out,inst_1888140);
} else {
if((state_val_1888161 === (5))){
var inst_1888140 = (state_1888160[(8)]);
var inst_1888137 = (state_1888160[(7)]);
var inst_1888144 = cljs.core._EQ_.call(null,inst_1888140,inst_1888137);
var state_1888160__$1 = state_1888160;
if(inst_1888144){
var statearr_1888173_1888196 = state_1888160__$1;
(statearr_1888173_1888196[(1)] = (8));

} else {
var statearr_1888174_1888197 = state_1888160__$1;
(statearr_1888174_1888197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888161 === (10))){
var inst_1888152 = (state_1888160[(2)]);
var state_1888160__$1 = state_1888160;
var statearr_1888175_1888198 = state_1888160__$1;
(statearr_1888175_1888198[(2)] = inst_1888152);

(statearr_1888175_1888198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888161 === (8))){
var inst_1888137 = (state_1888160[(7)]);
var tmp1888172 = inst_1888137;
var inst_1888137__$1 = tmp1888172;
var state_1888160__$1 = (function (){var statearr_1888176 = state_1888160;
(statearr_1888176[(7)] = inst_1888137__$1);

return statearr_1888176;
})();
var statearr_1888177_1888199 = state_1888160__$1;
(statearr_1888177_1888199[(2)] = null);

(statearr_1888177_1888199[(1)] = (2));


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
});})(c__35562__auto___1888189,out))
;
return ((function (switch__35450__auto__,c__35562__auto___1888189,out){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_1888181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_1888181[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_1888181[(1)] = (1));

return statearr_1888181;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_1888160){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1888160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1888182){if((e1888182 instanceof Object)){
var ex__35454__auto__ = e1888182;
var statearr_1888183_1888200 = state_1888160;
(statearr_1888183_1888200[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1888160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1888182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1888201 = state_1888160;
state_1888160 = G__1888201;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_1888160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_1888160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1888189,out))
})();
var state__35564__auto__ = (function (){var statearr_1888184 = f__35563__auto__.call(null);
(statearr_1888184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1888189);

return statearr_1888184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1888189,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args1888202 = [];
var len__25219__auto___1888272 = arguments.length;
var i__25220__auto___1888273 = (0);
while(true){
if((i__25220__auto___1888273 < len__25219__auto___1888272)){
args1888202.push((arguments[i__25220__auto___1888273]));

var G__1888274 = (i__25220__auto___1888273 + (1));
i__25220__auto___1888273 = G__1888274;
continue;
} else {
}
break;
}

var G__1888204 = args1888202.length;
switch (G__1888204) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1888202.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35562__auto___1888276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1888276,out){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1888276,out){
return (function (state_1888242){
var state_val_1888243 = (state_1888242[(1)]);
if((state_val_1888243 === (7))){
var inst_1888238 = (state_1888242[(2)]);
var state_1888242__$1 = state_1888242;
var statearr_1888244_1888277 = state_1888242__$1;
(statearr_1888244_1888277[(2)] = inst_1888238);

(statearr_1888244_1888277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888243 === (1))){
var inst_1888205 = (new Array(n));
var inst_1888206 = inst_1888205;
var inst_1888207 = (0);
var state_1888242__$1 = (function (){var statearr_1888245 = state_1888242;
(statearr_1888245[(7)] = inst_1888207);

(statearr_1888245[(8)] = inst_1888206);

return statearr_1888245;
})();
var statearr_1888246_1888278 = state_1888242__$1;
(statearr_1888246_1888278[(2)] = null);

(statearr_1888246_1888278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888243 === (4))){
var inst_1888210 = (state_1888242[(9)]);
var inst_1888210__$1 = (state_1888242[(2)]);
var inst_1888211 = (inst_1888210__$1 == null);
var inst_1888212 = cljs.core.not.call(null,inst_1888211);
var state_1888242__$1 = (function (){var statearr_1888247 = state_1888242;
(statearr_1888247[(9)] = inst_1888210__$1);

return statearr_1888247;
})();
if(inst_1888212){
var statearr_1888248_1888279 = state_1888242__$1;
(statearr_1888248_1888279[(1)] = (5));

} else {
var statearr_1888249_1888280 = state_1888242__$1;
(statearr_1888249_1888280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888243 === (15))){
var inst_1888232 = (state_1888242[(2)]);
var state_1888242__$1 = state_1888242;
var statearr_1888250_1888281 = state_1888242__$1;
(statearr_1888250_1888281[(2)] = inst_1888232);

(statearr_1888250_1888281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888243 === (13))){
var state_1888242__$1 = state_1888242;
var statearr_1888251_1888282 = state_1888242__$1;
(statearr_1888251_1888282[(2)] = null);

(statearr_1888251_1888282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888243 === (6))){
var inst_1888207 = (state_1888242[(7)]);
var inst_1888228 = (inst_1888207 > (0));
var state_1888242__$1 = state_1888242;
if(cljs.core.truth_(inst_1888228)){
var statearr_1888252_1888283 = state_1888242__$1;
(statearr_1888252_1888283[(1)] = (12));

} else {
var statearr_1888253_1888284 = state_1888242__$1;
(statearr_1888253_1888284[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888243 === (3))){
var inst_1888240 = (state_1888242[(2)]);
var state_1888242__$1 = state_1888242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1888242__$1,inst_1888240);
} else {
if((state_val_1888243 === (12))){
var inst_1888206 = (state_1888242[(8)]);
var inst_1888230 = cljs.core.vec.call(null,inst_1888206);
var state_1888242__$1 = state_1888242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1888242__$1,(15),out,inst_1888230);
} else {
if((state_val_1888243 === (2))){
var state_1888242__$1 = state_1888242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1888242__$1,(4),ch);
} else {
if((state_val_1888243 === (11))){
var inst_1888222 = (state_1888242[(2)]);
var inst_1888223 = (new Array(n));
var inst_1888206 = inst_1888223;
var inst_1888207 = (0);
var state_1888242__$1 = (function (){var statearr_1888254 = state_1888242;
(statearr_1888254[(10)] = inst_1888222);

(statearr_1888254[(7)] = inst_1888207);

(statearr_1888254[(8)] = inst_1888206);

return statearr_1888254;
})();
var statearr_1888255_1888285 = state_1888242__$1;
(statearr_1888255_1888285[(2)] = null);

(statearr_1888255_1888285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888243 === (9))){
var inst_1888206 = (state_1888242[(8)]);
var inst_1888220 = cljs.core.vec.call(null,inst_1888206);
var state_1888242__$1 = state_1888242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1888242__$1,(11),out,inst_1888220);
} else {
if((state_val_1888243 === (5))){
var inst_1888207 = (state_1888242[(7)]);
var inst_1888206 = (state_1888242[(8)]);
var inst_1888215 = (state_1888242[(11)]);
var inst_1888210 = (state_1888242[(9)]);
var inst_1888214 = (inst_1888206[inst_1888207] = inst_1888210);
var inst_1888215__$1 = (inst_1888207 + (1));
var inst_1888216 = (inst_1888215__$1 < n);
var state_1888242__$1 = (function (){var statearr_1888256 = state_1888242;
(statearr_1888256[(11)] = inst_1888215__$1);

(statearr_1888256[(12)] = inst_1888214);

return statearr_1888256;
})();
if(cljs.core.truth_(inst_1888216)){
var statearr_1888257_1888286 = state_1888242__$1;
(statearr_1888257_1888286[(1)] = (8));

} else {
var statearr_1888258_1888287 = state_1888242__$1;
(statearr_1888258_1888287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888243 === (14))){
var inst_1888235 = (state_1888242[(2)]);
var inst_1888236 = cljs.core.async.close_BANG_.call(null,out);
var state_1888242__$1 = (function (){var statearr_1888260 = state_1888242;
(statearr_1888260[(13)] = inst_1888235);

return statearr_1888260;
})();
var statearr_1888261_1888288 = state_1888242__$1;
(statearr_1888261_1888288[(2)] = inst_1888236);

(statearr_1888261_1888288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888243 === (10))){
var inst_1888226 = (state_1888242[(2)]);
var state_1888242__$1 = state_1888242;
var statearr_1888262_1888289 = state_1888242__$1;
(statearr_1888262_1888289[(2)] = inst_1888226);

(statearr_1888262_1888289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888243 === (8))){
var inst_1888206 = (state_1888242[(8)]);
var inst_1888215 = (state_1888242[(11)]);
var tmp1888259 = inst_1888206;
var inst_1888206__$1 = tmp1888259;
var inst_1888207 = inst_1888215;
var state_1888242__$1 = (function (){var statearr_1888263 = state_1888242;
(statearr_1888263[(7)] = inst_1888207);

(statearr_1888263[(8)] = inst_1888206__$1);

return statearr_1888263;
})();
var statearr_1888264_1888290 = state_1888242__$1;
(statearr_1888264_1888290[(2)] = null);

(statearr_1888264_1888290[(1)] = (2));


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
});})(c__35562__auto___1888276,out))
;
return ((function (switch__35450__auto__,c__35562__auto___1888276,out){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_1888268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1888268[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_1888268[(1)] = (1));

return statearr_1888268;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_1888242){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1888242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1888269){if((e1888269 instanceof Object)){
var ex__35454__auto__ = e1888269;
var statearr_1888270_1888291 = state_1888242;
(statearr_1888270_1888291[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1888242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1888269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1888292 = state_1888242;
state_1888242 = G__1888292;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_1888242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_1888242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1888276,out))
})();
var state__35564__auto__ = (function (){var statearr_1888271 = f__35563__auto__.call(null);
(statearr_1888271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1888276);

return statearr_1888271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1888276,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args1888293 = [];
var len__25219__auto___1888367 = arguments.length;
var i__25220__auto___1888368 = (0);
while(true){
if((i__25220__auto___1888368 < len__25219__auto___1888367)){
args1888293.push((arguments[i__25220__auto___1888368]));

var G__1888369 = (i__25220__auto___1888368 + (1));
i__25220__auto___1888368 = G__1888369;
continue;
} else {
}
break;
}

var G__1888295 = args1888293.length;
switch (G__1888295) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1888293.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35562__auto___1888371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1888371,out){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1888371,out){
return (function (state_1888337){
var state_val_1888338 = (state_1888337[(1)]);
if((state_val_1888338 === (7))){
var inst_1888333 = (state_1888337[(2)]);
var state_1888337__$1 = state_1888337;
var statearr_1888339_1888372 = state_1888337__$1;
(statearr_1888339_1888372[(2)] = inst_1888333);

(statearr_1888339_1888372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888338 === (1))){
var inst_1888296 = [];
var inst_1888297 = inst_1888296;
var inst_1888298 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_1888337__$1 = (function (){var statearr_1888340 = state_1888337;
(statearr_1888340[(7)] = inst_1888297);

(statearr_1888340[(8)] = inst_1888298);

return statearr_1888340;
})();
var statearr_1888341_1888373 = state_1888337__$1;
(statearr_1888341_1888373[(2)] = null);

(statearr_1888341_1888373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888338 === (4))){
var inst_1888301 = (state_1888337[(9)]);
var inst_1888301__$1 = (state_1888337[(2)]);
var inst_1888302 = (inst_1888301__$1 == null);
var inst_1888303 = cljs.core.not.call(null,inst_1888302);
var state_1888337__$1 = (function (){var statearr_1888342 = state_1888337;
(statearr_1888342[(9)] = inst_1888301__$1);

return statearr_1888342;
})();
if(inst_1888303){
var statearr_1888343_1888374 = state_1888337__$1;
(statearr_1888343_1888374[(1)] = (5));

} else {
var statearr_1888344_1888375 = state_1888337__$1;
(statearr_1888344_1888375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888338 === (15))){
var inst_1888327 = (state_1888337[(2)]);
var state_1888337__$1 = state_1888337;
var statearr_1888345_1888376 = state_1888337__$1;
(statearr_1888345_1888376[(2)] = inst_1888327);

(statearr_1888345_1888376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888338 === (13))){
var state_1888337__$1 = state_1888337;
var statearr_1888346_1888377 = state_1888337__$1;
(statearr_1888346_1888377[(2)] = null);

(statearr_1888346_1888377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888338 === (6))){
var inst_1888297 = (state_1888337[(7)]);
var inst_1888322 = inst_1888297.length;
var inst_1888323 = (inst_1888322 > (0));
var state_1888337__$1 = state_1888337;
if(cljs.core.truth_(inst_1888323)){
var statearr_1888347_1888378 = state_1888337__$1;
(statearr_1888347_1888378[(1)] = (12));

} else {
var statearr_1888348_1888379 = state_1888337__$1;
(statearr_1888348_1888379[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888338 === (3))){
var inst_1888335 = (state_1888337[(2)]);
var state_1888337__$1 = state_1888337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1888337__$1,inst_1888335);
} else {
if((state_val_1888338 === (12))){
var inst_1888297 = (state_1888337[(7)]);
var inst_1888325 = cljs.core.vec.call(null,inst_1888297);
var state_1888337__$1 = state_1888337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1888337__$1,(15),out,inst_1888325);
} else {
if((state_val_1888338 === (2))){
var state_1888337__$1 = state_1888337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1888337__$1,(4),ch);
} else {
if((state_val_1888338 === (11))){
var inst_1888305 = (state_1888337[(10)]);
var inst_1888301 = (state_1888337[(9)]);
var inst_1888315 = (state_1888337[(2)]);
var inst_1888316 = [];
var inst_1888317 = inst_1888316.push(inst_1888301);
var inst_1888297 = inst_1888316;
var inst_1888298 = inst_1888305;
var state_1888337__$1 = (function (){var statearr_1888349 = state_1888337;
(statearr_1888349[(7)] = inst_1888297);

(statearr_1888349[(8)] = inst_1888298);

(statearr_1888349[(11)] = inst_1888315);

(statearr_1888349[(12)] = inst_1888317);

return statearr_1888349;
})();
var statearr_1888350_1888380 = state_1888337__$1;
(statearr_1888350_1888380[(2)] = null);

(statearr_1888350_1888380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888338 === (9))){
var inst_1888297 = (state_1888337[(7)]);
var inst_1888313 = cljs.core.vec.call(null,inst_1888297);
var state_1888337__$1 = state_1888337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_1888337__$1,(11),out,inst_1888313);
} else {
if((state_val_1888338 === (5))){
var inst_1888298 = (state_1888337[(8)]);
var inst_1888305 = (state_1888337[(10)]);
var inst_1888301 = (state_1888337[(9)]);
var inst_1888305__$1 = f.call(null,inst_1888301);
var inst_1888306 = cljs.core._EQ_.call(null,inst_1888305__$1,inst_1888298);
var inst_1888307 = cljs.core.keyword_identical_QMARK_.call(null,inst_1888298,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_1888308 = (inst_1888306) || (inst_1888307);
var state_1888337__$1 = (function (){var statearr_1888351 = state_1888337;
(statearr_1888351[(10)] = inst_1888305__$1);

return statearr_1888351;
})();
if(cljs.core.truth_(inst_1888308)){
var statearr_1888352_1888381 = state_1888337__$1;
(statearr_1888352_1888381[(1)] = (8));

} else {
var statearr_1888353_1888382 = state_1888337__$1;
(statearr_1888353_1888382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888338 === (14))){
var inst_1888330 = (state_1888337[(2)]);
var inst_1888331 = cljs.core.async.close_BANG_.call(null,out);
var state_1888337__$1 = (function (){var statearr_1888355 = state_1888337;
(statearr_1888355[(13)] = inst_1888330);

return statearr_1888355;
})();
var statearr_1888356_1888383 = state_1888337__$1;
(statearr_1888356_1888383[(2)] = inst_1888331);

(statearr_1888356_1888383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888338 === (10))){
var inst_1888320 = (state_1888337[(2)]);
var state_1888337__$1 = state_1888337;
var statearr_1888357_1888384 = state_1888337__$1;
(statearr_1888357_1888384[(2)] = inst_1888320);

(statearr_1888357_1888384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888338 === (8))){
var inst_1888297 = (state_1888337[(7)]);
var inst_1888305 = (state_1888337[(10)]);
var inst_1888301 = (state_1888337[(9)]);
var inst_1888310 = inst_1888297.push(inst_1888301);
var tmp1888354 = inst_1888297;
var inst_1888297__$1 = tmp1888354;
var inst_1888298 = inst_1888305;
var state_1888337__$1 = (function (){var statearr_1888358 = state_1888337;
(statearr_1888358[(7)] = inst_1888297__$1);

(statearr_1888358[(8)] = inst_1888298);

(statearr_1888358[(14)] = inst_1888310);

return statearr_1888358;
})();
var statearr_1888359_1888385 = state_1888337__$1;
(statearr_1888359_1888385[(2)] = null);

(statearr_1888359_1888385[(1)] = (2));


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
});})(c__35562__auto___1888371,out))
;
return ((function (switch__35450__auto__,c__35562__auto___1888371,out){
return (function() {
var cljs$core$async$state_machine__35451__auto__ = null;
var cljs$core$async$state_machine__35451__auto____0 = (function (){
var statearr_1888363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_1888363[(0)] = cljs$core$async$state_machine__35451__auto__);

(statearr_1888363[(1)] = (1));

return statearr_1888363;
});
var cljs$core$async$state_machine__35451__auto____1 = (function (state_1888337){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1888337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1888364){if((e1888364 instanceof Object)){
var ex__35454__auto__ = e1888364;
var statearr_1888365_1888386 = state_1888337;
(statearr_1888365_1888386[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1888337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1888364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1888387 = state_1888337;
state_1888337 = G__1888387;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
cljs$core$async$state_machine__35451__auto__ = function(state_1888337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35451__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35451__auto____1.call(this,state_1888337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35451__auto____0;
cljs$core$async$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35451__auto____1;
return cljs$core$async$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1888371,out))
})();
var state__35564__auto__ = (function (){var statearr_1888366 = f__35563__auto__.call(null);
(statearr_1888366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1888371);

return statearr_1888366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1888371,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map