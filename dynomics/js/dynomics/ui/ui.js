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
dynomics.ui.ui.animation_frame = (function (){var or__35425__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
var or__35425__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__35425__auto____$1)){
return or__35425__auto____$1;
} else {
var or__35425__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__35425__auto____$2)){
return or__35425__auto____$2;
} else {
var or__35425__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__35425__auto____$3)){
return or__35425__auto____$3;
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
dynomics.ui.ui.keydown = (function dynomics$ui$ui$keydown(p__133795,e){
var map__133800 = p__133795;
var map__133800__$1 = ((((!((map__133800 == null)))?((((map__133800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133800):map__133800);
var state = map__133800__$1;
var map__133801 = cljs.core.get.call(null,map__133800__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__133801__$1 = ((((!((map__133801 == null)))?((((map__133801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133801):map__133801);
var msgs = cljs.core.get.call(null,map__133801__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
return cljs.core.async.put_BANG_.call(null,msgs,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
dynomics.ui.ui.keyup = (function dynomics$ui$ui$keyup(p__133804,e){
var map__133809 = p__133804;
var map__133809__$1 = ((((!((map__133809 == null)))?((((map__133809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133809):map__133809);
var state = map__133809__$1;
var map__133810 = cljs.core.get.call(null,map__133809__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__133810__$1 = ((((!((map__133810 == null)))?((((map__133810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133810):map__133810);
var msgs = cljs.core.get.call(null,map__133810__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
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
if(typeof dynomics.ui.ui.t_dynomics$ui$ui133820 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui133820 = (function (make_function_selector_view,state,owner,functions,state_updates,meta133821){
this.make_function_selector_view = make_function_selector_view;
this.state = state;
this.owner = owner;
this.functions = functions;
this.state_updates = state_updates;
this.meta133821 = meta133821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui133820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (functions,state_updates){
return (function (_133822,meta133821__$1){
var self__ = this;
var _133822__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui133820(self__.make_function_selector_view,self__.state,self__.owner,self__.functions,self__.state_updates,meta133821__$1));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui133820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (functions,state_updates){
return (function (_133822){
var self__ = this;
var _133822__$1 = this;
return self__.meta133821;
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui133820.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui133820.prototype.om$core$IRender$render$arity$1 = ((function (functions,state_updates){
return (function (this__38888__auto__){
var self__ = this;
var this__38888__auto____$1 = this;
return om.dom.div.call(null,{"className": "function_selector"},cljs.core.map.call(null,((function (this__38888__auto____$1,functions,state_updates){
return (function (p__133823){
var vec__133824 = p__133823;
var k = cljs.core.nth.call(null,vec__133824,(0),null);
var map__133825 = cljs.core.nth.call(null,vec__133824,(1),null);
var map__133825__$1 = ((((!((map__133825 == null)))?((((map__133825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133825):map__133825);
var naym = cljs.core.get.call(null,map__133825__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__133825__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return om.dom.div.call(null,{"className": "function_selector_item", "id": [cljs.core.str(cljs.core.name.call(null,k))].join(''), "onClick": ((function (vec__133824,k,map__133825,map__133825__$1,naym,description,this__38888__auto____$1,functions,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__133824,k,map__133825,map__133825__$1,naym,description,this__38888__auto____$1,functions,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null),k);
});})(vec__133824,k,map__133825,map__133825__$1,naym,description,this__38888__auto____$1,functions,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"description","description",-1428560544),naym], null)], null));

return null;
});})(vec__133824,k,map__133825,map__133825__$1,naym,description,this__38888__auto____$1,functions,state_updates))
},naym);
});})(this__38888__auto____$1,functions,state_updates))
,self__.functions));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui133820.getBasis = ((function (functions,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-function-selector-view","make-function-selector-view",516344898,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for selecting the current function"], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"functions","functions",1825482993,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta133821","meta133821",1488869944,null)], null);
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui133820.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui133820.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui133820";

dynomics.ui.ui.t_dynomics$ui$ui133820.cljs$lang$ctorPrWriter = ((function (functions,state_updates){
return (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"dynomics.ui.ui/t_dynomics$ui$ui133820");
});})(functions,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui133820 = ((function (functions,state_updates){
return (function dynomics$ui$ui$make_function_selector_view_$___GT_t_dynomics$ui$ui133820(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta133821){
return (new dynomics.ui.ui.t_dynomics$ui$ui133820(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta133821));
});})(functions,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui133820(dynomics$ui$ui$make_function_selector_view,state,owner,functions,state_updates,null));
});
/**
 * Return a component to display a list
 *   of historical states which select a historical
 *   state on mouseover
 */
dynomics.ui.ui.make_history_selector_view = (function dynomics$ui$ui$make_history_selector_view(p__133827,owner){
var map__133838 = p__133827;
var map__133838__$1 = ((((!((map__133838 == null)))?((((map__133838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133838):map__133838);
var state = map__133838__$1;
var map__133839 = cljs.core.get.call(null,map__133838__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__133839__$1 = ((((!((map__133839 == null)))?((((map__133839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133839):map__133839);
var state_updates = cljs.core.get.call(null,map__133839__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var sh = cljs.core.get.call(null,map__133838__$1,new cljs.core.Keyword(null,"show-history","show-history",1972567130));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui133842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui133842 = (function (make_history_selector_view,p__133827,owner,map__133838,state,map__133839,state_updates,sh,meta133843){
this.make_history_selector_view = make_history_selector_view;
this.p__133827 = p__133827;
this.owner = owner;
this.map__133838 = map__133838;
this.state = state;
this.map__133839 = map__133839;
this.state_updates = state_updates;
this.sh = sh;
this.meta133843 = meta133843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui133842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (_133844,meta133843__$1){
var self__ = this;
var _133844__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui133842(self__.make_history_selector_view,self__.p__133827,self__.owner,self__.map__133838,self__.state,self__.map__133839,self__.state_updates,self__.sh,meta133843__$1));
});})(map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui133842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (_133844){
var self__ = this;
var _133844__$1 = this;
return self__.meta133843;
});})(map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui133842.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui133842.prototype.om$core$IRender$render$arity$1 = ((function (map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (this__38888__auto__){
var self__ = this;
var this__38888__auto____$1 = this;
return om.dom.div.call(null,{"className": "history_selector", "onClick": ((function (this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (e){
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.update_in.call(null,s__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),cljs.core.not);
});})(this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
], null);
});})(this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
);
});})(this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
},om.dom.div.call(null,{"className": "history_selector_text"},"History"),om.dom.div.call(null,{"className": (cljs.core.truth_(self__.sh)?"history_selector_visible":"history_selector_hidden")},cljs.core.map.call(null,((function (this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (p__133845){
var map__133846 = p__133845;
var map__133846__$1 = ((((!((map__133846 == null)))?((((map__133846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133846):map__133846);
var history_item = map__133846__$1;
var action = cljs.core.get.call(null,map__133846__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var version = cljs.core.get.call(null,map__133846__$1,new cljs.core.Keyword(null,"version","version",425292698));
var previous_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)) - (1))));
var previous_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)));
return om.dom.div.call(null,{"className": [cljs.core.str("history_selector_item "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_action)))?"historical":""))].join(''), "id": [cljs.core.str("history_version_"),cljs.core.str(previous_version)].join(''), "onMouseOver": ((function (previous_action,previous_version,map__133846,map__133846__$1,history_item,action,version,this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (previous_action,previous_version,map__133846,map__133846__$1,history_item,action,version,this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (previous_action,previous_version,map__133846,map__133846__$1,history_item,action,version,this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.merge.call(null,om.core.value.call(null,history_item),cljs.core.select_keys.call(null,s__$1,cljs.core.conj.call(null,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(s__$1),new cljs.core.Keyword(null,"history","history",-247395220))));
});})(previous_action,previous_version,map__133846,map__133846__$1,history_item,action,version,this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desccription","desccription",-1060114044),[cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action))].join(''),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"id","id",-1388402092),version], null)], null);
});})(previous_action,previous_version,map__133846,map__133846__$1,history_item,action,version,this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
);

return null;
});})(previous_action,previous_version,map__133846,map__133846__$1,history_item,action,version,this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action));
});})(this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
,cljs.core.filter.call(null,((function (this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (hi){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi)) - (1)))));
});})(this__38888__auto____$1,map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
,cljs.core.reverse.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.state),self__.state))))));
});})(map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui133842.getBasis = ((function (map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-history-selector-view","make-history-selector-view",1677763159,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Keyword(null,"show-history","show-history",1972567130),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a component to display a list\n  of historical states which select a historical\n  state on mouseover"], null)),new cljs.core.Symbol(null,"p__133827","p__133827",97828921,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__133838","map__133838",1588930584,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__133839","map__133839",-151166685,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Symbol(null,"meta133843","meta133843",1179416075,null)], null);
});})(map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui133842.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui133842.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui133842";

dynomics.ui.ui.t_dynomics$ui$ui133842.cljs$lang$ctorPrWriter = ((function (map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"dynomics.ui.ui/t_dynomics$ui$ui133842");
});})(map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui133842 = ((function (map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh){
return (function dynomics$ui$ui$make_history_selector_view_$___GT_t_dynomics$ui$ui133842(make_history_selector_view__$1,p__133827__$1,owner__$1,map__133838__$2,state__$1,map__133839__$2,state_updates__$1,sh__$1,meta133843){
return (new dynomics.ui.ui.t_dynomics$ui$ui133842(make_history_selector_view__$1,p__133827__$1,owner__$1,map__133838__$2,state__$1,map__133839__$2,state_updates__$1,sh__$1,meta133843));
});})(map__133838,map__133838__$1,state,map__133839,map__133839__$1,state_updates,sh))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui133842(dynomics$ui$ui$make_history_selector_view,p__133827,owner,map__133838__$1,state,map__133839__$1,state_updates,sh,null));
});
dynomics.ui.ui.make_context_menu = (function dynomics$ui$ui$make_context_menu(p__133848){
var map__133861 = p__133848;
var map__133861__$1 = ((((!((map__133861 == null)))?((((map__133861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133861):map__133861);
var map__133862 = cljs.core.get.call(null,map__133861__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__133862__$1 = ((((!((map__133862 == null)))?((((map__133862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133862):map__133862);
var vec__133863 = cljs.core.get.call(null,map__133862__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__133863,(0),null);
var y = cljs.core.nth.call(null,vec__133863,(1),null);
var o = cljs.core.get.call(null,map__133862__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var options = cljs.core.get.call(null,map__133862__$1,new cljs.core.Keyword(null,"options","options",99638489));
var msgs = cljs.core.get.call(null,map__133861__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui133866 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui133866 = (function (options,x,vec__133863,y,o,map__133861,p__133848,map__133862,msgs,make_context_menu,meta133867){
this.options = options;
this.x = x;
this.vec__133863 = vec__133863;
this.y = y;
this.o = o;
this.map__133861 = map__133861;
this.p__133848 = p__133848;
this.map__133862 = map__133862;
this.msgs = msgs;
this.make_context_menu = make_context_menu;
this.meta133867 = meta133867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui133866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs){
return (function (_133868,meta133867__$1){
var self__ = this;
var _133868__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui133866(self__.options,self__.x,self__.vec__133863,self__.y,self__.o,self__.map__133861,self__.p__133848,self__.map__133862,self__.msgs,self__.make_context_menu,meta133867__$1));
});})(map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui133866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs){
return (function (_133868){
var self__ = this;
var _133868__$1 = this;
return self__.meta133867;
});})(map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui133866.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui133866.prototype.om$core$IRender$render$arity$1 = ((function (map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs){
return (function (this__38888__auto__){
var self__ = this;
var this__38888__auto____$1 = this;
return React.createElement("div",{"style": {"transform": [cljs.core.str("translate("),cljs.core.str(self__.x),cljs.core.str("px,"),cljs.core.str(self__.y),cljs.core.str("px)")].join('')}, "id": "context-menu", "className": "context_menu", "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseLeave": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY)},React.createElement("div",{"className": "context_menu_title"},sablono.interpreter.interpret.call(null,[cljs.core.str("Options for "),cljs.core.str(cljs.core.name.call(null,self__.o))].join(''))),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (this__38888__auto____$1,map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs){
return (function (p__133869){
var vec__133870 = p__133869;
var k = cljs.core.nth.call(null,vec__133870,(0),null);
var map__133871 = cljs.core.nth.call(null,vec__133870,(1),null);
var map__133871__$1 = ((((!((map__133871 == null)))?((((map__133871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133871):map__133871);
var naym = cljs.core.get.call(null,map__133871__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kb = cljs.core.get.call(null,map__133871__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var f = cljs.core.get.call(null,map__133871__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"context_menu_option",new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),k], null),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),f], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(naym),cljs.core.str("  ")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"keyboard_shortcut"], null),[cljs.core.str(kb)].join('')], null)], null);
});})(this__38888__auto____$1,map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs))
,self__.options)));
});})(map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui133866.getBasis = ((function (map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"vec__133863","vec__133863",-220437499,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"map__133861","map__133861",1901139440,null),new cljs.core.Symbol(null,"p__133848","p__133848",-2099494728,null),new cljs.core.Symbol(null,"map__133862","map__133862",1937631480,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-context-menu","make-context-menu",-526000036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"options","options",99638489)], true, false),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], true, false)], null)))], null)),new cljs.core.Symbol(null,"meta133867","meta133867",-799090695,null)], null);
});})(map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui133866.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui133866.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui133866";

dynomics.ui.ui.t_dynomics$ui$ui133866.cljs$lang$ctorPrWriter = ((function (map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs){
return (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"dynomics.ui.ui/t_dynomics$ui$ui133866");
});})(map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui133866 = ((function (map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs){
return (function dynomics$ui$ui$make_context_menu_$___GT_t_dynomics$ui$ui133866(options__$1,x__$1,vec__133863__$1,y__$1,o__$1,map__133861__$2,p__133848__$1,map__133862__$2,msgs__$1,make_context_menu__$1,meta133867){
return (new dynomics.ui.ui.t_dynomics$ui$ui133866(options__$1,x__$1,vec__133863__$1,y__$1,o__$1,map__133861__$2,p__133848__$1,map__133862__$2,msgs__$1,make_context_menu__$1,meta133867));
});})(map__133861,map__133861__$1,map__133862,map__133862__$1,vec__133863,x,y,o,options,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui133866(options,x,vec__133863,y,o,map__133861__$1,p__133848,map__133862__$1,msgs,dynomics$ui$ui$make_context_menu,null));
});
/**
 * Returns a component for the top header
 */
dynomics.ui.ui.make_header_view = (function dynomics$ui$ui$make_header_view(p__133873){
var map__133879 = p__133873;
var map__133879__$1 = ((((!((map__133879 == null)))?((((map__133879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133879):map__133879);
var state = map__133879__$1;
var logo_text = cljs.core.get.call(null,map__133879__$1,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
var app_name = cljs.core.get.call(null,map__133879__$1,new cljs.core.Keyword(null,"app-name","app-name",-268811251));
var app_version = cljs.core.get.call(null,map__133879__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
var state_version = cljs.core.get.call(null,map__133879__$1,new cljs.core.Keyword(null,"state-version","state-version",1282692697));
var action = cljs.core.get.call(null,map__133879__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui133881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui133881 = (function (make_header_view,p__133873,map__133879,state,logo_text,app_name,app_version,state_version,action,meta133882){
this.make_header_view = make_header_view;
this.p__133873 = p__133873;
this.map__133879 = map__133879;
this.state = state;
this.logo_text = logo_text;
this.app_name = app_name;
this.app_version = app_version;
this.state_version = state_version;
this.action = action;
this.meta133882 = meta133882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui133881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__133879,map__133879__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_133883,meta133882__$1){
var self__ = this;
var _133883__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui133881(self__.make_header_view,self__.p__133873,self__.map__133879,self__.state,self__.logo_text,self__.app_name,self__.app_version,self__.state_version,self__.action,meta133882__$1));
});})(map__133879,map__133879__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui133881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__133879,map__133879__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_133883){
var self__ = this;
var _133883__$1 = this;
return self__.meta133882;
});})(map__133879,map__133879__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui133881.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui133881.prototype.om$core$IRender$render$arity$1 = ((function (map__133879,map__133879__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__38888__auto__){
var self__ = this;
var this__38888__auto____$1 = this;
return om.dom.div.call(null,{"className": "top_component"},null,null);
});})(map__133879,map__133879__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui133881.getBasis = ((function (map__133879,map__133879__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-header-view","make-header-view",2348093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the top header"], null)),new cljs.core.Symbol(null,"p__133873","p__133873",52376268,null),new cljs.core.Symbol(null,"map__133879","map__133879",1447453544,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Symbol(null,"meta133882","meta133882",1980373637,null)], null);
});})(map__133879,map__133879__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui133881.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui133881.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui133881";

dynomics.ui.ui.t_dynomics$ui$ui133881.cljs$lang$ctorPrWriter = ((function (map__133879,map__133879__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"dynomics.ui.ui/t_dynomics$ui$ui133881");
});})(map__133879,map__133879__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui133881 = ((function (map__133879,map__133879__$1,state,logo_text,app_name,app_version,state_version,action){
return (function dynomics$ui$ui$make_header_view_$___GT_t_dynomics$ui$ui133881(make_header_view__$1,p__133873__$1,map__133879__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta133882){
return (new dynomics.ui.ui.t_dynomics$ui$ui133881(make_header_view__$1,p__133873__$1,map__133879__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta133882));
});})(map__133879,map__133879__$1,state,logo_text,app_name,app_version,state_version,action))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui133881(dynomics$ui$ui$make_header_view,p__133873,map__133879__$1,state,logo_text,app_name,app_version,state_version,action,null));
});
dynomics.ui.ui.evaluate = (function dynomics$ui$ui$evaluate(s,sexp,f){
return null;
});
dynomics.ui.ui.make_footer_view = (function dynomics$ui$ui$make_footer_view(p__133884){
var map__133894 = p__133884;
var map__133894__$1 = ((((!((map__133894 == null)))?((((map__133894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133894):map__133894);
var state = map__133894__$1;
var map__133895 = cljs.core.get.call(null,map__133894__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__133895__$1 = ((((!((map__133895 == null)))?((((map__133895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133895):map__133895);
var state_updates = cljs.core.get.call(null,map__133895__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var map__133896 = cljs.core.get.call(null,map__133894__$1,new cljs.core.Keyword(null,"eval","eval",-1103567905));
var map__133896__$1 = ((((!((map__133896 == null)))?((((map__133896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133896):map__133896);
var last_result = cljs.core.get.call(null,map__133896__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var last_exps = cljs.core.get.call(null,map__133896__$1,new cljs.core.Keyword(null,"exps","exps",-877274249));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui133900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui133900 = (function (make_footer_view,p__133884,map__133894,state,map__133895,state_updates,map__133896,last_result,last_exps,meta133901){
this.make_footer_view = make_footer_view;
this.p__133884 = p__133884;
this.map__133894 = map__133894;
this.state = state;
this.map__133895 = map__133895;
this.state_updates = state_updates;
this.map__133896 = map__133896;
this.last_result = last_result;
this.last_exps = last_exps;
this.meta133901 = meta133901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui133900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps){
return (function (_133902,meta133901__$1){
var self__ = this;
var _133902__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui133900(self__.make_footer_view,self__.p__133884,self__.map__133894,self__.state,self__.map__133895,self__.state_updates,self__.map__133896,self__.last_result,self__.last_exps,meta133901__$1));
});})(map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui133900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps){
return (function (_133902){
var self__ = this;
var _133902__$1 = this;
return self__.meta133901;
});})(map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui133900.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui133900.prototype.om$core$IRender$render$arity$1 = ((function (map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps){
return (function (this__38888__auto__){
var self__ = this;
var this__38888__auto____$1 = this;
return om.dom.div.call(null,{"className": "bottom_component"},om.dom.input.call(null,{"className": "eval_input", "type": "text", "size": (64), "onKeyDown": ((function (this__38888__auto____$1,map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps){
return (function (e){
e.stopPropagation();


return null;
});})(this__38888__auto____$1,map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps))
}),om.dom.div.call(null,{"className": "eval_result"},[cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.last_result))].join('')));
});})(map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui133900.getBasis = ((function (map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-footer-view","make-footer-view",-746293906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Keyword(null,"exps","exps",-877274249)], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__133884","p__133884",1134987051,null),new cljs.core.Symbol(null,"map__133894","map__133894",-1935838098,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__133895","map__133895",-1985573264,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"map__133896","map__133896",588918629,null),new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Symbol(null,"meta133901","meta133901",825381404,null)], null);
});})(map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui133900.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui133900.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui133900";

dynomics.ui.ui.t_dynomics$ui$ui133900.cljs$lang$ctorPrWriter = ((function (map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps){
return (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"dynomics.ui.ui/t_dynomics$ui$ui133900");
});})(map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui133900 = ((function (map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps){
return (function dynomics$ui$ui$make_footer_view_$___GT_t_dynomics$ui$ui133900(make_footer_view__$1,p__133884__$1,map__133894__$2,state__$1,map__133895__$2,state_updates__$1,map__133896__$2,last_result__$1,last_exps__$1,meta133901){
return (new dynomics.ui.ui.t_dynomics$ui$ui133900(make_footer_view__$1,p__133884__$1,map__133894__$2,state__$1,map__133895__$2,state_updates__$1,map__133896__$2,last_result__$1,last_exps__$1,meta133901));
});})(map__133894,map__133894__$1,state,map__133895,map__133895__$1,state_updates,map__133896,map__133896__$1,last_result,last_exps))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui133900(dynomics$ui$ui$make_footer_view,p__133884,map__133894__$1,state,map__133895__$1,state_updates,map__133896__$1,last_result,last_exps,null));
});
dynomics.ui.ui.add_components = (function dynomics$ui$ui$add_components(state){
var seq__133907_133911 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null))))));
var chunk__133908_133912 = null;
var count__133909_133913 = (0);
var i__133910_133914 = (0);
while(true){
if((i__133910_133914 < count__133909_133913)){
var component_133915 = cljs.core._nth.call(null,chunk__133908_133912,i__133910_133914);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_133915);

var G__133916 = seq__133907_133911;
var G__133917 = chunk__133908_133912;
var G__133918 = count__133909_133913;
var G__133919 = (i__133910_133914 + (1));
seq__133907_133911 = G__133916;
chunk__133908_133912 = G__133917;
count__133909_133913 = G__133918;
i__133910_133914 = G__133919;
continue;
} else {
var temp__4657__auto___133920 = cljs.core.seq.call(null,seq__133907_133911);
if(temp__4657__auto___133920){
var seq__133907_133921__$1 = temp__4657__auto___133920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__133907_133921__$1)){
var c__36236__auto___133922 = cljs.core.chunk_first.call(null,seq__133907_133921__$1);
var G__133923 = cljs.core.chunk_rest.call(null,seq__133907_133921__$1);
var G__133924 = c__36236__auto___133922;
var G__133925 = cljs.core.count.call(null,c__36236__auto___133922);
var G__133926 = (0);
seq__133907_133911 = G__133923;
chunk__133908_133912 = G__133924;
count__133909_133913 = G__133925;
i__133910_133914 = G__133926;
continue;
} else {
var component_133927 = cljs.core.first.call(null,seq__133907_133921__$1);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_133927);

var G__133928 = cljs.core.next.call(null,seq__133907_133921__$1);
var G__133929 = null;
var G__133930 = (0);
var G__133931 = (0);
seq__133907_133911 = G__133928;
chunk__133908_133912 = G__133929;
count__133909_133913 = G__133930;
i__133910_133914 = G__133931;
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
var args133932 = [];
var len__36494__auto___133939 = arguments.length;
var i__36495__auto___133940 = (0);
while(true){
if((i__36495__auto___133940 < len__36494__auto___133939)){
args133932.push((arguments[i__36495__auto___133940]));

var G__133941 = (i__36495__auto___133940 + (1));
i__36495__auto___133940 = G__133941;
continue;
} else {
}
break;
}

var G__133934 = args133932.length;
switch (G__133934) {
case 1:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args133932.length)].join('')));

}
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.ui.add_keybindings.call(null,state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)));
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2 = (function (state,tools){
return cljs.core.reduce.call(null,(function (r,p__133935){
var vec__133936 = p__133935;
var k = cljs.core.nth.call(null,vec__133936,(0),null);
var map__133937 = cljs.core.nth.call(null,vec__133936,(1),null);
var map__133937__$1 = ((((!((map__133937 == null)))?((((map__133937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133937):map__133937);
var f = cljs.core.get.call(null,map__133937__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var kb = cljs.core.get.call(null,map__133937__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var naym = cljs.core.get.call(null,map__133937__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tools__$1 = cljs.core.get.call(null,map__133937__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
if(cljs.core.truth_(f)){
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),((function (vec__133936,k,map__133937,map__133937__$1,f,kb,naym,tools__$1){
return (function (s){
cljs.core.println.call(null,naym);

return ((cljs.core.delay_QMARK_.call(null,f))?cljs.core.deref.call(null,f):f).call(null,s);
});})(vec__133936,k,map__133937,map__133937__$1,f,kb,naym,tools__$1))
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
dynomics.ui.ui.where_they_were = (function dynomics$ui$ui$where_they_were(p__133943){
var map__133948 = p__133943;
var map__133948__$1 = ((((!((map__133948 == null)))?((((map__133948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133948):map__133948);
var state = map__133948__$1;
var map__133949 = cljs.core.get.call(null,map__133948__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__133949__$1 = ((((!((map__133949 == null)))?((((map__133949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133949):map__133949);
var space = map__133949__$1;
var selected_nodes = cljs.core.get.call(null,map__133949__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,((function (map__133948,map__133948__$1,state,map__133949,map__133949__$1,space,selected_nodes){
return (function (s,path){
return cljs.core.assoc_in.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))));
});})(map__133948,map__133948__$1,state,map__133949,map__133949__$1,space,selected_nodes))
,state,cljs.core.remove.call(null,cljs.core.nil_QMARK_,selected_nodes));
});
dynomics.ui.ui.relative_to_cursor = (function dynomics$ui$ui$relative_to_cursor(var_args){
var args133952 = [];
var len__36494__auto___133955 = arguments.length;
var i__36495__auto___133956 = (0);
while(true){
if((i__36495__auto___133956 < len__36494__auto___133955)){
args133952.push((arguments[i__36495__auto___133956]));

var G__133957 = (i__36495__auto___133956 + (1));
i__36495__auto___133956 = G__133957;
continue;
} else {
}
break;
}

var G__133954 = args133952.length;
switch (G__133954) {
case 3:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args133952.length)].join('')));

}
});

dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (p,pth,state){
return dynomics.ui.ui.relative_to_cursor.call(null,p,pth,cljs.core.get_in.call(null,state,cljs.core.conj.call(null,pth,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089).cljs$core$IFn$_invoke$arity$1(state));
});

dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4 = (function (p,pth,pws,pasom){
return cljs.core.map.call(null,cljs.core._PLUS_,p,cljs.core.map.call(null,cljs.core._,pws,pasom));
});

dynomics.ui.ui.relative_to_cursor.cljs$lang$maxFixedArity = 4;
dynomics.ui.ui.toggle_select = (function dynomics$ui$ui$toggle_select(p__133959){
var map__133964 = p__133959;
var map__133964__$1 = ((((!((map__133964 == null)))?((((map__133964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133964):map__133964);
var state = map__133964__$1;
var map__133965 = cljs.core.get.call(null,map__133964__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__133965__$1 = ((((!((map__133965 == null)))?((((map__133965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133965):map__133965);
var p = cljs.core.get.call(null,map__133965__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__133965__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__133965__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"toggle select",path);

return dynomics.space.core.add_curve_between_nodes.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (map__133964,map__133964__$1,state,map__133965,map__133965__$1,p,id,path){
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
});})(map__133964,map__133964__$1,state,map__133965,map__133965__$1,p,id,path))
));
});
dynomics.ui.ui.toggle_select_curve = (function dynomics$ui$ui$toggle_select_curve(p__133968){
var map__133973 = p__133968;
var map__133973__$1 = ((((!((map__133973 == null)))?((((map__133973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133973):map__133973);
var state = map__133973__$1;
var map__133974 = cljs.core.get.call(null,map__133973__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__133974__$1 = ((((!((map__133974 == null)))?((((map__133974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133974):map__133974);
var p = cljs.core.get.call(null,map__133974__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__133974__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__133974__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"(de)select curve",path);

return dynomics.space.core.toggle_select_curve.call(null,state,path);
});
dynomics.ui.ui.toggle_active = (function dynomics$ui$ui$toggle_active(p__133977){
var map__133983 = p__133977;
var map__133983__$1 = ((((!((map__133983 == null)))?((((map__133983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133983):map__133983);
var state = map__133983__$1;
var map__133984 = cljs.core.get.call(null,map__133983__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__133984__$1 = ((((!((map__133984 == null)))?((((map__133984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133984):map__133984);
var vec__133985 = cljs.core.get.call(null,map__133984__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__133985,(0),null);
var y = cljs.core.nth.call(null,vec__133985,(1),null);
var id = cljs.core.get.call(null,map__133984__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__133984__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"toggle active",path);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891)], null),((function (map__133983,map__133983__$1,state,map__133984,map__133984__$1,vec__133985,x,y,id,path){
return (function (an){
var n = (function (){var or__35425__auto__ = an;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.truth_(n.call(null,path))){
return cljs.core.disj.call(null,n,path);
} else {
return cljs.core.conj.call(null,n,path);
}
});})(map__133983,map__133983__$1,state,map__133984,map__133984__$1,vec__133985,x,y,id,path))
);
});
/**
 * Select node to move
 */
dynomics.ui.ui.select_node_for_move = (function dynomics$ui$ui$select_node_for_move(p__133988){
var map__133993 = p__133988;
var map__133993__$1 = ((((!((map__133993 == null)))?((((map__133993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133993):map__133993);
var state = map__133993__$1;
var map__133994 = cljs.core.get.call(null,map__133993__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__133994__$1 = ((((!((map__133994 == null)))?((((map__133994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__133994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133994):map__133994);
var p = cljs.core.get.call(null,map__133994__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__133994__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select node to move ",path);

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-when-selected","position-when-selected",1681219792)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select curve to move
 */
dynomics.ui.ui.select_curve_for_move = (function dynomics$ui$ui$select_curve_for_move(p__133997){
var map__134002 = p__133997;
var map__134002__$1 = ((((!((map__134002 == null)))?((((map__134002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134002):map__134002);
var state = map__134002__$1;
var map__134003 = cljs.core.get.call(null,map__134002__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134003__$1 = ((((!((map__134003 == null)))?((((map__134003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134003):map__134003);
var p = cljs.core.get.call(null,map__134003__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__134003__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select curve for move ",path,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null)));

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,dynomics.space.core.toggle_select_curve.call(null,state,path)),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select object
 */
dynomics.ui.ui.select_object = (function dynomics$ui$ui$select_object(p__134006){
var map__134011 = p__134006;
var map__134011__$1 = ((((!((map__134011 == null)))?((((map__134011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134011):map__134011);
var state = map__134011__$1;
var map__134012 = cljs.core.get.call(null,map__134011__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134012__$1 = ((((!((map__134012 == null)))?((((map__134012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134012):map__134012);
var path = cljs.core.get.call(null,map__134012__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tipe = cljs.core.get.call(null,map__134012__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"select object",path,tipe);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,tipe)], null),cljs.core.conj,path);
});
/**
 * Deselect object
 */
dynomics.ui.ui.deselect_object = (function dynomics$ui$ui$deselect_object(p__134015){
var map__134024 = p__134015;
var map__134024__$1 = ((((!((map__134024 == null)))?((((map__134024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134024):map__134024);
var state = map__134024__$1;
var map__134025 = cljs.core.get.call(null,map__134024__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__134025__$1 = ((((!((map__134025 == null)))?((((map__134025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134025):map__134025);
var o = cljs.core.get.call(null,map__134025__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var map__134026 = cljs.core.get.call(null,map__134025__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134026__$1 = ((((!((map__134026 == null)))?((((map__134026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134026):map__134026);
var p1 = cljs.core.get.call(null,map__134026__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t1 = cljs.core.get.call(null,map__134026__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var map__134027 = cljs.core.get.call(null,map__134024__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134027__$1 = ((((!((map__134027 == null)))?((((map__134027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134027):map__134027);
var p2 = cljs.core.get.call(null,map__134027__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t2 = cljs.core.get.call(null,map__134027__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"deselect object",p1,t1,p2,t2);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,(function (){var or__35425__auto__ = t1;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return t2;
}
})())], null),cljs.core.disj,(function (){var or__35425__auto__ = p1;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return p2;
}
})());
});
/**
 * Deselect node
 */
dynomics.ui.ui.deselect_node = (function dynomics$ui$ui$deselect_node(p__134032){
var map__134037 = p__134032;
var map__134037__$1 = ((((!((map__134037 == null)))?((((map__134037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134037):map__134037);
var state = map__134037__$1;
var map__134038 = cljs.core.get.call(null,map__134037__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134038__$1 = ((((!((map__134038 == null)))?((((map__134038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134038):map__134038);
var path = cljs.core.get.call(null,map__134038__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.disj,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),false);
});
/**
 * Deselect curve
 */
dynomics.ui.ui.deselect_curve = (function dynomics$ui$ui$deselect_curve(p__134041){
var map__134046 = p__134041;
var map__134046__$1 = ((((!((map__134046 == null)))?((((map__134046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134046):map__134046);
var state = map__134046__$1;
var map__134047 = cljs.core.get.call(null,map__134046__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134047__$1 = ((((!((map__134047 == null)))?((((map__134047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134047):map__134047);
var p = cljs.core.get.call(null,map__134047__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__134047__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,dynomics.space.core.deselect_curve.call(null,state,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
dynomics.ui.ui.hide_context_menu = (function dynomics$ui$ui$hide_context_menu(state){
return cljs.core.assoc.call(null,dynomics.ui.ui.deselect_object.call(null,state),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),null,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
dynomics.ui.ui.show_context_menu = (function dynomics$ui$ui$show_context_menu(p__134050){
var map__134058 = p__134050;
var map__134058__$1 = ((((!((map__134058 == null)))?((((map__134058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134058):map__134058);
var state = map__134058__$1;
var map__134059 = cljs.core.get.call(null,map__134058__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134059__$1 = ((((!((map__134059 == null)))?((((map__134059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134059):map__134059);
var event = map__134059__$1;
var ep = cljs.core.get.call(null,map__134059__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var mp = cljs.core.get.call(null,map__134059__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var o = cljs.core.get.call(null,map__134059__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var context_menu = cljs.core.get.call(null,map__134059__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
cljs.core.println.call(null,"show cm",o);

return cljs.core.assoc.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.select_object.call(null,state),cljs.core.map.call(null,((function (map__134058,map__134058__$1,state,map__134059,map__134059__$1,event,ep,mp,o,context_menu){
return (function (p__134062){
var map__134063 = p__134062;
var map__134063__$1 = ((((!((map__134063 == null)))?((((map__134063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134063):map__134063);
var option = map__134063__$1;
var f = cljs.core.get.call(null,map__134063__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.truth_(f)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.assoc,option,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.deref.call(null,f)], true, false);
} else {
return option;
}
});})(map__134058,map__134058__$1,state,map__134059,map__134059__$1,event,ep,mp,o,context_menu))
,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null)))),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__35425__auto__ = ep;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return mp;
}
})(),new cljs.core.Keyword(null,"object","object",1474613949),o,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null))], null));
});
dynomics.ui.ui.toggle_context_menu = (function dynomics$ui$ui$toggle_context_menu(p__134065){
var map__134068 = p__134065;
var map__134068__$1 = ((((!((map__134068 == null)))?((((map__134068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134068):map__134068);
var state = map__134068__$1;
var context_menu = cljs.core.get.call(null,map__134068__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
if(cljs.core.truth_(context_menu)){
return dynomics.ui.ui.hide_context_menu.call(null,state);
} else {
return dynomics.ui.ui.show_context_menu.call(null,state);
}
});
dynomics.ui.ui.toggle_left_panel = (function dynomics$ui$ui$toggle_left_panel(p__134070){
var map__134073 = p__134070;
var map__134073__$1 = ((((!((map__134073 == null)))?((((map__134073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134073):map__134073);
var state = map__134073__$1;
var left_panel_QMARK_ = cljs.core.get.call(null,map__134073__$1,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317),cljs.core.not.call(null,left_panel_QMARK_));
});
dynomics.ui.ui.switch_styles = (function dynomics$ui$ui$switch_styles(p__134075){
var map__134078 = p__134075;
var map__134078__$1 = ((((!((map__134078 == null)))?((((map__134078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134078):map__134078);
var state = map__134078__$1;
var style = cljs.core.get.call(null,map__134078__$1,new cljs.core.Keyword(null,"style","style",-496642736));
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
dynomics.ui.ui.move_objects = (function dynomics$ui$ui$move_objects(p__134080){
var map__134090 = p__134080;
var map__134090__$1 = ((((!((map__134090 == null)))?((((map__134090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134090):map__134090);
var state = map__134090__$1;
var map__134091 = cljs.core.get.call(null,map__134090__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__134091__$1 = ((((!((map__134091 == null)))?((((map__134091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134091):map__134091);
var space = map__134091__$1;
var selected_nodes = cljs.core.get.call(null,map__134091__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var zoom = cljs.core.get.call(null,map__134091__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__134092 = cljs.core.get.call(null,map__134090__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134092__$1 = ((((!((map__134092 == null)))?((((map__134092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134092):map__134092);
var vec__134093 = cljs.core.get.call(null,map__134092__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__134093,(0),null);
var y = cljs.core.nth.call(null,vec__134093,(1),null);
var ck = cljs.core.get.call(null,map__134092__$1,new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989));
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__134090,map__134090__$1,state,map__134091,map__134091__$1,space,selected_nodes,zoom,map__134092,map__134092__$1,vec__134093,x,y,ck){
return (function (r,path){
var tfn = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"point","point",1813198264))))?(cljs.core.truth_(ck)?dynomics.space.core.to_space:dynomics.space.core.mirror_node):((function (map__134090,map__134090__$1,state,map__134091,map__134091__$1,space,selected_nodes,zoom,map__134092,map__134092__$1,vec__134093,x,y,ck){
return (function (p,pth,_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,dynomics.ui.ui.relative_to_cursor.call(null,p,pth,state)], null)], null);
});})(map__134090,map__134090__$1,state,map__134091,map__134091__$1,space,selected_nodes,zoom,map__134092,map__134092__$1,vec__134093,x,y,ck))
);
return cljs.core.reduce.call(null,((function (tfn,map__134090,map__134090__$1,state,map__134091,map__134091__$1,space,selected_nodes,zoom,map__134092,map__134092__$1,vec__134093,x,y,ck){
return (function (r__$1,p__134097){
var vec__134098 = p__134097;
var cpath = cljs.core.nth.call(null,vec__134098,(0),null);
var cpoint = cljs.core.nth.call(null,vec__134098,(1),null);
return cljs.core.assoc_in.call(null,r__$1,cljs.core.conj.call(null,cpath,new cljs.core.Keyword(null,"position","position",-2011731912)),cpoint);
});})(tfn,map__134090,map__134090__$1,state,map__134091,map__134091__$1,space,selected_nodes,zoom,map__134092,map__134092__$1,vec__134093,x,y,ck))
,r,tfn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),path,space));
});})(map__134090,map__134090__$1,state,map__134091,map__134091__$1,space,selected_nodes,zoom,map__134092,map__134092__$1,vec__134093,x,y,ck))
,state,selected_nodes),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Pan
 */
dynomics.ui.ui.pan = (function dynomics$ui$ui$pan(p__134099){
var map__134105 = p__134099;
var map__134105__$1 = ((((!((map__134105 == null)))?((((map__134105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134105):map__134105);
var state = map__134105__$1;
var pp = cljs.core.get.call(null,map__134105__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var pan__$1 = cljs.core.get.call(null,map__134105__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__134105__$1,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305));
var zoom = cljs.core.get.call(null,map__134105__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__134106 = cljs.core.get.call(null,map__134105__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134106__$1 = ((((!((map__134106 == null)))?((((map__134106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134106):map__134106);
var p = cljs.core.get.call(null,map__134106__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var pl = cljs.core.get.call(null,map__134106__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var vec__134107 = cljs.core.get.call(null,map__134106__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__134107,(0),null);
var p2 = cljs.core.nth.call(null,vec__134107,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"pan","pan",-307712792),cljs.core.map.call(null,cljs.core._,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / zoom)),p2),sp));
});
/**
 * Start zoom
 */
dynomics.ui.ui.start_zoom = (function dynomics$ui$ui$start_zoom(p__134110){
var map__134116 = p__134110;
var map__134116__$1 = ((((!((map__134116 == null)))?((((map__134116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134116):map__134116);
var state = map__134116__$1;
var zoom = cljs.core.get.call(null,map__134116__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pz = cljs.core.get.call(null,map__134116__$1,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303));
var map__134117 = cljs.core.get.call(null,map__134116__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134117__$1 = ((((!((map__134117 == null)))?((((map__134117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134117):map__134117);
var p = cljs.core.get.call(null,map__134117__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__134118 = cljs.core.get.call(null,map__134117__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__134118,(0),null);
var p2 = cljs.core.nth.call(null,vec__134118,(1),null);
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
dynomics.ui.ui.zoom = (function dynomics$ui$ui$zoom(p__134121){
var map__134127 = p__134121;
var map__134127__$1 = ((((!((map__134127 == null)))?((((map__134127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134127):map__134127);
var state = map__134127__$1;
var zoom__$1 = cljs.core.get.call(null,map__134127__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pan = cljs.core.get.call(null,map__134127__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__134127__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var map__134128 = cljs.core.get.call(null,map__134127__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134128__$1 = ((((!((map__134128 == null)))?((((map__134128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134128):map__134128);
var dy = cljs.core.get.call(null,map__134128__$1,new cljs.core.Keyword(null,"deltaY","deltaY",-879493966));
var p = cljs.core.get.call(null,map__134128__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__134129 = cljs.core.get.call(null,map__134128__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__134129,(0),null);
var p2 = cljs.core.nth.call(null,vec__134129,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(function (){var x__35756__auto__ = 0.5;
var y__35757__auto__ = (zoom__$1 + (-0.01 * dy));
return ((x__35756__auto__ > y__35757__auto__) ? x__35756__auto__ : y__35757__auto__);
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
dynomics.ui.ui.move_cursor = (function dynomics$ui$ui$move_cursor(p__134132){
var map__134138 = p__134132;
var map__134138__$1 = ((((!((map__134138 == null)))?((((map__134138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134138):map__134138);
var state = map__134138__$1;
var map__134139 = cljs.core.get.call(null,map__134138__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134139__$1 = ((((!((map__134139 == null)))?((((map__134139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134139):map__134139);
var vec__134140 = cljs.core.get.call(null,map__134139__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__134140,(0),null);
var _ = cljs.core.nth.call(null,vec__134140,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p1);
});
/**
 * Start pan
 */
dynomics.ui.ui.start_pan = (function dynomics$ui$ui$start_pan(p__134143){
var map__134149 = p__134143;
var map__134149__$1 = ((((!((map__134149 == null)))?((((map__134149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134149):map__134149);
var state = map__134149__$1;
var map__134150 = cljs.core.get.call(null,map__134149__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134150__$1 = ((((!((map__134150 == null)))?((((map__134150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134150):map__134150);
var p = cljs.core.get.call(null,map__134150__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__134151 = cljs.core.get.call(null,map__134150__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__134151,(0),null);
var _ = cljs.core.nth.call(null,vec__134151,(1),null);
cljs.core.println.call(null,"start pan",p,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),true,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1);
});
/**
 * End pan
 */
dynomics.ui.ui.end_pan = (function dynomics$ui$ui$end_pan(p__134154){
var map__134159 = p__134154;
var map__134159__$1 = ((((!((map__134159 == null)))?((((map__134159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134159):map__134159);
var state = map__134159__$1;
var map__134160 = cljs.core.get.call(null,map__134159__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134160__$1 = ((((!((map__134160 == null)))?((((map__134160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134160):map__134160);
var p = cljs.core.get.call(null,map__134160__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
/**
 * Add node
 */
dynomics.ui.ui.add_node = (function dynomics$ui$ui$add_node(p__134163){
var map__134168 = p__134163;
var map__134168__$1 = ((((!((map__134168 == null)))?((((map__134168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134168):map__134168);
var state = map__134168__$1;
var map__134169 = cljs.core.get.call(null,map__134168__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134169__$1 = ((((!((map__134169 == null)))?((((map__134169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134169):map__134169);
var p = cljs.core.get.call(null,map__134169__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
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
}),(function (){var or__35425__auto__ = s;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),keyz);
}));
});
});
dynomics.ui.ui.set_node_type = (function dynomics$ui$ui$set_node_type(p__134172){
var map__134177 = p__134172;
var map__134177__$1 = ((((!((map__134177 == null)))?((((map__134177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134177):map__134177);
var state = map__134177__$1;
var map__134178 = cljs.core.get.call(null,map__134177__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134178__$1 = ((((!((map__134178 == null)))?((((map__134178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134178):map__134178);
var id = cljs.core.get.call(null,map__134178__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return dynomics.space.core.set_node_type.call(null,id).call(null,state);
});
dynomics.ui.ui.make_new_node = (function dynomics$ui$ui$make_new_node(p__134181){
var map__134188 = p__134181;
var map__134188__$1 = ((((!((map__134188 == null)))?((((map__134188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134188):map__134188);
var state = map__134188__$1;
var making_node_QMARK_ = cljs.core.get.call(null,map__134188__$1,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115));
var map__134189 = cljs.core.get.call(null,map__134188__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__134189__$1 = ((((!((map__134189 == null)))?((((map__134189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134189):map__134189);
var event = map__134189__$1;
var p = cljs.core.get.call(null,map__134189__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__134189__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.println.call(null,"make node type",id);

if(cljs.core.truth_(making_node_QMARK_)){
return state;
} else {
var map__134192 = dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),true,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489),id));
var map__134192__$1 = ((((!((map__134192 == null)))?((((map__134192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134192):map__134192);
var s = map__134192__$1;
var n = cljs.core.get.call(null,map__134192__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.ui.ui.select_node_for_move.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),n], null))));
}
});
/**
 * Returns a function var to handle the given event
 */
dynomics.ui.ui.match_event = (function dynomics$ui$ui$match_event(p__134194){
var map__134416 = p__134194;
var map__134416__$1 = ((((!((map__134416 == null)))?((((map__134416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134416):map__134416);
var state = map__134416__$1;
var event = cljs.core.get.call(null,map__134416__$1,new cljs.core.Keyword(null,"event","event",301435442));
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || (event.cljs$core$ILookup$))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{var event_shift_key_QMARK___134443 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___134443 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134636){if((e134636 instanceof Error)){
var e__39799__auto__ = e134636;
if((e__39799__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto__;
}
} else {
throw e134636;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134630){if((e134630 instanceof Error)){
var e__39799__auto__ = e134630;
if((e__39799__auto__ === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___134443 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___134443 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134632){if((e134632 instanceof Error)){
var e__39799__auto____$1 = e134632;
if((e__39799__auto____$1 === cljs.core.match.backtrack)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___134447 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134447 === false)){
return (new cljs.core.Delay(((function (state_moving_things_QMARK___134447,e__39799__auto____$1,event_noun__134444,e__39799__auto__,event_verb__134440,map__134416,map__134416__$1,state,event){
return (function (){
return cljs.core.comp.call(null,dynomics.ui.ui.deselect_node,dynomics.ui.ui.toggle_active);
});})(state_moving_things_QMARK___134447,e__39799__auto____$1,event_noun__134444,e__39799__auto__,event_verb__134440,map__134416,map__134416__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134635){if((e134635 instanceof Error)){
var e__39799__auto____$2 = e134635;
if((e__39799__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$2;
}
} else {
throw e134635;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134633){if((e134633 instanceof Error)){
var e__39799__auto____$2 = e134633;
if((e__39799__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$2;
}
} else {
throw e134633;

}
}} else {
throw e__39799__auto____$1;
}
} else {
throw e134632;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134631){if((e134631 instanceof Error)){
var e__39799__auto____$1 = e134631;
if((e__39799__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$1;
}
} else {
throw e134631;

}
}} else {
throw e__39799__auto__;
}
} else {
throw e134630;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134512){if((e134512 instanceof Error)){
var e__39799__auto__ = e134512;
if((e__39799__auto__ === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_button__134441 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__134441 === (0))){
try{var event_id__134442 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_id__134442,new cljs.core.Keyword(null,"add-node-button","add-node-button",-722090690))){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.add_node;},new cljs.core.Symbol("dynomics.ui.ui","add-node","dynomics.ui.ui/add-node",175703617,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"add-node","add-node",-428722461,null),"src/dynomics/ui/ui.cljs",11,1,530,534,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Add node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Add node",(cljs.core.truth_(dynomics.ui.ui.add_node)?dynomics.ui.ui.add_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134629){if((e134629 instanceof Error)){
var e__39799__auto____$1 = e134629;
if((e__39799__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$1;
}
} else {
throw e134629;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134628){if((e134628 instanceof Error)){
var e__39799__auto____$1 = e134628;
if((e__39799__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$1;
}
} else {
throw e134628;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134623){if((e134623 instanceof Error)){
var e__39799__auto____$1 = e134623;
if((e__39799__auto____$1 === cljs.core.match.backtrack)){
try{var event_button__134441 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__134441 === (2))){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134625){if((e134625 instanceof Error)){
var e__39799__auto____$2 = e134625;
if((e__39799__auto____$2 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134626){if((e134626 instanceof Error)){
var e__39799__auto____$3 = e134626;
if((e__39799__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"space","space",348133475))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134627){if((e134627 instanceof Error)){
var e__39799__auto____$4 = e134627;
if((e__39799__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$4;
}
} else {
throw e134627;

}
}} else {
throw e__39799__auto____$3;
}
} else {
throw e134626;

}
}} else {
throw e__39799__auto____$2;
}
} else {
throw e134625;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134624){if((e134624 instanceof Error)){
var e__39799__auto____$2 = e134624;
if((e__39799__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$2;
}
} else {
throw e134624;

}
}} else {
throw e__39799__auto____$1;
}
} else {
throw e134623;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134513){if((e134513 instanceof Error)){
var e__39799__auto____$1 = e134513;
if((e__39799__auto____$1 === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964))){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.hide_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","hide-context-menu","dynomics.ui.ui/hide-context-menu",-829551965,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"hide-context-menu","hide-context-menu",-210420991,null),"src/dynomics/ui/ui.cljs",20,1,378,380,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Hide context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.hide_context_menu)?dynomics.ui.ui.hide_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134622){if((e134622 instanceof Error)){
var e__39799__auto____$2 = e134622;
if((e__39799__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$2;
}
} else {
throw e134622;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134514){if((e134514 instanceof Error)){
var e__39799__auto____$2 = e134514;
if((e__39799__auto____$2 === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_shift_key_QMARK___134443 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___134443 === false)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"src/dynomics/ui/ui.cljs",23,1,304,308,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134618){if((e134618 instanceof Error)){
var e__39799__auto____$3 = e134618;
if((e__39799__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"src/dynomics/ui/ui.cljs",23,1,304,308,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134619){if((e134619 instanceof Error)){
var e__39799__auto____$4 = e134619;
if((e__39799__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__134439 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__134439 === (1))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_curve_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-curve-for-move","dynomics.ui.ui/select-curve-for-move",67176701,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-curve-for-move","select-curve-for-move",268851359,null),"src/dynomics/ui/ui.cljs",24,1,319,323,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select curve to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select curve to move",(cljs.core.truth_(dynomics.ui.ui.select_curve_for_move)?dynomics.ui.ui.select_curve_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134621){if((e134621 instanceof Error)){
var e__39799__auto____$5 = e134621;
if((e__39799__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$5;
}
} else {
throw e134621;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134620){if((e134620 instanceof Error)){
var e__39799__auto____$5 = e134620;
if((e__39799__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$5;
}
} else {
throw e134620;

}
}} else {
throw e__39799__auto____$4;
}
} else {
throw e134619;

}
}} else {
throw e__39799__auto____$3;
}
} else {
throw e134618;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134617){if((e134617 instanceof Error)){
var e__39799__auto____$3 = e134617;
if((e__39799__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$3;
}
} else {
throw e134617;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134515){if((e134515 instanceof Error)){
var e__39799__auto____$3 = e134515;
if((e__39799__auto____$3 === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_shift_key_QMARK___134443 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___134443 === false)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___134450 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134450 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"src/dynomics/ui/ui.cljs",16,1,354,358,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134616){if((e134616 instanceof Error)){
var e__39799__auto____$4 = e134616;
if((e__39799__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$4;
}
} else {
throw e134616;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134614){if((e134614 instanceof Error)){
var e__39799__auto____$4 = e134614;
if((e__39799__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$4;
}
} else {
throw e134614;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134604){if((e134604 instanceof Error)){
var e__39799__auto____$4 = e134604;
if((e__39799__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___134453 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134453 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"src/dynomics/ui/ui.cljs",16,1,354,358,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134613){if((e134613 instanceof Error)){
var e__39799__auto____$5 = e134613;
if((e__39799__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$5;
}
} else {
throw e134613;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134611){if((e134611 instanceof Error)){
var e__39799__auto____$5 = e134611;
if((e__39799__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$5;
}
} else {
throw e134611;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134605){if((e134605 instanceof Error)){
var e__39799__auto____$5 = e134605;
if((e__39799__auto____$5 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___134456 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134456 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134610){if((e134610 instanceof Error)){
var e__39799__auto____$6 = e134610;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134610;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134608){if((e134608 instanceof Error)){
var e__39799__auto____$6 = e134608;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134608;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134606){if((e134606 instanceof Error)){
var e__39799__auto____$6 = e134606;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_curve;},new cljs.core.Symbol("dynomics.ui.ui","deselect-curve","dynomics.ui.ui/deselect-curve",-758858976,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-curve","deselect-curve",-29652158,null),"src/dynomics/ui/ui.cljs",17,1,366,370,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect curve",(cljs.core.truth_(dynomics.ui.ui.deselect_curve)?dynomics.ui.ui.deselect_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134607){if((e134607 instanceof Error)){
var e__39799__auto____$7 = e134607;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$7;
}
} else {
throw e134607;

}
}} else {
throw e__39799__auto____$6;
}
} else {
throw e134606;

}
}} else {
throw e__39799__auto____$5;
}
} else {
throw e134605;

}
}} else {
throw e__39799__auto____$4;
}
} else {
throw e134604;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134603){if((e134603 instanceof Error)){
var e__39799__auto____$4 = e134603;
if((e__39799__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$4;
}
} else {
throw e134603;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134516){if((e134516 instanceof Error)){
var e__39799__auto____$4 = e134516;
if((e__39799__auto____$4 === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__134439 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__134439 === (1))){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___134443 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___134443 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___134460 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___134460 === false)){
try{var state_moving_things_QMARK___134461 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134461 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"src/dynomics/ui/ui.cljs",13,1,490,494,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134602){if((e134602 instanceof Error)){
var e__39799__auto____$5 = e134602;
if((e__39799__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$5;
}
} else {
throw e134602;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134601){if((e134601 instanceof Error)){
var e__39799__auto____$5 = e134601;
if((e__39799__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$5;
}
} else {
throw e134601;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134599){if((e134599 instanceof Error)){
var e__39799__auto____$5 = e134599;
if((e__39799__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$5;
}
} else {
throw e134599;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134598){if((e134598 instanceof Error)){
var e__39799__auto____$5 = e134598;
if((e__39799__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$5;
}
} else {
throw e134598;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134570){if((e134570 instanceof Error)){
var e__39799__auto____$5 = e134570;
if((e__39799__auto____$5 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_shift_key_QMARK___134443 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___134443 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___134465 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___134465 === false)){
try{var state_moving_things_QMARK___134466 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134466 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"src/dynomics/ui/ui.cljs",13,1,490,494,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134597){if((e134597 instanceof Error)){
var e__39799__auto____$6 = e134597;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134597;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134596){if((e134596 instanceof Error)){
var e__39799__auto____$6 = e134596;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134596;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134594){if((e134594 instanceof Error)){
var e__39799__auto____$6 = e134594;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134594;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134593){if((e134593 instanceof Error)){
var e__39799__auto____$6 = e134593;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134593;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134571){if((e134571 instanceof Error)){
var e__39799__auto____$6 = e134571;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"space","space",348133475))){
try{var event_shift_key_QMARK___134443 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___134443 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___134470 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___134470 === false)){
try{var state_moving_things_QMARK___134471 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134471 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"src/dynomics/ui/ui.cljs",13,1,490,494,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134592){if((e134592 instanceof Error)){
var e__39799__auto____$7 = e134592;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$7;
}
} else {
throw e134592;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134591){if((e134591 instanceof Error)){
var e__39799__auto____$7 = e134591;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$7;
}
} else {
throw e134591;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134589){if((e134589 instanceof Error)){
var e__39799__auto____$7 = e134589;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$7;
}
} else {
throw e134589;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134588){if((e134588 instanceof Error)){
var e__39799__auto____$7 = e134588;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$7;
}
} else {
throw e134588;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134572){if((e134572 instanceof Error)){
var e__39799__auto____$7 = e134572;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___134475 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___134475 === false)){
try{var state_moving_things_QMARK___134476 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134476 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"src/dynomics/ui/ui.cljs",15,1,431,435,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134587){if((e134587 instanceof Error)){
var e__39799__auto____$8 = e134587;
if((e__39799__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$8;
}
} else {
throw e134587;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134586){if((e134586 instanceof Error)){
var e__39799__auto____$8 = e134586;
if((e__39799__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$8;
}
} else {
throw e134586;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134584){if((e134584 instanceof Error)){
var e__39799__auto____$8 = e134584;
if((e__39799__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$8;
}
} else {
throw e134584;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134573){if((e134573 instanceof Error)){
var e__39799__auto____$8 = e134573;
if((e__39799__auto____$8 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___134480 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___134480 === false)){
try{var state_moving_things_QMARK___134481 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134481 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"src/dynomics/ui/ui.cljs",15,1,431,435,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134583){if((e134583 instanceof Error)){
var e__39799__auto____$9 = e134583;
if((e__39799__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$9;
}
} else {
throw e134583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134582){if((e134582 instanceof Error)){
var e__39799__auto____$9 = e134582;
if((e__39799__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$9;
}
} else {
throw e134582;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134580){if((e134580 instanceof Error)){
var e__39799__auto____$9 = e134580;
if((e__39799__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$9;
}
} else {
throw e134580;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134574){if((e134574 instanceof Error)){
var e__39799__auto____$9 = e134574;
if((e__39799__auto____$9 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___134485 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___134485 === false)){
try{var state_moving_things_QMARK___134486 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134486 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"src/dynomics/ui/ui.cljs",15,1,431,435,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134579){if((e134579 instanceof Error)){
var e__39799__auto____$10 = e134579;
if((e__39799__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$10;
}
} else {
throw e134579;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134578){if((e134578 instanceof Error)){
var e__39799__auto____$10 = e134578;
if((e__39799__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$10;
}
} else {
throw e134578;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134576){if((e134576 instanceof Error)){
var e__39799__auto____$10 = e134576;
if((e__39799__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$10;
}
} else {
throw e134576;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134575){if((e134575 instanceof Error)){
var e__39799__auto____$10 = e134575;
if((e__39799__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$10;
}
} else {
throw e134575;

}
}} else {
throw e__39799__auto____$9;
}
} else {
throw e134574;

}
}} else {
throw e__39799__auto____$8;
}
} else {
throw e134573;

}
}} else {
throw e__39799__auto____$7;
}
} else {
throw e134572;

}
}} else {
throw e__39799__auto____$6;
}
} else {
throw e134571;

}
}} else {
throw e__39799__auto____$5;
}
} else {
throw e134570;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134556){if((e134556 instanceof Error)){
var e__39799__auto____$5 = e134556;
if((e__39799__auto____$5 === cljs.core.match.backtrack)){
try{var event_buttons__134439 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__134439 === (0))){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___134489 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134489 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134569){if((e134569 instanceof Error)){
var e__39799__auto____$6 = e134569;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134569;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134567){if((e134567 instanceof Error)){
var e__39799__auto____$6 = e134567;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134567;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134558){if((e134558 instanceof Error)){
var e__39799__auto____$6 = e134558;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___134492 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134492 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134566){if((e134566 instanceof Error)){
var e__39799__auto____$7 = e134566;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$7;
}
} else {
throw e134566;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134564){if((e134564 instanceof Error)){
var e__39799__auto____$7 = e134564;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$7;
}
} else {
throw e134564;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134559){if((e134559 instanceof Error)){
var e__39799__auto____$7 = e134559;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___134495 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134495 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"src/dynomics/ui/ui.cljs",14,1,498,502,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134563){if((e134563 instanceof Error)){
var e__39799__auto____$8 = e134563;
if((e__39799__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$8;
}
} else {
throw e134563;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134561){if((e134561 instanceof Error)){
var e__39799__auto____$8 = e134561;
if((e__39799__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$8;
}
} else {
throw e134561;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134560){if((e134560 instanceof Error)){
var e__39799__auto____$8 = e134560;
if((e__39799__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$8;
}
} else {
throw e134560;

}
}} else {
throw e__39799__auto____$7;
}
} else {
throw e134559;

}
}} else {
throw e__39799__auto____$6;
}
} else {
throw e134558;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134557){if((e134557 instanceof Error)){
var e__39799__auto____$6 = e134557;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134557;

}
}} else {
throw e__39799__auto____$5;
}
} else {
throw e134556;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134517){if((e134517 instanceof Error)){
var e__39799__auto____$5 = e134517;
if((e__39799__auto____$5 === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_buttons__134439 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__134439 === (1))){
try{var event_shift_key_QMARK___134443 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___134443 === false)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___134499 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___134499 === false)){
try{var state_moving_things_QMARK___134500 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___134500 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_pan;},new cljs.core.Symbol("dynomics.ui.ui","start-pan","dynomics.ui.ui/start-pan",-310203637,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-pan","start-pan",-778345239,null),"src/dynomics/ui/ui.cljs",12,1,508,512,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start pan",(cljs.core.truth_(dynomics.ui.ui.start_pan)?dynomics.ui.ui.start_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134555){if((e134555 instanceof Error)){
var e__39799__auto____$6 = e134555;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134555;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134554){if((e134554 instanceof Error)){
var e__39799__auto____$6 = e134554;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134554;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134552){if((e134552 instanceof Error)){
var e__39799__auto____$6 = e134552;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134552;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134551){if((e134551 instanceof Error)){
var e__39799__auto____$6 = e134551;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134551;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134550){if((e134550 instanceof Error)){
var e__39799__auto____$6 = e134550;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134550;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134549){if((e134549 instanceof Error)){
var e__39799__auto____$6 = e134549;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$6;
}
} else {
throw e134549;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134518){if((e134518 instanceof Error)){
var e__39799__auto____$6 = e134518;
if((e__39799__auto____$6 === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__134439 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__134439 === (1))){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___134503 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___134503 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.pan;},new cljs.core.Symbol("dynomics.ui.ui","pan","dynomics.ui.ui/pan",1533936577,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"pan","pan",1332818735,null),"src/dynomics/ui/ui.cljs",6,1,450,454,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"pp","pp",927842543,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Pan",(cljs.core.truth_(dynomics.ui.ui.pan)?dynomics.ui.ui.pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134548){if((e134548 instanceof Error)){
var e__39799__auto____$7 = e134548;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$7;
}
} else {
throw e134548;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134546){if((e134546 instanceof Error)){
var e__39799__auto____$7 = e134546;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$7;
}
} else {
throw e134546;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134545){if((e134545 instanceof Error)){
var e__39799__auto____$7 = e134545;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$7;
}
} else {
throw e134545;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134544){if((e134544 instanceof Error)){
var e__39799__auto____$7 = e134544;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$7;
}
} else {
throw e134544;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134519){if((e134519 instanceof Error)){
var e__39799__auto____$7 = e134519;
if((e__39799__auto____$7 === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439))){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___134506 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___134506 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"src/dynomics/ui/ui.cljs",13,1,466,470,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134541){if((e134541 instanceof Error)){
var e__39799__auto____$8 = e134541;
if((e__39799__auto____$8 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___134506 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,state_pan_zoom_QMARK___134506,new cljs.core.Keyword(null,"starting","starting",-1852141466))){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"src/dynomics/ui/ui.cljs",13,1,466,470,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134542){if((e134542 instanceof Error)){
var e__39799__auto____$9 = e134542;
if((e__39799__auto____$9 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___134506 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___134506 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.zoom;},new cljs.core.Symbol("dynomics.ui.ui","zoom","dynomics.ui.ui/zoom",-926900565,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),"src/dynomics/ui/ui.cljs",7,1,477,481,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"dy","dy",-934888526,null),new cljs.core.Keyword(null,"deltaY","deltaY",-879493966),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Zoom",(cljs.core.truth_(dynomics.ui.ui.zoom)?dynomics.ui.ui.zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134543){if((e134543 instanceof Error)){
var e__39799__auto____$10 = e134543;
if((e__39799__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$10;
}
} else {
throw e134543;

}
}} else {
throw e__39799__auto____$9;
}
} else {
throw e134542;

}
}} else {
throw e__39799__auto____$8;
}
} else {
throw e134541;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134539){if((e134539 instanceof Error)){
var e__39799__auto____$8 = e134539;
if((e__39799__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$8;
}
} else {
throw e134539;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134538){if((e134538 instanceof Error)){
var e__39799__auto____$8 = e134538;
if((e__39799__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$8;
}
} else {
throw e134538;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134520){if((e134520 instanceof Error)){
var e__39799__auto____$8 = e134520;
if((e__39799__auto____$8 === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_buttons__134439 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__134439 === (0))){
try{var event_shift_key_QMARK___134443 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___134443 === false)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___134509 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___134509 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.end_pan;},new cljs.core.Symbol("dynomics.ui.ui","end-pan","dynomics.ui.ui/end-pan",-5094220,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"end-pan","end-pan",-474409646,null),"src/dynomics/ui/ui.cljs",10,1,520,524,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"End pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"End pan",(cljs.core.truth_(dynomics.ui.ui.end_pan)?dynomics.ui.ui.end_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134537){if((e134537 instanceof Error)){
var e__39799__auto____$9 = e134537;
if((e__39799__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$9;
}
} else {
throw e134537;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134535){if((e134535 instanceof Error)){
var e__39799__auto____$9 = e134535;
if((e__39799__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$9;
}
} else {
throw e134535;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134534){if((e134534 instanceof Error)){
var e__39799__auto____$9 = e134534;
if((e__39799__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$9;
}
} else {
throw e134534;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134533){if((e134533 instanceof Error)){
var e__39799__auto____$9 = e134533;
if((e__39799__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$9;
}
} else {
throw e134533;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134532){if((e134532 instanceof Error)){
var e__39799__auto____$9 = e134532;
if((e__39799__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$9;
}
} else {
throw e134532;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134521){if((e134521 instanceof Error)){
var e__39799__auto____$9 = e134521;
if((e__39799__auto____$9 === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__134439 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__134439 === (1))){
try{var event_shift_key_QMARK___134443 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___134443 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select_curve;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select-curve","dynomics.ui.ui/toggle-select-curve",1188080702,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select-curve","toggle-select-curve",1792572560,null),"src/dynomics/ui/ui.cljs",22,1,287,289,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select_curve)?dynomics.ui.ui.toggle_select_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134531){if((e134531 instanceof Error)){
var e__39799__auto____$10 = e134531;
if((e__39799__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$10;
}
} else {
throw e134531;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134530){if((e134530 instanceof Error)){
var e__39799__auto____$10 = e134530;
if((e__39799__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$10;
}
} else {
throw e134530;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134528){if((e134528 instanceof Error)){
var e__39799__auto____$10 = e134528;
if((e__39799__auto____$10 === cljs.core.match.backtrack)){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.set_node_type;},new cljs.core.Symbol("dynomics.ui.ui","set-node-type","dynomics.ui.ui/set-node-type",776460294,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"set-node-type","set-node-type",306219192,null),"src/dynomics/ui/ui.cljs",16,1,560,564,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"description","description",-1428560544),"Set node type "], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.set_node_type)?dynomics.ui.ui.set_node_type.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134529){if((e134529 instanceof Error)){
var e__39799__auto____$11 = e134529;
if((e__39799__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$11;
}
} else {
throw e134529;

}
}} else {
throw e__39799__auto____$10;
}
} else {
throw e134528;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134522){if((e134522 instanceof Error)){
var e__39799__auto____$10 = e134522;
if((e__39799__auto____$10 === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__134439 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__134439 === (1))){
try{var event_noun__134444 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__134444,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.make_new_node;},new cljs.core.Symbol("dynomics.ui.ui","make-new-node","dynomics.ui.ui/make-new-node",1777852426,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"make-new-node","make-new-node",2047793128,null),"src/dynomics/ui/ui.cljs",17,1,568,571,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"description","description",-1428560544),"Make new node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"making-node?","making-node?",-141094588,null),new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.make_new_node)?dynomics.ui.ui.make_new_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134527){if((e134527 instanceof Error)){
var e__39799__auto____$11 = e134527;
if((e__39799__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$11;
}
} else {
throw e134527;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134526){if((e134526 instanceof Error)){
var e__39799__auto____$11 = e134526;
if((e__39799__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$11;
}
} else {
throw e134526;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134523){if((e134523 instanceof Error)){
var e__39799__auto____$11 = e134523;
if((e__39799__auto____$11 === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"keydown","keydown",-629268186))){
return (new cljs.core.Delay(((function (event_verb__134440,e__39799__auto____$11,e__39799__auto____$10,e__39799__auto____$9,e__39799__auto____$8,e__39799__auto____$7,e__39799__auto____$6,e__39799__auto____$5,e__39799__auto____$4,e__39799__auto____$3,e__39799__auto____$2,e__39799__auto____$1,e__39799__auto__,map__134416,map__134416__$1,state,event){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state);
});})(event_verb__134440,e__39799__auto____$11,e__39799__auto____$10,e__39799__auto____$9,e__39799__auto____$8,e__39799__auto____$7,e__39799__auto____$6,e__39799__auto____$5,e__39799__auto____$4,e__39799__auto____$3,e__39799__auto____$2,e__39799__auto____$1,e__39799__auto__,map__134416,map__134416__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134524){if((e134524 instanceof Error)){
var e__39799__auto____$12 = e134524;
if((e__39799__auto____$12 === cljs.core.match.backtrack)){
try{var event_verb__134440 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__134440,new cljs.core.Keyword(null,"keyup","keyup",-794526927))){
return (new cljs.core.Delay(((function (event_verb__134440,e__39799__auto____$12,e__39799__auto____$11,e__39799__auto____$10,e__39799__auto____$9,e__39799__auto____$8,e__39799__auto____$7,e__39799__auto____$6,e__39799__auto____$5,e__39799__auto____$4,e__39799__auto____$3,e__39799__auto____$2,e__39799__auto____$1,e__39799__auto__,map__134416,map__134416__$1,state,event){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state);
});})(event_verb__134440,e__39799__auto____$12,e__39799__auto____$11,e__39799__auto____$10,e__39799__auto____$9,e__39799__auto____$8,e__39799__auto____$7,e__39799__auto____$6,e__39799__auto____$5,e__39799__auto____$4,e__39799__auto____$3,e__39799__auto____$2,e__39799__auto____$1,e__39799__auto__,map__134416,map__134416__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e134525){if((e134525 instanceof Error)){
var e__39799__auto____$13 = e134525;
if((e__39799__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39799__auto____$13;
}
} else {
throw e134525;

}
}} else {
throw e__39799__auto____$12;
}
} else {
throw e134524;

}
}} else {
throw e__39799__auto____$11;
}
} else {
throw e134523;

}
}} else {
throw e__39799__auto____$10;
}
} else {
throw e134522;

}
}} else {
throw e__39799__auto____$9;
}
} else {
throw e134521;

}
}} else {
throw e__39799__auto____$8;
}
} else {
throw e134520;

}
}} else {
throw e__39799__auto____$7;
}
} else {
throw e134519;

}
}} else {
throw e__39799__auto____$6;
}
} else {
throw e134518;

}
}} else {
throw e__39799__auto____$5;
}
} else {
throw e134517;

}
}} else {
throw e__39799__auto____$4;
}
} else {
throw e134516;

}
}} else {
throw e__39799__auto____$3;
}
} else {
throw e134515;

}
}} else {
throw e__39799__auto____$2;
}
} else {
throw e134514;

}
}} else {
throw e__39799__auto____$1;
}
} else {
throw e134513;

}
}} else {
throw e__39799__auto__;
}
} else {
throw e134512;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e134510){if((e134510 instanceof Error)){
var e__39799__auto__ = e134510;
if((e__39799__auto__ === cljs.core.match.backtrack)){
return null;
} else {
throw e__39799__auto__;
}
} else {
throw e134510;

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
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),(function (p__134648){
var map__134649 = p__134648;
var map__134649__$1 = ((((!((map__134649 == null)))?((((map__134649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134649):map__134649);
var map__134650 = cljs.core.get.call(null,map__134649__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__134650__$1 = ((((!((map__134650 == null)))?((((map__134650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134650):map__134650);
var state_updates = cljs.core.get.call(null,map__134650__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__134649,map__134649__$1,map__134650,map__134650__$1,state_updates){
return (function (p__134653){
var map__134654 = p__134653;
var map__134654__$1 = ((((!((map__134654 == null)))?((((map__134654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134654):map__134654);
var event = map__134654__$1;
var h = cljs.core.get.call(null,map__134654__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return cljs.core.async.put_BANG_.call(null,state_updates,((function (map__134654,map__134654__$1,event,h,map__134649,map__134649__$1,map__134650,map__134650__$1,state_updates){
return (function (s){
var f = (function (){var or__35425__auto__ = h;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return dynomics.ui.ui.match_event.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"event","event",301435442),event));
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (f,map__134654,map__134654__$1,event,h,map__134649,map__134649__$1,map__134650,map__134650__$1,state_updates){
return (function (ss){
if(cljs.core.truth_(f)){
return cljs.core.deref.call(null,f).call(null,cljs.core.assoc.call(null,ss,new cljs.core.Keyword(null,"event","event",301435442),event));
} else {
return ss;
}
});})(f,map__134654,map__134654__$1,event,h,map__134649,map__134649__$1,map__134650,map__134650__$1,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1((function (){var or__35425__auto__ = cljs.core.meta.call(null,f);
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
}
})()),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_(f)?cljs.core.deref.call(null,f):null),new cljs.core.Keyword(null,"event","event",301435442),event)], null);
});})(map__134654,map__134654__$1,event,h,map__134649,map__134649__$1,map__134650,map__134650__$1,state_updates))
);
});})(map__134649,map__134649__$1,map__134650,map__134650__$1,state_updates))
], null)], null);
}),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"load","load",-1318641184)], null),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"toggle-quadrants","toggle-quadrants",-163483615),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),new cljs.core.Keyword(null,"print-state","print-state",-1235922711),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"toggle-quadrant-icons","toggle-quadrant-icons",1640510955),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"toggle-node-types","toggle-node-types",-2069291601),new cljs.core.Keyword(null,"toggle-left-panel","toggle-left-panel",-240911951),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"switch-styles","switch-styles",-1139342249),new cljs.core.Keyword(null,"deactivate-all","deactivate-all",-1221569027)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load space",new cljs.core.Keyword(null,"description","description",-1428560544),"Restores the last saved space",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C3",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.get_state_BANG_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrants",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrants",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Curve types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected curves",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,id){
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Curve type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected curves to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_curve_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"print",new cljs.core.Keyword(null,"name","name",1843675177),"println state",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.print_state], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Remove selected",new cljs.core.Keyword(null,"description","description",-1428560544),"Removes selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2612",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.comp.call(null,dynomics.space.core.deselect_all,dynomics.space.core.remove_selected)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrant icons",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrant icons",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrant-icons","quadrant-icons",737862449)], null))], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deselects all selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deselect_all], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"connect nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect selected nodes",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.curve_between_nodes], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Save space",new cljs.core.Keyword(null,"description","description",-1428560544),"Saves the space in your browser for later (sorry I will swap this icon for the familiar\n                                    floppy-disk icon when I find it",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.persist_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Node types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected nodes",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,p__134656){
var map__134657 = p__134656;
var map__134657__$1 = ((((!((map__134657 == null)))?((((map__134657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134657):map__134657);
var id = cljs.core.get.call(null,map__134657__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Node type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected nodes to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_node_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dynomics.space.core.node_types))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle types",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show types",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-types","node-types",1539943342)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Toggle left panel",new cljs.core.Keyword(null,"description","description",-1428560544),"Shows/hides the left panel",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_left_panel], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Context menu",new cljs.core.Keyword(null,"description","description",-1428560544),"Display context menu",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_context_menu,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option1","option1",-243284328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Option1"], null)], null),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-curve-type1","set-curve-type1",2042367308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(1));
}),null))], null),new cljs.core.Keyword(null,"set-curve-type2","set-curve-type2",1286708706),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 2",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(2));
}),null))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"switch styles",new cljs.core.Keyword(null,"description","description",-1428560544),"change style",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tilde","tilde",-306005780),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.switch_styles], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deactivate all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deactivates all active nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deactivate_all], null)])], null)], null));
});
dynomics.ui.ui.left_right_top_view = (function dynomics$ui$ui$left_right_top_view(p__134659){
var map__134671 = p__134659;
var map__134671__$1 = ((((!((map__134671 == null)))?((((map__134671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134671):map__134671);
var state = map__134671__$1;
var context_menu = cljs.core.get.call(null,map__134671__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__134672 = cljs.core.get.call(null,map__134671__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__134672__$1 = ((((!((map__134672 == null)))?((((map__134672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134672):map__134672);
var selected_nodes = cljs.core.get.call(null,map__134672__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__134673 = cljs.core.get.call(null,map__134671__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__134673__$1 = ((((!((map__134673 == null)))?((((map__134673.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134673.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134673):map__134673);
var msgs = cljs.core.get.call(null,map__134673__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui134677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui134677 = (function (left_right_top_view,p__134659,map__134671,state,context_menu,map__134672,selected_nodes,map__134673,msgs,meta134678){
this.left_right_top_view = left_right_top_view;
this.p__134659 = p__134659;
this.map__134671 = map__134671;
this.state = state;
this.context_menu = context_menu;
this.map__134672 = map__134672;
this.selected_nodes = selected_nodes;
this.map__134673 = map__134673;
this.msgs = msgs;
this.meta134678 = meta134678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui134677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs){
return (function (_134679,meta134678__$1){
var self__ = this;
var _134679__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui134677(self__.left_right_top_view,self__.p__134659,self__.map__134671,self__.state,self__.context_menu,self__.map__134672,self__.selected_nodes,self__.map__134673,self__.msgs,meta134678__$1));
});})(map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui134677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs){
return (function (_134679){
var self__ = this;
var _134679__$1 = this;
return self__.meta134678;
});})(map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui134677.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui134677.prototype.om$core$IRender$render$arity$1 = ((function (map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs){
return (function (this__38888__auto__){
var self__ = this;
var this__38888__auto____$1 = this;
return om.dom.div.call(null,{"className": "ui"},om.dom.div.call(null,{"className": "main_ui"},om.dom.div.call(null,{"className": [cljs.core.str("left_component "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317).cljs$core$IFn$_invoke$arity$1(self__.state))?"hidden_function":null))].join('')},om.core.build.call(null,dynomics.ui.ui.make_function_selector_view,self__.state),om.dom.div.call(null,{"className": "node_types_box"},om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component.call(null,new cljs.core.Keyword(null,"friendly","friendly",281770577)),cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)),om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663)),cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state))),null),om.dom.div.call(null,{"className": "right_component selectable", "key": "right_component"},cljs.core.map.call(null,((function (this__38888__auto____$1,map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs){
return (function (p__134680){
var vec__134681 = p__134680;
var id = cljs.core.nth.call(null,vec__134681,(0),null);
var component = cljs.core.nth.call(null,vec__134681,(1),null);
return om.core.build.call(null,new cljs.core.Keyword(null,"om-builder","om-builder",1876809590).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(component).call(null,self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
});})(this__38888__auto____$1,map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs))
,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"om-builder","om-builder",1876809590)),cljs.core.val),cljs.core.dissoc.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220))))),(cljs.core.truth_(self__.context_menu)?om.core.build.call(null,dynomics.ui.ui.make_context_menu,cljs.core.assoc.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451)], null)),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs)):null)),om.core.build.call(null,dynomics.ui.ui.make_header_view,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)));
});})(map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui134677.getBasis = ((function (map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"left-right-top-view","left-right-top-view",150328751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null)], null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__134659","p__134659",1072687264,null),new cljs.core.Symbol(null,"map__134671","map__134671",2046333794,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"map__134672","map__134672",-1888993891,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__134673","map__134673",-514022322,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"meta134678","meta134678",-1766861120,null)], null);
});})(map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui134677.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui134677.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui134677";

dynomics.ui.ui.t_dynomics$ui$ui134677.cljs$lang$ctorPrWriter = ((function (map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs){
return (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"dynomics.ui.ui/t_dynomics$ui$ui134677");
});})(map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui134677 = ((function (map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs){
return (function dynomics$ui$ui$left_right_top_view_$___GT_t_dynomics$ui$ui134677(left_right_top_view__$1,p__134659__$1,map__134671__$2,state__$1,context_menu__$1,map__134672__$2,selected_nodes__$1,map__134673__$2,msgs__$1,meta134678){
return (new dynomics.ui.ui.t_dynomics$ui$ui134677(left_right_top_view__$1,p__134659__$1,map__134671__$2,state__$1,context_menu__$1,map__134672__$2,selected_nodes__$1,map__134673__$2,msgs__$1,meta134678));
});})(map__134671,map__134671__$1,state,context_menu,map__134672,map__134672__$1,selected_nodes,map__134673,map__134673__$1,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui134677(dynomics$ui$ui$left_right_top_view,p__134659,map__134671__$1,state,context_menu,map__134672__$1,selected_nodes,map__134673__$1,msgs,null));
});
dynomics.ui.ui.main_view = (function dynomics$ui$ui$main_view(){
return (function (p__134690,owner){
var map__134691 = p__134690;
var map__134691__$1 = ((((!((map__134691 == null)))?((((map__134691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134691):map__134691);
var state = map__134691__$1;
var style = cljs.core.get.call(null,map__134691__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui134693 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui134693 = (function (main_view,p__134690,owner,map__134691,state,style,meta134694){
this.main_view = main_view;
this.p__134690 = p__134690;
this.owner = owner;
this.map__134691 = map__134691;
this.state = state;
this.style = style;
this.meta134694 = meta134694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui134693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__134691,map__134691__$1,state,style){
return (function (_134695,meta134694__$1){
var self__ = this;
var _134695__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui134693(self__.main_view,self__.p__134690,self__.owner,self__.map__134691,self__.state,self__.style,meta134694__$1));
});})(map__134691,map__134691__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui134693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__134691,map__134691__$1,state,style){
return (function (_134695){
var self__ = this;
var _134695__$1 = this;
return self__.meta134694;
});})(map__134691,map__134691__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui134693.prototype.om$core$IWillMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui134693.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__134691,map__134691__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936),goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null)))));

dynomics.ui.ui.add_events_BANG_.call(null,self__.state);

return dynomics.ui.messaging.setup_updates.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),((function (___$1,map__134691,map__134691__$1,state,style){
return (function (g){
return om.core.transact_BANG_.call(null,self__.state,((function (___$1,map__134691,map__134691__$1,state,style){
return (function (s){
var map__134696 = g.call(null,s);
var map__134696__$1 = ((((!((map__134696 == null)))?((((map__134696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__134696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__134696):map__134696);
var f = cljs.core.get.call(null,map__134696__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var a = cljs.core.get.call(null,map__134696__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var ss = dynomics.ui.core.update_state.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"action","action",-811238024),(function (){var or__35425__auto__ = a;
if(cljs.core.truth_(or__35425__auto__)){
return or__35425__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.PersistentArrayMap.EMPTY,f);
return ss;
});})(___$1,map__134691,map__134691__$1,state,style))
);
});})(___$1,map__134691,map__134691__$1,state,style))
);
});})(map__134691,map__134691__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui134693.prototype.om$core$IWillReceiveProps$ = true;

dynomics.ui.ui.t_dynomics$ui$ui134693.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__134691,map__134691__$1,state,style){
return (function (this$,pp){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not_EQ_.call(null,self__.style,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(pp))){
var temp__4655__auto___134698 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936));
if(cljs.core.truth_(temp__4655__auto___134698)){
var s_134699 = temp__4655__auto___134698;
goog.style.uninstallStyles(s_134699);
} else {
}

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936),goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null)))));
} else {
return null;
}
});})(map__134691,map__134691__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui134693.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui134693.prototype.om$core$IRender$render$arity$1 = ((function (map__134691,map__134691__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,dynomics.ui.ui.left_right_top_view,self__.state);
});})(map__134691,map__134691__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui134693.getBasis = ((function (map__134691,map__134691__$1,state,style){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"p__134690","p__134690",-1754837129,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__134691","map__134691",1279716626,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"meta134694","meta134694",-683928296,null)], null);
});})(map__134691,map__134691__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui134693.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui134693.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui134693";

dynomics.ui.ui.t_dynomics$ui$ui134693.cljs$lang$ctorPrWriter = ((function (map__134691,map__134691__$1,state,style){
return (function (this__36031__auto__,writer__36032__auto__,opt__36033__auto__){
return cljs.core._write.call(null,writer__36032__auto__,"dynomics.ui.ui/t_dynomics$ui$ui134693");
});})(map__134691,map__134691__$1,state,style))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui134693 = ((function (map__134691,map__134691__$1,state,style){
return (function dynomics$ui$ui$main_view_$___GT_t_dynomics$ui$ui134693(main_view__$1,p__134690__$1,owner__$1,map__134691__$2,state__$1,style__$1,meta134694){
return (new dynomics.ui.ui.t_dynomics$ui$ui134693(main_view__$1,p__134690__$1,owner__$1,map__134691__$2,state__$1,style__$1,meta134694));
});})(map__134691,map__134691__$1,state,style))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui134693(dynomics$ui$ui$main_view,p__134690,owner,map__134691__$1,state,style,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Start the application!
 */
dynomics.ui.ui.start = (function dynomics$ui$ui$start(var_args){
var args134700 = [];
var len__36494__auto___134703 = arguments.length;
var i__36495__auto___134704 = (0);
while(true){
if((i__36495__auto___134704 < len__36494__auto___134703)){
args134700.push((arguments[i__36495__auto___134704]));

var G__134705 = (i__36495__auto___134704 + (1));
i__36495__auto___134704 = G__134705;
continue;
} else {
}
break;
}

var G__134702 = args134700.length;
switch (G__134702) {
case 0:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args134700.length)].join('')));

}
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.ui.ui.start.call(null,dynomics.ui.ui.add_components.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.add_functions.call(null,dynomics.ui.ui.add_messaging.call(null,dynomics.ui.ui.add_browser_info.call(null,dynomics.ui.core.make_state.call(null)))))));
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1 = (function (state){
return om.core.root.call(null,dynomics.ui.ui.main_view.call(null),state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("ui")], null));
});

dynomics.ui.ui.start.cljs$lang$maxFixedArity = 1;
