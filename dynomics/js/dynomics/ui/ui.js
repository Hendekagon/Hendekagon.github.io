// Compiled by ClojureScript 1.8.34 {}
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
dynomics.ui.ui.animation_frame = (function (){var or__35191__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
var or__35191__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__35191__auto____$1)){
return or__35191__auto____$1;
} else {
var or__35191__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__35191__auto____$2)){
return or__35191__auto____$2;
} else {
var or__35191__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__35191__auto____$3)){
return or__35191__auto____$3;
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
dynomics.ui.ui.keydown = (function dynomics$ui$ui$keydown(p__377795,e){
var map__377800 = p__377795;
var map__377800__$1 = ((((!((map__377800 == null)))?((((map__377800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377800):map__377800);
var state = map__377800__$1;
var map__377801 = cljs.core.get.call(null,map__377800__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__377801__$1 = ((((!((map__377801 == null)))?((((map__377801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377801):map__377801);
var msgs = cljs.core.get.call(null,map__377801__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
return cljs.core.async.put_BANG_.call(null,msgs,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
dynomics.ui.ui.keyup = (function dynomics$ui$ui$keyup(p__377804,e){
var map__377809 = p__377804;
var map__377809__$1 = ((((!((map__377809 == null)))?((((map__377809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377809):map__377809);
var state = map__377809__$1;
var map__377810 = cljs.core.get.call(null,map__377809__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__377810__$1 = ((((!((map__377810 == null)))?((((map__377810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377810):map__377810);
var msgs = cljs.core.get.call(null,map__377810__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
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
if(typeof dynomics.ui.ui.t_dynomics$ui$ui377820 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui377820 = (function (make_function_selector_view,state,owner,functions,state_updates,meta377821){
this.make_function_selector_view = make_function_selector_view;
this.state = state;
this.owner = owner;
this.functions = functions;
this.state_updates = state_updates;
this.meta377821 = meta377821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui377820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (functions,state_updates){
return (function (_377822,meta377821__$1){
var self__ = this;
var _377822__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui377820(self__.make_function_selector_view,self__.state,self__.owner,self__.functions,self__.state_updates,meta377821__$1));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui377820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (functions,state_updates){
return (function (_377822){
var self__ = this;
var _377822__$1 = this;
return self__.meta377821;
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui377820.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui377820.prototype.om$core$IRender$render$arity$1 = ((function (functions,state_updates){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": "function_selector"},cljs.core.map.call(null,((function (this__38609__auto____$1,functions,state_updates){
return (function (p__377823){
var vec__377824 = p__377823;
var k = cljs.core.nth.call(null,vec__377824,(0),null);
var map__377825 = cljs.core.nth.call(null,vec__377824,(1),null);
var map__377825__$1 = ((((!((map__377825 == null)))?((((map__377825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377825):map__377825);
var naym = cljs.core.get.call(null,map__377825__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__377825__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return om.dom.div.call(null,{"className": "function_selector_item", "id": [cljs.core.str(cljs.core.name.call(null,k))].join(''), "onClick": ((function (vec__377824,k,map__377825,map__377825__$1,naym,description,this__38609__auto____$1,functions,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__377824,k,map__377825,map__377825__$1,naym,description,this__38609__auto____$1,functions,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null),k);
});})(vec__377824,k,map__377825,map__377825__$1,naym,description,this__38609__auto____$1,functions,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"description","description",-1428560544),naym], null)], null));

return null;
});})(vec__377824,k,map__377825,map__377825__$1,naym,description,this__38609__auto____$1,functions,state_updates))
},naym);
});})(this__38609__auto____$1,functions,state_updates))
,self__.functions));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui377820.getBasis = ((function (functions,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-function-selector-view","make-function-selector-view",516344898,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for selecting the current function"], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"functions","functions",1825482993,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta377821","meta377821",-822672245,null)], null);
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui377820.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui377820.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui377820";

dynomics.ui.ui.t_dynomics$ui$ui377820.cljs$lang$ctorPrWriter = ((function (functions,state_updates){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui377820");
});})(functions,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui377820 = ((function (functions,state_updates){
return (function dynomics$ui$ui$make_function_selector_view_$___GT_t_dynomics$ui$ui377820(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta377821){
return (new dynomics.ui.ui.t_dynomics$ui$ui377820(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta377821));
});})(functions,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui377820(dynomics$ui$ui$make_function_selector_view,state,owner,functions,state_updates,null));
});
/**
 * Return a component to display a list
 *   of historical states which select a historical
 *   state on mouseover
 */
dynomics.ui.ui.make_history_selector_view = (function dynomics$ui$ui$make_history_selector_view(p__377827,owner){
var map__377838 = p__377827;
var map__377838__$1 = ((((!((map__377838 == null)))?((((map__377838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377838):map__377838);
var state = map__377838__$1;
var map__377839 = cljs.core.get.call(null,map__377838__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__377839__$1 = ((((!((map__377839 == null)))?((((map__377839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377839):map__377839);
var state_updates = cljs.core.get.call(null,map__377839__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var sh = cljs.core.get.call(null,map__377838__$1,new cljs.core.Keyword(null,"show-history","show-history",1972567130));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui377842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui377842 = (function (make_history_selector_view,p__377827,owner,map__377838,state,map__377839,state_updates,sh,meta377843){
this.make_history_selector_view = make_history_selector_view;
this.p__377827 = p__377827;
this.owner = owner;
this.map__377838 = map__377838;
this.state = state;
this.map__377839 = map__377839;
this.state_updates = state_updates;
this.sh = sh;
this.meta377843 = meta377843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui377842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (_377844,meta377843__$1){
var self__ = this;
var _377844__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui377842(self__.make_history_selector_view,self__.p__377827,self__.owner,self__.map__377838,self__.state,self__.map__377839,self__.state_updates,self__.sh,meta377843__$1));
});})(map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui377842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (_377844){
var self__ = this;
var _377844__$1 = this;
return self__.meta377843;
});})(map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui377842.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui377842.prototype.om$core$IRender$render$arity$1 = ((function (map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": "history_selector", "onClick": ((function (this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (e){
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.update_in.call(null,s__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),cljs.core.not);
});})(this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
], null);
});})(this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
);
});})(this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
},om.dom.div.call(null,{"className": "history_selector_text"},"History"),om.dom.div.call(null,{"className": (cljs.core.truth_(self__.sh)?"history_selector_visible":"history_selector_hidden")},cljs.core.map.call(null,((function (this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (p__377845){
var map__377846 = p__377845;
var map__377846__$1 = ((((!((map__377846 == null)))?((((map__377846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377846):map__377846);
var history_item = map__377846__$1;
var action = cljs.core.get.call(null,map__377846__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var version = cljs.core.get.call(null,map__377846__$1,new cljs.core.Keyword(null,"version","version",425292698));
var previous_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)) - (1))));
var previous_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)));
return om.dom.div.call(null,{"className": [cljs.core.str("history_selector_item "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_action)))?"historical":""))].join(''), "id": [cljs.core.str("history_version_"),cljs.core.str(previous_version)].join(''), "onMouseOver": ((function (previous_action,previous_version,map__377846,map__377846__$1,history_item,action,version,this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (previous_action,previous_version,map__377846,map__377846__$1,history_item,action,version,this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (previous_action,previous_version,map__377846,map__377846__$1,history_item,action,version,this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.merge.call(null,om.core.value.call(null,history_item),cljs.core.select_keys.call(null,s__$1,cljs.core.conj.call(null,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(s__$1),new cljs.core.Keyword(null,"history","history",-247395220))));
});})(previous_action,previous_version,map__377846,map__377846__$1,history_item,action,version,this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desccription","desccription",-1060114044),[cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action))].join(''),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"id","id",-1388402092),version], null)], null);
});})(previous_action,previous_version,map__377846,map__377846__$1,history_item,action,version,this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
);

return null;
});})(previous_action,previous_version,map__377846,map__377846__$1,history_item,action,version,this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action));
});})(this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
,cljs.core.filter.call(null,((function (this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (hi){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi)) - (1)))));
});})(this__38609__auto____$1,map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
,cljs.core.reverse.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.state),self__.state))))));
});})(map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui377842.getBasis = ((function (map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-history-selector-view","make-history-selector-view",1677763159,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Keyword(null,"show-history","show-history",1972567130),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a component to display a list\n  of historical states which select a historical\n  state on mouseover"], null)),new cljs.core.Symbol(null,"p__377827","p__377827",1250433168,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__377838","map__377838",-1373321042,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__377839","map__377839",1046217251,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Symbol(null,"meta377843","meta377843",-1513304214,null)], null);
});})(map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui377842.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui377842.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui377842";

dynomics.ui.ui.t_dynomics$ui$ui377842.cljs$lang$ctorPrWriter = ((function (map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui377842");
});})(map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui377842 = ((function (map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh){
return (function dynomics$ui$ui$make_history_selector_view_$___GT_t_dynomics$ui$ui377842(make_history_selector_view__$1,p__377827__$1,owner__$1,map__377838__$2,state__$1,map__377839__$2,state_updates__$1,sh__$1,meta377843){
return (new dynomics.ui.ui.t_dynomics$ui$ui377842(make_history_selector_view__$1,p__377827__$1,owner__$1,map__377838__$2,state__$1,map__377839__$2,state_updates__$1,sh__$1,meta377843));
});})(map__377838,map__377838__$1,state,map__377839,map__377839__$1,state_updates,sh))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui377842(dynomics$ui$ui$make_history_selector_view,p__377827,owner,map__377838__$1,state,map__377839__$1,state_updates,sh,null));
});
dynomics.ui.ui.make_context_menu = (function dynomics$ui$ui$make_context_menu(p__377848){
var map__377861 = p__377848;
var map__377861__$1 = ((((!((map__377861 == null)))?((((map__377861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377861):map__377861);
var map__377862 = cljs.core.get.call(null,map__377861__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__377862__$1 = ((((!((map__377862 == null)))?((((map__377862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377862):map__377862);
var vec__377863 = cljs.core.get.call(null,map__377862__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__377863,(0),null);
var y = cljs.core.nth.call(null,vec__377863,(1),null);
var o = cljs.core.get.call(null,map__377862__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var options = cljs.core.get.call(null,map__377862__$1,new cljs.core.Keyword(null,"options","options",99638489));
var msgs = cljs.core.get.call(null,map__377861__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui377866 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui377866 = (function (vec__377863,options,x,map__377862,map__377861,y,p__377848,o,msgs,make_context_menu,meta377867){
this.vec__377863 = vec__377863;
this.options = options;
this.x = x;
this.map__377862 = map__377862;
this.map__377861 = map__377861;
this.y = y;
this.p__377848 = p__377848;
this.o = o;
this.msgs = msgs;
this.make_context_menu = make_context_menu;
this.meta377867 = meta377867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui377866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs){
return (function (_377868,meta377867__$1){
var self__ = this;
var _377868__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui377866(self__.vec__377863,self__.options,self__.x,self__.map__377862,self__.map__377861,self__.y,self__.p__377848,self__.o,self__.msgs,self__.make_context_menu,meta377867__$1));
});})(map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui377866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs){
return (function (_377868){
var self__ = this;
var _377868__$1 = this;
return self__.meta377867;
});})(map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui377866.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui377866.prototype.om$core$IRender$render$arity$1 = ((function (map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return React.createElement("div",{"style": {"transform": [cljs.core.str("translate("),cljs.core.str(self__.x),cljs.core.str("px,"),cljs.core.str(self__.y),cljs.core.str("px)")].join('')}, "id": "context-menu", "className": "context_menu", "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseLeave": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY)},React.createElement("div",{"className": "context_menu_title"},sablono.interpreter.interpret.call(null,[cljs.core.str("Options for "),cljs.core.str(cljs.core.name.call(null,self__.o))].join(''))),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (this__38609__auto____$1,map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs){
return (function (p__377869){
var vec__377870 = p__377869;
var k = cljs.core.nth.call(null,vec__377870,(0),null);
var map__377871 = cljs.core.nth.call(null,vec__377870,(1),null);
var map__377871__$1 = ((((!((map__377871 == null)))?((((map__377871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377871):map__377871);
var naym = cljs.core.get.call(null,map__377871__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kb = cljs.core.get.call(null,map__377871__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var f = cljs.core.get.call(null,map__377871__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"context_menu_option",new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),k], null),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),f], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(naym),cljs.core.str("  ")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"keyboard_shortcut"], null),[cljs.core.str(kb)].join('')], null)], null);
});})(this__38609__auto____$1,map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs))
,self__.options)));
});})(map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui377866.getBasis = ((function (map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__377863","vec__377863",-615459744,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"map__377862","map__377862",1241721122,null),new cljs.core.Symbol(null,"map__377861","map__377861",1853750310,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"p__377848","p__377848",-1414037560,null),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-context-menu","make-context-menu",-526000036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"options","options",99638489)], true, false),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], true, false)], null)))], null)),new cljs.core.Symbol(null,"meta377867","meta377867",-11971081,null)], null);
});})(map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui377866.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui377866.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui377866";

dynomics.ui.ui.t_dynomics$ui$ui377866.cljs$lang$ctorPrWriter = ((function (map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui377866");
});})(map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui377866 = ((function (map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs){
return (function dynomics$ui$ui$make_context_menu_$___GT_t_dynomics$ui$ui377866(vec__377863__$1,options__$1,x__$1,map__377862__$2,map__377861__$2,y__$1,p__377848__$1,o__$1,msgs__$1,make_context_menu__$1,meta377867){
return (new dynomics.ui.ui.t_dynomics$ui$ui377866(vec__377863__$1,options__$1,x__$1,map__377862__$2,map__377861__$2,y__$1,p__377848__$1,o__$1,msgs__$1,make_context_menu__$1,meta377867));
});})(map__377861,map__377861__$1,map__377862,map__377862__$1,vec__377863,x,y,o,options,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui377866(vec__377863,options,x,map__377862__$1,map__377861__$1,y,p__377848,o,msgs,dynomics$ui$ui$make_context_menu,null));
});
/**
 * Returns a component for the top header
 */
dynomics.ui.ui.make_header_view = (function dynomics$ui$ui$make_header_view(p__377873){
var map__377879 = p__377873;
var map__377879__$1 = ((((!((map__377879 == null)))?((((map__377879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377879):map__377879);
var state = map__377879__$1;
var logo_text = cljs.core.get.call(null,map__377879__$1,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
var app_name = cljs.core.get.call(null,map__377879__$1,new cljs.core.Keyword(null,"app-name","app-name",-268811251));
var app_version = cljs.core.get.call(null,map__377879__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
var state_version = cljs.core.get.call(null,map__377879__$1,new cljs.core.Keyword(null,"state-version","state-version",1282692697));
var action = cljs.core.get.call(null,map__377879__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui377881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui377881 = (function (make_header_view,p__377873,map__377879,state,logo_text,app_name,app_version,state_version,action,meta377882){
this.make_header_view = make_header_view;
this.p__377873 = p__377873;
this.map__377879 = map__377879;
this.state = state;
this.logo_text = logo_text;
this.app_name = app_name;
this.app_version = app_version;
this.state_version = state_version;
this.action = action;
this.meta377882 = meta377882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui377881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__377879,map__377879__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_377883,meta377882__$1){
var self__ = this;
var _377883__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui377881(self__.make_header_view,self__.p__377873,self__.map__377879,self__.state,self__.logo_text,self__.app_name,self__.app_version,self__.state_version,self__.action,meta377882__$1));
});})(map__377879,map__377879__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui377881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__377879,map__377879__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_377883){
var self__ = this;
var _377883__$1 = this;
return self__.meta377882;
});})(map__377879,map__377879__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui377881.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui377881.prototype.om$core$IRender$render$arity$1 = ((function (map__377879,map__377879__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": "top_component"},null,null);
});})(map__377879,map__377879__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui377881.getBasis = ((function (map__377879,map__377879__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-header-view","make-header-view",2348093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the top header"], null)),new cljs.core.Symbol(null,"p__377873","p__377873",-2037832980,null),new cljs.core.Symbol(null,"map__377879","map__377879",-893462087,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Symbol(null,"meta377882","meta377882",1974369241,null)], null);
});})(map__377879,map__377879__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui377881.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui377881.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui377881";

dynomics.ui.ui.t_dynomics$ui$ui377881.cljs$lang$ctorPrWriter = ((function (map__377879,map__377879__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui377881");
});})(map__377879,map__377879__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui377881 = ((function (map__377879,map__377879__$1,state,logo_text,app_name,app_version,state_version,action){
return (function dynomics$ui$ui$make_header_view_$___GT_t_dynomics$ui$ui377881(make_header_view__$1,p__377873__$1,map__377879__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta377882){
return (new dynomics.ui.ui.t_dynomics$ui$ui377881(make_header_view__$1,p__377873__$1,map__377879__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta377882));
});})(map__377879,map__377879__$1,state,logo_text,app_name,app_version,state_version,action))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui377881(dynomics$ui$ui$make_header_view,p__377873,map__377879__$1,state,logo_text,app_name,app_version,state_version,action,null));
});
dynomics.ui.ui.evaluate = (function dynomics$ui$ui$evaluate(s,sexp,f){
return null;
});
dynomics.ui.ui.make_footer_view = (function dynomics$ui$ui$make_footer_view(p__377884){
var map__377894 = p__377884;
var map__377894__$1 = ((((!((map__377894 == null)))?((((map__377894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377894):map__377894);
var state = map__377894__$1;
var map__377895 = cljs.core.get.call(null,map__377894__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__377895__$1 = ((((!((map__377895 == null)))?((((map__377895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377895):map__377895);
var state_updates = cljs.core.get.call(null,map__377895__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var map__377896 = cljs.core.get.call(null,map__377894__$1,new cljs.core.Keyword(null,"eval","eval",-1103567905));
var map__377896__$1 = ((((!((map__377896 == null)))?((((map__377896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377896):map__377896);
var last_result = cljs.core.get.call(null,map__377896__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var last_exps = cljs.core.get.call(null,map__377896__$1,new cljs.core.Keyword(null,"exps","exps",-877274249));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui377900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui377900 = (function (make_footer_view,p__377884,map__377894,state,map__377895,state_updates,map__377896,last_result,last_exps,meta377901){
this.make_footer_view = make_footer_view;
this.p__377884 = p__377884;
this.map__377894 = map__377894;
this.state = state;
this.map__377895 = map__377895;
this.state_updates = state_updates;
this.map__377896 = map__377896;
this.last_result = last_result;
this.last_exps = last_exps;
this.meta377901 = meta377901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui377900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps){
return (function (_377902,meta377901__$1){
var self__ = this;
var _377902__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui377900(self__.make_footer_view,self__.p__377884,self__.map__377894,self__.state,self__.map__377895,self__.state_updates,self__.map__377896,self__.last_result,self__.last_exps,meta377901__$1));
});})(map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui377900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps){
return (function (_377902){
var self__ = this;
var _377902__$1 = this;
return self__.meta377901;
});})(map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui377900.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui377900.prototype.om$core$IRender$render$arity$1 = ((function (map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": "bottom_component"},om.dom.input.call(null,{"className": "eval_input", "type": "text", "size": (64), "onKeyDown": ((function (this__38609__auto____$1,map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps){
return (function (e){
e.stopPropagation();


return null;
});})(this__38609__auto____$1,map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps))
}),om.dom.div.call(null,{"className": "eval_result"},[cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.last_result))].join('')));
});})(map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui377900.getBasis = ((function (map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-footer-view","make-footer-view",-746293906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Keyword(null,"exps","exps",-877274249)], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__377884","p__377884",550214676,null),new cljs.core.Symbol(null,"map__377894","map__377894",-682756156,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__377895","map__377895",527927328,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"map__377896","map__377896",-1376254389,null),new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Symbol(null,"meta377901","meta377901",-692957858,null)], null);
});})(map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui377900.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui377900.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui377900";

dynomics.ui.ui.t_dynomics$ui$ui377900.cljs$lang$ctorPrWriter = ((function (map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui377900");
});})(map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui377900 = ((function (map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps){
return (function dynomics$ui$ui$make_footer_view_$___GT_t_dynomics$ui$ui377900(make_footer_view__$1,p__377884__$1,map__377894__$2,state__$1,map__377895__$2,state_updates__$1,map__377896__$2,last_result__$1,last_exps__$1,meta377901){
return (new dynomics.ui.ui.t_dynomics$ui$ui377900(make_footer_view__$1,p__377884__$1,map__377894__$2,state__$1,map__377895__$2,state_updates__$1,map__377896__$2,last_result__$1,last_exps__$1,meta377901));
});})(map__377894,map__377894__$1,state,map__377895,map__377895__$1,state_updates,map__377896,map__377896__$1,last_result,last_exps))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui377900(dynomics$ui$ui$make_footer_view,p__377884,map__377894__$1,state,map__377895__$1,state_updates,map__377896__$1,last_result,last_exps,null));
});
dynomics.ui.ui.add_components = (function dynomics$ui$ui$add_components(state){
var seq__377907_377911 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null))))));
var chunk__377908_377912 = null;
var count__377909_377913 = (0);
var i__377910_377914 = (0);
while(true){
if((i__377910_377914 < count__377909_377913)){
var component_377915 = cljs.core._nth.call(null,chunk__377908_377912,i__377910_377914);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_377915);

var G__377916 = seq__377907_377911;
var G__377917 = chunk__377908_377912;
var G__377918 = count__377909_377913;
var G__377919 = (i__377910_377914 + (1));
seq__377907_377911 = G__377916;
chunk__377908_377912 = G__377917;
count__377909_377913 = G__377918;
i__377910_377914 = G__377919;
continue;
} else {
var temp__4657__auto___377920 = cljs.core.seq.call(null,seq__377907_377911);
if(temp__4657__auto___377920){
var seq__377907_377921__$1 = temp__4657__auto___377920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__377907_377921__$1)){
var c__36002__auto___377922 = cljs.core.chunk_first.call(null,seq__377907_377921__$1);
var G__377923 = cljs.core.chunk_rest.call(null,seq__377907_377921__$1);
var G__377924 = c__36002__auto___377922;
var G__377925 = cljs.core.count.call(null,c__36002__auto___377922);
var G__377926 = (0);
seq__377907_377911 = G__377923;
chunk__377908_377912 = G__377924;
count__377909_377913 = G__377925;
i__377910_377914 = G__377926;
continue;
} else {
var component_377927 = cljs.core.first.call(null,seq__377907_377921__$1);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_377927);

var G__377928 = cljs.core.next.call(null,seq__377907_377921__$1);
var G__377929 = null;
var G__377930 = (0);
var G__377931 = (0);
seq__377907_377911 = G__377928;
chunk__377908_377912 = G__377929;
count__377909_377913 = G__377930;
i__377910_377914 = G__377931;
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
var args377932 = [];
var len__36260__auto___377939 = arguments.length;
var i__36261__auto___377940 = (0);
while(true){
if((i__36261__auto___377940 < len__36260__auto___377939)){
args377932.push((arguments[i__36261__auto___377940]));

var G__377941 = (i__36261__auto___377940 + (1));
i__36261__auto___377940 = G__377941;
continue;
} else {
}
break;
}

var G__377934 = args377932.length;
switch (G__377934) {
case 1:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args377932.length)].join('')));

}
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.ui.add_keybindings.call(null,state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)));
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2 = (function (state,tools){
return cljs.core.reduce.call(null,(function (r,p__377935){
var vec__377936 = p__377935;
var k = cljs.core.nth.call(null,vec__377936,(0),null);
var map__377937 = cljs.core.nth.call(null,vec__377936,(1),null);
var map__377937__$1 = ((((!((map__377937 == null)))?((((map__377937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377937):map__377937);
var f = cljs.core.get.call(null,map__377937__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var kb = cljs.core.get.call(null,map__377937__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var naym = cljs.core.get.call(null,map__377937__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tools__$1 = cljs.core.get.call(null,map__377937__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
if(cljs.core.truth_(f)){
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),((function (vec__377936,k,map__377937,map__377937__$1,f,kb,naym,tools__$1){
return (function (s){
cljs.core.println.call(null,naym);

return ((cljs.core.delay_QMARK_.call(null,f))?cljs.core.deref.call(null,f):f).call(null,s);
});})(vec__377936,k,map__377937,map__377937__$1,f,kb,naym,tools__$1))
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
dynomics.ui.ui.toggle_select = (function dynomics$ui$ui$toggle_select(state,p__377943){
var map__377946 = p__377943;
var map__377946__$1 = ((((!((map__377946 == null)))?((((map__377946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377946):map__377946);
var p = cljs.core.get.call(null,map__377946__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__377946__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__377946__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return dynomics.space.core.add_curve_between_nodes.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (map__377946,map__377946__$1,p,id,path){
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
});})(map__377946,map__377946__$1,p,id,path))
));
});
dynomics.ui.ui.end_move = (function dynomics$ui$ui$end_move(state){
cljs.core.println.call(null,"end move");

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
dynomics.ui.ui.toggle_select_curve = (function dynomics$ui$ui$toggle_select_curve(state,p__377948){
var map__377951 = p__377948;
var map__377951__$1 = ((((!((map__377951 == null)))?((((map__377951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377951):map__377951);
var p = cljs.core.get.call(null,map__377951__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__377951__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__377951__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"(de)select curve",path);

return dynomics.space.core.toggle_select_curve.call(null,state,path);
});
dynomics.ui.ui.toggle_active = (function dynomics$ui$ui$toggle_active(state,p__377953){
var map__377957 = p__377953;
var map__377957__$1 = ((((!((map__377957 == null)))?((((map__377957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377957):map__377957);
var vec__377958 = cljs.core.get.call(null,map__377957__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__377958,(0),null);
var y = cljs.core.nth.call(null,vec__377958,(1),null);
var id = cljs.core.get.call(null,map__377957__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__377957__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891)], null),((function (map__377957,map__377957__$1,vec__377958,x,y,id,path){
return (function (an){
var n = (function (){var or__35191__auto__ = an;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.truth_(n.call(null,path))){
return cljs.core.disj.call(null,n,path);
} else {
return cljs.core.conj.call(null,n,path);
}
});})(map__377957,map__377957__$1,vec__377958,x,y,id,path))
);
});
/**
 * Returns the given state with the
 *   selected-nodes' positions saved
 *   to use for move offsets
 */
dynomics.ui.ui.where_they_were = (function dynomics$ui$ui$where_they_were(p__377960){
var map__377965 = p__377960;
var map__377965__$1 = ((((!((map__377965 == null)))?((((map__377965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377965):map__377965);
var state = map__377965__$1;
var map__377966 = cljs.core.get.call(null,map__377965__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__377966__$1 = ((((!((map__377966 == null)))?((((map__377966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377966):map__377966);
var space = map__377966__$1;
var selected_nodes = cljs.core.get.call(null,map__377966__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,((function (map__377965,map__377965__$1,state,map__377966,map__377966__$1,space,selected_nodes){
return (function (s,path){
return cljs.core.assoc_in.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))));
});})(map__377965,map__377965__$1,state,map__377966,map__377966__$1,space,selected_nodes))
,state,cljs.core.remove.call(null,cljs.core.nil_QMARK_,selected_nodes));
});
/**
 * Select node to move
 */
dynomics.ui.ui.select_node_for_move = (function dynomics$ui$ui$select_node_for_move(state,p__377969){
var map__377972 = p__377969;
var map__377972__$1 = ((((!((map__377972 == null)))?((((map__377972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377972):map__377972);
var p = cljs.core.get.call(null,map__377972__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__377972__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select node to move ",path);

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-when-selected","position-when-selected",1681219792)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select curve to move
 */
dynomics.ui.ui.select_curve_for_move = (function dynomics$ui$ui$select_curve_for_move(state,p__377974){
var map__377977 = p__377974;
var map__377977__$1 = ((((!((map__377977 == null)))?((((map__377977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377977):map__377977);
var p = cljs.core.get.call(null,map__377977__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__377977__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select curve for move ",path,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null)));

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,dynomics.space.core.toggle_select_curve.call(null,state,path)),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select node
 */
dynomics.ui.ui.select_node = (function dynomics$ui$ui$select_node(state,p__377979){
var map__377982 = p__377979;
var map__377982__$1 = ((((!((map__377982 == null)))?((((map__377982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377982):map__377982);
var path = cljs.core.get.call(null,map__377982__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path);
});
/**
 * Select object
 */
dynomics.ui.ui.select_object = (function dynomics$ui$ui$select_object(state,p__377984){
var map__377987 = p__377984;
var map__377987__$1 = ((((!((map__377987 == null)))?((((map__377987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377987):map__377987);
var path = cljs.core.get.call(null,map__377987__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tipe = cljs.core.get.call(null,map__377987__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"select object",path,tipe);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,tipe)], null),cljs.core.conj,path);
});
/**
 * Deselect object
 */
dynomics.ui.ui.deselect_object = (function dynomics$ui$ui$deselect_object(p__377989,p__377990){
var map__377999 = p__377989;
var map__377999__$1 = ((((!((map__377999 == null)))?((((map__377999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__377999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__377999):map__377999);
var state = map__377999__$1;
var map__378000 = cljs.core.get.call(null,map__377999__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__378000__$1 = ((((!((map__378000 == null)))?((((map__378000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378000):map__378000);
var o = cljs.core.get.call(null,map__378000__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var map__378001 = cljs.core.get.call(null,map__378000__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__378001__$1 = ((((!((map__378001 == null)))?((((map__378001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378001):map__378001);
var p1 = cljs.core.get.call(null,map__378001__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t1 = cljs.core.get.call(null,map__378001__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var map__378002 = p__377990;
var map__378002__$1 = ((((!((map__378002 == null)))?((((map__378002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378002):map__378002);
var p2 = cljs.core.get.call(null,map__378002__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t2 = cljs.core.get.call(null,map__378002__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"deselect object",p1,t1,p2,t2);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,(function (){var or__35191__auto__ = t1;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return t2;
}
})())], null),cljs.core.disj,(function (){var or__35191__auto__ = p1;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return p2;
}
})());
});
/**
 * Deselect node
 */
dynomics.ui.ui.deselect_node = (function dynomics$ui$ui$deselect_node(state,p__378007){
var map__378010 = p__378007;
var map__378010__$1 = ((((!((map__378010 == null)))?((((map__378010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378010):map__378010);
var path = cljs.core.get.call(null,map__378010__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.disj,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),false);
});
/**
 * Deselect curve
 */
dynomics.ui.ui.deselect_curve = (function dynomics$ui$ui$deselect_curve(state,p__378012){
var map__378015 = p__378012;
var map__378015__$1 = ((((!((map__378015 == null)))?((((map__378015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378015):map__378015);
var p = cljs.core.get.call(null,map__378015__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__378015__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,dynomics.space.core.deselect_curve.call(null,state,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
dynomics.ui.ui.hide_context_menu = (function dynomics$ui$ui$hide_context_menu(state,event){
return cljs.core.assoc.call(null,dynomics.ui.ui.deselect_object.call(null,state,event),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),null,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
dynomics.ui.ui.show_context_menu = (function dynomics$ui$ui$show_context_menu(state,p__378017){
var map__378023 = p__378017;
var map__378023__$1 = ((((!((map__378023 == null)))?((((map__378023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378023):map__378023);
var event = map__378023__$1;
var ep = cljs.core.get.call(null,map__378023__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var mp = cljs.core.get.call(null,map__378023__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var o = cljs.core.get.call(null,map__378023__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var context_menu = cljs.core.get.call(null,map__378023__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
cljs.core.println.call(null,"show cm",o);

return cljs.core.assoc.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.select_object.call(null,state,event),cljs.core.map.call(null,((function (map__378023,map__378023__$1,event,ep,mp,o,context_menu){
return (function (p__378025){
var map__378026 = p__378025;
var map__378026__$1 = ((((!((map__378026 == null)))?((((map__378026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378026):map__378026);
var option = map__378026__$1;
var f = cljs.core.get.call(null,map__378026__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.truth_(f)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.assoc,option,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.deref.call(null,f)], true, false);
} else {
return option;
}
});})(map__378023,map__378023__$1,event,ep,mp,o,context_menu))
,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null)))),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__35191__auto__ = ep;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return mp;
}
})(),new cljs.core.Keyword(null,"object","object",1474613949),o,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null))], null));
});
dynomics.ui.ui.toggle_context_menu = (function dynomics$ui$ui$toggle_context_menu(p__378028,event){
var map__378031 = p__378028;
var map__378031__$1 = ((((!((map__378031 == null)))?((((map__378031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378031):map__378031);
var state = map__378031__$1;
var context_menu = cljs.core.get.call(null,map__378031__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
if(cljs.core.truth_(context_menu)){
return dynomics.ui.ui.hide_context_menu.call(null,state,event);
} else {
return dynomics.ui.ui.show_context_menu.call(null,state,event);
}
});
dynomics.ui.ui.toggle_left_panel = (function dynomics$ui$ui$toggle_left_panel(p__378033,event){
var map__378036 = p__378033;
var map__378036__$1 = ((((!((map__378036 == null)))?((((map__378036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378036):map__378036);
var state = map__378036__$1;
var left_panel_QMARK_ = cljs.core.get.call(null,map__378036__$1,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317),cljs.core.not.call(null,left_panel_QMARK_));
});
dynomics.ui.ui.switch_styles = (function dynomics$ui$ui$switch_styles(p__378038,_){
var map__378041 = p__378038;
var map__378041__$1 = ((((!((map__378041 == null)))?((((map__378041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378041):map__378041);
var state = map__378041__$1;
var style = cljs.core.get.call(null,map__378041__$1,new cljs.core.Keyword(null,"style","style",-496642736));
cljs.core.println.call(null,"switch style",style);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"light","light",1918998747)))?new cljs.core.Keyword(null,"dark","dark",1818973999):new cljs.core.Keyword(null,"light","light",1918998747)));
});
dynomics.ui.ui.relative_to_cursor = (function dynomics$ui$ui$relative_to_cursor(var_args){
var args378043 = [];
var len__36260__auto___378046 = arguments.length;
var i__36261__auto___378047 = (0);
while(true){
if((i__36261__auto___378047 < len__36260__auto___378046)){
args378043.push((arguments[i__36261__auto___378047]));

var G__378048 = (i__36261__auto___378047 + (1));
i__36261__auto___378047 = G__378048;
continue;
} else {
}
break;
}

var G__378045 = args378043.length;
switch (G__378045) {
case 3:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args378043.length)].join('')));

}
});

dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (p,pth,state){
return dynomics.ui.ui.relative_to_cursor.call(null,p,pth,cljs.core.get_in.call(null,state,cljs.core.conj.call(null,pth,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089).cljs$core$IFn$_invoke$arity$1(state));
});

dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4 = (function (p,pth,pws,pasom){
return cljs.core.map.call(null,cljs.core._PLUS_,p,cljs.core.map.call(null,cljs.core._,pws,pasom));
});

dynomics.ui.ui.relative_to_cursor.cljs$lang$maxFixedArity = 4;
dynomics.ui.ui.print_state = (function dynomics$ui$ui$print_state(state,event){
return cljs.core.println.call(null,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"space","space",348133475)], null)));
});
/**
 * Move objects
 */
dynomics.ui.ui.move_objects = (function dynomics$ui$ui$move_objects(p__378050,p__378051){
var map__378061 = p__378050;
var map__378061__$1 = ((((!((map__378061 == null)))?((((map__378061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378061):map__378061);
var state = map__378061__$1;
var map__378062 = cljs.core.get.call(null,map__378061__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__378062__$1 = ((((!((map__378062 == null)))?((((map__378062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378062):map__378062);
var space = map__378062__$1;
var selected_nodes = cljs.core.get.call(null,map__378062__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var zoom = cljs.core.get.call(null,map__378062__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__378063 = p__378051;
var map__378063__$1 = ((((!((map__378063 == null)))?((((map__378063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378063):map__378063);
var vec__378064 = cljs.core.get.call(null,map__378063__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__378064,(0),null);
var y = cljs.core.nth.call(null,vec__378064,(1),null);
var ck = cljs.core.get.call(null,map__378063__$1,new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989));
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__378061,map__378061__$1,state,map__378062,map__378062__$1,space,selected_nodes,zoom,map__378063,map__378063__$1,vec__378064,x,y,ck){
return (function (r,path){
var tfn = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"point","point",1813198264))))?(cljs.core.truth_(ck)?dynomics.space.core.to_space:dynomics.space.core.mirror_node):((function (map__378061,map__378061__$1,state,map__378062,map__378062__$1,space,selected_nodes,zoom,map__378063,map__378063__$1,vec__378064,x,y,ck){
return (function (p,pth,_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,dynomics.ui.ui.relative_to_cursor.call(null,p,pth,state)], null)], null);
});})(map__378061,map__378061__$1,state,map__378062,map__378062__$1,space,selected_nodes,zoom,map__378063,map__378063__$1,vec__378064,x,y,ck))
);
return cljs.core.reduce.call(null,((function (tfn,map__378061,map__378061__$1,state,map__378062,map__378062__$1,space,selected_nodes,zoom,map__378063,map__378063__$1,vec__378064,x,y,ck){
return (function (r__$1,p__378068){
var vec__378069 = p__378068;
var cpath = cljs.core.nth.call(null,vec__378069,(0),null);
var cpoint = cljs.core.nth.call(null,vec__378069,(1),null);
return cljs.core.assoc_in.call(null,r__$1,cljs.core.conj.call(null,cpath,new cljs.core.Keyword(null,"position","position",-2011731912)),cpoint);
});})(tfn,map__378061,map__378061__$1,state,map__378062,map__378062__$1,space,selected_nodes,zoom,map__378063,map__378063__$1,vec__378064,x,y,ck))
,r,tfn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),path,space));
});})(map__378061,map__378061__$1,state,map__378062,map__378062__$1,space,selected_nodes,zoom,map__378063,map__378063__$1,vec__378064,x,y,ck))
,state,selected_nodes),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Pan
 */
dynomics.ui.ui.pan = (function dynomics$ui$ui$pan(p__378070,p__378071){
var map__378077 = p__378070;
var map__378077__$1 = ((((!((map__378077 == null)))?((((map__378077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378077):map__378077);
var state = map__378077__$1;
var pp = cljs.core.get.call(null,map__378077__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var pan__$1 = cljs.core.get.call(null,map__378077__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__378077__$1,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305));
var zoom = cljs.core.get.call(null,map__378077__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__378078 = p__378071;
var map__378078__$1 = ((((!((map__378078 == null)))?((((map__378078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378078):map__378078);
var p = cljs.core.get.call(null,map__378078__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var pl = cljs.core.get.call(null,map__378078__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var vec__378079 = cljs.core.get.call(null,map__378078__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__378079,(0),null);
var p2 = cljs.core.nth.call(null,vec__378079,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"pan","pan",-307712792),cljs.core.map.call(null,cljs.core._,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / zoom)),p2),sp));
});
/**
 * Start zoom
 */
dynomics.ui.ui.start_zoom = (function dynomics$ui$ui$start_zoom(p__378082,p__378083){
var map__378089 = p__378082;
var map__378089__$1 = ((((!((map__378089 == null)))?((((map__378089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378089):map__378089);
var state = map__378089__$1;
var zoom = cljs.core.get.call(null,map__378089__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pz = cljs.core.get.call(null,map__378089__$1,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303));
var map__378090 = p__378083;
var map__378090__$1 = ((((!((map__378090 == null)))?((((map__378090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378090):map__378090);
var p = cljs.core.get.call(null,map__378090__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__378091 = cljs.core.get.call(null,map__378090__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__378091,(0),null);
var p2 = cljs.core.nth.call(null,vec__378091,(1),null);
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
dynomics.ui.ui.zoom = (function dynomics$ui$ui$zoom(p__378094,p__378095){
var map__378101 = p__378094;
var map__378101__$1 = ((((!((map__378101 == null)))?((((map__378101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378101):map__378101);
var state = map__378101__$1;
var zoom__$1 = cljs.core.get.call(null,map__378101__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pan = cljs.core.get.call(null,map__378101__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__378101__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var map__378102 = p__378095;
var map__378102__$1 = ((((!((map__378102 == null)))?((((map__378102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378102):map__378102);
var dy = cljs.core.get.call(null,map__378102__$1,new cljs.core.Keyword(null,"deltaY","deltaY",-879493966));
var p = cljs.core.get.call(null,map__378102__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__378103 = cljs.core.get.call(null,map__378102__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__378103,(0),null);
var p2 = cljs.core.nth.call(null,vec__378103,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(function (){var x__35522__auto__ = 0.5;
var y__35523__auto__ = (zoom__$1 + (0.01 * dy));
return ((x__35522__auto__ > y__35523__auto__) ? x__35522__auto__ : y__35523__auto__);
})(),new cljs.core.Keyword(null,"pan","pan",-307712792),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(-1)),sp),new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),p2);
});
/**
 * Start move objects
 */
dynomics.ui.ui.start_move = (function dynomics$ui$ui$start_move(p__378106,event){
var map__378109 = p__378106;
var map__378109__$1 = ((((!((map__378109 == null)))?((((map__378109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378109):map__378109);
var state = map__378109__$1;
var pan_zoom_QMARK_ = cljs.core.get.call(null,map__378109__$1,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true);
});
/**
 * Move
 */
dynomics.ui.ui.move_cursor = (function dynomics$ui$ui$move_cursor(p__378111,p__378112){
var map__378118 = p__378111;
var map__378118__$1 = ((((!((map__378118 == null)))?((((map__378118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378118):map__378118);
var state = map__378118__$1;
var zoom = cljs.core.get.call(null,map__378118__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__378119 = p__378112;
var map__378119__$1 = ((((!((map__378119 == null)))?((((map__378119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378119):map__378119);
var p = cljs.core.get.call(null,map__378119__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__378120 = cljs.core.get.call(null,map__378119__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__378120,(0),null);
var p2 = cljs.core.nth.call(null,vec__378120,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p1);
});
/**
 * Start pan
 */
dynomics.ui.ui.start_pan = (function dynomics$ui$ui$start_pan(p__378123,p__378124){
var map__378130 = p__378123;
var map__378130__$1 = ((((!((map__378130 == null)))?((((map__378130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378130):map__378130);
var state = map__378130__$1;
var zoom = cljs.core.get.call(null,map__378130__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__378131 = p__378124;
var map__378131__$1 = ((((!((map__378131 == null)))?((((map__378131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378131):map__378131);
var p = cljs.core.get.call(null,map__378131__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__378132 = cljs.core.get.call(null,map__378131__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__378132,(0),null);
var p2 = cljs.core.nth.call(null,vec__378132,(1),null);
cljs.core.println.call(null,"start pan",p,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),true,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1);
});
/**
 * End pan
 */
dynomics.ui.ui.end_pan = (function dynomics$ui$ui$end_pan(state,p__378135){
var map__378138 = p__378135;
var map__378138__$1 = ((((!((map__378138 == null)))?((((map__378138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378138):map__378138);
var p = cljs.core.get.call(null,map__378138__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
/**
 * Add node
 */
dynomics.ui.ui.add_node = (function dynomics$ui$ui$add_node(state,p__378140){
var map__378143 = p__378140;
var map__378143__$1 = ((((!((map__378143 == null)))?((((map__378143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378143):map__378143);
var p = cljs.core.get.call(null,map__378143__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p));
});
dynomics.ui.ui.connect_nodes = (function dynomics$ui$ui$connect_nodes(state,p__378145){
var map__378149 = p__378145;
var map__378149__$1 = ((((!((map__378149 == null)))?((((map__378149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378149):map__378149);
var vec__378150 = cljs.core.get.call(null,map__378149__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__378150,(0),null);
var y = cljs.core.nth.call(null,vec__378150,(1),null);
var id = cljs.core.get.call(null,map__378149__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__378149__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return dynomics.space.core.connect_pair.call(null,state);
});
dynomics.ui.ui.curve_between_nodes = (function dynomics$ui$ui$curve_between_nodes(state,event){
return dynomics.space.core.add_curve_between_nodes.call(null,state);
});
dynomics.ui.ui.make_toggle_fn = (function dynomics$ui$ui$make_toggle_fn(path,keyz){
return (function dynomics$ui$ui$make_toggle_fn_$_toggle_things(state,event){
return cljs.core.update_in.call(null,state,path,(function (s){
return cljs.core.reduce.call(null,(function (r,k){
if(cljs.core.truth_(r.call(null,k))){
return cljs.core.disj.call(null,r,k);
} else {
return cljs.core.conj.call(null,r,k);
}
}),(function (){var or__35191__auto__ = s;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),keyz);
}));
});
});
dynomics.ui.ui.set_node_type = (function dynomics$ui$ui$set_node_type(state,p__378152){
var map__378155 = p__378152;
var map__378155__$1 = ((((!((map__378155 == null)))?((((map__378155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378155):map__378155);
var id = cljs.core.get.call(null,map__378155__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return dynomics.space.core.set_node_type.call(null,id).call(null,state);
});
dynomics.ui.ui.make_new_node = (function dynomics$ui$ui$make_new_node(p__378157,p__378158){
var map__378165 = p__378157;
var map__378165__$1 = ((((!((map__378165 == null)))?((((map__378165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378165):map__378165);
var state = map__378165__$1;
var making_node_QMARK_ = cljs.core.get.call(null,map__378165__$1,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115));
var map__378166 = p__378158;
var map__378166__$1 = ((((!((map__378166 == null)))?((((map__378166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378166):map__378166);
var event = map__378166__$1;
var p = cljs.core.get.call(null,map__378166__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__378166__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.println.call(null,"make node type",id);

if(cljs.core.truth_(making_node_QMARK_)){
return state;
} else {
var map__378169 = dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),true,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489),id));
var map__378169__$1 = ((((!((map__378169 == null)))?((((map__378169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378169):map__378169);
var s = map__378169__$1;
var n = cljs.core.get.call(null,map__378169__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.ui.ui.select_node_for_move.call(null,s,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),n], null)));
}
});
/**
 * Returns a function var to handle the given event
 */
dynomics.ui.ui.match_event = (function dynomics$ui$ui$match_event(state,event){
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || (event.cljs$core$ILookup$))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_shift_key_QMARK___378397 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___378397 === true)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"src/dynomics/ui/ui.cljs",16,1,255,257,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378566){if((e378566 instanceof Error)){
var e__39291__auto__ = e378566;
if((e__39291__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto__;
}
} else {
throw e378566;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378565){if((e378565 instanceof Error)){
var e__39291__auto__ = e378565;
if((e__39291__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto__;
}
} else {
throw e378565;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378455){if((e378455 instanceof Error)){
var e__39291__auto__ = e378455;
if((e__39291__auto__ === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_alt_key_QMARK___378398 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"alt-key?","alt-key?",234827606),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_alt_key_QMARK___378398 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_active;},new cljs.core.Symbol("dynomics.ui.ui","toggle-active","dynomics.ui.ui/toggle-active",167070151,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-active","toggle-active",368885345,null),"src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),"(de)activate"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_active)?dynomics.ui.ui.toggle_active.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378564){if((e378564 instanceof Error)){
var e__39291__auto____$1 = e378564;
if((e__39291__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$1;
}
} else {
throw e378564;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378554){if((e378554 instanceof Error)){
var e__39291__auto____$1 = e378554;
if((e__39291__auto____$1 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
try{var event_button__378395 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__378395 === (0))){
try{var event_id__378396 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_id__378396,new cljs.core.Keyword(null,"add-node-button","add-node-button",-722090690))){
return new cljs.core.Var(function(){return dynomics.ui.ui.add_node;},new cljs.core.Symbol("dynomics.ui.ui","add-node","dynomics.ui.ui/add-node",175703617,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"add-node","add-node",-428722461,null),"src/dynomics/ui/ui.cljs",11,1,537,541,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Add node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null)], null)),"Add node",(cljs.core.truth_(dynomics.ui.ui.add_node)?dynomics.ui.ui.add_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378563){if((e378563 instanceof Error)){
var e__39291__auto____$2 = e378563;
if((e__39291__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$2;
}
} else {
throw e378563;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378562){if((e378562 instanceof Error)){
var e__39291__auto____$2 = e378562;
if((e__39291__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$2;
}
} else {
throw e378562;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378555){if((e378555 instanceof Error)){
var e__39291__auto____$2 = e378555;
if((e__39291__auto____$2 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_button__378395 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__378395 === (2))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"src/dynomics/ui/ui.cljs",20,1,390,392,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378561){if((e378561 instanceof Error)){
var e__39291__auto____$3 = e378561;
if((e__39291__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$3;
}
} else {
throw e378561;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378556){if((e378556 instanceof Error)){
var e__39291__auto____$3 = e378556;
if((e__39291__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_button__378395 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__378395 === (2))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"src/dynomics/ui/ui.cljs",20,1,390,392,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378560){if((e378560 instanceof Error)){
var e__39291__auto____$4 = e378560;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$4;
}
} else {
throw e378560;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378557){if((e378557 instanceof Error)){
var e__39291__auto____$4 = e378557;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"space","space",348133475))){
try{var event_button__378395 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__378395 === (2))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"src/dynomics/ui/ui.cljs",20,1,390,392,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378559){if((e378559 instanceof Error)){
var e__39291__auto____$5 = e378559;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e378559;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378558){if((e378558 instanceof Error)){
var e__39291__auto____$5 = e378558;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e378558;

}
}} else {
throw e__39291__auto____$4;
}
} else {
throw e378557;

}
}} else {
throw e__39291__auto____$3;
}
} else {
throw e378556;

}
}} else {
throw e__39291__auto____$2;
}
} else {
throw e378555;

}
}} else {
throw e__39291__auto____$1;
}
} else {
throw e378554;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378456){if((e378456 instanceof Error)){
var e__39291__auto____$1 = e378456;
if((e__39291__auto____$1 === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964))){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.hide_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","hide-context-menu","dynomics.ui.ui/hide-context-menu",-829551965,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"hide-context-menu","hide-context-menu",-210420991,null),"src/dynomics/ui/ui.cljs",20,1,381,383,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Hide context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.hide_context_menu)?dynomics.ui.ui.hide_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378553){if((e378553 instanceof Error)){
var e__39291__auto____$2 = e378553;
if((e__39291__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$2;
}
} else {
throw e378553;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378457){if((e378457 instanceof Error)){
var e__39291__auto____$2 = e378457;
if((e__39291__auto____$2 === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_shift_key_QMARK___378397 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___378397 === false)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"src/dynomics/ui/ui.cljs",23,1,299,303,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378550){if((e378550 instanceof Error)){
var e__39291__auto____$3 = e378550;
if((e__39291__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__378393 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__378393 === (1))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_curve_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-curve-for-move","dynomics.ui.ui/select-curve-for-move",67176701,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-curve-for-move","select-curve-for-move",268851359,null),"src/dynomics/ui/ui.cljs",24,1,314,318,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-curve","phase-space-curve",-744456807),new cljs.core.Keyword(null,"description","description",-1428560544),"Select curve to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),"Select curve to move",(cljs.core.truth_(dynomics.ui.ui.select_curve_for_move)?dynomics.ui.ui.select_curve_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378552){if((e378552 instanceof Error)){
var e__39291__auto____$4 = e378552;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$4;
}
} else {
throw e378552;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378551){if((e378551 instanceof Error)){
var e__39291__auto____$4 = e378551;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$4;
}
} else {
throw e378551;

}
}} else {
throw e__39291__auto____$3;
}
} else {
throw e378550;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378549){if((e378549 instanceof Error)){
var e__39291__auto____$3 = e378549;
if((e__39291__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$3;
}
} else {
throw e378549;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378458){if((e378458 instanceof Error)){
var e__39291__auto____$3 = e378458;
if((e__39291__auto____$3 === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_shift_key_QMARK___378397 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___378397 === false)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"src/dynomics/ui/ui.cljs",16,1,357,361,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378547){if((e378547 instanceof Error)){
var e__39291__auto____$4 = e378547;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_curve;},new cljs.core.Symbol("dynomics.ui.ui","deselect-curve","dynomics.ui.ui/deselect-curve",-758858976,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-curve","deselect-curve",-29652158,null),"src/dynomics/ui/ui.cljs",17,1,369,373,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),"Deselect curve",(cljs.core.truth_(dynomics.ui.ui.deselect_curve)?dynomics.ui.ui.deselect_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378548){if((e378548 instanceof Error)){
var e__39291__auto____$5 = e378548;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e378548;

}
}} else {
throw e__39291__auto____$4;
}
} else {
throw e378547;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378546){if((e378546 instanceof Error)){
var e__39291__auto____$4 = e378546;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$4;
}
} else {
throw e378546;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378459){if((e378459 instanceof Error)){
var e__39291__auto____$4 = e378459;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__378393 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__378393 === (1))){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___378397 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___378397 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___378403 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___378403 === false)){
try{var state_moving_things_QMARK___378404 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___378404 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"src/dynomics/ui/ui.cljs",13,1,497,501,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pan-zoom?","pan-zoom?",488009224,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378545){if((e378545 instanceof Error)){
var e__39291__auto____$5 = e378545;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e378545;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378544){if((e378544 instanceof Error)){
var e__39291__auto____$5 = e378544;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e378544;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378542){if((e378542 instanceof Error)){
var e__39291__auto____$5 = e378542;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e378542;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378541){if((e378541 instanceof Error)){
var e__39291__auto____$5 = e378541;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e378541;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378513){if((e378513 instanceof Error)){
var e__39291__auto____$5 = e378513;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_shift_key_QMARK___378397 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___378397 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___378408 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___378408 === false)){
try{var state_moving_things_QMARK___378409 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___378409 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"src/dynomics/ui/ui.cljs",13,1,497,501,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pan-zoom?","pan-zoom?",488009224,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378540){if((e378540 instanceof Error)){
var e__39291__auto____$6 = e378540;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378540;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378539){if((e378539 instanceof Error)){
var e__39291__auto____$6 = e378539;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378539;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378537){if((e378537 instanceof Error)){
var e__39291__auto____$6 = e378537;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378537;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378536){if((e378536 instanceof Error)){
var e__39291__auto____$6 = e378536;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378536;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378514){if((e378514 instanceof Error)){
var e__39291__auto____$6 = e378514;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"space","space",348133475))){
try{var event_shift_key_QMARK___378397 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___378397 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___378413 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___378413 === false)){
try{var state_moving_things_QMARK___378414 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___378414 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"src/dynomics/ui/ui.cljs",13,1,497,501,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pan-zoom?","pan-zoom?",488009224,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378535){if((e378535 instanceof Error)){
var e__39291__auto____$7 = e378535;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e378535;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378534){if((e378534 instanceof Error)){
var e__39291__auto____$7 = e378534;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e378534;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378532){if((e378532 instanceof Error)){
var e__39291__auto____$7 = e378532;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e378532;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378531){if((e378531 instanceof Error)){
var e__39291__auto____$7 = e378531;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e378531;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378515){if((e378515 instanceof Error)){
var e__39291__auto____$7 = e378515;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___378418 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___378418 === false)){
try{var state_moving_things_QMARK___378419 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___378419 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"src/dynomics/ui/ui.cljs",15,1,439,443,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378530){if((e378530 instanceof Error)){
var e__39291__auto____$8 = e378530;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e378530;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378529){if((e378529 instanceof Error)){
var e__39291__auto____$8 = e378529;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e378529;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378527){if((e378527 instanceof Error)){
var e__39291__auto____$8 = e378527;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e378527;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378516){if((e378516 instanceof Error)){
var e__39291__auto____$8 = e378516;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___378423 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___378423 === false)){
try{var state_moving_things_QMARK___378424 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___378424 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"src/dynomics/ui/ui.cljs",15,1,439,443,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378526){if((e378526 instanceof Error)){
var e__39291__auto____$9 = e378526;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e378526;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378525){if((e378525 instanceof Error)){
var e__39291__auto____$9 = e378525;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e378525;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378523){if((e378523 instanceof Error)){
var e__39291__auto____$9 = e378523;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e378523;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378517){if((e378517 instanceof Error)){
var e__39291__auto____$9 = e378517;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___378428 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___378428 === false)){
try{var state_moving_things_QMARK___378429 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___378429 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"src/dynomics/ui/ui.cljs",15,1,439,443,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378522){if((e378522 instanceof Error)){
var e__39291__auto____$10 = e378522;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e378522;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378521){if((e378521 instanceof Error)){
var e__39291__auto____$10 = e378521;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e378521;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378519){if((e378519 instanceof Error)){
var e__39291__auto____$10 = e378519;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e378519;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378518){if((e378518 instanceof Error)){
var e__39291__auto____$10 = e378518;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e378518;

}
}} else {
throw e__39291__auto____$9;
}
} else {
throw e378517;

}
}} else {
throw e__39291__auto____$8;
}
} else {
throw e378516;

}
}} else {
throw e__39291__auto____$7;
}
} else {
throw e378515;

}
}} else {
throw e__39291__auto____$6;
}
} else {
throw e378514;

}
}} else {
throw e__39291__auto____$5;
}
} else {
throw e378513;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378499){if((e378499 instanceof Error)){
var e__39291__auto____$5 = e378499;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
try{var event_buttons__378393 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__378393 === (0))){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___378432 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___378432 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"src/dynomics/ui/ui.cljs",14,1,505,509,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378512){if((e378512 instanceof Error)){
var e__39291__auto____$6 = e378512;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378512;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378510){if((e378510 instanceof Error)){
var e__39291__auto____$6 = e378510;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378510;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378501){if((e378501 instanceof Error)){
var e__39291__auto____$6 = e378501;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___378435 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___378435 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"src/dynomics/ui/ui.cljs",14,1,505,509,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378509){if((e378509 instanceof Error)){
var e__39291__auto____$7 = e378509;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e378509;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378507){if((e378507 instanceof Error)){
var e__39291__auto____$7 = e378507;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e378507;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378502){if((e378502 instanceof Error)){
var e__39291__auto____$7 = e378502;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___378438 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___378438 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"src/dynomics/ui/ui.cljs",14,1,505,509,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378506){if((e378506 instanceof Error)){
var e__39291__auto____$8 = e378506;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e378506;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378504){if((e378504 instanceof Error)){
var e__39291__auto____$8 = e378504;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e378504;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378503){if((e378503 instanceof Error)){
var e__39291__auto____$8 = e378503;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e378503;

}
}} else {
throw e__39291__auto____$7;
}
} else {
throw e378502;

}
}} else {
throw e__39291__auto____$6;
}
} else {
throw e378501;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378500){if((e378500 instanceof Error)){
var e__39291__auto____$6 = e378500;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378500;

}
}} else {
throw e__39291__auto____$5;
}
} else {
throw e378499;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378460){if((e378460 instanceof Error)){
var e__39291__auto____$5 = e378460;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_buttons__378393 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__378393 === (1))){
try{var event_shift_key_QMARK___378397 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___378397 === false)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___378442 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___378442 === false)){
try{var state_moving_things_QMARK___378443 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___378443 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_pan;},new cljs.core.Symbol("dynomics.ui.ui","start-pan","dynomics.ui.ui/start-pan",-310203637,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-pan","start-pan",-778345239,null),"src/dynomics/ui/ui.cljs",12,1,515,519,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Start pan",(cljs.core.truth_(dynomics.ui.ui.start_pan)?dynomics.ui.ui.start_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378498){if((e378498 instanceof Error)){
var e__39291__auto____$6 = e378498;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378498;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378497){if((e378497 instanceof Error)){
var e__39291__auto____$6 = e378497;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378497;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378495){if((e378495 instanceof Error)){
var e__39291__auto____$6 = e378495;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378495;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378494){if((e378494 instanceof Error)){
var e__39291__auto____$6 = e378494;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378494;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378493){if((e378493 instanceof Error)){
var e__39291__auto____$6 = e378493;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378493;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378492){if((e378492 instanceof Error)){
var e__39291__auto____$6 = e378492;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e378492;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378461){if((e378461 instanceof Error)){
var e__39291__auto____$6 = e378461;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__378393 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__378393 === (1))){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___378446 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___378446 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.pan;},new cljs.core.Symbol("dynomics.ui.ui","pan","dynomics.ui.ui/pan",1533936577,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"pan","pan",1332818735,null),"src/dynomics/ui/ui.cljs",6,1,458,462,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"pp","pp",927842543,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Pan",(cljs.core.truth_(dynomics.ui.ui.pan)?dynomics.ui.ui.pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378491){if((e378491 instanceof Error)){
var e__39291__auto____$7 = e378491;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e378491;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378489){if((e378489 instanceof Error)){
var e__39291__auto____$7 = e378489;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e378489;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378488){if((e378488 instanceof Error)){
var e__39291__auto____$7 = e378488;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e378488;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378487){if((e378487 instanceof Error)){
var e__39291__auto____$7 = e378487;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e378487;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378462){if((e378462 instanceof Error)){
var e__39291__auto____$7 = e378462;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439))){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___378449 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___378449 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"src/dynomics/ui/ui.cljs",13,1,473,477,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378484){if((e378484 instanceof Error)){
var e__39291__auto____$8 = e378484;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___378449 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,state_pan_zoom_QMARK___378449,new cljs.core.Keyword(null,"starting","starting",-1852141466))){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"src/dynomics/ui/ui.cljs",13,1,473,477,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378485){if((e378485 instanceof Error)){
var e__39291__auto____$9 = e378485;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___378449 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___378449 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.zoom;},new cljs.core.Symbol("dynomics.ui.ui","zoom","dynomics.ui.ui/zoom",-926900565,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),"src/dynomics/ui/ui.cljs",7,1,484,488,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"dy","dy",-934888526,null),new cljs.core.Keyword(null,"deltaY","deltaY",-879493966),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Zoom",(cljs.core.truth_(dynomics.ui.ui.zoom)?dynomics.ui.ui.zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378486){if((e378486 instanceof Error)){
var e__39291__auto____$10 = e378486;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e378486;

}
}} else {
throw e__39291__auto____$9;
}
} else {
throw e378485;

}
}} else {
throw e__39291__auto____$8;
}
} else {
throw e378484;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378482){if((e378482 instanceof Error)){
var e__39291__auto____$8 = e378482;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e378482;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378481){if((e378481 instanceof Error)){
var e__39291__auto____$8 = e378481;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e378481;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378463){if((e378463 instanceof Error)){
var e__39291__auto____$8 = e378463;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_buttons__378393 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__378393 === (0))){
try{var event_shift_key_QMARK___378397 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___378397 === false)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___378452 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___378452 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.end_pan;},new cljs.core.Symbol("dynomics.ui.ui","end-pan","dynomics.ui.ui/end-pan",-5094220,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"end-pan","end-pan",-474409646,null),"src/dynomics/ui/ui.cljs",10,1,527,531,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"End pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null)], null)),"End pan",(cljs.core.truth_(dynomics.ui.ui.end_pan)?dynomics.ui.ui.end_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378480){if((e378480 instanceof Error)){
var e__39291__auto____$9 = e378480;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e378480;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378478){if((e378478 instanceof Error)){
var e__39291__auto____$9 = e378478;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e378478;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378477){if((e378477 instanceof Error)){
var e__39291__auto____$9 = e378477;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e378477;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378476){if((e378476 instanceof Error)){
var e__39291__auto____$9 = e378476;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e378476;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378475){if((e378475 instanceof Error)){
var e__39291__auto____$9 = e378475;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e378475;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378464){if((e378464 instanceof Error)){
var e__39291__auto____$9 = e378464;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__378393 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__378393 === (1))){
try{var event_shift_key_QMARK___378397 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___378397 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select_curve;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select-curve","dynomics.ui.ui/toggle-select-curve",1188080702,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select-curve","toggle-select-curve",1792572560,null),"src/dynomics/ui/ui.cljs",22,1,271,273,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select_curve)?dynomics.ui.ui.toggle_select_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378474){if((e378474 instanceof Error)){
var e__39291__auto____$10 = e378474;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e378474;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378473){if((e378473 instanceof Error)){
var e__39291__auto____$10 = e378473;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e378473;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378471){if((e378471 instanceof Error)){
var e__39291__auto____$10 = e378471;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.set_node_type;},new cljs.core.Symbol("dynomics.ui.ui","set-node-type","dynomics.ui.ui/set-node-type",776460294,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"set-node-type","set-node-type",306219192,null),"src/dynomics/ui/ui.cljs",16,1,576,580,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"description","description",-1428560544),"Set node type "], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.set_node_type)?dynomics.ui.ui.set_node_type.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378472){if((e378472 instanceof Error)){
var e__39291__auto____$11 = e378472;
if((e__39291__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$11;
}
} else {
throw e378472;

}
}} else {
throw e__39291__auto____$10;
}
} else {
throw e378471;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378465){if((e378465 instanceof Error)){
var e__39291__auto____$10 = e378465;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__378393 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__378393 === (1))){
try{var event_noun__378399 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__378399,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.make_new_node;},new cljs.core.Symbol("dynomics.ui.ui","make-new-node","dynomics.ui.ui/make-new-node",1777852426,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"make-new-node","make-new-node",2047793128,null),"src/dynomics/ui/ui.cljs",17,1,584,587,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"description","description",-1428560544),"Make new node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"making-node?","making-node?",-141094588,null),new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.make_new_node)?dynomics.ui.ui.make_new_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378470){if((e378470 instanceof Error)){
var e__39291__auto____$11 = e378470;
if((e__39291__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$11;
}
} else {
throw e378470;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378469){if((e378469 instanceof Error)){
var e__39291__auto____$11 = e378469;
if((e__39291__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$11;
}
} else {
throw e378469;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378466){if((e378466 instanceof Error)){
var e__39291__auto____$11 = e378466;
if((e__39291__auto____$11 === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"keydown","keydown",-629268186))){
return (new cljs.core.Delay(((function (event_verb__378394,e__39291__auto____$11,e__39291__auto____$10,e__39291__auto____$9,e__39291__auto____$8,e__39291__auto____$7,e__39291__auto____$6,e__39291__auto____$5,e__39291__auto____$4,e__39291__auto____$3,e__39291__auto____$2,e__39291__auto____$1,e__39291__auto__){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state,event);
});})(event_verb__378394,e__39291__auto____$11,e__39291__auto____$10,e__39291__auto____$9,e__39291__auto____$8,e__39291__auto____$7,e__39291__auto____$6,e__39291__auto____$5,e__39291__auto____$4,e__39291__auto____$3,e__39291__auto____$2,e__39291__auto____$1,e__39291__auto__))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378467){if((e378467 instanceof Error)){
var e__39291__auto____$12 = e378467;
if((e__39291__auto____$12 === cljs.core.match.backtrack)){
try{var event_verb__378394 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__378394,new cljs.core.Keyword(null,"keyup","keyup",-794526927))){
return (new cljs.core.Delay(((function (event_verb__378394,e__39291__auto____$12,e__39291__auto____$11,e__39291__auto____$10,e__39291__auto____$9,e__39291__auto____$8,e__39291__auto____$7,e__39291__auto____$6,e__39291__auto____$5,e__39291__auto____$4,e__39291__auto____$3,e__39291__auto____$2,e__39291__auto____$1,e__39291__auto__){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state,event);
});})(event_verb__378394,e__39291__auto____$12,e__39291__auto____$11,e__39291__auto____$10,e__39291__auto____$9,e__39291__auto____$8,e__39291__auto____$7,e__39291__auto____$6,e__39291__auto____$5,e__39291__auto____$4,e__39291__auto____$3,e__39291__auto____$2,e__39291__auto____$1,e__39291__auto__))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e378468){if((e378468 instanceof Error)){
var e__39291__auto____$13 = e378468;
if((e__39291__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$13;
}
} else {
throw e378468;

}
}} else {
throw e__39291__auto____$12;
}
} else {
throw e378467;

}
}} else {
throw e__39291__auto____$11;
}
} else {
throw e378466;

}
}} else {
throw e__39291__auto____$10;
}
} else {
throw e378465;

}
}} else {
throw e__39291__auto____$9;
}
} else {
throw e378464;

}
}} else {
throw e__39291__auto____$8;
}
} else {
throw e378463;

}
}} else {
throw e__39291__auto____$7;
}
} else {
throw e378462;

}
}} else {
throw e__39291__auto____$6;
}
} else {
throw e378461;

}
}} else {
throw e__39291__auto____$5;
}
} else {
throw e378460;

}
}} else {
throw e__39291__auto____$4;
}
} else {
throw e378459;

}
}} else {
throw e__39291__auto____$3;
}
} else {
throw e378458;

}
}} else {
throw e__39291__auto____$2;
}
} else {
throw e378457;

}
}} else {
throw e__39291__auto____$1;
}
} else {
throw e378456;

}
}} else {
throw e__39291__auto__;
}
} else {
throw e378455;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e378453){if((e378453 instanceof Error)){
var e__39291__auto__ = e378453;
if((e__39291__auto__ === cljs.core.match.backtrack)){
return null;
} else {
throw e__39291__auto__;
}
} else {
throw e378453;

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
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.Keyword(null,"pan?","pan?",-1177698471),new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.Keyword(null,"show","show",-576705889)],[cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"space","space",348133475).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766)], null)),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null)),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null)),new cljs.core.Keyword(null,"pan?","pan?",-1177698471).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"show","show",-576705889).cljs$core$IFn$_invoke$arity$1(state__$1)]);
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),(function (p__378578){
var map__378579 = p__378578;
var map__378579__$1 = ((((!((map__378579 == null)))?((((map__378579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378579):map__378579);
var map__378580 = cljs.core.get.call(null,map__378579__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__378580__$1 = ((((!((map__378580 == null)))?((((map__378580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378580):map__378580);
var state_updates = cljs.core.get.call(null,map__378580__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__378579,map__378579__$1,map__378580,map__378580__$1,state_updates){
return (function (p__378583){
var map__378584 = p__378583;
var map__378584__$1 = ((((!((map__378584 == null)))?((((map__378584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378584):map__378584);
var event = map__378584__$1;
var h = cljs.core.get.call(null,map__378584__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return cljs.core.async.put_BANG_.call(null,state_updates,((function (map__378584,map__378584__$1,event,h,map__378579,map__378579__$1,map__378580,map__378580__$1,state_updates){
return (function (s){
var f = (function (){var or__35191__auto__ = h;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return dynomics.ui.ui.match_event.call(null,s,event);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (f,map__378584,map__378584__$1,event,h,map__378579,map__378579__$1,map__378580,map__378580__$1,state_updates){
return (function (ss){
if(cljs.core.truth_(f)){
return cljs.core.deref.call(null,f).call(null,ss,event);
} else {
return ss;
}
});})(f,map__378584,map__378584__$1,event,h,map__378579,map__378579__$1,map__378580,map__378580__$1,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1((function (){var or__35191__auto__ = cljs.core.meta.call(null,f);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
}
})()),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_(f)?cljs.core.deref.call(null,f):null),new cljs.core.Keyword(null,"event","event",301435442),event)], null);
});})(map__378584,map__378584__$1,event,h,map__378579,map__378579__$1,map__378580,map__378580__$1,state_updates))
);
});})(map__378579,map__378579__$1,map__378580,map__378580__$1,state_updates))
], null)], null);
}),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"load","load",-1318641184)], null),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"toggle-quadrants","toggle-quadrants",-163483615),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),new cljs.core.Keyword(null,"print-state","print-state",-1235922711),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"toggle-node-types","toggle-node-types",-2069291601),new cljs.core.Keyword(null,"toggle-left-panel","toggle-left-panel",-240911951),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"switch-styles","switch-styles",-1139342249),new cljs.core.Keyword(null,"deactivate-all","deactivate-all",-1221569027)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load space",new cljs.core.Keyword(null,"description","description",-1428560544),"Restores the last saved space",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C3",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.get_state_BANG_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrants",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrants",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Curve types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected curves",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,id){
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Curve type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected curves to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_curve_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"print",new cljs.core.Keyword(null,"name","name",1843675177),"println state",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.print_state], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Remove selected",new cljs.core.Keyword(null,"description","description",-1428560544),"Removes selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2612",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.comp.call(null,dynomics.space.core.deselect_all,dynomics.space.core.remove_selected)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deselects all selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deselect_all], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"connect nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect selected nodes",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.curve_between_nodes], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Save space",new cljs.core.Keyword(null,"description","description",-1428560544),"Saves the space in your browser for later (sorry I will swap this icon for the familiar\n                                    floppy-disk icon when I find it",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.persist_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Node types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected nodes",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,p__378586){
var map__378587 = p__378586;
var map__378587__$1 = ((((!((map__378587 == null)))?((((map__378587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378587):map__378587);
var id = cljs.core.get.call(null,map__378587__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Node type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected nodes to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_node_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dynomics.space.core.node_types))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle types",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show types",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-types","node-types",1539943342)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Toggle left panel",new cljs.core.Keyword(null,"description","description",-1428560544),"Shows/hides the left panel",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_left_panel], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Context menu",new cljs.core.Keyword(null,"description","description",-1428560544),"Display context menu",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_context_menu,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option1","option1",-243284328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Option1"], null)], null),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-curve-type1","set-curve-type1",2042367308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(1));
}),null))], null),new cljs.core.Keyword(null,"set-curve-type2","set-curve-type2",1286708706),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 2",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(2));
}),null))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"switch styles",new cljs.core.Keyword(null,"description","description",-1428560544),"change style",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tilde","tilde",-306005780),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.switch_styles], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deactivate all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deactivates all active nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deactivate_all], null)])], null)], null));
});
dynomics.ui.ui.left_right_top_view = (function dynomics$ui$ui$left_right_top_view(p__378589){
var map__378601 = p__378589;
var map__378601__$1 = ((((!((map__378601 == null)))?((((map__378601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378601):map__378601);
var state = map__378601__$1;
var context_menu = cljs.core.get.call(null,map__378601__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__378602 = cljs.core.get.call(null,map__378601__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__378602__$1 = ((((!((map__378602 == null)))?((((map__378602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378602):map__378602);
var selected_nodes = cljs.core.get.call(null,map__378602__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__378603 = cljs.core.get.call(null,map__378601__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__378603__$1 = ((((!((map__378603 == null)))?((((map__378603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378603):map__378603);
var msgs = cljs.core.get.call(null,map__378603__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui378607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui378607 = (function (left_right_top_view,p__378589,map__378601,state,context_menu,map__378602,selected_nodes,map__378603,msgs,meta378608){
this.left_right_top_view = left_right_top_view;
this.p__378589 = p__378589;
this.map__378601 = map__378601;
this.state = state;
this.context_menu = context_menu;
this.map__378602 = map__378602;
this.selected_nodes = selected_nodes;
this.map__378603 = map__378603;
this.msgs = msgs;
this.meta378608 = meta378608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui378607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs){
return (function (_378609,meta378608__$1){
var self__ = this;
var _378609__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui378607(self__.left_right_top_view,self__.p__378589,self__.map__378601,self__.state,self__.context_menu,self__.map__378602,self__.selected_nodes,self__.map__378603,self__.msgs,meta378608__$1));
});})(map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui378607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs){
return (function (_378609){
var self__ = this;
var _378609__$1 = this;
return self__.meta378608;
});})(map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui378607.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui378607.prototype.om$core$IRender$render$arity$1 = ((function (map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": "ui"},om.dom.div.call(null,{"className": "main_ui"},om.dom.div.call(null,{"className": [cljs.core.str("left_component "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317).cljs$core$IFn$_invoke$arity$1(self__.state))?"hidden_function":null))].join('')},om.core.build.call(null,dynomics.ui.ui.make_function_selector_view,self__.state),om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)),null),om.dom.div.call(null,{"className": "right_component selectable", "key": "right_component"},cljs.core.map.call(null,((function (this__38609__auto____$1,map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs){
return (function (p__378610){
var vec__378611 = p__378610;
var id = cljs.core.nth.call(null,vec__378611,(0),null);
var component = cljs.core.nth.call(null,vec__378611,(1),null);
return om.core.build.call(null,new cljs.core.Keyword(null,"om-builder","om-builder",1876809590).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(component).call(null,self__.state));
});})(this__38609__auto____$1,map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs))
,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"om-builder","om-builder",1876809590)),cljs.core.val),cljs.core.dissoc.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220))))),(cljs.core.truth_(self__.context_menu)?om.core.build.call(null,dynomics.ui.ui.make_context_menu,cljs.core.assoc.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451)], null)),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs)):null)),om.core.build.call(null,dynomics.ui.ui.make_header_view,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)));
});})(map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui378607.getBasis = ((function (map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"left-right-top-view","left-right-top-view",150328751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null)], null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__378589","p__378589",-1831588053,null),new cljs.core.Symbol(null,"map__378601","map__378601",-66288677,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"map__378602","map__378602",-1020266565,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__378603","map__378603",-967255890,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"meta378608","meta378608",-1080896945,null)], null);
});})(map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui378607.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui378607.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui378607";

dynomics.ui.ui.t_dynomics$ui$ui378607.cljs$lang$ctorPrWriter = ((function (map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui378607");
});})(map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui378607 = ((function (map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs){
return (function dynomics$ui$ui$left_right_top_view_$___GT_t_dynomics$ui$ui378607(left_right_top_view__$1,p__378589__$1,map__378601__$2,state__$1,context_menu__$1,map__378602__$2,selected_nodes__$1,map__378603__$2,msgs__$1,meta378608){
return (new dynomics.ui.ui.t_dynomics$ui$ui378607(left_right_top_view__$1,p__378589__$1,map__378601__$2,state__$1,context_menu__$1,map__378602__$2,selected_nodes__$1,map__378603__$2,msgs__$1,meta378608));
});})(map__378601,map__378601__$1,state,context_menu,map__378602,map__378602__$1,selected_nodes,map__378603,map__378603__$1,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui378607(dynomics$ui$ui$left_right_top_view,p__378589,map__378601__$1,state,context_menu,map__378602__$1,selected_nodes,map__378603__$1,msgs,null));
});
dynomics.ui.ui.main_view = (function dynomics$ui$ui$main_view(){
return (function (p__378620,owner){
var map__378621 = p__378620;
var map__378621__$1 = ((((!((map__378621 == null)))?((((map__378621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378621):map__378621);
var state = map__378621__$1;
var style = cljs.core.get.call(null,map__378621__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui378623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui378623 = (function (main_view,p__378620,owner,map__378621,state,style,meta378624){
this.main_view = main_view;
this.p__378620 = p__378620;
this.owner = owner;
this.map__378621 = map__378621;
this.state = state;
this.style = style;
this.meta378624 = meta378624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui378623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__378621,map__378621__$1,state,style){
return (function (_378625,meta378624__$1){
var self__ = this;
var _378625__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui378623(self__.main_view,self__.p__378620,self__.owner,self__.map__378621,self__.state,self__.style,meta378624__$1));
});})(map__378621,map__378621__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui378623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__378621,map__378621__$1,state,style){
return (function (_378625){
var self__ = this;
var _378625__$1 = this;
return self__.meta378624;
});})(map__378621,map__378621__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui378623.prototype.om$core$IWillMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui378623.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__378621,map__378621__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null))));

dynomics.ui.ui.add_events_BANG_.call(null,self__.state);

return dynomics.ui.messaging.setup_updates.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),((function (___$1,map__378621,map__378621__$1,state,style){
return (function (g){
return om.core.transact_BANG_.call(null,self__.state,((function (___$1,map__378621,map__378621__$1,state,style){
return (function (s){
var map__378626 = g.call(null,s);
var map__378626__$1 = ((((!((map__378626 == null)))?((((map__378626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__378626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__378626):map__378626);
var f = cljs.core.get.call(null,map__378626__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var a = cljs.core.get.call(null,map__378626__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var ss = dynomics.ui.core.update_state.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"action","action",-811238024),(function (){var or__35191__auto__ = a;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.PersistentArrayMap.EMPTY,f);
return ss;
});})(___$1,map__378621,map__378621__$1,state,style))
);
});})(___$1,map__378621,map__378621__$1,state,style))
);
});})(map__378621,map__378621__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui378623.prototype.om$core$IWillReceiveProps$ = true;

dynomics.ui.ui.t_dynomics$ui$ui378623.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__378621,map__378621__$1,state,style){
return (function (this$,np){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not_EQ_.call(null,self__.style,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(np))){
localStorage.clear();

return goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null))));
} else {
return null;
}
});})(map__378621,map__378621__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui378623.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui378623.prototype.om$core$IRender$render$arity$1 = ((function (map__378621,map__378621__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,dynomics.ui.ui.left_right_top_view,self__.state);
});})(map__378621,map__378621__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui378623.getBasis = ((function (map__378621,map__378621__$1,state,style){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"p__378620","p__378620",1010951154,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__378621","map__378621",160682752,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"meta378624","meta378624",38274166,null)], null);
});})(map__378621,map__378621__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui378623.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui378623.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui378623";

dynomics.ui.ui.t_dynomics$ui$ui378623.cljs$lang$ctorPrWriter = ((function (map__378621,map__378621__$1,state,style){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui378623");
});})(map__378621,map__378621__$1,state,style))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui378623 = ((function (map__378621,map__378621__$1,state,style){
return (function dynomics$ui$ui$main_view_$___GT_t_dynomics$ui$ui378623(main_view__$1,p__378620__$1,owner__$1,map__378621__$2,state__$1,style__$1,meta378624){
return (new dynomics.ui.ui.t_dynomics$ui$ui378623(main_view__$1,p__378620__$1,owner__$1,map__378621__$2,state__$1,style__$1,meta378624));
});})(map__378621,map__378621__$1,state,style))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui378623(dynomics$ui$ui$main_view,p__378620,owner,map__378621__$1,state,style,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Start the application!
 */
dynomics.ui.ui.start = (function dynomics$ui$ui$start(var_args){
var args378628 = [];
var len__36260__auto___378631 = arguments.length;
var i__36261__auto___378632 = (0);
while(true){
if((i__36261__auto___378632 < len__36260__auto___378631)){
args378628.push((arguments[i__36261__auto___378632]));

var G__378633 = (i__36261__auto___378632 + (1));
i__36261__auto___378632 = G__378633;
continue;
} else {
}
break;
}

var G__378630 = args378628.length;
switch (G__378630) {
case 0:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args378628.length)].join('')));

}
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.ui.ui.start.call(null,dynomics.space.core.add_curve.call(null,dynomics.space.core.add_curve.call(null,dynomics.ui.ui.add_components.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.add_functions.call(null,dynomics.ui.ui.add_messaging.call(null,dynomics.ui.ui.add_browser_info.call(null,dynomics.ui.core.make_state.call(null)))))),cljs.core.first.call(null,dynomics.space.core.spiral.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0)], null),(1),(16),0.91,-0.92))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.75,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)));
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1 = (function (state){
return om.core.root.call(null,dynomics.ui.ui.main_view.call(null),state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("ui")], null));
});

dynomics.ui.ui.start.cljs$lang$maxFixedArity = 1;
