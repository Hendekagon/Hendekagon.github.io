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
dynomics.ui.ui.animation_frame = (function (){var or__35392__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
var or__35392__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__35392__auto____$1)){
return or__35392__auto____$1;
} else {
var or__35392__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__35392__auto____$2)){
return or__35392__auto____$2;
} else {
var or__35392__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__35392__auto____$3)){
return or__35392__auto____$3;
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
dynomics.ui.ui.keydown = (function dynomics$ui$ui$keydown(p__292729,e){
var map__292734 = p__292729;
var map__292734__$1 = ((((!((map__292734 == null)))?((((map__292734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292734):map__292734);
var state = map__292734__$1;
var map__292735 = cljs.core.get.call(null,map__292734__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__292735__$1 = ((((!((map__292735 == null)))?((((map__292735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292735):map__292735);
var msgs = cljs.core.get.call(null,map__292735__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
return cljs.core.async.put_BANG_.call(null,msgs,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
dynomics.ui.ui.keyup = (function dynomics$ui$ui$keyup(p__292738,e){
var map__292743 = p__292738;
var map__292743__$1 = ((((!((map__292743 == null)))?((((map__292743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292743):map__292743);
var state = map__292743__$1;
var map__292744 = cljs.core.get.call(null,map__292743__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__292744__$1 = ((((!((map__292744 == null)))?((((map__292744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292744):map__292744);
var msgs = cljs.core.get.call(null,map__292744__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
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
if(typeof dynomics.ui.ui.t_dynomics$ui$ui292754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui292754 = (function (make_function_selector_view,state,owner,functions,state_updates,meta292755){
this.make_function_selector_view = make_function_selector_view;
this.state = state;
this.owner = owner;
this.functions = functions;
this.state_updates = state_updates;
this.meta292755 = meta292755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui292754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (functions,state_updates){
return (function (_292756,meta292755__$1){
var self__ = this;
var _292756__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui292754(self__.make_function_selector_view,self__.state,self__.owner,self__.functions,self__.state_updates,meta292755__$1));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui292754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (functions,state_updates){
return (function (_292756){
var self__ = this;
var _292756__$1 = this;
return self__.meta292755;
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui292754.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui292754.prototype.om$core$IRender$render$arity$1 = ((function (functions,state_updates){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.div.call(null,{"className": "function_selector"},cljs.core.map.call(null,((function (this__44434__auto____$1,functions,state_updates){
return (function (p__292757){
var vec__292758 = p__292757;
var k = cljs.core.nth.call(null,vec__292758,(0),null);
var map__292759 = cljs.core.nth.call(null,vec__292758,(1),null);
var map__292759__$1 = ((((!((map__292759 == null)))?((((map__292759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292759):map__292759);
var naym = cljs.core.get.call(null,map__292759__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__292759__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return om.dom.div.call(null,{"className": "function_selector_item", "id": [cljs.core.str(cljs.core.name.call(null,k))].join(''), "onClick": ((function (vec__292758,k,map__292759,map__292759__$1,naym,description,this__44434__auto____$1,functions,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__292758,k,map__292759,map__292759__$1,naym,description,this__44434__auto____$1,functions,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null),k);
});})(vec__292758,k,map__292759,map__292759__$1,naym,description,this__44434__auto____$1,functions,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"description","description",-1428560544),naym], null)], null));

return null;
});})(vec__292758,k,map__292759,map__292759__$1,naym,description,this__44434__auto____$1,functions,state_updates))
},naym);
});})(this__44434__auto____$1,functions,state_updates))
,self__.functions));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui292754.getBasis = ((function (functions,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-function-selector-view","make-function-selector-view",516344898,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for selecting the current function"], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"functions","functions",1825482993,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta292755","meta292755",387793100,null)], null);
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui292754.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui292754.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui292754";

dynomics.ui.ui.t_dynomics$ui$ui292754.cljs$lang$ctorPrWriter = ((function (functions,state_updates){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui292754");
});})(functions,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui292754 = ((function (functions,state_updates){
return (function dynomics$ui$ui$make_function_selector_view_$___GT_t_dynomics$ui$ui292754(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta292755){
return (new dynomics.ui.ui.t_dynomics$ui$ui292754(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta292755));
});})(functions,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui292754(dynomics$ui$ui$make_function_selector_view,state,owner,functions,state_updates,null));
});
/**
 * Return a component to display a list
 *   of historical states which select a historical
 *   state on mouseover
 */
dynomics.ui.ui.make_history_selector_view = (function dynomics$ui$ui$make_history_selector_view(p__292761,owner){
var map__292772 = p__292761;
var map__292772__$1 = ((((!((map__292772 == null)))?((((map__292772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292772):map__292772);
var state = map__292772__$1;
var map__292773 = cljs.core.get.call(null,map__292772__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__292773__$1 = ((((!((map__292773 == null)))?((((map__292773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292773):map__292773);
var state_updates = cljs.core.get.call(null,map__292773__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var sh = cljs.core.get.call(null,map__292772__$1,new cljs.core.Keyword(null,"show-history","show-history",1972567130));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui292776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui292776 = (function (make_history_selector_view,p__292761,owner,map__292772,state,map__292773,state_updates,sh,meta292777){
this.make_history_selector_view = make_history_selector_view;
this.p__292761 = p__292761;
this.owner = owner;
this.map__292772 = map__292772;
this.state = state;
this.map__292773 = map__292773;
this.state_updates = state_updates;
this.sh = sh;
this.meta292777 = meta292777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui292776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (_292778,meta292777__$1){
var self__ = this;
var _292778__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui292776(self__.make_history_selector_view,self__.p__292761,self__.owner,self__.map__292772,self__.state,self__.map__292773,self__.state_updates,self__.sh,meta292777__$1));
});})(map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui292776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (_292778){
var self__ = this;
var _292778__$1 = this;
return self__.meta292777;
});})(map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui292776.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui292776.prototype.om$core$IRender$render$arity$1 = ((function (map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.div.call(null,{"className": "history_selector", "onClick": ((function (this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (e){
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.update_in.call(null,s__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),cljs.core.not);
});})(this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
], null);
});})(this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
);
});})(this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
},om.dom.div.call(null,{"className": "history_selector_text"},"History"),om.dom.div.call(null,{"className": (cljs.core.truth_(self__.sh)?"history_selector_visible":"history_selector_hidden")},cljs.core.map.call(null,((function (this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (p__292779){
var map__292780 = p__292779;
var map__292780__$1 = ((((!((map__292780 == null)))?((((map__292780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292780):map__292780);
var history_item = map__292780__$1;
var action = cljs.core.get.call(null,map__292780__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var version = cljs.core.get.call(null,map__292780__$1,new cljs.core.Keyword(null,"version","version",425292698));
var previous_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)) - (1))));
var previous_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)));
return om.dom.div.call(null,{"className": [cljs.core.str("history_selector_item "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_action)))?"historical":""))].join(''), "id": [cljs.core.str("history_version_"),cljs.core.str(previous_version)].join(''), "onMouseOver": ((function (previous_action,previous_version,map__292780,map__292780__$1,history_item,action,version,this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (previous_action,previous_version,map__292780,map__292780__$1,history_item,action,version,this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (previous_action,previous_version,map__292780,map__292780__$1,history_item,action,version,this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.merge.call(null,om.core.value.call(null,history_item),cljs.core.select_keys.call(null,s__$1,cljs.core.conj.call(null,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(s__$1),new cljs.core.Keyword(null,"history","history",-247395220))));
});})(previous_action,previous_version,map__292780,map__292780__$1,history_item,action,version,this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desccription","desccription",-1060114044),[cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action))].join(''),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"id","id",-1388402092),version], null)], null);
});})(previous_action,previous_version,map__292780,map__292780__$1,history_item,action,version,this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
);

return null;
});})(previous_action,previous_version,map__292780,map__292780__$1,history_item,action,version,this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action));
});})(this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
,cljs.core.filter.call(null,((function (this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (hi){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi)) - (1)))));
});})(this__44434__auto____$1,map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
,cljs.core.reverse.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.state),self__.state))))));
});})(map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui292776.getBasis = ((function (map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-history-selector-view","make-history-selector-view",1677763159,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Keyword(null,"show-history","show-history",1972567130),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a component to display a list\n  of historical states which select a historical\n  state on mouseover"], null)),new cljs.core.Symbol(null,"p__292761","p__292761",-361659749,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__292772","map__292772",-1332018606,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__292773","map__292773",-1423350096,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Symbol(null,"meta292777","meta292777",531180925,null)], null);
});})(map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui292776.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui292776.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui292776";

dynomics.ui.ui.t_dynomics$ui$ui292776.cljs$lang$ctorPrWriter = ((function (map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui292776");
});})(map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui292776 = ((function (map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh){
return (function dynomics$ui$ui$make_history_selector_view_$___GT_t_dynomics$ui$ui292776(make_history_selector_view__$1,p__292761__$1,owner__$1,map__292772__$2,state__$1,map__292773__$2,state_updates__$1,sh__$1,meta292777){
return (new dynomics.ui.ui.t_dynomics$ui$ui292776(make_history_selector_view__$1,p__292761__$1,owner__$1,map__292772__$2,state__$1,map__292773__$2,state_updates__$1,sh__$1,meta292777));
});})(map__292772,map__292772__$1,state,map__292773,map__292773__$1,state_updates,sh))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui292776(dynomics$ui$ui$make_history_selector_view,p__292761,owner,map__292772__$1,state,map__292773__$1,state_updates,sh,null));
});
dynomics.ui.ui.make_context_menu = (function dynomics$ui$ui$make_context_menu(p__292782){
var map__292795 = p__292782;
var map__292795__$1 = ((((!((map__292795 == null)))?((((map__292795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292795):map__292795);
var state = map__292795__$1;
var map__292796 = cljs.core.get.call(null,map__292795__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__292796__$1 = ((((!((map__292796 == null)))?((((map__292796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292796):map__292796);
var vec__292797 = cljs.core.get.call(null,map__292796__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__292797,(0),null);
var y = cljs.core.nth.call(null,vec__292797,(1),null);
var o = cljs.core.get.call(null,map__292796__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var options = cljs.core.get.call(null,map__292796__$1,new cljs.core.Keyword(null,"options","options",99638489));
var msgs = cljs.core.get.call(null,map__292795__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui292800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui292800 = (function (options,x,y,map__292795,o,vec__292797,p__292782,map__292796,state,msgs,make_context_menu,meta292801){
this.options = options;
this.x = x;
this.y = y;
this.map__292795 = map__292795;
this.o = o;
this.vec__292797 = vec__292797;
this.p__292782 = p__292782;
this.map__292796 = map__292796;
this.state = state;
this.msgs = msgs;
this.make_context_menu = make_context_menu;
this.meta292801 = meta292801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui292800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs){
return (function (_292802,meta292801__$1){
var self__ = this;
var _292802__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui292800(self__.options,self__.x,self__.y,self__.map__292795,self__.o,self__.vec__292797,self__.p__292782,self__.map__292796,self__.state,self__.msgs,self__.make_context_menu,meta292801__$1));
});})(map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui292800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs){
return (function (_292802){
var self__ = this;
var _292802__$1 = this;
return self__.meta292801;
});})(map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui292800.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui292800.prototype.om$core$IRender$render$arity$1 = ((function (map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return React.createElement("div",{"style": {"transform": [cljs.core.str("translate("),cljs.core.str(self__.x),cljs.core.str("px,"),cljs.core.str(self__.y),cljs.core.str("px)")].join('')}, "id": "context-menu", "className": "context_menu", "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseLeave": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY)},React.createElement("div",{"className": "context_menu_title"},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,self__.o))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"space","space",348133475),null,new cljs.core.Keyword(null,"node","node",581201198),null], null), null).call(null,self__.o))?om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component,self__.state):null)),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (this__44434__auto____$1,map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs){
return (function (p__292803){
var vec__292804 = p__292803;
var k = cljs.core.nth.call(null,vec__292804,(0),null);
var map__292805 = cljs.core.nth.call(null,vec__292804,(1),null);
var map__292805__$1 = ((((!((map__292805 == null)))?((((map__292805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292805):map__292805);
var naym = cljs.core.get.call(null,map__292805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kb = cljs.core.get.call(null,map__292805__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var f = cljs.core.get.call(null,map__292805__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"context_menu_option",new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),k], null),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),f], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(naym),cljs.core.str("  ")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"keyboard_shortcut"], null),[cljs.core.str(kb)].join('')], null)], null);
});})(this__44434__auto____$1,map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs))
,self__.options)));
});})(map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui292800.getBasis = ((function (map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"map__292795","map__292795",-684005592,null),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"vec__292797","vec__292797",1083093777,null),new cljs.core.Symbol(null,"p__292782","p__292782",-1002278796,null),new cljs.core.Symbol(null,"map__292796","map__292796",1954089140,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-context-menu","make-context-menu",-526000036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"options","options",99638489)], true, false),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"meta292801","meta292801",-426244318,null)], null);
});})(map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui292800.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui292800.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui292800";

dynomics.ui.ui.t_dynomics$ui$ui292800.cljs$lang$ctorPrWriter = ((function (map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui292800");
});})(map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui292800 = ((function (map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs){
return (function dynomics$ui$ui$make_context_menu_$___GT_t_dynomics$ui$ui292800(options__$1,x__$1,y__$1,map__292795__$2,o__$1,vec__292797__$1,p__292782__$1,map__292796__$2,state__$1,msgs__$1,make_context_menu__$1,meta292801){
return (new dynomics.ui.ui.t_dynomics$ui$ui292800(options__$1,x__$1,y__$1,map__292795__$2,o__$1,vec__292797__$1,p__292782__$1,map__292796__$2,state__$1,msgs__$1,make_context_menu__$1,meta292801));
});})(map__292795,map__292795__$1,state,map__292796,map__292796__$1,vec__292797,x,y,o,options,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui292800(options,x,y,map__292795__$1,o,vec__292797,p__292782,map__292796__$1,state,msgs,dynomics$ui$ui$make_context_menu,null));
});
/**
 * Returns a component for the top header
 */
dynomics.ui.ui.make_header_view = (function dynomics$ui$ui$make_header_view(p__292807){
var map__292813 = p__292807;
var map__292813__$1 = ((((!((map__292813 == null)))?((((map__292813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292813):map__292813);
var state = map__292813__$1;
var logo_text = cljs.core.get.call(null,map__292813__$1,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
var app_name = cljs.core.get.call(null,map__292813__$1,new cljs.core.Keyword(null,"app-name","app-name",-268811251));
var app_version = cljs.core.get.call(null,map__292813__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
var state_version = cljs.core.get.call(null,map__292813__$1,new cljs.core.Keyword(null,"state-version","state-version",1282692697));
var action = cljs.core.get.call(null,map__292813__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui292815 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui292815 = (function (make_header_view,p__292807,map__292813,state,logo_text,app_name,app_version,state_version,action,meta292816){
this.make_header_view = make_header_view;
this.p__292807 = p__292807;
this.map__292813 = map__292813;
this.state = state;
this.logo_text = logo_text;
this.app_name = app_name;
this.app_version = app_version;
this.state_version = state_version;
this.action = action;
this.meta292816 = meta292816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui292815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__292813,map__292813__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_292817,meta292816__$1){
var self__ = this;
var _292817__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui292815(self__.make_header_view,self__.p__292807,self__.map__292813,self__.state,self__.logo_text,self__.app_name,self__.app_version,self__.state_version,self__.action,meta292816__$1));
});})(map__292813,map__292813__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui292815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__292813,map__292813__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_292817){
var self__ = this;
var _292817__$1 = this;
return self__.meta292816;
});})(map__292813,map__292813__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui292815.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui292815.prototype.om$core$IRender$render$arity$1 = ((function (map__292813,map__292813__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.div.call(null,{"className": "top_component"},null,null);
});})(map__292813,map__292813__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui292815.getBasis = ((function (map__292813,map__292813__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-header-view","make-header-view",2348093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the top header"], null)),new cljs.core.Symbol(null,"p__292807","p__292807",-1456677975,null),new cljs.core.Symbol(null,"map__292813","map__292813",2128301817,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Symbol(null,"meta292816","meta292816",-1276016002,null)], null);
});})(map__292813,map__292813__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui292815.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui292815.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui292815";

dynomics.ui.ui.t_dynomics$ui$ui292815.cljs$lang$ctorPrWriter = ((function (map__292813,map__292813__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui292815");
});})(map__292813,map__292813__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui292815 = ((function (map__292813,map__292813__$1,state,logo_text,app_name,app_version,state_version,action){
return (function dynomics$ui$ui$make_header_view_$___GT_t_dynomics$ui$ui292815(make_header_view__$1,p__292807__$1,map__292813__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta292816){
return (new dynomics.ui.ui.t_dynomics$ui$ui292815(make_header_view__$1,p__292807__$1,map__292813__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta292816));
});})(map__292813,map__292813__$1,state,logo_text,app_name,app_version,state_version,action))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui292815(dynomics$ui$ui$make_header_view,p__292807,map__292813__$1,state,logo_text,app_name,app_version,state_version,action,null));
});
dynomics.ui.ui.evaluate = (function dynomics$ui$ui$evaluate(s,sexp,f){
return null;
});
dynomics.ui.ui.make_footer_view = (function dynomics$ui$ui$make_footer_view(p__292818){
var map__292828 = p__292818;
var map__292828__$1 = ((((!((map__292828 == null)))?((((map__292828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292828):map__292828);
var state = map__292828__$1;
var map__292829 = cljs.core.get.call(null,map__292828__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__292829__$1 = ((((!((map__292829 == null)))?((((map__292829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292829):map__292829);
var state_updates = cljs.core.get.call(null,map__292829__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var map__292830 = cljs.core.get.call(null,map__292828__$1,new cljs.core.Keyword(null,"eval","eval",-1103567905));
var map__292830__$1 = ((((!((map__292830 == null)))?((((map__292830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292830):map__292830);
var last_result = cljs.core.get.call(null,map__292830__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var last_exps = cljs.core.get.call(null,map__292830__$1,new cljs.core.Keyword(null,"exps","exps",-877274249));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui292834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui292834 = (function (make_footer_view,p__292818,map__292828,state,map__292829,state_updates,map__292830,last_result,last_exps,meta292835){
this.make_footer_view = make_footer_view;
this.p__292818 = p__292818;
this.map__292828 = map__292828;
this.state = state;
this.map__292829 = map__292829;
this.state_updates = state_updates;
this.map__292830 = map__292830;
this.last_result = last_result;
this.last_exps = last_exps;
this.meta292835 = meta292835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui292834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps){
return (function (_292836,meta292835__$1){
var self__ = this;
var _292836__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui292834(self__.make_footer_view,self__.p__292818,self__.map__292828,self__.state,self__.map__292829,self__.state_updates,self__.map__292830,self__.last_result,self__.last_exps,meta292835__$1));
});})(map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui292834.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps){
return (function (_292836){
var self__ = this;
var _292836__$1 = this;
return self__.meta292835;
});})(map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui292834.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui292834.prototype.om$core$IRender$render$arity$1 = ((function (map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return om.dom.div.call(null,{"className": "bottom_component"},om.dom.input.call(null,{"className": "eval_input", "type": "text", "size": (64), "onKeyDown": ((function (this__44434__auto____$1,map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps){
return (function (e){
e.stopPropagation();


return null;
});})(this__44434__auto____$1,map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps))
}),om.dom.div.call(null,{"className": "eval_result"},[cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.last_result))].join('')));
});})(map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui292834.getBasis = ((function (map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-footer-view","make-footer-view",-746293906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Keyword(null,"exps","exps",-877274249)], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__292818","p__292818",-1782440720,null),new cljs.core.Symbol(null,"map__292828","map__292828",696254492,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__292829","map__292829",-443517287,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"map__292830","map__292830",731616812,null),new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Symbol(null,"meta292835","meta292835",-2047908339,null)], null);
});})(map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui292834.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui292834.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui292834";

dynomics.ui.ui.t_dynomics$ui$ui292834.cljs$lang$ctorPrWriter = ((function (map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui292834");
});})(map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui292834 = ((function (map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps){
return (function dynomics$ui$ui$make_footer_view_$___GT_t_dynomics$ui$ui292834(make_footer_view__$1,p__292818__$1,map__292828__$2,state__$1,map__292829__$2,state_updates__$1,map__292830__$2,last_result__$1,last_exps__$1,meta292835){
return (new dynomics.ui.ui.t_dynomics$ui$ui292834(make_footer_view__$1,p__292818__$1,map__292828__$2,state__$1,map__292829__$2,state_updates__$1,map__292830__$2,last_result__$1,last_exps__$1,meta292835));
});})(map__292828,map__292828__$1,state,map__292829,map__292829__$1,state_updates,map__292830,map__292830__$1,last_result,last_exps))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui292834(dynomics$ui$ui$make_footer_view,p__292818,map__292828__$1,state,map__292829__$1,state_updates,map__292830__$1,last_result,last_exps,null));
});
dynomics.ui.ui.add_components = (function dynomics$ui$ui$add_components(state){
var seq__292841_292845 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null))))));
var chunk__292842_292846 = null;
var count__292843_292847 = (0);
var i__292844_292848 = (0);
while(true){
if((i__292844_292848 < count__292843_292847)){
var component_292849 = cljs.core._nth.call(null,chunk__292842_292846,i__292844_292848);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_292849);

var G__292850 = seq__292841_292845;
var G__292851 = chunk__292842_292846;
var G__292852 = count__292843_292847;
var G__292853 = (i__292844_292848 + (1));
seq__292841_292845 = G__292850;
chunk__292842_292846 = G__292851;
count__292843_292847 = G__292852;
i__292844_292848 = G__292853;
continue;
} else {
var temp__4657__auto___292854 = cljs.core.seq.call(null,seq__292841_292845);
if(temp__4657__auto___292854){
var seq__292841_292855__$1 = temp__4657__auto___292854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__292841_292855__$1)){
var c__36203__auto___292856 = cljs.core.chunk_first.call(null,seq__292841_292855__$1);
var G__292857 = cljs.core.chunk_rest.call(null,seq__292841_292855__$1);
var G__292858 = c__36203__auto___292856;
var G__292859 = cljs.core.count.call(null,c__36203__auto___292856);
var G__292860 = (0);
seq__292841_292845 = G__292857;
chunk__292842_292846 = G__292858;
count__292843_292847 = G__292859;
i__292844_292848 = G__292860;
continue;
} else {
var component_292861 = cljs.core.first.call(null,seq__292841_292855__$1);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_292861);

var G__292862 = cljs.core.next.call(null,seq__292841_292855__$1);
var G__292863 = null;
var G__292864 = (0);
var G__292865 = (0);
seq__292841_292845 = G__292862;
chunk__292842_292846 = G__292863;
count__292843_292847 = G__292864;
i__292844_292848 = G__292865;
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
var args292866 = [];
var len__36461__auto___292873 = arguments.length;
var i__36462__auto___292874 = (0);
while(true){
if((i__36462__auto___292874 < len__36461__auto___292873)){
args292866.push((arguments[i__36462__auto___292874]));

var G__292875 = (i__36462__auto___292874 + (1));
i__36462__auto___292874 = G__292875;
continue;
} else {
}
break;
}

var G__292868 = args292866.length;
switch (G__292868) {
case 1:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args292866.length)].join('')));

}
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.ui.add_keybindings.call(null,state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)));
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2 = (function (state,tools){
return cljs.core.reduce.call(null,(function (r,p__292869){
var vec__292870 = p__292869;
var k = cljs.core.nth.call(null,vec__292870,(0),null);
var map__292871 = cljs.core.nth.call(null,vec__292870,(1),null);
var map__292871__$1 = ((((!((map__292871 == null)))?((((map__292871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292871):map__292871);
var f = cljs.core.get.call(null,map__292871__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var kb = cljs.core.get.call(null,map__292871__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var naym = cljs.core.get.call(null,map__292871__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tools__$1 = cljs.core.get.call(null,map__292871__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
if(cljs.core.truth_(f)){
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),((function (vec__292870,k,map__292871,map__292871__$1,f,kb,naym,tools__$1){
return (function (s){
cljs.core.println.call(null,naym);

return ((cljs.core.delay_QMARK_.call(null,f))?cljs.core.deref.call(null,f):f).call(null,s);
});})(vec__292870,k,map__292871,map__292871__$1,f,kb,naym,tools__$1))
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
dynomics.ui.ui.where_they_were = (function dynomics$ui$ui$where_they_were(p__292877){
var map__292882 = p__292877;
var map__292882__$1 = ((((!((map__292882 == null)))?((((map__292882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292882):map__292882);
var state = map__292882__$1;
var map__292883 = cljs.core.get.call(null,map__292882__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__292883__$1 = ((((!((map__292883 == null)))?((((map__292883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292883):map__292883);
var space = map__292883__$1;
var selected_nodes = cljs.core.get.call(null,map__292883__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,((function (map__292882,map__292882__$1,state,map__292883,map__292883__$1,space,selected_nodes){
return (function (s,path){
return cljs.core.assoc_in.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))));
});})(map__292882,map__292882__$1,state,map__292883,map__292883__$1,space,selected_nodes))
,state,cljs.core.remove.call(null,cljs.core.nil_QMARK_,selected_nodes));
});
dynomics.ui.ui.relative_to_cursor = (function dynomics$ui$ui$relative_to_cursor(var_args){
var args292886 = [];
var len__36461__auto___292889 = arguments.length;
var i__36462__auto___292890 = (0);
while(true){
if((i__36462__auto___292890 < len__36461__auto___292889)){
args292886.push((arguments[i__36462__auto___292890]));

var G__292891 = (i__36462__auto___292890 + (1));
i__36462__auto___292890 = G__292891;
continue;
} else {
}
break;
}

var G__292888 = args292886.length;
switch (G__292888) {
case 3:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args292886.length)].join('')));

}
});

dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (p,pth,state){
return dynomics.ui.ui.relative_to_cursor.call(null,p,pth,cljs.core.get_in.call(null,state,cljs.core.conj.call(null,pth,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089).cljs$core$IFn$_invoke$arity$1(state));
});

dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4 = (function (p,pth,pws,pasom){
return cljs.core.map.call(null,cljs.core._PLUS_,p,cljs.core.map.call(null,cljs.core._,pws,pasom));
});

dynomics.ui.ui.relative_to_cursor.cljs$lang$maxFixedArity = 4;
dynomics.ui.ui.toggle_select = (function dynomics$ui$ui$toggle_select(p__292893){
var map__292898 = p__292893;
var map__292898__$1 = ((((!((map__292898 == null)))?((((map__292898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292898):map__292898);
var state = map__292898__$1;
var map__292899 = cljs.core.get.call(null,map__292898__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__292899__$1 = ((((!((map__292899 == null)))?((((map__292899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292899):map__292899);
var p = cljs.core.get.call(null,map__292899__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__292899__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__292899__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"toggle select",path);

return dynomics.space.core.add_curve_between_nodes.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (map__292898,map__292898__$1,state,map__292899,map__292899__$1,p,id,path){
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
});})(map__292898,map__292898__$1,state,map__292899,map__292899__$1,p,id,path))
));
});
dynomics.ui.ui.toggle_select_curve = (function dynomics$ui$ui$toggle_select_curve(p__292902){
var map__292907 = p__292902;
var map__292907__$1 = ((((!((map__292907 == null)))?((((map__292907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292907):map__292907);
var state = map__292907__$1;
var map__292908 = cljs.core.get.call(null,map__292907__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__292908__$1 = ((((!((map__292908 == null)))?((((map__292908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292908):map__292908);
var p = cljs.core.get.call(null,map__292908__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__292908__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__292908__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"(de)select curve",path);

return dynomics.space.core.toggle_select_curve.call(null,state,path);
});
dynomics.ui.ui.toggle_active = (function dynomics$ui$ui$toggle_active(p__292911){
var map__292917 = p__292911;
var map__292917__$1 = ((((!((map__292917 == null)))?((((map__292917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292917):map__292917);
var state = map__292917__$1;
var map__292918 = cljs.core.get.call(null,map__292917__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__292918__$1 = ((((!((map__292918 == null)))?((((map__292918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292918):map__292918);
var vec__292919 = cljs.core.get.call(null,map__292918__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__292919,(0),null);
var y = cljs.core.nth.call(null,vec__292919,(1),null);
var id = cljs.core.get.call(null,map__292918__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__292918__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"toggle active",path);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891)], null),((function (map__292917,map__292917__$1,state,map__292918,map__292918__$1,vec__292919,x,y,id,path){
return (function (an){
var n = (function (){var or__35392__auto__ = an;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.truth_(n.call(null,path))){
return cljs.core.disj.call(null,n,path);
} else {
return cljs.core.conj.call(null,n,path);
}
});})(map__292917,map__292917__$1,state,map__292918,map__292918__$1,vec__292919,x,y,id,path))
);
});
/**
 * Select node to move
 */
dynomics.ui.ui.select_node_for_move = (function dynomics$ui$ui$select_node_for_move(p__292922){
var map__292927 = p__292922;
var map__292927__$1 = ((((!((map__292927 == null)))?((((map__292927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292927):map__292927);
var state = map__292927__$1;
var map__292928 = cljs.core.get.call(null,map__292927__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__292928__$1 = ((((!((map__292928 == null)))?((((map__292928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292928):map__292928);
var p = cljs.core.get.call(null,map__292928__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__292928__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select node to move ",path);

return dynomics.space.core.add_curve_between_nodes.call(null,cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (map__292927,map__292927__$1,state,map__292928,map__292928__$1,p,path){
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
});})(map__292927,map__292927__$1,state,map__292928,map__292928__$1,p,path))
),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-when-selected","position-when-selected",1681219792)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false));
});
/**
 * Select curve to move
 */
dynomics.ui.ui.select_curve_for_move = (function dynomics$ui$ui$select_curve_for_move(p__292931){
var map__292936 = p__292931;
var map__292936__$1 = ((((!((map__292936 == null)))?((((map__292936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292936):map__292936);
var state = map__292936__$1;
var map__292937 = cljs.core.get.call(null,map__292936__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__292937__$1 = ((((!((map__292937 == null)))?((((map__292937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292937):map__292937);
var p = cljs.core.get.call(null,map__292937__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__292937__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select curve for move ",path,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null)));

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,dynomics.space.core.toggle_select_curve.call(null,state,path)),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select object
 */
dynomics.ui.ui.select_object = (function dynomics$ui$ui$select_object(p__292940){
var map__292945 = p__292940;
var map__292945__$1 = ((((!((map__292945 == null)))?((((map__292945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292945):map__292945);
var state = map__292945__$1;
var map__292946 = cljs.core.get.call(null,map__292945__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__292946__$1 = ((((!((map__292946 == null)))?((((map__292946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292946):map__292946);
var path = cljs.core.get.call(null,map__292946__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tipe = cljs.core.get.call(null,map__292946__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"select object",path,tipe);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,tipe)], null),cljs.core.conj,path);
});
/**
 * Deselect object
 */
dynomics.ui.ui.deselect_object = (function dynomics$ui$ui$deselect_object(p__292949){
var map__292958 = p__292949;
var map__292958__$1 = ((((!((map__292958 == null)))?((((map__292958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292958):map__292958);
var state = map__292958__$1;
var map__292959 = cljs.core.get.call(null,map__292958__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__292959__$1 = ((((!((map__292959 == null)))?((((map__292959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292959):map__292959);
var o = cljs.core.get.call(null,map__292959__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var map__292960 = cljs.core.get.call(null,map__292959__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__292960__$1 = ((((!((map__292960 == null)))?((((map__292960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292960):map__292960);
var p1 = cljs.core.get.call(null,map__292960__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t1 = cljs.core.get.call(null,map__292960__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var map__292961 = cljs.core.get.call(null,map__292958__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__292961__$1 = ((((!((map__292961 == null)))?((((map__292961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292961):map__292961);
var p2 = cljs.core.get.call(null,map__292961__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t2 = cljs.core.get.call(null,map__292961__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"deselect object",p1,t1,p2,t2);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,(function (){var or__35392__auto__ = t1;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return t2;
}
})())], null),cljs.core.disj,(function (){var or__35392__auto__ = p1;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return p2;
}
})());
});
/**
 * Deselect node
 */
dynomics.ui.ui.deselect_node = (function dynomics$ui$ui$deselect_node(p__292966){
var map__292971 = p__292966;
var map__292971__$1 = ((((!((map__292971 == null)))?((((map__292971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292971):map__292971);
var state = map__292971__$1;
var map__292972 = cljs.core.get.call(null,map__292971__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__292972__$1 = ((((!((map__292972 == null)))?((((map__292972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292972):map__292972);
var path = cljs.core.get.call(null,map__292972__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.disj,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),false);
});
/**
 * Deselect curve
 */
dynomics.ui.ui.deselect_curve = (function dynomics$ui$ui$deselect_curve(p__292975){
var map__292980 = p__292975;
var map__292980__$1 = ((((!((map__292980 == null)))?((((map__292980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292980):map__292980);
var state = map__292980__$1;
var map__292981 = cljs.core.get.call(null,map__292980__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__292981__$1 = ((((!((map__292981 == null)))?((((map__292981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292981):map__292981);
var p = cljs.core.get.call(null,map__292981__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__292981__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,dynomics.space.core.deselect_curve.call(null,state,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
dynomics.ui.ui.hide_context_menu = (function dynomics$ui$ui$hide_context_menu(state){
return cljs.core.assoc.call(null,dynomics.ui.ui.deselect_object.call(null,state),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),null,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
dynomics.ui.ui.show_context_menu = (function dynomics$ui$ui$show_context_menu(p__292984){
var map__292992 = p__292984;
var map__292992__$1 = ((((!((map__292992 == null)))?((((map__292992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292992):map__292992);
var state = map__292992__$1;
var map__292993 = cljs.core.get.call(null,map__292992__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__292993__$1 = ((((!((map__292993 == null)))?((((map__292993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292993):map__292993);
var event = map__292993__$1;
var ep = cljs.core.get.call(null,map__292993__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var mp = cljs.core.get.call(null,map__292993__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var p = cljs.core.get.call(null,map__292993__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var o = cljs.core.get.call(null,map__292993__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var context_menu = cljs.core.get.call(null,map__292993__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
cljs.core.println.call(null,"show cm",o);

return cljs.core.assoc.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.select_object.call(null,state),cljs.core.map.call(null,((function (map__292992,map__292992__$1,state,map__292993,map__292993__$1,event,ep,mp,p,o,context_menu){
return (function (p__292996){
var map__292997 = p__292996;
var map__292997__$1 = ((((!((map__292997 == null)))?((((map__292997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__292997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__292997):map__292997);
var option = map__292997__$1;
var f = cljs.core.get.call(null,map__292997__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.truth_(f)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.assoc,option,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.deref.call(null,f)], true, false);
} else {
return option;
}
});})(map__292992,map__292992__$1,state,map__292993,map__292993__$1,event,ep,mp,p,o,context_menu))
,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null)))),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__35392__auto__ = ep;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return mp;
}
})(),new cljs.core.Keyword(null,"space-position","space-position",1969138679),p,new cljs.core.Keyword(null,"object","object",1474613949),o,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null))], null));
});
dynomics.ui.ui.toggle_context_menu = (function dynomics$ui$ui$toggle_context_menu(p__292999){
var map__293002 = p__292999;
var map__293002__$1 = ((((!((map__293002 == null)))?((((map__293002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293002):map__293002);
var state = map__293002__$1;
var context_menu = cljs.core.get.call(null,map__293002__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
if(cljs.core.truth_(context_menu)){
return dynomics.ui.ui.hide_context_menu.call(null,state);
} else {
return dynomics.ui.ui.show_context_menu.call(null,state);
}
});
dynomics.ui.ui.toggle_left_panel = (function dynomics$ui$ui$toggle_left_panel(p__293004){
var map__293007 = p__293004;
var map__293007__$1 = ((((!((map__293007 == null)))?((((map__293007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293007):map__293007);
var state = map__293007__$1;
var left_panel_QMARK_ = cljs.core.get.call(null,map__293007__$1,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317),cljs.core.not.call(null,left_panel_QMARK_));
});
dynomics.ui.ui.switch_styles = (function dynomics$ui$ui$switch_styles(p__293009){
var map__293012 = p__293009;
var map__293012__$1 = ((((!((map__293012 == null)))?((((map__293012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293012):map__293012);
var state = map__293012__$1;
var style = cljs.core.get.call(null,map__293012__$1,new cljs.core.Keyword(null,"style","style",-496642736));
cljs.core.println.call(null,"switch style",style);

return dynomics.ui.ui.show_context_menu.call(null,cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"icons","icons",-297140977)], null),null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100024),(100024)], null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"space","space",348133475)], null),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"light","light",1918998747)))?new cljs.core.Keyword(null,"dark","dark",1818973999):new cljs.core.Keyword(null,"light","light",1918998747))));
});
dynomics.ui.ui.print_state = (function dynomics$ui$ui$print_state(state){
cljs.core.println.call(null,cljs.core.select_keys.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"space","space",348133475)], null)));

return state;
});
/**
 * Move objects
 */
dynomics.ui.ui.move_objects = (function dynomics$ui$ui$move_objects(p__293014){
var map__293024 = p__293014;
var map__293024__$1 = ((((!((map__293024 == null)))?((((map__293024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293024):map__293024);
var state = map__293024__$1;
var map__293025 = cljs.core.get.call(null,map__293024__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__293025__$1 = ((((!((map__293025 == null)))?((((map__293025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293025):map__293025);
var space = map__293025__$1;
var selected_nodes = cljs.core.get.call(null,map__293025__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var zoom = cljs.core.get.call(null,map__293025__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__293026 = cljs.core.get.call(null,map__293024__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__293026__$1 = ((((!((map__293026 == null)))?((((map__293026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293026):map__293026);
var vec__293027 = cljs.core.get.call(null,map__293026__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__293027,(0),null);
var y = cljs.core.nth.call(null,vec__293027,(1),null);
var ck = cljs.core.get.call(null,map__293026__$1,new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989));
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__293024,map__293024__$1,state,map__293025,map__293025__$1,space,selected_nodes,zoom,map__293026,map__293026__$1,vec__293027,x,y,ck){
return (function (r,path){
var tfn = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"point","point",1813198264))))?(cljs.core.truth_(ck)?dynomics.space.core.to_space:dynomics.space.core.mirror_node):((function (map__293024,map__293024__$1,state,map__293025,map__293025__$1,space,selected_nodes,zoom,map__293026,map__293026__$1,vec__293027,x,y,ck){
return (function (p,pth,_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,dynomics.ui.ui.relative_to_cursor.call(null,p,pth,state)], null)], null);
});})(map__293024,map__293024__$1,state,map__293025,map__293025__$1,space,selected_nodes,zoom,map__293026,map__293026__$1,vec__293027,x,y,ck))
);
return cljs.core.reduce.call(null,((function (tfn,map__293024,map__293024__$1,state,map__293025,map__293025__$1,space,selected_nodes,zoom,map__293026,map__293026__$1,vec__293027,x,y,ck){
return (function (r__$1,p__293031){
var vec__293032 = p__293031;
var cpath = cljs.core.nth.call(null,vec__293032,(0),null);
var cpoint = cljs.core.nth.call(null,vec__293032,(1),null);
return cljs.core.assoc_in.call(null,r__$1,cljs.core.conj.call(null,cpath,new cljs.core.Keyword(null,"position","position",-2011731912)),cpoint);
});})(tfn,map__293024,map__293024__$1,state,map__293025,map__293025__$1,space,selected_nodes,zoom,map__293026,map__293026__$1,vec__293027,x,y,ck))
,r,tfn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),path,space));
});})(map__293024,map__293024__$1,state,map__293025,map__293025__$1,space,selected_nodes,zoom,map__293026,map__293026__$1,vec__293027,x,y,ck))
,state,selected_nodes),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Pan
 */
dynomics.ui.ui.pan = (function dynomics$ui$ui$pan(p__293033){
var map__293039 = p__293033;
var map__293039__$1 = ((((!((map__293039 == null)))?((((map__293039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293039):map__293039);
var state = map__293039__$1;
var pp = cljs.core.get.call(null,map__293039__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var pan__$1 = cljs.core.get.call(null,map__293039__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__293039__$1,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305));
var zoom = cljs.core.get.call(null,map__293039__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__293040 = cljs.core.get.call(null,map__293039__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__293040__$1 = ((((!((map__293040 == null)))?((((map__293040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293040):map__293040);
var p = cljs.core.get.call(null,map__293040__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var pl = cljs.core.get.call(null,map__293040__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var vec__293041 = cljs.core.get.call(null,map__293040__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__293041,(0),null);
var p2 = cljs.core.nth.call(null,vec__293041,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"pan","pan",-307712792),cljs.core.map.call(null,cljs.core._,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / zoom)),p2),sp));
});
/**
 * Start zoom
 */
dynomics.ui.ui.start_zoom = (function dynomics$ui$ui$start_zoom(p__293044){
var map__293050 = p__293044;
var map__293050__$1 = ((((!((map__293050 == null)))?((((map__293050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293050):map__293050);
var state = map__293050__$1;
var zoom = cljs.core.get.call(null,map__293050__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pz = cljs.core.get.call(null,map__293050__$1,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303));
var map__293051 = cljs.core.get.call(null,map__293050__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__293051__$1 = ((((!((map__293051 == null)))?((((map__293051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293051):map__293051);
var p = cljs.core.get.call(null,map__293051__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__293052 = cljs.core.get.call(null,map__293051__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__293052,(0),null);
var p2 = cljs.core.nth.call(null,vec__293052,(1),null);
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
dynomics.ui.ui.zoom = (function dynomics$ui$ui$zoom(p__293055){
var map__293061 = p__293055;
var map__293061__$1 = ((((!((map__293061 == null)))?((((map__293061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293061):map__293061);
var state = map__293061__$1;
var zoom__$1 = cljs.core.get.call(null,map__293061__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pan = cljs.core.get.call(null,map__293061__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__293061__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var map__293062 = cljs.core.get.call(null,map__293061__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__293062__$1 = ((((!((map__293062 == null)))?((((map__293062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293062):map__293062);
var dy = cljs.core.get.call(null,map__293062__$1,new cljs.core.Keyword(null,"deltaY","deltaY",-879493966));
var p = cljs.core.get.call(null,map__293062__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__293063 = cljs.core.get.call(null,map__293062__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__293063,(0),null);
var p2 = cljs.core.nth.call(null,vec__293063,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(function (){var x__35723__auto__ = 0.5;
var y__35724__auto__ = (zoom__$1 + (-0.01 * dy));
return ((x__35723__auto__ > y__35724__auto__) ? x__35723__auto__ : y__35724__auto__);
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
dynomics.ui.ui.move_cursor = (function dynomics$ui$ui$move_cursor(p__293066){
var map__293072 = p__293066;
var map__293072__$1 = ((((!((map__293072 == null)))?((((map__293072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293072):map__293072);
var state = map__293072__$1;
var map__293073 = cljs.core.get.call(null,map__293072__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__293073__$1 = ((((!((map__293073 == null)))?((((map__293073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293073):map__293073);
var vec__293074 = cljs.core.get.call(null,map__293073__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__293074,(0),null);
var _ = cljs.core.nth.call(null,vec__293074,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p1);
});
/**
 * Start pan
 */
dynomics.ui.ui.start_pan = (function dynomics$ui$ui$start_pan(p__293077){
var map__293083 = p__293077;
var map__293083__$1 = ((((!((map__293083 == null)))?((((map__293083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293083):map__293083);
var state = map__293083__$1;
var map__293084 = cljs.core.get.call(null,map__293083__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__293084__$1 = ((((!((map__293084 == null)))?((((map__293084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293084):map__293084);
var p = cljs.core.get.call(null,map__293084__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__293085 = cljs.core.get.call(null,map__293084__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__293085,(0),null);
var _ = cljs.core.nth.call(null,vec__293085,(1),null);
cljs.core.println.call(null,"start pan",p,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),true,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1);
});
/**
 * End pan
 */
dynomics.ui.ui.end_pan = (function dynomics$ui$ui$end_pan(p__293088){
var map__293093 = p__293088;
var map__293093__$1 = ((((!((map__293093 == null)))?((((map__293093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293093):map__293093);
var state = map__293093__$1;
var map__293094 = cljs.core.get.call(null,map__293093__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__293094__$1 = ((((!((map__293094 == null)))?((((map__293094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293094):map__293094);
var p = cljs.core.get.call(null,map__293094__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
/**
 * Add node
 */
dynomics.ui.ui.add_node = (function dynomics$ui$ui$add_node(p__293097){
var map__293102 = p__293097;
var map__293102__$1 = ((((!((map__293102 == null)))?((((map__293102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293102):map__293102);
var state = map__293102__$1;
var map__293103 = cljs.core.get.call(null,map__293102__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__293103__$1 = ((((!((map__293103 == null)))?((((map__293103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293103):map__293103);
var p = cljs.core.get.call(null,map__293103__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p));
});
/**
 * Add point
 */
dynomics.ui.ui.add_point = (function dynomics$ui$ui$add_point(p__293106){
var map__293111 = p__293106;
var map__293111__$1 = ((((!((map__293111 == null)))?((((map__293111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293111):map__293111);
var state = map__293111__$1;
var map__293112 = cljs.core.get.call(null,map__293111__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__293112__$1 = ((((!((map__293112 == null)))?((((map__293112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293112):map__293112);
var p = cljs.core.get.call(null,map__293112__$1,new cljs.core.Keyword(null,"space-position","space-position",1969138679));
return dynomics.space.core.add_point.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p));
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
}),(function (){var or__35392__auto__ = s;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),keyz);
}));
});
});
dynomics.ui.ui.set_node_type = (function dynomics$ui$ui$set_node_type(p__293115){
var map__293120 = p__293115;
var map__293120__$1 = ((((!((map__293120 == null)))?((((map__293120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293120):map__293120);
var state = map__293120__$1;
var map__293121 = cljs.core.get.call(null,map__293120__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__293121__$1 = ((((!((map__293121 == null)))?((((map__293121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293121):map__293121);
var id = cljs.core.get.call(null,map__293121__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return dynomics.space.core.set_node_type.call(null,id).call(null,state);
});
dynomics.ui.ui.make_new_node = (function dynomics$ui$ui$make_new_node(p__293124){
var map__293131 = p__293124;
var map__293131__$1 = ((((!((map__293131 == null)))?((((map__293131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293131):map__293131);
var state = map__293131__$1;
var making_node_QMARK_ = cljs.core.get.call(null,map__293131__$1,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115));
var map__293132 = cljs.core.get.call(null,map__293131__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__293132__$1 = ((((!((map__293132 == null)))?((((map__293132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293132):map__293132);
var event = map__293132__$1;
var p = cljs.core.get.call(null,map__293132__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__293132__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.println.call(null,"make node type",id);

if(cljs.core.truth_(making_node_QMARK_)){
return state;
} else {
var map__293135 = dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),true,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489),id));
var map__293135__$1 = ((((!((map__293135 == null)))?((((map__293135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293135):map__293135);
var s = map__293135__$1;
var n = cljs.core.get.call(null,map__293135__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.ui.ui.select_node_for_move.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),n], null))));
}
});
dynomics.ui.ui.make_new_or_set_type_node = (function dynomics$ui$ui$make_new_or_set_type_node(p__293137){
var map__293144 = p__293137;
var map__293144__$1 = ((((!((map__293144 == null)))?((((map__293144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293144):map__293144);
var state = map__293144__$1;
var making_node_QMARK_ = cljs.core.get.call(null,map__293144__$1,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115));
var map__293145 = cljs.core.get.call(null,map__293144__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__293145__$1 = ((((!((map__293145 == null)))?((((map__293145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293145):map__293145);
var event = map__293145__$1;
var p = cljs.core.get.call(null,map__293145__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__293145__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.println.call(null,"make? node type",id,p,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"space-position","space-position",1969138679)], null)));

var map__293148 = dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true,new cljs.core.Keyword(null,"node-position","node-position",-542959703),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"space-position","space-position",1969138679)], null)),new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489),id));
var map__293148__$1 = ((((!((map__293148 == null)))?((((map__293148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293148):map__293148);
var s = map__293148__$1;
var n = cljs.core.get.call(null,map__293148__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return cljs.core.assoc.call(null,dynomics.ui.ui.select_node_for_move.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),n], null)))),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),n], null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"node","node",581201198)),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"position","position",-2011731912)], null)),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"node","node",581201198)], null))], null));
});
/**
 * Returns a function var to handle the given event
 */
dynomics.ui.ui.match_event = (function dynomics$ui$ui$match_event(p__293150){
var map__293390 = p__293150;
var map__293390__$1 = ((((!((map__293390 == null)))?((((map__293390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293390):map__293390);
var state = map__293390__$1;
var event = cljs.core.get.call(null,map__293390__$1,new cljs.core.Keyword(null,"event","event",301435442));
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || (event.cljs$core$ILookup$))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{var event_shift_key_QMARK___293415 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___293415 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,275,277,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293628){if((e293628 instanceof Error)){
var e__48376__auto__ = e293628;
if((e__48376__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto__;
}
} else {
throw e293628;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293622){if((e293622 instanceof Error)){
var e__48376__auto__ = e293622;
if((e__48376__auto__ === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___293415 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___293415 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,275,277,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293624){if((e293624 instanceof Error)){
var e__48376__auto____$1 = e293624;
if((e__48376__auto____$1 === cljs.core.match.backtrack)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___293419 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293419 === false)){
return (new cljs.core.Delay(((function (state_moving_things_QMARK___293419,e__48376__auto____$1,event_noun__293416,e__48376__auto__,event_verb__293412,map__293390,map__293390__$1,state,event){
return (function (){
return cljs.core.comp.call(null,dynomics.ui.ui.deselect_node,dynomics.ui.ui.toggle_active);
});})(state_moving_things_QMARK___293419,e__48376__auto____$1,event_noun__293416,e__48376__auto__,event_verb__293412,map__293390,map__293390__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293627){if((e293627 instanceof Error)){
var e__48376__auto____$2 = e293627;
if((e__48376__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$2;
}
} else {
throw e293627;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293625){if((e293625 instanceof Error)){
var e__48376__auto____$2 = e293625;
if((e__48376__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$2;
}
} else {
throw e293625;

}
}} else {
throw e__48376__auto____$1;
}
} else {
throw e293624;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293623){if((e293623 instanceof Error)){
var e__48376__auto____$1 = e293623;
if((e__48376__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$1;
}
} else {
throw e293623;

}
}} else {
throw e__48376__auto__;
}
} else {
throw e293622;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293493){if((e293493 instanceof Error)){
var e__48376__auto__ = e293493;
if((e__48376__auto__ === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_button__293413 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__293413 === (0))){
try{var event_id__293414 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_id__293414,new cljs.core.Keyword(null,"add-node-button","add-node-button",-722090690))){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.add_node;},new cljs.core.Symbol("dynomics.ui.ui","add-node","dynomics.ui.ui/add-node",175703617,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"add-node","add-node",-428722461,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",11,1,533,537,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Add node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Add node",(cljs.core.truth_(dynomics.ui.ui.add_node)?dynomics.ui.ui.add_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293621){if((e293621 instanceof Error)){
var e__48376__auto____$1 = e293621;
if((e__48376__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$1;
}
} else {
throw e293621;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293620){if((e293620 instanceof Error)){
var e__48376__auto____$1 = e293620;
if((e__48376__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$1;
}
} else {
throw e293620;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293615){if((e293615 instanceof Error)){
var e__48376__auto____$1 = e293615;
if((e__48376__auto____$1 === cljs.core.match.backtrack)){
try{var event_button__293413 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__293413 === (2))){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293617){if((e293617 instanceof Error)){
var e__48376__auto____$2 = e293617;
if((e__48376__auto____$2 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293618){if((e293618 instanceof Error)){
var e__48376__auto____$3 = e293618;
if((e__48376__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"space","space",348133475))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,387,389,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293619){if((e293619 instanceof Error)){
var e__48376__auto____$4 = e293619;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$4;
}
} else {
throw e293619;

}
}} else {
throw e__48376__auto____$3;
}
} else {
throw e293618;

}
}} else {
throw e__48376__auto____$2;
}
} else {
throw e293617;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293616){if((e293616 instanceof Error)){
var e__48376__auto____$2 = e293616;
if((e__48376__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$2;
}
} else {
throw e293616;

}
}} else {
throw e__48376__auto____$1;
}
} else {
throw e293615;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293494){if((e293494 instanceof Error)){
var e__48376__auto____$1 = e293494;
if((e__48376__auto____$1 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964))){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.hide_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","hide-context-menu","dynomics.ui.ui/hide-context-menu",-829551965,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"hide-context-menu","hide-context-menu",-210420991,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",20,1,377,379,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Hide context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.hide_context_menu)?dynomics.ui.ui.hide_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293614){if((e293614 instanceof Error)){
var e__48376__auto____$2 = e293614;
if((e__48376__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$2;
}
} else {
throw e293614;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293495){if((e293495 instanceof Error)){
var e__48376__auto____$2 = e293495;
if((e__48376__auto____$2 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_shift_key_QMARK___293415 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___293415 === false)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",23,1,301,305,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293610){if((e293610 instanceof Error)){
var e__48376__auto____$3 = e293610;
if((e__48376__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",23,1,301,305,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293611){if((e293611 instanceof Error)){
var e__48376__auto____$4 = e293611;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__293411 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__293411 === (1))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_curve_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-curve-for-move","dynomics.ui.ui/select-curve-for-move",67176701,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-curve-for-move","select-curve-for-move",268851359,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",24,1,318,322,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Select curve to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Select curve to move",(cljs.core.truth_(dynomics.ui.ui.select_curve_for_move)?dynomics.ui.ui.select_curve_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293613){if((e293613 instanceof Error)){
var e__48376__auto____$5 = e293613;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e293613;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293612){if((e293612 instanceof Error)){
var e__48376__auto____$5 = e293612;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e293612;

}
}} else {
throw e__48376__auto____$4;
}
} else {
throw e293611;

}
}} else {
throw e__48376__auto____$3;
}
} else {
throw e293610;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293609){if((e293609 instanceof Error)){
var e__48376__auto____$3 = e293609;
if((e__48376__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$3;
}
} else {
throw e293609;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293496){if((e293496 instanceof Error)){
var e__48376__auto____$3 = e293496;
if((e__48376__auto____$3 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_shift_key_QMARK___293415 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___293415 === false)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___293422 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293422 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,353,357,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293608){if((e293608 instanceof Error)){
var e__48376__auto____$4 = e293608;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$4;
}
} else {
throw e293608;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293606){if((e293606 instanceof Error)){
var e__48376__auto____$4 = e293606;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$4;
}
} else {
throw e293606;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293601){if((e293601 instanceof Error)){
var e__48376__auto____$4 = e293601;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___293425 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293425 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,353,357,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293605){if((e293605 instanceof Error)){
var e__48376__auto____$5 = e293605;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e293605;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293603){if((e293603 instanceof Error)){
var e__48376__auto____$5 = e293603;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e293603;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293602){if((e293602 instanceof Error)){
var e__48376__auto____$5 = e293602;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e293602;

}
}} else {
throw e__48376__auto____$4;
}
} else {
throw e293601;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293600){if((e293600 instanceof Error)){
var e__48376__auto____$4 = e293600;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$4;
}
} else {
throw e293600;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293497){if((e293497 instanceof Error)){
var e__48376__auto____$4 = e293497;
if((e__48376__auto____$4 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"click","click",1912301393))){
try{var event_shift_key_QMARK___293415 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___293415 === false)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"connector","connector",-1517293248))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___293428 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293428 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,275,277,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293599){if((e293599 instanceof Error)){
var e__48376__auto____$5 = e293599;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e293599;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293597){if((e293597 instanceof Error)){
var e__48376__auto____$5 = e293597;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e293597;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293596){if((e293596 instanceof Error)){
var e__48376__auto____$5 = e293596;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e293596;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293595){if((e293595 instanceof Error)){
var e__48376__auto____$5 = e293595;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$5;
}
} else {
throw e293595;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293498){if((e293498 instanceof Error)){
var e__48376__auto____$5 = e293498;
if((e__48376__auto____$5 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_shift_key_QMARK___293415 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___293415 === false)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_curve;},new cljs.core.Symbol("dynomics.ui.ui","deselect-curve","dynomics.ui.ui/deselect-curve",-758858976,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-curve","deselect-curve",-29652158,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",17,1,365,369,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Deselect curve",(cljs.core.truth_(dynomics.ui.ui.deselect_curve)?dynomics.ui.ui.deselect_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293594){if((e293594 instanceof Error)){
var e__48376__auto____$6 = e293594;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e293594;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293593){if((e293593 instanceof Error)){
var e__48376__auto____$6 = e293593;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$6;
}
} else {
throw e293593;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293499){if((e293499 instanceof Error)){
var e__48376__auto____$6 = e293499;
if((e__48376__auto____$6 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__293411 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__293411 === (1))){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___293415 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___293415 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___293432 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___293432 === false)){
try{var state_moving_things_QMARK___293433 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293433 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,493,497,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293592){if((e293592 instanceof Error)){
var e__48376__auto____$7 = e293592;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e293592;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293591){if((e293591 instanceof Error)){
var e__48376__auto____$7 = e293591;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e293591;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293589){if((e293589 instanceof Error)){
var e__48376__auto____$7 = e293589;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e293589;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293588){if((e293588 instanceof Error)){
var e__48376__auto____$7 = e293588;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$7;
}
} else {
throw e293588;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293560){if((e293560 instanceof Error)){
var e__48376__auto____$7 = e293560;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_shift_key_QMARK___293415 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___293415 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___293437 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___293437 === false)){
try{var state_moving_things_QMARK___293438 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293438 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,493,497,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293587){if((e293587 instanceof Error)){
var e__48376__auto____$8 = e293587;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293587;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293586){if((e293586 instanceof Error)){
var e__48376__auto____$8 = e293586;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293586;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293584){if((e293584 instanceof Error)){
var e__48376__auto____$8 = e293584;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293584;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293583){if((e293583 instanceof Error)){
var e__48376__auto____$8 = e293583;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293561){if((e293561 instanceof Error)){
var e__48376__auto____$8 = e293561;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"space","space",348133475))){
try{var event_shift_key_QMARK___293415 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___293415 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___293442 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___293442 === false)){
try{var state_moving_things_QMARK___293443 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293443 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,493,497,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293582){if((e293582 instanceof Error)){
var e__48376__auto____$9 = e293582;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e293582;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293581){if((e293581 instanceof Error)){
var e__48376__auto____$9 = e293581;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e293581;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293579){if((e293579 instanceof Error)){
var e__48376__auto____$9 = e293579;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e293579;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293578){if((e293578 instanceof Error)){
var e__48376__auto____$9 = e293578;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e293578;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293562){if((e293562 instanceof Error)){
var e__48376__auto____$9 = e293562;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___293447 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___293447 === false)){
try{var state_moving_things_QMARK___293448 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293448 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",15,1,434,438,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293577){if((e293577 instanceof Error)){
var e__48376__auto____$10 = e293577;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e293577;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293576){if((e293576 instanceof Error)){
var e__48376__auto____$10 = e293576;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e293576;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293574){if((e293574 instanceof Error)){
var e__48376__auto____$10 = e293574;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e293574;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293563){if((e293563 instanceof Error)){
var e__48376__auto____$10 = e293563;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___293452 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___293452 === false)){
try{var state_moving_things_QMARK___293453 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293453 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",15,1,434,438,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293573){if((e293573 instanceof Error)){
var e__48376__auto____$11 = e293573;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e293573;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293572){if((e293572 instanceof Error)){
var e__48376__auto____$11 = e293572;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e293572;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293570){if((e293570 instanceof Error)){
var e__48376__auto____$11 = e293570;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e293570;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293564){if((e293564 instanceof Error)){
var e__48376__auto____$11 = e293564;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___293457 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___293457 === false)){
try{var state_moving_things_QMARK___293458 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293458 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",15,1,434,438,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293569){if((e293569 instanceof Error)){
var e__48376__auto____$12 = e293569;
if((e__48376__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$12;
}
} else {
throw e293569;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293568){if((e293568 instanceof Error)){
var e__48376__auto____$12 = e293568;
if((e__48376__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$12;
}
} else {
throw e293568;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293566){if((e293566 instanceof Error)){
var e__48376__auto____$12 = e293566;
if((e__48376__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$12;
}
} else {
throw e293566;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293565){if((e293565 instanceof Error)){
var e__48376__auto____$12 = e293565;
if((e__48376__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$12;
}
} else {
throw e293565;

}
}} else {
throw e__48376__auto____$11;
}
} else {
throw e293564;

}
}} else {
throw e__48376__auto____$10;
}
} else {
throw e293563;

}
}} else {
throw e__48376__auto____$9;
}
} else {
throw e293562;

}
}} else {
throw e__48376__auto____$8;
}
} else {
throw e293561;

}
}} else {
throw e__48376__auto____$7;
}
} else {
throw e293560;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293542){if((e293542 instanceof Error)){
var e__48376__auto____$7 = e293542;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
try{var event_buttons__293411 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__293411 === (0))){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___293461 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293461 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,501,505,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293559){if((e293559 instanceof Error)){
var e__48376__auto____$8 = e293559;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293559;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293557){if((e293557 instanceof Error)){
var e__48376__auto____$8 = e293557;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293557;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293544){if((e293544 instanceof Error)){
var e__48376__auto____$8 = e293544;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___293464 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293464 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,501,505,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293556){if((e293556 instanceof Error)){
var e__48376__auto____$9 = e293556;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e293556;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293554){if((e293554 instanceof Error)){
var e__48376__auto____$9 = e293554;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e293554;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293545){if((e293545 instanceof Error)){
var e__48376__auto____$9 = e293545;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___293467 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293467 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,501,505,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293553){if((e293553 instanceof Error)){
var e__48376__auto____$10 = e293553;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e293553;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293551){if((e293551 instanceof Error)){
var e__48376__auto____$10 = e293551;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e293551;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293546){if((e293546 instanceof Error)){
var e__48376__auto____$10 = e293546;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___293470 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293470 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",14,1,501,505,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293550){if((e293550 instanceof Error)){
var e__48376__auto____$11 = e293550;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e293550;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293548){if((e293548 instanceof Error)){
var e__48376__auto____$11 = e293548;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e293548;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293547){if((e293547 instanceof Error)){
var e__48376__auto____$11 = e293547;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e293547;

}
}} else {
throw e__48376__auto____$10;
}
} else {
throw e293546;

}
}} else {
throw e__48376__auto____$9;
}
} else {
throw e293545;

}
}} else {
throw e__48376__auto____$8;
}
} else {
throw e293544;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293543){if((e293543 instanceof Error)){
var e__48376__auto____$8 = e293543;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293543;

}
}} else {
throw e__48376__auto____$7;
}
} else {
throw e293542;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293500){if((e293500 instanceof Error)){
var e__48376__auto____$7 = e293500;
if((e__48376__auto____$7 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_buttons__293411 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__293411 === (1))){
try{var event_shift_key_QMARK___293415 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___293415 === false)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___293474 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___293474 === false)){
try{var state_moving_things_QMARK___293475 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___293475 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_pan;},new cljs.core.Symbol("dynomics.ui.ui","start-pan","dynomics.ui.ui/start-pan",-310203637,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-pan","start-pan",-778345239,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",12,1,511,515,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start pan",(cljs.core.truth_(dynomics.ui.ui.start_pan)?dynomics.ui.ui.start_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293541){if((e293541 instanceof Error)){
var e__48376__auto____$8 = e293541;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293541;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293540){if((e293540 instanceof Error)){
var e__48376__auto____$8 = e293540;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293540;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293538){if((e293538 instanceof Error)){
var e__48376__auto____$8 = e293538;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293538;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293537){if((e293537 instanceof Error)){
var e__48376__auto____$8 = e293537;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293537;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293536){if((e293536 instanceof Error)){
var e__48376__auto____$8 = e293536;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293536;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293535){if((e293535 instanceof Error)){
var e__48376__auto____$8 = e293535;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$8;
}
} else {
throw e293535;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293501){if((e293501 instanceof Error)){
var e__48376__auto____$8 = e293501;
if((e__48376__auto____$8 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__293411 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__293411 === (1))){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___293478 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___293478 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.pan;},new cljs.core.Symbol("dynomics.ui.ui","pan","dynomics.ui.ui/pan",1533936577,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"pan","pan",1332818735,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",6,1,453,457,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"pp","pp",927842543,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Pan",(cljs.core.truth_(dynomics.ui.ui.pan)?dynomics.ui.ui.pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293534){if((e293534 instanceof Error)){
var e__48376__auto____$9 = e293534;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e293534;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293532){if((e293532 instanceof Error)){
var e__48376__auto____$9 = e293532;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e293532;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293531){if((e293531 instanceof Error)){
var e__48376__auto____$9 = e293531;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e293531;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293530){if((e293530 instanceof Error)){
var e__48376__auto____$9 = e293530;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$9;
}
} else {
throw e293530;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293502){if((e293502 instanceof Error)){
var e__48376__auto____$9 = e293502;
if((e__48376__auto____$9 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439))){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___293481 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___293481 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,469,473,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293527){if((e293527 instanceof Error)){
var e__48376__auto____$10 = e293527;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___293481 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,state_pan_zoom_QMARK___293481,new cljs.core.Keyword(null,"starting","starting",-1852141466))){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",13,1,469,473,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293528){if((e293528 instanceof Error)){
var e__48376__auto____$11 = e293528;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___293481 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___293481 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.zoom;},new cljs.core.Symbol("dynomics.ui.ui","zoom","dynomics.ui.ui/zoom",-926900565,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",7,1,480,484,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"dy","dy",-934888526,null),new cljs.core.Keyword(null,"deltaY","deltaY",-879493966),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Zoom",(cljs.core.truth_(dynomics.ui.ui.zoom)?dynomics.ui.ui.zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293529){if((e293529 instanceof Error)){
var e__48376__auto____$12 = e293529;
if((e__48376__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$12;
}
} else {
throw e293529;

}
}} else {
throw e__48376__auto____$11;
}
} else {
throw e293528;

}
}} else {
throw e__48376__auto____$10;
}
} else {
throw e293527;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293525){if((e293525 instanceof Error)){
var e__48376__auto____$10 = e293525;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e293525;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293524){if((e293524 instanceof Error)){
var e__48376__auto____$10 = e293524;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$10;
}
} else {
throw e293524;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293503){if((e293503 instanceof Error)){
var e__48376__auto____$10 = e293503;
if((e__48376__auto____$10 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_buttons__293411 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__293411 === (0))){
try{var event_shift_key_QMARK___293415 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___293415 === false)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___293484 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___293484 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.end_pan;},new cljs.core.Symbol("dynomics.ui.ui","end-pan","dynomics.ui.ui/end-pan",-5094220,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"end-pan","end-pan",-474409646,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",10,1,523,527,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"End pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"End pan",(cljs.core.truth_(dynomics.ui.ui.end_pan)?dynomics.ui.ui.end_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293523){if((e293523 instanceof Error)){
var e__48376__auto____$11 = e293523;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e293523;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293521){if((e293521 instanceof Error)){
var e__48376__auto____$11 = e293521;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e293521;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293520){if((e293520 instanceof Error)){
var e__48376__auto____$11 = e293520;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e293520;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293519){if((e293519 instanceof Error)){
var e__48376__auto____$11 = e293519;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e293519;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293518){if((e293518 instanceof Error)){
var e__48376__auto____$11 = e293518;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$11;
}
} else {
throw e293518;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293504){if((e293504 instanceof Error)){
var e__48376__auto____$11 = e293504;
if((e__48376__auto____$11 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__293411 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__293411 === (1))){
try{var event_shift_key_QMARK___293415 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___293415 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select_curve;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select-curve","dynomics.ui.ui/toggle-select-curve",1188080702,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select-curve","toggle-select-curve",1792572560,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",22,1,284,286,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select_curve)?dynomics.ui.ui.toggle_select_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293517){if((e293517 instanceof Error)){
var e__48376__auto____$12 = e293517;
if((e__48376__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$12;
}
} else {
throw e293517;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293516){if((e293516 instanceof Error)){
var e__48376__auto____$12 = e293516;
if((e__48376__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$12;
}
} else {
throw e293516;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293508){if((e293508 instanceof Error)){
var e__48376__auto____$12 = e293508;
if((e__48376__auto____$12 === cljs.core.match.backtrack)){
try{var event_noun__293416 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__293416,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_context_menu__293487 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((!((state_context_menu__293487 == null)))?((((state_context_menu__293487.cljs$lang$protocol_mask$partition0$ & (256))) || (state_context_menu__293487.cljs$core$ILookup$))?true:(((!state_context_menu__293487.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state_context_menu__293487):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state_context_menu__293487))){
try{var state_context_menu__293487_object__293490 = cljs.core.get.call(null,state_context_menu__293487,new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,state_context_menu__293487_object__293490,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.set_node_type;},new cljs.core.Symbol("dynomics.ui.ui","set-node-type","dynomics.ui.ui/set-node-type",776460294,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"set-node-type","set-node-type",306219192,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",16,1,571,575,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"description","description",-1428560544),"Set node type "], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.set_node_type)?dynomics.ui.ui.set_node_type.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293514){if((e293514 instanceof Error)){
var e__48376__auto____$13 = e293514;
if((e__48376__auto____$13 === cljs.core.match.backtrack)){
try{var state_context_menu__293487_object__293490 = cljs.core.get.call(null,state_context_menu__293487,new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,state_context_menu__293487_object__293490,new cljs.core.Keyword(null,"space","space",348133475))){
return new cljs.core.Var(function(){return dynomics.ui.ui.make_new_or_set_type_node;},new cljs.core.Symbol("dynomics.ui.ui","make-new-or-set-type-node","dynomics.ui.ui/make-new-or-set-type-node",-1342330535,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"make-new-or-set-type-node","make-new-or-set-type-node",-605775417,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",29,1,597,600,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"description","description",-1428560544),"Make new node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"making-node?","making-node?",-141094588,null),new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.make_new_or_set_type_node)?dynomics.ui.ui.make_new_or_set_type_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293515){if((e293515 instanceof Error)){
var e__48376__auto____$14 = e293515;
if((e__48376__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$14;
}
} else {
throw e293515;

}
}} else {
throw e__48376__auto____$13;
}
} else {
throw e293514;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293512){if((e293512 instanceof Error)){
var e__48376__auto____$13 = e293512;
if((e__48376__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$13;
}
} else {
throw e293512;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293510){if((e293510 instanceof Error)){
var e__48376__auto____$13 = e293510;
if((e__48376__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$13;
}
} else {
throw e293510;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293509){if((e293509 instanceof Error)){
var e__48376__auto____$13 = e293509;
if((e__48376__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$13;
}
} else {
throw e293509;

}
}} else {
throw e__48376__auto____$12;
}
} else {
throw e293508;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293505){if((e293505 instanceof Error)){
var e__48376__auto____$12 = e293505;
if((e__48376__auto____$12 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"keydown","keydown",-629268186))){
return (new cljs.core.Delay(((function (event_verb__293412,e__48376__auto____$12,e__48376__auto____$11,e__48376__auto____$10,e__48376__auto____$9,e__48376__auto____$8,e__48376__auto____$7,e__48376__auto____$6,e__48376__auto____$5,e__48376__auto____$4,e__48376__auto____$3,e__48376__auto____$2,e__48376__auto____$1,e__48376__auto__,map__293390,map__293390__$1,state,event){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state);
});})(event_verb__293412,e__48376__auto____$12,e__48376__auto____$11,e__48376__auto____$10,e__48376__auto____$9,e__48376__auto____$8,e__48376__auto____$7,e__48376__auto____$6,e__48376__auto____$5,e__48376__auto____$4,e__48376__auto____$3,e__48376__auto____$2,e__48376__auto____$1,e__48376__auto__,map__293390,map__293390__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293506){if((e293506 instanceof Error)){
var e__48376__auto____$13 = e293506;
if((e__48376__auto____$13 === cljs.core.match.backtrack)){
try{var event_verb__293412 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__293412,new cljs.core.Keyword(null,"keyup","keyup",-794526927))){
return (new cljs.core.Delay(((function (event_verb__293412,e__48376__auto____$13,e__48376__auto____$12,e__48376__auto____$11,e__48376__auto____$10,e__48376__auto____$9,e__48376__auto____$8,e__48376__auto____$7,e__48376__auto____$6,e__48376__auto____$5,e__48376__auto____$4,e__48376__auto____$3,e__48376__auto____$2,e__48376__auto____$1,e__48376__auto__,map__293390,map__293390__$1,state,event){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state);
});})(event_verb__293412,e__48376__auto____$13,e__48376__auto____$12,e__48376__auto____$11,e__48376__auto____$10,e__48376__auto____$9,e__48376__auto____$8,e__48376__auto____$7,e__48376__auto____$6,e__48376__auto____$5,e__48376__auto____$4,e__48376__auto____$3,e__48376__auto____$2,e__48376__auto____$1,e__48376__auto__,map__293390,map__293390__$1,state,event))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e293507){if((e293507 instanceof Error)){
var e__48376__auto____$14 = e293507;
if((e__48376__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__48376__auto____$14;
}
} else {
throw e293507;

}
}} else {
throw e__48376__auto____$13;
}
} else {
throw e293506;

}
}} else {
throw e__48376__auto____$12;
}
} else {
throw e293505;

}
}} else {
throw e__48376__auto____$11;
}
} else {
throw e293504;

}
}} else {
throw e__48376__auto____$10;
}
} else {
throw e293503;

}
}} else {
throw e__48376__auto____$9;
}
} else {
throw e293502;

}
}} else {
throw e__48376__auto____$8;
}
} else {
throw e293501;

}
}} else {
throw e__48376__auto____$7;
}
} else {
throw e293500;

}
}} else {
throw e__48376__auto____$6;
}
} else {
throw e293499;

}
}} else {
throw e__48376__auto____$5;
}
} else {
throw e293498;

}
}} else {
throw e__48376__auto____$4;
}
} else {
throw e293497;

}
}} else {
throw e__48376__auto____$3;
}
} else {
throw e293496;

}
}} else {
throw e__48376__auto____$2;
}
} else {
throw e293495;

}
}} else {
throw e__48376__auto____$1;
}
} else {
throw e293494;

}
}} else {
throw e__48376__auto__;
}
} else {
throw e293493;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e293491){if((e293491 instanceof Error)){
var e__48376__auto__ = e293491;
if((e__48376__auto__ === cljs.core.match.backtrack)){
return null;
} else {
throw e__48376__auto__;
}
} else {
throw e293491;

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
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"name","name",1843675177),"Header",new cljs.core.Keyword(null,"om-builder","om-builder",1876809590),dynomics.ui.ui.make_header_view,new cljs.core.Keyword(null,"query","query",-1288509510),(function (state__$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"app-name","app-name",-268811251),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.Keyword(null,"app-version","app-version",361554836),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"state-version","state-version",1282692697),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)],[cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),new cljs.core.Keyword(null,"dt","dt",-368444759).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)),new cljs.core.Keyword(null,"app-name","app-name",-268811251).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648)], null)),new cljs.core.Keyword(null,"app-version","app-version",361554836).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"logo-text","logo-text",-580816517).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603)], null))]);
})], null),new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.Keyword(null,"name","name",1843675177),"Palette",new cljs.core.Keyword(null,"query","query",-1288509510),(function (state__$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null)),new cljs.core.Keyword(null,"icons","icons",-297140977),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"icons","icons",-297140977)], null))], null);
})], null),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"name","name",1843675177),"Dynamics",new cljs.core.Keyword(null,"om-builder","om-builder",1876809590),dynomics.space.ui.make_space_component,new cljs.core.Keyword(null,"query","query",-1288509510),(function (state__$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"icons","icons",-297140977),new cljs.core.Keyword(null,"msgs","msgs",-1176489773),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"cf","cf",1480736310),new cljs.core.Keyword(null,"pan?","pan?",-1177698471),new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.Keyword(null,"show","show",-576705889)],[cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"space","space",348133475).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766)], null)),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"icons","icons",-297140977)], null)),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null)),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.get_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null)),new cljs.core.Keyword(null,"pan?","pan?",-1177698471).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331).cljs$core$IFn$_invoke$arity$1(state__$1),new cljs.core.Keyword(null,"show","show",-576705889).cljs$core$IFn$_invoke$arity$1(state__$1)]);
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),(function (p__293640){
var map__293641 = p__293640;
var map__293641__$1 = ((((!((map__293641 == null)))?((((map__293641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293641):map__293641);
var map__293642 = cljs.core.get.call(null,map__293641__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__293642__$1 = ((((!((map__293642 == null)))?((((map__293642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293642):map__293642);
var state_updates = cljs.core.get.call(null,map__293642__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__293641,map__293641__$1,map__293642,map__293642__$1,state_updates){
return (function (p__293645){
var map__293646 = p__293645;
var map__293646__$1 = ((((!((map__293646 == null)))?((((map__293646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293646):map__293646);
var event = map__293646__$1;
var h = cljs.core.get.call(null,map__293646__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return cljs.core.async.put_BANG_.call(null,state_updates,((function (map__293646,map__293646__$1,event,h,map__293641,map__293641__$1,map__293642,map__293642__$1,state_updates){
return (function (s){
var f = (function (){var or__35392__auto__ = h;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return dynomics.ui.ui.match_event.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"event","event",301435442),event));
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (f,map__293646,map__293646__$1,event,h,map__293641,map__293641__$1,map__293642,map__293642__$1,state_updates){
return (function (ss){
if(cljs.core.truth_(f)){
return cljs.core.deref.call(null,f).call(null,cljs.core.assoc.call(null,ss,new cljs.core.Keyword(null,"event","event",301435442),event));
} else {
return ss;
}
});})(f,map__293646,map__293646__$1,event,h,map__293641,map__293641__$1,map__293642,map__293642__$1,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1((function (){var or__35392__auto__ = cljs.core.meta.call(null,f);
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
}
})()),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_(f)?cljs.core.deref.call(null,f):null),new cljs.core.Keyword(null,"event","event",301435442),event)], null);
});})(map__293646,map__293646__$1,event,h,map__293641,map__293641__$1,map__293642,map__293642__$1,state_updates))
);
});})(map__293641,map__293641__$1,map__293642,map__293642__$1,state_updates))
], null)], null);
}),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"load","load",-1318641184)], null),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"toggle-quadrants","toggle-quadrants",-163483615),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),new cljs.core.Keyword(null,"print-state","print-state",-1235922711),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"toggle-quadrant-icons","toggle-quadrant-icons",1640510955),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"toggle-node-types","toggle-node-types",-2069291601),new cljs.core.Keyword(null,"toggle-left-panel","toggle-left-panel",-240911951),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"switch-styles","switch-styles",-1139342249),new cljs.core.Keyword(null,"deactivate-all","deactivate-all",-1221569027)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load space",new cljs.core.Keyword(null,"description","description",-1428560544),"Restores the last saved space",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C3",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.get_state_BANG_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrants",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrants",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Curve types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected curves",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,id){
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Curve type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected curves to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_curve_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"print",new cljs.core.Keyword(null,"name","name",1843675177),"println state",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.print_state], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Remove selected",new cljs.core.Keyword(null,"description","description",-1428560544),"Removes selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2612",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.comp.call(null,dynomics.space.core.deselect_all,dynomics.space.core.remove_selected)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrant icons",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrant icons",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrant-icons","quadrant-icons",737862449)], null))], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deselects all selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deselect_all], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"connect nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect selected nodes",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.curve_between_nodes], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Save space",new cljs.core.Keyword(null,"description","description",-1428560544),"Saves the space in your browser for later (sorry I will swap this icon for the familiar\n                                    floppy-disk icon when I find it",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.persist_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Node types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected nodes",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,p__293648){
var map__293649 = p__293648;
var map__293649__$1 = ((((!((map__293649 == null)))?((((map__293649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293649):map__293649);
var id = cljs.core.get.call(null,map__293649__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Node type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected nodes to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_node_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dynomics.space.core.node_types))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle types",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show types",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-types","node-types",1539943342)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Toggle left panel",new cljs.core.Keyword(null,"description","description",-1428560544),"Shows/hides the left panel",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_left_panel], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Context menu",new cljs.core.Keyword(null,"description","description",-1428560544),"Display context menu",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_context_menu,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"add-point","add-point",-1861575067),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Add point",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Var(function(){return dynomics.ui.ui.add_point;},new cljs.core.Symbol("dynomics.ui.ui","add-point","dynomics.ui.ui/add-point",-556108790,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"add-point","add-point",-221043540,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/ui.cljs",12,1,541,545,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Add point"], null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"space-position","space-position",1969138679)], null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)),"Add point",(cljs.core.truth_(dynomics.ui.ui.add_point)?dynomics.ui.ui.add_point.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Var(function(){return dynomics.space.core.deselect_all;},new cljs.core.Symbol("dynomics.space.core","deselect-all","dynomics.space.core/deselect-all",-164462906,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.space.core","dynomics.space.core",-1367950660,null),new cljs.core.Symbol(null,"deselect-all","deselect-all",-618582285,null),"src/dynomics/space/core.cljc",19,1,320,320,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(dynomics.space.core.deselect_all)?dynomics.space.core.deselect_all.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"deactivate-all","deactivate-all",-1221569027),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Deactivate all",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Var(function(){return dynomics.space.core.deactivate_all;},new cljs.core.Symbol("dynomics.space.core","deactivate-all","dynomics.space.core/deactivate-all",-974443401,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.space.core","dynomics.space.core",-1367950660,null),new cljs.core.Symbol(null,"deactivate-all","deactivate-all",418962500,null),"src/dynomics/space/core.cljc",21,1,325,325,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(dynomics.space.core.deactivate_all)?dynomics.space.core.deactivate_all.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Save",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Var(function(){return dynomics.ui.persistence.persist_BANG_;},new cljs.core.Symbol("dynomics.ui.persistence","persist!","dynomics.ui.persistence/persist!",618324353,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.persistence","dynomics.ui.persistence",-1319298821,null),new cljs.core.Symbol(null,"persist!","persist!",-1958402018,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/persistence.cljs",15,1,26,26,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(dynomics.ui.persistence.persist_BANG_)?dynomics.ui.persistence.persist_BANG_.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Load",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Var(function(){return dynomics.ui.persistence.get_state_BANG_;},new cljs.core.Symbol("dynomics.ui.persistence","get-state!","dynomics.ui.persistence/get-state!",-1937292612,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.persistence","dynomics.ui.persistence",-1319298821,null),new cljs.core.Symbol(null,"get-state!","get-state!",438831659,null),"/Users/onto/projects/Dynomics/src/dynomics/ui/persistence.cljs",17,1,31,31,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),null,(cljs.core.truth_(dynomics.ui.persistence.get_state_BANG_)?dynomics.ui.persistence.get_state_BANG_.cljs$lang$test:null)]))], null)], null),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-curve-type1","set-curve-type1",2042367308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Nullcline 1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(1));
}),null))], null),new cljs.core.Keyword(null,"set-curve-type2","set-curve-type2",1286708706),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Nullcline 2",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(2));
}),null))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"switch styles",new cljs.core.Keyword(null,"description","description",-1428560544),"change style",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tilde","tilde",-306005780),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.switch_styles], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deactivate all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deactivates all active nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deactivate_all], null)])], null)], null));
});
dynomics.ui.ui.left_right_top_view = (function dynomics$ui$ui$left_right_top_view(p__293651){
var map__293663 = p__293651;
var map__293663__$1 = ((((!((map__293663 == null)))?((((map__293663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293663):map__293663);
var state = map__293663__$1;
var context_menu = cljs.core.get.call(null,map__293663__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__293664 = cljs.core.get.call(null,map__293663__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__293664__$1 = ((((!((map__293664 == null)))?((((map__293664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293664):map__293664);
var selected_nodes = cljs.core.get.call(null,map__293664__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__293665 = cljs.core.get.call(null,map__293663__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__293665__$1 = ((((!((map__293665 == null)))?((((map__293665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293665):map__293665);
var msgs = cljs.core.get.call(null,map__293665__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
var su = cljs.core.get.call(null,map__293665__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui293669 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui293669 = (function (selected_nodes,map__293663,map__293665,left_right_top_view,map__293664,state,su,p__293651,msgs,context_menu,meta293670){
this.selected_nodes = selected_nodes;
this.map__293663 = map__293663;
this.map__293665 = map__293665;
this.left_right_top_view = left_right_top_view;
this.map__293664 = map__293664;
this.state = state;
this.su = su;
this.p__293651 = p__293651;
this.msgs = msgs;
this.context_menu = context_menu;
this.meta293670 = meta293670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui293669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su){
return (function (_293671,meta293670__$1){
var self__ = this;
var _293671__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui293669(self__.selected_nodes,self__.map__293663,self__.map__293665,self__.left_right_top_view,self__.map__293664,self__.state,self__.su,self__.p__293651,self__.msgs,self__.context_menu,meta293670__$1));
});})(map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su))
;

dynomics.ui.ui.t_dynomics$ui$ui293669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su){
return (function (_293671){
var self__ = this;
var _293671__$1 = this;
return self__.meta293670;
});})(map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su))
;

dynomics.ui.ui.t_dynomics$ui$ui293669.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui293669.prototype.om$core$IRender$render$arity$1 = ((function (map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su){
return (function (this__44434__auto__){
var self__ = this;
var this__44434__auto____$1 = this;
return React.createElement("div",{"className": "ui"},React.createElement("div",{"className": "main_ui"},React.createElement("div",{"className": [cljs.core.str("left_component "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317).cljs$core$IFn$_invoke$arity$1(self__.state))?"hidden_function":null))].join('')},sablono.interpreter.interpret.call(null,null),sablono.interpreter.interpret.call(null,null),sablono.interpreter.interpret.call(null,null)),React.createElement("div",{"className": "right_component selectable", "key": "right_component"},sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (this__44434__auto____$1,map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su){
return (function (p__293672){
var vec__293673 = p__293672;
var id = cljs.core.nth.call(null,vec__293673,(0),null);
var component = cljs.core.nth.call(null,vec__293673,(1),null);
return om.core.build.call(null,new cljs.core.Keyword(null,"om-builder","om-builder",1876809590).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(component).call(null,self__.state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
});})(this__44434__auto____$1,map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su))
,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"om-builder","om-builder",1876809590)),cljs.core.val),cljs.core.dissoc.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220)))))),sablono.interpreter.interpret.call(null,(cljs.core.truth_(self__.context_menu)?om.core.build.call(null,dynomics.ui.ui.make_context_menu,cljs.core.assoc.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451)], null)),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839),self__.su,new cljs.core.Keyword(null,"icons","icons",-297140977),cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"icons","icons",-297140977)], null)),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs)):null))),sablono.interpreter.interpret.call(null,null));
});})(map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su))
;

dynomics.ui.ui.t_dynomics$ui$ui293669.getBasis = ((function (map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__293663","map__293663",901770755,null),new cljs.core.Symbol(null,"map__293665","map__293665",1607682279,null),cljs.core.with_meta(new cljs.core.Symbol(null,"left-right-top-view","left-right-top-view",150328751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null)], null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"map__293664","map__293664",-877105200,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"su","su",155163255,null),new cljs.core.Symbol(null,"p__293651","p__293651",-283441225,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"meta293670","meta293670",1382468064,null)], null);
});})(map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su))
;

dynomics.ui.ui.t_dynomics$ui$ui293669.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui293669.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui293669";

dynomics.ui.ui.t_dynomics$ui$ui293669.cljs$lang$ctorPrWriter = ((function (map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui293669");
});})(map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui293669 = ((function (map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su){
return (function dynomics$ui$ui$left_right_top_view_$___GT_t_dynomics$ui$ui293669(selected_nodes__$1,map__293663__$2,map__293665__$2,left_right_top_view__$1,map__293664__$2,state__$1,su__$1,p__293651__$1,msgs__$1,context_menu__$1,meta293670){
return (new dynomics.ui.ui.t_dynomics$ui$ui293669(selected_nodes__$1,map__293663__$2,map__293665__$2,left_right_top_view__$1,map__293664__$2,state__$1,su__$1,p__293651__$1,msgs__$1,context_menu__$1,meta293670));
});})(map__293663,map__293663__$1,state,context_menu,map__293664,map__293664__$1,selected_nodes,map__293665,map__293665__$1,msgs,su))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui293669(selected_nodes,map__293663__$1,map__293665__$1,dynomics$ui$ui$left_right_top_view,map__293664__$1,state,su,p__293651,msgs,context_menu,null));
});
dynomics.ui.ui.main_view = (function dynomics$ui$ui$main_view(){
return (function (p__293682,owner){
var map__293683 = p__293682;
var map__293683__$1 = ((((!((map__293683 == null)))?((((map__293683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293683):map__293683);
var state = map__293683__$1;
var style = cljs.core.get.call(null,map__293683__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui293685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IWillUpdate}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui293685 = (function (main_view,p__293682,owner,map__293683,state,style,meta293686){
this.main_view = main_view;
this.p__293682 = p__293682;
this.owner = owner;
this.map__293683 = map__293683;
this.state = state;
this.style = style;
this.meta293686 = meta293686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui293685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__293683,map__293683__$1,state,style){
return (function (_293687,meta293686__$1){
var self__ = this;
var _293687__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui293685(self__.main_view,self__.p__293682,self__.owner,self__.map__293683,self__.state,self__.style,meta293686__$1));
});})(map__293683,map__293683__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui293685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__293683,map__293683__$1,state,style){
return (function (_293687){
var self__ = this;
var _293687__$1 = this;
return self__.meta293686;
});})(map__293683,map__293683__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui293685.prototype.om$core$IWillMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui293685.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__293683,map__293683__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936),goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null)))));

dynomics.ui.ui.add_events_BANG_.call(null,self__.state);

return dynomics.ui.messaging.setup_updates.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),((function (___$1,map__293683,map__293683__$1,state,style){
return (function (g){
if(cljs.core.truth_(g)){
return om.core.transact_BANG_.call(null,self__.state,((function (___$1,map__293683,map__293683__$1,state,style){
return (function (s){
var map__293688 = g.call(null,s);
var map__293688__$1 = ((((!((map__293688 == null)))?((((map__293688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__293688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__293688):map__293688);
var f = cljs.core.get.call(null,map__293688__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var a = cljs.core.get.call(null,map__293688__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var ss = dynomics.ui.core.update_state.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"action","action",-811238024),(function (){var or__35392__auto__ = a;
if(cljs.core.truth_(or__35392__auto__)){
return or__35392__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.PersistentArrayMap.EMPTY,f);
return ss;
});})(___$1,map__293683,map__293683__$1,state,style))
);
} else {
return null;
}
});})(___$1,map__293683,map__293683__$1,state,style))
);
});})(map__293683,map__293683__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui293685.prototype.om$core$IWillUpdate$ = true;

dynomics.ui.ui.t_dynomics$ui$ui293685.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__293683,map__293683__$1,state,style){
return (function (this$,pp,_){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not_EQ_.call(null,self__.style,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(pp))){
var temp__4655__auto___293690 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936));
if(cljs.core.truth_(temp__4655__auto___293690)){
var s_293691 = temp__4655__auto___293690;
goog.style.uninstallStyles(s_293691);
} else {
}

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"style-element","style-element",918957936),goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null)))));
} else {
return null;
}
});})(map__293683,map__293683__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui293685.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui293685.prototype.om$core$IRender$render$arity$1 = ((function (map__293683,map__293683__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,dynomics.ui.ui.left_right_top_view,self__.state);
});})(map__293683,map__293683__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui293685.getBasis = ((function (map__293683,map__293683__$1,state,style){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"p__293682","p__293682",132616691,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__293683","map__293683",-1650423146,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"meta293686","meta293686",-571805214,null)], null);
});})(map__293683,map__293683__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui293685.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui293685.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui293685";

dynomics.ui.ui.t_dynomics$ui$ui293685.cljs$lang$ctorPrWriter = ((function (map__293683,map__293683__$1,state,style){
return (function (this__35998__auto__,writer__35999__auto__,opt__36000__auto__){
return cljs.core._write.call(null,writer__35999__auto__,"dynomics.ui.ui/t_dynomics$ui$ui293685");
});})(map__293683,map__293683__$1,state,style))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui293685 = ((function (map__293683,map__293683__$1,state,style){
return (function dynomics$ui$ui$main_view_$___GT_t_dynomics$ui$ui293685(main_view__$1,p__293682__$1,owner__$1,map__293683__$2,state__$1,style__$1,meta293686){
return (new dynomics.ui.ui.t_dynomics$ui$ui293685(main_view__$1,p__293682__$1,owner__$1,map__293683__$2,state__$1,style__$1,meta293686));
});})(map__293683,map__293683__$1,state,style))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui293685(dynomics$ui$ui$main_view,p__293682,owner,map__293683__$1,state,style,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Start the application!
 */
dynomics.ui.ui.start = (function dynomics$ui$ui$start(var_args){
var args293692 = [];
var len__36461__auto___293695 = arguments.length;
var i__36462__auto___293696 = (0);
while(true){
if((i__36462__auto___293696 < len__36461__auto___293695)){
args293692.push((arguments[i__36462__auto___293696]));

var G__293697 = (i__36462__auto___293696 + (1));
i__36462__auto___293696 = G__293697;
continue;
} else {
}
break;
}

var G__293694 = args293692.length;
switch (G__293694) {
case 0:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args293692.length)].join('')));

}
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.ui.ui.start.call(null,dynomics.ui.ui.show_context_menu.call(null,cljs.core.assoc.call(null,dynomics.ui.ui.add_components.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.add_functions.call(null,dynomics.ui.ui.add_messaging.call(null,dynomics.ui.ui.add_browser_info.call(null,dynomics.ui.core.make_state.call(null)))))),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100024),(100024)], null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"space","space",348133475)], null))));
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1 = (function (state){
return om.core.root.call(null,dynomics.ui.ui.main_view.call(null),state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("ui")], null));
});

dynomics.ui.ui.start.cljs$lang$maxFixedArity = 1;
