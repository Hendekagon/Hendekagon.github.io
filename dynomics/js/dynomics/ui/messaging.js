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
var args455130 = [];
var len__36260__auto___455179 = arguments.length;
var i__36261__auto___455180 = (0);
while(true){
if((i__36261__auto___455180 < len__36260__auto___455179)){
args455130.push((arguments[i__36261__auto___455180]));

var G__455181 = (i__36261__auto___455180 + (1));
i__36261__auto___455180 = G__455181;
continue;
} else {
}
break;
}

var G__455132 = args455130.length;
switch (G__455132) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args455130.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__455133 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__455133__$1 = ((((!((map__455133 == null)))?((((map__455133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__455133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__455133):map__455133);
var message_channel = cljs.core.get.call(null,map__455133__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__455133__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__38100__auto___455183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___455183,map__455133,map__455133__$1,message_channel,message_pub,c){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___455183,map__455133,map__455133__$1,message_channel,message_pub,c){
return (function (state_455149){
var state_val_455150 = (state_455149[(1)]);
if((state_val_455150 === (1))){
var state_455149__$1 = state_455149;
var statearr_455153_455187 = state_455149__$1;
(statearr_455153_455187[(2)] = null);

(statearr_455153_455187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455150 === (2))){
var state_455149__$1 = state_455149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_455149__$1,(4),c);
} else {
if((state_val_455150 === (3))){
var inst_455147 = (state_455149[(2)]);
var state_455149__$1 = state_455149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_455149__$1,inst_455147);
} else {
if((state_val_455150 === (4))){
var inst_455143 = (state_455149[(2)]);
var inst_455144 = f.call(null,inst_455143);
var state_455149__$1 = (function (){var statearr_455156 = state_455149;
(statearr_455156[(7)] = inst_455144);

return statearr_455156;
})();
var statearr_455157_455188 = state_455149__$1;
(statearr_455157_455188[(2)] = null);

(statearr_455157_455188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38100__auto___455183,map__455133,map__455133__$1,message_channel,message_pub,c))
;
return ((function (switch__38079__auto__,c__38100__auto___455183,map__455133,map__455133__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__38080__auto__ = null;
var dynomics$ui$messaging$state_machine__38080__auto____0 = (function (){
var statearr_455161 = [null,null,null,null,null,null,null,null];
(statearr_455161[(0)] = dynomics$ui$messaging$state_machine__38080__auto__);

(statearr_455161[(1)] = (1));

return statearr_455161;
});
var dynomics$ui$messaging$state_machine__38080__auto____1 = (function (state_455149){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_455149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e455162){if((e455162 instanceof Object)){
var ex__38083__auto__ = e455162;
var statearr_455163_455192 = state_455149;
(statearr_455163_455192[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_455149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e455162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__455193 = state_455149;
state_455149 = G__455193;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38080__auto__ = function(state_455149){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38080__auto____1.call(this,state_455149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38080__auto____0;
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38080__auto____1;
return dynomics$ui$messaging$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___455183,map__455133,map__455133__$1,message_channel,message_pub,c))
})();
var state__38102__auto__ = (function (){var statearr_455165 = f__38101__auto__.call(null);
(statearr_455165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___455183);

return statearr_455165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___455183,map__455133,map__455133__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__455166 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__455167 = null;
var count__455168 = (0);
var i__455169 = (0);
while(true){
if((i__455169 < count__455168)){
var map__455172 = cljs.core._nth.call(null,chunk__455167,i__455169);
var map__455172__$1 = ((((!((map__455172 == null)))?((((map__455172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__455172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__455172):map__455172);
var topic = cljs.core.get.call(null,map__455172__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__455172__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__455198 = seq__455166;
var G__455199 = chunk__455167;
var G__455200 = count__455168;
var G__455201 = (i__455169 + (1));
seq__455166 = G__455198;
chunk__455167 = G__455199;
count__455168 = G__455200;
i__455169 = G__455201;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__455166);
if(temp__4657__auto__){
var seq__455166__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__455166__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__455166__$1);
var G__455203 = cljs.core.chunk_rest.call(null,seq__455166__$1);
var G__455204 = c__36002__auto__;
var G__455205 = cljs.core.count.call(null,c__36002__auto__);
var G__455206 = (0);
seq__455166 = G__455203;
chunk__455167 = G__455204;
count__455168 = G__455205;
i__455169 = G__455206;
continue;
} else {
var map__455177 = cljs.core.first.call(null,seq__455166__$1);
var map__455177__$1 = ((((!((map__455177 == null)))?((((map__455177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__455177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__455177):map__455177);
var topic = cljs.core.get.call(null,map__455177__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__455177__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__455208 = cljs.core.next.call(null,seq__455166__$1);
var G__455209 = null;
var G__455210 = (0);
var G__455211 = (0);
seq__455166 = G__455208;
chunk__455167 = G__455209;
count__455168 = G__455210;
i__455169 = G__455211;
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
return (function (state_455250){
var state_val_455251 = (state_455250[(1)]);
if((state_val_455251 === (1))){
var state_455250__$1 = state_455250;
var statearr_455257_455274 = state_455250__$1;
(statearr_455257_455274[(2)] = null);

(statearr_455257_455274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455251 === (2))){
var state_455250__$1 = state_455250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_455250__$1,(4),ch);
} else {
if((state_val_455251 === (3))){
var inst_455248 = (state_455250[(2)]);
var state_455250__$1 = state_455250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_455250__$1,inst_455248);
} else {
if((state_val_455251 === (4))){
var inst_455244 = (state_455250[(2)]);
var inst_455245 = g.call(null,inst_455244);
var state_455250__$1 = (function (){var statearr_455258 = state_455250;
(statearr_455258[(7)] = inst_455245);

return statearr_455258;
})();
var statearr_455259_455278 = state_455250__$1;
(statearr_455259_455278[(2)] = null);

(statearr_455259_455278[(1)] = (2));


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
var statearr_455268 = [null,null,null,null,null,null,null,null];
(statearr_455268[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__);

(statearr_455268[(1)] = (1));

return statearr_455268;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____1 = (function (state_455250){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_455250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e455269){if((e455269 instanceof Object)){
var ex__38083__auto__ = e455269;
var statearr_455270_455284 = state_455250;
(statearr_455270_455284[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_455250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e455269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__455285 = state_455250;
state_455250 = G__455285;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__ = function(state_455250){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____1.call(this,state_455250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_455271 = f__38101__auto__.call(null);
(statearr_455271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_455271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto__))
);

return c__38100__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__455295){
var map__455301 = p__455295;
var map__455301__$1 = ((((!((map__455301 == null)))?((((map__455301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__455301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__455301):map__455301);
var s = map__455301__$1;
var map__455302 = cljs.core.get.call(null,map__455301__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__455302__$1 = ((((!((map__455302 == null)))?((((map__455302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__455302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__455302):map__455302);
var ws = cljs.core.get.call(null,map__455302__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__455302__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args455313 = [];
var len__36260__auto___455375 = arguments.length;
var i__36261__auto___455376 = (0);
while(true){
if((i__36261__auto___455376 < len__36260__auto___455375)){
args455313.push((arguments[i__36261__auto___455376]));

var G__455377 = (i__36261__auto___455376 + (1));
i__36261__auto___455376 = G__455377;
continue;
} else {
}
break;
}

var G__455315 = args455313.length;
switch (G__455315) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args455313.length)].join('')));

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
return (function (state_455326){
var state_val_455327 = (state_455326[(1)]);
if((state_val_455327 === (1))){
var state_455326__$1 = state_455326;
var statearr_455328_455393 = state_455326__$1;
(statearr_455328_455393[(2)] = null);

(statearr_455328_455393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455327 === (2))){
var state_455326__$1 = state_455326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_455326__$1,(4),wch);
} else {
if((state_val_455327 === (3))){
var inst_455323 = (state_455326[(2)]);
var state_455326__$1 = state_455326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_455326__$1,inst_455323);
} else {
if((state_val_455327 === (4))){
var inst_455318 = (state_455326[(2)]);
var inst_455319 = cljs.core.pr_str.call(null,inst_455318);
var inst_455320 = ws.send(inst_455319);
var state_455326__$1 = (function (){var statearr_455329 = state_455326;
(statearr_455329[(7)] = inst_455320);

return statearr_455329;
})();
var statearr_455330_455400 = state_455326__$1;
(statearr_455330_455400[(2)] = null);

(statearr_455330_455400[(1)] = (2));


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
var statearr_455337 = [null,null,null,null,null,null,null,null];
(statearr_455337[(0)] = dynomics$ui$messaging$state_machine__38080__auto__);

(statearr_455337[(1)] = (1));

return statearr_455337;
});
var dynomics$ui$messaging$state_machine__38080__auto____1 = (function (state_455326){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_455326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e455339){if((e455339 instanceof Object)){
var ex__38083__auto__ = e455339;
var statearr_455340_455401 = state_455326;
(statearr_455340_455401[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_455326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e455339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__455402 = state_455326;
state_455326 = G__455402;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38080__auto__ = function(state_455326){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38080__auto____1.call(this,state_455326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38080__auto____0;
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38080__auto____1;
return dynomics$ui$messaging$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__38102__auto__ = (function (){var statearr_455344 = f__38101__auto__.call(null);
(statearr_455344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_455344;
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

var c__38100__auto___455411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___455411,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___455411,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_455357){
var state_val_455358 = (state_455357[(1)]);
if((state_val_455358 === (1))){
var state_455357__$1 = state_455357;
var statearr_455360_455414 = state_455357__$1;
(statearr_455360_455414[(2)] = null);

(statearr_455360_455414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_455358 === (2))){
var state_455357__$1 = state_455357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_455357__$1,(4),rch);
} else {
if((state_val_455358 === (3))){
var inst_455353 = (state_455357[(2)]);
var state_455357__$1 = state_455357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_455357__$1,inst_455353);
} else {
if((state_val_455358 === (4))){
var inst_455347 = (state_455357[(2)]);
var inst_455348 = cljs.reader.read_string.call(null,inst_455347);
var inst_455349 = cljs.core.async.put_BANG_.call(null,mch,inst_455348);
var state_455357__$1 = (function (){var statearr_455366 = state_455357;
(statearr_455366[(7)] = inst_455349);

return statearr_455366;
})();
var statearr_455367_455423 = state_455357__$1;
(statearr_455367_455423[(2)] = null);

(statearr_455367_455423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38100__auto___455411,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__38079__auto__,c__38100__auto___455411,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__38080__auto__ = null;
var dynomics$ui$messaging$state_machine__38080__auto____0 = (function (){
var statearr_455371 = [null,null,null,null,null,null,null,null];
(statearr_455371[(0)] = dynomics$ui$messaging$state_machine__38080__auto__);

(statearr_455371[(1)] = (1));

return statearr_455371;
});
var dynomics$ui$messaging$state_machine__38080__auto____1 = (function (state_455357){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_455357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e455372){if((e455372 instanceof Object)){
var ex__38083__auto__ = e455372;
var statearr_455373_455428 = state_455357;
(statearr_455373_455428[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_455357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e455372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__455430 = state_455357;
state_455357 = G__455430;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38080__auto__ = function(state_455357){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38080__auto____1.call(this,state_455357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38080__auto____0;
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38080__auto____1;
return dynomics$ui$messaging$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___455411,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__38102__auto__ = (function (){var statearr_455374 = f__38101__auto__.call(null);
(statearr_455374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___455411);

return statearr_455374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___455411,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;
