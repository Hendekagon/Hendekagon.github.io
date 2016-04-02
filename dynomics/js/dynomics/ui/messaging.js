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
var args101734 = [];
var len__36461__auto___101777 = arguments.length;
var i__36462__auto___101778 = (0);
while(true){
if((i__36462__auto___101778 < len__36461__auto___101777)){
args101734.push((arguments[i__36462__auto___101778]));

var G__101779 = (i__36462__auto___101778 + (1));
i__36462__auto___101778 = G__101779;
continue;
} else {
}
break;
}

var G__101737 = args101734.length;
switch (G__101737) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args101734.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__101740 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__101740__$1 = ((((!((map__101740 == null)))?((((map__101740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__101740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101740):map__101740);
var message_channel = cljs.core.get.call(null,map__101740__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__101740__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__40985__auto___101785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___101785,map__101740,map__101740__$1,message_channel,message_pub,c){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___101785,map__101740,map__101740__$1,message_channel,message_pub,c){
return (function (state_101751){
var state_val_101752 = (state_101751[(1)]);
if((state_val_101752 === (1))){
var state_101751__$1 = state_101751;
var statearr_101753_101790 = state_101751__$1;
(statearr_101753_101790[(2)] = null);

(statearr_101753_101790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101752 === (2))){
var state_101751__$1 = state_101751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101751__$1,(4),c);
} else {
if((state_val_101752 === (3))){
var inst_101749 = (state_101751[(2)]);
var state_101751__$1 = state_101751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101751__$1,inst_101749);
} else {
if((state_val_101752 === (4))){
var inst_101745 = (state_101751[(2)]);
var inst_101746 = f.call(null,inst_101745);
var state_101751__$1 = (function (){var statearr_101756 = state_101751;
(statearr_101756[(7)] = inst_101746);

return statearr_101756;
})();
var statearr_101758_101794 = state_101751__$1;
(statearr_101758_101794[(2)] = null);

(statearr_101758_101794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__40985__auto___101785,map__101740,map__101740__$1,message_channel,message_pub,c))
;
return ((function (switch__40398__auto__,c__40985__auto___101785,map__101740,map__101740__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__40399__auto__ = null;
var dynomics$ui$messaging$state_machine__40399__auto____0 = (function (){
var statearr_101764 = [null,null,null,null,null,null,null,null];
(statearr_101764[(0)] = dynomics$ui$messaging$state_machine__40399__auto__);

(statearr_101764[(1)] = (1));

return statearr_101764;
});
var dynomics$ui$messaging$state_machine__40399__auto____1 = (function (state_101751){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_101751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e101766){if((e101766 instanceof Object)){
var ex__40402__auto__ = e101766;
var statearr_101767_101797 = state_101751;
(statearr_101767_101797[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101798 = state_101751;
state_101751 = G__101798;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__40399__auto__ = function(state_101751){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__40399__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__40399__auto____1.call(this,state_101751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__40399__auto____0;
dynomics$ui$messaging$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__40399__auto____1;
return dynomics$ui$messaging$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___101785,map__101740,map__101740__$1,message_channel,message_pub,c))
})();
var state__40987__auto__ = (function (){var statearr_101768 = f__40986__auto__.call(null);
(statearr_101768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___101785);

return statearr_101768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___101785,map__101740,map__101740__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__101769 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__101770 = null;
var count__101771 = (0);
var i__101772 = (0);
while(true){
if((i__101772 < count__101771)){
var map__101773 = cljs.core._nth.call(null,chunk__101770,i__101772);
var map__101773__$1 = ((((!((map__101773 == null)))?((((map__101773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__101773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101773):map__101773);
var topic = cljs.core.get.call(null,map__101773__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__101773__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__101802 = seq__101769;
var G__101803 = chunk__101770;
var G__101804 = count__101771;
var G__101805 = (i__101772 + (1));
seq__101769 = G__101802;
chunk__101770 = G__101803;
count__101771 = G__101804;
i__101772 = G__101805;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__101769);
if(temp__4657__auto__){
var seq__101769__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__101769__$1)){
var c__36203__auto__ = cljs.core.chunk_first.call(null,seq__101769__$1);
var G__101806 = cljs.core.chunk_rest.call(null,seq__101769__$1);
var G__101807 = c__36203__auto__;
var G__101808 = cljs.core.count.call(null,c__36203__auto__);
var G__101809 = (0);
seq__101769 = G__101806;
chunk__101770 = G__101807;
count__101771 = G__101808;
i__101772 = G__101809;
continue;
} else {
var map__101775 = cljs.core.first.call(null,seq__101769__$1);
var map__101775__$1 = ((((!((map__101775 == null)))?((((map__101775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__101775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101775):map__101775);
var topic = cljs.core.get.call(null,map__101775__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__101775__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__101814 = cljs.core.next.call(null,seq__101769__$1);
var G__101815 = null;
var G__101816 = (0);
var G__101817 = (0);
seq__101769 = G__101814;
chunk__101770 = G__101815;
count__101771 = G__101816;
i__101772 = G__101817;
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
return (function (state_101854){
var state_val_101855 = (state_101854[(1)]);
if((state_val_101855 === (1))){
var state_101854__$1 = state_101854;
var statearr_101857_101882 = state_101854__$1;
(statearr_101857_101882[(2)] = null);

(statearr_101857_101882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101855 === (2))){
var state_101854__$1 = state_101854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101854__$1,(4),ch);
} else {
if((state_val_101855 === (3))){
var inst_101852 = (state_101854[(2)]);
var state_101854__$1 = state_101854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101854__$1,inst_101852);
} else {
if((state_val_101855 === (4))){
var inst_101848 = (state_101854[(2)]);
var inst_101849 = g.call(null,inst_101848);
var state_101854__$1 = (function (){var statearr_101863 = state_101854;
(statearr_101863[(7)] = inst_101849);

return statearr_101863;
})();
var statearr_101864_101887 = state_101854__$1;
(statearr_101864_101887[(2)] = null);

(statearr_101864_101887[(1)] = (2));


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
var statearr_101871 = [null,null,null,null,null,null,null,null];
(statearr_101871[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto__);

(statearr_101871[(1)] = (1));

return statearr_101871;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto____1 = (function (state_101854){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_101854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e101875){if((e101875 instanceof Object)){
var ex__40402__auto__ = e101875;
var statearr_101876_101892 = state_101854;
(statearr_101876_101892[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101893 = state_101854;
state_101854 = G__101893;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto__ = function(state_101854){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto____1.call(this,state_101854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto__))
})();
var state__40987__auto__ = (function (){var statearr_101879 = f__40986__auto__.call(null);
(statearr_101879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto__);

return statearr_101879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto__))
);

return c__40985__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__101894){
var map__101900 = p__101894;
var map__101900__$1 = ((((!((map__101900 == null)))?((((map__101900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__101900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101900):map__101900);
var s = map__101900__$1;
var map__101901 = cljs.core.get.call(null,map__101900__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__101901__$1 = ((((!((map__101901 == null)))?((((map__101901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__101901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101901):map__101901);
var ws = cljs.core.get.call(null,map__101901__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__101901__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args101909 = [];
var len__36461__auto___101987 = arguments.length;
var i__36462__auto___101988 = (0);
while(true){
if((i__36462__auto___101988 < len__36461__auto___101987)){
args101909.push((arguments[i__36462__auto___101988]));

var G__101989 = (i__36462__auto___101988 + (1));
i__36462__auto___101988 = G__101989;
continue;
} else {
}
break;
}

var G__101914 = args101909.length;
switch (G__101914) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args101909.length)].join('')));

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
return (function (state_101929){
var state_val_101930 = (state_101929[(1)]);
if((state_val_101930 === (1))){
var state_101929__$1 = state_101929;
var statearr_101931_102001 = state_101929__$1;
(statearr_101931_102001[(2)] = null);

(statearr_101931_102001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101930 === (2))){
var state_101929__$1 = state_101929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101929__$1,(4),wch);
} else {
if((state_val_101930 === (3))){
var inst_101926 = (state_101929[(2)]);
var state_101929__$1 = state_101929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101929__$1,inst_101926);
} else {
if((state_val_101930 === (4))){
var inst_101921 = (state_101929[(2)]);
var inst_101922 = cljs.core.pr_str.call(null,inst_101921);
var inst_101923 = ws.send(inst_101922);
var state_101929__$1 = (function (){var statearr_101933 = state_101929;
(statearr_101933[(7)] = inst_101923);

return statearr_101933;
})();
var statearr_101935_102014 = state_101929__$1;
(statearr_101935_102014[(2)] = null);

(statearr_101935_102014[(1)] = (2));


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
var statearr_101941 = [null,null,null,null,null,null,null,null];
(statearr_101941[(0)] = dynomics$ui$messaging$state_machine__40399__auto__);

(statearr_101941[(1)] = (1));

return statearr_101941;
});
var dynomics$ui$messaging$state_machine__40399__auto____1 = (function (state_101929){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_101929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e101944){if((e101944 instanceof Object)){
var ex__40402__auto__ = e101944;
var statearr_101945_102021 = state_101929;
(statearr_101945_102021[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102024 = state_101929;
state_101929 = G__102024;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__40399__auto__ = function(state_101929){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__40399__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__40399__auto____1.call(this,state_101929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__40399__auto____0;
dynomics$ui$messaging$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__40399__auto____1;
return dynomics$ui$messaging$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__40987__auto__ = (function (){var statearr_101946 = f__40986__auto__.call(null);
(statearr_101946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto__);

return statearr_101946;
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

var c__40985__auto___102025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40985__auto___102025,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__40986__auto__ = (function (){var switch__40398__auto__ = ((function (c__40985__auto___102025,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_101964){
var state_val_101965 = (state_101964[(1)]);
if((state_val_101965 === (1))){
var state_101964__$1 = state_101964;
var statearr_101968_102026 = state_101964__$1;
(statearr_101968_102026[(2)] = null);

(statearr_101968_102026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_101965 === (2))){
var state_101964__$1 = state_101964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101964__$1,(4),rch);
} else {
if((state_val_101965 === (3))){
var inst_101962 = (state_101964[(2)]);
var state_101964__$1 = state_101964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101964__$1,inst_101962);
} else {
if((state_val_101965 === (4))){
var inst_101955 = (state_101964[(2)]);
var inst_101956 = cljs.reader.read_string.call(null,inst_101955);
var inst_101959 = cljs.core.async.put_BANG_.call(null,mch,inst_101956);
var state_101964__$1 = (function (){var statearr_101974 = state_101964;
(statearr_101974[(7)] = inst_101959);

return statearr_101974;
})();
var statearr_101975_102027 = state_101964__$1;
(statearr_101975_102027[(2)] = null);

(statearr_101975_102027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__40985__auto___102025,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__40398__auto__,c__40985__auto___102025,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__40399__auto__ = null;
var dynomics$ui$messaging$state_machine__40399__auto____0 = (function (){
var statearr_101983 = [null,null,null,null,null,null,null,null];
(statearr_101983[(0)] = dynomics$ui$messaging$state_machine__40399__auto__);

(statearr_101983[(1)] = (1));

return statearr_101983;
});
var dynomics$ui$messaging$state_machine__40399__auto____1 = (function (state_101964){
while(true){
var ret_value__40400__auto__ = (function (){try{while(true){
var result__40401__auto__ = switch__40398__auto__.call(null,state_101964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40401__auto__;
}
break;
}
}catch (e101984){if((e101984 instanceof Object)){
var ex__40402__auto__ = e101984;
var statearr_101985_102028 = state_101964;
(statearr_101985_102028[(5)] = ex__40402__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_101964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e101984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40400__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__102029 = state_101964;
state_101964 = G__102029;
continue;
} else {
return ret_value__40400__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__40399__auto__ = function(state_101964){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__40399__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__40399__auto____1.call(this,state_101964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__40399__auto____0;
dynomics$ui$messaging$state_machine__40399__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__40399__auto____1;
return dynomics$ui$messaging$state_machine__40399__auto__;
})()
;})(switch__40398__auto__,c__40985__auto___102025,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__40987__auto__ = (function (){var statearr_101986 = f__40986__auto__.call(null);
(statearr_101986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40985__auto___102025);

return statearr_101986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40987__auto__);
});})(c__40985__auto___102025,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;
