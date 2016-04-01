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
var args131225 = [];
var len__36494__auto___131264 = arguments.length;
var i__36495__auto___131265 = (0);
while(true){
if((i__36495__auto___131265 < len__36494__auto___131264)){
args131225.push((arguments[i__36495__auto___131265]));

var G__131266 = (i__36495__auto___131265 + (1));
i__36495__auto___131265 = G__131266;
continue;
} else {
}
break;
}

var G__131228 = args131225.length;
switch (G__131228) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131225.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__131229 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__131229__$1 = ((((!((map__131229 == null)))?((((map__131229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131229):map__131229);
var message_channel = cljs.core.get.call(null,map__131229__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__131229__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__38379__auto___131269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___131269,map__131229,map__131229__$1,message_channel,message_pub,c){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___131269,map__131229,map__131229__$1,message_channel,message_pub,c){
return (function (state_131239){
var state_val_131240 = (state_131239[(1)]);
if((state_val_131240 === (1))){
var state_131239__$1 = state_131239;
var statearr_131241_131275 = state_131239__$1;
(statearr_131241_131275[(2)] = null);

(statearr_131241_131275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131240 === (2))){
var state_131239__$1 = state_131239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131239__$1,(4),c);
} else {
if((state_val_131240 === (3))){
var inst_131237 = (state_131239[(2)]);
var state_131239__$1 = state_131239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131239__$1,inst_131237);
} else {
if((state_val_131240 === (4))){
var inst_131233 = (state_131239[(2)]);
var inst_131234 = f.call(null,inst_131233);
var state_131239__$1 = (function (){var statearr_131242 = state_131239;
(statearr_131242[(7)] = inst_131234);

return statearr_131242;
})();
var statearr_131243_131281 = state_131239__$1;
(statearr_131243_131281[(2)] = null);

(statearr_131243_131281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38379__auto___131269,map__131229,map__131229__$1,message_channel,message_pub,c))
;
return ((function (switch__38358__auto__,c__38379__auto___131269,map__131229,map__131229__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__38359__auto__ = null;
var dynomics$ui$messaging$state_machine__38359__auto____0 = (function (){
var statearr_131251 = [null,null,null,null,null,null,null,null];
(statearr_131251[(0)] = dynomics$ui$messaging$state_machine__38359__auto__);

(statearr_131251[(1)] = (1));

return statearr_131251;
});
var dynomics$ui$messaging$state_machine__38359__auto____1 = (function (state_131239){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_131239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e131252){if((e131252 instanceof Object)){
var ex__38362__auto__ = e131252;
var statearr_131253_131292 = state_131239;
(statearr_131253_131292[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e131252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__131293 = state_131239;
state_131239 = G__131293;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38359__auto__ = function(state_131239){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38359__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38359__auto____1.call(this,state_131239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38359__auto____0;
dynomics$ui$messaging$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38359__auto____1;
return dynomics$ui$messaging$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___131269,map__131229,map__131229__$1,message_channel,message_pub,c))
})();
var state__38381__auto__ = (function (){var statearr_131254 = f__38380__auto__.call(null);
(statearr_131254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___131269);

return statearr_131254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___131269,map__131229,map__131229__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__131255 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__131256 = null;
var count__131257 = (0);
var i__131258 = (0);
while(true){
if((i__131258 < count__131257)){
var map__131259 = cljs.core._nth.call(null,chunk__131256,i__131258);
var map__131259__$1 = ((((!((map__131259 == null)))?((((map__131259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131259):map__131259);
var topic = cljs.core.get.call(null,map__131259__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__131259__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__131299 = seq__131255;
var G__131300 = chunk__131256;
var G__131301 = count__131257;
var G__131302 = (i__131258 + (1));
seq__131255 = G__131299;
chunk__131256 = G__131300;
count__131257 = G__131301;
i__131258 = G__131302;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__131255);
if(temp__4657__auto__){
var seq__131255__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131255__$1)){
var c__36236__auto__ = cljs.core.chunk_first.call(null,seq__131255__$1);
var G__131303 = cljs.core.chunk_rest.call(null,seq__131255__$1);
var G__131304 = c__36236__auto__;
var G__131305 = cljs.core.count.call(null,c__36236__auto__);
var G__131306 = (0);
seq__131255 = G__131303;
chunk__131256 = G__131304;
count__131257 = G__131305;
i__131258 = G__131306;
continue;
} else {
var map__131261 = cljs.core.first.call(null,seq__131255__$1);
var map__131261__$1 = ((((!((map__131261 == null)))?((((map__131261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131261):map__131261);
var topic = cljs.core.get.call(null,map__131261__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__131261__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__131309 = cljs.core.next.call(null,seq__131255__$1);
var G__131310 = null;
var G__131311 = (0);
var G__131312 = (0);
seq__131255 = G__131309;
chunk__131256 = G__131310;
count__131257 = G__131311;
i__131258 = G__131312;
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
var c__38379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto__){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto__){
return (function (state_131350){
var state_val_131351 = (state_131350[(1)]);
if((state_val_131351 === (1))){
var state_131350__$1 = state_131350;
var statearr_131352_131366 = state_131350__$1;
(statearr_131352_131366[(2)] = null);

(statearr_131352_131366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131351 === (2))){
var state_131350__$1 = state_131350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131350__$1,(4),ch);
} else {
if((state_val_131351 === (3))){
var inst_131344 = (state_131350[(2)]);
var state_131350__$1 = state_131350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131350__$1,inst_131344);
} else {
if((state_val_131351 === (4))){
var inst_131340 = (state_131350[(2)]);
var inst_131341 = g.call(null,inst_131340);
var state_131350__$1 = (function (){var statearr_131357 = state_131350;
(statearr_131357[(7)] = inst_131341);

return statearr_131357;
})();
var statearr_131358_131375 = state_131350__$1;
(statearr_131358_131375[(2)] = null);

(statearr_131358_131375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38379__auto__))
;
return ((function (switch__38358__auto__,c__38379__auto__){
return (function() {
var dynomics$ui$messaging$setup_updates_$_state_machine__38359__auto__ = null;
var dynomics$ui$messaging$setup_updates_$_state_machine__38359__auto____0 = (function (){
var statearr_131362 = [null,null,null,null,null,null,null,null];
(statearr_131362[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__38359__auto__);

(statearr_131362[(1)] = (1));

return statearr_131362;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__38359__auto____1 = (function (state_131350){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_131350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e131363){if((e131363 instanceof Object)){
var ex__38362__auto__ = e131363;
var statearr_131364_131376 = state_131350;
(statearr_131364_131376[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e131363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__131377 = state_131350;
state_131350 = G__131377;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__38359__auto__ = function(state_131350){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__38359__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__38359__auto____1.call(this,state_131350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__38359__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__38359__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto__))
})();
var state__38381__auto__ = (function (){var statearr_131365 = f__38380__auto__.call(null);
(statearr_131365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto__);

return statearr_131365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto__))
);

return c__38379__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__131378){
var map__131383 = p__131378;
var map__131383__$1 = ((((!((map__131383 == null)))?((((map__131383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131383):map__131383);
var s = map__131383__$1;
var map__131384 = cljs.core.get.call(null,map__131383__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__131384__$1 = ((((!((map__131384 == null)))?((((map__131384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__131384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__131384):map__131384);
var ws = cljs.core.get.call(null,map__131384__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__131384__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args131389 = [];
var len__36494__auto___131527 = arguments.length;
var i__36495__auto___131528 = (0);
while(true){
if((i__36495__auto___131528 < len__36494__auto___131527)){
args131389.push((arguments[i__36495__auto___131528]));

var G__131530 = (i__36495__auto___131528 + (1));
i__36495__auto___131528 = G__131530;
continue;
} else {
}
break;
}

var G__131395 = args131389.length;
switch (G__131395) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args131389.length)].join('')));

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
var c__38379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_131452){
var state_val_131453 = (state_131452[(1)]);
if((state_val_131453 === (1))){
var state_131452__$1 = state_131452;
var statearr_131454_131545 = state_131452__$1;
(statearr_131454_131545[(2)] = null);

(statearr_131454_131545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131453 === (2))){
var state_131452__$1 = state_131452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131452__$1,(4),wch);
} else {
if((state_val_131453 === (3))){
var inst_131450 = (state_131452[(2)]);
var state_131452__$1 = state_131452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131452__$1,inst_131450);
} else {
if((state_val_131453 === (4))){
var inst_131445 = (state_131452[(2)]);
var inst_131446 = cljs.core.pr_str.call(null,inst_131445);
var inst_131447 = ws.send(inst_131446);
var state_131452__$1 = (function (){var statearr_131455 = state_131452;
(statearr_131455[(7)] = inst_131447);

return statearr_131455;
})();
var statearr_131456_131547 = state_131452__$1;
(statearr_131456_131547[(2)] = null);

(statearr_131456_131547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38379__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__38358__auto__,c__38379__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__38359__auto__ = null;
var dynomics$ui$messaging$state_machine__38359__auto____0 = (function (){
var statearr_131465 = [null,null,null,null,null,null,null,null];
(statearr_131465[(0)] = dynomics$ui$messaging$state_machine__38359__auto__);

(statearr_131465[(1)] = (1));

return statearr_131465;
});
var dynomics$ui$messaging$state_machine__38359__auto____1 = (function (state_131452){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_131452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e131466){if((e131466 instanceof Object)){
var ex__38362__auto__ = e131466;
var statearr_131467_131549 = state_131452;
(statearr_131467_131549[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e131466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__131550 = state_131452;
state_131452 = G__131550;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38359__auto__ = function(state_131452){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38359__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38359__auto____1.call(this,state_131452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38359__auto____0;
dynomics$ui$messaging$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38359__auto____1;
return dynomics$ui$messaging$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__38381__auto__ = (function (){var statearr_131468 = f__38380__auto__.call(null);
(statearr_131468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto__);

return statearr_131468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);

return c__38379__auto__;
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

var c__38379__auto___131553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38379__auto___131553,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__38380__auto__ = (function (){var switch__38358__auto__ = ((function (c__38379__auto___131553,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_131514){
var state_val_131515 = (state_131514[(1)]);
if((state_val_131515 === (1))){
var state_131514__$1 = state_131514;
var statearr_131516_131556 = state_131514__$1;
(statearr_131516_131556[(2)] = null);

(statearr_131516_131556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_131515 === (2))){
var state_131514__$1 = state_131514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_131514__$1,(4),rch);
} else {
if((state_val_131515 === (3))){
var inst_131512 = (state_131514[(2)]);
var state_131514__$1 = state_131514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_131514__$1,inst_131512);
} else {
if((state_val_131515 === (4))){
var inst_131471 = (state_131514[(2)]);
var inst_131472 = cljs.reader.read_string.call(null,inst_131471);
var inst_131473 = cljs.core.async.put_BANG_.call(null,mch,inst_131472);
var state_131514__$1 = (function (){var statearr_131517 = state_131514;
(statearr_131517[(7)] = inst_131473);

return statearr_131517;
})();
var statearr_131518_131557 = state_131514__$1;
(statearr_131518_131557[(2)] = null);

(statearr_131518_131557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38379__auto___131553,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__38358__auto__,c__38379__auto___131553,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__38359__auto__ = null;
var dynomics$ui$messaging$state_machine__38359__auto____0 = (function (){
var statearr_131522 = [null,null,null,null,null,null,null,null];
(statearr_131522[(0)] = dynomics$ui$messaging$state_machine__38359__auto__);

(statearr_131522[(1)] = (1));

return statearr_131522;
});
var dynomics$ui$messaging$state_machine__38359__auto____1 = (function (state_131514){
while(true){
var ret_value__38360__auto__ = (function (){try{while(true){
var result__38361__auto__ = switch__38358__auto__.call(null,state_131514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38361__auto__;
}
break;
}
}catch (e131523){if((e131523 instanceof Object)){
var ex__38362__auto__ = e131523;
var statearr_131524_131558 = state_131514;
(statearr_131524_131558[(5)] = ex__38362__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_131514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e131523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__131561 = state_131514;
state_131514 = G__131561;
continue;
} else {
return ret_value__38360__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38359__auto__ = function(state_131514){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38359__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38359__auto____1.call(this,state_131514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38359__auto____0;
dynomics$ui$messaging$state_machine__38359__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38359__auto____1;
return dynomics$ui$messaging$state_machine__38359__auto__;
})()
;})(switch__38358__auto__,c__38379__auto___131553,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__38381__auto__ = (function (){var statearr_131525 = f__38380__auto__.call(null);
(statearr_131525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38379__auto___131553);

return statearr_131525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38381__auto__);
});})(c__38379__auto___131553,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;
