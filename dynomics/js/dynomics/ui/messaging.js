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
var args882169 = [];
var len__25269__auto___882202 = arguments.length;
var i__25270__auto___882203 = (0);
while(true){
if((i__25270__auto___882203 < len__25269__auto___882202)){
args882169.push((arguments[i__25270__auto___882203]));

var G__882204 = (i__25270__auto___882203 + (1));
i__25270__auto___882203 = G__882204;
continue;
} else {
}
break;
}

var G__882171 = args882169.length;
switch (G__882171) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args882169.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__882172 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__882172__$1 = ((((!((map__882172 == null)))?((((map__882172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__882172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__882172):map__882172);
var message_channel = cljs.core.get.call(null,map__882172__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__882172__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__29846__auto___882206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___882206,map__882172,map__882172__$1,message_channel,message_pub,c){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___882206,map__882172,map__882172__$1,message_channel,message_pub,c){
return (function (state_882182){
var state_val_882183 = (state_882182[(1)]);
if((state_val_882183 === (1))){
var state_882182__$1 = state_882182;
var statearr_882184_882207 = state_882182__$1;
(statearr_882184_882207[(2)] = null);

(statearr_882184_882207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882183 === (2))){
var state_882182__$1 = state_882182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_882182__$1,(4),c);
} else {
if((state_val_882183 === (3))){
var inst_882180 = (state_882182[(2)]);
var state_882182__$1 = state_882182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_882182__$1,inst_882180);
} else {
if((state_val_882183 === (4))){
var inst_882176 = (state_882182[(2)]);
var inst_882177 = f.call(null,inst_882176);
var state_882182__$1 = (function (){var statearr_882185 = state_882182;
(statearr_882185[(7)] = inst_882177);

return statearr_882185;
})();
var statearr_882186_882208 = state_882182__$1;
(statearr_882186_882208[(2)] = null);

(statearr_882186_882208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__29846__auto___882206,map__882172,map__882172__$1,message_channel,message_pub,c))
;
return ((function (switch__29734__auto__,c__29846__auto___882206,map__882172,map__882172__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__29735__auto__ = null;
var dynomics$ui$messaging$state_machine__29735__auto____0 = (function (){
var statearr_882190 = [null,null,null,null,null,null,null,null];
(statearr_882190[(0)] = dynomics$ui$messaging$state_machine__29735__auto__);

(statearr_882190[(1)] = (1));

return statearr_882190;
});
var dynomics$ui$messaging$state_machine__29735__auto____1 = (function (state_882182){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_882182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e882191){if((e882191 instanceof Object)){
var ex__29738__auto__ = e882191;
var statearr_882192_882209 = state_882182;
(statearr_882192_882209[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_882182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e882191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__882210 = state_882182;
state_882182 = G__882210;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__29735__auto__ = function(state_882182){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__29735__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__29735__auto____1.call(this,state_882182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__29735__auto____0;
dynomics$ui$messaging$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__29735__auto____1;
return dynomics$ui$messaging$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___882206,map__882172,map__882172__$1,message_channel,message_pub,c))
})();
var state__29848__auto__ = (function (){var statearr_882193 = f__29847__auto__.call(null);
(statearr_882193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___882206);

return statearr_882193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___882206,map__882172,map__882172__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__882194 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__882195 = null;
var count__882196 = (0);
var i__882197 = (0);
while(true){
if((i__882197 < count__882196)){
var map__882198 = cljs.core._nth.call(null,chunk__882195,i__882197);
var map__882198__$1 = ((((!((map__882198 == null)))?((((map__882198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__882198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__882198):map__882198);
var topic = cljs.core.get.call(null,map__882198__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__882198__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__882211 = seq__882194;
var G__882212 = chunk__882195;
var G__882213 = count__882196;
var G__882214 = (i__882197 + (1));
seq__882194 = G__882211;
chunk__882195 = G__882212;
count__882196 = G__882213;
i__882197 = G__882214;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__882194);
if(temp__4425__auto__){
var seq__882194__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__882194__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__882194__$1);
var G__882215 = cljs.core.chunk_rest.call(null,seq__882194__$1);
var G__882216 = c__25014__auto__;
var G__882217 = cljs.core.count.call(null,c__25014__auto__);
var G__882218 = (0);
seq__882194 = G__882215;
chunk__882195 = G__882216;
count__882196 = G__882217;
i__882197 = G__882218;
continue;
} else {
var map__882200 = cljs.core.first.call(null,seq__882194__$1);
var map__882200__$1 = ((((!((map__882200 == null)))?((((map__882200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__882200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__882200):map__882200);
var topic = cljs.core.get.call(null,map__882200__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__882200__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__882219 = cljs.core.next.call(null,seq__882194__$1);
var G__882220 = null;
var G__882221 = (0);
var G__882222 = (0);
seq__882194 = G__882219;
chunk__882195 = G__882220;
count__882196 = G__882221;
i__882197 = G__882222;
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
var c__29846__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto__){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto__){
return (function (state_882251){
var state_val_882252 = (state_882251[(1)]);
if((state_val_882252 === (1))){
var state_882251__$1 = state_882251;
var statearr_882253_882263 = state_882251__$1;
(statearr_882253_882263[(2)] = null);

(statearr_882253_882263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882252 === (2))){
var state_882251__$1 = state_882251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_882251__$1,(4),ch);
} else {
if((state_val_882252 === (3))){
var inst_882249 = (state_882251[(2)]);
var state_882251__$1 = state_882251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_882251__$1,inst_882249);
} else {
if((state_val_882252 === (4))){
var inst_882245 = (state_882251[(2)]);
var inst_882246 = g.call(null,inst_882245);
var state_882251__$1 = (function (){var statearr_882254 = state_882251;
(statearr_882254[(7)] = inst_882246);

return statearr_882254;
})();
var statearr_882255_882264 = state_882251__$1;
(statearr_882255_882264[(2)] = null);

(statearr_882255_882264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__29846__auto__))
;
return ((function (switch__29734__auto__,c__29846__auto__){
return (function() {
var dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto__ = null;
var dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto____0 = (function (){
var statearr_882259 = [null,null,null,null,null,null,null,null];
(statearr_882259[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto__);

(statearr_882259[(1)] = (1));

return statearr_882259;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto____1 = (function (state_882251){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_882251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e882260){if((e882260 instanceof Object)){
var ex__29738__auto__ = e882260;
var statearr_882261_882265 = state_882251;
(statearr_882261_882265[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_882251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e882260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__882266 = state_882251;
state_882251 = G__882266;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto__ = function(state_882251){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto____1.call(this,state_882251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto__))
})();
var state__29848__auto__ = (function (){var statearr_882262 = f__29847__auto__.call(null);
(statearr_882262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto__);

return statearr_882262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto__))
);

return c__29846__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__882267){
var map__882272 = p__882267;
var map__882272__$1 = ((((!((map__882272 == null)))?((((map__882272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__882272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__882272):map__882272);
var s = map__882272__$1;
var map__882273 = cljs.core.get.call(null,map__882272__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__882273__$1 = ((((!((map__882273 == null)))?((((map__882273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__882273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__882273):map__882273);
var ws = cljs.core.get.call(null,map__882273__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__882273__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args882276 = [];
var len__25269__auto___882321 = arguments.length;
var i__25270__auto___882322 = (0);
while(true){
if((i__25270__auto___882322 < len__25269__auto___882321)){
args882276.push((arguments[i__25270__auto___882322]));

var G__882323 = (i__25270__auto___882322 + (1));
i__25270__auto___882322 = G__882323;
continue;
} else {
}
break;
}

var G__882278 = args882276.length;
switch (G__882278) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args882276.length)].join('')));

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
var c__29846__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_882288){
var state_val_882289 = (state_882288[(1)]);
if((state_val_882289 === (1))){
var state_882288__$1 = state_882288;
var statearr_882290_882325 = state_882288__$1;
(statearr_882290_882325[(2)] = null);

(statearr_882290_882325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882289 === (2))){
var state_882288__$1 = state_882288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_882288__$1,(4),wch);
} else {
if((state_val_882289 === (3))){
var inst_882286 = (state_882288[(2)]);
var state_882288__$1 = state_882288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_882288__$1,inst_882286);
} else {
if((state_val_882289 === (4))){
var inst_882281 = (state_882288[(2)]);
var inst_882282 = cljs.core.pr_str.call(null,inst_882281);
var inst_882283 = ws.send(inst_882282);
var state_882288__$1 = (function (){var statearr_882291 = state_882288;
(statearr_882291[(7)] = inst_882283);

return statearr_882291;
})();
var statearr_882292_882326 = state_882288__$1;
(statearr_882292_882326[(2)] = null);

(statearr_882292_882326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__29846__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__29734__auto__,c__29846__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__29735__auto__ = null;
var dynomics$ui$messaging$state_machine__29735__auto____0 = (function (){
var statearr_882296 = [null,null,null,null,null,null,null,null];
(statearr_882296[(0)] = dynomics$ui$messaging$state_machine__29735__auto__);

(statearr_882296[(1)] = (1));

return statearr_882296;
});
var dynomics$ui$messaging$state_machine__29735__auto____1 = (function (state_882288){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_882288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e882297){if((e882297 instanceof Object)){
var ex__29738__auto__ = e882297;
var statearr_882298_882327 = state_882288;
(statearr_882298_882327[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_882288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e882297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__882328 = state_882288;
state_882288 = G__882328;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__29735__auto__ = function(state_882288){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__29735__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__29735__auto____1.call(this,state_882288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__29735__auto____0;
dynomics$ui$messaging$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__29735__auto____1;
return dynomics$ui$messaging$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__29848__auto__ = (function (){var statearr_882299 = f__29847__auto__.call(null);
(statearr_882299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto__);

return statearr_882299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);

return c__29846__auto__;
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

var c__29846__auto___882329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___882329,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___882329,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_882309){
var state_val_882310 = (state_882309[(1)]);
if((state_val_882310 === (1))){
var state_882309__$1 = state_882309;
var statearr_882311_882330 = state_882309__$1;
(statearr_882311_882330[(2)] = null);

(statearr_882311_882330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_882310 === (2))){
var state_882309__$1 = state_882309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_882309__$1,(4),rch);
} else {
if((state_val_882310 === (3))){
var inst_882307 = (state_882309[(2)]);
var state_882309__$1 = state_882309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_882309__$1,inst_882307);
} else {
if((state_val_882310 === (4))){
var inst_882302 = (state_882309[(2)]);
var inst_882303 = cljs.reader.read_string.call(null,inst_882302);
var inst_882304 = cljs.core.async.put_BANG_.call(null,mch,inst_882303);
var state_882309__$1 = (function (){var statearr_882312 = state_882309;
(statearr_882312[(7)] = inst_882304);

return statearr_882312;
})();
var statearr_882313_882331 = state_882309__$1;
(statearr_882313_882331[(2)] = null);

(statearr_882313_882331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__29846__auto___882329,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__29734__auto__,c__29846__auto___882329,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__29735__auto__ = null;
var dynomics$ui$messaging$state_machine__29735__auto____0 = (function (){
var statearr_882317 = [null,null,null,null,null,null,null,null];
(statearr_882317[(0)] = dynomics$ui$messaging$state_machine__29735__auto__);

(statearr_882317[(1)] = (1));

return statearr_882317;
});
var dynomics$ui$messaging$state_machine__29735__auto____1 = (function (state_882309){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_882309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e882318){if((e882318 instanceof Object)){
var ex__29738__auto__ = e882318;
var statearr_882319_882332 = state_882309;
(statearr_882319_882332[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_882309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e882318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__882333 = state_882309;
state_882309 = G__882333;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__29735__auto__ = function(state_882309){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__29735__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__29735__auto____1.call(this,state_882309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__29735__auto____0;
dynomics$ui$messaging$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__29735__auto____1;
return dynomics$ui$messaging$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___882329,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__29848__auto__ = (function (){var statearr_882320 = f__29847__auto__.call(null);
(statearr_882320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___882329);

return statearr_882320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___882329,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=messaging.js.map