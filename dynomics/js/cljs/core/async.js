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
if(typeof cljs.core.async.t_cljs$core$async371004 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async371004 = (function (fn_handler,f,meta371005){
this.fn_handler = fn_handler;
this.f = f;
this.meta371005 = meta371005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async371004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_371006,meta371005__$1){
var self__ = this;
var _371006__$1 = this;
return (new cljs.core.async.t_cljs$core$async371004(self__.fn_handler,self__.f,meta371005__$1));
});

cljs.core.async.t_cljs$core$async371004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_371006){
var self__ = this;
var _371006__$1 = this;
return self__.meta371005;
});

cljs.core.async.t_cljs$core$async371004.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async371004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async371004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async371004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta371005","meta371005",821544912,null)], null);
});

cljs.core.async.t_cljs$core$async371004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async371004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async371004";

cljs.core.async.t_cljs$core$async371004.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async371004");
});

cljs.core.async.__GT_t_cljs$core$async371004 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async371004(fn_handler__$1,f__$1,meta371005){
return (new cljs.core.async.t_cljs$core$async371004(fn_handler__$1,f__$1,meta371005));
});

}

return (new cljs.core.async.t_cljs$core$async371004(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args371042 = [];
var len__36260__auto___371068 = arguments.length;
var i__36261__auto___371069 = (0);
while(true){
if((i__36261__auto___371069 < len__36260__auto___371068)){
args371042.push((arguments[i__36261__auto___371069]));

var G__371070 = (i__36261__auto___371069 + (1));
i__36261__auto___371069 = G__371070;
continue;
} else {
}
break;
}

var G__371057 = args371042.length;
switch (G__371057) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args371042.length)].join('')));

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
var args371076 = [];
var len__36260__auto___371083 = arguments.length;
var i__36261__auto___371084 = (0);
while(true){
if((i__36261__auto___371084 < len__36260__auto___371083)){
args371076.push((arguments[i__36261__auto___371084]));

var G__371085 = (i__36261__auto___371084 + (1));
i__36261__auto___371084 = G__371085;
continue;
} else {
}
break;
}

var G__371078 = args371076.length;
switch (G__371078) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args371076.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_371089 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_371089);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_371089,ret){
return (function (){
return fn1.call(null,val_371089);
});})(val_371089,ret))
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
var args371099 = [];
var len__36260__auto___371113 = arguments.length;
var i__36261__auto___371114 = (0);
while(true){
if((i__36261__auto___371114 < len__36260__auto___371113)){
args371099.push((arguments[i__36261__auto___371114]));

var G__371115 = (i__36261__auto___371114 + (1));
i__36261__auto___371114 = G__371115;
continue;
} else {
}
break;
}

var G__371103 = args371099.length;
switch (G__371103) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args371099.length)].join('')));

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
var n__36105__auto___371143 = n;
var x_371144 = (0);
while(true){
if((x_371144 < n__36105__auto___371143)){
(a[x_371144] = (0));

var G__371145 = (x_371144 + (1));
x_371144 = G__371145;
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

var G__371148 = (i + (1));
i = G__371148;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async371154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async371154 = (function (alt_flag,flag,meta371155){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta371155 = meta371155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async371154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_371156,meta371155__$1){
var self__ = this;
var _371156__$1 = this;
return (new cljs.core.async.t_cljs$core$async371154(self__.alt_flag,self__.flag,meta371155__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async371154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_371156){
var self__ = this;
var _371156__$1 = this;
return self__.meta371155;
});})(flag))
;

cljs.core.async.t_cljs$core$async371154.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async371154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async371154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async371154.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta371155","meta371155",288085332,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async371154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async371154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async371154";

cljs.core.async.t_cljs$core$async371154.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async371154");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async371154 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async371154(alt_flag__$1,flag__$1,meta371155){
return (new cljs.core.async.t_cljs$core$async371154(alt_flag__$1,flag__$1,meta371155));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async371154(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async371197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async371197 = (function (alt_handler,flag,cb,meta371198){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta371198 = meta371198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async371197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_371199,meta371198__$1){
var self__ = this;
var _371199__$1 = this;
return (new cljs.core.async.t_cljs$core$async371197(self__.alt_handler,self__.flag,self__.cb,meta371198__$1));
});

cljs.core.async.t_cljs$core$async371197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_371199){
var self__ = this;
var _371199__$1 = this;
return self__.meta371198;
});

cljs.core.async.t_cljs$core$async371197.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async371197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async371197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async371197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta371198","meta371198",2103881828,null)], null);
});

cljs.core.async.t_cljs$core$async371197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async371197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async371197";

cljs.core.async.t_cljs$core$async371197.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async371197");
});

cljs.core.async.__GT_t_cljs$core$async371197 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async371197(alt_handler__$1,flag__$1,cb__$1,meta371198){
return (new cljs.core.async.t_cljs$core$async371197(alt_handler__$1,flag__$1,cb__$1,meta371198));
});

}

return (new cljs.core.async.t_cljs$core$async371197(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__371202_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__371202_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__371203_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__371203_SHARP_,port], null));
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
var G__371234 = (i + (1));
i = G__371234;
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
var len__36260__auto___371253 = arguments.length;
var i__36261__auto___371254 = (0);
while(true){
if((i__36261__auto___371254 < len__36260__auto___371253)){
args__36267__auto__.push((arguments[i__36261__auto___371254]));

var G__371255 = (i__36261__auto___371254 + (1));
i__36261__auto___371254 = G__371255;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((1) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36268__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__371245){
var map__371246 = p__371245;
var map__371246__$1 = ((((!((map__371246 == null)))?((((map__371246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__371246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__371246):map__371246);
var opts = map__371246__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq371243){
var G__371244 = cljs.core.first.call(null,seq371243);
var seq371243__$1 = cljs.core.next.call(null,seq371243);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__371244,seq371243__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args371262 = [];
var len__36260__auto___371323 = arguments.length;
var i__36261__auto___371324 = (0);
while(true){
if((i__36261__auto___371324 < len__36260__auto___371323)){
args371262.push((arguments[i__36261__auto___371324]));

var G__371325 = (i__36261__auto___371324 + (1));
i__36261__auto___371324 = G__371325;
continue;
} else {
}
break;
}

var G__371267 = args371262.length;
switch (G__371267) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args371262.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38100__auto___371327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___371327){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___371327){
return (function (state_371293){
var state_val_371294 = (state_371293[(1)]);
if((state_val_371294 === (7))){
var inst_371289 = (state_371293[(2)]);
var state_371293__$1 = state_371293;
var statearr_371295_371328 = state_371293__$1;
(statearr_371295_371328[(2)] = inst_371289);

(statearr_371295_371328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371294 === (1))){
var state_371293__$1 = state_371293;
var statearr_371296_371329 = state_371293__$1;
(statearr_371296_371329[(2)] = null);

(statearr_371296_371329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371294 === (4))){
var inst_371272 = (state_371293[(7)]);
var inst_371272__$1 = (state_371293[(2)]);
var inst_371273 = (inst_371272__$1 == null);
var state_371293__$1 = (function (){var statearr_371297 = state_371293;
(statearr_371297[(7)] = inst_371272__$1);

return statearr_371297;
})();
if(cljs.core.truth_(inst_371273)){
var statearr_371298_371333 = state_371293__$1;
(statearr_371298_371333[(1)] = (5));

} else {
var statearr_371299_371335 = state_371293__$1;
(statearr_371299_371335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371294 === (13))){
var state_371293__$1 = state_371293;
var statearr_371300_371336 = state_371293__$1;
(statearr_371300_371336[(2)] = null);

(statearr_371300_371336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371294 === (6))){
var inst_371272 = (state_371293[(7)]);
var state_371293__$1 = state_371293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_371293__$1,(11),to,inst_371272);
} else {
if((state_val_371294 === (3))){
var inst_371291 = (state_371293[(2)]);
var state_371293__$1 = state_371293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_371293__$1,inst_371291);
} else {
if((state_val_371294 === (12))){
var state_371293__$1 = state_371293;
var statearr_371303_371350 = state_371293__$1;
(statearr_371303_371350[(2)] = null);

(statearr_371303_371350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371294 === (2))){
var state_371293__$1 = state_371293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_371293__$1,(4),from);
} else {
if((state_val_371294 === (11))){
var inst_371282 = (state_371293[(2)]);
var state_371293__$1 = state_371293;
if(cljs.core.truth_(inst_371282)){
var statearr_371304_371354 = state_371293__$1;
(statearr_371304_371354[(1)] = (12));

} else {
var statearr_371305_371355 = state_371293__$1;
(statearr_371305_371355[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371294 === (9))){
var state_371293__$1 = state_371293;
var statearr_371306_371360 = state_371293__$1;
(statearr_371306_371360[(2)] = null);

(statearr_371306_371360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371294 === (5))){
var state_371293__$1 = state_371293;
if(cljs.core.truth_(close_QMARK_)){
var statearr_371307_371361 = state_371293__$1;
(statearr_371307_371361[(1)] = (8));

} else {
var statearr_371308_371362 = state_371293__$1;
(statearr_371308_371362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371294 === (14))){
var inst_371287 = (state_371293[(2)]);
var state_371293__$1 = state_371293;
var statearr_371309_371365 = state_371293__$1;
(statearr_371309_371365[(2)] = inst_371287);

(statearr_371309_371365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371294 === (10))){
var inst_371279 = (state_371293[(2)]);
var state_371293__$1 = state_371293;
var statearr_371312_371368 = state_371293__$1;
(statearr_371312_371368[(2)] = inst_371279);

(statearr_371312_371368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371294 === (8))){
var inst_371276 = cljs.core.async.close_BANG_.call(null,to);
var state_371293__$1 = state_371293;
var statearr_371313_371372 = state_371293__$1;
(statearr_371313_371372[(2)] = inst_371276);

(statearr_371313_371372[(1)] = (10));


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
});})(c__38100__auto___371327))
;
return ((function (switch__38079__auto__,c__38100__auto___371327){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_371317 = [null,null,null,null,null,null,null,null];
(statearr_371317[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_371317[(1)] = (1));

return statearr_371317;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_371293){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_371293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e371318){if((e371318 instanceof Object)){
var ex__38083__auto__ = e371318;
var statearr_371319_371381 = state_371293;
(statearr_371319_371381[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_371293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e371318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__371384 = state_371293;
state_371293 = G__371384;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_371293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_371293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___371327))
})();
var state__38102__auto__ = (function (){var statearr_371322 = f__38101__auto__.call(null);
(statearr_371322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___371327);

return statearr_371322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___371327))
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
return (function (p__371658){
var vec__371659 = p__371658;
var v = cljs.core.nth.call(null,vec__371659,(0),null);
var p = cljs.core.nth.call(null,vec__371659,(1),null);
var job = vec__371659;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38100__auto___371940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___371940,res,vec__371659,v,p,job,jobs,results){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___371940,res,vec__371659,v,p,job,jobs,results){
return (function (state_371665){
var state_val_371666 = (state_371665[(1)]);
if((state_val_371666 === (1))){
var state_371665__$1 = state_371665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_371665__$1,(2),res,v);
} else {
if((state_val_371666 === (2))){
var inst_371662 = (state_371665[(2)]);
var inst_371663 = cljs.core.async.close_BANG_.call(null,res);
var state_371665__$1 = (function (){var statearr_371667 = state_371665;
(statearr_371667[(7)] = inst_371662);

return statearr_371667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_371665__$1,inst_371663);
} else {
return null;
}
}
});})(c__38100__auto___371940,res,vec__371659,v,p,job,jobs,results))
;
return ((function (switch__38079__auto__,c__38100__auto___371940,res,vec__371659,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_371675 = [null,null,null,null,null,null,null,null];
(statearr_371675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_371675[(1)] = (1));

return statearr_371675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_371665){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_371665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e371676){if((e371676 instanceof Object)){
var ex__38083__auto__ = e371676;
var statearr_371677_371962 = state_371665;
(statearr_371677_371962[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_371665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e371676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__371965 = state_371665;
state_371665 = G__371965;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_371665){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_371665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___371940,res,vec__371659,v,p,job,jobs,results))
})();
var state__38102__auto__ = (function (){var statearr_371680 = f__38101__auto__.call(null);
(statearr_371680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___371940);

return statearr_371680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___371940,res,vec__371659,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__371682){
var vec__371683 = p__371682;
var v = cljs.core.nth.call(null,vec__371683,(0),null);
var p = cljs.core.nth.call(null,vec__371683,(1),null);
var job = vec__371683;
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
var n__36105__auto___371989 = n;
var __371990 = (0);
while(true){
if((__371990 < n__36105__auto___371989)){
var G__371684_371992 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__371684_371992) {
case "compute":
var c__38100__auto___371995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__371990,c__38100__auto___371995,G__371684_371992,n__36105__auto___371989,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (__371990,c__38100__auto___371995,G__371684_371992,n__36105__auto___371989,jobs,results,process,async){
return (function (state_371697){
var state_val_371698 = (state_371697[(1)]);
if((state_val_371698 === (1))){
var state_371697__$1 = state_371697;
var statearr_371699_371999 = state_371697__$1;
(statearr_371699_371999[(2)] = null);

(statearr_371699_371999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371698 === (2))){
var state_371697__$1 = state_371697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_371697__$1,(4),jobs);
} else {
if((state_val_371698 === (3))){
var inst_371695 = (state_371697[(2)]);
var state_371697__$1 = state_371697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_371697__$1,inst_371695);
} else {
if((state_val_371698 === (4))){
var inst_371687 = (state_371697[(2)]);
var inst_371688 = process.call(null,inst_371687);
var state_371697__$1 = state_371697;
if(cljs.core.truth_(inst_371688)){
var statearr_371702_372007 = state_371697__$1;
(statearr_371702_372007[(1)] = (5));

} else {
var statearr_371703_372008 = state_371697__$1;
(statearr_371703_372008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371698 === (5))){
var state_371697__$1 = state_371697;
var statearr_371705_372010 = state_371697__$1;
(statearr_371705_372010[(2)] = null);

(statearr_371705_372010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371698 === (6))){
var state_371697__$1 = state_371697;
var statearr_371707_372016 = state_371697__$1;
(statearr_371707_372016[(2)] = null);

(statearr_371707_372016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371698 === (7))){
var inst_371693 = (state_371697[(2)]);
var state_371697__$1 = state_371697;
var statearr_371708_372018 = state_371697__$1;
(statearr_371708_372018[(2)] = inst_371693);

(statearr_371708_372018[(1)] = (3));


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
});})(__371990,c__38100__auto___371995,G__371684_371992,n__36105__auto___371989,jobs,results,process,async))
;
return ((function (__371990,switch__38079__auto__,c__38100__auto___371995,G__371684_371992,n__36105__auto___371989,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_371712 = [null,null,null,null,null,null,null];
(statearr_371712[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_371712[(1)] = (1));

return statearr_371712;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_371697){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_371697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e371713){if((e371713 instanceof Object)){
var ex__38083__auto__ = e371713;
var statearr_371714_372027 = state_371697;
(statearr_371714_372027[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_371697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e371713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372029 = state_371697;
state_371697 = G__372029;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_371697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_371697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(__371990,switch__38079__auto__,c__38100__auto___371995,G__371684_371992,n__36105__auto___371989,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_371719 = f__38101__auto__.call(null);
(statearr_371719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___371995);

return statearr_371719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(__371990,c__38100__auto___371995,G__371684_371992,n__36105__auto___371989,jobs,results,process,async))
);


break;
case "async":
var c__38100__auto___372035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__371990,c__38100__auto___372035,G__371684_371992,n__36105__auto___371989,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (__371990,c__38100__auto___372035,G__371684_371992,n__36105__auto___371989,jobs,results,process,async){
return (function (state_371735){
var state_val_371736 = (state_371735[(1)]);
if((state_val_371736 === (1))){
var state_371735__$1 = state_371735;
var statearr_371739_372039 = state_371735__$1;
(statearr_371739_372039[(2)] = null);

(statearr_371739_372039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371736 === (2))){
var state_371735__$1 = state_371735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_371735__$1,(4),jobs);
} else {
if((state_val_371736 === (3))){
var inst_371733 = (state_371735[(2)]);
var state_371735__$1 = state_371735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_371735__$1,inst_371733);
} else {
if((state_val_371736 === (4))){
var inst_371724 = (state_371735[(2)]);
var inst_371725 = async.call(null,inst_371724);
var state_371735__$1 = state_371735;
if(cljs.core.truth_(inst_371725)){
var statearr_371743_372047 = state_371735__$1;
(statearr_371743_372047[(1)] = (5));

} else {
var statearr_371745_372048 = state_371735__$1;
(statearr_371745_372048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371736 === (5))){
var state_371735__$1 = state_371735;
var statearr_371747_372049 = state_371735__$1;
(statearr_371747_372049[(2)] = null);

(statearr_371747_372049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371736 === (6))){
var state_371735__$1 = state_371735;
var statearr_371748_372051 = state_371735__$1;
(statearr_371748_372051[(2)] = null);

(statearr_371748_372051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371736 === (7))){
var inst_371731 = (state_371735[(2)]);
var state_371735__$1 = state_371735;
var statearr_371749_372057 = state_371735__$1;
(statearr_371749_372057[(2)] = inst_371731);

(statearr_371749_372057[(1)] = (3));


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
});})(__371990,c__38100__auto___372035,G__371684_371992,n__36105__auto___371989,jobs,results,process,async))
;
return ((function (__371990,switch__38079__auto__,c__38100__auto___372035,G__371684_371992,n__36105__auto___371989,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_371753 = [null,null,null,null,null,null,null];
(statearr_371753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_371753[(1)] = (1));

return statearr_371753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_371735){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_371735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e371754){if((e371754 instanceof Object)){
var ex__38083__auto__ = e371754;
var statearr_371756_372065 = state_371735;
(statearr_371756_372065[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_371735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e371754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372068 = state_371735;
state_371735 = G__372068;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_371735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_371735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(__371990,switch__38079__auto__,c__38100__auto___372035,G__371684_371992,n__36105__auto___371989,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_371760 = f__38101__auto__.call(null);
(statearr_371760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___372035);

return statearr_371760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(__371990,c__38100__auto___372035,G__371684_371992,n__36105__auto___371989,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__372071 = (__371990 + (1));
__371990 = G__372071;
continue;
} else {
}
break;
}

var c__38100__auto___372075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___372075,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___372075,jobs,results,process,async){
return (function (state_371785){
var state_val_371786 = (state_371785[(1)]);
if((state_val_371786 === (1))){
var state_371785__$1 = state_371785;
var statearr_371789_372079 = state_371785__$1;
(statearr_371789_372079[(2)] = null);

(statearr_371789_372079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371786 === (2))){
var state_371785__$1 = state_371785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_371785__$1,(4),from);
} else {
if((state_val_371786 === (3))){
var inst_371783 = (state_371785[(2)]);
var state_371785__$1 = state_371785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_371785__$1,inst_371783);
} else {
if((state_val_371786 === (4))){
var inst_371764 = (state_371785[(7)]);
var inst_371764__$1 = (state_371785[(2)]);
var inst_371765 = (inst_371764__$1 == null);
var state_371785__$1 = (function (){var statearr_371791 = state_371785;
(statearr_371791[(7)] = inst_371764__$1);

return statearr_371791;
})();
if(cljs.core.truth_(inst_371765)){
var statearr_371792_372087 = state_371785__$1;
(statearr_371792_372087[(1)] = (5));

} else {
var statearr_371793_372088 = state_371785__$1;
(statearr_371793_372088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371786 === (5))){
var inst_371767 = cljs.core.async.close_BANG_.call(null,jobs);
var state_371785__$1 = state_371785;
var statearr_371794_372089 = state_371785__$1;
(statearr_371794_372089[(2)] = inst_371767);

(statearr_371794_372089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371786 === (6))){
var inst_371764 = (state_371785[(7)]);
var inst_371769 = (state_371785[(8)]);
var inst_371769__$1 = cljs.core.async.chan.call(null,(1));
var inst_371770 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_371771 = [inst_371764,inst_371769__$1];
var inst_371772 = (new cljs.core.PersistentVector(null,2,(5),inst_371770,inst_371771,null));
var state_371785__$1 = (function (){var statearr_371797 = state_371785;
(statearr_371797[(8)] = inst_371769__$1);

return statearr_371797;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_371785__$1,(8),jobs,inst_371772);
} else {
if((state_val_371786 === (7))){
var inst_371779 = (state_371785[(2)]);
var state_371785__$1 = state_371785;
var statearr_371798_372097 = state_371785__$1;
(statearr_371798_372097[(2)] = inst_371779);

(statearr_371798_372097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371786 === (8))){
var inst_371769 = (state_371785[(8)]);
var inst_371774 = (state_371785[(2)]);
var state_371785__$1 = (function (){var statearr_371800 = state_371785;
(statearr_371800[(9)] = inst_371774);

return statearr_371800;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_371785__$1,(9),results,inst_371769);
} else {
if((state_val_371786 === (9))){
var inst_371776 = (state_371785[(2)]);
var state_371785__$1 = (function (){var statearr_371801 = state_371785;
(statearr_371801[(10)] = inst_371776);

return statearr_371801;
})();
var statearr_371802_372105 = state_371785__$1;
(statearr_371802_372105[(2)] = null);

(statearr_371802_372105[(1)] = (2));


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
});})(c__38100__auto___372075,jobs,results,process,async))
;
return ((function (switch__38079__auto__,c__38100__auto___372075,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_371812 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_371812[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_371812[(1)] = (1));

return statearr_371812;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_371785){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_371785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e371813){if((e371813 instanceof Object)){
var ex__38083__auto__ = e371813;
var statearr_371814_372113 = state_371785;
(statearr_371814_372113[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_371785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e371813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372114 = state_371785;
state_371785 = G__372114;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_371785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_371785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___372075,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_371816 = f__38101__auto__.call(null);
(statearr_371816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___372075);

return statearr_371816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___372075,jobs,results,process,async))
);


var c__38100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto__,jobs,results,process,async){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto__,jobs,results,process,async){
return (function (state_371862){
var state_val_371863 = (state_371862[(1)]);
if((state_val_371863 === (7))){
var inst_371857 = (state_371862[(2)]);
var state_371862__$1 = state_371862;
var statearr_371864_372122 = state_371862__$1;
(statearr_371864_372122[(2)] = inst_371857);

(statearr_371864_372122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (20))){
var state_371862__$1 = state_371862;
var statearr_371869_372124 = state_371862__$1;
(statearr_371869_372124[(2)] = null);

(statearr_371869_372124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (1))){
var state_371862__$1 = state_371862;
var statearr_371870_372127 = state_371862__$1;
(statearr_371870_372127[(2)] = null);

(statearr_371870_372127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (4))){
var inst_371820 = (state_371862[(7)]);
var inst_371820__$1 = (state_371862[(2)]);
var inst_371821 = (inst_371820__$1 == null);
var state_371862__$1 = (function (){var statearr_371873 = state_371862;
(statearr_371873[(7)] = inst_371820__$1);

return statearr_371873;
})();
if(cljs.core.truth_(inst_371821)){
var statearr_371875_372132 = state_371862__$1;
(statearr_371875_372132[(1)] = (5));

} else {
var statearr_371877_372133 = state_371862__$1;
(statearr_371877_372133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (15))){
var inst_371839 = (state_371862[(8)]);
var state_371862__$1 = state_371862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_371862__$1,(18),to,inst_371839);
} else {
if((state_val_371863 === (21))){
var inst_371852 = (state_371862[(2)]);
var state_371862__$1 = state_371862;
var statearr_371880_372139 = state_371862__$1;
(statearr_371880_372139[(2)] = inst_371852);

(statearr_371880_372139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (13))){
var inst_371854 = (state_371862[(2)]);
var state_371862__$1 = (function (){var statearr_371881 = state_371862;
(statearr_371881[(9)] = inst_371854);

return statearr_371881;
})();
var statearr_371882_372142 = state_371862__$1;
(statearr_371882_372142[(2)] = null);

(statearr_371882_372142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (6))){
var inst_371820 = (state_371862[(7)]);
var state_371862__$1 = state_371862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_371862__$1,(11),inst_371820);
} else {
if((state_val_371863 === (17))){
var inst_371847 = (state_371862[(2)]);
var state_371862__$1 = state_371862;
if(cljs.core.truth_(inst_371847)){
var statearr_371891_372146 = state_371862__$1;
(statearr_371891_372146[(1)] = (19));

} else {
var statearr_371892_372147 = state_371862__$1;
(statearr_371892_372147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (3))){
var inst_371859 = (state_371862[(2)]);
var state_371862__$1 = state_371862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_371862__$1,inst_371859);
} else {
if((state_val_371863 === (12))){
var inst_371836 = (state_371862[(10)]);
var state_371862__$1 = state_371862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_371862__$1,(14),inst_371836);
} else {
if((state_val_371863 === (2))){
var state_371862__$1 = state_371862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_371862__$1,(4),results);
} else {
if((state_val_371863 === (19))){
var state_371862__$1 = state_371862;
var statearr_371894_372154 = state_371862__$1;
(statearr_371894_372154[(2)] = null);

(statearr_371894_372154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (11))){
var inst_371836 = (state_371862[(2)]);
var state_371862__$1 = (function (){var statearr_371896 = state_371862;
(statearr_371896[(10)] = inst_371836);

return statearr_371896;
})();
var statearr_371897_372160 = state_371862__$1;
(statearr_371897_372160[(2)] = null);

(statearr_371897_372160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (9))){
var state_371862__$1 = state_371862;
var statearr_371899_372162 = state_371862__$1;
(statearr_371899_372162[(2)] = null);

(statearr_371899_372162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (5))){
var state_371862__$1 = state_371862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_371901_372163 = state_371862__$1;
(statearr_371901_372163[(1)] = (8));

} else {
var statearr_371902_372165 = state_371862__$1;
(statearr_371902_372165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (14))){
var inst_371841 = (state_371862[(11)]);
var inst_371839 = (state_371862[(8)]);
var inst_371839__$1 = (state_371862[(2)]);
var inst_371840 = (inst_371839__$1 == null);
var inst_371841__$1 = cljs.core.not.call(null,inst_371840);
var state_371862__$1 = (function (){var statearr_371906 = state_371862;
(statearr_371906[(11)] = inst_371841__$1);

(statearr_371906[(8)] = inst_371839__$1);

return statearr_371906;
})();
if(inst_371841__$1){
var statearr_371907_372171 = state_371862__$1;
(statearr_371907_372171[(1)] = (15));

} else {
var statearr_371908_372172 = state_371862__$1;
(statearr_371908_372172[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (16))){
var inst_371841 = (state_371862[(11)]);
var state_371862__$1 = state_371862;
var statearr_371910_372173 = state_371862__$1;
(statearr_371910_372173[(2)] = inst_371841);

(statearr_371910_372173[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (10))){
var inst_371831 = (state_371862[(2)]);
var state_371862__$1 = state_371862;
var statearr_371911_372178 = state_371862__$1;
(statearr_371911_372178[(2)] = inst_371831);

(statearr_371911_372178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (18))){
var inst_371844 = (state_371862[(2)]);
var state_371862__$1 = state_371862;
var statearr_371913_372180 = state_371862__$1;
(statearr_371913_372180[(2)] = inst_371844);

(statearr_371913_372180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_371863 === (8))){
var inst_371828 = cljs.core.async.close_BANG_.call(null,to);
var state_371862__$1 = state_371862;
var statearr_371914_372181 = state_371862__$1;
(statearr_371914_372181[(2)] = inst_371828);

(statearr_371914_372181[(1)] = (10));


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
var statearr_371923 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_371923[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_371923[(1)] = (1));

return statearr_371923;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_371862){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_371862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e371925){if((e371925 instanceof Object)){
var ex__38083__auto__ = e371925;
var statearr_371926_372194 = state_371862;
(statearr_371926_372194[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_371862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e371925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372201 = state_371862;
state_371862 = G__372201;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_371862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_371862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__,jobs,results,process,async))
})();
var state__38102__auto__ = (function (){var statearr_371928 = f__38101__auto__.call(null);
(statearr_371928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_371928;
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
var args372207 = [];
var len__36260__auto___372216 = arguments.length;
var i__36261__auto___372217 = (0);
while(true){
if((i__36261__auto___372217 < len__36260__auto___372216)){
args372207.push((arguments[i__36261__auto___372217]));

var G__372218 = (i__36261__auto___372217 + (1));
i__36261__auto___372217 = G__372218;
continue;
} else {
}
break;
}

var G__372212 = args372207.length;
switch (G__372212) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args372207.length)].join('')));

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
var args372229 = [];
var len__36260__auto___372236 = arguments.length;
var i__36261__auto___372237 = (0);
while(true){
if((i__36261__auto___372237 < len__36260__auto___372236)){
args372229.push((arguments[i__36261__auto___372237]));

var G__372238 = (i__36261__auto___372237 + (1));
i__36261__auto___372237 = G__372238;
continue;
} else {
}
break;
}

var G__372233 = args372229.length;
switch (G__372233) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args372229.length)].join('')));

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
var args372258 = [];
var len__36260__auto___372339 = arguments.length;
var i__36261__auto___372341 = (0);
while(true){
if((i__36261__auto___372341 < len__36260__auto___372339)){
args372258.push((arguments[i__36261__auto___372341]));

var G__372344 = (i__36261__auto___372341 + (1));
i__36261__auto___372341 = G__372344;
continue;
} else {
}
break;
}

var G__372265 = args372258.length;
switch (G__372265) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args372258.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38100__auto___372346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___372346,tc,fc){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___372346,tc,fc){
return (function (state_372301){
var state_val_372302 = (state_372301[(1)]);
if((state_val_372302 === (7))){
var inst_372290 = (state_372301[(2)]);
var state_372301__$1 = state_372301;
var statearr_372305_372351 = state_372301__$1;
(statearr_372305_372351[(2)] = inst_372290);

(statearr_372305_372351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372302 === (1))){
var state_372301__$1 = state_372301;
var statearr_372307_372355 = state_372301__$1;
(statearr_372307_372355[(2)] = null);

(statearr_372307_372355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372302 === (4))){
var inst_372271 = (state_372301[(7)]);
var inst_372271__$1 = (state_372301[(2)]);
var inst_372272 = (inst_372271__$1 == null);
var state_372301__$1 = (function (){var statearr_372309 = state_372301;
(statearr_372309[(7)] = inst_372271__$1);

return statearr_372309;
})();
if(cljs.core.truth_(inst_372272)){
var statearr_372310_372357 = state_372301__$1;
(statearr_372310_372357[(1)] = (5));

} else {
var statearr_372311_372360 = state_372301__$1;
(statearr_372311_372360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372302 === (13))){
var state_372301__$1 = state_372301;
var statearr_372312_372364 = state_372301__$1;
(statearr_372312_372364[(2)] = null);

(statearr_372312_372364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372302 === (6))){
var inst_372271 = (state_372301[(7)]);
var inst_372277 = p.call(null,inst_372271);
var state_372301__$1 = state_372301;
if(cljs.core.truth_(inst_372277)){
var statearr_372315_372367 = state_372301__$1;
(statearr_372315_372367[(1)] = (9));

} else {
var statearr_372316_372368 = state_372301__$1;
(statearr_372316_372368[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372302 === (3))){
var inst_372292 = (state_372301[(2)]);
var state_372301__$1 = state_372301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372301__$1,inst_372292);
} else {
if((state_val_372302 === (12))){
var state_372301__$1 = state_372301;
var statearr_372318_372369 = state_372301__$1;
(statearr_372318_372369[(2)] = null);

(statearr_372318_372369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372302 === (2))){
var state_372301__$1 = state_372301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_372301__$1,(4),ch);
} else {
if((state_val_372302 === (11))){
var inst_372271 = (state_372301[(7)]);
var inst_372281 = (state_372301[(2)]);
var state_372301__$1 = state_372301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_372301__$1,(8),inst_372281,inst_372271);
} else {
if((state_val_372302 === (9))){
var state_372301__$1 = state_372301;
var statearr_372320_372377 = state_372301__$1;
(statearr_372320_372377[(2)] = tc);

(statearr_372320_372377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372302 === (5))){
var inst_372274 = cljs.core.async.close_BANG_.call(null,tc);
var inst_372275 = cljs.core.async.close_BANG_.call(null,fc);
var state_372301__$1 = (function (){var statearr_372321 = state_372301;
(statearr_372321[(8)] = inst_372274);

return statearr_372321;
})();
var statearr_372322_372379 = state_372301__$1;
(statearr_372322_372379[(2)] = inst_372275);

(statearr_372322_372379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372302 === (14))){
var inst_372288 = (state_372301[(2)]);
var state_372301__$1 = state_372301;
var statearr_372323_372385 = state_372301__$1;
(statearr_372323_372385[(2)] = inst_372288);

(statearr_372323_372385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372302 === (10))){
var state_372301__$1 = state_372301;
var statearr_372324_372388 = state_372301__$1;
(statearr_372324_372388[(2)] = fc);

(statearr_372324_372388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372302 === (8))){
var inst_372283 = (state_372301[(2)]);
var state_372301__$1 = state_372301;
if(cljs.core.truth_(inst_372283)){
var statearr_372326_372389 = state_372301__$1;
(statearr_372326_372389[(1)] = (12));

} else {
var statearr_372328_372390 = state_372301__$1;
(statearr_372328_372390[(1)] = (13));

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
});})(c__38100__auto___372346,tc,fc))
;
return ((function (switch__38079__auto__,c__38100__auto___372346,tc,fc){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_372334 = [null,null,null,null,null,null,null,null,null];
(statearr_372334[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_372334[(1)] = (1));

return statearr_372334;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_372301){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_372301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e372335){if((e372335 instanceof Object)){
var ex__38083__auto__ = e372335;
var statearr_372336_372396 = state_372301;
(statearr_372336_372396[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372397 = state_372301;
state_372301 = G__372397;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_372301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_372301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___372346,tc,fc))
})();
var state__38102__auto__ = (function (){var statearr_372337 = f__38101__auto__.call(null);
(statearr_372337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___372346);

return statearr_372337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___372346,tc,fc))
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
return (function (state_372459){
var state_val_372460 = (state_372459[(1)]);
if((state_val_372460 === (1))){
var inst_372445 = init;
var state_372459__$1 = (function (){var statearr_372461 = state_372459;
(statearr_372461[(7)] = inst_372445);

return statearr_372461;
})();
var statearr_372462_372485 = state_372459__$1;
(statearr_372462_372485[(2)] = null);

(statearr_372462_372485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372460 === (2))){
var state_372459__$1 = state_372459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_372459__$1,(4),ch);
} else {
if((state_val_372460 === (3))){
var inst_372457 = (state_372459[(2)]);
var state_372459__$1 = state_372459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372459__$1,inst_372457);
} else {
if((state_val_372460 === (4))){
var inst_372448 = (state_372459[(8)]);
var inst_372448__$1 = (state_372459[(2)]);
var inst_372449 = (inst_372448__$1 == null);
var state_372459__$1 = (function (){var statearr_372463 = state_372459;
(statearr_372463[(8)] = inst_372448__$1);

return statearr_372463;
})();
if(cljs.core.truth_(inst_372449)){
var statearr_372464_372490 = state_372459__$1;
(statearr_372464_372490[(1)] = (5));

} else {
var statearr_372465_372491 = state_372459__$1;
(statearr_372465_372491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372460 === (5))){
var inst_372445 = (state_372459[(7)]);
var state_372459__$1 = state_372459;
var statearr_372466_372492 = state_372459__$1;
(statearr_372466_372492[(2)] = inst_372445);

(statearr_372466_372492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372460 === (6))){
var inst_372448 = (state_372459[(8)]);
var inst_372445 = (state_372459[(7)]);
var inst_372452 = f.call(null,inst_372445,inst_372448);
var inst_372445__$1 = inst_372452;
var state_372459__$1 = (function (){var statearr_372469 = state_372459;
(statearr_372469[(7)] = inst_372445__$1);

return statearr_372469;
})();
var statearr_372470_372496 = state_372459__$1;
(statearr_372470_372496[(2)] = null);

(statearr_372470_372496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372460 === (7))){
var inst_372455 = (state_372459[(2)]);
var state_372459__$1 = state_372459;
var statearr_372472_372502 = state_372459__$1;
(statearr_372472_372502[(2)] = inst_372455);

(statearr_372472_372502[(1)] = (3));


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
var statearr_372476 = [null,null,null,null,null,null,null,null,null];
(statearr_372476[(0)] = cljs$core$async$reduce_$_state_machine__38080__auto__);

(statearr_372476[(1)] = (1));

return statearr_372476;
});
var cljs$core$async$reduce_$_state_machine__38080__auto____1 = (function (state_372459){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_372459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e372477){if((e372477 instanceof Object)){
var ex__38083__auto__ = e372477;
var statearr_372478_372513 = state_372459;
(statearr_372478_372513[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372514 = state_372459;
state_372459 = G__372514;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38080__auto__ = function(state_372459){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38080__auto____1.call(this,state_372459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38080__auto____0;
cljs$core$async$reduce_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38080__auto____1;
return cljs$core$async$reduce_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_372480 = f__38101__auto__.call(null);
(statearr_372480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_372480;
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
var args372518 = [];
var len__36260__auto___372584 = arguments.length;
var i__36261__auto___372588 = (0);
while(true){
if((i__36261__auto___372588 < len__36260__auto___372584)){
args372518.push((arguments[i__36261__auto___372588]));

var G__372591 = (i__36261__auto___372588 + (1));
i__36261__auto___372588 = G__372591;
continue;
} else {
}
break;
}

var G__372520 = args372518.length;
switch (G__372520) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args372518.length)].join('')));

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
return (function (state_372552){
var state_val_372553 = (state_372552[(1)]);
if((state_val_372553 === (7))){
var inst_372530 = (state_372552[(2)]);
var state_372552__$1 = state_372552;
var statearr_372554_372599 = state_372552__$1;
(statearr_372554_372599[(2)] = inst_372530);

(statearr_372554_372599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372553 === (1))){
var inst_372524 = cljs.core.seq.call(null,coll);
var inst_372525 = inst_372524;
var state_372552__$1 = (function (){var statearr_372555 = state_372552;
(statearr_372555[(7)] = inst_372525);

return statearr_372555;
})();
var statearr_372556_372602 = state_372552__$1;
(statearr_372556_372602[(2)] = null);

(statearr_372556_372602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372553 === (4))){
var inst_372525 = (state_372552[(7)]);
var inst_372528 = cljs.core.first.call(null,inst_372525);
var state_372552__$1 = state_372552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_372552__$1,(7),ch,inst_372528);
} else {
if((state_val_372553 === (13))){
var inst_372546 = (state_372552[(2)]);
var state_372552__$1 = state_372552;
var statearr_372560_372604 = state_372552__$1;
(statearr_372560_372604[(2)] = inst_372546);

(statearr_372560_372604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372553 === (6))){
var inst_372533 = (state_372552[(2)]);
var state_372552__$1 = state_372552;
if(cljs.core.truth_(inst_372533)){
var statearr_372561_372609 = state_372552__$1;
(statearr_372561_372609[(1)] = (8));

} else {
var statearr_372562_372610 = state_372552__$1;
(statearr_372562_372610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372553 === (3))){
var inst_372550 = (state_372552[(2)]);
var state_372552__$1 = state_372552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_372552__$1,inst_372550);
} else {
if((state_val_372553 === (12))){
var state_372552__$1 = state_372552;
var statearr_372563_372613 = state_372552__$1;
(statearr_372563_372613[(2)] = null);

(statearr_372563_372613[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372553 === (2))){
var inst_372525 = (state_372552[(7)]);
var state_372552__$1 = state_372552;
if(cljs.core.truth_(inst_372525)){
var statearr_372564_372615 = state_372552__$1;
(statearr_372564_372615[(1)] = (4));

} else {
var statearr_372565_372616 = state_372552__$1;
(statearr_372565_372616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372553 === (11))){
var inst_372543 = cljs.core.async.close_BANG_.call(null,ch);
var state_372552__$1 = state_372552;
var statearr_372566_372617 = state_372552__$1;
(statearr_372566_372617[(2)] = inst_372543);

(statearr_372566_372617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372553 === (9))){
var state_372552__$1 = state_372552;
if(cljs.core.truth_(close_QMARK_)){
var statearr_372567_372620 = state_372552__$1;
(statearr_372567_372620[(1)] = (11));

} else {
var statearr_372569_372621 = state_372552__$1;
(statearr_372569_372621[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372553 === (5))){
var inst_372525 = (state_372552[(7)]);
var state_372552__$1 = state_372552;
var statearr_372570_372625 = state_372552__$1;
(statearr_372570_372625[(2)] = inst_372525);

(statearr_372570_372625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372553 === (10))){
var inst_372548 = (state_372552[(2)]);
var state_372552__$1 = state_372552;
var statearr_372571_372626 = state_372552__$1;
(statearr_372571_372626[(2)] = inst_372548);

(statearr_372571_372626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_372553 === (8))){
var inst_372525 = (state_372552[(7)]);
var inst_372535 = cljs.core.next.call(null,inst_372525);
var inst_372525__$1 = inst_372535;
var state_372552__$1 = (function (){var statearr_372572 = state_372552;
(statearr_372572[(7)] = inst_372525__$1);

return statearr_372572;
})();
var statearr_372573_372628 = state_372552__$1;
(statearr_372573_372628[(2)] = null);

(statearr_372573_372628[(1)] = (2));


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
var statearr_372580 = [null,null,null,null,null,null,null,null];
(statearr_372580[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_372580[(1)] = (1));

return statearr_372580;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_372552){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_372552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e372581){if((e372581 instanceof Object)){
var ex__38083__auto__ = e372581;
var statearr_372582_372631 = state_372552;
(statearr_372582_372631[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_372552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e372581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__372632 = state_372552;
state_372552 = G__372632;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_372552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_372552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_372583 = f__38101__auto__.call(null);
(statearr_372583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_372583;
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
if(typeof cljs.core.async.t_cljs$core$async372924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async372924 = (function (mult,ch,cs,meta372925){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta372925 = meta372925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async372924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_372926,meta372925__$1){
var self__ = this;
var _372926__$1 = this;
return (new cljs.core.async.t_cljs$core$async372924(self__.mult,self__.ch,self__.cs,meta372925__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async372924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_372926){
var self__ = this;
var _372926__$1 = this;
return self__.meta372925;
});})(cs))
;

cljs.core.async.t_cljs$core$async372924.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async372924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async372924.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async372924.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async372924.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async372924.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async372924.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta372925","meta372925",-616550855,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async372924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async372924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async372924";

cljs.core.async.t_cljs$core$async372924.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async372924");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async372924 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async372924(mult__$1,ch__$1,cs__$1,meta372925){
return (new cljs.core.async.t_cljs$core$async372924(mult__$1,ch__$1,cs__$1,meta372925));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async372924(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38100__auto___373206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___373206,cs,m,dchan,dctr,done){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___373206,cs,m,dchan,dctr,done){
return (function (state_373063){
var state_val_373064 = (state_373063[(1)]);
if((state_val_373064 === (7))){
var inst_373059 = (state_373063[(2)]);
var state_373063__$1 = state_373063;
var statearr_373065_373209 = state_373063__$1;
(statearr_373065_373209[(2)] = inst_373059);

(statearr_373065_373209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (20))){
var inst_372961 = (state_373063[(7)]);
var inst_372971 = cljs.core.first.call(null,inst_372961);
var inst_372972 = cljs.core.nth.call(null,inst_372971,(0),null);
var inst_372973 = cljs.core.nth.call(null,inst_372971,(1),null);
var state_373063__$1 = (function (){var statearr_373066 = state_373063;
(statearr_373066[(8)] = inst_372972);

return statearr_373066;
})();
if(cljs.core.truth_(inst_372973)){
var statearr_373069_373213 = state_373063__$1;
(statearr_373069_373213[(1)] = (22));

} else {
var statearr_373070_373214 = state_373063__$1;
(statearr_373070_373214[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (27))){
var inst_373008 = (state_373063[(9)]);
var inst_373001 = (state_373063[(10)]);
var inst_372932 = (state_373063[(11)]);
var inst_373003 = (state_373063[(12)]);
var inst_373008__$1 = cljs.core._nth.call(null,inst_373001,inst_373003);
var inst_373009 = cljs.core.async.put_BANG_.call(null,inst_373008__$1,inst_372932,done);
var state_373063__$1 = (function (){var statearr_373074 = state_373063;
(statearr_373074[(9)] = inst_373008__$1);

return statearr_373074;
})();
if(cljs.core.truth_(inst_373009)){
var statearr_373075_373218 = state_373063__$1;
(statearr_373075_373218[(1)] = (30));

} else {
var statearr_373076_373219 = state_373063__$1;
(statearr_373076_373219[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (1))){
var state_373063__$1 = state_373063;
var statearr_373078_373220 = state_373063__$1;
(statearr_373078_373220[(2)] = null);

(statearr_373078_373220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (24))){
var inst_372961 = (state_373063[(7)]);
var inst_372978 = (state_373063[(2)]);
var inst_372979 = cljs.core.next.call(null,inst_372961);
var inst_372941 = inst_372979;
var inst_372942 = null;
var inst_372943 = (0);
var inst_372944 = (0);
var state_373063__$1 = (function (){var statearr_373085 = state_373063;
(statearr_373085[(13)] = inst_372941);

(statearr_373085[(14)] = inst_372944);

(statearr_373085[(15)] = inst_372943);

(statearr_373085[(16)] = inst_372978);

(statearr_373085[(17)] = inst_372942);

return statearr_373085;
})();
var statearr_373086_373224 = state_373063__$1;
(statearr_373086_373224[(2)] = null);

(statearr_373086_373224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (39))){
var state_373063__$1 = state_373063;
var statearr_373090_373225 = state_373063__$1;
(statearr_373090_373225[(2)] = null);

(statearr_373090_373225[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (4))){
var inst_372932 = (state_373063[(11)]);
var inst_372932__$1 = (state_373063[(2)]);
var inst_372933 = (inst_372932__$1 == null);
var state_373063__$1 = (function (){var statearr_373091 = state_373063;
(statearr_373091[(11)] = inst_372932__$1);

return statearr_373091;
})();
if(cljs.core.truth_(inst_372933)){
var statearr_373092_373226 = state_373063__$1;
(statearr_373092_373226[(1)] = (5));

} else {
var statearr_373093_373227 = state_373063__$1;
(statearr_373093_373227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (15))){
var inst_372941 = (state_373063[(13)]);
var inst_372944 = (state_373063[(14)]);
var inst_372943 = (state_373063[(15)]);
var inst_372942 = (state_373063[(17)]);
var inst_372957 = (state_373063[(2)]);
var inst_372958 = (inst_372944 + (1));
var tmp373087 = inst_372941;
var tmp373088 = inst_372943;
var tmp373089 = inst_372942;
var inst_372941__$1 = tmp373087;
var inst_372942__$1 = tmp373089;
var inst_372943__$1 = tmp373088;
var inst_372944__$1 = inst_372958;
var state_373063__$1 = (function (){var statearr_373094 = state_373063;
(statearr_373094[(13)] = inst_372941__$1);

(statearr_373094[(14)] = inst_372944__$1);

(statearr_373094[(15)] = inst_372943__$1);

(statearr_373094[(18)] = inst_372957);

(statearr_373094[(17)] = inst_372942__$1);

return statearr_373094;
})();
var statearr_373097_373231 = state_373063__$1;
(statearr_373097_373231[(2)] = null);

(statearr_373097_373231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (21))){
var inst_372982 = (state_373063[(2)]);
var state_373063__$1 = state_373063;
var statearr_373102_373232 = state_373063__$1;
(statearr_373102_373232[(2)] = inst_372982);

(statearr_373102_373232[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (31))){
var inst_373008 = (state_373063[(9)]);
var inst_373012 = done.call(null,null);
var inst_373013 = cljs.core.async.untap_STAR_.call(null,m,inst_373008);
var state_373063__$1 = (function (){var statearr_373103 = state_373063;
(statearr_373103[(19)] = inst_373012);

return statearr_373103;
})();
var statearr_373104_373236 = state_373063__$1;
(statearr_373104_373236[(2)] = inst_373013);

(statearr_373104_373236[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (32))){
var inst_373000 = (state_373063[(20)]);
var inst_373001 = (state_373063[(10)]);
var inst_373002 = (state_373063[(21)]);
var inst_373003 = (state_373063[(12)]);
var inst_373015 = (state_373063[(2)]);
var inst_373016 = (inst_373003 + (1));
var tmp373098 = inst_373000;
var tmp373099 = inst_373001;
var tmp373100 = inst_373002;
var inst_373000__$1 = tmp373098;
var inst_373001__$1 = tmp373099;
var inst_373002__$1 = tmp373100;
var inst_373003__$1 = inst_373016;
var state_373063__$1 = (function (){var statearr_373105 = state_373063;
(statearr_373105[(20)] = inst_373000__$1);

(statearr_373105[(10)] = inst_373001__$1);

(statearr_373105[(22)] = inst_373015);

(statearr_373105[(21)] = inst_373002__$1);

(statearr_373105[(12)] = inst_373003__$1);

return statearr_373105;
})();
var statearr_373106_373239 = state_373063__$1;
(statearr_373106_373239[(2)] = null);

(statearr_373106_373239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (40))){
var inst_373030 = (state_373063[(23)]);
var inst_373034 = done.call(null,null);
var inst_373035 = cljs.core.async.untap_STAR_.call(null,m,inst_373030);
var state_373063__$1 = (function (){var statearr_373107 = state_373063;
(statearr_373107[(24)] = inst_373034);

return statearr_373107;
})();
var statearr_373108_373241 = state_373063__$1;
(statearr_373108_373241[(2)] = inst_373035);

(statearr_373108_373241[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (33))){
var inst_373019 = (state_373063[(25)]);
var inst_373022 = cljs.core.chunked_seq_QMARK_.call(null,inst_373019);
var state_373063__$1 = state_373063;
if(inst_373022){
var statearr_373111_373242 = state_373063__$1;
(statearr_373111_373242[(1)] = (36));

} else {
var statearr_373112_373243 = state_373063__$1;
(statearr_373112_373243[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (13))){
var inst_372951 = (state_373063[(26)]);
var inst_372954 = cljs.core.async.close_BANG_.call(null,inst_372951);
var state_373063__$1 = state_373063;
var statearr_373114_373244 = state_373063__$1;
(statearr_373114_373244[(2)] = inst_372954);

(statearr_373114_373244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (22))){
var inst_372972 = (state_373063[(8)]);
var inst_372975 = cljs.core.async.close_BANG_.call(null,inst_372972);
var state_373063__$1 = state_373063;
var statearr_373115_373248 = state_373063__$1;
(statearr_373115_373248[(2)] = inst_372975);

(statearr_373115_373248[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (36))){
var inst_373019 = (state_373063[(25)]);
var inst_373025 = cljs.core.chunk_first.call(null,inst_373019);
var inst_373026 = cljs.core.chunk_rest.call(null,inst_373019);
var inst_373027 = cljs.core.count.call(null,inst_373025);
var inst_373000 = inst_373026;
var inst_373001 = inst_373025;
var inst_373002 = inst_373027;
var inst_373003 = (0);
var state_373063__$1 = (function (){var statearr_373116 = state_373063;
(statearr_373116[(20)] = inst_373000);

(statearr_373116[(10)] = inst_373001);

(statearr_373116[(21)] = inst_373002);

(statearr_373116[(12)] = inst_373003);

return statearr_373116;
})();
var statearr_373117_373255 = state_373063__$1;
(statearr_373117_373255[(2)] = null);

(statearr_373117_373255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (41))){
var inst_373019 = (state_373063[(25)]);
var inst_373037 = (state_373063[(2)]);
var inst_373038 = cljs.core.next.call(null,inst_373019);
var inst_373000 = inst_373038;
var inst_373001 = null;
var inst_373002 = (0);
var inst_373003 = (0);
var state_373063__$1 = (function (){var statearr_373118 = state_373063;
(statearr_373118[(20)] = inst_373000);

(statearr_373118[(27)] = inst_373037);

(statearr_373118[(10)] = inst_373001);

(statearr_373118[(21)] = inst_373002);

(statearr_373118[(12)] = inst_373003);

return statearr_373118;
})();
var statearr_373121_373256 = state_373063__$1;
(statearr_373121_373256[(2)] = null);

(statearr_373121_373256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (43))){
var state_373063__$1 = state_373063;
var statearr_373127_373257 = state_373063__$1;
(statearr_373127_373257[(2)] = null);

(statearr_373127_373257[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (29))){
var inst_373046 = (state_373063[(2)]);
var state_373063__$1 = state_373063;
var statearr_373128_373258 = state_373063__$1;
(statearr_373128_373258[(2)] = inst_373046);

(statearr_373128_373258[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (44))){
var inst_373055 = (state_373063[(2)]);
var state_373063__$1 = (function (){var statearr_373129 = state_373063;
(statearr_373129[(28)] = inst_373055);

return statearr_373129;
})();
var statearr_373130_373259 = state_373063__$1;
(statearr_373130_373259[(2)] = null);

(statearr_373130_373259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (6))){
var inst_372992 = (state_373063[(29)]);
var inst_372991 = cljs.core.deref.call(null,cs);
var inst_372992__$1 = cljs.core.keys.call(null,inst_372991);
var inst_372993 = cljs.core.count.call(null,inst_372992__$1);
var inst_372994 = cljs.core.reset_BANG_.call(null,dctr,inst_372993);
var inst_372999 = cljs.core.seq.call(null,inst_372992__$1);
var inst_373000 = inst_372999;
var inst_373001 = null;
var inst_373002 = (0);
var inst_373003 = (0);
var state_373063__$1 = (function (){var statearr_373131 = state_373063;
(statearr_373131[(20)] = inst_373000);

(statearr_373131[(30)] = inst_372994);

(statearr_373131[(10)] = inst_373001);

(statearr_373131[(29)] = inst_372992__$1);

(statearr_373131[(21)] = inst_373002);

(statearr_373131[(12)] = inst_373003);

return statearr_373131;
})();
var statearr_373132_373264 = state_373063__$1;
(statearr_373132_373264[(2)] = null);

(statearr_373132_373264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (28))){
var inst_373000 = (state_373063[(20)]);
var inst_373019 = (state_373063[(25)]);
var inst_373019__$1 = cljs.core.seq.call(null,inst_373000);
var state_373063__$1 = (function (){var statearr_373134 = state_373063;
(statearr_373134[(25)] = inst_373019__$1);

return statearr_373134;
})();
if(inst_373019__$1){
var statearr_373135_373265 = state_373063__$1;
(statearr_373135_373265[(1)] = (33));

} else {
var statearr_373136_373267 = state_373063__$1;
(statearr_373136_373267[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (25))){
var inst_373002 = (state_373063[(21)]);
var inst_373003 = (state_373063[(12)]);
var inst_373005 = (inst_373003 < inst_373002);
var inst_373006 = inst_373005;
var state_373063__$1 = state_373063;
if(cljs.core.truth_(inst_373006)){
var statearr_373139_373268 = state_373063__$1;
(statearr_373139_373268[(1)] = (27));

} else {
var statearr_373140_373269 = state_373063__$1;
(statearr_373140_373269[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (34))){
var state_373063__$1 = state_373063;
var statearr_373142_373270 = state_373063__$1;
(statearr_373142_373270[(2)] = null);

(statearr_373142_373270[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (17))){
var state_373063__$1 = state_373063;
var statearr_373143_373271 = state_373063__$1;
(statearr_373143_373271[(2)] = null);

(statearr_373143_373271[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (3))){
var inst_373061 = (state_373063[(2)]);
var state_373063__$1 = state_373063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373063__$1,inst_373061);
} else {
if((state_val_373064 === (12))){
var inst_372987 = (state_373063[(2)]);
var state_373063__$1 = state_373063;
var statearr_373144_373272 = state_373063__$1;
(statearr_373144_373272[(2)] = inst_372987);

(statearr_373144_373272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (2))){
var state_373063__$1 = state_373063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373063__$1,(4),ch);
} else {
if((state_val_373064 === (23))){
var state_373063__$1 = state_373063;
var statearr_373145_373276 = state_373063__$1;
(statearr_373145_373276[(2)] = null);

(statearr_373145_373276[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (35))){
var inst_373044 = (state_373063[(2)]);
var state_373063__$1 = state_373063;
var statearr_373146_373277 = state_373063__$1;
(statearr_373146_373277[(2)] = inst_373044);

(statearr_373146_373277[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (19))){
var inst_372961 = (state_373063[(7)]);
var inst_372965 = cljs.core.chunk_first.call(null,inst_372961);
var inst_372966 = cljs.core.chunk_rest.call(null,inst_372961);
var inst_372967 = cljs.core.count.call(null,inst_372965);
var inst_372941 = inst_372966;
var inst_372942 = inst_372965;
var inst_372943 = inst_372967;
var inst_372944 = (0);
var state_373063__$1 = (function (){var statearr_373147 = state_373063;
(statearr_373147[(13)] = inst_372941);

(statearr_373147[(14)] = inst_372944);

(statearr_373147[(15)] = inst_372943);

(statearr_373147[(17)] = inst_372942);

return statearr_373147;
})();
var statearr_373148_373278 = state_373063__$1;
(statearr_373148_373278[(2)] = null);

(statearr_373148_373278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (11))){
var inst_372941 = (state_373063[(13)]);
var inst_372961 = (state_373063[(7)]);
var inst_372961__$1 = cljs.core.seq.call(null,inst_372941);
var state_373063__$1 = (function (){var statearr_373149 = state_373063;
(statearr_373149[(7)] = inst_372961__$1);

return statearr_373149;
})();
if(inst_372961__$1){
var statearr_373150_373279 = state_373063__$1;
(statearr_373150_373279[(1)] = (16));

} else {
var statearr_373151_373280 = state_373063__$1;
(statearr_373151_373280[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (9))){
var inst_372989 = (state_373063[(2)]);
var state_373063__$1 = state_373063;
var statearr_373153_373281 = state_373063__$1;
(statearr_373153_373281[(2)] = inst_372989);

(statearr_373153_373281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (5))){
var inst_372939 = cljs.core.deref.call(null,cs);
var inst_372940 = cljs.core.seq.call(null,inst_372939);
var inst_372941 = inst_372940;
var inst_372942 = null;
var inst_372943 = (0);
var inst_372944 = (0);
var state_373063__$1 = (function (){var statearr_373158 = state_373063;
(statearr_373158[(13)] = inst_372941);

(statearr_373158[(14)] = inst_372944);

(statearr_373158[(15)] = inst_372943);

(statearr_373158[(17)] = inst_372942);

return statearr_373158;
})();
var statearr_373160_373282 = state_373063__$1;
(statearr_373160_373282[(2)] = null);

(statearr_373160_373282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (14))){
var state_373063__$1 = state_373063;
var statearr_373161_373283 = state_373063__$1;
(statearr_373161_373283[(2)] = null);

(statearr_373161_373283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (45))){
var inst_373052 = (state_373063[(2)]);
var state_373063__$1 = state_373063;
var statearr_373162_373284 = state_373063__$1;
(statearr_373162_373284[(2)] = inst_373052);

(statearr_373162_373284[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (26))){
var inst_372992 = (state_373063[(29)]);
var inst_373048 = (state_373063[(2)]);
var inst_373049 = cljs.core.seq.call(null,inst_372992);
var state_373063__$1 = (function (){var statearr_373163 = state_373063;
(statearr_373163[(31)] = inst_373048);

return statearr_373163;
})();
if(inst_373049){
var statearr_373164_373286 = state_373063__$1;
(statearr_373164_373286[(1)] = (42));

} else {
var statearr_373165_373287 = state_373063__$1;
(statearr_373165_373287[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (16))){
var inst_372961 = (state_373063[(7)]);
var inst_372963 = cljs.core.chunked_seq_QMARK_.call(null,inst_372961);
var state_373063__$1 = state_373063;
if(inst_372963){
var statearr_373167_373288 = state_373063__$1;
(statearr_373167_373288[(1)] = (19));

} else {
var statearr_373169_373289 = state_373063__$1;
(statearr_373169_373289[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (38))){
var inst_373041 = (state_373063[(2)]);
var state_373063__$1 = state_373063;
var statearr_373171_373290 = state_373063__$1;
(statearr_373171_373290[(2)] = inst_373041);

(statearr_373171_373290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (30))){
var state_373063__$1 = state_373063;
var statearr_373172_373292 = state_373063__$1;
(statearr_373172_373292[(2)] = null);

(statearr_373172_373292[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (10))){
var inst_372944 = (state_373063[(14)]);
var inst_372942 = (state_373063[(17)]);
var inst_372950 = cljs.core._nth.call(null,inst_372942,inst_372944);
var inst_372951 = cljs.core.nth.call(null,inst_372950,(0),null);
var inst_372952 = cljs.core.nth.call(null,inst_372950,(1),null);
var state_373063__$1 = (function (){var statearr_373173 = state_373063;
(statearr_373173[(26)] = inst_372951);

return statearr_373173;
})();
if(cljs.core.truth_(inst_372952)){
var statearr_373174_373293 = state_373063__$1;
(statearr_373174_373293[(1)] = (13));

} else {
var statearr_373175_373294 = state_373063__$1;
(statearr_373175_373294[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (18))){
var inst_372985 = (state_373063[(2)]);
var state_373063__$1 = state_373063;
var statearr_373176_373295 = state_373063__$1;
(statearr_373176_373295[(2)] = inst_372985);

(statearr_373176_373295[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (42))){
var state_373063__$1 = state_373063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373063__$1,(45),dchan);
} else {
if((state_val_373064 === (37))){
var inst_372932 = (state_373063[(11)]);
var inst_373030 = (state_373063[(23)]);
var inst_373019 = (state_373063[(25)]);
var inst_373030__$1 = cljs.core.first.call(null,inst_373019);
var inst_373031 = cljs.core.async.put_BANG_.call(null,inst_373030__$1,inst_372932,done);
var state_373063__$1 = (function (){var statearr_373179 = state_373063;
(statearr_373179[(23)] = inst_373030__$1);

return statearr_373179;
})();
if(cljs.core.truth_(inst_373031)){
var statearr_373180_373297 = state_373063__$1;
(statearr_373180_373297[(1)] = (39));

} else {
var statearr_373182_373298 = state_373063__$1;
(statearr_373182_373298[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373064 === (8))){
var inst_372944 = (state_373063[(14)]);
var inst_372943 = (state_373063[(15)]);
var inst_372946 = (inst_372944 < inst_372943);
var inst_372947 = inst_372946;
var state_373063__$1 = state_373063;
if(cljs.core.truth_(inst_372947)){
var statearr_373183_373299 = state_373063__$1;
(statearr_373183_373299[(1)] = (10));

} else {
var statearr_373184_373300 = state_373063__$1;
(statearr_373184_373300[(1)] = (11));

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
});})(c__38100__auto___373206,cs,m,dchan,dctr,done))
;
return ((function (switch__38079__auto__,c__38100__auto___373206,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38080__auto__ = null;
var cljs$core$async$mult_$_state_machine__38080__auto____0 = (function (){
var statearr_373188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_373188[(0)] = cljs$core$async$mult_$_state_machine__38080__auto__);

(statearr_373188[(1)] = (1));

return statearr_373188;
});
var cljs$core$async$mult_$_state_machine__38080__auto____1 = (function (state_373063){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_373063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e373190){if((e373190 instanceof Object)){
var ex__38083__auto__ = e373190;
var statearr_373192_373302 = state_373063;
(statearr_373192_373302[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373303 = state_373063;
state_373063 = G__373303;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38080__auto__ = function(state_373063){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38080__auto____1.call(this,state_373063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38080__auto____0;
cljs$core$async$mult_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38080__auto____1;
return cljs$core$async$mult_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___373206,cs,m,dchan,dctr,done))
})();
var state__38102__auto__ = (function (){var statearr_373194 = f__38101__auto__.call(null);
(statearr_373194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___373206);

return statearr_373194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___373206,cs,m,dchan,dctr,done))
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
var args373304 = [];
var len__36260__auto___373307 = arguments.length;
var i__36261__auto___373308 = (0);
while(true){
if((i__36261__auto___373308 < len__36260__auto___373307)){
args373304.push((arguments[i__36261__auto___373308]));

var G__373309 = (i__36261__auto___373308 + (1));
i__36261__auto___373308 = G__373309;
continue;
} else {
}
break;
}

var G__373306 = args373304.length;
switch (G__373306) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args373304.length)].join('')));

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
var len__36260__auto___373334 = arguments.length;
var i__36261__auto___373335 = (0);
while(true){
if((i__36261__auto___373335 < len__36260__auto___373334)){
args__36267__auto__.push((arguments[i__36261__auto___373335]));

var G__373336 = (i__36261__auto___373335 + (1));
i__36261__auto___373335 = G__373336;
continue;
} else {
}
break;
}

var argseq__36268__auto__ = ((((3) < args__36267__auto__.length))?(new cljs.core.IndexedSeq(args__36267__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__36268__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__373324){
var map__373325 = p__373324;
var map__373325__$1 = ((((!((map__373325 == null)))?((((map__373325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__373325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__373325):map__373325);
var opts = map__373325__$1;
var statearr_373327_373337 = state;
(statearr_373327_373337[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__373325,map__373325__$1,opts){
return (function (val){
var statearr_373332_373339 = state;
(statearr_373332_373339[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__373325,map__373325__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_373333_373340 = state;
(statearr_373333_373340[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq373320){
var G__373321 = cljs.core.first.call(null,seq373320);
var seq373320__$1 = cljs.core.next.call(null,seq373320);
var G__373322 = cljs.core.first.call(null,seq373320__$1);
var seq373320__$2 = cljs.core.next.call(null,seq373320__$1);
var G__373323 = cljs.core.first.call(null,seq373320__$2);
var seq373320__$3 = cljs.core.next.call(null,seq373320__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__373321,G__373322,G__373323,seq373320__$3);
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
if(typeof cljs.core.async.t_cljs$core$async373511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async373511 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta373512){
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
this.meta373512 = meta373512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async373511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_373513,meta373512__$1){
var self__ = this;
var _373513__$1 = this;
return (new cljs.core.async.t_cljs$core$async373511(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta373512__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async373511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_373513){
var self__ = this;
var _373513__$1 = this;
return self__.meta373512;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async373511.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async373511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async373511.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async373511.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async373511.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async373511.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async373511.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async373511.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async373511.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta373512","meta373512",1596782757,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async373511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async373511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async373511";

cljs.core.async.t_cljs$core$async373511.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async373511");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async373511 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async373511(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta373512){
return (new cljs.core.async.t_cljs$core$async373511(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta373512));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async373511(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38100__auto___373691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___373691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___373691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_373611){
var state_val_373612 = (state_373611[(1)]);
if((state_val_373612 === (7))){
var inst_373529 = (state_373611[(2)]);
var state_373611__$1 = state_373611;
var statearr_373613_373692 = state_373611__$1;
(statearr_373613_373692[(2)] = inst_373529);

(statearr_373613_373692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (20))){
var inst_373541 = (state_373611[(7)]);
var state_373611__$1 = state_373611;
var statearr_373614_373693 = state_373611__$1;
(statearr_373614_373693[(2)] = inst_373541);

(statearr_373614_373693[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (27))){
var state_373611__$1 = state_373611;
var statearr_373615_373695 = state_373611__$1;
(statearr_373615_373695[(2)] = null);

(statearr_373615_373695[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (1))){
var inst_373517 = (state_373611[(8)]);
var inst_373517__$1 = calc_state.call(null);
var inst_373519 = (inst_373517__$1 == null);
var inst_373520 = cljs.core.not.call(null,inst_373519);
var state_373611__$1 = (function (){var statearr_373616 = state_373611;
(statearr_373616[(8)] = inst_373517__$1);

return statearr_373616;
})();
if(inst_373520){
var statearr_373617_373696 = state_373611__$1;
(statearr_373617_373696[(1)] = (2));

} else {
var statearr_373618_373697 = state_373611__$1;
(statearr_373618_373697[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (24))){
var inst_373571 = (state_373611[(9)]);
var inst_373585 = (state_373611[(10)]);
var inst_373564 = (state_373611[(11)]);
var inst_373585__$1 = inst_373564.call(null,inst_373571);
var state_373611__$1 = (function (){var statearr_373619 = state_373611;
(statearr_373619[(10)] = inst_373585__$1);

return statearr_373619;
})();
if(cljs.core.truth_(inst_373585__$1)){
var statearr_373620_373699 = state_373611__$1;
(statearr_373620_373699[(1)] = (29));

} else {
var statearr_373621_373700 = state_373611__$1;
(statearr_373621_373700[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (4))){
var inst_373532 = (state_373611[(2)]);
var state_373611__$1 = state_373611;
if(cljs.core.truth_(inst_373532)){
var statearr_373622_373701 = state_373611__$1;
(statearr_373622_373701[(1)] = (8));

} else {
var statearr_373623_373702 = state_373611__$1;
(statearr_373623_373702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (15))){
var inst_373558 = (state_373611[(2)]);
var state_373611__$1 = state_373611;
if(cljs.core.truth_(inst_373558)){
var statearr_373624_373703 = state_373611__$1;
(statearr_373624_373703[(1)] = (19));

} else {
var statearr_373625_373704 = state_373611__$1;
(statearr_373625_373704[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (21))){
var inst_373563 = (state_373611[(12)]);
var inst_373563__$1 = (state_373611[(2)]);
var inst_373564 = cljs.core.get.call(null,inst_373563__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_373565 = cljs.core.get.call(null,inst_373563__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_373566 = cljs.core.get.call(null,inst_373563__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_373611__$1 = (function (){var statearr_373626 = state_373611;
(statearr_373626[(12)] = inst_373563__$1);

(statearr_373626[(11)] = inst_373564);

(statearr_373626[(13)] = inst_373565);

return statearr_373626;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_373611__$1,(22),inst_373566);
} else {
if((state_val_373612 === (31))){
var inst_373593 = (state_373611[(2)]);
var state_373611__$1 = state_373611;
if(cljs.core.truth_(inst_373593)){
var statearr_373627_373706 = state_373611__$1;
(statearr_373627_373706[(1)] = (32));

} else {
var statearr_373628_373707 = state_373611__$1;
(statearr_373628_373707[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (32))){
var inst_373570 = (state_373611[(14)]);
var state_373611__$1 = state_373611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373611__$1,(35),out,inst_373570);
} else {
if((state_val_373612 === (33))){
var inst_373563 = (state_373611[(12)]);
var inst_373541 = inst_373563;
var state_373611__$1 = (function (){var statearr_373629 = state_373611;
(statearr_373629[(7)] = inst_373541);

return statearr_373629;
})();
var statearr_373630_373708 = state_373611__$1;
(statearr_373630_373708[(2)] = null);

(statearr_373630_373708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (13))){
var inst_373541 = (state_373611[(7)]);
var inst_373548 = inst_373541.cljs$lang$protocol_mask$partition0$;
var inst_373549 = (inst_373548 & (64));
var inst_373550 = inst_373541.cljs$core$ISeq$;
var inst_373551 = (inst_373549) || (inst_373550);
var state_373611__$1 = state_373611;
if(cljs.core.truth_(inst_373551)){
var statearr_373631_373709 = state_373611__$1;
(statearr_373631_373709[(1)] = (16));

} else {
var statearr_373632_373710 = state_373611__$1;
(statearr_373632_373710[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (22))){
var inst_373571 = (state_373611[(9)]);
var inst_373570 = (state_373611[(14)]);
var inst_373569 = (state_373611[(2)]);
var inst_373570__$1 = cljs.core.nth.call(null,inst_373569,(0),null);
var inst_373571__$1 = cljs.core.nth.call(null,inst_373569,(1),null);
var inst_373572 = (inst_373570__$1 == null);
var inst_373573 = cljs.core._EQ_.call(null,inst_373571__$1,change);
var inst_373574 = (inst_373572) || (inst_373573);
var state_373611__$1 = (function (){var statearr_373633 = state_373611;
(statearr_373633[(9)] = inst_373571__$1);

(statearr_373633[(14)] = inst_373570__$1);

return statearr_373633;
})();
if(cljs.core.truth_(inst_373574)){
var statearr_373634_373712 = state_373611__$1;
(statearr_373634_373712[(1)] = (23));

} else {
var statearr_373635_373713 = state_373611__$1;
(statearr_373635_373713[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (36))){
var inst_373563 = (state_373611[(12)]);
var inst_373541 = inst_373563;
var state_373611__$1 = (function (){var statearr_373636 = state_373611;
(statearr_373636[(7)] = inst_373541);

return statearr_373636;
})();
var statearr_373637_373714 = state_373611__$1;
(statearr_373637_373714[(2)] = null);

(statearr_373637_373714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (29))){
var inst_373585 = (state_373611[(10)]);
var state_373611__$1 = state_373611;
var statearr_373638_373715 = state_373611__$1;
(statearr_373638_373715[(2)] = inst_373585);

(statearr_373638_373715[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (6))){
var state_373611__$1 = state_373611;
var statearr_373639_373716 = state_373611__$1;
(statearr_373639_373716[(2)] = false);

(statearr_373639_373716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (28))){
var inst_373581 = (state_373611[(2)]);
var inst_373582 = calc_state.call(null);
var inst_373541 = inst_373582;
var state_373611__$1 = (function (){var statearr_373640 = state_373611;
(statearr_373640[(7)] = inst_373541);

(statearr_373640[(15)] = inst_373581);

return statearr_373640;
})();
var statearr_373641_373717 = state_373611__$1;
(statearr_373641_373717[(2)] = null);

(statearr_373641_373717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (25))){
var inst_373607 = (state_373611[(2)]);
var state_373611__$1 = state_373611;
var statearr_373642_373718 = state_373611__$1;
(statearr_373642_373718[(2)] = inst_373607);

(statearr_373642_373718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (34))){
var inst_373605 = (state_373611[(2)]);
var state_373611__$1 = state_373611;
var statearr_373643_373719 = state_373611__$1;
(statearr_373643_373719[(2)] = inst_373605);

(statearr_373643_373719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (17))){
var state_373611__$1 = state_373611;
var statearr_373644_373720 = state_373611__$1;
(statearr_373644_373720[(2)] = false);

(statearr_373644_373720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (3))){
var state_373611__$1 = state_373611;
var statearr_373645_373721 = state_373611__$1;
(statearr_373645_373721[(2)] = false);

(statearr_373645_373721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (12))){
var inst_373609 = (state_373611[(2)]);
var state_373611__$1 = state_373611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373611__$1,inst_373609);
} else {
if((state_val_373612 === (2))){
var inst_373517 = (state_373611[(8)]);
var inst_373522 = inst_373517.cljs$lang$protocol_mask$partition0$;
var inst_373523 = (inst_373522 & (64));
var inst_373524 = inst_373517.cljs$core$ISeq$;
var inst_373525 = (inst_373523) || (inst_373524);
var state_373611__$1 = state_373611;
if(cljs.core.truth_(inst_373525)){
var statearr_373646_373722 = state_373611__$1;
(statearr_373646_373722[(1)] = (5));

} else {
var statearr_373647_373723 = state_373611__$1;
(statearr_373647_373723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (23))){
var inst_373570 = (state_373611[(14)]);
var inst_373576 = (inst_373570 == null);
var state_373611__$1 = state_373611;
if(cljs.core.truth_(inst_373576)){
var statearr_373648_373724 = state_373611__$1;
(statearr_373648_373724[(1)] = (26));

} else {
var statearr_373649_373725 = state_373611__$1;
(statearr_373649_373725[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (35))){
var inst_373596 = (state_373611[(2)]);
var state_373611__$1 = state_373611;
if(cljs.core.truth_(inst_373596)){
var statearr_373650_373726 = state_373611__$1;
(statearr_373650_373726[(1)] = (36));

} else {
var statearr_373651_373727 = state_373611__$1;
(statearr_373651_373727[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (19))){
var inst_373541 = (state_373611[(7)]);
var inst_373560 = cljs.core.apply.call(null,cljs.core.hash_map,inst_373541);
var state_373611__$1 = state_373611;
var statearr_373652_373728 = state_373611__$1;
(statearr_373652_373728[(2)] = inst_373560);

(statearr_373652_373728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (11))){
var inst_373541 = (state_373611[(7)]);
var inst_373545 = (inst_373541 == null);
var inst_373546 = cljs.core.not.call(null,inst_373545);
var state_373611__$1 = state_373611;
if(inst_373546){
var statearr_373653_373729 = state_373611__$1;
(statearr_373653_373729[(1)] = (13));

} else {
var statearr_373654_373730 = state_373611__$1;
(statearr_373654_373730[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (9))){
var inst_373517 = (state_373611[(8)]);
var state_373611__$1 = state_373611;
var statearr_373655_373731 = state_373611__$1;
(statearr_373655_373731[(2)] = inst_373517);

(statearr_373655_373731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (5))){
var state_373611__$1 = state_373611;
var statearr_373656_373732 = state_373611__$1;
(statearr_373656_373732[(2)] = true);

(statearr_373656_373732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (14))){
var state_373611__$1 = state_373611;
var statearr_373657_373733 = state_373611__$1;
(statearr_373657_373733[(2)] = false);

(statearr_373657_373733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (26))){
var inst_373571 = (state_373611[(9)]);
var inst_373578 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_373571);
var state_373611__$1 = state_373611;
var statearr_373660_373734 = state_373611__$1;
(statearr_373660_373734[(2)] = inst_373578);

(statearr_373660_373734[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (16))){
var state_373611__$1 = state_373611;
var statearr_373662_373735 = state_373611__$1;
(statearr_373662_373735[(2)] = true);

(statearr_373662_373735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (38))){
var inst_373601 = (state_373611[(2)]);
var state_373611__$1 = state_373611;
var statearr_373663_373736 = state_373611__$1;
(statearr_373663_373736[(2)] = inst_373601);

(statearr_373663_373736[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (30))){
var inst_373571 = (state_373611[(9)]);
var inst_373564 = (state_373611[(11)]);
var inst_373565 = (state_373611[(13)]);
var inst_373588 = cljs.core.empty_QMARK_.call(null,inst_373564);
var inst_373589 = inst_373565.call(null,inst_373571);
var inst_373590 = cljs.core.not.call(null,inst_373589);
var inst_373591 = (inst_373588) && (inst_373590);
var state_373611__$1 = state_373611;
var statearr_373664_373737 = state_373611__$1;
(statearr_373664_373737[(2)] = inst_373591);

(statearr_373664_373737[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (10))){
var inst_373517 = (state_373611[(8)]);
var inst_373537 = (state_373611[(2)]);
var inst_373538 = cljs.core.get.call(null,inst_373537,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_373539 = cljs.core.get.call(null,inst_373537,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_373540 = cljs.core.get.call(null,inst_373537,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_373541 = inst_373517;
var state_373611__$1 = (function (){var statearr_373665 = state_373611;
(statearr_373665[(16)] = inst_373539);

(statearr_373665[(7)] = inst_373541);

(statearr_373665[(17)] = inst_373538);

(statearr_373665[(18)] = inst_373540);

return statearr_373665;
})();
var statearr_373666_373738 = state_373611__$1;
(statearr_373666_373738[(2)] = null);

(statearr_373666_373738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (18))){
var inst_373555 = (state_373611[(2)]);
var state_373611__$1 = state_373611;
var statearr_373673_373739 = state_373611__$1;
(statearr_373673_373739[(2)] = inst_373555);

(statearr_373673_373739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (37))){
var state_373611__$1 = state_373611;
var statearr_373674_373740 = state_373611__$1;
(statearr_373674_373740[(2)] = null);

(statearr_373674_373740[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373612 === (8))){
var inst_373517 = (state_373611[(8)]);
var inst_373534 = cljs.core.apply.call(null,cljs.core.hash_map,inst_373517);
var state_373611__$1 = state_373611;
var statearr_373675_373741 = state_373611__$1;
(statearr_373675_373741[(2)] = inst_373534);

(statearr_373675_373741[(1)] = (10));


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
});})(c__38100__auto___373691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38079__auto__,c__38100__auto___373691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38080__auto__ = null;
var cljs$core$async$mix_$_state_machine__38080__auto____0 = (function (){
var statearr_373679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_373679[(0)] = cljs$core$async$mix_$_state_machine__38080__auto__);

(statearr_373679[(1)] = (1));

return statearr_373679;
});
var cljs$core$async$mix_$_state_machine__38080__auto____1 = (function (state_373611){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_373611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e373680){if((e373680 instanceof Object)){
var ex__38083__auto__ = e373680;
var statearr_373681_373742 = state_373611;
(statearr_373681_373742[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__373745 = state_373611;
state_373611 = G__373745;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38080__auto__ = function(state_373611){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38080__auto____1.call(this,state_373611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38080__auto____0;
cljs$core$async$mix_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38080__auto____1;
return cljs$core$async$mix_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___373691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38102__auto__ = (function (){var statearr_373682 = f__38101__auto__.call(null);
(statearr_373682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___373691);

return statearr_373682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___373691,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args373754 = [];
var len__36260__auto___373767 = arguments.length;
var i__36261__auto___373768 = (0);
while(true){
if((i__36261__auto___373768 < len__36260__auto___373767)){
args373754.push((arguments[i__36261__auto___373768]));

var G__373769 = (i__36261__auto___373768 + (1));
i__36261__auto___373768 = G__373769;
continue;
} else {
}
break;
}

var G__373758 = args373754.length;
switch (G__373758) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args373754.length)].join('')));

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
var args373786 = [];
var len__36260__auto___373952 = arguments.length;
var i__36261__auto___373954 = (0);
while(true){
if((i__36261__auto___373954 < len__36260__auto___373952)){
args373786.push((arguments[i__36261__auto___373954]));

var G__373955 = (i__36261__auto___373954 + (1));
i__36261__auto___373954 = G__373955;
continue;
} else {
}
break;
}

var G__373791 = args373786.length;
switch (G__373791) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args373786.length)].join('')));

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
return (function (p1__373779_SHARP_){
if(cljs.core.truth_(p1__373779_SHARP_.call(null,topic))){
return p1__373779_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__373779_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35191__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async373795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async373795 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta373796){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta373796 = meta373796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async373795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_373797,meta373796__$1){
var self__ = this;
var _373797__$1 = this;
return (new cljs.core.async.t_cljs$core$async373795(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta373796__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async373795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_373797){
var self__ = this;
var _373797__$1 = this;
return self__.meta373796;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async373795.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async373795.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async373795.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async373795.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async373795.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async373795.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async373795.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async373795.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta373796","meta373796",1135876558,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async373795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async373795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async373795";

cljs.core.async.t_cljs$core$async373795.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async373795");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async373795 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async373795(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta373796){
return (new cljs.core.async.t_cljs$core$async373795(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta373796));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async373795(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38100__auto___373981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___373981,mults,ensure_mult,p){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___373981,mults,ensure_mult,p){
return (function (state_373880){
var state_val_373881 = (state_373880[(1)]);
if((state_val_373881 === (7))){
var inst_373876 = (state_373880[(2)]);
var state_373880__$1 = state_373880;
var statearr_373883_373984 = state_373880__$1;
(statearr_373883_373984[(2)] = inst_373876);

(statearr_373883_373984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (20))){
var state_373880__$1 = state_373880;
var statearr_373884_373986 = state_373880__$1;
(statearr_373884_373986[(2)] = null);

(statearr_373884_373986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (1))){
var state_373880__$1 = state_373880;
var statearr_373885_373988 = state_373880__$1;
(statearr_373885_373988[(2)] = null);

(statearr_373885_373988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (24))){
var inst_373859 = (state_373880[(7)]);
var inst_373868 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_373859);
var state_373880__$1 = state_373880;
var statearr_373886_373990 = state_373880__$1;
(statearr_373886_373990[(2)] = inst_373868);

(statearr_373886_373990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (4))){
var inst_373811 = (state_373880[(8)]);
var inst_373811__$1 = (state_373880[(2)]);
var inst_373812 = (inst_373811__$1 == null);
var state_373880__$1 = (function (){var statearr_373887 = state_373880;
(statearr_373887[(8)] = inst_373811__$1);

return statearr_373887;
})();
if(cljs.core.truth_(inst_373812)){
var statearr_373888_373994 = state_373880__$1;
(statearr_373888_373994[(1)] = (5));

} else {
var statearr_373889_373995 = state_373880__$1;
(statearr_373889_373995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (15))){
var inst_373853 = (state_373880[(2)]);
var state_373880__$1 = state_373880;
var statearr_373890_374002 = state_373880__$1;
(statearr_373890_374002[(2)] = inst_373853);

(statearr_373890_374002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (21))){
var inst_373873 = (state_373880[(2)]);
var state_373880__$1 = (function (){var statearr_373891 = state_373880;
(statearr_373891[(9)] = inst_373873);

return statearr_373891;
})();
var statearr_373892_374004 = state_373880__$1;
(statearr_373892_374004[(2)] = null);

(statearr_373892_374004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (13))){
var inst_373835 = (state_373880[(10)]);
var inst_373837 = cljs.core.chunked_seq_QMARK_.call(null,inst_373835);
var state_373880__$1 = state_373880;
if(inst_373837){
var statearr_373893_374005 = state_373880__$1;
(statearr_373893_374005[(1)] = (16));

} else {
var statearr_373894_374006 = state_373880__$1;
(statearr_373894_374006[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (22))){
var inst_373865 = (state_373880[(2)]);
var state_373880__$1 = state_373880;
if(cljs.core.truth_(inst_373865)){
var statearr_373895_374007 = state_373880__$1;
(statearr_373895_374007[(1)] = (23));

} else {
var statearr_373896_374009 = state_373880__$1;
(statearr_373896_374009[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (6))){
var inst_373859 = (state_373880[(7)]);
var inst_373811 = (state_373880[(8)]);
var inst_373861 = (state_373880[(11)]);
var inst_373859__$1 = topic_fn.call(null,inst_373811);
var inst_373860 = cljs.core.deref.call(null,mults);
var inst_373861__$1 = cljs.core.get.call(null,inst_373860,inst_373859__$1);
var state_373880__$1 = (function (){var statearr_373901 = state_373880;
(statearr_373901[(7)] = inst_373859__$1);

(statearr_373901[(11)] = inst_373861__$1);

return statearr_373901;
})();
if(cljs.core.truth_(inst_373861__$1)){
var statearr_373902_374010 = state_373880__$1;
(statearr_373902_374010[(1)] = (19));

} else {
var statearr_373903_374011 = state_373880__$1;
(statearr_373903_374011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (25))){
var inst_373870 = (state_373880[(2)]);
var state_373880__$1 = state_373880;
var statearr_373905_374012 = state_373880__$1;
(statearr_373905_374012[(2)] = inst_373870);

(statearr_373905_374012[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (17))){
var inst_373835 = (state_373880[(10)]);
var inst_373844 = cljs.core.first.call(null,inst_373835);
var inst_373845 = cljs.core.async.muxch_STAR_.call(null,inst_373844);
var inst_373846 = cljs.core.async.close_BANG_.call(null,inst_373845);
var inst_373847 = cljs.core.next.call(null,inst_373835);
var inst_373821 = inst_373847;
var inst_373822 = null;
var inst_373823 = (0);
var inst_373824 = (0);
var state_373880__$1 = (function (){var statearr_373907 = state_373880;
(statearr_373907[(12)] = inst_373846);

(statearr_373907[(13)] = inst_373823);

(statearr_373907[(14)] = inst_373822);

(statearr_373907[(15)] = inst_373824);

(statearr_373907[(16)] = inst_373821);

return statearr_373907;
})();
var statearr_373908_374021 = state_373880__$1;
(statearr_373908_374021[(2)] = null);

(statearr_373908_374021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (3))){
var inst_373878 = (state_373880[(2)]);
var state_373880__$1 = state_373880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_373880__$1,inst_373878);
} else {
if((state_val_373881 === (12))){
var inst_373855 = (state_373880[(2)]);
var state_373880__$1 = state_373880;
var statearr_373909_374028 = state_373880__$1;
(statearr_373909_374028[(2)] = inst_373855);

(statearr_373909_374028[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (2))){
var state_373880__$1 = state_373880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_373880__$1,(4),ch);
} else {
if((state_val_373881 === (23))){
var state_373880__$1 = state_373880;
var statearr_373911_374031 = state_373880__$1;
(statearr_373911_374031[(2)] = null);

(statearr_373911_374031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (19))){
var inst_373811 = (state_373880[(8)]);
var inst_373861 = (state_373880[(11)]);
var inst_373863 = cljs.core.async.muxch_STAR_.call(null,inst_373861);
var state_373880__$1 = state_373880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_373880__$1,(22),inst_373863,inst_373811);
} else {
if((state_val_373881 === (11))){
var inst_373835 = (state_373880[(10)]);
var inst_373821 = (state_373880[(16)]);
var inst_373835__$1 = cljs.core.seq.call(null,inst_373821);
var state_373880__$1 = (function (){var statearr_373913 = state_373880;
(statearr_373913[(10)] = inst_373835__$1);

return statearr_373913;
})();
if(inst_373835__$1){
var statearr_373914_374035 = state_373880__$1;
(statearr_373914_374035[(1)] = (13));

} else {
var statearr_373915_374036 = state_373880__$1;
(statearr_373915_374036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (9))){
var inst_373857 = (state_373880[(2)]);
var state_373880__$1 = state_373880;
var statearr_373916_374038 = state_373880__$1;
(statearr_373916_374038[(2)] = inst_373857);

(statearr_373916_374038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (5))){
var inst_373818 = cljs.core.deref.call(null,mults);
var inst_373819 = cljs.core.vals.call(null,inst_373818);
var inst_373820 = cljs.core.seq.call(null,inst_373819);
var inst_373821 = inst_373820;
var inst_373822 = null;
var inst_373823 = (0);
var inst_373824 = (0);
var state_373880__$1 = (function (){var statearr_373924 = state_373880;
(statearr_373924[(13)] = inst_373823);

(statearr_373924[(14)] = inst_373822);

(statearr_373924[(15)] = inst_373824);

(statearr_373924[(16)] = inst_373821);

return statearr_373924;
})();
var statearr_373925_374043 = state_373880__$1;
(statearr_373925_374043[(2)] = null);

(statearr_373925_374043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (14))){
var state_373880__$1 = state_373880;
var statearr_373929_374050 = state_373880__$1;
(statearr_373929_374050[(2)] = null);

(statearr_373929_374050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (16))){
var inst_373835 = (state_373880[(10)]);
var inst_373839 = cljs.core.chunk_first.call(null,inst_373835);
var inst_373840 = cljs.core.chunk_rest.call(null,inst_373835);
var inst_373841 = cljs.core.count.call(null,inst_373839);
var inst_373821 = inst_373840;
var inst_373822 = inst_373839;
var inst_373823 = inst_373841;
var inst_373824 = (0);
var state_373880__$1 = (function (){var statearr_373931 = state_373880;
(statearr_373931[(13)] = inst_373823);

(statearr_373931[(14)] = inst_373822);

(statearr_373931[(15)] = inst_373824);

(statearr_373931[(16)] = inst_373821);

return statearr_373931;
})();
var statearr_373933_374052 = state_373880__$1;
(statearr_373933_374052[(2)] = null);

(statearr_373933_374052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (10))){
var inst_373823 = (state_373880[(13)]);
var inst_373822 = (state_373880[(14)]);
var inst_373824 = (state_373880[(15)]);
var inst_373821 = (state_373880[(16)]);
var inst_373829 = cljs.core._nth.call(null,inst_373822,inst_373824);
var inst_373830 = cljs.core.async.muxch_STAR_.call(null,inst_373829);
var inst_373831 = cljs.core.async.close_BANG_.call(null,inst_373830);
var inst_373832 = (inst_373824 + (1));
var tmp373926 = inst_373823;
var tmp373927 = inst_373822;
var tmp373928 = inst_373821;
var inst_373821__$1 = tmp373928;
var inst_373822__$1 = tmp373927;
var inst_373823__$1 = tmp373926;
var inst_373824__$1 = inst_373832;
var state_373880__$1 = (function (){var statearr_373934 = state_373880;
(statearr_373934[(17)] = inst_373831);

(statearr_373934[(13)] = inst_373823__$1);

(statearr_373934[(14)] = inst_373822__$1);

(statearr_373934[(15)] = inst_373824__$1);

(statearr_373934[(16)] = inst_373821__$1);

return statearr_373934;
})();
var statearr_373936_374054 = state_373880__$1;
(statearr_373936_374054[(2)] = null);

(statearr_373936_374054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (18))){
var inst_373850 = (state_373880[(2)]);
var state_373880__$1 = state_373880;
var statearr_373937_374055 = state_373880__$1;
(statearr_373937_374055[(2)] = inst_373850);

(statearr_373937_374055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_373881 === (8))){
var inst_373823 = (state_373880[(13)]);
var inst_373824 = (state_373880[(15)]);
var inst_373826 = (inst_373824 < inst_373823);
var inst_373827 = inst_373826;
var state_373880__$1 = state_373880;
if(cljs.core.truth_(inst_373827)){
var statearr_373939_374059 = state_373880__$1;
(statearr_373939_374059[(1)] = (10));

} else {
var statearr_373940_374060 = state_373880__$1;
(statearr_373940_374060[(1)] = (11));

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
});})(c__38100__auto___373981,mults,ensure_mult,p))
;
return ((function (switch__38079__auto__,c__38100__auto___373981,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_373945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_373945[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_373945[(1)] = (1));

return statearr_373945;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_373880){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_373880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e373947){if((e373947 instanceof Object)){
var ex__38083__auto__ = e373947;
var statearr_373948_374061 = state_373880;
(statearr_373948_374061[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_373880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e373947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__374062 = state_373880;
state_373880 = G__374062;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_373880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_373880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___373981,mults,ensure_mult,p))
})();
var state__38102__auto__ = (function (){var statearr_373950 = f__38101__auto__.call(null);
(statearr_373950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___373981);

return statearr_373950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___373981,mults,ensure_mult,p))
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
var args374064 = [];
var len__36260__auto___374067 = arguments.length;
var i__36261__auto___374068 = (0);
while(true){
if((i__36261__auto___374068 < len__36260__auto___374067)){
args374064.push((arguments[i__36261__auto___374068]));

var G__374069 = (i__36261__auto___374068 + (1));
i__36261__auto___374068 = G__374069;
continue;
} else {
}
break;
}

var G__374066 = args374064.length;
switch (G__374066) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args374064.length)].join('')));

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
var args374071 = [];
var len__36260__auto___374075 = arguments.length;
var i__36261__auto___374076 = (0);
while(true){
if((i__36261__auto___374076 < len__36260__auto___374075)){
args374071.push((arguments[i__36261__auto___374076]));

var G__374077 = (i__36261__auto___374076 + (1));
i__36261__auto___374076 = G__374077;
continue;
} else {
}
break;
}

var G__374074 = args374071.length;
switch (G__374074) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args374071.length)].join('')));

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
var args374080 = [];
var len__36260__auto___374158 = arguments.length;
var i__36261__auto___374159 = (0);
while(true){
if((i__36261__auto___374159 < len__36260__auto___374158)){
args374080.push((arguments[i__36261__auto___374159]));

var G__374160 = (i__36261__auto___374159 + (1));
i__36261__auto___374159 = G__374160;
continue;
} else {
}
break;
}

var G__374082 = args374080.length;
switch (G__374082) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args374080.length)].join('')));

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
var c__38100__auto___374166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___374166,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___374166,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_374122){
var state_val_374123 = (state_374122[(1)]);
if((state_val_374123 === (7))){
var state_374122__$1 = state_374122;
var statearr_374124_374170 = state_374122__$1;
(statearr_374124_374170[(2)] = null);

(statearr_374124_374170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374123 === (1))){
var state_374122__$1 = state_374122;
var statearr_374125_374171 = state_374122__$1;
(statearr_374125_374171[(2)] = null);

(statearr_374125_374171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374123 === (4))){
var inst_374085 = (state_374122[(7)]);
var inst_374088 = (inst_374085 < cnt);
var state_374122__$1 = state_374122;
if(cljs.core.truth_(inst_374088)){
var statearr_374126_374173 = state_374122__$1;
(statearr_374126_374173[(1)] = (6));

} else {
var statearr_374127_374174 = state_374122__$1;
(statearr_374127_374174[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374123 === (15))){
var inst_374118 = (state_374122[(2)]);
var state_374122__$1 = state_374122;
var statearr_374129_374175 = state_374122__$1;
(statearr_374129_374175[(2)] = inst_374118);

(statearr_374129_374175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374123 === (13))){
var inst_374111 = cljs.core.async.close_BANG_.call(null,out);
var state_374122__$1 = state_374122;
var statearr_374130_374176 = state_374122__$1;
(statearr_374130_374176[(2)] = inst_374111);

(statearr_374130_374176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374123 === (6))){
var state_374122__$1 = state_374122;
var statearr_374131_374179 = state_374122__$1;
(statearr_374131_374179[(2)] = null);

(statearr_374131_374179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374123 === (3))){
var inst_374120 = (state_374122[(2)]);
var state_374122__$1 = state_374122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_374122__$1,inst_374120);
} else {
if((state_val_374123 === (12))){
var inst_374108 = (state_374122[(8)]);
var inst_374108__$1 = (state_374122[(2)]);
var inst_374109 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_374108__$1);
var state_374122__$1 = (function (){var statearr_374132 = state_374122;
(statearr_374132[(8)] = inst_374108__$1);

return statearr_374132;
})();
if(cljs.core.truth_(inst_374109)){
var statearr_374133_374181 = state_374122__$1;
(statearr_374133_374181[(1)] = (13));

} else {
var statearr_374134_374183 = state_374122__$1;
(statearr_374134_374183[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374123 === (2))){
var inst_374084 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_374085 = (0);
var state_374122__$1 = (function (){var statearr_374135 = state_374122;
(statearr_374135[(7)] = inst_374085);

(statearr_374135[(9)] = inst_374084);

return statearr_374135;
})();
var statearr_374136_374184 = state_374122__$1;
(statearr_374136_374184[(2)] = null);

(statearr_374136_374184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374123 === (11))){
var inst_374085 = (state_374122[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_374122,(10),Object,null,(9));
var inst_374095 = chs__$1.call(null,inst_374085);
var inst_374096 = done.call(null,inst_374085);
var inst_374097 = cljs.core.async.take_BANG_.call(null,inst_374095,inst_374096);
var state_374122__$1 = state_374122;
var statearr_374138_374188 = state_374122__$1;
(statearr_374138_374188[(2)] = inst_374097);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374123 === (9))){
var inst_374085 = (state_374122[(7)]);
var inst_374099 = (state_374122[(2)]);
var inst_374100 = (inst_374085 + (1));
var inst_374085__$1 = inst_374100;
var state_374122__$1 = (function (){var statearr_374139 = state_374122;
(statearr_374139[(7)] = inst_374085__$1);

(statearr_374139[(10)] = inst_374099);

return statearr_374139;
})();
var statearr_374140_374192 = state_374122__$1;
(statearr_374140_374192[(2)] = null);

(statearr_374140_374192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374123 === (5))){
var inst_374106 = (state_374122[(2)]);
var state_374122__$1 = (function (){var statearr_374141 = state_374122;
(statearr_374141[(11)] = inst_374106);

return statearr_374141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_374122__$1,(12),dchan);
} else {
if((state_val_374123 === (14))){
var inst_374108 = (state_374122[(8)]);
var inst_374113 = cljs.core.apply.call(null,f,inst_374108);
var state_374122__$1 = state_374122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374122__$1,(16),out,inst_374113);
} else {
if((state_val_374123 === (16))){
var inst_374115 = (state_374122[(2)]);
var state_374122__$1 = (function (){var statearr_374142 = state_374122;
(statearr_374142[(12)] = inst_374115);

return statearr_374142;
})();
var statearr_374143_374193 = state_374122__$1;
(statearr_374143_374193[(2)] = null);

(statearr_374143_374193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374123 === (10))){
var inst_374090 = (state_374122[(2)]);
var inst_374091 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_374122__$1 = (function (){var statearr_374144 = state_374122;
(statearr_374144[(13)] = inst_374090);

return statearr_374144;
})();
var statearr_374145_374194 = state_374122__$1;
(statearr_374145_374194[(2)] = inst_374091);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374122__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374123 === (8))){
var inst_374104 = (state_374122[(2)]);
var state_374122__$1 = state_374122;
var statearr_374148_374195 = state_374122__$1;
(statearr_374148_374195[(2)] = inst_374104);

(statearr_374148_374195[(1)] = (5));


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
});})(c__38100__auto___374166,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38079__auto__,c__38100__auto___374166,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_374153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_374153[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_374153[(1)] = (1));

return statearr_374153;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_374122){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_374122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e374154){if((e374154 instanceof Object)){
var ex__38083__auto__ = e374154;
var statearr_374155_374196 = state_374122;
(statearr_374155_374196[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e374154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__374197 = state_374122;
state_374122 = G__374197;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_374122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_374122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___374166,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38102__auto__ = (function (){var statearr_374157 = f__38101__auto__.call(null);
(statearr_374157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___374166);

return statearr_374157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___374166,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args374199 = [];
var len__36260__auto___374265 = arguments.length;
var i__36261__auto___374267 = (0);
while(true){
if((i__36261__auto___374267 < len__36260__auto___374265)){
args374199.push((arguments[i__36261__auto___374267]));

var G__374269 = (i__36261__auto___374267 + (1));
i__36261__auto___374267 = G__374269;
continue;
} else {
}
break;
}

var G__374201 = args374199.length;
switch (G__374201) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args374199.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___374272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___374272,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___374272,out){
return (function (state_374231){
var state_val_374232 = (state_374231[(1)]);
if((state_val_374232 === (7))){
var inst_374210 = (state_374231[(7)]);
var inst_374211 = (state_374231[(8)]);
var inst_374210__$1 = (state_374231[(2)]);
var inst_374211__$1 = cljs.core.nth.call(null,inst_374210__$1,(0),null);
var inst_374212 = cljs.core.nth.call(null,inst_374210__$1,(1),null);
var inst_374213 = (inst_374211__$1 == null);
var state_374231__$1 = (function (){var statearr_374234 = state_374231;
(statearr_374234[(9)] = inst_374212);

(statearr_374234[(7)] = inst_374210__$1);

(statearr_374234[(8)] = inst_374211__$1);

return statearr_374234;
})();
if(cljs.core.truth_(inst_374213)){
var statearr_374236_374279 = state_374231__$1;
(statearr_374236_374279[(1)] = (8));

} else {
var statearr_374237_374280 = state_374231__$1;
(statearr_374237_374280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374232 === (1))){
var inst_374202 = cljs.core.vec.call(null,chs);
var inst_374203 = inst_374202;
var state_374231__$1 = (function (){var statearr_374240 = state_374231;
(statearr_374240[(10)] = inst_374203);

return statearr_374240;
})();
var statearr_374241_374284 = state_374231__$1;
(statearr_374241_374284[(2)] = null);

(statearr_374241_374284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374232 === (4))){
var inst_374203 = (state_374231[(10)]);
var state_374231__$1 = state_374231;
return cljs.core.async.ioc_alts_BANG_.call(null,state_374231__$1,(7),inst_374203);
} else {
if((state_val_374232 === (6))){
var inst_374227 = (state_374231[(2)]);
var state_374231__$1 = state_374231;
var statearr_374244_374286 = state_374231__$1;
(statearr_374244_374286[(2)] = inst_374227);

(statearr_374244_374286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374232 === (3))){
var inst_374229 = (state_374231[(2)]);
var state_374231__$1 = state_374231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_374231__$1,inst_374229);
} else {
if((state_val_374232 === (2))){
var inst_374203 = (state_374231[(10)]);
var inst_374205 = cljs.core.count.call(null,inst_374203);
var inst_374206 = (inst_374205 > (0));
var state_374231__$1 = state_374231;
if(cljs.core.truth_(inst_374206)){
var statearr_374246_374287 = state_374231__$1;
(statearr_374246_374287[(1)] = (4));

} else {
var statearr_374247_374288 = state_374231__$1;
(statearr_374247_374288[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374232 === (11))){
var inst_374203 = (state_374231[(10)]);
var inst_374220 = (state_374231[(2)]);
var tmp374245 = inst_374203;
var inst_374203__$1 = tmp374245;
var state_374231__$1 = (function (){var statearr_374248 = state_374231;
(statearr_374248[(11)] = inst_374220);

(statearr_374248[(10)] = inst_374203__$1);

return statearr_374248;
})();
var statearr_374249_374294 = state_374231__$1;
(statearr_374249_374294[(2)] = null);

(statearr_374249_374294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374232 === (9))){
var inst_374211 = (state_374231[(8)]);
var state_374231__$1 = state_374231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374231__$1,(11),out,inst_374211);
} else {
if((state_val_374232 === (5))){
var inst_374225 = cljs.core.async.close_BANG_.call(null,out);
var state_374231__$1 = state_374231;
var statearr_374250_374296 = state_374231__$1;
(statearr_374250_374296[(2)] = inst_374225);

(statearr_374250_374296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374232 === (10))){
var inst_374223 = (state_374231[(2)]);
var state_374231__$1 = state_374231;
var statearr_374251_374299 = state_374231__$1;
(statearr_374251_374299[(2)] = inst_374223);

(statearr_374251_374299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374232 === (8))){
var inst_374203 = (state_374231[(10)]);
var inst_374212 = (state_374231[(9)]);
var inst_374210 = (state_374231[(7)]);
var inst_374211 = (state_374231[(8)]);
var inst_374215 = (function (){var cs = inst_374203;
var vec__374208 = inst_374210;
var v = inst_374211;
var c = inst_374212;
return ((function (cs,vec__374208,v,c,inst_374203,inst_374212,inst_374210,inst_374211,state_val_374232,c__38100__auto___374272,out){
return (function (p1__374198_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__374198_SHARP_);
});
;})(cs,vec__374208,v,c,inst_374203,inst_374212,inst_374210,inst_374211,state_val_374232,c__38100__auto___374272,out))
})();
var inst_374216 = cljs.core.filterv.call(null,inst_374215,inst_374203);
var inst_374203__$1 = inst_374216;
var state_374231__$1 = (function (){var statearr_374252 = state_374231;
(statearr_374252[(10)] = inst_374203__$1);

return statearr_374252;
})();
var statearr_374253_374302 = state_374231__$1;
(statearr_374253_374302[(2)] = null);

(statearr_374253_374302[(1)] = (2));


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
});})(c__38100__auto___374272,out))
;
return ((function (switch__38079__auto__,c__38100__auto___374272,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_374259 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_374259[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_374259[(1)] = (1));

return statearr_374259;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_374231){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_374231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e374261){if((e374261 instanceof Object)){
var ex__38083__auto__ = e374261;
var statearr_374262_374306 = state_374231;
(statearr_374262_374306[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e374261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__374311 = state_374231;
state_374231 = G__374311;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_374231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_374231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___374272,out))
})();
var state__38102__auto__ = (function (){var statearr_374263 = f__38101__auto__.call(null);
(statearr_374263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___374272);

return statearr_374263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___374272,out))
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
var args374316 = [];
var len__36260__auto___374385 = arguments.length;
var i__36261__auto___374386 = (0);
while(true){
if((i__36261__auto___374386 < len__36260__auto___374385)){
args374316.push((arguments[i__36261__auto___374386]));

var G__374389 = (i__36261__auto___374386 + (1));
i__36261__auto___374386 = G__374389;
continue;
} else {
}
break;
}

var G__374318 = args374316.length;
switch (G__374318) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args374316.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___374391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___374391,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___374391,out){
return (function (state_374345){
var state_val_374346 = (state_374345[(1)]);
if((state_val_374346 === (7))){
var inst_374327 = (state_374345[(7)]);
var inst_374327__$1 = (state_374345[(2)]);
var inst_374328 = (inst_374327__$1 == null);
var inst_374329 = cljs.core.not.call(null,inst_374328);
var state_374345__$1 = (function (){var statearr_374350 = state_374345;
(statearr_374350[(7)] = inst_374327__$1);

return statearr_374350;
})();
if(inst_374329){
var statearr_374351_374392 = state_374345__$1;
(statearr_374351_374392[(1)] = (8));

} else {
var statearr_374352_374393 = state_374345__$1;
(statearr_374352_374393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374346 === (1))){
var inst_374322 = (0);
var state_374345__$1 = (function (){var statearr_374353 = state_374345;
(statearr_374353[(8)] = inst_374322);

return statearr_374353;
})();
var statearr_374354_374394 = state_374345__$1;
(statearr_374354_374394[(2)] = null);

(statearr_374354_374394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374346 === (4))){
var state_374345__$1 = state_374345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_374345__$1,(7),ch);
} else {
if((state_val_374346 === (6))){
var inst_374340 = (state_374345[(2)]);
var state_374345__$1 = state_374345;
var statearr_374355_374395 = state_374345__$1;
(statearr_374355_374395[(2)] = inst_374340);

(statearr_374355_374395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374346 === (3))){
var inst_374342 = (state_374345[(2)]);
var inst_374343 = cljs.core.async.close_BANG_.call(null,out);
var state_374345__$1 = (function (){var statearr_374360 = state_374345;
(statearr_374360[(9)] = inst_374342);

return statearr_374360;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_374345__$1,inst_374343);
} else {
if((state_val_374346 === (2))){
var inst_374322 = (state_374345[(8)]);
var inst_374324 = (inst_374322 < n);
var state_374345__$1 = state_374345;
if(cljs.core.truth_(inst_374324)){
var statearr_374361_374398 = state_374345__$1;
(statearr_374361_374398[(1)] = (4));

} else {
var statearr_374363_374399 = state_374345__$1;
(statearr_374363_374399[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374346 === (11))){
var inst_374322 = (state_374345[(8)]);
var inst_374332 = (state_374345[(2)]);
var inst_374333 = (inst_374322 + (1));
var inst_374322__$1 = inst_374333;
var state_374345__$1 = (function (){var statearr_374364 = state_374345;
(statearr_374364[(8)] = inst_374322__$1);

(statearr_374364[(10)] = inst_374332);

return statearr_374364;
})();
var statearr_374365_374401 = state_374345__$1;
(statearr_374365_374401[(2)] = null);

(statearr_374365_374401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374346 === (9))){
var state_374345__$1 = state_374345;
var statearr_374366_374404 = state_374345__$1;
(statearr_374366_374404[(2)] = null);

(statearr_374366_374404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374346 === (5))){
var state_374345__$1 = state_374345;
var statearr_374368_374407 = state_374345__$1;
(statearr_374368_374407[(2)] = null);

(statearr_374368_374407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374346 === (10))){
var inst_374337 = (state_374345[(2)]);
var state_374345__$1 = state_374345;
var statearr_374369_374408 = state_374345__$1;
(statearr_374369_374408[(2)] = inst_374337);

(statearr_374369_374408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374346 === (8))){
var inst_374327 = (state_374345[(7)]);
var state_374345__$1 = state_374345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374345__$1,(11),out,inst_374327);
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
});})(c__38100__auto___374391,out))
;
return ((function (switch__38079__auto__,c__38100__auto___374391,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_374379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_374379[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_374379[(1)] = (1));

return statearr_374379;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_374345){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_374345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e374380){if((e374380 instanceof Object)){
var ex__38083__auto__ = e374380;
var statearr_374381_374413 = state_374345;
(statearr_374381_374413[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e374380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__374414 = state_374345;
state_374345 = G__374414;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_374345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_374345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___374391,out))
})();
var state__38102__auto__ = (function (){var statearr_374382 = f__38101__auto__.call(null);
(statearr_374382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___374391);

return statearr_374382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___374391,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async374426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async374426 = (function (map_LT_,f,ch,meta374427){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta374427 = meta374427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async374426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_374428,meta374427__$1){
var self__ = this;
var _374428__$1 = this;
return (new cljs.core.async.t_cljs$core$async374426(self__.map_LT_,self__.f,self__.ch,meta374427__$1));
});

cljs.core.async.t_cljs$core$async374426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_374428){
var self__ = this;
var _374428__$1 = this;
return self__.meta374427;
});

cljs.core.async.t_cljs$core$async374426.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async374426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async374426.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async374426.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async374426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async374431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async374431 = (function (map_LT_,f,ch,meta374427,_,fn1,meta374432){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta374427 = meta374427;
this._ = _;
this.fn1 = fn1;
this.meta374432 = meta374432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async374431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_374433,meta374432__$1){
var self__ = this;
var _374433__$1 = this;
return (new cljs.core.async.t_cljs$core$async374431(self__.map_LT_,self__.f,self__.ch,self__.meta374427,self__._,self__.fn1,meta374432__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async374431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_374433){
var self__ = this;
var _374433__$1 = this;
return self__.meta374432;
});})(___$1))
;

cljs.core.async.t_cljs$core$async374431.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async374431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async374431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__374418_SHARP_){
return f1.call(null,(((p1__374418_SHARP_ == null))?null:self__.f.call(null,p1__374418_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async374431.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta374427","meta374427",-883979149,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async374426","cljs.core.async/t_cljs$core$async374426",-1939707845,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta374432","meta374432",-1809477073,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async374431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async374431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async374431";

cljs.core.async.t_cljs$core$async374431.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async374431");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async374431 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async374431(map_LT___$1,f__$1,ch__$1,meta374427__$1,___$2,fn1__$1,meta374432){
return (new cljs.core.async.t_cljs$core$async374431(map_LT___$1,f__$1,ch__$1,meta374427__$1,___$2,fn1__$1,meta374432));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async374431(self__.map_LT_,self__.f,self__.ch,self__.meta374427,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async374426.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async374426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async374426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta374427","meta374427",-883979149,null)], null);
});

cljs.core.async.t_cljs$core$async374426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async374426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async374426";

cljs.core.async.t_cljs$core$async374426.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async374426");
});

cljs.core.async.__GT_t_cljs$core$async374426 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async374426(map_LT___$1,f__$1,ch__$1,meta374427){
return (new cljs.core.async.t_cljs$core$async374426(map_LT___$1,f__$1,ch__$1,meta374427));
});

}

return (new cljs.core.async.t_cljs$core$async374426(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async374461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async374461 = (function (map_GT_,f,ch,meta374462){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta374462 = meta374462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async374461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_374463,meta374462__$1){
var self__ = this;
var _374463__$1 = this;
return (new cljs.core.async.t_cljs$core$async374461(self__.map_GT_,self__.f,self__.ch,meta374462__$1));
});

cljs.core.async.t_cljs$core$async374461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_374463){
var self__ = this;
var _374463__$1 = this;
return self__.meta374462;
});

cljs.core.async.t_cljs$core$async374461.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async374461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async374461.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async374461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async374461.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async374461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async374461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta374462","meta374462",678253060,null)], null);
});

cljs.core.async.t_cljs$core$async374461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async374461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async374461";

cljs.core.async.t_cljs$core$async374461.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async374461");
});

cljs.core.async.__GT_t_cljs$core$async374461 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async374461(map_GT___$1,f__$1,ch__$1,meta374462){
return (new cljs.core.async.t_cljs$core$async374461(map_GT___$1,f__$1,ch__$1,meta374462));
});

}

return (new cljs.core.async.t_cljs$core$async374461(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async374476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async374476 = (function (filter_GT_,p,ch,meta374477){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta374477 = meta374477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async374476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_374478,meta374477__$1){
var self__ = this;
var _374478__$1 = this;
return (new cljs.core.async.t_cljs$core$async374476(self__.filter_GT_,self__.p,self__.ch,meta374477__$1));
});

cljs.core.async.t_cljs$core$async374476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_374478){
var self__ = this;
var _374478__$1 = this;
return self__.meta374477;
});

cljs.core.async.t_cljs$core$async374476.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async374476.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async374476.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async374476.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async374476.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async374476.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async374476.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async374476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta374477","meta374477",-1196958961,null)], null);
});

cljs.core.async.t_cljs$core$async374476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async374476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async374476";

cljs.core.async.t_cljs$core$async374476.cljs$lang$ctorPrWriter = (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"cljs.core.async/t_cljs$core$async374476");
});

cljs.core.async.__GT_t_cljs$core$async374476 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async374476(filter_GT___$1,p__$1,ch__$1,meta374477){
return (new cljs.core.async.t_cljs$core$async374476(filter_GT___$1,p__$1,ch__$1,meta374477));
});

}

return (new cljs.core.async.t_cljs$core$async374476(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args374487 = [];
var len__36260__auto___374545 = arguments.length;
var i__36261__auto___374546 = (0);
while(true){
if((i__36261__auto___374546 < len__36260__auto___374545)){
args374487.push((arguments[i__36261__auto___374546]));

var G__374547 = (i__36261__auto___374546 + (1));
i__36261__auto___374546 = G__374547;
continue;
} else {
}
break;
}

var G__374493 = args374487.length;
switch (G__374493) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args374487.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___374550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___374550,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___374550,out){
return (function (state_374514){
var state_val_374515 = (state_374514[(1)]);
if((state_val_374515 === (7))){
var inst_374510 = (state_374514[(2)]);
var state_374514__$1 = state_374514;
var statearr_374516_374551 = state_374514__$1;
(statearr_374516_374551[(2)] = inst_374510);

(statearr_374516_374551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374515 === (1))){
var state_374514__$1 = state_374514;
var statearr_374518_374552 = state_374514__$1;
(statearr_374518_374552[(2)] = null);

(statearr_374518_374552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374515 === (4))){
var inst_374496 = (state_374514[(7)]);
var inst_374496__$1 = (state_374514[(2)]);
var inst_374497 = (inst_374496__$1 == null);
var state_374514__$1 = (function (){var statearr_374521 = state_374514;
(statearr_374521[(7)] = inst_374496__$1);

return statearr_374521;
})();
if(cljs.core.truth_(inst_374497)){
var statearr_374522_374553 = state_374514__$1;
(statearr_374522_374553[(1)] = (5));

} else {
var statearr_374523_374554 = state_374514__$1;
(statearr_374523_374554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374515 === (6))){
var inst_374496 = (state_374514[(7)]);
var inst_374501 = p.call(null,inst_374496);
var state_374514__$1 = state_374514;
if(cljs.core.truth_(inst_374501)){
var statearr_374528_374555 = state_374514__$1;
(statearr_374528_374555[(1)] = (8));

} else {
var statearr_374529_374556 = state_374514__$1;
(statearr_374529_374556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374515 === (3))){
var inst_374512 = (state_374514[(2)]);
var state_374514__$1 = state_374514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_374514__$1,inst_374512);
} else {
if((state_val_374515 === (2))){
var state_374514__$1 = state_374514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_374514__$1,(4),ch);
} else {
if((state_val_374515 === (11))){
var inst_374504 = (state_374514[(2)]);
var state_374514__$1 = state_374514;
var statearr_374530_374557 = state_374514__$1;
(statearr_374530_374557[(2)] = inst_374504);

(statearr_374530_374557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374515 === (9))){
var state_374514__$1 = state_374514;
var statearr_374531_374558 = state_374514__$1;
(statearr_374531_374558[(2)] = null);

(statearr_374531_374558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374515 === (5))){
var inst_374499 = cljs.core.async.close_BANG_.call(null,out);
var state_374514__$1 = state_374514;
var statearr_374532_374559 = state_374514__$1;
(statearr_374532_374559[(2)] = inst_374499);

(statearr_374532_374559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374515 === (10))){
var inst_374507 = (state_374514[(2)]);
var state_374514__$1 = (function (){var statearr_374533 = state_374514;
(statearr_374533[(8)] = inst_374507);

return statearr_374533;
})();
var statearr_374534_374560 = state_374514__$1;
(statearr_374534_374560[(2)] = null);

(statearr_374534_374560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374515 === (8))){
var inst_374496 = (state_374514[(7)]);
var state_374514__$1 = state_374514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374514__$1,(11),out,inst_374496);
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
});})(c__38100__auto___374550,out))
;
return ((function (switch__38079__auto__,c__38100__auto___374550,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_374541 = [null,null,null,null,null,null,null,null,null];
(statearr_374541[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_374541[(1)] = (1));

return statearr_374541;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_374514){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_374514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e374542){if((e374542 instanceof Object)){
var ex__38083__auto__ = e374542;
var statearr_374543_374561 = state_374514;
(statearr_374543_374561[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e374542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__374562 = state_374514;
state_374514 = G__374562;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_374514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_374514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___374550,out))
})();
var state__38102__auto__ = (function (){var statearr_374544 = f__38101__auto__.call(null);
(statearr_374544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___374550);

return statearr_374544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___374550,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args374564 = [];
var len__36260__auto___374581 = arguments.length;
var i__36261__auto___374582 = (0);
while(true){
if((i__36261__auto___374582 < len__36260__auto___374581)){
args374564.push((arguments[i__36261__auto___374582]));

var G__374583 = (i__36261__auto___374582 + (1));
i__36261__auto___374582 = G__374583;
continue;
} else {
}
break;
}

var G__374573 = args374564.length;
switch (G__374573) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args374564.length)].join('')));

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
return (function (state_374763){
var state_val_374764 = (state_374763[(1)]);
if((state_val_374764 === (7))){
var inst_374759 = (state_374763[(2)]);
var state_374763__$1 = state_374763;
var statearr_374767_374816 = state_374763__$1;
(statearr_374767_374816[(2)] = inst_374759);

(statearr_374767_374816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (20))){
var inst_374728 = (state_374763[(7)]);
var inst_374740 = (state_374763[(2)]);
var inst_374741 = cljs.core.next.call(null,inst_374728);
var inst_374712 = inst_374741;
var inst_374713 = null;
var inst_374714 = (0);
var inst_374715 = (0);
var state_374763__$1 = (function (){var statearr_374769 = state_374763;
(statearr_374769[(8)] = inst_374714);

(statearr_374769[(9)] = inst_374712);

(statearr_374769[(10)] = inst_374713);

(statearr_374769[(11)] = inst_374715);

(statearr_374769[(12)] = inst_374740);

return statearr_374769;
})();
var statearr_374770_374821 = state_374763__$1;
(statearr_374770_374821[(2)] = null);

(statearr_374770_374821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (1))){
var state_374763__$1 = state_374763;
var statearr_374771_374822 = state_374763__$1;
(statearr_374771_374822[(2)] = null);

(statearr_374771_374822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (4))){
var inst_374701 = (state_374763[(13)]);
var inst_374701__$1 = (state_374763[(2)]);
var inst_374702 = (inst_374701__$1 == null);
var state_374763__$1 = (function (){var statearr_374772 = state_374763;
(statearr_374772[(13)] = inst_374701__$1);

return statearr_374772;
})();
if(cljs.core.truth_(inst_374702)){
var statearr_374773_374827 = state_374763__$1;
(statearr_374773_374827[(1)] = (5));

} else {
var statearr_374774_374828 = state_374763__$1;
(statearr_374774_374828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (15))){
var state_374763__$1 = state_374763;
var statearr_374778_374829 = state_374763__$1;
(statearr_374778_374829[(2)] = null);

(statearr_374778_374829[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (21))){
var state_374763__$1 = state_374763;
var statearr_374779_374830 = state_374763__$1;
(statearr_374779_374830[(2)] = null);

(statearr_374779_374830[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (13))){
var inst_374714 = (state_374763[(8)]);
var inst_374712 = (state_374763[(9)]);
var inst_374713 = (state_374763[(10)]);
var inst_374715 = (state_374763[(11)]);
var inst_374722 = (state_374763[(2)]);
var inst_374724 = (inst_374715 + (1));
var tmp374775 = inst_374714;
var tmp374776 = inst_374712;
var tmp374777 = inst_374713;
var inst_374712__$1 = tmp374776;
var inst_374713__$1 = tmp374777;
var inst_374714__$1 = tmp374775;
var inst_374715__$1 = inst_374724;
var state_374763__$1 = (function (){var statearr_374780 = state_374763;
(statearr_374780[(8)] = inst_374714__$1);

(statearr_374780[(14)] = inst_374722);

(statearr_374780[(9)] = inst_374712__$1);

(statearr_374780[(10)] = inst_374713__$1);

(statearr_374780[(11)] = inst_374715__$1);

return statearr_374780;
})();
var statearr_374781_374835 = state_374763__$1;
(statearr_374781_374835[(2)] = null);

(statearr_374781_374835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (22))){
var state_374763__$1 = state_374763;
var statearr_374782_374836 = state_374763__$1;
(statearr_374782_374836[(2)] = null);

(statearr_374782_374836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (6))){
var inst_374701 = (state_374763[(13)]);
var inst_374710 = f.call(null,inst_374701);
var inst_374711 = cljs.core.seq.call(null,inst_374710);
var inst_374712 = inst_374711;
var inst_374713 = null;
var inst_374714 = (0);
var inst_374715 = (0);
var state_374763__$1 = (function (){var statearr_374783 = state_374763;
(statearr_374783[(8)] = inst_374714);

(statearr_374783[(9)] = inst_374712);

(statearr_374783[(10)] = inst_374713);

(statearr_374783[(11)] = inst_374715);

return statearr_374783;
})();
var statearr_374785_374841 = state_374763__$1;
(statearr_374785_374841[(2)] = null);

(statearr_374785_374841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (17))){
var inst_374728 = (state_374763[(7)]);
var inst_374733 = cljs.core.chunk_first.call(null,inst_374728);
var inst_374734 = cljs.core.chunk_rest.call(null,inst_374728);
var inst_374735 = cljs.core.count.call(null,inst_374733);
var inst_374712 = inst_374734;
var inst_374713 = inst_374733;
var inst_374714 = inst_374735;
var inst_374715 = (0);
var state_374763__$1 = (function (){var statearr_374787 = state_374763;
(statearr_374787[(8)] = inst_374714);

(statearr_374787[(9)] = inst_374712);

(statearr_374787[(10)] = inst_374713);

(statearr_374787[(11)] = inst_374715);

return statearr_374787;
})();
var statearr_374788_374846 = state_374763__$1;
(statearr_374788_374846[(2)] = null);

(statearr_374788_374846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (3))){
var inst_374761 = (state_374763[(2)]);
var state_374763__$1 = state_374763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_374763__$1,inst_374761);
} else {
if((state_val_374764 === (12))){
var inst_374749 = (state_374763[(2)]);
var state_374763__$1 = state_374763;
var statearr_374789_374851 = state_374763__$1;
(statearr_374789_374851[(2)] = inst_374749);

(statearr_374789_374851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (2))){
var state_374763__$1 = state_374763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_374763__$1,(4),in$);
} else {
if((state_val_374764 === (23))){
var inst_374757 = (state_374763[(2)]);
var state_374763__$1 = state_374763;
var statearr_374790_374852 = state_374763__$1;
(statearr_374790_374852[(2)] = inst_374757);

(statearr_374790_374852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (19))){
var inst_374744 = (state_374763[(2)]);
var state_374763__$1 = state_374763;
var statearr_374791_374853 = state_374763__$1;
(statearr_374791_374853[(2)] = inst_374744);

(statearr_374791_374853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (11))){
var inst_374728 = (state_374763[(7)]);
var inst_374712 = (state_374763[(9)]);
var inst_374728__$1 = cljs.core.seq.call(null,inst_374712);
var state_374763__$1 = (function (){var statearr_374792 = state_374763;
(statearr_374792[(7)] = inst_374728__$1);

return statearr_374792;
})();
if(inst_374728__$1){
var statearr_374793_374858 = state_374763__$1;
(statearr_374793_374858[(1)] = (14));

} else {
var statearr_374794_374859 = state_374763__$1;
(statearr_374794_374859[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (9))){
var inst_374751 = (state_374763[(2)]);
var inst_374752 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_374763__$1 = (function (){var statearr_374795 = state_374763;
(statearr_374795[(15)] = inst_374751);

return statearr_374795;
})();
if(cljs.core.truth_(inst_374752)){
var statearr_374796_374860 = state_374763__$1;
(statearr_374796_374860[(1)] = (21));

} else {
var statearr_374797_374861 = state_374763__$1;
(statearr_374797_374861[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (5))){
var inst_374704 = cljs.core.async.close_BANG_.call(null,out);
var state_374763__$1 = state_374763;
var statearr_374798_374862 = state_374763__$1;
(statearr_374798_374862[(2)] = inst_374704);

(statearr_374798_374862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (14))){
var inst_374728 = (state_374763[(7)]);
var inst_374731 = cljs.core.chunked_seq_QMARK_.call(null,inst_374728);
var state_374763__$1 = state_374763;
if(inst_374731){
var statearr_374799_374867 = state_374763__$1;
(statearr_374799_374867[(1)] = (17));

} else {
var statearr_374800_374868 = state_374763__$1;
(statearr_374800_374868[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (16))){
var inst_374747 = (state_374763[(2)]);
var state_374763__$1 = state_374763;
var statearr_374803_374869 = state_374763__$1;
(statearr_374803_374869[(2)] = inst_374747);

(statearr_374803_374869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374764 === (10))){
var inst_374713 = (state_374763[(10)]);
var inst_374715 = (state_374763[(11)]);
var inst_374720 = cljs.core._nth.call(null,inst_374713,inst_374715);
var state_374763__$1 = state_374763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374763__$1,(13),out,inst_374720);
} else {
if((state_val_374764 === (18))){
var inst_374728 = (state_374763[(7)]);
var inst_374738 = cljs.core.first.call(null,inst_374728);
var state_374763__$1 = state_374763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374763__$1,(20),out,inst_374738);
} else {
if((state_val_374764 === (8))){
var inst_374714 = (state_374763[(8)]);
var inst_374715 = (state_374763[(11)]);
var inst_374717 = (inst_374715 < inst_374714);
var inst_374718 = inst_374717;
var state_374763__$1 = state_374763;
if(cljs.core.truth_(inst_374718)){
var statearr_374806_374874 = state_374763__$1;
(statearr_374806_374874[(1)] = (10));

} else {
var statearr_374807_374875 = state_374763__$1;
(statearr_374807_374875[(1)] = (11));

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
var statearr_374811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_374811[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__);

(statearr_374811[(1)] = (1));

return statearr_374811;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1 = (function (state_374763){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_374763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e374812){if((e374812 instanceof Object)){
var ex__38083__auto__ = e374812;
var statearr_374813_374880 = state_374763;
(statearr_374813_374880[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e374812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__374881 = state_374763;
state_374763 = G__374881;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__ = function(state_374763){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1.call(this,state_374763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_374814 = f__38101__auto__.call(null);
(statearr_374814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_374814;
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
var args374882 = [];
var len__36260__auto___374887 = arguments.length;
var i__36261__auto___374888 = (0);
while(true){
if((i__36261__auto___374888 < len__36260__auto___374887)){
args374882.push((arguments[i__36261__auto___374888]));

var G__374889 = (i__36261__auto___374888 + (1));
i__36261__auto___374888 = G__374889;
continue;
} else {
}
break;
}

var G__374886 = args374882.length;
switch (G__374886) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args374882.length)].join('')));

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
var args374892 = [];
var len__36260__auto___374899 = arguments.length;
var i__36261__auto___374900 = (0);
while(true){
if((i__36261__auto___374900 < len__36260__auto___374899)){
args374892.push((arguments[i__36261__auto___374900]));

var G__374901 = (i__36261__auto___374900 + (1));
i__36261__auto___374900 = G__374901;
continue;
} else {
}
break;
}

var G__374894 = args374892.length;
switch (G__374894) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args374892.length)].join('')));

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
var args374911 = [];
var len__36260__auto___374964 = arguments.length;
var i__36261__auto___374965 = (0);
while(true){
if((i__36261__auto___374965 < len__36260__auto___374964)){
args374911.push((arguments[i__36261__auto___374965]));

var G__374966 = (i__36261__auto___374965 + (1));
i__36261__auto___374965 = G__374966;
continue;
} else {
}
break;
}

var G__374913 = args374911.length;
switch (G__374913) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args374911.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___374968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___374968,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___374968,out){
return (function (state_374938){
var state_val_374939 = (state_374938[(1)]);
if((state_val_374939 === (7))){
var inst_374932 = (state_374938[(2)]);
var state_374938__$1 = state_374938;
var statearr_374940_374969 = state_374938__$1;
(statearr_374940_374969[(2)] = inst_374932);

(statearr_374940_374969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374939 === (1))){
var inst_374914 = null;
var state_374938__$1 = (function (){var statearr_374941 = state_374938;
(statearr_374941[(7)] = inst_374914);

return statearr_374941;
})();
var statearr_374942_374973 = state_374938__$1;
(statearr_374942_374973[(2)] = null);

(statearr_374942_374973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374939 === (4))){
var inst_374917 = (state_374938[(8)]);
var inst_374917__$1 = (state_374938[(2)]);
var inst_374918 = (inst_374917__$1 == null);
var inst_374919 = cljs.core.not.call(null,inst_374918);
var state_374938__$1 = (function (){var statearr_374943 = state_374938;
(statearr_374943[(8)] = inst_374917__$1);

return statearr_374943;
})();
if(inst_374919){
var statearr_374944_374978 = state_374938__$1;
(statearr_374944_374978[(1)] = (5));

} else {
var statearr_374945_374979 = state_374938__$1;
(statearr_374945_374979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374939 === (6))){
var state_374938__$1 = state_374938;
var statearr_374946_374980 = state_374938__$1;
(statearr_374946_374980[(2)] = null);

(statearr_374946_374980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374939 === (3))){
var inst_374935 = (state_374938[(2)]);
var inst_374936 = cljs.core.async.close_BANG_.call(null,out);
var state_374938__$1 = (function (){var statearr_374947 = state_374938;
(statearr_374947[(9)] = inst_374935);

return statearr_374947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_374938__$1,inst_374936);
} else {
if((state_val_374939 === (2))){
var state_374938__$1 = state_374938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_374938__$1,(4),ch);
} else {
if((state_val_374939 === (11))){
var inst_374917 = (state_374938[(8)]);
var inst_374926 = (state_374938[(2)]);
var inst_374914 = inst_374917;
var state_374938__$1 = (function (){var statearr_374948 = state_374938;
(statearr_374948[(7)] = inst_374914);

(statearr_374948[(10)] = inst_374926);

return statearr_374948;
})();
var statearr_374949_374988 = state_374938__$1;
(statearr_374949_374988[(2)] = null);

(statearr_374949_374988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374939 === (9))){
var inst_374917 = (state_374938[(8)]);
var state_374938__$1 = state_374938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_374938__$1,(11),out,inst_374917);
} else {
if((state_val_374939 === (5))){
var inst_374914 = (state_374938[(7)]);
var inst_374917 = (state_374938[(8)]);
var inst_374921 = cljs.core._EQ_.call(null,inst_374917,inst_374914);
var state_374938__$1 = state_374938;
if(inst_374921){
var statearr_374952_374990 = state_374938__$1;
(statearr_374952_374990[(1)] = (8));

} else {
var statearr_374953_374991 = state_374938__$1;
(statearr_374953_374991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374939 === (10))){
var inst_374929 = (state_374938[(2)]);
var state_374938__$1 = state_374938;
var statearr_374954_374992 = state_374938__$1;
(statearr_374954_374992[(2)] = inst_374929);

(statearr_374954_374992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_374939 === (8))){
var inst_374914 = (state_374938[(7)]);
var tmp374951 = inst_374914;
var inst_374914__$1 = tmp374951;
var state_374938__$1 = (function (){var statearr_374955 = state_374938;
(statearr_374955[(7)] = inst_374914__$1);

return statearr_374955;
})();
var statearr_374956_374994 = state_374938__$1;
(statearr_374956_374994[(2)] = null);

(statearr_374956_374994[(1)] = (2));


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
});})(c__38100__auto___374968,out))
;
return ((function (switch__38079__auto__,c__38100__auto___374968,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_374960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_374960[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_374960[(1)] = (1));

return statearr_374960;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_374938){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_374938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e374961){if((e374961 instanceof Object)){
var ex__38083__auto__ = e374961;
var statearr_374962_374995 = state_374938;
(statearr_374962_374995[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_374938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e374961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__374997 = state_374938;
state_374938 = G__374997;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_374938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_374938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___374968,out))
})();
var state__38102__auto__ = (function (){var statearr_374963 = f__38101__auto__.call(null);
(statearr_374963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___374968);

return statearr_374963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___374968,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args374998 = [];
var len__36260__auto___375085 = arguments.length;
var i__36261__auto___375086 = (0);
while(true){
if((i__36261__auto___375086 < len__36260__auto___375085)){
args374998.push((arguments[i__36261__auto___375086]));

var G__375087 = (i__36261__auto___375086 + (1));
i__36261__auto___375086 = G__375087;
continue;
} else {
}
break;
}

var G__375001 = args374998.length;
switch (G__375001) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args374998.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___375089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___375089,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___375089,out){
return (function (state_375043){
var state_val_375044 = (state_375043[(1)]);
if((state_val_375044 === (7))){
var inst_375039 = (state_375043[(2)]);
var state_375043__$1 = state_375043;
var statearr_375045_375090 = state_375043__$1;
(statearr_375045_375090[(2)] = inst_375039);

(statearr_375045_375090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375044 === (1))){
var inst_375005 = (new Array(n));
var inst_375006 = inst_375005;
var inst_375007 = (0);
var state_375043__$1 = (function (){var statearr_375046 = state_375043;
(statearr_375046[(7)] = inst_375007);

(statearr_375046[(8)] = inst_375006);

return statearr_375046;
})();
var statearr_375047_375091 = state_375043__$1;
(statearr_375047_375091[(2)] = null);

(statearr_375047_375091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375044 === (4))){
var inst_375010 = (state_375043[(9)]);
var inst_375010__$1 = (state_375043[(2)]);
var inst_375011 = (inst_375010__$1 == null);
var inst_375012 = cljs.core.not.call(null,inst_375011);
var state_375043__$1 = (function (){var statearr_375051 = state_375043;
(statearr_375051[(9)] = inst_375010__$1);

return statearr_375051;
})();
if(inst_375012){
var statearr_375052_375097 = state_375043__$1;
(statearr_375052_375097[(1)] = (5));

} else {
var statearr_375053_375099 = state_375043__$1;
(statearr_375053_375099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375044 === (15))){
var inst_375033 = (state_375043[(2)]);
var state_375043__$1 = state_375043;
var statearr_375054_375100 = state_375043__$1;
(statearr_375054_375100[(2)] = inst_375033);

(statearr_375054_375100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375044 === (13))){
var state_375043__$1 = state_375043;
var statearr_375055_375101 = state_375043__$1;
(statearr_375055_375101[(2)] = null);

(statearr_375055_375101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375044 === (6))){
var inst_375007 = (state_375043[(7)]);
var inst_375029 = (inst_375007 > (0));
var state_375043__$1 = state_375043;
if(cljs.core.truth_(inst_375029)){
var statearr_375056_375102 = state_375043__$1;
(statearr_375056_375102[(1)] = (12));

} else {
var statearr_375057_375103 = state_375043__$1;
(statearr_375057_375103[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375044 === (3))){
var inst_375041 = (state_375043[(2)]);
var state_375043__$1 = state_375043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_375043__$1,inst_375041);
} else {
if((state_val_375044 === (12))){
var inst_375006 = (state_375043[(8)]);
var inst_375031 = cljs.core.vec.call(null,inst_375006);
var state_375043__$1 = state_375043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_375043__$1,(15),out,inst_375031);
} else {
if((state_val_375044 === (2))){
var state_375043__$1 = state_375043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_375043__$1,(4),ch);
} else {
if((state_val_375044 === (11))){
var inst_375022 = (state_375043[(2)]);
var inst_375023 = (new Array(n));
var inst_375006 = inst_375023;
var inst_375007 = (0);
var state_375043__$1 = (function (){var statearr_375061 = state_375043;
(statearr_375061[(7)] = inst_375007);

(statearr_375061[(10)] = inst_375022);

(statearr_375061[(8)] = inst_375006);

return statearr_375061;
})();
var statearr_375062_375107 = state_375043__$1;
(statearr_375062_375107[(2)] = null);

(statearr_375062_375107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375044 === (9))){
var inst_375006 = (state_375043[(8)]);
var inst_375020 = cljs.core.vec.call(null,inst_375006);
var state_375043__$1 = state_375043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_375043__$1,(11),out,inst_375020);
} else {
if((state_val_375044 === (5))){
var inst_375015 = (state_375043[(11)]);
var inst_375007 = (state_375043[(7)]);
var inst_375006 = (state_375043[(8)]);
var inst_375010 = (state_375043[(9)]);
var inst_375014 = (inst_375006[inst_375007] = inst_375010);
var inst_375015__$1 = (inst_375007 + (1));
var inst_375016 = (inst_375015__$1 < n);
var state_375043__$1 = (function (){var statearr_375064 = state_375043;
(statearr_375064[(12)] = inst_375014);

(statearr_375064[(11)] = inst_375015__$1);

return statearr_375064;
})();
if(cljs.core.truth_(inst_375016)){
var statearr_375065_375108 = state_375043__$1;
(statearr_375065_375108[(1)] = (8));

} else {
var statearr_375066_375109 = state_375043__$1;
(statearr_375066_375109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375044 === (14))){
var inst_375036 = (state_375043[(2)]);
var inst_375037 = cljs.core.async.close_BANG_.call(null,out);
var state_375043__$1 = (function (){var statearr_375068 = state_375043;
(statearr_375068[(13)] = inst_375036);

return statearr_375068;
})();
var statearr_375069_375112 = state_375043__$1;
(statearr_375069_375112[(2)] = inst_375037);

(statearr_375069_375112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375044 === (10))){
var inst_375026 = (state_375043[(2)]);
var state_375043__$1 = state_375043;
var statearr_375070_375115 = state_375043__$1;
(statearr_375070_375115[(2)] = inst_375026);

(statearr_375070_375115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375044 === (8))){
var inst_375015 = (state_375043[(11)]);
var inst_375006 = (state_375043[(8)]);
var tmp375067 = inst_375006;
var inst_375006__$1 = tmp375067;
var inst_375007 = inst_375015;
var state_375043__$1 = (function (){var statearr_375071 = state_375043;
(statearr_375071[(7)] = inst_375007);

(statearr_375071[(8)] = inst_375006__$1);

return statearr_375071;
})();
var statearr_375072_375116 = state_375043__$1;
(statearr_375072_375116[(2)] = null);

(statearr_375072_375116[(1)] = (2));


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
});})(c__38100__auto___375089,out))
;
return ((function (switch__38079__auto__,c__38100__auto___375089,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_375076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_375076[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_375076[(1)] = (1));

return statearr_375076;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_375043){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_375043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e375077){if((e375077 instanceof Object)){
var ex__38083__auto__ = e375077;
var statearr_375083_375117 = state_375043;
(statearr_375083_375117[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_375043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e375077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__375120 = state_375043;
state_375043 = G__375120;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_375043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_375043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___375089,out))
})();
var state__38102__auto__ = (function (){var statearr_375084 = f__38101__auto__.call(null);
(statearr_375084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___375089);

return statearr_375084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___375089,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args375121 = [];
var len__36260__auto___375211 = arguments.length;
var i__36261__auto___375212 = (0);
while(true){
if((i__36261__auto___375212 < len__36260__auto___375211)){
args375121.push((arguments[i__36261__auto___375212]));

var G__375213 = (i__36261__auto___375212 + (1));
i__36261__auto___375212 = G__375213;
continue;
} else {
}
break;
}

var G__375123 = args375121.length;
switch (G__375123) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375121.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38100__auto___375218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___375218,out){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___375218,out){
return (function (state_375165){
var state_val_375166 = (state_375165[(1)]);
if((state_val_375166 === (7))){
var inst_375161 = (state_375165[(2)]);
var state_375165__$1 = state_375165;
var statearr_375173_375220 = state_375165__$1;
(statearr_375173_375220[(2)] = inst_375161);

(statearr_375173_375220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375166 === (1))){
var inst_375124 = [];
var inst_375125 = inst_375124;
var inst_375126 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_375165__$1 = (function (){var statearr_375174 = state_375165;
(statearr_375174[(7)] = inst_375126);

(statearr_375174[(8)] = inst_375125);

return statearr_375174;
})();
var statearr_375175_375223 = state_375165__$1;
(statearr_375175_375223[(2)] = null);

(statearr_375175_375223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375166 === (4))){
var inst_375129 = (state_375165[(9)]);
var inst_375129__$1 = (state_375165[(2)]);
var inst_375130 = (inst_375129__$1 == null);
var inst_375131 = cljs.core.not.call(null,inst_375130);
var state_375165__$1 = (function (){var statearr_375176 = state_375165;
(statearr_375176[(9)] = inst_375129__$1);

return statearr_375176;
})();
if(inst_375131){
var statearr_375177_375224 = state_375165__$1;
(statearr_375177_375224[(1)] = (5));

} else {
var statearr_375178_375225 = state_375165__$1;
(statearr_375178_375225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375166 === (15))){
var inst_375155 = (state_375165[(2)]);
var state_375165__$1 = state_375165;
var statearr_375179_375226 = state_375165__$1;
(statearr_375179_375226[(2)] = inst_375155);

(statearr_375179_375226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375166 === (13))){
var state_375165__$1 = state_375165;
var statearr_375182_375227 = state_375165__$1;
(statearr_375182_375227[(2)] = null);

(statearr_375182_375227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375166 === (6))){
var inst_375125 = (state_375165[(8)]);
var inst_375150 = inst_375125.length;
var inst_375151 = (inst_375150 > (0));
var state_375165__$1 = state_375165;
if(cljs.core.truth_(inst_375151)){
var statearr_375185_375232 = state_375165__$1;
(statearr_375185_375232[(1)] = (12));

} else {
var statearr_375186_375233 = state_375165__$1;
(statearr_375186_375233[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375166 === (3))){
var inst_375163 = (state_375165[(2)]);
var state_375165__$1 = state_375165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_375165__$1,inst_375163);
} else {
if((state_val_375166 === (12))){
var inst_375125 = (state_375165[(8)]);
var inst_375153 = cljs.core.vec.call(null,inst_375125);
var state_375165__$1 = state_375165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_375165__$1,(15),out,inst_375153);
} else {
if((state_val_375166 === (2))){
var state_375165__$1 = state_375165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_375165__$1,(4),ch);
} else {
if((state_val_375166 === (11))){
var inst_375133 = (state_375165[(10)]);
var inst_375129 = (state_375165[(9)]);
var inst_375143 = (state_375165[(2)]);
var inst_375144 = [];
var inst_375145 = inst_375144.push(inst_375129);
var inst_375125 = inst_375144;
var inst_375126 = inst_375133;
var state_375165__$1 = (function (){var statearr_375187 = state_375165;
(statearr_375187[(7)] = inst_375126);

(statearr_375187[(11)] = inst_375143);

(statearr_375187[(12)] = inst_375145);

(statearr_375187[(8)] = inst_375125);

return statearr_375187;
})();
var statearr_375188_375235 = state_375165__$1;
(statearr_375188_375235[(2)] = null);

(statearr_375188_375235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375166 === (9))){
var inst_375125 = (state_375165[(8)]);
var inst_375141 = cljs.core.vec.call(null,inst_375125);
var state_375165__$1 = state_375165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_375165__$1,(11),out,inst_375141);
} else {
if((state_val_375166 === (5))){
var inst_375126 = (state_375165[(7)]);
var inst_375133 = (state_375165[(10)]);
var inst_375129 = (state_375165[(9)]);
var inst_375133__$1 = f.call(null,inst_375129);
var inst_375134 = cljs.core._EQ_.call(null,inst_375133__$1,inst_375126);
var inst_375135 = cljs.core.keyword_identical_QMARK_.call(null,inst_375126,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_375136 = (inst_375134) || (inst_375135);
var state_375165__$1 = (function (){var statearr_375189 = state_375165;
(statearr_375189[(10)] = inst_375133__$1);

return statearr_375189;
})();
if(cljs.core.truth_(inst_375136)){
var statearr_375191_375242 = state_375165__$1;
(statearr_375191_375242[(1)] = (8));

} else {
var statearr_375192_375243 = state_375165__$1;
(statearr_375192_375243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375166 === (14))){
var inst_375158 = (state_375165[(2)]);
var inst_375159 = cljs.core.async.close_BANG_.call(null,out);
var state_375165__$1 = (function (){var statearr_375196 = state_375165;
(statearr_375196[(13)] = inst_375158);

return statearr_375196;
})();
var statearr_375197_375244 = state_375165__$1;
(statearr_375197_375244[(2)] = inst_375159);

(statearr_375197_375244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375166 === (10))){
var inst_375148 = (state_375165[(2)]);
var state_375165__$1 = state_375165;
var statearr_375198_375250 = state_375165__$1;
(statearr_375198_375250[(2)] = inst_375148);

(statearr_375198_375250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375166 === (8))){
var inst_375125 = (state_375165[(8)]);
var inst_375133 = (state_375165[(10)]);
var inst_375129 = (state_375165[(9)]);
var inst_375138 = inst_375125.push(inst_375129);
var tmp375193 = inst_375125;
var inst_375125__$1 = tmp375193;
var inst_375126 = inst_375133;
var state_375165__$1 = (function (){var statearr_375200 = state_375165;
(statearr_375200[(14)] = inst_375138);

(statearr_375200[(7)] = inst_375126);

(statearr_375200[(8)] = inst_375125__$1);

return statearr_375200;
})();
var statearr_375203_375256 = state_375165__$1;
(statearr_375203_375256[(2)] = null);

(statearr_375203_375256[(1)] = (2));


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
});})(c__38100__auto___375218,out))
;
return ((function (switch__38079__auto__,c__38100__auto___375218,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_375207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_375207[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_375207[(1)] = (1));

return statearr_375207;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_375165){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_375165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e375208){if((e375208 instanceof Object)){
var ex__38083__auto__ = e375208;
var statearr_375209_375262 = state_375165;
(statearr_375209_375262[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_375165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e375208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__375263 = state_375165;
state_375165 = G__375263;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_375165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_375165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___375218,out))
})();
var state__38102__auto__ = (function (){var statearr_375210 = f__38101__auto__.call(null);
(statearr_375210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___375218);

return statearr_375210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___375218,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
