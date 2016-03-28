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
var args298197 = [];
var len__36260__auto___298232 = arguments.length;
var i__36261__auto___298233 = (0);
while(true){
if((i__36261__auto___298233 < len__36260__auto___298232)){
args298197.push((arguments[i__36261__auto___298233]));

var G__298234 = (i__36261__auto___298233 + (1));
i__36261__auto___298233 = G__298234;
continue;
} else {
}
break;
}

var G__298201 = args298197.length;
switch (G__298201) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args298197.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__298202 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__298202__$1 = ((((!((map__298202 == null)))?((((map__298202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298202):map__298202);
var message_channel = cljs.core.get.call(null,map__298202__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__298202__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__38100__auto___298238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___298238,map__298202,map__298202__$1,message_channel,message_pub,c){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___298238,map__298202,map__298202__$1,message_channel,message_pub,c){
return (function (state_298212){
var state_val_298213 = (state_298212[(1)]);
if((state_val_298213 === (1))){
var state_298212__$1 = state_298212;
var statearr_298214_298242 = state_298212__$1;
(statearr_298214_298242[(2)] = null);

(statearr_298214_298242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298213 === (2))){
var state_298212__$1 = state_298212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_298212__$1,(4),c);
} else {
if((state_val_298213 === (3))){
var inst_298210 = (state_298212[(2)]);
var state_298212__$1 = state_298212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_298212__$1,inst_298210);
} else {
if((state_val_298213 === (4))){
var inst_298206 = (state_298212[(2)]);
var inst_298207 = f.call(null,inst_298206);
var state_298212__$1 = (function (){var statearr_298215 = state_298212;
(statearr_298215[(7)] = inst_298207);

return statearr_298215;
})();
var statearr_298216_298248 = state_298212__$1;
(statearr_298216_298248[(2)] = null);

(statearr_298216_298248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38100__auto___298238,map__298202,map__298202__$1,message_channel,message_pub,c))
;
return ((function (switch__38079__auto__,c__38100__auto___298238,map__298202,map__298202__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__38080__auto__ = null;
var dynomics$ui$messaging$state_machine__38080__auto____0 = (function (){
var statearr_298220 = [null,null,null,null,null,null,null,null];
(statearr_298220[(0)] = dynomics$ui$messaging$state_machine__38080__auto__);

(statearr_298220[(1)] = (1));

return statearr_298220;
});
var dynomics$ui$messaging$state_machine__38080__auto____1 = (function (state_298212){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_298212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e298221){if((e298221 instanceof Object)){
var ex__38083__auto__ = e298221;
var statearr_298222_298256 = state_298212;
(statearr_298222_298256[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e298221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__298259 = state_298212;
state_298212 = G__298259;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38080__auto__ = function(state_298212){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38080__auto____1.call(this,state_298212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38080__auto____0;
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38080__auto____1;
return dynomics$ui$messaging$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___298238,map__298202,map__298202__$1,message_channel,message_pub,c))
})();
var state__38102__auto__ = (function (){var statearr_298223 = f__38101__auto__.call(null);
(statearr_298223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___298238);

return statearr_298223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___298238,map__298202,map__298202__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__298224 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__298225 = null;
var count__298226 = (0);
var i__298227 = (0);
while(true){
if((i__298227 < count__298226)){
var map__298228 = cljs.core._nth.call(null,chunk__298225,i__298227);
var map__298228__$1 = ((((!((map__298228 == null)))?((((map__298228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298228):map__298228);
var topic = cljs.core.get.call(null,map__298228__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__298228__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__298264 = seq__298224;
var G__298265 = chunk__298225;
var G__298266 = count__298226;
var G__298267 = (i__298227 + (1));
seq__298224 = G__298264;
chunk__298225 = G__298265;
count__298226 = G__298266;
i__298227 = G__298267;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__298224);
if(temp__4657__auto__){
var seq__298224__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__298224__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__298224__$1);
var G__298269 = cljs.core.chunk_rest.call(null,seq__298224__$1);
var G__298270 = c__36002__auto__;
var G__298271 = cljs.core.count.call(null,c__36002__auto__);
var G__298272 = (0);
seq__298224 = G__298269;
chunk__298225 = G__298270;
count__298226 = G__298271;
i__298227 = G__298272;
continue;
} else {
var map__298230 = cljs.core.first.call(null,seq__298224__$1);
var map__298230__$1 = ((((!((map__298230 == null)))?((((map__298230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298230):map__298230);
var topic = cljs.core.get.call(null,map__298230__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__298230__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__298286 = cljs.core.next.call(null,seq__298224__$1);
var G__298287 = null;
var G__298288 = (0);
var G__298289 = (0);
seq__298224 = G__298286;
chunk__298225 = G__298287;
count__298226 = G__298288;
i__298227 = G__298289;
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
return (function (state_298323){
var state_val_298324 = (state_298323[(1)]);
if((state_val_298324 === (1))){
var state_298323__$1 = state_298323;
var statearr_298327_298339 = state_298323__$1;
(statearr_298327_298339[(2)] = null);

(statearr_298327_298339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298324 === (2))){
var state_298323__$1 = state_298323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_298323__$1,(4),ch);
} else {
if((state_val_298324 === (3))){
var inst_298321 = (state_298323[(2)]);
var state_298323__$1 = state_298323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_298323__$1,inst_298321);
} else {
if((state_val_298324 === (4))){
var inst_298317 = (state_298323[(2)]);
var inst_298318 = g.call(null,inst_298317);
var state_298323__$1 = (function (){var statearr_298329 = state_298323;
(statearr_298329[(7)] = inst_298318);

return statearr_298329;
})();
var statearr_298330_298340 = state_298323__$1;
(statearr_298330_298340[(2)] = null);

(statearr_298330_298340[(1)] = (2));


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
var statearr_298335 = [null,null,null,null,null,null,null,null];
(statearr_298335[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__);

(statearr_298335[(1)] = (1));

return statearr_298335;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____1 = (function (state_298323){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_298323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e298336){if((e298336 instanceof Object)){
var ex__38083__auto__ = e298336;
var statearr_298337_298346 = state_298323;
(statearr_298337_298346[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e298336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__298348 = state_298323;
state_298323 = G__298348;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__ = function(state_298323){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____1.call(this,state_298323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_298338 = f__38101__auto__.call(null);
(statearr_298338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_298338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto__))
);

return c__38100__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__298358){
var map__298364 = p__298358;
var map__298364__$1 = ((((!((map__298364 == null)))?((((map__298364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298364):map__298364);
var s = map__298364__$1;
var map__298365 = cljs.core.get.call(null,map__298364__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__298365__$1 = ((((!((map__298365 == null)))?((((map__298365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__298365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__298365):map__298365);
var ws = cljs.core.get.call(null,map__298365__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__298365__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args298372 = [];
var len__36260__auto___298433 = arguments.length;
var i__36261__auto___298434 = (0);
while(true){
if((i__36261__auto___298434 < len__36260__auto___298433)){
args298372.push((arguments[i__36261__auto___298434]));

var G__298435 = (i__36261__auto___298434 + (1));
i__36261__auto___298434 = G__298435;
continue;
} else {
}
break;
}

var G__298376 = args298372.length;
switch (G__298376) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args298372.length)].join('')));

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
return (function (state_298388){
var state_val_298389 = (state_298388[(1)]);
if((state_val_298389 === (1))){
var state_298388__$1 = state_298388;
var statearr_298393_298442 = state_298388__$1;
(statearr_298393_298442[(2)] = null);

(statearr_298393_298442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298389 === (2))){
var state_298388__$1 = state_298388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_298388__$1,(4),wch);
} else {
if((state_val_298389 === (3))){
var inst_298386 = (state_298388[(2)]);
var state_298388__$1 = state_298388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_298388__$1,inst_298386);
} else {
if((state_val_298389 === (4))){
var inst_298381 = (state_298388[(2)]);
var inst_298382 = cljs.core.pr_str.call(null,inst_298381);
var inst_298383 = ws.send(inst_298382);
var state_298388__$1 = (function (){var statearr_298394 = state_298388;
(statearr_298394[(7)] = inst_298383);

return statearr_298394;
})();
var statearr_298395_298446 = state_298388__$1;
(statearr_298395_298446[(2)] = null);

(statearr_298395_298446[(1)] = (2));


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
var statearr_298402 = [null,null,null,null,null,null,null,null];
(statearr_298402[(0)] = dynomics$ui$messaging$state_machine__38080__auto__);

(statearr_298402[(1)] = (1));

return statearr_298402;
});
var dynomics$ui$messaging$state_machine__38080__auto____1 = (function (state_298388){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_298388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e298403){if((e298403 instanceof Object)){
var ex__38083__auto__ = e298403;
var statearr_298404_298454 = state_298388;
(statearr_298404_298454[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e298403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__298455 = state_298388;
state_298388 = G__298455;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38080__auto__ = function(state_298388){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38080__auto____1.call(this,state_298388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38080__auto____0;
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38080__auto____1;
return dynomics$ui$messaging$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__38102__auto__ = (function (){var statearr_298405 = f__38101__auto__.call(null);
(statearr_298405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_298405;
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

var c__38100__auto___298466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___298466,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___298466,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_298415){
var state_val_298416 = (state_298415[(1)]);
if((state_val_298416 === (1))){
var state_298415__$1 = state_298415;
var statearr_298417_298475 = state_298415__$1;
(statearr_298417_298475[(2)] = null);

(statearr_298417_298475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_298416 === (2))){
var state_298415__$1 = state_298415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_298415__$1,(4),rch);
} else {
if((state_val_298416 === (3))){
var inst_298413 = (state_298415[(2)]);
var state_298415__$1 = state_298415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_298415__$1,inst_298413);
} else {
if((state_val_298416 === (4))){
var inst_298408 = (state_298415[(2)]);
var inst_298409 = cljs.reader.read_string.call(null,inst_298408);
var inst_298410 = cljs.core.async.put_BANG_.call(null,mch,inst_298409);
var state_298415__$1 = (function (){var statearr_298424 = state_298415;
(statearr_298424[(7)] = inst_298410);

return statearr_298424;
})();
var statearr_298425_298476 = state_298415__$1;
(statearr_298425_298476[(2)] = null);

(statearr_298425_298476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38100__auto___298466,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__38079__auto__,c__38100__auto___298466,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__38080__auto__ = null;
var dynomics$ui$messaging$state_machine__38080__auto____0 = (function (){
var statearr_298429 = [null,null,null,null,null,null,null,null];
(statearr_298429[(0)] = dynomics$ui$messaging$state_machine__38080__auto__);

(statearr_298429[(1)] = (1));

return statearr_298429;
});
var dynomics$ui$messaging$state_machine__38080__auto____1 = (function (state_298415){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_298415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e298430){if((e298430 instanceof Object)){
var ex__38083__auto__ = e298430;
var statearr_298431_298479 = state_298415;
(statearr_298431_298479[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_298415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e298430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__298480 = state_298415;
state_298415 = G__298480;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38080__auto__ = function(state_298415){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38080__auto____1.call(this,state_298415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38080__auto____0;
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38080__auto____1;
return dynomics$ui$messaging$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___298466,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__38102__auto__ = (function (){var statearr_298432 = f__38101__auto__.call(null);
(statearr_298432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___298466);

return statearr_298432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___298466,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=messaging.js.map?rel=1459068555144