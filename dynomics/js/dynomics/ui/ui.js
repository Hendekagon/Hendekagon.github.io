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
goog.require('canvg');
goog.require('dynomics.space.ui');
goog.require('goog.style');
goog.require('stackblur');
goog.require('rgbcolor');
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
dynomics.ui.ui.keydown = (function dynomics$ui$ui$keydown(p__79572,e){
var map__79577 = p__79572;
var map__79577__$1 = ((((!((map__79577 == null)))?((((map__79577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79577):map__79577);
var state = map__79577__$1;
var map__79578 = cljs.core.get.call(null,map__79577__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__79578__$1 = ((((!((map__79578 == null)))?((((map__79578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79578):map__79578);
var msgs = cljs.core.get.call(null,map__79578__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
return cljs.core.async.put_BANG_.call(null,msgs,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
dynomics.ui.ui.keyup = (function dynomics$ui$ui$keyup(p__79581,e){
var map__79586 = p__79581;
var map__79586__$1 = ((((!((map__79586 == null)))?((((map__79586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79586):map__79586);
var state = map__79586__$1;
var map__79587 = cljs.core.get.call(null,map__79586__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__79587__$1 = ((((!((map__79587 == null)))?((((map__79587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79587):map__79587);
var msgs = cljs.core.get.call(null,map__79587__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
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
if(typeof dynomics.ui.ui.t_dynomics$ui$ui79597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui79597 = (function (make_function_selector_view,state,owner,functions,state_updates,meta79598){
this.make_function_selector_view = make_function_selector_view;
this.state = state;
this.owner = owner;
this.functions = functions;
this.state_updates = state_updates;
this.meta79598 = meta79598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui79597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (functions,state_updates){
return (function (_79599,meta79598__$1){
var self__ = this;
var _79599__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui79597(self__.make_function_selector_view,self__.state,self__.owner,self__.functions,self__.state_updates,meta79598__$1));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui79597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (functions,state_updates){
return (function (_79599){
var self__ = this;
var _79599__$1 = this;
return self__.meta79598;
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui79597.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui79597.prototype.om$core$IRender$render$arity$1 = ((function (functions,state_updates){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.div.call(null,{"className": "function_selector"},cljs.core.map.call(null,((function (this__44714__auto____$1,functions,state_updates){
return (function (p__79600){
var vec__79601 = p__79600;
var k = cljs.core.nth.call(null,vec__79601,(0),null);
var map__79602 = cljs.core.nth.call(null,vec__79601,(1),null);
var map__79602__$1 = ((((!((map__79602 == null)))?((((map__79602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79602):map__79602);
var naym = cljs.core.get.call(null,map__79602__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__79602__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return om.dom.div.call(null,{"className": "function_selector_item", "id": [cljs.core.str(cljs.core.name.call(null,k))].join(''), "onClick": ((function (vec__79601,k,map__79602,map__79602__$1,naym,description,this__44714__auto____$1,functions,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__79601,k,map__79602,map__79602__$1,naym,description,this__44714__auto____$1,functions,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null),k);
});})(vec__79601,k,map__79602,map__79602__$1,naym,description,this__44714__auto____$1,functions,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"description","description",-1428560544),naym], null)], null));

return null;
});})(vec__79601,k,map__79602,map__79602__$1,naym,description,this__44714__auto____$1,functions,state_updates))
},naym);
});})(this__44714__auto____$1,functions,state_updates))
,self__.functions));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui79597.getBasis = ((function (functions,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-function-selector-view","make-function-selector-view",516344898,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for selecting the current function"], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"functions","functions",1825482993,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta79598","meta79598",239395850,null)], null);
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui79597.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui79597.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui79597";

dynomics.ui.ui.t_dynomics$ui$ui79597.cljs$lang$ctorPrWriter = ((function (functions,state_updates){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui79597");
});})(functions,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui79597 = ((function (functions,state_updates){
return (function dynomics$ui$ui$make_function_selector_view_$___GT_t_dynomics$ui$ui79597(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta79598){
return (new dynomics.ui.ui.t_dynomics$ui$ui79597(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta79598));
});})(functions,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui79597(dynomics$ui$ui$make_function_selector_view,state,owner,functions,state_updates,null));
});
/**
 * Return a component to display a list
 *   of historical states which select a historical
 *   state on mouseover
 */
dynomics.ui.ui.make_history_selector_view = (function dynomics$ui$ui$make_history_selector_view(p__79604,owner){
var map__79615 = p__79604;
var map__79615__$1 = ((((!((map__79615 == null)))?((((map__79615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79615):map__79615);
var state = map__79615__$1;
var map__79616 = cljs.core.get.call(null,map__79615__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__79616__$1 = ((((!((map__79616 == null)))?((((map__79616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79616):map__79616);
var state_updates = cljs.core.get.call(null,map__79616__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var sh = cljs.core.get.call(null,map__79615__$1,new cljs.core.Keyword(null,"show-history","show-history",1972567130));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui79619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui79619 = (function (make_history_selector_view,p__79604,owner,map__79615,state,map__79616,state_updates,sh,meta79620){
this.make_history_selector_view = make_history_selector_view;
this.p__79604 = p__79604;
this.owner = owner;
this.map__79615 = map__79615;
this.state = state;
this.map__79616 = map__79616;
this.state_updates = state_updates;
this.sh = sh;
this.meta79620 = meta79620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui79619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (_79621,meta79620__$1){
var self__ = this;
var _79621__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui79619(self__.make_history_selector_view,self__.p__79604,self__.owner,self__.map__79615,self__.state,self__.map__79616,self__.state_updates,self__.sh,meta79620__$1));
});})(map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui79619.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (_79621){
var self__ = this;
var _79621__$1 = this;
return self__.meta79620;
});})(map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui79619.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui79619.prototype.om$core$IRender$render$arity$1 = ((function (map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.div.call(null,{"className": "history_selector", "onClick": ((function (this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (e){
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.update_in.call(null,s__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),cljs.core.not);
});})(this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
], null);
});})(this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
);
});})(this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
},om.dom.div.call(null,{"className": "history_selector_text"},"History"),om.dom.div.call(null,{"className": (cljs.core.truth_(self__.sh)?"history_selector_visible":"history_selector_hidden")},cljs.core.map.call(null,((function (this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (p__79622){
var map__79623 = p__79622;
var map__79623__$1 = ((((!((map__79623 == null)))?((((map__79623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79623):map__79623);
var history_item = map__79623__$1;
var action = cljs.core.get.call(null,map__79623__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var version = cljs.core.get.call(null,map__79623__$1,new cljs.core.Keyword(null,"version","version",425292698));
var previous_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)) - (1))));
var previous_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)));
return om.dom.div.call(null,{"className": [cljs.core.str("history_selector_item "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_action)))?"historical":""))].join(''), "id": [cljs.core.str("history_version_"),cljs.core.str(previous_version)].join(''), "onMouseOver": ((function (previous_action,previous_version,map__79623,map__79623__$1,history_item,action,version,this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (previous_action,previous_version,map__79623,map__79623__$1,history_item,action,version,this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (previous_action,previous_version,map__79623,map__79623__$1,history_item,action,version,this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.merge.call(null,om.core.value.call(null,history_item),cljs.core.select_keys.call(null,s__$1,cljs.core.conj.call(null,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(s__$1),new cljs.core.Keyword(null,"history","history",-247395220))));
});})(previous_action,previous_version,map__79623,map__79623__$1,history_item,action,version,this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desccription","desccription",-1060114044),[cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action))].join(''),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"id","id",-1388402092),version], null)], null);
});})(previous_action,previous_version,map__79623,map__79623__$1,history_item,action,version,this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
);

return null;
});})(previous_action,previous_version,map__79623,map__79623__$1,history_item,action,version,this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action));
});})(this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
,cljs.core.filter.call(null,((function (this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (hi){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi)) - (1)))));
});})(this__44714__auto____$1,map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
,cljs.core.reverse.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.state),self__.state))))));
});})(map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui79619.getBasis = ((function (map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-history-selector-view","make-history-selector-view",1677763159,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Keyword(null,"show-history","show-history",1972567130),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a component to display a list\n  of historical states which select a historical\n  state on mouseover"], null)),new cljs.core.Symbol(null,"p__79604","p__79604",-1252601594,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__79615","map__79615",1563168978,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__79616","map__79616",1261785489,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Symbol(null,"meta79620","meta79620",-1149680741,null)], null);
});})(map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui79619.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui79619.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui79619";

dynomics.ui.ui.t_dynomics$ui$ui79619.cljs$lang$ctorPrWriter = ((function (map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui79619");
});})(map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui79619 = ((function (map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh){
return (function dynomics$ui$ui$make_history_selector_view_$___GT_t_dynomics$ui$ui79619(make_history_selector_view__$1,p__79604__$1,owner__$1,map__79615__$2,state__$1,map__79616__$2,state_updates__$1,sh__$1,meta79620){
return (new dynomics.ui.ui.t_dynomics$ui$ui79619(make_history_selector_view__$1,p__79604__$1,owner__$1,map__79615__$2,state__$1,map__79616__$2,state_updates__$1,sh__$1,meta79620));
});})(map__79615,map__79615__$1,state,map__79616,map__79616__$1,state_updates,sh))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui79619(dynomics$ui$ui$make_history_selector_view,p__79604,owner,map__79615__$1,state,map__79616__$1,state_updates,sh,null));
});
dynomics.ui.ui.make_context_menu = (function dynomics$ui$ui$make_context_menu(p__79625){
var map__79638 = p__79625;
var map__79638__$1 = ((((!((map__79638 == null)))?((((map__79638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79638):map__79638);
var map__79639 = cljs.core.get.call(null,map__79638__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__79639__$1 = ((((!((map__79639 == null)))?((((map__79639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79639):map__79639);
var vec__79640 = cljs.core.get.call(null,map__79639__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__79640,(0),null);
var y = cljs.core.nth.call(null,vec__79640,(1),null);
var o = cljs.core.get.call(null,map__79639__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var options = cljs.core.get.call(null,map__79639__$1,new cljs.core.Keyword(null,"options","options",99638489));
var msgs = cljs.core.get.call(null,map__79638__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui79643 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui79643 = (function (options,x,y,p__79625,o,vec__79640,map__79639,map__79638,msgs,make_context_menu,meta79644){
this.options = options;
this.x = x;
this.y = y;
this.p__79625 = p__79625;
this.o = o;
this.vec__79640 = vec__79640;
this.map__79639 = map__79639;
this.map__79638 = map__79638;
this.msgs = msgs;
this.make_context_menu = make_context_menu;
this.meta79644 = meta79644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui79643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs){
return (function (_79645,meta79644__$1){
var self__ = this;
var _79645__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui79643(self__.options,self__.x,self__.y,self__.p__79625,self__.o,self__.vec__79640,self__.map__79639,self__.map__79638,self__.msgs,self__.make_context_menu,meta79644__$1));
});})(map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui79643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs){
return (function (_79645){
var self__ = this;
var _79645__$1 = this;
return self__.meta79644;
});})(map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui79643.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui79643.prototype.om$core$IRender$render$arity$1 = ((function (map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return React.createElement("div",{"style": {"transform": [cljs.core.str("translate("),cljs.core.str(self__.x),cljs.core.str("px,"),cljs.core.str(self__.y),cljs.core.str("px)")].join('')}, "id": "context-menu", "className": "context_menu", "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseLeave": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY)},React.createElement("div",{"className": "context_menu_title"},sablono.interpreter.interpret.call(null,[cljs.core.str("Options for "),cljs.core.str(cljs.core.name.call(null,self__.o))].join(''))),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (this__44714__auto____$1,map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs){
return (function (p__79646){
var vec__79647 = p__79646;
var k = cljs.core.nth.call(null,vec__79647,(0),null);
var map__79648 = cljs.core.nth.call(null,vec__79647,(1),null);
var map__79648__$1 = ((((!((map__79648 == null)))?((((map__79648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79648):map__79648);
var naym = cljs.core.get.call(null,map__79648__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kb = cljs.core.get.call(null,map__79648__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var f = cljs.core.get.call(null,map__79648__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"context_menu_option",new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),k], null),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),f], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(naym),cljs.core.str("  ")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"keyboard_shortcut"], null),[cljs.core.str(kb)].join('')], null)], null);
});})(this__44714__auto____$1,map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs))
,self__.options)));
});})(map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui79643.getBasis = ((function (map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"p__79625","p__79625",-518033592,null),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"vec__79640","vec__79640",-708155153,null),new cljs.core.Symbol(null,"map__79639","map__79639",-19665585,null),new cljs.core.Symbol(null,"map__79638","map__79638",-1025061478,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-context-menu","make-context-menu",-526000036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"options","options",99638489)], true, false),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], true, false)], null)))], null)),new cljs.core.Symbol(null,"meta79644","meta79644",1429698351,null)], null);
});})(map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui79643.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui79643.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui79643";

dynomics.ui.ui.t_dynomics$ui$ui79643.cljs$lang$ctorPrWriter = ((function (map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui79643");
});})(map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui79643 = ((function (map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs){
return (function dynomics$ui$ui$make_context_menu_$___GT_t_dynomics$ui$ui79643(options__$1,x__$1,y__$1,p__79625__$1,o__$1,vec__79640__$1,map__79639__$2,map__79638__$2,msgs__$1,make_context_menu__$1,meta79644){
return (new dynomics.ui.ui.t_dynomics$ui$ui79643(options__$1,x__$1,y__$1,p__79625__$1,o__$1,vec__79640__$1,map__79639__$2,map__79638__$2,msgs__$1,make_context_menu__$1,meta79644));
});})(map__79638,map__79638__$1,map__79639,map__79639__$1,vec__79640,x,y,o,options,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui79643(options,x,y,p__79625,o,vec__79640,map__79639__$1,map__79638__$1,msgs,dynomics$ui$ui$make_context_menu,null));
});
/**
 * Returns a component for the top header
 */
dynomics.ui.ui.make_header_view = (function dynomics$ui$ui$make_header_view(p__79650){
var map__79656 = p__79650;
var map__79656__$1 = ((((!((map__79656 == null)))?((((map__79656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79656):map__79656);
var state = map__79656__$1;
var logo_text = cljs.core.get.call(null,map__79656__$1,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
var app_name = cljs.core.get.call(null,map__79656__$1,new cljs.core.Keyword(null,"app-name","app-name",-268811251));
var app_version = cljs.core.get.call(null,map__79656__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
var state_version = cljs.core.get.call(null,map__79656__$1,new cljs.core.Keyword(null,"state-version","state-version",1282692697));
var action = cljs.core.get.call(null,map__79656__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui79658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui79658 = (function (make_header_view,p__79650,map__79656,state,logo_text,app_name,app_version,state_version,action,meta79659){
this.make_header_view = make_header_view;
this.p__79650 = p__79650;
this.map__79656 = map__79656;
this.state = state;
this.logo_text = logo_text;
this.app_name = app_name;
this.app_version = app_version;
this.state_version = state_version;
this.action = action;
this.meta79659 = meta79659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui79658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__79656,map__79656__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_79660,meta79659__$1){
var self__ = this;
var _79660__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui79658(self__.make_header_view,self__.p__79650,self__.map__79656,self__.state,self__.logo_text,self__.app_name,self__.app_version,self__.state_version,self__.action,meta79659__$1));
});})(map__79656,map__79656__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui79658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__79656,map__79656__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_79660){
var self__ = this;
var _79660__$1 = this;
return self__.meta79659;
});})(map__79656,map__79656__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui79658.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui79658.prototype.om$core$IRender$render$arity$1 = ((function (map__79656,map__79656__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.div.call(null,{"className": "top_component"},null,null);
});})(map__79656,map__79656__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui79658.getBasis = ((function (map__79656,map__79656__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-header-view","make-header-view",2348093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the top header"], null)),new cljs.core.Symbol(null,"p__79650","p__79650",-1111993880,null),new cljs.core.Symbol(null,"map__79656","map__79656",1687162071,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Symbol(null,"meta79659","meta79659",-755104320,null)], null);
});})(map__79656,map__79656__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui79658.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui79658.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui79658";

dynomics.ui.ui.t_dynomics$ui$ui79658.cljs$lang$ctorPrWriter = ((function (map__79656,map__79656__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui79658");
});})(map__79656,map__79656__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui79658 = ((function (map__79656,map__79656__$1,state,logo_text,app_name,app_version,state_version,action){
return (function dynomics$ui$ui$make_header_view_$___GT_t_dynomics$ui$ui79658(make_header_view__$1,p__79650__$1,map__79656__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta79659){
return (new dynomics.ui.ui.t_dynomics$ui$ui79658(make_header_view__$1,p__79650__$1,map__79656__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta79659));
});})(map__79656,map__79656__$1,state,logo_text,app_name,app_version,state_version,action))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui79658(dynomics$ui$ui$make_header_view,p__79650,map__79656__$1,state,logo_text,app_name,app_version,state_version,action,null));
});
dynomics.ui.ui.evaluate = (function dynomics$ui$ui$evaluate(s,sexp,f){
return null;
});
dynomics.ui.ui.make_footer_view = (function dynomics$ui$ui$make_footer_view(p__79661){
var map__79671 = p__79661;
var map__79671__$1 = ((((!((map__79671 == null)))?((((map__79671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79671):map__79671);
var state = map__79671__$1;
var map__79672 = cljs.core.get.call(null,map__79671__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__79672__$1 = ((((!((map__79672 == null)))?((((map__79672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79672):map__79672);
var state_updates = cljs.core.get.call(null,map__79672__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var map__79673 = cljs.core.get.call(null,map__79671__$1,new cljs.core.Keyword(null,"eval","eval",-1103567905));
var map__79673__$1 = ((((!((map__79673 == null)))?((((map__79673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79673):map__79673);
var last_result = cljs.core.get.call(null,map__79673__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var last_exps = cljs.core.get.call(null,map__79673__$1,new cljs.core.Keyword(null,"exps","exps",-877274249));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui79677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui79677 = (function (make_footer_view,p__79661,map__79671,state,map__79672,state_updates,map__79673,last_result,last_exps,meta79678){
this.make_footer_view = make_footer_view;
this.p__79661 = p__79661;
this.map__79671 = map__79671;
this.state = state;
this.map__79672 = map__79672;
this.state_updates = state_updates;
this.map__79673 = map__79673;
this.last_result = last_result;
this.last_exps = last_exps;
this.meta79678 = meta79678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui79677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps){
return (function (_79679,meta79678__$1){
var self__ = this;
var _79679__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui79677(self__.make_footer_view,self__.p__79661,self__.map__79671,self__.state,self__.map__79672,self__.state_updates,self__.map__79673,self__.last_result,self__.last_exps,meta79678__$1));
});})(map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui79677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps){
return (function (_79679){
var self__ = this;
var _79679__$1 = this;
return self__.meta79678;
});})(map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui79677.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui79677.prototype.om$core$IRender$render$arity$1 = ((function (map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.div.call(null,{"className": "bottom_component"},om.dom.input.call(null,{"className": "eval_input", "type": "text", "size": (64), "onKeyDown": ((function (this__44714__auto____$1,map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps){
return (function (e){
e.stopPropagation();


return null;
});})(this__44714__auto____$1,map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps))
}),om.dom.div.call(null,{"className": "eval_result"},[cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.last_result))].join('')));
});})(map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui79677.getBasis = ((function (map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-footer-view","make-footer-view",-746293906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Keyword(null,"exps","exps",-877274249)], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__79661","p__79661",224827998,null),new cljs.core.Symbol(null,"map__79671","map__79671",1423103572,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__79672","map__79672",1139160065,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"map__79673","map__79673",-2100145639,null),new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Symbol(null,"meta79678","meta79678",-1608990605,null)], null);
});})(map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui79677.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui79677.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui79677";

dynomics.ui.ui.t_dynomics$ui$ui79677.cljs$lang$ctorPrWriter = ((function (map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui79677");
});})(map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui79677 = ((function (map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps){
return (function dynomics$ui$ui$make_footer_view_$___GT_t_dynomics$ui$ui79677(make_footer_view__$1,p__79661__$1,map__79671__$2,state__$1,map__79672__$2,state_updates__$1,map__79673__$2,last_result__$1,last_exps__$1,meta79678){
return (new dynomics.ui.ui.t_dynomics$ui$ui79677(make_footer_view__$1,p__79661__$1,map__79671__$2,state__$1,map__79672__$2,state_updates__$1,map__79673__$2,last_result__$1,last_exps__$1,meta79678));
});})(map__79671,map__79671__$1,state,map__79672,map__79672__$1,state_updates,map__79673,map__79673__$1,last_result,last_exps))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui79677(dynomics$ui$ui$make_footer_view,p__79661,map__79671__$1,state,map__79672__$1,state_updates,map__79673__$1,last_result,last_exps,null));
});
dynomics.ui.ui.add_components = (function dynomics$ui$ui$add_components(state){
var seq__79684_79688 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null))))));
var chunk__79685_79689 = null;
var count__79686_79690 = (0);
var i__79687_79691 = (0);
while(true){
if((i__79687_79691 < count__79686_79690)){
var component_79692 = cljs.core._nth.call(null,chunk__79685_79689,i__79687_79691);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_79692);

var G__79693 = seq__79684_79688;
var G__79694 = chunk__79685_79689;
var G__79695 = count__79686_79690;
var G__79696 = (i__79687_79691 + (1));
seq__79684_79688 = G__79693;
chunk__79685_79689 = G__79694;
count__79686_79690 = G__79695;
i__79687_79691 = G__79696;
continue;
} else {
var temp__4657__auto___79697 = cljs.core.seq.call(null,seq__79684_79688);
if(temp__4657__auto___79697){
var seq__79684_79698__$1 = temp__4657__auto___79697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79684_79698__$1)){
var c__36233__auto___79699 = cljs.core.chunk_first.call(null,seq__79684_79698__$1);
var G__79700 = cljs.core.chunk_rest.call(null,seq__79684_79698__$1);
var G__79701 = c__36233__auto___79699;
var G__79702 = cljs.core.count.call(null,c__36233__auto___79699);
var G__79703 = (0);
seq__79684_79688 = G__79700;
chunk__79685_79689 = G__79701;
count__79686_79690 = G__79702;
i__79687_79691 = G__79703;
continue;
} else {
var component_79704 = cljs.core.first.call(null,seq__79684_79698__$1);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_79704);

var G__79705 = cljs.core.next.call(null,seq__79684_79698__$1);
var G__79706 = null;
var G__79707 = (0);
var G__79708 = (0);
seq__79684_79688 = G__79705;
chunk__79685_79689 = G__79706;
count__79686_79690 = G__79707;
i__79687_79691 = G__79708;
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
var args79709 = [];
var len__36491__auto___79716 = arguments.length;
var i__36492__auto___79717 = (0);
while(true){
if((i__36492__auto___79717 < len__36491__auto___79716)){
args79709.push((arguments[i__36492__auto___79717]));

var G__79718 = (i__36492__auto___79717 + (1));
i__36492__auto___79717 = G__79718;
continue;
} else {
}
break;
}

var G__79711 = args79709.length;
switch (G__79711) {
case 1:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args79709.length)].join('')));

}
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.ui.add_keybindings.call(null,state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)));
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2 = (function (state,tools){
return cljs.core.reduce.call(null,(function (r,p__79712){
var vec__79713 = p__79712;
var k = cljs.core.nth.call(null,vec__79713,(0),null);
var map__79714 = cljs.core.nth.call(null,vec__79713,(1),null);
var map__79714__$1 = ((((!((map__79714 == null)))?((((map__79714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79714):map__79714);
var f = cljs.core.get.call(null,map__79714__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var kb = cljs.core.get.call(null,map__79714__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var naym = cljs.core.get.call(null,map__79714__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tools__$1 = cljs.core.get.call(null,map__79714__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
if(cljs.core.truth_(f)){
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),((function (vec__79713,k,map__79714,map__79714__$1,f,kb,naym,tools__$1){
return (function (s){
cljs.core.println.call(null,naym);

return ((cljs.core.delay_QMARK_.call(null,f))?cljs.core.deref.call(null,f):f).call(null,s);
});})(vec__79713,k,map__79714,map__79714__$1,f,kb,naym,tools__$1))
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
dynomics.ui.ui.where_they_were = (function dynomics$ui$ui$where_they_were(p__79720){
var map__79725 = p__79720;
var map__79725__$1 = ((((!((map__79725 == null)))?((((map__79725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79725):map__79725);
var state = map__79725__$1;
var map__79726 = cljs.core.get.call(null,map__79725__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__79726__$1 = ((((!((map__79726 == null)))?((((map__79726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79726):map__79726);
var space = map__79726__$1;
var selected_nodes = cljs.core.get.call(null,map__79726__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,((function (map__79725,map__79725__$1,state,map__79726,map__79726__$1,space,selected_nodes){
return (function (s,path){
return cljs.core.assoc_in.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))));
});})(map__79725,map__79725__$1,state,map__79726,map__79726__$1,space,selected_nodes))
,state,cljs.core.remove.call(null,cljs.core.nil_QMARK_,selected_nodes));
});
dynomics.ui.ui.relative_to_cursor = (function dynomics$ui$ui$relative_to_cursor(var_args){
var args79729 = [];
var len__36491__auto___79732 = arguments.length;
var i__36492__auto___79733 = (0);
while(true){
if((i__36492__auto___79733 < len__36491__auto___79732)){
args79729.push((arguments[i__36492__auto___79733]));

var G__79734 = (i__36492__auto___79733 + (1));
i__36492__auto___79733 = G__79734;
continue;
} else {
}
break;
}

var G__79731 = args79729.length;
switch (G__79731) {
case 3:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args79729.length)].join('')));

}
});

dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (p,pth,state){
return dynomics.ui.ui.relative_to_cursor.call(null,p,pth,cljs.core.get_in.call(null,state,cljs.core.conj.call(null,pth,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089).cljs$core$IFn$_invoke$arity$1(state));
});

dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4 = (function (p,pth,pws,pasom){
return cljs.core.map.call(null,cljs.core._PLUS_,p,cljs.core.map.call(null,cljs.core._,pws,pasom));
});

dynomics.ui.ui.relative_to_cursor.cljs$lang$maxFixedArity = 4;
dynomics.ui.ui.toggle_select = (function dynomics$ui$ui$toggle_select(p__79736){
var map__79741 = p__79736;
var map__79741__$1 = ((((!((map__79741 == null)))?((((map__79741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79741):map__79741);
var state = map__79741__$1;
var map__79742 = cljs.core.get.call(null,map__79741__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79742__$1 = ((((!((map__79742 == null)))?((((map__79742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79742):map__79742);
var p = cljs.core.get.call(null,map__79742__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__79742__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__79742__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"toggle select",path);

return dynomics.space.core.add_curve_between_nodes.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (map__79741,map__79741__$1,state,map__79742,map__79742__$1,p,id,path){
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
});})(map__79741,map__79741__$1,state,map__79742,map__79742__$1,p,id,path))
));
});
dynomics.ui.ui.toggle_select_curve = (function dynomics$ui$ui$toggle_select_curve(p__79745){
var map__79750 = p__79745;
var map__79750__$1 = ((((!((map__79750 == null)))?((((map__79750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79750):map__79750);
var state = map__79750__$1;
var map__79751 = cljs.core.get.call(null,map__79750__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79751__$1 = ((((!((map__79751 == null)))?((((map__79751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79751):map__79751);
var p = cljs.core.get.call(null,map__79751__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__79751__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__79751__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"(de)select curve",path);

return dynomics.space.core.toggle_select_curve.call(null,state,path);
});
dynomics.ui.ui.toggle_active = (function dynomics$ui$ui$toggle_active(p__79754){
var map__79760 = p__79754;
var map__79760__$1 = ((((!((map__79760 == null)))?((((map__79760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79760):map__79760);
var state = map__79760__$1;
var map__79761 = cljs.core.get.call(null,map__79760__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79761__$1 = ((((!((map__79761 == null)))?((((map__79761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79761):map__79761);
var vec__79762 = cljs.core.get.call(null,map__79761__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__79762,(0),null);
var y = cljs.core.nth.call(null,vec__79762,(1),null);
var id = cljs.core.get.call(null,map__79761__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__79761__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"toggle active",path);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891)], null),((function (map__79760,map__79760__$1,state,map__79761,map__79761__$1,vec__79762,x,y,id,path){
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
});})(map__79760,map__79760__$1,state,map__79761,map__79761__$1,vec__79762,x,y,id,path))
);
});
/**
 * Select node to move
 */
dynomics.ui.ui.select_node_for_move = (function dynomics$ui$ui$select_node_for_move(p__79765){
var map__79770 = p__79765;
var map__79770__$1 = ((((!((map__79770 == null)))?((((map__79770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79770):map__79770);
var state = map__79770__$1;
var map__79771 = cljs.core.get.call(null,map__79770__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79771__$1 = ((((!((map__79771 == null)))?((((map__79771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79771):map__79771);
var p = cljs.core.get.call(null,map__79771__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__79771__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select node to move ",path);

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-when-selected","position-when-selected",1681219792)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select curve to move
 */
dynomics.ui.ui.select_curve_for_move = (function dynomics$ui$ui$select_curve_for_move(p__79774){
var map__79779 = p__79774;
var map__79779__$1 = ((((!((map__79779 == null)))?((((map__79779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79779):map__79779);
var state = map__79779__$1;
var map__79780 = cljs.core.get.call(null,map__79779__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79780__$1 = ((((!((map__79780 == null)))?((((map__79780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79780):map__79780);
var p = cljs.core.get.call(null,map__79780__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__79780__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select curve for move ",path,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null)));

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,dynomics.space.core.toggle_select_curve.call(null,state,path)),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select object
 */
dynomics.ui.ui.select_object = (function dynomics$ui$ui$select_object(p__79783){
var map__79788 = p__79783;
var map__79788__$1 = ((((!((map__79788 == null)))?((((map__79788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79788):map__79788);
var state = map__79788__$1;
var map__79789 = cljs.core.get.call(null,map__79788__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79789__$1 = ((((!((map__79789 == null)))?((((map__79789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79789):map__79789);
var path = cljs.core.get.call(null,map__79789__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tipe = cljs.core.get.call(null,map__79789__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"select object",path,tipe);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,tipe)], null),cljs.core.conj,path);
});
/**
 * Deselect object
 */
dynomics.ui.ui.deselect_object = (function dynomics$ui$ui$deselect_object(p__79792){
var map__79801 = p__79792;
var map__79801__$1 = ((((!((map__79801 == null)))?((((map__79801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79801):map__79801);
var state = map__79801__$1;
var map__79802 = cljs.core.get.call(null,map__79801__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__79802__$1 = ((((!((map__79802 == null)))?((((map__79802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79802):map__79802);
var o = cljs.core.get.call(null,map__79802__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var map__79803 = cljs.core.get.call(null,map__79802__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79803__$1 = ((((!((map__79803 == null)))?((((map__79803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79803):map__79803);
var p1 = cljs.core.get.call(null,map__79803__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t1 = cljs.core.get.call(null,map__79803__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var map__79804 = cljs.core.get.call(null,map__79801__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79804__$1 = ((((!((map__79804 == null)))?((((map__79804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79804):map__79804);
var p2 = cljs.core.get.call(null,map__79804__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t2 = cljs.core.get.call(null,map__79804__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
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
dynomics.ui.ui.deselect_node = (function dynomics$ui$ui$deselect_node(p__79809){
var map__79814 = p__79809;
var map__79814__$1 = ((((!((map__79814 == null)))?((((map__79814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79814):map__79814);
var state = map__79814__$1;
var map__79815 = cljs.core.get.call(null,map__79814__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79815__$1 = ((((!((map__79815 == null)))?((((map__79815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79815):map__79815);
var path = cljs.core.get.call(null,map__79815__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.disj,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),false);
});
/**
 * Deselect curve
 */
dynomics.ui.ui.deselect_curve = (function dynomics$ui$ui$deselect_curve(p__79818){
var map__79823 = p__79818;
var map__79823__$1 = ((((!((map__79823 == null)))?((((map__79823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79823):map__79823);
var state = map__79823__$1;
var map__79824 = cljs.core.get.call(null,map__79823__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79824__$1 = ((((!((map__79824 == null)))?((((map__79824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79824):map__79824);
var p = cljs.core.get.call(null,map__79824__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__79824__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,dynomics.space.core.deselect_curve.call(null,state,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
dynomics.ui.ui.hide_context_menu = (function dynomics$ui$ui$hide_context_menu(state){
return cljs.core.assoc.call(null,dynomics.ui.ui.deselect_object.call(null,state),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),null,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
dynomics.ui.ui.show_context_menu = (function dynomics$ui$ui$show_context_menu(p__79827){
var map__79835 = p__79827;
var map__79835__$1 = ((((!((map__79835 == null)))?((((map__79835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79835):map__79835);
var state = map__79835__$1;
var map__79836 = cljs.core.get.call(null,map__79835__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79836__$1 = ((((!((map__79836 == null)))?((((map__79836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79836):map__79836);
var event = map__79836__$1;
var ep = cljs.core.get.call(null,map__79836__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var mp = cljs.core.get.call(null,map__79836__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var o = cljs.core.get.call(null,map__79836__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var context_menu = cljs.core.get.call(null,map__79836__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
cljs.core.println.call(null,"show cm",o);

return cljs.core.assoc.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.select_object.call(null,state),cljs.core.map.call(null,((function (map__79835,map__79835__$1,state,map__79836,map__79836__$1,event,ep,mp,o,context_menu){
return (function (p__79839){
var map__79840 = p__79839;
var map__79840__$1 = ((((!((map__79840 == null)))?((((map__79840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79840):map__79840);
var option = map__79840__$1;
var f = cljs.core.get.call(null,map__79840__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.truth_(f)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.assoc,option,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.deref.call(null,f)], true, false);
} else {
return option;
}
});})(map__79835,map__79835__$1,state,map__79836,map__79836__$1,event,ep,mp,o,context_menu))
,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null)))),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__35422__auto__ = ep;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return mp;
}
})(),new cljs.core.Keyword(null,"object","object",1474613949),o,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null))], null));
});
dynomics.ui.ui.toggle_context_menu = (function dynomics$ui$ui$toggle_context_menu(p__79842){
var map__79845 = p__79842;
var map__79845__$1 = ((((!((map__79845 == null)))?((((map__79845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79845):map__79845);
var state = map__79845__$1;
var context_menu = cljs.core.get.call(null,map__79845__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
if(cljs.core.truth_(context_menu)){
return dynomics.ui.ui.hide_context_menu.call(null,state);
} else {
return dynomics.ui.ui.show_context_menu.call(null,state);
}
});
dynomics.ui.ui.toggle_left_panel = (function dynomics$ui$ui$toggle_left_panel(p__79847){
var map__79850 = p__79847;
var map__79850__$1 = ((((!((map__79850 == null)))?((((map__79850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79850):map__79850);
var state = map__79850__$1;
var left_panel_QMARK_ = cljs.core.get.call(null,map__79850__$1,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317),cljs.core.not.call(null,left_panel_QMARK_));
});
dynomics.ui.ui.switch_styles = (function dynomics$ui$ui$switch_styles(p__79852){
var map__79855 = p__79852;
var map__79855__$1 = ((((!((map__79855 == null)))?((((map__79855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79855):map__79855);
var state = map__79855__$1;
var style = cljs.core.get.call(null,map__79855__$1,new cljs.core.Keyword(null,"style","style",-496642736));
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
dynomics.ui.ui.move_objects = (function dynomics$ui$ui$move_objects(p__79857){
var map__79867 = p__79857;
var map__79867__$1 = ((((!((map__79867 == null)))?((((map__79867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79867):map__79867);
var state = map__79867__$1;
var map__79868 = cljs.core.get.call(null,map__79867__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__79868__$1 = ((((!((map__79868 == null)))?((((map__79868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79868):map__79868);
var space = map__79868__$1;
var selected_nodes = cljs.core.get.call(null,map__79868__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var zoom = cljs.core.get.call(null,map__79868__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__79869 = cljs.core.get.call(null,map__79867__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79869__$1 = ((((!((map__79869 == null)))?((((map__79869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79869):map__79869);
var vec__79870 = cljs.core.get.call(null,map__79869__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__79870,(0),null);
var y = cljs.core.nth.call(null,vec__79870,(1),null);
var ck = cljs.core.get.call(null,map__79869__$1,new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989));
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__79867,map__79867__$1,state,map__79868,map__79868__$1,space,selected_nodes,zoom,map__79869,map__79869__$1,vec__79870,x,y,ck){
return (function (r,path){
var tfn = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"point","point",1813198264))))?(cljs.core.truth_(ck)?dynomics.space.core.to_space:dynomics.space.core.mirror_node):((function (map__79867,map__79867__$1,state,map__79868,map__79868__$1,space,selected_nodes,zoom,map__79869,map__79869__$1,vec__79870,x,y,ck){
return (function (p,pth,_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,dynomics.ui.ui.relative_to_cursor.call(null,p,pth,state)], null)], null);
});})(map__79867,map__79867__$1,state,map__79868,map__79868__$1,space,selected_nodes,zoom,map__79869,map__79869__$1,vec__79870,x,y,ck))
);
return cljs.core.reduce.call(null,((function (tfn,map__79867,map__79867__$1,state,map__79868,map__79868__$1,space,selected_nodes,zoom,map__79869,map__79869__$1,vec__79870,x,y,ck){
return (function (r__$1,p__79874){
var vec__79875 = p__79874;
var cpath = cljs.core.nth.call(null,vec__79875,(0),null);
var cpoint = cljs.core.nth.call(null,vec__79875,(1),null);
return cljs.core.assoc_in.call(null,r__$1,cljs.core.conj.call(null,cpath,new cljs.core.Keyword(null,"position","position",-2011731912)),cpoint);
});})(tfn,map__79867,map__79867__$1,state,map__79868,map__79868__$1,space,selected_nodes,zoom,map__79869,map__79869__$1,vec__79870,x,y,ck))
,r,tfn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),path,space));
});})(map__79867,map__79867__$1,state,map__79868,map__79868__$1,space,selected_nodes,zoom,map__79869,map__79869__$1,vec__79870,x,y,ck))
,state,selected_nodes),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Pan
 */
dynomics.ui.ui.pan = (function dynomics$ui$ui$pan(p__79876){
var map__79882 = p__79876;
var map__79882__$1 = ((((!((map__79882 == null)))?((((map__79882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79882):map__79882);
var state = map__79882__$1;
var pp = cljs.core.get.call(null,map__79882__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var pan__$1 = cljs.core.get.call(null,map__79882__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__79882__$1,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305));
var zoom = cljs.core.get.call(null,map__79882__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__79883 = cljs.core.get.call(null,map__79882__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79883__$1 = ((((!((map__79883 == null)))?((((map__79883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79883):map__79883);
var p = cljs.core.get.call(null,map__79883__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var pl = cljs.core.get.call(null,map__79883__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var vec__79884 = cljs.core.get.call(null,map__79883__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__79884,(0),null);
var p2 = cljs.core.nth.call(null,vec__79884,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"pan","pan",-307712792),cljs.core.map.call(null,cljs.core._,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / zoom)),p2),sp));
});
/**
 * Start zoom
 */
dynomics.ui.ui.start_zoom = (function dynomics$ui$ui$start_zoom(p__79887){
var map__79893 = p__79887;
var map__79893__$1 = ((((!((map__79893 == null)))?((((map__79893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79893):map__79893);
var state = map__79893__$1;
var zoom = cljs.core.get.call(null,map__79893__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pz = cljs.core.get.call(null,map__79893__$1,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303));
var map__79894 = cljs.core.get.call(null,map__79893__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79894__$1 = ((((!((map__79894 == null)))?((((map__79894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79894):map__79894);
var p = cljs.core.get.call(null,map__79894__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__79895 = cljs.core.get.call(null,map__79894__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__79895,(0),null);
var p2 = cljs.core.nth.call(null,vec__79895,(1),null);
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
dynomics.ui.ui.zoom = (function dynomics$ui$ui$zoom(p__79898){
var map__79904 = p__79898;
var map__79904__$1 = ((((!((map__79904 == null)))?((((map__79904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79904):map__79904);
var state = map__79904__$1;
var zoom__$1 = cljs.core.get.call(null,map__79904__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pan = cljs.core.get.call(null,map__79904__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__79904__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var map__79905 = cljs.core.get.call(null,map__79904__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79905__$1 = ((((!((map__79905 == null)))?((((map__79905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79905):map__79905);
var dy = cljs.core.get.call(null,map__79905__$1,new cljs.core.Keyword(null,"deltaY","deltaY",-879493966));
var p = cljs.core.get.call(null,map__79905__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__79906 = cljs.core.get.call(null,map__79905__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__79906,(0),null);
var p2 = cljs.core.nth.call(null,vec__79906,(1),null);
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
dynomics.ui.ui.move_cursor = (function dynomics$ui$ui$move_cursor(p__79909){
var map__79915 = p__79909;
var map__79915__$1 = ((((!((map__79915 == null)))?((((map__79915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79915):map__79915);
var state = map__79915__$1;
var map__79916 = cljs.core.get.call(null,map__79915__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79916__$1 = ((((!((map__79916 == null)))?((((map__79916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79916):map__79916);
var vec__79917 = cljs.core.get.call(null,map__79916__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__79917,(0),null);
var _ = cljs.core.nth.call(null,vec__79917,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p1);
});
/**
 * Start pan
 */
dynomics.ui.ui.start_pan = (function dynomics$ui$ui$start_pan(p__79920){
var map__79926 = p__79920;
var map__79926__$1 = ((((!((map__79926 == null)))?((((map__79926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79926):map__79926);
var state = map__79926__$1;
var map__79927 = cljs.core.get.call(null,map__79926__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79927__$1 = ((((!((map__79927 == null)))?((((map__79927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79927):map__79927);
var p = cljs.core.get.call(null,map__79927__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__79928 = cljs.core.get.call(null,map__79927__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__79928,(0),null);
var _ = cljs.core.nth.call(null,vec__79928,(1),null);
cljs.core.println.call(null,"start pan",p,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),true,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1);
});
/**
 * End pan
 */
dynomics.ui.ui.end_pan = (function dynomics$ui$ui$end_pan(p__79931){
var map__79936 = p__79931;
var map__79936__$1 = ((((!((map__79936 == null)))?((((map__79936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79936):map__79936);
var state = map__79936__$1;
var map__79937 = cljs.core.get.call(null,map__79936__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79937__$1 = ((((!((map__79937 == null)))?((((map__79937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79937):map__79937);
var p = cljs.core.get.call(null,map__79937__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
/**
 * Add node
 */
dynomics.ui.ui.add_node = (function dynomics$ui$ui$add_node(p__79940){
var map__79945 = p__79940;
var map__79945__$1 = ((((!((map__79945 == null)))?((((map__79945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79945):map__79945);
var state = map__79945__$1;
var map__79946 = cljs.core.get.call(null,map__79945__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79946__$1 = ((((!((map__79946 == null)))?((((map__79946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79946):map__79946);
var p = cljs.core.get.call(null,map__79946__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
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
dynomics.ui.ui.set_node_type = (function dynomics$ui$ui$set_node_type(p__79949){
var map__79954 = p__79949;
var map__79954__$1 = ((((!((map__79954 == null)))?((((map__79954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79954):map__79954);
var state = map__79954__$1;
var map__79955 = cljs.core.get.call(null,map__79954__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79955__$1 = ((((!((map__79955 == null)))?((((map__79955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79955):map__79955);
var id = cljs.core.get.call(null,map__79955__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return dynomics.space.core.set_node_type.call(null,id).call(null,state);
});
dynomics.ui.ui.make_new_node = (function dynomics$ui$ui$make_new_node(p__79958){
var map__79965 = p__79958;
var map__79965__$1 = ((((!((map__79965 == null)))?((((map__79965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79965):map__79965);
var state = map__79965__$1;
var making_node_QMARK_ = cljs.core.get.call(null,map__79965__$1,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115));
var map__79966 = cljs.core.get.call(null,map__79965__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__79966__$1 = ((((!((map__79966 == null)))?((((map__79966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79966):map__79966);
var event = map__79966__$1;
var p = cljs.core.get.call(null,map__79966__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__79966__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.println.call(null,"make node type",id);

if(cljs.core.truth_(making_node_QMARK_)){
return state;
} else {
var map__79969 = dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),true,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489),id));
var map__79969__$1 = ((((!((map__79969 == null)))?((((map__79969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79969):map__79969);
var s = map__79969__$1;
var n = cljs.core.get.call(null,map__79969__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.ui.ui.select_node_for_move.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),n], null))));
}
});
/**
 * Returns a function var to handle the given event
 */
dynomics.ui.ui.match_event = (function dynomics$ui$ui$match_event(p__79971){
var map__80193 = p__79971;
var map__80193__$1 = ((((!((map__80193 == null)))?((((map__80193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80193):map__80193);
var state = map__80193__$1;
var event = cljs.core.get.call(null,map__80193__$1,new cljs.core.Keyword(null,"event","event",301435442));
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || (event.cljs$core$ILookup$))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{var event_shift_key_QMARK___80220 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___80220 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80413){if((e80413 instanceof Error)){
var e__48414__auto__ = e80413;
if((e__48414__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto__;
}
} else {
throw e80413;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80407){if((e80407 instanceof Error)){
var e__48414__auto__ = e80407;
if((e__48414__auto__ === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___80220 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___80220 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80409){if((e80409 instanceof Error)){
var e__48414__auto____$1 = e80409;
if((e__48414__auto____$1 === cljs.core.match.backtrack)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___80224 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80224 === false)){
return (new cljs.core.Delay(((function (state_moving_things_QMARK___80224,e__48414__auto____$1,event_noun__80221,e__48414__auto__,event_verb__80217,map__80193,map__80193__$1,state,event){
return (function (){
return cljs.core.comp.call(null,dynomics.ui.ui.deselect_node,dynomics.ui.ui.toggle_active);
});})(state_moving_things_QMARK___80224,e__48414__auto____$1,event_noun__80221,e__48414__auto__,event_verb__80217,map__80193,map__80193__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80412){if((e80412 instanceof Error)){
var e__48414__auto____$2 = e80412;
if((e__48414__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$2;
}
} else {
throw e80412;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80410){if((e80410 instanceof Error)){
var e__48414__auto____$2 = e80410;
if((e__48414__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$2;
}
} else {
throw e80410;

}
}} else {
throw e__48414__auto____$1;
}
} else {
throw e80409;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80408){if((e80408 instanceof Error)){
var e__48414__auto____$1 = e80408;
if((e__48414__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$1;
}
} else {
throw e80408;

}
}} else {
throw e__48414__auto__;
}
} else {
throw e80407;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80289){if((e80289 instanceof Error)){
var e__48414__auto__ = e80289;
if((e__48414__auto__ === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_button__80218 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__80218 === (0))){
try{var event_id__80219 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_id__80219,new cljs.core.Keyword(null,"add-node-button","add-node-button",-722090690))){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.add_node;},new cljs.core.Symbol("dynomics.ui.ui","add-node","dynomics.ui.ui/add-node",175703617,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"add-node","add-node",-428722461,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",11,1,530,534,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Add node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Add node",(cljs.core.truth_(dynomics.ui.ui.add_node)?dynomics.ui.ui.add_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80406){if((e80406 instanceof Error)){
var e__48414__auto____$1 = e80406;
if((e__48414__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$1;
}
} else {
throw e80406;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80405){if((e80405 instanceof Error)){
var e__48414__auto____$1 = e80405;
if((e__48414__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$1;
}
} else {
throw e80405;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80400){if((e80400 instanceof Error)){
var e__48414__auto____$1 = e80400;
if((e__48414__auto____$1 === cljs.core.match.backtrack)){
try{var event_button__80218 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__80218 === (2))){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80402){if((e80402 instanceof Error)){
var e__48414__auto____$2 = e80402;
if((e__48414__auto____$2 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80403){if((e80403 instanceof Error)){
var e__48414__auto____$3 = e80403;
if((e__48414__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"space","space",348133475))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80404){if((e80404 instanceof Error)){
var e__48414__auto____$4 = e80404;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$4;
}
} else {
throw e80404;

}
}} else {
throw e__48414__auto____$3;
}
} else {
throw e80403;

}
}} else {
throw e__48414__auto____$2;
}
} else {
throw e80402;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80401){if((e80401 instanceof Error)){
var e__48414__auto____$2 = e80401;
if((e__48414__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$2;
}
} else {
throw e80401;

}
}} else {
throw e__48414__auto____$1;
}
} else {
throw e80400;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80290){if((e80290 instanceof Error)){
var e__48414__auto____$1 = e80290;
if((e__48414__auto____$1 === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964))){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.hide_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","hide-context-menu","dynomics.ui.ui/hide-context-menu",-829551965,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"hide-context-menu","hide-context-menu",-210420991,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,378,380,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Hide context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.hide_context_menu)?dynomics.ui.ui.hide_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80399){if((e80399 instanceof Error)){
var e__48414__auto____$2 = e80399;
if((e__48414__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$2;
}
} else {
throw e80399;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80291){if((e80291 instanceof Error)){
var e__48414__auto____$2 = e80291;
if((e__48414__auto____$2 === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_shift_key_QMARK___80220 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___80220 === false)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",23,1,304,308,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80395){if((e80395 instanceof Error)){
var e__48414__auto____$3 = e80395;
if((e__48414__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",23,1,304,308,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80396){if((e80396 instanceof Error)){
var e__48414__auto____$4 = e80396;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__80216 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__80216 === (1))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_curve_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-curve-for-move","dynomics.ui.ui/select-curve-for-move",67176701,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-curve-for-move","select-curve-for-move",268851359,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",24,1,319,323,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select curve to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select curve to move",(cljs.core.truth_(dynomics.ui.ui.select_curve_for_move)?dynomics.ui.ui.select_curve_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80398){if((e80398 instanceof Error)){
var e__48414__auto____$5 = e80398;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e80398;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80397){if((e80397 instanceof Error)){
var e__48414__auto____$5 = e80397;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e80397;

}
}} else {
throw e__48414__auto____$4;
}
} else {
throw e80396;

}
}} else {
throw e__48414__auto____$3;
}
} else {
throw e80395;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80394){if((e80394 instanceof Error)){
var e__48414__auto____$3 = e80394;
if((e__48414__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$3;
}
} else {
throw e80394;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80292){if((e80292 instanceof Error)){
var e__48414__auto____$3 = e80292;
if((e__48414__auto____$3 === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_shift_key_QMARK___80220 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___80220 === false)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___80227 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80227 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,354,358,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80393){if((e80393 instanceof Error)){
var e__48414__auto____$4 = e80393;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$4;
}
} else {
throw e80393;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80391){if((e80391 instanceof Error)){
var e__48414__auto____$4 = e80391;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$4;
}
} else {
throw e80391;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80381){if((e80381 instanceof Error)){
var e__48414__auto____$4 = e80381;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___80230 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80230 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,354,358,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80390){if((e80390 instanceof Error)){
var e__48414__auto____$5 = e80390;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e80390;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80388){if((e80388 instanceof Error)){
var e__48414__auto____$5 = e80388;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e80388;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80382){if((e80382 instanceof Error)){
var e__48414__auto____$5 = e80382;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___80233 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80233 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80387){if((e80387 instanceof Error)){
var e__48414__auto____$6 = e80387;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80387;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80385){if((e80385 instanceof Error)){
var e__48414__auto____$6 = e80385;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80385;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80383){if((e80383 instanceof Error)){
var e__48414__auto____$6 = e80383;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_curve;},new cljs.core.Symbol("dynomics.ui.ui","deselect-curve","dynomics.ui.ui/deselect-curve",-758858976,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-curve","deselect-curve",-29652158,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",17,1,366,370,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect curve",(cljs.core.truth_(dynomics.ui.ui.deselect_curve)?dynomics.ui.ui.deselect_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80384){if((e80384 instanceof Error)){
var e__48414__auto____$7 = e80384;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e80384;

}
}} else {
throw e__48414__auto____$6;
}
} else {
throw e80383;

}
}} else {
throw e__48414__auto____$5;
}
} else {
throw e80382;

}
}} else {
throw e__48414__auto____$4;
}
} else {
throw e80381;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80380){if((e80380 instanceof Error)){
var e__48414__auto____$4 = e80380;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$4;
}
} else {
throw e80380;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80293){if((e80293 instanceof Error)){
var e__48414__auto____$4 = e80293;
if((e__48414__auto____$4 === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__80216 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__80216 === (1))){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___80220 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___80220 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___80237 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___80237 === false)){
try{var state_moving_things_QMARK___80238 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80238 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,490,494,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80379){if((e80379 instanceof Error)){
var e__48414__auto____$5 = e80379;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e80379;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80378){if((e80378 instanceof Error)){
var e__48414__auto____$5 = e80378;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e80378;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80376){if((e80376 instanceof Error)){
var e__48414__auto____$5 = e80376;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e80376;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80375){if((e80375 instanceof Error)){
var e__48414__auto____$5 = e80375;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$5;
}
} else {
throw e80375;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80347){if((e80347 instanceof Error)){
var e__48414__auto____$5 = e80347;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_shift_key_QMARK___80220 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___80220 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___80242 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___80242 === false)){
try{var state_moving_things_QMARK___80243 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80243 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,490,494,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80374){if((e80374 instanceof Error)){
var e__48414__auto____$6 = e80374;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80374;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80373){if((e80373 instanceof Error)){
var e__48414__auto____$6 = e80373;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80373;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80371){if((e80371 instanceof Error)){
var e__48414__auto____$6 = e80371;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80371;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80370){if((e80370 instanceof Error)){
var e__48414__auto____$6 = e80370;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80370;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80348){if((e80348 instanceof Error)){
var e__48414__auto____$6 = e80348;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"space","space",348133475))){
try{var event_shift_key_QMARK___80220 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___80220 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___80247 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___80247 === false)){
try{var state_moving_things_QMARK___80248 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80248 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,490,494,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80369){if((e80369 instanceof Error)){
var e__48414__auto____$7 = e80369;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e80369;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80368){if((e80368 instanceof Error)){
var e__48414__auto____$7 = e80368;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e80368;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80366){if((e80366 instanceof Error)){
var e__48414__auto____$7 = e80366;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e80366;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80365){if((e80365 instanceof Error)){
var e__48414__auto____$7 = e80365;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e80365;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80349){if((e80349 instanceof Error)){
var e__48414__auto____$7 = e80349;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___80252 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___80252 === false)){
try{var state_moving_things_QMARK___80253 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80253 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",15,1,431,435,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80364){if((e80364 instanceof Error)){
var e__48414__auto____$8 = e80364;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e80364;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80363){if((e80363 instanceof Error)){
var e__48414__auto____$8 = e80363;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e80363;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80361){if((e80361 instanceof Error)){
var e__48414__auto____$8 = e80361;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e80361;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80350){if((e80350 instanceof Error)){
var e__48414__auto____$8 = e80350;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___80257 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___80257 === false)){
try{var state_moving_things_QMARK___80258 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80258 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",15,1,431,435,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80360){if((e80360 instanceof Error)){
var e__48414__auto____$9 = e80360;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e80360;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80359){if((e80359 instanceof Error)){
var e__48414__auto____$9 = e80359;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e80359;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80357){if((e80357 instanceof Error)){
var e__48414__auto____$9 = e80357;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e80357;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80351){if((e80351 instanceof Error)){
var e__48414__auto____$9 = e80351;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___80262 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___80262 === false)){
try{var state_moving_things_QMARK___80263 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80263 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",15,1,431,435,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80356){if((e80356 instanceof Error)){
var e__48414__auto____$10 = e80356;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e80356;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80355){if((e80355 instanceof Error)){
var e__48414__auto____$10 = e80355;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e80355;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80353){if((e80353 instanceof Error)){
var e__48414__auto____$10 = e80353;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e80353;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80352){if((e80352 instanceof Error)){
var e__48414__auto____$10 = e80352;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e80352;

}
}} else {
throw e__48414__auto____$9;
}
} else {
throw e80351;

}
}} else {
throw e__48414__auto____$8;
}
} else {
throw e80350;

}
}} else {
throw e__48414__auto____$7;
}
} else {
throw e80349;

}
}} else {
throw e__48414__auto____$6;
}
} else {
throw e80348;

}
}} else {
throw e__48414__auto____$5;
}
} else {
throw e80347;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80333){if((e80333 instanceof Error)){
var e__48414__auto____$5 = e80333;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
try{var event_buttons__80216 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__80216 === (0))){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___80266 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80266 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80346){if((e80346 instanceof Error)){
var e__48414__auto____$6 = e80346;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80346;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80344){if((e80344 instanceof Error)){
var e__48414__auto____$6 = e80344;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80344;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80335){if((e80335 instanceof Error)){
var e__48414__auto____$6 = e80335;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___80269 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80269 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80343){if((e80343 instanceof Error)){
var e__48414__auto____$7 = e80343;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e80343;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80341){if((e80341 instanceof Error)){
var e__48414__auto____$7 = e80341;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e80341;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80336){if((e80336 instanceof Error)){
var e__48414__auto____$7 = e80336;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___80272 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80272 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80340){if((e80340 instanceof Error)){
var e__48414__auto____$8 = e80340;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e80340;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80338){if((e80338 instanceof Error)){
var e__48414__auto____$8 = e80338;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e80338;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80337){if((e80337 instanceof Error)){
var e__48414__auto____$8 = e80337;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e80337;

}
}} else {
throw e__48414__auto____$7;
}
} else {
throw e80336;

}
}} else {
throw e__48414__auto____$6;
}
} else {
throw e80335;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80334){if((e80334 instanceof Error)){
var e__48414__auto____$6 = e80334;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80334;

}
}} else {
throw e__48414__auto____$5;
}
} else {
throw e80333;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80294){if((e80294 instanceof Error)){
var e__48414__auto____$5 = e80294;
if((e__48414__auto____$5 === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_buttons__80216 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__80216 === (1))){
try{var event_shift_key_QMARK___80220 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___80220 === false)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___80276 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___80276 === false)){
try{var state_moving_things_QMARK___80277 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___80277 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_pan;},new cljs.core.Symbol("dynomics.ui.ui","start-pan","dynomics.ui.ui/start-pan",-310203637,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-pan","start-pan",-778345239,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",12,1,508,512,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start pan",(cljs.core.truth_(dynomics.ui.ui.start_pan)?dynomics.ui.ui.start_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80332){if((e80332 instanceof Error)){
var e__48414__auto____$6 = e80332;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80332;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80331){if((e80331 instanceof Error)){
var e__48414__auto____$6 = e80331;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80331;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80329){if((e80329 instanceof Error)){
var e__48414__auto____$6 = e80329;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80329;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80328){if((e80328 instanceof Error)){
var e__48414__auto____$6 = e80328;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80328;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80327){if((e80327 instanceof Error)){
var e__48414__auto____$6 = e80327;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80327;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80326){if((e80326 instanceof Error)){
var e__48414__auto____$6 = e80326;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$6;
}
} else {
throw e80326;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80295){if((e80295 instanceof Error)){
var e__48414__auto____$6 = e80295;
if((e__48414__auto____$6 === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__80216 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__80216 === (1))){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___80280 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___80280 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.pan;},new cljs.core.Symbol("dynomics.ui.ui","pan","dynomics.ui.ui/pan",1533936577,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"pan","pan",1332818735,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",6,1,450,454,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"pp","pp",927842543,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Pan",(cljs.core.truth_(dynomics.ui.ui.pan)?dynomics.ui.ui.pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80325){if((e80325 instanceof Error)){
var e__48414__auto____$7 = e80325;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e80325;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80323){if((e80323 instanceof Error)){
var e__48414__auto____$7 = e80323;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e80323;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80322){if((e80322 instanceof Error)){
var e__48414__auto____$7 = e80322;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e80322;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80321){if((e80321 instanceof Error)){
var e__48414__auto____$7 = e80321;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$7;
}
} else {
throw e80321;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80296){if((e80296 instanceof Error)){
var e__48414__auto____$7 = e80296;
if((e__48414__auto____$7 === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439))){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___80283 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___80283 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,466,470,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80318){if((e80318 instanceof Error)){
var e__48414__auto____$8 = e80318;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___80283 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,state_pan_zoom_QMARK___80283,new cljs.core.Keyword(null,"starting","starting",-1852141466))){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,466,470,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80319){if((e80319 instanceof Error)){
var e__48414__auto____$9 = e80319;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___80283 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___80283 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.zoom;},new cljs.core.Symbol("dynomics.ui.ui","zoom","dynomics.ui.ui/zoom",-926900565,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",7,1,477,481,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"dy","dy",-934888526,null),new cljs.core.Keyword(null,"deltaY","deltaY",-879493966),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Zoom",(cljs.core.truth_(dynomics.ui.ui.zoom)?dynomics.ui.ui.zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80320){if((e80320 instanceof Error)){
var e__48414__auto____$10 = e80320;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e80320;

}
}} else {
throw e__48414__auto____$9;
}
} else {
throw e80319;

}
}} else {
throw e__48414__auto____$8;
}
} else {
throw e80318;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80316){if((e80316 instanceof Error)){
var e__48414__auto____$8 = e80316;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e80316;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80315){if((e80315 instanceof Error)){
var e__48414__auto____$8 = e80315;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$8;
}
} else {
throw e80315;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80297){if((e80297 instanceof Error)){
var e__48414__auto____$8 = e80297;
if((e__48414__auto____$8 === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_buttons__80216 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__80216 === (0))){
try{var event_shift_key_QMARK___80220 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___80220 === false)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___80286 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___80286 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.end_pan;},new cljs.core.Symbol("dynomics.ui.ui","end-pan","dynomics.ui.ui/end-pan",-5094220,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"end-pan","end-pan",-474409646,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",10,1,520,524,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"End pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"End pan",(cljs.core.truth_(dynomics.ui.ui.end_pan)?dynomics.ui.ui.end_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80314){if((e80314 instanceof Error)){
var e__48414__auto____$9 = e80314;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e80314;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80312){if((e80312 instanceof Error)){
var e__48414__auto____$9 = e80312;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e80312;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80311){if((e80311 instanceof Error)){
var e__48414__auto____$9 = e80311;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e80311;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80310){if((e80310 instanceof Error)){
var e__48414__auto____$9 = e80310;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e80310;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80309){if((e80309 instanceof Error)){
var e__48414__auto____$9 = e80309;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$9;
}
} else {
throw e80309;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80298){if((e80298 instanceof Error)){
var e__48414__auto____$9 = e80298;
if((e__48414__auto____$9 === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__80216 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__80216 === (1))){
try{var event_shift_key_QMARK___80220 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___80220 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select_curve;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select-curve","dynomics.ui.ui/toggle-select-curve",1188080702,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select-curve","toggle-select-curve",1792572560,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",22,1,287,289,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select_curve)?dynomics.ui.ui.toggle_select_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80308){if((e80308 instanceof Error)){
var e__48414__auto____$10 = e80308;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e80308;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80307){if((e80307 instanceof Error)){
var e__48414__auto____$10 = e80307;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$10;
}
} else {
throw e80307;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80305){if((e80305 instanceof Error)){
var e__48414__auto____$10 = e80305;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.set_node_type;},new cljs.core.Symbol("dynomics.ui.ui","set-node-type","dynomics.ui.ui/set-node-type",776460294,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"set-node-type","set-node-type",306219192,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,560,564,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"description","description",-1428560544),"Set node type "], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.set_node_type)?dynomics.ui.ui.set_node_type.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80306){if((e80306 instanceof Error)){
var e__48414__auto____$11 = e80306;
if((e__48414__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$11;
}
} else {
throw e80306;

}
}} else {
throw e__48414__auto____$10;
}
} else {
throw e80305;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80299){if((e80299 instanceof Error)){
var e__48414__auto____$10 = e80299;
if((e__48414__auto____$10 === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__80216 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__80216 === (1))){
try{var event_noun__80221 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__80221,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.make_new_node;},new cljs.core.Symbol("dynomics.ui.ui","make-new-node","dynomics.ui.ui/make-new-node",1777852426,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"make-new-node","make-new-node",2047793128,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",17,1,568,571,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"description","description",-1428560544),"Make new node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"making-node?","making-node?",-141094588,null),new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.make_new_node)?dynomics.ui.ui.make_new_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80304){if((e80304 instanceof Error)){
var e__48414__auto____$11 = e80304;
if((e__48414__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$11;
}
} else {
throw e80304;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80303){if((e80303 instanceof Error)){
var e__48414__auto____$11 = e80303;
if((e__48414__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$11;
}
} else {
throw e80303;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80300){if((e80300 instanceof Error)){
var e__48414__auto____$11 = e80300;
if((e__48414__auto____$11 === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"keydown","keydown",-629268186))){
return (new cljs.core.Delay(((function (event_verb__80217,e__48414__auto____$11,e__48414__auto____$10,e__48414__auto____$9,e__48414__auto____$8,e__48414__auto____$7,e__48414__auto____$6,e__48414__auto____$5,e__48414__auto____$4,e__48414__auto____$3,e__48414__auto____$2,e__48414__auto____$1,e__48414__auto__,map__80193,map__80193__$1,state,event){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state);
});})(event_verb__80217,e__48414__auto____$11,e__48414__auto____$10,e__48414__auto____$9,e__48414__auto____$8,e__48414__auto____$7,e__48414__auto____$6,e__48414__auto____$5,e__48414__auto____$4,e__48414__auto____$3,e__48414__auto____$2,e__48414__auto____$1,e__48414__auto__,map__80193,map__80193__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80301){if((e80301 instanceof Error)){
var e__48414__auto____$12 = e80301;
if((e__48414__auto____$12 === cljs.core.match.backtrack)){
try{var event_verb__80217 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__80217,new cljs.core.Keyword(null,"keyup","keyup",-794526927))){
return (new cljs.core.Delay(((function (event_verb__80217,e__48414__auto____$12,e__48414__auto____$11,e__48414__auto____$10,e__48414__auto____$9,e__48414__auto____$8,e__48414__auto____$7,e__48414__auto____$6,e__48414__auto____$5,e__48414__auto____$4,e__48414__auto____$3,e__48414__auto____$2,e__48414__auto____$1,e__48414__auto__,map__80193,map__80193__$1,state,event){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state);
});})(event_verb__80217,e__48414__auto____$12,e__48414__auto____$11,e__48414__auto____$10,e__48414__auto____$9,e__48414__auto____$8,e__48414__auto____$7,e__48414__auto____$6,e__48414__auto____$5,e__48414__auto____$4,e__48414__auto____$3,e__48414__auto____$2,e__48414__auto____$1,e__48414__auto__,map__80193,map__80193__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e80302){if((e80302 instanceof Error)){
var e__48414__auto____$13 = e80302;
if((e__48414__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48414__auto____$13;
}
} else {
throw e80302;

}
}} else {
throw e__48414__auto____$12;
}
} else {
throw e80301;

}
}} else {
throw e__48414__auto____$11;
}
} else {
throw e80300;

}
}} else {
throw e__48414__auto____$10;
}
} else {
throw e80299;

}
}} else {
throw e__48414__auto____$9;
}
} else {
throw e80298;

}
}} else {
throw e__48414__auto____$8;
}
} else {
throw e80297;

}
}} else {
throw e__48414__auto____$7;
}
} else {
throw e80296;

}
}} else {
throw e__48414__auto____$6;
}
} else {
throw e80295;

}
}} else {
throw e__48414__auto____$5;
}
} else {
throw e80294;

}
}} else {
throw e__48414__auto____$4;
}
} else {
throw e80293;

}
}} else {
throw e__48414__auto____$3;
}
} else {
throw e80292;

}
}} else {
throw e__48414__auto____$2;
}
} else {
throw e80291;

}
}} else {
throw e__48414__auto____$1;
}
} else {
throw e80290;

}
}} else {
throw e__48414__auto__;
}
} else {
throw e80289;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e80287){if((e80287 instanceof Error)){
var e__48414__auto__ = e80287;
if((e__48414__auto__ === cljs.core.match.backtrack)){
return null;
} else {
throw e__48414__auto__;
}
} else {
throw e80287;

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
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),(function (p__80425){
var map__80426 = p__80425;
var map__80426__$1 = ((((!((map__80426 == null)))?((((map__80426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80426):map__80426);
var map__80427 = cljs.core.get.call(null,map__80426__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__80427__$1 = ((((!((map__80427 == null)))?((((map__80427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80427):map__80427);
var state_updates = cljs.core.get.call(null,map__80427__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__80426,map__80426__$1,map__80427,map__80427__$1,state_updates){
return (function (p__80430){
var map__80431 = p__80430;
var map__80431__$1 = ((((!((map__80431 == null)))?((((map__80431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80431):map__80431);
var event = map__80431__$1;
var h = cljs.core.get.call(null,map__80431__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return cljs.core.async.put_BANG_.call(null,state_updates,((function (map__80431,map__80431__$1,event,h,map__80426,map__80426__$1,map__80427,map__80427__$1,state_updates){
return (function (s){
var f = (function (){var or__35422__auto__ = h;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return dynomics.ui.ui.match_event.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"event","event",301435442),event));
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (f,map__80431,map__80431__$1,event,h,map__80426,map__80426__$1,map__80427,map__80427__$1,state_updates){
return (function (ss){
if(cljs.core.truth_(f)){
return cljs.core.deref.call(null,f).call(null,cljs.core.assoc.call(null,ss,new cljs.core.Keyword(null,"event","event",301435442),event));
} else {
return ss;
}
});})(f,map__80431,map__80431__$1,event,h,map__80426,map__80426__$1,map__80427,map__80427__$1,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1((function (){var or__35422__auto__ = cljs.core.meta.call(null,f);
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
}
})()),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_(f)?cljs.core.deref.call(null,f):null),new cljs.core.Keyword(null,"event","event",301435442),event)], null);
});})(map__80431,map__80431__$1,event,h,map__80426,map__80426__$1,map__80427,map__80427__$1,state_updates))
);
});})(map__80426,map__80426__$1,map__80427,map__80427__$1,state_updates))
], null)], null);
}),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"load","load",-1318641184)], null),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"toggle-quadrants","toggle-quadrants",-163483615),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),new cljs.core.Keyword(null,"print-state","print-state",-1235922711),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"toggle-quadrant-icons","toggle-quadrant-icons",1640510955),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"toggle-node-types","toggle-node-types",-2069291601),new cljs.core.Keyword(null,"toggle-left-panel","toggle-left-panel",-240911951),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"switch-styles","switch-styles",-1139342249),new cljs.core.Keyword(null,"deactivate-all","deactivate-all",-1221569027)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load space",new cljs.core.Keyword(null,"description","description",-1428560544),"Restores the last saved space",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C3",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.get_state_BANG_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrants",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrants",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Curve types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected curves",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,id){
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Curve type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected curves to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_curve_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"print",new cljs.core.Keyword(null,"name","name",1843675177),"println state",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.print_state], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Remove selected",new cljs.core.Keyword(null,"description","description",-1428560544),"Removes selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2612",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.comp.call(null,dynomics.space.core.deselect_all,dynomics.space.core.remove_selected)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrant icons",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrant icons",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrant-icons","quadrant-icons",737862449)], null))], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deselects all selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deselect_all], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"connect nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect selected nodes",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.curve_between_nodes], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Save space",new cljs.core.Keyword(null,"description","description",-1428560544),"Saves the space in your browser for later (sorry I will swap this icon for the familiar\n                                    floppy-disk icon when I find it",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.persist_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Node types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected nodes",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,p__80433){
var map__80434 = p__80433;
var map__80434__$1 = ((((!((map__80434 == null)))?((((map__80434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80434):map__80434);
var id = cljs.core.get.call(null,map__80434__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Node type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected nodes to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_node_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dynomics.space.core.node_types))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle types",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show types",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-types","node-types",1539943342)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Toggle left panel",new cljs.core.Keyword(null,"description","description",-1428560544),"Shows/hides the left panel",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_left_panel], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Context menu",new cljs.core.Keyword(null,"description","description",-1428560544),"Display context menu",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_context_menu,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option1","option1",-243284328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Option1"], null)], null),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-curve-type1","set-curve-type1",2042367308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(1));
}),null))], null),new cljs.core.Keyword(null,"set-curve-type2","set-curve-type2",1286708706),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 2",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(2));
}),null))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"switch styles",new cljs.core.Keyword(null,"description","description",-1428560544),"change style",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tilde","tilde",-306005780),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.switch_styles], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deactivate all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deactivates all active nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deactivate_all], null)])], null)], null));
});
dynomics.ui.ui.left_right_top_view = (function dynomics$ui$ui$left_right_top_view(p__80436){
var map__80448 = p__80436;
var map__80448__$1 = ((((!((map__80448 == null)))?((((map__80448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80448):map__80448);
var state = map__80448__$1;
var context_menu = cljs.core.get.call(null,map__80448__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__80449 = cljs.core.get.call(null,map__80448__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__80449__$1 = ((((!((map__80449 == null)))?((((map__80449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80449):map__80449);
var selected_nodes = cljs.core.get.call(null,map__80449__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__80450 = cljs.core.get.call(null,map__80448__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__80450__$1 = ((((!((map__80450 == null)))?((((map__80450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80450):map__80450);
var msgs = cljs.core.get.call(null,map__80450__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui80454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui80454 = (function (left_right_top_view,p__80436,map__80448,state,context_menu,map__80449,selected_nodes,map__80450,msgs,meta80455){
this.left_right_top_view = left_right_top_view;
this.p__80436 = p__80436;
this.map__80448 = map__80448;
this.state = state;
this.context_menu = context_menu;
this.map__80449 = map__80449;
this.selected_nodes = selected_nodes;
this.map__80450 = map__80450;
this.msgs = msgs;
this.meta80455 = meta80455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui80454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs){
return (function (_80456,meta80455__$1){
var self__ = this;
var _80456__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui80454(self__.left_right_top_view,self__.p__80436,self__.map__80448,self__.state,self__.context_menu,self__.map__80449,self__.selected_nodes,self__.map__80450,self__.msgs,meta80455__$1));
});})(map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui80454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs){
return (function (_80456){
var self__ = this;
var _80456__$1 = this;
return self__.meta80455;
});})(map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui80454.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui80454.prototype.om$core$IRender$render$arity$1 = ((function (map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs){
return (function (this__44714__auto__){
var self__ = this;
var this__44714__auto____$1 = this;
return om.dom.div.call(null,{"className": "ui"},om.dom.div.call(null,{"className": "main_ui"},om.dom.div.call(null,{"className": [cljs.core.str("left_component "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317).cljs$core$IFn$_invoke$arity$1(self__.state))?"hidden_function":null))].join('')},om.core.build.call(null,dynomics.ui.ui.make_function_selector_view,self__.state),om.dom.div.call(null,{"className": "node_types_box"},om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component.call(null,new cljs.core.Keyword(null,"friendly","friendly",281770577)),cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)),om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663)),cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state))),null),om.dom.div.call(null,{"className": "right_component selectable", "key": "right_component"},cljs.core.map.call(null,((function (this__44714__auto____$1,map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs){
return (function (p__80457){
var vec__80458 = p__80457;
var id = cljs.core.nth.call(null,vec__80458,(0),null);
var component = cljs.core.nth.call(null,vec__80458,(1),null);
return om.core.build.call(null,new cljs.core.Keyword(null,"om-builder","om-builder",1876809590).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(component).call(null,self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
});})(this__44714__auto____$1,map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs))
,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"om-builder","om-builder",1876809590)),cljs.core.val),cljs.core.dissoc.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220))))),(cljs.core.truth_(self__.context_menu)?om.core.build.call(null,dynomics.ui.ui.make_context_menu,cljs.core.assoc.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451)], null)),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs)):null)),om.core.build.call(null,dynomics.ui.ui.make_header_view,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)));
});})(map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui80454.getBasis = ((function (map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"left-right-top-view","left-right-top-view",150328751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null)], null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__80436","p__80436",1570823570,null),new cljs.core.Symbol(null,"map__80448","map__80448",1378275773,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"map__80449","map__80449",896625062,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__80450","map__80450",-1849563391,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"meta80455","meta80455",1915522293,null)], null);
});})(map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui80454.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui80454.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui80454";

dynomics.ui.ui.t_dynomics$ui$ui80454.cljs$lang$ctorPrWriter = ((function (map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui80454");
});})(map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui80454 = ((function (map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs){
return (function dynomics$ui$ui$left_right_top_view_$___GT_t_dynomics$ui$ui80454(left_right_top_view__$1,p__80436__$1,map__80448__$2,state__$1,context_menu__$1,map__80449__$2,selected_nodes__$1,map__80450__$2,msgs__$1,meta80455){
return (new dynomics.ui.ui.t_dynomics$ui$ui80454(left_right_top_view__$1,p__80436__$1,map__80448__$2,state__$1,context_menu__$1,map__80449__$2,selected_nodes__$1,map__80450__$2,msgs__$1,meta80455));
});})(map__80448,map__80448__$1,state,context_menu,map__80449,map__80449__$1,selected_nodes,map__80450,map__80450__$1,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui80454(dynomics$ui$ui$left_right_top_view,p__80436,map__80448__$1,state,context_menu,map__80449__$1,selected_nodes,map__80450__$1,msgs,null));
});
dynomics.ui.ui.main_view = (function dynomics$ui$ui$main_view(){
return (function (p__80467,owner){
var map__80468 = p__80467;
var map__80468__$1 = ((((!((map__80468 == null)))?((((map__80468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80468):map__80468);
var state = map__80468__$1;
var style = cljs.core.get.call(null,map__80468__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui80470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui80470 = (function (main_view,p__80467,owner,map__80468,state,style,meta80471){
this.main_view = main_view;
this.p__80467 = p__80467;
this.owner = owner;
this.map__80468 = map__80468;
this.state = state;
this.style = style;
this.meta80471 = meta80471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui80470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__80468,map__80468__$1,state,style){
return (function (_80472,meta80471__$1){
var self__ = this;
var _80472__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui80470(self__.main_view,self__.p__80467,self__.owner,self__.map__80468,self__.state,self__.style,meta80471__$1));
});})(map__80468,map__80468__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui80470.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__80468,map__80468__$1,state,style){
return (function (_80472){
var self__ = this;
var _80472__$1 = this;
return self__.meta80471;
});})(map__80468,map__80468__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui80470.prototype.om$core$IWillMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui80470.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__80468,map__80468__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936),goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null)))));

dynomics.ui.ui.add_events_BANG_.call(null,self__.state);

return dynomics.ui.messaging.setup_updates.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),((function (___$1,map__80468,map__80468__$1,state,style){
return (function (g){
return om.core.transact_BANG_.call(null,self__.state,((function (___$1,map__80468,map__80468__$1,state,style){
return (function (s){
var map__80473 = g.call(null,s);
var map__80473__$1 = ((((!((map__80473 == null)))?((((map__80473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__80473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__80473):map__80473);
var f = cljs.core.get.call(null,map__80473__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var a = cljs.core.get.call(null,map__80473__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var ss = dynomics.ui.core.update_state.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"action","action",-811238024),(function (){var or__35422__auto__ = a;
if(cljs.core.truth_(or__35422__auto__)){
return or__35422__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.PersistentArrayMap.EMPTY,f);
return ss;
});})(___$1,map__80468,map__80468__$1,state,style))
);
});})(___$1,map__80468,map__80468__$1,state,style))
);
});})(map__80468,map__80468__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui80470.prototype.om$core$IWillReceiveProps$ = true;

dynomics.ui.ui.t_dynomics$ui$ui80470.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__80468,map__80468__$1,state,style){
return (function (this$,pp){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not_EQ_.call(null,self__.style,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(pp))){
var temp__4655__auto___80475 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936));
if(cljs.core.truth_(temp__4655__auto___80475)){
var s_80476 = temp__4655__auto___80475;
goog.style.uninstallStyles(s_80476);
} else {
}

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936),goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null)))));
} else {
return null;
}
});})(map__80468,map__80468__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui80470.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui80470.prototype.om$core$IRender$render$arity$1 = ((function (map__80468,map__80468__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,dynomics.ui.ui.left_right_top_view,self__.state);
});})(map__80468,map__80468__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui80470.getBasis = ((function (map__80468,map__80468__$1,state,style){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"p__80467","p__80467",-1697538045,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__80468","map__80468",767828480,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"meta80471","meta80471",1638802068,null)], null);
});})(map__80468,map__80468__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui80470.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui80470.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui80470";

dynomics.ui.ui.t_dynomics$ui$ui80470.cljs$lang$ctorPrWriter = ((function (map__80468,map__80468__$1,state,style){
return (function (this__36028__auto__,writer__36029__auto__,opt__36030__auto__){
return cljs.core._write.call(null,writer__36029__auto__,"dynomics.ui.ui/t_dynomics$ui$ui80470");
});})(map__80468,map__80468__$1,state,style))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui80470 = ((function (map__80468,map__80468__$1,state,style){
return (function dynomics$ui$ui$main_view_$___GT_t_dynomics$ui$ui80470(main_view__$1,p__80467__$1,owner__$1,map__80468__$2,state__$1,style__$1,meta80471){
return (new dynomics.ui.ui.t_dynomics$ui$ui80470(main_view__$1,p__80467__$1,owner__$1,map__80468__$2,state__$1,style__$1,meta80471));
});})(map__80468,map__80468__$1,state,style))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui80470(dynomics$ui$ui$main_view,p__80467,owner,map__80468__$1,state,style,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Start the application!
 */
dynomics.ui.ui.start = (function dynomics$ui$ui$start(var_args){
var args80477 = [];
var len__36491__auto___80480 = arguments.length;
var i__36492__auto___80481 = (0);
while(true){
if((i__36492__auto___80481 < len__36491__auto___80480)){
args80477.push((arguments[i__36492__auto___80481]));

var G__80482 = (i__36492__auto___80481 + (1));
i__36492__auto___80481 = G__80482;
continue;
} else {
}
break;
}

var G__80479 = args80477.length;
switch (G__80479) {
case 0:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args80477.length)].join('')));

}
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.ui.ui.start.call(null,dynomics.ui.ui.add_components.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.add_functions.call(null,dynomics.ui.ui.add_messaging.call(null,dynomics.ui.ui.add_browser_info.call(null,dynomics.ui.core.make_state.call(null)))))));
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1 = (function (state){
return om.core.root.call(null,dynomics.ui.ui.main_view.call(null),state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("ui")], null));
});

dynomics.ui.ui.start.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=ui.js.map?rel=1459533500461