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
var args51752 = [];
var len__25223__auto___51785 = arguments.length;
var i__25224__auto___51786 = (0);
while(true){
if((i__25224__auto___51786 < len__25223__auto___51785)){
args51752.push((arguments[i__25224__auto___51786]));

var G__51787 = (i__25224__auto___51786 + (1));
i__25224__auto___51786 = G__51787;
continue;
} else {
}
break;
}

var G__51754 = args51752.length;
switch (G__51754) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51752.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__51755 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__51755__$1 = ((((!((map__51755 == null)))?((((map__51755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51755):map__51755);
var message_channel = cljs.core.get.call(null,map__51755__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__51755__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__35567__auto___51789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___51789,map__51755,map__51755__$1,message_channel,message_pub,c){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___51789,map__51755,map__51755__$1,message_channel,message_pub,c){
return (function (state_51765){
var state_val_51766 = (state_51765[(1)]);
if((state_val_51766 === (1))){
var state_51765__$1 = state_51765;
var statearr_51767_51790 = state_51765__$1;
(statearr_51767_51790[(2)] = null);

(statearr_51767_51790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51766 === (2))){
var state_51765__$1 = state_51765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51765__$1,(4),c);
} else {
if((state_val_51766 === (3))){
var inst_51763 = (state_51765[(2)]);
var state_51765__$1 = state_51765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51765__$1,inst_51763);
} else {
if((state_val_51766 === (4))){
var inst_51759 = (state_51765[(2)]);
var inst_51760 = f.call(null,inst_51759);
var state_51765__$1 = (function (){var statearr_51768 = state_51765;
(statearr_51768[(7)] = inst_51760);

return statearr_51768;
})();
var statearr_51769_51791 = state_51765__$1;
(statearr_51769_51791[(2)] = null);

(statearr_51769_51791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35567__auto___51789,map__51755,map__51755__$1,message_channel,message_pub,c))
;
return ((function (switch__35455__auto__,c__35567__auto___51789,map__51755,map__51755__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__35456__auto__ = null;
var dynomics$ui$messaging$state_machine__35456__auto____0 = (function (){
var statearr_51773 = [null,null,null,null,null,null,null,null];
(statearr_51773[(0)] = dynomics$ui$messaging$state_machine__35456__auto__);

(statearr_51773[(1)] = (1));

return statearr_51773;
});
var dynomics$ui$messaging$state_machine__35456__auto____1 = (function (state_51765){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_51765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e51774){if((e51774 instanceof Object)){
var ex__35459__auto__ = e51774;
var statearr_51775_51792 = state_51765;
(statearr_51775_51792[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51793 = state_51765;
state_51765 = G__51793;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__35456__auto__ = function(state_51765){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__35456__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__35456__auto____1.call(this,state_51765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__35456__auto____0;
dynomics$ui$messaging$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__35456__auto____1;
return dynomics$ui$messaging$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___51789,map__51755,map__51755__$1,message_channel,message_pub,c))
})();
var state__35569__auto__ = (function (){var statearr_51776 = f__35568__auto__.call(null);
(statearr_51776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___51789);

return statearr_51776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___51789,map__51755,map__51755__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__51777 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__51778 = null;
var count__51779 = (0);
var i__51780 = (0);
while(true){
if((i__51780 < count__51779)){
var map__51781 = cljs.core._nth.call(null,chunk__51778,i__51780);
var map__51781__$1 = ((((!((map__51781 == null)))?((((map__51781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51781):map__51781);
var topic = cljs.core.get.call(null,map__51781__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__51781__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__51794 = seq__51777;
var G__51795 = chunk__51778;
var G__51796 = count__51779;
var G__51797 = (i__51780 + (1));
seq__51777 = G__51794;
chunk__51778 = G__51795;
count__51779 = G__51796;
i__51780 = G__51797;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__51777);
if(temp__4425__auto__){
var seq__51777__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51777__$1)){
var c__24968__auto__ = cljs.core.chunk_first.call(null,seq__51777__$1);
var G__51798 = cljs.core.chunk_rest.call(null,seq__51777__$1);
var G__51799 = c__24968__auto__;
var G__51800 = cljs.core.count.call(null,c__24968__auto__);
var G__51801 = (0);
seq__51777 = G__51798;
chunk__51778 = G__51799;
count__51779 = G__51800;
i__51780 = G__51801;
continue;
} else {
var map__51783 = cljs.core.first.call(null,seq__51777__$1);
var map__51783__$1 = ((((!((map__51783 == null)))?((((map__51783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51783):map__51783);
var topic = cljs.core.get.call(null,map__51783__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__51783__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__51802 = cljs.core.next.call(null,seq__51777__$1);
var G__51803 = null;
var G__51804 = (0);
var G__51805 = (0);
seq__51777 = G__51802;
chunk__51778 = G__51803;
count__51779 = G__51804;
i__51780 = G__51805;
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
var c__35567__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto__){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto__){
return (function (state_51834){
var state_val_51835 = (state_51834[(1)]);
if((state_val_51835 === (1))){
var state_51834__$1 = state_51834;
var statearr_51836_51846 = state_51834__$1;
(statearr_51836_51846[(2)] = null);

(statearr_51836_51846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51835 === (2))){
var state_51834__$1 = state_51834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51834__$1,(4),ch);
} else {
if((state_val_51835 === (3))){
var inst_51832 = (state_51834[(2)]);
var state_51834__$1 = state_51834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51834__$1,inst_51832);
} else {
if((state_val_51835 === (4))){
var inst_51828 = (state_51834[(2)]);
var inst_51829 = g.call(null,inst_51828);
var state_51834__$1 = (function (){var statearr_51837 = state_51834;
(statearr_51837[(7)] = inst_51829);

return statearr_51837;
})();
var statearr_51838_51847 = state_51834__$1;
(statearr_51838_51847[(2)] = null);

(statearr_51838_51847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35567__auto__))
;
return ((function (switch__35455__auto__,c__35567__auto__){
return (function() {
var dynomics$ui$messaging$setup_updates_$_state_machine__35456__auto__ = null;
var dynomics$ui$messaging$setup_updates_$_state_machine__35456__auto____0 = (function (){
var statearr_51842 = [null,null,null,null,null,null,null,null];
(statearr_51842[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__35456__auto__);

(statearr_51842[(1)] = (1));

return statearr_51842;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__35456__auto____1 = (function (state_51834){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_51834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e51843){if((e51843 instanceof Object)){
var ex__35459__auto__ = e51843;
var statearr_51844_51848 = state_51834;
(statearr_51844_51848[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51849 = state_51834;
state_51834 = G__51849;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__35456__auto__ = function(state_51834){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__35456__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__35456__auto____1.call(this,state_51834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__35456__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__35456__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto__))
})();
var state__35569__auto__ = (function (){var statearr_51845 = f__35568__auto__.call(null);
(statearr_51845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto__);

return statearr_51845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto__))
);

return c__35567__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__51850){
var map__51855 = p__51850;
var map__51855__$1 = ((((!((map__51855 == null)))?((((map__51855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51855):map__51855);
var s = map__51855__$1;
var map__51856 = cljs.core.get.call(null,map__51855__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__51856__$1 = ((((!((map__51856 == null)))?((((map__51856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51856):map__51856);
var ws = cljs.core.get.call(null,map__51856__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__51856__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args51859 = [];
var len__25223__auto___51904 = arguments.length;
var i__25224__auto___51905 = (0);
while(true){
if((i__25224__auto___51905 < len__25223__auto___51904)){
args51859.push((arguments[i__25224__auto___51905]));

var G__51906 = (i__25224__auto___51905 + (1));
i__25224__auto___51905 = G__51906;
continue;
} else {
}
break;
}

var G__51861 = args51859.length;
switch (G__51861) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51859.length)].join('')));

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
var c__35567__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_51871){
var state_val_51872 = (state_51871[(1)]);
if((state_val_51872 === (1))){
var state_51871__$1 = state_51871;
var statearr_51873_51908 = state_51871__$1;
(statearr_51873_51908[(2)] = null);

(statearr_51873_51908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51872 === (2))){
var state_51871__$1 = state_51871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51871__$1,(4),wch);
} else {
if((state_val_51872 === (3))){
var inst_51869 = (state_51871[(2)]);
var state_51871__$1 = state_51871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51871__$1,inst_51869);
} else {
if((state_val_51872 === (4))){
var inst_51864 = (state_51871[(2)]);
var inst_51865 = cljs.core.pr_str.call(null,inst_51864);
var inst_51866 = ws.send(inst_51865);
var state_51871__$1 = (function (){var statearr_51874 = state_51871;
(statearr_51874[(7)] = inst_51866);

return statearr_51874;
})();
var statearr_51875_51909 = state_51871__$1;
(statearr_51875_51909[(2)] = null);

(statearr_51875_51909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35567__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__35455__auto__,c__35567__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__35456__auto__ = null;
var dynomics$ui$messaging$state_machine__35456__auto____0 = (function (){
var statearr_51879 = [null,null,null,null,null,null,null,null];
(statearr_51879[(0)] = dynomics$ui$messaging$state_machine__35456__auto__);

(statearr_51879[(1)] = (1));

return statearr_51879;
});
var dynomics$ui$messaging$state_machine__35456__auto____1 = (function (state_51871){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_51871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e51880){if((e51880 instanceof Object)){
var ex__35459__auto__ = e51880;
var statearr_51881_51910 = state_51871;
(statearr_51881_51910[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51911 = state_51871;
state_51871 = G__51911;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__35456__auto__ = function(state_51871){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__35456__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__35456__auto____1.call(this,state_51871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__35456__auto____0;
dynomics$ui$messaging$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__35456__auto____1;
return dynomics$ui$messaging$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__35569__auto__ = (function (){var statearr_51882 = f__35568__auto__.call(null);
(statearr_51882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto__);

return statearr_51882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);

return c__35567__auto__;
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

var c__35567__auto___51912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35567__auto___51912,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__35568__auto__ = (function (){var switch__35455__auto__ = ((function (c__35567__auto___51912,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_51892){
var state_val_51893 = (state_51892[(1)]);
if((state_val_51893 === (1))){
var state_51892__$1 = state_51892;
var statearr_51894_51913 = state_51892__$1;
(statearr_51894_51913[(2)] = null);

(statearr_51894_51913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51893 === (2))){
var state_51892__$1 = state_51892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51892__$1,(4),rch);
} else {
if((state_val_51893 === (3))){
var inst_51890 = (state_51892[(2)]);
var state_51892__$1 = state_51892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51892__$1,inst_51890);
} else {
if((state_val_51893 === (4))){
var inst_51885 = (state_51892[(2)]);
var inst_51886 = cljs.reader.read_string.call(null,inst_51885);
var inst_51887 = cljs.core.async.put_BANG_.call(null,mch,inst_51886);
var state_51892__$1 = (function (){var statearr_51895 = state_51892;
(statearr_51895[(7)] = inst_51887);

return statearr_51895;
})();
var statearr_51896_51914 = state_51892__$1;
(statearr_51896_51914[(2)] = null);

(statearr_51896_51914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__35567__auto___51912,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__35455__auto__,c__35567__auto___51912,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__35456__auto__ = null;
var dynomics$ui$messaging$state_machine__35456__auto____0 = (function (){
var statearr_51900 = [null,null,null,null,null,null,null,null];
(statearr_51900[(0)] = dynomics$ui$messaging$state_machine__35456__auto__);

(statearr_51900[(1)] = (1));

return statearr_51900;
});
var dynomics$ui$messaging$state_machine__35456__auto____1 = (function (state_51892){
while(true){
var ret_value__35457__auto__ = (function (){try{while(true){
var result__35458__auto__ = switch__35455__auto__.call(null,state_51892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35458__auto__;
}
break;
}
}catch (e51901){if((e51901 instanceof Object)){
var ex__35459__auto__ = e51901;
var statearr_51902_51915 = state_51892;
(statearr_51902_51915[(5)] = ex__35459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51916 = state_51892;
state_51892 = G__51916;
continue;
} else {
return ret_value__35457__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__35456__auto__ = function(state_51892){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__35456__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__35456__auto____1.call(this,state_51892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__35456__auto____0;
dynomics$ui$messaging$state_machine__35456__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__35456__auto____1;
return dynomics$ui$messaging$state_machine__35456__auto__;
})()
;})(switch__35455__auto__,c__35567__auto___51912,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__35569__auto__ = (function (){var statearr_51903 = f__35568__auto__.call(null);
(statearr_51903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__35567__auto___51912);

return statearr_51903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35569__auto__);
});})(c__35567__auto___51912,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=messaging.js.map