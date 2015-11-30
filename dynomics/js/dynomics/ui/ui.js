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
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),(function (p__884150){
var map__884151 = p__884150;
var map__884151__$1 = ((((!((map__884151 == null)))?((((map__884151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884151):map__884151);
var vx = cljs.core.get.call(null,map__884151__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__884151__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var x = cljs.core.get.call(null,map__884151__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__884151__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
if(typeof dynomics.ui.ui.t_dynomics$ui$ui884160 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui884160 = (function (make_function_selector_view,state,owner,functions,state_updates,meta884161){
this.make_function_selector_view = make_function_selector_view;
this.state = state;
this.owner = owner;
this.functions = functions;
this.state_updates = state_updates;
this.meta884161 = meta884161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui884160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (functions,state_updates){
return (function (_884162,meta884161__$1){
var self__ = this;
var _884162__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui884160(self__.make_function_selector_view,self__.state,self__.owner,self__.functions,self__.state_updates,meta884161__$1));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui884160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (functions,state_updates){
return (function (_884162){
var self__ = this;
var _884162__$1 = this;
return self__.meta884161;
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui884160.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui884160.prototype.om$core$IRender$render$arity$1 = ((function (functions,state_updates){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": "function_selector"},cljs.core.map.call(null,((function (this__32689__auto____$1,functions,state_updates){
return (function (p__884163){
var vec__884164 = p__884163;
var k = cljs.core.nth.call(null,vec__884164,(0),null);
var map__884165 = cljs.core.nth.call(null,vec__884164,(1),null);
var map__884165__$1 = ((((!((map__884165 == null)))?((((map__884165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884165):map__884165);
var naym = cljs.core.get.call(null,map__884165__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__884165__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return om.dom.div.call(null,{"className": "function_selector_item", "id": [cljs.core.str(cljs.core.name.call(null,k))].join(''), "onClick": ((function (vec__884164,k,map__884165,map__884165__$1,naym,description,this__32689__auto____$1,functions,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__884164,k,map__884165,map__884165__$1,naym,description,this__32689__auto____$1,functions,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null),k);
});})(vec__884164,k,map__884165,map__884165__$1,naym,description,this__32689__auto____$1,functions,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"description","description",-1428560544),naym], null)], null));

return null;
});})(vec__884164,k,map__884165,map__884165__$1,naym,description,this__32689__auto____$1,functions,state_updates))
},naym);
});})(this__32689__auto____$1,functions,state_updates))
,self__.functions));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui884160.getBasis = ((function (functions,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-function-selector-view","make-function-selector-view",516344898,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for selecting the current function"], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"functions","functions",1825482993,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta884161","meta884161",-1489809938,null)], null);
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui884160.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui884160.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui884160";

dynomics.ui.ui.t_dynomics$ui$ui884160.cljs$lang$ctorPrWriter = ((function (functions,state_updates){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.ui.ui/t_dynomics$ui$ui884160");
});})(functions,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui884160 = ((function (functions,state_updates){
return (function dynomics$ui$ui$make_function_selector_view_$___GT_t_dynomics$ui$ui884160(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta884161){
return (new dynomics.ui.ui.t_dynomics$ui$ui884160(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta884161));
});})(functions,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui884160(dynomics$ui$ui$make_function_selector_view,state,owner,functions,state_updates,null));
});
/**
 * Return a component to display a list
 *   of historical states which select a historical
 *   state on mouseover
 */
dynomics.ui.ui.make_history_selector_view = (function dynomics$ui$ui$make_history_selector_view(p__884167,owner){
var map__884178 = p__884167;
var map__884178__$1 = ((((!((map__884178 == null)))?((((map__884178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884178):map__884178);
var state = map__884178__$1;
var map__884179 = cljs.core.get.call(null,map__884178__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__884179__$1 = ((((!((map__884179 == null)))?((((map__884179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884179):map__884179);
var state_updates = cljs.core.get.call(null,map__884179__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var sh = cljs.core.get.call(null,map__884178__$1,new cljs.core.Keyword(null,"show-history","show-history",1972567130));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui884182 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui884182 = (function (make_history_selector_view,p__884167,owner,map__884178,state,map__884179,state_updates,sh,meta884183){
this.make_history_selector_view = make_history_selector_view;
this.p__884167 = p__884167;
this.owner = owner;
this.map__884178 = map__884178;
this.state = state;
this.map__884179 = map__884179;
this.state_updates = state_updates;
this.sh = sh;
this.meta884183 = meta884183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui884182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh){
return (function (_884184,meta884183__$1){
var self__ = this;
var _884184__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui884182(self__.make_history_selector_view,self__.p__884167,self__.owner,self__.map__884178,self__.state,self__.map__884179,self__.state_updates,self__.sh,meta884183__$1));
});})(map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui884182.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh){
return (function (_884184){
var self__ = this;
var _884184__$1 = this;
return self__.meta884183;
});})(map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui884182.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui884182.prototype.om$core$IRender$render$arity$1 = ((function (map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": "history_selector", "onClick": ((function (this__32689__auto____$1,map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh){
return (function (e){
return cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (this__32689__auto____$1,map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh){
return (function (s){
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),cljs.core.not);
});})(this__32689__auto____$1,map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh))
], null));
});})(this__32689__auto____$1,map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh))
},om.dom.div.call(null,{"className": "history_selector_text"},"History"),om.dom.div.call(null,{"className": (cljs.core.truth_(self__.sh)?"history_selector_visible":"history_selector_hidden")},cljs.core.map.call(null,((function (this__32689__auto____$1,map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh){
return (function (p__884185){
var map__884186 = p__884185;
var map__884186__$1 = ((((!((map__884186 == null)))?((((map__884186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884186):map__884186);
var history_item = map__884186__$1;
var action = cljs.core.get.call(null,map__884186__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var version = cljs.core.get.call(null,map__884186__$1,new cljs.core.Keyword(null,"version","version",425292698));
var previous_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)) - (1))));
var previous_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)));
return om.dom.div.call(null,{"className": [cljs.core.str("history_selector_item "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_action)))?"historical":""))].join(''), "id": [cljs.core.str("history_version_"),cljs.core.str(previous_version)].join(''), "onMouseOver": ((function (previous_action,previous_version,map__884186,map__884186__$1,history_item,action,version,this__32689__auto____$1,map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (previous_action,previous_version,map__884186,map__884186__$1,history_item,action,version,this__32689__auto____$1,map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh){
return (function (s){
return cljs.core.merge.call(null,om.core.value.call(null,history_item),cljs.core.select_keys.call(null,s,cljs.core.conj.call(null,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"history","history",-247395220))));
});})(previous_action,previous_version,map__884186,map__884186__$1,history_item,action,version,this__32689__auto____$1,map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desccription","desccription",-1060114044),[cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action))].join(''),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"id","id",-1388402092),version], null)], null));

return null;
});})(previous_action,previous_version,map__884186,map__884186__$1,history_item,action,version,this__32689__auto____$1,map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh))
},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action));
});})(this__32689__auto____$1,map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh))
,cljs.core.filter.call(null,((function (this__32689__auto____$1,map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh){
return (function (hi){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi)) - (1)))));
});})(this__32689__auto____$1,map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh))
,cljs.core.reverse.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.state),self__.state))))));
});})(map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui884182.getBasis = ((function (map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-history-selector-view","make-history-selector-view",1677763159,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Keyword(null,"show-history","show-history",1972567130),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a component to display a list\n  of historical states which select a historical\n  state on mouseover"], null)),new cljs.core.Symbol(null,"p__884167","p__884167",50203132,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__884178","map__884178",-1445843732,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__884179","map__884179",378776267,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Symbol(null,"meta884183","meta884183",865722620,null)], null);
});})(map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui884182.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui884182.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui884182";

dynomics.ui.ui.t_dynomics$ui$ui884182.cljs$lang$ctorPrWriter = ((function (map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.ui.ui/t_dynomics$ui$ui884182");
});})(map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui884182 = ((function (map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh){
return (function dynomics$ui$ui$make_history_selector_view_$___GT_t_dynomics$ui$ui884182(make_history_selector_view__$1,p__884167__$1,owner__$1,map__884178__$2,state__$1,map__884179__$2,state_updates__$1,sh__$1,meta884183){
return (new dynomics.ui.ui.t_dynomics$ui$ui884182(make_history_selector_view__$1,p__884167__$1,owner__$1,map__884178__$2,state__$1,map__884179__$2,state_updates__$1,sh__$1,meta884183));
});})(map__884178,map__884178__$1,state,map__884179,map__884179__$1,state_updates,sh))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui884182(dynomics$ui$ui$make_history_selector_view,p__884167,owner,map__884178__$1,state,map__884179__$1,state_updates,sh,null));
});
/**
 * Returns a component for the top header
 */
dynomics.ui.ui.make_header_view = (function dynomics$ui$ui$make_header_view(p__884188){
var map__884194 = p__884188;
var map__884194__$1 = ((((!((map__884194 == null)))?((((map__884194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884194):map__884194);
var state = map__884194__$1;
var logo_text = cljs.core.get.call(null,map__884194__$1,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
var app_name = cljs.core.get.call(null,map__884194__$1,new cljs.core.Keyword(null,"app-name","app-name",-268811251));
var app_version = cljs.core.get.call(null,map__884194__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui884196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui884196 = (function (make_header_view,p__884188,map__884194,state,logo_text,app_name,app_version,meta884197){
this.make_header_view = make_header_view;
this.p__884188 = p__884188;
this.map__884194 = map__884194;
this.state = state;
this.logo_text = logo_text;
this.app_name = app_name;
this.app_version = app_version;
this.meta884197 = meta884197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui884196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__884194,map__884194__$1,state,logo_text,app_name,app_version){
return (function (_884198,meta884197__$1){
var self__ = this;
var _884198__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui884196(self__.make_header_view,self__.p__884188,self__.map__884194,self__.state,self__.logo_text,self__.app_name,self__.app_version,meta884197__$1));
});})(map__884194,map__884194__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui884196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__884194,map__884194__$1,state,logo_text,app_name,app_version){
return (function (_884198){
var self__ = this;
var _884198__$1 = this;
return self__.meta884197;
});})(map__884194,map__884194__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui884196.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui884196.prototype.om$core$IRender$render$arity$1 = ((function (map__884194,map__884194__$1,state,logo_text,app_name,app_version){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": "top_component"},(cljs.core.truth_(self__.logo_text)?om.dom.div.call(null,{"className": "logo"},self__.logo_text):null),(cljs.core.truth_(self__.app_name)?om.dom.div.call(null,{"className": "headertitle"},[cljs.core.str(self__.app_name),cljs.core.str(" "),cljs.core.str(self__.app_version)].join('')):null),dynomics.space.ui.make_tools_palette_component.call(null,self__.state));
});})(map__884194,map__884194__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui884196.getBasis = ((function (map__884194,map__884194__$1,state,logo_text,app_name,app_version){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-header-view","make-header-view",2348093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the top header"], null)),new cljs.core.Symbol(null,"p__884188","p__884188",-377195247,null),new cljs.core.Symbol(null,"map__884194","map__884194",-1223096713,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"meta884197","meta884197",1010631700,null)], null);
});})(map__884194,map__884194__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui884196.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui884196.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui884196";

dynomics.ui.ui.t_dynomics$ui$ui884196.cljs$lang$ctorPrWriter = ((function (map__884194,map__884194__$1,state,logo_text,app_name,app_version){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.ui.ui/t_dynomics$ui$ui884196");
});})(map__884194,map__884194__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui884196 = ((function (map__884194,map__884194__$1,state,logo_text,app_name,app_version){
return (function dynomics$ui$ui$make_header_view_$___GT_t_dynomics$ui$ui884196(make_header_view__$1,p__884188__$1,map__884194__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,meta884197){
return (new dynomics.ui.ui.t_dynomics$ui$ui884196(make_header_view__$1,p__884188__$1,map__884194__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,meta884197));
});})(map__884194,map__884194__$1,state,logo_text,app_name,app_version))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui884196(dynomics$ui$ui$make_header_view,p__884188,map__884194__$1,state,logo_text,app_name,app_version,null));
});
dynomics.ui.ui.evaluate = (function dynomics$ui$ui$evaluate(s,sexp,f){
return cljs.js.eval.call(null,cljs.js.empty_state.call(null),sexp,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),f);
});
dynomics.ui.ui.make_footer_view = (function dynomics$ui$ui$make_footer_view(p__884199){
var map__884209 = p__884199;
var map__884209__$1 = ((((!((map__884209 == null)))?((((map__884209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884209):map__884209);
var state = map__884209__$1;
var map__884210 = cljs.core.get.call(null,map__884209__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__884210__$1 = ((((!((map__884210 == null)))?((((map__884210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884210):map__884210);
var state_updates = cljs.core.get.call(null,map__884210__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var map__884211 = cljs.core.get.call(null,map__884209__$1,new cljs.core.Keyword(null,"eval","eval",-1103567905));
var map__884211__$1 = ((((!((map__884211 == null)))?((((map__884211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884211):map__884211);
var last_result = cljs.core.get.call(null,map__884211__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var last_exps = cljs.core.get.call(null,map__884211__$1,new cljs.core.Keyword(null,"exps","exps",-877274249));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui884215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui884215 = (function (make_footer_view,p__884199,map__884209,state,map__884210,state_updates,map__884211,last_result,last_exps,meta884216){
this.make_footer_view = make_footer_view;
this.p__884199 = p__884199;
this.map__884209 = map__884209;
this.state = state;
this.map__884210 = map__884210;
this.state_updates = state_updates;
this.map__884211 = map__884211;
this.last_result = last_result;
this.last_exps = last_exps;
this.meta884216 = meta884216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui884215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps){
return (function (_884217,meta884216__$1){
var self__ = this;
var _884217__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui884215(self__.make_footer_view,self__.p__884199,self__.map__884209,self__.state,self__.map__884210,self__.state_updates,self__.map__884211,self__.last_result,self__.last_exps,meta884216__$1));
});})(map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui884215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps){
return (function (_884217){
var self__ = this;
var _884217__$1 = this;
return self__.meta884216;
});})(map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui884215.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui884215.prototype.om$core$IRender$render$arity$1 = ((function (map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps){
return (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": "bottom_component"},om.dom.input.call(null,{"className": "eval_input", "type": "text", "size": (64), "onKeyDown": ((function (this__32689__auto____$1,map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps){
return (function (e){
e.stopPropagation();

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"enter","enter",1792452624),dynomics.ui.ui.evt_to_keyword.call(null,e))){
var exps_884218 = e.target.value;
dynomics.ui.ui.evaluate.call(null,self__.state,cljs.tools.reader.read_string.call(null,exps_884218),((function (exps_884218,this__32689__auto____$1,map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps){
return (function (result){
cljs.core.println.call(null,cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002)], null),result));

return cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (exps_884218,this__32689__auto____$1,map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exps","exps",-877274249),exps_884218,new cljs.core.Keyword(null,"result","result",1415092211),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))?cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002)], null)):result)], null));
});})(exps_884218,this__32689__auto____$1,map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"description","description",-1428560544),"Evaluate"], null)], null));
});})(exps_884218,this__32689__auto____$1,map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps))
);
} else {
}

return null;
});})(this__32689__auto____$1,map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps))
}),om.dom.div.call(null,{"className": "eval_result"},[cljs.core.str("> "),cljs.core.str(self__.last_result)].join('')));
});})(map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui884215.getBasis = ((function (map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-footer-view","make-footer-view",-746293906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Keyword(null,"exps","exps",-877274249)], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__884199","p__884199",2087944703,null),new cljs.core.Symbol(null,"map__884209","map__884209",1527095085,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__884210","map__884210",-1526533515,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"map__884211","map__884211",-1012259281,null),new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Symbol(null,"meta884216","meta884216",1172242044,null)], null);
});})(map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui884215.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui884215.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui884215";

dynomics.ui.ui.t_dynomics$ui$ui884215.cljs$lang$ctorPrWriter = ((function (map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps){
return (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.ui.ui/t_dynomics$ui$ui884215");
});})(map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui884215 = ((function (map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps){
return (function dynomics$ui$ui$make_footer_view_$___GT_t_dynomics$ui$ui884215(make_footer_view__$1,p__884199__$1,map__884209__$2,state__$1,map__884210__$2,state_updates__$1,map__884211__$2,last_result__$1,last_exps__$1,meta884216){
return (new dynomics.ui.ui.t_dynomics$ui$ui884215(make_footer_view__$1,p__884199__$1,map__884209__$2,state__$1,map__884210__$2,state_updates__$1,map__884211__$2,last_result__$1,last_exps__$1,meta884216));
});})(map__884209,map__884209__$1,state,map__884210,map__884210__$1,state_updates,map__884211,map__884211__$1,last_result,last_exps))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui884215(dynomics$ui$ui$make_footer_view,p__884199,map__884209__$1,state,map__884210__$1,state_updates,map__884211__$1,last_result,last_exps,null));
});
dynomics.ui.ui.add_components = (function dynomics$ui$ui$add_components(state){
var seq__884223_884227 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null))))));
var chunk__884224_884228 = null;
var count__884225_884229 = (0);
var i__884226_884230 = (0);
while(true){
if((i__884226_884230 < count__884225_884229)){
var component_884231 = cljs.core._nth.call(null,chunk__884224_884228,i__884226_884230);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_884231);

var G__884232 = seq__884223_884227;
var G__884233 = chunk__884224_884228;
var G__884234 = count__884225_884229;
var G__884235 = (i__884226_884230 + (1));
seq__884223_884227 = G__884232;
chunk__884224_884228 = G__884233;
count__884225_884229 = G__884234;
i__884226_884230 = G__884235;
continue;
} else {
var temp__4425__auto___884236 = cljs.core.seq.call(null,seq__884223_884227);
if(temp__4425__auto___884236){
var seq__884223_884237__$1 = temp__4425__auto___884236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__884223_884237__$1)){
var c__25014__auto___884238 = cljs.core.chunk_first.call(null,seq__884223_884237__$1);
var G__884239 = cljs.core.chunk_rest.call(null,seq__884223_884237__$1);
var G__884240 = c__25014__auto___884238;
var G__884241 = cljs.core.count.call(null,c__25014__auto___884238);
var G__884242 = (0);
seq__884223_884227 = G__884239;
chunk__884224_884228 = G__884240;
count__884225_884229 = G__884241;
i__884226_884230 = G__884242;
continue;
} else {
var component_884243 = cljs.core.first.call(null,seq__884223_884237__$1);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_884243);

var G__884244 = cljs.core.next.call(null,seq__884223_884237__$1);
var G__884245 = null;
var G__884246 = (0);
var G__884247 = (0);
seq__884223_884227 = G__884244;
chunk__884224_884228 = G__884245;
count__884225_884229 = G__884246;
i__884226_884230 = G__884247;
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
var args884248 = [];
var len__25269__auto___884255 = arguments.length;
var i__25270__auto___884256 = (0);
while(true){
if((i__25270__auto___884256 < len__25269__auto___884255)){
args884248.push((arguments[i__25270__auto___884256]));

var G__884257 = (i__25270__auto___884256 + (1));
i__25270__auto___884256 = G__884257;
continue;
} else {
}
break;
}

var G__884250 = args884248.length;
switch (G__884250) {
case 1:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args884248.length)].join('')));

}
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.ui.add_keybindings.call(null,state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)));
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2 = (function (state,tools){
return cljs.core.reduce.call(null,(function (r,p__884251){
var vec__884252 = p__884251;
var k = cljs.core.nth.call(null,vec__884252,(0),null);
var map__884253 = cljs.core.nth.call(null,vec__884252,(1),null);
var map__884253__$1 = ((((!((map__884253 == null)))?((((map__884253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884253):map__884253);
var f = cljs.core.get.call(null,map__884253__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var kb = cljs.core.get.call(null,map__884253__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var naym = cljs.core.get.call(null,map__884253__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tools__$1 = cljs.core.get.call(null,map__884253__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
if(cljs.core.truth_(f)){
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),((function (vec__884252,k,map__884253,map__884253__$1,f,kb,naym,tools__$1){
return (function (s){
cljs.core.println.call(null,naym);

return f.call(null,s);
});})(vec__884252,k,map__884253,map__884253__$1,f,kb,naym,tools__$1))
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
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),(function (p__884302){
var map__884303 = p__884302;
var map__884303__$1 = ((((!((map__884303 == null)))?((((map__884303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884303):map__884303);
var map__884304 = cljs.core.get.call(null,map__884303__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__884304__$1 = ((((!((map__884304 == null)))?((((map__884304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884304):map__884304);
var state_updates = cljs.core.get.call(null,map__884304__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__884304__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var write_channel = cljs.core.get.call(null,map__884304__$1,new cljs.core.Keyword(null,"write-channel","write-channel",977573273));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (p__884307){
var map__884308 = p__884307;
var map__884308__$1 = ((((!((map__884308 == null)))?((((map__884308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884308):map__884308);
var vec__884309 = cljs.core.get.call(null,map__884308__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__884309,(0),null);
var y = cljs.core.nth.call(null,vec__884309,(1),null);
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__884308,map__884308__$1,vec__884309,x,y,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (p__884311){
var map__884312 = p__884311;
var map__884312__$1 = ((((!((map__884312 == null)))?((((map__884312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884312):map__884312);
var s = map__884312__$1;
var map__884313 = cljs.core.get.call(null,map__884312__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__884313__$1 = ((((!((map__884313 == null)))?((((map__884313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884313):map__884313);
var space = map__884313__$1;
var selected_nodes = cljs.core.get.call(null,map__884313__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,((function (map__884312,map__884312__$1,s,map__884313,map__884313__$1,space,selected_nodes,map__884308,map__884308__$1,vec__884309,x,y,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (r,path){
var tfn = ((((3) === cljs.core.count.call(null,path)))?((function (map__884312,map__884312__$1,s,map__884313,map__884313__$1,space,selected_nodes,map__884308,map__884308__$1,vec__884309,x,y,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (p,_,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,p], null)], null);
});})(map__884312,map__884312__$1,s,map__884313,map__884313__$1,space,selected_nodes,map__884308,map__884308__$1,vec__884309,x,y,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
:dynomics.space.core.mirror_node);
return cljs.core.reduce.call(null,((function (tfn,map__884312,map__884312__$1,s,map__884313,map__884313__$1,space,selected_nodes,map__884308,map__884308__$1,vec__884309,x,y,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (r__$1,p__884316){
var vec__884317 = p__884316;
var cpath = cljs.core.nth.call(null,vec__884317,(0),null);
var cpoint = cljs.core.nth.call(null,vec__884317,(1),null);
return cljs.core.assoc_in.call(null,r__$1,cljs.core.conj.call(null,cpath,new cljs.core.Keyword(null,"position","position",-2011731912)),cpoint);
});})(tfn,map__884312,map__884312__$1,s,map__884313,map__884313__$1,space,selected_nodes,map__884308,map__884308__$1,vec__884309,x,y,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
,r,tfn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),path,space));
});})(map__884312,map__884312__$1,s,map__884313,map__884313__$1,space,selected_nodes,map__884308,map__884308__$1,vec__884309,x,y,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
,s,selected_nodes);
});})(map__884308,map__884308__$1,vec__884309,x,y,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (p__884318){
var map__884319 = p__884318;
var map__884319__$1 = ((((!((map__884319 == null)))?((((map__884319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884319):map__884319);
var ss = map__884319__$1;
var vec__884320 = cljs.core.get.call(null,map__884319__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__884320,(0),null);
var y = cljs.core.nth.call(null,vec__884320,(1),null);
var id = cljs.core.get.call(null,map__884319__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__884319__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Select node to move ",path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

if(cljs.core.truth_(path)){
dynomics.space.ui.disable_pan_zoom_BANG_.call(null,ss);
} else {
}

if(cljs.core.truth_(path)){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__884319,map__884319__$1,ss,vec__884320,x,y,id,path,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (p__884322){
var map__884323 = p__884322;
var map__884323__$1 = ((((!((map__884323 == null)))?((((map__884323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884323):map__884323);
var s = map__884323__$1;
var map__884324 = cljs.core.get.call(null,map__884323__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__884324__$1 = ((((!((map__884324 == null)))?((((map__884324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884324):map__884324);
var selected_nodes = cljs.core.get.call(null,map__884324__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.assoc_in.call(null,(cljs.core.truth_(path)?cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path):s),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"move-offset","move-offset",2091828833)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(map__884319,map__884319__$1,ss,vec__884320,x,y,id,path,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null));
} else {
}

return null;
});})(map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (p__884327){
var map__884328 = p__884327;
var map__884328__$1 = ((((!((map__884328 == null)))?((((map__884328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884328):map__884328);
var ss = map__884328__$1;
var vec__884329 = cljs.core.get.call(null,map__884328__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__884329,(0),null);
var y = cljs.core.nth.call(null,vec__884329,(1),null);
var path = cljs.core.get.call(null,map__884328__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Unselect node ",path);

dynomics.space.ui.enable_pan_zoom_BANG_.call(null,ss);

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__884328,map__884328__$1,ss,vec__884329,x,y,path,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (s){
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.disj,path);
});})(map__884328,map__884328__$1,ss,vec__884329,x,y,path,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"unselect","unselect",-1124322706),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Move "),cljs.core.str(cljs.core.get.call(null,path,(2))),cljs.core.str(":"),cljs.core.str(cljs.core.last.call(null,path))].join('')], null)], null));

return null;
});})(map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (p__884331){
var map__884332 = p__884331;
var map__884332__$1 = ((((!((map__884332 == null)))?((((map__884332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884332):map__884332);
var vec__884333 = cljs.core.get.call(null,map__884332__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__884333,(0),null);
var y = cljs.core.nth.call(null,vec__884333,(1),null);
cljs.core.println.call(null,"Add node ");

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__884332,map__884332__$1,vec__884333,x,y,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (s){
return dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});})(map__884332,map__884332__$1,vec__884333,x,y,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Add node")].join('')], null)], null));

return null;
});})(map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (p__884335){
var map__884336 = p__884335;
var map__884336__$1 = ((((!((map__884336 == null)))?((((map__884336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884336):map__884336);
var vec__884337 = cljs.core.get.call(null,map__884336__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__884337,(0),null);
var y = cljs.core.nth.call(null,vec__884337,(1),null);
var id = cljs.core.get.call(null,map__884336__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__884336__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Connect node ",path);

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__884336,map__884336__$1,vec__884337,x,y,id,path,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (s){
return dynomics.space.core.make_connections.call(null,cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path));
});})(map__884336,map__884336__$1,vec__884337,x,y,id,path,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Connect "),cljs.core.str(id)].join('')], null)], null));

return null;
});})(map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (p__884339){
var map__884340 = p__884339;
var map__884340__$1 = ((((!((map__884340 == null)))?((((map__884340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884340):map__884340);
var mp = cljs.core.get.call(null,map__884340__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__884340__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Select node ",path);

if(cljs.core.truth_(path)){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__884340,map__884340__$1,mp,path,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel){
return (function (s){
return dynomics.ui.ui.select_node.call(null,s,path,mp);
});})(map__884340,map__884340__$1,mp,path,map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null));
} else {
}

return null;
});})(map__884303,map__884303__$1,map__884304,map__884304__$1,state_updates,msgs,write_channel))
], null)], null);
}),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"load","load",-1318641184)], null),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load space",new cljs.core.Keyword(null,"description","description",-1428560544),"Restores the last saved space",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C3",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.get_state_BANG_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Remove selected",new cljs.core.Keyword(null,"description","description",-1428560544),"Removes selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2612",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.comp.call(null,dynomics.space.core.deselect_all,dynomics.space.core.remove_selected_nodes)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deselects all selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deselect_all], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Connect nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect nodes to make curves \u2312",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u223E",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Save space",new cljs.core.Keyword(null,"description","description",-1428560544),"Saves the space in your browser for later (sorry I will swap this icon for the familiar\n                                    floppy-disk icon when I find it",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.persist_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Node types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected nodes",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,p__884342){
var map__884343 = p__884342;
var map__884343__$1 = ((((!((map__884343 == null)))?((((map__884343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884343):map__884343);
var id = cljs.core.get.call(null,map__884343__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Node type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected nodes to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_node_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dynomics.space.core.node_types))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Select nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Select nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2A03",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"h","h",1109658740)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Move nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Move the selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2B09",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"f","f",-1597136552)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Add nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Add some nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"+",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"j","j",-1397974765)], null)])], null)], null));
});
dynomics.ui.ui.left_right_top_view = (function dynomics$ui$ui$left_right_top_view(state){
if(typeof dynomics.ui.ui.t_dynomics$ui$ui884350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui884350 = (function (left_right_top_view,state,meta884351){
this.left_right_top_view = left_right_top_view;
this.state = state;
this.meta884351 = meta884351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui884350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_884352,meta884351__$1){
var self__ = this;
var _884352__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui884350(self__.left_right_top_view,self__.state,meta884351__$1));
});

dynomics.ui.ui.t_dynomics$ui$ui884350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_884352){
var self__ = this;
var _884352__$1 = this;
return self__.meta884351;
});

dynomics.ui.ui.t_dynomics$ui$ui884350.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui884350.prototype.om$core$IRender$render$arity$1 = (function (this__32689__auto__){
var self__ = this;
var this__32689__auto____$1 = this;
return om.dom.div.call(null,{"className": "ui"},null,om.dom.div.call(null,{"className": "main_ui"},om.dom.div.call(null,{"className": "left_component"},om.core.build.call(null,dynomics.ui.ui.make_function_selector_view,self__.state),om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)),om.core.build.call(null,dynomics.ui.ui.make_history_selector_view,self__.state)),om.dom.div.call(null,{"className": "right_component selectable"},cljs.core.map.call(null,((function (this__32689__auto____$1){
return (function (p__884353){
var vec__884354 = p__884353;
var id = cljs.core.nth.call(null,vec__884354,(0),null);
var component = cljs.core.nth.call(null,vec__884354,(1),null);
return om.core.build.call(null,new cljs.core.Keyword(null,"om-builder","om-builder",1876809590).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(component).call(null,self__.state));
});})(this__32689__auto____$1))
,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"om-builder","om-builder",1876809590)),cljs.core.val),cljs.core.dissoc.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220)))))),om.core.build.call(null,dynomics.ui.ui.make_header_view,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)));
});

dynomics.ui.ui.t_dynomics$ui$ui884350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"left-right-top-view","left-right-top-view",150328751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta884351","meta884351",-63220503,null)], null);
});

dynomics.ui.ui.t_dynomics$ui$ui884350.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui884350.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui884350";

dynomics.ui.ui.t_dynomics$ui$ui884350.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.ui.ui/t_dynomics$ui$ui884350");
});

dynomics.ui.ui.__GT_t_dynomics$ui$ui884350 = (function dynomics$ui$ui$left_right_top_view_$___GT_t_dynomics$ui$ui884350(left_right_top_view__$1,state__$1,meta884351){
return (new dynomics.ui.ui.t_dynomics$ui$ui884350(left_right_top_view__$1,state__$1,meta884351));
});

}

return (new dynomics.ui.ui.t_dynomics$ui$ui884350(dynomics$ui$ui$left_right_top_view,state,null));
});
dynomics.ui.ui.main_view = (function dynomics$ui$ui$main_view(){
return (function (state,owner){
if(typeof dynomics.ui.ui.t_dynomics$ui$ui884362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui884362 = (function (main_view,state,owner,meta884363){
this.main_view = main_view;
this.state = state;
this.owner = owner;
this.meta884363 = meta884363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui884362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_884364,meta884363__$1){
var self__ = this;
var _884364__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui884362(self__.main_view,self__.state,self__.owner,meta884363__$1));
});

dynomics.ui.ui.t_dynomics$ui$ui884362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_884364){
var self__ = this;
var _884364__$1 = this;
return self__.meta884363;
});

dynomics.ui.ui.t_dynomics$ui$ui884362.prototype.om$core$IWillMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui884362.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null));

dynomics.ui.ui.add_events_BANG_.call(null,self__.state);

return dynomics.ui.messaging.setup_updates.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),((function (___$1){
return (function (p__884365){
var map__884366 = p__884365;
var map__884366__$1 = ((((!((map__884366 == null)))?((((map__884366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__884366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__884366):map__884366);
var f = cljs.core.get.call(null,map__884366__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var a = cljs.core.get.call(null,map__884366__$1,new cljs.core.Keyword(null,"action","action",-811238024));
try{return om.core.transact_BANG_.call(null,self__.state,((function (map__884366,map__884366__$1,f,a,___$1){
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
});})(map__884366,map__884366__$1,f,a,___$1))
);
}catch (e884368){if((e884368 instanceof Error)){
var e = e884368;
return cljs.core.println.call(null,e);
} else {
throw e884368;

}
}});})(___$1))
);
});

dynomics.ui.ui.t_dynomics$ui$ui884362.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui884362.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,dynomics.ui.ui.left_right_top_view,self__.state);
});

dynomics.ui.ui.t_dynomics$ui$ui884362.prototype.om$core$IDidMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui884362.prototype.om$core$IDidMount$did_mount$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
return om.core.transact_BANG_.call(null,self__.state,((function (it__$1){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),dynomics.space.ui.add_pan_zoom_BANG_.call(null));
});})(it__$1))
);
});

dynomics.ui.ui.t_dynomics$ui$ui884362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta884363","meta884363",336644585,null)], null);
});

dynomics.ui.ui.t_dynomics$ui$ui884362.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui884362.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui884362";

dynomics.ui.ui.t_dynomics$ui$ui884362.cljs$lang$ctorPrWriter = (function (this__24809__auto__,writer__24810__auto__,opt__24811__auto__){
return cljs.core._write.call(null,writer__24810__auto__,"dynomics.ui.ui/t_dynomics$ui$ui884362");
});

dynomics.ui.ui.__GT_t_dynomics$ui$ui884362 = (function dynomics$ui$ui$main_view_$___GT_t_dynomics$ui$ui884362(main_view__$1,state__$1,owner__$1,meta884363){
return (new dynomics.ui.ui.t_dynomics$ui$ui884362(main_view__$1,state__$1,owner__$1,meta884363));
});

}

return (new dynomics.ui.ui.t_dynomics$ui$ui884362(dynomics$ui$ui$main_view,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Start the application!
 */
dynomics.ui.ui.start = (function dynomics$ui$ui$start(var_args){
var args884369 = [];
var len__25269__auto___884372 = arguments.length;
var i__25270__auto___884373 = (0);
while(true){
if((i__25270__auto___884373 < len__25269__auto___884372)){
args884369.push((arguments[i__25270__auto___884373]));

var G__884374 = (i__25270__auto___884373 + (1));
i__25270__auto___884373 = G__884374;
continue;
} else {
}
break;
}

var G__884371 = args884369.length;
switch (G__884371) {
case 0:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args884369.length)].join('')));

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