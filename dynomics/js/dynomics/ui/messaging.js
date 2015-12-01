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
var args205622 = [];
var len__25279__auto___205655 = arguments.length;
var i__25280__auto___205656 = (0);
while(true){
if((i__25280__auto___205656 < len__25279__auto___205655)){
args205622.push((arguments[i__25280__auto___205656]));

var G__205657 = (i__25280__auto___205656 + (1));
i__25280__auto___205656 = G__205657;
continue;
} else {
}
break;
}

var G__205624 = args205622.length;
switch (G__205624) {
case 3:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args205622.length)].join('')));

}
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,topic,f){
var map__205625 = new cljs.core.Keyword(null,"messaging","messaging",299215316).cljs$core$IFn$_invoke$arity$1(state);
var map__205625__$1 = ((((!((map__205625 == null)))?((((map__205625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__205625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205625):map__205625);
var message_channel = cljs.core.get.call(null,map__205625__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var message_pub = cljs.core.get.call(null,map__205625__$1,new cljs.core.Keyword(null,"message-pub","message-pub",-2033601403));
var c = cljs.core.async.chan.call(null);
cljs.core.async.sub.call(null,message_pub,topic,c);

var c__36125__auto___205659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___205659,map__205625,map__205625__$1,message_channel,message_pub,c){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___205659,map__205625,map__205625__$1,message_channel,message_pub,c){
return (function (state_205635){
var state_val_205636 = (state_205635[(1)]);
if((state_val_205636 === (1))){
var state_205635__$1 = state_205635;
var statearr_205637_205660 = state_205635__$1;
(statearr_205637_205660[(2)] = null);

(statearr_205637_205660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205636 === (2))){
var state_205635__$1 = state_205635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205635__$1,(4),c);
} else {
if((state_val_205636 === (3))){
var inst_205633 = (state_205635[(2)]);
var state_205635__$1 = state_205635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205635__$1,inst_205633);
} else {
if((state_val_205636 === (4))){
var inst_205629 = (state_205635[(2)]);
var inst_205630 = f.call(null,inst_205629);
var state_205635__$1 = (function (){var statearr_205638 = state_205635;
(statearr_205638[(7)] = inst_205630);

return statearr_205638;
})();
var statearr_205639_205661 = state_205635__$1;
(statearr_205639_205661[(2)] = null);

(statearr_205639_205661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36125__auto___205659,map__205625,map__205625__$1,message_channel,message_pub,c))
;
return ((function (switch__36013__auto__,c__36125__auto___205659,map__205625,map__205625__$1,message_channel,message_pub,c){
return (function() {
var dynomics$ui$messaging$state_machine__36014__auto__ = null;
var dynomics$ui$messaging$state_machine__36014__auto____0 = (function (){
var statearr_205643 = [null,null,null,null,null,null,null,null];
(statearr_205643[(0)] = dynomics$ui$messaging$state_machine__36014__auto__);

(statearr_205643[(1)] = (1));

return statearr_205643;
});
var dynomics$ui$messaging$state_machine__36014__auto____1 = (function (state_205635){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_205635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e205644){if((e205644 instanceof Object)){
var ex__36017__auto__ = e205644;
var statearr_205645_205662 = state_205635;
(statearr_205645_205662[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205663 = state_205635;
state_205635 = G__205663;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__36014__auto__ = function(state_205635){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__36014__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__36014__auto____1.call(this,state_205635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__36014__auto____0;
dynomics$ui$messaging$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__36014__auto____1;
return dynomics$ui$messaging$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___205659,map__205625,map__205625__$1,message_channel,message_pub,c))
})();
var state__36127__auto__ = (function (){var statearr_205646 = f__36126__auto__.call(null);
(statearr_205646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___205659);

return statearr_205646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___205659,map__205625,map__205625__$1,message_channel,message_pub,c))
);


return state;
});

dynomics.ui.messaging.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,component){
var seq__205647 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776).cljs$core$IFn$_invoke$arity$1(component).call(null,state));
var chunk__205648 = null;
var count__205649 = (0);
var i__205650 = (0);
while(true){
if((i__205650 < count__205649)){
var map__205651 = cljs.core._nth.call(null,chunk__205648,i__205650);
var map__205651__$1 = ((((!((map__205651 == null)))?((((map__205651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__205651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205651):map__205651);
var topic = cljs.core.get.call(null,map__205651__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__205651__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__205664 = seq__205647;
var G__205665 = chunk__205648;
var G__205666 = count__205649;
var G__205667 = (i__205650 + (1));
seq__205647 = G__205664;
chunk__205648 = G__205665;
count__205649 = G__205666;
i__205650 = G__205667;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__205647);
if(temp__4425__auto__){
var seq__205647__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__205647__$1)){
var c__25024__auto__ = cljs.core.chunk_first.call(null,seq__205647__$1);
var G__205668 = cljs.core.chunk_rest.call(null,seq__205647__$1);
var G__205669 = c__25024__auto__;
var G__205670 = cljs.core.count.call(null,c__25024__auto__);
var G__205671 = (0);
seq__205647 = G__205668;
chunk__205648 = G__205669;
count__205649 = G__205670;
i__205650 = G__205671;
continue;
} else {
var map__205653 = cljs.core.first.call(null,seq__205647__$1);
var map__205653__$1 = ((((!((map__205653 == null)))?((((map__205653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__205653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205653):map__205653);
var topic = cljs.core.get.call(null,map__205653__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var handler = cljs.core.get.call(null,map__205653__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
dynomics.ui.messaging.subscribe_BANG_.call(null,state,topic,handler);

var G__205672 = cljs.core.next.call(null,seq__205647__$1);
var G__205673 = null;
var G__205674 = (0);
var G__205675 = (0);
seq__205647 = G__205672;
chunk__205648 = G__205673;
count__205649 = G__205674;
i__205650 = G__205675;
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
var c__36125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto__){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto__){
return (function (state_205704){
var state_val_205705 = (state_205704[(1)]);
if((state_val_205705 === (1))){
var state_205704__$1 = state_205704;
var statearr_205706_205716 = state_205704__$1;
(statearr_205706_205716[(2)] = null);

(statearr_205706_205716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205705 === (2))){
var state_205704__$1 = state_205704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205704__$1,(4),ch);
} else {
if((state_val_205705 === (3))){
var inst_205702 = (state_205704[(2)]);
var state_205704__$1 = state_205704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205704__$1,inst_205702);
} else {
if((state_val_205705 === (4))){
var inst_205698 = (state_205704[(2)]);
var inst_205699 = g.call(null,inst_205698);
var state_205704__$1 = (function (){var statearr_205707 = state_205704;
(statearr_205707[(7)] = inst_205699);

return statearr_205707;
})();
var statearr_205708_205717 = state_205704__$1;
(statearr_205708_205717[(2)] = null);

(statearr_205708_205717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36125__auto__))
;
return ((function (switch__36013__auto__,c__36125__auto__){
return (function() {
var dynomics$ui$messaging$setup_updates_$_state_machine__36014__auto__ = null;
var dynomics$ui$messaging$setup_updates_$_state_machine__36014__auto____0 = (function (){
var statearr_205712 = [null,null,null,null,null,null,null,null];
(statearr_205712[(0)] = dynomics$ui$messaging$setup_updates_$_state_machine__36014__auto__);

(statearr_205712[(1)] = (1));

return statearr_205712;
});
var dynomics$ui$messaging$setup_updates_$_state_machine__36014__auto____1 = (function (state_205704){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_205704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e205713){if((e205713 instanceof Object)){
var ex__36017__auto__ = e205713;
var statearr_205714_205718 = state_205704;
(statearr_205714_205718[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205719 = state_205704;
state_205704 = G__205719;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
dynomics$ui$messaging$setup_updates_$_state_machine__36014__auto__ = function(state_205704){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$setup_updates_$_state_machine__36014__auto____0.call(this);
case 1:
return dynomics$ui$messaging$setup_updates_$_state_machine__36014__auto____1.call(this,state_205704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$setup_updates_$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$setup_updates_$_state_machine__36014__auto____0;
dynomics$ui$messaging$setup_updates_$_state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$setup_updates_$_state_machine__36014__auto____1;
return dynomics$ui$messaging$setup_updates_$_state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto__))
})();
var state__36127__auto__ = (function (){var statearr_205715 = f__36126__auto__.call(null);
(statearr_205715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto__);

return statearr_205715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto__))
);

return c__36125__auto__;
});
dynomics.ui.messaging.connect_BANG_ = (function dynomics$ui$messaging$connect_BANG_(p__205720){
var map__205725 = p__205720;
var map__205725__$1 = ((((!((map__205725 == null)))?((((map__205725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__205725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205725):map__205725);
var s = map__205725__$1;
var map__205726 = cljs.core.get.call(null,map__205725__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__205726__$1 = ((((!((map__205726 == null)))?((((map__205726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__205726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__205726):map__205726);
var ws = cljs.core.get.call(null,map__205726__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ws_uri = cljs.core.get.call(null,map__205726__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
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
var args205729 = [];
var len__25279__auto___205774 = arguments.length;
var i__25280__auto___205775 = (0);
while(true){
if((i__25280__auto___205775 < len__25279__auto___205774)){
args205729.push((arguments[i__25280__auto___205775]));

var G__205776 = (i__25280__auto___205775 + (1));
i__25280__auto___205775 = G__205776;
continue;
} else {
}
break;
}

var G__205731 = args205729.length;
switch (G__205731) {
case 0:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.messaging.make_channels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args205729.length)].join('')));

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
var c__36125__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_205741){
var state_val_205742 = (state_205741[(1)]);
if((state_val_205742 === (1))){
var state_205741__$1 = state_205741;
var statearr_205743_205778 = state_205741__$1;
(statearr_205743_205778[(2)] = null);

(statearr_205743_205778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205742 === (2))){
var state_205741__$1 = state_205741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205741__$1,(4),wch);
} else {
if((state_val_205742 === (3))){
var inst_205739 = (state_205741[(2)]);
var state_205741__$1 = state_205741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205741__$1,inst_205739);
} else {
if((state_val_205742 === (4))){
var inst_205734 = (state_205741[(2)]);
var inst_205735 = cljs.core.pr_str.call(null,inst_205734);
var inst_205736 = ws.send(inst_205735);
var state_205741__$1 = (function (){var statearr_205744 = state_205741;
(statearr_205744[(7)] = inst_205736);

return statearr_205744;
})();
var statearr_205745_205779 = state_205741__$1;
(statearr_205745_205779[(2)] = null);

(statearr_205745_205779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36125__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__36013__auto__,c__36125__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__36014__auto__ = null;
var dynomics$ui$messaging$state_machine__36014__auto____0 = (function (){
var statearr_205749 = [null,null,null,null,null,null,null,null];
(statearr_205749[(0)] = dynomics$ui$messaging$state_machine__36014__auto__);

(statearr_205749[(1)] = (1));

return statearr_205749;
});
var dynomics$ui$messaging$state_machine__36014__auto____1 = (function (state_205741){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_205741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e205750){if((e205750 instanceof Object)){
var ex__36017__auto__ = e205750;
var statearr_205751_205780 = state_205741;
(statearr_205751_205780[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205781 = state_205741;
state_205741 = G__205781;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__36014__auto__ = function(state_205741){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__36014__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__36014__auto____1.call(this,state_205741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__36014__auto____0;
dynomics$ui$messaging$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__36014__auto____1;
return dynomics$ui$messaging$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__36127__auto__ = (function (){var statearr_205752 = f__36126__auto__.call(null);
(statearr_205752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto__);

return statearr_205752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto__,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);

return c__36125__auto__;
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

var c__36125__auto___205782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36125__auto___205782,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (){
var f__36126__auto__ = (function (){var switch__36013__auto__ = ((function (c__36125__auto___205782,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function (state_205762){
var state_val_205763 = (state_205762[(1)]);
if((state_val_205763 === (1))){
var state_205762__$1 = state_205762;
var statearr_205764_205783 = state_205762__$1;
(statearr_205764_205783[(2)] = null);

(statearr_205764_205783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_205763 === (2))){
var state_205762__$1 = state_205762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_205762__$1,(4),rch);
} else {
if((state_val_205763 === (3))){
var inst_205760 = (state_205762[(2)]);
var state_205762__$1 = state_205762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_205762__$1,inst_205760);
} else {
if((state_val_205763 === (4))){
var inst_205755 = (state_205762[(2)]);
var inst_205756 = cljs.reader.read_string.call(null,inst_205755);
var inst_205757 = cljs.core.async.put_BANG_.call(null,mch,inst_205756);
var state_205762__$1 = (function (){var statearr_205765 = state_205762;
(statearr_205765[(7)] = inst_205757);

return statearr_205765;
})();
var statearr_205766_205784 = state_205762__$1;
(statearr_205766_205784[(2)] = null);

(statearr_205766_205784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36125__auto___205782,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
;
return ((function (switch__36013__auto__,c__36125__auto___205782,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging){
return (function() {
var dynomics$ui$messaging$state_machine__36014__auto__ = null;
var dynomics$ui$messaging$state_machine__36014__auto____0 = (function (){
var statearr_205770 = [null,null,null,null,null,null,null,null];
(statearr_205770[(0)] = dynomics$ui$messaging$state_machine__36014__auto__);

(statearr_205770[(1)] = (1));

return statearr_205770;
});
var dynomics$ui$messaging$state_machine__36014__auto____1 = (function (state_205762){
while(true){
var ret_value__36015__auto__ = (function (){try{while(true){
var result__36016__auto__ = switch__36013__auto__.call(null,state_205762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36016__auto__;
}
break;
}
}catch (e205771){if((e205771 instanceof Object)){
var ex__36017__auto__ = e205771;
var statearr_205772_205785 = state_205762;
(statearr_205772_205785[(5)] = ex__36017__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_205762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e205771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36015__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__205786 = state_205762;
state_205762 = G__205786;
continue;
} else {
return ret_value__36015__auto__;
}
break;
}
});
dynomics$ui$messaging$state_machine__36014__auto__ = function(state_205762){
switch(arguments.length){
case 0:
return dynomics$ui$messaging$state_machine__36014__auto____0.call(this);
case 1:
return dynomics$ui$messaging$state_machine__36014__auto____1.call(this,state_205762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dynomics$ui$messaging$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$0 = dynomics$ui$messaging$state_machine__36014__auto____0;
dynomics$ui$messaging$state_machine__36014__auto__.cljs$core$IFn$_invoke$arity$1 = dynomics$ui$messaging$state_machine__36014__auto____1;
return dynomics$ui$messaging$state_machine__36014__auto__;
})()
;})(switch__36013__auto__,c__36125__auto___205782,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
})();
var state__36127__auto__ = (function (){var statearr_205773 = f__36126__auto__.call(null);
(statearr_205773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36125__auto___205782);

return statearr_205773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36127__auto__);
});})(c__36125__auto___205782,ws,rch,wch,doc_uri,ws_uri,mch,msgs,state_updates,messaging))
);


return cljs.core.assoc.call(null,messaging,new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"read-channel","read-channel",1490839240),rch,new cljs.core.Keyword(null,"write-channel","write-channel",977573273),wch);
});

dynomics.ui.messaging.make_channels.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=messaging.js.map