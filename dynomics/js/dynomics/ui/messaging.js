// Compiled by ClojureScript 1.7.170 {}
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
var args379949 = [];
var len__25219__auto___379982 = arguments.length;
var i__25220__auto___379983 = (0);
while(true){
if((i__25220__auto___379983 < len__25219__auto___379982)){
args379949.push((arguments[i__25220__auto___379983]));

var G__379984 = (i__25220__auto___379983 + (1));
i__25220__auto___379983 = G__379984;
continue;
} else {
}
break;
}

var G__379951 = args379949.length;
switch (G__379951) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args379949.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__379952 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__379952__$1 = ((((!((map__379952 == null)))?((((map__379952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__379952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379952):map__379952);
var message_channel = cljs.core.get.call(null,map__379952__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__379952__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__35562__auto___379986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___379986,map__379952,map__379952__$1,message_channel,message_pub,c){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___379986,map__379952,map__379952__$1,message_channel,message_pub,c){
return (function (state_379962){
var state_val_379963 = (state_379962[(1)]);
if((state_val_379963 === (1))){
var state_379962__$1 = state_379962;
var statearr_379964_379987 = state_379962__$1;
(statearr_379964_379987[(2)] = null);

(statearr_379964_379987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_379963 === (2))){
var state_379962__$1 = state_379962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_379962__$1,(4),c);
} else {
if((state_val_379963 === (3))){
var inst_379960 = (state_379962[(2)]);
var state_379962__$1 = state_379962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_379962__$1,inst_379960);
} else {
if((state_val_379963 === (4))){
var inst_379956 = (state_379962[(2)]);
var inst_379957 = f.call(null,inst_379956);
var state_379962__$1 = (function (){var statearr_379965 = state_379962;
(statearr_379965[(7)] = inst_379957);

return statearr_379965;
})();
var statearr_379966_379988 = state_379962__$1;
(statearr_379966_379988[(2)] = null);

(statearr_379966_379988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35562__auto___379986,map__379952,map__379952__$1,message_channel,message_pub,c))
;
return ((function (switch__35450__auto__,c__35562__auto___379986,map__379952,map__379952__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__35451__auto__ = null;
var dynomics$ui$messaging$state_machine__35451__auto____0 = (function (){
var statearr_379970 = [null,null,null,null,null,null,null,null];
(statearr_379970[(0)] = dynomics$ui$messaging$state_machine__35451__auto__);

(statearr_379970[(1)] = (1));

return statearr_379970;
});
var dynomics$ui$messaging$state_machine__35451__auto____1 = (function (state_379962){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_379962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e379971){if((e379971 instanceof Object)){
var ex__35454__auto__ = e379971;
var statearr_379972_379989 = state_379962;
(statearr_379972_379989[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_379962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e379971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__379990 = state_379962;
state_379962 = G__379990;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__35451__auto__ = function(state_379962){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__35451__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__35451__auto____1.call(this,state_379962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__35451__auto____0;
dynomics$ui$messaging$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__35451__auto____1;
return dynomics$ui$messaging$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___379986,map__379952,map__379952__$1,message_channel,message_pub,c))
})();
var state__35564__auto__ = (function (){var statearr_379973 = f__35563__auto__.call(null);
(statearr_379973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___379986);

return statearr_379973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___379986,map__379952,map__379952__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__379974 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__379975 = null;
var count__379976 = (0);
var i__379977 = (0);
while(true){
if((i__379977 < count__379976)){
var map__379978 = cljs.core._nth.call(null,chunk__379975,i__379977);
var map__379978__$1 = ((((!((map__379978 == null)))?((((map__379978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__379978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379978):map__379978);
var topic = cljs.core.get.call(null,map__379978__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__379978__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__379991 = seq__379974;
var G__379992 = chunk__379975;
var G__379993 = count__379976;
var G__379994 = (i__379977 + (1));
seq__379974 = G__379991;
chunk__379975 = G__379992;
count__379976 = G__379993;
i__379977 = G__379994;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__379974);
if(temp__4425__auto__){
var seq__379974__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__379974__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__379974__$1);
var G__379995 = cljs.core.chunk_rest.call(null,seq__379974__$1);
var G__379996 = c__24964__auto__;
var G__379997 = cljs.core.count.call(null,c__24964__auto__);
var G__379998 = (0);
seq__379974 = G__379995;
chunk__379975 = G__379996;
count__379976 = G__379997;
i__379977 = G__379998;
continue;
} else {
var map__379980 = cljs.core.first.call(null,seq__379974__$1);
var map__379980__$1 = ((((!((map__379980 == null)))?((((map__379980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__379980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379980):map__379980);
var topic = cljs.core.get.call(null,map__379980__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__379980__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__379999 = cljs.core.next.call(null,seq__379974__$1);
var G__380000 = null;
var G__380001 = (0);
var G__380002 = (0);
seq__379974 = G__379999;
chunk__379975 = G__380000;
count__379976 = G__380001;
i__379977 = G__380002;
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
var c__35562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto__){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto__){
return (function (state_380031){
var state_val_380032 = (state_380031[(1)]);
if((state_val_380032 === (1))){
var state_380031__$1 = state_380031;
var statearr_380033_380043 = state_380031__$1;
(statearr_380033_380043[(2)] = null);

(statearr_380033_380043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_380032 === (2))){
var state_380031__$1 = state_380031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_380031__$1,(4),ch);
} else {
if((state_val_380032 === (3))){
var inst_380029 = (state_380031[(2)]);
var state_380031__$1 = state_380031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_380031__$1,inst_380029);
} else {
if((state_val_380032 === (4))){
var inst_380025 = (state_380031[(2)]);
var inst_380026 = g.call(null,inst_380025);
var state_380031__$1 = (function (){var statearr_380034 = state_380031;
(statearr_380034[(7)] = inst_380026);

return statearr_380034;
})();
var statearr_380035_380044 = state_380031__$1;
(statearr_380035_380044[(2)] = null);

(statearr_380035_380044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35562__auto__))
;
return ((function (switch__35450__auto__,c__35562__auto__){
return (function() {
var dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto__ = null;
var dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto____0 = (function (){
var statearr_380039 = [null,null,null,null,null,null,null,null];
(statearr_380039[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto__);

(statearr_380039[(1)] = (1));

return statearr_380039;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto____1 = (function (state_380031){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_380031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e380040){if((e380040 instanceof Object)){
var ex__35454__auto__ = e380040;
var statearr_380041_380045 = state_380031;
(statearr_380041_380045[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_380031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e380040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__380046 = state_380031;
state_380031 = G__380046;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto__ = function(state_380031){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto____1.call(this,state_380031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto__))
})();
var state__35564__auto__ = (function (){var statearr_380042 = f__35563__auto__.call(null);
(statearr_380042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto__);

return statearr_380042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto__))
);

return c__35562__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__380047){
var map__380052 = p__380047;
var map__380052__$1 = ((((!((map__380052 == null)))?((((map__380052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__380052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__380052):map__380052);
var s = map__380052__$1;
var map__380053 = cljs.core.get.call(null,map__380052__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__380053__$1 = ((((!((map__380053 == null)))?((((map__380053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__380053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__380053):map__380053);
var ws = cljs.core.get.call(null,map__380053__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__380053__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args380056 = [];
var len__25219__auto___380101 = arguments.length;
var i__25220__auto___380102 = (0);
while(true){
if((i__25220__auto___380102 < len__25219__auto___380101)){
args380056.push((arguments[i__25220__auto___380102]));

var G__380103 = (i__25220__auto___380102 + (1));
i__25220__auto___380102 = G__380103;
continue;
} else {
}
break;
}

var G__380058 = args380056.length;
switch (G__380058) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args380056.length)].join('')));

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
var mch = cljs.core.async.chan.call(null);
var msgs = cljs.core.async.pub.call(null,mch,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"type","type",1174270348)));
var state_updates = cljs.core.async.chan.call(null);
var messaging = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message-channel","message-channel",-227831873),mch,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403),msgs,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),state_updates,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454),ws_uri], null);
goog.events.listen(ws,[goog.net.WebSocket.EventType.CLOSED,goog.net.WebSocket.EventType.ERROR,goog.net.WebSocket.EventType.MESSAGE,goog.net.WebSocket.EventType.OPENED],((function (ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (e){
if(cljs.core._EQ_.call(null,e.type,goog.net.WebSocket.EventType.MESSAGE)){
return cljs.core.async.put_BANG_.call(null,rch,e.message);
} else {
if(cljs.core._EQ_.call(null,e.type,goog.net.WebSocket.EventType.OPENED)){
var c__35562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_380068){
var state_val_380069 = (state_380068[(1)]);
if((state_val_380069 === (1))){
var state_380068__$1 = state_380068;
var statearr_380070_380105 = state_380068__$1;
(statearr_380070_380105[(2)] = null);

(statearr_380070_380105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_380069 === (2))){
var state_380068__$1 = state_380068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_380068__$1,(4),wch);
} else {
if((state_val_380069 === (3))){
var inst_380066 = (state_380068[(2)]);
var state_380068__$1 = state_380068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_380068__$1,inst_380066);
} else {
if((state_val_380069 === (4))){
var inst_380061 = (state_380068[(2)]);
var inst_380062 = cljs.core.pr_str.call(null,inst_380061);
var inst_380063 = ws.send(inst_380062);
var state_380068__$1 = (function (){var statearr_380071 = state_380068;
(statearr_380071[(7)] = inst_380063);

return statearr_380071;
})();
var statearr_380072_380106 = state_380068__$1;
(statearr_380072_380106[(2)] = null);

(statearr_380072_380106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35562__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__35450__auto__,c__35562__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__35451__auto__ = null;
var dynomics$ui$messaging$state_machine__35451__auto____0 = (function (){
var statearr_380076 = [null,null,null,null,null,null,null,null];
(statearr_380076[(0)] = dynomics$ui$messaging$state_machine__35451__auto__);

(statearr_380076[(1)] = (1));

return statearr_380076;
});
var dynomics$ui$messaging$state_machine__35451__auto____1 = (function (state_380068){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_380068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e380077){if((e380077 instanceof Object)){
var ex__35454__auto__ = e380077;
var statearr_380078_380107 = state_380068;
(statearr_380078_380107[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_380068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e380077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__380108 = state_380068;
state_380068 = G__380108;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__35451__auto__ = function(state_380068){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__35451__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__35451__auto____1.call(this,state_380068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__35451__auto____0;
dynomics$ui$messaging$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__35451__auto____1;
return dynomics$ui$messaging$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__35564__auto__ = (function (){var statearr_380079 = f__35563__auto__.call(null);
(statearr_380079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto__);

return statearr_380079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);

return c__35562__auto__;
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

var c__35562__auto___380109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___380109,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___380109,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_380089){
var state_val_380090 = (state_380089[(1)]);
if((state_val_380090 === (1))){
var state_380089__$1 = state_380089;
var statearr_380091_380110 = state_380089__$1;
(statearr_380091_380110[(2)] = null);

(statearr_380091_380110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_380090 === (2))){
var state_380089__$1 = state_380089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_380089__$1,(4),rch);
} else {
if((state_val_380090 === (3))){
var inst_380087 = (state_380089[(2)]);
var state_380089__$1 = state_380089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_380089__$1,inst_380087);
} else {
if((state_val_380090 === (4))){
var inst_380082 = (state_380089[(2)]);
var inst_380083 = cljs.reader.read_string.call(null,inst_380082);
var inst_380084 = cljs.core.async.put_BANG_.call(null,mch,inst_380083);
var state_380089__$1 = (function (){var statearr_380092 = state_380089;
(statearr_380092[(7)] = inst_380084);

return statearr_380092;
})();
var statearr_380093_380111 = state_380089__$1;
(statearr_380093_380111[(2)] = null);

(statearr_380093_380111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35562__auto___380109,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__35450__auto__,c__35562__auto___380109,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__35451__auto__ = null;
var dynomics$ui$messaging$state_machine__35451__auto____0 = (function (){
var statearr_380097 = [null,null,null,null,null,null,null,null];
(statearr_380097[(0)] = dynomics$ui$messaging$state_machine__35451__auto__);

(statearr_380097[(1)] = (1));

return statearr_380097;
});
var dynomics$ui$messaging$state_machine__35451__auto____1 = (function (state_380089){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_380089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e380098){if((e380098 instanceof Object)){
var ex__35454__auto__ = e380098;
var statearr_380099_380112 = state_380089;
(statearr_380099_380112[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_380089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e380098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__380113 = state_380089;
state_380089 = G__380113;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__35451__auto__ = function(state_380089){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__35451__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__35451__auto____1.call(this,state_380089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__35451__auto____0;
dynomics$ui$messaging$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__35451__auto____1;
return dynomics$ui$messaging$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___380109,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__35564__auto__ = (function (){var statearr_380100 = f__35563__auto__.call(null);
(statearr_380100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___380109);

return statearr_380100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___380109,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=messaging.js.map