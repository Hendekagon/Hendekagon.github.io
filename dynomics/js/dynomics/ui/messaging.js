// Compiled by ClojureScript 1.8.34 {}
goog.provide('dynomics.ui.messaging');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.net.WebSocket');
/**
 * Subscribe the given component to its topic with its handler
 */
dynomics.ui.messaging.subscribe_BANG_ = (function dynomics$ui$messaging$subscribe_BANG_(var_args){
var args375275 = [];
var len__36260__auto___375326 = arguments.length;
var i__36261__auto___375327 = (0);
while(true){
if((i__36261__auto___375327 < len__36260__auto___375326)){
args375275.push((arguments[i__36261__auto___375327]));

var G__375329 = (i__36261__auto___375327 + (1));
i__36261__auto___375327 = G__375329;
continue;
} else {
}
break;
}

var G__375280 = args375275.length;
switch (G__375280) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375275.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__375283 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__375283__$1 = ((((!((map__375283 == null)))?((((map__375283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375283):map__375283);
var message_channel = cljs.core.get.call(null,map__375283__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__375283__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__38100__auto___375337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___375337,map__375283,map__375283__$1,message_channel,message_pub,c){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___375337,map__375283,map__375283__$1,message_channel,message_pub,c){
return (function (state_375293){
var state_val_375294 = (state_375293[(1)]);
if((state_val_375294 === (1))){
var state_375293__$1 = state_375293;
var statearr_375299_375338 = state_375293__$1;
(statearr_375299_375338[(2)] = null);

(statearr_375299_375338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375294 === (2))){
var state_375293__$1 = state_375293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_375293__$1,(4),c);
} else {
if((state_val_375294 === (3))){
var inst_375291 = (state_375293[(2)]);
var state_375293__$1 = state_375293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_375293__$1,inst_375291);
} else {
if((state_val_375294 === (4))){
var inst_375287 = (state_375293[(2)]);
var inst_375288 = f.call(null,inst_375287);
var state_375293__$1 = (function (){var statearr_375300 = state_375293;
(statearr_375300[(7)] = inst_375288);

return statearr_375300;
})();
var statearr_375305_375339 = state_375293__$1;
(statearr_375305_375339[(2)] = null);

(statearr_375305_375339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38100__auto___375337,map__375283,map__375283__$1,message_channel,message_pub,c))
;
return ((function (switch__38079__auto__,c__38100__auto___375337,map__375283,map__375283__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__38080__auto__ = null;
var dynomics$ui$messaging$state_machine__38080__auto____0 = (function (){
var statearr_375309 = [null,null,null,null,null,null,null,null];
(statearr_375309[(0)] = dynomics$ui$messaging$state_machine__38080__auto__);

(statearr_375309[(1)] = (1));

return statearr_375309;
});
var dynomics$ui$messaging$state_machine__38080__auto____1 = (function (state_375293){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_375293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e375310){if((e375310 instanceof Object)){
var ex__38083__auto__ = e375310;
var statearr_375311_375344 = state_375293;
(statearr_375311_375344[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_375293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e375310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__375350 = state_375293;
state_375293 = G__375350;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38080__auto__ = function(state_375293){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38080__auto____1.call(this,state_375293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38080__auto____0;
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38080__auto____1;
return dynomics$ui$messaging$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___375337,map__375283,map__375283__$1,message_channel,message_pub,c))
})();
var state__38102__auto__ = (function (){var statearr_375312 = f__38101__auto__.call(null);
(statearr_375312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___375337);

return statearr_375312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___375337,map__375283,map__375283__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__375314 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__375315 = null;
var count__375316 = (0);
var i__375317 = (0);
while(true){
if((i__375317 < count__375316)){
var map__375318 = cljs.core._nth.call(null,chunk__375315,i__375317);
var map__375318__$1 = ((((!((map__375318 == null)))?((((map__375318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375318):map__375318);
var topic = cljs.core.get.call(null,map__375318__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__375318__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__375362 = seq__375314;
var G__375363 = chunk__375315;
var G__375364 = count__375316;
var G__375365 = (i__375317 + (1));
seq__375314 = G__375362;
chunk__375315 = G__375363;
count__375316 = G__375364;
i__375317 = G__375365;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__375314);
if(temp__4657__auto__){
var seq__375314__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__375314__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__375314__$1);
var G__375366 = cljs.core.chunk_rest.call(null,seq__375314__$1);
var G__375367 = c__36002__auto__;
var G__375368 = cljs.core.count.call(null,c__36002__auto__);
var G__375369 = (0);
seq__375314 = G__375366;
chunk__375315 = G__375367;
count__375316 = G__375368;
i__375317 = G__375369;
continue;
} else {
var map__375320 = cljs.core.first.call(null,seq__375314__$1);
var map__375320__$1 = ((((!((map__375320 == null)))?((((map__375320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375320):map__375320);
var topic = cljs.core.get.call(null,map__375320__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__375320__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__375370 = cljs.core.next.call(null,seq__375314__$1);
var G__375371 = null;
var G__375372 = (0);
var G__375373 = (0);
seq__375314 = G__375370;
chunk__375315 = G__375371;
count__375316 = G__375372;
i__375317 = G__375373;
continue;
}
} else {
return null;
}
}
break;
}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$lang$maxFixedArity = 3;
dynomics.ui.messaging.setup_updates = (function dynomics$ui$messaging$setup_updates(ch,g){
var c__38100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto__){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto__){
return (function (state_375409){
var state_val_375410 = (state_375409[(1)]);
if((state_val_375410 === (1))){
var state_375409__$1 = state_375409;
var statearr_375411_375433 = state_375409__$1;
(statearr_375411_375433[(2)] = null);

(statearr_375411_375433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375410 === (2))){
var state_375409__$1 = state_375409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_375409__$1,(4),ch);
} else {
if((state_val_375410 === (3))){
var inst_375407 = (state_375409[(2)]);
var state_375409__$1 = state_375409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_375409__$1,inst_375407);
} else {
if((state_val_375410 === (4))){
var inst_375402 = (state_375409[(2)]);
var inst_375403 = g.call(null,inst_375402);
var state_375409__$1 = (function (){var statearr_375412 = state_375409;
(statearr_375412[(7)] = inst_375403);

return statearr_375412;
})();
var statearr_375413_375435 = state_375409__$1;
(statearr_375413_375435[(2)] = null);

(statearr_375413_375435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38100__auto__))
;
return ((function (switch__38079__auto__,c__38100__auto__){
return (function() {
var dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__ = null;
var dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____0 = (function (){
var statearr_375419 = [null,null,null,null,null,null,null,null];
(statearr_375419[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__);

(statearr_375419[(1)] = (1));

return statearr_375419;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____1 = (function (state_375409){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_375409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e375420){if((e375420 instanceof Object)){
var ex__38083__auto__ = e375420;
var statearr_375421_375440 = state_375409;
(statearr_375421_375440[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_375409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e375420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__375447 = state_375409;
state_375409 = G__375447;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__ = function(state_375409){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____1.call(this,state_375409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_375429 = f__38101__auto__.call(null);
(statearr_375429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_375429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto__))
);

return c__38100__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__375452){
var map__375457 = p__375452;
var map__375457__$1 = ((((!((map__375457 == null)))?((((map__375457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375457):map__375457);
var s = map__375457__$1;
var map__375458 = cljs.core.get.call(null,map__375457__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__375458__$1 = ((((!((map__375458 == null)))?((((map__375458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__375458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__375458):map__375458);
var ws = cljs.core.get.call(null,map__375458__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__375458__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
ws.open(ws_uri);

return s;
});
/**
 * 
 *   Configures messaging channels for the application:
 * 
 *   * ws a websocket for talking with the server
 *   * state-updates for state update requests
 *   * msgs for inter-component messaging
 * 
 *   
 */
dynomics.ui.messaging.make_channels = (function dynomics$ui$messaging$make_channels(var_args){
var args375461 = [];
var len__36260__auto___375545 = arguments.length;
var i__36261__auto___375546 = (0);
while(true){
if((i__36261__auto___375546 < len__36260__auto___375545)){
args375461.push((arguments[i__36261__auto___375546]));

var G__375548 = (i__36261__auto___375546 + (1));
i__36261__auto___375546 = G__375548;
continue;
} else {
}
break;
}

var G__375463 = args375461.length;
switch (G__375463) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args375461.length)].join('')));

}
});

dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.ui.messaging.make_channels.call(null,cljs.core.identity);
});

dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1 = (function (f){
var ws = (new goog.net.WebSocket());
var rch = cljs.core.async.chan.call(null);
var wch = cljs.core.async.chan.call(null);
var doc_uri = window.location;
var ws_uri = [cljs.core.str("ws://"),cljs.core.str(doc_uri.host),cljs.core.str("/ws")].join('');
var mch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(4)));
var msgs = cljs.core.async.pub.call(null,mch,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var state_updates = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(4)));
var messaging = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message-channel","message-channel",-227831873),mch,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403),msgs,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),state_updates,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454),ws_uri], null);
goog.events.listen(ws,[goog.net.WebSocket.EventType.CLOSED,goog.net.WebSocket.EventType.ERROR,goog.net.WebSocket.EventType.MESSAGE,goog.net.WebSocket.EventType.OPENED],((function (ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (e){
if(cljs.core._EQ_.call(null,e.type,goog.net.WebSocket.EventType.MESSAGE)){
return cljs.core.async.put_BANG_.call(null,rch,e.message);
} else {
if(cljs.core._EQ_.call(null,e.type,goog.net.WebSocket.EventType.OPENED)){
var c__38100__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_375475){
var state_val_375476 = (state_375475[(1)]);
if((state_val_375476 === (1))){
var state_375475__$1 = state_375475;
var statearr_375478_375578 = state_375475__$1;
(statearr_375478_375578[(2)] = null);

(statearr_375478_375578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375476 === (2))){
var state_375475__$1 = state_375475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_375475__$1,(4),wch);
} else {
if((state_val_375476 === (3))){
var inst_375473 = (state_375475[(2)]);
var state_375475__$1 = state_375475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_375475__$1,inst_375473);
} else {
if((state_val_375476 === (4))){
var inst_375468 = (state_375475[(2)]);
var inst_375469 = cljs.core.pr_str.call(null,inst_375468);
var inst_375470 = ws.send(inst_375469);
var state_375475__$1 = (function (){var statearr_375481 = state_375475;
(statearr_375481[(7)] = inst_375470);

return statearr_375481;
})();
var statearr_375486_375591 = state_375475__$1;
(statearr_375486_375591[(2)] = null);

(statearr_375486_375591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38100__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__38079__auto__,c__38100__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__38080__auto__ = null;
var dynomics$ui$messaging$state_machine__38080__auto____0 = (function (){
var statearr_375493 = [null,null,null,null,null,null,null,null];
(statearr_375493[(0)] = dynomics$ui$messaging$state_machine__38080__auto__);

(statearr_375493[(1)] = (1));

return statearr_375493;
});
var dynomics$ui$messaging$state_machine__38080__auto____1 = (function (state_375475){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_375475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e375494){if((e375494 instanceof Object)){
var ex__38083__auto__ = e375494;
var statearr_375495_375610 = state_375475;
(statearr_375495_375610[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_375475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e375494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__375616 = state_375475;
state_375475 = G__375616;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38080__auto__ = function(state_375475){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38080__auto____1.call(this,state_375475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38080__auto____0;
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38080__auto____1;
return dynomics$ui$messaging$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__38102__auto__ = (function (){var statearr_375498 = f__38101__auto__.call(null);
(statearr_375498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_375498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);

return c__38100__auto__;
} else {
return null;
}
}
});})(ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);

window.onbeforeunload = ((function (ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
cljs.core.async.close_BANG_.call(null,rch);

return ws.close();
});})(ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;

var c__38100__auto___375620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___375620,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___375620,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_375510){
var state_val_375511 = (state_375510[(1)]);
if((state_val_375511 === (1))){
var state_375510__$1 = state_375510;
var statearr_375514_375632 = state_375510__$1;
(statearr_375514_375632[(2)] = null);

(statearr_375514_375632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_375511 === (2))){
var state_375510__$1 = state_375510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_375510__$1,(4),rch);
} else {
if((state_val_375511 === (3))){
var inst_375508 = (state_375510[(2)]);
var state_375510__$1 = state_375510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_375510__$1,inst_375508);
} else {
if((state_val_375511 === (4))){
var inst_375503 = (state_375510[(2)]);
var inst_375504 = cljs.reader.read_string.call(null,inst_375503);
var inst_375505 = cljs.core.async.put_BANG_.call(null,mch,inst_375504);
var state_375510__$1 = (function (){var statearr_375518 = state_375510;
(statearr_375518[(7)] = inst_375505);

return statearr_375518;
})();
var statearr_375524_375637 = state_375510__$1;
(statearr_375524_375637[(2)] = null);

(statearr_375524_375637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38100__auto___375620,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__38079__auto__,c__38100__auto___375620,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__38080__auto__ = null;
var dynomics$ui$messaging$state_machine__38080__auto____0 = (function (){
var statearr_375532 = [null,null,null,null,null,null,null,null];
(statearr_375532[(0)] = dynomics$ui$messaging$state_machine__38080__auto__);

(statearr_375532[(1)] = (1));

return statearr_375532;
});
var dynomics$ui$messaging$state_machine__38080__auto____1 = (function (state_375510){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_375510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e375533){if((e375533 instanceof Object)){
var ex__38083__auto__ = e375533;
var statearr_375534_375649 = state_375510;
(statearr_375534_375649[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_375510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e375533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__375652 = state_375510;
state_375510 = G__375652;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38080__auto__ = function(state_375510){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38080__auto____1.call(this,state_375510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38080__auto____0;
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38080__auto____1;
return dynomics$ui$messaging$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___375620,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__38102__auto__ = (function (){var statearr_375542 = f__38101__auto__.call(null);
(statearr_375542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___375620);

return statearr_375542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___375620,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;
