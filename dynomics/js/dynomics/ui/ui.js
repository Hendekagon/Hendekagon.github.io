// Compiled by ClojureScript 1.8.40 {}
goog.provide('dynomics.ui.ui');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('garden.types');
goog.require('om.dom');
goog.require('dynomics.ui.persistence');
goog.require('dynomics.ui.css');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('dommy.core');
goog.require('dynomics.ui.core');
goog.require('dynomics.space.core');
goog.require('garden.color');
goog.require('dynomics.ui.svg');
goog.require('sablono.core');
goog.require('dynomics.ui.messaging');
goog.require('om.core');
goog.require('dynomics.space.ui');
goog.require('goog.style');
goog.require('cljs.core.match');
goog.require('garden.core');
cljs.core.enable_console_print_BANG_.call(null);
dynomics.ui.ui.animation_frame = (function (){var or__35422__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
var or__35422__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__35422__auto____$1)){
return or__35422__auto____$1;
} else {
var or__35422__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__35422__auto____$2)){
return or__35422__auto____$2;
} else {
var or__35422__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__35422__auto____$3)){
return or__35422__auto____$3;
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
dynomics.ui.ui.keydown = (function dynomics$ui$ui$keydown(p__93474,e){
var map__93479 = p__93474;
var map__93479__$1 = ((((!((map__93479 == null)))?((((map__93479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93479):map__93479);
var state = map__93479__$1;
var map__93480 = cljs.core.get.call(null,map__93479__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__93480__$1 = ((((!((map__93480 == null)))?((((map__93480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93480):map__93480);
var msgs = cljs.core.get.call(null,map__93480__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
return cljs.core.async.put_BANG_.call(null,msgs,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
dynomics.ui.ui.keyup = (function dynomics$ui$ui$keyup(p__93483,e){
var map__93488 = p__93483;
var map__93488__$1 = ((((!((map__93488 == null)))?((((map__93488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93488):map__93488);
var state = map__93488__$1;
var map__93489 = cljs.core.get.call(null,map__93488__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__93489__$1 = ((((!((map__93489 == null)))?((((map__93489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93489):map__93489);
var msgs = cljs.core.get.call(null,map__93489__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
return cljs.core.async.put_BANG_.call(null,msgs,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keyup","keyup",-794526927),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
dynomics.ui.ui.evt_to_keyword = (function dynomics$ui$ui$evt_to_keyword(e){
return dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode);
});
dynomics.ui.ui.add_events_BANG_ = (function dynomics$ui$ui$add_events_BANG_(state){
window.onkeydown = (function (e){
e.preventDefault();

dynomics.ui.ui.keydown.call(null,state,e);

return null;
});

window.onkeyup = (function (e){
dynomics.ui.ui.keyup.call(null,state,e);

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
if(typeof dynomics.ui.ui.t_dynomics$ui$ui93499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui93499 = (function (make_function_selector_view,state,owner,functions,state_updates,meta93500){
this.make_function_selector_view = make_function_selector_view;
this.state = state;
this.owner = owner;
this.functions = functions;
this.state_updates = state_updates;
this.meta93500 = meta93500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui93499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (functions,state_updates){
return (function (_93501,meta93500__$1){
var self__ = this;
var _93501__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui93499(self__.make_function_selector_view,self__.state,self__.owner,self__.functions,self__.state_updates,meta93500__$1));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui93499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (functions,state_updates){
return (function (_93501){
var self__ = this;
var _93501__$1 = this;
return self__.meta93500;
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui93499.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui93499.prototype.om$core$IRender$render$arity$1 = ((function (functions,state_updates){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.div.call(null,{"className": "function_selector"},cljs.core.map.call(null,((function (this__44714__auto____$1,functions,state_updates){
return (function (p__93502){
var vec__93503 = p__93502;
var k = cljs.core.nth.call(null,vec__93503,(0),null);
var map__93504 = cljs.core.nth.call(null,vec__93503,(1),null);
var map__93504__$1 = ((((!((map__93504 == null)))?((((map__93504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93504):map__93504);
var naym = cljs.core.get.call(null,map__93504__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__93504__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return om.dom.div.call(null,{"className": "function_selector_item", "id": [cljs.core.str(cljs.core.name.call(null,k))].join(''), "onClick": ((function (vec__93503,k,map__93504,map__93504__$1,naym,description,this__44714__auto____$1,functions,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__93503,k,map__93504,map__93504__$1,naym,description,this__44714__auto____$1,functions,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null),k);
});})(vec__93503,k,map__93504,map__93504__$1,naym,description,this__44714__auto____$1,functions,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"description","description",-1428560544),naym], null)], null));

return null;
});})(vec__93503,k,map__93504,map__93504__$1,naym,description,this__44714__auto____$1,functions,state_updates))
},naym);
});})(this__44714__auto____$1,functions,state_updates))
,self__.functions));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui93499.getBasis = ((function (functions,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-function-selector-view","make-function-selector-view",516344898,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for selecting the current function"], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"functions","functions",1825482993,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta93500","meta93500",54562154,null)], null);
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui93499.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui93499.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui93499";

dynomics.ui.ui.t_dynomics$ui$ui93499.cljs$lang$ctorPrWriter = ((function (functions,state_updates){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui93499");
});})(functions,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui93499 = ((function (functions,state_updates){
return (function dynomics$ui$ui$make_function_selector_view_$___GT_t_dynomics$ui$ui93499(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta93500){
return (new dynomics.ui.ui.t_dynomics$ui$ui93499(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta93500));
});})(functions,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui93499(dynomics$ui$ui$make_function_selector_view,state,owner,functions,state_updates,null));
});
/**
 * Return a component to display a list
 *   of historical states which select a historical
 *   state on mouseover
 */
dynomics.ui.ui.make_history_selector_view = (function dynomics$ui$ui$make_history_selector_view(p__93506,owner){
var map__93517 = p__93506;
var map__93517__$1 = ((((!((map__93517 == null)))?((((map__93517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93517):map__93517);
var state = map__93517__$1;
var map__93518 = cljs.core.get.call(null,map__93517__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__93518__$1 = ((((!((map__93518 == null)))?((((map__93518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93518):map__93518);
var state_updates = cljs.core.get.call(null,map__93518__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var sh = cljs.core.get.call(null,map__93517__$1,new cljs.core.Keyword(null,"show-history","show-history",1972567130));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui93521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui93521 = (function (make_history_selector_view,p__93506,owner,map__93517,state,map__93518,state_updates,sh,meta93522){
this.make_history_selector_view = make_history_selector_view;
this.p__93506 = p__93506;
this.owner = owner;
this.map__93517 = map__93517;
this.state = state;
this.map__93518 = map__93518;
this.state_updates = state_updates;
this.sh = sh;
this.meta93522 = meta93522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui93521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (_93523,meta93522__$1){
var self__ = this;
var _93523__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui93521(self__.make_history_selector_view,self__.p__93506,self__.owner,self__.map__93517,self__.state,self__.map__93518,self__.state_updates,self__.sh,meta93522__$1));
});})(map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui93521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (_93523){
var self__ = this;
var _93523__$1 = this;
return self__.meta93522;
});})(map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui93521.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui93521.prototype.om$core$IRender$render$arity$1 = ((function (map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.div.call(null,{"className": "history_selector", "onClick": ((function (this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (e){
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.update_in.call(null,s__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),cljs.core.not);
});})(this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
], null);
});})(this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
);
});})(this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
},om.dom.div.call(null,{"className": "history_selector_text"},"History"),om.dom.div.call(null,{"className": (cljs.core.truth_(self__.sh)?"history_selector_visible":"history_selector_hidden")},cljs.core.map.call(null,((function (this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (p__93524){
var map__93525 = p__93524;
var map__93525__$1 = ((((!((map__93525 == null)))?((((map__93525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93525):map__93525);
var history_item = map__93525__$1;
var action = cljs.core.get.call(null,map__93525__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var version = cljs.core.get.call(null,map__93525__$1,new cljs.core.Keyword(null,"version","version",425292698));
var previous_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)) - (1))));
var previous_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)));
return om.dom.div.call(null,{"className": [cljs.core.str("history_selector_item "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_action)))?"historical":""))].join(''), "id": [cljs.core.str("history_version_"),cljs.core.str(previous_version)].join(''), "onMouseOver": ((function (previous_action,previous_version,map__93525,map__93525__$1,history_item,action,version,this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (previous_action,previous_version,map__93525,map__93525__$1,history_item,action,version,this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (previous_action,previous_version,map__93525,map__93525__$1,history_item,action,version,this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.merge.call(null,om.core.value.call(null,history_item),cljs.core.select_keys.call(null,s__$1,cljs.core.conj.call(null,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(s__$1),new cljs.core.Keyword(null,"history","history",-247395220))));
});})(previous_action,previous_version,map__93525,map__93525__$1,history_item,action,version,this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desccription","desccription",-1060114044),[cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action))].join(''),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"id","id",-1388402092),version], null)], null);
});})(previous_action,previous_version,map__93525,map__93525__$1,history_item,action,version,this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
);

return null;
});})(previous_action,previous_version,map__93525,map__93525__$1,history_item,action,version,this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action));
});})(this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
,cljs.core.filter.call(null,((function (this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (hi){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi)) - (1)))));
});})(this__44714__auto____$1,map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
,cljs.core.reverse.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.state),self__.state))))));
});})(map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui93521.getBasis = ((function (map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-history-selector-view","make-history-selector-view",1677763159,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Keyword(null,"show-history","show-history",1972567130),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a component to display a list\n  of historical states which select a historical\n  state on mouseover"], null)),new cljs.core.Symbol(null,"p__93506","p__93506",74277130,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__93517","map__93517",493189656,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__93518","map__93518",-1370446693,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Symbol(null,"meta93522","meta93522",721158736,null)], null);
});})(map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui93521.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui93521.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui93521";

dynomics.ui.ui.t_dynomics$ui$ui93521.cljs$lang$ctorPrWriter = ((function (map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui93521");
});})(map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui93521 = ((function (map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh){
return (function dynomics$ui$ui$make_history_selector_view_$___GT_t_dynomics$ui$ui93521(make_history_selector_view__$1,p__93506__$1,owner__$1,map__93517__$2,state__$1,map__93518__$2,state_updates__$1,sh__$1,meta93522){
return (new dynomics.ui.ui.t_dynomics$ui$ui93521(make_history_selector_view__$1,p__93506__$1,owner__$1,map__93517__$2,state__$1,map__93518__$2,state_updates__$1,sh__$1,meta93522));
});})(map__93517,map__93517__$1,state,map__93518,map__93518__$1,state_updates,sh))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui93521(dynomics$ui$ui$make_history_selector_view,p__93506,owner,map__93517__$1,state,map__93518__$1,state_updates,sh,null));
});
dynomics.ui.ui.make_context_menu = (function dynomics$ui$ui$make_context_menu(p__93527){
var map__93540 = p__93527;
var map__93540__$1 = ((((!((map__93540 == null)))?((((map__93540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93540):map__93540);
var map__93541 = cljs.core.get.call(null,map__93540__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__93541__$1 = ((((!((map__93541 == null)))?((((map__93541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93541):map__93541);
var vec__93542 = cljs.core.get.call(null,map__93541__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__93542,(0),null);
var y = cljs.core.nth.call(null,vec__93542,(1),null);
var o = cljs.core.get.call(null,map__93541__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var options = cljs.core.get.call(null,map__93541__$1,new cljs.core.Keyword(null,"options","options",99638489));
var msgs = cljs.core.get.call(null,map__93540__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui93545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui93545 = (function (options,x,vec__93542,y,map__93541,map__93540,o,msgs,make_context_menu,p__93527,meta93546){
this.options = options;
this.x = x;
this.vec__93542 = vec__93542;
this.y = y;
this.map__93541 = map__93541;
this.map__93540 = map__93540;
this.o = o;
this.msgs = msgs;
this.make_context_menu = make_context_menu;
this.p__93527 = p__93527;
this.meta93546 = meta93546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui93545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs){
return (function (_93547,meta93546__$1){
var self__ = this;
var _93547__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui93545(self__.options,self__.x,self__.vec__93542,self__.y,self__.map__93541,self__.map__93540,self__.o,self__.msgs,self__.make_context_menu,self__.p__93527,meta93546__$1));
});})(map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui93545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs){
return (function (_93547){
var self__ = this;
var _93547__$1 = this;
return self__.meta93546;
});})(map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui93545.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui93545.prototype.om$core$IRender$render$arity$1 = ((function (map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return React.createElement("div",{"style": {"transform": [cljs.core.str("translate("),cljs.core.str(self__.x),cljs.core.str("px,"),cljs.core.str(self__.y),cljs.core.str("px)")].join('')}, "id": "context-menu", "className": "context_menu", "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseLeave": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY)},React.createElement("div",{"className": "context_menu_title"},sablono.interpreter.interpret.call(null,[cljs.core.str("Options for "),cljs.core.str(cljs.core.name.call(null,self__.o))].join(''))),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (this__44714__auto____$1,map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs){
return (function (p__93548){
var vec__93549 = p__93548;
var k = cljs.core.nth.call(null,vec__93549,(0),null);
var map__93550 = cljs.core.nth.call(null,vec__93549,(1),null);
var map__93550__$1 = ((((!((map__93550 == null)))?((((map__93550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93550):map__93550);
var naym = cljs.core.get.call(null,map__93550__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kb = cljs.core.get.call(null,map__93550__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var f = cljs.core.get.call(null,map__93550__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"context_menu_option",new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),k], null),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),f], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(naym),cljs.core.str("  ")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"keyboard_shortcut"], null),[cljs.core.str(kb)].join('')], null)], null);
});})(this__44714__auto____$1,map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs))
,self__.options)));
});})(map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui93545.getBasis = ((function (map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"vec__93542","vec__93542",-568978364,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"map__93541","map__93541",670584457,null),new cljs.core.Symbol(null,"map__93540","map__93540",-1116092182,null),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-context-menu","make-context-menu",-526000036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"options","options",99638489)], true, false),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__93527","p__93527",-371258753,null),new cljs.core.Symbol(null,"meta93546","meta93546",2100395627,null)], null);
});})(map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui93545.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui93545.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui93545";

dynomics.ui.ui.t_dynomics$ui$ui93545.cljs$lang$ctorPrWriter = ((function (map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui93545");
});})(map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui93545 = ((function (map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs){
return (function dynomics$ui$ui$make_context_menu_$___GT_t_dynomics$ui$ui93545(options__$1,x__$1,vec__93542__$1,y__$1,map__93541__$2,map__93540__$2,o__$1,msgs__$1,make_context_menu__$1,p__93527__$1,meta93546){
return (new dynomics.ui.ui.t_dynomics$ui$ui93545(options__$1,x__$1,vec__93542__$1,y__$1,map__93541__$2,map__93540__$2,o__$1,msgs__$1,make_context_menu__$1,p__93527__$1,meta93546));
});})(map__93540,map__93540__$1,map__93541,map__93541__$1,vec__93542,x,y,o,options,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui93545(options,x,vec__93542,y,map__93541__$1,map__93540__$1,o,msgs,dynomics$ui$ui$make_context_menu,p__93527,null));
});
/**
 * Returns a component for the top header
 */
dynomics.ui.ui.make_header_view = (function dynomics$ui$ui$make_header_view(p__93552){
var map__93558 = p__93552;
var map__93558__$1 = ((((!((map__93558 == null)))?((((map__93558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93558):map__93558);
var state = map__93558__$1;
var logo_text = cljs.core.get.call(null,map__93558__$1,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
var app_name = cljs.core.get.call(null,map__93558__$1,new cljs.core.Keyword(null,"app-name","app-name",-268811251));
var app_version = cljs.core.get.call(null,map__93558__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
var state_version = cljs.core.get.call(null,map__93558__$1,new cljs.core.Keyword(null,"state-version","state-version",1282692697));
var action = cljs.core.get.call(null,map__93558__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui93560 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui93560 = (function (make_header_view,p__93552,map__93558,state,logo_text,app_name,app_version,state_version,action,meta93561){
this.make_header_view = make_header_view;
this.p__93552 = p__93552;
this.map__93558 = map__93558;
this.state = state;
this.logo_text = logo_text;
this.app_name = app_name;
this.app_version = app_version;
this.state_version = state_version;
this.action = action;
this.meta93561 = meta93561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui93560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93558,map__93558__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_93562,meta93561__$1){
var self__ = this;
var _93562__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui93560(self__.make_header_view,self__.p__93552,self__.map__93558,self__.state,self__.logo_text,self__.app_name,self__.app_version,self__.state_version,self__.action,meta93561__$1));
});})(map__93558,map__93558__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui93560.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93558,map__93558__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_93562){
var self__ = this;
var _93562__$1 = this;
return self__.meta93561;
});})(map__93558,map__93558__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui93560.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui93560.prototype.om$core$IRender$render$arity$1 = ((function (map__93558,map__93558__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.div.call(null,{"className": "top_component"},null,null);
});})(map__93558,map__93558__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui93560.getBasis = ((function (map__93558,map__93558__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-header-view","make-header-view",2348093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the top header"], null)),new cljs.core.Symbol(null,"p__93552","p__93552",1410900253,null),new cljs.core.Symbol(null,"map__93558","map__93558",-554609055,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Symbol(null,"meta93561","meta93561",2119452254,null)], null);
});})(map__93558,map__93558__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui93560.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui93560.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui93560";

dynomics.ui.ui.t_dynomics$ui$ui93560.cljs$lang$ctorPrWriter = ((function (map__93558,map__93558__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui93560");
});})(map__93558,map__93558__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui93560 = ((function (map__93558,map__93558__$1,state,logo_text,app_name,app_version,state_version,action){
return (function dynomics$ui$ui$make_header_view_$___GT_t_dynomics$ui$ui93560(make_header_view__$1,p__93552__$1,map__93558__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta93561){
return (new dynomics.ui.ui.t_dynomics$ui$ui93560(make_header_view__$1,p__93552__$1,map__93558__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta93561));
});})(map__93558,map__93558__$1,state,logo_text,app_name,app_version,state_version,action))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui93560(dynomics$ui$ui$make_header_view,p__93552,map__93558__$1,state,logo_text,app_name,app_version,state_version,action,null));
});
dynomics.ui.ui.evaluate = (function dynomics$ui$ui$evaluate(s,sexp,f){
return null;
});
dynomics.ui.ui.make_footer_view = (function dynomics$ui$ui$make_footer_view(p__93563){
var map__93573 = p__93563;
var map__93573__$1 = ((((!((map__93573 == null)))?((((map__93573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93573):map__93573);
var state = map__93573__$1;
var map__93574 = cljs.core.get.call(null,map__93573__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__93574__$1 = ((((!((map__93574 == null)))?((((map__93574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93574):map__93574);
var state_updates = cljs.core.get.call(null,map__93574__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var map__93575 = cljs.core.get.call(null,map__93573__$1,new cljs.core.Keyword(null,"eval","eval",-1103567905));
var map__93575__$1 = ((((!((map__93575 == null)))?((((map__93575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93575):map__93575);
var last_result = cljs.core.get.call(null,map__93575__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var last_exps = cljs.core.get.call(null,map__93575__$1,new cljs.core.Keyword(null,"exps","exps",-877274249));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui93579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui93579 = (function (make_footer_view,p__93563,map__93573,state,map__93574,state_updates,map__93575,last_result,last_exps,meta93580){
this.make_footer_view = make_footer_view;
this.p__93563 = p__93563;
this.map__93573 = map__93573;
this.state = state;
this.map__93574 = map__93574;
this.state_updates = state_updates;
this.map__93575 = map__93575;
this.last_result = last_result;
this.last_exps = last_exps;
this.meta93580 = meta93580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui93579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps){
return (function (_93581,meta93580__$1){
var self__ = this;
var _93581__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui93579(self__.make_footer_view,self__.p__93563,self__.map__93573,self__.state,self__.map__93574,self__.state_updates,self__.map__93575,self__.last_result,self__.last_exps,meta93580__$1));
});})(map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui93579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps){
return (function (_93581){
var self__ = this;
var _93581__$1 = this;
return self__.meta93580;
});})(map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui93579.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui93579.prototype.om$core$IRender$render$arity$1 = ((function (map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.div.call(null,{"className": "bottom_component"},om.dom.input.call(null,{"className": "eval_input", "type": "text", "size": (64), "onKeyDown": ((function (this__44714__auto____$1,map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps){
return (function (e){
e.stopPropagation();


return null;
});})(this__44714__auto____$1,map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps))
}),om.dom.div.call(null,{"className": "eval_result"},[cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.last_result))].join('')));
});})(map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui93579.getBasis = ((function (map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-footer-view","make-footer-view",-746293906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Keyword(null,"exps","exps",-877274249)], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__93563","p__93563",-1154061200,null),new cljs.core.Symbol(null,"map__93573","map__93573",-1451772279,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__93574","map__93574",401596443,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"map__93575","map__93575",-1957729020,null),new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Symbol(null,"meta93580","meta93580",1854041526,null)], null);
});})(map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui93579.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui93579.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui93579";

dynomics.ui.ui.t_dynomics$ui$ui93579.cljs$lang$ctorPrWriter = ((function (map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui93579");
});})(map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui93579 = ((function (map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps){
return (function dynomics$ui$ui$make_footer_view_$___GT_t_dynomics$ui$ui93579(make_footer_view__$1,p__93563__$1,map__93573__$2,state__$1,map__93574__$2,state_updates__$1,map__93575__$2,last_result__$1,last_exps__$1,meta93580){
return (new dynomics.ui.ui.t_dynomics$ui$ui93579(make_footer_view__$1,p__93563__$1,map__93573__$2,state__$1,map__93574__$2,state_updates__$1,map__93575__$2,last_result__$1,last_exps__$1,meta93580));
});})(map__93573,map__93573__$1,state,map__93574,map__93574__$1,state_updates,map__93575,map__93575__$1,last_result,last_exps))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui93579(dynomics$ui$ui$make_footer_view,p__93563,map__93573__$1,state,map__93574__$1,state_updates,map__93575__$1,last_result,last_exps,null));
});
dynomics.ui.ui.add_components = (function dynomics$ui$ui$add_components(state){
var seq__93586_93590 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null))))));
var chunk__93587_93591 = null;
var count__93588_93592 = (0);
var i__93589_93593 = (0);
while(true){
if((i__93589_93593 < count__93588_93592)){
var component_93594 = cljs.core._nth.call(null,chunk__93587_93591,i__93589_93593);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_93594);

var G__93595 = seq__93586_93590;
var G__93596 = chunk__93587_93591;
var G__93597 = count__93588_93592;
var G__93598 = (i__93589_93593 + (1));
seq__93586_93590 = G__93595;
chunk__93587_93591 = G__93596;
count__93588_93592 = G__93597;
i__93589_93593 = G__93598;
continue;
} else {
var temp__4657__auto___93599 = cljs.core.seq.call(null,seq__93586_93590);
if(temp__4657__auto___93599){
var seq__93586_93600__$1 = temp__4657__auto___93599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__93586_93600__$1)){
var c__36233__auto___93601 = cljs.core.chunk_first.call(null,seq__93586_93600__$1);
var G__93602 = cljs.core.chunk_rest.call(null,seq__93586_93600__$1);
var G__93603 = c__36233__auto___93601;
var G__93604 = cljs.core.count.call(null,c__36233__auto___93601);
var G__93605 = (0);
seq__93586_93590 = G__93602;
chunk__93587_93591 = G__93603;
count__93588_93592 = G__93604;
i__93589_93593 = G__93605;
continue;
} else {
var component_93606 = cljs.core.first.call(null,seq__93586_93600__$1);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_93606);

var G__93607 = cljs.core.next.call(null,seq__93586_93600__$1);
var G__93608 = null;
var G__93609 = (0);
var G__93610 = (0);
seq__93586_93590 = G__93607;
chunk__93587_93591 = G__93608;
count__93588_93592 = G__93609;
i__93589_93593 = G__93610;
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
var args93611 = [];
var len__36491__auto___93618 = arguments.length;
var i__36492__auto___93619 = (0);
while(true){
if((i__36492__auto___93619 < len__36491__auto___93618)){
args93611.push((arguments[i__36492__auto___93619]));

var G__93620 = (i__36492__auto___93619 + (1));
i__36492__auto___93619 = G__93620;
continue;
} else {
}
break;
}

var G__93613 = args93611.length;
switch (G__93613) {
case 1:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args93611.length)].join('')));

}
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.ui.add_keybindings.call(null,state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)));
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2 = (function (state,tools){
return cljs.core.reduce.call(null,(function (r,p__93614){
var vec__93615 = p__93614;
var k = cljs.core.nth.call(null,vec__93615,(0),null);
var map__93616 = cljs.core.nth.call(null,vec__93615,(1),null);
var map__93616__$1 = ((((!((map__93616 == null)))?((((map__93616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93616):map__93616);
var f = cljs.core.get.call(null,map__93616__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var kb = cljs.core.get.call(null,map__93616__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var naym = cljs.core.get.call(null,map__93616__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tools__$1 = cljs.core.get.call(null,map__93616__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
if(cljs.core.truth_(f)){
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),((function (vec__93615,k,map__93616,map__93616__$1,f,kb,naym,tools__$1){
return (function (s){
cljs.core.println.call(null,naym);

return ((cljs.core.delay_QMARK_.call(null,f))?cljs.core.deref.call(null,f):f).call(null,s);
});})(vec__93615,k,map__93616,map__93616__$1,f,kb,naym,tools__$1))
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
/**
 * Returns the given state with the
 *   selected-nodes' positions saved
 *   to use for move offsets
 */
dynomics.ui.ui.where_they_were = (function dynomics$ui$ui$where_they_were(p__93622){
var map__93627 = p__93622;
var map__93627__$1 = ((((!((map__93627 == null)))?((((map__93627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93627):map__93627);
var state = map__93627__$1;
var map__93628 = cljs.core.get.call(null,map__93627__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__93628__$1 = ((((!((map__93628 == null)))?((((map__93628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93628):map__93628);
var space = map__93628__$1;
var selected_nodes = cljs.core.get.call(null,map__93628__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,((function (map__93627,map__93627__$1,state,map__93628,map__93628__$1,space,selected_nodes){
return (function (s,path){
return cljs.core.assoc_in.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))));
});})(map__93627,map__93627__$1,state,map__93628,map__93628__$1,space,selected_nodes))
,state,cljs.core.remove.call(null,cljs.core.nil_QMARK_,selected_nodes));
});
dynomics.ui.ui.relative_to_cursor = (function dynomics$ui$ui$relative_to_cursor(var_args){
var args93631 = [];
var len__36491__auto___93634 = arguments.length;
var i__36492__auto___93635 = (0);
while(true){
if((i__36492__auto___93635 < len__36491__auto___93634)){
args93631.push((arguments[i__36492__auto___93635]));

var G__93636 = (i__36492__auto___93635 + (1));
i__36492__auto___93635 = G__93636;
continue;
} else {
}
break;
}

var G__93633 = args93631.length;
switch (G__93633) {
case 3:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args93631.length)].join('')));

}
});

dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (p,pth,state){
return dynomics.ui.ui.relative_to_cursor.call(null,p,pth,cljs.core.get_in.call(null,state,cljs.core.conj.call(null,pth,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089).cljs$core$IFn$_invoke$arity$1(state));
});

dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4 = (function (p,pth,pws,pasom){
return cljs.core.map.call(null,cljs.core._PLUS_,p,cljs.core.map.call(null,cljs.core._,pws,pasom));
});

dynomics.ui.ui.relative_to_cursor.cljs$lang$maxFixedArity = 4;
dynomics.ui.ui.toggle_select = (function dynomics$ui$ui$toggle_select(p__93638){
var map__93643 = p__93638;
var map__93643__$1 = ((((!((map__93643 == null)))?((((map__93643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93643):map__93643);
var state = map__93643__$1;
var map__93644 = cljs.core.get.call(null,map__93643__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93644__$1 = ((((!((map__93644 == null)))?((((map__93644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93644):map__93644);
var p = cljs.core.get.call(null,map__93644__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__93644__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__93644__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"toggle select",path);

return dynomics.space.core.add_curve_between_nodes.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (map__93643,map__93643__$1,state,map__93644,map__93644__$1,p,id,path){
return (function (sn){
if(cljs.core.truth_(path)){
if(cljs.core.truth_(sn.call(null,path))){
return cljs.core.disj.call(null,sn,path);
} else {
return cljs.core.conj.call(null,sn,path);
}
} else {
return sn;
}
});})(map__93643,map__93643__$1,state,map__93644,map__93644__$1,p,id,path))
));
});
dynomics.ui.ui.toggle_select_curve = (function dynomics$ui$ui$toggle_select_curve(p__93647){
var map__93652 = p__93647;
var map__93652__$1 = ((((!((map__93652 == null)))?((((map__93652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93652):map__93652);
var state = map__93652__$1;
var map__93653 = cljs.core.get.call(null,map__93652__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93653__$1 = ((((!((map__93653 == null)))?((((map__93653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93653):map__93653);
var p = cljs.core.get.call(null,map__93653__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__93653__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__93653__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"(de)select curve",path);

return dynomics.space.core.toggle_select_curve.call(null,state,path);
});
dynomics.ui.ui.toggle_active = (function dynomics$ui$ui$toggle_active(p__93656){
var map__93662 = p__93656;
var map__93662__$1 = ((((!((map__93662 == null)))?((((map__93662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93662):map__93662);
var state = map__93662__$1;
var map__93663 = cljs.core.get.call(null,map__93662__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93663__$1 = ((((!((map__93663 == null)))?((((map__93663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93663):map__93663);
var vec__93664 = cljs.core.get.call(null,map__93663__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__93664,(0),null);
var y = cljs.core.nth.call(null,vec__93664,(1),null);
var id = cljs.core.get.call(null,map__93663__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__93663__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"toggle active",path);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891)], null),((function (map__93662,map__93662__$1,state,map__93663,map__93663__$1,vec__93664,x,y,id,path){
return (function (an){
var n = (function (){var or__35422__auto__ = an;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.truth_(n.call(null,path))){
return cljs.core.disj.call(null,n,path);
} else {
return cljs.core.conj.call(null,n,path);
}
});})(map__93662,map__93662__$1,state,map__93663,map__93663__$1,vec__93664,x,y,id,path))
);
});
/**
 * Select node to move
 */
dynomics.ui.ui.select_node_for_move = (function dynomics$ui$ui$select_node_for_move(p__93667){
var map__93672 = p__93667;
var map__93672__$1 = ((((!((map__93672 == null)))?((((map__93672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93672):map__93672);
var state = map__93672__$1;
var map__93673 = cljs.core.get.call(null,map__93672__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93673__$1 = ((((!((map__93673 == null)))?((((map__93673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93673):map__93673);
var p = cljs.core.get.call(null,map__93673__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__93673__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select node to move ",path);

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-when-selected","position-when-selected",1681219792)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select curve to move
 */
dynomics.ui.ui.select_curve_for_move = (function dynomics$ui$ui$select_curve_for_move(p__93676){
var map__93681 = p__93676;
var map__93681__$1 = ((((!((map__93681 == null)))?((((map__93681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93681):map__93681);
var state = map__93681__$1;
var map__93682 = cljs.core.get.call(null,map__93681__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93682__$1 = ((((!((map__93682 == null)))?((((map__93682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93682):map__93682);
var p = cljs.core.get.call(null,map__93682__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__93682__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select curve for move ",path,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null)));

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,dynomics.space.core.toggle_select_curve.call(null,state,path)),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select object
 */
dynomics.ui.ui.select_object = (function dynomics$ui$ui$select_object(p__93685){
var map__93690 = p__93685;
var map__93690__$1 = ((((!((map__93690 == null)))?((((map__93690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93690):map__93690);
var state = map__93690__$1;
var map__93691 = cljs.core.get.call(null,map__93690__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93691__$1 = ((((!((map__93691 == null)))?((((map__93691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93691):map__93691);
var path = cljs.core.get.call(null,map__93691__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tipe = cljs.core.get.call(null,map__93691__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"select object",path,tipe);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,tipe)], null),cljs.core.conj,path);
});
/**
 * Deselect object
 */
dynomics.ui.ui.deselect_object = (function dynomics$ui$ui$deselect_object(p__93694){
var map__93703 = p__93694;
var map__93703__$1 = ((((!((map__93703 == null)))?((((map__93703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93703):map__93703);
var state = map__93703__$1;
var map__93704 = cljs.core.get.call(null,map__93703__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__93704__$1 = ((((!((map__93704 == null)))?((((map__93704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93704):map__93704);
var o = cljs.core.get.call(null,map__93704__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var map__93705 = cljs.core.get.call(null,map__93704__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93705__$1 = ((((!((map__93705 == null)))?((((map__93705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93705):map__93705);
var p1 = cljs.core.get.call(null,map__93705__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t1 = cljs.core.get.call(null,map__93705__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var map__93706 = cljs.core.get.call(null,map__93703__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93706__$1 = ((((!((map__93706 == null)))?((((map__93706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93706):map__93706);
var p2 = cljs.core.get.call(null,map__93706__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t2 = cljs.core.get.call(null,map__93706__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"deselect object",p1,t1,p2,t2);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,(function (){var or__35422__auto__ = t1;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return t2;
}
})())], null),cljs.core.disj,(function (){var or__35422__auto__ = p1;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return p2;
}
})());
});
/**
 * Deselect node
 */
dynomics.ui.ui.deselect_node = (function dynomics$ui$ui$deselect_node(p__93711){
var map__93716 = p__93711;
var map__93716__$1 = ((((!((map__93716 == null)))?((((map__93716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93716):map__93716);
var state = map__93716__$1;
var map__93717 = cljs.core.get.call(null,map__93716__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93717__$1 = ((((!((map__93717 == null)))?((((map__93717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93717):map__93717);
var path = cljs.core.get.call(null,map__93717__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.disj,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),false);
});
/**
 * Deselect curve
 */
dynomics.ui.ui.deselect_curve = (function dynomics$ui$ui$deselect_curve(p__93720){
var map__93725 = p__93720;
var map__93725__$1 = ((((!((map__93725 == null)))?((((map__93725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93725):map__93725);
var state = map__93725__$1;
var map__93726 = cljs.core.get.call(null,map__93725__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93726__$1 = ((((!((map__93726 == null)))?((((map__93726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93726):map__93726);
var p = cljs.core.get.call(null,map__93726__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__93726__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,dynomics.space.core.deselect_curve.call(null,state,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
dynomics.ui.ui.hide_context_menu = (function dynomics$ui$ui$hide_context_menu(state){
return cljs.core.assoc.call(null,dynomics.ui.ui.deselect_object.call(null,state),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),null,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
dynomics.ui.ui.show_context_menu = (function dynomics$ui$ui$show_context_menu(p__93729){
var map__93737 = p__93729;
var map__93737__$1 = ((((!((map__93737 == null)))?((((map__93737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93737):map__93737);
var state = map__93737__$1;
var map__93738 = cljs.core.get.call(null,map__93737__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93738__$1 = ((((!((map__93738 == null)))?((((map__93738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93738):map__93738);
var event = map__93738__$1;
var ep = cljs.core.get.call(null,map__93738__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var mp = cljs.core.get.call(null,map__93738__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var o = cljs.core.get.call(null,map__93738__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var context_menu = cljs.core.get.call(null,map__93738__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
cljs.core.println.call(null,"show cm",o);

return cljs.core.assoc.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.select_object.call(null,state),cljs.core.map.call(null,((function (map__93737,map__93737__$1,state,map__93738,map__93738__$1,event,ep,mp,o,context_menu){
return (function (p__93741){
var map__93742 = p__93741;
var map__93742__$1 = ((((!((map__93742 == null)))?((((map__93742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93742):map__93742);
var option = map__93742__$1;
var f = cljs.core.get.call(null,map__93742__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.truth_(f)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.assoc,option,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.deref.call(null,f)], true, false);
} else {
return option;
}
});})(map__93737,map__93737__$1,state,map__93738,map__93738__$1,event,ep,mp,o,context_menu))
,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null)))),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__35422__auto__ = ep;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return mp;
}
})(),new cljs.core.Keyword(null,"object","object",1474613949),o,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null))], null));
});
dynomics.ui.ui.toggle_context_menu = (function dynomics$ui$ui$toggle_context_menu(p__93744){
var map__93747 = p__93744;
var map__93747__$1 = ((((!((map__93747 == null)))?((((map__93747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93747):map__93747);
var state = map__93747__$1;
var context_menu = cljs.core.get.call(null,map__93747__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
if(cljs.core.truth_(context_menu)){
return dynomics.ui.ui.hide_context_menu.call(null,state);
} else {
return dynomics.ui.ui.show_context_menu.call(null,state);
}
});
dynomics.ui.ui.toggle_left_panel = (function dynomics$ui$ui$toggle_left_panel(p__93749){
var map__93752 = p__93749;
var map__93752__$1 = ((((!((map__93752 == null)))?((((map__93752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93752):map__93752);
var state = map__93752__$1;
var left_panel_QMARK_ = cljs.core.get.call(null,map__93752__$1,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317),cljs.core.not.call(null,left_panel_QMARK_));
});
dynomics.ui.ui.switch_styles = (function dynomics$ui$ui$switch_styles(p__93754){
var map__93757 = p__93754;
var map__93757__$1 = ((((!((map__93757 == null)))?((((map__93757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93757):map__93757);
var state = map__93757__$1;
var style = cljs.core.get.call(null,map__93757__$1,new cljs.core.Keyword(null,"style","style",-496642736));
cljs.core.println.call(null,"switch style",style);

return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"icons","icons",-297140977)], null),null),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"light","light",1918998747)))?new cljs.core.Keyword(null,"dark","dark",1818973999):new cljs.core.Keyword(null,"light","light",1918998747)));
});
dynomics.ui.ui.print_state = (function dynomics$ui$ui$print_state(state){
cljs.core.println.call(null,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"space","space",348133475)], null)));

return state;
});
/**
 * Move objects
 */
dynomics.ui.ui.move_objects = (function dynomics$ui$ui$move_objects(p__93759){
var map__93769 = p__93759;
var map__93769__$1 = ((((!((map__93769 == null)))?((((map__93769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93769):map__93769);
var state = map__93769__$1;
var map__93770 = cljs.core.get.call(null,map__93769__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__93770__$1 = ((((!((map__93770 == null)))?((((map__93770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93770):map__93770);
var space = map__93770__$1;
var selected_nodes = cljs.core.get.call(null,map__93770__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var zoom = cljs.core.get.call(null,map__93770__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__93771 = cljs.core.get.call(null,map__93769__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93771__$1 = ((((!((map__93771 == null)))?((((map__93771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93771):map__93771);
var vec__93772 = cljs.core.get.call(null,map__93771__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__93772,(0),null);
var y = cljs.core.nth.call(null,vec__93772,(1),null);
var ck = cljs.core.get.call(null,map__93771__$1,new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989));
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__93769,map__93769__$1,state,map__93770,map__93770__$1,space,selected_nodes,zoom,map__93771,map__93771__$1,vec__93772,x,y,ck){
return (function (r,path){
var tfn = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"point","point",1813198264))))?(cljs.core.truth_(ck)?dynomics.space.core.to_space:dynomics.space.core.mirror_node):((function (map__93769,map__93769__$1,state,map__93770,map__93770__$1,space,selected_nodes,zoom,map__93771,map__93771__$1,vec__93772,x,y,ck){
return (function (p,pth,_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,dynomics.ui.ui.relative_to_cursor.call(null,p,pth,state)], null)], null);
});})(map__93769,map__93769__$1,state,map__93770,map__93770__$1,space,selected_nodes,zoom,map__93771,map__93771__$1,vec__93772,x,y,ck))
);
return cljs.core.reduce.call(null,((function (tfn,map__93769,map__93769__$1,state,map__93770,map__93770__$1,space,selected_nodes,zoom,map__93771,map__93771__$1,vec__93772,x,y,ck){
return (function (r__$1,p__93776){
var vec__93777 = p__93776;
var cpath = cljs.core.nth.call(null,vec__93777,(0),null);
var cpoint = cljs.core.nth.call(null,vec__93777,(1),null);
return cljs.core.assoc_in.call(null,r__$1,cljs.core.conj.call(null,cpath,new cljs.core.Keyword(null,"position","position",-2011731912)),cpoint);
});})(tfn,map__93769,map__93769__$1,state,map__93770,map__93770__$1,space,selected_nodes,zoom,map__93771,map__93771__$1,vec__93772,x,y,ck))
,r,tfn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),path,space));
});})(map__93769,map__93769__$1,state,map__93770,map__93770__$1,space,selected_nodes,zoom,map__93771,map__93771__$1,vec__93772,x,y,ck))
,state,selected_nodes),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Pan
 */
dynomics.ui.ui.pan = (function dynomics$ui$ui$pan(p__93778){
var map__93784 = p__93778;
var map__93784__$1 = ((((!((map__93784 == null)))?((((map__93784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93784):map__93784);
var state = map__93784__$1;
var pp = cljs.core.get.call(null,map__93784__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var pan__$1 = cljs.core.get.call(null,map__93784__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__93784__$1,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305));
var zoom = cljs.core.get.call(null,map__93784__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__93785 = cljs.core.get.call(null,map__93784__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93785__$1 = ((((!((map__93785 == null)))?((((map__93785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93785):map__93785);
var p = cljs.core.get.call(null,map__93785__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var pl = cljs.core.get.call(null,map__93785__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var vec__93786 = cljs.core.get.call(null,map__93785__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__93786,(0),null);
var p2 = cljs.core.nth.call(null,vec__93786,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"pan","pan",-307712792),cljs.core.map.call(null,cljs.core._,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / zoom)),p2),sp));
});
/**
 * Start zoom
 */
dynomics.ui.ui.start_zoom = (function dynomics$ui$ui$start_zoom(p__93789){
var map__93795 = p__93789;
var map__93795__$1 = ((((!((map__93795 == null)))?((((map__93795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93795):map__93795);
var state = map__93795__$1;
var zoom = cljs.core.get.call(null,map__93795__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pz = cljs.core.get.call(null,map__93795__$1,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303));
var map__93796 = cljs.core.get.call(null,map__93795__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93796__$1 = ((((!((map__93796 == null)))?((((map__93796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93796):map__93796);
var p = cljs.core.get.call(null,map__93796__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__93797 = cljs.core.get.call(null,map__93796__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__93797,(0),null);
var p2 = cljs.core.nth.call(null,vec__93797,(1),null);
cljs.core.println.call(null,"start zoom",p,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492).cljs$core$IFn$_invoke$arity$1(state));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"starting","starting",-1852141466),pz)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),true);
} else {
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword(null,"starting","starting",-1852141466));
}
});
/**
 * Zoom
 */
dynomics.ui.ui.zoom = (function dynomics$ui$ui$zoom(p__93800){
var map__93806 = p__93800;
var map__93806__$1 = ((((!((map__93806 == null)))?((((map__93806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93806):map__93806);
var state = map__93806__$1;
var zoom__$1 = cljs.core.get.call(null,map__93806__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pan = cljs.core.get.call(null,map__93806__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__93806__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var map__93807 = cljs.core.get.call(null,map__93806__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93807__$1 = ((((!((map__93807 == null)))?((((map__93807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93807):map__93807);
var dy = cljs.core.get.call(null,map__93807__$1,new cljs.core.Keyword(null,"deltaY","deltaY",-879493966));
var p = cljs.core.get.call(null,map__93807__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__93808 = cljs.core.get.call(null,map__93807__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__93808,(0),null);
var p2 = cljs.core.nth.call(null,vec__93808,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(function (){var x__35753__auto__ = 0.5;
var y__35754__auto__ = (zoom__$1 + (-0.01 * dy));
return ((x__35753__auto__ > y__35754__auto__) ? x__35753__auto__ : y__35754__auto__);
})(),new cljs.core.Keyword(null,"pan","pan",-307712792),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(-1)),sp),new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),p2);
});
/**
 * Start move objects
 */
dynomics.ui.ui.start_move = (function dynomics$ui$ui$start_move(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true);
});
/**
 * Move
 */
dynomics.ui.ui.move_cursor = (function dynomics$ui$ui$move_cursor(p__93811){
var map__93817 = p__93811;
var map__93817__$1 = ((((!((map__93817 == null)))?((((map__93817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93817):map__93817);
var state = map__93817__$1;
var map__93818 = cljs.core.get.call(null,map__93817__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93818__$1 = ((((!((map__93818 == null)))?((((map__93818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93818):map__93818);
var vec__93819 = cljs.core.get.call(null,map__93818__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__93819,(0),null);
var _ = cljs.core.nth.call(null,vec__93819,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p1);
});
/**
 * Start pan
 */
dynomics.ui.ui.start_pan = (function dynomics$ui$ui$start_pan(p__93822){
var map__93828 = p__93822;
var map__93828__$1 = ((((!((map__93828 == null)))?((((map__93828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93828):map__93828);
var state = map__93828__$1;
var map__93829 = cljs.core.get.call(null,map__93828__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93829__$1 = ((((!((map__93829 == null)))?((((map__93829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93829):map__93829);
var p = cljs.core.get.call(null,map__93829__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__93830 = cljs.core.get.call(null,map__93829__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__93830,(0),null);
var _ = cljs.core.nth.call(null,vec__93830,(1),null);
cljs.core.println.call(null,"start pan",p,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),true,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1);
});
/**
 * End pan
 */
dynomics.ui.ui.end_pan = (function dynomics$ui$ui$end_pan(p__93833){
var map__93838 = p__93833;
var map__93838__$1 = ((((!((map__93838 == null)))?((((map__93838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93838):map__93838);
var state = map__93838__$1;
var map__93839 = cljs.core.get.call(null,map__93838__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93839__$1 = ((((!((map__93839 == null)))?((((map__93839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93839):map__93839);
var p = cljs.core.get.call(null,map__93839__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
/**
 * Add node
 */
dynomics.ui.ui.add_node = (function dynomics$ui$ui$add_node(p__93842){
var map__93847 = p__93842;
var map__93847__$1 = ((((!((map__93847 == null)))?((((map__93847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93847):map__93847);
var state = map__93847__$1;
var map__93848 = cljs.core.get.call(null,map__93847__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93848__$1 = ((((!((map__93848 == null)))?((((map__93848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93848):map__93848);
var p = cljs.core.get.call(null,map__93848__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p));
});
dynomics.ui.ui.curve_between_nodes = (function dynomics$ui$ui$curve_between_nodes(state){
return dynomics.space.core.add_curve_between_nodes.call(null,state);
});
dynomics.ui.ui.make_toggle_fn = (function dynomics$ui$ui$make_toggle_fn(path,keyz){
return (function dynomics$ui$ui$make_toggle_fn_$_toggle_things(state){
return cljs.core.update_in.call(null,state,path,(function (s){
return cljs.core.reduce.call(null,(function (r,k){
if(cljs.core.truth_(r.call(null,k))){
return cljs.core.disj.call(null,r,k);
} else {
return cljs.core.conj.call(null,r,k);
}
}),(function (){var or__35422__auto__ = s;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),keyz);
}));
});
});
dynomics.ui.ui.set_node_type = (function dynomics$ui$ui$set_node_type(p__93851){
var map__93856 = p__93851;
var map__93856__$1 = ((((!((map__93856 == null)))?((((map__93856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93856):map__93856);
var state = map__93856__$1;
var map__93857 = cljs.core.get.call(null,map__93856__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93857__$1 = ((((!((map__93857 == null)))?((((map__93857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93857):map__93857);
var id = cljs.core.get.call(null,map__93857__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return dynomics.space.core.set_node_type.call(null,id).call(null,state);
});
dynomics.ui.ui.make_new_node = (function dynomics$ui$ui$make_new_node(p__93860){
var map__93867 = p__93860;
var map__93867__$1 = ((((!((map__93867 == null)))?((((map__93867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93867):map__93867);
var state = map__93867__$1;
var making_node_QMARK_ = cljs.core.get.call(null,map__93867__$1,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115));
var map__93868 = cljs.core.get.call(null,map__93867__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__93868__$1 = ((((!((map__93868 == null)))?((((map__93868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93868):map__93868);
var event = map__93868__$1;
var p = cljs.core.get.call(null,map__93868__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__93868__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.println.call(null,"make node type",id);

if(cljs.core.truth_(making_node_QMARK_)){
return state;
} else {
var map__93871 = dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),true,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489),id));
var map__93871__$1 = ((((!((map__93871 == null)))?((((map__93871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__93871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__93871):map__93871);
var s = map__93871__$1;
var n = cljs.core.get.call(null,map__93871__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.ui.ui.select_node_for_move.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),n], null))));
}
});
/**
 * Returns a function var to handle the given event
 */
dynomics.ui.ui.match_event = (function dynomics$ui$ui$match_event(p__93873){
var map__94095 = p__93873;
var map__94095__$1 = ((((!((map__94095 == null)))?((((map__94095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94095):map__94095);
var state = map__94095__$1;
var event = cljs.core.get.call(null,map__94095__$1,new cljs.core.Keyword(null,"event","event",301435442));
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || (event.cljs$core$ILookup$))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{var event_shift_key_QMARK___94122 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94122 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94315){if((e94315 instanceof Error)){
var e__48414__auto__ = e94315;
if((e__48414__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto__;
}
} else {
throw e94315;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94309){if((e94309 instanceof Error)){
var e__48414__auto__ = e94309;
if((e__48414__auto__ === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___94122 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94122 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94311){if((e94311 instanceof Error)){
var e__48414__auto____$1 = e94311;
if((e__48414__auto____$1 === cljs.core.match.backtrack)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___94126 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94126 === false)){
return (new cljs.core.Delay(((function (state_moving_things_QMARK___94126,e__48414__auto____$1,event_noun__94123,e__48414__auto__,event_verb__94119,map__94095,map__94095__$1,state,event){
return (function (){
return cljs.core.comp.call(null,dynomics.ui.ui.deselect_node,dynomics.ui.ui.toggle_active);
});})(state_moving_things_QMARK___94126,e__48414__auto____$1,event_noun__94123,e__48414__auto__,event_verb__94119,map__94095,map__94095__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94314){if((e94314 instanceof Error)){
var e__48414__auto____$2 = e94314;
if((e__48414__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$2;
}
} else {
throw e94314;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94312){if((e94312 instanceof Error)){
var e__48414__auto____$2 = e94312;
if((e__48414__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$2;
}
} else {
throw e94312;

}
}} else {
throw e__48414__auto____$1;
}
} else {
throw e94311;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94310){if((e94310 instanceof Error)){
var e__48414__auto____$1 = e94310;
if((e__48414__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$1;
}
} else {
throw e94310;

}
}} else {
throw e__48414__auto__;
}
} else {
throw e94309;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94191){if((e94191 instanceof Error)){
var e__48414__auto__ = e94191;
if((e__48414__auto__ === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_button__94120 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__94120 === (0))){
try{var event_id__94121 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_id__94121,new cljs.core.Keyword(null,"add-node-button","add-node-button",-722090690))){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.add_node;},new cljs.core.Symbol("dynomics.ui.ui","add-node","dynomics.ui.ui/add-node",175703617,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"add-node","add-node",-428722461,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",11,1,530,534,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Add node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Add node",(cljs.core.truth_(dynomics.ui.ui.add_node)?dynomics.ui.ui.add_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94308){if((e94308 instanceof Error)){
var e__48414__auto____$1 = e94308;
if((e__48414__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$1;
}
} else {
throw e94308;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94307){if((e94307 instanceof Error)){
var e__48414__auto____$1 = e94307;
if((e__48414__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$1;
}
} else {
throw e94307;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94302){if((e94302 instanceof Error)){
var e__48414__auto____$1 = e94302;
if((e__48414__auto____$1 === cljs.core.match.backtrack)){
try{var event_button__94120 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__94120 === (2))){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94304){if((e94304 instanceof Error)){
var e__48414__auto____$2 = e94304;
if((e__48414__auto____$2 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94305){if((e94305 instanceof Error)){
var e__48414__auto____$3 = e94305;
if((e__48414__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"space","space",348133475))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94306){if((e94306 instanceof Error)){
var e__48414__auto____$4 = e94306;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$4;
}
} else {
throw e94306;

}
}} else {
throw e__48414__auto____$3;
}
} else {
throw e94305;

}
}} else {
throw e__48414__auto____$2;
}
} else {
throw e94304;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94303){if((e94303 instanceof Error)){
var e__48414__auto____$2 = e94303;
if((e__48414__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$2;
}
} else {
throw e94303;

}
}} else {
throw e__48414__auto____$1;
}
} else {
throw e94302;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94192){if((e94192 instanceof Error)){
var e__48414__auto____$1 = e94192;
if((e__48414__auto____$1 === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964))){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.hide_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","hide-context-menu","dynomics.ui.ui/hide-context-menu",-829551965,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"hide-context-menu","hide-context-menu",-210420991,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,378,380,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Hide context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.hide_context_menu)?dynomics.ui.ui.hide_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94301){if((e94301 instanceof Error)){
var e__48414__auto____$2 = e94301;
if((e__48414__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$2;
}
} else {
throw e94301;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94193){if((e94193 instanceof Error)){
var e__48414__auto____$2 = e94193;
if((e__48414__auto____$2 === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_shift_key_QMARK___94122 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94122 === false)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",23,1,304,308,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94297){if((e94297 instanceof Error)){
var e__48414__auto____$3 = e94297;
if((e__48414__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",23,1,304,308,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94298){if((e94298 instanceof Error)){
var e__48414__auto____$4 = e94298;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__94118 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94118 === (1))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_curve_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-curve-for-move","dynomics.ui.ui/select-curve-for-move",67176701,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-curve-for-move","select-curve-for-move",268851359,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",24,1,319,323,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select curve to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select curve to move",(cljs.core.truth_(dynomics.ui.ui.select_curve_for_move)?dynomics.ui.ui.select_curve_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94300){if((e94300 instanceof Error)){
var e__48414__auto____$5 = e94300;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e94300;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94299){if((e94299 instanceof Error)){
var e__48414__auto____$5 = e94299;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e94299;

}
}} else {
throw e__48414__auto____$4;
}
} else {
throw e94298;

}
}} else {
throw e__48414__auto____$3;
}
} else {
throw e94297;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94296){if((e94296 instanceof Error)){
var e__48414__auto____$3 = e94296;
if((e__48414__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$3;
}
} else {
throw e94296;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94194){if((e94194 instanceof Error)){
var e__48414__auto____$3 = e94194;
if((e__48414__auto____$3 === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_shift_key_QMARK___94122 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94122 === false)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___94129 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94129 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,354,358,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94295){if((e94295 instanceof Error)){
var e__48414__auto____$4 = e94295;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$4;
}
} else {
throw e94295;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94293){if((e94293 instanceof Error)){
var e__48414__auto____$4 = e94293;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$4;
}
} else {
throw e94293;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94283){if((e94283 instanceof Error)){
var e__48414__auto____$4 = e94283;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___94132 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94132 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,354,358,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94292){if((e94292 instanceof Error)){
var e__48414__auto____$5 = e94292;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e94292;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94290){if((e94290 instanceof Error)){
var e__48414__auto____$5 = e94290;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e94290;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94284){if((e94284 instanceof Error)){
var e__48414__auto____$5 = e94284;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___94135 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94135 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94289){if((e94289 instanceof Error)){
var e__48414__auto____$6 = e94289;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94289;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94287){if((e94287 instanceof Error)){
var e__48414__auto____$6 = e94287;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94287;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94285){if((e94285 instanceof Error)){
var e__48414__auto____$6 = e94285;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_curve;},new cljs.core.Symbol("dynomics.ui.ui","deselect-curve","dynomics.ui.ui/deselect-curve",-758858976,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-curve","deselect-curve",-29652158,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",17,1,366,370,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect curve",(cljs.core.truth_(dynomics.ui.ui.deselect_curve)?dynomics.ui.ui.deselect_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94286){if((e94286 instanceof Error)){
var e__48414__auto____$7 = e94286;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e94286;

}
}} else {
throw e__48414__auto____$6;
}
} else {
throw e94285;

}
}} else {
throw e__48414__auto____$5;
}
} else {
throw e94284;

}
}} else {
throw e__48414__auto____$4;
}
} else {
throw e94283;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94282){if((e94282 instanceof Error)){
var e__48414__auto____$4 = e94282;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$4;
}
} else {
throw e94282;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94195){if((e94195 instanceof Error)){
var e__48414__auto____$4 = e94195;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__94118 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94118 === (1))){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___94122 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94122 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94139 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94139 === false)){
try{var state_moving_things_QMARK___94140 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94140 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,490,494,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94281){if((e94281 instanceof Error)){
var e__48414__auto____$5 = e94281;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e94281;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94280){if((e94280 instanceof Error)){
var e__48414__auto____$5 = e94280;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e94280;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94278){if((e94278 instanceof Error)){
var e__48414__auto____$5 = e94278;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e94278;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94277){if((e94277 instanceof Error)){
var e__48414__auto____$5 = e94277;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e94277;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94249){if((e94249 instanceof Error)){
var e__48414__auto____$5 = e94249;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_shift_key_QMARK___94122 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94122 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94144 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94144 === false)){
try{var state_moving_things_QMARK___94145 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94145 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,490,494,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94276){if((e94276 instanceof Error)){
var e__48414__auto____$6 = e94276;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94276;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94275){if((e94275 instanceof Error)){
var e__48414__auto____$6 = e94275;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94275;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94273){if((e94273 instanceof Error)){
var e__48414__auto____$6 = e94273;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94273;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94272){if((e94272 instanceof Error)){
var e__48414__auto____$6 = e94272;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94272;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94250){if((e94250 instanceof Error)){
var e__48414__auto____$6 = e94250;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"space","space",348133475))){
try{var event_shift_key_QMARK___94122 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94122 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94149 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94149 === false)){
try{var state_moving_things_QMARK___94150 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94150 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,490,494,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94271){if((e94271 instanceof Error)){
var e__48414__auto____$7 = e94271;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e94271;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94270){if((e94270 instanceof Error)){
var e__48414__auto____$7 = e94270;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e94270;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94268){if((e94268 instanceof Error)){
var e__48414__auto____$7 = e94268;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e94268;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94267){if((e94267 instanceof Error)){
var e__48414__auto____$7 = e94267;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e94267;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94251){if((e94251 instanceof Error)){
var e__48414__auto____$7 = e94251;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94154 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94154 === false)){
try{var state_moving_things_QMARK___94155 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94155 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",15,1,431,435,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94266){if((e94266 instanceof Error)){
var e__48414__auto____$8 = e94266;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e94266;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94265){if((e94265 instanceof Error)){
var e__48414__auto____$8 = e94265;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e94265;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94263){if((e94263 instanceof Error)){
var e__48414__auto____$8 = e94263;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e94263;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94252){if((e94252 instanceof Error)){
var e__48414__auto____$8 = e94252;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94159 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94159 === false)){
try{var state_moving_things_QMARK___94160 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94160 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",15,1,431,435,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94262){if((e94262 instanceof Error)){
var e__48414__auto____$9 = e94262;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e94262;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94261){if((e94261 instanceof Error)){
var e__48414__auto____$9 = e94261;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e94261;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94259){if((e94259 instanceof Error)){
var e__48414__auto____$9 = e94259;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e94259;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94253){if((e94253 instanceof Error)){
var e__48414__auto____$9 = e94253;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94164 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94164 === false)){
try{var state_moving_things_QMARK___94165 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94165 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",15,1,431,435,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94258){if((e94258 instanceof Error)){
var e__48414__auto____$10 = e94258;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e94258;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94257){if((e94257 instanceof Error)){
var e__48414__auto____$10 = e94257;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e94257;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94255){if((e94255 instanceof Error)){
var e__48414__auto____$10 = e94255;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e94255;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94254){if((e94254 instanceof Error)){
var e__48414__auto____$10 = e94254;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e94254;

}
}} else {
throw e__48414__auto____$9;
}
} else {
throw e94253;

}
}} else {
throw e__48414__auto____$8;
}
} else {
throw e94252;

}
}} else {
throw e__48414__auto____$7;
}
} else {
throw e94251;

}
}} else {
throw e__48414__auto____$6;
}
} else {
throw e94250;

}
}} else {
throw e__48414__auto____$5;
}
} else {
throw e94249;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94235){if((e94235 instanceof Error)){
var e__48414__auto____$5 = e94235;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
try{var event_buttons__94118 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94118 === (0))){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___94168 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94168 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94248){if((e94248 instanceof Error)){
var e__48414__auto____$6 = e94248;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94248;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94246){if((e94246 instanceof Error)){
var e__48414__auto____$6 = e94246;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94246;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94237){if((e94237 instanceof Error)){
var e__48414__auto____$6 = e94237;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___94171 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94171 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94245){if((e94245 instanceof Error)){
var e__48414__auto____$7 = e94245;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e94245;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94243){if((e94243 instanceof Error)){
var e__48414__auto____$7 = e94243;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e94243;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94238){if((e94238 instanceof Error)){
var e__48414__auto____$7 = e94238;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___94174 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94174 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94242){if((e94242 instanceof Error)){
var e__48414__auto____$8 = e94242;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e94242;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94240){if((e94240 instanceof Error)){
var e__48414__auto____$8 = e94240;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e94240;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94239){if((e94239 instanceof Error)){
var e__48414__auto____$8 = e94239;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e94239;

}
}} else {
throw e__48414__auto____$7;
}
} else {
throw e94238;

}
}} else {
throw e__48414__auto____$6;
}
} else {
throw e94237;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94236){if((e94236 instanceof Error)){
var e__48414__auto____$6 = e94236;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94236;

}
}} else {
throw e__48414__auto____$5;
}
} else {
throw e94235;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94196){if((e94196 instanceof Error)){
var e__48414__auto____$5 = e94196;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_buttons__94118 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94118 === (1))){
try{var event_shift_key_QMARK___94122 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94122 === false)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94178 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94178 === false)){
try{var state_moving_things_QMARK___94179 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___94179 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_pan;},new cljs.core.Symbol("dynomics.ui.ui","start-pan","dynomics.ui.ui/start-pan",-310203637,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-pan","start-pan",-778345239,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",12,1,508,512,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start pan",(cljs.core.truth_(dynomics.ui.ui.start_pan)?dynomics.ui.ui.start_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94234){if((e94234 instanceof Error)){
var e__48414__auto____$6 = e94234;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94234;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94233){if((e94233 instanceof Error)){
var e__48414__auto____$6 = e94233;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94233;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94231){if((e94231 instanceof Error)){
var e__48414__auto____$6 = e94231;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94231;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94230){if((e94230 instanceof Error)){
var e__48414__auto____$6 = e94230;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94230;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94229){if((e94229 instanceof Error)){
var e__48414__auto____$6 = e94229;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94229;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94228){if((e94228 instanceof Error)){
var e__48414__auto____$6 = e94228;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e94228;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94197){if((e94197 instanceof Error)){
var e__48414__auto____$6 = e94197;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__94118 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94118 === (1))){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94182 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94182 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.pan;},new cljs.core.Symbol("dynomics.ui.ui","pan","dynomics.ui.ui/pan",1533936577,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"pan","pan",1332818735,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",6,1,450,454,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"pp","pp",927842543,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Pan",(cljs.core.truth_(dynomics.ui.ui.pan)?dynomics.ui.ui.pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94227){if((e94227 instanceof Error)){
var e__48414__auto____$7 = e94227;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e94227;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94225){if((e94225 instanceof Error)){
var e__48414__auto____$7 = e94225;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e94225;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94224){if((e94224 instanceof Error)){
var e__48414__auto____$7 = e94224;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e94224;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94223){if((e94223 instanceof Error)){
var e__48414__auto____$7 = e94223;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e94223;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94198){if((e94198 instanceof Error)){
var e__48414__auto____$7 = e94198;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439))){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94185 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94185 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,466,470,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94220){if((e94220 instanceof Error)){
var e__48414__auto____$8 = e94220;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___94185 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,state_pan_zoom_QMARK___94185,new cljs.core.Keyword(null,"starting","starting",-1852141466))){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,466,470,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94221){if((e94221 instanceof Error)){
var e__48414__auto____$9 = e94221;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___94185 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94185 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.zoom;},new cljs.core.Symbol("dynomics.ui.ui","zoom","dynomics.ui.ui/zoom",-926900565,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",7,1,477,481,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"dy","dy",-934888526,null),new cljs.core.Keyword(null,"deltaY","deltaY",-879493966),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Zoom",(cljs.core.truth_(dynomics.ui.ui.zoom)?dynomics.ui.ui.zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94222){if((e94222 instanceof Error)){
var e__48414__auto____$10 = e94222;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e94222;

}
}} else {
throw e__48414__auto____$9;
}
} else {
throw e94221;

}
}} else {
throw e__48414__auto____$8;
}
} else {
throw e94220;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94218){if((e94218 instanceof Error)){
var e__48414__auto____$8 = e94218;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e94218;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94217){if((e94217 instanceof Error)){
var e__48414__auto____$8 = e94217;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e94217;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94199){if((e94199 instanceof Error)){
var e__48414__auto____$8 = e94199;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_buttons__94118 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94118 === (0))){
try{var event_shift_key_QMARK___94122 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94122 === false)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___94188 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___94188 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.end_pan;},new cljs.core.Symbol("dynomics.ui.ui","end-pan","dynomics.ui.ui/end-pan",-5094220,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"end-pan","end-pan",-474409646,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",10,1,520,524,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"End pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"End pan",(cljs.core.truth_(dynomics.ui.ui.end_pan)?dynomics.ui.ui.end_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94216){if((e94216 instanceof Error)){
var e__48414__auto____$9 = e94216;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e94216;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94214){if((e94214 instanceof Error)){
var e__48414__auto____$9 = e94214;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e94214;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94213){if((e94213 instanceof Error)){
var e__48414__auto____$9 = e94213;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e94213;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94212){if((e94212 instanceof Error)){
var e__48414__auto____$9 = e94212;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e94212;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94211){if((e94211 instanceof Error)){
var e__48414__auto____$9 = e94211;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e94211;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94200){if((e94200 instanceof Error)){
var e__48414__auto____$9 = e94200;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__94118 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94118 === (1))){
try{var event_shift_key_QMARK___94122 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___94122 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select_curve;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select-curve","dynomics.ui.ui/toggle-select-curve",1188080702,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select-curve","toggle-select-curve",1792572560,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",22,1,287,289,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select_curve)?dynomics.ui.ui.toggle_select_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94210){if((e94210 instanceof Error)){
var e__48414__auto____$10 = e94210;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e94210;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94209){if((e94209 instanceof Error)){
var e__48414__auto____$10 = e94209;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e94209;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94207){if((e94207 instanceof Error)){
var e__48414__auto____$10 = e94207;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.set_node_type;},new cljs.core.Symbol("dynomics.ui.ui","set-node-type","dynomics.ui.ui/set-node-type",776460294,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"set-node-type","set-node-type",306219192,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,560,564,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"description","description",-1428560544),"Set node type "], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.set_node_type)?dynomics.ui.ui.set_node_type.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94208){if((e94208 instanceof Error)){
var e__48414__auto____$11 = e94208;
if((e__48414__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$11;
}
} else {
throw e94208;

}
}} else {
throw e__48414__auto____$10;
}
} else {
throw e94207;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94201){if((e94201 instanceof Error)){
var e__48414__auto____$10 = e94201;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__94118 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__94118 === (1))){
try{var event_noun__94123 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__94123,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.make_new_node;},new cljs.core.Symbol("dynomics.ui.ui","make-new-node","dynomics.ui.ui/make-new-node",1777852426,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"make-new-node","make-new-node",2047793128,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",17,1,568,571,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"description","description",-1428560544),"Make new node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"making-node?","making-node?",-141094588,null),new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.make_new_node)?dynomics.ui.ui.make_new_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94206){if((e94206 instanceof Error)){
var e__48414__auto____$11 = e94206;
if((e__48414__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$11;
}
} else {
throw e94206;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94205){if((e94205 instanceof Error)){
var e__48414__auto____$11 = e94205;
if((e__48414__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$11;
}
} else {
throw e94205;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94202){if((e94202 instanceof Error)){
var e__48414__auto____$11 = e94202;
if((e__48414__auto____$11 === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"keydown","keydown",-629268186))){
return (new cljs.core.Delay(((function (event_verb__94119,e__48414__auto____$11,e__48414__auto____$10,e__48414__auto____$9,e__48414__auto____$8,e__48414__auto____$7,e__48414__auto____$6,e__48414__auto____$5,e__48414__auto____$4,e__48414__auto____$3,e__48414__auto____$2,e__48414__auto____$1,e__48414__auto__,map__94095,map__94095__$1,state,event){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state);
});})(event_verb__94119,e__48414__auto____$11,e__48414__auto____$10,e__48414__auto____$9,e__48414__auto____$8,e__48414__auto____$7,e__48414__auto____$6,e__48414__auto____$5,e__48414__auto____$4,e__48414__auto____$3,e__48414__auto____$2,e__48414__auto____$1,e__48414__auto__,map__94095,map__94095__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94203){if((e94203 instanceof Error)){
var e__48414__auto____$12 = e94203;
if((e__48414__auto____$12 === cljs.core.match.backtrack)){
try{var event_verb__94119 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__94119,new cljs.core.Keyword(null,"keyup","keyup",-794526927))){
return (new cljs.core.Delay(((function (event_verb__94119,e__48414__auto____$12,e__48414__auto____$11,e__48414__auto____$10,e__48414__auto____$9,e__48414__auto____$8,e__48414__auto____$7,e__48414__auto____$6,e__48414__auto____$5,e__48414__auto____$4,e__48414__auto____$3,e__48414__auto____$2,e__48414__auto____$1,e__48414__auto__,map__94095,map__94095__$1,state,event){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state);
});})(event_verb__94119,e__48414__auto____$12,e__48414__auto____$11,e__48414__auto____$10,e__48414__auto____$9,e__48414__auto____$8,e__48414__auto____$7,e__48414__auto____$6,e__48414__auto____$5,e__48414__auto____$4,e__48414__auto____$3,e__48414__auto____$2,e__48414__auto____$1,e__48414__auto__,map__94095,map__94095__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e94204){if((e94204 instanceof Error)){
var e__48414__auto____$13 = e94204;
if((e__48414__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$13;
}
} else {
throw e94204;

}
}} else {
throw e__48414__auto____$12;
}
} else {
throw e94203;

}
}} else {
throw e__48414__auto____$11;
}
} else {
throw e94202;

}
}} else {
throw e__48414__auto____$10;
}
} else {
throw e94201;

}
}} else {
throw e__48414__auto____$9;
}
} else {
throw e94200;

}
}} else {
throw e__48414__auto____$8;
}
} else {
throw e94199;

}
}} else {
throw e__48414__auto____$7;
}
} else {
throw e94198;

}
}} else {
throw e__48414__auto____$6;
}
} else {
throw e94197;

}
}} else {
throw e__48414__auto____$5;
}
} else {
throw e94196;

}
}} else {
throw e__48414__auto____$4;
}
} else {
throw e94195;

}
}} else {
throw e__48414__auto____$3;
}
} else {
throw e94194;

}
}} else {
throw e__48414__auto____$2;
}
} else {
throw e94193;

}
}} else {
throw e__48414__auto____$1;
}
} else {
throw e94192;

}
}} else {
throw e__48414__auto__;
}
} else {
throw e94191;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e94189){if((e94189 instanceof Error)){
var e__48414__auto__ = e94189;
if((e__48414__auto__ === cljs.core.match.backtrack)){
return null;
} else {
throw e__48414__auto__;
}
} else {
throw e94189;

}
}});
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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"app-name","app-name",-268811251),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.Keyword(null,"app-version","app-version",361554836),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"state-version","state-version",1282692697),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)],[cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),new cljs.core.Keyword(null,"dt","dt",-368444759).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)),new cljs.core.Keyword(null,"app-name","app-name",-268811251).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648)], null)),new cljs.core.Keyword(null,"app-version","app-version",361554836).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null))]);
})], null),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"name","name",1843675177),"Dynamics",new cljs.core.Keyword(null,"om-builder","om-builder",1876809590),dynomics.space.ui.make_space_component,new cljs.core.Keyword(null,"query","query",-1288509510),(function (state__$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"icons","icons",-297140977),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.Keyword(null,"pan?","pan?",-1177698471),new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.Keyword(null,"show","show",-576705889)],[cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"space","space",348133475).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766)], null)),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"icons","icons",-297140977)], null)),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null)),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null)),new cljs.core.Keyword(null,"pan?","pan?",-1177698471).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"show","show",-576705889).cljs$core$IFn$_invoke$arity$1(state__$1)]);
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),(function (p__94327){
var map__94328 = p__94327;
var map__94328__$1 = ((((!((map__94328 == null)))?((((map__94328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94328):map__94328);
var map__94329 = cljs.core.get.call(null,map__94328__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__94329__$1 = ((((!((map__94329 == null)))?((((map__94329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94329):map__94329);
var state_updates = cljs.core.get.call(null,map__94329__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__94328,map__94328__$1,map__94329,map__94329__$1,state_updates){
return (function (p__94332){
var map__94333 = p__94332;
var map__94333__$1 = ((((!((map__94333 == null)))?((((map__94333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94333):map__94333);
var event = map__94333__$1;
var h = cljs.core.get.call(null,map__94333__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return cljs.core.async.put_BANG_.call(null,state_updates,((function (map__94333,map__94333__$1,event,h,map__94328,map__94328__$1,map__94329,map__94329__$1,state_updates){
return (function (s){
var f = (function (){var or__35422__auto__ = h;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return dynomics.ui.ui.match_event.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"event","event",301435442),event));
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (f,map__94333,map__94333__$1,event,h,map__94328,map__94328__$1,map__94329,map__94329__$1,state_updates){
return (function (ss){
if(cljs.core.truth_(f)){
return cljs.core.deref.call(null,f).call(null,cljs.core.assoc.call(null,ss,new cljs.core.Keyword(null,"event","event",301435442),event));
} else {
return ss;
}
});})(f,map__94333,map__94333__$1,event,h,map__94328,map__94328__$1,map__94329,map__94329__$1,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1((function (){var or__35422__auto__ = cljs.core.meta.call(null,f);
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
}
})()),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_(f)?cljs.core.deref.call(null,f):null),new cljs.core.Keyword(null,"event","event",301435442),event)], null);
});})(map__94333,map__94333__$1,event,h,map__94328,map__94328__$1,map__94329,map__94329__$1,state_updates))
);
});})(map__94328,map__94328__$1,map__94329,map__94329__$1,state_updates))
], null)], null);
}),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"load","load",-1318641184)], null),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"toggle-quadrants","toggle-quadrants",-163483615),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),new cljs.core.Keyword(null,"print-state","print-state",-1235922711),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"toggle-quadrant-icons","toggle-quadrant-icons",1640510955),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"toggle-node-types","toggle-node-types",-2069291601),new cljs.core.Keyword(null,"toggle-left-panel","toggle-left-panel",-240911951),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"switch-styles","switch-styles",-1139342249),new cljs.core.Keyword(null,"deactivate-all","deactivate-all",-1221569027)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load space",new cljs.core.Keyword(null,"description","description",-1428560544),"Restores the last saved space",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C3",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.get_state_BANG_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrants",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrants",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Curve types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected curves",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,id){
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Curve type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected curves to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_curve_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"print",new cljs.core.Keyword(null,"name","name",1843675177),"println state",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.print_state], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Remove selected",new cljs.core.Keyword(null,"description","description",-1428560544),"Removes selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2612",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.comp.call(null,dynomics.space.core.deselect_all,dynomics.space.core.remove_selected)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrant icons",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrant icons",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrant-icons","quadrant-icons",737862449)], null))], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deselects all selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deselect_all], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"connect nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect selected nodes",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.curve_between_nodes], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Save space",new cljs.core.Keyword(null,"description","description",-1428560544),"Saves the space in your browser for later (sorry I will swap this icon for the familiar\n                                    floppy-disk icon when I find it",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.persist_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Node types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected nodes",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,p__94335){
var map__94336 = p__94335;
var map__94336__$1 = ((((!((map__94336 == null)))?((((map__94336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94336):map__94336);
var id = cljs.core.get.call(null,map__94336__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Node type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected nodes to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_node_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dynomics.space.core.node_types))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle types",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show types",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-types","node-types",1539943342)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Toggle left panel",new cljs.core.Keyword(null,"description","description",-1428560544),"Shows/hides the left panel",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_left_panel], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Context menu",new cljs.core.Keyword(null,"description","description",-1428560544),"Display context menu",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_context_menu,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option1","option1",-243284328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Option1"], null)], null),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-curve-type1","set-curve-type1",2042367308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(1));
}),null))], null),new cljs.core.Keyword(null,"set-curve-type2","set-curve-type2",1286708706),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 2",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(2));
}),null))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"switch styles",new cljs.core.Keyword(null,"description","description",-1428560544),"change style",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tilde","tilde",-306005780),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.switch_styles], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deactivate all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deactivates all active nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deactivate_all], null)])], null)], null));
});
dynomics.ui.ui.left_right_top_view = (function dynomics$ui$ui$left_right_top_view(p__94338){
var map__94350 = p__94338;
var map__94350__$1 = ((((!((map__94350 == null)))?((((map__94350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94350):map__94350);
var state = map__94350__$1;
var context_menu = cljs.core.get.call(null,map__94350__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__94351 = cljs.core.get.call(null,map__94350__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__94351__$1 = ((((!((map__94351 == null)))?((((map__94351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94351):map__94351);
var selected_nodes = cljs.core.get.call(null,map__94351__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__94352 = cljs.core.get.call(null,map__94350__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__94352__$1 = ((((!((map__94352 == null)))?((((map__94352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94352):map__94352);
var msgs = cljs.core.get.call(null,map__94352__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui94356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui94356 = (function (left_right_top_view,p__94338,map__94350,state,context_menu,map__94351,selected_nodes,map__94352,msgs,meta94357){
this.left_right_top_view = left_right_top_view;
this.p__94338 = p__94338;
this.map__94350 = map__94350;
this.state = state;
this.context_menu = context_menu;
this.map__94351 = map__94351;
this.selected_nodes = selected_nodes;
this.map__94352 = map__94352;
this.msgs = msgs;
this.meta94357 = meta94357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui94356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs){
return (function (_94358,meta94357__$1){
var self__ = this;
var _94358__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui94356(self__.left_right_top_view,self__.p__94338,self__.map__94350,self__.state,self__.context_menu,self__.map__94351,self__.selected_nodes,self__.map__94352,self__.msgs,meta94357__$1));
});})(map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui94356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs){
return (function (_94358){
var self__ = this;
var _94358__$1 = this;
return self__.meta94357;
});})(map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui94356.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui94356.prototype.om$core$IRender$render$arity$1 = ((function (map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.div.call(null,{"className": "ui"},om.dom.div.call(null,{"className": "main_ui"},om.dom.div.call(null,{"className": [cljs.core.str("left_component "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317).cljs$core$IFn$_invoke$arity$1(self__.state))?"hidden_function":null))].join('')},om.core.build.call(null,dynomics.ui.ui.make_function_selector_view,self__.state),om.dom.div.call(null,{"className": "node_types_box"},om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component.call(null,new cljs.core.Keyword(null,"friendly","friendly",281770577)),cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)),om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663)),cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state))),null),om.dom.div.call(null,{"className": "right_component selectable", "key": "right_component"},cljs.core.map.call(null,((function (this__44714__auto____$1,map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs){
return (function (p__94359){
var vec__94360 = p__94359;
var id = cljs.core.nth.call(null,vec__94360,(0),null);
var component = cljs.core.nth.call(null,vec__94360,(1),null);
return om.core.build.call(null,new cljs.core.Keyword(null,"om-builder","om-builder",1876809590).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(component).call(null,self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
});})(this__44714__auto____$1,map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs))
,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"om-builder","om-builder",1876809590)),cljs.core.val),cljs.core.dissoc.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220))))),(cljs.core.truth_(self__.context_menu)?om.core.build.call(null,dynomics.ui.ui.make_context_menu,cljs.core.assoc.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451)], null)),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs)):null)),om.core.build.call(null,dynomics.ui.ui.make_header_view,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)));
});})(map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui94356.getBasis = ((function (map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"left-right-top-view","left-right-top-view",150328751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null)], null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__94338","p__94338",1485059838,null),new cljs.core.Symbol(null,"map__94350","map__94350",802234437,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"map__94351","map__94351",791176427,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__94352","map__94352",-1652763155,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"meta94357","meta94357",1807087418,null)], null);
});})(map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui94356.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui94356.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui94356";

dynomics.ui.ui.t_dynomics$ui$ui94356.cljs$lang$ctorPrWriter = ((function (map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui94356");
});})(map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui94356 = ((function (map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs){
return (function dynomics$ui$ui$left_right_top_view_$___GT_t_dynomics$ui$ui94356(left_right_top_view__$1,p__94338__$1,map__94350__$2,state__$1,context_menu__$1,map__94351__$2,selected_nodes__$1,map__94352__$2,msgs__$1,meta94357){
return (new dynomics.ui.ui.t_dynomics$ui$ui94356(left_right_top_view__$1,p__94338__$1,map__94350__$2,state__$1,context_menu__$1,map__94351__$2,selected_nodes__$1,map__94352__$2,msgs__$1,meta94357));
});})(map__94350,map__94350__$1,state,context_menu,map__94351,map__94351__$1,selected_nodes,map__94352,map__94352__$1,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui94356(dynomics$ui$ui$left_right_top_view,p__94338,map__94350__$1,state,context_menu,map__94351__$1,selected_nodes,map__94352__$1,msgs,null));
});
dynomics.ui.ui.main_view = (function dynomics$ui$ui$main_view(){
return (function (p__94369,owner){
var map__94370 = p__94369;
var map__94370__$1 = ((((!((map__94370 == null)))?((((map__94370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94370):map__94370);
var state = map__94370__$1;
var style = cljs.core.get.call(null,map__94370__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui94372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui94372 = (function (main_view,p__94369,owner,map__94370,state,style,meta94373){
this.main_view = main_view;
this.p__94369 = p__94369;
this.owner = owner;
this.map__94370 = map__94370;
this.state = state;
this.style = style;
this.meta94373 = meta94373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui94372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__94370,map__94370__$1,state,style){
return (function (_94374,meta94373__$1){
var self__ = this;
var _94374__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui94372(self__.main_view,self__.p__94369,self__.owner,self__.map__94370,self__.state,self__.style,meta94373__$1));
});})(map__94370,map__94370__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui94372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__94370,map__94370__$1,state,style){
return (function (_94374){
var self__ = this;
var _94374__$1 = this;
return self__.meta94373;
});})(map__94370,map__94370__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui94372.prototype.om$core$IWillMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui94372.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__94370,map__94370__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936),goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null)))));

dynomics.ui.ui.add_events_BANG_.call(null,self__.state);

return dynomics.ui.messaging.setup_updates.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),((function (___$1,map__94370,map__94370__$1,state,style){
return (function (g){
return om.core.transact_BANG_.call(null,self__.state,((function (___$1,map__94370,map__94370__$1,state,style){
return (function (s){
var map__94375 = g.call(null,s);
var map__94375__$1 = ((((!((map__94375 == null)))?((((map__94375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94375):map__94375);
var f = cljs.core.get.call(null,map__94375__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var a = cljs.core.get.call(null,map__94375__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var ss = dynomics.ui.core.update_state.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"action","action",-811238024),(function (){var or__35422__auto__ = a;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.PersistentArrayMap.EMPTY,f);
return ss;
});})(___$1,map__94370,map__94370__$1,state,style))
);
});})(___$1,map__94370,map__94370__$1,state,style))
);
});})(map__94370,map__94370__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui94372.prototype.om$core$IWillReceiveProps$ = true;

dynomics.ui.ui.t_dynomics$ui$ui94372.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__94370,map__94370__$1,state,style){
return (function (this$,pp){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not_EQ_.call(null,self__.style,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(pp))){
var temp__4655__auto___94377 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936));
if(cljs.core.truth_(temp__4655__auto___94377)){
var s_94378 = temp__4655__auto___94377;
goog.style.uninstallStyles(s_94378);
} else {
}

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936),goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null)))));
} else {
return null;
}
});})(map__94370,map__94370__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui94372.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui94372.prototype.om$core$IRender$render$arity$1 = ((function (map__94370,map__94370__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,dynomics.ui.ui.left_right_top_view,self__.state);
});})(map__94370,map__94370__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui94372.getBasis = ((function (map__94370,map__94370__$1,state,style){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"p__94369","p__94369",849995443,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__94370","map__94370",-209067466,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"meta94373","meta94373",1570927639,null)], null);
});})(map__94370,map__94370__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui94372.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui94372.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui94372";

dynomics.ui.ui.t_dynomics$ui$ui94372.cljs$lang$ctorPrWriter = ((function (map__94370,map__94370__$1,state,style){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui94372");
});})(map__94370,map__94370__$1,state,style))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui94372 = ((function (map__94370,map__94370__$1,state,style){
return (function dynomics$ui$ui$main_view_$___GT_t_dynomics$ui$ui94372(main_view__$1,p__94369__$1,owner__$1,map__94370__$2,state__$1,style__$1,meta94373){
return (new dynomics.ui.ui.t_dynomics$ui$ui94372(main_view__$1,p__94369__$1,owner__$1,map__94370__$2,state__$1,style__$1,meta94373));
});})(map__94370,map__94370__$1,state,style))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui94372(dynomics$ui$ui$main_view,p__94369,owner,map__94370__$1,state,style,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Start the application!
 */
dynomics.ui.ui.start = (function dynomics$ui$ui$start(var_args){
var args94379 = [];
var len__36491__auto___94382 = arguments.length;
var i__36492__auto___94383 = (0);
while(true){
if((i__36492__auto___94383 < len__36491__auto___94382)){
args94379.push((arguments[i__36492__auto___94383]));

var G__94384 = (i__36492__auto___94383 + (1));
i__36492__auto___94383 = G__94384;
continue;
} else {
}
break;
}

var G__94381 = args94379.length;
switch (G__94381) {
case 0:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args94379.length)].join('')));

}
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.ui.ui.start.call(null,dynomics.ui.ui.add_components.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.add_functions.call(null,dynomics.ui.ui.add_messaging.call(null,dynomics.ui.ui.add_browser_info.call(null,dynomics.ui.core.make_state.call(null)))))));
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1 = (function (state){
return om.core.root.call(null,dynomics.ui.ui.main_view.call(null),state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("ui")], null));
});

dynomics.ui.ui.start.cljs$lang$maxFixedArity = 1;
