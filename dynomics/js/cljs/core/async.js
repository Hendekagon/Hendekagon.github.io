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
if(typeof cljs.core.async.t_cljs$core$async450911 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async450911 = (function (fn_handler,f,meta450912){
this.fn_handler = fn_handler;
this.f = f;
this.meta450912 = meta450912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async450911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_450913,meta450912__$1){
var self__ = this;
var _450913__$1 = this;
return (new cljs.core.async.t_cljs$core$async450911(self__.fn_handler,self__.f,meta450912__$1));
});

cljs.core.async.t_cljs$core$async450911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_450913){
var self__ = this;
var _450913__$1 = this;
return self__.meta450912;
});

cljs.core.async.t_cljs$core$async450911.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async450911.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async450911.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async450911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta450912","meta450912",754437476,null)], null);
});

cljs.core.async.t_cljs$core$async450911.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async450911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async450911";

cljs.core.async.t_cljs$core$async450911.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async450911");
});

cljs.core.async.__GT_t_cljs$core$async450911 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async450911(fn_handler__$1,f__$1,meta450912){
return (new cljs.core.async.t_cljs$core$async450911(fn_handler__$1,f__$1,meta450912));
});

}

return (new cljs.core.async.t_cljs$core$async450911(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args450949 = [];
var len__36260__auto___450965 = arguments.length;
var i__36261__auto___450967 = (0);
while(true){
if((i__36261__auto___450967 < len__36260__auto___450965)){
args450949.push((arguments[i__36261__auto___450967]));

var G__450974 = (i__36261__auto___450967 + (1));
i__36261__auto___450967 = G__450974;
continue;
} else {
}
break;
}

var G__450955 = args450949.length;
switch (G__450955) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args450949.length)].join('')));

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
var args450997 = [];
var len__36260__auto___451007 = arguments.length;
var i__36261__auto___451008 = (0);
while(true){
if((i__36261__auto___451008 < len__36260__auto___451007)){
args450997.push((arguments[i__36261__auto___451008]));

var G__451009 = (i__36261__auto___451008 + (1));
i__36261__auto___451008 = G__451009;
continue;
} else {
}
break;
}

var G__451003 = args450997.length;
switch (G__451003) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args450997.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_451014 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_451014);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_451014,ret){
return (function (){
return fn1.call(null,val_451014);
});})(val_451014,ret))
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
var args451019 = [];
var len__36260__auto___451026 = arguments.length;
var i__36261__auto___451027 = (0);
while(true){
if((i__36261__auto___451027 < len__36260__auto___451026)){
args451019.push((arguments[i__36261__auto___451027]));

var G__451028 = (i__36261__auto___451027 + (1));
i__36261__auto___451027 = G__451028;
continue;
} else {
}
break;
}

var G__451021 = args451019.length;
switch (G__451021) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args451019.length)].join('')));

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
var n__36105__auto___451068 = n;
var x_451069 = (0);
while(true){
if((x_451069 < n__36105__auto___451068)){
(a[x_451069] = (0));

var G__451070 = (x_451069 + (1));
x_451069 = G__451070;
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

var G__451073 = (i + (1));
i = G__451073;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async451085 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async451085 = (function (alt_flag,flag,meta451086){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta451086 = meta451086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async451085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_451087,meta451086__$1){
var self__ = this;
var _451087__$1 = this;
return (new cljs.core.async.t_cljs$core$async451085(self__.alt_flag,self__.flag,meta451086__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async451085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_451087){
var self__ = this;
var _451087__$1 = this;
return self__.meta451086;
});})(flag))
;

cljs.core.async.t_cljs$core$async451085.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async451085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async451085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async451085.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta451086","meta451086",419912733,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async451085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async451085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async451085";

cljs.core.async.t_cljs$core$async451085.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async451085");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async451085 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async451085(alt_flag__$1,flag__$1,meta451086){
return (new cljs.core.async.t_cljs$core$async451085(alt_flag__$1,flag__$1,meta451086));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async451085(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async451130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async451130 = (function (alt_handler,flag,cb,meta451131){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta451131 = meta451131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async451130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_451132,meta451131__$1){
var self__ = this;
var _451132__$1 = this;
return (new cljs.core.async.t_cljs$core$async451130(self__.alt_handler,self__.flag,self__.cb,meta451131__$1));
});

cljs.core.async.t_cljs$core$async451130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_451132){
var self__ = this;
var _451132__$1 = this;
return self__.meta451131;
});

cljs.core.async.t_cljs$core$async451130.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async451130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async451130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async451130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta451131","meta451131",1249904071,null)], null);
});

cljs.core.async.t_cljs$core$async451130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async451130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async451130";

cljs.core.async.t_cljs$core$async451130.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async451130");
});

cljs.core.async.__GT_t_cljs$core$async451130 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async451130(alt_handler__$1,flag__$1,cb__$1,meta451131){
return (new cljs.core.async.t_cljs$core$async451130(alt_handler__$1,flag__$1,cb__$1,meta451131));
});

}

return (new cljs.core.async.t_cljs$core$async451130(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__451142_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__451142_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__451144_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__451144_SHARP_,port], null));
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
var G__451157 = (i + (1));
i = G__451157;
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
var len__36260__auto___451173 = arguments.length;
var i__36261__auto___451174 = (0);
while(true){
if((i__36261__auto___451174 < len__36260__auto___451173)){
args__36267__auto__.push((arguments[i__36261__auto___451174]));

var G__451175 = (i__36261__auto___451174 + (1));
i__36261__auto___451174 = G__451175;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__451168){
var map__451169 = p__451168;
var map__451169__$1 = ((((!((map__451169 == null)))?((((map__451169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__451169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__451169):map__451169);
var opts = map__451169__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq451160){
var G__451161 = cljs.core.first.call(null,seq451160);
var seq451160__$1 = cljs.core.next.call(null,seq451160);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__451161,seq451160__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args451182 = [];
var len__36260__auto___451261 = arguments.length;
var i__36261__auto___451262 = (0);
while(true){
if((i__36261__auto___451262 < len__36260__auto___451261)){
args451182.push((arguments[i__36261__auto___451262]));

var G__451264 = (i__36261__auto___451262 + (1));
i__36261__auto___451262 = G__451264;
continue;
} else {
}
break;
}

var G__451189 = args451182.length;
switch (G__451189) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args451182.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38100__auto___451269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___451269){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___451269){
return (function (state_451217){
var state_val_451219 = (state_451217[(1)]);
if((state_val_451219 === (7))){
var inst_451213 = (state_451217[(2)]);
var state_451217__$1 = state_451217;
var statearr_451220_451270 = state_451217__$1;
(statearr_451220_451270[(2)] = inst_451213);

(statearr_451220_451270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451219 === (1))){
var state_451217__$1 = state_451217;
var statearr_451221_451271 = state_451217__$1;
(statearr_451221_451271[(2)] = null);

(statearr_451221_451271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451219 === (4))){
var inst_451192 = (state_451217[(7)]);
var inst_451192__$1 = (state_451217[(2)]);
var inst_451195 = (inst_451192__$1 == null);
var state_451217__$1 = (function (){var statearr_451222 = state_451217;
(statearr_451222[(7)] = inst_451192__$1);

return statearr_451222;
})();
if(cljs.core.truth_(inst_451195)){
var statearr_451223_451275 = state_451217__$1;
(statearr_451223_451275[(1)] = (5));

} else {
var statearr_451225_451276 = state_451217__$1;
(statearr_451225_451276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451219 === (13))){
var state_451217__$1 = state_451217;
var statearr_451227_451277 = state_451217__$1;
(statearr_451227_451277[(2)] = null);

(statearr_451227_451277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451219 === (6))){
var inst_451192 = (state_451217[(7)]);
var state_451217__$1 = state_451217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_451217__$1,(11),to,inst_451192);
} else {
if((state_val_451219 === (3))){
var inst_451215 = (state_451217[(2)]);
var state_451217__$1 = state_451217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_451217__$1,inst_451215);
} else {
if((state_val_451219 === (12))){
var state_451217__$1 = state_451217;
var statearr_451229_451283 = state_451217__$1;
(statearr_451229_451283[(2)] = null);

(statearr_451229_451283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451219 === (2))){
var state_451217__$1 = state_451217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_451217__$1,(4),from);
} else {
if((state_val_451219 === (11))){
var inst_451205 = (state_451217[(2)]);
var state_451217__$1 = state_451217;
if(cljs.core.truth_(inst_451205)){
var statearr_451232_451284 = state_451217__$1;
(statearr_451232_451284[(1)] = (12));

} else {
var statearr_451234_451285 = state_451217__$1;
(statearr_451234_451285[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451219 === (9))){
var state_451217__$1 = state_451217;
var statearr_451235_451288 = state_451217__$1;
(statearr_451235_451288[(2)] = null);

(statearr_451235_451288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451219 === (5))){
var state_451217__$1 = state_451217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_451236_451290 = state_451217__$1;
(statearr_451236_451290[(1)] = (8));

} else {
var statearr_451239_451291 = state_451217__$1;
(statearr_451239_451291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451219 === (14))){
var inst_451211 = (state_451217[(2)]);
var state_451217__$1 = state_451217;
var statearr_451241_451292 = state_451217__$1;
(statearr_451241_451292[(2)] = inst_451211);

(statearr_451241_451292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451219 === (10))){
var inst_451202 = (state_451217[(2)]);
var state_451217__$1 = state_451217;
var statearr_451244_451293 = state_451217__$1;
(statearr_451244_451293[(2)] = inst_451202);

(statearr_451244_451293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451219 === (8))){
var inst_451198 = cljs.core.async.close_BANG_.call(null,to);
var state_451217__$1 = state_451217;
var statearr_451245_451297 = state_451217__$1;
(statearr_451245_451297[(2)] = inst_451198);

(statearr_451245_451297[(1)] = (10));


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
});})(c__38100__auto___451269))
;
return ((function (switch__38079__auto__,c__38100__auto___451269){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_451251 = [null,null,null,null,null,null,null,null];
(statearr_451251[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_451251[(1)] = (1));

return statearr_451251;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_451217){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_451217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e451252){if((e451252 instanceof Object)){
var ex__38083__auto__ = e451252;
var statearr_451254_451300 = state_451217;
(statearr_451254_451300[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_451217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e451252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__451303 = state_451217;
state_451217 = G__451303;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_451217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_451217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___451269))
})();
var state__38102__auto__ = (function (){var statearr_451257 = f__38101__auto__.call(null);
(statearr_451257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___451269);

return statearr_451257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___451269))
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
return (function (p__451571){
var vec__451572 = p__451571;
var v = cljs.core.nth.call(null,vec__451572,(0),null);
var p = cljs.core.nth.call(null,vec__451572,(1),null);
var job = vec__451572;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38100__auto___451824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___451824,res,vec__451572,v,p,job,jobs,results){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___451824,res,vec__451572,v,p,job,jobs,results){
return (function (state_451577){
var state_val_451578 = (state_451577[(1)]);
if((state_val_451578 === (1))){
var state_451577__$1 = state_451577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_451577__$1,(2),res,v);
} else {
if((state_val_451578 === (2))){
var inst_451574 = (state_451577[(2)]);
var inst_451575 = cljs.core.async.close_BANG_.call(null,res);
var state_451577__$1 = (function (){var statearr_451579 = state_451577;
(statearr_451579[(7)] = inst_451574);

return statearr_451579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_451577__$1,inst_451575);
} else {
return null;
}
}
});})(c__38100__auto___451824,res,vec__451572,v,p,job,jobs,results))
;
return ((function (switch__38079__auto__,c__38100__auto___451824,res,vec__451572,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_451585 = [null,null,null,null,null,null,null,null];
(statearr_451585[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_451585[(1)] = (1));

return statearr_451585;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_451577){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_451577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e451586){if((e451586 instanceof Object)){
var ex__38083__auto__ = e451586;
var statearr_451588_451839 = state_451577;
(statearr_451588_451839[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_451577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e451586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__451843 = state_451577;
state_451577 = G__451843;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_451577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_451577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___451824,res,vec__451572,v,p,job,jobs,results))
})();
var state__38102__auto__ = (function (){var statearr_451592 = f__38101__auto__.call(null);
(statearr_451592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___451824);

return statearr_451592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___451824,res,vec__451572,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__451594){
var vec__451595 = p__451594;
var v = cljs.core.nth.call(null,vec__451595,(0),null);
var p = cljs.core.nth.call(null,vec__451595,(1),null);
var job = vec__451595;
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
var n__36105__auto___451855 = n;
var __451856 = (0);
while(true){
if((__451856 < n__36105__auto___451855)){
var G__451596_451857 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__451596_451857) {
case "compute":
var c__38100__auto___451859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__451856,c__38100__auto___451859,G__451596_451857,n__36105__auto___451855,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (__451856,c__38100__auto___451859,G__451596_451857,n__36105__auto___451855,jobs,results,process,async){
return (function (state_451609){
var state_val_451610 = (state_451609[(1)]);
if((state_val_451610 === (1))){
var state_451609__$1 = state_451609;
var statearr_451614_451869 = state_451609__$1;
(statearr_451614_451869[(2)] = null);

(statearr_451614_451869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451610 === (2))){
var state_451609__$1 = state_451609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_451609__$1,(4),jobs);
} else {
if((state_val_451610 === (3))){
var inst_451607 = (state_451609[(2)]);
var state_451609__$1 = state_451609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_451609__$1,inst_451607);
} else {
if((state_val_451610 === (4))){
var inst_451599 = (state_451609[(2)]);
var inst_451600 = process.call(null,inst_451599);
var state_451609__$1 = state_451609;
if(cljs.core.truth_(inst_451600)){
var statearr_451618_451873 = state_451609__$1;
(statearr_451618_451873[(1)] = (5));

} else {
var statearr_451619_451876 = state_451609__$1;
(statearr_451619_451876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451610 === (5))){
var state_451609__$1 = state_451609;
var statearr_451620_451878 = state_451609__$1;
(statearr_451620_451878[(2)] = null);

(statearr_451620_451878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451610 === (6))){
var state_451609__$1 = state_451609;
var statearr_451621_451879 = state_451609__$1;
(statearr_451621_451879[(2)] = null);

(statearr_451621_451879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451610 === (7))){
var inst_451605 = (state_451609[(2)]);
var state_451609__$1 = state_451609;
var statearr_451622_451880 = state_451609__$1;
(statearr_451622_451880[(2)] = inst_451605);

(statearr_451622_451880[(1)] = (3));


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
});})(__451856,c__38100__auto___451859,G__451596_451857,n__36105__auto___451855,jobs,results,process,async))
;
return ((function (__451856,switch__38079__auto__,c__38100__auto___451859,G__451596_451857,n__36105__auto___451855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_451629 = [null,null,null,null,null,null,null];
(statearr_451629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_451629[(1)] = (1));

return statearr_451629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_451609){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_451609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e451630){if((e451630 instanceof Object)){
var ex__38083__auto__ = e451630;
var statearr_451632_451892 = state_451609;
(statearr_451632_451892[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_451609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e451630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__451896 = state_451609;
state_451609 = G__451896;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_451609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_451609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(__451856,switch__38079__auto__,c__38100__auto___451859,G__451596_451857,n__36105__auto___451855,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_451636 = f__38101__auto__.call(null);
(statearr_451636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___451859);

return statearr_451636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(__451856,c__38100__auto___451859,G__451596_451857,n__36105__auto___451855,jobs,results,process,async))
);


break;
case "async":
var c__38100__auto___451906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__451856,c__38100__auto___451906,G__451596_451857,n__36105__auto___451855,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (__451856,c__38100__auto___451906,G__451596_451857,n__36105__auto___451855,jobs,results,process,async){
return (function (state_451649){
var state_val_451650 = (state_451649[(1)]);
if((state_val_451650 === (1))){
var state_451649__$1 = state_451649;
var statearr_451651_451916 = state_451649__$1;
(statearr_451651_451916[(2)] = null);

(statearr_451651_451916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451650 === (2))){
var state_451649__$1 = state_451649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_451649__$1,(4),jobs);
} else {
if((state_val_451650 === (3))){
var inst_451647 = (state_451649[(2)]);
var state_451649__$1 = state_451649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_451649__$1,inst_451647);
} else {
if((state_val_451650 === (4))){
var inst_451639 = (state_451649[(2)]);
var inst_451640 = async.call(null,inst_451639);
var state_451649__$1 = state_451649;
if(cljs.core.truth_(inst_451640)){
var statearr_451653_451923 = state_451649__$1;
(statearr_451653_451923[(1)] = (5));

} else {
var statearr_451655_451924 = state_451649__$1;
(statearr_451655_451924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451650 === (5))){
var state_451649__$1 = state_451649;
var statearr_451656_451927 = state_451649__$1;
(statearr_451656_451927[(2)] = null);

(statearr_451656_451927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451650 === (6))){
var state_451649__$1 = state_451649;
var statearr_451658_451931 = state_451649__$1;
(statearr_451658_451931[(2)] = null);

(statearr_451658_451931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451650 === (7))){
var inst_451645 = (state_451649[(2)]);
var state_451649__$1 = state_451649;
var statearr_451659_451934 = state_451649__$1;
(statearr_451659_451934[(2)] = inst_451645);

(statearr_451659_451934[(1)] = (3));


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
});})(__451856,c__38100__auto___451906,G__451596_451857,n__36105__auto___451855,jobs,results,process,async))
;
return ((function (__451856,switch__38079__auto__,c__38100__auto___451906,G__451596_451857,n__36105__auto___451855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_451665 = [null,null,null,null,null,null,null];
(statearr_451665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_451665[(1)] = (1));

return statearr_451665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_451649){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_451649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e451666){if((e451666 instanceof Object)){
var ex__38083__auto__ = e451666;
var statearr_451668_451943 = state_451649;
(statearr_451668_451943[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_451649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e451666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__451945 = state_451649;
state_451649 = G__451945;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_451649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_451649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(__451856,switch__38079__auto__,c__38100__auto___451906,G__451596_451857,n__36105__auto___451855,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_451671 = f__38101__auto__.call(null);
(statearr_451671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___451906);

return statearr_451671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(__451856,c__38100__auto___451906,G__451596_451857,n__36105__auto___451855,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__451953 = (__451856 + (1));
__451856 = G__451953;
continue;
} else {
}
break;
}

var c__38100__auto___451955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___451955,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___451955,jobs,results,process,async){
return (function (state_451696){
var state_val_451697 = (state_451696[(1)]);
if((state_val_451697 === (1))){
var state_451696__$1 = state_451696;
var statearr_451698_451959 = state_451696__$1;
(statearr_451698_451959[(2)] = null);

(statearr_451698_451959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451697 === (2))){
var state_451696__$1 = state_451696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_451696__$1,(4),from);
} else {
if((state_val_451697 === (3))){
var inst_451694 = (state_451696[(2)]);
var state_451696__$1 = state_451696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_451696__$1,inst_451694);
} else {
if((state_val_451697 === (4))){
var inst_451676 = (state_451696[(7)]);
var inst_451676__$1 = (state_451696[(2)]);
var inst_451677 = (inst_451676__$1 == null);
var state_451696__$1 = (function (){var statearr_451699 = state_451696;
(statearr_451699[(7)] = inst_451676__$1);

return statearr_451699;
})();
if(cljs.core.truth_(inst_451677)){
var statearr_451700_451968 = state_451696__$1;
(statearr_451700_451968[(1)] = (5));

} else {
var statearr_451701_451969 = state_451696__$1;
(statearr_451701_451969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451697 === (5))){
var inst_451679 = cljs.core.async.close_BANG_.call(null,jobs);
var state_451696__$1 = state_451696;
var statearr_451705_451972 = state_451696__$1;
(statearr_451705_451972[(2)] = inst_451679);

(statearr_451705_451972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451697 === (6))){
var inst_451676 = (state_451696[(7)]);
var inst_451681 = (state_451696[(8)]);
var inst_451681__$1 = cljs.core.async.chan.call(null,(1));
var inst_451683 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_451684 = [inst_451676,inst_451681__$1];
var inst_451685 = (new cljs.core.PersistentVector(null,2,(5),inst_451683,inst_451684,null));
var state_451696__$1 = (function (){var statearr_451711 = state_451696;
(statearr_451711[(8)] = inst_451681__$1);

return statearr_451711;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_451696__$1,(8),jobs,inst_451685);
} else {
if((state_val_451697 === (7))){
var inst_451692 = (state_451696[(2)]);
var state_451696__$1 = state_451696;
var statearr_451712_451982 = state_451696__$1;
(statearr_451712_451982[(2)] = inst_451692);

(statearr_451712_451982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451697 === (8))){
var inst_451681 = (state_451696[(8)]);
var inst_451687 = (state_451696[(2)]);
var state_451696__$1 = (function (){var statearr_451713 = state_451696;
(statearr_451713[(9)] = inst_451687);

return statearr_451713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_451696__$1,(9),results,inst_451681);
} else {
if((state_val_451697 === (9))){
var inst_451689 = (state_451696[(2)]);
var state_451696__$1 = (function (){var statearr_451714 = state_451696;
(statearr_451714[(10)] = inst_451689);

return statearr_451714;
})();
var statearr_451715_451995 = state_451696__$1;
(statearr_451715_451995[(2)] = null);

(statearr_451715_451995[(1)] = (2));


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
});})(c__38100__auto___451955,jobs,results,process,async))
;
return ((function (switch__38079__auto__,c__38100__auto___451955,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_451722 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_451722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_451722[(1)] = (1));

return statearr_451722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_451696){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_451696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e451723){if((e451723 instanceof Object)){
var ex__38083__auto__ = e451723;
var statearr_451724_452003 = state_451696;
(statearr_451724_452003[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_451696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e451723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452005 = state_451696;
state_451696 = G__452005;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_451696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_451696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___451955,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_451725 = f__38101__auto__.call(null);
(statearr_451725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___451955);

return statearr_451725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___451955,jobs,results,process,async))
);


var c__38100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto__,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto__,jobs,results,process,async){
return (function (state_451769){
var state_val_451770 = (state_451769[(1)]);
if((state_val_451770 === (7))){
var inst_451764 = (state_451769[(2)]);
var state_451769__$1 = state_451769;
var statearr_451772_452015 = state_451769__$1;
(statearr_451772_452015[(2)] = inst_451764);

(statearr_451772_452015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (20))){
var state_451769__$1 = state_451769;
var statearr_451773_452017 = state_451769__$1;
(statearr_451773_452017[(2)] = null);

(statearr_451773_452017[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (1))){
var state_451769__$1 = state_451769;
var statearr_451774_452019 = state_451769__$1;
(statearr_451774_452019[(2)] = null);

(statearr_451774_452019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (4))){
var inst_451732 = (state_451769[(7)]);
var inst_451732__$1 = (state_451769[(2)]);
var inst_451733 = (inst_451732__$1 == null);
var state_451769__$1 = (function (){var statearr_451775 = state_451769;
(statearr_451775[(7)] = inst_451732__$1);

return statearr_451775;
})();
if(cljs.core.truth_(inst_451733)){
var statearr_451776_452025 = state_451769__$1;
(statearr_451776_452025[(1)] = (5));

} else {
var statearr_451777_452027 = state_451769__$1;
(statearr_451777_452027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (15))){
var inst_451745 = (state_451769[(8)]);
var state_451769__$1 = state_451769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_451769__$1,(18),to,inst_451745);
} else {
if((state_val_451770 === (21))){
var inst_451759 = (state_451769[(2)]);
var state_451769__$1 = state_451769;
var statearr_451778_452035 = state_451769__$1;
(statearr_451778_452035[(2)] = inst_451759);

(statearr_451778_452035[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (13))){
var inst_451761 = (state_451769[(2)]);
var state_451769__$1 = (function (){var statearr_451779 = state_451769;
(statearr_451779[(9)] = inst_451761);

return statearr_451779;
})();
var statearr_451780_452037 = state_451769__$1;
(statearr_451780_452037[(2)] = null);

(statearr_451780_452037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (6))){
var inst_451732 = (state_451769[(7)]);
var state_451769__$1 = state_451769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_451769__$1,(11),inst_451732);
} else {
if((state_val_451770 === (17))){
var inst_451753 = (state_451769[(2)]);
var state_451769__$1 = state_451769;
if(cljs.core.truth_(inst_451753)){
var statearr_451783_452043 = state_451769__$1;
(statearr_451783_452043[(1)] = (19));

} else {
var statearr_451784_452044 = state_451769__$1;
(statearr_451784_452044[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (3))){
var inst_451767 = (state_451769[(2)]);
var state_451769__$1 = state_451769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_451769__$1,inst_451767);
} else {
if((state_val_451770 === (12))){
var inst_451742 = (state_451769[(10)]);
var state_451769__$1 = state_451769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_451769__$1,(14),inst_451742);
} else {
if((state_val_451770 === (2))){
var state_451769__$1 = state_451769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_451769__$1,(4),results);
} else {
if((state_val_451770 === (19))){
var state_451769__$1 = state_451769;
var statearr_451786_452050 = state_451769__$1;
(statearr_451786_452050[(2)] = null);

(statearr_451786_452050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (11))){
var inst_451742 = (state_451769[(2)]);
var state_451769__$1 = (function (){var statearr_451788 = state_451769;
(statearr_451788[(10)] = inst_451742);

return statearr_451788;
})();
var statearr_451789_452051 = state_451769__$1;
(statearr_451789_452051[(2)] = null);

(statearr_451789_452051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (9))){
var state_451769__$1 = state_451769;
var statearr_451792_452054 = state_451769__$1;
(statearr_451792_452054[(2)] = null);

(statearr_451792_452054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (5))){
var state_451769__$1 = state_451769;
if(cljs.core.truth_(close_QMARK_)){
var statearr_451793_452060 = state_451769__$1;
(statearr_451793_452060[(1)] = (8));

} else {
var statearr_451795_452061 = state_451769__$1;
(statearr_451795_452061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (14))){
var inst_451745 = (state_451769[(8)]);
var inst_451747 = (state_451769[(11)]);
var inst_451745__$1 = (state_451769[(2)]);
var inst_451746 = (inst_451745__$1 == null);
var inst_451747__$1 = cljs.core.not.call(null,inst_451746);
var state_451769__$1 = (function (){var statearr_451796 = state_451769;
(statearr_451796[(8)] = inst_451745__$1);

(statearr_451796[(11)] = inst_451747__$1);

return statearr_451796;
})();
if(inst_451747__$1){
var statearr_451797_452064 = state_451769__$1;
(statearr_451797_452064[(1)] = (15));

} else {
var statearr_451798_452066 = state_451769__$1;
(statearr_451798_452066[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (16))){
var inst_451747 = (state_451769[(11)]);
var state_451769__$1 = state_451769;
var statearr_451799_452068 = state_451769__$1;
(statearr_451799_452068[(2)] = inst_451747);

(statearr_451799_452068[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (10))){
var inst_451739 = (state_451769[(2)]);
var state_451769__$1 = state_451769;
var statearr_451800_452072 = state_451769__$1;
(statearr_451800_452072[(2)] = inst_451739);

(statearr_451800_452072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (18))){
var inst_451750 = (state_451769[(2)]);
var state_451769__$1 = state_451769;
var statearr_451802_452073 = state_451769__$1;
(statearr_451802_452073[(2)] = inst_451750);

(statearr_451802_452073[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_451770 === (8))){
var inst_451736 = cljs.core.async.close_BANG_.call(null,to);
var state_451769__$1 = state_451769;
var statearr_451807_452077 = state_451769__$1;
(statearr_451807_452077[(2)] = inst_451736);

(statearr_451807_452077[(1)] = (10));


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
var statearr_451812 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_451812[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_451812[(1)] = (1));

return statearr_451812;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_451769){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_451769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e451814){if((e451814 instanceof Object)){
var ex__38083__auto__ = e451814;
var statearr_451815_452085 = state_451769;
(statearr_451815_452085[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_451769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e451814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452087 = state_451769;
state_451769 = G__452087;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_451769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_451769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_451817 = f__38101__auto__.call(null);
(statearr_451817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_451817;
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
var args452094 = [];
var len__36260__auto___452105 = arguments.length;
var i__36261__auto___452106 = (0);
while(true){
if((i__36261__auto___452106 < len__36260__auto___452105)){
args452094.push((arguments[i__36261__auto___452106]));

var G__452108 = (i__36261__auto___452106 + (1));
i__36261__auto___452106 = G__452108;
continue;
} else {
}
break;
}

var G__452100 = args452094.length;
switch (G__452100) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args452094.length)].join('')));

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
var args452117 = [];
var len__36260__auto___452138 = arguments.length;
var i__36261__auto___452139 = (0);
while(true){
if((i__36261__auto___452139 < len__36260__auto___452138)){
args452117.push((arguments[i__36261__auto___452139]));

var G__452141 = (i__36261__auto___452139 + (1));
i__36261__auto___452139 = G__452141;
continue;
} else {
}
break;
}

var G__452126 = args452117.length;
switch (G__452126) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args452117.length)].join('')));

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
var args452154 = [];
var len__36260__auto___452238 = arguments.length;
var i__36261__auto___452240 = (0);
while(true){
if((i__36261__auto___452240 < len__36260__auto___452238)){
args452154.push((arguments[i__36261__auto___452240]));

var G__452241 = (i__36261__auto___452240 + (1));
i__36261__auto___452240 = G__452241;
continue;
} else {
}
break;
}

var G__452158 = args452154.length;
switch (G__452158) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args452154.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38100__auto___452253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___452253,tc,fc){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___452253,tc,fc){
return (function (state_452193){
var state_val_452194 = (state_452193[(1)]);
if((state_val_452194 === (7))){
var inst_452188 = (state_452193[(2)]);
var state_452193__$1 = state_452193;
var statearr_452195_452259 = state_452193__$1;
(statearr_452195_452259[(2)] = inst_452188);

(statearr_452195_452259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452194 === (1))){
var state_452193__$1 = state_452193;
var statearr_452196_452261 = state_452193__$1;
(statearr_452196_452261[(2)] = null);

(statearr_452196_452261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452194 === (4))){
var inst_452164 = (state_452193[(7)]);
var inst_452164__$1 = (state_452193[(2)]);
var inst_452165 = (inst_452164__$1 == null);
var state_452193__$1 = (function (){var statearr_452199 = state_452193;
(statearr_452199[(7)] = inst_452164__$1);

return statearr_452199;
})();
if(cljs.core.truth_(inst_452165)){
var statearr_452200_452265 = state_452193__$1;
(statearr_452200_452265[(1)] = (5));

} else {
var statearr_452201_452266 = state_452193__$1;
(statearr_452201_452266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452194 === (13))){
var state_452193__$1 = state_452193;
var statearr_452203_452269 = state_452193__$1;
(statearr_452203_452269[(2)] = null);

(statearr_452203_452269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452194 === (6))){
var inst_452164 = (state_452193[(7)]);
var inst_452175 = p.call(null,inst_452164);
var state_452193__$1 = state_452193;
if(cljs.core.truth_(inst_452175)){
var statearr_452204_452271 = state_452193__$1;
(statearr_452204_452271[(1)] = (9));

} else {
var statearr_452206_452272 = state_452193__$1;
(statearr_452206_452272[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452194 === (3))){
var inst_452190 = (state_452193[(2)]);
var state_452193__$1 = state_452193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452193__$1,inst_452190);
} else {
if((state_val_452194 === (12))){
var state_452193__$1 = state_452193;
var statearr_452209_452276 = state_452193__$1;
(statearr_452209_452276[(2)] = null);

(statearr_452209_452276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452194 === (2))){
var state_452193__$1 = state_452193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452193__$1,(4),ch);
} else {
if((state_val_452194 === (11))){
var inst_452164 = (state_452193[(7)]);
var inst_452179 = (state_452193[(2)]);
var state_452193__$1 = state_452193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_452193__$1,(8),inst_452179,inst_452164);
} else {
if((state_val_452194 === (9))){
var state_452193__$1 = state_452193;
var statearr_452212_452282 = state_452193__$1;
(statearr_452212_452282[(2)] = tc);

(statearr_452212_452282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452194 === (5))){
var inst_452168 = cljs.core.async.close_BANG_.call(null,tc);
var inst_452169 = cljs.core.async.close_BANG_.call(null,fc);
var state_452193__$1 = (function (){var statearr_452213 = state_452193;
(statearr_452213[(8)] = inst_452168);

return statearr_452213;
})();
var statearr_452214_452286 = state_452193__$1;
(statearr_452214_452286[(2)] = inst_452169);

(statearr_452214_452286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452194 === (14))){
var inst_452186 = (state_452193[(2)]);
var state_452193__$1 = state_452193;
var statearr_452216_452288 = state_452193__$1;
(statearr_452216_452288[(2)] = inst_452186);

(statearr_452216_452288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452194 === (10))){
var state_452193__$1 = state_452193;
var statearr_452218_452289 = state_452193__$1;
(statearr_452218_452289[(2)] = fc);

(statearr_452218_452289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452194 === (8))){
var inst_452181 = (state_452193[(2)]);
var state_452193__$1 = state_452193;
if(cljs.core.truth_(inst_452181)){
var statearr_452220_452295 = state_452193__$1;
(statearr_452220_452295[(1)] = (12));

} else {
var statearr_452221_452297 = state_452193__$1;
(statearr_452221_452297[(1)] = (13));

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
});})(c__38100__auto___452253,tc,fc))
;
return ((function (switch__38079__auto__,c__38100__auto___452253,tc,fc){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_452228 = [null,null,null,null,null,null,null,null,null];
(statearr_452228[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_452228[(1)] = (1));

return statearr_452228;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_452193){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_452193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e452230){if((e452230 instanceof Object)){
var ex__38083__auto__ = e452230;
var statearr_452231_452302 = state_452193;
(statearr_452231_452302[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452308 = state_452193;
state_452193 = G__452308;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_452193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_452193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___452253,tc,fc))
})();
var state__38102__auto__ = (function (){var statearr_452232 = f__38101__auto__.call(null);
(statearr_452232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___452253);

return statearr_452232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___452253,tc,fc))
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
return (function (state_452371){
var state_val_452372 = (state_452371[(1)]);
if((state_val_452372 === (1))){
var inst_452356 = init;
var state_452371__$1 = (function (){var statearr_452375 = state_452371;
(statearr_452375[(7)] = inst_452356);

return statearr_452375;
})();
var statearr_452376_452406 = state_452371__$1;
(statearr_452376_452406[(2)] = null);

(statearr_452376_452406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452372 === (2))){
var state_452371__$1 = state_452371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452371__$1,(4),ch);
} else {
if((state_val_452372 === (3))){
var inst_452369 = (state_452371[(2)]);
var state_452371__$1 = state_452371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452371__$1,inst_452369);
} else {
if((state_val_452372 === (4))){
var inst_452359 = (state_452371[(8)]);
var inst_452359__$1 = (state_452371[(2)]);
var inst_452360 = (inst_452359__$1 == null);
var state_452371__$1 = (function (){var statearr_452379 = state_452371;
(statearr_452379[(8)] = inst_452359__$1);

return statearr_452379;
})();
if(cljs.core.truth_(inst_452360)){
var statearr_452380_452408 = state_452371__$1;
(statearr_452380_452408[(1)] = (5));

} else {
var statearr_452385_452409 = state_452371__$1;
(statearr_452385_452409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452372 === (5))){
var inst_452356 = (state_452371[(7)]);
var state_452371__$1 = state_452371;
var statearr_452386_452410 = state_452371__$1;
(statearr_452386_452410[(2)] = inst_452356);

(statearr_452386_452410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452372 === (6))){
var inst_452359 = (state_452371[(8)]);
var inst_452356 = (state_452371[(7)]);
var inst_452363 = f.call(null,inst_452356,inst_452359);
var inst_452356__$1 = inst_452363;
var state_452371__$1 = (function (){var statearr_452387 = state_452371;
(statearr_452387[(7)] = inst_452356__$1);

return statearr_452387;
})();
var statearr_452388_452414 = state_452371__$1;
(statearr_452388_452414[(2)] = null);

(statearr_452388_452414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452372 === (7))){
var inst_452366 = (state_452371[(2)]);
var state_452371__$1 = state_452371;
var statearr_452390_452415 = state_452371__$1;
(statearr_452390_452415[(2)] = inst_452366);

(statearr_452390_452415[(1)] = (3));


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
var statearr_452397 = [null,null,null,null,null,null,null,null,null];
(statearr_452397[(0)] = cljs$core$async$reduce_$_state_machine__38080__auto__);

(statearr_452397[(1)] = (1));

return statearr_452397;
});
var cljs$core$async$reduce_$_state_machine__38080__auto____1 = (function (state_452371){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_452371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e452399){if((e452399 instanceof Object)){
var ex__38083__auto__ = e452399;
var statearr_452400_452419 = state_452371;
(statearr_452400_452419[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452421 = state_452371;
state_452371 = G__452421;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38080__auto__ = function(state_452371){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38080__auto____1.call(this,state_452371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38080__auto____0;
cljs$core$async$reduce_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38080__auto____1;
return cljs$core$async$reduce_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_452401 = f__38101__auto__.call(null);
(statearr_452401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_452401;
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
var args452425 = [];
var len__36260__auto___452497 = arguments.length;
var i__36261__auto___452498 = (0);
while(true){
if((i__36261__auto___452498 < len__36260__auto___452497)){
args452425.push((arguments[i__36261__auto___452498]));

var G__452499 = (i__36261__auto___452498 + (1));
i__36261__auto___452498 = G__452499;
continue;
} else {
}
break;
}

var G__452427 = args452425.length;
switch (G__452427) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args452425.length)].join('')));

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
return (function (state_452457){
var state_val_452458 = (state_452457[(1)]);
if((state_val_452458 === (7))){
var inst_452437 = (state_452457[(2)]);
var state_452457__$1 = state_452457;
var statearr_452460_452512 = state_452457__$1;
(statearr_452460_452512[(2)] = inst_452437);

(statearr_452460_452512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452458 === (1))){
var inst_452430 = cljs.core.seq.call(null,coll);
var inst_452431 = inst_452430;
var state_452457__$1 = (function (){var statearr_452461 = state_452457;
(statearr_452461[(7)] = inst_452431);

return statearr_452461;
})();
var statearr_452462_452516 = state_452457__$1;
(statearr_452462_452516[(2)] = null);

(statearr_452462_452516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452458 === (4))){
var inst_452431 = (state_452457[(7)]);
var inst_452435 = cljs.core.first.call(null,inst_452431);
var state_452457__$1 = state_452457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_452457__$1,(7),ch,inst_452435);
} else {
if((state_val_452458 === (13))){
var inst_452449 = (state_452457[(2)]);
var state_452457__$1 = state_452457;
var statearr_452464_452524 = state_452457__$1;
(statearr_452464_452524[(2)] = inst_452449);

(statearr_452464_452524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452458 === (6))){
var inst_452440 = (state_452457[(2)]);
var state_452457__$1 = state_452457;
if(cljs.core.truth_(inst_452440)){
var statearr_452465_452525 = state_452457__$1;
(statearr_452465_452525[(1)] = (8));

} else {
var statearr_452467_452527 = state_452457__$1;
(statearr_452467_452527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452458 === (3))){
var inst_452453 = (state_452457[(2)]);
var state_452457__$1 = state_452457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452457__$1,inst_452453);
} else {
if((state_val_452458 === (12))){
var state_452457__$1 = state_452457;
var statearr_452470_452531 = state_452457__$1;
(statearr_452470_452531[(2)] = null);

(statearr_452470_452531[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452458 === (2))){
var inst_452431 = (state_452457[(7)]);
var state_452457__$1 = state_452457;
if(cljs.core.truth_(inst_452431)){
var statearr_452471_452533 = state_452457__$1;
(statearr_452471_452533[(1)] = (4));

} else {
var statearr_452473_452534 = state_452457__$1;
(statearr_452473_452534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452458 === (11))){
var inst_452446 = cljs.core.async.close_BANG_.call(null,ch);
var state_452457__$1 = state_452457;
var statearr_452475_452537 = state_452457__$1;
(statearr_452475_452537[(2)] = inst_452446);

(statearr_452475_452537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452458 === (9))){
var state_452457__$1 = state_452457;
if(cljs.core.truth_(close_QMARK_)){
var statearr_452477_452542 = state_452457__$1;
(statearr_452477_452542[(1)] = (11));

} else {
var statearr_452478_452543 = state_452457__$1;
(statearr_452478_452543[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452458 === (5))){
var inst_452431 = (state_452457[(7)]);
var state_452457__$1 = state_452457;
var statearr_452480_452544 = state_452457__$1;
(statearr_452480_452544[(2)] = inst_452431);

(statearr_452480_452544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452458 === (10))){
var inst_452451 = (state_452457[(2)]);
var state_452457__$1 = state_452457;
var statearr_452481_452547 = state_452457__$1;
(statearr_452481_452547[(2)] = inst_452451);

(statearr_452481_452547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452458 === (8))){
var inst_452431 = (state_452457[(7)]);
var inst_452442 = cljs.core.next.call(null,inst_452431);
var inst_452431__$1 = inst_452442;
var state_452457__$1 = (function (){var statearr_452482 = state_452457;
(statearr_452482[(7)] = inst_452431__$1);

return statearr_452482;
})();
var statearr_452483_452559 = state_452457__$1;
(statearr_452483_452559[(2)] = null);

(statearr_452483_452559[(1)] = (2));


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
var statearr_452490 = [null,null,null,null,null,null,null,null];
(statearr_452490[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_452490[(1)] = (1));

return statearr_452490;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_452457){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_452457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e452491){if((e452491 instanceof Object)){
var ex__38083__auto__ = e452491;
var statearr_452492_452563 = state_452457;
(statearr_452492_452563[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e452491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__452567 = state_452457;
state_452457 = G__452567;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_452457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_452457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_452495 = f__38101__auto__.call(null);
(statearr_452495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_452495;
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
if(typeof cljs.core.async.t_cljs$core$async452852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async452852 = (function (mult,ch,cs,meta452853){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta452853 = meta452853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async452852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_452854,meta452853__$1){
var self__ = this;
var _452854__$1 = this;
return (new cljs.core.async.t_cljs$core$async452852(self__.mult,self__.ch,self__.cs,meta452853__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async452852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_452854){
var self__ = this;
var _452854__$1 = this;
return self__.meta452853;
});})(cs))
;

cljs.core.async.t_cljs$core$async452852.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async452852.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async452852.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async452852.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async452852.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async452852.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async452852.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta452853","meta452853",367171920,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async452852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async452852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async452852";

cljs.core.async.t_cljs$core$async452852.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async452852");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async452852 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async452852(mult__$1,ch__$1,cs__$1,meta452853){
return (new cljs.core.async.t_cljs$core$async452852(mult__$1,ch__$1,cs__$1,meta452853));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async452852(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38100__auto___453115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___453115,cs,m,dchan,dctr,done){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___453115,cs,m,dchan,dctr,done){
return (function (state_452996){
var state_val_452998 = (state_452996[(1)]);
if((state_val_452998 === (7))){
var inst_452990 = (state_452996[(2)]);
var state_452996__$1 = state_452996;
var statearr_452999_453116 = state_452996__$1;
(statearr_452999_453116[(2)] = inst_452990);

(statearr_452999_453116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (20))){
var inst_452892 = (state_452996[(7)]);
var inst_452902 = cljs.core.first.call(null,inst_452892);
var inst_452903 = cljs.core.nth.call(null,inst_452902,(0),null);
var inst_452904 = cljs.core.nth.call(null,inst_452902,(1),null);
var state_452996__$1 = (function (){var statearr_453000 = state_452996;
(statearr_453000[(8)] = inst_452903);

return statearr_453000;
})();
if(cljs.core.truth_(inst_452904)){
var statearr_453001_453118 = state_452996__$1;
(statearr_453001_453118[(1)] = (22));

} else {
var statearr_453002_453120 = state_452996__$1;
(statearr_453002_453120[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (27))){
var inst_452934 = (state_452996[(9)]);
var inst_452936 = (state_452996[(10)]);
var inst_452942 = (state_452996[(11)]);
var inst_452863 = (state_452996[(12)]);
var inst_452942__$1 = cljs.core._nth.call(null,inst_452934,inst_452936);
var inst_452943 = cljs.core.async.put_BANG_.call(null,inst_452942__$1,inst_452863,done);
var state_452996__$1 = (function (){var statearr_453003 = state_452996;
(statearr_453003[(11)] = inst_452942__$1);

return statearr_453003;
})();
if(cljs.core.truth_(inst_452943)){
var statearr_453004_453122 = state_452996__$1;
(statearr_453004_453122[(1)] = (30));

} else {
var statearr_453005_453129 = state_452996__$1;
(statearr_453005_453129[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (1))){
var state_452996__$1 = state_452996;
var statearr_453006_453130 = state_452996__$1;
(statearr_453006_453130[(2)] = null);

(statearr_453006_453130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (24))){
var inst_452892 = (state_452996[(7)]);
var inst_452909 = (state_452996[(2)]);
var inst_452910 = cljs.core.next.call(null,inst_452892);
var inst_452872 = inst_452910;
var inst_452873 = null;
var inst_452874 = (0);
var inst_452875 = (0);
var state_452996__$1 = (function (){var statearr_453010 = state_452996;
(statearr_453010[(13)] = inst_452909);

(statearr_453010[(14)] = inst_452873);

(statearr_453010[(15)] = inst_452874);

(statearr_453010[(16)] = inst_452875);

(statearr_453010[(17)] = inst_452872);

return statearr_453010;
})();
var statearr_453011_453131 = state_452996__$1;
(statearr_453011_453131[(2)] = null);

(statearr_453011_453131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (39))){
var state_452996__$1 = state_452996;
var statearr_453015_453132 = state_452996__$1;
(statearr_453015_453132[(2)] = null);

(statearr_453015_453132[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (4))){
var inst_452863 = (state_452996[(12)]);
var inst_452863__$1 = (state_452996[(2)]);
var inst_452864 = (inst_452863__$1 == null);
var state_452996__$1 = (function (){var statearr_453016 = state_452996;
(statearr_453016[(12)] = inst_452863__$1);

return statearr_453016;
})();
if(cljs.core.truth_(inst_452864)){
var statearr_453017_453133 = state_452996__$1;
(statearr_453017_453133[(1)] = (5));

} else {
var statearr_453018_453134 = state_452996__$1;
(statearr_453018_453134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (15))){
var inst_452873 = (state_452996[(14)]);
var inst_452874 = (state_452996[(15)]);
var inst_452875 = (state_452996[(16)]);
var inst_452872 = (state_452996[(17)]);
var inst_452888 = (state_452996[(2)]);
var inst_452889 = (inst_452875 + (1));
var tmp453012 = inst_452873;
var tmp453013 = inst_452874;
var tmp453014 = inst_452872;
var inst_452872__$1 = tmp453014;
var inst_452873__$1 = tmp453012;
var inst_452874__$1 = tmp453013;
var inst_452875__$1 = inst_452889;
var state_452996__$1 = (function (){var statearr_453021 = state_452996;
(statearr_453021[(14)] = inst_452873__$1);

(statearr_453021[(15)] = inst_452874__$1);

(statearr_453021[(16)] = inst_452875__$1);

(statearr_453021[(18)] = inst_452888);

(statearr_453021[(17)] = inst_452872__$1);

return statearr_453021;
})();
var statearr_453023_453139 = state_452996__$1;
(statearr_453023_453139[(2)] = null);

(statearr_453023_453139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (21))){
var inst_452913 = (state_452996[(2)]);
var state_452996__$1 = state_452996;
var statearr_453027_453140 = state_452996__$1;
(statearr_453027_453140[(2)] = inst_452913);

(statearr_453027_453140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (31))){
var inst_452942 = (state_452996[(11)]);
var inst_452946 = done.call(null,null);
var inst_452947 = cljs.core.async.untap_STAR_.call(null,m,inst_452942);
var state_452996__$1 = (function (){var statearr_453028 = state_452996;
(statearr_453028[(19)] = inst_452946);

return statearr_453028;
})();
var statearr_453029_453141 = state_452996__$1;
(statearr_453029_453141[(2)] = inst_452947);

(statearr_453029_453141[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (32))){
var inst_452934 = (state_452996[(9)]);
var inst_452936 = (state_452996[(10)]);
var inst_452933 = (state_452996[(20)]);
var inst_452935 = (state_452996[(21)]);
var inst_452949 = (state_452996[(2)]);
var inst_452950 = (inst_452936 + (1));
var tmp453024 = inst_452934;
var tmp453025 = inst_452933;
var tmp453026 = inst_452935;
var inst_452933__$1 = tmp453025;
var inst_452934__$1 = tmp453024;
var inst_452935__$1 = tmp453026;
var inst_452936__$1 = inst_452950;
var state_452996__$1 = (function (){var statearr_453032 = state_452996;
(statearr_453032[(9)] = inst_452934__$1);

(statearr_453032[(10)] = inst_452936__$1);

(statearr_453032[(20)] = inst_452933__$1);

(statearr_453032[(21)] = inst_452935__$1);

(statearr_453032[(22)] = inst_452949);

return statearr_453032;
})();
var statearr_453034_453143 = state_452996__$1;
(statearr_453034_453143[(2)] = null);

(statearr_453034_453143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (40))){
var inst_452962 = (state_452996[(23)]);
var inst_452966 = done.call(null,null);
var inst_452967 = cljs.core.async.untap_STAR_.call(null,m,inst_452962);
var state_452996__$1 = (function (){var statearr_453035 = state_452996;
(statearr_453035[(24)] = inst_452966);

return statearr_453035;
})();
var statearr_453036_453144 = state_452996__$1;
(statearr_453036_453144[(2)] = inst_452967);

(statearr_453036_453144[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (33))){
var inst_452953 = (state_452996[(25)]);
var inst_452955 = cljs.core.chunked_seq_QMARK_.call(null,inst_452953);
var state_452996__$1 = state_452996;
if(inst_452955){
var statearr_453037_453148 = state_452996__$1;
(statearr_453037_453148[(1)] = (36));

} else {
var statearr_453038_453149 = state_452996__$1;
(statearr_453038_453149[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (13))){
var inst_452882 = (state_452996[(26)]);
var inst_452885 = cljs.core.async.close_BANG_.call(null,inst_452882);
var state_452996__$1 = state_452996;
var statearr_453039_453150 = state_452996__$1;
(statearr_453039_453150[(2)] = inst_452885);

(statearr_453039_453150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (22))){
var inst_452903 = (state_452996[(8)]);
var inst_452906 = cljs.core.async.close_BANG_.call(null,inst_452903);
var state_452996__$1 = state_452996;
var statearr_453040_453151 = state_452996__$1;
(statearr_453040_453151[(2)] = inst_452906);

(statearr_453040_453151[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (36))){
var inst_452953 = (state_452996[(25)]);
var inst_452957 = cljs.core.chunk_first.call(null,inst_452953);
var inst_452958 = cljs.core.chunk_rest.call(null,inst_452953);
var inst_452959 = cljs.core.count.call(null,inst_452957);
var inst_452933 = inst_452958;
var inst_452934 = inst_452957;
var inst_452935 = inst_452959;
var inst_452936 = (0);
var state_452996__$1 = (function (){var statearr_453043 = state_452996;
(statearr_453043[(9)] = inst_452934);

(statearr_453043[(10)] = inst_452936);

(statearr_453043[(20)] = inst_452933);

(statearr_453043[(21)] = inst_452935);

return statearr_453043;
})();
var statearr_453044_453152 = state_452996__$1;
(statearr_453044_453152[(2)] = null);

(statearr_453044_453152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (41))){
var inst_452953 = (state_452996[(25)]);
var inst_452969 = (state_452996[(2)]);
var inst_452970 = cljs.core.next.call(null,inst_452953);
var inst_452933 = inst_452970;
var inst_452934 = null;
var inst_452935 = (0);
var inst_452936 = (0);
var state_452996__$1 = (function (){var statearr_453046 = state_452996;
(statearr_453046[(9)] = inst_452934);

(statearr_453046[(27)] = inst_452969);

(statearr_453046[(10)] = inst_452936);

(statearr_453046[(20)] = inst_452933);

(statearr_453046[(21)] = inst_452935);

return statearr_453046;
})();
var statearr_453047_453153 = state_452996__$1;
(statearr_453047_453153[(2)] = null);

(statearr_453047_453153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (43))){
var state_452996__$1 = state_452996;
var statearr_453048_453154 = state_452996__$1;
(statearr_453048_453154[(2)] = null);

(statearr_453048_453154[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (29))){
var inst_452978 = (state_452996[(2)]);
var state_452996__$1 = state_452996;
var statearr_453049_453155 = state_452996__$1;
(statearr_453049_453155[(2)] = inst_452978);

(statearr_453049_453155[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (44))){
var inst_452987 = (state_452996[(2)]);
var state_452996__$1 = (function (){var statearr_453050 = state_452996;
(statearr_453050[(28)] = inst_452987);

return statearr_453050;
})();
var statearr_453051_453156 = state_452996__$1;
(statearr_453051_453156[(2)] = null);

(statearr_453051_453156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (6))){
var inst_452924 = (state_452996[(29)]);
var inst_452923 = cljs.core.deref.call(null,cs);
var inst_452924__$1 = cljs.core.keys.call(null,inst_452923);
var inst_452926 = cljs.core.count.call(null,inst_452924__$1);
var inst_452927 = cljs.core.reset_BANG_.call(null,dctr,inst_452926);
var inst_452932 = cljs.core.seq.call(null,inst_452924__$1);
var inst_452933 = inst_452932;
var inst_452934 = null;
var inst_452935 = (0);
var inst_452936 = (0);
var state_452996__$1 = (function (){var statearr_453056 = state_452996;
(statearr_453056[(9)] = inst_452934);

(statearr_453056[(10)] = inst_452936);

(statearr_453056[(20)] = inst_452933);

(statearr_453056[(30)] = inst_452927);

(statearr_453056[(21)] = inst_452935);

(statearr_453056[(29)] = inst_452924__$1);

return statearr_453056;
})();
var statearr_453057_453159 = state_452996__$1;
(statearr_453057_453159[(2)] = null);

(statearr_453057_453159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (28))){
var inst_452933 = (state_452996[(20)]);
var inst_452953 = (state_452996[(25)]);
var inst_452953__$1 = cljs.core.seq.call(null,inst_452933);
var state_452996__$1 = (function (){var statearr_453058 = state_452996;
(statearr_453058[(25)] = inst_452953__$1);

return statearr_453058;
})();
if(inst_452953__$1){
var statearr_453059_453160 = state_452996__$1;
(statearr_453059_453160[(1)] = (33));

} else {
var statearr_453060_453161 = state_452996__$1;
(statearr_453060_453161[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (25))){
var inst_452936 = (state_452996[(10)]);
var inst_452935 = (state_452996[(21)]);
var inst_452939 = (inst_452936 < inst_452935);
var inst_452940 = inst_452939;
var state_452996__$1 = state_452996;
if(cljs.core.truth_(inst_452940)){
var statearr_453061_453162 = state_452996__$1;
(statearr_453061_453162[(1)] = (27));

} else {
var statearr_453062_453163 = state_452996__$1;
(statearr_453062_453163[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (34))){
var state_452996__$1 = state_452996;
var statearr_453065_453164 = state_452996__$1;
(statearr_453065_453164[(2)] = null);

(statearr_453065_453164[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (17))){
var state_452996__$1 = state_452996;
var statearr_453067_453165 = state_452996__$1;
(statearr_453067_453165[(2)] = null);

(statearr_453067_453165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (3))){
var inst_452992 = (state_452996[(2)]);
var state_452996__$1 = state_452996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_452996__$1,inst_452992);
} else {
if((state_val_452998 === (12))){
var inst_452918 = (state_452996[(2)]);
var state_452996__$1 = state_452996;
var statearr_453068_453167 = state_452996__$1;
(statearr_453068_453167[(2)] = inst_452918);

(statearr_453068_453167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (2))){
var state_452996__$1 = state_452996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452996__$1,(4),ch);
} else {
if((state_val_452998 === (23))){
var state_452996__$1 = state_452996;
var statearr_453069_453168 = state_452996__$1;
(statearr_453069_453168[(2)] = null);

(statearr_453069_453168[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (35))){
var inst_452976 = (state_452996[(2)]);
var state_452996__$1 = state_452996;
var statearr_453070_453169 = state_452996__$1;
(statearr_453070_453169[(2)] = inst_452976);

(statearr_453070_453169[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (19))){
var inst_452892 = (state_452996[(7)]);
var inst_452896 = cljs.core.chunk_first.call(null,inst_452892);
var inst_452897 = cljs.core.chunk_rest.call(null,inst_452892);
var inst_452898 = cljs.core.count.call(null,inst_452896);
var inst_452872 = inst_452897;
var inst_452873 = inst_452896;
var inst_452874 = inst_452898;
var inst_452875 = (0);
var state_452996__$1 = (function (){var statearr_453074 = state_452996;
(statearr_453074[(14)] = inst_452873);

(statearr_453074[(15)] = inst_452874);

(statearr_453074[(16)] = inst_452875);

(statearr_453074[(17)] = inst_452872);

return statearr_453074;
})();
var statearr_453075_453171 = state_452996__$1;
(statearr_453075_453171[(2)] = null);

(statearr_453075_453171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (11))){
var inst_452892 = (state_452996[(7)]);
var inst_452872 = (state_452996[(17)]);
var inst_452892__$1 = cljs.core.seq.call(null,inst_452872);
var state_452996__$1 = (function (){var statearr_453076 = state_452996;
(statearr_453076[(7)] = inst_452892__$1);

return statearr_453076;
})();
if(inst_452892__$1){
var statearr_453077_453172 = state_452996__$1;
(statearr_453077_453172[(1)] = (16));

} else {
var statearr_453078_453173 = state_452996__$1;
(statearr_453078_453173[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (9))){
var inst_452920 = (state_452996[(2)]);
var state_452996__$1 = state_452996;
var statearr_453079_453174 = state_452996__$1;
(statearr_453079_453174[(2)] = inst_452920);

(statearr_453079_453174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (5))){
var inst_452870 = cljs.core.deref.call(null,cs);
var inst_452871 = cljs.core.seq.call(null,inst_452870);
var inst_452872 = inst_452871;
var inst_452873 = null;
var inst_452874 = (0);
var inst_452875 = (0);
var state_452996__$1 = (function (){var statearr_453080 = state_452996;
(statearr_453080[(14)] = inst_452873);

(statearr_453080[(15)] = inst_452874);

(statearr_453080[(16)] = inst_452875);

(statearr_453080[(17)] = inst_452872);

return statearr_453080;
})();
var statearr_453081_453175 = state_452996__$1;
(statearr_453081_453175[(2)] = null);

(statearr_453081_453175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (14))){
var state_452996__$1 = state_452996;
var statearr_453082_453176 = state_452996__$1;
(statearr_453082_453176[(2)] = null);

(statearr_453082_453176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (45))){
var inst_452984 = (state_452996[(2)]);
var state_452996__$1 = state_452996;
var statearr_453083_453177 = state_452996__$1;
(statearr_453083_453177[(2)] = inst_452984);

(statearr_453083_453177[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (26))){
var inst_452924 = (state_452996[(29)]);
var inst_452980 = (state_452996[(2)]);
var inst_452981 = cljs.core.seq.call(null,inst_452924);
var state_452996__$1 = (function (){var statearr_453084 = state_452996;
(statearr_453084[(31)] = inst_452980);

return statearr_453084;
})();
if(inst_452981){
var statearr_453085_453178 = state_452996__$1;
(statearr_453085_453178[(1)] = (42));

} else {
var statearr_453086_453179 = state_452996__$1;
(statearr_453086_453179[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (16))){
var inst_452892 = (state_452996[(7)]);
var inst_452894 = cljs.core.chunked_seq_QMARK_.call(null,inst_452892);
var state_452996__$1 = state_452996;
if(inst_452894){
var statearr_453087_453180 = state_452996__$1;
(statearr_453087_453180[(1)] = (19));

} else {
var statearr_453088_453181 = state_452996__$1;
(statearr_453088_453181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (38))){
var inst_452973 = (state_452996[(2)]);
var state_452996__$1 = state_452996;
var statearr_453089_453182 = state_452996__$1;
(statearr_453089_453182[(2)] = inst_452973);

(statearr_453089_453182[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (30))){
var state_452996__$1 = state_452996;
var statearr_453090_453183 = state_452996__$1;
(statearr_453090_453183[(2)] = null);

(statearr_453090_453183[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (10))){
var inst_452873 = (state_452996[(14)]);
var inst_452875 = (state_452996[(16)]);
var inst_452881 = cljs.core._nth.call(null,inst_452873,inst_452875);
var inst_452882 = cljs.core.nth.call(null,inst_452881,(0),null);
var inst_452883 = cljs.core.nth.call(null,inst_452881,(1),null);
var state_452996__$1 = (function (){var statearr_453093 = state_452996;
(statearr_453093[(26)] = inst_452882);

return statearr_453093;
})();
if(cljs.core.truth_(inst_452883)){
var statearr_453094_453184 = state_452996__$1;
(statearr_453094_453184[(1)] = (13));

} else {
var statearr_453095_453185 = state_452996__$1;
(statearr_453095_453185[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (18))){
var inst_452916 = (state_452996[(2)]);
var state_452996__$1 = state_452996;
var statearr_453097_453186 = state_452996__$1;
(statearr_453097_453186[(2)] = inst_452916);

(statearr_453097_453186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (42))){
var state_452996__$1 = state_452996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_452996__$1,(45),dchan);
} else {
if((state_val_452998 === (37))){
var inst_452953 = (state_452996[(25)]);
var inst_452962 = (state_452996[(23)]);
var inst_452863 = (state_452996[(12)]);
var inst_452962__$1 = cljs.core.first.call(null,inst_452953);
var inst_452963 = cljs.core.async.put_BANG_.call(null,inst_452962__$1,inst_452863,done);
var state_452996__$1 = (function (){var statearr_453098 = state_452996;
(statearr_453098[(23)] = inst_452962__$1);

return statearr_453098;
})();
if(cljs.core.truth_(inst_452963)){
var statearr_453099_453187 = state_452996__$1;
(statearr_453099_453187[(1)] = (39));

} else {
var statearr_453100_453188 = state_452996__$1;
(statearr_453100_453188[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_452998 === (8))){
var inst_452874 = (state_452996[(15)]);
var inst_452875 = (state_452996[(16)]);
var inst_452877 = (inst_452875 < inst_452874);
var inst_452878 = inst_452877;
var state_452996__$1 = state_452996;
if(cljs.core.truth_(inst_452878)){
var statearr_453101_453189 = state_452996__$1;
(statearr_453101_453189[(1)] = (10));

} else {
var statearr_453102_453190 = state_452996__$1;
(statearr_453102_453190[(1)] = (11));

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
});})(c__38100__auto___453115,cs,m,dchan,dctr,done))
;
return ((function (switch__38079__auto__,c__38100__auto___453115,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38080__auto__ = null;
var cljs$core$async$mult_$_state_machine__38080__auto____0 = (function (){
var statearr_453106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_453106[(0)] = cljs$core$async$mult_$_state_machine__38080__auto__);

(statearr_453106[(1)] = (1));

return statearr_453106;
});
var cljs$core$async$mult_$_state_machine__38080__auto____1 = (function (state_452996){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_452996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e453107){if((e453107 instanceof Object)){
var ex__38083__auto__ = e453107;
var statearr_453108_453194 = state_452996;
(statearr_453108_453194[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_452996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e453107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__453201 = state_452996;
state_452996 = G__453201;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38080__auto__ = function(state_452996){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38080__auto____1.call(this,state_452996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38080__auto____0;
cljs$core$async$mult_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38080__auto____1;
return cljs$core$async$mult_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___453115,cs,m,dchan,dctr,done))
})();
var state__38102__auto__ = (function (){var statearr_453109 = f__38101__auto__.call(null);
(statearr_453109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___453115);

return statearr_453109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___453115,cs,m,dchan,dctr,done))
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
var args453202 = [];
var len__36260__auto___453205 = arguments.length;
var i__36261__auto___453206 = (0);
while(true){
if((i__36261__auto___453206 < len__36260__auto___453205)){
args453202.push((arguments[i__36261__auto___453206]));

var G__453207 = (i__36261__auto___453206 + (1));
i__36261__auto___453206 = G__453207;
continue;
} else {
}
break;
}

var G__453204 = args453202.length;
switch (G__453204) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args453202.length)].join('')));

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
var len__36260__auto___453229 = arguments.length;
var i__36261__auto___453230 = (0);
while(true){
if((i__36261__auto___453230 < len__36260__auto___453229)){
args__36267__auto__.push((arguments[i__36261__auto___453230]));

var G__453231 = (i__36261__auto___453230 + (1));
i__36261__auto___453230 = G__453231;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((3) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36268__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__453223){
var map__453224 = p__453223;
var map__453224__$1 = ((((!((map__453224 == null)))?((((map__453224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__453224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__453224):map__453224);
var opts = map__453224__$1;
var statearr_453226_453233 = state;
(statearr_453226_453233[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__453224,map__453224__$1,opts){
return (function (val){
var statearr_453227_453234 = state;
(statearr_453227_453234[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__453224,map__453224__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_453228_453235 = state;
(statearr_453228_453235[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq453218){
var G__453219 = cljs.core.first.call(null,seq453218);
var seq453218__$1 = cljs.core.next.call(null,seq453218);
var G__453220 = cljs.core.first.call(null,seq453218__$1);
var seq453218__$2 = cljs.core.next.call(null,seq453218__$1);
var G__453221 = cljs.core.first.call(null,seq453218__$2);
var seq453218__$3 = cljs.core.next.call(null,seq453218__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__453219,G__453220,G__453221,seq453218__$3);
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
if(typeof cljs.core.async.t_cljs$core$async453409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async453409 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta453410){
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
this.meta453410 = meta453410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async453409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_453411,meta453410__$1){
var self__ = this;
var _453411__$1 = this;
return (new cljs.core.async.t_cljs$core$async453409(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta453410__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async453409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_453411){
var self__ = this;
var _453411__$1 = this;
return self__.meta453410;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async453409.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async453409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async453409.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async453409.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async453409.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async453409.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async453409.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async453409.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async453409.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta453410","meta453410",-1599232267,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async453409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async453409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async453409";

cljs.core.async.t_cljs$core$async453409.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async453409");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async453409 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async453409(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta453410){
return (new cljs.core.async.t_cljs$core$async453409(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta453410));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async453409(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38100__auto___453584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___453584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___453584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_453514){
var state_val_453515 = (state_453514[(1)]);
if((state_val_453515 === (7))){
var inst_453431 = (state_453514[(2)]);
var state_453514__$1 = state_453514;
var statearr_453516_453585 = state_453514__$1;
(statearr_453516_453585[(2)] = inst_453431);

(statearr_453516_453585[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (20))){
var inst_453444 = (state_453514[(7)]);
var state_453514__$1 = state_453514;
var statearr_453517_453586 = state_453514__$1;
(statearr_453517_453586[(2)] = inst_453444);

(statearr_453517_453586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (27))){
var state_453514__$1 = state_453514;
var statearr_453518_453587 = state_453514__$1;
(statearr_453518_453587[(2)] = null);

(statearr_453518_453587[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (1))){
var inst_453419 = (state_453514[(8)]);
var inst_453419__$1 = calc_state.call(null);
var inst_453421 = (inst_453419__$1 == null);
var inst_453422 = cljs.core.not.call(null,inst_453421);
var state_453514__$1 = (function (){var statearr_453519 = state_453514;
(statearr_453519[(8)] = inst_453419__$1);

return statearr_453519;
})();
if(inst_453422){
var statearr_453520_453588 = state_453514__$1;
(statearr_453520_453588[(1)] = (2));

} else {
var statearr_453524_453589 = state_453514__$1;
(statearr_453524_453589[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (24))){
var inst_453474 = (state_453514[(9)]);
var inst_453488 = (state_453514[(10)]);
var inst_453467 = (state_453514[(11)]);
var inst_453488__$1 = inst_453467.call(null,inst_453474);
var state_453514__$1 = (function (){var statearr_453525 = state_453514;
(statearr_453525[(10)] = inst_453488__$1);

return statearr_453525;
})();
if(cljs.core.truth_(inst_453488__$1)){
var statearr_453526_453590 = state_453514__$1;
(statearr_453526_453590[(1)] = (29));

} else {
var statearr_453527_453591 = state_453514__$1;
(statearr_453527_453591[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (4))){
var inst_453434 = (state_453514[(2)]);
var state_453514__$1 = state_453514;
if(cljs.core.truth_(inst_453434)){
var statearr_453528_453592 = state_453514__$1;
(statearr_453528_453592[(1)] = (8));

} else {
var statearr_453529_453593 = state_453514__$1;
(statearr_453529_453593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (15))){
var inst_453461 = (state_453514[(2)]);
var state_453514__$1 = state_453514;
if(cljs.core.truth_(inst_453461)){
var statearr_453530_453594 = state_453514__$1;
(statearr_453530_453594[(1)] = (19));

} else {
var statearr_453531_453595 = state_453514__$1;
(statearr_453531_453595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (21))){
var inst_453466 = (state_453514[(12)]);
var inst_453466__$1 = (state_453514[(2)]);
var inst_453467 = cljs.core.get.call(null,inst_453466__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_453468 = cljs.core.get.call(null,inst_453466__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_453469 = cljs.core.get.call(null,inst_453466__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_453514__$1 = (function (){var statearr_453532 = state_453514;
(statearr_453532[(13)] = inst_453468);

(statearr_453532[(12)] = inst_453466__$1);

(statearr_453532[(11)] = inst_453467);

return statearr_453532;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_453514__$1,(22),inst_453469);
} else {
if((state_val_453515 === (31))){
var inst_453496 = (state_453514[(2)]);
var state_453514__$1 = state_453514;
if(cljs.core.truth_(inst_453496)){
var statearr_453533_453599 = state_453514__$1;
(statearr_453533_453599[(1)] = (32));

} else {
var statearr_453534_453600 = state_453514__$1;
(statearr_453534_453600[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (32))){
var inst_453473 = (state_453514[(14)]);
var state_453514__$1 = state_453514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_453514__$1,(35),out,inst_453473);
} else {
if((state_val_453515 === (33))){
var inst_453466 = (state_453514[(12)]);
var inst_453444 = inst_453466;
var state_453514__$1 = (function (){var statearr_453535 = state_453514;
(statearr_453535[(7)] = inst_453444);

return statearr_453535;
})();
var statearr_453536_453607 = state_453514__$1;
(statearr_453536_453607[(2)] = null);

(statearr_453536_453607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (13))){
var inst_453444 = (state_453514[(7)]);
var inst_453451 = inst_453444.cljs$lang$protocol_mask$partition0$;
var inst_453452 = (inst_453451 & (64));
var inst_453453 = inst_453444.cljs$core$ISeq$;
var inst_453454 = (inst_453452) || (inst_453453);
var state_453514__$1 = state_453514;
if(cljs.core.truth_(inst_453454)){
var statearr_453537_453608 = state_453514__$1;
(statearr_453537_453608[(1)] = (16));

} else {
var statearr_453538_453609 = state_453514__$1;
(statearr_453538_453609[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (22))){
var inst_453474 = (state_453514[(9)]);
var inst_453473 = (state_453514[(14)]);
var inst_453472 = (state_453514[(2)]);
var inst_453473__$1 = cljs.core.nth.call(null,inst_453472,(0),null);
var inst_453474__$1 = cljs.core.nth.call(null,inst_453472,(1),null);
var inst_453475 = (inst_453473__$1 == null);
var inst_453476 = cljs.core._EQ_.call(null,inst_453474__$1,change);
var inst_453477 = (inst_453475) || (inst_453476);
var state_453514__$1 = (function (){var statearr_453539 = state_453514;
(statearr_453539[(9)] = inst_453474__$1);

(statearr_453539[(14)] = inst_453473__$1);

return statearr_453539;
})();
if(cljs.core.truth_(inst_453477)){
var statearr_453540_453610 = state_453514__$1;
(statearr_453540_453610[(1)] = (23));

} else {
var statearr_453541_453611 = state_453514__$1;
(statearr_453541_453611[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (36))){
var inst_453466 = (state_453514[(12)]);
var inst_453444 = inst_453466;
var state_453514__$1 = (function (){var statearr_453542 = state_453514;
(statearr_453542[(7)] = inst_453444);

return statearr_453542;
})();
var statearr_453543_453612 = state_453514__$1;
(statearr_453543_453612[(2)] = null);

(statearr_453543_453612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (29))){
var inst_453488 = (state_453514[(10)]);
var state_453514__$1 = state_453514;
var statearr_453544_453613 = state_453514__$1;
(statearr_453544_453613[(2)] = inst_453488);

(statearr_453544_453613[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (6))){
var state_453514__$1 = state_453514;
var statearr_453545_453614 = state_453514__$1;
(statearr_453545_453614[(2)] = false);

(statearr_453545_453614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (28))){
var inst_453484 = (state_453514[(2)]);
var inst_453485 = calc_state.call(null);
var inst_453444 = inst_453485;
var state_453514__$1 = (function (){var statearr_453546 = state_453514;
(statearr_453546[(15)] = inst_453484);

(statearr_453546[(7)] = inst_453444);

return statearr_453546;
})();
var statearr_453547_453615 = state_453514__$1;
(statearr_453547_453615[(2)] = null);

(statearr_453547_453615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (25))){
var inst_453510 = (state_453514[(2)]);
var state_453514__$1 = state_453514;
var statearr_453548_453620 = state_453514__$1;
(statearr_453548_453620[(2)] = inst_453510);

(statearr_453548_453620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (34))){
var inst_453508 = (state_453514[(2)]);
var state_453514__$1 = state_453514;
var statearr_453549_453621 = state_453514__$1;
(statearr_453549_453621[(2)] = inst_453508);

(statearr_453549_453621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (17))){
var state_453514__$1 = state_453514;
var statearr_453550_453622 = state_453514__$1;
(statearr_453550_453622[(2)] = false);

(statearr_453550_453622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (3))){
var state_453514__$1 = state_453514;
var statearr_453551_453623 = state_453514__$1;
(statearr_453551_453623[(2)] = false);

(statearr_453551_453623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (12))){
var inst_453512 = (state_453514[(2)]);
var state_453514__$1 = state_453514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_453514__$1,inst_453512);
} else {
if((state_val_453515 === (2))){
var inst_453419 = (state_453514[(8)]);
var inst_453424 = inst_453419.cljs$lang$protocol_mask$partition0$;
var inst_453425 = (inst_453424 & (64));
var inst_453426 = inst_453419.cljs$core$ISeq$;
var inst_453427 = (inst_453425) || (inst_453426);
var state_453514__$1 = state_453514;
if(cljs.core.truth_(inst_453427)){
var statearr_453552_453625 = state_453514__$1;
(statearr_453552_453625[(1)] = (5));

} else {
var statearr_453553_453626 = state_453514__$1;
(statearr_453553_453626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (23))){
var inst_453473 = (state_453514[(14)]);
var inst_453479 = (inst_453473 == null);
var state_453514__$1 = state_453514;
if(cljs.core.truth_(inst_453479)){
var statearr_453554_453627 = state_453514__$1;
(statearr_453554_453627[(1)] = (26));

} else {
var statearr_453555_453628 = state_453514__$1;
(statearr_453555_453628[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (35))){
var inst_453499 = (state_453514[(2)]);
var state_453514__$1 = state_453514;
if(cljs.core.truth_(inst_453499)){
var statearr_453556_453629 = state_453514__$1;
(statearr_453556_453629[(1)] = (36));

} else {
var statearr_453557_453630 = state_453514__$1;
(statearr_453557_453630[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (19))){
var inst_453444 = (state_453514[(7)]);
var inst_453463 = cljs.core.apply.call(null,cljs.core.hash_map,inst_453444);
var state_453514__$1 = state_453514;
var statearr_453558_453634 = state_453514__$1;
(statearr_453558_453634[(2)] = inst_453463);

(statearr_453558_453634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (11))){
var inst_453444 = (state_453514[(7)]);
var inst_453448 = (inst_453444 == null);
var inst_453449 = cljs.core.not.call(null,inst_453448);
var state_453514__$1 = state_453514;
if(inst_453449){
var statearr_453559_453635 = state_453514__$1;
(statearr_453559_453635[(1)] = (13));

} else {
var statearr_453560_453636 = state_453514__$1;
(statearr_453560_453636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (9))){
var inst_453419 = (state_453514[(8)]);
var state_453514__$1 = state_453514;
var statearr_453561_453637 = state_453514__$1;
(statearr_453561_453637[(2)] = inst_453419);

(statearr_453561_453637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (5))){
var state_453514__$1 = state_453514;
var statearr_453562_453638 = state_453514__$1;
(statearr_453562_453638[(2)] = true);

(statearr_453562_453638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (14))){
var state_453514__$1 = state_453514;
var statearr_453563_453639 = state_453514__$1;
(statearr_453563_453639[(2)] = false);

(statearr_453563_453639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (26))){
var inst_453474 = (state_453514[(9)]);
var inst_453481 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_453474);
var state_453514__$1 = state_453514;
var statearr_453564_453640 = state_453514__$1;
(statearr_453564_453640[(2)] = inst_453481);

(statearr_453564_453640[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (16))){
var state_453514__$1 = state_453514;
var statearr_453565_453641 = state_453514__$1;
(statearr_453565_453641[(2)] = true);

(statearr_453565_453641[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (38))){
var inst_453504 = (state_453514[(2)]);
var state_453514__$1 = state_453514;
var statearr_453566_453642 = state_453514__$1;
(statearr_453566_453642[(2)] = inst_453504);

(statearr_453566_453642[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (30))){
var inst_453468 = (state_453514[(13)]);
var inst_453474 = (state_453514[(9)]);
var inst_453467 = (state_453514[(11)]);
var inst_453491 = cljs.core.empty_QMARK_.call(null,inst_453467);
var inst_453492 = inst_453468.call(null,inst_453474);
var inst_453493 = cljs.core.not.call(null,inst_453492);
var inst_453494 = (inst_453491) && (inst_453493);
var state_453514__$1 = state_453514;
var statearr_453567_453643 = state_453514__$1;
(statearr_453567_453643[(2)] = inst_453494);

(statearr_453567_453643[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (10))){
var inst_453419 = (state_453514[(8)]);
var inst_453439 = (state_453514[(2)]);
var inst_453441 = cljs.core.get.call(null,inst_453439,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_453442 = cljs.core.get.call(null,inst_453439,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_453443 = cljs.core.get.call(null,inst_453439,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_453444 = inst_453419;
var state_453514__$1 = (function (){var statearr_453569 = state_453514;
(statearr_453569[(16)] = inst_453442);

(statearr_453569[(7)] = inst_453444);

(statearr_453569[(17)] = inst_453443);

(statearr_453569[(18)] = inst_453441);

return statearr_453569;
})();
var statearr_453570_453644 = state_453514__$1;
(statearr_453570_453644[(2)] = null);

(statearr_453570_453644[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (18))){
var inst_453458 = (state_453514[(2)]);
var state_453514__$1 = state_453514;
var statearr_453571_453645 = state_453514__$1;
(statearr_453571_453645[(2)] = inst_453458);

(statearr_453571_453645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (37))){
var state_453514__$1 = state_453514;
var statearr_453572_453646 = state_453514__$1;
(statearr_453572_453646[(2)] = null);

(statearr_453572_453646[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453515 === (8))){
var inst_453419 = (state_453514[(8)]);
var inst_453436 = cljs.core.apply.call(null,cljs.core.hash_map,inst_453419);
var state_453514__$1 = state_453514;
var statearr_453573_453648 = state_453514__$1;
(statearr_453573_453648[(2)] = inst_453436);

(statearr_453573_453648[(1)] = (10));


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
});})(c__38100__auto___453584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38079__auto__,c__38100__auto___453584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38080__auto__ = null;
var cljs$core$async$mix_$_state_machine__38080__auto____0 = (function (){
var statearr_453578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_453578[(0)] = cljs$core$async$mix_$_state_machine__38080__auto__);

(statearr_453578[(1)] = (1));

return statearr_453578;
});
var cljs$core$async$mix_$_state_machine__38080__auto____1 = (function (state_453514){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_453514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e453579){if((e453579 instanceof Object)){
var ex__38083__auto__ = e453579;
var statearr_453580_453650 = state_453514;
(statearr_453580_453650[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_453514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e453579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__453651 = state_453514;
state_453514 = G__453651;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38080__auto__ = function(state_453514){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38080__auto____1.call(this,state_453514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38080__auto____0;
cljs$core$async$mix_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38080__auto____1;
return cljs$core$async$mix_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___453584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38102__auto__ = (function (){var statearr_453581 = f__38101__auto__.call(null);
(statearr_453581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___453584);

return statearr_453581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___453584,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args453654 = [];
var len__36260__auto___453657 = arguments.length;
var i__36261__auto___453658 = (0);
while(true){
if((i__36261__auto___453658 < len__36260__auto___453657)){
args453654.push((arguments[i__36261__auto___453658]));

var G__453659 = (i__36261__auto___453658 + (1));
i__36261__auto___453658 = G__453659;
continue;
} else {
}
break;
}

var G__453656 = args453654.length;
switch (G__453656) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args453654.length)].join('')));

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
var args453662 = [];
var len__36260__auto___453799 = arguments.length;
var i__36261__auto___453800 = (0);
while(true){
if((i__36261__auto___453800 < len__36260__auto___453799)){
args453662.push((arguments[i__36261__auto___453800]));

var G__453801 = (i__36261__auto___453800 + (1));
i__36261__auto___453800 = G__453801;
continue;
} else {
}
break;
}

var G__453664 = args453662.length;
switch (G__453664) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args453662.length)].join('')));

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
return (function (p1__453661_SHARP_){
if(cljs.core.truth_(p1__453661_SHARP_.call(null,topic))){
return p1__453661_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__453661_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35191__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async453665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async453665 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta453666){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta453666 = meta453666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async453665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_453667,meta453666__$1){
var self__ = this;
var _453667__$1 = this;
return (new cljs.core.async.t_cljs$core$async453665(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta453666__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async453665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_453667){
var self__ = this;
var _453667__$1 = this;
return self__.meta453666;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async453665.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async453665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async453665.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async453665.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async453665.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async453665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async453665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async453665.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta453666","meta453666",-626214008,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async453665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async453665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async453665";

cljs.core.async.t_cljs$core$async453665.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async453665");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async453665 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async453665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta453666){
return (new cljs.core.async.t_cljs$core$async453665(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta453666));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async453665(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38100__auto___453819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___453819,mults,ensure_mult,p){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___453819,mults,ensure_mult,p){
return (function (state_453739){
var state_val_453740 = (state_453739[(1)]);
if((state_val_453740 === (7))){
var inst_453735 = (state_453739[(2)]);
var state_453739__$1 = state_453739;
var statearr_453741_453827 = state_453739__$1;
(statearr_453741_453827[(2)] = inst_453735);

(statearr_453741_453827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (20))){
var state_453739__$1 = state_453739;
var statearr_453742_453829 = state_453739__$1;
(statearr_453742_453829[(2)] = null);

(statearr_453742_453829[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (1))){
var state_453739__$1 = state_453739;
var statearr_453743_453831 = state_453739__$1;
(statearr_453743_453831[(2)] = null);

(statearr_453743_453831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (24))){
var inst_453718 = (state_453739[(7)]);
var inst_453727 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_453718);
var state_453739__$1 = state_453739;
var statearr_453744_453833 = state_453739__$1;
(statearr_453744_453833[(2)] = inst_453727);

(statearr_453744_453833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (4))){
var inst_453670 = (state_453739[(8)]);
var inst_453670__$1 = (state_453739[(2)]);
var inst_453671 = (inst_453670__$1 == null);
var state_453739__$1 = (function (){var statearr_453747 = state_453739;
(statearr_453747[(8)] = inst_453670__$1);

return statearr_453747;
})();
if(cljs.core.truth_(inst_453671)){
var statearr_453748_453836 = state_453739__$1;
(statearr_453748_453836[(1)] = (5));

} else {
var statearr_453749_453837 = state_453739__$1;
(statearr_453749_453837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (15))){
var inst_453712 = (state_453739[(2)]);
var state_453739__$1 = state_453739;
var statearr_453750_453840 = state_453739__$1;
(statearr_453750_453840[(2)] = inst_453712);

(statearr_453750_453840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (21))){
var inst_453732 = (state_453739[(2)]);
var state_453739__$1 = (function (){var statearr_453751 = state_453739;
(statearr_453751[(9)] = inst_453732);

return statearr_453751;
})();
var statearr_453752_453842 = state_453739__$1;
(statearr_453752_453842[(2)] = null);

(statearr_453752_453842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (13))){
var inst_453694 = (state_453739[(10)]);
var inst_453696 = cljs.core.chunked_seq_QMARK_.call(null,inst_453694);
var state_453739__$1 = state_453739;
if(inst_453696){
var statearr_453753_453850 = state_453739__$1;
(statearr_453753_453850[(1)] = (16));

} else {
var statearr_453754_453851 = state_453739__$1;
(statearr_453754_453851[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (22))){
var inst_453724 = (state_453739[(2)]);
var state_453739__$1 = state_453739;
if(cljs.core.truth_(inst_453724)){
var statearr_453755_453853 = state_453739__$1;
(statearr_453755_453853[(1)] = (23));

} else {
var statearr_453756_453854 = state_453739__$1;
(statearr_453756_453854[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (6))){
var inst_453670 = (state_453739[(8)]);
var inst_453720 = (state_453739[(11)]);
var inst_453718 = (state_453739[(7)]);
var inst_453718__$1 = topic_fn.call(null,inst_453670);
var inst_453719 = cljs.core.deref.call(null,mults);
var inst_453720__$1 = cljs.core.get.call(null,inst_453719,inst_453718__$1);
var state_453739__$1 = (function (){var statearr_453758 = state_453739;
(statearr_453758[(11)] = inst_453720__$1);

(statearr_453758[(7)] = inst_453718__$1);

return statearr_453758;
})();
if(cljs.core.truth_(inst_453720__$1)){
var statearr_453760_453855 = state_453739__$1;
(statearr_453760_453855[(1)] = (19));

} else {
var statearr_453761_453857 = state_453739__$1;
(statearr_453761_453857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (25))){
var inst_453729 = (state_453739[(2)]);
var state_453739__$1 = state_453739;
var statearr_453763_453858 = state_453739__$1;
(statearr_453763_453858[(2)] = inst_453729);

(statearr_453763_453858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (17))){
var inst_453694 = (state_453739[(10)]);
var inst_453703 = cljs.core.first.call(null,inst_453694);
var inst_453704 = cljs.core.async.muxch_STAR_.call(null,inst_453703);
var inst_453705 = cljs.core.async.close_BANG_.call(null,inst_453704);
var inst_453706 = cljs.core.next.call(null,inst_453694);
var inst_453680 = inst_453706;
var inst_453681 = null;
var inst_453682 = (0);
var inst_453683 = (0);
var state_453739__$1 = (function (){var statearr_453764 = state_453739;
(statearr_453764[(12)] = inst_453705);

(statearr_453764[(13)] = inst_453682);

(statearr_453764[(14)] = inst_453683);

(statearr_453764[(15)] = inst_453680);

(statearr_453764[(16)] = inst_453681);

return statearr_453764;
})();
var statearr_453765_453863 = state_453739__$1;
(statearr_453765_453863[(2)] = null);

(statearr_453765_453863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (3))){
var inst_453737 = (state_453739[(2)]);
var state_453739__$1 = state_453739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_453739__$1,inst_453737);
} else {
if((state_val_453740 === (12))){
var inst_453714 = (state_453739[(2)]);
var state_453739__$1 = state_453739;
var statearr_453766_453866 = state_453739__$1;
(statearr_453766_453866[(2)] = inst_453714);

(statearr_453766_453866[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (2))){
var state_453739__$1 = state_453739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453739__$1,(4),ch);
} else {
if((state_val_453740 === (23))){
var state_453739__$1 = state_453739;
var statearr_453767_453868 = state_453739__$1;
(statearr_453767_453868[(2)] = null);

(statearr_453767_453868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (19))){
var inst_453670 = (state_453739[(8)]);
var inst_453720 = (state_453739[(11)]);
var inst_453722 = cljs.core.async.muxch_STAR_.call(null,inst_453720);
var state_453739__$1 = state_453739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_453739__$1,(22),inst_453722,inst_453670);
} else {
if((state_val_453740 === (11))){
var inst_453694 = (state_453739[(10)]);
var inst_453680 = (state_453739[(15)]);
var inst_453694__$1 = cljs.core.seq.call(null,inst_453680);
var state_453739__$1 = (function (){var statearr_453770 = state_453739;
(statearr_453770[(10)] = inst_453694__$1);

return statearr_453770;
})();
if(inst_453694__$1){
var statearr_453771_453878 = state_453739__$1;
(statearr_453771_453878[(1)] = (13));

} else {
var statearr_453772_453879 = state_453739__$1;
(statearr_453772_453879[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (9))){
var inst_453716 = (state_453739[(2)]);
var state_453739__$1 = state_453739;
var statearr_453773_453881 = state_453739__$1;
(statearr_453773_453881[(2)] = inst_453716);

(statearr_453773_453881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (5))){
var inst_453677 = cljs.core.deref.call(null,mults);
var inst_453678 = cljs.core.vals.call(null,inst_453677);
var inst_453679 = cljs.core.seq.call(null,inst_453678);
var inst_453680 = inst_453679;
var inst_453681 = null;
var inst_453682 = (0);
var inst_453683 = (0);
var state_453739__$1 = (function (){var statearr_453774 = state_453739;
(statearr_453774[(13)] = inst_453682);

(statearr_453774[(14)] = inst_453683);

(statearr_453774[(15)] = inst_453680);

(statearr_453774[(16)] = inst_453681);

return statearr_453774;
})();
var statearr_453775_453885 = state_453739__$1;
(statearr_453775_453885[(2)] = null);

(statearr_453775_453885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (14))){
var state_453739__$1 = state_453739;
var statearr_453779_453888 = state_453739__$1;
(statearr_453779_453888[(2)] = null);

(statearr_453779_453888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (16))){
var inst_453694 = (state_453739[(10)]);
var inst_453698 = cljs.core.chunk_first.call(null,inst_453694);
var inst_453699 = cljs.core.chunk_rest.call(null,inst_453694);
var inst_453700 = cljs.core.count.call(null,inst_453698);
var inst_453680 = inst_453699;
var inst_453681 = inst_453698;
var inst_453682 = inst_453700;
var inst_453683 = (0);
var state_453739__$1 = (function (){var statearr_453780 = state_453739;
(statearr_453780[(13)] = inst_453682);

(statearr_453780[(14)] = inst_453683);

(statearr_453780[(15)] = inst_453680);

(statearr_453780[(16)] = inst_453681);

return statearr_453780;
})();
var statearr_453781_453897 = state_453739__$1;
(statearr_453781_453897[(2)] = null);

(statearr_453781_453897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (10))){
var inst_453682 = (state_453739[(13)]);
var inst_453683 = (state_453739[(14)]);
var inst_453680 = (state_453739[(15)]);
var inst_453681 = (state_453739[(16)]);
var inst_453688 = cljs.core._nth.call(null,inst_453681,inst_453683);
var inst_453689 = cljs.core.async.muxch_STAR_.call(null,inst_453688);
var inst_453690 = cljs.core.async.close_BANG_.call(null,inst_453689);
var inst_453691 = (inst_453683 + (1));
var tmp453776 = inst_453682;
var tmp453777 = inst_453680;
var tmp453778 = inst_453681;
var inst_453680__$1 = tmp453777;
var inst_453681__$1 = tmp453778;
var inst_453682__$1 = tmp453776;
var inst_453683__$1 = inst_453691;
var state_453739__$1 = (function (){var statearr_453784 = state_453739;
(statearr_453784[(17)] = inst_453690);

(statearr_453784[(13)] = inst_453682__$1);

(statearr_453784[(14)] = inst_453683__$1);

(statearr_453784[(15)] = inst_453680__$1);

(statearr_453784[(16)] = inst_453681__$1);

return statearr_453784;
})();
var statearr_453786_453900 = state_453739__$1;
(statearr_453786_453900[(2)] = null);

(statearr_453786_453900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (18))){
var inst_453709 = (state_453739[(2)]);
var state_453739__$1 = state_453739;
var statearr_453787_453901 = state_453739__$1;
(statearr_453787_453901[(2)] = inst_453709);

(statearr_453787_453901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_453740 === (8))){
var inst_453682 = (state_453739[(13)]);
var inst_453683 = (state_453739[(14)]);
var inst_453685 = (inst_453683 < inst_453682);
var inst_453686 = inst_453685;
var state_453739__$1 = state_453739;
if(cljs.core.truth_(inst_453686)){
var statearr_453788_453902 = state_453739__$1;
(statearr_453788_453902[(1)] = (10));

} else {
var statearr_453789_453903 = state_453739__$1;
(statearr_453789_453903[(1)] = (11));

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
});})(c__38100__auto___453819,mults,ensure_mult,p))
;
return ((function (switch__38079__auto__,c__38100__auto___453819,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_453793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_453793[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_453793[(1)] = (1));

return statearr_453793;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_453739){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_453739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e453794){if((e453794 instanceof Object)){
var ex__38083__auto__ = e453794;
var statearr_453796_453910 = state_453739;
(statearr_453796_453910[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_453739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e453794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__453912 = state_453739;
state_453739 = G__453912;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_453739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_453739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___453819,mults,ensure_mult,p))
})();
var state__38102__auto__ = (function (){var statearr_453798 = f__38101__auto__.call(null);
(statearr_453798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___453819);

return statearr_453798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___453819,mults,ensure_mult,p))
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
var args453920 = [];
var len__36260__auto___453928 = arguments.length;
var i__36261__auto___453929 = (0);
while(true){
if((i__36261__auto___453929 < len__36260__auto___453928)){
args453920.push((arguments[i__36261__auto___453929]));

var G__453930 = (i__36261__auto___453929 + (1));
i__36261__auto___453929 = G__453930;
continue;
} else {
}
break;
}

var G__453925 = args453920.length;
switch (G__453925) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args453920.length)].join('')));

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
var args453937 = [];
var len__36260__auto___453947 = arguments.length;
var i__36261__auto___453948 = (0);
while(true){
if((i__36261__auto___453948 < len__36260__auto___453947)){
args453937.push((arguments[i__36261__auto___453948]));

var G__453949 = (i__36261__auto___453948 + (1));
i__36261__auto___453948 = G__453949;
continue;
} else {
}
break;
}

var G__453946 = args453937.length;
switch (G__453946) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args453937.length)].join('')));

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
var args453952 = [];
var len__36260__auto___454047 = arguments.length;
var i__36261__auto___454048 = (0);
while(true){
if((i__36261__auto___454048 < len__36260__auto___454047)){
args453952.push((arguments[i__36261__auto___454048]));

var G__454055 = (i__36261__auto___454048 + (1));
i__36261__auto___454048 = G__454055;
continue;
} else {
}
break;
}

var G__453954 = args453952.length;
switch (G__453954) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args453952.length)].join('')));

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
var c__38100__auto___454059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___454059,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___454059,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_453999){
var state_val_454000 = (state_453999[(1)]);
if((state_val_454000 === (7))){
var state_453999__$1 = state_453999;
var statearr_454002_454060 = state_453999__$1;
(statearr_454002_454060[(2)] = null);

(statearr_454002_454060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454000 === (1))){
var state_453999__$1 = state_453999;
var statearr_454003_454061 = state_453999__$1;
(statearr_454003_454061[(2)] = null);

(statearr_454003_454061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454000 === (4))){
var inst_453962 = (state_453999[(7)]);
var inst_453964 = (inst_453962 < cnt);
var state_453999__$1 = state_453999;
if(cljs.core.truth_(inst_453964)){
var statearr_454005_454065 = state_453999__$1;
(statearr_454005_454065[(1)] = (6));

} else {
var statearr_454006_454066 = state_453999__$1;
(statearr_454006_454066[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454000 === (15))){
var inst_453995 = (state_453999[(2)]);
var state_453999__$1 = state_453999;
var statearr_454007_454067 = state_453999__$1;
(statearr_454007_454067[(2)] = inst_453995);

(statearr_454007_454067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454000 === (13))){
var inst_453988 = cljs.core.async.close_BANG_.call(null,out);
var state_453999__$1 = state_453999;
var statearr_454008_454068 = state_453999__$1;
(statearr_454008_454068[(2)] = inst_453988);

(statearr_454008_454068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454000 === (6))){
var state_453999__$1 = state_453999;
var statearr_454015_454069 = state_453999__$1;
(statearr_454015_454069[(2)] = null);

(statearr_454015_454069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454000 === (3))){
var inst_453997 = (state_453999[(2)]);
var state_453999__$1 = state_453999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_453999__$1,inst_453997);
} else {
if((state_val_454000 === (12))){
var inst_453985 = (state_453999[(8)]);
var inst_453985__$1 = (state_453999[(2)]);
var inst_453986 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_453985__$1);
var state_453999__$1 = (function (){var statearr_454017 = state_453999;
(statearr_454017[(8)] = inst_453985__$1);

return statearr_454017;
})();
if(cljs.core.truth_(inst_453986)){
var statearr_454018_454070 = state_453999__$1;
(statearr_454018_454070[(1)] = (13));

} else {
var statearr_454019_454071 = state_453999__$1;
(statearr_454019_454071[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454000 === (2))){
var inst_453960 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_453962 = (0);
var state_453999__$1 = (function (){var statearr_454021 = state_453999;
(statearr_454021[(9)] = inst_453960);

(statearr_454021[(7)] = inst_453962);

return statearr_454021;
})();
var statearr_454022_454073 = state_453999__$1;
(statearr_454022_454073[(2)] = null);

(statearr_454022_454073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454000 === (11))){
var inst_453962 = (state_453999[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_453999,(10),Object,null,(9));
var inst_453971 = chs__$1.call(null,inst_453962);
var inst_453972 = done.call(null,inst_453962);
var inst_453973 = cljs.core.async.take_BANG_.call(null,inst_453971,inst_453972);
var state_453999__$1 = state_453999;
var statearr_454024_454074 = state_453999__$1;
(statearr_454024_454074[(2)] = inst_453973);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_453999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454000 === (9))){
var inst_453962 = (state_453999[(7)]);
var inst_453975 = (state_453999[(2)]);
var inst_453976 = (inst_453962 + (1));
var inst_453962__$1 = inst_453976;
var state_453999__$1 = (function (){var statearr_454025 = state_453999;
(statearr_454025[(10)] = inst_453975);

(statearr_454025[(7)] = inst_453962__$1);

return statearr_454025;
})();
var statearr_454026_454075 = state_453999__$1;
(statearr_454026_454075[(2)] = null);

(statearr_454026_454075[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454000 === (5))){
var inst_453982 = (state_453999[(2)]);
var state_453999__$1 = (function (){var statearr_454028 = state_453999;
(statearr_454028[(11)] = inst_453982);

return statearr_454028;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_453999__$1,(12),dchan);
} else {
if((state_val_454000 === (14))){
var inst_453985 = (state_453999[(8)]);
var inst_453990 = cljs.core.apply.call(null,f,inst_453985);
var state_453999__$1 = state_453999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_453999__$1,(16),out,inst_453990);
} else {
if((state_val_454000 === (16))){
var inst_453992 = (state_453999[(2)]);
var state_453999__$1 = (function (){var statearr_454030 = state_453999;
(statearr_454030[(12)] = inst_453992);

return statearr_454030;
})();
var statearr_454031_454076 = state_453999__$1;
(statearr_454031_454076[(2)] = null);

(statearr_454031_454076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454000 === (10))){
var inst_453966 = (state_453999[(2)]);
var inst_453967 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_453999__$1 = (function (){var statearr_454032 = state_453999;
(statearr_454032[(13)] = inst_453966);

return statearr_454032;
})();
var statearr_454033_454077 = state_453999__$1;
(statearr_454033_454077[(2)] = inst_453967);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_453999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454000 === (8))){
var inst_453980 = (state_453999[(2)]);
var state_453999__$1 = state_453999;
var statearr_454035_454079 = state_453999__$1;
(statearr_454035_454079[(2)] = inst_453980);

(statearr_454035_454079[(1)] = (5));


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
});})(c__38100__auto___454059,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38079__auto__,c__38100__auto___454059,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_454041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_454041[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_454041[(1)] = (1));

return statearr_454041;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_453999){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_453999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e454042){if((e454042 instanceof Object)){
var ex__38083__auto__ = e454042;
var statearr_454043_454081 = state_453999;
(statearr_454043_454081[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_453999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e454042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__454082 = state_453999;
state_453999 = G__454082;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_453999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_453999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___454059,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38102__auto__ = (function (){var statearr_454045 = f__38101__auto__.call(null);
(statearr_454045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___454059);

return statearr_454045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___454059,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args454084 = [];
var len__36260__auto___454146 = arguments.length;
var i__36261__auto___454147 = (0);
while(true){
if((i__36261__auto___454147 < len__36260__auto___454146)){
args454084.push((arguments[i__36261__auto___454147]));

var G__454148 = (i__36261__auto___454147 + (1));
i__36261__auto___454147 = G__454148;
continue;
} else {
}
break;
}

var G__454086 = args454084.length;
switch (G__454086) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454084.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___454151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___454151,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___454151,out){
return (function (state_454117){
var state_val_454118 = (state_454117[(1)]);
if((state_val_454118 === (7))){
var inst_454096 = (state_454117[(7)]);
var inst_454097 = (state_454117[(8)]);
var inst_454096__$1 = (state_454117[(2)]);
var inst_454097__$1 = cljs.core.nth.call(null,inst_454096__$1,(0),null);
var inst_454098 = cljs.core.nth.call(null,inst_454096__$1,(1),null);
var inst_454099 = (inst_454097__$1 == null);
var state_454117__$1 = (function (){var statearr_454120 = state_454117;
(statearr_454120[(7)] = inst_454096__$1);

(statearr_454120[(9)] = inst_454098);

(statearr_454120[(8)] = inst_454097__$1);

return statearr_454120;
})();
if(cljs.core.truth_(inst_454099)){
var statearr_454121_454155 = state_454117__$1;
(statearr_454121_454155[(1)] = (8));

} else {
var statearr_454122_454157 = state_454117__$1;
(statearr_454122_454157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454118 === (1))){
var inst_454088 = cljs.core.vec.call(null,chs);
var inst_454089 = inst_454088;
var state_454117__$1 = (function (){var statearr_454123 = state_454117;
(statearr_454123[(10)] = inst_454089);

return statearr_454123;
})();
var statearr_454124_454158 = state_454117__$1;
(statearr_454124_454158[(2)] = null);

(statearr_454124_454158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454118 === (4))){
var inst_454089 = (state_454117[(10)]);
var state_454117__$1 = state_454117;
return cljs.core.async.ioc_alts_BANG_.call(null,state_454117__$1,(7),inst_454089);
} else {
if((state_val_454118 === (6))){
var inst_454113 = (state_454117[(2)]);
var state_454117__$1 = state_454117;
var statearr_454125_454161 = state_454117__$1;
(statearr_454125_454161[(2)] = inst_454113);

(statearr_454125_454161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454118 === (3))){
var inst_454115 = (state_454117[(2)]);
var state_454117__$1 = state_454117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_454117__$1,inst_454115);
} else {
if((state_val_454118 === (2))){
var inst_454089 = (state_454117[(10)]);
var inst_454091 = cljs.core.count.call(null,inst_454089);
var inst_454092 = (inst_454091 > (0));
var state_454117__$1 = state_454117;
if(cljs.core.truth_(inst_454092)){
var statearr_454127_454163 = state_454117__$1;
(statearr_454127_454163[(1)] = (4));

} else {
var statearr_454128_454165 = state_454117__$1;
(statearr_454128_454165[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454118 === (11))){
var inst_454089 = (state_454117[(10)]);
var inst_454106 = (state_454117[(2)]);
var tmp454126 = inst_454089;
var inst_454089__$1 = tmp454126;
var state_454117__$1 = (function (){var statearr_454129 = state_454117;
(statearr_454129[(11)] = inst_454106);

(statearr_454129[(10)] = inst_454089__$1);

return statearr_454129;
})();
var statearr_454130_454166 = state_454117__$1;
(statearr_454130_454166[(2)] = null);

(statearr_454130_454166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454118 === (9))){
var inst_454097 = (state_454117[(8)]);
var state_454117__$1 = state_454117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_454117__$1,(11),out,inst_454097);
} else {
if((state_val_454118 === (5))){
var inst_454111 = cljs.core.async.close_BANG_.call(null,out);
var state_454117__$1 = state_454117;
var statearr_454132_454170 = state_454117__$1;
(statearr_454132_454170[(2)] = inst_454111);

(statearr_454132_454170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454118 === (10))){
var inst_454109 = (state_454117[(2)]);
var state_454117__$1 = state_454117;
var statearr_454133_454171 = state_454117__$1;
(statearr_454133_454171[(2)] = inst_454109);

(statearr_454133_454171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454118 === (8))){
var inst_454096 = (state_454117[(7)]);
var inst_454098 = (state_454117[(9)]);
var inst_454089 = (state_454117[(10)]);
var inst_454097 = (state_454117[(8)]);
var inst_454101 = (function (){var cs = inst_454089;
var vec__454094 = inst_454096;
var v = inst_454097;
var c = inst_454098;
return ((function (cs,vec__454094,v,c,inst_454096,inst_454098,inst_454089,inst_454097,state_val_454118,c__38100__auto___454151,out){
return (function (p1__454083_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__454083_SHARP_);
});
;})(cs,vec__454094,v,c,inst_454096,inst_454098,inst_454089,inst_454097,state_val_454118,c__38100__auto___454151,out))
})();
var inst_454102 = cljs.core.filterv.call(null,inst_454101,inst_454089);
var inst_454089__$1 = inst_454102;
var state_454117__$1 = (function (){var statearr_454134 = state_454117;
(statearr_454134[(10)] = inst_454089__$1);

return statearr_454134;
})();
var statearr_454135_454176 = state_454117__$1;
(statearr_454135_454176[(2)] = null);

(statearr_454135_454176[(1)] = (2));


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
});})(c__38100__auto___454151,out))
;
return ((function (switch__38079__auto__,c__38100__auto___454151,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_454141 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_454141[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_454141[(1)] = (1));

return statearr_454141;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_454117){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_454117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e454143){if((e454143 instanceof Object)){
var ex__38083__auto__ = e454143;
var statearr_454144_454180 = state_454117;
(statearr_454144_454180[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_454117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e454143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__454181 = state_454117;
state_454117 = G__454181;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_454117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_454117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___454151,out))
})();
var state__38102__auto__ = (function (){var statearr_454145 = f__38101__auto__.call(null);
(statearr_454145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___454151);

return statearr_454145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___454151,out))
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
var args454182 = [];
var len__36260__auto___454231 = arguments.length;
var i__36261__auto___454232 = (0);
while(true){
if((i__36261__auto___454232 < len__36260__auto___454231)){
args454182.push((arguments[i__36261__auto___454232]));

var G__454234 = (i__36261__auto___454232 + (1));
i__36261__auto___454232 = G__454234;
continue;
} else {
}
break;
}

var G__454184 = args454182.length;
switch (G__454184) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454182.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___454241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___454241,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___454241,out){
return (function (state_454208){
var state_val_454209 = (state_454208[(1)]);
if((state_val_454209 === (7))){
var inst_454190 = (state_454208[(7)]);
var inst_454190__$1 = (state_454208[(2)]);
var inst_454191 = (inst_454190__$1 == null);
var inst_454192 = cljs.core.not.call(null,inst_454191);
var state_454208__$1 = (function (){var statearr_454210 = state_454208;
(statearr_454210[(7)] = inst_454190__$1);

return statearr_454210;
})();
if(inst_454192){
var statearr_454211_454242 = state_454208__$1;
(statearr_454211_454242[(1)] = (8));

} else {
var statearr_454212_454243 = state_454208__$1;
(statearr_454212_454243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454209 === (1))){
var inst_454185 = (0);
var state_454208__$1 = (function (){var statearr_454213 = state_454208;
(statearr_454213[(8)] = inst_454185);

return statearr_454213;
})();
var statearr_454214_454246 = state_454208__$1;
(statearr_454214_454246[(2)] = null);

(statearr_454214_454246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454209 === (4))){
var state_454208__$1 = state_454208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_454208__$1,(7),ch);
} else {
if((state_val_454209 === (6))){
var inst_454203 = (state_454208[(2)]);
var state_454208__$1 = state_454208;
var statearr_454215_454248 = state_454208__$1;
(statearr_454215_454248[(2)] = inst_454203);

(statearr_454215_454248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454209 === (3))){
var inst_454205 = (state_454208[(2)]);
var inst_454206 = cljs.core.async.close_BANG_.call(null,out);
var state_454208__$1 = (function (){var statearr_454216 = state_454208;
(statearr_454216[(9)] = inst_454205);

return statearr_454216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_454208__$1,inst_454206);
} else {
if((state_val_454209 === (2))){
var inst_454185 = (state_454208[(8)]);
var inst_454187 = (inst_454185 < n);
var state_454208__$1 = state_454208;
if(cljs.core.truth_(inst_454187)){
var statearr_454217_454253 = state_454208__$1;
(statearr_454217_454253[(1)] = (4));

} else {
var statearr_454218_454254 = state_454208__$1;
(statearr_454218_454254[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454209 === (11))){
var inst_454185 = (state_454208[(8)]);
var inst_454195 = (state_454208[(2)]);
var inst_454196 = (inst_454185 + (1));
var inst_454185__$1 = inst_454196;
var state_454208__$1 = (function (){var statearr_454219 = state_454208;
(statearr_454219[(8)] = inst_454185__$1);

(statearr_454219[(10)] = inst_454195);

return statearr_454219;
})();
var statearr_454220_454256 = state_454208__$1;
(statearr_454220_454256[(2)] = null);

(statearr_454220_454256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454209 === (9))){
var state_454208__$1 = state_454208;
var statearr_454221_454258 = state_454208__$1;
(statearr_454221_454258[(2)] = null);

(statearr_454221_454258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454209 === (5))){
var state_454208__$1 = state_454208;
var statearr_454222_454259 = state_454208__$1;
(statearr_454222_454259[(2)] = null);

(statearr_454222_454259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454209 === (10))){
var inst_454200 = (state_454208[(2)]);
var state_454208__$1 = state_454208;
var statearr_454223_454263 = state_454208__$1;
(statearr_454223_454263[(2)] = inst_454200);

(statearr_454223_454263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454209 === (8))){
var inst_454190 = (state_454208[(7)]);
var state_454208__$1 = state_454208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_454208__$1,(11),out,inst_454190);
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
});})(c__38100__auto___454241,out))
;
return ((function (switch__38079__auto__,c__38100__auto___454241,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_454227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_454227[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_454227[(1)] = (1));

return statearr_454227;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_454208){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_454208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e454228){if((e454228 instanceof Object)){
var ex__38083__auto__ = e454228;
var statearr_454229_454269 = state_454208;
(statearr_454229_454269[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_454208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e454228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__454270 = state_454208;
state_454208 = G__454270;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_454208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_454208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___454241,out))
})();
var state__38102__auto__ = (function (){var statearr_454230 = f__38101__auto__.call(null);
(statearr_454230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___454241);

return statearr_454230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___454241,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async454288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async454288 = (function (map_LT_,f,ch,meta454289){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta454289 = meta454289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async454288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_454290,meta454289__$1){
var self__ = this;
var _454290__$1 = this;
return (new cljs.core.async.t_cljs$core$async454288(self__.map_LT_,self__.f,self__.ch,meta454289__$1));
});

cljs.core.async.t_cljs$core$async454288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_454290){
var self__ = this;
var _454290__$1 = this;
return self__.meta454289;
});

cljs.core.async.t_cljs$core$async454288.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async454288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async454288.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async454288.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async454288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async454291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async454291 = (function (map_LT_,f,ch,meta454289,_,fn1,meta454292){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta454289 = meta454289;
this._ = _;
this.fn1 = fn1;
this.meta454292 = meta454292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async454291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_454293,meta454292__$1){
var self__ = this;
var _454293__$1 = this;
return (new cljs.core.async.t_cljs$core$async454291(self__.map_LT_,self__.f,self__.ch,self__.meta454289,self__._,self__.fn1,meta454292__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async454291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_454293){
var self__ = this;
var _454293__$1 = this;
return self__.meta454292;
});})(___$1))
;

cljs.core.async.t_cljs$core$async454291.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async454291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async454291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__454271_SHARP_){
return f1.call(null,(((p1__454271_SHARP_ == null))?null:self__.f.call(null,p1__454271_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async454291.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta454289","meta454289",-1408582825,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async454288","cljs.core.async/t_cljs$core$async454288",-16252180,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta454292","meta454292",-974257279,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async454291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async454291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async454291";

cljs.core.async.t_cljs$core$async454291.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async454291");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async454291 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async454291(map_LT___$1,f__$1,ch__$1,meta454289__$1,___$2,fn1__$1,meta454292){
return (new cljs.core.async.t_cljs$core$async454291(map_LT___$1,f__$1,ch__$1,meta454289__$1,___$2,fn1__$1,meta454292));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async454291(self__.map_LT_,self__.f,self__.ch,self__.meta454289,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async454288.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async454288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async454288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta454289","meta454289",-1408582825,null)], null);
});

cljs.core.async.t_cljs$core$async454288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async454288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async454288";

cljs.core.async.t_cljs$core$async454288.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async454288");
});

cljs.core.async.__GT_t_cljs$core$async454288 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async454288(map_LT___$1,f__$1,ch__$1,meta454289){
return (new cljs.core.async.t_cljs$core$async454288(map_LT___$1,f__$1,ch__$1,meta454289));
});

}

return (new cljs.core.async.t_cljs$core$async454288(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async454330 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async454330 = (function (map_GT_,f,ch,meta454331){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta454331 = meta454331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async454330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_454332,meta454331__$1){
var self__ = this;
var _454332__$1 = this;
return (new cljs.core.async.t_cljs$core$async454330(self__.map_GT_,self__.f,self__.ch,meta454331__$1));
});

cljs.core.async.t_cljs$core$async454330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_454332){
var self__ = this;
var _454332__$1 = this;
return self__.meta454331;
});

cljs.core.async.t_cljs$core$async454330.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async454330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async454330.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async454330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async454330.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async454330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async454330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta454331","meta454331",2104478327,null)], null);
});

cljs.core.async.t_cljs$core$async454330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async454330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async454330";

cljs.core.async.t_cljs$core$async454330.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async454330");
});

cljs.core.async.__GT_t_cljs$core$async454330 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async454330(map_GT___$1,f__$1,ch__$1,meta454331){
return (new cljs.core.async.t_cljs$core$async454330(map_GT___$1,f__$1,ch__$1,meta454331));
});

}

return (new cljs.core.async.t_cljs$core$async454330(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async454350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async454350 = (function (filter_GT_,p,ch,meta454351){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta454351 = meta454351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async454350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_454352,meta454351__$1){
var self__ = this;
var _454352__$1 = this;
return (new cljs.core.async.t_cljs$core$async454350(self__.filter_GT_,self__.p,self__.ch,meta454351__$1));
});

cljs.core.async.t_cljs$core$async454350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_454352){
var self__ = this;
var _454352__$1 = this;
return self__.meta454351;
});

cljs.core.async.t_cljs$core$async454350.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async454350.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async454350.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async454350.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async454350.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async454350.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async454350.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async454350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta454351","meta454351",-701800777,null)], null);
});

cljs.core.async.t_cljs$core$async454350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async454350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async454350";

cljs.core.async.t_cljs$core$async454350.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async454350");
});

cljs.core.async.__GT_t_cljs$core$async454350 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async454350(filter_GT___$1,p__$1,ch__$1,meta454351){
return (new cljs.core.async.t_cljs$core$async454350(filter_GT___$1,p__$1,ch__$1,meta454351));
});

}

return (new cljs.core.async.t_cljs$core$async454350(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args454360 = [];
var len__36260__auto___454411 = arguments.length;
var i__36261__auto___454412 = (0);
while(true){
if((i__36261__auto___454412 < len__36260__auto___454411)){
args454360.push((arguments[i__36261__auto___454412]));

var G__454413 = (i__36261__auto___454412 + (1));
i__36261__auto___454412 = G__454413;
continue;
} else {
}
break;
}

var G__454362 = args454360.length;
switch (G__454362) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454360.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___454418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___454418,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___454418,out){
return (function (state_454385){
var state_val_454386 = (state_454385[(1)]);
if((state_val_454386 === (7))){
var inst_454381 = (state_454385[(2)]);
var state_454385__$1 = state_454385;
var statearr_454388_454421 = state_454385__$1;
(statearr_454388_454421[(2)] = inst_454381);

(statearr_454388_454421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454386 === (1))){
var state_454385__$1 = state_454385;
var statearr_454389_454424 = state_454385__$1;
(statearr_454389_454424[(2)] = null);

(statearr_454389_454424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454386 === (4))){
var inst_454367 = (state_454385[(7)]);
var inst_454367__$1 = (state_454385[(2)]);
var inst_454368 = (inst_454367__$1 == null);
var state_454385__$1 = (function (){var statearr_454390 = state_454385;
(statearr_454390[(7)] = inst_454367__$1);

return statearr_454390;
})();
if(cljs.core.truth_(inst_454368)){
var statearr_454391_454427 = state_454385__$1;
(statearr_454391_454427[(1)] = (5));

} else {
var statearr_454393_454428 = state_454385__$1;
(statearr_454393_454428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454386 === (6))){
var inst_454367 = (state_454385[(7)]);
var inst_454372 = p.call(null,inst_454367);
var state_454385__$1 = state_454385;
if(cljs.core.truth_(inst_454372)){
var statearr_454395_454429 = state_454385__$1;
(statearr_454395_454429[(1)] = (8));

} else {
var statearr_454396_454430 = state_454385__$1;
(statearr_454396_454430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454386 === (3))){
var inst_454383 = (state_454385[(2)]);
var state_454385__$1 = state_454385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_454385__$1,inst_454383);
} else {
if((state_val_454386 === (2))){
var state_454385__$1 = state_454385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_454385__$1,(4),ch);
} else {
if((state_val_454386 === (11))){
var inst_454375 = (state_454385[(2)]);
var state_454385__$1 = state_454385;
var statearr_454399_454433 = state_454385__$1;
(statearr_454399_454433[(2)] = inst_454375);

(statearr_454399_454433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454386 === (9))){
var state_454385__$1 = state_454385;
var statearr_454400_454436 = state_454385__$1;
(statearr_454400_454436[(2)] = null);

(statearr_454400_454436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454386 === (5))){
var inst_454370 = cljs.core.async.close_BANG_.call(null,out);
var state_454385__$1 = state_454385;
var statearr_454401_454437 = state_454385__$1;
(statearr_454401_454437[(2)] = inst_454370);

(statearr_454401_454437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454386 === (10))){
var inst_454378 = (state_454385[(2)]);
var state_454385__$1 = (function (){var statearr_454402 = state_454385;
(statearr_454402[(8)] = inst_454378);

return statearr_454402;
})();
var statearr_454403_454438 = state_454385__$1;
(statearr_454403_454438[(2)] = null);

(statearr_454403_454438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454386 === (8))){
var inst_454367 = (state_454385[(7)]);
var state_454385__$1 = state_454385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_454385__$1,(11),out,inst_454367);
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
});})(c__38100__auto___454418,out))
;
return ((function (switch__38079__auto__,c__38100__auto___454418,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_454407 = [null,null,null,null,null,null,null,null,null];
(statearr_454407[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_454407[(1)] = (1));

return statearr_454407;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_454385){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_454385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e454408){if((e454408 instanceof Object)){
var ex__38083__auto__ = e454408;
var statearr_454409_454439 = state_454385;
(statearr_454409_454439[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_454385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e454408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__454441 = state_454385;
state_454385 = G__454441;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_454385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_454385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___454418,out))
})();
var state__38102__auto__ = (function (){var statearr_454410 = f__38101__auto__.call(null);
(statearr_454410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___454418);

return statearr_454410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___454418,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args454445 = [];
var len__36260__auto___454451 = arguments.length;
var i__36261__auto___454452 = (0);
while(true){
if((i__36261__auto___454452 < len__36260__auto___454451)){
args454445.push((arguments[i__36261__auto___454452]));

var G__454453 = (i__36261__auto___454452 + (1));
i__36261__auto___454452 = G__454453;
continue;
} else {
}
break;
}

var G__454450 = args454445.length;
switch (G__454450) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454445.length)].join('')));

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
return (function (state_454635){
var state_val_454637 = (state_454635[(1)]);
if((state_val_454637 === (7))){
var inst_454630 = (state_454635[(2)]);
var state_454635__$1 = state_454635;
var statearr_454639_454688 = state_454635__$1;
(statearr_454639_454688[(2)] = inst_454630);

(statearr_454639_454688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (20))){
var inst_454600 = (state_454635[(7)]);
var inst_454611 = (state_454635[(2)]);
var inst_454612 = cljs.core.next.call(null,inst_454600);
var inst_454586 = inst_454612;
var inst_454587 = null;
var inst_454588 = (0);
var inst_454589 = (0);
var state_454635__$1 = (function (){var statearr_454644 = state_454635;
(statearr_454644[(8)] = inst_454586);

(statearr_454644[(9)] = inst_454611);

(statearr_454644[(10)] = inst_454589);

(statearr_454644[(11)] = inst_454588);

(statearr_454644[(12)] = inst_454587);

return statearr_454644;
})();
var statearr_454645_454689 = state_454635__$1;
(statearr_454645_454689[(2)] = null);

(statearr_454645_454689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (1))){
var state_454635__$1 = state_454635;
var statearr_454646_454690 = state_454635__$1;
(statearr_454646_454690[(2)] = null);

(statearr_454646_454690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (4))){
var inst_454575 = (state_454635[(13)]);
var inst_454575__$1 = (state_454635[(2)]);
var inst_454576 = (inst_454575__$1 == null);
var state_454635__$1 = (function (){var statearr_454647 = state_454635;
(statearr_454647[(13)] = inst_454575__$1);

return statearr_454647;
})();
if(cljs.core.truth_(inst_454576)){
var statearr_454648_454691 = state_454635__$1;
(statearr_454648_454691[(1)] = (5));

} else {
var statearr_454649_454692 = state_454635__$1;
(statearr_454649_454692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (15))){
var state_454635__$1 = state_454635;
var statearr_454653_454693 = state_454635__$1;
(statearr_454653_454693[(2)] = null);

(statearr_454653_454693[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (21))){
var state_454635__$1 = state_454635;
var statearr_454654_454694 = state_454635__$1;
(statearr_454654_454694[(2)] = null);

(statearr_454654_454694[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (13))){
var inst_454586 = (state_454635[(8)]);
var inst_454589 = (state_454635[(10)]);
var inst_454588 = (state_454635[(11)]);
var inst_454587 = (state_454635[(12)]);
var inst_454596 = (state_454635[(2)]);
var inst_454597 = (inst_454589 + (1));
var tmp454650 = inst_454586;
var tmp454651 = inst_454588;
var tmp454652 = inst_454587;
var inst_454586__$1 = tmp454650;
var inst_454587__$1 = tmp454652;
var inst_454588__$1 = tmp454651;
var inst_454589__$1 = inst_454597;
var state_454635__$1 = (function (){var statearr_454655 = state_454635;
(statearr_454655[(8)] = inst_454586__$1);

(statearr_454655[(10)] = inst_454589__$1);

(statearr_454655[(11)] = inst_454588__$1);

(statearr_454655[(14)] = inst_454596);

(statearr_454655[(12)] = inst_454587__$1);

return statearr_454655;
})();
var statearr_454657_454696 = state_454635__$1;
(statearr_454657_454696[(2)] = null);

(statearr_454657_454696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (22))){
var state_454635__$1 = state_454635;
var statearr_454660_454704 = state_454635__$1;
(statearr_454660_454704[(2)] = null);

(statearr_454660_454704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (6))){
var inst_454575 = (state_454635[(13)]);
var inst_454584 = f.call(null,inst_454575);
var inst_454585 = cljs.core.seq.call(null,inst_454584);
var inst_454586 = inst_454585;
var inst_454587 = null;
var inst_454588 = (0);
var inst_454589 = (0);
var state_454635__$1 = (function (){var statearr_454661 = state_454635;
(statearr_454661[(8)] = inst_454586);

(statearr_454661[(10)] = inst_454589);

(statearr_454661[(11)] = inst_454588);

(statearr_454661[(12)] = inst_454587);

return statearr_454661;
})();
var statearr_454662_454712 = state_454635__$1;
(statearr_454662_454712[(2)] = null);

(statearr_454662_454712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (17))){
var inst_454600 = (state_454635[(7)]);
var inst_454604 = cljs.core.chunk_first.call(null,inst_454600);
var inst_454605 = cljs.core.chunk_rest.call(null,inst_454600);
var inst_454606 = cljs.core.count.call(null,inst_454604);
var inst_454586 = inst_454605;
var inst_454587 = inst_454604;
var inst_454588 = inst_454606;
var inst_454589 = (0);
var state_454635__$1 = (function (){var statearr_454663 = state_454635;
(statearr_454663[(8)] = inst_454586);

(statearr_454663[(10)] = inst_454589);

(statearr_454663[(11)] = inst_454588);

(statearr_454663[(12)] = inst_454587);

return statearr_454663;
})();
var statearr_454664_454713 = state_454635__$1;
(statearr_454664_454713[(2)] = null);

(statearr_454664_454713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (3))){
var inst_454632 = (state_454635[(2)]);
var state_454635__$1 = state_454635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_454635__$1,inst_454632);
} else {
if((state_val_454637 === (12))){
var inst_454620 = (state_454635[(2)]);
var state_454635__$1 = state_454635;
var statearr_454665_454714 = state_454635__$1;
(statearr_454665_454714[(2)] = inst_454620);

(statearr_454665_454714[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (2))){
var state_454635__$1 = state_454635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_454635__$1,(4),in$);
} else {
if((state_val_454637 === (23))){
var inst_454628 = (state_454635[(2)]);
var state_454635__$1 = state_454635;
var statearr_454666_454715 = state_454635__$1;
(statearr_454666_454715[(2)] = inst_454628);

(statearr_454666_454715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (19))){
var inst_454615 = (state_454635[(2)]);
var state_454635__$1 = state_454635;
var statearr_454667_454716 = state_454635__$1;
(statearr_454667_454716[(2)] = inst_454615);

(statearr_454667_454716[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (11))){
var inst_454586 = (state_454635[(8)]);
var inst_454600 = (state_454635[(7)]);
var inst_454600__$1 = cljs.core.seq.call(null,inst_454586);
var state_454635__$1 = (function (){var statearr_454668 = state_454635;
(statearr_454668[(7)] = inst_454600__$1);

return statearr_454668;
})();
if(inst_454600__$1){
var statearr_454669_454717 = state_454635__$1;
(statearr_454669_454717[(1)] = (14));

} else {
var statearr_454670_454718 = state_454635__$1;
(statearr_454670_454718[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (9))){
var inst_454622 = (state_454635[(2)]);
var inst_454623 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_454635__$1 = (function (){var statearr_454671 = state_454635;
(statearr_454671[(15)] = inst_454622);

return statearr_454671;
})();
if(cljs.core.truth_(inst_454623)){
var statearr_454672_454720 = state_454635__$1;
(statearr_454672_454720[(1)] = (21));

} else {
var statearr_454674_454722 = state_454635__$1;
(statearr_454674_454722[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (5))){
var inst_454578 = cljs.core.async.close_BANG_.call(null,out);
var state_454635__$1 = state_454635;
var statearr_454675_454723 = state_454635__$1;
(statearr_454675_454723[(2)] = inst_454578);

(statearr_454675_454723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (14))){
var inst_454600 = (state_454635[(7)]);
var inst_454602 = cljs.core.chunked_seq_QMARK_.call(null,inst_454600);
var state_454635__$1 = state_454635;
if(inst_454602){
var statearr_454676_454727 = state_454635__$1;
(statearr_454676_454727[(1)] = (17));

} else {
var statearr_454677_454728 = state_454635__$1;
(statearr_454677_454728[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (16))){
var inst_454618 = (state_454635[(2)]);
var state_454635__$1 = state_454635;
var statearr_454678_454729 = state_454635__$1;
(statearr_454678_454729[(2)] = inst_454618);

(statearr_454678_454729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454637 === (10))){
var inst_454589 = (state_454635[(10)]);
var inst_454587 = (state_454635[(12)]);
var inst_454594 = cljs.core._nth.call(null,inst_454587,inst_454589);
var state_454635__$1 = state_454635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_454635__$1,(13),out,inst_454594);
} else {
if((state_val_454637 === (18))){
var inst_454600 = (state_454635[(7)]);
var inst_454609 = cljs.core.first.call(null,inst_454600);
var state_454635__$1 = state_454635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_454635__$1,(20),out,inst_454609);
} else {
if((state_val_454637 === (8))){
var inst_454589 = (state_454635[(10)]);
var inst_454588 = (state_454635[(11)]);
var inst_454591 = (inst_454589 < inst_454588);
var inst_454592 = inst_454591;
var state_454635__$1 = state_454635;
if(cljs.core.truth_(inst_454592)){
var statearr_454679_454733 = state_454635__$1;
(statearr_454679_454733[(1)] = (10));

} else {
var statearr_454680_454734 = state_454635__$1;
(statearr_454680_454734[(1)] = (11));

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
var statearr_454684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_454684[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__);

(statearr_454684[(1)] = (1));

return statearr_454684;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1 = (function (state_454635){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_454635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e454685){if((e454685 instanceof Object)){
var ex__38083__auto__ = e454685;
var statearr_454686_454739 = state_454635;
(statearr_454686_454739[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_454635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e454685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__454741 = state_454635;
state_454635 = G__454741;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__ = function(state_454635){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1.call(this,state_454635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_454687 = f__38101__auto__.call(null);
(statearr_454687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_454687;
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
var args454745 = [];
var len__36260__auto___454748 = arguments.length;
var i__36261__auto___454749 = (0);
while(true){
if((i__36261__auto___454749 < len__36260__auto___454748)){
args454745.push((arguments[i__36261__auto___454749]));

var G__454750 = (i__36261__auto___454749 + (1));
i__36261__auto___454749 = G__454750;
continue;
} else {
}
break;
}

var G__454747 = args454745.length;
switch (G__454747) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454745.length)].join('')));

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
var args454754 = [];
var len__36260__auto___454761 = arguments.length;
var i__36261__auto___454762 = (0);
while(true){
if((i__36261__auto___454762 < len__36260__auto___454761)){
args454754.push((arguments[i__36261__auto___454762]));

var G__454763 = (i__36261__auto___454762 + (1));
i__36261__auto___454762 = G__454763;
continue;
} else {
}
break;
}

var G__454758 = args454754.length;
switch (G__454758) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454754.length)].join('')));

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
var args454766 = [];
var len__36260__auto___454829 = arguments.length;
var i__36261__auto___454830 = (0);
while(true){
if((i__36261__auto___454830 < len__36260__auto___454829)){
args454766.push((arguments[i__36261__auto___454830]));

var G__454831 = (i__36261__auto___454830 + (1));
i__36261__auto___454830 = G__454831;
continue;
} else {
}
break;
}

var G__454772 = args454766.length;
switch (G__454772) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454766.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___454837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___454837,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___454837,out){
return (function (state_454796){
var state_val_454797 = (state_454796[(1)]);
if((state_val_454797 === (7))){
var inst_454791 = (state_454796[(2)]);
var state_454796__$1 = state_454796;
var statearr_454798_454838 = state_454796__$1;
(statearr_454798_454838[(2)] = inst_454791);

(statearr_454798_454838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454797 === (1))){
var inst_454773 = null;
var state_454796__$1 = (function (){var statearr_454799 = state_454796;
(statearr_454799[(7)] = inst_454773);

return statearr_454799;
})();
var statearr_454800_454843 = state_454796__$1;
(statearr_454800_454843[(2)] = null);

(statearr_454800_454843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454797 === (4))){
var inst_454776 = (state_454796[(8)]);
var inst_454776__$1 = (state_454796[(2)]);
var inst_454777 = (inst_454776__$1 == null);
var inst_454778 = cljs.core.not.call(null,inst_454777);
var state_454796__$1 = (function (){var statearr_454805 = state_454796;
(statearr_454805[(8)] = inst_454776__$1);

return statearr_454805;
})();
if(inst_454778){
var statearr_454806_454848 = state_454796__$1;
(statearr_454806_454848[(1)] = (5));

} else {
var statearr_454807_454849 = state_454796__$1;
(statearr_454807_454849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454797 === (6))){
var state_454796__$1 = state_454796;
var statearr_454808_454850 = state_454796__$1;
(statearr_454808_454850[(2)] = null);

(statearr_454808_454850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454797 === (3))){
var inst_454793 = (state_454796[(2)]);
var inst_454794 = cljs.core.async.close_BANG_.call(null,out);
var state_454796__$1 = (function (){var statearr_454809 = state_454796;
(statearr_454809[(9)] = inst_454793);

return statearr_454809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_454796__$1,inst_454794);
} else {
if((state_val_454797 === (2))){
var state_454796__$1 = state_454796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_454796__$1,(4),ch);
} else {
if((state_val_454797 === (11))){
var inst_454776 = (state_454796[(8)]);
var inst_454785 = (state_454796[(2)]);
var inst_454773 = inst_454776;
var state_454796__$1 = (function (){var statearr_454810 = state_454796;
(statearr_454810[(7)] = inst_454773);

(statearr_454810[(10)] = inst_454785);

return statearr_454810;
})();
var statearr_454811_454855 = state_454796__$1;
(statearr_454811_454855[(2)] = null);

(statearr_454811_454855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454797 === (9))){
var inst_454776 = (state_454796[(8)]);
var state_454796__$1 = state_454796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_454796__$1,(11),out,inst_454776);
} else {
if((state_val_454797 === (5))){
var inst_454773 = (state_454796[(7)]);
var inst_454776 = (state_454796[(8)]);
var inst_454780 = cljs.core._EQ_.call(null,inst_454776,inst_454773);
var state_454796__$1 = state_454796;
if(inst_454780){
var statearr_454813_454856 = state_454796__$1;
(statearr_454813_454856[(1)] = (8));

} else {
var statearr_454814_454857 = state_454796__$1;
(statearr_454814_454857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454797 === (10))){
var inst_454788 = (state_454796[(2)]);
var state_454796__$1 = state_454796;
var statearr_454815_454862 = state_454796__$1;
(statearr_454815_454862[(2)] = inst_454788);

(statearr_454815_454862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454797 === (8))){
var inst_454773 = (state_454796[(7)]);
var tmp454812 = inst_454773;
var inst_454773__$1 = tmp454812;
var state_454796__$1 = (function (){var statearr_454816 = state_454796;
(statearr_454816[(7)] = inst_454773__$1);

return statearr_454816;
})();
var statearr_454817_454863 = state_454796__$1;
(statearr_454817_454863[(2)] = null);

(statearr_454817_454863[(1)] = (2));


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
});})(c__38100__auto___454837,out))
;
return ((function (switch__38079__auto__,c__38100__auto___454837,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_454825 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_454825[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_454825[(1)] = (1));

return statearr_454825;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_454796){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_454796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e454826){if((e454826 instanceof Object)){
var ex__38083__auto__ = e454826;
var statearr_454827_454868 = state_454796;
(statearr_454827_454868[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_454796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e454826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__454869 = state_454796;
state_454796 = G__454869;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_454796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_454796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___454837,out))
})();
var state__38102__auto__ = (function (){var statearr_454828 = f__38101__auto__.call(null);
(statearr_454828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___454837);

return statearr_454828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___454837,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args454874 = [];
var len__36260__auto___454951 = arguments.length;
var i__36261__auto___454952 = (0);
while(true){
if((i__36261__auto___454952 < len__36260__auto___454951)){
args454874.push((arguments[i__36261__auto___454952]));

var G__454953 = (i__36261__auto___454952 + (1));
i__36261__auto___454952 = G__454953;
continue;
} else {
}
break;
}

var G__454876 = args454874.length;
switch (G__454876) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454874.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___454963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___454963,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___454963,out){
return (function (state_454914){
var state_val_454915 = (state_454914[(1)]);
if((state_val_454915 === (7))){
var inst_454910 = (state_454914[(2)]);
var state_454914__$1 = state_454914;
var statearr_454918_454964 = state_454914__$1;
(statearr_454918_454964[(2)] = inst_454910);

(statearr_454918_454964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454915 === (1))){
var inst_454877 = (new Array(n));
var inst_454878 = inst_454877;
var inst_454879 = (0);
var state_454914__$1 = (function (){var statearr_454919 = state_454914;
(statearr_454919[(7)] = inst_454879);

(statearr_454919[(8)] = inst_454878);

return statearr_454919;
})();
var statearr_454920_454965 = state_454914__$1;
(statearr_454920_454965[(2)] = null);

(statearr_454920_454965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454915 === (4))){
var inst_454882 = (state_454914[(9)]);
var inst_454882__$1 = (state_454914[(2)]);
var inst_454883 = (inst_454882__$1 == null);
var inst_454884 = cljs.core.not.call(null,inst_454883);
var state_454914__$1 = (function (){var statearr_454921 = state_454914;
(statearr_454921[(9)] = inst_454882__$1);

return statearr_454921;
})();
if(inst_454884){
var statearr_454922_454967 = state_454914__$1;
(statearr_454922_454967[(1)] = (5));

} else {
var statearr_454923_454968 = state_454914__$1;
(statearr_454923_454968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454915 === (15))){
var inst_454904 = (state_454914[(2)]);
var state_454914__$1 = state_454914;
var statearr_454924_454969 = state_454914__$1;
(statearr_454924_454969[(2)] = inst_454904);

(statearr_454924_454969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454915 === (13))){
var state_454914__$1 = state_454914;
var statearr_454925_454970 = state_454914__$1;
(statearr_454925_454970[(2)] = null);

(statearr_454925_454970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454915 === (6))){
var inst_454879 = (state_454914[(7)]);
var inst_454900 = (inst_454879 > (0));
var state_454914__$1 = state_454914;
if(cljs.core.truth_(inst_454900)){
var statearr_454926_454971 = state_454914__$1;
(statearr_454926_454971[(1)] = (12));

} else {
var statearr_454927_454973 = state_454914__$1;
(statearr_454927_454973[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454915 === (3))){
var inst_454912 = (state_454914[(2)]);
var state_454914__$1 = state_454914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_454914__$1,inst_454912);
} else {
if((state_val_454915 === (12))){
var inst_454878 = (state_454914[(8)]);
var inst_454902 = cljs.core.vec.call(null,inst_454878);
var state_454914__$1 = state_454914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_454914__$1,(15),out,inst_454902);
} else {
if((state_val_454915 === (2))){
var state_454914__$1 = state_454914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_454914__$1,(4),ch);
} else {
if((state_val_454915 === (11))){
var inst_454894 = (state_454914[(2)]);
var inst_454895 = (new Array(n));
var inst_454878 = inst_454895;
var inst_454879 = (0);
var state_454914__$1 = (function (){var statearr_454929 = state_454914;
(statearr_454929[(10)] = inst_454894);

(statearr_454929[(7)] = inst_454879);

(statearr_454929[(8)] = inst_454878);

return statearr_454929;
})();
var statearr_454930_454974 = state_454914__$1;
(statearr_454930_454974[(2)] = null);

(statearr_454930_454974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454915 === (9))){
var inst_454878 = (state_454914[(8)]);
var inst_454892 = cljs.core.vec.call(null,inst_454878);
var state_454914__$1 = state_454914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_454914__$1,(11),out,inst_454892);
} else {
if((state_val_454915 === (5))){
var inst_454882 = (state_454914[(9)]);
var inst_454879 = (state_454914[(7)]);
var inst_454878 = (state_454914[(8)]);
var inst_454887 = (state_454914[(11)]);
var inst_454886 = (inst_454878[inst_454879] = inst_454882);
var inst_454887__$1 = (inst_454879 + (1));
var inst_454888 = (inst_454887__$1 < n);
var state_454914__$1 = (function (){var statearr_454931 = state_454914;
(statearr_454931[(11)] = inst_454887__$1);

(statearr_454931[(12)] = inst_454886);

return statearr_454931;
})();
if(cljs.core.truth_(inst_454888)){
var statearr_454932_454975 = state_454914__$1;
(statearr_454932_454975[(1)] = (8));

} else {
var statearr_454933_454976 = state_454914__$1;
(statearr_454933_454976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454915 === (14))){
var inst_454907 = (state_454914[(2)]);
var inst_454908 = cljs.core.async.close_BANG_.call(null,out);
var state_454914__$1 = (function (){var statearr_454935 = state_454914;
(statearr_454935[(13)] = inst_454907);

return statearr_454935;
})();
var statearr_454936_454977 = state_454914__$1;
(statearr_454936_454977[(2)] = inst_454908);

(statearr_454936_454977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454915 === (10))){
var inst_454898 = (state_454914[(2)]);
var state_454914__$1 = state_454914;
var statearr_454937_454981 = state_454914__$1;
(statearr_454937_454981[(2)] = inst_454898);

(statearr_454937_454981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_454915 === (8))){
var inst_454878 = (state_454914[(8)]);
var inst_454887 = (state_454914[(11)]);
var tmp454934 = inst_454878;
var inst_454878__$1 = tmp454934;
var inst_454879 = inst_454887;
var state_454914__$1 = (function (){var statearr_454938 = state_454914;
(statearr_454938[(7)] = inst_454879);

(statearr_454938[(8)] = inst_454878__$1);

return statearr_454938;
})();
var statearr_454939_454986 = state_454914__$1;
(statearr_454939_454986[(2)] = null);

(statearr_454939_454986[(1)] = (2));


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
});})(c__38100__auto___454963,out))
;
return ((function (switch__38079__auto__,c__38100__auto___454963,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_454943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_454943[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_454943[(1)] = (1));

return statearr_454943;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_454914){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_454914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e454944){if((e454944 instanceof Object)){
var ex__38083__auto__ = e454944;
var statearr_454945_454992 = state_454914;
(statearr_454945_454992[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_454914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e454944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__454995 = state_454914;
state_454914 = G__454995;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_454914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_454914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___454963,out))
})();
var state__38102__auto__ = (function (){var statearr_454948 = f__38101__auto__.call(null);
(statearr_454948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___454963);

return statearr_454948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___454963,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args454997 = [];
var len__36260__auto___455081 = arguments.length;
var i__36261__auto___455082 = (0);
while(true){
if((i__36261__auto___455082 < len__36260__auto___455081)){
args454997.push((arguments[i__36261__auto___455082]));

var G__455083 = (i__36261__auto___455082 + (1));
i__36261__auto___455082 = G__455083;
continue;
} else {
}
break;
}

var G__454999 = args454997.length;
switch (G__454999) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args454997.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___455089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___455089,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___455089,out){
return (function (state_455042){
var state_val_455043 = (state_455042[(1)]);
if((state_val_455043 === (7))){
var inst_455038 = (state_455042[(2)]);
var state_455042__$1 = state_455042;
var statearr_455044_455090 = state_455042__$1;
(statearr_455044_455090[(2)] = inst_455038);

(statearr_455044_455090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455043 === (1))){
var inst_455001 = [];
var inst_455002 = inst_455001;
var inst_455003 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_455042__$1 = (function (){var statearr_455045 = state_455042;
(statearr_455045[(7)] = inst_455003);

(statearr_455045[(8)] = inst_455002);

return statearr_455045;
})();
var statearr_455046_455091 = state_455042__$1;
(statearr_455046_455091[(2)] = null);

(statearr_455046_455091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455043 === (4))){
var inst_455006 = (state_455042[(9)]);
var inst_455006__$1 = (state_455042[(2)]);
var inst_455007 = (inst_455006__$1 == null);
var inst_455008 = cljs.core.not.call(null,inst_455007);
var state_455042__$1 = (function (){var statearr_455047 = state_455042;
(statearr_455047[(9)] = inst_455006__$1);

return statearr_455047;
})();
if(inst_455008){
var statearr_455048_455097 = state_455042__$1;
(statearr_455048_455097[(1)] = (5));

} else {
var statearr_455050_455098 = state_455042__$1;
(statearr_455050_455098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455043 === (15))){
var inst_455032 = (state_455042[(2)]);
var state_455042__$1 = state_455042;
var statearr_455051_455099 = state_455042__$1;
(statearr_455051_455099[(2)] = inst_455032);

(statearr_455051_455099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455043 === (13))){
var state_455042__$1 = state_455042;
var statearr_455052_455100 = state_455042__$1;
(statearr_455052_455100[(2)] = null);

(statearr_455052_455100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455043 === (6))){
var inst_455002 = (state_455042[(8)]);
var inst_455027 = inst_455002.length;
var inst_455028 = (inst_455027 > (0));
var state_455042__$1 = state_455042;
if(cljs.core.truth_(inst_455028)){
var statearr_455053_455101 = state_455042__$1;
(statearr_455053_455101[(1)] = (12));

} else {
var statearr_455054_455102 = state_455042__$1;
(statearr_455054_455102[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455043 === (3))){
var inst_455040 = (state_455042[(2)]);
var state_455042__$1 = state_455042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_455042__$1,inst_455040);
} else {
if((state_val_455043 === (12))){
var inst_455002 = (state_455042[(8)]);
var inst_455030 = cljs.core.vec.call(null,inst_455002);
var state_455042__$1 = state_455042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_455042__$1,(15),out,inst_455030);
} else {
if((state_val_455043 === (2))){
var state_455042__$1 = state_455042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_455042__$1,(4),ch);
} else {
if((state_val_455043 === (11))){
var inst_455006 = (state_455042[(9)]);
var inst_455010 = (state_455042[(10)]);
var inst_455020 = (state_455042[(2)]);
var inst_455021 = [];
var inst_455022 = inst_455021.push(inst_455006);
var inst_455002 = inst_455021;
var inst_455003 = inst_455010;
var state_455042__$1 = (function (){var statearr_455055 = state_455042;
(statearr_455055[(11)] = inst_455022);

(statearr_455055[(7)] = inst_455003);

(statearr_455055[(12)] = inst_455020);

(statearr_455055[(8)] = inst_455002);

return statearr_455055;
})();
var statearr_455056_455109 = state_455042__$1;
(statearr_455056_455109[(2)] = null);

(statearr_455056_455109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455043 === (9))){
var inst_455002 = (state_455042[(8)]);
var inst_455018 = cljs.core.vec.call(null,inst_455002);
var state_455042__$1 = state_455042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_455042__$1,(11),out,inst_455018);
} else {
if((state_val_455043 === (5))){
var inst_455003 = (state_455042[(7)]);
var inst_455006 = (state_455042[(9)]);
var inst_455010 = (state_455042[(10)]);
var inst_455010__$1 = f.call(null,inst_455006);
var inst_455011 = cljs.core._EQ_.call(null,inst_455010__$1,inst_455003);
var inst_455012 = cljs.core.keyword_identical_QMARK_.call(null,inst_455003,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_455013 = (inst_455011) || (inst_455012);
var state_455042__$1 = (function (){var statearr_455058 = state_455042;
(statearr_455058[(10)] = inst_455010__$1);

return statearr_455058;
})();
if(cljs.core.truth_(inst_455013)){
var statearr_455059_455110 = state_455042__$1;
(statearr_455059_455110[(1)] = (8));

} else {
var statearr_455060_455111 = state_455042__$1;
(statearr_455060_455111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455043 === (14))){
var inst_455035 = (state_455042[(2)]);
var inst_455036 = cljs.core.async.close_BANG_.call(null,out);
var state_455042__$1 = (function (){var statearr_455064 = state_455042;
(statearr_455064[(13)] = inst_455035);

return statearr_455064;
})();
var statearr_455065_455113 = state_455042__$1;
(statearr_455065_455113[(2)] = inst_455036);

(statearr_455065_455113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455043 === (10))){
var inst_455025 = (state_455042[(2)]);
var state_455042__$1 = state_455042;
var statearr_455067_455115 = state_455042__$1;
(statearr_455067_455115[(2)] = inst_455025);

(statearr_455067_455115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455043 === (8))){
var inst_455006 = (state_455042[(9)]);
var inst_455002 = (state_455042[(8)]);
var inst_455010 = (state_455042[(10)]);
var inst_455015 = inst_455002.push(inst_455006);
var tmp455062 = inst_455002;
var inst_455002__$1 = tmp455062;
var inst_455003 = inst_455010;
var state_455042__$1 = (function (){var statearr_455068 = state_455042;
(statearr_455068[(7)] = inst_455003);

(statearr_455068[(8)] = inst_455002__$1);

(statearr_455068[(14)] = inst_455015);

return statearr_455068;
})();
var statearr_455069_455117 = state_455042__$1;
(statearr_455069_455117[(2)] = null);

(statearr_455069_455117[(1)] = (2));


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
});})(c__38100__auto___455089,out))
;
return ((function (switch__38079__auto__,c__38100__auto___455089,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_455074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_455074[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_455074[(1)] = (1));

return statearr_455074;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_455042){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_455042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e455075){if((e455075 instanceof Object)){
var ex__38083__auto__ = e455075;
var statearr_455076_455118 = state_455042;
(statearr_455076_455118[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_455042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e455075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__455122 = state_455042;
state_455042 = G__455122;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_455042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_455042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___455089,out))
})();
var state__38102__auto__ = (function (){var statearr_455080 = f__38101__auto__.call(null);
(statearr_455080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___455089);

return statearr_455080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___455089,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
