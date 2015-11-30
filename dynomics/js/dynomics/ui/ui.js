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
dynomics.ui.ui.animation_frame = (function (){var or__24211__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
var or__24211__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__24211__auto____$1)){
return or__24211__auto____$1;
} else {
var or__24211__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__24211__auto____$2)){
return or__24211__auto____$2;
} else {
var or__24211__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__24211__auto____$3)){
return or__24211__auto____$3;
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
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),(function (p__655919){
var map__655920 = p__655919;
var map__655920__$1 = ((((!((map__655920 == null)))?((((map__655920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655920):map__655920);
var vx = cljs.core.get.call(null,map__655920__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__655920__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var x = cljs.core.get.call(null,map__655920__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__655920__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
if(typeof dynomics.ui.ui.t_dynomics$ui$ui655929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui655929 = (function (make_function_selector_view,state,owner,functions,state_updates,meta655930){
this.make_function_selector_view = make_function_selector_view;
this.state = state;
this.owner = owner;
this.functions = functions;
this.state_updates = state_updates;
this.meta655930 = meta655930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui655929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (functions,state_updates){
return (function (_655931,meta655930__$1){
var self__ = this;
var _655931__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui655929(self__.make_function_selector_view,self__.state,self__.owner,self__.functions,self__.state_updates,meta655930__$1));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui655929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (functions,state_updates){
return (function (_655931){
var self__ = this;
var _655931__$1 = this;
return self__.meta655930;
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui655929.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui655929.prototype.om$core$IRender$render$arity$1 = ((function (functions,state_updates){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": "function_selector"},cljs.core.map.call(null,((function (this__32689__auto____$1,functions,state_updates){
return (function (p__655932){
var vec__655933 = p__655932;
var k = cljs.core.nth.call(null,vec__655933,(0),null);
var map__655934 = cljs.core.nth.call(null,vec__655933,(1),null);
var map__655934__$1 = ((((!((map__655934 == null)))?((((map__655934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655934):map__655934);
var naym = cljs.core.get.call(null,map__655934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__655934__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return om.dom.div.call(null,{"className": "function_selector_item", "id": [cljs.core.str(cljs.core.name.call(null,k))].join(''), "onClick": ((function (vec__655933,k,map__655934,map__655934__$1,naym,description,this__32689__auto____$1,functions,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__655933,k,map__655934,map__655934__$1,naym,description,this__32689__auto____$1,functions,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null),k);
});})(vec__655933,k,map__655934,map__655934__$1,naym,description,this__32689__auto____$1,functions,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"description","description",-1428560544),naym], null)], null));

return null;
});})(vec__655933,k,map__655934,map__655934__$1,naym,description,this__32689__auto____$1,functions,state_updates))
},naym);
});})(this__32689__auto____$1,functions,state_updates))
,self__.functions));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui655929.getBasis = ((function (functions,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-function-selector-view","make-function-selector-view",516344898,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for selecting the current function"], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"functions","functions",1825482993,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta655930","meta655930",-1302122225,null)], null);
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui655929.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui655929.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui655929";

dynomics.ui.ui.t_dynomics$ui$ui655929.cljs$lang$ctorPrWriter = ((function (functions,state_updates){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.ui.ui/t_dynomics$ui$ui655929");
});})(functions,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui655929 = ((function (functions,state_updates){
return (function dynomics$ui$ui$make_function_selector_view_$___GT_t_dynomics$ui$ui655929(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta655930){
return (new dynomics.ui.ui.t_dynomics$ui$ui655929(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta655930));
});})(functions,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui655929(dynomics$ui$ui$make_function_selector_view,state,owner,functions,state_updates,null));
});
/**
 * Return a component to display a list
 *   of historical states which select a historical
 *   state on mouseover
 */
dynomics.ui.ui.make_history_selector_view = (function dynomics$ui$ui$make_history_selector_view(p__655936,owner){
var map__655947 = p__655936;
var map__655947__$1 = ((((!((map__655947 == null)))?((((map__655947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655947):map__655947);
var state = map__655947__$1;
var map__655948 = cljs.core.get.call(null,map__655947__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__655948__$1 = ((((!((map__655948 == null)))?((((map__655948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655948):map__655948);
var state_updates = cljs.core.get.call(null,map__655948__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var sh = cljs.core.get.call(null,map__655947__$1,new cljs.core.Keyword(null,"show-history","show-history",1972567130));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui655951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui655951 = (function (make_history_selector_view,p__655936,owner,map__655947,state,map__655948,state_updates,sh,meta655952){
this.make_history_selector_view = make_history_selector_view;
this.p__655936 = p__655936;
this.owner = owner;
this.map__655947 = map__655947;
this.state = state;
this.map__655948 = map__655948;
this.state_updates = state_updates;
this.sh = sh;
this.meta655952 = meta655952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui655951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh){
return (function (_655953,meta655952__$1){
var self__ = this;
var _655953__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui655951(self__.make_history_selector_view,self__.p__655936,self__.owner,self__.map__655947,self__.state,self__.map__655948,self__.state_updates,self__.sh,meta655952__$1));
});})(map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui655951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh){
return (function (_655953){
var self__ = this;
var _655953__$1 = this;
return self__.meta655952;
});})(map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui655951.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui655951.prototype.om$core$IRender$render$arity$1 = ((function (map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": "history_selector", "onClick": ((function (this__32689__auto____$1,map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh){
return (function (e){
return cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (this__32689__auto____$1,map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh){
return (function (s){
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),cljs.core.not);
});})(this__32689__auto____$1,map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh))
], null));
});})(this__32689__auto____$1,map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh))
},om.dom.div.call(null,{"className": "history_selector_text"},"History"),om.dom.div.call(null,{"className": (cljs.core.truth_(self__.sh)?"history_selector_visible":"history_selector_hidden")},cljs.core.map.call(null,((function (this__32689__auto____$1,map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh){
return (function (p__655954){
var map__655955 = p__655954;
var map__655955__$1 = ((((!((map__655955 == null)))?((((map__655955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655955):map__655955);
var history_item = map__655955__$1;
var action = cljs.core.get.call(null,map__655955__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var version = cljs.core.get.call(null,map__655955__$1,new cljs.core.Keyword(null,"version","version",425292698));
var previous_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)) - (1))));
var previous_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)));
return om.dom.div.call(null,{"className": [cljs.core.str("history_selector_item "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_action)))?"historical":""))].join(''), "id": [cljs.core.str("history_version_"),cljs.core.str(previous_version)].join(''), "onMouseOver": ((function (previous_action,previous_version,map__655955,map__655955__$1,history_item,action,version,this__32689__auto____$1,map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (previous_action,previous_version,map__655955,map__655955__$1,history_item,action,version,this__32689__auto____$1,map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh){
return (function (s){
return cljs.core.merge.call(null,om.core.value.call(null,history_item),cljs.core.select_keys.call(null,s,cljs.core.conj.call(null,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"history","history",-247395220))));
});})(previous_action,previous_version,map__655955,map__655955__$1,history_item,action,version,this__32689__auto____$1,map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desccription","desccription",-1060114044),[cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action))].join(''),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"id","id",-1388402092),version], null)], null));

return null;
});})(previous_action,previous_version,map__655955,map__655955__$1,history_item,action,version,this__32689__auto____$1,map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh))
},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action));
});})(this__32689__auto____$1,map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh))
,cljs.core.filter.call(null,((function (this__32689__auto____$1,map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh){
return (function (hi){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi)) - (1)))));
});})(this__32689__auto____$1,map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh))
,cljs.core.reverse.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.state),self__.state))))));
});})(map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui655951.getBasis = ((function (map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-history-selector-view","make-history-selector-view",1677763159,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Keyword(null,"show-history","show-history",1972567130),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a component to display a list\n  of historical states which select a historical\n  state on mouseover"], null)),new cljs.core.Symbol(null,"p__655936","p__655936",-1844454631,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__655947","map__655947",1597769275,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__655948","map__655948",739528100,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Symbol(null,"meta655952","meta655952",97950082,null)], null);
});})(map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui655951.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui655951.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui655951";

dynomics.ui.ui.t_dynomics$ui$ui655951.cljs$lang$ctorPrWriter = ((function (map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.ui.ui/t_dynomics$ui$ui655951");
});})(map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui655951 = ((function (map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh){
return (function dynomics$ui$ui$make_history_selector_view_$___GT_t_dynomics$ui$ui655951(make_history_selector_view__$1,p__655936__$1,owner__$1,map__655947__$2,state__$1,map__655948__$2,state_updates__$1,sh__$1,meta655952){
return (new dynomics.ui.ui.t_dynomics$ui$ui655951(make_history_selector_view__$1,p__655936__$1,owner__$1,map__655947__$2,state__$1,map__655948__$2,state_updates__$1,sh__$1,meta655952));
});})(map__655947,map__655947__$1,state,map__655948,map__655948__$1,state_updates,sh))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui655951(dynomics$ui$ui$make_history_selector_view,p__655936,owner,map__655947__$1,state,map__655948__$1,state_updates,sh,null));
});
/**
 * Returns a component for the top header
 */
dynomics.ui.ui.make_header_view = (function dynomics$ui$ui$make_header_view(p__655957){
var map__655963 = p__655957;
var map__655963__$1 = ((((!((map__655963 == null)))?((((map__655963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655963):map__655963);
var state = map__655963__$1;
var logo_text = cljs.core.get.call(null,map__655963__$1,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
var app_name = cljs.core.get.call(null,map__655963__$1,new cljs.core.Keyword(null,"app-name","app-name",-268811251));
var app_version = cljs.core.get.call(null,map__655963__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui655965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui655965 = (function (make_header_view,p__655957,map__655963,state,logo_text,app_name,app_version,meta655966){
this.make_header_view = make_header_view;
this.p__655957 = p__655957;
this.map__655963 = map__655963;
this.state = state;
this.logo_text = logo_text;
this.app_name = app_name;
this.app_version = app_version;
this.meta655966 = meta655966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui655965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__655963,map__655963__$1,state,logo_text,app_name,app_version){
return (function (_655967,meta655966__$1){
var self__ = this;
var _655967__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui655965(self__.make_header_view,self__.p__655957,self__.map__655963,self__.state,self__.logo_text,self__.app_name,self__.app_version,meta655966__$1));
});})(map__655963,map__655963__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui655965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__655963,map__655963__$1,state,logo_text,app_name,app_version){
return (function (_655967){
var self__ = this;
var _655967__$1 = this;
return self__.meta655966;
});})(map__655963,map__655963__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui655965.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui655965.prototype.om$core$IRender$render$arity$1 = ((function (map__655963,map__655963__$1,state,logo_text,app_name,app_version){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": "top_component"},(cljs.core.truth_(self__.logo_text)?om.dom.div.call(null,{"className": "logo"},self__.logo_text):null),(cljs.core.truth_(self__.app_name)?om.dom.div.call(null,{"className": "headertitle"},[cljs.core.str(self__.app_name),cljs.core.str(" "),cljs.core.str(self__.app_version)].join('')):null),dynomics.space.ui.make_tools_palette_component.call(null,self__.state));
});})(map__655963,map__655963__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui655965.getBasis = ((function (map__655963,map__655963__$1,state,logo_text,app_name,app_version){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-header-view","make-header-view",2348093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the top header"], null)),new cljs.core.Symbol(null,"p__655957","p__655957",-1743149217,null),new cljs.core.Symbol(null,"map__655963","map__655963",-1145363006,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"meta655966","meta655966",2131983385,null)], null);
});})(map__655963,map__655963__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui655965.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui655965.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui655965";

dynomics.ui.ui.t_dynomics$ui$ui655965.cljs$lang$ctorPrWriter = ((function (map__655963,map__655963__$1,state,logo_text,app_name,app_version){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.ui.ui/t_dynomics$ui$ui655965");
});})(map__655963,map__655963__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui655965 = ((function (map__655963,map__655963__$1,state,logo_text,app_name,app_version){
return (function dynomics$ui$ui$make_header_view_$___GT_t_dynomics$ui$ui655965(make_header_view__$1,p__655957__$1,map__655963__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,meta655966){
return (new dynomics.ui.ui.t_dynomics$ui$ui655965(make_header_view__$1,p__655957__$1,map__655963__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,meta655966));
});})(map__655963,map__655963__$1,state,logo_text,app_name,app_version))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui655965(dynomics$ui$ui$make_header_view,p__655957,map__655963__$1,state,logo_text,app_name,app_version,null));
});
dynomics.ui.ui.evaluate = (function dynomics$ui$ui$evaluate(s,sexp,f){
return cljs.js.eval.call(null,cljs.js.empty_state.call(null),sexp,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),f);
});
dynomics.ui.ui.make_footer_view = (function dynomics$ui$ui$make_footer_view(p__655968){
var map__655978 = p__655968;
var map__655978__$1 = ((((!((map__655978 == null)))?((((map__655978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655978):map__655978);
var state = map__655978__$1;
var map__655979 = cljs.core.get.call(null,map__655978__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__655979__$1 = ((((!((map__655979 == null)))?((((map__655979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655979):map__655979);
var state_updates = cljs.core.get.call(null,map__655979__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var map__655980 = cljs.core.get.call(null,map__655978__$1,new cljs.core.Keyword(null,"eval","eval",-1103567905));
var map__655980__$1 = ((((!((map__655980 == null)))?((((map__655980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__655980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__655980):map__655980);
var last_result = cljs.core.get.call(null,map__655980__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var last_exps = cljs.core.get.call(null,map__655980__$1,new cljs.core.Keyword(null,"exps","exps",-877274249));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui655984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui655984 = (function (make_footer_view,p__655968,map__655978,state,map__655979,state_updates,map__655980,last_result,last_exps,meta655985){
this.make_footer_view = make_footer_view;
this.p__655968 = p__655968;
this.map__655978 = map__655978;
this.state = state;
this.map__655979 = map__655979;
this.state_updates = state_updates;
this.map__655980 = map__655980;
this.last_result = last_result;
this.last_exps = last_exps;
this.meta655985 = meta655985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui655984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps){
return (function (_655986,meta655985__$1){
var self__ = this;
var _655986__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui655984(self__.make_footer_view,self__.p__655968,self__.map__655978,self__.state,self__.map__655979,self__.state_updates,self__.map__655980,self__.last_result,self__.last_exps,meta655985__$1));
});})(map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui655984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps){
return (function (_655986){
var self__ = this;
var _655986__$1 = this;
return self__.meta655985;
});})(map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui655984.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui655984.prototype.om$core$IRender$render$arity$1 = ((function (map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": "bottom_component"},om.dom.input.call(null,{"className": "eval_input", "type": "text", "size": (64), "onKeyDown": ((function (this__32689__auto____$1,map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps){
return (function (e){
e.stopPropagation();

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"enter","enter",1792452624),dynomics.ui.ui.evt_to_keyword.call(null,e))){
var exps_655987 = e.target.value;
dynomics.ui.ui.evaluate.call(null,self__.state,cljs.tools.reader.read_string.call(null,exps_655987),((function (exps_655987,this__32689__auto____$1,map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps){
return (function (result){
cljs.core.println.call(null,cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002)], null),result));

return cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (exps_655987,this__32689__auto____$1,map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exps","exps",-877274249),exps_655987,new cljs.core.Keyword(null,"result","result",1415092211),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))?cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002)], null)):result)], null));
});})(exps_655987,this__32689__auto____$1,map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"description","description",-1428560544),"Evaluate"], null)], null));
});})(exps_655987,this__32689__auto____$1,map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps))
);
} else {
}

return null;
});})(this__32689__auto____$1,map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps))
}),om.dom.div.call(null,{"className": "eval_result"},[cljs.core.str("> "),cljs.core.str(self__.last_result)].join('')));
});})(map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui655984.getBasis = ((function (map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-footer-view","make-footer-view",-746293906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Keyword(null,"exps","exps",-877274249)], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__655968","p__655968",-76287861,null),new cljs.core.Symbol(null,"map__655978","map__655978",-983241536,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__655979","map__655979",-984033944,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"map__655980","map__655980",-672885830,null),new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Symbol(null,"meta655985","meta655985",-877513595,null)], null);
});})(map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui655984.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui655984.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui655984";

dynomics.ui.ui.t_dynomics$ui$ui655984.cljs$lang$ctorPrWriter = ((function (map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.ui.ui/t_dynomics$ui$ui655984");
});})(map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui655984 = ((function (map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps){
return (function dynomics$ui$ui$make_footer_view_$___GT_t_dynomics$ui$ui655984(make_footer_view__$1,p__655968__$1,map__655978__$2,state__$1,map__655979__$2,state_updates__$1,map__655980__$2,last_result__$1,last_exps__$1,meta655985){
return (new dynomics.ui.ui.t_dynomics$ui$ui655984(make_footer_view__$1,p__655968__$1,map__655978__$2,state__$1,map__655979__$2,state_updates__$1,map__655980__$2,last_result__$1,last_exps__$1,meta655985));
});})(map__655978,map__655978__$1,state,map__655979,map__655979__$1,state_updates,map__655980,map__655980__$1,last_result,last_exps))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui655984(dynomics$ui$ui$make_footer_view,p__655968,map__655978__$1,state,map__655979__$1,state_updates,map__655980__$1,last_result,last_exps,null));
});
dynomics.ui.ui.add_components = (function dynomics$ui$ui$add_components(state){
var seq__655992_655996 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null))))));
var chunk__655993_655997 = null;
var count__655994_655998 = (0);
var i__655995_655999 = (0);
while(true){
if((i__655995_655999 < count__655994_655998)){
var component_656000 = cljs.core._nth.call(null,chunk__655993_655997,i__655995_655999);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_656000);

var G__656001 = seq__655992_655996;
var G__656002 = chunk__655993_655997;
var G__656003 = count__655994_655998;
var G__656004 = (i__655995_655999 + (1));
seq__655992_655996 = G__656001;
chunk__655993_655997 = G__656002;
count__655994_655998 = G__656003;
i__655995_655999 = G__656004;
continue;
} else {
var temp__4425__auto___656005 = cljs.core.seq.call(null,seq__655992_655996);
if(temp__4425__auto___656005){
var seq__655992_656006__$1 = temp__4425__auto___656005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__655992_656006__$1)){
var c__25014__auto___656007 = cljs.core.chunk_first.call(null,seq__655992_656006__$1);
var G__656008 = cljs.core.chunk_rest.call(null,seq__655992_656006__$1);
var G__656009 = c__25014__auto___656007;
var G__656010 = cljs.core.count.call(null,c__25014__auto___656007);
var G__656011 = (0);
seq__655992_655996 = G__656008;
chunk__655993_655997 = G__656009;
count__655994_655998 = G__656010;
i__655995_655999 = G__656011;
continue;
} else {
var component_656012 = cljs.core.first.call(null,seq__655992_656006__$1);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_656012);

var G__656013 = cljs.core.next.call(null,seq__655992_656006__$1);
var G__656014 = null;
var G__656015 = (0);
var G__656016 = (0);
seq__655992_655996 = G__656013;
chunk__655993_655997 = G__656014;
count__655994_655998 = G__656015;
i__655995_655999 = G__656016;
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
var args656017 = [];
var len__25269__auto___656024 = arguments.length;
var i__25270__auto___656025 = (0);
while(true){
if((i__25270__auto___656025 < len__25269__auto___656024)){
args656017.push((arguments[i__25270__auto___656025]));

var G__656026 = (i__25270__auto___656025 + (1));
i__25270__auto___656025 = G__656026;
continue;
} else {
}
break;
}

var G__656019 = args656017.length;
switch (G__656019) {
case 1:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args656017.length)].join('')));

}
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.ui.add_keybindings.call(null,state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)));
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2 = (function (state,tools){
return cljs.core.reduce.call(null,(function (r,p__656020){
var vec__656021 = p__656020;
var k = cljs.core.nth.call(null,vec__656021,(0),null);
var map__656022 = cljs.core.nth.call(null,vec__656021,(1),null);
var map__656022__$1 = ((((!((map__656022 == null)))?((((map__656022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656022):map__656022);
var f = cljs.core.get.call(null,map__656022__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var kb = cljs.core.get.call(null,map__656022__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var naym = cljs.core.get.call(null,map__656022__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tools__$1 = cljs.core.get.call(null,map__656022__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
if(cljs.core.truth_(f)){
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),((function (vec__656021,k,map__656022,map__656022__$1,f,kb,naym,tools__$1){
return (function (s){
cljs.core.println.call(null,naym);

return f.call(null,s);
});})(vec__656021,k,map__656022,map__656022__$1,f,kb,naym,tools__$1))
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
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),(function (p__656071){
var map__656072 = p__656071;
var map__656072__$1 = ((((!((map__656072 == null)))?((((map__656072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656072):map__656072);
var map__656073 = cljs.core.get.call(null,map__656072__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__656073__$1 = ((((!((map__656073 == null)))?((((map__656073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656073):map__656073);
var state_updates = cljs.core.get.call(null,map__656073__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__656073__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var write_channel = cljs.core.get.call(null,map__656073__$1,new cljs.core.Keyword(null,"write-channel","write-channel",977573273));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (p__656076){
var map__656077 = p__656076;
var map__656077__$1 = ((((!((map__656077 == null)))?((((map__656077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656077):map__656077);
var vec__656078 = cljs.core.get.call(null,map__656077__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__656078,(0),null);
var y = cljs.core.nth.call(null,vec__656078,(1),null);
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__656077,map__656077__$1,vec__656078,x,y,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (p__656080){
var map__656081 = p__656080;
var map__656081__$1 = ((((!((map__656081 == null)))?((((map__656081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656081):map__656081);
var s = map__656081__$1;
var map__656082 = cljs.core.get.call(null,map__656081__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__656082__$1 = ((((!((map__656082 == null)))?((((map__656082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656082):map__656082);
var space = map__656082__$1;
var selected_nodes = cljs.core.get.call(null,map__656082__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,((function (map__656081,map__656081__$1,s,map__656082,map__656082__$1,space,selected_nodes,map__656077,map__656077__$1,vec__656078,x,y,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (r,path){
var tfn = ((((3) === cljs.core.count.call(null,path)))?((function (map__656081,map__656081__$1,s,map__656082,map__656082__$1,space,selected_nodes,map__656077,map__656077__$1,vec__656078,x,y,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (p,_,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,p], null)], null);
});})(map__656081,map__656081__$1,s,map__656082,map__656082__$1,space,selected_nodes,map__656077,map__656077__$1,vec__656078,x,y,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
:dynomics.space.core.mirror_node);
return cljs.core.reduce.call(null,((function (tfn,map__656081,map__656081__$1,s,map__656082,map__656082__$1,space,selected_nodes,map__656077,map__656077__$1,vec__656078,x,y,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (r__$1,p__656085){
var vec__656086 = p__656085;
var cpath = cljs.core.nth.call(null,vec__656086,(0),null);
var cpoint = cljs.core.nth.call(null,vec__656086,(1),null);
return cljs.core.assoc_in.call(null,r__$1,cljs.core.conj.call(null,cpath,new cljs.core.Keyword(null,"position","position",-2011731912)),cpoint);
});})(tfn,map__656081,map__656081__$1,s,map__656082,map__656082__$1,space,selected_nodes,map__656077,map__656077__$1,vec__656078,x,y,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
,r,tfn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),path,space));
});})(map__656081,map__656081__$1,s,map__656082,map__656082__$1,space,selected_nodes,map__656077,map__656077__$1,vec__656078,x,y,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
,s,selected_nodes);
});})(map__656077,map__656077__$1,vec__656078,x,y,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (p__656087){
var map__656088 = p__656087;
var map__656088__$1 = ((((!((map__656088 == null)))?((((map__656088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656088):map__656088);
var ss = map__656088__$1;
var vec__656089 = cljs.core.get.call(null,map__656088__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__656089,(0),null);
var y = cljs.core.nth.call(null,vec__656089,(1),null);
var id = cljs.core.get.call(null,map__656088__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__656088__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Select node to move ",path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

if(cljs.core.truth_(path)){
dynomics.space.ui.disable_pan_zoom_BANG_.call(null,ss);
} else {
}

if(cljs.core.truth_(path)){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__656088,map__656088__$1,ss,vec__656089,x,y,id,path,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (p__656091){
var map__656092 = p__656091;
var map__656092__$1 = ((((!((map__656092 == null)))?((((map__656092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656092):map__656092);
var s = map__656092__$1;
var map__656093 = cljs.core.get.call(null,map__656092__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__656093__$1 = ((((!((map__656093 == null)))?((((map__656093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656093):map__656093);
var selected_nodes = cljs.core.get.call(null,map__656093__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.assoc_in.call(null,(cljs.core.truth_(path)?cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path):s),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"move-offset","move-offset",2091828833)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(map__656088,map__656088__$1,ss,vec__656089,x,y,id,path,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null));
} else {
}

return null;
});})(map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (p__656096){
var map__656097 = p__656096;
var map__656097__$1 = ((((!((map__656097 == null)))?((((map__656097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656097):map__656097);
var ss = map__656097__$1;
var vec__656098 = cljs.core.get.call(null,map__656097__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__656098,(0),null);
var y = cljs.core.nth.call(null,vec__656098,(1),null);
var path = cljs.core.get.call(null,map__656097__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Unselect node ",path);

dynomics.space.ui.enable_pan_zoom_BANG_.call(null,ss);

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__656097,map__656097__$1,ss,vec__656098,x,y,path,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (s){
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.disj,path);
});})(map__656097,map__656097__$1,ss,vec__656098,x,y,path,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"unselect","unselect",-1124322706),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Move "),cljs.core.str(cljs.core.get.call(null,path,(2))),cljs.core.str(":"),cljs.core.str(cljs.core.last.call(null,path))].join('')], null)], null));

return null;
});})(map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (p__656100){
var map__656101 = p__656100;
var map__656101__$1 = ((((!((map__656101 == null)))?((((map__656101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656101):map__656101);
var vec__656102 = cljs.core.get.call(null,map__656101__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__656102,(0),null);
var y = cljs.core.nth.call(null,vec__656102,(1),null);
cljs.core.println.call(null,"Add node ");

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__656101,map__656101__$1,vec__656102,x,y,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (s){
return dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});})(map__656101,map__656101__$1,vec__656102,x,y,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Add node")].join('')], null)], null));

return null;
});})(map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (p__656104){
var map__656105 = p__656104;
var map__656105__$1 = ((((!((map__656105 == null)))?((((map__656105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656105):map__656105);
var vec__656106 = cljs.core.get.call(null,map__656105__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__656106,(0),null);
var y = cljs.core.nth.call(null,vec__656106,(1),null);
var id = cljs.core.get.call(null,map__656105__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__656105__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Connect node ",path);

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__656105,map__656105__$1,vec__656106,x,y,id,path,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (s){
return dynomics.space.core.make_connections.call(null,cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path));
});})(map__656105,map__656105__$1,vec__656106,x,y,id,path,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Connect "),cljs.core.str(id)].join('')], null)], null));

return null;
});})(map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (p__656108){
var map__656109 = p__656108;
var map__656109__$1 = ((((!((map__656109 == null)))?((((map__656109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656109):map__656109);
var mp = cljs.core.get.call(null,map__656109__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__656109__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Select node ",path);

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__656109,map__656109__$1,mp,path,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel){
return (function (s){
return dynomics.ui.ui.select_node.call(null,s,path,mp);
});})(map__656109,map__656109__$1,mp,path,map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null));

return null;
});})(map__656072,map__656072__$1,map__656073,map__656073__$1,state_updates,msgs,write_channel))
], null)], null);
}),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"load","load",-1318641184)], null),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load space",new cljs.core.Keyword(null,"description","description",-1428560544),"Restores the last saved space",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C3",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.get_state_BANG_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Remove selected",new cljs.core.Keyword(null,"description","description",-1428560544),"Removes selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2612",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.comp.call(null,dynomics.space.core.deselect_all,dynomics.space.core.remove_selected_nodes)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deselects all selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deselect_all], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Connect nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect nodes to make curves \u2312",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u223E",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Save space",new cljs.core.Keyword(null,"description","description",-1428560544),"Saves the space in your browser for later (sorry I will swap this icon for the familiar\n                                    floppy-disk icon when I find it",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.persist_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Node types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected nodes",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,p__656111){
var map__656112 = p__656111;
var map__656112__$1 = ((((!((map__656112 == null)))?((((map__656112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656112):map__656112);
var id = cljs.core.get.call(null,map__656112__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Node type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected nodes to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_node_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dynomics.space.core.node_types))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Select nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Select nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2A03",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"h","h",1109658740)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Move nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Move the selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2B09",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"f","f",-1597136552)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Add nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Add some nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"+",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"j","j",-1397974765)], null)])], null)], null));
});
dynomics.ui.ui.left_right_top_view = (function dynomics$ui$ui$left_right_top_view(state){
if(typeof dynomics.ui.ui.t_dynomics$ui$ui656119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui656119 = (function (left_right_top_view,state,meta656120){
this.left_right_top_view = left_right_top_view;
this.state = state;
this.meta656120 = meta656120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui656119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_656121,meta656120__$1){
var self__ = this;
var _656121__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui656119(self__.left_right_top_view,self__.state,meta656120__$1));
});

dynomics.ui.ui.t_dynomics$ui$ui656119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_656121){
var self__ = this;
var _656121__$1 = this;
return self__.meta656120;
});

dynomics.ui.ui.t_dynomics$ui$ui656119.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui656119.prototype.om$core$IRender$render$arity$1 = (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": "ui"},null,om.dom.div.call(null,{"className": "main_ui"},om.dom.div.call(null,{"className": "left_component"},om.core.build.call(null,dynomics.ui.ui.make_function_selector_view,self__.state),om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)),om.core.build.call(null,dynomics.ui.ui.make_history_selector_view,self__.state)),om.dom.div.call(null,{"className": "right_component selectable"},cljs.core.map.call(null,((function (this__32689__auto____$1){
return (function (p__656122){
var vec__656123 = p__656122;
var id = cljs.core.nth.call(null,vec__656123,(0),null);
var component = cljs.core.nth.call(null,vec__656123,(1),null);
return om.core.build.call(null,new cljs.core.Keyword(null,"om-builder","om-builder",1876809590).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(component).call(null,self__.state));
});})(this__32689__auto____$1))
,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"om-builder","om-builder",1876809590)),cljs.core.val),cljs.core.dissoc.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220)))))),om.core.build.call(null,dynomics.ui.ui.make_header_view,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)));
});

dynomics.ui.ui.t_dynomics$ui$ui656119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"left-right-top-view","left-right-top-view",150328751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta656120","meta656120",-36950737,null)], null);
});

dynomics.ui.ui.t_dynomics$ui$ui656119.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui656119.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui656119";

dynomics.ui.ui.t_dynomics$ui$ui656119.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.ui.ui/t_dynomics$ui$ui656119");
});

dynomics.ui.ui.__GT_t_dynomics$ui$ui656119 = (function dynomics$ui$ui$left_right_top_view_$___GT_t_dynomics$ui$ui656119(left_right_top_view__$1,state__$1,meta656120){
return (new dynomics.ui.ui.t_dynomics$ui$ui656119(left_right_top_view__$1,state__$1,meta656120));
});

}

return (new dynomics.ui.ui.t_dynomics$ui$ui656119(dynomics$ui$ui$left_right_top_view,state,null));
});
dynomics.ui.ui.main_view = (function dynomics$ui$ui$main_view(){
return (function (state,owner){
if(typeof dynomics.ui.ui.t_dynomics$ui$ui656131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui656131 = (function (main_view,state,owner,meta656132){
this.main_view = main_view;
this.state = state;
this.owner = owner;
this.meta656132 = meta656132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui656131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_656133,meta656132__$1){
var self__ = this;
var _656133__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui656131(self__.main_view,self__.state,self__.owner,meta656132__$1));
});

dynomics.ui.ui.t_dynomics$ui$ui656131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_656133){
var self__ = this;
var _656133__$1 = this;
return self__.meta656132;
});

dynomics.ui.ui.t_dynomics$ui$ui656131.prototype.om$core$IWillMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui656131.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null));

dynomics.ui.ui.add_events_BANG_.call(null,self__.state);

return dynomics.ui.messaging.setup_updates.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),((function (___$1){
return (function (p__656134){
var map__656135 = p__656134;
var map__656135__$1 = ((((!((map__656135 == null)))?((((map__656135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__656135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__656135):map__656135);
var f = cljs.core.get.call(null,map__656135__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var a = cljs.core.get.call(null,map__656135__$1,new cljs.core.Keyword(null,"action","action",-811238024));
try{return om.core.transact_BANG_.call(null,self__.state,((function (map__656135,map__656135__$1,f,a,___$1){
return (function (s){
var ss = dynomics.ui.core.update_state.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"action","action",-811238024),(function (){var or__24211__auto__ = a;
if(cljs.core.truth_(or__24211__auto__)){
return or__24211__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.PersistentArrayMap.EMPTY,f);
if(cljs.core.truth_(a)){
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null)),a);
} else {
}

return ss;
});})(map__656135,map__656135__$1,f,a,___$1))
);
}catch (e656137){if((e656137 instanceof Error)){
var e = e656137;
return cljs.core.println.call(null,e);
} else {
throw e656137;

}
}});})(___$1))
);
});

dynomics.ui.ui.t_dynomics$ui$ui656131.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui656131.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,dynomics.ui.ui.left_right_top_view,self__.state);
});

dynomics.ui.ui.t_dynomics$ui$ui656131.prototype.om$core$IDidMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui656131.prototype.om$core$IDidMount$did_mount$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
return om.core.transact_BANG_.call(null,self__.state,((function (it__$1){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),dynomics.space.ui.add_pan_zoom_BANG_.call(null));
});})(it__$1))
);
});

dynomics.ui.ui.t_dynomics$ui$ui656131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta656132","meta656132",205294719,null)], null);
});

dynomics.ui.ui.t_dynomics$ui$ui656131.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui656131.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui656131";

dynomics.ui.ui.t_dynomics$ui$ui656131.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.ui.ui/t_dynomics$ui$ui656131");
});

dynomics.ui.ui.__GT_t_dynomics$ui$ui656131 = (function dynomics$ui$ui$main_view_$___GT_t_dynomics$ui$ui656131(main_view__$1,state__$1,owner__$1,meta656132){
return (new dynomics.ui.ui.t_dynomics$ui$ui656131(main_view__$1,state__$1,owner__$1,meta656132));
});

}

return (new dynomics.ui.ui.t_dynomics$ui$ui656131(dynomics$ui$ui$main_view,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Start the application!
 */
dynomics.ui.ui.start = (function dynomics$ui$ui$start(var_args){
var args656138 = [];
var len__25269__auto___656141 = arguments.length;
var i__25270__auto___656142 = (0);
while(true){
if((i__25270__auto___656142 < len__25269__auto___656141)){
args656138.push((arguments[i__25270__auto___656142]));

var G__656143 = (i__25270__auto___656142 + (1));
i__25270__auto___656142 = G__656143;
continue;
} else {
}
break;
}

var G__656140 = args656138.length;
switch (G__656140) {
case 0:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args656138.length)].join('')));

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