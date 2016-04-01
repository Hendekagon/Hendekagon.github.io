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
var args72330 = [];
var len__36491__auto___72363 = arguments.length;
var i__36492__auto___72364 = (0);
while(true){
if((i__36492__auto___72364 < len__36491__auto___72363)){
args72330.push((arguments[i__36492__auto___72364]));

var G__72365 = (i__36492__auto___72364 + (1));
i__36492__auto___72364 = G__72365;
continue;
} else {
}
break;
}

var G__72332 = args72330.length;
switch (G__72332) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args72330.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__72333 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__72333__$1 = ((((!((map__72333 == null)))?((((map__72333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72333):map__72333);
var message_channel = cljs.core.get.call(null,map__72333__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__72333__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__41196__auto___72367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___72367,map__72333,map__72333__$1,message_channel,message_pub,c){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___72367,map__72333,map__72333__$1,message_channel,message_pub,c){
return (function (state_72343){
var state_val_72344 = (state_72343[(1)]);
if((state_val_72344 === (1))){
var state_72343__$1 = state_72343;
var statearr_72345_72368 = state_72343__$1;
(statearr_72345_72368[(2)] = null);

(statearr_72345_72368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72344 === (2))){
var state_72343__$1 = state_72343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72343__$1,(4),c);
} else {
if((state_val_72344 === (3))){
var inst_72341 = (state_72343[(2)]);
var state_72343__$1 = state_72343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72343__$1,inst_72341);
} else {
if((state_val_72344 === (4))){
var inst_72337 = (state_72343[(2)]);
var inst_72338 = f.call(null,inst_72337);
var state_72343__$1 = (function (){var statearr_72346 = state_72343;
(statearr_72346[(7)] = inst_72338);

return statearr_72346;
})();
var statearr_72347_72369 = state_72343__$1;
(statearr_72347_72369[(2)] = null);

(statearr_72347_72369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__41196__auto___72367,map__72333,map__72333__$1,message_channel,message_pub,c))
;
return ((function (switch__40432__auto__,c__41196__auto___72367,map__72333,map__72333__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__40433__auto__ = null;
var dynomics$ui$messaging$state_machine__40433__auto____0 = (function (){
var statearr_72351 = [null,null,null,null,null,null,null,null];
(statearr_72351[(0)] = dynomics$ui$messaging$state_machine__40433__auto__);

(statearr_72351[(1)] = (1));

return statearr_72351;
});
var dynomics$ui$messaging$state_machine__40433__auto____1 = (function (state_72343){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_72343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e72352){if((e72352 instanceof Object)){
var ex__40436__auto__ = e72352;
var statearr_72353_72370 = state_72343;
(statearr_72353_72370[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72371 = state_72343;
state_72343 = G__72371;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__40433__auto__ = function(state_72343){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__40433__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__40433__auto____1.call(this,state_72343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__40433__auto____0;
dynomics$ui$messaging$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__40433__auto____1;
return dynomics$ui$messaging$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___72367,map__72333,map__72333__$1,message_channel,message_pub,c))
})();
var state__41198__auto__ = (function (){var statearr_72354 = f__41197__auto__.call(null);
(statearr_72354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___72367);

return statearr_72354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___72367,map__72333,map__72333__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__72355 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__72356 = null;
var count__72357 = (0);
var i__72358 = (0);
while(true){
if((i__72358 < count__72357)){
var map__72359 = cljs.core._nth.call(null,chunk__72356,i__72358);
var map__72359__$1 = ((((!((map__72359 == null)))?((((map__72359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72359):map__72359);
var topic = cljs.core.get.call(null,map__72359__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__72359__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__72372 = seq__72355;
var G__72373 = chunk__72356;
var G__72374 = count__72357;
var G__72375 = (i__72358 + (1));
seq__72355 = G__72372;
chunk__72356 = G__72373;
count__72357 = G__72374;
i__72358 = G__72375;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__72355);
if(temp__4657__auto__){
var seq__72355__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72355__$1)){
var c__36233__auto__ = cljs.core.chunk_first.call(null,seq__72355__$1);
var G__72376 = cljs.core.chunk_rest.call(null,seq__72355__$1);
var G__72377 = c__36233__auto__;
var G__72378 = cljs.core.count.call(null,c__36233__auto__);
var G__72379 = (0);
seq__72355 = G__72376;
chunk__72356 = G__72377;
count__72357 = G__72378;
i__72358 = G__72379;
continue;
} else {
var map__72361 = cljs.core.first.call(null,seq__72355__$1);
var map__72361__$1 = ((((!((map__72361 == null)))?((((map__72361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72361):map__72361);
var topic = cljs.core.get.call(null,map__72361__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__72361__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__72380 = cljs.core.next.call(null,seq__72355__$1);
var G__72381 = null;
var G__72382 = (0);
var G__72383 = (0);
seq__72355 = G__72380;
chunk__72356 = G__72381;
count__72357 = G__72382;
i__72358 = G__72383;
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
var c__41196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto__){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto__){
return (function (state_72412){
var state_val_72413 = (state_72412[(1)]);
if((state_val_72413 === (1))){
var state_72412__$1 = state_72412;
var statearr_72414_72424 = state_72412__$1;
(statearr_72414_72424[(2)] = null);

(statearr_72414_72424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72413 === (2))){
var state_72412__$1 = state_72412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72412__$1,(4),ch);
} else {
if((state_val_72413 === (3))){
var inst_72410 = (state_72412[(2)]);
var state_72412__$1 = state_72412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72412__$1,inst_72410);
} else {
if((state_val_72413 === (4))){
var inst_72406 = (state_72412[(2)]);
var inst_72407 = g.call(null,inst_72406);
var state_72412__$1 = (function (){var statearr_72415 = state_72412;
(statearr_72415[(7)] = inst_72407);

return statearr_72415;
})();
var statearr_72416_72425 = state_72412__$1;
(statearr_72416_72425[(2)] = null);

(statearr_72416_72425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__41196__auto__))
;
return ((function (switch__40432__auto__,c__41196__auto__){
return (function() {
var dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto__ = null;
var dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto____0 = (function (){
var statearr_72420 = [null,null,null,null,null,null,null,null];
(statearr_72420[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto__);

(statearr_72420[(1)] = (1));

return statearr_72420;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto____1 = (function (state_72412){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_72412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e72421){if((e72421 instanceof Object)){
var ex__40436__auto__ = e72421;
var statearr_72422_72426 = state_72412;
(statearr_72422_72426[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72427 = state_72412;
state_72412 = G__72427;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto__ = function(state_72412){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto____1.call(this,state_72412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto__))
})();
var state__41198__auto__ = (function (){var statearr_72423 = f__41197__auto__.call(null);
(statearr_72423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto__);

return statearr_72423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto__))
);

return c__41196__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__72428){
var map__72433 = p__72428;
var map__72433__$1 = ((((!((map__72433 == null)))?((((map__72433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72433):map__72433);
var s = map__72433__$1;
var map__72434 = cljs.core.get.call(null,map__72433__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__72434__$1 = ((((!((map__72434 == null)))?((((map__72434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72434):map__72434);
var ws = cljs.core.get.call(null,map__72434__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__72434__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args72437 = [];
var len__36491__auto___72482 = arguments.length;
var i__36492__auto___72483 = (0);
while(true){
if((i__36492__auto___72483 < len__36491__auto___72482)){
args72437.push((arguments[i__36492__auto___72483]));

var G__72484 = (i__36492__auto___72483 + (1));
i__36492__auto___72483 = G__72484;
continue;
} else {
}
break;
}

var G__72439 = args72437.length;
switch (G__72439) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args72437.length)].join('')));

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
var c__41196__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_72449){
var state_val_72450 = (state_72449[(1)]);
if((state_val_72450 === (1))){
var state_72449__$1 = state_72449;
var statearr_72451_72486 = state_72449__$1;
(statearr_72451_72486[(2)] = null);

(statearr_72451_72486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72450 === (2))){
var state_72449__$1 = state_72449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72449__$1,(4),wch);
} else {
if((state_val_72450 === (3))){
var inst_72447 = (state_72449[(2)]);
var state_72449__$1 = state_72449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72449__$1,inst_72447);
} else {
if((state_val_72450 === (4))){
var inst_72442 = (state_72449[(2)]);
var inst_72443 = cljs.core.pr_str.call(null,inst_72442);
var inst_72444 = ws.send(inst_72443);
var state_72449__$1 = (function (){var statearr_72452 = state_72449;
(statearr_72452[(7)] = inst_72444);

return statearr_72452;
})();
var statearr_72453_72487 = state_72449__$1;
(statearr_72453_72487[(2)] = null);

(statearr_72453_72487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__41196__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__40432__auto__,c__41196__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__40433__auto__ = null;
var dynomics$ui$messaging$state_machine__40433__auto____0 = (function (){
var statearr_72457 = [null,null,null,null,null,null,null,null];
(statearr_72457[(0)] = dynomics$ui$messaging$state_machine__40433__auto__);

(statearr_72457[(1)] = (1));

return statearr_72457;
});
var dynomics$ui$messaging$state_machine__40433__auto____1 = (function (state_72449){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_72449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e72458){if((e72458 instanceof Object)){
var ex__40436__auto__ = e72458;
var statearr_72459_72488 = state_72449;
(statearr_72459_72488[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72489 = state_72449;
state_72449 = G__72489;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__40433__auto__ = function(state_72449){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__40433__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__40433__auto____1.call(this,state_72449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__40433__auto____0;
dynomics$ui$messaging$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__40433__auto____1;
return dynomics$ui$messaging$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__41198__auto__ = (function (){var statearr_72460 = f__41197__auto__.call(null);
(statearr_72460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto__);

return statearr_72460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);

return c__41196__auto__;
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

var c__41196__auto___72490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___72490,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___72490,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_72470){
var state_val_72471 = (state_72470[(1)]);
if((state_val_72471 === (1))){
var state_72470__$1 = state_72470;
var statearr_72472_72491 = state_72470__$1;
(statearr_72472_72491[(2)] = null);

(statearr_72472_72491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72471 === (2))){
var state_72470__$1 = state_72470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_72470__$1,(4),rch);
} else {
if((state_val_72471 === (3))){
var inst_72468 = (state_72470[(2)]);
var state_72470__$1 = state_72470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_72470__$1,inst_72468);
} else {
if((state_val_72471 === (4))){
var inst_72463 = (state_72470[(2)]);
var inst_72464 = cljs.reader.read_string.call(null,inst_72463);
var inst_72465 = cljs.core.async.put_BANG_.call(null,mch,inst_72464);
var state_72470__$1 = (function (){var statearr_72473 = state_72470;
(statearr_72473[(7)] = inst_72465);

return statearr_72473;
})();
var statearr_72474_72492 = state_72470__$1;
(statearr_72474_72492[(2)] = null);

(statearr_72474_72492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__41196__auto___72490,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__40432__auto__,c__41196__auto___72490,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__40433__auto__ = null;
var dynomics$ui$messaging$state_machine__40433__auto____0 = (function (){
var statearr_72478 = [null,null,null,null,null,null,null,null];
(statearr_72478[(0)] = dynomics$ui$messaging$state_machine__40433__auto__);

(statearr_72478[(1)] = (1));

return statearr_72478;
});
var dynomics$ui$messaging$state_machine__40433__auto____1 = (function (state_72470){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_72470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e72479){if((e72479 instanceof Object)){
var ex__40436__auto__ = e72479;
var statearr_72480_72493 = state_72470;
(statearr_72480_72493[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_72470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72494 = state_72470;
state_72470 = G__72494;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__40433__auto__ = function(state_72470){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__40433__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__40433__auto____1.call(this,state_72470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__40433__auto____0;
dynomics$ui$messaging$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__40433__auto____1;
return dynomics$ui$messaging$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___72490,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__41198__auto__ = (function (){var statearr_72481 = f__41197__auto__.call(null);
(statearr_72481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___72490);

return statearr_72481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___72490,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=messaging.js.map?rel=1459533435240