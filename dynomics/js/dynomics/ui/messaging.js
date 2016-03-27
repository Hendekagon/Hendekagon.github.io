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
var args288424 = [];
var len__36260__auto___288465 = arguments.length;
var i__36261__auto___288466 = (0);
while(true){
if((i__36261__auto___288466 < len__36260__auto___288465)){
args288424.push((arguments[i__36261__auto___288466]));

var G__288468 = (i__36261__auto___288466 + (1));
i__36261__auto___288466 = G__288468;
continue;
} else {
}
break;
}

var G__288429 = args288424.length;
switch (G__288429) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288424.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__288432 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__288432__$1 = ((((!((map__288432 == null)))?((((map__288432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__288432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288432):map__288432);
var message_channel = cljs.core.get.call(null,map__288432__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__288432__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__38100__auto___288477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___288477,map__288432,map__288432__$1,message_channel,message_pub,c){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___288477,map__288432,map__288432__$1,message_channel,message_pub,c){
return (function (state_288444){
var state_val_288445 = (state_288444[(1)]);
if((state_val_288445 === (1))){
var state_288444__$1 = state_288444;
var statearr_288446_288484 = state_288444__$1;
(statearr_288446_288484[(2)] = null);

(statearr_288446_288484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288445 === (2))){
var state_288444__$1 = state_288444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288444__$1,(4),c);
} else {
if((state_val_288445 === (3))){
var inst_288442 = (state_288444[(2)]);
var state_288444__$1 = state_288444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288444__$1,inst_288442);
} else {
if((state_val_288445 === (4))){
var inst_288438 = (state_288444[(2)]);
var inst_288439 = f.call(null,inst_288438);
var state_288444__$1 = (function (){var statearr_288447 = state_288444;
(statearr_288447[(7)] = inst_288439);

return statearr_288447;
})();
var statearr_288448_288487 = state_288444__$1;
(statearr_288448_288487[(2)] = null);

(statearr_288448_288487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38100__auto___288477,map__288432,map__288432__$1,message_channel,message_pub,c))
;
return ((function (switch__38079__auto__,c__38100__auto___288477,map__288432,map__288432__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__38080__auto__ = null;
var dynomics$ui$messaging$state_machine__38080__auto____0 = (function (){
var statearr_288452 = [null,null,null,null,null,null,null,null];
(statearr_288452[(0)] = dynomics$ui$messaging$state_machine__38080__auto__);

(statearr_288452[(1)] = (1));

return statearr_288452;
});
var dynomics$ui$messaging$state_machine__38080__auto____1 = (function (state_288444){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_288444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e288453){if((e288453 instanceof Object)){
var ex__38083__auto__ = e288453;
var statearr_288454_288488 = state_288444;
(statearr_288454_288488[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288489 = state_288444;
state_288444 = G__288489;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38080__auto__ = function(state_288444){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38080__auto____1.call(this,state_288444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38080__auto____0;
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38080__auto____1;
return dynomics$ui$messaging$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___288477,map__288432,map__288432__$1,message_channel,message_pub,c))
})();
var state__38102__auto__ = (function (){var statearr_288455 = f__38101__auto__.call(null);
(statearr_288455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___288477);

return statearr_288455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___288477,map__288432,map__288432__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__288456 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__288457 = null;
var count__288458 = (0);
var i__288459 = (0);
while(true){
if((i__288459 < count__288458)){
var map__288460 = cljs.core._nth.call(null,chunk__288457,i__288459);
var map__288460__$1 = ((((!((map__288460 == null)))?((((map__288460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__288460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288460):map__288460);
var topic = cljs.core.get.call(null,map__288460__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__288460__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__288502 = seq__288456;
var G__288503 = chunk__288457;
var G__288504 = count__288458;
var G__288505 = (i__288459 + (1));
seq__288456 = G__288502;
chunk__288457 = G__288503;
count__288458 = G__288504;
i__288459 = G__288505;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__288456);
if(temp__4657__auto__){
var seq__288456__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288456__$1)){
var c__36002__auto__ = cljs.core.chunk_first.call(null,seq__288456__$1);
var G__288507 = cljs.core.chunk_rest.call(null,seq__288456__$1);
var G__288508 = c__36002__auto__;
var G__288509 = cljs.core.count.call(null,c__36002__auto__);
var G__288510 = (0);
seq__288456 = G__288507;
chunk__288457 = G__288508;
count__288458 = G__288509;
i__288459 = G__288510;
continue;
} else {
var map__288463 = cljs.core.first.call(null,seq__288456__$1);
var map__288463__$1 = ((((!((map__288463 == null)))?((((map__288463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__288463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288463):map__288463);
var topic = cljs.core.get.call(null,map__288463__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__288463__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__288511 = cljs.core.next.call(null,seq__288456__$1);
var G__288512 = null;
var G__288513 = (0);
var G__288514 = (0);
seq__288456 = G__288511;
chunk__288457 = G__288512;
count__288458 = G__288513;
i__288459 = G__288514;
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
return (function (state_288544){
var state_val_288545 = (state_288544[(1)]);
if((state_val_288545 === (1))){
var state_288544__$1 = state_288544;
var statearr_288546_288568 = state_288544__$1;
(statearr_288546_288568[(2)] = null);

(statearr_288546_288568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288545 === (2))){
var state_288544__$1 = state_288544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288544__$1,(4),ch);
} else {
if((state_val_288545 === (3))){
var inst_288542 = (state_288544[(2)]);
var state_288544__$1 = state_288544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288544__$1,inst_288542);
} else {
if((state_val_288545 === (4))){
var inst_288538 = (state_288544[(2)]);
var inst_288539 = g.call(null,inst_288538);
var state_288544__$1 = (function (){var statearr_288548 = state_288544;
(statearr_288548[(7)] = inst_288539);

return statearr_288548;
})();
var statearr_288549_288581 = state_288544__$1;
(statearr_288549_288581[(2)] = null);

(statearr_288549_288581[(1)] = (2));


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
var statearr_288556 = [null,null,null,null,null,null,null,null];
(statearr_288556[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__);

(statearr_288556[(1)] = (1));

return statearr_288556;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____1 = (function (state_288544){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_288544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e288558){if((e288558 instanceof Object)){
var ex__38083__auto__ = e288558;
var statearr_288559_288584 = state_288544;
(statearr_288559_288584[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288587 = state_288544;
state_288544 = G__288587;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__ = function(state_288544){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____1.call(this,state_288544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__))
})();
var state__38102__auto__ = (function (){var statearr_288561 = f__38101__auto__.call(null);
(statearr_288561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_288561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto__))
);

return c__38100__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__288589){
var map__288599 = p__288589;
var map__288599__$1 = ((((!((map__288599 == null)))?((((map__288599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__288599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288599):map__288599);
var s = map__288599__$1;
var map__288600 = cljs.core.get.call(null,map__288599__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__288600__$1 = ((((!((map__288600 == null)))?((((map__288600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__288600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288600):map__288600);
var ws = cljs.core.get.call(null,map__288600__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__288600__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args288618 = [];
var len__36260__auto___288690 = arguments.length;
var i__36261__auto___288691 = (0);
while(true){
if((i__36261__auto___288691 < len__36260__auto___288690)){
args288618.push((arguments[i__36261__auto___288691]));

var G__288692 = (i__36261__auto___288691 + (1));
i__36261__auto___288691 = G__288692;
continue;
} else {
}
break;
}

var G__288620 = args288618.length;
switch (G__288620) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args288618.length)].join('')));

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
return (function (state_288630){
var state_val_288631 = (state_288630[(1)]);
if((state_val_288631 === (1))){
var state_288630__$1 = state_288630;
var statearr_288632_288726 = state_288630__$1;
(statearr_288632_288726[(2)] = null);

(statearr_288632_288726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288631 === (2))){
var state_288630__$1 = state_288630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288630__$1,(4),wch);
} else {
if((state_val_288631 === (3))){
var inst_288628 = (state_288630[(2)]);
var state_288630__$1 = state_288630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288630__$1,inst_288628);
} else {
if((state_val_288631 === (4))){
var inst_288623 = (state_288630[(2)]);
var inst_288624 = cljs.core.pr_str.call(null,inst_288623);
var inst_288625 = ws.send(inst_288624);
var state_288630__$1 = (function (){var statearr_288633 = state_288630;
(statearr_288633[(7)] = inst_288625);

return statearr_288633;
})();
var statearr_288636_288734 = state_288630__$1;
(statearr_288636_288734[(2)] = null);

(statearr_288636_288734[(1)] = (2));


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
var statearr_288641 = [null,null,null,null,null,null,null,null];
(statearr_288641[(0)] = dynomics$ui$messaging$state_machine__38080__auto__);

(statearr_288641[(1)] = (1));

return statearr_288641;
});
var dynomics$ui$messaging$state_machine__38080__auto____1 = (function (state_288630){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_288630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e288643){if((e288643 instanceof Object)){
var ex__38083__auto__ = e288643;
var statearr_288644_288748 = state_288630;
(statearr_288644_288748[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288756 = state_288630;
state_288630 = G__288756;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38080__auto__ = function(state_288630){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38080__auto____1.call(this,state_288630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38080__auto____0;
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38080__auto____1;
return dynomics$ui$messaging$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__38102__auto__ = (function (){var statearr_288651 = f__38101__auto__.call(null);
(statearr_288651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto__);

return statearr_288651;
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

var c__38100__auto___288762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38100__auto___288762,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__38101__auto__ = (function (){var switch__38079__auto__ = ((function (c__38100__auto___288762,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_288664){
var state_val_288665 = (state_288664[(1)]);
if((state_val_288665 === (1))){
var state_288664__$1 = state_288664;
var statearr_288666_288771 = state_288664__$1;
(statearr_288666_288771[(2)] = null);

(statearr_288666_288771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_288665 === (2))){
var state_288664__$1 = state_288664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_288664__$1,(4),rch);
} else {
if((state_val_288665 === (3))){
var inst_288662 = (state_288664[(2)]);
var state_288664__$1 = state_288664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_288664__$1,inst_288662);
} else {
if((state_val_288665 === (4))){
var inst_288656 = (state_288664[(2)]);
var inst_288657 = cljs.reader.read_string.call(null,inst_288656);
var inst_288658 = cljs.core.async.put_BANG_.call(null,mch,inst_288657);
var state_288664__$1 = (function (){var statearr_288669 = state_288664;
(statearr_288669[(7)] = inst_288658);

return statearr_288669;
})();
var statearr_288670_288780 = state_288664__$1;
(statearr_288670_288780[(2)] = null);

(statearr_288670_288780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__38100__auto___288762,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__38079__auto__,c__38100__auto___288762,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__38080__auto__ = null;
var dynomics$ui$messaging$state_machine__38080__auto____0 = (function (){
var statearr_288675 = [null,null,null,null,null,null,null,null];
(statearr_288675[(0)] = dynomics$ui$messaging$state_machine__38080__auto__);

(statearr_288675[(1)] = (1));

return statearr_288675;
});
var dynomics$ui$messaging$state_machine__38080__auto____1 = (function (state_288664){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_288664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e288676){if((e288676 instanceof Object)){
var ex__38083__auto__ = e288676;
var statearr_288677_288798 = state_288664;
(statearr_288677_288798[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_288664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e288676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__288801 = state_288664;
state_288664 = G__288801;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__38080__auto__ = function(state_288664){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__38080__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__38080__auto____1.call(this,state_288664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__38080__auto____0;
dynomics$ui$messaging$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__38080__auto____1;
return dynomics$ui$messaging$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38100__auto___288762,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__38102__auto__ = (function (){var statearr_288684 = f__38101__auto__.call(null);
(statearr_288684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38100__auto___288762);

return statearr_288684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38102__auto__);
});})(c__38100__auto___288762,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;
