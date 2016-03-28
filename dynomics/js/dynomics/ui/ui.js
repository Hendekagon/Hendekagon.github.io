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
dynomics.ui.ui.keydown = (function dynomics$ui$ui$keydown(p__457705,e){
var map__457710 = p__457705;
var map__457710__$1 = ((((!((map__457710 == null)))?((((map__457710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457710):map__457710);
var state = map__457710__$1;
var map__457711 = cljs.core.get.call(null,map__457710__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__457711__$1 = ((((!((map__457711 == null)))?((((map__457711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457711):map__457711);
var msgs = cljs.core.get.call(null,map__457711__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
return cljs.core.async.put_BANG_.call(null,msgs,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),dynomics.ui.core.keycode_to_keyword.call(null,e.keyCode),new cljs.core.Keyword(null,"keycode","keycode",-47989070),e.keyCode,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"keydown","keydown",-629268186),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
dynomics.ui.ui.keyup = (function dynomics$ui$ui$keyup(p__457714,e){
var map__457719 = p__457714;
var map__457719__$1 = ((((!((map__457719 == null)))?((((map__457719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457719):map__457719);
var state = map__457719__$1;
var map__457720 = cljs.core.get.call(null,map__457719__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__457720__$1 = ((((!((map__457720 == null)))?((((map__457720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457720):map__457720);
var msgs = cljs.core.get.call(null,map__457720__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
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
if(typeof dynomics.ui.ui.t_dynomics$ui$ui457730 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui457730 = (function (make_function_selector_view,state,owner,functions,state_updates,meta457731){
this.make_function_selector_view = make_function_selector_view;
this.state = state;
this.owner = owner;
this.functions = functions;
this.state_updates = state_updates;
this.meta457731 = meta457731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui457730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (functions,state_updates){
return (function (_457732,meta457731__$1){
var self__ = this;
var _457732__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui457730(self__.make_function_selector_view,self__.state,self__.owner,self__.functions,self__.state_updates,meta457731__$1));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui457730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (functions,state_updates){
return (function (_457732){
var self__ = this;
var _457732__$1 = this;
return self__.meta457731;
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui457730.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui457730.prototype.om$core$IRender$render$arity$1 = ((function (functions,state_updates){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": "function_selector"},cljs.core.map.call(null,((function (this__38609__auto____$1,functions,state_updates){
return (function (p__457733){
var vec__457734 = p__457733;
var k = cljs.core.nth.call(null,vec__457734,(0),null);
var map__457735 = cljs.core.nth.call(null,vec__457734,(1),null);
var map__457735__$1 = ((((!((map__457735 == null)))?((((map__457735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457735):map__457735);
var naym = cljs.core.get.call(null,map__457735__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__457735__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return om.dom.div.call(null,{"className": "function_selector_item", "id": [cljs.core.str(cljs.core.name.call(null,k))].join(''), "onClick": ((function (vec__457734,k,map__457735,map__457735__$1,naym,description,this__38609__auto____$1,functions,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__457734,k,map__457735,map__457735__$1,naym,description,this__38609__auto____$1,functions,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null),k);
});})(vec__457734,k,map__457735,map__457735__$1,naym,description,this__38609__auto____$1,functions,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"description","description",-1428560544),naym], null)], null));

return null;
});})(vec__457734,k,map__457735,map__457735__$1,naym,description,this__38609__auto____$1,functions,state_updates))
},naym);
});})(this__38609__auto____$1,functions,state_updates))
,self__.functions));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui457730.getBasis = ((function (functions,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-function-selector-view","make-function-selector-view",516344898,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for selecting the current function"], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"functions","functions",1825482993,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta457731","meta457731",-1346573302,null)], null);
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui457730.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui457730.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui457730";

dynomics.ui.ui.t_dynomics$ui$ui457730.cljs$lang$ctorPrWriter = ((function (functions,state_updates){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui457730");
});})(functions,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui457730 = ((function (functions,state_updates){
return (function dynomics$ui$ui$make_function_selector_view_$___GT_t_dynomics$ui$ui457730(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta457731){
return (new dynomics.ui.ui.t_dynomics$ui$ui457730(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta457731));
});})(functions,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui457730(dynomics$ui$ui$make_function_selector_view,state,owner,functions,state_updates,null));
});
/**
 * Return a component to display a list
 *   of historical states which select a historical
 *   state on mouseover
 */
dynomics.ui.ui.make_history_selector_view = (function dynomics$ui$ui$make_history_selector_view(p__457737,owner){
var map__457748 = p__457737;
var map__457748__$1 = ((((!((map__457748 == null)))?((((map__457748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457748):map__457748);
var state = map__457748__$1;
var map__457749 = cljs.core.get.call(null,map__457748__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__457749__$1 = ((((!((map__457749 == null)))?((((map__457749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457749):map__457749);
var state_updates = cljs.core.get.call(null,map__457749__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var sh = cljs.core.get.call(null,map__457748__$1,new cljs.core.Keyword(null,"show-history","show-history",1972567130));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui457752 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui457752 = (function (make_history_selector_view,p__457737,owner,map__457748,state,map__457749,state_updates,sh,meta457753){
this.make_history_selector_view = make_history_selector_view;
this.p__457737 = p__457737;
this.owner = owner;
this.map__457748 = map__457748;
this.state = state;
this.map__457749 = map__457749;
this.state_updates = state_updates;
this.sh = sh;
this.meta457753 = meta457753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui457752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (_457754,meta457753__$1){
var self__ = this;
var _457754__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui457752(self__.make_history_selector_view,self__.p__457737,self__.owner,self__.map__457748,self__.state,self__.map__457749,self__.state_updates,self__.sh,meta457753__$1));
});})(map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui457752.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (_457754){
var self__ = this;
var _457754__$1 = this;
return self__.meta457753;
});})(map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui457752.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui457752.prototype.om$core$IRender$render$arity$1 = ((function (map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": "history_selector", "onClick": ((function (this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (e){
return cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.update_in.call(null,s__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),cljs.core.not);
});})(this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
], null);
});})(this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
);
});})(this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
},om.dom.div.call(null,{"className": "history_selector_text"},"History"),om.dom.div.call(null,{"className": (cljs.core.truth_(self__.sh)?"history_selector_visible":"history_selector_hidden")},cljs.core.map.call(null,((function (this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (p__457755){
var map__457756 = p__457755;
var map__457756__$1 = ((((!((map__457756 == null)))?((((map__457756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457756):map__457756);
var history_item = map__457756__$1;
var action = cljs.core.get.call(null,map__457756__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var version = cljs.core.get.call(null,map__457756__$1,new cljs.core.Keyword(null,"version","version",425292698));
var previous_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)) - (1))));
var previous_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)));
return om.dom.div.call(null,{"className": [cljs.core.str("history_selector_item "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_action)))?"historical":""))].join(''), "id": [cljs.core.str("history_version_"),cljs.core.str(previous_version)].join(''), "onMouseOver": ((function (previous_action,previous_version,map__457756,map__457756__$1,history_item,action,version,this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,((function (previous_action,previous_version,map__457756,map__457756__$1,history_item,action,version,this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (previous_action,previous_version,map__457756,map__457756__$1,history_item,action,version,this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (s__$1){
return cljs.core.merge.call(null,om.core.value.call(null,history_item),cljs.core.select_keys.call(null,s__$1,cljs.core.conj.call(null,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(s__$1),new cljs.core.Keyword(null,"history","history",-247395220))));
});})(previous_action,previous_version,map__457756,map__457756__$1,history_item,action,version,this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desccription","desccription",-1060114044),[cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action))].join(''),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"id","id",-1388402092),version], null)], null);
});})(previous_action,previous_version,map__457756,map__457756__$1,history_item,action,version,this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
);

return null;
});})(previous_action,previous_version,map__457756,map__457756__$1,history_item,action,version,this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action));
});})(this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
,cljs.core.filter.call(null,((function (this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (hi){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi)) - (1)))));
});})(this__38609__auto____$1,map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
,cljs.core.reverse.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.state),self__.state))))));
});})(map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui457752.getBasis = ((function (map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-history-selector-view","make-history-selector-view",1677763159,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Keyword(null,"show-history","show-history",1972567130),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a component to display a list\n  of historical states which select a historical\n  state on mouseover"], null)),new cljs.core.Symbol(null,"p__457737","p__457737",706154716,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__457748","map__457748",1782992305,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__457749","map__457749",720420669,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Symbol(null,"meta457753","meta457753",1780324969,null)], null);
});})(map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui457752.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui457752.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui457752";

dynomics.ui.ui.t_dynomics$ui$ui457752.cljs$lang$ctorPrWriter = ((function (map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui457752");
});})(map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui457752 = ((function (map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh){
return (function dynomics$ui$ui$make_history_selector_view_$___GT_t_dynomics$ui$ui457752(make_history_selector_view__$1,p__457737__$1,owner__$1,map__457748__$2,state__$1,map__457749__$2,state_updates__$1,sh__$1,meta457753){
return (new dynomics.ui.ui.t_dynomics$ui$ui457752(make_history_selector_view__$1,p__457737__$1,owner__$1,map__457748__$2,state__$1,map__457749__$2,state_updates__$1,sh__$1,meta457753));
});})(map__457748,map__457748__$1,state,map__457749,map__457749__$1,state_updates,sh))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui457752(dynomics$ui$ui$make_history_selector_view,p__457737,owner,map__457748__$1,state,map__457749__$1,state_updates,sh,null));
});
dynomics.ui.ui.make_context_menu = (function dynomics$ui$ui$make_context_menu(p__457758){
var map__457771 = p__457758;
var map__457771__$1 = ((((!((map__457771 == null)))?((((map__457771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457771):map__457771);
var map__457772 = cljs.core.get.call(null,map__457771__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__457772__$1 = ((((!((map__457772 == null)))?((((map__457772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457772):map__457772);
var vec__457773 = cljs.core.get.call(null,map__457772__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__457773,(0),null);
var y = cljs.core.nth.call(null,vec__457773,(1),null);
var o = cljs.core.get.call(null,map__457772__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var options = cljs.core.get.call(null,map__457772__$1,new cljs.core.Keyword(null,"options","options",99638489));
var msgs = cljs.core.get.call(null,map__457771__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui457776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui457776 = (function (options,x,vec__457773,map__457771,y,o,p__457758,map__457772,msgs,make_context_menu,meta457777){
this.options = options;
this.x = x;
this.vec__457773 = vec__457773;
this.map__457771 = map__457771;
this.y = y;
this.o = o;
this.p__457758 = p__457758;
this.map__457772 = map__457772;
this.msgs = msgs;
this.make_context_menu = make_context_menu;
this.meta457777 = meta457777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui457776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs){
return (function (_457778,meta457777__$1){
var self__ = this;
var _457778__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui457776(self__.options,self__.x,self__.vec__457773,self__.map__457771,self__.y,self__.o,self__.p__457758,self__.map__457772,self__.msgs,self__.make_context_menu,meta457777__$1));
});})(map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui457776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs){
return (function (_457778){
var self__ = this;
var _457778__$1 = this;
return self__.meta457777;
});})(map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui457776.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui457776.prototype.om$core$IRender$render$arity$1 = ((function (map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return React.createElement("div",{"style": {"transform": [cljs.core.str("translate("),cljs.core.str(self__.x),cljs.core.str("px,"),cljs.core.str(self__.y),cljs.core.str("px)")].join('')}, "id": "context-menu", "className": "context_menu", "onMouseDown": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseUp": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY), "onMouseLeave": dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),self__.msgs,cljs.core.PersistentArrayMap.EMPTY)},React.createElement("div",{"className": "context_menu_title"},sablono.interpreter.interpret.call(null,[cljs.core.str("Options for "),cljs.core.str(cljs.core.name.call(null,self__.o))].join(''))),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (this__38609__auto____$1,map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs){
return (function (p__457779){
var vec__457780 = p__457779;
var k = cljs.core.nth.call(null,vec__457780,(0),null);
var map__457781 = cljs.core.nth.call(null,vec__457780,(1),null);
var map__457781__$1 = ((((!((map__457781 == null)))?((((map__457781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457781):map__457781);
var naym = cljs.core.get.call(null,map__457781__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kb = cljs.core.get.call(null,map__457781__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var f = cljs.core.get.call(null,map__457781__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"context_menu_option",new cljs.core.Keyword(null,"onMouseUp","onMouseUp",-180363297),dynomics.space.ui.make_handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dynomics.space.ui.convert_coords.call(null,"space_root"),dynomics.space.ui.convert_coords.call(null,"space")], null),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),k], null),self__.msgs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),f], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(naym),cljs.core.str("  ")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"keyboard_shortcut"], null),[cljs.core.str(kb)].join('')], null)], null);
});})(this__38609__auto____$1,map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs))
,self__.options)));
});})(map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui457776.getBasis = ((function (map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"vec__457773","vec__457773",1683309092,null),new cljs.core.Symbol(null,"map__457771","map__457771",-1275330842,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"p__457758","p__457758",1486051627,null),new cljs.core.Symbol(null,"map__457772","map__457772",161511731,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-context-menu","make-context-menu",-526000036,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Keyword(null,"options","options",99638489)], true, false),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"msgs","msgs",-1176489773)], true, false)], null)))], null)),new cljs.core.Symbol(null,"meta457777","meta457777",1475708942,null)], null);
});})(map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui457776.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui457776.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui457776";

dynomics.ui.ui.t_dynomics$ui$ui457776.cljs$lang$ctorPrWriter = ((function (map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui457776");
});})(map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui457776 = ((function (map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs){
return (function dynomics$ui$ui$make_context_menu_$___GT_t_dynomics$ui$ui457776(options__$1,x__$1,vec__457773__$1,map__457771__$2,y__$1,o__$1,p__457758__$1,map__457772__$2,msgs__$1,make_context_menu__$1,meta457777){
return (new dynomics.ui.ui.t_dynomics$ui$ui457776(options__$1,x__$1,vec__457773__$1,map__457771__$2,y__$1,o__$1,p__457758__$1,map__457772__$2,msgs__$1,make_context_menu__$1,meta457777));
});})(map__457771,map__457771__$1,map__457772,map__457772__$1,vec__457773,x,y,o,options,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui457776(options,x,vec__457773,map__457771__$1,y,o,p__457758,map__457772__$1,msgs,dynomics$ui$ui$make_context_menu,null));
});
/**
 * Returns a component for the top header
 */
dynomics.ui.ui.make_header_view = (function dynomics$ui$ui$make_header_view(p__457783){
var map__457789 = p__457783;
var map__457789__$1 = ((((!((map__457789 == null)))?((((map__457789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457789):map__457789);
var state = map__457789__$1;
var logo_text = cljs.core.get.call(null,map__457789__$1,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
var app_name = cljs.core.get.call(null,map__457789__$1,new cljs.core.Keyword(null,"app-name","app-name",-268811251));
var app_version = cljs.core.get.call(null,map__457789__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
var state_version = cljs.core.get.call(null,map__457789__$1,new cljs.core.Keyword(null,"state-version","state-version",1282692697));
var action = cljs.core.get.call(null,map__457789__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui457791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui457791 = (function (make_header_view,p__457783,map__457789,state,logo_text,app_name,app_version,state_version,action,meta457792){
this.make_header_view = make_header_view;
this.p__457783 = p__457783;
this.map__457789 = map__457789;
this.state = state;
this.logo_text = logo_text;
this.app_name = app_name;
this.app_version = app_version;
this.state_version = state_version;
this.action = action;
this.meta457792 = meta457792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui457791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__457789,map__457789__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_457793,meta457792__$1){
var self__ = this;
var _457793__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui457791(self__.make_header_view,self__.p__457783,self__.map__457789,self__.state,self__.logo_text,self__.app_name,self__.app_version,self__.state_version,self__.action,meta457792__$1));
});})(map__457789,map__457789__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui457791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__457789,map__457789__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (_457793){
var self__ = this;
var _457793__$1 = this;
return self__.meta457792;
});})(map__457789,map__457789__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui457791.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui457791.prototype.om$core$IRender$render$arity$1 = ((function (map__457789,map__457789__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": "top_component"},null,null);
});})(map__457789,map__457789__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui457791.getBasis = ((function (map__457789,map__457789__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-header-view","make-header-view",2348093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the top header"], null)),new cljs.core.Symbol(null,"p__457783","p__457783",-1966541010,null),new cljs.core.Symbol(null,"map__457789","map__457789",-1740308479,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"state-version","state-version",-1371743072,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Symbol(null,"meta457792","meta457792",165513161,null)], null);
});})(map__457789,map__457789__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.t_dynomics$ui$ui457791.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui457791.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui457791";

dynomics.ui.ui.t_dynomics$ui$ui457791.cljs$lang$ctorPrWriter = ((function (map__457789,map__457789__$1,state,logo_text,app_name,app_version,state_version,action){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui457791");
});})(map__457789,map__457789__$1,state,logo_text,app_name,app_version,state_version,action))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui457791 = ((function (map__457789,map__457789__$1,state,logo_text,app_name,app_version,state_version,action){
return (function dynomics$ui$ui$make_header_view_$___GT_t_dynomics$ui$ui457791(make_header_view__$1,p__457783__$1,map__457789__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta457792){
return (new dynomics.ui.ui.t_dynomics$ui$ui457791(make_header_view__$1,p__457783__$1,map__457789__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,state_version__$1,action__$1,meta457792));
});})(map__457789,map__457789__$1,state,logo_text,app_name,app_version,state_version,action))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui457791(dynomics$ui$ui$make_header_view,p__457783,map__457789__$1,state,logo_text,app_name,app_version,state_version,action,null));
});
dynomics.ui.ui.evaluate = (function dynomics$ui$ui$evaluate(s,sexp,f){
return null;
});
dynomics.ui.ui.make_footer_view = (function dynomics$ui$ui$make_footer_view(p__457794){
var map__457804 = p__457794;
var map__457804__$1 = ((((!((map__457804 == null)))?((((map__457804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457804):map__457804);
var state = map__457804__$1;
var map__457805 = cljs.core.get.call(null,map__457804__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__457805__$1 = ((((!((map__457805 == null)))?((((map__457805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457805):map__457805);
var state_updates = cljs.core.get.call(null,map__457805__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var map__457806 = cljs.core.get.call(null,map__457804__$1,new cljs.core.Keyword(null,"eval","eval",-1103567905));
var map__457806__$1 = ((((!((map__457806 == null)))?((((map__457806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457806):map__457806);
var last_result = cljs.core.get.call(null,map__457806__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var last_exps = cljs.core.get.call(null,map__457806__$1,new cljs.core.Keyword(null,"exps","exps",-877274249));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui457810 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui457810 = (function (make_footer_view,p__457794,map__457804,state,map__457805,state_updates,map__457806,last_result,last_exps,meta457811){
this.make_footer_view = make_footer_view;
this.p__457794 = p__457794;
this.map__457804 = map__457804;
this.state = state;
this.map__457805 = map__457805;
this.state_updates = state_updates;
this.map__457806 = map__457806;
this.last_result = last_result;
this.last_exps = last_exps;
this.meta457811 = meta457811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui457810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps){
return (function (_457812,meta457811__$1){
var self__ = this;
var _457812__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui457810(self__.make_footer_view,self__.p__457794,self__.map__457804,self__.state,self__.map__457805,self__.state_updates,self__.map__457806,self__.last_result,self__.last_exps,meta457811__$1));
});})(map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui457810.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps){
return (function (_457812){
var self__ = this;
var _457812__$1 = this;
return self__.meta457811;
});})(map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui457810.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui457810.prototype.om$core$IRender$render$arity$1 = ((function (map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": "bottom_component"},om.dom.input.call(null,{"className": "eval_input", "type": "text", "size": (64), "onKeyDown": ((function (this__38609__auto____$1,map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps){
return (function (e){
e.stopPropagation();


return null;
});})(this__38609__auto____$1,map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps))
}),om.dom.div.call(null,{"className": "eval_result"},[cljs.core.str("> "),cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.last_result))].join('')));
});})(map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui457810.getBasis = ((function (map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-footer-view","make-footer-view",-746293906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Keyword(null,"exps","exps",-877274249)], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__457794","p__457794",-1205634355,null),new cljs.core.Symbol(null,"map__457804","map__457804",-440555636,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__457805","map__457805",1182174658,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"map__457806","map__457806",2006478374,null),new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Symbol(null,"meta457811","meta457811",429762582,null)], null);
});})(map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui457810.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui457810.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui457810";

dynomics.ui.ui.t_dynomics$ui$ui457810.cljs$lang$ctorPrWriter = ((function (map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui457810");
});})(map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui457810 = ((function (map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps){
return (function dynomics$ui$ui$make_footer_view_$___GT_t_dynomics$ui$ui457810(make_footer_view__$1,p__457794__$1,map__457804__$2,state__$1,map__457805__$2,state_updates__$1,map__457806__$2,last_result__$1,last_exps__$1,meta457811){
return (new dynomics.ui.ui.t_dynomics$ui$ui457810(make_footer_view__$1,p__457794__$1,map__457804__$2,state__$1,map__457805__$2,state_updates__$1,map__457806__$2,last_result__$1,last_exps__$1,meta457811));
});})(map__457804,map__457804__$1,state,map__457805,map__457805__$1,state_updates,map__457806,map__457806__$1,last_result,last_exps))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui457810(dynomics$ui$ui$make_footer_view,p__457794,map__457804__$1,state,map__457805__$1,state_updates,map__457806__$1,last_result,last_exps,null));
});
dynomics.ui.ui.add_components = (function dynomics$ui$ui$add_components(state){
var seq__457817_457821 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null))))));
var chunk__457818_457822 = null;
var count__457819_457823 = (0);
var i__457820_457824 = (0);
while(true){
if((i__457820_457824 < count__457819_457823)){
var component_457825 = cljs.core._nth.call(null,chunk__457818_457822,i__457820_457824);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_457825);

var G__457826 = seq__457817_457821;
var G__457827 = chunk__457818_457822;
var G__457828 = count__457819_457823;
var G__457829 = (i__457820_457824 + (1));
seq__457817_457821 = G__457826;
chunk__457818_457822 = G__457827;
count__457819_457823 = G__457828;
i__457820_457824 = G__457829;
continue;
} else {
var temp__4657__auto___457830 = cljs.core.seq.call(null,seq__457817_457821);
if(temp__4657__auto___457830){
var seq__457817_457831__$1 = temp__4657__auto___457830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457817_457831__$1)){
var c__36002__auto___457832 = cljs.core.chunk_first.call(null,seq__457817_457831__$1);
var G__457833 = cljs.core.chunk_rest.call(null,seq__457817_457831__$1);
var G__457834 = c__36002__auto___457832;
var G__457835 = cljs.core.count.call(null,c__36002__auto___457832);
var G__457836 = (0);
seq__457817_457821 = G__457833;
chunk__457818_457822 = G__457834;
count__457819_457823 = G__457835;
i__457820_457824 = G__457836;
continue;
} else {
var component_457837 = cljs.core.first.call(null,seq__457817_457831__$1);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_457837);

var G__457838 = cljs.core.next.call(null,seq__457817_457831__$1);
var G__457839 = null;
var G__457840 = (0);
var G__457841 = (0);
seq__457817_457821 = G__457838;
chunk__457818_457822 = G__457839;
count__457819_457823 = G__457840;
i__457820_457824 = G__457841;
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
var args457842 = [];
var len__36260__auto___457849 = arguments.length;
var i__36261__auto___457850 = (0);
while(true){
if((i__36261__auto___457850 < len__36260__auto___457849)){
args457842.push((arguments[i__36261__auto___457850]));

var G__457851 = (i__36261__auto___457850 + (1));
i__36261__auto___457850 = G__457851;
continue;
} else {
}
break;
}

var G__457844 = args457842.length;
switch (G__457844) {
case 1:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args457842.length)].join('')));

}
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.ui.add_keybindings.call(null,state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)));
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2 = (function (state,tools){
return cljs.core.reduce.call(null,(function (r,p__457845){
var vec__457846 = p__457845;
var k = cljs.core.nth.call(null,vec__457846,(0),null);
var map__457847 = cljs.core.nth.call(null,vec__457846,(1),null);
var map__457847__$1 = ((((!((map__457847 == null)))?((((map__457847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457847):map__457847);
var f = cljs.core.get.call(null,map__457847__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var kb = cljs.core.get.call(null,map__457847__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var naym = cljs.core.get.call(null,map__457847__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tools__$1 = cljs.core.get.call(null,map__457847__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
if(cljs.core.truth_(f)){
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),((function (vec__457846,k,map__457847,map__457847__$1,f,kb,naym,tools__$1){
return (function (s){
cljs.core.println.call(null,naym);

return ((cljs.core.delay_QMARK_.call(null,f))?cljs.core.deref.call(null,f):f).call(null,s);
});})(vec__457846,k,map__457847,map__457847__$1,f,kb,naym,tools__$1))
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
dynomics.ui.ui.toggle_select = (function dynomics$ui$ui$toggle_select(state,p__457853){
var map__457856 = p__457853;
var map__457856__$1 = ((((!((map__457856 == null)))?((((map__457856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457856):map__457856);
var p = cljs.core.get.call(null,map__457856__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__457856__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__457856__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return dynomics.space.core.add_curve_between_nodes.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),((function (map__457856,map__457856__$1,p,id,path){
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
});})(map__457856,map__457856__$1,p,id,path))
));
});
dynomics.ui.ui.end_move = (function dynomics$ui$ui$end_move(state){
cljs.core.println.call(null,"end move");

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
dynomics.ui.ui.toggle_select_curve = (function dynomics$ui$ui$toggle_select_curve(state,p__457858){
var map__457861 = p__457858;
var map__457861__$1 = ((((!((map__457861 == null)))?((((map__457861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457861):map__457861);
var p = cljs.core.get.call(null,map__457861__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__457861__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__457861__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"(de)select curve",path);

return dynomics.space.core.toggle_select_curve.call(null,state,path);
});
dynomics.ui.ui.toggle_active = (function dynomics$ui$ui$toggle_active(state,p__457863){
var map__457867 = p__457863;
var map__457867__$1 = ((((!((map__457867 == null)))?((((map__457867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457867):map__457867);
var vec__457868 = cljs.core.get.call(null,map__457867__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__457868,(0),null);
var y = cljs.core.nth.call(null,vec__457868,(1),null);
var id = cljs.core.get.call(null,map__457867__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__457867__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"active-nodes","active-nodes",504368891)], null),((function (map__457867,map__457867__$1,vec__457868,x,y,id,path){
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
});})(map__457867,map__457867__$1,vec__457868,x,y,id,path))
);
});
/**
 * Returns the given state with the
 *   selected-nodes' positions saved
 *   to use for move offsets
 */
dynomics.ui.ui.where_they_were = (function dynomics$ui$ui$where_they_were(p__457870){
var map__457875 = p__457870;
var map__457875__$1 = ((((!((map__457875 == null)))?((((map__457875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457875):map__457875);
var state = map__457875__$1;
var map__457876 = cljs.core.get.call(null,map__457875__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__457876__$1 = ((((!((map__457876 == null)))?((((map__457876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457876):map__457876);
var space = map__457876__$1;
var selected_nodes = cljs.core.get.call(null,map__457876__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,((function (map__457875,map__457875__$1,state,map__457876,map__457876__$1,space,selected_nodes){
return (function (s,path){
return cljs.core.assoc_in.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-at-start-of-move","position-at-start-of-move",530469056)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))));
});})(map__457875,map__457875__$1,state,map__457876,map__457876__$1,space,selected_nodes))
,state,cljs.core.remove.call(null,cljs.core.nil_QMARK_,selected_nodes));
});
/**
 * Select node to move
 */
dynomics.ui.ui.select_node_for_move = (function dynomics$ui$ui$select_node_for_move(state,p__457879){
var map__457882 = p__457879;
var map__457882__$1 = ((((!((map__457882 == null)))?((((map__457882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457882):map__457882);
var p = cljs.core.get.call(null,map__457882__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__457882__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select node to move ",path);

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position-when-selected","position-when-selected",1681219792)),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"position","position",-2011731912))))),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select curve to move
 */
dynomics.ui.ui.select_curve_for_move = (function dynomics$ui$ui$select_curve_for_move(state,p__457884){
var map__457887 = p__457884;
var map__457887__$1 = ((((!((map__457887 == null)))?((((map__457887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457887):map__457887);
var p = cljs.core.get.call(null,map__457887__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__457887__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"select curve for move ",path,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null)));

return cljs.core.assoc.call(null,dynomics.ui.ui.where_they_were.call(null,dynomics.space.core.toggle_select_curve.call(null,state,path)),new cljs.core.Keyword(null,"mouse-position-at-start-of-move","mouse-position-at-start-of-move",1825524089),p,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
/**
 * Select node
 */
dynomics.ui.ui.select_node = (function dynomics$ui$ui$select_node(state,p__457889){
var map__457892 = p__457889;
var map__457892__$1 = ((((!((map__457892 == null)))?((((map__457892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457892):map__457892);
var path = cljs.core.get.call(null,map__457892__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path);
});
/**
 * Select object
 */
dynomics.ui.ui.select_object = (function dynomics$ui$ui$select_object(state,p__457894){
var map__457897 = p__457894;
var map__457897__$1 = ((((!((map__457897 == null)))?((((map__457897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457897):map__457897);
var path = cljs.core.get.call(null,map__457897__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tipe = cljs.core.get.call(null,map__457897__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
cljs.core.println.call(null,"select object",path,tipe);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.Keyword(null,"selected-curves","selected-curves",-971461493),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-space","selected-space",613834726)], null).call(null,tipe)], null),cljs.core.conj,path);
});
/**
 * Deselect object
 */
dynomics.ui.ui.deselect_object = (function dynomics$ui$ui$deselect_object(p__457899,p__457900){
var map__457909 = p__457899;
var map__457909__$1 = ((((!((map__457909 == null)))?((((map__457909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457909):map__457909);
var state = map__457909__$1;
var map__457910 = cljs.core.get.call(null,map__457909__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__457910__$1 = ((((!((map__457910 == null)))?((((map__457910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457910):map__457910);
var o = cljs.core.get.call(null,map__457910__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var map__457911 = cljs.core.get.call(null,map__457910__$1,new cljs.core.Keyword(null,"event","event",301435442));
var map__457911__$1 = ((((!((map__457911 == null)))?((((map__457911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457911):map__457911);
var p1 = cljs.core.get.call(null,map__457911__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t1 = cljs.core.get.call(null,map__457911__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var map__457912 = p__457900;
var map__457912__$1 = ((((!((map__457912 == null)))?((((map__457912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457912):map__457912);
var p2 = cljs.core.get.call(null,map__457912__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var t2 = cljs.core.get.call(null,map__457912__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
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
dynomics.ui.ui.deselect_node = (function dynomics$ui$ui$deselect_node(state,p__457917){
var map__457920 = p__457917;
var map__457920__$1 = ((((!((map__457920 == null)))?((((map__457920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457920):map__457920);
var path = cljs.core.get.call(null,map__457920__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.disj,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),false);
});
/**
 * Deselect curve
 */
dynomics.ui.ui.deselect_curve = (function dynomics$ui$ui$deselect_curve(state,p__457922){
var map__457925 = p__457922;
var map__457925__$1 = ((((!((map__457925 == null)))?((((map__457925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457925):map__457925);
var p = cljs.core.get.call(null,map__457925__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__457925__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.assoc.call(null,dynomics.space.core.deselect_curve.call(null,state,path),new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),false,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
dynomics.ui.ui.hide_context_menu = (function dynomics$ui$ui$hide_context_menu(state,event){
return cljs.core.assoc.call(null,dynomics.ui.ui.deselect_object.call(null,state,event),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),null,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false);
});
dynomics.ui.ui.show_context_menu = (function dynomics$ui$ui$show_context_menu(state,p__457927){
var map__457933 = p__457927;
var map__457933__$1 = ((((!((map__457933 == null)))?((((map__457933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457933):map__457933);
var event = map__457933__$1;
var ep = cljs.core.get.call(null,map__457933__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var mp = cljs.core.get.call(null,map__457933__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var o = cljs.core.get.call(null,map__457933__$1,new cljs.core.Keyword(null,"noun","noun",185846460));
var context_menu = cljs.core.get.call(null,map__457933__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
cljs.core.println.call(null,"show cm",o);

return cljs.core.assoc.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.select_object.call(null,state,event),cljs.core.map.call(null,((function (map__457933,map__457933__$1,event,ep,mp,o,context_menu){
return (function (p__457935){
var map__457936 = p__457935;
var map__457936__$1 = ((((!((map__457936 == null)))?((((map__457936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457936):map__457936);
var option = map__457936__$1;
var f = cljs.core.get.call(null,map__457936__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.truth_(f)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.assoc,option,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.deref.call(null,f)], true, false);
} else {
return option;
}
});})(map__457933,map__457933__$1,event,ep,mp,o,context_menu))
,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null)))),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__35191__auto__ = ep;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return mp;
}
})(),new cljs.core.Keyword(null,"object","object",1474613949),o,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"options","options",99638489),o], null))], null));
});
dynomics.ui.ui.toggle_context_menu = (function dynomics$ui$ui$toggle_context_menu(p__457938,event){
var map__457941 = p__457938;
var map__457941__$1 = ((((!((map__457941 == null)))?((((map__457941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457941):map__457941);
var state = map__457941__$1;
var context_menu = cljs.core.get.call(null,map__457941__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
if(cljs.core.truth_(context_menu)){
return dynomics.ui.ui.hide_context_menu.call(null,state,event);
} else {
return dynomics.ui.ui.show_context_menu.call(null,state,event);
}
});
dynomics.ui.ui.toggle_left_panel = (function dynomics$ui$ui$toggle_left_panel(p__457943,event){
var map__457946 = p__457943;
var map__457946__$1 = ((((!((map__457946 == null)))?((((map__457946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457946):map__457946);
var state = map__457946__$1;
var left_panel_QMARK_ = cljs.core.get.call(null,map__457946__$1,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317),cljs.core.not.call(null,left_panel_QMARK_));
});
dynomics.ui.ui.switch_styles = (function dynomics$ui$ui$switch_styles(p__457948,_){
var map__457951 = p__457948;
var map__457951__$1 = ((((!((map__457951 == null)))?((((map__457951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457951):map__457951);
var state = map__457951__$1;
var style = cljs.core.get.call(null,map__457951__$1,new cljs.core.Keyword(null,"style","style",-496642736));
cljs.core.println.call(null,"switch style",style);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"light","light",1918998747)))?new cljs.core.Keyword(null,"dark","dark",1818973999):new cljs.core.Keyword(null,"light","light",1918998747)));
});
dynomics.ui.ui.relative_to_cursor = (function dynomics$ui$ui$relative_to_cursor(var_args){
var args457953 = [];
var len__36260__auto___457956 = arguments.length;
var i__36261__auto___457957 = (0);
while(true){
if((i__36261__auto___457957 < len__36260__auto___457956)){
args457953.push((arguments[i__36261__auto___457957]));

var G__457958 = (i__36261__auto___457957 + (1));
i__36261__auto___457957 = G__457958;
continue;
} else {
}
break;
}

var G__457955 = args457953.length;
switch (G__457955) {
case 3:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return dynomics.ui.ui.relative_to_cursor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args457953.length)].join('')));

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
dynomics.ui.ui.move_objects = (function dynomics$ui$ui$move_objects(p__457960,p__457961){
var map__457971 = p__457960;
var map__457971__$1 = ((((!((map__457971 == null)))?((((map__457971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457971):map__457971);
var state = map__457971__$1;
var map__457972 = cljs.core.get.call(null,map__457971__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__457972__$1 = ((((!((map__457972 == null)))?((((map__457972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457972):map__457972);
var space = map__457972__$1;
var selected_nodes = cljs.core.get.call(null,map__457972__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var zoom = cljs.core.get.call(null,map__457972__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__457973 = p__457961;
var map__457973__$1 = ((((!((map__457973 == null)))?((((map__457973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457973):map__457973);
var vec__457974 = cljs.core.get.call(null,map__457973__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__457974,(0),null);
var y = cljs.core.nth.call(null,vec__457974,(1),null);
var ck = cljs.core.get.call(null,map__457973__$1,new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989));
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,((function (map__457971,map__457971__$1,state,map__457972,map__457972__$1,space,selected_nodes,zoom,map__457973,map__457973__$1,vec__457974,x,y,ck){
return (function (r,path){
var tfn = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300),cljs.core.get_in.call(null,state,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"point","point",1813198264))))?(cljs.core.truth_(ck)?dynomics.space.core.to_space:dynomics.space.core.mirror_node):((function (map__457971,map__457971__$1,state,map__457972,map__457972__$1,space,selected_nodes,zoom,map__457973,map__457973__$1,vec__457974,x,y,ck){
return (function (p,pth,_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,dynomics.ui.ui.relative_to_cursor.call(null,p,pth,state)], null)], null);
});})(map__457971,map__457971__$1,state,map__457972,map__457972__$1,space,selected_nodes,zoom,map__457973,map__457973__$1,vec__457974,x,y,ck))
);
return cljs.core.reduce.call(null,((function (tfn,map__457971,map__457971__$1,state,map__457972,map__457972__$1,space,selected_nodes,zoom,map__457973,map__457973__$1,vec__457974,x,y,ck){
return (function (r__$1,p__457978){
var vec__457979 = p__457978;
var cpath = cljs.core.nth.call(null,vec__457979,(0),null);
var cpoint = cljs.core.nth.call(null,vec__457979,(1),null);
return cljs.core.assoc_in.call(null,r__$1,cljs.core.conj.call(null,cpath,new cljs.core.Keyword(null,"position","position",-2011731912)),cpoint);
});})(tfn,map__457971,map__457971__$1,state,map__457972,map__457972__$1,space,selected_nodes,zoom,map__457973,map__457973__$1,vec__457974,x,y,ck))
,r,tfn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),path,space));
});})(map__457971,map__457971__$1,state,map__457972,map__457972__$1,space,selected_nodes,zoom,map__457973,map__457973__$1,vec__457974,x,y,ck))
,state,selected_nodes),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Pan
 */
dynomics.ui.ui.pan = (function dynomics$ui$ui$pan(p__457980,p__457981){
var map__457987 = p__457980;
var map__457987__$1 = ((((!((map__457987 == null)))?((((map__457987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457987):map__457987);
var state = map__457987__$1;
var pp = cljs.core.get.call(null,map__457987__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var pan__$1 = cljs.core.get.call(null,map__457987__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__457987__$1,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305));
var zoom = cljs.core.get.call(null,map__457987__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__457988 = p__457981;
var map__457988__$1 = ((((!((map__457988 == null)))?((((map__457988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457988):map__457988);
var p = cljs.core.get.call(null,map__457988__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var pl = cljs.core.get.call(null,map__457988__$1,new cljs.core.Keyword(null,"position-local","position-local",250779944));
var vec__457989 = cljs.core.get.call(null,map__457988__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__457989,(0),null);
var p2 = cljs.core.nth.call(null,vec__457989,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"pan","pan",-307712792),cljs.core.map.call(null,cljs.core._,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) / zoom)),p2),sp));
});
/**
 * Start zoom
 */
dynomics.ui.ui.start_zoom = (function dynomics$ui$ui$start_zoom(p__457992,p__457993){
var map__457999 = p__457992;
var map__457999__$1 = ((((!((map__457999 == null)))?((((map__457999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__457999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__457999):map__457999);
var state = map__457999__$1;
var zoom = cljs.core.get.call(null,map__457999__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pz = cljs.core.get.call(null,map__457999__$1,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303));
var map__458000 = p__457993;
var map__458000__$1 = ((((!((map__458000 == null)))?((((map__458000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458000):map__458000);
var p = cljs.core.get.call(null,map__458000__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__458001 = cljs.core.get.call(null,map__458000__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__458001,(0),null);
var p2 = cljs.core.nth.call(null,vec__458001,(1),null);
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
dynomics.ui.ui.zoom = (function dynomics$ui$ui$zoom(p__458004,p__458005){
var map__458011 = p__458004;
var map__458011__$1 = ((((!((map__458011 == null)))?((((map__458011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458011):map__458011);
var state = map__458011__$1;
var zoom__$1 = cljs.core.get.call(null,map__458011__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pan = cljs.core.get.call(null,map__458011__$1,new cljs.core.Keyword(null,"pan","pan",-307712792));
var sp = cljs.core.get.call(null,map__458011__$1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492));
var map__458012 = p__458005;
var map__458012__$1 = ((((!((map__458012 == null)))?((((map__458012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458012):map__458012);
var dy = cljs.core.get.call(null,map__458012__$1,new cljs.core.Keyword(null,"deltaY","deltaY",-879493966));
var p = cljs.core.get.call(null,map__458012__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__458013 = cljs.core.get.call(null,map__458012__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__458013,(0),null);
var p2 = cljs.core.nth.call(null,vec__458013,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(function (){var x__35522__auto__ = 0.5;
var y__35523__auto__ = (zoom__$1 + (-0.01 * dy));
return ((x__35522__auto__ > y__35523__auto__) ? x__35522__auto__ : y__35523__auto__);
})(),new cljs.core.Keyword(null,"pan","pan",-307712792),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,(-1)),sp),new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),p2);
});
/**
 * Start move objects
 */
dynomics.ui.ui.start_move = (function dynomics$ui$ui$start_move(p__458016,event){
var map__458019 = p__458016;
var map__458019__$1 = ((((!((map__458019 == null)))?((((map__458019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458019):map__458019);
var state = map__458019__$1;
var pan_zoom_QMARK_ = cljs.core.get.call(null,map__458019__$1,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true);
});
/**
 * Move
 */
dynomics.ui.ui.move_cursor = (function dynomics$ui$ui$move_cursor(p__458021,p__458022){
var map__458028 = p__458021;
var map__458028__$1 = ((((!((map__458028 == null)))?((((map__458028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458028):map__458028);
var state = map__458028__$1;
var zoom = cljs.core.get.call(null,map__458028__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__458029 = p__458022;
var map__458029__$1 = ((((!((map__458029 == null)))?((((map__458029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458029):map__458029);
var p = cljs.core.get.call(null,map__458029__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__458030 = cljs.core.get.call(null,map__458029__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__458030,(0),null);
var p2 = cljs.core.nth.call(null,vec__458030,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p1);
});
/**
 * Start pan
 */
dynomics.ui.ui.start_pan = (function dynomics$ui$ui$start_pan(p__458033,p__458034){
var map__458040 = p__458033;
var map__458040__$1 = ((((!((map__458040 == null)))?((((map__458040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458040):map__458040);
var state = map__458040__$1;
var zoom = cljs.core.get.call(null,map__458040__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var map__458041 = p__458034;
var map__458041__$1 = ((((!((map__458041 == null)))?((((map__458041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458041):map__458041);
var p = cljs.core.get.call(null,map__458041__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__458042 = cljs.core.get.call(null,map__458041__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var p1 = cljs.core.nth.call(null,vec__458042,(0),null);
var p2 = cljs.core.nth.call(null,vec__458042,(1),null);
cljs.core.println.call(null,"start pan",p,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492).cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),true,new cljs.core.Keyword(null,"pan-offset","pan-offset",1324630331),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),p1);
});
/**
 * End pan
 */
dynomics.ui.ui.end_pan = (function dynomics$ui$ui$end_pan(state,p__458045){
var map__458048 = p__458045;
var map__458048__$1 = ((((!((map__458048 == null)))?((((map__458048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458048):map__458048);
var p = cljs.core.get.call(null,map__458048__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),false,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),p);
});
/**
 * Add node
 */
dynomics.ui.ui.add_node = (function dynomics$ui$ui$add_node(state,p__458050){
var map__458053 = p__458050;
var map__458053__$1 = ((((!((map__458053 == null)))?((((map__458053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458053):map__458053);
var p = cljs.core.get.call(null,map__458053__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p));
});
dynomics.ui.ui.connect_nodes = (function dynomics$ui$ui$connect_nodes(state,p__458055){
var map__458059 = p__458055;
var map__458059__$1 = ((((!((map__458059 == null)))?((((map__458059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458059):map__458059);
var vec__458060 = cljs.core.get.call(null,map__458059__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__458060,(0),null);
var y = cljs.core.nth.call(null,vec__458060,(1),null);
var id = cljs.core.get.call(null,map__458059__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__458059__$1,new cljs.core.Keyword(null,"path","path",-188191168));
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
dynomics.ui.ui.set_node_type = (function dynomics$ui$ui$set_node_type(state,p__458062){
var map__458065 = p__458062;
var map__458065__$1 = ((((!((map__458065 == null)))?((((map__458065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458065):map__458065);
var id = cljs.core.get.call(null,map__458065__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return dynomics.space.core.set_node_type.call(null,id).call(null,state);
});
dynomics.ui.ui.make_new_node = (function dynomics$ui$ui$make_new_node(p__458067,p__458068){
var map__458075 = p__458067;
var map__458075__$1 = ((((!((map__458075 == null)))?((((map__458075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458075):map__458075);
var state = map__458075__$1;
var making_node_QMARK_ = cljs.core.get.call(null,map__458075__$1,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115));
var map__458076 = p__458068;
var map__458076__$1 = ((((!((map__458076 == null)))?((((map__458076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458076):map__458076);
var event = map__458076__$1;
var p = cljs.core.get.call(null,map__458076__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var id = cljs.core.get.call(null,map__458076__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.println.call(null,"make node type",id);

if(cljs.core.truth_(making_node_QMARK_)){
return state;
} else {
var map__458079 = dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),true,new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),true,new cljs.core.Keyword(null,"node-position","node-position",-542959703),p,new cljs.core.Keyword(null,"selected-node-type","selected-node-type",-1717725489),id));
var map__458079__$1 = ((((!((map__458079 == null)))?((((map__458079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458079):map__458079);
var s = map__458079__$1;
var n = cljs.core.get.call(null,map__458079__$1,new cljs.core.Keyword(null,"last-node-added","last-node-added",1825356673));
return dynomics.ui.ui.select_node_for_move.call(null,s,cljs.core.assoc.call(null,event,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),n], null)));
}
});
/**
 * Returns a function var to handle the given event
 */
dynomics.ui.ui.match_event = (function dynomics$ui$ui$match_event(state,event){
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || (event.cljs$core$ILookup$))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_shift_key_QMARK___458307 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___458307 === true)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select","dynomics.ui.ui/toggle-select",-1932459058,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select","toggle-select",-120958040,null),"src/dynomics/ui/ui.cljs",16,1,255,257,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select)?dynomics.ui.ui.toggle_select.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458476){if((e458476 instanceof Error)){
var e__39291__auto__ = e458476;
if((e__39291__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto__;
}
} else {
throw e458476;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458475){if((e458475 instanceof Error)){
var e__39291__auto__ = e458475;
if((e__39291__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto__;
}
} else {
throw e458475;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458365){if((e458365 instanceof Error)){
var e__39291__auto__ = e458365;
if((e__39291__auto__ === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_alt_key_QMARK___458308 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"alt-key?","alt-key?",234827606),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_alt_key_QMARK___458308 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_active;},new cljs.core.Symbol("dynomics.ui.ui","toggle-active","dynomics.ui.ui/toggle-active",167070151,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-active","toggle-active",368885345,null),"src/dynomics/ui/ui.cljs",16,1,278,280,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),"(de)activate"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], true, false)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_active)?dynomics.ui.ui.toggle_active.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458474){if((e458474 instanceof Error)){
var e__39291__auto____$1 = e458474;
if((e__39291__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$1;
}
} else {
throw e458474;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458464){if((e458464 instanceof Error)){
var e__39291__auto____$1 = e458464;
if((e__39291__auto____$1 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
try{var event_button__458305 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__458305 === (0))){
try{var event_id__458306 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_id__458306,new cljs.core.Keyword(null,"add-node-button","add-node-button",-722090690))){
return new cljs.core.Var(function(){return dynomics.ui.ui.add_node;},new cljs.core.Symbol("dynomics.ui.ui","add-node","dynomics.ui.ui/add-node",175703617,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"add-node","add-node",-428722461,null),"src/dynomics/ui/ui.cljs",11,1,537,541,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Add node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null)], null)),"Add node",(cljs.core.truth_(dynomics.ui.ui.add_node)?dynomics.ui.ui.add_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458473){if((e458473 instanceof Error)){
var e__39291__auto____$2 = e458473;
if((e__39291__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$2;
}
} else {
throw e458473;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458472){if((e458472 instanceof Error)){
var e__39291__auto____$2 = e458472;
if((e__39291__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$2;
}
} else {
throw e458472;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458465){if((e458465 instanceof Error)){
var e__39291__auto____$2 = e458465;
if((e__39291__auto____$2 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_button__458305 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__458305 === (2))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"src/dynomics/ui/ui.cljs",20,1,390,392,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458471){if((e458471 instanceof Error)){
var e__39291__auto____$3 = e458471;
if((e__39291__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$3;
}
} else {
throw e458471;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458466){if((e458466 instanceof Error)){
var e__39291__auto____$3 = e458466;
if((e__39291__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_button__458305 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__458305 === (2))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"src/dynomics/ui/ui.cljs",20,1,390,392,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458470){if((e458470 instanceof Error)){
var e__39291__auto____$4 = e458470;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$4;
}
} else {
throw e458470;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458467){if((e458467 instanceof Error)){
var e__39291__auto____$4 = e458467;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"space","space",348133475))){
try{var event_button__458305 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_button__458305 === (2))){
return new cljs.core.Var(function(){return dynomics.ui.ui.show_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","show-context-menu","dynomics.ui.ui/show-context-menu",-497950288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"show-context-menu","show-context-menu",374878238,null),"src/dynomics/ui/ui.cljs",20,1,390,392,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"description","description",-1428560544),"Show context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"ep","ep",-1371606811,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.Symbol(null,"mp","mp",1159923684,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.show_context_menu)?dynomics.ui.ui.show_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458469){if((e458469 instanceof Error)){
var e__39291__auto____$5 = e458469;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e458469;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458468){if((e458468 instanceof Error)){
var e__39291__auto____$5 = e458468;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e458468;

}
}} else {
throw e__39291__auto____$4;
}
} else {
throw e458467;

}
}} else {
throw e__39291__auto____$3;
}
} else {
throw e458466;

}
}} else {
throw e__39291__auto____$2;
}
} else {
throw e458465;

}
}} else {
throw e__39291__auto____$1;
}
} else {
throw e458464;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458366){if((e458366 instanceof Error)){
var e__39291__auto____$1 = e458366;
if((e__39291__auto____$1 === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964))){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451))){
return new cljs.core.Var(function(){return dynomics.ui.ui.hide_context_menu;},new cljs.core.Symbol("dynomics.ui.ui","hide-context-menu","dynomics.ui.ui/hide-context-menu",-829551965,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"hide-context-menu","hide-context-menu",-210420991,null),"src/dynomics/ui/ui.cljs",20,1,381,383,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Hide context menu"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.hide_context_menu)?dynomics.ui.ui.hide_context_menu.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458463){if((e458463 instanceof Error)){
var e__39291__auto____$2 = e458463;
if((e__39291__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$2;
}
} else {
throw e458463;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458367){if((e458367 instanceof Error)){
var e__39291__auto____$2 = e458367;
if((e__39291__auto____$2 === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_shift_key_QMARK___458307 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___458307 === false)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_node_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-node-for-move","dynomics.ui.ui/select-node-for-move",1244197998,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-node-for-move","select-node-for-move",-1238252352,null),"src/dynomics/ui/ui.cljs",23,1,299,303,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),"Select node to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),"Select node to move",(cljs.core.truth_(dynomics.ui.ui.select_node_for_move)?dynomics.ui.ui.select_node_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458460){if((e458460 instanceof Error)){
var e__39291__auto____$3 = e458460;
if((e__39291__auto____$3 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__458303 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__458303 === (1))){
return new cljs.core.Var(function(){return dynomics.ui.ui.select_curve_for_move;},new cljs.core.Symbol("dynomics.ui.ui","select-curve-for-move","dynomics.ui.ui/select-curve-for-move",67176701,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"select-curve-for-move","select-curve-for-move",268851359,null),"src/dynomics/ui/ui.cljs",24,1,314,318,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-curve","phase-space-curve",-744456807),new cljs.core.Keyword(null,"description","description",-1428560544),"Select curve to move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),"Select curve to move",(cljs.core.truth_(dynomics.ui.ui.select_curve_for_move)?dynomics.ui.ui.select_curve_for_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458462){if((e458462 instanceof Error)){
var e__39291__auto____$4 = e458462;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$4;
}
} else {
throw e458462;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458461){if((e458461 instanceof Error)){
var e__39291__auto____$4 = e458461;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$4;
}
} else {
throw e458461;

}
}} else {
throw e__39291__auto____$3;
}
} else {
throw e458460;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458459){if((e458459 instanceof Error)){
var e__39291__auto____$3 = e458459;
if((e__39291__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$3;
}
} else {
throw e458459;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458368){if((e458368 instanceof Error)){
var e__39291__auto____$3 = e458368;
if((e__39291__auto____$3 === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_shift_key_QMARK___458307 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___458307 === false)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"node","node",581201198))){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_node;},new cljs.core.Symbol("dynomics.ui.ui","deselect-node","dynomics.ui.ui/deselect-node",-1231289549,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-node","deselect-node",-2105191523,null),"src/dynomics/ui/ui.cljs",16,1,357,361,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),"Deselect node",(cljs.core.truth_(dynomics.ui.ui.deselect_node)?dynomics.ui.ui.deselect_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458457){if((e458457 instanceof Error)){
var e__39291__auto____$4 = e458457;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"curve","curve",-569677866))){
return new cljs.core.Var(function(){return dynomics.ui.ui.deselect_curve;},new cljs.core.Symbol("dynomics.ui.ui","deselect-curve","dynomics.ui.ui/deselect-curve",-758858976,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"deselect-curve","deselect-curve",-29652158,null),"src/dynomics/ui/ui.cljs",17,1,369,373,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Deselect curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),"Deselect curve",(cljs.core.truth_(dynomics.ui.ui.deselect_curve)?dynomics.ui.ui.deselect_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458458){if((e458458 instanceof Error)){
var e__39291__auto____$5 = e458458;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e458458;

}
}} else {
throw e__39291__auto____$4;
}
} else {
throw e458457;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458456){if((e458456 instanceof Error)){
var e__39291__auto____$4 = e458456;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$4;
}
} else {
throw e458456;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458369){if((e458369 instanceof Error)){
var e__39291__auto____$4 = e458369;
if((e__39291__auto____$4 === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__458303 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__458303 === (1))){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"node","node",581201198))){
try{var event_shift_key_QMARK___458307 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___458307 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___458313 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___458313 === false)){
try{var state_moving_things_QMARK___458314 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___458314 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"src/dynomics/ui/ui.cljs",13,1,497,501,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pan-zoom?","pan-zoom?",488009224,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458455){if((e458455 instanceof Error)){
var e__39291__auto____$5 = e458455;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e458455;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458454){if((e458454 instanceof Error)){
var e__39291__auto____$5 = e458454;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e458454;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458452){if((e458452 instanceof Error)){
var e__39291__auto____$5 = e458452;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e458452;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458451){if((e458451 instanceof Error)){
var e__39291__auto____$5 = e458451;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$5;
}
} else {
throw e458451;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458423){if((e458423 instanceof Error)){
var e__39291__auto____$5 = e458423;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_shift_key_QMARK___458307 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___458307 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___458318 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___458318 === false)){
try{var state_moving_things_QMARK___458319 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___458319 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"src/dynomics/ui/ui.cljs",13,1,497,501,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pan-zoom?","pan-zoom?",488009224,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458450){if((e458450 instanceof Error)){
var e__39291__auto____$6 = e458450;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458450;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458449){if((e458449 instanceof Error)){
var e__39291__auto____$6 = e458449;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458449;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458447){if((e458447 instanceof Error)){
var e__39291__auto____$6 = e458447;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458447;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458446){if((e458446 instanceof Error)){
var e__39291__auto____$6 = e458446;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458446;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458424){if((e458424 instanceof Error)){
var e__39291__auto____$6 = e458424;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"space","space",348133475))){
try{var event_shift_key_QMARK___458307 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___458307 === false)){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___458323 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___458323 === false)){
try{var state_moving_things_QMARK___458324 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___458324 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_move;},new cljs.core.Symbol("dynomics.ui.ui","start-move","dynomics.ui.ui/start-move",-1875395781,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-move","start-move",-331822183,null),"src/dynomics/ui/ui.cljs",13,1,497,501,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pan-zoom?","pan-zoom?",488009224,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),"Start move objects",(cljs.core.truth_(dynomics.ui.ui.start_move)?dynomics.ui.ui.start_move.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458445){if((e458445 instanceof Error)){
var e__39291__auto____$7 = e458445;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e458445;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458444){if((e458444 instanceof Error)){
var e__39291__auto____$7 = e458444;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e458444;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458442){if((e458442 instanceof Error)){
var e__39291__auto____$7 = e458442;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e458442;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458441){if((e458441 instanceof Error)){
var e__39291__auto____$7 = e458441;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e458441;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458425){if((e458425 instanceof Error)){
var e__39291__auto____$7 = e458425;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___458328 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___458328 === false)){
try{var state_moving_things_QMARK___458329 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___458329 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"src/dynomics/ui/ui.cljs",15,1,439,443,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458440){if((e458440 instanceof Error)){
var e__39291__auto____$8 = e458440;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e458440;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458439){if((e458439 instanceof Error)){
var e__39291__auto____$8 = e458439;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e458439;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458437){if((e458437 instanceof Error)){
var e__39291__auto____$8 = e458437;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e458437;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458426){if((e458426 instanceof Error)){
var e__39291__auto____$8 = e458426;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___458333 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___458333 === false)){
try{var state_moving_things_QMARK___458334 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___458334 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"src/dynomics/ui/ui.cljs",15,1,439,443,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458436){if((e458436 instanceof Error)){
var e__39291__auto____$9 = e458436;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e458436;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458435){if((e458435 instanceof Error)){
var e__39291__auto____$9 = e458435;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e458435;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458433){if((e458433 instanceof Error)){
var e__39291__auto____$9 = e458433;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e458433;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458427){if((e458427 instanceof Error)){
var e__39291__auto____$9 = e458427;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___458338 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___458338 === false)){
try{var state_moving_things_QMARK___458339 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___458339 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_objects;},new cljs.core.Symbol("dynomics.ui.ui","move-objects","dynomics.ui.ui/move-objects",1652444350,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-objects","move-objects",1315020048,null),"src/dynomics/ui/ui.cljs",15,1,439,443,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"space","space",1988665002,null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"ck","ck",929899510,null),new cljs.core.Keyword(null,"control-key?","control-key?",-1148415989)], true, false)], null)),"Move objects",(cljs.core.truth_(dynomics.ui.ui.move_objects)?dynomics.ui.ui.move_objects.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458432){if((e458432 instanceof Error)){
var e__39291__auto____$10 = e458432;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e458432;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458431){if((e458431 instanceof Error)){
var e__39291__auto____$10 = e458431;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e458431;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458429){if((e458429 instanceof Error)){
var e__39291__auto____$10 = e458429;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e458429;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458428){if((e458428 instanceof Error)){
var e__39291__auto____$10 = e458428;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e458428;

}
}} else {
throw e__39291__auto____$9;
}
} else {
throw e458427;

}
}} else {
throw e__39291__auto____$8;
}
} else {
throw e458426;

}
}} else {
throw e__39291__auto____$7;
}
} else {
throw e458425;

}
}} else {
throw e__39291__auto____$6;
}
} else {
throw e458424;

}
}} else {
throw e__39291__auto____$5;
}
} else {
throw e458423;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458409){if((e458409 instanceof Error)){
var e__39291__auto____$5 = e458409;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
try{var event_buttons__458303 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__458303 === (0))){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"node","node",581201198))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___458342 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___458342 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"src/dynomics/ui/ui.cljs",14,1,505,509,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458422){if((e458422 instanceof Error)){
var e__39291__auto____$6 = e458422;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458422;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458420){if((e458420 instanceof Error)){
var e__39291__auto____$6 = e458420;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458420;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458411){if((e458411 instanceof Error)){
var e__39291__auto____$6 = e458411;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___458345 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___458345 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"src/dynomics/ui/ui.cljs",14,1,505,509,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458419){if((e458419 instanceof Error)){
var e__39291__auto____$7 = e458419;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e458419;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458417){if((e458417 instanceof Error)){
var e__39291__auto____$7 = e458417;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e458417;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458412){if((e458412 instanceof Error)){
var e__39291__auto____$7 = e458412;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_moving_things_QMARK___458348 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___458348 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.move_cursor;},new cljs.core.Symbol("dynomics.ui.ui","move-cursor","dynomics.ui.ui/move-cursor",320571038,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"move-cursor","move-cursor",-16460176,null),"src/dynomics/ui/ui.cljs",14,1,505,509,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Move cursor"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Move",(cljs.core.truth_(dynomics.ui.ui.move_cursor)?dynomics.ui.ui.move_cursor.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458416){if((e458416 instanceof Error)){
var e__39291__auto____$8 = e458416;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e458416;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458414){if((e458414 instanceof Error)){
var e__39291__auto____$8 = e458414;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e458414;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458413){if((e458413 instanceof Error)){
var e__39291__auto____$8 = e458413;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e458413;

}
}} else {
throw e__39291__auto____$7;
}
} else {
throw e458412;

}
}} else {
throw e__39291__auto____$6;
}
} else {
throw e458411;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458410){if((e458410 instanceof Error)){
var e__39291__auto____$6 = e458410;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458410;

}
}} else {
throw e__39291__auto____$5;
}
} else {
throw e458409;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458370){if((e458370 instanceof Error)){
var e__39291__auto____$5 = e458370;
if((e__39291__auto____$5 === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_buttons__458303 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__458303 === (1))){
try{var event_shift_key_QMARK___458307 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___458307 === false)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___458352 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___458352 === false)){
try{var state_moving_things_QMARK___458353 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"moving-things?","moving-things?",-1652033846),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_moving_things_QMARK___458353 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_pan;},new cljs.core.Symbol("dynomics.ui.ui","start-pan","dynomics.ui.ui/start-pan",-310203637,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-pan","start-pan",-778345239,null),"src/dynomics/ui/ui.cljs",12,1,515,519,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Start pan",(cljs.core.truth_(dynomics.ui.ui.start_pan)?dynomics.ui.ui.start_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458408){if((e458408 instanceof Error)){
var e__39291__auto____$6 = e458408;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458408;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458407){if((e458407 instanceof Error)){
var e__39291__auto____$6 = e458407;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458407;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458405){if((e458405 instanceof Error)){
var e__39291__auto____$6 = e458405;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458405;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458404){if((e458404 instanceof Error)){
var e__39291__auto____$6 = e458404;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458404;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458403){if((e458403 instanceof Error)){
var e__39291__auto____$6 = e458403;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458403;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458402){if((e458402 instanceof Error)){
var e__39291__auto____$6 = e458402;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$6;
}
} else {
throw e458402;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458371){if((e458371 instanceof Error)){
var e__39291__auto____$6 = e458371;
if((e__39291__auto____$6 === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__458303 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__458303 === (1))){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___458356 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___458356 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.pan;},new cljs.core.Symbol("dynomics.ui.ui","pan","dynomics.ui.ui/pan",1533936577,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"pan","pan",1332818735,null),"src/dynomics/ui/ui.cljs",6,1,458,462,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"pp","pp",927842543,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position-at-start-of-pan","mouse-position-at-start-of-pan",-1805194305),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Keyword(null,"position-local","position-local",250779944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Pan",(cljs.core.truth_(dynomics.ui.ui.pan)?dynomics.ui.ui.pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458401){if((e458401 instanceof Error)){
var e__39291__auto____$7 = e458401;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e458401;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458399){if((e458399 instanceof Error)){
var e__39291__auto____$7 = e458399;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e458399;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458398){if((e458398 instanceof Error)){
var e__39291__auto____$7 = e458398;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e458398;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458397){if((e458397 instanceof Error)){
var e__39291__auto____$7 = e458397;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$7;
}
} else {
throw e458397;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458372){if((e458372 instanceof Error)){
var e__39291__auto____$7 = e458372;
if((e__39291__auto____$7 === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439))){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___458359 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___458359 === false)){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"src/dynomics/ui/ui.cljs",13,1,473,477,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458394){if((e458394 instanceof Error)){
var e__39291__auto____$8 = e458394;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___458359 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,state_pan_zoom_QMARK___458359,new cljs.core.Keyword(null,"starting","starting",-1852141466))){
return new cljs.core.Var(function(){return dynomics.ui.ui.start_zoom;},new cljs.core.Symbol("dynomics.ui.ui","start-zoom","dynomics.ui.ui/start-zoom",-413183448,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"start-zoom","start-zoom",-748395954,null),"src/dynomics/ui/ui.cljs",13,1,473,477,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Start zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pz","pz",-67109147,null),new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Start zoom",(cljs.core.truth_(dynomics.ui.ui.start_zoom)?dynomics.ui.ui.start_zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458395){if((e458395 instanceof Error)){
var e__39291__auto____$9 = e458395;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
try{var state_pan_zoom_QMARK___458359 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___458359 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.zoom;},new cljs.core.Symbol("dynomics.ui.ui","zoom","dynomics.ui.ui/zoom",-926900565,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),"src/dynomics/ui/ui.cljs",7,1,484,488,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true,new cljs.core.Keyword(null,"description","description",-1428560544),"Zoom"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"zoom","zoom",-186955511,null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"dy","dy",-934888526,null),new cljs.core.Keyword(null,"deltaY","deltaY",-879493966),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1","p1",703771573,null),new cljs.core.Symbol(null,"p2","p2",-1748935128,null)], null),new cljs.core.Keyword(null,"positions","positions",-1380538434)], true, false)], null)),"Zoom",(cljs.core.truth_(dynomics.ui.ui.zoom)?dynomics.ui.ui.zoom.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458396){if((e458396 instanceof Error)){
var e__39291__auto____$10 = e458396;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e458396;

}
}} else {
throw e__39291__auto____$9;
}
} else {
throw e458395;

}
}} else {
throw e__39291__auto____$8;
}
} else {
throw e458394;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458392){if((e458392 instanceof Error)){
var e__39291__auto____$8 = e458392;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e458392;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458391){if((e458391 instanceof Error)){
var e__39291__auto____$8 = e458391;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$8;
}
} else {
throw e458391;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458373){if((e458373 instanceof Error)){
var e__39291__auto____$8 = e458373;
if((e__39291__auto____$8 === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135))){
try{var event_buttons__458303 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__458303 === (0))){
try{var event_shift_key_QMARK___458307 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___458307 === false)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"space","space",348133475))){
try{if(((!((state == null)))?((((state.cljs$lang$protocol_mask$partition0$ & (256))) || (state.cljs$core$ILookup$))?true:(((!state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,state))){
try{var state_pan_zoom_QMARK___458362 = cljs.core.get.call(null,state,new cljs.core.Keyword(null,"pan-zoom?","pan-zoom?",-1152522303),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((state_pan_zoom_QMARK___458362 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.end_pan;},new cljs.core.Symbol("dynomics.ui.ui","end-pan","dynomics.ui.ui/end-pan",-5094220,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"end-pan","end-pan",-474409646,null),"src/dynomics/ui/ui.cljs",10,1,527,531,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"End pan"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912)], null)], null)),"End pan",(cljs.core.truth_(dynomics.ui.ui.end_pan)?dynomics.ui.ui.end_pan.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458390){if((e458390 instanceof Error)){
var e__39291__auto____$9 = e458390;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e458390;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458388){if((e458388 instanceof Error)){
var e__39291__auto____$9 = e458388;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e458388;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458387){if((e458387 instanceof Error)){
var e__39291__auto____$9 = e458387;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e458387;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458386){if((e458386 instanceof Error)){
var e__39291__auto____$9 = e458386;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e458386;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458385){if((e458385 instanceof Error)){
var e__39291__auto____$9 = e458385;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$9;
}
} else {
throw e458385;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458374){if((e458374 instanceof Error)){
var e__39291__auto____$9 = e458374;
if((e__39291__auto____$9 === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567))){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"curve","curve",-569677866))){
try{var event_buttons__458303 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__458303 === (1))){
try{var event_shift_key_QMARK___458307 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"shift-key?","shift-key?",-1606317163),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_shift_key_QMARK___458307 === true)){
return new cljs.core.Var(function(){return dynomics.ui.ui.toggle_select_curve;},new cljs.core.Symbol("dynomics.ui.ui","toggle-select-curve","dynomics.ui.ui/toggle-select-curve",1188080702,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"toggle-select-curve","toggle-select-curve",1792572560,null),"src/dynomics/ui/ui.cljs",22,1,271,273,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),"(de)select curve"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Keyword(null,"path","path",-188191168)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.toggle_select_curve)?dynomics.ui.ui.toggle_select_curve.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458384){if((e458384 instanceof Error)){
var e__39291__auto____$10 = e458384;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e458384;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458383){if((e458383 instanceof Error)){
var e__39291__auto____$10 = e458383;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$10;
}
} else {
throw e458383;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458381){if((e458381 instanceof Error)){
var e__39291__auto____$10 = e458381;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.set_node_type;},new cljs.core.Symbol("dynomics.ui.ui","set-node-type","dynomics.ui.ui/set-node-type",776460294,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"set-node-type","set-node-type",306219192,null),"src/dynomics/ui/ui.cljs",16,1,576,580,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"description","description",-1428560544),"Set node type "], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.set_node_type)?dynomics.ui.ui.set_node_type.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458382){if((e458382 instanceof Error)){
var e__39291__auto____$11 = e458382;
if((e__39291__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$11;
}
} else {
throw e458382;

}
}} else {
throw e__39291__auto____$10;
}
} else {
throw e458381;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458375){if((e458375 instanceof Error)){
var e__39291__auto____$10 = e458375;
if((e__39291__auto____$10 === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223))){
try{var event_buttons__458303 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_buttons__458303 === (1))){
try{var event_noun__458309 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"noun","noun",185846460),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_noun__458309,new cljs.core.Keyword(null,"node-type","node-type",129492462))){
return new cljs.core.Var(function(){return dynomics.ui.ui.make_new_node;},new cljs.core.Symbol("dynomics.ui.ui","make-new-node","dynomics.ui.ui/make-new-node",1777852426,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"dynomics.ui.ui","dynomics.ui.ui",1380873869,null),new cljs.core.Symbol(null,"make-new-node","make-new-node",2047793128,null),"src/dynomics/ui/ui.cljs",17,1,584,587,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"node-type","node-type",129492462),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"description","description",-1428560544),"Make new node"], null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"making-node?","making-node?",-141094588,null),new cljs.core.Keyword(null,"making-node?","making-node?",-1781626115),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)], null)),null,(cljs.core.truth_(dynomics.ui.ui.make_new_node)?dynomics.ui.ui.make_new_node.cljs$lang$test:null)]));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458380){if((e458380 instanceof Error)){
var e__39291__auto____$11 = e458380;
if((e__39291__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$11;
}
} else {
throw e458380;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458379){if((e458379 instanceof Error)){
var e__39291__auto____$11 = e458379;
if((e__39291__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$11;
}
} else {
throw e458379;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458376){if((e458376 instanceof Error)){
var e__39291__auto____$11 = e458376;
if((e__39291__auto____$11 === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"keydown","keydown",-629268186))){
return (new cljs.core.Delay(((function (event_verb__458304,e__39291__auto____$11,e__39291__auto____$10,e__39291__auto____$9,e__39291__auto____$8,e__39291__auto____$7,e__39291__auto____$6,e__39291__auto____$5,e__39291__auto____$4,e__39291__auto____$3,e__39291__auto____$2,e__39291__auto____$1,e__39291__auto__){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state,event);
});})(event_verb__458304,e__39291__auto____$11,e__39291__auto____$10,e__39291__auto____$9,e__39291__auto____$8,e__39291__auto____$7,e__39291__auto____$6,e__39291__auto____$5,e__39291__auto____$4,e__39291__auto____$3,e__39291__auto____$2,e__39291__auto____$1,e__39291__auto__))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458377){if((e458377 instanceof Error)){
var e__39291__auto____$12 = e458377;
if((e__39291__auto____$12 === cljs.core.match.backtrack)){
try{var event_verb__458304 = cljs.core.get.call(null,event,new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.keyword_identical_QMARK_.call(null,event_verb__458304,new cljs.core.Keyword(null,"keyup","keyup",-794526927))){
return (new cljs.core.Delay(((function (event_verb__458304,e__39291__auto____$12,e__39291__auto____$11,e__39291__auto____$10,e__39291__auto____$9,e__39291__auto____$8,e__39291__auto____$7,e__39291__auto____$6,e__39291__auto____$5,e__39291__auto____$4,e__39291__auto____$3,e__39291__auto____$2,e__39291__auto____$1,e__39291__auto__){
return (function (){
return dynomics.ui.core.fn_for_event.call(null,state,event);
});})(event_verb__458304,e__39291__auto____$12,e__39291__auto____$11,e__39291__auto____$10,e__39291__auto____$9,e__39291__auto____$8,e__39291__auto____$7,e__39291__auto____$6,e__39291__auto____$5,e__39291__auto____$4,e__39291__auto____$3,e__39291__auto____$2,e__39291__auto____$1,e__39291__auto__))
,null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e458378){if((e458378 instanceof Error)){
var e__39291__auto____$13 = e458378;
if((e__39291__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__39291__auto____$13;
}
} else {
throw e458378;

}
}} else {
throw e__39291__auto____$12;
}
} else {
throw e458377;

}
}} else {
throw e__39291__auto____$11;
}
} else {
throw e458376;

}
}} else {
throw e__39291__auto____$10;
}
} else {
throw e458375;

}
}} else {
throw e__39291__auto____$9;
}
} else {
throw e458374;

}
}} else {
throw e__39291__auto____$8;
}
} else {
throw e458373;

}
}} else {
throw e__39291__auto____$7;
}
} else {
throw e458372;

}
}} else {
throw e__39291__auto____$6;
}
} else {
throw e458371;

}
}} else {
throw e__39291__auto____$5;
}
} else {
throw e458370;

}
}} else {
throw e__39291__auto____$4;
}
} else {
throw e458369;

}
}} else {
throw e__39291__auto____$3;
}
} else {
throw e458368;

}
}} else {
throw e__39291__auto____$2;
}
} else {
throw e458367;

}
}} else {
throw e__39291__auto____$1;
}
} else {
throw e458366;

}
}} else {
throw e__39291__auto__;
}
} else {
throw e458365;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e458363){if((e458363 instanceof Error)){
var e__39291__auto__ = e458363;
if((e__39291__auto__ === cljs.core.match.backtrack)){
return null;
} else {
throw e__39291__auto__;
}
} else {
throw e458363;

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
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),(function (p__458488){
var map__458489 = p__458488;
var map__458489__$1 = ((((!((map__458489 == null)))?((((map__458489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458489):map__458489);
var map__458490 = cljs.core.get.call(null,map__458489__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__458490__$1 = ((((!((map__458490 == null)))?((((map__458490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458490):map__458490);
var state_updates = cljs.core.get.call(null,map__458490__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__458489,map__458489__$1,map__458490,map__458490__$1,state_updates){
return (function (p__458493){
var map__458494 = p__458493;
var map__458494__$1 = ((((!((map__458494 == null)))?((((map__458494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458494):map__458494);
var event = map__458494__$1;
var h = cljs.core.get.call(null,map__458494__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return cljs.core.async.put_BANG_.call(null,state_updates,((function (map__458494,map__458494__$1,event,h,map__458489,map__458489__$1,map__458490,map__458490__$1,state_updates){
return (function (s){
var f = (function (){var or__35191__auto__ = h;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return dynomics.ui.ui.match_event.call(null,s,event);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (f,map__458494,map__458494__$1,event,h,map__458489,map__458489__$1,map__458490,map__458490__$1,state_updates){
return (function (ss){
if(cljs.core.truth_(f)){
return cljs.core.deref.call(null,f).call(null,ss,event);
} else {
return ss;
}
});})(f,map__458494,map__458494__$1,event,h,map__458489,map__458489__$1,map__458490,map__458490__$1,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1((function (){var or__35191__auto__ = cljs.core.meta.call(null,f);
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null);
}
})()),new cljs.core.Keyword(null,"fn","fn",-1175266204),(cljs.core.truth_(f)?cljs.core.deref.call(null,f):null),new cljs.core.Keyword(null,"event","event",301435442),event)], null);
});})(map__458494,map__458494__$1,event,h,map__458489,map__458489__$1,map__458490,map__458490__$1,state_updates))
);
});})(map__458489,map__458489__$1,map__458490,map__458490__$1,state_updates))
], null)], null);
}),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"load","load",-1318641184)], null),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"toggle-quadrants","toggle-quadrants",-163483615),new cljs.core.Keyword(null,"curve-types","curve-types",1650772099),new cljs.core.Keyword(null,"print-state","print-state",-1235922711),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"toggle-node-types","toggle-node-types",-2069291601),new cljs.core.Keyword(null,"toggle-left-panel","toggle-left-panel",-240911951),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"switch-styles","switch-styles",-1139342249),new cljs.core.Keyword(null,"deactivate-all","deactivate-all",-1221569027)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load space",new cljs.core.Keyword(null,"description","description",-1428560544),"Restores the last saved space",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C3",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.get_state_BANG_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle quadrants",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show quadrants",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quadrants","quadrants",-1412112295)], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Curve types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected curves",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,id){
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Curve type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected curves to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_curve_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"print",new cljs.core.Keyword(null,"name","name",1843675177),"println state",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.print_state], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Remove selected",new cljs.core.Keyword(null,"description","description",-1428560544),"Removes selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2612",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.comp.call(null,dynomics.space.core.deselect_all,dynomics.space.core.remove_selected)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deselects all selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deselect_all], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"connect nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect selected nodes",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.curve_between_nodes], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Save space",new cljs.core.Keyword(null,"description","description",-1428560544),"Saves the space in your browser for later (sorry I will swap this icon for the familiar\n                                    floppy-disk icon when I find it",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.persist_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Node types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected nodes",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,p__458496){
var map__458497 = p__458496;
var map__458497__$1 = ((((!((map__458497 == null)))?((((map__458497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458497):map__458497);
var id = cljs.core.get.call(null,map__458497__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Node type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected nodes to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_node_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dynomics.space.core.node_types))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"toggle types",new cljs.core.Keyword(null,"description","description",-1428560544),"Toggle show types",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.make_toggle_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show","show",-576705889)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-types","node-types",1539943342)], null))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Toggle left panel",new cljs.core.Keyword(null,"description","description",-1428560544),"Shows/hides the left panel",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_left_panel], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Context menu",new cljs.core.Keyword(null,"description","description",-1428560544),"Display context menu",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.toggle_context_menu,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option1","option1",-243284328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Option1"], null)], null),new cljs.core.Keyword(null,"curve","curve",-569677866),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-curve-type1","set-curve-type1",2042367308),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(1));
}),null))], null),new cljs.core.Keyword(null,"set-curve-type2","set-curve-type2",1286708706),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"set curve type Nullcline 2",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"fn","fn",-1175266204),(new cljs.core.Delay((function (){
return dynomics.space.core.set_curve_type.call(null,(2));
}),null))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"switch styles",new cljs.core.Keyword(null,"description","description",-1428560544),"change style",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"tilde","tilde",-306005780),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.ui.switch_styles], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deactivate all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deactivates all active nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deactivate_all], null)])], null)], null));
});
dynomics.ui.ui.left_right_top_view = (function dynomics$ui$ui$left_right_top_view(p__458499){
var map__458511 = p__458499;
var map__458511__$1 = ((((!((map__458511 == null)))?((((map__458511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458511):map__458511);
var state = map__458511__$1;
var context_menu = cljs.core.get.call(null,map__458511__$1,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451));
var map__458512 = cljs.core.get.call(null,map__458511__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__458512__$1 = ((((!((map__458512 == null)))?((((map__458512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458512):map__458512);
var selected_nodes = cljs.core.get.call(null,map__458512__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
var map__458513 = cljs.core.get.call(null,map__458511__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__458513__$1 = ((((!((map__458513 == null)))?((((map__458513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458513):map__458513);
var msgs = cljs.core.get.call(null,map__458513__$1,new cljs.core.Keyword(null,"message-channel","message-channel",-227831873));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui458517 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui458517 = (function (left_right_top_view,p__458499,map__458511,state,context_menu,map__458512,selected_nodes,map__458513,msgs,meta458518){
this.left_right_top_view = left_right_top_view;
this.p__458499 = p__458499;
this.map__458511 = map__458511;
this.state = state;
this.context_menu = context_menu;
this.map__458512 = map__458512;
this.selected_nodes = selected_nodes;
this.map__458513 = map__458513;
this.msgs = msgs;
this.meta458518 = meta458518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui458517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs){
return (function (_458519,meta458518__$1){
var self__ = this;
var _458519__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui458517(self__.left_right_top_view,self__.p__458499,self__.map__458511,self__.state,self__.context_menu,self__.map__458512,self__.selected_nodes,self__.map__458513,self__.msgs,meta458518__$1));
});})(map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui458517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs){
return (function (_458519){
var self__ = this;
var _458519__$1 = this;
return self__.meta458518;
});})(map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui458517.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui458517.prototype.om$core$IRender$render$arity$1 = ((function (map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs){
return (function (this__38609__auto__){
var self__ = this;
var this__38609__auto____$1 = this;
return om.dom.div.call(null,{"className": "ui"},om.dom.div.call(null,{"className": "main_ui"},om.dom.div.call(null,{"className": [cljs.core.str("left_component "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"left-panel?","left-panel?",1385519317).cljs$core$IFn$_invoke$arity$1(self__.state))?"hidden_function":null))].join('')},om.core.build.call(null,dynomics.ui.ui.make_function_selector_view,self__.state),om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)),null),om.dom.div.call(null,{"className": "right_component selectable", "key": "right_component"},cljs.core.map.call(null,((function (this__38609__auto____$1,map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs){
return (function (p__458520){
var vec__458521 = p__458520;
var id = cljs.core.nth.call(null,vec__458521,(0),null);
var component = cljs.core.nth.call(null,vec__458521,(1),null);
return om.core.build.call(null,new cljs.core.Keyword(null,"om-builder","om-builder",1876809590).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(component).call(null,self__.state));
});})(this__38609__auto____$1,map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs))
,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"om-builder","om-builder",1876809590)),cljs.core.val),cljs.core.dissoc.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220))))),(cljs.core.truth_(self__.context_menu)?om.core.build.call(null,dynomics.ui.ui.make_context_menu,cljs.core.assoc.call(null,cljs.core.select_keys.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451)], null)),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478),self__.selected_nodes,new cljs.core.Keyword(null,"msgs","msgs",-1176489773),self__.msgs)):null)),om.core.build.call(null,dynomics.ui.ui.make_header_view,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)));
});})(map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui458517.getBasis = ((function (map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"left-right-top-view","left-right-top-view",150328751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null)], null)], null),new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__458499","p__458499",-1881812500,null),new cljs.core.Symbol(null,"map__458511","map__458511",1881383455,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"context-menu","context-menu",637818076,null),new cljs.core.Symbol(null,"map__458512","map__458512",874543414,null),new cljs.core.Symbol(null,"selected-nodes","selected-nodes",359006049,null),new cljs.core.Symbol(null,"map__458513","map__458513",-1101945315,null),new cljs.core.Symbol(null,"msgs","msgs",464041754,null),new cljs.core.Symbol(null,"meta458518","meta458518",-472763575,null)], null);
});})(map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs))
;

dynomics.ui.ui.t_dynomics$ui$ui458517.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui458517.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui458517";

dynomics.ui.ui.t_dynomics$ui$ui458517.cljs$lang$ctorPrWriter = ((function (map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui458517");
});})(map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui458517 = ((function (map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs){
return (function dynomics$ui$ui$left_right_top_view_$___GT_t_dynomics$ui$ui458517(left_right_top_view__$1,p__458499__$1,map__458511__$2,state__$1,context_menu__$1,map__458512__$2,selected_nodes__$1,map__458513__$2,msgs__$1,meta458518){
return (new dynomics.ui.ui.t_dynomics$ui$ui458517(left_right_top_view__$1,p__458499__$1,map__458511__$2,state__$1,context_menu__$1,map__458512__$2,selected_nodes__$1,map__458513__$2,msgs__$1,meta458518));
});})(map__458511,map__458511__$1,state,context_menu,map__458512,map__458512__$1,selected_nodes,map__458513,map__458513__$1,msgs))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui458517(dynomics$ui$ui$left_right_top_view,p__458499,map__458511__$1,state,context_menu,map__458512__$1,selected_nodes,map__458513__$1,msgs,null));
});
dynomics.ui.ui.main_view = (function dynomics$ui$ui$main_view(){
return (function (p__458530,owner){
var map__458531 = p__458530;
var map__458531__$1 = ((((!((map__458531 == null)))?((((map__458531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458531):map__458531);
var state = map__458531__$1;
var style = cljs.core.get.call(null,map__458531__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui458533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillReceiveProps}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui458533 = (function (main_view,p__458530,owner,map__458531,state,style,meta458534){
this.main_view = main_view;
this.p__458530 = p__458530;
this.owner = owner;
this.map__458531 = map__458531;
this.state = state;
this.style = style;
this.meta458534 = meta458534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui458533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__458531,map__458531__$1,state,style){
return (function (_458535,meta458534__$1){
var self__ = this;
var _458535__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui458533(self__.main_view,self__.p__458530,self__.owner,self__.map__458531,self__.state,self__.style,meta458534__$1));
});})(map__458531,map__458531__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui458533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__458531,map__458531__$1,state,style){
return (function (_458535){
var self__ = this;
var _458535__$1 = this;
return self__.meta458534;
});})(map__458531,map__458531__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui458533.prototype.om$core$IWillMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui458533.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__458531,map__458531__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null))));

dynomics.ui.ui.add_events_BANG_.call(null,self__.state);

return dynomics.ui.messaging.setup_updates.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),((function (___$1,map__458531,map__458531__$1,state,style){
return (function (g){
return om.core.transact_BANG_.call(null,self__.state,((function (___$1,map__458531,map__458531__$1,state,style){
return (function (s){
var map__458536 = g.call(null,s);
var map__458536__$1 = ((((!((map__458536 == null)))?((((map__458536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__458536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__458536):map__458536);
var f = cljs.core.get.call(null,map__458536__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var a = cljs.core.get.call(null,map__458536__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var ss = dynomics.ui.core.update_state.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"action","action",-811238024),(function (){var or__35191__auto__ = a;
if(cljs.core.truth_(or__35191__auto__)){
return or__35191__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.PersistentArrayMap.EMPTY,f);
return ss;
});})(___$1,map__458531,map__458531__$1,state,style))
);
});})(___$1,map__458531,map__458531__$1,state,style))
);
});})(map__458531,map__458531__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui458533.prototype.om$core$IWillReceiveProps$ = true;

dynomics.ui.ui.t_dynomics$ui$ui458533.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__458531,map__458531__$1,state,style){
return (function (this$,np){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not_EQ_.call(null,self__.style,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(np))){
localStorage.clear();

return goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dark","dark",1818973999),self__.style))?dynomics.ui.css.dark_style.call(null):dynomics.ui.css.light_style.call(null))));
} else {
return null;
}
});})(map__458531,map__458531__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui458533.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui458533.prototype.om$core$IRender$render$arity$1 = ((function (map__458531,map__458531__$1,state,style){
return (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,dynomics.ui.ui.left_right_top_view,self__.state);
});})(map__458531,map__458531__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui458533.getBasis = ((function (map__458531,map__458531__$1,state,style){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"p__458530","p__458530",1182112639,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__458531","map__458531",-67277805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"meta458534","meta458534",7437298,null)], null);
});})(map__458531,map__458531__$1,state,style))
;

dynomics.ui.ui.t_dynomics$ui$ui458533.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui458533.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui458533";

dynomics.ui.ui.t_dynomics$ui$ui458533.cljs$lang$ctorPrWriter = ((function (map__458531,map__458531__$1,state,style){
return (function (this__35797__auto__,writer__35798__auto__,opt__35799__auto__){
return cljs.core._write.call(null,writer__35798__auto__,"dynomics.ui.ui/t_dynomics$ui$ui458533");
});})(map__458531,map__458531__$1,state,style))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui458533 = ((function (map__458531,map__458531__$1,state,style){
return (function dynomics$ui$ui$main_view_$___GT_t_dynomics$ui$ui458533(main_view__$1,p__458530__$1,owner__$1,map__458531__$2,state__$1,style__$1,meta458534){
return (new dynomics.ui.ui.t_dynomics$ui$ui458533(main_view__$1,p__458530__$1,owner__$1,map__458531__$2,state__$1,style__$1,meta458534));
});})(map__458531,map__458531__$1,state,style))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui458533(dynomics$ui$ui$main_view,p__458530,owner,map__458531__$1,state,style,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Start the application!
 */
dynomics.ui.ui.start = (function dynomics$ui$ui$start(var_args){
var args458538 = [];
var len__36260__auto___458541 = arguments.length;
var i__36261__auto___458542 = (0);
while(true){
if((i__36261__auto___458542 < len__36260__auto___458541)){
args458538.push((arguments[i__36261__auto___458542]));

var G__458543 = (i__36261__auto___458542 + (1));
i__36261__auto___458542 = G__458543;
continue;
} else {
}
break;
}

var G__458540 = args458538.length;
switch (G__458540) {
case 0:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args458538.length)].join('')));

}
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return dynomics.ui.ui.start.call(null,dynomics.ui.ui.add_components.call(null,dynomics.ui.ui.add_keybindings.call(null,dynomics.ui.ui.add_functions.call(null,dynomics.ui.ui.add_messaging.call(null,dynomics.ui.ui.add_browser_info.call(null,dynomics.ui.core.make_state.call(null)))))));
});

dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1 = (function (state){
return om.core.root.call(null,dynomics.ui.ui.main_view.call(null),state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("ui")], null));
});

dynomics.ui.ui.start.cljs$lang$maxFixedArity = 1;
