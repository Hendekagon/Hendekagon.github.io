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
var args655593 = [];
var len__25269__auto___655626 = arguments.length;
var i__25270__auto___655627 = (0);
while(true){
if((i__25270__auto___655627 < len__25269__auto___655626)){
args655593.push((arguments[i__25270__auto___655627]));

var G__655628 = (i__25270__auto___655627 + (1));
i__25270__auto___655627 = G__655628;
continue;
} else {
}
break;
}

var G__655595 = args655593.length;
switch (G__655595) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args655593.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__655596 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__655596__$1 = ((((!((map__655596 == null)))?((((map__655596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655596):map__655596);
var message_channel = cljs.core.get.call(null,map__655596__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__655596__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__29846__auto___655630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___655630,map__655596,map__655596__$1,message_channel,message_pub,c){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___655630,map__655596,map__655596__$1,message_channel,message_pub,c){
return (function (state_655606){
var state_val_655607 = (state_655606[(1)]);
if((state_val_655607 === (1))){
var state_655606__$1 = state_655606;
var statearr_655608_655631 = state_655606__$1;
(statearr_655608_655631[(2)] = null);

(statearr_655608_655631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_655607 === (2))){
var state_655606__$1 = state_655606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_655606__$1,(4),c);
} else {
if((state_val_655607 === (3))){
var inst_655604 = (state_655606[(2)]);
var state_655606__$1 = state_655606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_655606__$1,inst_655604);
} else {
if((state_val_655607 === (4))){
var inst_655600 = (state_655606[(2)]);
var inst_655601 = f.call(null,inst_655600);
var state_655606__$1 = (function (){var statearr_655609 = state_655606;
(statearr_655609[(7)] = inst_655601);

return statearr_655609;
})();
var statearr_655610_655632 = state_655606__$1;
(statearr_655610_655632[(2)] = null);

(statearr_655610_655632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__29846__auto___655630,map__655596,map__655596__$1,message_channel,message_pub,c))
;
return ((function (switch__29734__auto__,c__29846__auto___655630,map__655596,map__655596__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__29735__auto__ = null;
var dynomics$ui$messaging$state_machine__29735__auto____0 = (function (){
var statearr_655614 = [null,null,null,null,null,null,null,null];
(statearr_655614[(0)] = dynomics$ui$messaging$state_machine__29735__auto__);

(statearr_655614[(1)] = (1));

return statearr_655614;
});
var dynomics$ui$messaging$state_machine__29735__auto____1 = (function (state_655606){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_655606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e655615){if((e655615 instanceof Object)){
var ex__29738__auto__ = e655615;
var statearr_655616_655633 = state_655606;
(statearr_655616_655633[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_655606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e655615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__655634 = state_655606;
state_655606 = G__655634;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__29735__auto__ = function(state_655606){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__29735__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__29735__auto____1.call(this,state_655606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__29735__auto____0;
dynomics$ui$messaging$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__29735__auto____1;
return dynomics$ui$messaging$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___655630,map__655596,map__655596__$1,message_channel,message_pub,c))
})();
var state__29848__auto__ = (function (){var statearr_655617 = f__29847__auto__.call(null);
(statearr_655617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___655630);

return statearr_655617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___655630,map__655596,map__655596__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__655618 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__655619 = null;
var count__655620 = (0);
var i__655621 = (0);
while(true){
if((i__655621 < count__655620)){
var map__655622 = cljs.core._nth.call(null,chunk__655619,i__655621);
var map__655622__$1 = ((((!((map__655622 == null)))?((((map__655622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655622):map__655622);
var topic = cljs.core.get.call(null,map__655622__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__655622__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__655635 = seq__655618;
var G__655636 = chunk__655619;
var G__655637 = count__655620;
var G__655638 = (i__655621 + (1));
seq__655618 = G__655635;
chunk__655619 = G__655636;
count__655620 = G__655637;
i__655621 = G__655638;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__655618);
if(temp__4425__auto__){
var seq__655618__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__655618__$1)){
var c__25014__auto__ = cljs.core.chunk_first.call(null,seq__655618__$1);
var G__655639 = cljs.core.chunk_rest.call(null,seq__655618__$1);
var G__655640 = c__25014__auto__;
var G__655641 = cljs.core.count.call(null,c__25014__auto__);
var G__655642 = (0);
seq__655618 = G__655639;
chunk__655619 = G__655640;
count__655620 = G__655641;
i__655621 = G__655642;
continue;
} else {
var map__655624 = cljs.core.first.call(null,seq__655618__$1);
var map__655624__$1 = ((((!((map__655624 == null)))?((((map__655624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655624):map__655624);
var topic = cljs.core.get.call(null,map__655624__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__655624__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__655643 = cljs.core.next.call(null,seq__655618__$1);
var G__655644 = null;
var G__655645 = (0);
var G__655646 = (0);
seq__655618 = G__655643;
chunk__655619 = G__655644;
count__655620 = G__655645;
i__655621 = G__655646;
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
return (function (state_655675){
var state_val_655676 = (state_655675[(1)]);
if((state_val_655676 === (1))){
var state_655675__$1 = state_655675;
var statearr_655677_655687 = state_655675__$1;
(statearr_655677_655687[(2)] = null);

(statearr_655677_655687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_655676 === (2))){
var state_655675__$1 = state_655675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_655675__$1,(4),ch);
} else {
if((state_val_655676 === (3))){
var inst_655673 = (state_655675[(2)]);
var state_655675__$1 = state_655675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_655675__$1,inst_655673);
} else {
if((state_val_655676 === (4))){
var inst_655669 = (state_655675[(2)]);
var inst_655670 = g.call(null,inst_655669);
var state_655675__$1 = (function (){var statearr_655678 = state_655675;
(statearr_655678[(7)] = inst_655670);

return statearr_655678;
})();
var statearr_655679_655688 = state_655675__$1;
(statearr_655679_655688[(2)] = null);

(statearr_655679_655688[(1)] = (2));


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
var statearr_655683 = [null,null,null,null,null,null,null,null];
(statearr_655683[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto__);

(statearr_655683[(1)] = (1));

return statearr_655683;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto____1 = (function (state_655675){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_655675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e655684){if((e655684 instanceof Object)){
var ex__29738__auto__ = e655684;
var statearr_655685_655689 = state_655675;
(statearr_655685_655689[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_655675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e655684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__655690 = state_655675;
state_655675 = G__655690;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto__ = function(state_655675){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto____1.call(this,state_655675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto__))
})();
var state__29848__auto__ = (function (){var statearr_655686 = f__29847__auto__.call(null);
(statearr_655686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto__);

return statearr_655686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto__))
);

return c__29846__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__655691){
var map__655696 = p__655691;
var map__655696__$1 = ((((!((map__655696 == null)))?((((map__655696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655696):map__655696);
var s = map__655696__$1;
var map__655697 = cljs.core.get.call(null,map__655696__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__655697__$1 = ((((!((map__655697 == null)))?((((map__655697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655697):map__655697);
var ws = cljs.core.get.call(null,map__655697__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__655697__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args655700 = [];
var len__25269__auto___655745 = arguments.length;
var i__25270__auto___655746 = (0);
while(true){
if((i__25270__auto___655746 < len__25269__auto___655745)){
args655700.push((arguments[i__25270__auto___655746]));

var G__655747 = (i__25270__auto___655746 + (1));
i__25270__auto___655746 = G__655747;
continue;
} else {
}
break;
}

var G__655702 = args655700.length;
switch (G__655702) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args655700.length)].join('')));

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
return (function (state_655712){
var state_val_655713 = (state_655712[(1)]);
if((state_val_655713 === (1))){
var state_655712__$1 = state_655712;
var statearr_655714_655749 = state_655712__$1;
(statearr_655714_655749[(2)] = null);

(statearr_655714_655749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_655713 === (2))){
var state_655712__$1 = state_655712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_655712__$1,(4),wch);
} else {
if((state_val_655713 === (3))){
var inst_655710 = (state_655712[(2)]);
var state_655712__$1 = state_655712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_655712__$1,inst_655710);
} else {
if((state_val_655713 === (4))){
var inst_655705 = (state_655712[(2)]);
var inst_655706 = cljs.core.pr_str.call(null,inst_655705);
var inst_655707 = ws.send(inst_655706);
var state_655712__$1 = (function (){var statearr_655715 = state_655712;
(statearr_655715[(7)] = inst_655707);

return statearr_655715;
})();
var statearr_655716_655750 = state_655712__$1;
(statearr_655716_655750[(2)] = null);

(statearr_655716_655750[(1)] = (2));


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
var statearr_655720 = [null,null,null,null,null,null,null,null];
(statearr_655720[(0)] = dynomics$ui$messaging$state_machine__29735__auto__);

(statearr_655720[(1)] = (1));

return statearr_655720;
});
var dynomics$ui$messaging$state_machine__29735__auto____1 = (function (state_655712){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_655712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e655721){if((e655721 instanceof Object)){
var ex__29738__auto__ = e655721;
var statearr_655722_655751 = state_655712;
(statearr_655722_655751[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_655712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e655721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__655752 = state_655712;
state_655712 = G__655752;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__29735__auto__ = function(state_655712){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__29735__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__29735__auto____1.call(this,state_655712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__29735__auto____0;
dynomics$ui$messaging$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__29735__auto____1;
return dynomics$ui$messaging$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__29848__auto__ = (function (){var statearr_655723 = f__29847__auto__.call(null);
(statearr_655723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto__);

return statearr_655723;
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

var c__29846__auto___655753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29846__auto___655753,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__29847__auto__ = (function (){var switch__29734__auto__ = ((function (c__29846__auto___655753,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_655733){
var state_val_655734 = (state_655733[(1)]);
if((state_val_655734 === (1))){
var state_655733__$1 = state_655733;
var statearr_655735_655754 = state_655733__$1;
(statearr_655735_655754[(2)] = null);

(statearr_655735_655754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_655734 === (2))){
var state_655733__$1 = state_655733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_655733__$1,(4),rch);
} else {
if((state_val_655734 === (3))){
var inst_655731 = (state_655733[(2)]);
var state_655733__$1 = state_655733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_655733__$1,inst_655731);
} else {
if((state_val_655734 === (4))){
var inst_655726 = (state_655733[(2)]);
var inst_655727 = cljs.reader.read_string.call(null,inst_655726);
var inst_655728 = cljs.core.async.put_BANG_.call(null,mch,inst_655727);
var state_655733__$1 = (function (){var statearr_655736 = state_655733;
(statearr_655736[(7)] = inst_655728);

return statearr_655736;
})();
var statearr_655737_655755 = state_655733__$1;
(statearr_655737_655755[(2)] = null);

(statearr_655737_655755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__29846__auto___655753,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__29734__auto__,c__29846__auto___655753,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__29735__auto__ = null;
var dynomics$ui$messaging$state_machine__29735__auto____0 = (function (){
var statearr_655741 = [null,null,null,null,null,null,null,null];
(statearr_655741[(0)] = dynomics$ui$messaging$state_machine__29735__auto__);

(statearr_655741[(1)] = (1));

return statearr_655741;
});
var dynomics$ui$messaging$state_machine__29735__auto____1 = (function (state_655733){
while(true){
var ret_value__29736__auto__ = (function (){try{while(true){
var result__29737__auto__ = switch__29734__auto__.call(null,state_655733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29737__auto__;
}
break;
}
}catch (e655742){if((e655742 instanceof Object)){
var ex__29738__auto__ = e655742;
var statearr_655743_655756 = state_655733;
(statearr_655743_655756[(5)] = ex__29738__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_655733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e655742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__655757 = state_655733;
state_655733 = G__655757;
continue;
} else {
return ret_value__29736__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__29735__auto__ = function(state_655733){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__29735__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__29735__auto____1.call(this,state_655733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__29735__auto____0;
dynomics$ui$messaging$state_machine__29735__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__29735__auto____1;
return dynomics$ui$messaging$state_machine__29735__auto__;
})()
;})(switch__29734__auto__,c__29846__auto___655753,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__29848__auto__ = (function (){var statearr_655744 = f__29847__auto__.call(null);
(statearr_655744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29846__auto___655753);

return statearr_655744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29848__auto__);
});})(c__29846__auto___655753,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=messaging.js.map