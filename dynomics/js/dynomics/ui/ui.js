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
dynomics.ui.ui.animation_frame = (function (){var or__24165__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
var or__24165__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__24165__auto____$1)){
return or__24165__auto____$1;
} else {
var or__24165__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__24165__auto____$2)){
return or__24165__auto____$2;
} else {
var or__24165__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__24165__auto____$3)){
return or__24165__auto____$3;
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
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),(function (p__53738){
var map__53739 = p__53738;
var map__53739__$1 = ((((!((map__53739 == null)))?((((map__53739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53739):map__53739);
var vx = cljs.core.get.call(null,map__53739__$1,new cljs.core.Keyword(null,"vx","vx",-1685168462));
var vy = cljs.core.get.call(null,map__53739__$1,new cljs.core.Keyword(null,"vy","vy",-2018509997));
var x = cljs.core.get.call(null,map__53739__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__53739__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
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
if(typeof dynomics.ui.ui.t_dynomics$ui$ui53748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui53748 = (function (make_function_selector_view,state,owner,functions,state_updates,meta53749){
this.make_function_selector_view = make_function_selector_view;
this.state = state;
this.owner = owner;
this.functions = functions;
this.state_updates = state_updates;
this.meta53749 = meta53749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui53748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (functions,state_updates){
return (function (_53750,meta53749__$1){
var self__ = this;
var _53750__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui53748(self__.make_function_selector_view,self__.state,self__.owner,self__.functions,self__.state_updates,meta53749__$1));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui53748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (functions,state_updates){
return (function (_53750){
var self__ = this;
var _53750__$1 = this;
return self__.meta53749;
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui53748.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui53748.prototype.om$core$IRender$render$arity$1 = ((function (functions,state_updates){
return (function (this__38982__auto__){
var self__ = this;
var this__38982__auto____$1 = this;
return om.dom.div.call(null,{"className": "function_selector"},cljs.core.map.call(null,((function (this__38982__auto____$1,functions,state_updates){
return (function (p__53751){
var vec__53752 = p__53751;
var k = cljs.core.nth.call(null,vec__53752,(0),null);
var map__53753 = cljs.core.nth.call(null,vec__53752,(1),null);
var map__53753__$1 = ((((!((map__53753 == null)))?((((map__53753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53753):map__53753);
var naym = cljs.core.get.call(null,map__53753__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.call(null,map__53753__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return om.dom.div.call(null,{"className": "function_selector_item", "id": [cljs.core.str(cljs.core.name.call(null,k))].join(''), "onClick": ((function (vec__53752,k,map__53753,map__53753__$1,naym,description,this__38982__auto____$1,functions,state_updates){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__53752,k,map__53753,map__53753__$1,naym,description,this__38982__auto____$1,functions,state_updates){
return (function (s){
return cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"current-function","current-function",1894670892)], null),k);
});})(vec__53752,k,map__53753,map__53753__$1,naym,description,this__38982__auto____$1,functions,state_updates))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"description","description",-1428560544),naym], null)], null));

return null;
});})(vec__53752,k,map__53753,map__53753__$1,naym,description,this__38982__auto____$1,functions,state_updates))
},naym);
});})(this__38982__auto____$1,functions,state_updates))
,self__.functions));
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui53748.getBasis = ((function (functions,state_updates){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-function-selector-view","make-function-selector-view",516344898,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for selecting the current function"], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"functions","functions",1825482993,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"meta53749","meta53749",-1881129731,null)], null);
});})(functions,state_updates))
;

dynomics.ui.ui.t_dynomics$ui$ui53748.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui53748.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui53748";

dynomics.ui.ui.t_dynomics$ui$ui53748.cljs$lang$ctorPrWriter = ((function (functions,state_updates){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.ui.ui/t_dynomics$ui$ui53748");
});})(functions,state_updates))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui53748 = ((function (functions,state_updates){
return (function dynomics$ui$ui$make_function_selector_view_$___GT_t_dynomics$ui$ui53748(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta53749){
return (new dynomics.ui.ui.t_dynomics$ui$ui53748(make_function_selector_view__$1,state__$1,owner__$1,functions__$1,state_updates__$1,meta53749));
});})(functions,state_updates))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui53748(dynomics$ui$ui$make_function_selector_view,state,owner,functions,state_updates,null));
});
/**
 * Return a component to display a list
 *   of historical states which select a historical
 *   state on mouseover
 */
dynomics.ui.ui.make_history_selector_view = (function dynomics$ui$ui$make_history_selector_view(p__53755,owner){
var map__53766 = p__53755;
var map__53766__$1 = ((((!((map__53766 == null)))?((((map__53766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53766):map__53766);
var state = map__53766__$1;
var map__53767 = cljs.core.get.call(null,map__53766__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__53767__$1 = ((((!((map__53767 == null)))?((((map__53767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53767):map__53767);
var state_updates = cljs.core.get.call(null,map__53767__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var sh = cljs.core.get.call(null,map__53766__$1,new cljs.core.Keyword(null,"show-history","show-history",1972567130));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui53770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui53770 = (function (make_history_selector_view,p__53755,owner,map__53766,state,map__53767,state_updates,sh,meta53771){
this.make_history_selector_view = make_history_selector_view;
this.p__53755 = p__53755;
this.owner = owner;
this.map__53766 = map__53766;
this.state = state;
this.map__53767 = map__53767;
this.state_updates = state_updates;
this.sh = sh;
this.meta53771 = meta53771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui53770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh){
return (function (_53772,meta53771__$1){
var self__ = this;
var _53772__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui53770(self__.make_history_selector_view,self__.p__53755,self__.owner,self__.map__53766,self__.state,self__.map__53767,self__.state_updates,self__.sh,meta53771__$1));
});})(map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui53770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh){
return (function (_53772){
var self__ = this;
var _53772__$1 = this;
return self__.meta53771;
});})(map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui53770.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui53770.prototype.om$core$IRender$render$arity$1 = ((function (map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh){
return (function (this__38982__auto__){
var self__ = this;
var this__38982__auto____$1 = this;
return om.dom.div.call(null,{"className": "history_selector", "onClick": ((function (this__38982__auto____$1,map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh){
return (function (e){
return cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (this__38982__auto____$1,map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh){
return (function (s){
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-history","show-history",1972567130)], null),cljs.core.not);
});})(this__38982__auto____$1,map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh))
], null));
});})(this__38982__auto____$1,map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh))
},om.dom.div.call(null,{"className": "history_selector_text"},"History"),om.dom.div.call(null,{"className": (cljs.core.truth_(self__.sh)?"history_selector_visible":"history_selector_hidden")},cljs.core.map.call(null,((function (this__38982__auto____$1,map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh){
return (function (p__53773){
var map__53774 = p__53773;
var map__53774__$1 = ((((!((map__53774 == null)))?((((map__53774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53774):map__53774);
var history_item = map__53774__$1;
var action = cljs.core.get.call(null,map__53774__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var version = cljs.core.get.call(null,map__53774__$1,new cljs.core.Keyword(null,"version","version",425292698));
var previous_action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)) - (1))));
var previous_version = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(history_item)));
return om.dom.div.call(null,{"className": [cljs.core.str("history_selector_item "),cljs.core.str(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_action)))?"historical":""))].join(''), "id": [cljs.core.str("history_version_"),cljs.core.str(previous_version)].join(''), "onMouseOver": ((function (previous_action,previous_version,map__53774,map__53774__$1,history_item,action,version,this__38982__auto____$1,map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh){
return (function (e){
cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (previous_action,previous_version,map__53774,map__53774__$1,history_item,action,version,this__38982__auto____$1,map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh){
return (function (s){
return cljs.core.merge.call(null,om.core.value.call(null,history_item),cljs.core.select_keys.call(null,s,cljs.core.conj.call(null,new cljs.core.Keyword(null,"dont-record","dont-record",577283045).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"history","history",-247395220))));
});})(previous_action,previous_version,map__53774,map__53774__$1,history_item,action,version,this__38982__auto____$1,map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"desccription","desccription",-1060114044),[cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action))].join(''),new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"history-item","history-item",-894421182),new cljs.core.Keyword(null,"id","id",-1388402092),version], null)], null));

return null;
});})(previous_action,previous_version,map__53774,map__53774__$1,history_item,action,version,this__38982__auto____$1,map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh))
},new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(previous_action));
});})(this__38982__auto____$1,map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh))
,cljs.core.filter.call(null,((function (this__38982__auto____$1,map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh){
return (function (hi){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi),(cljs.core.count.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(hi)) - (1)))));
});})(this__38982__auto____$1,map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh))
,cljs.core.reverse.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(self__.state),self__.state))))));
});})(map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui53770.getBasis = ((function (map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-history-selector-view","make-history-selector-view",1677763159,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Keyword(null,"show-history","show-history",1972567130),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a component to display a list\n  of historical states which select a historical\n  state on mouseover"], null)),new cljs.core.Symbol(null,"p__53755","p__53755",-846819080,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__53766","map__53766",-1646763688,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__53767","map__53767",-1523648679,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"sh","sh",958087520,null),new cljs.core.Symbol(null,"meta53771","meta53771",525016170,null)], null);
});})(map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh))
;

dynomics.ui.ui.t_dynomics$ui$ui53770.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui53770.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui53770";

dynomics.ui.ui.t_dynomics$ui$ui53770.cljs$lang$ctorPrWriter = ((function (map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.ui.ui/t_dynomics$ui$ui53770");
});})(map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui53770 = ((function (map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh){
return (function dynomics$ui$ui$make_history_selector_view_$___GT_t_dynomics$ui$ui53770(make_history_selector_view__$1,p__53755__$1,owner__$1,map__53766__$2,state__$1,map__53767__$2,state_updates__$1,sh__$1,meta53771){
return (new dynomics.ui.ui.t_dynomics$ui$ui53770(make_history_selector_view__$1,p__53755__$1,owner__$1,map__53766__$2,state__$1,map__53767__$2,state_updates__$1,sh__$1,meta53771));
});})(map__53766,map__53766__$1,state,map__53767,map__53767__$1,state_updates,sh))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui53770(dynomics$ui$ui$make_history_selector_view,p__53755,owner,map__53766__$1,state,map__53767__$1,state_updates,sh,null));
});
/**
 * Returns a component for the top header
 */
dynomics.ui.ui.make_header_view = (function dynomics$ui$ui$make_header_view(p__53776){
var map__53782 = p__53776;
var map__53782__$1 = ((((!((map__53782 == null)))?((((map__53782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53782):map__53782);
var state = map__53782__$1;
var logo_text = cljs.core.get.call(null,map__53782__$1,new cljs.core.Keyword(null,"logo-text","logo-text",-580816517));
var app_name = cljs.core.get.call(null,map__53782__$1,new cljs.core.Keyword(null,"app-name","app-name",-268811251));
var app_version = cljs.core.get.call(null,map__53782__$1,new cljs.core.Keyword(null,"app-version","app-version",361554836));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui53784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui53784 = (function (make_header_view,p__53776,map__53782,state,logo_text,app_name,app_version,meta53785){
this.make_header_view = make_header_view;
this.p__53776 = p__53776;
this.map__53782 = map__53782;
this.state = state;
this.logo_text = logo_text;
this.app_name = app_name;
this.app_version = app_version;
this.meta53785 = meta53785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui53784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53782,map__53782__$1,state,logo_text,app_name,app_version){
return (function (_53786,meta53785__$1){
var self__ = this;
var _53786__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui53784(self__.make_header_view,self__.p__53776,self__.map__53782,self__.state,self__.logo_text,self__.app_name,self__.app_version,meta53785__$1));
});})(map__53782,map__53782__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui53784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53782,map__53782__$1,state,logo_text,app_name,app_version){
return (function (_53786){
var self__ = this;
var _53786__$1 = this;
return self__.meta53785;
});})(map__53782,map__53782__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui53784.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui53784.prototype.om$core$IRender$render$arity$1 = ((function (map__53782,map__53782__$1,state,logo_text,app_name,app_version){
return (function (this__38982__auto__){
var self__ = this;
var this__38982__auto____$1 = this;
return om.dom.div.call(null,{"className": "top_component"},(cljs.core.truth_(self__.logo_text)?om.dom.div.call(null,{"className": "logo"},self__.logo_text):null),(cljs.core.truth_(self__.app_name)?om.dom.div.call(null,{"className": "headertitle"},[cljs.core.str(self__.app_name),cljs.core.str(" "),cljs.core.str(self__.app_version)].join('')):null),dynomics.space.ui.make_tools_palette_component.call(null,self__.state));
});})(map__53782,map__53782__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui53784.getBasis = ((function (map__53782,map__53782__$1,state,logo_text,app_name,app_version){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-header-view","make-header-view",2348093,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a component for the top header"], null)),new cljs.core.Symbol(null,"p__53776","p__53776",735626555,null),new cljs.core.Symbol(null,"map__53782","map__53782",1238548369,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"logo-text","logo-text",1059715010,null),new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"app-version","app-version",2002086363,null),new cljs.core.Symbol(null,"meta53785","meta53785",-1674879808,null)], null);
});})(map__53782,map__53782__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.t_dynomics$ui$ui53784.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui53784.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui53784";

dynomics.ui.ui.t_dynomics$ui$ui53784.cljs$lang$ctorPrWriter = ((function (map__53782,map__53782__$1,state,logo_text,app_name,app_version){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.ui.ui/t_dynomics$ui$ui53784");
});})(map__53782,map__53782__$1,state,logo_text,app_name,app_version))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui53784 = ((function (map__53782,map__53782__$1,state,logo_text,app_name,app_version){
return (function dynomics$ui$ui$make_header_view_$___GT_t_dynomics$ui$ui53784(make_header_view__$1,p__53776__$1,map__53782__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,meta53785){
return (new dynomics.ui.ui.t_dynomics$ui$ui53784(make_header_view__$1,p__53776__$1,map__53782__$2,state__$1,logo_text__$1,app_name__$1,app_version__$1,meta53785));
});})(map__53782,map__53782__$1,state,logo_text,app_name,app_version))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui53784(dynomics$ui$ui$make_header_view,p__53776,map__53782__$1,state,logo_text,app_name,app_version,null));
});
dynomics.ui.ui.evaluate = (function dynomics$ui$ui$evaluate(s,sexp,f){
return cljs.js.eval.call(null,cljs.js.empty_state.call(null),sexp,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),f);
});
dynomics.ui.ui.make_footer_view = (function dynomics$ui$ui$make_footer_view(p__53787){
var map__53797 = p__53787;
var map__53797__$1 = ((((!((map__53797 == null)))?((((map__53797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53797):map__53797);
var state = map__53797__$1;
var map__53798 = cljs.core.get.call(null,map__53797__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__53798__$1 = ((((!((map__53798 == null)))?((((map__53798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53798):map__53798);
var state_updates = cljs.core.get.call(null,map__53798__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var map__53799 = cljs.core.get.call(null,map__53797__$1,new cljs.core.Keyword(null,"eval","eval",-1103567905));
var map__53799__$1 = ((((!((map__53799 == null)))?((((map__53799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53799):map__53799);
var last_result = cljs.core.get.call(null,map__53799__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var last_exps = cljs.core.get.call(null,map__53799__$1,new cljs.core.Keyword(null,"exps","exps",-877274249));
if(typeof dynomics.ui.ui.t_dynomics$ui$ui53803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui53803 = (function (make_footer_view,p__53787,map__53797,state,map__53798,state_updates,map__53799,last_result,last_exps,meta53804){
this.make_footer_view = make_footer_view;
this.p__53787 = p__53787;
this.map__53797 = map__53797;
this.state = state;
this.map__53798 = map__53798;
this.state_updates = state_updates;
this.map__53799 = map__53799;
this.last_result = last_result;
this.last_exps = last_exps;
this.meta53804 = meta53804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui53803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps){
return (function (_53805,meta53804__$1){
var self__ = this;
var _53805__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui53803(self__.make_footer_view,self__.p__53787,self__.map__53797,self__.state,self__.map__53798,self__.state_updates,self__.map__53799,self__.last_result,self__.last_exps,meta53804__$1));
});})(map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui53803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps){
return (function (_53805){
var self__ = this;
var _53805__$1 = this;
return self__.meta53804;
});})(map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui53803.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui53803.prototype.om$core$IRender$render$arity$1 = ((function (map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps){
return (function (this__38982__auto__){
var self__ = this;
var this__38982__auto____$1 = this;
return om.dom.div.call(null,{"className": "bottom_component"},om.dom.input.call(null,{"className": "eval_input", "type": "text", "size": (64), "onKeyDown": ((function (this__38982__auto____$1,map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps){
return (function (e){
e.stopPropagation();

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"enter","enter",1792452624),dynomics.ui.ui.evt_to_keyword.call(null,e))){
var exps_53806 = e.target.value;
dynomics.ui.ui.evaluate.call(null,self__.state,cljs.tools.reader.read_string.call(null,exps_53806),((function (exps_53806,this__38982__auto____$1,map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps){
return (function (result){
cljs.core.println.call(null,cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002)], null),result));

return cljs.core.async.put_BANG_.call(null,self__.state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (exps_53806,this__38982__auto____$1,map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exps","exps",-877274249),exps_53806,new cljs.core.Keyword(null,"result","result",1415092211),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))?cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002)], null)):result)], null));
});})(exps_53806,this__38982__auto____$1,map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"description","description",-1428560544),"Evaluate"], null)], null));
});})(exps_53806,this__38982__auto____$1,map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps))
);
} else {
}

return null;
});})(this__38982__auto____$1,map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps))
}),om.dom.div.call(null,{"className": "eval_result"},[cljs.core.str("> "),cljs.core.str(self__.last_result)].join('')));
});})(map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui53803.getBasis = ((function (map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"make-footer-view","make-footer-view",-746293906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null)], null)], null),new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Keyword(null,"exps","exps",-877274249)], null),new cljs.core.Keyword(null,"eval","eval",-1103567905),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"state","state",-348086572,null)], true, false)], null)))], null)),new cljs.core.Symbol(null,"p__53787","p__53787",2005392920,null),new cljs.core.Symbol(null,"map__53797","map__53797",1714697027,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"map__53798","map__53798",-653985394,null),new cljs.core.Symbol(null,"state-updates","state-updates",23403688,null),new cljs.core.Symbol(null,"map__53799","map__53799",1119424473,null),new cljs.core.Symbol(null,"last-result","last-result",608012457,null),new cljs.core.Symbol(null,"last-exps","last-exps",-1587487039,null),new cljs.core.Symbol(null,"meta53804","meta53804",-1936753179,null)], null);
});})(map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps))
;

dynomics.ui.ui.t_dynomics$ui$ui53803.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui53803.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui53803";

dynomics.ui.ui.t_dynomics$ui$ui53803.cljs$lang$ctorPrWriter = ((function (map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps){
return (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.ui.ui/t_dynomics$ui$ui53803");
});})(map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps))
;

dynomics.ui.ui.__GT_t_dynomics$ui$ui53803 = ((function (map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps){
return (function dynomics$ui$ui$make_footer_view_$___GT_t_dynomics$ui$ui53803(make_footer_view__$1,p__53787__$1,map__53797__$2,state__$1,map__53798__$2,state_updates__$1,map__53799__$2,last_result__$1,last_exps__$1,meta53804){
return (new dynomics.ui.ui.t_dynomics$ui$ui53803(make_footer_view__$1,p__53787__$1,map__53797__$2,state__$1,map__53798__$2,state_updates__$1,map__53799__$2,last_result__$1,last_exps__$1,meta53804));
});})(map__53797,map__53797__$1,state,map__53798,map__53798__$1,state_updates,map__53799,map__53799__$1,last_result,last_exps))
;

}

return (new dynomics.ui.ui.t_dynomics$ui$ui53803(dynomics$ui$ui$make_footer_view,p__53787,map__53797__$1,state,map__53798__$1,state_updates,map__53799__$1,last_result,last_exps,null));
});
dynomics.ui.ui.add_components = (function dynomics$ui$ui$add_components(state){
var seq__53811_53815 = cljs.core.seq.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),cljs.core.vals.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null))))));
var chunk__53812_53816 = null;
var count__53813_53817 = (0);
var i__53814_53818 = (0);
while(true){
if((i__53814_53818 < count__53813_53817)){
var component_53819 = cljs.core._nth.call(null,chunk__53812_53816,i__53814_53818);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_53819);

var G__53820 = seq__53811_53815;
var G__53821 = chunk__53812_53816;
var G__53822 = count__53813_53817;
var G__53823 = (i__53814_53818 + (1));
seq__53811_53815 = G__53820;
chunk__53812_53816 = G__53821;
count__53813_53817 = G__53822;
i__53814_53818 = G__53823;
continue;
} else {
var temp__4425__auto___53824 = cljs.core.seq.call(null,seq__53811_53815);
if(temp__4425__auto___53824){
var seq__53811_53825__$1 = temp__4425__auto___53824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53811_53825__$1)){
var c__24968__auto___53826 = cljs.core.chunk_first.call(null,seq__53811_53825__$1);
var G__53827 = cljs.core.chunk_rest.call(null,seq__53811_53825__$1);
var G__53828 = c__24968__auto___53826;
var G__53829 = cljs.core.count.call(null,c__24968__auto___53826);
var G__53830 = (0);
seq__53811_53815 = G__53827;
chunk__53812_53816 = G__53828;
count__53813_53817 = G__53829;
i__53814_53818 = G__53830;
continue;
} else {
var component_53831 = cljs.core.first.call(null,seq__53811_53825__$1);
dynomics.ui.messaging.subscribe_BANG_.call(null,state,component_53831);

var G__53832 = cljs.core.next.call(null,seq__53811_53825__$1);
var G__53833 = null;
var G__53834 = (0);
var G__53835 = (0);
seq__53811_53815 = G__53832;
chunk__53812_53816 = G__53833;
count__53813_53817 = G__53834;
i__53814_53818 = G__53835;
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
var args53836 = [];
var len__25223__auto___53843 = arguments.length;
var i__25224__auto___53844 = (0);
while(true){
if((i__25224__auto___53844 < len__25223__auto___53843)){
args53836.push((arguments[i__25224__auto___53844]));

var G__53845 = (i__25224__auto___53844 + (1));
i__25224__auto___53844 = G__53845;
continue;
} else {
}
break;
}

var G__53838 = args53836.length;
switch (G__53838) {
case 1:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53836.length)].join('')));

}
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$1 = (function (state){
return dynomics.ui.ui.add_keybindings.call(null,state,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"tools","tools",-1241731990)], null)));
});

dynomics.ui.ui.add_keybindings.cljs$core$IFn$_invoke$arity$2 = (function (state,tools){
return cljs.core.reduce.call(null,(function (r,p__53839){
var vec__53840 = p__53839;
var k = cljs.core.nth.call(null,vec__53840,(0),null);
var map__53841 = cljs.core.nth.call(null,vec__53840,(1),null);
var map__53841__$1 = ((((!((map__53841 == null)))?((((map__53841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53841):map__53841);
var f = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var kb = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"keybinding","keybinding",1090151579));
var naym = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var tools__$1 = cljs.core.get.call(null,map__53841__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
if(cljs.core.truth_(f)){
return cljs.core.assoc_in.call(null,r,dynomics.ui.ui.make_kb_path.call(null,kb),((function (vec__53840,k,map__53841,map__53841__$1,f,kb,naym,tools__$1){
return (function (s){
cljs.core.println.call(null,naym);

return f.call(null,s);
});})(vec__53840,k,map__53841,map__53841__$1,f,kb,naym,tools__$1))
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
}),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),(function (p__53890){
var map__53891 = p__53890;
var map__53891__$1 = ((((!((map__53891 == null)))?((((map__53891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53891):map__53891);
var map__53892 = cljs.core.get.call(null,map__53891__$1,new cljs.core.Keyword(null,"messaging","messaging",299215316));
var map__53892__$1 = ((((!((map__53892 == null)))?((((map__53892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53892):map__53892);
var state_updates = cljs.core.get.call(null,map__53892__$1,new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839));
var msgs = cljs.core.get.call(null,map__53892__$1,new cljs.core.Keyword(null,"msgs","msgs",-1176489773));
var write_channel = cljs.core.get.call(null,map__53892__$1,new cljs.core.Keyword(null,"write-channel","write-channel",977573273));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (p__53895){
var map__53896 = p__53895;
var map__53896__$1 = ((((!((map__53896 == null)))?((((map__53896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53896):map__53896);
var vec__53897 = cljs.core.get.call(null,map__53896__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__53897,(0),null);
var y = cljs.core.nth.call(null,vec__53897,(1),null);
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__53896,map__53896__$1,vec__53897,x,y,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (p__53899){
var map__53900 = p__53899;
var map__53900__$1 = ((((!((map__53900 == null)))?((((map__53900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53900):map__53900);
var s = map__53900__$1;
var map__53901 = cljs.core.get.call(null,map__53900__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__53901__$1 = ((((!((map__53901 == null)))?((((map__53901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53901):map__53901);
var space = map__53901__$1;
var selected_nodes = cljs.core.get.call(null,map__53901__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.reduce.call(null,((function (map__53900,map__53900__$1,s,map__53901,map__53901__$1,space,selected_nodes,map__53896,map__53896__$1,vec__53897,x,y,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (r,path){
var tfn = ((((3) === cljs.core.count.call(null,path)))?((function (map__53900,map__53900__$1,s,map__53901,map__53901__$1,space,selected_nodes,map__53896,map__53896__$1,vec__53897,x,y,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (p,_,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,p], null)], null);
});})(map__53900,map__53900__$1,s,map__53901,map__53901__$1,space,selected_nodes,map__53896,map__53896__$1,vec__53897,x,y,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
:dynomics.space.core.mirror_node);
return cljs.core.reduce.call(null,((function (tfn,map__53900,map__53900__$1,s,map__53901,map__53901__$1,space,selected_nodes,map__53896,map__53896__$1,vec__53897,x,y,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (r__$1,p__53904){
var vec__53905 = p__53904;
var cpath = cljs.core.nth.call(null,vec__53905,(0),null);
var cpoint = cljs.core.nth.call(null,vec__53905,(1),null);
return cljs.core.assoc_in.call(null,r__$1,cljs.core.conj.call(null,cpath,new cljs.core.Keyword(null,"position","position",-2011731912)),cpoint);
});})(tfn,map__53900,map__53900__$1,s,map__53901,map__53901__$1,space,selected_nodes,map__53896,map__53896__$1,vec__53897,x,y,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
,r,tfn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),path,space));
});})(map__53900,map__53900__$1,s,map__53901,map__53901__$1,space,selected_nodes,map__53896,map__53896__$1,vec__53897,x,y,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
,s,selected_nodes);
});})(map__53896,map__53896__$1,vec__53897,x,y,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"dont-record","dont-record",577283045),true], null)], null));

return null;
});})(map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (p__53906){
var map__53907 = p__53906;
var map__53907__$1 = ((((!((map__53907 == null)))?((((map__53907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53907):map__53907);
var ss = map__53907__$1;
var vec__53908 = cljs.core.get.call(null,map__53907__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__53908,(0),null);
var y = cljs.core.nth.call(null,vec__53908,(1),null);
var id = cljs.core.get.call(null,map__53907__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__53907__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Select node to move ",path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

if(cljs.core.truth_(path)){
dynomics.space.ui.disable_pan_zoom_BANG_.call(null,ss);
} else {
}

if(cljs.core.truth_(path)){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__53907,map__53907__$1,ss,vec__53908,x,y,id,path,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (p__53910){
var map__53911 = p__53910;
var map__53911__$1 = ((((!((map__53911 == null)))?((((map__53911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53911):map__53911);
var s = map__53911__$1;
var map__53912 = cljs.core.get.call(null,map__53911__$1,new cljs.core.Keyword(null,"space","space",348133475));
var map__53912__$1 = ((((!((map__53912 == null)))?((((map__53912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53912):map__53912);
var selected_nodes = cljs.core.get.call(null,map__53912__$1,new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478));
return cljs.core.assoc_in.call(null,(cljs.core.truth_(path)?cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path):s),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"move-offset","move-offset",2091828833)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(map__53907,map__53907__$1,ss,vec__53908,x,y,id,path,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null));
} else {
}

return null;
});})(map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (p__53915){
var map__53916 = p__53915;
var map__53916__$1 = ((((!((map__53916 == null)))?((((map__53916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53916):map__53916);
var ss = map__53916__$1;
var vec__53917 = cljs.core.get.call(null,map__53916__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__53917,(0),null);
var y = cljs.core.nth.call(null,vec__53917,(1),null);
var path = cljs.core.get.call(null,map__53916__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Unselect node ",path);

dynomics.space.ui.enable_pan_zoom_BANG_.call(null,ss);

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__53916,map__53916__$1,ss,vec__53917,x,y,path,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (s){
return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.disj,path);
});})(map__53916,map__53916__$1,ss,vec__53917,x,y,path,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"unselect","unselect",-1124322706),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Move "),cljs.core.str(cljs.core.get.call(null,path,(2))),cljs.core.str(":"),cljs.core.str(cljs.core.last.call(null,path))].join('')], null)], null));

return null;
});})(map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (p__53919){
var map__53920 = p__53919;
var map__53920__$1 = ((((!((map__53920 == null)))?((((map__53920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53920):map__53920);
var vec__53921 = cljs.core.get.call(null,map__53920__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__53921,(0),null);
var y = cljs.core.nth.call(null,vec__53921,(1),null);
cljs.core.println.call(null,"Add node ");

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__53920,map__53920__$1,vec__53921,x,y,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (s){
return dynomics.space.core.add_node.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"mouse-position","mouse-position",1036604492),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});})(map__53920,map__53920__$1,vec__53921,x,y,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Add node")].join('')], null)], null));

return null;
});})(map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (p__53923){
var map__53924 = p__53923;
var map__53924__$1 = ((((!((map__53924 == null)))?((((map__53924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53924):map__53924);
var vec__53925 = cljs.core.get.call(null,map__53924__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__53925,(0),null);
var y = cljs.core.nth.call(null,vec__53925,(1),null);
var id = cljs.core.get.call(null,map__53924__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.call(null,map__53924__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Connect node ",path);

cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__53924,map__53924__$1,vec__53925,x,y,id,path,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (s){
return dynomics.space.core.make_connections.call(null,cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"space","space",348133475),new cljs.core.Keyword(null,"selected-nodes","selected-nodes",-1281525478)], null),cljs.core.conj,path));
});})(map__53924,map__53924__$1,vec__53925,x,y,id,path,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Connect "),cljs.core.str(id)].join('')], null)], null));

return null;
});})(map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (p__53927){
var map__53928 = p__53927;
var map__53928__$1 = ((((!((map__53928 == null)))?((((map__53928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53928):map__53928);
var mp = cljs.core.get.call(null,map__53928__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var path = cljs.core.get.call(null,map__53928__$1,new cljs.core.Keyword(null,"path","path",-188191168));
cljs.core.println.call(null,"Select node ",path);

if(cljs.core.truth_(path)){
cljs.core.async.put_BANG_.call(null,state_updates,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (map__53928,map__53928__$1,mp,path,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel){
return (function (s){
return dynomics.ui.ui.select_node.call(null,s,path,mp);
});})(map__53928,map__53928__$1,mp,path,map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"verb","verb",-1492655803),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"phase-space-node","phase-space-node",-779091042),new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null));
} else {
}

return null;
});})(map__53891,map__53891__$1,map__53892,map__53892__$1,state_updates,msgs,write_channel))
], null)], null);
}),new cljs.core.Keyword(null,"current-tool","current-tool",-941025603),new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"tools-order","tools-order",-615877648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"load","load",-1318641184)], null),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load","load",-1318641184),new cljs.core.Keyword(null,"remove-selected","remove-selected",1393328073),new cljs.core.Keyword(null,"deselect-all","deselect-all",2035853484),new cljs.core.Keyword(null,"connect-nodes","connect-nodes",2119754380),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"node-types","node-types",1539943342),new cljs.core.Keyword(null,"select-nodes","select-nodes",-1990890851),new cljs.core.Keyword(null,"move-nodes","move-nodes",-633826850),new cljs.core.Keyword(null,"add-nodes","add-nodes",935752478)],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load space",new cljs.core.Keyword(null,"description","description",-1428560544),"Restores the last saved space",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C3",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.get_state_BANG_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Remove selected",new cljs.core.Keyword(null,"description","description",-1428560544),"Removes selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2612",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"minus","minus",-1683561492),new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.comp.call(null,dynomics.space.core.deselect_all,dynomics.space.core.remove_selected_nodes)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Deselect all",new cljs.core.Keyword(null,"description","description",-1428560544),"Deselects all selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2205",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.deselect_all], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Connect nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Connect nodes to make curves \u2312",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u223E",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Save space",new cljs.core.Keyword(null,"description","description",-1428560544),"Saves the space in your browser for later (sorry I will swap this icon for the familiar\n                                    floppy-disk icon when I find it",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u26C1",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.ui.persistence.persist_BANG_], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Node types",new cljs.core.Keyword(null,"description","description",-1428560544),"Choose the type of the selected nodes",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.reduce.call(null,(function (r,p__53930){
var map__53931 = p__53930;
var map__53931__$1 = ((((!((map__53931 == null)))?((((map__53931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53931):map__53931);
var id = cljs.core.get.call(null,map__53931__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,r,id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str("Node type "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("Set the node type of the selected nodes to "),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymap","keymap",-499605268),new cljs.core.Keyword(null,"t","t",-1397832519),cljs.core.keyword.call(null,[cljs.core.str(id)].join('')),cljs.core.keyword.call(null,[cljs.core.str(id)].join(''))], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),dynomics.space.core.set_node_type.call(null,id)], null));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,dynomics.space.core.node_types))], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Select nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Select nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2A03",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"h","h",1109658740)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Move nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Move the selected nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2B09",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"f","f",-1597136552)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Add nodes",new cljs.core.Keyword(null,"description","description",-1428560544),"Add some nodes",new cljs.core.Keyword(null,"icon","icon",1679606541),"+",new cljs.core.Keyword(null,"keybinding","keybinding",1090151579),new cljs.core.Keyword(null,"j","j",-1397974765)], null)])], null)], null));
});
dynomics.ui.ui.left_right_top_view = (function dynomics$ui$ui$left_right_top_view(state){
if(typeof dynomics.ui.ui.t_dynomics$ui$ui53938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui53938 = (function (left_right_top_view,state,meta53939){
this.left_right_top_view = left_right_top_view;
this.state = state;
this.meta53939 = meta53939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui53938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53940,meta53939__$1){
var self__ = this;
var _53940__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui53938(self__.left_right_top_view,self__.state,meta53939__$1));
});

dynomics.ui.ui.t_dynomics$ui$ui53938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53940){
var self__ = this;
var _53940__$1 = this;
return self__.meta53939;
});

dynomics.ui.ui.t_dynomics$ui$ui53938.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui53938.prototype.om$core$IRender$render$arity$1 = (function (this__38982__auto__){
var self__ = this;
var this__38982__auto____$1 = this;
return om.dom.div.call(null,{"className": "ui"},null,om.dom.div.call(null,{"className": "main_ui"},om.dom.div.call(null,{"className": "left_component"},om.core.build.call(null,dynomics.ui.ui.make_function_selector_view,self__.state),om.core.build.call(null,dynomics.space.ui.make_node_types_palette_component,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"dynomics","dynomics",-1896210766),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)),om.core.build.call(null,dynomics.ui.ui.make_history_selector_view,self__.state)),om.dom.div.call(null,{"className": "right_component selectable"},cljs.core.map.call(null,((function (this__38982__auto____$1){
return (function (p__53941){
var vec__53942 = p__53941;
var id = cljs.core.nth.call(null,vec__53942,(0),null);
var component = cljs.core.nth.call(null,vec__53942,(1),null);
return om.core.build.call(null,new cljs.core.Keyword(null,"om-builder","om-builder",1876809590).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(component).call(null,self__.state));
});})(this__38982__auto____$1))
,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.every_QMARK_,cljs.core.identity),cljs.core.juxt.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"om-builder","om-builder",1876809590)),cljs.core.val),cljs.core.dissoc.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466)], null)),new cljs.core.Keyword(null,"function-selector","function-selector",-969376268),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"history","history",-247395220)))))),om.core.build.call(null,dynomics.ui.ui.make_header_view,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"query","query",-1288509510)], null)).call(null,self__.state)));
});

dynomics.ui.ui.t_dynomics$ui$ui53938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"left-right-top-view","left-right-top-view",150328751,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"meta53939","meta53939",1223015699,null)], null);
});

dynomics.ui.ui.t_dynomics$ui$ui53938.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui53938.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui53938";

dynomics.ui.ui.t_dynomics$ui$ui53938.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.ui.ui/t_dynomics$ui$ui53938");
});

dynomics.ui.ui.__GT_t_dynomics$ui$ui53938 = (function dynomics$ui$ui$left_right_top_view_$___GT_t_dynomics$ui$ui53938(left_right_top_view__$1,state__$1,meta53939){
return (new dynomics.ui.ui.t_dynomics$ui$ui53938(left_right_top_view__$1,state__$1,meta53939));
});

}

return (new dynomics.ui.ui.t_dynomics$ui$ui53938(dynomics$ui$ui$left_right_top_view,state,null));
});
dynomics.ui.ui.main_view = (function dynomics$ui$ui$main_view(){
return (function (state,owner){
if(typeof dynomics.ui.ui.t_dynomics$ui$ui53950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
dynomics.ui.ui.t_dynomics$ui$ui53950 = (function (main_view,state,owner,meta53951){
this.main_view = main_view;
this.state = state;
this.owner = owner;
this.meta53951 = meta53951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
dynomics.ui.ui.t_dynomics$ui$ui53950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53952,meta53951__$1){
var self__ = this;
var _53952__$1 = this;
return (new dynomics.ui.ui.t_dynomics$ui$ui53950(self__.main_view,self__.state,self__.owner,meta53951__$1));
});

dynomics.ui.ui.t_dynomics$ui$ui53950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53952){
var self__ = this;
var _53952__$1 = this;
return self__.meta53951;
});

dynomics.ui.ui.t_dynomics$ui$ui53950.prototype.om$core$IWillMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui53950.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
goog.style.installStyles(dynomics.ui.css.make_main_gui_style.call(null));

dynomics.ui.ui.add_events_BANG_.call(null,self__.state);

return dynomics.ui.messaging.setup_updates.call(null,cljs.core.get_in.call(null,self__.state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"state-updates","state-updates",-1617127839)], null)),((function (___$1){
return (function (p__53953){
var map__53954 = p__53953;
var map__53954__$1 = ((((!((map__53954 == null)))?((((map__53954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53954):map__53954);
var f = cljs.core.get.call(null,map__53954__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var a = cljs.core.get.call(null,map__53954__$1,new cljs.core.Keyword(null,"action","action",-811238024));
try{return om.core.transact_BANG_.call(null,self__.state,((function (map__53954,map__53954__$1,f,a,___$1){
return (function (s){
var ss = dynomics.ui.core.update_state.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"action","action",-811238024),(function (){var or__24165__auto__ = a;
if(cljs.core.truth_(or__24165__auto__)){
return or__24165__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),cljs.core.PersistentArrayMap.EMPTY,f);
if(cljs.core.truth_(a)){
cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messaging","messaging",299215316),new cljs.core.Keyword(null,"message-channel","message-channel",-227831873)], null)),a);
} else {
}

return ss;
});})(map__53954,map__53954__$1,f,a,___$1))
);
}catch (e53956){if((e53956 instanceof Error)){
var e = e53956;
return cljs.core.println.call(null,e);
} else {
throw e53956;

}
}});})(___$1))
);
});

dynomics.ui.ui.t_dynomics$ui$ui53950.prototype.om$core$IRender$ = true;

dynomics.ui.ui.t_dynomics$ui$ui53950.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.core.build.call(null,dynomics.ui.ui.left_right_top_view,self__.state);
});

dynomics.ui.ui.t_dynomics$ui$ui53950.prototype.om$core$IDidMount$ = true;

dynomics.ui.ui.t_dynomics$ui$ui53950.prototype.om$core$IDidMount$did_mount$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
return om.core.transact_BANG_.call(null,self__.state,((function (it__$1){
return (function (s){
return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"pan-zoom","pan-zoom",393826277),dynomics.space.ui.add_pan_zoom_BANG_.call(null));
});})(it__$1))
);
});

dynomics.ui.ui.t_dynomics$ui$ui53950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"main-view","main-view",1984529412,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta53951","meta53951",572527317,null)], null);
});

dynomics.ui.ui.t_dynomics$ui$ui53950.cljs$lang$type = true;

dynomics.ui.ui.t_dynomics$ui$ui53950.cljs$lang$ctorStr = "dynomics.ui.ui/t_dynomics$ui$ui53950";

dynomics.ui.ui.t_dynomics$ui$ui53950.cljs$lang$ctorPrWriter = (function (this__24763__auto__,writer__24764__auto__,opt__24765__auto__){
return cljs.core._write.call(null,writer__24764__auto__,"dynomics.ui.ui/t_dynomics$ui$ui53950");
});

dynomics.ui.ui.__GT_t_dynomics$ui$ui53950 = (function dynomics$ui$ui$main_view_$___GT_t_dynomics$ui$ui53950(main_view__$1,state__$1,owner__$1,meta53951){
return (new dynomics.ui.ui.t_dynomics$ui$ui53950(main_view__$1,state__$1,owner__$1,meta53951));
});

}

return (new dynomics.ui.ui.t_dynomics$ui$ui53950(dynomics$ui$ui$main_view,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
});
/**
 * Start the application!
 */
dynomics.ui.ui.start = (function dynomics$ui$ui$start(var_args){
var args53957 = [];
var len__25223__auto___53960 = arguments.length;
var i__25224__auto___53961 = (0);
while(true){
if((i__25224__auto___53961 < len__25223__auto___53960)){
args53957.push((arguments[i__25224__auto___53961]));

var G__53962 = (i__25224__auto___53961 + (1));
i__25224__auto___53961 = G__53962;
continue;
} else {
}
break;
}

var G__53959 = args53957.length;
switch (G__53959) {
case 0:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dynomics.ui.ui.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53957.length)].join('')));

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