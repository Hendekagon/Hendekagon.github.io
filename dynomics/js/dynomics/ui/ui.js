// Compiled by ClojureScript 1.7.170 {}
goog.provide('dynomics.ui.ui');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('garden.types');
goog.require('om.dom');
goog.require('dynomics.ui.persistence');
goog.require('cljs.tools.reader');
goog.require('dynomics.ui.css');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('dommy.core');
goog.require('cljs.js');
goog.require('dynomics.ui.core');
goog.require('dynomics.space.core');
goog.require('garden.color');
goog.require('dynomics.ui.messaging');
goog.require('om.core');
goog.require('canvg');
goog.require('dynomics.space.ui');
goog.require('goog.style');
goog.require('garden.core');
cljs.core.enable_console_print_BANG_.call(null);
dynomics.ui.ui.animation_frame = (function (){var or__24161__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
var or__24161__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__24161__auto____$1)){
return or__24161__auto____$1;
} else {
var or__24161__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__24161__auto____$2)){
return or__24161__auto____$2;
} else {
var or__24161__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__24161__auto____$3)){
return or__24161__auto____$3;
} else {
return window.oRequestAnimationFrame;
}
}
}
}
})();
dynomics.ui.ui.is_modifier = (function dynomics$ui$ui$is_modifier(keycode){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(20),null,(91),null,(93),null,(17),null,(16),null,(18),null], null), null).call(null,keycode);
});
dynomics.ui.ui.isnt_modifier = cljs.core.complement.call(null,dynomics.ui.ui.is_modifier);
dynomics.ui.ui.keydown = (function dynomics$ui$ui$keydown(state,e){
return dynomics.ui.core.update_state.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keydown","keydown",-629268186)], null));
});
dynomics.ui.ui.keyup = (function dynomics$ui$ui$keyup(state,e){
return dynomics.ui.core.update_state.call(null,state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keyup","keyup",-794526927)], null));
});
dynomics.ui.ui.evt_to_keyword = (function dynomics$ui$ui$evt_to_keyword(e){
return dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode);
});
dynomics.ui.ui.mousemoves = (function dynomics$ui$ui$mousemoves(state){
return (function (e){
om.core.transact_BANG_.call(null,state,(function (s){
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),(function (p__1890740){
var map__1890741 = p__1890740;
var map__1890741__$1 = ((((!((map__1890741 == null)))?((((map__1890741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890741):map__1890741);
var vx = cljs.core.get.call(null,map__1890741__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__1890741__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var x = cljs.core.get.call(null,map__1890741__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__1890741__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vx","vx",-1685168462),(x - e.clientX),new cljs.core.Keyword(null,"vy","vy",-2018509997),(y - e.clientY),new cljs.core.Keyword(null,"x","x",2099068185),e.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),e.clientY], null);
}));
}));

return null;
});
});
dynomics.ui.ui.add_events_BANG_ = (function dynomics$ui$ui$add_events_BANG_(state){
window.onkeydown = (function (e){
om.core.transact_BANG_.call(null,state,(function (s){
return dynomics.ui.ui.keydown.call(null,s,e);
}));

return null;
});

window.onkeyup = (function (e){
om.core.transact_BANG_.call(null,state,(function (s){
return dynomics.ui.ui.keyup.call(null,s,e);
}));

return null;
});

window.onfocus = (function (e){
om.core.transact_BANG_.call(null,state,(function (s){
return dynomics.ui.core.reset_keypath.call(null,s);
}));

return null;
});

window.onblur = (function (e){
om.core.transact_BANG_.call(null,state,(function (s){
return dynomics.ui.core.reset_keypath.call(null,s);
}));

return null;
});

return state;
});
dynomics.ui.ui.parse_px = (function dynomics$ui$ui$parse_px(v){
return Number.parseFloat(v.substr((0),(v.length - (2))));
});
/**
 * Returns a component for selecting the current function
 */
dynomics.ui.ui.make_function_selector_view = (function dynomics$ui$ui$make_function_selector_view(state,owner){
var functions = cljs.core.reverse.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220)));
var state_updates = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui1890750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui1890750 = (function (make_function_selector_view,state,owner,functions,state_updates,meta1890751){
this.make_function_selector_view = make_function_selector_view;
this.state = state;
this.owner = owner;
this.functions = functions;
this.state_updates = state_updates;
this.meta1890751 = meta1890751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui1890750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (functions,state_updates){
return (function (_1890752,meta1890751__$1){
var self__ = this;
var _1890752__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui1890750(self__.make_function_selector_view,self__.state,self__.owner,self__.functions,self__.state_updates,meta1890751__$1));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui1890750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (functions,state_updates){
return (function (_1890752){
var self__ = this;
var _1890752__$1 = this;
return self__.meta1890751;
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui1890750.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui1890750.prototype.om$core$IRender$render$arity$1 = ((function (functions,state_updates){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.div.call(null,{"className": "function_selector"},cljs.core.map.call(null,((function (this__38742__auto____$1,functions,state_updates){
return (function (p__1890753){
var vec__1890754 = p__1890753;
var k = cljs.core.nth.call(null,vec__1890754,(0),null);
var map__1890755 = cljs.core.nth.call(null,vec__1890754,(1),null);
var map__1890755__$1 = ((((!((map__1890755 == null)))?((((map__1890755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890755):map__1890755);
var naym = cljs.core.get.call(null,map__1890755__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__1890755__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return om.dom.div.call(null,{"className": "function_selector_item", "id": [cljs.core.str(cljs.core.name.call(null,k))].join(''), "onClick": ((function (vec__1890754,k,map__1890755,map__1890755__$1,naym,description,this__38742__auto____$1,functions,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__1890754,k,map__1890755,map__1890755__$1,naym,description,this__38742__auto____$1,functions,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null),k);
});})(vec__1890754,k,map__1890755,map__1890755__$1,naym,description,this__38742__auto____$1,functions,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"description","description",-1428560544),naym], null)], null));

return null;
});})(vec__1890754,k,map__1890755,map__1890755__$1,naym,description,this__38742__auto____$1,functions,state_updates))
},naym);
});})(this__38742__auto____$1,functions,state_updates))
,self__.functions));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui1890750.getBasis = ((function (functions,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-function-selector-view","make-function-selector-view",516344898,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for selecting the current function"], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"functions","functions",1825482993,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta1890751","meta1890751",1467967359,null)], null);
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui1890750.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui1890750.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui1890750";

dynomics.ui.ui.t_dynomics$ui$ui1890750.cljs$lang$ctorPrWriter = ((function (functions,state_updates){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.ui.ui/t_dynomics$ui$ui1890750");
});})(functions,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui1890750 = ((function (functions,state_updates){
return (function dynomics$ui$ui$make_function_selector_view_$___GT_t_dynomics$ui$ui1890750(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta1890751){
return (new dynomics.ui.ui.t_dynomics$ui$ui1890750(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta1890751));
});})(functions,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui1890750(dynomics$ui$ui$make_function_selector_view,state,owner,functions,state_updates,null));
});
/**
 * Return a component to display a list
 *   of historical states which select a historical
 *   state on mouseover
 */
dynomics.ui.ui.make_history_selector_view = (function dynomics$ui$ui$make_history_selector_view(p__1890757,owner){
var map__1890768 = p__1890757;
var map__1890768__$1 = ((((!((map__1890768 == null)))?((((map__1890768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890768):map__1890768);
var state = map__1890768__$1;
var map__1890769 = cljs.core.get.call(null,map__1890768__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__1890769__$1 = ((((!((map__1890769 == null)))?((((map__1890769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890769):map__1890769);
var state_updates = cljs.core.get.call(null,map__1890769__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui1890772 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui1890772 = (function (make_history_selector_view,p__1890757,owner,map__1890768,state,map__1890769,state_updates,meta1890773){
this.make_history_selector_view = make_history_selector_view;
this.p__1890757 = p__1890757;
this.owner = owner;
this.map__1890768 = map__1890768;
this.state = state;
this.map__1890769 = map__1890769;
this.state_updates = state_updates;
this.meta1890773 = meta1890773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui1890772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates){
return (function (_1890774,meta1890773__$1){
var self__ = this;
var _1890774__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui1890772(self__.make_history_selector_view,self__.p__1890757,self__.owner,self__.map__1890768,self__.state,self__.map__1890769,self__.state_updates,meta1890773__$1));
});})(map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui1890772.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates){
return (function (_1890774){
var self__ = this;
var _1890774__$1 = this;
return self__.meta1890773;
});})(map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui1890772.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui1890772.prototype.om$core$IRender$render$arity$1 = ((function (map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.div.call(null,{"className": "history_selector"},cljs.core.map.call(null,((function (this__38742__auto____$1,map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates){
return (function (p__1890775){
var map__1890776 = p__1890775;
var map__1890776__$1 = ((((!((map__1890776 == null)))?((((map__1890776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890776):map__1890776);
var history_item = map__1890776__$1;
var action = cljs.core.get.call(null,map__1890776__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var version = cljs.core.get.call(null,map__1890776__$1,new cljs.core.Keyword(null,"version","version",425292698));
var previous_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)) - (1))));
var previous_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)));
return om.dom.div.call(null,{"className": [cljs.core.str("history_selector_item "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_action)))?"historical":""))].join(''), "id": [cljs.core.str("history_version_"),cljs.core.str(previous_version)].join(''), "onMouseOver": ((function (previous_action,previous_version,map__1890776,map__1890776__$1,history_item,action,version,this__38742__auto____$1,map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (previous_action,previous_version,map__1890776,map__1890776__$1,history_item,action,version,this__38742__auto____$1,map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates){
return (function (s){
return cljs.core.merge.call(null,om.core.value.call(null,history_item),cljs.core.select_keys.call(null,s,cljs.core.conj.call(null,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"history","history",-247395220))));
});})(previous_action,previous_version,map__1890776,map__1890776__$1,history_item,action,version,this__38742__auto____$1,map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desccription","desccription",-1060114044),[cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action))].join(''),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"id","id",-1388402092),version], null)], null));

return null;
});})(previous_action,previous_version,map__1890776,map__1890776__$1,history_item,action,version,this__38742__auto____$1,map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates))
},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action));
});})(this__38742__auto____$1,map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates))
,cljs.core.filter.call(null,((function (this__38742__auto____$1,map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates){
return (function (hi){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi)) - (1)))));
});})(this__38742__auto____$1,map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates))
,cljs.core.reverse.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.state),self__.state)))));
});})(map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui1890772.getBasis = ((function (map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-history-selector-view","make-history-selector-view",1677763159,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a component to display a list\n  of historical states which select a historical\n  state on mouseover"], null)),new cljs.core.Symbol(null,"p__1890757","p__1890757",-1014588046,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__1890768","map__1890768",2140715729,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__1890769","map__1890769",-1449947701,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta1890773","meta1890773",-463153623,null)], null);
});})(map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui1890772.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui1890772.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui1890772";

dynomics.ui.ui.t_dynomics$ui$ui1890772.cljs$lang$ctorPrWriter = ((function (map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.ui.ui/t_dynomics$ui$ui1890772");
});})(map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui1890772 = ((function (map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates){
return (function dynomics$ui$ui$make_history_selector_view_$___GT_t_dynomics$ui$ui1890772(make_history_selector_view__$1,p__1890757__$1,owner__$1,map__1890768__$2,state__$1,map__1890769__$2,state_updates__$1,meta1890773){
return (new dynomics.ui.ui.t_dynomics$ui$ui1890772(make_history_selector_view__$1,p__1890757__$1,owner__$1,map__1890768__$2,state__$1,map__1890769__$2,state_updates__$1,meta1890773));
});})(map__1890768,map__1890768__$1,state,map__1890769,map__1890769__$1,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui1890772(dynomics$ui$ui$make_history_selector_view,p__1890757,owner,map__1890768__$1,state,map__1890769__$1,state_updates,null));
});
/**
 * Returns a component for the top header
 */
dynomics.ui.ui.make_header_view = (function dynomics$ui$ui$make_header_view(p__1890778){
var map__1890784 = p__1890778;
var map__1890784__$1 = ((((!((map__1890784 == null)))?((((map__1890784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890784):map__1890784);
var state = map__1890784__$1;
var logo_text = cljs.core.get.call(null,map__1890784__$1,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
var app_name = cljs.core.get.call(null,map__1890784__$1,new cljs.core.Keyword(null,"app-name","app-name",-268811251));
var app_version = cljs.core.get.call(null,map__1890784__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui1890786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui1890786 = (function (make_header_view,p__1890778,map__1890784,state,logo_text,app_name,app_version,meta1890787){
this.make_header_view = make_header_view;
this.p__1890778 = p__1890778;
this.map__1890784 = map__1890784;
this.state = state;
this.logo_text = logo_text;
this.app_name = app_name;
this.app_version = app_version;
this.meta1890787 = meta1890787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui1890786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__1890784,map__1890784__$1,state,logo_text,app_name,app_version){
return (function (_1890788,meta1890787__$1){
var self__ = this;
var _1890788__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui1890786(self__.make_header_view,self__.p__1890778,self__.map__1890784,self__.state,self__.logo_text,self__.app_name,self__.app_version,meta1890787__$1));
});})(map__1890784,map__1890784__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui1890786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__1890784,map__1890784__$1,state,logo_text,app_name,app_version){
return (function (_1890788){
var self__ = this;
var _1890788__$1 = this;
return self__.meta1890787;
});})(map__1890784,map__1890784__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui1890786.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui1890786.prototype.om$core$IRender$render$arity$1 = ((function (map__1890784,map__1890784__$1,state,logo_text,app_name,app_version){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.div.call(null,{"className": "top_component"},dynomics.space.ui.make_tools_palette_component.call(null,self__.state),(cljs.core.truth_(self__.logo_text)?om.dom.div.call(null,{"className": "logo"},self__.logo_text):null),(cljs.core.truth_(self__.app_name)?om.dom.div.call(null,{"className": "headertitle"},[cljs.core.str(self__.app_name),cljs.core.str(" "),cljs.core.str(self__.app_version)].join('')):null));
});})(map__1890784,map__1890784__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui1890786.getBasis = ((function (map__1890784,map__1890784__$1,state,logo_text,app_name,app_version){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-header-view","make-header-view",2348093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the top header"], null)),new cljs.core.Symbol(null,"p__1890778","p__1890778",606080027,null),new cljs.core.Symbol(null,"map__1890784","map__1890784",1292803885,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"meta1890787","meta1890787",-2040950306,null)], null);
});})(map__1890784,map__1890784__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui1890786.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui1890786.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui1890786";

dynomics.ui.ui.t_dynomics$ui$ui1890786.cljs$lang$ctorPrWriter = ((function (map__1890784,map__1890784__$1,state,logo_text,app_name,app_version){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.ui.ui/t_dynomics$ui$ui1890786");
});})(map__1890784,map__1890784__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui1890786 = ((function (map__1890784,map__1890784__$1,state,logo_text,app_name,app_version){
return (function dynomics$ui$ui$make_header_view_$___GT_t_dynomics$ui$ui1890786(make_header_view__$1,p__1890778__$1,map__1890784__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,meta1890787){
return (new dynomics.ui.ui.t_dynomics$ui$ui1890786(make_header_view__$1,p__1890778__$1,map__1890784__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,meta1890787));
});})(map__1890784,map__1890784__$1,state,logo_text,app_name,app_version))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui1890786(dynomics$ui$ui$make_header_view,p__1890778,map__1890784__$1,state,logo_text,app_name,app_version,null));
});
dynomics.ui.ui.evaluate = (function dynomics$ui$ui$evaluate(s,sexp,f){
return cljs.js.eval.call(null,cljs.js.empty_state.call(null),sexp,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),f);
});
dynomics.ui.ui.make_footer_view = (function dynomics$ui$ui$make_footer_view(p__1890789){
var map__1890799 = p__1890789;
var map__1890799__$1 = ((((!((map__1890799 == null)))?((((map__1890799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890799):map__1890799);
var state = map__1890799__$1;
var map__1890800 = cljs.core.get.call(null,map__1890799__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__1890800__$1 = ((((!((map__1890800 == null)))?((((map__1890800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890800):map__1890800);
var state_updates = cljs.core.get.call(null,map__1890800__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var map__1890801 = cljs.core.get.call(null,map__1890799__$1,new cljs.core.Keyword(null,"eval","eval",-1103567905));
var map__1890801__$1 = ((((!((map__1890801 == null)))?((((map__1890801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890801):map__1890801);
var last_result = cljs.core.get.call(null,map__1890801__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var last_exps = cljs.core.get.call(null,map__1890801__$1,new cljs.core.Keyword(null,"exps","exps",-877274249));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui1890805 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui1890805 = (function (make_footer_view,p__1890789,map__1890799,state,map__1890800,state_updates,map__1890801,last_result,last_exps,meta1890806){
this.make_footer_view = make_footer_view;
this.p__1890789 = p__1890789;
this.map__1890799 = map__1890799;
this.state = state;
this.map__1890800 = map__1890800;
this.state_updates = state_updates;
this.map__1890801 = map__1890801;
this.last_result = last_result;
this.last_exps = last_exps;
this.meta1890806 = meta1890806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui1890805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps){
return (function (_1890807,meta1890806__$1){
var self__ = this;
var _1890807__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui1890805(self__.make_footer_view,self__.p__1890789,self__.map__1890799,self__.state,self__.map__1890800,self__.state_updates,self__.map__1890801,self__.last_result,self__.last_exps,meta1890806__$1));
});})(map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui1890805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps){
return (function (_1890807){
var self__ = this;
var _1890807__$1 = this;
return self__.meta1890806;
});})(map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui1890805.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui1890805.prototype.om$core$IRender$render$arity$1 = ((function (map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps){
return (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.div.call(null,{"className": "bottom_component"},om.dom.input.call(null,{"className": "eval_input", "type": "text", "size": (64), "onKeyDown": ((function (this__38742__auto____$1,map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps){
return (function (e){
e.stopPropagation();

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"enter","enter",1792452624),dynomics.ui.ui.evt_to_keyword.call(null,e))){
var exps_1890808 = e.target.value;
dynomics.ui.ui.evaluate.call(null,self__.state,cljs.tools.reader.read_string.call(null,exps_1890808),((function (exps_1890808,this__38742__auto____$1,map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps){
return (function (result){
cljs.core.println.call(null,cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002)], null),result));

return cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (exps_1890808,this__38742__auto____$1,map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exps","exps",-877274249),exps_1890808,new cljs.core.Keyword(null,"result","result",1415092211),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))?cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002)], null)):result)], null));
});})(exps_1890808,this__38742__auto____$1,map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"description","description",-1428560544),"Evaluate"], null)], null));
});})(exps_1890808,this__38742__auto____$1,map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps))
);
} else {
}

return null;
});})(this__38742__auto____$1,map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps))
}),om.dom.div.call(null,{"className": "eval_result"},[cljs.core.str("> "),cljs.core.str(self__.last_result)].join('')));
});})(map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui1890805.getBasis = ((function (map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-footer-view","make-footer-view",-746293906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Keyword(null,"exps","exps",-877274249)], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__1890789","p__1890789",-1581990010,null),new cljs.core.Symbol(null,"map__1890799","map__1890799",-1955493715,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__1890800","map__1890800",-244814735,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"map__1890801","map__1890801",-547668278,null),new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Symbol(null,"meta1890806","meta1890806",-1620792009,null)], null);
});})(map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui1890805.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui1890805.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui1890805";

dynomics.ui.ui.t_dynomics$ui$ui1890805.cljs$lang$ctorPrWriter = ((function (map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps){
return (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.ui.ui/t_dynomics$ui$ui1890805");
});})(map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui1890805 = ((function (map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps){
return (function dynomics$ui$ui$make_footer_view_$___GT_t_dynomics$ui$ui1890805(make_footer_view__$1,p__1890789__$1,map__1890799__$2,state__$1,map__1890800__$2,state_updates__$1,map__1890801__$2,last_result__$1,last_exps__$1,meta1890806){
return (new dynomics.ui.ui.t_dynomics$ui$ui1890805(make_footer_view__$1,p__1890789__$1,map__1890799__$2,state__$1,map__1890800__$2,state_updates__$1,map__1890801__$2,last_result__$1,last_exps__$1,meta1890806));
});})(map__1890799,map__1890799__$1,state,map__1890800,map__1890800__$1,state_updates,map__1890801,map__1890801__$1,last_result,last_exps))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui1890805(dynomics$ui$ui$make_footer_view,p__1890789,map__1890799__$1,state,map__1890800__$1,state_updates,map__1890801__$1,last_result,last_exps,null));
});
dynomics.ui.ui.add_components = (function dynomics$ui$ui$add_components(state){
var seq__1890813_1890817 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null))))));
var chunk__1890814_1890818 = null;
var count__1890815_1890819 = (0);
var i__1890816_1890820 = (0);
while(true){
if((i__1890816_1890820 < count__1890815_1890819)){
var component_1890821 = cljs.core._nth.call(null,chunk__1890814_1890818,i__1890816_1890820);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_1890821);

var G__1890822 = seq__1890813_1890817;
var G__1890823 = chunk__1890814_1890818;
var G__1890824 = count__1890815_1890819;
var G__1890825 = (i__1890816_1890820 + (1));
seq__1890813_1890817 = G__1890822;
chunk__1890814_1890818 = G__1890823;
count__1890815_1890819 = G__1890824;
i__1890816_1890820 = G__1890825;
continue;
} else {
var temp__4425__auto___1890826 = cljs.core.seq.call(null,seq__1890813_1890817);
if(temp__4425__auto___1890826){
var seq__1890813_1890827__$1 = temp__4425__auto___1890826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1890813_1890827__$1)){
var c__24964__auto___1890828 = cljs.core.chunk_first.call(null,seq__1890813_1890827__$1);
var G__1890829 = cljs.core.chunk_rest.call(null,seq__1890813_1890827__$1);
var G__1890830 = c__24964__auto___1890828;
var G__1890831 = cljs.core.count.call(null,c__24964__auto___1890828);
var G__1890832 = (0);
seq__1890813_1890817 = G__1890829;
chunk__1890814_1890818 = G__1890830;
count__1890815_1890819 = G__1890831;
i__1890816_1890820 = G__1890832;
continue;
} else {
var component_1890833 = cljs.core.first.call(null,seq__1890813_1890827__$1);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_1890833);

var G__1890834 = cljs.core.next.call(null,seq__1890813_1890827__$1);
var G__1890835 = null;
var G__1890836 = (0);
var G__1890837 = (0);
seq__1890813_1890817 = G__1890834;
chunk__1890814_1890818 = G__1890835;
count__1890815_1890819 = G__1890836;
i__1890816_1890820 = G__1890837;
continue;
}
} else {
}
}
break;
}

return state;
});
dynomics.ui.ui.set_current_tool = (function dynomics$ui$ui$set_current_tool(tool_key,state){
cljs.core.println.call(null,"set current tool to ",tool_key);

return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null),tool_key);
});
dynomics.ui.ui.make_kb_path = (function dynomics$ui$ui$make_kb_path(kb){
if((kb instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),kb,kb], null);
} else {
return kb;
}
});
dynomics.ui.ui.add_keybindings = (function dynomics$ui$ui$add_keybindings(var_args){
var args1890838 = [];
var len__25219__auto___1890845 = arguments.length;
var i__25220__auto___1890846 = (0);
while(true){
if((i__25220__auto___1890846 < len__25219__auto___1890845)){
args1890838.push((arguments[i__25220__auto___1890846]));

var G__1890847 = (i__25220__auto___1890846 + (1));
i__25220__auto___1890846 = G__1890847;
continue;
} else {
}
break;
}

var G__1890840 = args1890838.length;
switch (G__1890840) {
case 1:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1890838.length)].join('')));

}
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.ui.add_keybindings.call(null,state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)));
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2 = (function (state,tools){
return cljs.core.reduce.call(null,(function (r,p__1890841){
var vec__1890842 = p__1890841;
var k = cljs.core.nth.call(null,vec__1890842,(0),null);
var map__1890843 = cljs.core.nth.call(null,vec__1890842,(1),null);
var map__1890843__$1 = ((((!((map__1890843 == null)))?((((map__1890843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890843):map__1890843);
var f = cljs.core.get.call(null,map__1890843__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var kb = cljs.core.get.call(null,map__1890843__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var naym = cljs.core.get.call(null,map__1890843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tools__$1 = cljs.core.get.call(null,map__1890843__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
if(cljs.core.truth_(f)){
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),((function (vec__1890842,k,map__1890843,map__1890843__$1,f,kb,naym,tools__$1){
return (function (s){
cljs.core.println.call(null,naym);

return f.call(null,s);
});})(vec__1890842,k,map__1890843,map__1890843__$1,f,kb,naym,tools__$1))
);
} else {
if(cljs.core.truth_(tools__$1)){
return dynomics.ui.ui.add_keybindings.call(null,r,tools__$1);
} else {
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),cljs.core.partial.call(null,dynomics.ui.ui.set_current_tool,k));
}
}
}),state,tools);
});

dynomics.ui.ui.add_keybindings.cljs$lang$maxFixedArity = 2;
dynomics.ui.ui.add_messaging = (function dynomics$ui$ui$add_messaging(s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"messaging","messaging",299215316),dynomics.ui.messaging.make_channels.call(null));
});
dynomics.ui.ui.add_browser_info = (function dynomics$ui$ui$add_browser_info(s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"screen","screen",1990059748)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),screen.availWidth,new cljs.core.Keyword(null,"height","height",1025178622),screen.availHeight], null));
});
dynomics.ui.ui.be_first = (function dynomics$ui$ui$be_first(s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"-start-"], null));
});
dynomics.ui.ui.select_node = (function dynomics$ui$ui$select_node(s,path,mp){
if(cljs.core.truth_(path)){
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),(function (sn){
if(cljs.core.truth_(sn.call(null,path))){
return cljs.core.disj.call(null,sn,path);
} else {
return cljs.core.conj.call(null,sn,path);
}
})),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"move-offset","move-offset",2091828833)),mp);
} else {
return s;
}
});
/**
 * 
 *   Returns the given state map with UI functions added.
 * 
 *   Each component is represented by a map with:
 * 
 *   * an id
 *   * a name
 *   * the name of the Om builder fn to make its UI component
 *   * a query of the state that returns everything the UI component will need
 *   * a subscriptions fn that returns a list of messages it wants of subscribe to
 * 
 *   and anything else it needs
 * 
 *   
 */
dynomics.ui.ui.add_functions = (function dynomics$ui$ui$add_functions(state){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"name","name",1843675177),"Header",new cljs.core.Keyword(null,"om-builder","om-builder",1876809590),dynomics.ui.ui.make_header_view,new cljs.core.Keyword(null,"query","query",-1288509510),(function (state__$1){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"app-name","app-name",-268811251),new cljs.core.Keyword(null,"app-name","app-name",-268811251).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"app-version","app-version",361554836),new cljs.core.Keyword(null,"app-version","app-version",361554836).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"dt","dt",-368444759).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null)),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648)], null)),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null))], null);
})], null),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"name","name",1843675177),"Dynamics",new cljs.core.Keyword(null,"om-builder","om-builder",1876809590),dynomics.space.ui.make_space_component,new cljs.core.Keyword(null,"query","query",-1288509510),(function (state__$1){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null)),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"space","space",348133475).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"cf","cf",1480736310),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null)),new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766)], null)),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673).cljs$core$IFn$_invoke$arity$1(state__$1)], null);
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),(function (p__1890892){
var map__1890893 = p__1890892;
var map__1890893__$1 = ((((!((map__1890893 == null)))?((((map__1890893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890893):map__1890893);
var map__1890894 = cljs.core.get.call(null,map__1890893__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__1890894__$1 = ((((!((map__1890894 == null)))?((((map__1890894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890894):map__1890894);
var state_updates = cljs.core.get.call(null,map__1890894__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__1890894__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var write_channel = cljs.core.get.call(null,map__1890894__$1,new cljs.core.Keyword(null,"write-channel","write-channel",977573273));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (p__1890897){
var map__1890898 = p__1890897;
var map__1890898__$1 = ((((!((map__1890898 == null)))?((((map__1890898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890898):map__1890898);
var vec__1890899 = cljs.core.get.call(null,map__1890898__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__1890899,(0),null);
var y = cljs.core.nth.call(null,vec__1890899,(1),null);
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__1890898,map__1890898__$1,vec__1890899,x,y,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (p__1890901){
var map__1890902 = p__1890901;
var map__1890902__$1 = ((((!((map__1890902 == null)))?((((map__1890902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890902):map__1890902);
var s = map__1890902__$1;
var map__1890903 = cljs.core.get.call(null,map__1890902__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__1890903__$1 = ((((!((map__1890903 == null)))?((((map__1890903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890903):map__1890903);
var space = map__1890903__$1;
var selected_nodes = cljs.core.get.call(null,map__1890903__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,((function (map__1890902,map__1890902__$1,s,map__1890903,map__1890903__$1,space,selected_nodes,map__1890898,map__1890898__$1,vec__1890899,x,y,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (r,path){
var tfn = ((((3) === cljs.core.count.call(null,path)))?((function (map__1890902,map__1890902__$1,s,map__1890903,map__1890903__$1,space,selected_nodes,map__1890898,map__1890898__$1,vec__1890899,x,y,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (p,_,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,p], null)], null);
});})(map__1890902,map__1890902__$1,s,map__1890903,map__1890903__$1,space,selected_nodes,map__1890898,map__1890898__$1,vec__1890899,x,y,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
:dynomics.space.core.mirror_node);
return cljs.core.reduce.call(null,((function (tfn,map__1890902,map__1890902__$1,s,map__1890903,map__1890903__$1,space,selected_nodes,map__1890898,map__1890898__$1,vec__1890899,x,y,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (r__$1,p__1890906){
var vec__1890907 = p__1890906;
var cpath = cljs.core.nth.call(null,vec__1890907,(0),null);
var cpoint = cljs.core.nth.call(null,vec__1890907,(1),null);
return cljs.core.assoc_in.call(null,r__$1,cljs.core.conj.call(null,cpath,new cljs.core.Keyword(null,"position","position",-2011731912)),cpoint);
});})(tfn,map__1890902,map__1890902__$1,s,map__1890903,map__1890903__$1,space,selected_nodes,map__1890898,map__1890898__$1,vec__1890899,x,y,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
,r,tfn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),path,space));
});})(map__1890902,map__1890902__$1,s,map__1890903,map__1890903__$1,space,selected_nodes,map__1890898,map__1890898__$1,vec__1890899,x,y,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
,s,selected_nodes);
});})(map__1890898,map__1890898__$1,vec__1890899,x,y,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (p__1890908){
var map__1890909 = p__1890908;
var map__1890909__$1 = ((((!((map__1890909 == null)))?((((map__1890909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890909):map__1890909);
var ss = map__1890909__$1;
var vec__1890910 = cljs.core.get.call(null,map__1890909__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__1890910,(0),null);
var y = cljs.core.nth.call(null,vec__1890910,(1),null);
var id = cljs.core.get.call(null,map__1890909__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__1890909__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Select node to move ",path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

if(cljs.core.truth_(path)){
dynomics.space.ui.disable_pan_zoom_BANG_.call(null,ss);
} else {
}

if(cljs.core.truth_(path)){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__1890909,map__1890909__$1,ss,vec__1890910,x,y,id,path,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (p__1890912){
var map__1890913 = p__1890912;
var map__1890913__$1 = ((((!((map__1890913 == null)))?((((map__1890913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890913):map__1890913);
var s = map__1890913__$1;
var map__1890914 = cljs.core.get.call(null,map__1890913__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__1890914__$1 = ((((!((map__1890914 == null)))?((((map__1890914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890914):map__1890914);
var selected_nodes = cljs.core.get.call(null,map__1890914__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.assoc_in.call(null,(cljs.core.truth_(path)?cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path):s),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"move-offset","move-offset",2091828833)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(map__1890909,map__1890909__$1,ss,vec__1890910,x,y,id,path,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null));
} else {
}

return null;
});})(map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (p__1890917){
var map__1890918 = p__1890917;
var map__1890918__$1 = ((((!((map__1890918 == null)))?((((map__1890918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890918):map__1890918);
var ss = map__1890918__$1;
var vec__1890919 = cljs.core.get.call(null,map__1890918__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__1890919,(0),null);
var y = cljs.core.nth.call(null,vec__1890919,(1),null);
var path = cljs.core.get.call(null,map__1890918__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Unselect node ",path);

dynomics.space.ui.enable_pan_zoom_BANG_.call(null,ss);

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__1890918,map__1890918__$1,ss,vec__1890919,x,y,path,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (s){
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.disj,path);
});})(map__1890918,map__1890918__$1,ss,vec__1890919,x,y,path,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"unselect","unselect",-1124322706),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Move "),cljs.core.str(cljs.core.get.call(null,path,(2))),cljs.core.str(":"),cljs.core.str(cljs.core.last.call(null,path))].join('')], null)], null));

return null;
});})(map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (p__1890921){
var map__1890922 = p__1890921;
var map__1890922__$1 = ((((!((map__1890922 == null)))?((((map__1890922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890922):map__1890922);
var vec__1890923 = cljs.core.get.call(null,map__1890922__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__1890923,(0),null);
var y = cljs.core.nth.call(null,vec__1890923,(1),null);
cljs.core.println.call(null,"Add node ");

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__1890922,map__1890922__$1,vec__1890923,x,y,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (s){
return dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});})(map__1890922,map__1890922__$1,vec__1890923,x,y,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Add node")].join('')], null)], null));

return null;
});})(map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (p__1890925){
var map__1890926 = p__1890925;
var map__1890926__$1 = ((((!((map__1890926 == null)))?((((map__1890926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890926):map__1890926);
var vec__1890927 = cljs.core.get.call(null,map__1890926__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__1890927,(0),null);
var y = cljs.core.nth.call(null,vec__1890927,(1),null);
var id = cljs.core.get.call(null,map__1890926__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__1890926__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Connect node ",path);

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__1890926,map__1890926__$1,vec__1890927,x,y,id,path,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (s){
return dynomics.space.core.make_connections.call(null,cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path));
});})(map__1890926,map__1890926__$1,vec__1890927,x,y,id,path,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Connect "),cljs.core.str(id)].join('')], null)], null));

return null;
});})(map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (p__1890929){
var map__1890930 = p__1890929;
var map__1890930__$1 = ((((!((map__1890930 == null)))?((((map__1890930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890930):map__1890930);
var mp = cljs.core.get.call(null,map__1890930__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__1890930__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Select node ",path);

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__1890930,map__1890930__$1,mp,path,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel){
return (function (s){
return dynomics.ui.ui.select_node.call(null,s,path,mp);
});})(map__1890930,map__1890930__$1,mp,path,map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null));

return null;
});})(map__1890893,map__1890893__$1,map__1890894,map__1890894__$1,state_updates,msgs,write_channel))
], null)], null);
}),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"load","load",-1318641184)], null),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load space",new cljs.core.Keyword(null,"description","description",-1428560544),"Restores the last saved space",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C3",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.get_state_BANG_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Remove selected",new cljs.core.Keyword(null,"description","description",-1428560544),"Removes selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2612",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.comp.call(null,dynomics.space.core.deselect_all,dynomics.space.core.remove_selected_nodes)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deselects all selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deselect_all], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Connect nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect nodes to make curves \u2312",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u223E",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Save space",new cljs.core.Keyword(null,"description","description",-1428560544),"Saves the space in your browser for later (sorry I will swap this icon for the familiar\n                                    floppy-disk icon when I find it",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.persist_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Node types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected nodes",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,p__1890932){
var map__1890933 = p__1890932;
var map__1890933__$1 = ((((!((map__1890933 == null)))?((((map__1890933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890933):map__1890933);
var id = cljs.core.get.call(null,map__1890933__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Node type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected nodes to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_node_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dynomics.space.core.node_types))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Select nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Select nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2A03",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"h","h",1109658740)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Move nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Move the selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2B09",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"f","f",-1597136552)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Add nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Add some nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"+",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"j","j",-1397974765)], null)])], null)], null));
});
dynomics.ui.ui.left_right_top_view = (function dynomics$ui$ui$left_right_top_view(state){
if(typeof dynomics.ui.ui.t_dynomics$ui$ui1890940 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui1890940 = (function (left_right_top_view,state,meta1890941){
this.left_right_top_view = left_right_top_view;
this.state = state;
this.meta1890941 = meta1890941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui1890940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1890942,meta1890941__$1){
var self__ = this;
var _1890942__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui1890940(self__.left_right_top_view,self__.state,meta1890941__$1));
});

dynomics.ui.ui.t_dynomics$ui$ui1890940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1890942){
var self__ = this;
var _1890942__$1 = this;
return self__.meta1890941;
});

dynomics.ui.ui.t_dynomics$ui$ui1890940.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui1890940.prototype.om$core$IRender$render$arity$1 = (function (this__38742__auto__){
var self__ = this;
var this__38742__auto____$1 = this;
return om.dom.div.call(null,{"className": "ui"},null,om.dom.div.call(null,{"className": "main_ui"},om.dom.div.call(null,{"className": "left_component"},om.core.build.call(null,dynomics.ui.ui.make_function_selector_view,self__.state),om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)),om.core.build.call(null,dynomics.ui.ui.make_history_selector_view,self__.state)),om.dom.div.call(null,{"className": "right_component selectable"},cljs.core.map.call(null,((function (this__38742__auto____$1){
return (function (p__1890943){
var vec__1890944 = p__1890943;
var id = cljs.core.nth.call(null,vec__1890944,(0),null);
var component = cljs.core.nth.call(null,vec__1890944,(1),null);
return om.core.build.call(null,new cljs.core.Keyword(null,"om-builder","om-builder",1876809590).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(component).call(null,self__.state));
});})(this__38742__auto____$1))
,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"om-builder","om-builder",1876809590)),cljs.core.val),cljs.core.dissoc.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220)))))),om.core.build.call(null,dynomics.ui.ui.make_header_view,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)));
});

dynomics.ui.ui.t_dynomics$ui$ui1890940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"left-right-top-view","left-right-top-view",150328751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta1890941","meta1890941",613700179,null)], null);
});

dynomics.ui.ui.t_dynomics$ui$ui1890940.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui1890940.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui1890940";

dynomics.ui.ui.t_dynomics$ui$ui1890940.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.ui.ui/t_dynomics$ui$ui1890940");
});

dynomics.ui.ui.__GT_t_dynomics$ui$ui1890940 = (function dynomics$ui$ui$left_right_top_view_$___GT_t_dynomics$ui$ui1890940(left_right_top_view__$1,state__$1,meta1890941){
return (new dynomics.ui.ui.t_dynomics$ui$ui1890940(left_right_top_view__$1,state__$1,meta1890941));
});

}

return (new dynomics.ui.ui.t_dynomics$ui$ui1890940(dynomics$ui$ui$left_right_top_view,state,null));
});
dynomics.ui.ui.main_view = (function dynomics$ui$ui$main_view(){
return (function (state,owner){
if(typeof dynomics.ui.ui.t_dynomics$ui$ui1890952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui1890952 = (function (main_view,state,owner,meta1890953){
this.main_view = main_view;
this.state = state;
this.owner = owner;
this.meta1890953 = meta1890953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui1890952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_1890954,meta1890953__$1){
var self__ = this;
var _1890954__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui1890952(self__.main_view,self__.state,self__.owner,meta1890953__$1));
});

dynomics.ui.ui.t_dynomics$ui$ui1890952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_1890954){
var self__ = this;
var _1890954__$1 = this;
return self__.meta1890953;
});

dynomics.ui.ui.t_dynomics$ui$ui1890952.prototype.om$core$IWillMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui1890952.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null));

dynomics.ui.ui.add_events_BANG_.call(null,self__.state);

return dynomics.ui.messaging.setup_updates.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),((function (___$1){
return (function (p__1890955){
var map__1890956 = p__1890955;
var map__1890956__$1 = ((((!((map__1890956 == null)))?((((map__1890956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1890956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1890956):map__1890956);
var f = cljs.core.get.call(null,map__1890956__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var a = cljs.core.get.call(null,map__1890956__$1,new cljs.core.Keyword(null,"action","action",-811238024));
try{return om.core.transact_BANG_.call(null,self__.state,((function (map__1890956,map__1890956__$1,f,a,___$1){
return (function (s){
var ss = dynomics.ui.core.update_state.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"action","action",-811238024),(function (){var or__24161__auto__ = a;
if(cljs.core.truth_(or__24161__auto__)){
return or__24161__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.PersistentArrayMap.EMPTY,f);
if(cljs.core.truth_(a)){
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null)),a);
} else {
}

return ss;
});})(map__1890956,map__1890956__$1,f,a,___$1))
);
}catch (e1890958){if((e1890958 instanceof Error)){
var e = e1890958;
return cljs.core.println.call(null,e);
} else {
throw e1890958;

}
}});})(___$1))
);
});

dynomics.ui.ui.t_dynomics$ui$ui1890952.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui1890952.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,dynomics.ui.ui.left_right_top_view,self__.state);
});

dynomics.ui.ui.t_dynomics$ui$ui1890952.prototype.om$core$IDidMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui1890952.prototype.om$core$IDidMount$did_mount$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
return om.core.transact_BANG_.call(null,self__.state,((function (it__$1){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),dynomics.space.ui.add_pan_zoom_BANG_.call(null));
});})(it__$1))
);
});

dynomics.ui.ui.t_dynomics$ui$ui1890952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta1890953","meta1890953",1774407789,null)], null);
});

dynomics.ui.ui.t_dynomics$ui$ui1890952.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui1890952.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui1890952";

dynomics.ui.ui.t_dynomics$ui$ui1890952.cljs$lang$ctorPrWriter = (function (this__24759__auto__,writer__24760__auto__,opt__24761__auto__){
return cljs.core._write.call(null,writer__24760__auto__,"dynomics.ui.ui/t_dynomics$ui$ui1890952");
});

dynomics.ui.ui.__GT_t_dynomics$ui$ui1890952 = (function dynomics$ui$ui$main_view_$___GT_t_dynomics$ui$ui1890952(main_view__$1,state__$1,owner__$1,meta1890953){
return (new dynomics.ui.ui.t_dynomics$ui$ui1890952(main_view__$1,state__$1,owner__$1,meta1890953));
});

}

return (new dynomics.ui.ui.t_dynomics$ui$ui1890952(dynomics$ui$ui$main_view,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Start the application!
 */
dynomics.ui.ui.start = (function dynomics$ui$ui$start(var_args){
var args1890959 = [];
var len__25219__auto___1890962 = arguments.length;
var i__25220__auto___1890963 = (0);
while(true){
if((i__25220__auto___1890963 < len__25219__auto___1890962)){
args1890959.push((arguments[i__25220__auto___1890963]));

var G__1890964 = (i__25220__auto___1890963 + (1));
i__25220__auto___1890963 = G__1890964;
continue;
} else {
}
break;
}

var G__1890961 = args1890959.length;
switch (G__1890961) {
case 0:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args1890959.length)].join('')));

}
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.ui.ui.start.call(null,dynomics.ui.ui.add_components.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.add_functions.call(null,dynomics.ui.ui.add_messaging.call(null,dynomics.ui.ui.add_browser_info.call(null,dynomics.ui.core.make_state.call(null)))))));
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1 = (function (state){
return om.core.root.call(null,dynomics.ui.ui.main_view.call(null),state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.body], null));
});

dynomics.ui.ui.start.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=ui.js.map