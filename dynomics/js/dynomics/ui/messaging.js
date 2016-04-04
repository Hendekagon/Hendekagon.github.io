// Compiled by ClojureScript 1.8.40 {}
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
var args290291 = [];
var len__36461__auto___290336 = arguments.length;
var i__36462__auto___290337 = (0);
while(true){
if((i__36462__auto___290337 < len__36461__auto___290336)){
args290291.push((arguments[i__36462__auto___290337]));

var G__290338 = (i__36462__auto___290337 + (1));
i__36462__auto___290337 = G__290338;
continue;
} else {
}
break;
}

var G__290294 = args290291.length;
switch (G__290294) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290291.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__290297 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__290297__$1 = ((((!((map__290297 == null)))?((((map__290297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290297):map__290297);
var message_channel = cljs.core.get.call(null,map__290297__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__290297__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__40985__auto___290347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___290347,map__290297,map__290297__$1,message_channel,message_pub,c){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___290347,map__290297,map__290297__$1,message_channel,message_pub,c){
return (function (state_290310){
var state_val_290311 = (state_290310[(1)]);
if((state_val_290311 === (1))){
var state_290310__$1 = state_290310;
var statearr_290312_290349 = state_290310__$1;
(statearr_290312_290349[(2)] = null);

(statearr_290312_290349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290311 === (2))){
var state_290310__$1 = state_290310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_290310__$1,(4),c);
} else {
if((state_val_290311 === (3))){
var inst_290308 = (state_290310[(2)]);
var state_290310__$1 = state_290310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_290310__$1,inst_290308);
} else {
if((state_val_290311 === (4))){
var inst_290303 = (state_290310[(2)]);
var inst_290304 = f.call(null,inst_290303);
var state_290310__$1 = (function (){var statearr_290313 = state_290310;
(statearr_290313[(7)] = inst_290304);

return statearr_290313;
})();
var statearr_290314_290354 = state_290310__$1;
(statearr_290314_290354[(2)] = null);

(statearr_290314_290354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__40985__auto___290347,map__290297,map__290297__$1,message_channel,message_pub,c))
;
return ((function (switch__40398__auto__,c__40985__auto___290347,map__290297,map__290297__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__40399__auto__ = null;
var dynomics$ui$messaging$state_machine__40399__auto____0 = (function (){
var statearr_290318 = [null,null,null,null,null,null,null,null];
(statearr_290318[(0)] = dynomics$ui$messaging$state_machine__40399__auto__);

(statearr_290318[(1)] = (1));

return statearr_290318;
});
var dynomics$ui$messaging$state_machine__40399__auto____1 = (function (state_290310){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_290310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e290319){if((e290319 instanceof Object)){
var ex__40402__auto__ = e290319;
var statearr_290320_290357 = state_290310;
(statearr_290320_290357[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_290310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e290319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__290358 = state_290310;
state_290310 = G__290358;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__40399__auto__ = function(state_290310){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__40399__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__40399__auto____1.call(this,state_290310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__40399__auto____0;
dynomics$ui$messaging$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__40399__auto____1;
return dynomics$ui$messaging$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___290347,map__290297,map__290297__$1,message_channel,message_pub,c))
})();
var state__40987__auto__ = (function (){var statearr_290321 = f__40986__auto__.call(null);
(statearr_290321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___290347);

return statearr_290321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___290347,map__290297,map__290297__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__290324 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__290325 = null;
var count__290326 = (0);
var i__290327 = (0);
while(true){
if((i__290327 < count__290326)){
var map__290329 = cljs.core._nth.call(null,chunk__290325,i__290327);
var map__290329__$1 = ((((!((map__290329 == null)))?((((map__290329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290329):map__290329);
var topic = cljs.core.get.call(null,map__290329__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__290329__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__290365 = seq__290324;
var G__290366 = chunk__290325;
var G__290367 = count__290326;
var G__290368 = (i__290327 + (1));
seq__290324 = G__290365;
chunk__290325 = G__290366;
count__290326 = G__290367;
i__290327 = G__290368;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__290324);
if(temp__4657__auto__){
var seq__290324__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__290324__$1)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,seq__290324__$1);
var G__290373 = cljs.core.chunk_rest.call(null,seq__290324__$1);
var G__290374 = c__36203__auto__;
var G__290375 = cljs.core.count.call(null,c__36203__auto__);
var G__290376 = (0);
seq__290324 = G__290373;
chunk__290325 = G__290374;
count__290326 = G__290375;
i__290327 = G__290376;
continue;
} else {
var map__290331 = cljs.core.first.call(null,seq__290324__$1);
var map__290331__$1 = ((((!((map__290331 == null)))?((((map__290331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290331):map__290331);
var topic = cljs.core.get.call(null,map__290331__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__290331__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__290385 = cljs.core.next.call(null,seq__290324__$1);
var G__290386 = null;
var G__290387 = (0);
var G__290388 = (0);
seq__290324 = G__290385;
chunk__290325 = G__290386;
count__290326 = G__290387;
i__290327 = G__290388;
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
var c__40985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto__){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto__){
return (function (state_290434){
var state_val_290435 = (state_290434[(1)]);
if((state_val_290435 === (1))){
var state_290434__$1 = state_290434;
var statearr_290437_290450 = state_290434__$1;
(statearr_290437_290450[(2)] = null);

(statearr_290437_290450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290435 === (2))){
var state_290434__$1 = state_290434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_290434__$1,(4),ch);
} else {
if((state_val_290435 === (3))){
var inst_290432 = (state_290434[(2)]);
var state_290434__$1 = state_290434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_290434__$1,inst_290432);
} else {
if((state_val_290435 === (4))){
var inst_290428 = (state_290434[(2)]);
var inst_290429 = g.call(null,inst_290428);
var state_290434__$1 = (function (){var statearr_290439 = state_290434;
(statearr_290439[(7)] = inst_290429);

return statearr_290439;
})();
var statearr_290440_290455 = state_290434__$1;
(statearr_290440_290455[(2)] = null);

(statearr_290440_290455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__40985__auto__))
;
return ((function (switch__40398__auto__,c__40985__auto__){
return (function() {
var dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto__ = null;
var dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto____0 = (function (){
var statearr_290446 = [null,null,null,null,null,null,null,null];
(statearr_290446[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto__);

(statearr_290446[(1)] = (1));

return statearr_290446;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto____1 = (function (state_290434){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_290434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e290447){if((e290447 instanceof Object)){
var ex__40402__auto__ = e290447;
var statearr_290448_290472 = state_290434;
(statearr_290448_290472[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_290434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e290447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__290477 = state_290434;
state_290434 = G__290477;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto__ = function(state_290434){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto____1.call(this,state_290434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto__))
})();
var state__40987__auto__ = (function (){var statearr_290449 = f__40986__auto__.call(null);
(statearr_290449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto__);

return statearr_290449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto__))
);

return c__40985__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__290483){
var map__290488 = p__290483;
var map__290488__$1 = ((((!((map__290488 == null)))?((((map__290488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290488):map__290488);
var s = map__290488__$1;
var map__290489 = cljs.core.get.call(null,map__290488__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__290489__$1 = ((((!((map__290489 == null)))?((((map__290489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__290489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__290489):map__290489);
var ws = cljs.core.get.call(null,map__290489__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__290489__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args290500 = [];
var len__36461__auto___290553 = arguments.length;
var i__36462__auto___290554 = (0);
while(true){
if((i__36462__auto___290554 < len__36461__auto___290553)){
args290500.push((arguments[i__36462__auto___290554]));

var G__290555 = (i__36462__auto___290554 + (1));
i__36462__auto___290554 = G__290555;
continue;
} else {
}
break;
}

var G__290502 = args290500.length;
switch (G__290502) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args290500.length)].join('')));

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
var state_updates = cljs.core.async.chan.call(null);
var messaging = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message-channel","message-channel",-227831873),mch,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403),msgs,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),state_updates,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454),ws_uri], null);
goog.events.listen(ws,[goog.net.WebSocket.EventType.CLOSED,goog.net.WebSocket.EventType.ERROR,goog.net.WebSocket.EventType.MESSAGE,goog.net.WebSocket.EventType.OPENED],((function (ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (e){
if(cljs.core._EQ_.call(null,e.type,goog.net.WebSocket.EventType.MESSAGE)){
return cljs.core.async.put_BANG_.call(null,rch,e.message);
} else {
if(cljs.core._EQ_.call(null,e.type,goog.net.WebSocket.EventType.OPENED)){
var c__40985__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_290512){
var state_val_290513 = (state_290512[(1)]);
if((state_val_290513 === (1))){
var state_290512__$1 = state_290512;
var statearr_290514_290590 = state_290512__$1;
(statearr_290514_290590[(2)] = null);

(statearr_290514_290590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290513 === (2))){
var state_290512__$1 = state_290512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_290512__$1,(4),wch);
} else {
if((state_val_290513 === (3))){
var inst_290510 = (state_290512[(2)]);
var state_290512__$1 = state_290512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_290512__$1,inst_290510);
} else {
if((state_val_290513 === (4))){
var inst_290505 = (state_290512[(2)]);
var inst_290506 = cljs.core.pr_str.call(null,inst_290505);
var inst_290507 = ws.send(inst_290506);
var state_290512__$1 = (function (){var statearr_290515 = state_290512;
(statearr_290515[(7)] = inst_290507);

return statearr_290515;
})();
var statearr_290516_290593 = state_290512__$1;
(statearr_290516_290593[(2)] = null);

(statearr_290516_290593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__40985__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__40398__auto__,c__40985__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__40399__auto__ = null;
var dynomics$ui$messaging$state_machine__40399__auto____0 = (function (){
var statearr_290520 = [null,null,null,null,null,null,null,null];
(statearr_290520[(0)] = dynomics$ui$messaging$state_machine__40399__auto__);

(statearr_290520[(1)] = (1));

return statearr_290520;
});
var dynomics$ui$messaging$state_machine__40399__auto____1 = (function (state_290512){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_290512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e290521){if((e290521 instanceof Object)){
var ex__40402__auto__ = e290521;
var statearr_290522_290599 = state_290512;
(statearr_290522_290599[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_290512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e290521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__290602 = state_290512;
state_290512 = G__290602;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__40399__auto__ = function(state_290512){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__40399__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__40399__auto____1.call(this,state_290512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__40399__auto____0;
dynomics$ui$messaging$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__40399__auto____1;
return dynomics$ui$messaging$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__40987__auto__ = (function (){var statearr_290523 = f__40986__auto__.call(null);
(statearr_290523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto__);

return statearr_290523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);

return c__40985__auto__;
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

var c__40985__auto___290612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___290612,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___290612,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_290533){
var state_val_290534 = (state_290533[(1)]);
if((state_val_290534 === (1))){
var state_290533__$1 = state_290533;
var statearr_290535_290621 = state_290533__$1;
(statearr_290535_290621[(2)] = null);

(statearr_290535_290621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_290534 === (2))){
var state_290533__$1 = state_290533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_290533__$1,(4),rch);
} else {
if((state_val_290534 === (3))){
var inst_290531 = (state_290533[(2)]);
var state_290533__$1 = state_290533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_290533__$1,inst_290531);
} else {
if((state_val_290534 === (4))){
var inst_290526 = (state_290533[(2)]);
var inst_290527 = cljs.reader.read_string.call(null,inst_290526);
var inst_290528 = cljs.core.async.put_BANG_.call(null,mch,inst_290527);
var state_290533__$1 = (function (){var statearr_290536 = state_290533;
(statearr_290536[(7)] = inst_290528);

return statearr_290536;
})();
var statearr_290537_290630 = state_290533__$1;
(statearr_290537_290630[(2)] = null);

(statearr_290537_290630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__40985__auto___290612,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__40398__auto__,c__40985__auto___290612,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__40399__auto__ = null;
var dynomics$ui$messaging$state_machine__40399__auto____0 = (function (){
var statearr_290543 = [null,null,null,null,null,null,null,null];
(statearr_290543[(0)] = dynomics$ui$messaging$state_machine__40399__auto__);

(statearr_290543[(1)] = (1));

return statearr_290543;
});
var dynomics$ui$messaging$state_machine__40399__auto____1 = (function (state_290533){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_290533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e290544){if((e290544 instanceof Object)){
var ex__40402__auto__ = e290544;
var statearr_290545_290640 = state_290533;
(statearr_290545_290640[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_290533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e290544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__290643 = state_290533;
state_290533 = G__290643;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__40399__auto__ = function(state_290533){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__40399__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__40399__auto____1.call(this,state_290533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__40399__auto____0;
dynomics$ui$messaging$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__40399__auto____1;
return dynomics$ui$messaging$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___290612,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__40987__auto__ = (function (){var statearr_290546 = f__40986__auto__.call(null);
(statearr_290546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___290612);

return statearr_290546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___290612,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;
