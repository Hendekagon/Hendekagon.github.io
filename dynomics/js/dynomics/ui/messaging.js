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
var args91144 = [];
var len__26896__auto___91191 = arguments.length;
var i__26897__auto___91192 = (0);
while(true){
if((i__26897__auto___91192 < len__26896__auto___91191)){
args91144.push((arguments[i__26897__auto___91192]));

var G__91193 = (i__26897__auto___91192 + (1));
i__26897__auto___91192 = G__91193;
continue;
} else {
}
break;
}

var G__91152 = args91144.length;
switch (G__91152) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91144.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__91155 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__91155__$1 = ((((!((map__91155 == null)))?((((map__91155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91155):map__91155);
var message_channel = cljs.core.get.call(null,map__91155__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__91155__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__32975__auto___91196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___91196,map__91155,map__91155__$1,message_channel,message_pub,c){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___91196,map__91155,map__91155__$1,message_channel,message_pub,c){
return (function (state_91165){
var state_val_91166 = (state_91165[(1)]);
if((state_val_91166 === (1))){
var state_91165__$1 = state_91165;
var statearr_91167_91198 = state_91165__$1;
(statearr_91167_91198[(2)] = null);

(statearr_91167_91198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91166 === (2))){
var state_91165__$1 = state_91165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91165__$1,(4),c);
} else {
if((state_val_91166 === (3))){
var inst_91163 = (state_91165[(2)]);
var state_91165__$1 = state_91165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91165__$1,inst_91163);
} else {
if((state_val_91166 === (4))){
var inst_91159 = (state_91165[(2)]);
var inst_91160 = f.call(null,inst_91159);
var state_91165__$1 = (function (){var statearr_91168 = state_91165;
(statearr_91168[(7)] = inst_91160);

return statearr_91168;
})();
var statearr_91169_91199 = state_91165__$1;
(statearr_91169_91199[(2)] = null);

(statearr_91169_91199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__32975__auto___91196,map__91155,map__91155__$1,message_channel,message_pub,c))
;
return ((function (switch__32863__auto__,c__32975__auto___91196,map__91155,map__91155__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__32864__auto__ = null;
var dynomics$ui$messaging$state_machine__32864__auto____0 = (function (){
var statearr_91173 = [null,null,null,null,null,null,null,null];
(statearr_91173[(0)] = dynomics$ui$messaging$state_machine__32864__auto__);

(statearr_91173[(1)] = (1));

return statearr_91173;
});
var dynomics$ui$messaging$state_machine__32864__auto____1 = (function (state_91165){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_91165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e91174){if((e91174 instanceof Object)){
var ex__32867__auto__ = e91174;
var statearr_91175_91203 = state_91165;
(statearr_91175_91203[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91204 = state_91165;
state_91165 = G__91204;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__32864__auto__ = function(state_91165){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__32864__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__32864__auto____1.call(this,state_91165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__32864__auto____0;
dynomics$ui$messaging$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__32864__auto____1;
return dynomics$ui$messaging$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___91196,map__91155,map__91155__$1,message_channel,message_pub,c))
})();
var state__32977__auto__ = (function (){var statearr_91176 = f__32976__auto__.call(null);
(statearr_91176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___91196);

return statearr_91176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___91196,map__91155,map__91155__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__91177 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__91178 = null;
var count__91179 = (0);
var i__91180 = (0);
while(true){
if((i__91180 < count__91179)){
var map__91181 = cljs.core._nth.call(null,chunk__91178,i__91180);
var map__91181__$1 = ((((!((map__91181 == null)))?((((map__91181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91181):map__91181);
var topic = cljs.core.get.call(null,map__91181__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__91181__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__91219 = seq__91177;
var G__91220 = chunk__91178;
var G__91221 = count__91179;
var G__91222 = (i__91180 + (1));
seq__91177 = G__91219;
chunk__91178 = G__91220;
count__91179 = G__91221;
i__91180 = G__91222;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__91177);
if(temp__4657__auto__){
var seq__91177__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91177__$1)){
var c__26638__auto__ = cljs.core.chunk_first.call(null,seq__91177__$1);
var G__91226 = cljs.core.chunk_rest.call(null,seq__91177__$1);
var G__91227 = c__26638__auto__;
var G__91228 = cljs.core.count.call(null,c__26638__auto__);
var G__91229 = (0);
seq__91177 = G__91226;
chunk__91178 = G__91227;
count__91179 = G__91228;
i__91180 = G__91229;
continue;
} else {
var map__91183 = cljs.core.first.call(null,seq__91177__$1);
var map__91183__$1 = ((((!((map__91183 == null)))?((((map__91183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91183):map__91183);
var topic = cljs.core.get.call(null,map__91183__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__91183__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__91231 = cljs.core.next.call(null,seq__91177__$1);
var G__91232 = null;
var G__91233 = (0);
var G__91234 = (0);
seq__91177 = G__91231;
chunk__91178 = G__91232;
count__91179 = G__91233;
i__91180 = G__91234;
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
var c__32975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto__){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto__){
return (function (state_91273){
var state_val_91274 = (state_91273[(1)]);
if((state_val_91274 === (1))){
var state_91273__$1 = state_91273;
var statearr_91277_91291 = state_91273__$1;
(statearr_91277_91291[(2)] = null);

(statearr_91277_91291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91274 === (2))){
var state_91273__$1 = state_91273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91273__$1,(4),ch);
} else {
if((state_val_91274 === (3))){
var inst_91271 = (state_91273[(2)]);
var state_91273__$1 = state_91273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91273__$1,inst_91271);
} else {
if((state_val_91274 === (4))){
var inst_91267 = (state_91273[(2)]);
var inst_91268 = g.call(null,inst_91267);
var state_91273__$1 = (function (){var statearr_91278 = state_91273;
(statearr_91278[(7)] = inst_91268);

return statearr_91278;
})();
var statearr_91279_91292 = state_91273__$1;
(statearr_91279_91292[(2)] = null);

(statearr_91279_91292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__32975__auto__))
;
return ((function (switch__32863__auto__,c__32975__auto__){
return (function() {
var dynomics$ui$messaging$setup_updates_$_state_machine__32864__auto__ = null;
var dynomics$ui$messaging$setup_updates_$_state_machine__32864__auto____0 = (function (){
var statearr_91283 = [null,null,null,null,null,null,null,null];
(statearr_91283[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__32864__auto__);

(statearr_91283[(1)] = (1));

return statearr_91283;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__32864__auto____1 = (function (state_91273){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_91273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e91284){if((e91284 instanceof Object)){
var ex__32867__auto__ = e91284;
var statearr_91285_91301 = state_91273;
(statearr_91285_91301[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91302 = state_91273;
state_91273 = G__91302;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__32864__auto__ = function(state_91273){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__32864__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__32864__auto____1.call(this,state_91273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__32864__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__32864__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto__))
})();
var state__32977__auto__ = (function (){var statearr_91288 = f__32976__auto__.call(null);
(statearr_91288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto__);

return statearr_91288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto__))
);

return c__32975__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__91303){
var map__91311 = p__91303;
var map__91311__$1 = ((((!((map__91311 == null)))?((((map__91311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91311):map__91311);
var s = map__91311__$1;
var map__91312 = cljs.core.get.call(null,map__91311__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__91312__$1 = ((((!((map__91312 == null)))?((((map__91312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91312):map__91312);
var ws = cljs.core.get.call(null,map__91312__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__91312__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args91319 = [];
var len__26896__auto___91387 = arguments.length;
var i__26897__auto___91388 = (0);
while(true){
if((i__26897__auto___91388 < len__26896__auto___91387)){
args91319.push((arguments[i__26897__auto___91388]));

var G__91389 = (i__26897__auto___91388 + (1));
i__26897__auto___91388 = G__91389;
continue;
} else {
}
break;
}

var G__91324 = args91319.length;
switch (G__91324) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91319.length)].join('')));

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
var c__32975__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_91343){
var state_val_91344 = (state_91343[(1)]);
if((state_val_91344 === (1))){
var state_91343__$1 = state_91343;
var statearr_91345_91403 = state_91343__$1;
(statearr_91345_91403[(2)] = null);

(statearr_91345_91403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91344 === (2))){
var state_91343__$1 = state_91343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91343__$1,(4),wch);
} else {
if((state_val_91344 === (3))){
var inst_91339 = (state_91343[(2)]);
var state_91343__$1 = state_91343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91343__$1,inst_91339);
} else {
if((state_val_91344 === (4))){
var inst_91334 = (state_91343[(2)]);
var inst_91335 = cljs.core.pr_str.call(null,inst_91334);
var inst_91336 = ws.send(inst_91335);
var state_91343__$1 = (function (){var statearr_91346 = state_91343;
(statearr_91346[(7)] = inst_91336);

return statearr_91346;
})();
var statearr_91347_91412 = state_91343__$1;
(statearr_91347_91412[(2)] = null);

(statearr_91347_91412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__32975__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__32863__auto__,c__32975__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__32864__auto__ = null;
var dynomics$ui$messaging$state_machine__32864__auto____0 = (function (){
var statearr_91351 = [null,null,null,null,null,null,null,null];
(statearr_91351[(0)] = dynomics$ui$messaging$state_machine__32864__auto__);

(statearr_91351[(1)] = (1));

return statearr_91351;
});
var dynomics$ui$messaging$state_machine__32864__auto____1 = (function (state_91343){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_91343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e91352){if((e91352 instanceof Object)){
var ex__32867__auto__ = e91352;
var statearr_91353_91420 = state_91343;
(statearr_91353_91420[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91424 = state_91343;
state_91343 = G__91424;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__32864__auto__ = function(state_91343){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__32864__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__32864__auto____1.call(this,state_91343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__32864__auto____0;
dynomics$ui$messaging$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__32864__auto____1;
return dynomics$ui$messaging$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__32977__auto__ = (function (){var statearr_91356 = f__32976__auto__.call(null);
(statearr_91356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto__);

return statearr_91356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);

return c__32975__auto__;
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

var c__32975__auto___91433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32975__auto___91433,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__32976__auto__ = (function (){var switch__32863__auto__ = ((function (c__32975__auto___91433,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_91370){
var state_val_91371 = (state_91370[(1)]);
if((state_val_91371 === (1))){
var state_91370__$1 = state_91370;
var statearr_91374_91436 = state_91370__$1;
(statearr_91374_91436[(2)] = null);

(statearr_91374_91436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91371 === (2))){
var state_91370__$1 = state_91370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91370__$1,(4),rch);
} else {
if((state_val_91371 === (3))){
var inst_91367 = (state_91370[(2)]);
var state_91370__$1 = state_91370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91370__$1,inst_91367);
} else {
if((state_val_91371 === (4))){
var inst_91361 = (state_91370[(2)]);
var inst_91362 = cljs.reader.read_string.call(null,inst_91361);
var inst_91363 = cljs.core.async.put_BANG_.call(null,mch,inst_91362);
var state_91370__$1 = (function (){var statearr_91378 = state_91370;
(statearr_91378[(7)] = inst_91363);

return statearr_91378;
})();
var statearr_91379_91443 = state_91370__$1;
(statearr_91379_91443[(2)] = null);

(statearr_91379_91443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__32975__auto___91433,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__32863__auto__,c__32975__auto___91433,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__32864__auto__ = null;
var dynomics$ui$messaging$state_machine__32864__auto____0 = (function (){
var statearr_91383 = [null,null,null,null,null,null,null,null];
(statearr_91383[(0)] = dynomics$ui$messaging$state_machine__32864__auto__);

(statearr_91383[(1)] = (1));

return statearr_91383;
});
var dynomics$ui$messaging$state_machine__32864__auto____1 = (function (state_91370){
while(true){
var ret_value__32865__auto__ = (function (){try{while(true){
var result__32866__auto__ = switch__32863__auto__.call(null,state_91370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32866__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32866__auto__;
}
break;
}
}catch (e91384){if((e91384 instanceof Object)){
var ex__32867__auto__ = e91384;
var statearr_91385_91457 = state_91370;
(statearr_91385_91457[(5)] = ex__32867__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32865__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91461 = state_91370;
state_91370 = G__91461;
continue;
} else {
return ret_value__32865__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__32864__auto__ = function(state_91370){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__32864__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__32864__auto____1.call(this,state_91370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__32864__auto____0;
dynomics$ui$messaging$state_machine__32864__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__32864__auto____1;
return dynomics$ui$messaging$state_machine__32864__auto__;
})()
;})(switch__32863__auto__,c__32975__auto___91433,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__32977__auto__ = (function (){var statearr_91386 = f__32976__auto__.call(null);
(statearr_91386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32975__auto___91433);

return statearr_91386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32977__auto__);
});})(c__32975__auto___91433,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;
