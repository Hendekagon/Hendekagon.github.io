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
var args91013 = [];
var len__36491__auto___91058 = arguments.length;
var i__36492__auto___91059 = (0);
while(true){
if((i__36492__auto___91059 < len__36491__auto___91058)){
args91013.push((arguments[i__36492__auto___91059]));

var G__91061 = (i__36492__auto___91059 + (1));
i__36492__auto___91059 = G__91061;
continue;
} else {
}
break;
}

var G__91019 = args91013.length;
switch (G__91019) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91013.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__91023 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__91023__$1 = ((((!((map__91023 == null)))?((((map__91023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91023):map__91023);
var message_channel = cljs.core.get.call(null,map__91023__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__91023__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__41196__auto___91072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___91072,map__91023,map__91023__$1,message_channel,message_pub,c){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___91072,map__91023,map__91023__$1,message_channel,message_pub,c){
return (function (state_91034){
var state_val_91035 = (state_91034[(1)]);
if((state_val_91035 === (1))){
var state_91034__$1 = state_91034;
var statearr_91036_91077 = state_91034__$1;
(statearr_91036_91077[(2)] = null);

(statearr_91036_91077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91035 === (2))){
var state_91034__$1 = state_91034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91034__$1,(4),c);
} else {
if((state_val_91035 === (3))){
var inst_91032 = (state_91034[(2)]);
var state_91034__$1 = state_91034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91034__$1,inst_91032);
} else {
if((state_val_91035 === (4))){
var inst_91028 = (state_91034[(2)]);
var inst_91029 = f.call(null,inst_91028);
var state_91034__$1 = (function (){var statearr_91037 = state_91034;
(statearr_91037[(7)] = inst_91029);

return statearr_91037;
})();
var statearr_91038_91081 = state_91034__$1;
(statearr_91038_91081[(2)] = null);

(statearr_91038_91081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__41196__auto___91072,map__91023,map__91023__$1,message_channel,message_pub,c))
;
return ((function (switch__40432__auto__,c__41196__auto___91072,map__91023,map__91023__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__40433__auto__ = null;
var dynomics$ui$messaging$state_machine__40433__auto____0 = (function (){
var statearr_91042 = [null,null,null,null,null,null,null,null];
(statearr_91042[(0)] = dynomics$ui$messaging$state_machine__40433__auto__);

(statearr_91042[(1)] = (1));

return statearr_91042;
});
var dynomics$ui$messaging$state_machine__40433__auto____1 = (function (state_91034){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_91034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e91043){if((e91043 instanceof Object)){
var ex__40436__auto__ = e91043;
var statearr_91044_91087 = state_91034;
(statearr_91044_91087[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91089 = state_91034;
state_91034 = G__91089;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__40433__auto__ = function(state_91034){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__40433__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__40433__auto____1.call(this,state_91034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__40433__auto____0;
dynomics$ui$messaging$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__40433__auto____1;
return dynomics$ui$messaging$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___91072,map__91023,map__91023__$1,message_channel,message_pub,c))
})();
var state__41198__auto__ = (function (){var statearr_91045 = f__41197__auto__.call(null);
(statearr_91045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___91072);

return statearr_91045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___91072,map__91023,map__91023__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__91046 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__91047 = null;
var count__91048 = (0);
var i__91049 = (0);
while(true){
if((i__91049 < count__91048)){
var map__91050 = cljs.core._nth.call(null,chunk__91047,i__91049);
var map__91050__$1 = ((((!((map__91050 == null)))?((((map__91050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91050):map__91050);
var topic = cljs.core.get.call(null,map__91050__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__91050__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__91098 = seq__91046;
var G__91099 = chunk__91047;
var G__91100 = count__91048;
var G__91101 = (i__91049 + (1));
seq__91046 = G__91098;
chunk__91047 = G__91099;
count__91048 = G__91100;
i__91049 = G__91101;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__91046);
if(temp__4657__auto__){
var seq__91046__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91046__$1)){
var c__36233__auto__ = cljs.core.chunk_first.call(null,seq__91046__$1);
var G__91104 = cljs.core.chunk_rest.call(null,seq__91046__$1);
var G__91105 = c__36233__auto__;
var G__91106 = cljs.core.count.call(null,c__36233__auto__);
var G__91107 = (0);
seq__91046 = G__91104;
chunk__91047 = G__91105;
count__91048 = G__91106;
i__91049 = G__91107;
continue;
} else {
var map__91052 = cljs.core.first.call(null,seq__91046__$1);
var map__91052__$1 = ((((!((map__91052 == null)))?((((map__91052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91052):map__91052);
var topic = cljs.core.get.call(null,map__91052__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__91052__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__91112 = cljs.core.next.call(null,seq__91046__$1);
var G__91113 = null;
var G__91114 = (0);
var G__91115 = (0);
seq__91046 = G__91112;
chunk__91047 = G__91113;
count__91048 = G__91114;
i__91049 = G__91115;
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
return (function (state_91161){
var state_val_91162 = (state_91161[(1)]);
if((state_val_91162 === (1))){
var state_91161__$1 = state_91161;
var statearr_91167_91185 = state_91161__$1;
(statearr_91167_91185[(2)] = null);

(statearr_91167_91185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91162 === (2))){
var state_91161__$1 = state_91161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91161__$1,(4),ch);
} else {
if((state_val_91162 === (3))){
var inst_91159 = (state_91161[(2)]);
var state_91161__$1 = state_91161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91161__$1,inst_91159);
} else {
if((state_val_91162 === (4))){
var inst_91155 = (state_91161[(2)]);
var inst_91156 = g.call(null,inst_91155);
var state_91161__$1 = (function (){var statearr_91170 = state_91161;
(statearr_91170[(7)] = inst_91156);

return statearr_91170;
})();
var statearr_91171_91186 = state_91161__$1;
(statearr_91171_91186[(2)] = null);

(statearr_91171_91186[(1)] = (2));


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
var statearr_91179 = [null,null,null,null,null,null,null,null];
(statearr_91179[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto__);

(statearr_91179[(1)] = (1));

return statearr_91179;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto____1 = (function (state_91161){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_91161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e91181){if((e91181 instanceof Object)){
var ex__40436__auto__ = e91181;
var statearr_91182_91189 = state_91161;
(statearr_91182_91189[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91190 = state_91161;
state_91161 = G__91190;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto__ = function(state_91161){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto____1.call(this,state_91161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto__))
})();
var state__41198__auto__ = (function (){var statearr_91184 = f__41197__auto__.call(null);
(statearr_91184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto__);

return statearr_91184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto__))
);

return c__41196__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__91195){
var map__91200 = p__91195;
var map__91200__$1 = ((((!((map__91200 == null)))?((((map__91200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91200):map__91200);
var s = map__91200__$1;
var map__91201 = cljs.core.get.call(null,map__91200__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__91201__$1 = ((((!((map__91201 == null)))?((((map__91201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__91201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91201):map__91201);
var ws = cljs.core.get.call(null,map__91201__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__91201__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args91216 = [];
var len__36491__auto___91261 = arguments.length;
var i__36492__auto___91262 = (0);
while(true){
if((i__36492__auto___91262 < len__36491__auto___91261)){
args91216.push((arguments[i__36492__auto___91262]));

var G__91263 = (i__36492__auto___91262 + (1));
i__36492__auto___91262 = G__91263;
continue;
} else {
}
break;
}

var G__91218 = args91216.length;
switch (G__91218) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args91216.length)].join('')));

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
return (function (state_91228){
var state_val_91229 = (state_91228[(1)]);
if((state_val_91229 === (1))){
var state_91228__$1 = state_91228;
var statearr_91230_91271 = state_91228__$1;
(statearr_91230_91271[(2)] = null);

(statearr_91230_91271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91229 === (2))){
var state_91228__$1 = state_91228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91228__$1,(4),wch);
} else {
if((state_val_91229 === (3))){
var inst_91226 = (state_91228[(2)]);
var state_91228__$1 = state_91228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91228__$1,inst_91226);
} else {
if((state_val_91229 === (4))){
var inst_91221 = (state_91228[(2)]);
var inst_91222 = cljs.core.pr_str.call(null,inst_91221);
var inst_91223 = ws.send(inst_91222);
var state_91228__$1 = (function (){var statearr_91231 = state_91228;
(statearr_91231[(7)] = inst_91223);

return statearr_91231;
})();
var statearr_91232_91273 = state_91228__$1;
(statearr_91232_91273[(2)] = null);

(statearr_91232_91273[(1)] = (2));


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
var statearr_91236 = [null,null,null,null,null,null,null,null];
(statearr_91236[(0)] = dynomics$ui$messaging$state_machine__40433__auto__);

(statearr_91236[(1)] = (1));

return statearr_91236;
});
var dynomics$ui$messaging$state_machine__40433__auto____1 = (function (state_91228){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_91228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e91237){if((e91237 instanceof Object)){
var ex__40436__auto__ = e91237;
var statearr_91238_91308 = state_91228;
(statearr_91238_91308[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91312 = state_91228;
state_91228 = G__91312;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__40433__auto__ = function(state_91228){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__40433__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__40433__auto____1.call(this,state_91228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__40433__auto____0;
dynomics$ui$messaging$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__40433__auto____1;
return dynomics$ui$messaging$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__41198__auto__ = (function (){var statearr_91239 = f__41197__auto__.call(null);
(statearr_91239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto__);

return statearr_91239;
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

var c__41196__auto___91314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41196__auto___91314,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__41197__auto__ = (function (){var switch__40432__auto__ = ((function (c__41196__auto___91314,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_91249){
var state_val_91250 = (state_91249[(1)]);
if((state_val_91250 === (1))){
var state_91249__$1 = state_91249;
var statearr_91251_91315 = state_91249__$1;
(statearr_91251_91315[(2)] = null);

(statearr_91251_91315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91250 === (2))){
var state_91249__$1 = state_91249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91249__$1,(4),rch);
} else {
if((state_val_91250 === (3))){
var inst_91247 = (state_91249[(2)]);
var state_91249__$1 = state_91249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91249__$1,inst_91247);
} else {
if((state_val_91250 === (4))){
var inst_91242 = (state_91249[(2)]);
var inst_91243 = cljs.reader.read_string.call(null,inst_91242);
var inst_91244 = cljs.core.async.put_BANG_.call(null,mch,inst_91243);
var state_91249__$1 = (function (){var statearr_91252 = state_91249;
(statearr_91252[(7)] = inst_91244);

return statearr_91252;
})();
var statearr_91253_91316 = state_91249__$1;
(statearr_91253_91316[(2)] = null);

(statearr_91253_91316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__41196__auto___91314,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__40432__auto__,c__41196__auto___91314,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__40433__auto__ = null;
var dynomics$ui$messaging$state_machine__40433__auto____0 = (function (){
var statearr_91257 = [null,null,null,null,null,null,null,null];
(statearr_91257[(0)] = dynomics$ui$messaging$state_machine__40433__auto__);

(statearr_91257[(1)] = (1));

return statearr_91257;
});
var dynomics$ui$messaging$state_machine__40433__auto____1 = (function (state_91249){
while(true){
var ret_value__40434__auto__ = (function (){try{while(true){
var result__40435__auto__ = switch__40432__auto__.call(null,state_91249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40435__auto__;
}
break;
}
}catch (e91258){if((e91258 instanceof Object)){
var ex__40436__auto__ = e91258;
var statearr_91259_91333 = state_91249;
(statearr_91259_91333[(5)] = ex__40436__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40434__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91335 = state_91249;
state_91249 = G__91335;
continue;
} else {
return ret_value__40434__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__40433__auto__ = function(state_91249){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__40433__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__40433__auto____1.call(this,state_91249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__40433__auto____0;
dynomics$ui$messaging$state_machine__40433__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__40433__auto____1;
return dynomics$ui$messaging$state_machine__40433__auto__;
})()
;})(switch__40432__auto__,c__41196__auto___91314,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__41198__auto__ = (function (){var statearr_91260 = f__41197__auto__.call(null);
(statearr_91260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41196__auto___91314);

return statearr_91260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41198__auto__);
});})(c__41196__auto___91314,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;
