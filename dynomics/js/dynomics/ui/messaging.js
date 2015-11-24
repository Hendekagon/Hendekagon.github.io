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
var args1888799 = [];
var len__25219__auto___1888832 = arguments.length;
var i__25220__auto___1888833 = (0);
while(true){
if((i__25220__auto___1888833 < len__25219__auto___1888832)){
args1888799.push((arguments[i__25220__auto___1888833]));

var G__1888834 = (i__25220__auto___1888833 + (1));
i__25220__auto___1888833 = G__1888834;
continue;
} else {
}
break;
}

var G__1888801 = args1888799.length;
switch (G__1888801) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1888799.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__1888802 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__1888802__$1 = ((((!((map__1888802 == null)))?((((map__1888802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888802):map__1888802);
var message_channel = cljs.core.get.call(null,map__1888802__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__1888802__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__35562__auto___1888836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1888836,map__1888802,map__1888802__$1,message_channel,message_pub,c){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1888836,map__1888802,map__1888802__$1,message_channel,message_pub,c){
return (function (state_1888812){
var state_val_1888813 = (state_1888812[(1)]);
if((state_val_1888813 === (1))){
var state_1888812__$1 = state_1888812;
var statearr_1888814_1888837 = state_1888812__$1;
(statearr_1888814_1888837[(2)] = null);

(statearr_1888814_1888837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888813 === (2))){
var state_1888812__$1 = state_1888812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1888812__$1,(4),c);
} else {
if((state_val_1888813 === (3))){
var inst_1888810 = (state_1888812[(2)]);
var state_1888812__$1 = state_1888812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1888812__$1,inst_1888810);
} else {
if((state_val_1888813 === (4))){
var inst_1888806 = (state_1888812[(2)]);
var inst_1888807 = f.call(null,inst_1888806);
var state_1888812__$1 = (function (){var statearr_1888815 = state_1888812;
(statearr_1888815[(7)] = inst_1888807);

return statearr_1888815;
})();
var statearr_1888816_1888838 = state_1888812__$1;
(statearr_1888816_1888838[(2)] = null);

(statearr_1888816_1888838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35562__auto___1888836,map__1888802,map__1888802__$1,message_channel,message_pub,c))
;
return ((function (switch__35450__auto__,c__35562__auto___1888836,map__1888802,map__1888802__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__35451__auto__ = null;
var dynomics$ui$messaging$state_machine__35451__auto____0 = (function (){
var statearr_1888820 = [null,null,null,null,null,null,null,null];
(statearr_1888820[(0)] = dynomics$ui$messaging$state_machine__35451__auto__);

(statearr_1888820[(1)] = (1));

return statearr_1888820;
});
var dynomics$ui$messaging$state_machine__35451__auto____1 = (function (state_1888812){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1888812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1888821){if((e1888821 instanceof Object)){
var ex__35454__auto__ = e1888821;
var statearr_1888822_1888839 = state_1888812;
(statearr_1888822_1888839[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1888812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1888821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1888840 = state_1888812;
state_1888812 = G__1888840;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__35451__auto__ = function(state_1888812){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__35451__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__35451__auto____1.call(this,state_1888812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__35451__auto____0;
dynomics$ui$messaging$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__35451__auto____1;
return dynomics$ui$messaging$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1888836,map__1888802,map__1888802__$1,message_channel,message_pub,c))
})();
var state__35564__auto__ = (function (){var statearr_1888823 = f__35563__auto__.call(null);
(statearr_1888823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1888836);

return statearr_1888823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1888836,map__1888802,map__1888802__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__1888824 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__1888825 = null;
var count__1888826 = (0);
var i__1888827 = (0);
while(true){
if((i__1888827 < count__1888826)){
var map__1888828 = cljs.core._nth.call(null,chunk__1888825,i__1888827);
var map__1888828__$1 = ((((!((map__1888828 == null)))?((((map__1888828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888828):map__1888828);
var topic = cljs.core.get.call(null,map__1888828__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__1888828__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__1888841 = seq__1888824;
var G__1888842 = chunk__1888825;
var G__1888843 = count__1888826;
var G__1888844 = (i__1888827 + (1));
seq__1888824 = G__1888841;
chunk__1888825 = G__1888842;
count__1888826 = G__1888843;
i__1888827 = G__1888844;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1888824);
if(temp__4425__auto__){
var seq__1888824__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1888824__$1)){
var c__24964__auto__ = cljs.core.chunk_first.call(null,seq__1888824__$1);
var G__1888845 = cljs.core.chunk_rest.call(null,seq__1888824__$1);
var G__1888846 = c__24964__auto__;
var G__1888847 = cljs.core.count.call(null,c__24964__auto__);
var G__1888848 = (0);
seq__1888824 = G__1888845;
chunk__1888825 = G__1888846;
count__1888826 = G__1888847;
i__1888827 = G__1888848;
continue;
} else {
var map__1888830 = cljs.core.first.call(null,seq__1888824__$1);
var map__1888830__$1 = ((((!((map__1888830 == null)))?((((map__1888830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888830):map__1888830);
var topic = cljs.core.get.call(null,map__1888830__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__1888830__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__1888849 = cljs.core.next.call(null,seq__1888824__$1);
var G__1888850 = null;
var G__1888851 = (0);
var G__1888852 = (0);
seq__1888824 = G__1888849;
chunk__1888825 = G__1888850;
count__1888826 = G__1888851;
i__1888827 = G__1888852;
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
return (function (state_1888881){
var state_val_1888882 = (state_1888881[(1)]);
if((state_val_1888882 === (1))){
var state_1888881__$1 = state_1888881;
var statearr_1888883_1888893 = state_1888881__$1;
(statearr_1888883_1888893[(2)] = null);

(statearr_1888883_1888893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888882 === (2))){
var state_1888881__$1 = state_1888881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1888881__$1,(4),ch);
} else {
if((state_val_1888882 === (3))){
var inst_1888879 = (state_1888881[(2)]);
var state_1888881__$1 = state_1888881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1888881__$1,inst_1888879);
} else {
if((state_val_1888882 === (4))){
var inst_1888875 = (state_1888881[(2)]);
var inst_1888876 = g.call(null,inst_1888875);
var state_1888881__$1 = (function (){var statearr_1888884 = state_1888881;
(statearr_1888884[(7)] = inst_1888876);

return statearr_1888884;
})();
var statearr_1888885_1888894 = state_1888881__$1;
(statearr_1888885_1888894[(2)] = null);

(statearr_1888885_1888894[(1)] = (2));


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
var statearr_1888889 = [null,null,null,null,null,null,null,null];
(statearr_1888889[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto__);

(statearr_1888889[(1)] = (1));

return statearr_1888889;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto____1 = (function (state_1888881){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1888881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1888890){if((e1888890 instanceof Object)){
var ex__35454__auto__ = e1888890;
var statearr_1888891_1888895 = state_1888881;
(statearr_1888891_1888895[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1888881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1888890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1888896 = state_1888881;
state_1888881 = G__1888896;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto__ = function(state_1888881){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto____1.call(this,state_1888881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto__))
})();
var state__35564__auto__ = (function (){var statearr_1888892 = f__35563__auto__.call(null);
(statearr_1888892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto__);

return statearr_1888892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto__))
);

return c__35562__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__1888897){
var map__1888902 = p__1888897;
var map__1888902__$1 = ((((!((map__1888902 == null)))?((((map__1888902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888902):map__1888902);
var s = map__1888902__$1;
var map__1888903 = cljs.core.get.call(null,map__1888902__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__1888903__$1 = ((((!((map__1888903 == null)))?((((map__1888903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1888903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1888903):map__1888903);
var ws = cljs.core.get.call(null,map__1888903__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__1888903__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args1888906 = [];
var len__25219__auto___1888951 = arguments.length;
var i__25220__auto___1888952 = (0);
while(true){
if((i__25220__auto___1888952 < len__25219__auto___1888951)){
args1888906.push((arguments[i__25220__auto___1888952]));

var G__1888953 = (i__25220__auto___1888952 + (1));
i__25220__auto___1888952 = G__1888953;
continue;
} else {
}
break;
}

var G__1888908 = args1888906.length;
switch (G__1888908) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1888906.length)].join('')));

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
return (function (state_1888918){
var state_val_1888919 = (state_1888918[(1)]);
if((state_val_1888919 === (1))){
var state_1888918__$1 = state_1888918;
var statearr_1888920_1888955 = state_1888918__$1;
(statearr_1888920_1888955[(2)] = null);

(statearr_1888920_1888955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888919 === (2))){
var state_1888918__$1 = state_1888918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1888918__$1,(4),wch);
} else {
if((state_val_1888919 === (3))){
var inst_1888916 = (state_1888918[(2)]);
var state_1888918__$1 = state_1888918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1888918__$1,inst_1888916);
} else {
if((state_val_1888919 === (4))){
var inst_1888911 = (state_1888918[(2)]);
var inst_1888912 = cljs.core.pr_str.call(null,inst_1888911);
var inst_1888913 = ws.send(inst_1888912);
var state_1888918__$1 = (function (){var statearr_1888921 = state_1888918;
(statearr_1888921[(7)] = inst_1888913);

return statearr_1888921;
})();
var statearr_1888922_1888956 = state_1888918__$1;
(statearr_1888922_1888956[(2)] = null);

(statearr_1888922_1888956[(1)] = (2));


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
var statearr_1888926 = [null,null,null,null,null,null,null,null];
(statearr_1888926[(0)] = dynomics$ui$messaging$state_machine__35451__auto__);

(statearr_1888926[(1)] = (1));

return statearr_1888926;
});
var dynomics$ui$messaging$state_machine__35451__auto____1 = (function (state_1888918){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1888918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1888927){if((e1888927 instanceof Object)){
var ex__35454__auto__ = e1888927;
var statearr_1888928_1888957 = state_1888918;
(statearr_1888928_1888957[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1888918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1888927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1888958 = state_1888918;
state_1888918 = G__1888958;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__35451__auto__ = function(state_1888918){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__35451__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__35451__auto____1.call(this,state_1888918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__35451__auto____0;
dynomics$ui$messaging$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__35451__auto____1;
return dynomics$ui$messaging$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__35564__auto__ = (function (){var statearr_1888929 = f__35563__auto__.call(null);
(statearr_1888929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto__);

return statearr_1888929;
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

var c__35562__auto___1888959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35562__auto___1888959,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__35563__auto__ = (function (){var switch__35450__auto__ = ((function (c__35562__auto___1888959,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_1888939){
var state_val_1888940 = (state_1888939[(1)]);
if((state_val_1888940 === (1))){
var state_1888939__$1 = state_1888939;
var statearr_1888941_1888960 = state_1888939__$1;
(statearr_1888941_1888960[(2)] = null);

(statearr_1888941_1888960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_1888940 === (2))){
var state_1888939__$1 = state_1888939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_1888939__$1,(4),rch);
} else {
if((state_val_1888940 === (3))){
var inst_1888937 = (state_1888939[(2)]);
var state_1888939__$1 = state_1888939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_1888939__$1,inst_1888937);
} else {
if((state_val_1888940 === (4))){
var inst_1888932 = (state_1888939[(2)]);
var inst_1888933 = cljs.reader.read_string.call(null,inst_1888932);
var inst_1888934 = cljs.core.async.put_BANG_.call(null,mch,inst_1888933);
var state_1888939__$1 = (function (){var statearr_1888942 = state_1888939;
(statearr_1888942[(7)] = inst_1888934);

return statearr_1888942;
})();
var statearr_1888943_1888961 = state_1888939__$1;
(statearr_1888943_1888961[(2)] = null);

(statearr_1888943_1888961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35562__auto___1888959,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__35450__auto__,c__35562__auto___1888959,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__35451__auto__ = null;
var dynomics$ui$messaging$state_machine__35451__auto____0 = (function (){
var statearr_1888947 = [null,null,null,null,null,null,null,null];
(statearr_1888947[(0)] = dynomics$ui$messaging$state_machine__35451__auto__);

(statearr_1888947[(1)] = (1));

return statearr_1888947;
});
var dynomics$ui$messaging$state_machine__35451__auto____1 = (function (state_1888939){
while(true){
var ret_value__35452__auto__ = (function (){try{while(true){
var result__35453__auto__ = switch__35450__auto__.call(null,state_1888939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35453__auto__;
}
break;
}
}catch (e1888948){if((e1888948 instanceof Object)){
var ex__35454__auto__ = e1888948;
var statearr_1888949_1888962 = state_1888939;
(statearr_1888949_1888962[(5)] = ex__35454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_1888939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e1888948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__1888963 = state_1888939;
state_1888939 = G__1888963;
continue;
} else {
return ret_value__35452__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__35451__auto__ = function(state_1888939){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__35451__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__35451__auto____1.call(this,state_1888939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__35451__auto____0;
dynomics$ui$messaging$state_machine__35451__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__35451__auto____1;
return dynomics$ui$messaging$state_machine__35451__auto__;
})()
;})(switch__35450__auto__,c__35562__auto___1888959,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__35564__auto__ = (function (){var statearr_1888950 = f__35563__auto__.call(null);
(statearr_1888950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35562__auto___1888959);

return statearr_1888950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35564__auto__);
});})(c__35562__auto___1888959,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=messaging.js.map